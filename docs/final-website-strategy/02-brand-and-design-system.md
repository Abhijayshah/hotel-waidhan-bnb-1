# 🎨 Hotel Waidhan Singrauli BNB — Brand Identity & Design System Specification
> **Document:** `02-brand-and-design-system.md`  
> **Brand Entity:** Hotel Waidhan Singrauli BNB (*Comfort Stay & PG*)  
> **Target Framework:** Next.js 14+ (App Router) with Vanilla CSS Design Tokens  
> **Accessibility Standard:** WCAG 2.1 AA Compliant (Minimum 4.5:1 Contrast Ratio)  

---

## 1. Brand Identity & Visual Personality

**Hotel Waidhan Singrauli BNB** operates in the dignified, honest budget-to-executive hospitality tier. It explicitly rejects:
* ❌ Fake luxury tropes (garish gold filigree, ornate fake chandeliers, pretentious copy).
* ❌ Dark-pattern urgency (fake countdown timers, misleading *"Only 1 room left!"* alerts).
* ❌ Stock photos misrepresenting the physical property.

### The Desired Visual Personality:
* **Dependable & Safe:** Communicating round-the-clock security, 24/7 power backup, and pristine hygiene.
* **Modern & Clean:** Ample breathing room, crisp sans-serif typography, and uncluttered navigation.
* **Warm & Welcoming:** Earthy slate blues paired with warm amber and emerald accents reflecting authentic Indian hospitality (*"Atithi Devo Bhava"*).
* **Speed-Obsessed & Mobile-First:** Designed for seamless one-handed operation on low-bandwidth 4G mobile devices across the Singrauli industrial belt.

---

## 2. Design Tokens & Color Palette

The design tokens are declared as CSS Custom Properties in `globals.css` to enable instantaneous, zero-runtime theme transitions (Light, Dark, and System OS preference).

```css
:root {
  /* Brand Primary (Deep Executive Slate) */
  --color-primary-950: #0B1120;
  --color-primary-900: #0F172A;
  --color-primary-800: #1E293B;
  --color-primary-700: #334155;
  --color-primary-600: #475569;
  
  /* Brand Secondary / Accent (Warm Hospitality Amber) */
  --color-accent-600: #D97706;  /* Primary Interactive CTA */
  --color-accent-500: #F59E0B;  /* Hover State */
  --color-accent-400: #FBBF24;  /* Star Ratings & Highlights */
  --color-accent-100: #FEF3C7;  /* Accent Badges Background */
  
  /* Conversion & Messaging (WhatsApp & Trust Emerald) */
  --color-success-600: #059669;
  --color-whatsapp:    #25D366;  /* Official WhatsApp Green */
  --color-whatsapp-dark: #128C7E;
  
  /* Surfaces & Backgrounds (Light Theme Default) */
  --bg-app:            #F8FAFC;  /* Slate 50 */
  --bg-surface:        #FFFFFF;  /* Pure White Cards */
  --bg-surface-glass:  rgba(255, 255, 255, 0.85);
  --border-subtle:     #E2E8F0;  /* Slate 200 */
  --border-strong:     #CBD5E1;  /* Slate 300 */
  
  /* Typography Text Colors (Light Theme) */
  --text-main:         #0F172A;  /* Slate 900 (High Contrast) */
  --text-muted:        #475569;  /* Slate 600 */
  --text-subtle:       #64748B;  /* Slate 500 */
  --text-inverse:      #FFFFFF;
}

/* Dark Theme Overrides (Auto-applied via [data-theme="dark"] or prefers-color-scheme) */
[data-theme="dark"] {
  --bg-app:            #0B1120;  /* Deep Navy-Black */
  --bg-surface:        #1E293B;  /* Slate 800 Surface */
  --bg-surface-glass:  rgba(30, 41, 59, 0.85);
  --border-subtle:     #334155;  /* Slate 700 */
  --border-strong:     #475569;
  
  --text-main:         #F8FAFC;  /* Slate 50 */
  --text-muted:        #CBD5E1;  /* Slate 300 */
  --text-subtle:       #94A3B8;  /* Slate 400 */
  --text-inverse:      #0F172A;
}
```

---

## 3. Typography Scale & Hierarchy

We pair **Outfit** (for confident, modern headings) with **Inter** (for world-class readability in body copy and data tables). Both fonts are loaded via `next/font/google` for zero-layout-shift and 100% self-hosted privacy compliance.

### Font Scale:
| CSS Class / Element | Font Family | Size (Desktop) | Size (Mobile) | Line Height | Weight | Purpose |
|---|---|---|---|---|---|---|
| `display-1` / Hero `<h1>` | Outfit | 3.0rem (48px) | 2.125rem (34px) | 1.15 | 700 Bold | Homepage Hero Headline |
| `h1` | Outfit | 2.25rem (36px) | 1.75rem (28px) | 1.25 | 700 Bold | Subpage Primary Titles |
| `h2` | Outfit | 1.875rem (30px) | 1.5rem (24px) | 1.30 | 600 SemiBold | Major Section Headers |
| `h3` | Outfit | 1.375rem (22px) | 1.25rem (20px) | 1.35 | 600 SemiBold | Room & Card Titles |
| `h4` | Outfit | 1.125rem (18px) | 1.125rem (18px) | 1.40 | 600 SemiBold | Small Component Headers |
| `body-lg` | Inter | 1.125rem (18px) | 1.0rem (16px) | 1.60 | 400 Regular | Hero Lead Paragraphs |
| `body-md` (Default) | Inter | 1.0rem (16px) | 0.9375rem (15px)| 1.65 | 400 Regular | General Content & Copy |
| `body-sm` | Inter | 0.875rem (14px) | 0.875rem (14px) | 1.50 | 400 / 500 | Amenities, Badges, Table Rows |
| `caption` | Inter | 0.75rem (12px) | 0.75rem (12px) | 1.40 | 500 Medium | Timestamps, Legal Disclaimers |

---

## 4. Spacing System & Grid Layout

Layouts strictly follow an **8-point spatial system** to guarantee visual harmony:

```css
:root {
  --space-1: 0.25rem; /* 4px */
  --space-2: 0.5rem;  /* 8px */
  --space-3: 0.75rem; /* 12px */
  --space-4: 1.0rem;  /* 16px */
  --space-6: 1.5rem;  /* 24px */
  --space-8: 2.0rem;  /* 32px */
  --space-12: 3.0rem; /* 48px */
  --space-16: 4.0rem; /* 64px */
  --space-24: 6.0rem; /* 96px */
  
  /* Container Widths */
  --container-max: 1240px;
  --container-narrow: 840px; /* For editorial travel guides & policies */
}
```

### Responsive Breakpoints:
* **Mobile (Base):** `< 640px` (Single-column, tap targets ≥ 48px, sticky bottom action bar).
* **Tablet (`sm`/`md`):** `640px – 1023px` (2-column grids, collapsible drawer navigation).
* **Desktop (`lg`):** `1024px – 1279px` (Full navigation bar, multi-column card grids).
* **Wide Desktop (`xl`):** `≥ 1280px` (Max container constraint with auto margins).

---

## 5. UI Elevation, Shadows & Glassmorphism

```css
:root {
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;
  
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.12), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
  
  /* Glassmorphism Effect for Nav and Sticky Widgets */
  --glass-backdrop: blur(12px) saturate(180%);
}
```

---

## 6. Button & Interactive Component Standards

### 1. Primary Action Button (`.btn-primary`)
* Background: `--color-accent-600` (#D97706); Text: White; Radius: `--radius-md`; Height: 48px.
* Hover: `--color-accent-500` (#F59E0B) with subtle translateY(-1px).
* Use: Direct Booking trigger, Submit Enquiry, Check Rates.

### 2. WhatsApp Instant Action Button (`.btn-whatsapp`)
* Background: `--color-whatsapp` (#25D366); Text: White; Icon: WhatsApp SVG; Height: 48px.
* Hover: `--color-whatsapp-dark` (#128C7E).
* Use: Instant WhatsApp reservation, late-night transit enquiries.

### 3. Phone Call Button (`.btn-phone`)
* Background: `--color-primary-800` (#1E293B); Text: White; Icon: Telephone SVG; Height: 48px.
* Hover: `--color-primary-700` (#334155).
* Use: Direct click-to-call front desk (`tel:+917879028316`).

### 4. Secondary / Outline Button (`.btn-outline`)
* Border: 1.5px solid `--border-strong`; Background: Transparent; Text: `--text-main`.
* Hover: Background `--color-primary-900`, Text White.
* Use: "View Details", "Explore Amenities", "Read Travel Guide".

---

## 7. Photography & Visual Asset Standards

1. **Aspect Ratio Conventions:**
   * **Hero Banners:** `16:9` on desktop (`width="1920" height="1080"`), `4:3` on mobile.
   * **Room Cards:** `4:3` aspect ratio (`width="800" height="600"`).
   * **Gallery & Lightbox:** Native uncropped `4:3` or `3:2` WebP assets.
   * **Amenity / Staff Icons:** Square `1:1` (`width="48" height="48"`).
2. **Real Property Photography Mandate:**
   * Exterior building facade showing legible signboard at Ambedkar Chowk.
   * Deluxe AC Room with king bed, split AC unit, work desk, and crisp linens.
   * Attached private washroom demonstrating clean western commode and water geyser.
   * Dormitory bunk room demonstrating clean beds, individual storage lockers, and USB ports.
   * Reception desk with friendly front-desk staff.
3. **Asset Optimization Rules:**
   * All assets converted to lossy **WebP** (Quality 82%).
   * Maximum file weight: **< 150 KB** for room photos; **< 250 KB** for full-bleed hero assets.
   * Explicit `width` and `height` attributes on every Next.js `<Image />` component to prevent layout shifts (CLS < 0.02).

---

## 8. Mobile-First Component Inventory

The frontend architecture is modularized into 16 reusable React components:

1. `Header`: Sticky glassmorphic navigation with location pill, phone helpline, and theme switcher.
2. `MobileBottomBar`: Fixed 2-button action strip (`📞 Call Reception` + `💬 WhatsApp Desk`).
3. `HeroSection`: Full-bleed photograph, localized `<h1>`, trust badges, and quick-booking widget.
4. `QuickBookingWidget`: Interactive date picker, room selector, guest counter, and rate calculator.
5. `RoomCard`: Horizontal/vertical card with image carousel, amenity pills, tariff block, and dual CTAs.
6. `AmenityGrid`: 6-card interactive grid with SVG icons and practical descriptions.
7. `TariffTable`: Comparison matrix showing daily, weekly, and monthly rates with discount code highlight.
8. `DistanceMatrix`: Visual industrial and transit route card with kilometers and driving times.
9. `GalleryGrid`: Filterable photo gallery with high-resolution lightbox modal.
10. `ReviewCard`: Verified Google Maps testimonial card with star rating and guest designation.
11. `FAQAccordion`: Keyboard-accessible collapsible accordion matching Schema.org requirements.
12. `LocationSection`: Embedded Google Map (CID: 500647895475654140) with transit directions.
13. `ContactForm`: Client-side validated enquiry form with anti-spam honeypot and WhatsApp payload generator.
14. `Breadcrumbs`: Automated schema-compliant navigation breadcrumb trail.
15. `Footer`: 4-column legal NAP, quick links, policies, and Google review link.
16. `ThemeToggle`: 3-state toggle (Light / Dark / System OS preference).
