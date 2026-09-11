# Air Premia Refund Playbook

A research-backed, fully-sourced toolkit for requesting a **full or partial refund** from Air Premia for a US–Korea round trip (SFO ⇄ ICN, YP112/YP111, Boeing 787-9), plus ready-to-send, human-written email drafts.

- **Site:** `index.html` is a GitHub Pages–ready static site (no build step, no dependencies).
- **Verification log:** [`verification.md`](verification.md) — line-by-line fact checking with official links (Air Premia, US DOT, eCFR, FTC) and clearly-labeled traveler anecdotes.
- **Compiled:** 11 September 2026.

## What's inside

1. Trip summary and refund strategy (full refund first; fall back to moving one passenger's return flight to 7 Nov 2026).
2. Verified Air Premia policies: refund articles, penalty tables, 48-hour seat/baggage refund rules, the Americas "no partial cancellation before departure" rule, and the airline's own schedule-change notices that granted **full refunds with penalties waived**.
3. US DOT / eCFR / FTC refund rights that apply to US-departing flights.
4. Traveler reports from Reddit / FlyerTalk / Yelp (labeled anecdotal, with links).
5. Flagged irregularities and open items (fare class unknown, Saturday 7 Nov operation unverified, 24-hour window expired, etc.).
6. Three ready-to-send emails (full refund request, Plan-B change request, conditional DOT escalation) with copy buttons.

## Publish to GitHub Pages (one-time, repo admin only)

The site needs no build. Any repo admin can publish it in ~30 seconds:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select branch `arena/01a091e6-airpremia` and folder `/ (root)`, then **Save**.
4. GitHub will serve the site at `https://buffedlizard55-lab.github.io/AirPremia/` within a minute or two.

(Enabling Pages was not possible from the automation account — the API requires admin rights — so this step is manual. Everything else is ready.)

## Preview locally

```bash
cd AirPremia
python3 -m http.server 8000 --bind 0.0.0.0
# open http://localhost:8000
```

## Disclaimer

This project summarizes publicly available policies for personal use. It is research assistance, not legal advice. Policies can change; every rule quoted here is linked to its official source, last checked 11 September 2026 — re-check before sending.
