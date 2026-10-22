# 📐 Hotel Waidhan Singrauli BNB — Page-by-Page Design & Component Specification
> **Document:** `06-page-by-page-design-spec.md`  
> **Target Framework:** Next.js 14+ App Router  
> **Visual System:** Design Tokens in `globals.css` (Glassmorphic modern, mobile-first)  
> **Status:** Production-Ready Wireframe Blueprint  

---

## 1. Homepage (`/` or `app/page.tsx`)

### A. Specifications
* **Page Objective:** Primary conversion engine, city authority hub, and direct booking driver.
* **Target Audience:** Outstation business engineers, bus transit travellers, and comparing shoppers.
* **Search Intent:** Commercial Investigation & Local Navigational (*"Hotel in Waidhan"*, *"Best hotel in Waidhan Singrauli"*).
* **SEO Metadata:**
  * Title: `Hotel Waidhan Singrauli BNB | Best Hotel in Waidhan, MP`
  * Description: `Looking for the best hotel in Waidhan, Singrauli? Hotel Waidhan BNB offers spotless AC rooms, dormitory bunks & monthly PG stays near Bus Stand. Book direct & save!`
  * Canonical: `https://hotelwaidhanbnb.com`

### B. Wireframe Structure (Top-to-Bottom)
1. **Sticky Global Header:** Brand logo, location badge (*"Ambedkar Chowk, 500m to Bus Stand"*), click-to-call helpline, theme toggle, and "Book Now" CTA.
2. **Hero Section (Above-the-Fold):**
   * Preloaded high-res WebP property facade photograph.
   * Eyebrow pill: `📍 Prime Central Location — 500m to Waidhan Bus Stand`
   * H1: `Best Hotel in Waidhan Singrauli — Comfort Rooms, Dormitory & PG Stay`
   * Lead text: Value proposition covering cleanliness, 24/7 power backup, 100 Mbps Wi-Fi, and honest tariffs starting at ₹349.
   * **Quick Booking Bar Component:** Interactive Check-in date, Check-out date, Room Tier, Guest count, and button `Check Rates & Reserve`.
3. **Trust & Social Proof Badges Strip:**
   * ⭐ 4.8 / 5.0 Google Reviews | ⚡ 24/7 Power Generator | 📶 100 Mbps Wi-Fi | 🧾 100% GST Invoicing.
4. **Accommodation Categories Grid:**
   * 4 Cards (Deluxe AC Room, Standard Room, Single Dorm Bunk, Monthly PG).
   * High-res 4:3 photo, amenity pills, tariff block (*"From ₹349/day"*), and dual CTAs: `View Details` and `Book on WhatsApp`.
5. **Transparent Tariff Comparison Table:**
   * Daily, weekly, and monthly rates across all room types with direct booking discount banner.
6. **Core Property Amenities:**
   * 6-card grid with SVG icons: 24/7 Power, Fiber Wi-Fi, Running Hot Water, Parking, RO Water, CCTV Security.
7. **B2B Industrial & Transit Proximity Section:**
   * Interactive distance matrix card: Waidhan Bus Stand (500m), Collectorate (2.1 km), NTPC Vindhyanagar (10.2 km), NCL HQ (15.4 km), Sasan Power (18.2 km).
8. **In-House Dining & Homestyle Meals:**
   * Vegetarian breakfast, freshly cooked lunch/dinner thalis on order, and 24/7 tea/coffee.
9. **Verified Guest Reviews Carousel:**
   * Real testimonials from corporate engineers, bus transit solo guests, and long-stay residents.
10. **Interactive Location & Map Section:**
    * Google Maps embed centered on CID `500647895475654140` with deep link button `Open in Google Maps`.
11. **Frequently Asked Questions Accordion:**
    * 6 high-value questions marked up with `FAQPage` schema.
12. **Global Footer:**
    * 4-column legal NAP, quick links, policies, and Google review link.

### C. Mobile Layout & Behavior (< 640px)
* Header collapses to hamburger drawer with immediate tap-to-call icon.
* Quick-booking bar stacks vertically with native mobile date pickers.
* Persistent **Sticky Bottom Action Bar** fixed at bottom: `📞 Call Reception` + `💬 WhatsApp Booking`.

### D. Analytics Events to Track
* `click_hero_booking_widget`
* `click_whatsapp_direct` (Params: `source=homepage_hero`)
* `click_phone_call` (Params: `source=homepage_header`)
* `view_room_card` (Params: `room_type=deluxe|standard|dormitory|pg`)
* `click_open_directions_maps`

---

## 2. Rooms & Accommodations Hub (`/rooms` or `app/rooms/page.tsx`)

### A. Specifications
* **Page Objective:** Comprehensive catalog displaying all available accommodation formats with instant filtering.
* **Target Audience:** Travellers comparing room types, budgets, and amenities.
* **Search Intent:** Commercial Catalog (*"Affordable rooms in Waidhan Singrauli"*, *"Rooms in Waidhan"*).
* **SEO Metadata:**
  * Title: `Rooms in Waidhan | Affordable AC & Non-AC Hotel Rooms Singrauli`
  * Description: `Explore clean, affordable rooms in Waidhan, Singrauli. Choose from Deluxe AC, Standard Non-AC rooms, Dormitory bunks, and PG rooms with modern amenities. Book online.`
  * Canonical: `https://hotelwaidhanbnb.com/rooms`

### B. Wireframe Structure
1. **Breadcrumb:** `Home > Rooms & Accommodations`
2. **Page Header:** H1 `Affordable Rooms & Stays in Waidhan, Singrauli` + filter tabs (`All`, `Deluxe AC`, `Standard Non-AC`, `Dormitory Bunk`, `Monthly PG`).
3. **Room Cards Grid:** 
   * Each card features: 3-photo carousel, badge (*"Most Popular"*, *"Best Value"*), capacity, bed type, inclusions, price, and direct WhatsApp booking button.
4. **Comprehensive Room Features Matrix Table:**
   * Side-by-side comparison of amenities (AC, TV, Wi-Fi, Hot Geyser, Breakfast, Room Service).
5. **Reservation & House Rules:** Check-in 12:00 PM, Check-out 11:00 AM, Valid Govt ID mandate.

---

## 3. Single Room Detail Pages (`/rooms/[slug]` or `app/rooms/[slug]/page.tsx`)

### A. Individual Room Specifications
* **Deluxe AC Room (`/rooms/deluxe-ac-room`):**
  * H1: `Deluxe AC Room in Waidhan — Executive Comfort & Amenities`
  * Focus: King bed, 1.5-ton split AC, 32" Smart LED TV, attached geyser bathroom, **ergonomic work desk**, 100 Mbps Wi-Fi.
  * Target: Engineers, corporate auditors, couples (Tariff: From ₹899/night).
* **Standard Non-AC Room (`/rooms/standard-room`):**
  * H1: `Standard Budget Room in Waidhan — Clean, Cool & Economical`
  * Focus: Queen bed, ceiling fan, natural window ventilation, attached clean bath, LED TV (Tariff: From ₹599/night).
  * Target: Sales representatives, budget transit travellers.
* **Dormitory Stay (`/rooms/dormitory`):**
  * H1: `Dormitory Accommodation in Waidhan Singrauli — Single Beds from ₹349`
  * Focus: Sturdy bunk bed, fresh laundered sheets, **personal lockable steel locker**, individual USB charging port, reading light, shared hygienic washrooms with geyser.
  * Target: Solo bus passengers, exam aspirants, drivers (Tariff: From ₹349/day).
* **Monthly PG Room (`/rooms/pg-rooms`):**
  * H1: `Furnished Rooms for Rent & PG Accommodation in Waidhan, Singrauli`
  * Focus: Furnished single/double room, free electricity, Wi-Fi, RO water, mess food option, zero brokerage.
  * Target: NTPC/NCL apprentices, banking POs, industrial contractors (Tariff: From ₹4,500/month).

### B. Common Detail Page Wireframe
* **Two-Column Desktop Layout:**
  * Left Column (65%): Photo gallery with lightbox, room specs, detailed description, list of verified amenities, house policies.
  * Right Column (35% - Sticky): Live booking enquiry card with date inputs, dynamic price estimate, 10% direct discount code, and `Book via WhatsApp` CTA.

---

## 4. Location & Distance Matrix (`/location` or `app/location/page.tsx`)

### A. Specifications
* **Page Objective:** Eliminate transit anxiety, prove proximity to Bus Stand and industrial complexes.
* **Search Intent:** Navigational / Local Proximity (*"Hotel near Waidhan Bus Stand"*, *"Hotel near Ambedkar Chowk"*).
* **SEO Metadata:**
  * Title: `Hotel Near Waidhan Bus Stand & Ambedkar Chowk | Hotel Waidhan BNB`
  * Description: `Hotel Waidhan BNB is located at Ambedkar Chowk, just 500m (5 min walk) from Waidhan Inter-State Bus Stand. View driving directions, map route & distance to Singrauli Station.`

### B. Wireframe Structure
1. **Interactive Google Map:** Full-width responsive embed of CID `500647895475654140` (`24.0629752, 82.6300981`).
2. **Step-by-Step Walking Route Guide:**
   * Illustrated 5-minute walking directions from Waidhan Inter-State Bus Stand via Ambedkar Chowk.
3. **Industrial Distance Matrix Table:**
   * Exact road distances and driving times to NTPC Vindhyanagar (10.2 km), NCL Headquarters (15.4 km), Reliance Sasan Power (18.2 km), Singrauli Railway Station SGRL (16.5 km), and Singrauli District Collectorate (2.1 km).
4. **Local Transit & Auto Rickshaw Advisory:**
   * Auto fare guidelines from Singrauli (SGRL) station to Waidhan (₹30–₹40 shared, ₹200–₹250 private reserve).

---

## 5. Corporate & Business Stays (`/corporate-stay` or `app/corporate-stay/page.tsx`)

### A. Specifications
* **Page Objective:** Convert B2B industrial accounts, procurement managers, and engineering contractors.
* **Search Intent:** Commercial B2B (*"Business hotel in Singrauli"*, *"Hotel near NTPC Vindhyanagar"*).
* **SEO Metadata:**
  * Title: `Business Hotel in Singrauli | Stays Near NTPC & NCL Waidhan`
  * Description: `Tailored business stays in Waidhan Singrauli for engineers, auditors & contractors. 100 Mbps Wi-Fi, 24/7 power backup, instant GST invoices & central location near NTPC & NCL.`

### B. Wireframe Structure
1. **Hero Banner:** Executive room visual with laptop setup and fast Wi-Fi badge.
2. **Corporate Amenities Grid:**
   * 100% Compliant Computer-Generated GST Invoices for immediate corporate reimbursement.
   * 100 Mbps Dedicated Fiber Internet with uninterrupted battery/inverter backup.
   * Ergonomic work desks and quiet working environment.
   * Express laundry and garment pressing for business attire.
3. **Corporate Bulk Tie-Up Rate Request Form:**
   * Company Name, GSTIN, Expected Room Nights per Month, Contact Person, and WhatsApp number.

---

## 6. Contact & 24/7 Front Desk (`/contact` or `app/contact/page.tsx`)

### A. Specifications
* **Page Objective:** Friction-free direct connection with human front-desk receptionists.
* **Search Intent:** Direct Contact (*"Hotel booking contact number Singrauli"*, *"Hotel Waidhan phone number"*).
* **SEO Metadata:**
  * Title: `Contact Hotel Waidhan Singrauli BNB | Phone & WhatsApp Desk`
  * Description: `Contact Hotel Waidhan Singrauli BNB 24/7. Call +91 78790 28316, +91 97702 36735, or WhatsApp us for instant room bookings, directions & corporate enquiries.`

### B. Wireframe Structure
1. **Emergency Helpline Banner:** Click-to-call button for late-night bus arrivals.
2. **Direct Contact Cards (3 Columns):**
   * Primary Desk: `+91 78790 28316` (24/7 Direct Reception).
   * WhatsApp Desk: `+91 97702 36735` (Instant chat & photo sharing).
   * Alternate Helpline: `+91 91093 02812` (Manager on duty).
3. **Interactive Contact & Reservation Form:**
   * Client-side validated form with anti-spam honeypot field.
4. **Physical Location Card:** Full postal address, landmark description, and interactive map embed.

---

## 7. Local Sightseeing & Travel Guides (`/guide/*` or `app/guide/[slug]/page.tsx`)

### A. Travel Guide Inventory
1. **Places to Visit in Singrauli (`/guide/places-to-visit-in-singrauli`):**
   * Detailed editorial guide covering Mada Rock-Cut Caves (32 km), Jaljaliya Caves, Rihand Dam (Govind Ballabh Pant Sagar), Rose Garden NCL, and Lake Park Vindhyanagar.
2. **Where to Stay in Waidhan Singrauli (`/guide/where-to-stay-in-waidhan`):**
   * Impartial comparison of staying in Waidhan town center vs Morwa (railway hub) vs Vindhyanagar (plant colony). Explains why Waidhan near Ambedkar Chowk offers superior safety, dining, and transit access.
3. **How to Reach Waidhan Singrauli (`/guide/how-to-reach-waidhan`):**
   * Transport logistics: Train routes to Singrauli (SGRL) and Chopan, bus timetables from Varanasi, Rewa, and Jabalpur, airport connections (Varanasi VNS / Prayagraj IXD), and local auto rickshaw fares.

### B. Common Editorial Layout
* Reading-optimized single-column layout (max-width 840px).
* Table of contents with smooth jump anchors.
* Floating or in-content **Hotel Waidhan BNB Booking Callout Card** linking directly to `/booking` and `/rooms`.
