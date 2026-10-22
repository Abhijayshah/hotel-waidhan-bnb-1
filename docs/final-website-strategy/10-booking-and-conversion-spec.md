# 💳 Hotel Waidhan Singrauli BNB — Booking & Conversion Architecture Specification
> **Document:** `10-booking-and-conversion-spec.md`  
> **Primary Conversion Objective:** Zero-Commission Direct Bookings via WhatsApp & Phone Helpline  
> **Framework Target:** Next.js 14+ Client Form & Server Action Integration  
> **Status:** Approved Conversion Funnel  

---

## 1. Evaluation of Booking Models: Regional Reality in Waidhan

We evaluated two distinct booking architectures against the actual commercial behavior of hotel guests in Singrauli district:

```
[MODEL A: Enquiry-First & WhatsApp Bridge (Recommended MVP)]
User Searches Google ──► Next.js Page ──► Selects Dates/Room ──► 1-Tap WhatsApp/Call ──► Instant Room Held
  * Zero payment drop-off
  * Zero gateway transaction fees (Saves 2.0% + GST)
  * Fits late-night bus arrivals & corporate cash/UPI payment preference

[MODEL B: Full Online Gateway Checkout (Phase 2 Extension)]
User Searches Google ──► Next.js Page ──► Selects Dates/Room ──► Enters Card/UPI ──► Payment Gateway ──► DB Lock
  * Higher drop-off on 4G networks
  * Requires merchant KYC and complex refund/cancellation webhook infrastructure
```

### Strategic Recommendation:
* **Phase 1 (Immediate Launch):** Deploy **Model A (Enquiry-First & Instant WhatsApp/Call Reservation)**. This eliminates user hesitation, guarantees 100% reservation success on regional mobile networks, and directs the guest straight to the front desk.
* **Phase 2 (Future Extension):** Build **Model B** with headless Supabase PostgreSQL and Razorpay/Cashfree once direct monthly traffic exceeds 1,500 unique visitors and merchant accounts are approved.

---

## 2. Phase 1 Conversion Funnel: The WhatsApp Pre-Filled Bridge

### Step 1: User Date & Room Selection (`QuickBookingWidget.tsx`)
The user selects:
1. **Check-in Date:** HTML5 date picker (defaults to today; minimum date = today).
2. **Check-out Date:** Minimum date = Check-in Date + 1 day.
3. **Room Type:** Dropdown selector (`Deluxe AC Room`, `Standard Non-AC Room`, `Single Dormitory Bed`, `Monthly PG Stay`).
4. **Guests:** Counter selector (1, 2, 3, 4+ Adults).

### Step 2: Payload Generation & Encoding
Upon clicking `"Book on WhatsApp"`, client-side JavaScript formats and URL-encodes a standardized reservation payload:

```javascript
const phoneNumber = "917879028316";
const message = `Namaste Hotel Waidhan BNB,
I want to reserve a room:
- Room Type: ${roomType}
- Check-in: ${checkInDate}
- Check-out: ${checkOutDate}
- Guests: ${guestCount}
- Promo Code: DIRECT10 (10% Direct Discount)

Please confirm room availability and total price. Thank you!`;

const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
window.open(whatsappUrl, '_blank');
```

### Step 3: Front Desk Action
The reception desk receives the structured WhatsApp message on their smartphone (`+91 78790 28316` or `+91 97702 36735`), verifies physical room availability in their register, replies with instant confirmation and bank/UPI QR details, and marks the room reserved.

---

## 3. Contact & Enquiry Form Specification (`app/contact/`)

For guests preferring an on-site inquiry rather than launching WhatsApp:

### Form Fields:
* `guest_name`: Required (Min 3 characters).
* `phone_number`: Required (10-digit Indian mobile number validation `/^[6-9]\d{9}$/`).
* `room_type`: Dropdown selector.
* `dates`: Check-in & Check-out dates.
* `message`: Optional special requests (e.g., early check-in, GST invoice, extra mattress).
* `hp_field` (Anti-Spam Honeypot): Invisible CSS hidden field. If populated by an automated bot, submission is rejected silently.

### Server Action Validation (`app/actions/enquiry.ts`):
```typescript
'use server';

export async function submitEnquiry(formData: FormData) {
  // Honeypot check
  if (formData.get('hp_field')) {
    return { success: false, error: 'Spam detected' };
  }

  const name = formData.get('guest_name') as string;
  const phone = formData.get('phone_number') as string;
  const room = formData.get('room_type') as string;

  // Validation
  if (!name || name.length < 3) return { success: false, error: 'Valid name required' };
  if (!phone || !/^[6-9]\d{9}$/.test(phone)) return { success: false, error: 'Valid 10-digit phone required' };

  // Dispatch notification via Email or WhatsApp API
  console.log(`New Lead Received: ${name} (${phone}) for ${room}`);

  return { success: true, message: 'Reservation request received! Our desk will call you within 15 minutes.' };
}
```

---

## 4. Phase 2 Online Gateway Data Architecture (Future Blueprint)

When direct online payment is activated, the application will integrate with **Supabase PostgreSQL** via Next.js Server Actions:

```
┌──────────────────┐       ┌────────────────────┐       ┌──────────────────────┐
│  Next.js Server  │ ────► │  Supabase Postgres │ ────► │  Razorpay Gateway    │
│  Action (Lock)   │       │  (Atomic Reserve)  │       │  (Checkout / UPI)    │
└──────────────────┘       └────────────────────┘       └──────────────────────┘
         ▲                                                         │
         │                                                         │
         └───────────── Webhook Verification (/api/razorpay) ◄─────┘
                        (Status: PAID, HMAC SHA256 Signature Validated)
```

### Database Entity Relational Model:
* `rooms`: `id, room_number, type_id, status (available/occupied/maintenance)`.
* `room_types`: `id, name, slug, base_price, max_guests, amenities`.
* `bookings`: `id, booking_ref, guest_id, room_type_id, check_in, check_out, total_amount, payment_status, created_at`.
* `payments`: `id, booking_id, razorpay_order_id, razorpay_payment_id, amount, status`.

### Strict Payment Security Rule:
**Never treat client-side checkout redirection as proof of successful payment.** Room reservation is marked `CONFIRMED` **only** upon cryptographic signature verification of Razorpay’s server-to-server webhook:
```typescript
const crypto = require('crypto');
const expectedSignature = crypto
  .createHmac('sha256', process.env.RAZORPAY_WEBHOOK_SECRET)
  .update(rawBody)
  .digest('hex');

if (expectedSignature !== req.headers['x-razorpay-signature']) {
  return new Response('Invalid Signature', { status: 400 });
}
```

---

## 5. Analytics & Conversion Event Telemetry (GA4)

```typescript
// Client-side analytics wrapper lib/analytics/events.ts
export function trackBookingEvent(eventName: string, params: Record<string, any>) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, params);
  }
}
```

### Monitored Conversion Events:
1. `whatsapp_booking_click`: Fired when user triggers pre-filled WhatsApp message (Params: `room_type`, `dates`, `guests`).
2. `phone_call_click`: Fired when user clicks any `tel:+917879028316` button (Params: `location=header|footer|sticky_bar`).
3. `enquiry_form_submit`: Fired upon successful contact/enquiry submission.
4. `open_map_directions`: Fired when user clicks to open directions in Google Maps app.
