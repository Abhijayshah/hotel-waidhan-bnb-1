# 🚀 Hotel Waidhan Singrauli BNB — Next.js Development Roadmap & Sprints
> **Document:** `11-development-roadmap.md`  
> **Development Lifecycle:** 4 Agile Sprints (Total: 4 Weeks to Production Launch)  
> **Target Framework:** Next.js 14+ App Router, TypeScript, Vanilla CSS  
> **Status:** Implementation Engineering Schedule  

---

## 1. Development Lifecycle & Milestone Overview

```
[Sprint 1: Architecture & Foundation] ────► [Sprint 2: Core Booking Engine & Rooms]
(Days 1 - 7: Tokens, Layout, Nav)            (Days 8 - 14: Homepage, 4 Room Types, WhatsApp)
                 │                                        │
                 ▼                                        ▼
[Sprint 4: QA, Schema & Live Deployment] ◄─── [Sprint 3: Location, Corporate & Guides]
(Days 22 - 28: CWV, GSC, GBP Launch)          (Days 15 - 21: Maps, B2B Stays, Travel Guides)
```

---

## 2. Sprint-by-Sprint Execution Breakdown

### Sprint 1: Next.js Project Foundation, Tokens & Global Layout (Days 1 – 7)
* **Goal:** Establish a fast, responsive skeleton with zero runtime overhead and WCAG AA compliance.
* **Tasks:**
  1. Initialize Next.js 14+ App Router project (`npx create-next-app@latest ./ --typescript --eslint --no-tailwind`).
  2. Implement global CSS design tokens, glassmorphism, and responsive resets in `app/globals.css`.
  3. Configure Google Fonts (`Outfit` + `Inter`) via `next/font/google` with `display: swap`.
  4. Build reusable global components in `components/layout/`:
     * `Header.tsx` (Glassmorphic desktop bar with telephone line and location pill).
     * `MobileNav.tsx` (Accessible off-canvas slide drawer).
     * `MobileBottomBar.tsx` (Sticky 2-button action strip: Call Reception + WhatsApp Desk).
     * `ThemeToggle.tsx` (Light / Dark / System OS synchronizer).
     * `Footer.tsx` (Standardized legal NAP, Google review link, and policy links).
  5. Set up centralized TypeScript data files in `data/` (`hotel-info.ts`, `rooms.ts`, `amenities.ts`).
* **Sprint 1 Acceptance Gate:**
  * Zero build errors (`npm run build`).
  * Seamless theme toggling without flash of unstyled content (FOUC).
  * Mobile bottom bar sticks cleanly on iOS and Android viewports without obscuring content.

---

### Sprint 2: Core Conversion Engine & Accommodation Pages (Days 8 – 14)
* **Goal:** Deploy the primary conversion funnel: Homepage, master Rooms catalog, and all 4 room tiers.
* **Tasks:**
  1. Build `app/page.tsx` (Homepage):
     * Hero section with preloaded property photograph (`priority={true}`).
     * Interactive `QuickBookingWidget.tsx` with date picker and pre-filled WhatsApp link generator.
     * Trust badges strip (4.8★, 24/7 Power, 100 Mbps Wi-Fi, GST Bills).
     * Accommodation categories grid (4 cards).
     * Transparent tariff comparison table with 10% direct discount code.
  2. Build `app/rooms/page.tsx` (Rooms Hub Catalog):
     * Category filtering (`All`, `Deluxe AC`, `Standard`, `Dormitory`, `PG`).
     * Side-by-side room inclusions matrix table.
  3. Build Individual Room Detail Pages:
     * `app/rooms/deluxe-ac-room/page.tsx` (Executive suite, ergonomic work desk, split AC).
     * `app/rooms/standard-room/page.tsx` (Budget private room, clean washroom).
     * `app/rooms/dormitory/page.tsx` (Uncontested transit single bunk beds from ₹349).
     * `app/rooms/pg-rooms/page.tsx` (Monthly furnished accommodation for contractors/interns).
  4. Build `app/booking/page.tsx` (Dedicated online reservation engine with WhatsApp bridge).
* **Sprint 2 Acceptance Gate:**
  * WhatsApp URL payload generates 100% correct pre-filled booking parameters upon button click.
  * Room detail pages inject valid `HotelRoom` JSON-LD schema verified via Google Rich Results Test.

---

### Sprint 3: Location, Corporate, Dining & Sightseeing Guides (Days 15 – 21)
* **Goal:** Capture hyper-local transit, B2B industrial accounts, and inbound tourism searches.
* **Tasks:**
  1. Build `app/location/page.tsx`:
     * Responsive Google Maps embed for CID `500647895475654140` (`24.0629752, 82.6300981`).
     * Illustrated 500m (5-min walk) route guide from Waidhan Inter-State Bus Stand.
     * Industrial distance matrix to NTPC Vindhyanagar, NCL HQ, and Sasan Power.
  2. Build `app/corporate-stay/page.tsx`:
     * Corporate amenities (GST invoices, 100 Mbps Wi-Fi, generator power backup).
     * Corporate rate tie-up inquiry form with server-side validation.
  3. Build `app/dining/page.tsx`, `app/gallery/page.tsx`, `app/amenities/page.tsx`, and `app/reviews/page.tsx`.
  4. Build Editorial Travel Guides in `app/guide/`:
     * `places-to-visit-in-singrauli/page.tsx` (Mada Caves, Rihand Dam, Rose Garden).
     * `where-to-stay-in-waidhan/page.tsx` (Area comparison guide).
     * `how-to-reach-waidhan/page.tsx` (Bus and train transit guide).
  5. Build Legal Compliance Pages:
     * `/privacy-policy`, `/terms`, `/cancellation-policy`, `/guest-policies`, and `/not-found`.
* **Sprint 3 Acceptance Gate:**
  * All 24 pages fully accessible, navigable, and internally linked.
  * Zero 404 or broken navigation links across the entire application.

---

### Sprint 4: Technical SEO Acceptance, Performance Tuning & Launch (Days 22 – 28)
* **Goal:** Pass all technical SEO gates, achieve 95+ Lighthouse score, and launch on production domain.
* **Tasks:**
  1. Generate dynamic XML sitemap via `app/sitemap.ts` (lists all 24 canonical indexable URLs).
  2. Configure `app/robots.ts` with clean directives and sitemap linkage.
  3. Run Google Lighthouse audit on mobile and desktop viewports. Target: **Lighthouse ≥ 95** in Performance, Accessibility, Best Practices, and SEO.
  4. Verify all structured data schemas (`Hotel`, `BedAndBreakfast`, `HotelRoom`, `FAQPage`, `BreadcrumbList`) in Google's Rich Results Test tool.
  5. Deploy application to Cloudflare Pages or Vercel Edge with custom domain `https://hotelwaidhanbnb.com`.
  6. Submit `sitemap.xml` to Google Search Console and Bing Webmaster Tools.
  7. Update Google Business Profile (CID: 500647895475654140) with UTM-tagged website URL and standardized categories (`Hotel`, `Bed & Breakfast`, `PG`, `Dormitory`).
* **Sprint 4 Acceptance Gate:**
  * Google Search Console shows 0 coverage errors and 24 submitted URLs.
  * Google PageSpeed Insights confirms LCP < 1.8s, CLS < 0.02, and INP < 100ms.
