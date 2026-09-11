# Verification Log — Air Premia Refund Project

**Verified on:** 11 September 2026
**Scope:** every factual claim in `index.html`, re-checked from scratch this session.
**Second pass:** later the same day (11 September 2026), every load-bearing claim was fetched and read again in a separate session — findings in §13. Four issues were found and fixed; everything else held.

## Method

Each claim was checked by one of three routes, and the route is recorded against the claim so you can judge its weight:

- **DIRECT** — I fetched the linked page in this session and read the text it returned.
- **INDEXED** — the text is on that official page, but the page renders it with JavaScript, so a plain fetch returns only a shell. I read it from the search engine's index of that same official URL. Still an official source; click through and confirm before relying on it.
- **ANECDOTE** — a traveller's own account, quoted and linked. Not a fact.

**Known limits of this environment, stated up front:**

- Outbound network from the sandbox shell is blocked, so every fetch went through the page-fetch tool. I could not `curl` an API or inspect network traffic.
- **Reddit returns HTTP 403** to automated fetches. Every Reddit quotation below was therefore taken from a search-indexed copy of the thread. The wording matched across results, but **click each link and confirm it yourself**.
- Facebook, X, and Google Maps reviews are not openly searchable from here. I found no verifiable refund-success posts on those platforms and **have not invented any**. Their absence is documented rather than papered over.
- I have no access to your reservation, so fare class, booking channel, fare basis and the actual amounts paid are **not known** and are not stated anywhere as if they were.

---

## 1. Trip facts (supplied by you — taken as given, not independently verifiable)

| Fact | Value | Check |
|---|---|---|
| Purchase date | Sunday 2 August 2026 | Given. Day of week computed, not assumed. |
| Card statement due | Tuesday 15 September 2026 | Given. Day of week computed. |
| Outbound | YP112, SFO → ICN, Saturday 31 October 2026 | Date/weekday computed. Route consistent with Air Premia notices 725 and 777, both of which list YP112 as SFO→ICN. |
| Return | ICN → SFO, Sunday 22 November 2026 | Date/weekday computed. **Flight number not supplied** — not asserted anywhere. |
| Aircraft | Boeing 787-9 | Given. Air Premia operates this type on the route per a March 2025 Reddit post referencing "six B787-9 aircraft on lease" (ANECDOTE). Not independently confirmed against an official page. |
| Passengers | 2 adults | Given. |
| Ancillaries | Paid seat selection on both flights | Given. |

**Computed, not guessed:** 2 Aug 2026 = Sunday · 11 Sep 2026 = Friday · 15 Sep 2026 = Tuesday · 31 Oct 2026 = **Saturday** · 7 Nov 2026 = **Saturday** · 22 Nov 2026 = **Sunday** · 2 Aug 2027 = Monday. Outbound is **50 days** after 11 Sep 2026.

**Internal consistency check (passed):** notice 725 renumbered *Saturday* SFO flights to YP114 for 11 Jul–24 Oct 2026. 31 Oct 2026 is a Saturday *after* that window, so the service would carry YP112 again. Your ticket saying "YP112 on Sat 31 Oct" is consistent with Air Premia's own published notice.

---

## 2. Air Premia — Conditions of Carriage

Source: https://www.airpremia.com/a/en/terms/transit — **DIRECT**. Page is long; I read the chunks containing Articles 11 and 12 in full.

| Claim | Status | Text found |
|---|---|---|
| Airline-caused refund = full fare if nothing used | **DIRECT** | Art. 11 §4-B-1: "Full fare that had been paid if no portion of the flight ticket has been used" |
| §4-A defines the trigger | **DIRECT** | "cancellation of the flight, unavailability of booked seats due to circumstances of Air Premia, delays in the flight, omission of the scheduled stopover or rejection of transport" |
| Force majeure excluded | **DIRECT** | "The reason for force majeure in Article 1, Paragraph 38 shall not be considered a refund due to Air Premia circumstances." |
| Voluntary refund = fare minus fees/penalties | **DIRECT** | Art. 11 §5-B-1: "the fare paid after deducting applicable service fees, refund penalties or booking cancellation fees" |
| Penalty waived when not the passenger's fault | **DIRECT** | Art. 11 §6-A: "an exception shall be made in the following cases. 1) The refund is made not due to circumstances of the passenger" |
| One-year refund window for unused tickets | **DIRECT** | Art. 11 §1-A: "If the flight ticket has not been used at all, the request for refund must be made within one year of the initial booking." |
| Credit-card refunds go back to the card | **DIRECT** | Art. 11 §1-C-1-C): "If the flight was paid by credit card, the refund shall be made into the account of the credit card holder" |
| No-show stacks a second penalty | **DIRECT** | Art. 12 §2-B: "both the refund penalty and the now-show penalty shall be charged" (sic — "now-show" typo is in the source) |
| Advance cancellation must be notified | **DIRECT** | Art. 12 §1 |

---

## 3. Air Premia — fare and penalty rules

### 3a. Rule notes — https://www.airpremia.com/a/en/ticket/fare — **DIRECT**

All of the following were returned verbatim by a direct fetch of the English page, and I cross-checked the same page in Korean at https://www.airpremia.com/a/ko/ticket/fare (**DIRECT**) to guard against a translation artefact:

| Claim | English text | Korean cross-check |
|---|---|---|
| 1-hour deadline | "Booking changes/cancellations may be requested up to one hour before departure." | "항공권 변경/취소는 출발 1시간 전까지 가능합니다." |
| Per passenger per one-way | "Change fees and cancellation penalties are charges for one passenger per one-way trip." | "편도당 한 명의 승객에게 부과되는 비용입니다." |
| 24-hour waiver, direct channels only | "Fees/penalties are waived for changes and cancellations within 24 hours of initial ticket purchase. (However, it applies only to purchases made on the Air Premia website, mobile app, airport branches, or reservation center.)" | "…에어프레미아 홈페이지/모바일/예약센터/공항에서 구매한 항공권에 한하여…" |
| Penalties apply to all segments by first departure | "The fee/penalty rules apply to whole segments based on the departure of the first segment." | "첫 구간 출발지 기준으로 모든 구간에 적용됩니다." |
| Worked example | "Cancellation(refund) penalty $280 (1/10 LAX/ICN : $140, 4/10 ICN/LAX : $140)" | identical |
| Adults = children; infants free | "Adults and children are subject to the same fees and penalties, and tickets for infant without seats (INF) are not subject to fees and penalties." | "성인과 소아는 동일한 수수료…" |
| Round trip must be in order | "For round-trip tickets, changes and usage must follow the original order of the itinerary. (Reverse order is not allowed.)" | "역순사용불가" |
| Change fee non-refundable | "Please note that the change fee is non-refundable." | "지불한 변경 수수료는 환불이 불가합니다." |
| Fare difference charged separately | "Any fare difference arising from a schedule change must be paid separately from the change fee." | "수수료와 별도로 결제하셔야 합니다." |
| No-show = both penalties; tax refundable | "In the case of a no-show, both the ticket cancellation fee and the no-show penalty will be charged, but the airport tax for the unused flight can be refunded upon request." | "노쇼(No-show) 시 항공권 취소 위약금과 노쇼 위약금 모두 부과되며…" |
| Gate no-show waiver review | "…with the possibility of a penalty waiver upon submission of supporting documentation, such as a medical certificate." | "진단서 등 증빙자료 제출 시 위약금 면제에 대한 검토가 가능합니다." |
| One-year validity | "The validity period of an unused ticket is one year from the booking date…" | "미사용 항공권의 유효 기간은 예약일로부터 1년이며…" |
| Unused outbound kills the itinerary | "If the outbound flight of a round-trip itinerary is not used, the entire itinerary will be automatically cancelled." | "출발편 항공권 미사용 시, 전체 여정은 자동 취소됩니다." |
| Waiver when not customer's fault | "You may be exempt from the cancellation penalty if the refund is not due to customer circumstances, such as flight cancellations." | "고객 사정에 의한 환불이 아닌 경우 취소 위약금을 면제…" |
| **Americas: no partial cancellation before departure** | "For itineraries to/from the America, Partial cancellation is not available before departure. Only cancellation of the entire itinerary is permitted." | "미주 구간의 경우, 출발일 이전에는 부분 취소는 불가하며 전체 여정 취소만 가능합니다." |
| Return cancellable after outbound flown | "After using the outbound flight, if you wish to cancel the return flight (before departure), please contact Reservations." | "출발편 항공권 사용 후, 돌아오는 편(출발일 이전)의 취소를 원하시면 예약센터로 연락주시기 바랍니다." |
| Third-party bookings go to the seller | "항공권 변경 및 취소는 구입처에 따라 규정이 다를 수 있으므로 구입하신 구입처로 문의하시기 바랍니다" | Korean page; English notices carry the same instruction (see §5) |

### 3b. The fee tables — **INDEXED**, and the reason this log exists

The fee tables live on https://www.airpremia.com/ticket/fare?tab=fare&type=economy35 and `…&type=premia42`. Fetching those URLs returns only the Korean shell plus the penalty-lookup widget — the tables are rendered client-side. I therefore read them from the search index of **those same official URLs**, and then corroborated them against an independent third-party summary.

**Cancellation penalty, flights departing from outside Korea, USD, per one-way:**

| Cabin | Fare | Americas | Europe | SE Asia (ex-TH) | NE Asia (ex-JP) |
|---|---|---|---|---|---|
| Economy35 | Lite | **190** | 180 EUR | 130 | — |
| Economy35 | Standard | **140** | 130 EUR | 80 | — |
| Economy35 | Flex | **130** ⚠ | 120 EUR | 70 | — |
| Premia42 | Standard | **190** | 170 EUR | 110 | 90 |
| Premia42 | Flex | **130** | 120 EUR | 70 | 50 |

**⚠ Currency ambiguity, found on the second pass (11 Sep 2026).** The third-party corroboration renders the Economy35 Flex Americas figure as **€130**, not $130 — while the indexed official table appears to show a bare "130" (the Europe column is explicitly EUR). The difference is a few dollars at current rates, but the exact currency is **unconfirmed**. Run the official lookup widget for the routing and require Air Premia to quote the penalty in USD in writing (Email 1 already does).

**Change fee, per one-way:**

| Cabin | Fare | Americas → Korea |
|---|---|---|
| Economy35 | Lite | **100** |
| Economy35 | Standard | **80** |
| Economy35 | Flex | **50** |
| Premia42 | Standard | **90** |
| Premia42 | Flex | **Free** |

**Corroboration:** an independent third-party summary of the same official tables returns the identical Americas figures — Economy35 "Americas · Up to 1 hour before departure · $190 · $140 · €130", Premia42 "Americas · Until 1 hour before departure · €190 · $130". Two sources that do not share a pipeline agreeing on all five numbers is good evidence, but it is not the same as reading the rendered page. **Action for you: run the lookup widget on the fare page for SFO→ICN and confirm your fare class's row.**

**⚠ Irregularity found and corrected.** The previous version of this project published a single "Americas" row of *Standard $190 / Flex $130* and stated the Lite column "wasn't visible in the fetched view". Those two numbers are the **Premia42 (premium cabin)** rates, presented as though they were general. The Economy rates are different — **Lite $190 / Standard $140 / Flex $130** — and the previous version had no Lite figure at all. For a two-adult round trip the difference is up to **$200** ($760 vs $560). `index.html` now shows both cabins separately.

**⚠ Second irregularity, flagged not resolved.** A March 2025 Reddit thread quotes "The cancellation fee for Lite is $190 until 1 hour before departure while no-show is $110." The $190 Lite figure matches the official Economy table. The $110 no-show figure appears nowhere in the official pages I could reach, and it *conflicts* with the official rule that a no-show incurs **both** the cancellation fee **and** the no-show penalty. I have not published the $110 number anywhere. **Do not test the no-show theory** — the official rule is unambiguous that it costs more, not less.

### 3c. Points-ticket penalties — https://www.airpremia.com/a/en/members/use-point — **INDEXED**

12,000 points (Americas/Europe, 90 days to 1 hour before) and 25,000 points (no-show). Applies **only** to tickets purchased with points. Irrelevant to a credit-card purchase; recorded so it is not mistaken for the cash penalty.

---

## 4. Air Premia — advance seat purchase

Source: https://www.airpremia.com/a/en/support/ssr/pre-seat — **DIRECT**, full page.

| Claim | Status | Text found |
|---|---|---|
| 48-hour refund cutoff | **DIRECT** | "Seats that were purchased in advance can be cancelled or refunded only up to 48 hours before the boarding date." |
| Auto-refunded on itinerary change ≥48h | **DIRECT** | "Purchases made in advance are automatically cancelled and refunded if the cancellation is made at least 48 hours before departure." |
| No refund inside 48h | **DIRECT** | "Seats that were purchased in advanced are automatically cancelled but not refunded if the purchase is made less than 48 hours before departure." |
| Refund channel | **DIRECT** | "Refunds and cancellations can be made on the website or through reservation center." |
| USD seat prices (local departure) | **DIRECT** | Front seat USD 30 · Emergency exit USD 30 · Rows 11–17 USD 15 · Rows 18–25 USD 13 · Rows 27–39 USD 10 |
| Currency set by first departure | **DIRECT** | "The currency applied to the entire itinerary will be based on the first point of departure… LAX–ICN–LAX: USD applies for all segments" |

**Derived, and labelled as derived:** 2 passengers × 2 legs = 4 seat purchases at USD 10–30 each ⇒ roughly **$40–$120** refundable. This is arithmetic on published prices, **not** a statement of what you paid. Your receipt is the authority.

Advance baggage: the equivalent page is linked from the seat page and follows the same 48-hour pattern. Not separately fetched this session — you did not report buying bags, so nothing depends on it.

---

## 5. Air Premia — schedule-change notices (refund precedents)

| Notice | Status | What it says |
|---|---|---|
| **777** — SFO route, Nov 2026<br>https://www.airpremia.com/a/en/customer/notice/schedule/777 | **DIRECT** | Dated "2nd September, 2026 02:25:18 PM KST". Reason: "Change of Operational Plan". Moves YP111/YP112 on **Mon 2026.11.02 → Wed 2026.11.04**, **Mon 11.09 → Wed 11.11**, **Mon 11.16 → Wed 11.18**; departure/arrival times identical. Remedy: "1) Date Change: … free of charge. (based on the origin date ± 7days, one time) 2) **Full Refund: You are eligible for a full refund, and the refund penalty will be waived.**" Contact: "1800-2626, Email: support@airpremia.com". **31 Oct and 22 Nov are not in this notice.** |
| **725** — SFO flight-number change, summer 2026<br>https://www.airpremia.com/a/en/customer/notice/725 | **DIRECT** | "From 11 July to 24 October 2026 (Saturday Flights)": ICN-SFO YP111→YP113, SFO-ICN YP112→YP114. "※ Please note that there are no changes to the operating days, departure/arrival times, or other schedules except for the flight number." |
| **696** — LAX/SFO, Jul 2026<br>https://www.airpremia.com/a/en/customer/notice/schedule/696 | **DIRECT** | Dated 28 Apr 2026. Day-shifts including SFO Sat 2026.07.18 → Sun 07.19. Same free-change-or-full-refund remedy, penalty waived. |
| **548** — 10 Oct 2025 SFO<br>https://www.airpremia.com/a/en/customer/notice/548 | **DIRECT** | Dated 24 Jun 2025. Reason: "Aircraft Maintenance". YP111/YP112 on 2025.10.10 FR moved to 2025.10.11 SA. "2) Full Refund: You are eligible for a full refund, and the refund penalty will be waived." |
| **440** — 23 Feb 2025 SFO<br>https://www.airpremia.com/a/en/customer/notice/440 | **DIRECT** | Dated 18 Feb 2025. Reason: "Scheduled Maintenance". San Francisco Route: "1) Flight Date Change: You can change your flight date for free (based on the original schedule ± 7 days) 2) **Full Ticket Refund: A full refund is available without cancellation fees.**" |
| 455, 461, 488, 280 | **INDEXED** (official URLs) | Same remedy wording on other dates/routes. Cited as a pattern only. |
| 671 (May 2026 SFO/EWR), 649 (Mar 2026 LAX) | **INDEXED** (official URLs) | Further evidence the route is re-scheduled frequently. |

**⚠ Irregularity found and corrected.** The previous version asserted that notice 777's pattern "suggests a Wed/Fri/Sun winter operation, so Saturday 7 Nov may not exist." That is an inference the sources do not support, and notice 725 contradicts its premise — it is explicitly about **Saturday** SFO flights, and notice 696 shows Saturday SFO services in July 2026. Saturdays plainly operate. Whether one operates on **7 Nov 2026 specifically** remains unverified: notice 777 moved the November *Monday* services, and I found no authoritative day-by-day schedule for that week. `index.html` now says exactly that, and the email draft asks Air Premia for "7 November, or the nearest operating date" rather than asserting one.

**Scheduling data, third-party, for context only:** a public flight-schedule aggregator shows Air Premia operating SFO→ICN on Mon/Wed/Thu/Fri/Sat through September 2026. This is **not** an official source and is **not** used to establish any operating date. Recorded because it is consistent with Saturdays operating.

**Not found:** any notice covering 31 Oct 2026 or 22 Nov 2026, as of 11 Sep 2026. On the second pass the notices index's **General** tab did render (latest item: notice 768, 11 Aug 2026 — an Ebola notice; nothing SFO-schedule-related newer than 777), but the **Schedule** tab still renders empty via plain fetch, so the schedule list could not be enumerated exhaustively; I checked the SFO-route notices individually and via search instead. **This is a real gap — re-check that page before accepting any penalty.**

---

## 6. Air Premia — contact channels

| Channel | Status | Where it comes from |
|---|---|---|
| **support@airpremia.com** | **DIRECT** | Printed in the contact block of notices 777 and 696: "Air Premia homepage and reservation center : 1800-2626, Email : support@airpremia.com". Also in airpremia.com page structured data as `contactType: "Customer support"`. |
| **customercare@airpremia.com** | **DIRECT** | https://www.airpremia.com/us/en/damage-relief — "Email inquiries and claim submissions : customercare@airpremia.com" |
| **cs@airpremia.com** | **DIRECT** | https://www.airpremia.com/us/en/webAccessibility — accessibility enquiries only |
| **+1 213-626-2083** — English, **6am–5pm weekdays PST** | **INDEXED** (official URL) | https://www.airpremia.com/ticket/fare?tab=fare&type=premia42 US block: "United States: Office hours: 6am-5pm Weekdays (PST, English) · +1) 213-626-2083" |
| **+1 213-221-3786**, **+1 917-503-9903** — KST hours, Korean/English | **INDEXED** (official URL) + **DIRECT** for 213-221-3786 | Same US block: "Office hours: Weekdays 7am-6pm, Weekends 9am-6pm (KST, Korean / English)". 213-221-3786 also appears verbatim on the accessibility page: "call us at +1) 213-221-3786 (Operation hours are based on KST)" |
| **425-484-0353** | **INDEXED** (official URL) | https://www.airpremia.com/a/en/booking/detail/change/ssr — "Reservation Center: 213-626-2083 / 213-221-3786 / 917-503-9903 / 425-484-0353". No published hours. |
| **1800-2626** / **+82-1800-2626** | **DIRECT** | Site footer "Reservations 1800-2626"; every notice's contact block; damage-relief page "+82-1800-2626 (09:00~18:00)" |
| Service hours **Weekdays 07:00–18:00, Weekends 09:00–18:00**, KST | **DIRECT** | Site footer, and "(Operation hours are based on KST)" on the accessibility page |

**⚠ Irregularity found and corrected.** The previous version listed the US numbers as "Official · via cache" and, for calling advice, relayed a Reddit tip to "call around 9 PM EST". The Pacific-hours English line **213-626-2083 (6am–5pm weekdays PST)** is on Air Premia's own page and is plainly the better option for a US West Coast caller. `index.html` now leads with it.

**⚠ New irregularity — fake phone numbers.** Searching for Air Premia customer service surfaces SEO-spam pages promoting **+1-833-276-8021** and **+1-888-497-6232**, hosted on an archive.org PDF and a university survey domain respectively. **Neither number appears on any airpremia.com page I could reach.** `index.html` carries an explicit do-not-call warning.

### Passenger-relief process — https://www.airpremia.com/us/en/damage-relief — **DIRECT**

Read in full this session; entirely absent from the previous version.

- Legal basis: "Article 61 of the Airline Industry Act and Article 64 of the Enforcement Decree of the Act".
- Compensable circumstances explicitly include "**Delay in the refund of cancelled flight tickets**".
- Channels: `customercare@airpremia.com`; post to "Passenger Sales Team/ Booking Center, Sales and Strategy Headquarters, 4th floor, 248 Gonghangdaero, Gangseo-Gu, Seoul, Korea"; or in person at Korean airport branches.
- **Deadline:** "Notification is sent within 14 days of receiving the application for damage relief (However, in certain circumstances, such as when translation is needed to investigate the case, the notification is sent within 60 days and the reasons for the delay will be noted on the notification form)."
- Outcome by SMS or email, your choice.
- Appeal: "the case is then forwarded from the airline to the **Korea Consumer Protection Agency**".
- Mandatory form: "The application form must be completed and attached for your request to be processed. Please note that it will not be accepted without the completed form." — https://com.airpremiacdn.net/resources/onepoint/documents/footer_damageRelief_210609.pdf

**The form itself was fetched and read — DIRECT.** It is titled "Application for Damage Redress for Air Transportation Users" (항공교통 이용자 피해구제 신청서), is **bilingual Korean/English**, carries form number **F-AS-509**, and its damage-type list includes the checkbox "**취소 항공권의 대금 환급 지연 / Delayed payment of refund for cancelled flight ticket**" — i.e. exactly the category a refund dispute falls under. Its receipt certificate cites "Aviation Business Act 61 and Aviation Business Act Enforcement Regulations 64" (the same law the web page calls "Article 61 of the Airline Industry Act"; two translations of one statute). It also restates the exclusions: "redress is not provided if the damage is due to uncontrollable circumstances, such as bad weather conditions, unforeseen maintenance required for safe flight operations, natural disasters, issues with flight connections, etc."

---

## 7. Air Premia — US tariff (DOT No. 947)

Source: https://com.airpremiacdn.net/resources/onepoint/documents/YP-General%20Rules.pdf

**Status upgraded to DIRECT on the second pass (11 Sep 2026): all 8 chunks of the PDF were fetched and read.** The refunds language is in **Rule 2 ("Standard Format of Electronic Rules"), Penalties (category 16), "Cancellation and refunds"** — the provision stating that "Rule 80 … and Rule 90 (Refunds) are applicable" to penalty fares. Rule 90 is cross-referenced (e.g. in Rule 20(C)) but its standalone text is not printed in this General Rules PDF; it lives in the airline's ATPCO rule database. The document cover confirms "Tariff No. YP1 … on behalf of Air Premia Inc. … between points in USA and points in Area 1/2/3" and "**Document Version No. 67 — Issue Date: July 06, 2022**"; a later page carries "DOT No. 947".

| Claim | Status | Text found |
|---|---|---|
| Death/illness full refund | **DIRECT** | category 16(a)(1): "Full refund will be made in the event of death of illness of the passenger or member of his immediate family, as substantiated by a medical certificate." ("death of illness" typo confirmed — it is Air Premia's.) |
| Schedule-change penalty-free cancellation | **DIRECT** | category 16(a)(3): "If, after ticket issuance, schedule changes by YP create alterations to the ticketed itinerary which are unacceptable to the passenger, the passenger may cancel or have the ticket reissued in accordance with applicable tariffs, without incurring a penalty." |
| Upgrade credit | **DIRECT** | category 16(a)(4): "the full amount of the fare excluding the penalty can be used as a credit toward an upgrade to different and higher fare type as long as the seat is available." |

**⚠ Irregularity found and corrected on the second pass.** The first revision spliced two subparagraphs into one "quote": it appended to clause (1) the words "the ticket reissued in accordance with applicable tariffs, without incurring a penalty" — which actually end clause (3), the schedule-change provision. `index.html` now quotes (1) and (3) separately and correctly.

**⚠ Flag (unchanged):** the document is dated **6 July 2022**. It may have been superseded.

---

## 8. US government sources

| Source | Status | What it establishes |
|---|---|---|
| https://www.transportation.gov/individuals/aviation-consumer-protection/refunds | **DIRECT** (all 3 chunks) | Refund due if the **airline** cancels, "regardless of the reason", and you decline alternatives. "Significant change" for international itineraries: depart **6+ hours earlier**, arrive **6+ hours later**, different origin/destination airport, more connections, involuntary downgrade. Ancillary services explicitly include "**advance seat selection**", refundable when "unavailable through no fault of the consumer". **"Consumers who purchase non-refundable tickets and decide not to travel … are not entitled to a refund when the flight operates as scheduled."** 24-hour rule requires booking ≥7 days before departure and **"does not apply to tickets booked through online travel agencies"**. Page footer: "Last updated: Friday, November 7, 2025". |
| https://www.ecfr.gov/current/title-14/chapter-II/subchapter-A/part-260 | **DIRECT** | Part 260 "Refunds for Airline Fare and Ancillary Service Fees", §§260.1–260.11. §260.4 ancillary refunds, §260.6 cancelled/significantly-changed fare refunds, §260.9 notification, §260.10 prompt refunds. Page states: "Displaying title 14, **up to date as of 9/09/2026**." Source note: 89 FR 32832, 26 Apr 2024. **Note:** I read the table of contents and metadata directly; the section bodies were not individually fetched, so the "7 business days for credit cards" figure in §260.10 rests on DOT's own guidance page rather than on my reading of the regulation text. |
| https://www.transportation.gov/airconsumer/file-consumer-complaint | **DIRECT** | "DOT requires airlines to **acknowledge consumer complaints within 30 days** of receiving them and to send consumers **written responses … within 60 days**." Postal address: Office of Aviation Consumer Protection, U.S. Department of Transportation, 1200 New Jersey Avenue, SE, Washington, DC 20590. Form: https://airconsumer.dot.gov/consumer/s/oacp-form. "Last updated: Friday, August 1, 2025". |
| https://airconsumer.dot.gov/consumer/s/oacp-form | **DIRECT** | The filing form itself: "Office of Aviation Consumer Protection (OACP) — Complaint, Comment, and Compliment Form". Asks you to have booking details, flight details and a copy of the complaint you filed with the airline ready, because "you cannot save what you have entered in the form and come back later to complete it." Confirms the mailing address "Office of Aviation Consumer Protection, Office of the Secretary, W96-473, 1200 New Jersey Avenue, SE, Washington, D.C. 20590". OMB Control Number 2105-0568. |
| https://consumer.ftc.gov/articles/using-credit-cards-and-disputing-charges | **DIRECT** | FCBA: "Send your letter so that it reaches the issuer **within 60 days after the first bill with the error was sent to you**." "Within **30 days** … the issuer must acknowledge it in writing." "Within **90 days** … the issuer must resolve the dispute." "you can withhold payment on the disputed amount … But you're expected to pay any part of the bill not in question". Credit balances: "the issuer must send it within **seven business days** after they get your written request", and a good-faith refund effort for balances held over six months. |
| https://www.federalregister.gov/documents/2025/12/05/2025-22140/airline-refunds-and-other-consumer-protections | **DIRECT** (second pass; the first pass used a malformed URL — dashes instead of slashes in the date path — which 404s) | Document 2025-22140, 90 FR 55999: "As of December 5, 2025, the Department is **pausing until June 30, 2026** the enforcement of airline refunds requirements … for flights that are operated under a different flight number … so long as the flights impose no significant change or delay". |
| https://www.federalregister.gov/documents/2026/07/07/2026-13675/airline-refunds-and-other-consumer-protections | **DIRECT** (second pass) | Document 2026-13675, 91 FR 41556, published 7 July 2026: "the Department is extending the pause … for 1-year from the date of this publication, **expiring on July 7, 2027**." RIN 2105-AF36 (Refund III still pending). |

**✔ Flag resolved on the second pass (11 Sep 2026).** The first pass could not establish what replaced the pause after 30 June 2026. Answer found and read directly: **DOT extended the pause on 7 July 2026 for one year, to 7 July 2027** — it covers both of the user's travel dates. Practical effect unchanged: a bare renumbering is a non-trigger; significant changes (6+ hours international, airport change, more connections, downgrade) still require a refund.

---

## 9. Traveller reports — ANECDOTE (all quotations from search-indexed copies; Reddit blocks direct fetch with HTTP 403)

**Second pass (11 Sep 2026): the four quotations below were re-verified verbatim against fresh search-indexed copies**, and two further items were found and added.

| Thread | Quotation reproduced in `index.html` | Verified against index |
|---|---|---|
| [r/koreatravel 1j8ii8y](https://www.reddit.com/r/koreatravel/comments/1j8ii8y/whats_going_on_with_air_premias_sfo_to_icn_flights/) (Mar 2025) | "We ended up canceling our flight for full refund (thankfully booked through trip.com and their support let us do this). We booked a new flight on Cathay that leaves tonight…" | ✅ re-verified this session, incl. spelling |
| same thread | 17-hour return delay, "no compensation—no meal or accommodation vouchers, no refund" | ✅ re-verified this session |
| [r/koreatravel 1jas53e](https://www.reddit.com/r/koreatravel/comments/1jas53e/air_premia_flight_changes/) (Mar 2025) | "Just called Air Premia and was able to change my flight a day earlier (Thursday flight) free of charge!" | ✅ re-verified this session |
| same thread | "Try calling 917-503-9903 … the business hours are based in KST so I called around 9PM EST" | ✅ re-verified this session |
| same thread — **added on the second pass** | "Calling is a pain (automated af) and hours are korean time zone. 80$ fee and no waive even though they changed the flight" | ✅ re-verified; used as the balance note in the "free date change" card |
| [r/koreatravel 18q01vn](https://www.reddit.com/r/koreatravel/comments/18q01vn/air_premia_refund_policy/) (Dec 2023) | "example: $1000 flight with $190 cancellation fee, you'll be refunded $810" | ✅ re-verified this session |
| same thread | "if it hasn't been 24 hours since booking, you should be able to get a 100% refund due to USA laws" | ✅ re-verified this session |
| [r/koreatravel 13f94yg](https://www.reddit.com/r/koreatravel/comments/13f94yg/air_premia_review_lax_to_icn/) (2023) | "Due to the type of ticket we had we would need to pay the cancellation fee and rebook at the lower rate… 'We don't charge you more when our fees go up.'" | ✅ matches |
| same thread | "it took 2 weeks to reach someone in Korea" | ✅ matches |
| [r/koreatravel 1gkn12n](https://www.reddit.com/r/koreatravel/comments/1gkn12n/air_premia_ewr_icn/) (Nov 2024) | "Haven't heard from them for a month… the insurance company finally agreed to pay for the expense that Air Premia refused to pay ($242 for two of us)" | ✅ matches |
| [r/koreatravel 1j9c19a](https://www.reddit.com/r/koreatravel/comments/1j9c19a/air_premia_is_it_cheaper_to_just_not_show_up_to/) (Mar 2025) | "The cancellation fee for Lite is $190 until 1 hour before departure while no-show is $110" | ✅ re-verified this session — but see the conflict flagged in §3b |
| [r/koreatravel 1s7j01g](https://www.reddit.com/r/koreatravel/comments/1s7j01g/air_premia_price_hike/) — **added on the second pass** | "i had a late night flight scheduled in Sept that they cancelled so they rescheduled me the first (and only) flight available the next day. Said it was due to a 'change of operational plan'" | ✅ verified against index; added to the sources table as route-instability context |
| [r/koreatravel xqr1aw](https://www.reddit.com/r/koreatravel/comments/xqr1aw/anyone_familiar_with_air_premia/) (2022) | Last-minute cancellations, difficulty reaching support | ✅ consistent |
| [r/koreatravel 152hsx5](https://www.reddit.com/r/koreatravel/comments/152hsx5/fuck_you_air_premia/) (Jul 2023) | "Air Premia changed my itinerary by more than a week… they absolutely refuse to pick up the … phone or answer their email" | ✅ matches |
| [AirlineComplaints.org 40804](https://www.airlinecomplaints.org/showthread.php?p=40804) (Nov 2024) | "Air Premia refused to refund $572.30… I already filed a complaint with the DOT" | ✅ matches |
| [r/personalfinance hvjvks](https://www.reddit.com/r/personalfinance/comments/hvjvks/i_cant_believe_i_actually_finally_got_fully/) (2020) | DOT complaint / card dispute produced refunds — **not Air Premia** | ✅ matches; labelled as not Air Premia |
| [KAYAK Air Premia](https://www.kayak.com/AIR-PREMIA.YP.airline.html) | First pass recorded "8.1/10 from 106 reviews" (structured data `ratingCount: 106`). **Second pass:** kayak.co.uk showed **8.2/10 from 87 ratings** — the figure drifts and varies by region. `index.html` now says "around 8/10" with the figure actually seen. | ✅ corrected |
| [Yelp — Air Premia LA](https://www.yelp.com/biz/air-premia-los-angeles) | Third-party listing, LAX Terminal B | listing exists; not used as evidence |
| [Facebook — Air Premia official page](https://www.facebook.com/airpremia.official/) — **checked on the second pass** | Page exists ("Page · Airline Company… is responsible for this Page"); shows "50% recommend (11 Reviews)". No refund-success stories accessible. | page metadata only |
| [X — @AirPremiaThai](https://x.com/airpremiathai) — **checked on the second pass** | Official Thai-language support account (ticket changes/cancellations via Line OA). No refund-success stories accessible. | existence only |

**Not found, and not invented:** verifiable refund-success posts on Facebook, X, or Google Maps reviews. Those platforms are not openly searchable from this environment; the official Facebook page and X accounts were located, but their review/post contents could not be audited from here. The previous version recorded the same gap; it remains accurate.

---

## 10. Repository and publishing facts

| Claim | Status | Evidence |
|---|---|---|
| GitHub Pages is already enabled | **DIRECT** | GitHub API `GET /repos/buffedlizard55-lab/AirPremia/pages` returned `"status":"built"`, `"html_url":"https://buffedlizard55-lab.github.io/AirPremia/"`, `"source":{"branch":"main","path":"/"}`, `"https_enforced":true` |
| The previous README's Pages instruction was wrong | **DIRECT** | It told the admin to select branch `arena/01a091e6-airpremia` and claimed Pages "was not possible" to enable. Both false: Pages is live and publishes `main` at root. |
| The automation account cannot change Pages settings | **DIRECT** | `GET /user` → 403 "Resource not accessible by integration"; repo permissions all `false`. Reading Pages works; writing does not. |
| Site updates require a merge to `main` | **DIRECT** | Follows from the Pages source being `main` + `/`. |

---

## 11. Open items — not verifiable by me, never assumed

1. **Fare family** (Lite / Standard / Flex, Economy or Wide Premium) — decides the penalty. Spans $130–$190 per passenger per one-way.
2. **Booking channel** (airpremia.com vs. an OTA) — decides who must process the refund.
3. **Fare basis and amounts actually paid** — including the seat prices.
4. **Return flight number** — you gave the outbound as YP112 only.
5. **Whether YP111/YP112 operates Sat 7 Nov 2026** — see §5.
6. **Any notice covering 31 Oct or 22 Nov 2026** — none found as of 11 Sep 2026; the notices index is JavaScript-rendered and could not be enumerated exhaustively.
7. **Air Premia's voluntary-refund processing time** — not published anywhere I could reach. No figure is quoted in `index.html`.
8. **Your statement issue date** — needed to fix the FCBA deadline. Three scenarios are given instead of one invented date.
9. ~~**What happened to the DOT renumbering pause after 30 Jun 2026**~~ — **resolved on the second pass (11 Sep 2026):** DOT extended the pause to **7 July 2027** (91 FR 41556); see §8.

---

## 13. Second pass — later on 11 September 2026 (this session)

Every load-bearing claim was re-verified from scratch in a separate session, fetching each official page again. Result:

**Re-verified directly, unchanged and correct:**
- Conditions of Carriage Art. 11 §1-A, §1-C-1-C), §4-A, §4-B-1, §5-B-1, §6-A; Art. 12 §1, §2-B (incl. the "now-show" typo) — https://www.airpremia.com/a/en/terms/transit (chunks read: 7, 8, 9)
- Fare notes — https://www.airpremia.com/a/ko/ticket/fare (DIRECT this session; the English URL returned only the penalty-lookup widget shell on this pass, so the English quotations in `index.html` rest on the first pass's direct read plus this Korean direct read of the same page — same content, two languages)
- Seat page — 48-hour rule, USD prices, currency-by-first-departure — https://www.airpremia.com/a/en/support/ssr/pre-seat
- Damage-relief plan — Article 61 basis, "Delay in the refund of cancelled flight tickets", customercare@airpremia.com, postal address, 14/60-day deadline, appeal to Korea Consumer Protection Agency, mandatory form — https://www.airpremia.com/us/en/damage-relief
- Damage-relief form PDF — bilingual, F-AS-509, "Delayed payment of refund for cancelled flight ticket" checkbox — fetched and read
- Notices 777 (2 Sep 2026, Nov Mondays→Wednesdays, free change ±7 days or full refund penalty waived, contact block with support@airpremia.com), 725 (Sat renumbering 11 Jul–24 Oct 2026), 696 (28 Apr 2026, July day-shifts incl. Sat 18 Jul SFO), 548 (24 Jun 2025), 440 (18 Feb 2025) — all fetched and read; none covers 31 Oct or 22 Nov 2026
- Web-accessibility page — cs@airpremia.com, 213-221-3786, KST hours
- Special-services page — all four reservation numbers, "Cancellation is free within 24 hours", <48h seat/baggage purchases cancelled but not refunded — **read directly this session (previously indexed only)**
- US DOT refunds page — all 3 chunks: cancellation/significant-change refund rights, 6-hour international thresholds, ancillary refunds incl. advance seat selection, non-refundable-ticket rule, 24-hour rule incl. OTA exclusion, 7-business-day credit-card refunds, merchant-of-record rule; page footer "Last updated: Friday, November 7, 2025"
- eCFR Part 260 — TOC, authority (89 FR 32832), "up to date as of 9/09/2026, last amended 9/03/2026"
- FTC credit-dispute page — FCBA 60/30/90-day framework, withhold-only-the-disputed-amount, credit balances (7 business days / 6 months)
- Federal Register 2025-22140 (90 FR 55999) and **2026-13675 (91 FR 41556, 7 Jul 2026)** — the renumbering pause and its one-year extension to 7 July 2027. **Both read directly. The first pass's link to the original was malformed and has been fixed.**
- Tariff PDF — **all 8 chunks read**; quotes corrected and upgraded to DIRECT (see §7)
- SFO airport directory page — read directly; corroborates the Air Premia phone block and hours
- Reddit threads 1j8ii8y, 1jas53e, 18q01vn, 1j9c19a — quotations re-verified verbatim against fresh search-indexed copies; two new items found and added (an "$80 fee and no waive" counter-anecdote; a Mar 2026 "change of operational plan" cancellation thread)
- Fake-number warning — re-confirmed: +1-833-276-8021 appears only in spam documents (e.g. an archive.org-uploaded PDF), not on any airpremia.com page
- GitHub Pages — API re-checked: `"status":"built"`, publishing branch `main`, path `/`, HTTPS enforced

**Found and fixed (also listed in `index.html` §02):**
1. Tariff "Rule 90" quotation had spliced clauses (1) and (3) — corrected; location properly attributed to Rule 2, Penalties category 16; clause (3)'s schedule-change right now cited.
2. Federal Register link malformed (404) — fixed; and the previously unresolvable flag about the pause's expiry **resolved**: extended to 7 July 2027.
3. Economy Flex Americas penalty currency ambiguity (€130 vs $130 in the third-party corroboration) — flagged in the fees table.
4. Kayak rating drift — reworded to the figure actually observed.
5. Email 1 reworded to make it unmistakably an **inquiry**: it now states explicitly that nothing should be cancelled or processed until the user confirms in writing, and that they would rather keep the tickets than lose money to a penalty.

**Still open (unchanged):** fare family, booking channel, amounts paid, return flight number, the 7 Nov 2026 operating question, refund processing time, and the statement issue date — all listed in §11 items 1–8.

---

## 12. Summary of corrections made this session

| # | What was wrong | What it is now |
|---|---|---|
| 1 | Cancellation table showed Premium Economy rates ($190/$130) as if general; no Economy Lite figure | Both cabins shown: Economy Lite $190 / Standard $140 / Flex $130; Premia42 Standard $190 / Flex $130 |
| 2 | Statutory relief channel entirely missing | `customercare@airpremia.com`, 14-day deadline, mandatory form, Korea Consumer Agency appeal — added, plus Email 4 |
| 3 | "Saturday 7 Nov may not exist" inferred from notice 777 | Retracted as unsupported and contradicted by notice 725; status is now "unverified, ask Air Premia" |
| 4 | Calling advice relayed a Reddit tip to call 9pm EST | Leads with the official Pacific-hours English line, 213-626-2083, 6am–5pm weekdays |
| 5 | No warning about fake phone numbers in search results | Explicit do-not-call warning naming +1-833-276-8021 and +1-888-497-6232 |
| 6 | README said Pages could not be enabled; named a stale branch | Pages confirmed live on `main` at root; instructions corrected |
| 7 | Tariff quoted as "death or illness" | Quoted exactly as printed — "death of illness" — typo noted |
| 8 | Upgrade-credit option in Rule 90(a)(4) not mentioned | Added as policy item 13 |
| 9 | Seat prices not stated | Published USD seat prices added, with the refund range labelled as arithmetic, not fact |
| 10 | US phone numbers labelled only "via cache" | Sourced to specific airpremia.com pages, with each number's published hours |
 Published USD seat prices added, with the refund range labelled as arithmetic, not fact |
| 10 | US phone numbers labelled only "via cache" | Sourced to specific airpremia.com pages, with each number's published hours |
