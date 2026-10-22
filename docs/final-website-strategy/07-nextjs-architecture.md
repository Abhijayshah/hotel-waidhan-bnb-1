# ⚡ Hotel Waidhan Singrauli BNB — Next.js 14+ App Router Technical Architecture
> **Document:** `07-nextjs-architecture.md`  
> **Framework:** Next.js 14+ (App Router, React 18/19, TypeScript)  
> **Rendering Paradigm:** React Server Components (RSC) + Selective Client Islands  
> **Styling Engine:** Vanilla CSS Design Tokens (Zero Runtime Overhead)  
> **Status:** Production Engineering Specification  

---

## 1. Architectural Philosophy & Core Tenets

To win local organic search in Singrauli while maintaining sub-second performance on 4G mobile connections, the Next.js application is engineered around four core tenets:

1. **Server-First by Default (RSC):** Over 90% of the website's HTML is statically generated on the server at build time. Search engine crawlers (Googlebot, Bingbot) receive 100% pre-rendered, semantic HTML without needing client-side JavaScript execution.
2. **Selective Client Islands (`'use client'`):** Client-side JavaScript is strictly confined to small, isolated interactive components:
   * The date picker and tariff calculator in `QuickBookingWidget`.
   * The light/dark/system theme switch in `ThemeToggle`.
   * The mobile off-canvas drawer in `MobileNav`.
   * The high-resolution lightbox in `GalleryModal`.
3. **Zero Runtime CSS Overhead:** Pure Vanilla CSS with CSS Custom Properties in `app/globals.css`. No heavy CSS-in-JS libraries (Emotion/Styled Components) that block the browser main thread and degrade INP (Interaction to Next Paint).
4. **Automated Core Web Vitals Optimization:**
   * Images served through `next/image` automatically convert to WebP/AVIF formats with responsive `srcset`.
   * Web fonts (`Outfit` and `Inter`) self-hosted through `next/font/google` with zero layout shift (`display: swap`).

---

## 2. Production File-System Route Hierarchy (`app/`)

```
app/
├── layout.tsx                   # Global Root Layout (Fonts, Header, Footer, MobileBar, Global JSON-LD)
├── page.tsx                     # Homepage (Server Component)
├── globals.css                  # Design Tokens, Glassmorphism, Responsive Base Resets
├── sitemap.ts                   # Next.js XML Sitemap Generator (Produces /sitemap.xml)
├── robots.ts                    # Next.js Robots.txt Generator (Produces /robots.txt)
├── not-found.tsx                # Custom 404 Error Page (noindex)
│
├── rooms/
│   ├── page.tsx                 # Rooms Catalog & Comparison Hub
│   ├── deluxe-ac-room/
│   │   └── page.tsx             # Deluxe AC Room Detail Page (HotelRoom Schema)
│   ├── standard-room/
│   │   └── page.tsx             # Standard Non-AC Room Detail Page
│   ├── dormitory/
│   │   └── page.tsx             # Single Bed Dormitory Page (P1 Uncontested Niche)
│   └── pg-rooms/
│       └── page.tsx             # Monthly PG & Rental Stays Page (P1 Niche)
│
├── pricing/
│   └── page.tsx                 # Transparent Tariff & Discounts Page
├── booking/
│   └── page.tsx                 # Online Booking & Enquiry Engine
├── corporate-stay/
│   └── page.tsx                 # B2B Industrial Lodging (NTPC/NCL GST Invoicing)
├── location/
│   └── page.tsx                 # Location, Directions & Transit Matrix
├── dining/
│   └── page.tsx                 # Pure Veg Dining & Room Service
├── gallery/
│   └── page.tsx                 # Filterable High-Res Photo Gallery
├── amenities/
│   └── page.tsx                 # Verified Hotel Amenities & Facilities
├── reviews/
│   └── page.tsx                 # Verified Reviews & Google Review QR Page
├── faq/
│   └── page.tsx                 # Comprehensive FAQ Repository (FAQPage Schema)
├── about/
│   └── page.tsx                 # About Us & Hospitality Philosophy
├── contact/
│   └── page.tsx                 # 24/7 Front Desk Phone Helpline & Form
│
├── guide/
│   ├── places-to-visit-in-singrauli/
│   │   └── page.tsx             # Singrauli Sightseeing Guide (Mada Caves, Rihand Dam)
│   ├── where-to-stay-in-waidhan/
│   │   └── page.tsx             # Accommodation Comparison Guide
│   └── how-to-reach-waidhan/
│       └── page.tsx             # Transit, Bus & Railway Station Route Guide
│
├── privacy-policy/
│   └── page.tsx                 # Data Protection & Privacy Policy
├── terms/
│   └── page.tsx                 # Terms & Conditions
├── cancellation-policy/
│   └── page.tsx                 # 24-Hour Free Cancellation Policy
├── guest-policies/
│   └── page.tsx                 # Check-in ID Mandate & House Rules
└── booking-confirmation/
    └── page.tsx                 # Post-Booking Thank You Page (noindex)
```

---

## 3. Modular Component Structure (`components/`)

```
components/
├── layout/
│   ├── Header.tsx               # Server Component (Navigation, Logo, Contact Pill)
│   ├── MobileNav.tsx            # Client Component (Off-canvas hamburger toggle)
│   ├── MobileBottomBar.tsx      # Client Component (Sticky Call & WhatsApp Bar)
│   ├── Footer.tsx               # Server Component (NAP, Quick Links, Policies)
│   ├── Breadcrumbs.tsx          # Server Component with BreadcrumbList JSON-LD
│   └── ThemeToggle.tsx          # Client Component (Light / Dark / System Toggle)
│
├── sections/
│   ├── HeroSection.tsx          # Server Component (Hero image, H1, Trust counters)
│   ├── AmenityGrid.tsx          # Server Component (6 verified amenity cards with SVGs)
│   ├── TariffTable.tsx          # Server Component (Comparison matrix + discount code)
│   ├── DistanceMatrix.tsx       # Server Component (NTPC, NCL, Bus Stand transit routes)
│   ├── ReviewSection.tsx        # Server Component (Verified Google testimonial cards)
│   ├── FaqAccordion.tsx         # Client Component (Accessible accordion with FAQ schema)
│   └── LocationMap.tsx          # Server Component (Google Maps CID embed + directions)
│
├── rooms/
│   ├── RoomCard.tsx             # Server/Client Hybrid (3-photo carousel + CTA)
│   ├── RoomFeaturesTable.tsx    # Server Component (Side-by-side room comparison)
│   └── RoomStickyBooking.tsx    # Client Component (Sticky side reservation box)
│
├── booking/
│   ├── QuickBookingWidget.tsx   # Client Component (Date picker, guest counter, WhatsApp bridge)
│   ├── BookingForm.tsx          # Client Component (Full booking form with validation)
│   └── WhatsAppButton.tsx       # Client Component (Pre-filled encoded WhatsApp link)
│
└── ui/
    ├── Badge.tsx                # Reusable status/pill tag
    ├── Button.tsx               # Standardized accessible button variants
    └── LightboxModal.tsx        # Client Component (Full-screen photo zoom modal)
```

---

## 4. Centralized Data Architecture (`data/`)

To ensure content changes (tariffs, room specs, phone numbers) do not require touching JSX code, all business data is housed in strongly-typed TypeScript modules in `data/`:

* `data/hotel-info.ts`: Legal name, standardized NAP, GPS coordinates, Google Maps CID, phone numbers, and WhatsApp numbers.
* `data/rooms.ts`: Array of 4 room objects (id, name, slug, tag, basePrice, capacity, bedType, description, amenities, images).
* `data/amenities.ts`: Verified property facilities with SVG icons and descriptions.
* `data/faqs.ts`: Categorized questions and answers matching Schema.org standards.
* `data/distances.ts`: Destination name, distance in kilometers, driving/walking time, and travel notes.
* `data/reviews.ts`: Authentic guest testimonials with star ratings, guest names, and review sources.

---

## 5. Metadata & Open Graph Engine (`lib/seo/`)

Every page exports a typed Next.js `Metadata` object. We implement a reusable helper `constructMetadata()` in `lib/seo/metadata.ts`:

```typescript
import { Metadata } from 'next';

interface MetadataProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description,
  canonicalUrl,
  ogImage = '/images/hotel-waidhan-exterior.webp',
  noIndex = false,
}: MetadataProps): Metadata {
  return {
    title: `${title} | Hotel Waidhan BNB`,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Hotel Waidhan Singrauli BNB',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}
```

---

## 6. Image & Font Optimization Strategy

### Image Optimization Rules:
* All assets stored in `public/images/` in modern WebP format.
* The Homepage Hero photograph utilizes Next.js prioritized loading:
  ```tsx
  <Image
    src="/images/hotel-waidhan-exterior.webp"
    alt="Hotel Waidhan Singrauli BNB Exterior at Ambedkar Chowk"
    priority={true}
    quality={85}
    fill
    sizes="(max-width: 768px) 100vw, 1920px"
    className="object-cover"
  />
  ```
* All below-the-fold room photos use lazy loading (`loading="lazy"`) and explicit width/height dimensions.

### Font Optimization:
Configured in `app/layout.tsx`:
```typescript
import { Outfit, Inter } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
  weight: ['500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600'],
});
```

---

## 7. Phased Booking Lifecycle & Server Validation

### Phase 1: High-Converting WhatsApp & Direct Calling Engine (MVP)
* Guest inputs Check-in, Check-out, Room Type, and Guests in `QuickBookingWidget`.
* Client validates that Check-out is after Check-in.
* Pre-filled URL is generated:
  `https://wa.me/917879028316?text=Hello%20Hotel%20Waidhan%20BNB,%20I%20would%20like%20to%20book%20a%20[Room]%20from%20[CheckIn]%20to%20[CheckOut]%20for%20[Guests]%20guests.`
* Instant connection with live front-desk staff. Zero payment gateway failures.

### Phase 2: Database & Payment Gateway Architecture (Future Extension)
* Headless PostgreSQL/Supabase database holding `rooms`, `bookings`, `guests`, and `rate_plans`.
* Next.js Server Actions (`app/actions/booking.ts`) handle atomic reservation locking.
* Integration with **Razorpay** or **Cashfree** via secure server-side webhook validation (`/api/webhooks/razorpay`).

---

## 8. Deployment, Edge CDN & Environment Variables

* **Hosting Target:** Cloudflare Pages or Vercel Edge Network.
* **HTTPS/SSL:** Strict Transport Security (HSTS) with automatic 301 redirects from HTTP to HTTPS.
* **Environment Variables (`.env.production`):**
  * `NEXT_PUBLIC_SITE_URL=https://hotelwaidhanbnb.com`
  * `NEXT_PUBLIC_WHATSAPP_NUMBER=917879028316`
  * `NEXT_PUBLIC_PHONE_NUMBER=+917879028316`
  * `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`
