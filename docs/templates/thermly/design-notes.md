# Thermly — Design Notes

Reference: **Airwise** — https://colorlib.com/wp/template/airwise/
Live preview: https://preview.colorlib.com/theme/airwise/ (HTTP 200, 94,591 B, page title
`HVAC repair and installation in Fresno, booked by the hour | Airwise Heating & Air`, read 2026-10-24
with `curl -4` — the host is IPv4-only here)
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/airwise-template.jpg (AVIF, 79,408 B,
decoded 2400×1892 — header, hero and the top of the booking card)
Token authority: `theme/airwise/_astro/Base.C_WkB4-N.css` (60,585 B, sha256
`be1904cfd3e7ff1831f3303554ef9cd9e3790f6fe2df41f912fe3cb622347173`)
Full render: Playwright, 1440 × 7,459 px (the eight bands below the fold are `opacity:0` until their
`data-animate` observer fires, so a plain screenshot cannot see them)
Spec: `openspec/specs/template-thermly/spec.md`
Shipped: — (not built yet; no `TEMPLATES.md` row exists)

A trades page in teal (`#187e83`) on alternating `#f5f7f8` / white grounds, set entirely in
Plus Jakarta Sans. Its argument is the **arrival window**: the hero is a booking wizard (what needs
doing → which day → which two-hour window), and the rest of the page sells that promise — a services
grid that changes its whole catalogue with the season, four reasons a window beats a "we'll call
you", a three-step visit timeline, three maintenance plans, a sixteen-town coverage list, three
reviews, five FAQs and a teal closing call-out over a near-black footer.

Provenance note: this design is **absent from `TEMPLATES.md`**, not mis-attributed to another app.
The catalogue crawl (`docs/catalog-coverage.md`) found 256 designs on ColorLib's own listing that the
checklist never recorded: 35 standalone designs and 221 snippet variants. `airwise` is the first
standalone one, and no spec names `template/airwise` (`grep -rl 'template/airwise' openspec/specs/`
→ empty), so nothing was shipped under another name. Unlike the Manorly case, there is no false
`[x]` row to repair — the row simply does not exist yet.

## Document order

| # | band | ground | notes |
| --- | --- | --- | --- |
| — | header | `bg-white/90` + `backdrop-blur-lg`, 1px `ink-100` | sticky; mark + wordmark; six links; city; `tel:`; solid CTA |
| 1 | hero copy | `ink-50` | eyebrow pill, `h1`, lede, `4.8` rating, four ticks |
| 2 | booking card | white card on the hero's right column | 3 numbered steps + fields + summary + submit |
| 3 | seasons | white | eyebrow, month-driven `h2` + lede, `Cooling`/`Heating` pills, 6 cards in a 3 × 2 hairline grid, footnote |
| 4 | why-us | `ink-50` | photo left; eyebrow, `h2`, lede, four reasons right |
| 5 | process | white | eyebrow, `h2`, lede, `01`–`03` steps with durations |
| 6 | plans | `ink-50` | eyebrow, `h2`, footnote, three cards, middle `Most chosen` |
| 7 | areas | white | eyebrow, `h2`, copy, 16 towns in three columns, footnote |
| 8 | reviews | `gray-50` (`#f9fafb`) | eyebrow, `h2`, footnote, three white `rounded-2xl` cards |
| 9 | faq | white | eyebrow, `h2`, lede, five independent accordion rows |
| 10 | closing call-out | `#156669` | `h2`, one line, white solid CTA + white outline `tel:` CTA |
| — | footer | `gray-900` `#111827`/`#0f1719` | 5 columns, newsletter, legal bar, cookie strip |

## Tokens that carry the look

* **Teal ramp** `#effafa` → `#d6f2f2` → `#aae4e5` → `#3eb2b5` → `#22979b` → **`#187e83`** (brand) →
  `#156669` (call-out band, hover) → `#145256`. The closing band and the primary button's hover are
  the *same* `#156669`, which is why the page reads as one object rather than two.
* **Heat ramp** `#a9691a` (pressed `Heating` pill) and `#8a5517` (heating price lines). Only the
  seasons band and nothing else uses it — do not bleed amber into the CTAs.
* **Ink ramp** `#f5f7f8` / `#e8ecee` / `#ced6d9` / `#6e8085` / `#4d5e63` / `#334347` / `#243134` /
  `#182225` / `#0f1719`. Headlines are `#182225`, not black; the footer is `#0f1719`-deep grey, never
  `#000`.
* **Radii**: buttons and inputs `0.5rem`, day chips and icon buttons `0.75rem`, cards `1rem`, pills
  `9999px`. The services grid is one `rounded-2xl` block divided by hairlines — do **not** render six
  separate bordered cards.
* **Type**: Plus Jakarta Sans everywhere; `h1` `text-4xl sm:text-5xl` at `leading-[1.1]`,
  `tracking-tight`; `h2` `text-3xl sm:text-4xl`; card titles `text-lg font-bold`; body `text-ink-500`.
  The tight leading on the `h1` is a large part of the design's voice.
* **Section rhythm**: `py-20 lg:py-28`; centred heads capped at `max-w-3xl`; grids at `max-w-7xl`;
  grounds alternate strictly `ink-50 → white → ink-50 → white → ink-50 → white → gray-50 → white →
  teal → footer`, so no two adjacent bands share a ground.

## Section-by-section fidelity notes

**Booking card (the page's centre of gravity).** Three numbered steps, each a labelled radio group
styled as pills. The day chips are **re-dated at render** from today (`new Date()` + `index + 1`), so
the strip always starts tomorrow; the recreation must take the date as an injectable value or the
tests will drift daily. Taken slots are a fixed table of `(dayIndex, windowIndex)` pairs in the demo
(`[0,0] [0,1] [1,3] [2,0] [4,2] [5,1] [6,0] [6,3]`); a taken window is `disabled`, its status text
flips to `Taken`, and its pill goes muted (the reference visibly dims the whole label). The summary
line is the quiet hero of the widget: `Choose a day and a window to see your visit here.` until both
are chosen, then `Your visit: <day>, <window>.` Submit is demo-only — it prints
`Booked for <day>, <window>.` plus a "demo confirmation" sentence and never navigates.

**Seasons.** The switcher is not decorative: it swaps the `h2`, the lede and the six cards, and
defaults from `new Date().getMonth()` (`>= 9 || <= 2` → heating). Cooling cards price in
`primary-700`, heating in `heat-700`. Keep the 3 × 2 grid identical in both states — the season is a
content swap, not a layout change — and keep the "sample prices" footnote, which the reference
repeats under the grid.

**Why-us.** Photograph on the left with the reference's own caption ("replace with a photograph of
your own technician and van"), four reasons on the right: `Two hours, not eight`, `The price of the
part, before it goes in`, `Sized properly, not matched to the old one`, `Employed technicians`. The
reasons are stacked text blocks, not cards — no borders, no boxes, generous leading.

**Plans.** `Seasonal $14`, `Priority $24` (`Most chosen`), `Whole home $39`, monthly. Emphasis is
carried by a teal border, a filled CTA on the middle card and outline CTAs on its neighbours; the
feature lists are ticked lines (`✓` glyph in teal). Prices are illustrative — keep the footnote.

**Areas.** Sixteen towns as plain text in three columns; no map, no pins. Plain text is the whole
point (local-search signal), so do not replace it with chips or a graphic.

**Reviews.** Five teal stars, an em-quoted review, then a `primary-200` circle with the reviewer's
initial and `name · town` beside it. The reference's quotes are noticeably long (3–4 lines) — keep
that length or the cards look empty.

**FAQ.** Five rows, hairline-divided, each a full-width button with a circled `+`/`−` on the right.
Rows are independent (several can be open). The answers are long paragraphs; the row must not clip
them when open.

**Closing call-out.** `#156669` full-bleed, centred, `h2 Warm rooms in July, cold ones in January?`,
one line, then a white solid `Book a visit` and a white outline `Call …`. The outline button's border
is white at ~60% opacity.

**Footer.** Five columns: brand block (mark, blurb, street, phone, email, three social icons),
`Services` (4), `Company` (5), `Support` (4), `Stay Updated` (blurb, email field, teal `Subscribe`).
Legal bar sits on a hairline with the copyright left and two links right. The cookie strip is a
bottom banner with `Decline` / `Accept All`.

## Pitfalls found while reading the reference

1. **`data-animate` hides eight of the ten bands** until an IntersectionObserver fires. Any visual QA
   that screenshots without scrolling will "see" only the hero — that is what the first capture did.
   Inject `[data-animate]{opacity:1!important;transform:none!important}` before capturing.
2. **The preview is a seven-route site.** `/services`, `/maintenance-plans`, `/service-areas`,
   `/about`, `/blog`, `/contact`, `/book` are real pages. Only the home page is in scope; nav items
   become in-page anchors, and the booking widget absorbs `/book`.
3. **Two accent ramps, one at a time.** Mixing `heat-*` into a cooling state (or into the CTA band)
   breaks the seasonal read instantly.
4. **Date-dependent behaviour.** Both the day strip and the season default read the clock. Inject
   `today` into both components so tests can pin `2026-06-05` (cooling) and `2026-11-05` (heating)
   and so the day chips can be asserted exactly.
5. **The screenshot is AVIF.** `vision_analyze` rejects it directly; decode with
   `ffmpeg -i shot.jpg shot.png` (or `convert`) first.
6. **No assets are copied.** Not `logo.svg`, not the Unsplash technician photo, not the `/cf-fonts`
   Plus Jakarta Sans files. Draw the mark inline, use `picsum.photos/seed/thermly-<n>/800/600`, load
   the font from Google Fonts.

## Deliberate deviations

Multi-page → one page; dark-mode variants dropped; brand, city, address, phone, mailbox, photographs
and demo statistics re-branded to Thermly with an invented demo county; cookie strip reduced to
component state (no storage key invented); logo redrawn inline. Structure, band order, item counts,
price shape, seasonal behaviour and the ten grounds are kept 1:1. See the spec's
§Deliberate deviations for the full list.
