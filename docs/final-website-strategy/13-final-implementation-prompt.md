# 🤖 Next.js Implementation Task Master Prompt: Hotel Waidhan Singrauli BNB

```markdown
# MASTER PROMPT: Production Website Implementation in Next.js 14+
## Project: Hotel Waidhan Singrauli BNB (Comfort Stay & PG)
## Location: Ambedkar Chowk, Near Inter-State Bus Stand, Waidhan, Singrauli District, MP — 486886

Act as a Principal Full-Stack Engineer, Next.js Solution Architect, and Technical SEO Lead.

Your mission is to build, test, and deploy the complete, production-ready, keyword-optimized hotel website for **Hotel Waidhan Singrauli BNB** using **Next.js 14+ (App Router), TypeScript, and Vanilla CSS Design Tokens**.

---

### MANDATORY PREREQUISITE: READ THE APPROVED STRATEGY FIRST

Before creating any file, running initialization scripts, or writing code, you **MUST inspect and read the approved strategy specifications** in:
`docs/final-website-strategy/`

Specifically review:
1. `docs/final-website-strategy/00-executive-summary.md` — Project mission, positioning, and verified brand pillars.
2. `docs/final-website-strategy/02-brand-and-design-system.md` — Exact design tokens, HEX color palette, Outfit/Inter typography, and component specifications.
3. `docs/final-website-strategy/03-final-seo-strategy.md` — Master keyword clusters, JSON-LD schemas, and local SEO requirements.
4. `docs/final-website-strategy/04-final-sitemap-and-url-plan.md` — Definitive 24-page URL plan, navigation hierarchy, and Next.js route mapping.
5. `docs/final-website-strategy/05-keyword-to-page-mapping.csv` — Exact primary/secondary keywords, SEO titles, meta descriptions, and H1s per page.
6. `docs/final-website-strategy/06-page-by-page-design-spec.md` — Section-by-section wireframes and layouts for all 24 pages.
7. `docs/final-website-strategy/07-nextjs-architecture.md` — App Router directory structure, Server Components vs Client Islands, and data models.
8. `docs/final-website-strategy/08-technical-seo-acceptance-checklist.md` — The technical criteria your build must pass before completion.
9. `docs/final-website-strategy/09-content-and-copywriting-guide.md` — Production copy briefs, sample copy, and factual placeholders.
10. `docs/final-website-strategy/10-booking-and-conversion-spec.md` — WhatsApp pre-filled booking bridge, contact form validation, and analytics telemetry.
11. `docs/final-website-strategy/11-development-roadmap.md` — 4-sprint implementation order and milestone deliverables.

---

### CORE IMPLEMENTATION INSTRUCTIONS

#### 1. Tech Stack & Styling Rules
* Initialize Next.js 14+ in the current directory (`npx -y create-next-app@latest ./ --typescript --eslint --no-tailwind --app --src-dir=false`).
* Styling **must** use Vanilla CSS Custom Properties defined in `app/globals.css` based on `02-brand-and-design-system.md`. Do **not** use Tailwind CSS.
* Configure fonts using `next/font/google` (`Outfit` for headings, `Inter` for body copy) with `display: swap`.
* Support tripartite theming: Light Mode, Dark Mode, and System OS preference.

#### 2. Architecture & Directory Tree
Follow the exact file hierarchy in `07-nextjs-architecture.md`:
* `app/layout.tsx` (Global root layout with master `Hotel` and `BedAndBreakfast` JSON-LD schema, Header, Footer, and sticky MobileBottomBar).
* `app/page.tsx` (Homepage conversion engine with preloaded hero image).
* `app/rooms/` (Master Rooms catalog and individual detail routes: `/deluxe-ac-room`, `/standard-room`, `/dormitory`, `/pg-rooms`).
* `app/pricing/page.tsx`, `app/booking/page.tsx`, `app/corporate-stay/page.tsx`, `app/location/page.tsx`, `app/dining/page.tsx`, `app/gallery/page.tsx`, `app/amenities/page.tsx`, `app/reviews/page.tsx`, `app/faq/page.tsx`, `app/about/page.tsx`, `app/contact/page.tsx`.
* `app/guide/` (3 informational guides: `/places-to-visit-in-singrauli`, `/where-to-stay-in-waidhan`, `/how-to-reach-waidhan`).
* `app/sitemap.ts` (Dynamic XML sitemap listing all 24 indexable URLs).
* `app/robots.ts` (Dynamic robots.txt directives).
* `components/layout/`, `components/sections/`, `components/rooms/`, `components/booking/`, `components/ui/`.
* `data/` (`hotel-info.ts`, `rooms.ts`, `amenities.ts`, `faqs.ts`, `distances.ts`, `reviews.ts`).

#### 3. Booking & WhatsApp Conversion Funnel
* Implement the Phase 1 **Enquiry-First & Instant WhatsApp Bridge** as specified in `10-booking-and-conversion-spec.md`.
* Build `QuickBookingWidget.tsx` with date picker (Check-in, Check-out, Room Type, Guests) that generates a standardized pre-filled WhatsApp message to `+91 78790 28316` applying the `DIRECT10` promo code.
* Add persistent mobile bottom action bar (< 768px): `📞 Call Reception` (`tel:+917879028316`) + `💬 WhatsApp Desk`.

#### 4. Technical SEO & Schema Mandates
* Every page must export an accurate `Metadata` object matching `05-keyword-to-page-mapping.csv`.
* Inject Schema.org JSON-LD scripts:
  * Sitewide: `@type: ["Hotel", "BedAndBreakfast"]` with coordinates `24.0629752, 82.6300981`, address, and amenities.
  * Room pages: `@type: "HotelRoom"` with offers, occupancy, and bed details.
  * Homepage & FAQ: `@type: "FAQPage"`.
  * Subpages: `@type: "BreadcrumbList"`.
* All images served via `next/image` in WebP format with explicit dimensions and descriptive `alt` tags.

#### 5. Quality Assurance & Final Verification
Before considering the implementation complete:
1. Run `npm run build` to confirm zero TypeScript or linting errors.
2. Confirm all 24 URLs render without 404 or hydration mismatches.
3. Validate structured data in Google Rich Results Test format.
4. Verify mobile responsiveness, dark/light theme switching, and WhatsApp link generation.

Do not guess or deviate from the approved strategy documents in `docs/final-website-strategy/`.
```
