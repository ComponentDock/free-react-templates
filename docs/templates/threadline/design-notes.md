# Threadline — Design Notes

<!-- doc-token-reverify:2026-10-22 -->

> **Tokens re-verified against the live sheet (2026-10-22).** The rows below are the values the reference's own stylesheet paints, quoted with the rule that paints them; the sentence further down that carries the older value is a **screenshot approximation and is superseded** where the two differ.  CSS values are canonical over screenshots (`docs/replication.md`), so build the sheet's value.
>
> Live reference: <https://preview.colorlib.com/theme/malefashion/>
>
> | brief says | live sheet paints | evidence |
> | --- | --- | --- |
> | `#e53e3e` | `#e53637` | `.header__menu ul li a:after{background: #e53637}` |
>
> If the quoted rule belongs to a different ROLE than the line you are building (a footer link's red is not a CTA's fill), read the sheet's own rule for your role instead of substituting across roles.

<!-- /doc-token-reverify -->

## Original: ColorLib Malefashion

- Slug: malefashion
- Preview: https://preview.colorlib.com/theme/malefashion/
- Category: Fashion / E-Commerce

## Visual Design

- Dark/black header with white text, red accent color (#e53e3e)
- Nunito Sans typeface throughout
- Hero: large background image with overlay text, red CTA button
- Category banners: 3-column grid with hover effects
- Product cards: image, name, price, compare checkbox, add-to-cart
- Hot deal: countdown timer with red/dark theme
- Instagram: 6-image grid with centered text overlay
- Blog: 3-column cards with image, date, title
- Footer: dark background, 4-column layout

## Color Palette

- Primary red: #e53e3e
- Dark bg: #1a1a1a / #111111
- Light section bg: #f5f5f5
- White: #ffffff
- Text primary: #1a1a1a
- Text secondary: #666666

## Fonts

- Nunito Sans: 300, 400, 600, 700, 800, 900

## Reference tokens (measured 2026-10-23)

Read from `https://preview.colorlib.com/theme/malefashion/` (HTTP 200, 56,662 B,
`<meta name="generator" content="Male Fashion 3.0.0">`) and its theme sheet
`css/style.min.css?v=3.0.0` (74,332 B, sha256 `539be22ccba7…`), over Bootstrap 5
(120,349 B) and Swiper 14 (14,615 B). **This is a 3.0.0 rebuild** — every asset
carries `?v=3.0.0` — so app/reference gaps are drift, not prep error.

| Token | Reference | App (`apps/threadline`) |
| ----- | --------- | ----------------------- |
| Accent red (hover) | `#e53637` (10) | ramp centred on `#e53e3e` (invented, no exact match) |
| Accent red (kicker/pressed) | `#c8191a` (13) | — |
| Ink | `#111` (111 occurrences, incl. `.header__top` and `.footer`) | `#1a1a1a` / `#111111` |
| Product ink | `#0d0d0d` (13) | — |
| Copy | `#666` (25) / `#333` (4) | not tokenised |
| Face | Nunito Sans, headings **400** | Nunito Sans ✓, headings bold |
| Button | radius 0, 13–14px/700 uppercase, `letter-spacing: 4px`, `padding 14px 30px` | tracked uppercase ✓ |
| Header top bar | `#111`, 10px padding, white 13px uppercase links | ✓ |
| Footer | `#111`, 70px top padding | `#111111` ✓ |

The sheet uses **one** dark literal (`#111`) for header band, dropdown, buttons'
text, footer and product labels; the app's two-step surface ladder is a
reasonable simplification, not a fidelity target.

Section order measured: `#111` top bar (Sign in / FAQs / currency / cart) → hero
slider → 3 category banners → product tabs (New / Featured / Sale) → hot-deal
countdown → Instagram strip → blog → `#111` footer + newsletter.
