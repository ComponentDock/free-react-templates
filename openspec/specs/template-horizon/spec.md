# Template: Horizon (Coming Soon)

> Recreation of ColorLib "08 Comming Soon" (Coming Soon V23)
> Source: https://colorlib.com/wp/template/08-comming-soon/
> Preview: unreachable (404); design based on screenshot + description — **re-probed 2026-10-23: the demo serves** (measured record below).
> Description: "full-screen image background website template with a framed look"

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://colorlib.com/etc/cs/08-comming-soon.html` — HTTP 200, 5,032 B, title `TITLE`.
>
> Sheet: `https://colorlib.com/etc/cs/08-comming-soon/css/style.css?v=19c47045` (9,480 B).
> Faces it actually declares: `Open Sans`, `Poppins`.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->

## Purpose

A free coming soon landing page with a full-screen background image and a
centered "framed" content box — bordered with backdrop blur — containing a
countdown timer, email signup, and social links. Distinct from the other seven
ColorLib coming-soon recreations by its elegant framed aesthetic.

<!-- live-token-reverify:2026-10-22 -->

### Live reference restored (2026-10-22)

The prep-time note above records the preview 404. **Re-probed 2026-10-22**
the reference answers **HTTP 200**, so the live DOM and CSS are
authoritative again — CSS values are canonical over the screenshot
(`docs/replication.md`).

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://colorlib.com/etc/cs/08-comming-soon/index.html` | HTTP 200 · 4,984 B |
| stylesheet | `https://colorlib.com/etc/cs/08-comming-soon/css/style.css?v=19c47045` | HTTP 200 · 9,480 B · sha256 `1561487e8005` |

**Live palette** (hex × occurrences in that sheet): `#ffffff`×5,
`#f84982`×3, `#333333`×2, `#555555`×1, `#e45f74`×1, `#000000`×1,
`#2a61d6`×1, `#3aa4f8`×1, `#f43846`×1, `#8f614a`×1.

**Low-chroma values the sheet actually uses** — `#333333`, `#555555`; any
sampled Tailwind grey above is an approximation of these.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the shipped source bundle, not sampled off the screenshot:
https://preview.colorlib.com/downloads/free/08-comming-soon.zip (HTTP 200, 371,354 B, sha256 `ca0aca06cfdd…`, fetched 2026-10-23) — the free source bundle, because `/theme/` returns 404 for this template; design stylesheet(s) `css/style.css`. CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#f84982` | 2 declarations — `#normal-countdown .time-sec .main-time`, `.main-area .notify-btn` |
| Other chromatic values | `#3aa4f8` (1), `#f43846` (1), `#e1c013` (1) | secondary hues in the same sheet |
| Surface | `#ffffff` | 5 declarations — `.font-white`, `.main-area` |
| Ink / dark surface | `#000000` | 1 declarations — `.main-area:after` |
| Typeface | `Open Sans` (1 rule — `body`)<br>`Poppins` (1 rule — `h1, h3`) | `font-family` declarations in the design sheet |
| Radii | `50px`, `100px`, `40px` | `50px` (`.main-area .notify-btn`); `100px` (`#normal-countdown .time-sec`); `40px` (`.main-area .social-btn > li > a > i`) |

Palette in order of use: `#ffffff` ×5, `#333333` ×2, `#f84982` ×2, `#555555` ×1, `#e45f74` ×1, `#000000` ×1, `#2a61d6` ×1, `#3aa4f8` ×1.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Frame layout with background image

The page SHALL display a full-screen background image with a dark overlay
and a centered bordered frame containing the main content.

#### Scenario: Frame renders correctly

- **WHEN** the page loads
- **THEN** a heading "Coming Soon" is visible inside a bordered frame container
- **AND** the frame has a visible white border and semi-transparent background

### Requirement: Countdown timer

The page SHALL include a countdown timer that counts down to a target date.

#### Scenario: Timer displays four time units

- **WHEN** the page loads
- **THEN** four time units are displayed: Days, Hours, Minutes, Seconds
- **AND** the timer has a `role="timer"` with an accessible label

#### Scenario: Timer shows zeros when target has passed

- **WHEN** the current time is after the target date
- **THEN** all four units display "00"

#### Scenario: Timer updates in real time

- **WHEN** 5 seconds elapse
- **THEN** the seconds value decreases by 5

### Requirement: Email signup form

The page SHALL include an email signup form for visitors to notify when the
site launches.

#### Scenario: Form renders with email input and submit button

- **WHEN** the page loads
- **THEN** an email input field is present
- **AND** a submit button labeled "NOTIFY ME" is present
- **AND** the form has an accessible name

#### Scenario: User can type an email address

- **WHEN** the user types into the email input
- **THEN** the typed text appears in the field

### Requirement: Social links

The page SHALL include social media icon links.

#### Scenario: Five social links are rendered

- **WHEN** the page loads
- **THEN** five social icon links are present (Facebook, Twitter, Google Plus, Instagram, Pinterest)
- **AND** each link opens in a new tab
- **AND** each link has an accessible label

### Requirement: Component Dock footer

The page footer SHALL link to Component Dock.

#### Scenario: Footer link renders correctly

- **WHEN** the page loads
- **THEN** a link to https://www.componentdock.com/ is visible
- **AND** the link text says "More templates at Component Dock"
- **AND** the link opens in a new tab
- **AND** a `contentinfo` landmark is present

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/horizon/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/horizon/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Frame layout with background image — a heading "Coming Soon" is visible inside a bordered frame container
- [ ] Countdown timer — four time units are displayed: Days, Hours, Minutes, Seconds
- [ ] Email signup form — an email input field is present
- [ ] Social links — five social icon links are present (Facebook, Twitter, Google Plus, Instagram, Pinterest)
