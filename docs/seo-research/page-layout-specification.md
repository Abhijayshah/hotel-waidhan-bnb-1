# 📐 Hotel Waidhan Singrauli BNB — Page Layout & Wireframe Specification
> **Document:** `page-layout-specification.md`  
> **Version:** 1.0 (Production Blueprint)  
> **Date:** October 22, 2026  
> **Target Properties:** Mobile-first, responsive, zero-layout-shift (CLS < 0.05), accessibility compliant (WCAG AA).  

---

## 1. Global Design Principles & Visual Language

1. **Aesthetic Direction:** Modern, warm, clean, and authentic. Premium hospitality feel with high contrast, crisp typography (Outfit / Inter), warm accents (slate blue `#1E293B`, deep emerald `#065F46` or warm amber `#D97706` for CTAs), and generous white space.
2. **Device Responsiveness:** True mobile-first layout. Tap targets minimum 48px × 48px. Sticky bottom action bar on mobile viewports (<768px) with one-tap "Call Reception" and "WhatsApp Booking".
3. **Trust & Transparency:** No fake countdown clocks, no fabricated discount popups (*"Only 1 room left!"*), no stock photos masquerading as actual hotel rooms. Real property photos, exact prices, transparent GST policies, verified Google Reviews.
4. **Performance Architecture:** Native WebP images with explicit `width` and `height` attributes; lazy-loading for below-the-fold assets; inline critical CSS; deferred non-critical JavaScript.

---

## 2. Global Header & Navigation Blueprint

### Desktop Layout (≥ 1024px)
* **Top Bar (Utility Strip):**
  * Left: Location badge *"📍 Ambedkar Chowk, 500m from Waidhan Bus Stand, Singrauli MP"*.
  * Right: Direct Call Helpline `+91 78790 28316` | WhatsApp `+91 97702 36735` | 24/7 Front Desk.
* **Main Navigation Bar:**
  * Left: Brand Logo (Hotel Waidhan Singrauli BNB icon + wordmark).
  * Center: Nav links (`Home`, `Rooms & Dorms`, `Pricing`, `Corporate Stays`, `Location`, `Dining`, `Reviews`, `Contact`).
  * Right: Prominent "Book Now" CTA button (Anchor scroll or direct link to `/booking.html`).

### Mobile Layout (< 1024px)
* **Sticky Top Header:** Logo on left, click-to-call icon button, accessible hamburger menu toggle (`aria-label="Toggle Navigation"`).
* **Off-Canvas Slide Menu:** Clean vertical navigation links, quick phone/WhatsApp buttons, address snippet, dark/light theme toggle.
* **Persistent Mobile Bottom Bar (Sticky):**
  * Two equal buttons fixed at the bottom:
    1. **"📞 Call Reception"** (`tel:+917879028316`) — Direct phone dialer.
    2. **"💬 WhatsApp Book"** (`https://wa.me/917879028316?text=...`) — Instant pre-filled booking inquiry.

---

## 3. Homepage Section-by-Section Wireframe (`/index.html`)

### Section 1: Hero Section (Above-the-Fold)
* **Visual Asset:** High-resolution optimized WebP photograph of the hotel facade / entrance with subtle warm gradient overlay for text readability.
* **Text Content:**
  * Sub-eyebrow pill: `📍 Prime Location in Waidhan, Singrauli — Near Bus Stand`
  * H1: `Comfortable Hotel Rooms, Dormitory & PG Stay in Waidhan, Singrauli`
  * Subtitle: `Experience spotless hygienic rooms, 24/7 power backup, high-speed fiber Wi-Fi, and honest tariffs starting from ₹349/day. Walking distance to Waidhan Bus Stand & Ambedkar Chowk.`
* **Interactive Quick-Booking Widget:**
  * Input 1: Check-in Date (HTML5 native date picker).
  * Input 2: Check-out Date.
  * Input 3: Stay Type (Deluxe AC Room, Standard Non-AC Room, Single Dorm Bed, Monthly PG).
  * Input 4: Guests count (1, 2, 3+).
  * Submit CTA: `Check Availability & Best Rates` (Opens direct WhatsApp enquiry or booking form).

### Section 2: Trust & Value Badges Strip
* 4-column desktop / 2-column mobile trust counter:
  1. `⭐ 4.8 / 5.0 Rating` (Verified Guest Reviews on Google Maps).
  2. `⚡ 24/7 Power Backup` (Full generator & inverter backup).
  3. `📶 100 Mbps Fiber Wi-Fi` (Complimentary high-speed internet in every room).
  4. `🧾 100% GST Invoicing` (Instant corporate tax invoices for project visitors).

### Section 3: Accommodation Categories Overview
* Grid of 4 cards:
  1. **Deluxe AC Room:** Photo, badge *"King Bed • Split AC • Smart TV"*, starting ₹899/night, button `View Details`.
  2. **Standard Non-AC Room:** Photo, badge *"Queen Bed • Attached Bath • Cool Air"*, starting ₹599/night, button `View Details`.
  3. **Single Bed Dormitory:** Photo, badge *"Bunk Bed • Personal Locker • Hot Water"*, starting ₹349/night, button `View Details`.
  4. **Monthly PG Stays:** Photo, badge *"Furnished • Zero Brokerage • Meals Available"*, starting ₹4,500/month, button `View Details`.

### Section 4: Transparent Tariff Table & Direct Booking Guarantee
* Clean comparison table displaying room types, occupancy, amenities, daily rates, and the 10% direct booking discount.
* Highlight box: *"Why Book Direct? Save 10% to 15% vs OTA platforms (MakeMyTrip, Goibibo) with zero cancellation penalty on 24-hr advance notice."*

### Section 5: Core Property Amenities
* 6-card interactive grid with SVG icons:
  * 24/7 Front Desk & Security (CCTV monitored premises).
  * Uninterrupted Power & Hot Geyser Water.
  * Fast Wi-Fi for Corporate Work.
  * Fresh RO Filtered Drinking Water.
  * Dedicated Two-Wheeler & Car Parking.
  * Pure Vegetarian Breakfast & Homestyle Meals on Order.

### Section 6: Corporate & Industrial Transit Proximity
* Targeted at engineers and project contractors visiting NTPC, NCL, Sasan Power:
  * Headline H2: `Centrally Located for Singrauli's Industrial & Corporate Hubs`
  * Graphic distance grid:
    * Waidhan Inter-State Bus Stand: 500 meters (5 min walk).
    * Singrauli District Collectorate & Court: 2.1 km (6 min drive).
    * NTPC Vindhyanagar: 10.2 km (15 min drive).
    * Northern Coalfields Ltd (NCL) HQ: 15.4 km (22 min drive).
    * Singrauli Railway Station: 16.5 km (25 min drive).
    * Reliance Sasan Power Plant: 18.2 km (25 min drive).
  * CTA: `Plan Corporate Group Stay / Inquire for GST Billing`.

### Section 7: Photo Gallery Preview
* 6 curated thumbnail images with lightroom zoom capability:
  * Exterior building & reception desk.
  * Deluxe AC room setup with crisp white linens.
  * Clean attached washroom with modern sanitary fittings.
  * Dormitory bunk beds showing neat layout and individual lockers.
  * Dining / Common seating area.
  * Parking space.
* CTA link: `View Full Hotel Photo Gallery →`.

### Section 8: In-House Dining & Home-Style Meals
* Description of fresh breakfast (Poha, Aloo Paratha, Upma, Masala Tea), lunch/dinner vegetarian thali, and room service.
* Clear notice: *"Freshly prepared upon request to ensure maximum hygiene."*

### Section 9: Verified Guest Reviews & Testimonials
* Carousel / 3-column cards featuring authentic guest feedback quoting:
  * Business traveller review: *"Cleanest room in Waidhan at this price point. Power backup worked perfectly during grid cuts."*
  * Transit solo traveller review: *"Dormitory bed was very neat, clean washrooms, and only 5 minutes walk from Waidhan bus stand."*
  * Long-stay guest review: *"Stayed for 2 months during my NTPC project. Homely atmosphere, safe, and helpful management."*
* Link to Google Maps Business Profile to write or verify reviews.

### Section 10: Location Map & Driving Directions
* Full-width embedded Google Map centered on CID `500647895475654140` (`24.0629752, 82.6300981`).
* Step-by-step written directions for travellers arriving from Bus Stand or Station.
* One-tap button: `Open Directions in Google Maps App`.

### Section 11: Frequently Asked Questions (FAQ Accordion)
* 6 high-value questions marked up with `FAQPage` schema:
  1. What is the check-in and check-out time at Hotel Waidhan BNB?
  2. How far is the hotel from Waidhan Inter-State Bus Stand?
  3. Do you offer single dormitory beds for solo transit travellers?
  4. Is power backup available during electricity cuts?
  5. Can I get a GST invoice for company reimbursement?
  6. Are unmarried couples or families allowed? (Strict policy requirement for local compliance).

### Section 12: Footer & Compliance Strip
* 4-column layout:
  * Col 1: Hotel Name, Logo, About summary, Govt Registration / Trade License note.
  * Col 2: Quick Links (Rooms, Dormitory, Pricing, Corporate Stays, Location).
  * Col 3: Contact Details (Ambedkar Chowk, Waidhan, Singrauli MP 486886; Phones: +91 78790 28316, +91 97702 36735, +91 91093 02812).
  * Col 4: Trust Links (Privacy Policy, Terms & Conditions, Cancellation Policy, Guest Check-in Rules).
* Bottom Copyright strip with schema-compliant NAP.

---

## 4. Internal Page Layout Specifications

### A. Rooms & Accommodations Hub (`/rooms.html`)
* **Header / Breadcrumb:** `Home > Rooms & Accommodations`.
* **Hero Banner:** Headline *"Clean & Budget-Friendly Stays in Waidhan Singrauli"*.
* **Filter Tabs:** `All`, `Deluxe AC Rooms`, `Standard Rooms`, `Dormitory Bunks`, `Monthly PG`.
* **Room Cards (Vertical Stack or 2-column Grid):**
  * Image carousel (3 photos per card).
  * Title, room size, bed type, max occupancy.
  * Pill tags: `Attached Bath`, `High-Speed Wi-Fi`, `Power Backup`, `LED TV`.
  * Price block: *"₹899 / night + taxes (Direct Booking Price)"*.
  * Two CTAs: `View Full Details` and `Book on WhatsApp`.
* **Comparative Inclusions Matrix Table:** Clear checkmarks for AC, TV, Hot Water, Breakfast included, Wi-Fi.

### B. Single Room Detail Pages (`/rooms/deluxe-ac-room.html`, `/rooms/standard-room.html`)
* **Breadcrumb:** `Home > Rooms > Deluxe AC Room`.
* **Sticky Gallery & Booking Bar:** High-res image slider on left (or top on mobile); reservation enquiry card sticky on right.
* **Detailed Specs:** Mattress quality, room dimensions, ventilation, electrical socket types, bathroom fittings.
* **House Rules Specific to Room:** Smoking rules, visitor policy, check-in ID mandate.
* **Direct Booking Box:** Select dates, number of guests, instant price calculation with direct 10% coupon applied.

### C. Dormitory Landing Page (`/dormitory.html`)
* **Breadcrumb:** `Home > Dormitory Stay`.
* **Target Audience Focus:** Solo transit travellers, bus passengers, exam candidates, budget technicians.
* **Feature Grid:**
  * Individual bunk beds with freshly laundered cotton sheets.
  * Personal lockable steel cabinet/locker.
  * Reading light & universal multi-pin plug point at each bed.
  * Common shared washrooms cleaned 3x daily with hot water geyser.
* **Daily Tariff:** Starting ₹349 / bed.
* **CTA:** WhatsApp reservation for late-night arrivals.

### D. Monthly PG & Long-Term Stay Page (`/pg-rooms.html`)
* **Breadcrumb:** `Home > Monthly PG & Long-Term Stay`.
* **Target Audience Focus:** Industrial contract workers, NTPC trainees, bank POs, project supervisors.
* **Package Tiers:**
  * Tier 1: Single Occupancy Room (Furnished, Wi-Fi, electricity included up to quota).
  * Tier 2: Double Sharing Room (Budget friendly).
  * Tier 3: Stay + Mess Food Plan (2 meals daily).
* **Application Form:** Name, Company/Institution, Expected Duration of Stay, Move-in Date, Contact Number.

### E. Corporate & Business Stays Page (`/corporate-stay.html`)
* **Breadcrumb:** `Home > Corporate Stays`.
* **B2B Features:** GST compliant billing, corporate rates, quiet work desk, express check-in.
* **Distance Matrix:** Table showing exact road distances and travel times to NTPC, NCL, Sasan, and Singrauli Collectorate.
* **Corporate Enquiry Form:** Company name, GSTIN, number of executive rooms, contract period.

### F. Location & Directions Page (`/location.html`)
* **Breadcrumb:** `Home > Location & Directions`.
* **Interactive Map:** Google Maps iframe + direct deep links to Google Maps app.
* **Transit Breakdown:**
  * Arriving from Bus Stand: 500 meters, 5-minute easy flat walk via Ambedkar Chowk.
  * Arriving from Singrauli (SGRL) Railway Station: 16.5 km, regular auto-rickshaws available (₹30–₹40 shared, ₹200–₹250 private reserve).
  * Arriving by Car: Secure on-site parking.
* **Nearby Landmarks:** Banks, ATMs, Medical stores within 200m.

### G. Travel Guide Pages (`/guide/*`)
* **Breadcrumb:** `Home > Travel Guide > Article Title`.
* **Editorial Layout:** Clean single-column reading typography (max-width 750px), table of contents with jump anchors, embedded route maps, distance tables, photo illustrations with captions.
* **In-Article Conversion Cards:** Floating or section-end card inviting readers to stay at Hotel Waidhan BNB while exploring Singrauli.
