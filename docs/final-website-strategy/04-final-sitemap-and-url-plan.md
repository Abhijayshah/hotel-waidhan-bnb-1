# 🗺️ Hotel Waidhan Singrauli BNB — Final Sitemap & URL Architecture Plan
> **Document:** `04-final-sitemap-and-url-plan.md`  
> **Target Framework:** Next.js 14+ App Router File-System Routing  
> **URL Format:** Clean, kebab-case, extensionless, self-canonicalizing  
> **Status:** Approved Source of Truth  

---

## 1. Information Architecture & Navigation Hierarchy

The website structure is designed with a maximum crawl depth of **2 clicks** from the homepage to any transactional landing page. This shallow architecture accelerates Googlebot discovery, maximizes PageRank distribution, and simplifies user navigation.

```
Hotel Waidhan Singrauli BNB (/)
├── Rooms & Accommodation Hub (/rooms)
│   ├── Deluxe AC Room (/rooms/deluxe-ac-room)
│   ├── Standard Non-AC Room (/rooms/standard-room)
│   ├── Single Bed Dormitory (/rooms/dormitory) [P1 Niche]
│   └── Monthly PG & Long Stay (/rooms/pg-rooms) [P1 Niche]
├── Transparent Rates & Pricing (/pricing)
├── Instant Booking Engine (/booking)
├── Corporate & Industrial Stays (/corporate-stay)
├── Location & Distance Matrix (/location)
├── Dining & Room Service (/dining)
├── Photo Gallery (/gallery)
├── Amenities & Facilities (/amenities)
├── Verified Guest Reviews (/reviews)
├── Frequently Asked Questions (/faq)
├── About Us & Hospitality Story (/about)
├── Contact & 24/7 Front Desk (/contact)
├── Local Travel & Sightseeing Guides (/guide)
│   ├── Places to Visit in Singrauli (/guide/places-to-visit-in-singrauli)
│   ├── Where to Stay in Waidhan (/guide/where-to-stay-in-waidhan)
│   └── How to Reach Waidhan Singrauli (/guide/how-to-reach-waidhan)
└── Compliance & Guest Policies
    ├── Privacy Policy (/privacy-policy)
    ├── Terms & Conditions (/terms)
    ├── Cancellation & Refund Policy (/cancellation-policy)
    ├── Guest Check-in Rules (/guest-policies)
    ├── Booking Confirmation (/booking-confirmation) [noindex]
    └── Custom 404 Error Page (/not-found) [noindex]
```

---

## 2. Definitive Page Inventory (24 Pages)

### Core Commercial & Landing Pages

| # | Route URL | Purpose & Target Audience | Primary Search Intent | Indexable? | Priority | Main Conversion CTA |
|---|---|---|---|---|---|---|
| **1** | `/` | Core brand anchor & high-volume city hub for outstation visitors. | Commercial / Local | `index, follow` | **P1** | Book Room Direct / WhatsApp Desk |
| **2** | `/rooms` | Master catalog comparing room tiers, bed types, and tariffs. | Commercial | `index, follow` | **P1** | Select Room & Book |
| **3** | `/rooms/deluxe-ac-room` | Executive travellers, engineers, and couples seeking premium AC comfort. | Transactional | `index, follow` | **P1** | Book Deluxe Room (WhatsApp) |
| **4** | `/rooms/standard-room` | Budget field executives, technicians, and transit passengers. | Transactional | `index, follow` | **P1** | Book Standard Room |
| **5** | `/rooms/dormitory` | Solo transit travellers, bus passengers, exam candidates (from ₹349). | Transactional (Niche) | `index, follow` | **P1** | Reserve Dorm Bunk Bed |
| **6** | `/rooms/pg-rooms` | NTPC/NCL apprentices, bank trainees, contractors staying 30+ days. | Transactional (Rental)| `index, follow` | **P1** | Enquire for Monthly PG Stay |
| **7** | `/pricing` | Comparison shoppers researching hotel rates and room taxes. | Commercial / Price | `index, follow` | **P2** | Claim 10% Direct Discount |
| **8** | `/booking` | Frictionless booking & check-in reservation engine with WhatsApp bridge. | High Transactional | `index, follow` | **P1** | Submit Booking Request |
| **9** | `/corporate-stay` | Corporate accounts, industrial vendors visiting NTPC & NCL (GST bills). | B2B / Commercial | `index, follow` | **P1** | Request Corporate Tie-Up |
| **10**| `/location` | Arriving passengers needing distance matrix, directions, and bus stand routes. | Navigational | `index, follow` | **P1** | Open Google Maps Navigation |
| **11**| `/dining` | Travellers wanting home-style pure veg meals, breakfast, and room service. | Informational | `index, follow` | **P2** | Inquire Food Menu / Order |
| **12**| `/gallery` | Visual proof of authentic room cleanliness, bathrooms, and exterior. | Commercial Research | `index, follow` | **P2** | Book After Viewing |
| **13**| `/amenities` | Travellers checking for 24/7 power backup, high-speed Wi-Fi, and parking. | Feature Research | `index, follow` | **P2** | Check Availability |
| **14**| `/reviews` | Social proof hub featuring verified Google reviews and review QR code. | Trust & Authority | `index, follow` | **P2** | Write a Google Review |
| **15**| `/faq` | Voice search and featured snippet hub for check-in rules and policies. | Informational | `index, follow` | **P2** | Call Desk with Questions |
| **16**| `/about` | Hospitality story, local roots, hygiene protocols, and host team. | Brand Authority | `index, follow` | **P3** | Explore Stays |
| **17**| `/contact` | 24/7 front desk phone dialers, WhatsApp desk, and inquiry form. | Navigational / Call | `index, follow` | **P1** | Call Reception (+91 78790 28316) |

### Editorial Travel Guides (Top-of-Funnel Inbound Traffic)

| # | Route URL | Purpose & Target Audience | Primary Search Intent | Indexable? | Priority | Main Conversion CTA |
|---|---|---|---|---|---|---|
| **18**| `/guide/places-to-visit-in-singrauli` | Tourists and engineers exploring Mada Caves, Rihand Dam, Rose Garden. | Informational | `index, follow` | **P2** | Book Stay for Singrauli Tour |
| **19**| `/guide/where-to-stay-in-waidhan` | Decision-stage visitors comparing Waidhan, Morwa, and Vindhyanagar. | Commercial Research | `index, follow` | **P2** | Stay in Waidhan Center |
| **20**| `/guide/how-to-reach-waidhan` | Outstation travellers arriving by train, bus, or flight with auto fare guide. | Travel Logistics | `index, follow` | **P2** | Call for Station Pickup Help |

### Legal Compliance & Utility Routes

| # | Route URL | Purpose | Indexable? | Priority |
|---|---|---|---|---|
| **21**| `/privacy-policy` | Data protection compliance (Indian IT Act & DPDP Act). | `index, follow` | **P3** |
| **22**| `/terms` | Booking rules, liability terms, and stay guidelines. | `index, follow` | **P3** |
| **23**| `/cancellation-policy` | Transparent 24-hour free cancellation and refund terms. | `index, follow` | **P3** |
| **24**| `/guest-policies` | Valid ID requirements (Aadhar/Passport) and check-in rules. | `index, follow` | **P3** |
| **—** | `/booking-confirmation` | Post-booking thank you page with WhatsApp confirmation. | `noindex, nofollow` | **Utility** |
| **—** | `/not-found` (`404`) | Graceful 404 error recovery with navigation links. | `noindex, nofollow` | **Utility** |

---

## 3. Global Navigation Blueprint

### Desktop Main Navigation Bar
1. `Home` (`/`)
2. `Rooms & Dorms` (`/rooms`)
3. `Rates & Pricing` (`/pricing`)
4. `Corporate Stays` (`/corporate-stay`)
5. `Location & Transit` (`/location`)
6. `Gallery` (`/gallery`)
7. `Contact` (`/contact`)
* **Header Right Utility:** `📞 +91 78790 28316` + `Book Now` CTA button.

### Persistent Mobile Navigation
* **Top Header:** Logo on left, click-to-call icon, hamburger menu toggle.
* **Sticky Bottom Action Bar (< 768px):**
  * Left Button: `📞 Call Front Desk` (`tel:+917879028316`)
  * Right Button: `💬 WhatsApp Book` (`https://wa.me/917879028316?text=...`)

### Footer Navigation (4 Columns)
* **Col 1 (Brand):** Hotel logo, description, legal entity name, Google Review badge.
* **Col 2 (Stay Options):** Deluxe AC Room, Standard Room, Dormitory Bunks, Monthly PG, Rates Table.
* **Col 3 (Quick Links):** Corporate Stays, Location Map, Amenities, Travel Guides, FAQs, Contact.
* **Col 4 (Trust & Legal):** Privacy Policy, Terms & Conditions, Cancellation Policy, Guest Check-in Rules.
* **Bottom Strip:** Full standardized NAP, Google Maps CID, Copyright © 2026.

---

## 4. Next.js Automated XML Sitemap (`app/sitemap.ts`)

In Next.js 14+, `sitemap.ts` generates a dynamic, standards-compliant XML sitemap directly at `/sitemap.xml`:

```typescript
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hotelwaidhanbnb.com';
  const currentDate = new Date().toISOString().split('T')[0];

  return [
    { url: `${baseUrl}`, lastModified: currentDate, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/rooms`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/rooms/deluxe-ac-room`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/rooms/standard-room`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/rooms/dormitory`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/rooms/pg-rooms`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/pricing`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/booking`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/corporate-stay`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/location`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/dining`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/amenities`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/gallery`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/reviews`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/guide/places-to-visit-in-singrauli`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/guide/where-to-stay-in-waidhan`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/guide/how-to-reach-waidhan`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/privacy-policy`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/cancellation-policy`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/guest-policies`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
```

---

## 5. Next.js Robots.txt Generator (`app/robots.ts`)

```typescript
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/booking-confirmation',
        '/not-found',
        '/admin/',
        '/api/',
        '/*?*session=',
        '/*?*token='
      ],
    },
    sitemap: 'https://hotelwaidhanbnb.com/sitemap.xml',
  };
}
```
