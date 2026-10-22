# ❓ Hotel Waidhan Singrauli BNB — Open Questions, Assumptions & Owner Approvals
> **Document:** `12-open-questions-and-assumptions.md`  
> **Audience:** Property Ownership, General Management & Development Team  
> **Status:** Pending Owner Action Items  

---

## 1. Explicit Owner Approvals Required Before Development

To ensure absolute operational accuracy and eliminate guesswork, the following business items must be confirmed by the property owner before production deployment:

| # | Topic / Question | Strategic Recommendation in Blueprint | Owner Status | Action Required from Owner |
|---|---|---|---|---|
| **1** | **Google Business Profile Name** | Standardize display name as `Hotel Waidhan Singrauli BNB (Comfort Stay & PG)`. | ⏳ Pending Approval | Approve profile title change in Google Business Profile dashboard. |
| **2** | **Exact Room Inventory Counts** | Plan assumes: 6 Deluxe AC Rooms, 6 Standard Rooms, 12 Dormitory Bunks, 4 PG Rooms. | ⏳ Pending Confirmation | Provide exact count of physical rooms and beds available for sale. |
| **3** | **Tariff Structure & Taxes** | Base Rates: Dorm ₹349, Standard ₹599, Deluxe AC ₹899, Suite ₹1,299, PG ₹4,500/mo. | ⏳ Pending Confirmation | Confirm if tariffs are inclusive of GST or if 12% GST is levied at checkout. |
| **4** | **Dining / Kitchen Capabilities** | Blueprint advertises home-style pure vegetarian breakfast (Poha, Paratha, Tea) and thalis on order. | ⏳ Pending Confirmation | Confirm meal timings, rates, and whether meals are prepared in-house or via local tie-ups. |
| **5** | **Check-in / Check-out Policies** | Standardized as Check-in: 12:00 PM; Check-out: 11:00 AM; Early check-in subject to availability. | ⏳ Pending Confirmation | Confirm early check-in tariff rules (e.g., complimentary up to 2 hours or 50% charge). |
| **6** | **Real Property Photography** | Blueprint specifies WebP images of exterior, rooms, washrooms, lockers, and reception. | ⏳ Pending Asset Upload | Supply 25–30 unedited, well-lit smartphone/DSLR photos of the actual premises. |
| **7** | **GSTIN & Business Compliance** | Blueprint reserves space for official 15-digit GSTIN on the website footer and corporate page. | ⏳ Pending Details | Provide registered GSTIN and legal trade name for invoice generation. |
| **8** | **Payment Gateway Integration** | Phase 1 launches with WhatsApp/Phone reservation; Phase 2 integrates Razorpay gateway. | ⏳ Pending Decision | Decide whether to launch Phase 1 immediately or wait for Razorpay merchant account approval. |

---

## 2. Working Assumptions Logged in the Strategy

Until the property owner responds to the items above, the technical architecture operates under the following conservative assumptions:

1. **Brand Identity Assumption:** The property is commercially recognized locally as both *Hotel Waidhan BnB* and *Comfort Stay & PG*. Both names are embedded in the sitewide schema and metadata to retain legacy directory traffic.
2. **Payment Processing Assumption:** Cash, UPI (PhonePe, Google Pay, Paytm QR), and direct bank transfers are accepted at reception. No online credit card gateway is forced on the guest during Phase 1.
3. **Cancellation Assumption:** Free cancellation is offered up to 24 hours prior to standard check-in time (12:00 PM on arrival date). No-shows forfeit any advance deposit paid.
4. **Guest ID Assumption:** Government-issued photo identification (Aadhar, Voter ID, Passport, or Driving License) is strictly mandated for all adult guests in compliance with Madhya Pradesh Police hospitality guidelines. PAN cards are not accepted as valid address proof.

---

## 3. Owner Sign-Off Protocol

Once the property owner reviews this document:
1. Provide written confirmation of exact prices, room counts, and GSTIN.
2. Upload the real photographs to the project's `public/images/` folder.
3. Authorize the development team to execute the implementation prompt (`13-final-implementation-prompt.md`).
