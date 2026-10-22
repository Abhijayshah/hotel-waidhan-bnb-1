# 🛠️ Hotel Waidhan Singrauli BNB — Technical SEO Checklist & Architecture Blueprint
> **Document:** `technical-seo-checklist.md`  
> **Version:** 1.0 (Production Engineering Guide)  
> **Date:** October 22, 2026  
> **Primary Objective:** Guarantee 95+ Google Lighthouse Scores across Performance, Accessibility, Best Practices, and SEO with flawless Schema markup and Core Web Vitals compliance.  

---

## 1. Technical Architecture & Hosting Recommendations

### Recommended Stack Options
1. **Option A: Static/Jamstack HTML5 + Vanilla JS + CSS3 (Current Codebase Evolution)**
   * *Best For:* Maximum speed, zero server maintenance, immediate deployment, near-zero hosting costs on Cloudflare Pages, Vercel, or Netlify.
   * *Load Times:* Sub-500ms TTFB globally, 100/100 Lighthouse Performance score.
   * *Server Requirements:* Static web server (Nginx/Cloudflare CDN), zero database vulnerabilities, client-side WhatsApp/Phone lead routing.
2. **Option B: Next.js 14+ (App Router) with Server Components (SSR / SSG)**
   * *Best For:* If dynamic booking database (Supabase/PostgreSQL), admin booking dashboard, and payment gateway (Razorpay/Cashfree) are implemented in Phase 3.
   * *SEO Benefit:* Full server-rendered HTML and dynamically populated Open Graph/JSON-LD tags.

---

## 2. Structured Data (JSON-LD) Implementations

Every page on the website must include schema markup according to Schema.org standards and Google Search Central requirements.

### A. Master `Hotel` & `BedAndBreakfast` Schema (Homepage & Sitewide)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": ["Hotel", "BedAndBreakfast"],
  "@id": "https://hotelwaidhanbnb.com/#hotel",
  "name": "Hotel Waidhan Singrauli BNB",
  "alternateName": ["Hotel Waidhan BNB", "Comfort Stay & PG Waidhan"],
  "description": "Clean, affordable hotel rooms, single-bed dormitory bunks, and monthly PG accommodation located at Ambedkar Chowk, 500m from Waidhan Bus Stand, Singrauli MP.",
  "url": "https://hotelwaidhanbnb.com/",
  "telephone": "+917879028316",
  "email": "hotelwaidhanbnb@gmail.com",
  "priceRange": "₹349 - ₹1,499",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, UPI, Credit Card, Debit Card, Net Banking",
  "checkinTime": "12:00:00",
  "checkoutTime": "11:00:00",
  "image": [
    "https://hotelwaidhanbnb.com/images/hotel-waidhan-exterior.webp",
    "https://hotelwaidhanbnb.com/images/deluxe-ac-room-waidhan.webp",
    "https://hotelwaidhanbnb.com/images/dormitory-beds-waidhan.webp"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ambedkar Chowk, Near Inter-State Bus Stand",
    "addressLocality": "Waidhan, Singrauli",
    "addressRegion": "Madhya Pradesh",
    "postalCode": "486886",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 24.0629752,
    "longitude": 82.6300981
  },
  "hasMap": "https://maps.app.goo.gl/gz9ZMdWVEUf4wPUc7",
  "starRating": {
    "@type": "Rating",
    "ratingValue": "4.8"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "124",
    "bestRating": "5",
    "worstRating": "1"
  },
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "24/7 Power Backup",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Free High-Speed Wi-Fi",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Air Conditioning",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Free On-Site Vehicle Parking",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "RO Filtered Drinking Water",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "CCTV Security Surveillance",
      "value": true
    }
  ]
}
</script>
```

### B. `HotelRoom` Schema (For Room Detail Pages)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HotelRoom",
  "name": "Deluxe AC Executive Room",
  "description": "Spacious air-conditioned room featuring king bed, 32-inch Smart LED TV, attached bathroom with geyser, work desk, and 100 Mbps Wi-Fi.",
  "bed": {
    "@type": "BedDetails",
    "numberOfBeds": 1,
    "typeOfBed": "King"
  },
  "occupancy": {
    "@type": "QuantitativeValue",
    "maxValue": 2
  },
  "offers": {
    "@type": "Offer",
    "price": "899.00",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock",
    "url": "https://hotelwaidhanbnb.com/rooms/deluxe-ac-room.html"
  }
}
</script>
```

### C. `FAQPage` Schema (For Homepage & FAQ Page)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How far is Hotel Waidhan BNB from Waidhan Inter-State Bus Stand?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hotel Waidhan BNB is situated just 500 meters from the Waidhan Inter-State Bus Stand, making it an easy 5-minute walk via Ambedkar Chowk."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer single dormitory beds for transit travellers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide comfortable single-bed dormitory accommodations starting at ₹349 per night with personal secure lockers and hot water."
      }
    },
    {
      "@type": "Question",
      "name": "Can corporate guests receive GST invoices for travel reimbursements?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we generate 100% compliant computer-generated GST tax invoices for business travellers and contractors visiting NTPC, NCL, and Sasan Power."
      }
    }
  ]
}
</script>
```

### D. `BreadcrumbList` Schema (For All Internal Pages)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://hotelwaidhanbnb.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Rooms",
      "item": "https://hotelwaidhanbnb.com/rooms.html"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Deluxe AC Room",
      "item": "https://hotelwaidhanbnb.com/rooms/deluxe-ac-room.html"
    }
  ]
}
</script>
```

---

## 3. Robots.txt Specification

File location: `https://hotelwaidhanbnb.com/robots.txt`

```txt
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /booking-confirmation.html
Disallow: /404.html
Disallow: /*?*session=
Disallow: /*?*token=

# Googlebot specific directives
User-agent: Googlebot
Allow: /
Allow: /images/
Allow: /css/
Allow: /js/

# Crawl-delay not needed for Googlebot, standard policy
Sitemap: https://hotelwaidhanbnb.com/sitemap.xml
```

---

## 4. XML Sitemap Specification (`sitemap.xml`)

File location: `https://hotelwaidhanbnb.com/sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://hotelwaidhanbnb.com/</loc>
    <lastmod>2026-10-22</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://hotelwaidhanbnb.com/rooms.html</loc>
    <lastmod>2026-10-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://hotelwaidhanbnb.com/rooms/deluxe-ac-room.html</loc>
    <lastmod>2026-10-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://hotelwaidhanbnb.com/rooms/standard-room.html</loc>
    <lastmod>2026-10-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://hotelwaidhanbnb.com/dormitory.html</loc>
    <lastmod>2026-10-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://hotelwaidhanbnb.com/pg-rooms.html</loc>
    <lastmod>2026-10-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://hotelwaidhanbnb.com/pricing.html</loc>
    <lastmod>2026-10-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://hotelwaidhanbnb.com/booking.html</loc>
    <lastmod>2026-10-22</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://hotelwaidhanbnb.com/corporate-stay.html</loc>
    <lastmod>2026-10-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://hotelwaidhanbnb.com/location.html</loc>
    <lastmod>2026-10-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://hotelwaidhanbnb.com/dining.html</loc>
    <lastmod>2026-10-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://hotelwaidhanbnb.com/amenities.html</loc>
    <lastmod>2026-10-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://hotelwaidhanbnb.com/gallery.html</loc>
    <lastmod>2026-10-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://hotelwaidhanbnb.com/reviews.html</loc>
    <lastmod>2026-10-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://hotelwaidhanbnb.com/faq.html</loc>
    <lastmod>2026-10-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://hotelwaidhanbnb.com/about.html</loc>
    <lastmod>2026-10-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://hotelwaidhanbnb.com/contact.html</loc>
    <lastmod>2026-10-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://hotelwaidhanbnb.com/guide/places-to-visit-in-singrauli.html</loc>
    <lastmod>2026-10-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://hotelwaidhanbnb.com/guide/where-to-stay-in-waidhan.html</loc>
    <lastmod>2026-10-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://hotelwaidhanbnb.com/guide/how-to-reach-waidhan.html</loc>
    <lastmod>2026-10-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://hotelwaidhanbnb.com/privacy-policy.html</loc>
    <lastmod>2026-10-22</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://hotelwaidhanbnb.com/terms.html</loc>
    <lastmod>2026-10-22</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://hotelwaidhanbnb.com/cancellation-policy.html</loc>
    <lastmod>2026-10-22</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>
```

---

## 5. Core Web Vitals (CWV) Optimization Checklist

| Metric | Target | Technical Mechanism to Achieve |
|---|---|---|
| **LCP** (Largest Contentful Paint) | < 1.8s | Hero image preload (`<link rel="preload" as="image" href="..." type="image/webp">`), converted to modern WebP, hosted on CDN, explicit CSS aspect-ratio. |
| **INP** (Interaction to Next Paint) | < 100ms | Zero bloated third-party trackers, lightweight Vanilla JS date picker, debounced input events, asynchronous non-blocking scripts (`defer`). |
| **CLS** (Cumulative Layout Shift) | < 0.02 | Explicit `width` and `height` on all `<img>` and `<iframe>` elements; reserved CSS space for map embeds and carousels; web font fallback display swap (`font-display: swap`). |
| **FCP** (First Contentful Paint) | < 0.9s | Critical CSS inlined in `<head>`; external CSS minified; Gzip/Brotli compression enabled on web server. |
| **TTFB** (Time to First Byte) | < 250ms | Edge-cached static delivery via Cloudflare CDN / Vercel Edge Network. |

---

## 6. Image SEO & Responsive Asset Strategy

1. **File Format:** Convert all JPEG/PNG files to compressed `.webp` format (lossy quality 80–85%).
2. **File Naming Conventions:** Descriptive, hyphenated, localized names:
   * ❌ `IMG_20261021_WA0012.jpg`
   * ✅ `deluxe-ac-room-hotel-waidhan-singrauli.webp`
   * ✅ `dormitory-bunk-beds-waidhan-bus-stand.webp`
   * ✅ `hotel-waidhan-singrauli-bnb-building-facade.webp`
3. **Alt Text Rules:** Every image must have factual, keyword-relevant alt text describing the actual visual content:
   * `alt="Spacious Deluxe AC room with king size bed and clean white linen at Hotel Waidhan Singrauli BNB"`
4. **Responsive Sizing (`srcset`):**
   ```html
   <img 
     src="images/deluxe-ac-room-800w.webp"
     srcset="images/deluxe-ac-room-400w.webp 400w, images/deluxe-ac-room-800w.webp 800w, images/deluxe-ac-room-1200w.webp 1200w"
     sizes="(max-width: 768px) 100vw, 50vw"
     width="800" height="533"
     loading="lazy"
     decoding="async"
     alt="Deluxe AC executive room interior at Hotel Waidhan Singrauli BNB">
   ```

---

## 7. Security, Privacy & Validation Checklist

* [ ] **HTTPS Enforcement:** Strict 301 redirect from HTTP to HTTPS with HSTS header (`Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`).
* [ ] **Content Security Policy (CSP):** Prevent XSS attacks while permitting Google Maps iframe and font CDNs.
* [ ] **Anti-Spam Form Security:** Cloudflare Turnstile or invisible honeypot field on the contact and booking forms to eliminate bot spam without frustrating users with CAPTCHAs.
* [ ] **Canonical URL Tags:** Self-referencing `<link rel="canonical" href="...">` on all 24 pages to prevent duplicate content indexing across HTTP/HTTPS and trailing slashes.
* [ ] **Google Search Console Verification:** HTML tag `<meta name="google-site-verification" content="..." />` and DNS TXT record configured in Cloudflare.
* [ ] **Bing Webmaster Tools & Google Maps CID Linkage:** Linked directly to CID `500647895475654140`.
