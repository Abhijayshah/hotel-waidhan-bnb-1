# 🛠️ Hotel Waidhan BnB — Technical Architecture & Developer Specification
> **File:** `details-for-developer.md`  
> **Target Audience:** Frontend Engineers, Full-Stack Developers, DevOps, QA Engineers, and Technical Leads  
> **Version:** `1.3.0`  
> **Last Updated:** October 2026  
> **Status:** Active / Production-Ready  

---

## 📑 Table of Contents
1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [File Structure](#3-file-structure)
4. [Key Components & Modules](#4-key-components--modules)
5. [Routing Structure](#5-routing-structure)
6. [API Endpoints & Client Data Contracts](#6-api-endpoints--client-data-contracts)
7. [Styling System & Design Tokens](#7-styling-system--design-tokens)
8. [Environment Variables](#8-environment-variables)
9. [Scripts & Commands](#9-scripts--commands)
10. [Dependencies & Assets](#10-dependencies--assets)
11. [Deployment & Server Configuration](#11-deployment--server-configuration)
12. [Future Roadmap & Extension Guidelines (Living Document)](#12-future-roadmap--extension-guidelines-living-document)

---

## 1. PROJECT OVERVIEW

### 1.1 Project Identity & Commercial Context
* **Project Name:** Hotel Waidhan BnB (*Comfort Stay & PG*)
* **Domain / URL:** `https://hotelwaidhanbnb.com` (Staging: `http://localhost:8080`)
* **Physical Location:** Ambedkar Chowk, Near Inter-State Bus Stand, Waidhan, District Singrauli, Madhya Pradesh — 486886, India.
* **Exact Geo Coordinates:** Latitude `24.0629752`, Longitude `82.6300981`
* **Google Business Profile (GBP) CID:** `500647895475654140` ([Open in Google Maps](https://maps.app.goo.gl/gz9ZMdWVEUf4wPUc7))

### 1.2 Main Purpose & Core Goals
1. **Zero-Commission Direct Bookings:** Eliminate the 18–25% commission toll exacted by Online Travel Agencies (OTAs like MakeMyTrip, OYO, Booking.com) by steering potential guests through a friction-free, personalized direct booking funnel backed by instant WhatsApp quotations and direct calling lines.
2. **Sub-Second Performance & High Accessibility:** Provide an ultra-lightweight, zero-framework web experience with sub-50ms TTFB and <0.5s FCP, catering to mobile users on 3G/4G transit connections across the industrial Singrauli corridor.
3. **Local SEO & Google Search Domination:** Leverage rigorous Schema.org JSON-LD microdata, geo-targeting, semantic HTML5, and automated review capture loops to capture high-intent regional keywords (*"cheapest hotel in waidhan"*, *"hotels near waidhan bus stand"*, *"pg in waidhan singrauli"*).
4. **Hybrid Accommodation Coverage:** Serve the entire spectrum of local demand: single dormitory bunk beds (₹349), economy private rooms (₹599), deluxe desert-cooler rooms (₹849), corporate executive AC suites (₹1,299), monthly PG stays for engineers/students (₹4,500/mo), and banquet/event hall bookings.

### 1.3 Target Audience & User Personas
* **Industrial Corporate Engineers & Auditors:** Visiting NTPC Vindhyanagar (10 km), Northern Coalfields Limited (NCL HQ, 15 km), Reliance Sasan Power, or Essar Power. Need fast Wi-Fi, split AC, working desks, GST tax invoices, and quiet environments.
* **Transit & Budget Travellers:** Arriving via Waidhan Inter-State Bus Stand (500m walk), Morwa Railway Station (16 km), or Shaktinagar Station (12 km). Need clean budget lodging (₹349–₹599) with hot water and secure locker storage.
* **Students & Competitive Exam Candidates:** Sitting for exams at Government College Waidhan or regional testing centers. Require quiet, economical single dormitory bunks.
* **Family & Wedding Delegations:** Attending functions at Shree Grand Banquet Hall or exploring local attractions (Mada Rock Cut Caves, Rihand Dam reservoir).

---

## 2. TECH STACK

```
┌───────────────────────┬────────────────────────────────────────────────────────┐
│ Layer                 │ Technology / Specification                             │
├───────────────────────┼────────────────────────────────────────────────────────┤
│ Frontend Core         │ Semantic HTML5, Vanilla JavaScript (ES6+ Standards)    │
│ Styling Architecture  │ Pure Vanilla CSS3 with Custom Properties (Tokens)      │
│ UI Design Pattern     │ Glassmorphism, BEM-derived Utilities, Mobile-First     │
│ Theming Engine        │ Tripartite: Light, Dark, System OS Sync (<head> script)│
│ Client Data Store     │ Web Storage API (localStorage, JSON serialised)        │
│ Authentication        │ Client-side Session State, Mock OTP, Social OAuth      │
│ AI Assistant Engine   │ Pooja Sharma (Front Desk Heuristics + Optional LLM)    │
│ Media Player          │ Native HTML5 Video (WebM + MP4 + Poster Fallback)      │
│ Icons & Typography    │ Font Awesome 6.5.1 (SVG/CSS), Google Fonts (Outfit)    │
│ Build Overhead        │ 0 kB build steps (No Webpack/Vite/Babel needed)        │
│ Deployment Targets    │ Cloudflare Pages, Vercel, Netlify, Nginx, Apache       │
└───────────────────────┴────────────────────────────────────────────────────────┘
```

* **Frontend Framework:** Pure Vanilla JavaScript (ES6+). Zero third-party runtime framework (No React, Vue, Angular, or jQuery). This keeps bundle sizes minimal, prevents dependency rot, and allows direct execution in all standard browsers.
* **Styling:** Vanilla CSS3 using custom properties (`--accent`, `--bg-main`, `--text-main`). No Tailwind or Bootstrap compiled bloat.
* **Backend:** Serverless / Static Client-Side Architecture. Form inquiries and booking requests are dispatched directly to WhatsApp Web / WhatsApp Business API via standard URI schemas (`https://wa.me/...`) and click-to-call `tel:` handlers. Ready to be coupled with any Node.js/Express, Python/FastAPI, or Cloudflare Worker backend.
* **Database & Persistence:** Client-side `localStorage` stores guest session tokens, registered user registries, booking order history, and UI theme preferences.
* **Authentication Method:** Multi-modal authentication simulation (Mobile OTP 6-digit verification, Email/Password credential login, and Google / Apple Social Federation).
* **Build Tools:** Zero required. Directly servable via any static HTTP web server (`npx serve`, `python3 -m http.server`, or standard Nginx).
* **Package Manager:** `npm` (optional for local dev tooling or linters).

---

## 3. FILE STRUCTURE

```
hotel-waidhan-bnb/
├── index.html                            # Primary landing page & flagship hero showcase
├── rooms.html                            # Room catalogue, live filters & tariff matrix
├── about.html                            # Property heritage, management & hygiene SOPs
├── contact.html                          # Reception desk, inquiry form & Google Maps guide
├── login.html                            # Guest portal, OTP login, and account register
├── details-for-developer.md              # Technical engineering documentation (This file)
├── README.md                             # Comprehensive project overview & onboarding
├── SEO_AND_LOCAL_DOMINATION_PLAYBOOK.md  # 470+ line master local SEO & GBP roadmap
├── sitemap.xml                           # Canonical XML sitemap for search crawlers
├── robots.txt                            # Search engine indexation & crawler rules
├── css/
│   ├── styles.css                        # Global design system, layout, responsive tokens
│   └── auth.css                          # Authentication screens, step 1 banner, tabs
├── js/
│   ├── app.js                            # Main UI controller, theme sync, AI concierge
│   └── auth.js                           # Auth state management, session store, admin modal
└── assets/
    ├── staff-pooja.jpg                   # Avatar image for AI Concierge (Pooja Sharma)
    └── videos/
        ├── hotel-waidhan-hero-web.mp4    # Compressed high-efficiency MP4 hero video stream
        ├── hotel-waidhan-hero.webm       # WebM encoded stream for Chrome/Firefox
        ├── hotel-waidhan-hero.mp4        # Raw 1080p source video
        ├── hero-video-poster.jpg         # High-resolution poster image for fallback
        ├── frame_5s.jpg                  # Keyframe backup at 5 seconds
        ├── frame_9s.jpg                  # Keyframe backup at 9 seconds
        └── frame_13s.jpg                 # Keyframe backup at 13 seconds
```

### Detailed Purpose of Each File:

| File Name | Purpose & Contents |
| :--- | :--- |
| `index.html` | The primary entry point. Contains the Fullscreen HD video hero, dynamic availability search engine, room preview carousel, trust badges, banquet hall featurette, The Zaika restaurant showcase, photo gallery, accordion FAQ, reception contact grid with embedded Google Map iframe, and mobile navigation drawer. |
| `rooms.html` | Dedicated room directory page. Houses category filter pills (`All`, `Dormitory`, `Budget Non-AC`, `Deluxe AC`, `Monthly PG`), live occupancy tags, room detail cards, and direct booking modal triggers. |
| `about.html` | Brand narrative and trust builder. Documents the history of Hotel Waidhan BnB, cleanliness/sanitization protocols, leadership message, corporate NTPC/NCL partnerships, and guest testimonials. |
| `contact.html` | 2-column contact hub. Features an instant inquiry submission form, 24/7 reception phone list, landmark distance matrix, step-by-step transit directions, and verified Google Maps embed with full-screen CTA button. |
| `login.html` | User authentication hub. Features 3 tabbed modes: **Sign In** (Email/Password), **Mobile OTP** (+91 phone input with simulated code dispatch), and **Create Account**. Also houses the dynamic **Step 1 Booking Intent Banner**. |
| `css/styles.css` | Master stylesheet. Contains CSS root design tokens, typography scale, dark/light/system theme rules, navigation headers, glassmorphism cards, modals, lightbox, chatbot styles, and responsive breakpoints. |
| `css/auth.css` | Specialized auth styling. Handles login card elevation, social buttons (Google, Apple), tab transitions, password toggles, and the amber Booking Intent banner. |
| `js/app.js` | Master client logic. Controls the `ROOM_INVENTORY` dataset, theme switcher and OS listeners, hero video controls, search availability logic, booking modal price calculations, AI staff chatbot heuristics, gallery lightbox, and staff reception desk. |
| `js/auth.js` | Guest session and profile controller. Manages user registration, session persistence (`localStorage`), profile dropdowns in top header, logout, and the dynamic Book CTA redirection logic. |
| `sitemap.xml` | Standardized XML sitemap mapping all 5 HTML documents with their canonical URLs, last-modified dates, and crawl priorities. |
| `robots.txt` | Directs web spiders to allow full crawling of public routes while specifying sitemap location. |

---

## 4. KEY COMPONENTS & MODULES

### 4.1 Global Navigation Header (`.header`, `#main-header`)
* **Files:** Present across all 5 HTML files; styled in `css/styles.css` (`lines 130–450`).
* **Purpose:** Responsive navigation bar that adapts across Mobile, Tablet, Laptop, and Desktop.
* **Child Elements:**
  * `.brand-logo`: Hotel logo icon and brand typography.
  * `.nav-desktop`: Semantic anchor links (`Home`, `Rooms & Dorms`, `About Us`, `Contact`, `Banquet`, `Restaurant`, `Gallery`).
  * `#call-dropdown-wrap`: Interactive dropdown exposing all 3 direct front desk phone lines.
  * `#theme-dropdown-wrap`: Tripartite theme selector dropdown (`Light`, `Dark`, `System`).
  * `.auth-nav-slot`: Dynamic container populated by `js/auth.js`.
  * `#btn-hamburger`: Mobile drawer trigger icon.

### 4.2 Dynamic "Book" CTA Button (`.btn-book-nav`, `#btn-header-book`)
* **Files:** Injected dynamically into `.auth-nav-slot` by `js/auth.js` (`lines 78–125`).
* **Purpose:** High-conversion pill button styled with a warm gold gradient (`linear-gradient(135deg, #d4af37, #f59e0b)`).
* **Behavior:**
  * When visitor is a **Guest (Not logged in)**: Points to `login.html?redirect=rooms.html&intent=book`.
  * When visitor is **Authenticated**: Points directly to `rooms.html` alongside a personalized profile greeting (`Hi, [FirstName]`).

### 4.3 Tripartite Theme Controller (`initThemeSystem()`)
* **Files:** Initialized in `js/app.js` (`lines 170–330`) with inline pre-render script in the `<head>` of all 5 HTML files.
* **Architecture:**
  * Inspects `localStorage.getItem('waidhan_theme_preference')`.
  * If set to `'system'` or absent: Evaluates `window.matchMedia('(prefers-color-scheme: light)').matches`.
  * Sets `document.documentElement.setAttribute('data-theme', resolvedTheme)`.
  * Attaches live listeners to `(prefers-color-scheme: light)` to dynamically switch themes if the OS setting toggles while browsing.

### 4.4 HD Hero Video Engine (`initHeroVideo()`)
* **Files:** Markup in `index.html` (`lines 175–215`); logic in `js/app.js` (`lines 340–385`).
* **Purpose:** Auto-plays ambient hotel footage with zero audio on load.
* **Key Features:**
  * Dual source `<source src="assets/videos/hotel-waidhan-hero.webm">` and `<source src="assets/videos/hotel-waidhan-hero-web.mp4">`.
  * Fallback poster `assets/videos/hero-video-poster.jpg`.
  * Toggle button (`#btn-video-toggle`) allowing users to pause/resume playback.
  * Hardware-accelerated CSS isolation (`z-index: 0; isolation: isolate;`) to prevent background blur artifacts.

### 4.5 Live Room Inventory & Filter Engine (`renderRooms()`)
* **Files:** `rooms.html` and `index.html`; logic in `js/app.js` (`lines 415–520`).
* **Data Source:** `ROOM_INVENTORY` array (`js/app.js:7-160`).
* **Behavior:**
  * Filters cards by category (`all`, `dormitory`, `budget`, `ac`, `pg`).
  * Generates responsive cards with live availability badges (`🟢 Available`, `🟠 Only 1 Room Left`).
  * "Book Now" buttons invoke `openBookingModal(room)`.

### 4.6 Booking Modal & WhatsApp Quotation Generator (`initBookingModal()`)
* **Files:** Modal markup `#booking-modal` in `index.html` and `rooms.html`; logic in `js/app.js` (`lines 655–835`).
* **Dynamic Calculations:**
  * Calculates nights: `Math.max(1, Math.round((checkout - checkin) / (1000 * 60 * 60 * 24)))`.
  * Calculates total price: `nights * roomPrice * roomCount`.
  * Calculates 10% direct booking discount: `total * 0.10`.
  * Net payable amount displayed in real-time.
* **WhatsApp Dispatch:** Formats a pre-filled booking confirmation text message and launches `https://wa.me/917879028316?text=...` in a new tab.
* **Internal Storage:** Appends booking record to `localStorage` under `waidhan_bookings_v1`.

### 4.7 AI Reception Concierge ("Pooja Sharma") (`initAiChatbot()`)
* **Files:** `#staff-chat-widget` in all HTML pages; logic in `js/app.js` (`lines 840–1390`).
* **Features:**
  * Heuristic NLP intent parser matching room inquiries, PG terms, banquet hall bookings, check-in policies, and directions.
  * Direct action buttons inside chat bubble (e.g. "Open Hotel in Google Maps", "Call Banquet Desk").
  * Settings modal (`#chat-settings-modal`) allowing developers/users to plug in live **Google Gemini API** or **OpenAI API** keys stored locally.

### 4.8 Hotel Location Card & Google Maps Integration
* **Files:** `contact.html` (`lines 355–405`) and `index.html` (`lines 738–790`).
* **Elements:**
  * Golden CTA button: `Open Hotel in Google Maps App` linking to `https://maps.app.goo.gl/gz9ZMdWVEUf4wPUc7`.
  * Embedded Google Maps iframe pinned to `24.0629752,82.6300981`.
  * Action link: `Tap to View Full Screen in Google Maps`.

### 4.9 Mobile Navigation Drawer & Bottom Bar (`initMobileDrawer()`)
* **Files:** `#mobile-drawer` and `#bottom-nav-bar` in all HTML files.
* **Behavior:**
  * Provides native app-like tab navigation at the bottom of the screen on devices `<768px`.
  * Includes active scroll-spy to highlight current page section.

---

## 5. ROUTING STRUCTURE

The application operates as a high-performance **Multi-Page Static Site (MPA)** with hash-anchored section navigation.

### 5.1 Canonical Page Routes
| Route | File Path | Description | Access Control |
| :--- | :--- | :--- | :--- |
| `/` or `/index.html` | `/index.html` | Primary landing page, video hero, room carousel, highlights | Public |
| `/rooms.html` | `/rooms.html` | Complete room catalogue, category filters, booking triggers | Public |
| `/about.html` | `/about.html` | Property history, cleanliness SOPs, management values | Public |
| `/contact.html` | `/contact.html` | Contact desk, direct inquiry form, maps, transit matrix | Public |
| `/login.html` | `/login.html` | Guest authentication portal (Sign In, OTP, Create Account) | Public |

### 5.2 Dynamic Hash Anchors (Index Page)
* `index.html#home`: Hero video and search availability widget.
* `index.html#rooms`: Room categories and live inventory.
* `index.html#banquet`: Shree Grand Banquet Hall features.
* `index.html#restaurant`: The Zaika multi-cuisine restaurant details.
* `index.html#gallery`: Hotel photography grid and lightbox triggers.
* `index.html#contact`: Hotel location card, Google Maps embed, inquiry form.

### 5.3 URL Query Parameters & Navigation Intents
* **`intent=book`**: Passed when an unauthenticated user clicks the top nav "Book" button. Triggers visibility of `#auth-booking-intent-banner` on `login.html`.
* **`redirect=[target_url]`**: Instructs `js/auth.js` where to send the user immediately following successful login or account registration (e.g., `login.html?redirect=rooms.html`).

---

## 6. API ENDPOINTS & CLIENT DATA CONTRACTS

Because the frontend is currently client-side and serverless, external communications use standard URI scheme protocols and structured local data entities.

### 6.1 Client-Side Data Schemas

#### A. Room Item Model (`ROOM_INVENTORY[i]`)
```typescript
interface RoomItem {
  id: string;               // e.g., 'dorm-bed', 'executive-ac'
  title: string;            // Display title
  category: 'dormitory' | 'budget' | 'ac' | 'pg';
  price: number;            // Rate in INR (e.g., 349, 1299)
  priceUnit: string;        // e.g., '/ night' or '/ month'
  totalCapacity: number;    // Total physical units
  availableUnits: number;   // Available units today
  status: 'available' | 'low' | 'soldout';
  statusText: string;       // e.g., '🟢 4 Rooms Available'
  image: string;            // Image URL
  description: string;      // Marketing & amenity description
  features: Array<{
    icon: string;           // Font Awesome class (e.g., 'fas fa-snowflake')
    text: string;           // Feature description
  }>;
  bedType: string;          // e.g., '1 King Bed'
  occupancy: string;        // e.g., '2 Adults + 1 Child'
}
```

#### B. User Session Model (`AUTH_STORAGE_KEY: waidhan_bnb_current_user`)
```typescript
interface UserSession {
  id: string;               // e.g., 'user_1729584930123'
  name: string;             // Full name
  email?: string;           // Email address (if provided)
  phone?: string;           // 10-digit phone number
  provider: 'Credentials' | 'Mobile OTP' | 'Google' | 'Apple';
  registeredAt: string;     // ISO timestamp
  lastLogin: string;        // ISO timestamp
}
```

#### C. Booking Record Model (`waidhan_bookings_v1`)
```typescript
interface BookingRecord {
  id: string;               // e.g., 'WB-1729584930'
  roomTitle: string;        // Room name
  roomId: string;           // Room ID
  guestName: string;        // Guest Full Name
  guestPhone: string;       // 10-digit phone
  guestEmail: string;       // Email
  checkin: string;          // YYYY-MM-DD
  checkout: string;         // YYYY-MM-DD
  nights: number;           // Calculated duration
  roomsCount: number;       // Number of units
  guestsCount: string;      // Guest tally
  totalAmount: number;      // Net payable amount after 10% discount
  specialRequests?: string; // Additional notes
  createdAt: string;        // ISO timestamp
  status: 'Confirmed' | 'Pending Verification';
}
```

### 6.2 External Communication Handlers
* **WhatsApp Business Gateway:**
  * **URI:** `https://wa.me/917879028316?text={encoded_message}`
  * **Payload:** Formatted reservation quotation including Room Title, Guest Name, Check-in/Out dates, Nights, and Total Amount.
* **Telephony Click-to-Call Handlers:**
  * `tel:+917879028316` (Line 1: Reception & Booking Desk)
  * `tel:+919770236735` (Line 2: Manager & VIP Desk)
  * `tel:+919109302812` (Line 3: Shree Grand Banquet & Events)
* **Official Reservations Mailto:**
  * `mailto:reservations@hotelwaidhanbnb.com`
* **Google Maps Deep Navigation Link:**
  * `https://maps.app.goo.gl/gz9ZMdWVEUf4wPUc7`

---

## 7. STYLING SYSTEM & DESIGN TOKENS

### 7.1 Architecture & Token Map
All styling rules reside in `css/styles.css` (global platform) and `css/auth.css` (guest portal).
Styles are structured using CSS Custom Properties attached to `:root` with attribute selector overrides (`[data-theme="dark"]`, `[data-theme="light"]`).

```css
/* Core Color Tokens */
--accent: #d4af37;           /* Warm Imperial Gold */
--accent-hover: #b8972a;     /* Deep Antique Amber */
--accent-subtle: rgba(212, 175, 55, 0.12);
--accent-glow: rgba(212, 175, 55, 0.35);

/* Dark Palette (Default) */
--bg-main: #0b1120;          /* Deep Slate Obsidian */
--bg-surface: #111a2e;       /* Card Surface */
--bg-surface-elevated: #1a253c;
--text-main: #f8fafc;        /* High-contrast pure white */
--text-muted: #94a3b8;       /* Medium Slate */
--border-light: rgba(255, 255, 255, 0.08);

/* Light Palette */
--bg-main: #f8fafc;          /* Pure Daylight Canvas */
--bg-surface: #ffffff;       /* Elevated Pure White */
--bg-surface-elevated: #f1f5f9;
--text-main: #0f172a;        /* High-contrast Charcoal */
--text-muted: #475569;
--border-light: rgba(15, 23, 42, 0.1);
```

### 7.2 Responsive Breakpoint Matrix
| Breakpoint Token | Width Range | Target Devices | Layout Adaptations |
| :--- | :--- | :--- | :--- |
| **Mobile Compact** | `< 480px` | Small smartphones (iPhone SE) | Single column cards, stacked action buttons, bottom bar active |
| **Mobile Standard**| `481px – 767px` | Modern smartphones (iPhone 14, Galaxy) | Search bar stacked, drawer navigation enabled |
| **Tablet Portrait**| `768px – 991px` | iPad Air, tablets, foldables | 2-column room grid, condensed header actions |
| **Laptop / Small Desktop** | `992px – 1220px`| 13" MacBooks, standard laptops | Desktop nav enabled, compact button padding (`0.35rem 0.55rem`) |
| **Full HD Desktop**| `1221px – 1919px`| 1080p Desktop Monitors | Full 3-column room grid, expanded floating docks |
| **Ultra-Wide** | `> 1920px` | 2K, 4K, Ultra-wide screens | Contained by `.container { max-width: 1280px; }` |

---

## 8. ENVIRONMENT VARIABLES

When migrating or containerizing this platform, configure the following environment parameters:

| Variable Name | Required | Default Value | Purpose |
| :--- | :---: | :--- | :--- |
| `PORT` | Optional | `8080` | Local HTTP server listener port |
| `HOTEL_PHONE_PRIMARY` | Required | `+91 78790 28316` | Main reception & WhatsApp booking line |
| `HOTEL_PHONE_MANAGER` | Optional | `+91 97702 36735` | Manager & Corporate VIP escalation line |
| `HOTEL_PHONE_BANQUET` | Optional | `+91 91093 02812` | Banquet hall booking line |
| `HOTEL_EMAIL` | Required | `reservations@hotelwaidhanbnb.com` | Official reservation mailbox |
| `GOOGLE_MAPS_SHORTLINK`| Required | `https://maps.app.goo.gl/gz9ZMdWVEUf4wPUc7` | Verified GBP location URL |
| `GOOGLE_MAPS_CID` | Required | `500647895475654140` | Google Business Profile CID number |
| `GEMINI_API_KEY` | Optional | `""` | Google AI Studio key for live chatbot inference |
| `OPENAI_API_KEY` | Optional | `""` | OpenAI key for live chatbot fallback |
| `SMS_GATEWAY_API_KEY`| Optional | `""` | Fast2SMS/Twilio key for real production OTP |

---

## 9. SCRIPTS & COMMANDS

### 9.1 Local Development Commands
```bash
# 1. Start local server using Python 3
python3 -m http.server 8080

# 2. Start local server using Node.js npx serve
npx serve -l 8080 .

# 3. Start local server using live-server with auto-reload
npx live-server --port=8080

# 4. Check git status and staged changes
git status -s
```

### 9.2 Validation & Quality Audits
```bash
# Validate HTML5 compliance using W3C validator CLI
npx html-validator-cli --file=index.html --file=rooms.html --file=contact.html

# Run local Lighthouse performance & SEO audit
npx lighthouse http://localhost:8080 --view --output=html
```

---

## 10. DEPENDENCIES & ASSETS

### 10.1 External CDN Dependencies
* **Font Awesome 6.5.1 (Icons):**  
  `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css`  
  *Loaded via `<link rel="stylesheet">` with `crossorigin="anonymous"`.*
* **Google Fonts (Typography):**  
  `https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap`

### 10.2 Static Media Assets (`assets/`)
* **`assets/staff-pooja.jpg`**: Portrait photograph of front desk concierge Pooja Sharma for chat UI.
* **`assets/videos/hotel-waidhan-hero-web.mp4`**: High-performance H.264 video optimized for web playback (3.7 MB).
* **`assets/videos/hotel-waidhan-hero.webm`**: VP9 WebM video for native modern browser support (4.5 MB).
* **`assets/videos/hero-video-poster.jpg`**: High-resolution first-frame still image for fast initial render.

---

## 11. DEPLOYMENT & SERVER CONFIGURATION

### 11.1 Cloudflare Pages Deployment
1. Connect Git repository to Cloudflare Pages.
2. Build Settings:
   * **Framework Preset:** `None`
   * **Build Command:** *(Leave blank)*
   * **Build Output Directory:** `/`
3. Add Custom Domain: `hotelwaidhanbnb.com`.

### 11.2 Nginx Production Virtual Host (`nginx.conf`)
```nginx
server {
    listen 80;
    server_name hotelwaidhanbnb.com www.hotelwaidhanbnb.com;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name hotelwaidhanbnb.com www.hotelwaidhanbnb.com;

    root /var/www/hotel-waidhan-bnb;
    index index.html;

    # SSL Certificates
    ssl_certificate /etc/letsencrypt/live/hotelwaidhanbnb.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/hotelwaidhanbnb.com/privkey.pem;

    # Compression
    gzip on;
    gzip_types text/plain text/css application/javascript application/json image/svg+xml video/mp4;

    # Asset Caching
    location ~* \.(jpg|jpeg|png|gif|webp|svg|mp4|webm|woff2)$ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }

    # Security Headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## 12. FUTURE ROADMAP & EXTENSION GUIDELINES (LIVING DOCUMENT)

This section is designed to be updated by developers as new features, backends, and integrations are introduced.

### 12.1 Living Changelog
* **v1.0.0 (October 2026):** Initial single-page architecture with room cards, contact info, and WhatsApp booking.
* **v1.1.0 (October 2026):** Converted to multi-page platform (`rooms.html`, `about.html`, `contact.html`, `login.html`). Integrated full-screen HD video hero.
* **v1.2.0 (October 2026):** Added tripartite theme engine (`Light`, `Dark`, `System` OS sync) with FOUC prevention. Implemented dynamic "Book" CTA with auth gatekeeper and Step 1 Booking Intent banner.
* **v1.3.0 (October 2026):** Pinned official Google Maps listing link (`https://maps.app.goo.gl/gz9ZMdWVEUf4wPUc7`) and coordinates across all pages. Created comprehensive developer specification (`details-for-developer.md`).

### 12.2 Planned Upgrades & Extension Guidelines (TODO)

#### [ ] 1. Production SMS / WhatsApp OTP Gateway Integration
* **File to modify:** `js/auth.js` -> `mockSendOtp()`
* **Guideline:** Replace `setTimeout` simulation with a POST request to your backend endpoint (e.g. `/api/v1/auth/send-otp` using Twilio or Fast2SMS API).

#### [ ] 2. Online Payment Gateway (Razorpay / Cashfree)
* **File to modify:** `js/app.js` -> `initBookingModal()`
* **Guideline:** Inject Razorpay Standard Checkout SDK (`https://checkout.razorpay.com/v1/checkout.js`). On modal submission, generate an order ID via server and invoke `Razorpay(options).open()`.

#### [ ] 3. Two-Way Channel Manager & PMS Integration
* **Guideline:** Integrate with hotel PMS (e.g., eZee Technosys or Staah) to pull real-time room inventory counts and sync bookings automatically.

#### [ ] 4. Multi-Language Support (English / Hindi)
* **Guideline:** Implement language switcher toggle in header (`EN` / `HI`) utilizing a lightweight dictionary key lookup (`lang/en.json`, `lang/hi.json`).

---

*Developers adding new features should document new state variables, DOM IDs, and components under Section 4 and append changes to the Changelog above.*
