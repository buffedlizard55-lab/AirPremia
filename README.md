# Air Premia Refund Playbook

A research-backed, fully sourced toolkit for requesting a **full or partial refund** from Air Premia for a US–Korea round trip (SFO ⇄ ICN, YP112, Boeing 787-9, 31 Oct – 22 Nov 2026), plus ready-to-send email drafts.

**Live site:** <https://buffedlizard55-lab.github.io/AirPremia/>

- `index.html` — the site. Static HTML, no build step, no dependencies.
- [`verification.md`](verification.md) — the line-by-line fact check: what was verified, how, and what could not be verified.
- Re-verified **11 September 2026**.

---

## What's inside

| Section | Contents |
|---|---|
| Overview & strategy | Full refund first; move one passenger's return as the fallback |
| **What this revision corrected** | The seven errors found when the earlier version was re-checked |
| Verified policies | 13 findings from Air Premia's own contract and fare rules, each linked |
| Fees | Cancellation and change tables, split correctly by cabin and fare family |
| **Contact** | Every channel traced to an airpremia.com page — plus a warning about fake numbers in search results |
| Key dates | Booking, 24-hour window, statement, FCBA deadline, both flights, ticket expiry |
| Email drafts | 5 drafts with copy buttons: full refund, date change, DOT rights, statutory claim, follow-up |
| Escalation | Air Premia → Korea Consumer Agency → US DOT → credit card issuer |
| Traveller reports | Reddit / forum / review accounts, quoted and labelled anecdotal |
| Flags | 12 open items, each stating what is known and what is not |
| Sources | Every source with its verification status |

## Headline findings

- **No free full refund is currently available.** A penalty-free refund requires an airline-caused cancellation or significant change, a documented death or illness, or cancellation within 24 hours of booking — that window closed 3 August 2026.
- **Your two flights are not in any current schedule-change notice** (checked 11 Sep 2026). The route is re-scheduled often, so re-check before accepting a penalty.
- **Voluntary cancellation costs $130–$190 per passenger per one-way** depending on cabin and fare family — $520 to $760 for two adults round trip.
- **Paid seats come back in full** — you are far outside the 48-hour cutoff.
- **A partial cancellation is not possible before departure** on Americas itineraries. The fallback must be framed as a *date change*.
- **A statutory complaint channel exists** — `customercare@airpremia.com`, with a published 14-day response deadline and onward referral to the Korea Consumer Protection Agency.

## Errors corrected in this revision

The earlier version of this project was re-checked from scratch. It contained real mistakes:

1. **The cancellation-fee table mixed up the two cabins.** It published $190/$130 — the *Premium Economy* rates — as if they were general, and had no Economy figure at all. Economy is **Lite $190 / Standard $140 / Flex $130**. Up to $200 difference for two adults round trip.
2. **It missed an entire official refund channel** — the statutory passenger-relief process at `customercare@airpremia.com`.
3. **It claimed "Saturday 7 Nov may not exist"** based on an inference the sources contradict. Air Premia's own notice 725 is about *Saturday* SFO flights.
4. **Its calling advice was second-hand** — a Reddit tip to call at 9pm EST, when Air Premia publishes an English line on Pacific hours: `213-626-2083`, 6am–5pm weekdays.
5. **It did not warn about fake customer-service numbers** that rank highly in search results.
6. **Its GitHub Pages instructions were wrong** — Pages is already live and publishes `main`, not the branch it named.
7. **It silently tidied a quotation** from Air Premia's US tariff.

Full detail in [`verification.md` §12](verification.md).

## Publishing

**No setup is needed.** GitHub Pages is already enabled on this repository, publishing **branch `main`**, folder **`/ (root)`**, at <https://buffedlizard55-lab.github.io/AirPremia/>. Confirmed via the GitHub API: `"status":"built"`.

The live site therefore updates when `main` updates. Work happens on a feature branch and reaches the site via a pull request:

```bash
git checkout arena/01a09203-airpremia
# ...edit...
git commit -am "Update playbook"
git push origin arena/01a09203-airpremia
gh pr create --base main --head arena/01a09203-airpremia
```

Merging the PR to `main` triggers the Pages build; the site refreshes within a minute or two.

Note: the Pages *configuration* can only be changed by a repo admin. The automation account used here has read access only, so it can open PRs but cannot alter Pages settings — and does not need to.

## Preview locally

```bash
cd AirPremia
python3 -m http.server 8000 --bind 0.0.0.0
# open http://localhost:8000
```

## Verification standards used

Every claim carries one of three labels:

- **Verified** — the linked page was fetched and read in this session.
- **Official · indexed** — the text is on that official page but the page renders it with JavaScript, so it was read from the search index of that same official URL. Click through and confirm.
- **Anecdote** — a traveller's own account. Not a fact.

Booking reference and passenger names appear as `[placeholders]`. Nothing was invented to fill them. Where a fact could not be verified it is flagged, not guessed at.

## Disclaimer

Research assistance for a personal booking, not legal advice. Policies change and fares are re-filed; re-check the linked sources before sending anything or authorising a cancellation. Last checked 11 September 2026.
