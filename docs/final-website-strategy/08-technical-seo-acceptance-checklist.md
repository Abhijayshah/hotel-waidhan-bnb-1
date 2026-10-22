# ✅ Hotel Waidhan Singrauli BNB — Technical SEO Acceptance Checklist
> **Document:** `08-technical-seo-acceptance-checklist.md`  
> **Target Framework:** Next.js 14+ App Router  
> **Auditor Role:** Technical SEO QA Engineer  
> **Compliance Standard:** Google Search Central Guidelines & Core Web Vitals (2026 Standards)  

---

## 1. Overview & Acceptance Protocol

This checklist serves as the authoritative quality assurance gate before any code or feature is approved for production deployment. Every single checkbox must be verified and marked **PASS** using automated testing tools (Google Lighthouse, Google Rich Results Test, Chrome DevTools) and manual inspection.

---

## 2. Comprehensive Acceptance Matrix

### Phase A: Metadata & On-Page Integrity
* [ ] **Unique Title Tags:** Every approved page has a distinct, descriptive `<title>` tag (Strictly 50–60 characters). Formula: `[Primary Keyword] — [Benefit] | Hotel Waidhan BNB`.
* [ ] **Zero Duplicate Titles:** Zero instance of multiple `<title>` tags in the DOM (avoiding the fatal error found on `hotelthegrandagastya.com`).
* [ ] **Compelling Meta Descriptions:** Every indexable page contains an informative description (140–158 characters) with local keywords, pricing signals, and telephone contact.
* [ ] **Strict Canonical Tags:** Every indexable page specifies a self-referencing canonical URL (`<link rel="canonical" href="https://hotelwaidhanbnb.com/..." />`) without query parameters or trailing slashes.
* [ ] **Heading Architecture (`<h1>` - `<h6>`):** Exactly **one** semantic `<h1>` element per page containing the primary search query. No skipping heading levels (no `<h1>` directly followed by `<h4>`). Zero competitor blunders (no 14+ `<h1>` tags as seen on `hotelsatyainternational.com`).
* [ ] **Open Graph & Twitter Cards:** Complete `og:title`, `og:description`, `og:image`, `og:url`, `og:type="website"`, and `twitter:card="summary_large_image"` present on all pages.

### Phase B: Structured Data (Schema.org JSON-LD)
* [ ] **Master `Hotel` & `BedAndBreakfast` Schema:** Injected in root `layout.tsx` containing accurate NAP, GPS coordinates (`24.0629752, 82.6300981`), price ranges (`₹349 - ₹1,499`), and verified amenities.
* [ ] **`HotelRoom` Schema on Room Pages:** Deluxe AC, Standard Room, and Dormitory pages feature individual `HotelRoom` schemas with bed types, capacity, and price specifications.
* [ ] **`FAQPage` Schema Validation:** Embedded on Homepage and `/faq` with zero nesting or syntax errors. Verified to generate Rich Results in Google's Rich Results Test tool.
* [ ] **`BreadcrumbList` Schema:** Hierarchical breadcrumb schema injected across all subpages.
* [ ] **Zero Fabricated Schema Data:** Schema does not contain unverified star ratings, fake review aggregates, or non-existent amenities.

### Phase C: Crawlability, Sitemaps & Directives
* [ ] **Next.js XML Sitemap (`/sitemap.xml`):** Generated via `app/sitemap.ts`, returning clean HTTP 200 with standard XML headers (`application/xml`). Lists all 24 approved indexable URLs with accurate `lastmod`, `changefreq`, and `priority`.
* [ ] **Next.js Robots.txt (`/robots.txt`):** Generated via `app/robots.ts`. Explicitly allows Googlebot, links to `https://hotelwaidhanbnb.com/sitemap.xml`, and disallows `/booking-confirmation`, `/not-found`, `/admin/`, and `/api/`.
* [ ] **Strict Status Codes:**
  * All valid routes return HTTP `200 OK`.
  * All dead/non-existent routes return HTTP `404 Not Found`.
  * HTTP traffic automatically 301 redirects to HTTPS.
  * `www.` traffic 301 redirects to non-`www` (or vice versa according to domain policy).
* [ ] **Internal Linking Integrity:** Zero broken internal links (`404` or `500` errors). All navigation anchors point to canonical route paths.
* [ ] **Zero Accidental `noindex`:** Verified that marketing pages do **not** have `<meta name="robots" content="noindex">`.

### Phase D: Core Web Vitals & Performance
* [ ] **Lighthouse Performance Score:** ≥ 95 on mobile viewports under simulated 4G throttling.
* [ ] **Largest Contentful Paint (LCP):** < 1.8 seconds. Hero image utilizes Next.js `<Image priority={true} />` with WebP compression.
* [ ] **Cumulative Layout Shift (CLS):** < 0.02 (Essentially zero shift). All images and iframes have explicit `width`, `height`, or CSS aspect ratios.
* [ ] **Interaction to Next Paint (INP):** < 100 milliseconds. Zero render-blocking third-party scripts.
* [ ] **Font Optimization:** Google Fonts (`Outfit` and `Inter`) loaded via `next/font/google` with zero layout shift (`display: swap`).
* [ ] **Payload Budget:** Initial page HTML payload < 30 KB; total compressed JS bundle < 90 KB.

### Phase E: Mobile Usability & Accessibility (WCAG 2.1 AA)
* [ ] **Touch Target Sizing:** All buttons, links, and form inputs maintain minimum dimensions of **48px × 48px** with adequate spacing.
* [ ] **Color Contrast:** All body text and buttons maintain a minimum contrast ratio of **4.5:1** against backgrounds in both Light and Dark themes.
* [ ] **Persistent Mobile Action Bar:** Fixed 2-button action bar (`📞 Call Reception` + `💬 WhatsApp Book`) appears reliably on viewports < 768px.
* [ ] **Keyboard Navigation:** All interactive elements (accordions, buttons, date pickers) can be focused and triggered via `Tab` and `Enter/Space` keys with clear focus rings.
* [ ] **Image Alt Text:** Every single `<img>` element has descriptive, contextual, non-stuffed `alt` text.

### Phase F: Analytics & Conversion Tracking
* [ ] **Google Analytics 4 (GA4):** Initialized via Next.js Script component (`afterInteractive`).
* [ ] **Google Search Console Verification:** Meta tag or DNS verification record successfully installed.
* [ ] **Conversion Event Triggers Verified in DebugView:**
  * `click_phone_call` fires on all `tel:` clicks.
  * `click_whatsapp` fires on all WhatsApp CTA buttons.
  * `submit_enquiry_form` fires on successful contact submissions.
  * `click_map_directions` fires on Google Maps link clicks.

---

## 3. Pre-Deployment Sign-Off Gate

| Audit Area | Lead Tester | Date Verified | Passing Status |
|---|---|---|---|
| **Metadata & URLs** | Technical SEO Lead | `[DATE]` | [ ] PENDING / [ ] PASS |
| **JSON-LD Structured Data** | Technical SEO Lead | `[DATE]` | [ ] PENDING / [ ] PASS |
| **Sitemaps & Robots.txt** | DevOps / Webmaster | `[DATE]` | [ ] PENDING / [ ] PASS |
| **Lighthouse Performance (95+)** | Frontend Engineer | `[DATE]` | [ ] PENDING / [ ] PASS |
| **Mobile & Touch UX** | UI/UX Designer | `[DATE]` | [ ] PENDING / [ ] PASS |
| **Analytics Event Tracking** | Digital Strategist | `[DATE]` | [ ] PENDING / [ ] PASS |
