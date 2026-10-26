# Showbill — task outline

Recreation of the ColorLib **Card V11** design (`card-11`) at `apps/showbill`. Spec is the authority:
`openspec/specs/template-showbill/spec.md`. Design notes: `docs/templates/showbill/design-notes.md`.
Live reference: `https://preview.colorlib.com/theme/bootstrap/card-11/` (the slug-only
`theme/card-11/` is 404 — this family lives under `bootstrap/`). Check boxes only as work ships.

> This is a **single-screen listings band, not a site**: a head over three event cards on warm paper
> `#f5f3ef`, each card a photo + a hanging date leaf + category + title + two facts + attendee faces +
> a perforated ticket stub. The reference is **6,522 B of HTML, one 10,537 B stylesheet and one
> 2,269 B script**, with **3 buttons, 0 anchors, 0 forms, 0 keyframes, 0 `@supports`**.
> The risk is not a missing band — it is flattening the five things that make it read as a ticket:
> **the media band that renders 700:440 while the sheet says `16/9`**, **the leaf hanging exactly
> 30 px into the body**, **the stub's dashed rule with two punched page-coloured semicircles**, **the
> two price shapes and two count shapes across three cards**, and **the `.ics` download behind the
> only button**.
>
> Five numbers decide fidelity: media **232.97 px** at a **370.66** track (never 208.49); leaf
> **68 × 79** at `left 18 / bottom −30`; stub needs **271 / 257 / 297** px of content, so at the
> 1,024 px three-column width card 1 wraps by **0.34 px** and card 3 by 26; grid **3 / 2 / 1** at
> **950 / 949 / 635** with 290 px floors; and the `.ics` is **311 bytes, 11 CRLF, 0 bare LF**.

## 0 — Scaffold

- [ ] `cp -r apps/<simplest-existing-app> apps/showbill`; rename the package to
      `@free-react-templates/showbill`
- [ ] `public/CNAME` = `showbill.free.componentdock.com`; `"homepage"` =
      `https://showbill.free.componentdock.com`; `react`/`react-dom` stay `"latest"`
- [ ] keep `injectUiSource()` in `vite.config.ts` (absolute `@source` for `packages/ui`)
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace
      (`grep -c "free-react-templates/showbill" package-lock.json` → 1)
- [ ] `index.html`: title + `Archivo` Google Fonts `<link>`
      (`family=Archivo:wght@400;500;600;800`, verified 200) — **never** `font-bold` anywhere

## 1 — Tokens

- [ ] `@theme`: `--color-paper: #f5f3ef` (page **and** notch fill), `--color-ticket: #e5e1d8`
      (dashed rule), focus `#2563eb`; everything else is stock Tailwind — ink `neutral-900`,
      muted `neutral-600`, facts `neutral-700`, accent `blue-700` (`#1d4ed8`), status `blue-800`,
      flag `amber-400`/`amber-950`, done `green-700`/`green-50`
- [ ] confirm `#f5f3ef` is **not** white: the cards must read as cut-outs on putty, not on snow
- [ ] type scale only at **400 / 500 / 600 / 800** — a 700 request renders the 800 instance

## 2 — Shell and head

- [ ] `main`: `max-width: 1160px` (content box, so 1192 outer), `margin: 0 auto`,
      `padding: clamp(32px, 6vw, 72px) 16px`, `color: #171717`; **no** `min-height`
- [ ] header: `h1` "Upcoming in Lisbon" at `clamp(30px, 4vw, 44px)` / 800 / `−.03em` / `1.05`;
      sub "Three picks for October from the city events desk." 16 px `#525252` at `margin-top: 8px`;
      **28 px** under the head
- [ ] grid: `repeat(auto-fit, minmax(290px, 1fr))`, `gap: 24px` — no breakpoint class, no JS

## 3 — Data module

- [ ] one typed `events` array (3 entries) with `id`, `type`, `title`, `start`, `end`,
      `timeLabel`, `venueLabel` (**neighbourhood**), `calendarLocation` (**city**), `countLabel`,
      `price { label, amount, labelAfter }`, `faces[{ initials, color }]`, `flag?`, `imageSeed`
- [ ] the leaf (month/day/weekday), the `<time>` elements **and** the `.ics` all derive from
      `start`/`end` — never hand-write the date three times (reference defect 6)
- [ ] keep the venue split: "Belém" on screen, "Lisbon" in the calendar

## 4 — Card: media and date leaf

- [ ] media: photo at **700:440** (232.97 px at a 370.66 track), `object-fit: cover`,
      `border-radius: 20px 20px 0 0` — **do not** use `aspect-[16/9]`
- [ ] placeholder images `https://picsum.photos/seed/showbill-<n>/700/440` with descriptive `alt`
- [ ] leaf: `position: absolute; left: 18px; bottom: -30px; width: 68px`, radius 14, white,
      `0 10px 24px -8px rgba(0,0,0,.35)`; month strip stretched, `margin-top: -8px`, radius
      `14px 14px 0 0`, `#1d4ed8`, 12/800/`.12em` uppercase; day 28/800/`−.03em`; weekday 12/600
- [ ] flag (card 2 only): `top/right: 14px`, `5px 11px`, radius 999, `#422006` on `#facc15`, 12.5/800

## 5 — Card: body and attendee row

- [ ] body `padding: 44px 22px 18px` (44 clears the leaf with 14 px to spare), `flex: 1`
- [ ] eyebrow 13/800/`.08em` uppercase `#1d4ed8`; `h2` 21/800/`−.02em`/`1.2`, `4px 0 12px`
- [ ] facts `ul`: grid `gap: 6px`, ink `#404040`, 15 px; rows `flex`, `gap: 8px`; lucide `Clock` /
      `MapPin` at **17 × 17**, `strokeWidth={2}`, round caps, `flex: none`; two `<time>`s joined by
      an **en dash, no spaces**
- [ ] attendee row `margin-top: 16px`, `gap: 10px`: `aria-hidden` cluster of **30 × 30** discs,
      `2px #fff`, `50%`, **−6 px** overlap (first reset to 0), 10.5/800 white initials, per-face colour;
      then the count at 14/500 `#525252`

## 6 — Card: the ticket stub

- [ ] stub: `border-top: 2px dashed #e5e1d8`, `padding: 18px 22px 20px`,
      `flex flex-wrap items-center justify-between gap-3`
- [ ] notches: two **20 px** discs at `top: -11px`, `left/right: -10px`, filled with the **page**
      token — and **no** `overflow: hidden` on the card or the stub
- [ ] price block renders both shapes from the data flag: `label + amount` ("From €180") or
      `amount + label` ("€45 incl. coffee"); label 14 `#525252`, figure 20/800 ink, U+20AC
- [ ] button: `inline-flex gap-2 px-4 py-2.5`, `1.5px solid #1d4ed8`, radius **12**, 14.5/600 accent
      on white, 18 px `CalendarPlus`, `transition-colors`; hover white-on-`#1d4ed8`
- [ ] verify the wrap arithmetic at 1,024 (card 1 by 0.34 px) — do not "fix" it with `whitespace-nowrap`
      or a smaller gap

## 7 — Behaviour: the calendar file

- [ ] `buildIcs(event): string` — pure: `BEGIN:VCALENDAR` … `END:VCALENDAR`, CRLF joined, `VERSION:2.0`,
      neutral `PRODID`, `UID` `<slug>-<start>@<domain>`, `DTSTAMP` = click time UTC `YYYYMMDDTHHMMSSZ`,
      `DTSTART`/`DTEND` = the **floating** `data-start`/`data-end` (no `Z`, no `TZID`),
      `SUMMARY` + `LOCATION` escaped
- [ ] escape `,` `;` `\` **and** CR/LF (→ `\n`) — the reference misses the last one (defect 2)
- [ ] fold content lines at **75 octets** with a leading space (defect 3)
- [ ] `downloadIcs(filename, text)` — `Blob('text/calendar;charset=utf-8')`, `createObjectURL`,
      temporary `<a download>`, click, remove, revoke after 1 s
- [ ] per-button done state: `border-color/color #15803d`, `background #f0fdf4`, icon kept, label
      **"Saved to calendar"**; clicking again re-downloads and keeps the label
- [ ] single `role="status"` line under the grid: `margin-top: 20px`, `min-height: 1.5em`,
      15/600 `#1e40af`, centred; message `"<title> downloaded as a calendar file. Open it to add the
      event."`; a click on any card overwrites it

## 8 — Accessibility

- [ ] **1 `h1`**, **3 `h2`**, **3** focusable elements (the buttons), **0** `href="#"`, **0** forms
- [ ] focus ring **3 px at 2 px offset in `#2563eb`** (5.17:1 on white, 4.66:1 on paper) — **not** the
      reference's `#93c5fd` (1.80:1)
- [ ] `prefers-reduced-motion: reduce` → `transition: none`; add no reveal, scroll or hover motion
- [ ] no hover state on the card itself; the button is the only transitioning element
- [ ] footer line linking `https://www.componentdock.com/` as "Component Dock"

## 9 — Tests (write first, 100 % coverage)

- [ ] render: head copy, three `h2`s, three buttons, three images with `alt`, flag on card 2 only
- [ ] copy: both price shapes, all three count strings (`412 going`, `1,280 going`,
      `9 of 12 places taken`), en dash `09:00–17:30`, accents intact
- [ ] `buildIcs`: exact 11 lines, CRLF only, `DTSTART`/`DTEND` floating, `DTSTAMP` matches
      `/^\d{8}T\d{6}Z$/`, comma escaped, CR/LF escaped, folding at 75 octets
- [ ] click: stub `URL.createObjectURL`/`revokeObjectURL` (jsdom has neither), assert anchor
      `download` + `href`, assert the done label and the status text; fake timers for the 1 s revoke
- [ ] second click keeps the label; clicking card 2 overwrites the status and leaves card 1 alone
- [ ] derive leaf/`<time>` from `start`/`end` (no hard-coded "Oct 14 Wed")

## 10 — Verification

- [ ] `npm run verify:app showbill` passes (typecheck + lint + knip + fallow + 100 % coverage + build)
- [ ] `openspec validate template-showbill --type spec` is valid
- [ ] measured at 1440: content **819.22**, grid **1160** at x 140 / y **171.19**, cards
      **370.66 × 533.53**, media **232.97**, leaf **68 × 79** 30 px into the body
- [ ] measured at 950 / 949 / 636 / 635: **3 / 2 / 2 / 1** columns, tracks **290.00** at both floors
- [ ] measured at 1,024: cards **564.52**, stub heights **124.02 / 83.02 / 124.02**
- [ ] measured at 320: track **290** in a **288** grid, 1 column, document **1,903.05**
      (**1,929** after a click), `scrollX 0` after `scrollTo(300,0)`
- [ ] contrast sweep: **no** text run under AA (worst text 4.79:1 on the done state), focus ring
      **5.17:1**
- [ ] `curl -I https://showbill.free.componentdock.com` → 200, `ssl_verify_result=0`
- [ ] `TEMPLATES.md` row added under `## Bootstrap Cards (20)`; `npm run readme:status` re-run
