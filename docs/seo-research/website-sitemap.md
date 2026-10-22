# 🗺️ Hotel Waidhan Singrauli BNB — Website Sitemap & Information Architecture
> **Document:** `website-sitemap.md`  
> **Version:** 1.0 (Production Blueprint)  
> **Date:** October 22, 2026  
> **Status:** Final Strategic Architecture  

---

## 1. Information Architecture Overview

The site architecture for **Hotel Waidhan Singrauli BNB** is engineered around a flat, shallow crawl hierarchy (maximum 2 to 3 clicks from homepage to any transactional page). It bridges both **short-term hotel/transit guests** and **extended-stay PG/corporate travellers**, exploiting keyword opportunities completely neglected by competitors in Singrauli.

```
Hotel Waidhan Singrauli BNB (/)
├── Rooms & Accommodations (/rooms.html)
│   ├── Deluxe AC Room (/rooms/deluxe-ac-room.html)
│   ├── Standard Non-AC Room (/rooms/standard-room.html)
│   ├── Dormitory Stay (/dormitory.html)
│   └── Monthly PG & Long Stay (/pg-rooms.html)
├── Rates & Transparent Pricing (/pricing.html)
├── Online Booking & Enquiry (/booking.html)
├── Location & Distance Matrix (/location.html)
├── Corporate & Business Stays (/corporate-stay.html)
├── Dining & Room Service (/dining.html)
├── Photo Gallery (/gallery.html)
├── Amenities & Facilities (/amenities.html)
├── Guest Reviews & Testimonials (/reviews.html)
├── Frequently Asked Questions (/faq.html)
├── About Us & Hospitality Story (/about.html)
├── Contact & 24/7 Front Desk (/contact.html)
├── Local Travel Guide (/guide/)
│   ├── Places to Visit in Singrauli (/guide/places-to-visit-in-singrauli.html)
│   ├── Where to Stay in Waidhan (/guide/where-to-stay-in-waidhan.html)
│   └── How to Reach Waidhan Singrauli (/guide/how-to-reach-waidhan.html)
└── Trust & Legal Policies
    ├── Privacy Policy (/privacy-policy.html)
    ├── Terms & Conditions (/terms.html)
    ├── Cancellation & Refund Policy (/cancellation-policy.html)
    ├── Guest Check-in Policies (/guest-policies.html)
    ├── Booking Confirmation (/booking-confirmation.html) [noindex]
    └── Custom 404 Error Page (/404.html) [noindex]
```

---

## 2. Comprehensive Page-by-Page Specification (24 Pages)

### Page 1: Homepage (`/` or `/index.html`)
* **Purpose:** Core conversion hub, brand anchor, and primary organic landing page for high-volume city queries.
* **Target Keywords:** *Hotel in Waidhan*, *Best hotel in Waidhan Singrauli*, *Hotels in Singrauli Madhya Pradesh*, *Hotel Waidhan Singrauli BNB*.
* **Search Intent:** Commercial Investigation & Local Navigational.
* **Key Content Sections:**
  1. Sticky top navigation with click-to-call, WhatsApp CTA, and quick book button.
  2. Hero section with real property exterior/interior image, location badge (*"Ambedkar Chowk, 500m to Bus Stand"*), and quick booking widget (Check-in, Check-out, Guests, Room Type).
  3. Trust metrics banner: 4.8★ Rating, Zero Hidden Charges, 24/7 Power Backup, Instant GST Invoice.
  4. Accommodation Categories Grid (Deluxe AC, Standard Room, Dormitory Bunks, Monthly PG).
  5. Transparent Tariff Summary (Starting ₹349 Dorm / ₹599 Room).
  6. Core Verified Amenities Carousel (High-speed Wi-Fi, RO Water, Split AC, Parking, CCTV Security).
  7. Corporate & Industrial Transit Banner (Distances to NTPC Vindhyanagar, NCL, Sasan).
  8. Verified Guest Testimonials & Google Review badges.
  9. Interactive Google Map embed with driving/walking routes.
  10. FAQs on Check-in/Check-out, Bus Stand proximity, and booking policies.
  11. Footer with comprehensive NAP, direct phone lines, WhatsApp link, and social profiles.
* **Main CTA:** "Book Room Online" / "Instant WhatsApp Booking (+91 78790 28316)".
* **Internal Links:** `/rooms.html`, `/dormitory.html`, `/pg-rooms.html`, `/pricing.html`, `/booking.html`, `/location.html`, `/corporate-stay.html`, `/contact.html`.
* **Indexation:** `index, follow` (Canonical: `https://hotelwaidhanbnb.com/`).
* **Required Schema:** `Hotel`, `BedAndBreakfast`, `LocalBusiness`, `PostalAddress`, `GeoCoordinates`, `FAQPage`.

---

### Page 2: About the Hotel (`/about.html`)
* **Purpose:** Establish brand authority, hospitality philosophy, safety standards, and local roots in Singrauli.
* **Target Keywords:** *About Hotel Waidhan BNB*, *Comfort Stay & PG Waidhan history*, *Best hospitality in Waidhan*.
* **Search Intent:** Informational & Navigational.
* **Key Content Sections:** Our Story, Commitment to Cleanliness, Local Host Team, Proximity Advantage, Safety & Sanitization protocols.
* **Main CTA:** "Contact Our Desk" / "Explore Rooms".
* **Internal Links:** `/rooms.html`, `/contact.html`, `/location.html`.
* **Indexation:** `index, follow`.
* **Required Schema:** `AboutPage`, `BreadcrumbList`.

---

### Page 3: Rooms & Accommodation Master Page (`/rooms.html`)
* **Purpose:** Showcase all available room categories, bed layouts, tariffs, and direct booking options.
* **Target Keywords:** *Rooms in Waidhan*, *Affordable rooms in Waidhan Singrauli*, *Budget rooms in Waidhan*, *Accommodation in Waidhan*.
* **Search Intent:** Commercial / Transactional.
* **Key Content Sections:** Filterable Room Cards (All, AC Rooms, Non-AC Rooms, Dormitory, PG), High-res room photos, Amenity badges, Real-time pricing, Direct Book buttons.
* **Main CTA:** "Select Room & Reserve" / "Call for Bulk Corporate Booking".
* **Internal Links:** `/rooms/deluxe-ac-room.html`, `/rooms/standard-room.html`, `/dormitory.html`, `/pg-rooms.html`, `/pricing.html`.
* **Indexation:** `index, follow`.
* **Required Schema:** `ItemList` (of `HotelRoom`), `BreadcrumbList`.

---

### Page 4: Deluxe AC Room (`/rooms/deluxe-ac-room.html`)
* **Purpose:** High-conversion landing page for business executives, families, and premium budget travellers.
* **Target Keywords:** *Deluxe AC room in Waidhan*, *AC hotel room Singrauli*, *Executive room Waidhan*.
* **Search Intent:** Transactional.
* **Key Content Sections:** Photo gallery, Room Specs (King bed, 1.5-ton split AC, 32" Smart LED TV, attached bath with geyser, work desk, 100 Mbps Wi-Fi), Tariff details, Inclusions, Guest reviews for this room.
* **Main CTA:** "Book Deluxe AC Room Now (Instant Confirmation)".
* **Internal Links:** `/rooms.html`, `/booking.html`, `/amenities.html`.
* **Indexation:** `index, follow`.
* **Required Schema:** `HotelRoom`, `Offer`, `BreadcrumbList`.

---

### Page 5: Standard Non-AC Room (`/rooms/standard-room.html`)
* **Purpose:** Target budget-conscious travellers, daily field staff, and transit passengers.
* **Target Keywords:** *Standard room in Waidhan*, *Non AC room in Waidhan*, *Budget room under 700 in Singrauli*.
* **Search Intent:** Transactional (Price-Sensitive).
* **Key Content Sections:** Specifications (Double bed, ceiling fan, natural ventilation, attached bath, power backup, LED TV), Pricing (₹599–₹799), Photos.
* **Main CTA:** "Book Standard Room".
* **Internal Links:** `/rooms.html`, `/pricing.html`, `/booking.html`.
* **Indexation:** `index, follow`.
* **Required Schema:** `HotelRoom`, `Offer`, `BreadcrumbList`.

---

### Page 6: Dormitory Accommodation (`/dormitory.html`)
* **Purpose:** Dominate an entirely uncontested niche in Singrauli for solo transit workers, backpackers, and drivers.
* **Target Keywords:** *Dormitory in Waidhan Singrauli*, *Single bed dormitory in Waidhan*, *Low cost stay Waidhan*, *Bunk bed stay Singrauli*.
* **Search Intent:** Transactional (Ultra-Budget Transit).
* **Key Content Sections:** Individual bunk bed photos, Clean linen guarantee, Personal secure lockers, Individual USB charging ports, Shared hygienic washrooms with geyser, Tariff (₹349–₹449/day).
* **Main CTA:** "Reserve a Dorm Bed on WhatsApp".
* **Internal Links:** `/rooms.html`, `/pricing.html`, `/location.html`.
* **Indexation:** `index, follow`.
* **Required Schema:** `HotelRoom`, `Offer`, `FAQPage`, `BreadcrumbList`.

---

### Page 7: Monthly PG & Long-Term Stay (`/pg-rooms.html`)
* **Purpose:** Capture high-volume rental queries for apprentice trainees, NTPC/NCL contract workers, and corporate job joiners.
* **Target Keywords:** *Rooms for rent in Waidhan*, *PG accommodation in Waidhan Singrauli*, *Hostel in Waidhan*, *Paying guest in Singrauli*.
* **Search Intent:** Transactional (Monthly / Extended Stay).
* **Key Content Sections:** Single & Double sharing PG rooms, Monthly package rates (₹4,500 – ₹7,500/mo), Meal options (Breakfast/Dinner), Zero brokerage guarantee, Free high-speed Wi-Fi & RO water.
* **Main CTA:** "Enquire for Monthly PG Availability".
* **Internal Links:** `/rooms.html`, `/corporate-stay.html`, `/contact.html`.
* **Indexation:** `index, follow`.
* **Required Schema:** `Accommodation`, `Offer`, `FAQPage`, `BreadcrumbList`.

---

### Page 8: Transparent Rates & Pricing (`/pricing.html`)
* **Purpose:** Build supreme trust and capture comparison shoppers searching for hotel rates in Singrauli.
* **Target Keywords:** *Hotel room price in Waidhan*, *Hotel rates Singrauli*, *Low price hotel in Waidhan Singrauli*.
* **Search Intent:** Commercial / Transactional.
* **Key Content Sections:** Clear, transparent tariff comparison table (Room Type, Occupancy, AC/Non-AC, Daily Rate, Weekly Rate, Monthly Rate, Direct Booking Discount code).
* **Main CTA:** "Claim 10% Direct Booking Discount".
* **Internal Links:** `/booking.html`, `/rooms.html`, `/dormitory.html`.
* **Indexation:** `index, follow`.
* **Required Schema:** `PriceSpecification`, `Table`, `BreadcrumbList`.

---

### Page 9: Availability & Online Booking (`/booking.html`)
* **Purpose:** Frictionless, mobile-optimized direct booking and check-in reservation engine.
* **Target Keywords:** *Book hotel room in Waidhan*, *Hotel room availability in Waidhan*, *Hotel Waidhan online reservation*.
* **Search Intent:** Transactional.
* **Key Content Sections:** Interactive date-picker, Room selection, Guest count, Special requests (Early check-in, GST invoice), Direct WhatsApp confirmation bridge.
* **Main CTA:** "Confirm Booking via WhatsApp / Call".
* **Internal Links:** `/rooms.html`, `/contact.html`, `/cancellation-policy.html`.
* **Indexation:** `index, follow`.
* **Required Schema:** `ReserveAction`, `BreadcrumbList`.

---

### Page 10: Corporate & Business Stays (`/corporate-stay.html`)
* **Purpose:** Attract corporate accounts, industrial contractors, engineers, and project suppliers visiting NTPC, NCL, Reliance, and Essar.
* **Target Keywords:** *Business hotel in Singrauli*, *Hotel near NTPC Vindhyanagar*, *Hotel near NCL Singrauli HQ*, *Corporate guest house Waidhan*.
* **Search Intent:** Commercial / B2B.
* **Key Content Sections:** Corporate billing with GST, High-speed fiber Wi-Fi, Quiet study desks, Express laundry, 24/7 power backup, Industrial distance matrix, Long-stay corporate tie-up contract form.
* **Main CTA:** "Request Corporate Rate Contract".
* **Internal Links:** `/rooms.html`, `/location.html`, `/contact.html`.
* **Indexation:** `index, follow`.
* **Required Schema:** `Service`, `FAQPage`, `BreadcrumbList`.

---

### Page 11: Location, Directions & Distance Matrix (`/location.html`)
* **Purpose:** Anchor local SEO signals with exact distances to major industrial plants, transport hubs, and administrative offices.
* **Target Keywords:** *Hotel near Waidhan Bus Stand*, *Hotel near Ambedkar Chowk Waidhan*, *Hotel near Singrauli Railway Station*, *Hotels in Waidhan market area*.
* **Search Intent:** Navigational & Local Proximity.
* **Key Content Sections:** Exact Google Map embed, GPS Coordinates (`24.0629752, 82.6300981`), Distance table:
  * Waidhan Inter-State Bus Stand: 500 meters (5 min walk)
  * Ambedkar Chowk: 50 meters (1 min walk)
  * Singrauli District Collectorate & Court: 2.1 km (6 min drive)
  * NTPC Vindhyanagar Plant: 10.2 km (15 min drive)
  * Northern Coalfields Ltd (NCL) HQ, Singrauli: 15.4 km (22 min drive)
  * Singrauli Railway Station (SGRL): 16.5 km (25 min drive)
  * Reliance Sasan Ultra Mega Power Project: 18.2 km (25 min drive)
* **Main CTA:** "Get Live Driving Directions on Google Maps".
* **Internal Links:** `/index.html`, `/booking.html`, `/contact.html`.
* **Indexation:** `index, follow`.
* **Required Schema:** `Place`, `GeoCoordinates`, `BreadcrumbList`.

---

### Page 12: Dining & Room Service (`/dining.html`)
* **Purpose:** Address food and meal needs of travellers (home-style pure vegetarian & North Indian meals).
* **Target Keywords:** *Food and dining Waidhan*, *Hotel with restaurant food Singrauli*, *Breakfast in Waidhan*.
* **Search Intent:** Informational / Commercial.
* **Key Content Sections:** Daily breakfast options (Tea, Poha, Paratha), Freshly prepared lunch & dinner thali, 24/7 tea/coffee service, Clean RO filtered drinking water, Nearby famous eateries guide.
* **Main CTA:** "Order Room Service / Enquire with Reception".
* **Internal Links:** `/amenities.html`, `/rooms.html`, `/contact.html`.
* **Indexation:** `index, follow`.
* **Required Schema:** `FoodEstablishment`, `Menu`, `BreadcrumbList`.

---

### Page 13: Hotel Photo Gallery (`/gallery.html`)
* **Purpose:** Build visual trust with real, unedited photos of rooms, washrooms, entrance, parking, and building facade.
* **Target Keywords:** *Hotel Waidhan photos*, *Rooms photos Waidhan Singrauli*, *Hotel Waidhan BNB interior*.
* **Search Intent:** Commercial Investigation.
* **Key Content Sections:** Filterable high-resolution gallery (Exterior, Deluxe Rooms, Standard Rooms, Dormitory Bunks, Washrooms, Reception & Hallway).
* **Main CTA:** "Liked What You Saw? Book This Room".
* **Internal Links:** `/rooms.html`, `/booking.html`.
* **Indexation:** `index, follow`.
* **Required Schema:** `ImageGallery`, `BreadcrumbList`.

---

### Page 14: Amenities & Facilities (`/amenities.html`)
* **Purpose:** Showcase all property amenities to capture feature-specific search queries.
* **Target Keywords:** *Hotel with Wi-Fi in Waidhan*, *Hotel with parking in Singrauli*, *AC hotel with power backup Waidhan*.
* **Search Intent:** Commercial Investigation.
* **Key Content Sections:** Detailed breakdown of amenities: 24/7 Power Backup (Generator + Inverter), 100 Mbps Fiber Wi-Fi, Dedicated CCTV Surveillance, Clean RO Water, Daily Housekeeping, Free Two-Wheeler & Four-Wheeler Parking.
* **Main CTA:** "Check Room Availability".
* **Internal Links:** `/rooms.html`, `/booking.html`, `/contact.html`.
* **Indexation:** `index, follow`.
* **Required Schema:** `ItemList`, `BreadcrumbList`.

---

### Page 15: Guest Reviews & Testimonials (`/reviews.html`)
* **Purpose:** Social proof hub to display authentic guest experiences and encourage new reviews.
* **Target Keywords:** *Hotel Waidhan reviews*, *Best rated hotel in Waidhan*, *Hotel Waidhan guest feedback*.
* **Search Intent:** Navigational / Commercial Investigation.
* **Key Content Sections:** Overall rating badge (4.8★), Filtered reviews by traveller type (Solo, Business, Family, Long-stay), Direct link to write a Google review via Google Maps link.
* **Main CTA:** "Write a Review on Google" / "Book Your Stay".
* **Internal Links:** `/booking.html`, `/index.html`.
* **Indexation:** `index, follow`.
* **Required Schema:** `Review`, `AggregateRating`, `BreadcrumbList`.

---

### Page 16: Frequently Asked Questions (`/faq.html`)
* **Purpose:** Comprehensive FAQ repository optimized for Google featured snippets and voice search.
* **Target Keywords:** *Hotel Waidhan FAQs*, *Check in time hotel Waidhan*, *Singrauli hotel rules*.
* **Search Intent:** Informational.
* **Key Content Sections:** Categorized questions: Booking & Payment, Check-in/Check-out, Bus Stand & Station Transport, Amenities & Food, Safety & ID Verification.
* **Main CTA:** "Have a Question? Call Us at +91 78790 28316".
* **Internal Links:** `/contact.html`, `/booking.html`, `/guest-policies.html`.
* **Indexation:** `index, follow`.
* **Required Schema:** `FAQPage`, `BreadcrumbList`.

---

### Page 17: Contact & 24/7 Front Desk (`/contact.html`)
* **Purpose:** Primary direct lead generation page with click-to-call, WhatsApp, email, and location map.
* **Target Keywords:** *Hotel Waidhan phone number*, *Hotel booking contact number Singrauli*, *Hotel Waidhan address*.
* **Search Intent:** Navigational & Transactional.
* **Key Content Sections:** Click-to-call telephone numbers (`+91 78790 28316`, `+91 97702 36735`, `+91 91093 02812`), One-tap WhatsApp chat button, Interactive Google Maps embed, Contact form, Full address.
* **Main CTA:** "Call Reception Now".
* **Internal Links:** `/location.html`, `/booking.html`, `/index.html`.
* **Indexation:** `index, follow`.
* **Required Schema:** `ContactPage`, `LocalBusiness`, `BreadcrumbList`.

---

### Page 18: Travel Guide: Places to Visit in Singrauli (`/guide/places-to-visit-in-singrauli.html`)
* **Purpose:** Top-of-funnel informational content driving organic traffic from tourists and engineers.
* **Target Keywords:** *Places to visit in Singrauli*, *Tourist places in Singrauli MP*, *Singrauli sightseeing*, *Mada caves Singrauli*, *Rihand dam visit*.
* **Search Intent:** Informational.
* **Key Content Sections:** In-depth guide to Mada Rock-Cut Caves, Rihand Dam (Govind Ballabh Pant Sagar), Rose Garden Waidhan, Lake Chilika MP, distance from Hotel Waidhan BNB, photography tips, best seasons.
* **Main CTA:** "Plan Your Singrauli Trip — Stay at Hotel Waidhan BNB".
* **Internal Links:** `/index.html`, `/rooms.html`, `/location.html`.
* **Indexation:** `index, follow`.
* **Required Schema:** `Article`, `Guide`, `BreadcrumbList`.

---

### Page 19: Travel Guide: Where to Stay in Waidhan (`/guide/where-to-stay-in-waidhan.html`)
* **Purpose:** Target decision-stage travellers comparing locations in Singrauli district.
* **Target Keywords:** *Where to stay in Waidhan Singrauli*, *Best area to stay in Singrauli*, *Waidhan vs Vindhyanagar hotels*.
* **Search Intent:** Commercial Investigation / Informational.
* **Key Content Sections:** Area comparison (Waidhan administrative hub vs Morwa railway station vs Vindhyanagar industrial colony), Why staying near Ambedkar Chowk & Bus Stand offers best connectivity, Hotel budget breakdown.
* **Main CTA:** "Book Room at Waidhan Center".
* **Internal Links:** `/rooms.html`, `/pricing.html`, `/location.html`.
* **Indexation:** `index, follow`.
* **Required Schema:** `Article`, `BreadcrumbList`.

---

### Page 20: Travel Guide: How to Reach Waidhan Singrauli (`/guide/how-to-reach-waidhan.html`)
* **Purpose:** Guide outstation visitors arriving by bus, train, or flight.
* **Target Keywords:** *Singrauli to Waidhan distance*, *How to reach Waidhan Singrauli*, *Singrauli railway station to Waidhan auto fare*.
* **Search Intent:** Informational / Travel Logistics.
* **Key Content Sections:** Nearest railway stations (Singrauli SGRL, Shaktinagar SKTN, Chopan, Renukoot), Bus routes from Varanasi, Rewa, Jabalpur, Prayagraj, Nearest airports (Varanasi VNS, Prayagraj IXD), Local auto fares and tips.
* **Main CTA:** "Need Station Pickup Guidance? Contact Us".
* **Internal Links:** `/location.html`, `/contact.html`, `/booking.html`.
* **Indexation:** `index, follow`.
* **Required Schema:** `Article`, `BreadcrumbList`.

---

### Page 21: Privacy Policy (`/privacy-policy.html`)
* **Purpose:** User data protection, compliance with Indian IT Act and DPDP Act, trust signal for search engines.
* **Target Keywords:** *Hotel Waidhan privacy policy*.
* **Search Intent:** Informational.
* **Key Content Sections:** Information collection, booking data usage, no sharing with third parties, cookie policy, contact for privacy queries.
* **Main CTA:** "Return to Homepage".
* **Internal Links:** `/index.html`, `/contact.html`.
* **Indexation:** `index, follow`.
* **Required Schema:** `WebPage`.

---

### Page 22: Terms & Conditions & Cancellation Policy (`/terms.html` & `/cancellation-policy.html`)
* **Purpose:** Clear booking rules, payment guidelines, refund terms, and dispute resolutions.
* **Target Keywords:** *Hotel Waidhan cancellation policy*, *Hotel Waidhan booking terms*.
* **Search Intent:** Informational / Legal.
* **Key Content Sections:** Check-in ID requirements (Aadhar/Voter/Passport), Free cancellation window (24 hours prior), No-show policy, Damage policies.
* **Main CTA:** "View All Policies".
* **Internal Links:** `/booking.html`, `/contact.html`.
* **Indexation:** `index, follow`.
* **Required Schema:** `WebPage`.

---

### Page 23: Booking Confirmation Page (`/booking-confirmation.html`)
* **Purpose:** Post-booking thank you page with booking reference, WhatsApp message link, check-in instructions, and directions.
* **Target Keywords:** None (Private utility page).
* **Search Intent:** Post-transactional.
* **Key Content Sections:** Thank you message, Reservation summary, Click to open directions in Google Maps, Helpdesk phone.
* **Main CTA:** "Message Front Desk on WhatsApp".
* **Internal Links:** `/index.html`, `/location.html`.
* **Indexation:** `noindex, nofollow` (Prevent search engines from indexing transaction responses).
* **Required Schema:** None.

---

### Page 24: Custom 404 Error Page (`/404.html`)
* **Purpose:** Graceful error recovery for dead or mistyped links, keeping bounce rate low.
* **Target Keywords:** None (Error recovery).
* **Search Intent:** Navigational recovery.
* **Key Content Sections:** Friendly error notice, Quick search/navigation links (Home, Rooms, Contact, Location), Emergency booking phone button.
* **Main CTA:** "Go Back to Homepage".
* **Internal Links:** `/index.html`, `/rooms.html`, `/contact.html`.
* **Indexation:** `noindex, nofollow`.
* **Required Schema:** None.

---

## 3. XML Sitemap & Crawl Hierarchy

### Indexable Public URLs in `sitemap.xml`:
1. `https://hotelwaidhanbnb.com/` (Priority: 1.0, Changefreq: daily)
2. `https://hotelwaidhanbnb.com/rooms.html` (Priority: 0.9, Changefreq: weekly)
3. `https://hotelwaidhanbnb.com/rooms/deluxe-ac-room.html` (Priority: 0.8, Changefreq: weekly)
4. `https://hotelwaidhanbnb.com/rooms/standard-room.html` (Priority: 0.8, Changefreq: weekly)
5. `https://hotelwaidhanbnb.com/dormitory.html` (Priority: 0.9, Changefreq: weekly)
6. `https://hotelwaidhanbnb.com/pg-rooms.html` (Priority: 0.9, Changefreq: weekly)
7. `https://hotelwaidhanbnb.com/pricing.html` (Priority: 0.8, Changefreq: weekly)
8. `https://hotelwaidhanbnb.com/booking.html` (Priority: 0.9, Changefreq: daily)
9. `https://hotelwaidhanbnb.com/corporate-stay.html` (Priority: 0.8, Changefreq: monthly)
10. `https://hotelwaidhanbnb.com/location.html` (Priority: 0.8, Changefreq: monthly)
11. `https://hotelwaidhanbnb.com/dining.html` (Priority: 0.7, Changefreq: monthly)
12. `https://hotelwaidhanbnb.com/amenities.html` (Priority: 0.7, Changefreq: monthly)
13. `https://hotelwaidhanbnb.com/gallery.html` (Priority: 0.7, Changefreq: monthly)
14. `https://hotelwaidhanbnb.com/reviews.html` (Priority: 0.7, Changefreq: weekly)
15. `https://hotelwaidhanbnb.com/faq.html` (Priority: 0.7, Changefreq: monthly)
16. `https://hotelwaidhanbnb.com/about.html` (Priority: 0.6, Changefreq: monthly)
17. `https://hotelwaidhanbnb.com/contact.html` (Priority: 0.8, Changefreq: monthly)
18. `https://hotelwaidhanbnb.com/guide/places-to-visit-in-singrauli.html` (Priority: 0.7, Changefreq: monthly)
19. `https://hotelwaidhanbnb.com/guide/where-to-stay-in-waidhan.html` (Priority: 0.7, Changefreq: monthly)
20. `https://hotelwaidhanbnb.com/guide/how-to-reach-waidhan.html` (Priority: 0.7, Changefreq: monthly)
21. `https://hotelwaidhanbnb.com/privacy-policy.html` (Priority: 0.3, Changefreq: yearly)
22. `https://hotelwaidhanbnb.com/terms.html` (Priority: 0.3, Changefreq: yearly)
23. `https://hotelwaidhanbnb.com/cancellation-policy.html` (Priority: 0.3, Changefreq: yearly)

### Strictly Excluded from `sitemap.xml` (`noindex, nofollow` via meta robots & `robots.txt`):
* `/booking-confirmation.html` (Private guest confirmation state)
* `/404.html` (Error page)
* `/admin/` (Internal administrative dashboards or login pages)
* `/api/` (Backend JSON endpoints)
* Any URL parameters with session tokens or private filters (e.g., `?session=`, `?ref=`)
