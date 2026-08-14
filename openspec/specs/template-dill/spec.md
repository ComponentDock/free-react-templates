# Template: Dill (Bootstrap Accordion — Sidebar Menu)

## Purpose

Dill is a single-page accordion / sidebar-menu template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Accordion 15" free template (source:
https://colorlib.com/wp/template/accordion-15/), built under a DIFFERENT name
(**Dill** — a herb, continuing the herb/spice naming run of the accordion
series: thyme, basil, oregano, anise, rosemary…; per the monorepo naming
mandate — never reuse the ColorLib source name), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

> NAMING NOTE: the ColorLib source name "Accordion 15" is FORBIDDEN as the
> app name. **Dill** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-14). Source slug + preview URL are recorded
> below.

The original is a minimal **sidebar-menu accordion**: a light-gray page with a
centered "Bootstrap Accordion #5" heading and a narrow (~300px) centered card
holding FOUR accordion rows — **Profile** (expanded by default), **Messagess**,
**Settings**, and **Logout** — each with a coral `#f16947` header bar, a white
left icon, and a dark `#4b4142` expanded panel containing a six-link menu
(Profile, Messages, Settings, Sales, Marketing, Marketing). Unlike Accordion
13/14 (Anise/Rosemary — FAQ panels with plain text), every panel body here is
the SAME menu list, and the header color does NOT change between
active/collapsed states. Dill recreates that structure 1:1 with matching
layout, tokens, typography, and content kinds (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Accordion 15". Listed in TEMPLATES.md under
  **Bootstrap Accordions (20)** (line 653). Free accordion/component
  template. The slug appears exactly once (no dup rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-14):** the default preview
  URL `https://preview.colorlib.com/theme/accordion-15/` returns 404; the
  REAL preview is `https://preview.colorlib.com/theme/bac/accordion-15/`
  (HTTP 200, 19.9KB HTML, `<title>Accordion #5</title>`; the `/bac/` subpath
  = the "bootstrap accordions" demo index — same pattern as accordion-13 →
  Anise and accordion-14 → Rosemary). Stylesheets: `css/style.css` (2.4KB
  custom tokens on top of Bootstrap; the only non-vendor stylesheet) +
  `fonts/icomoon/style.css` for the header icons. Structure, copy, and tokens
  below are from the live DOM + `style.css`. Screenshot
  (`accordion-15.jpg`, 1200×972, browser-verified 2026-08-14) confirms the
  aesthetic: very light gray page, centered "Bootstrap Accordion #5" heading,
  one narrow centered card with a soft drop shadow, four terracotta/orange
  header bars with white icons, first row expanded showing a dark-gray menu
  panel, no navbar, no footer, no imagery.
- **Visual design (screenshot + live DOM):** clean, flat, minimalist
  "dashboard sidebar" aesthetic — earthy two-tone palette (terracotta coral
  `#f16947` headers + dark charcoal `#4b4142` panels) on a very light gray
  `#efefef` page. The only depth cue is the card's diffuse shadow
  (`0 15px 30px 0 rgba(0,0,0,.2)`). Roboto throughout, small type (13px menu
  links). No images anywhere — pure text + icons + one accordion card.
- **Section order (1:1 from live DOM):**
  1. **Page heading** — `div.content` (padding `7rem 0`, page bg `#efefef`)
     → `div.container` → centered `h2.my-5.text-center` "Bootstrap Accordion
     #5" (20px Roboto, dark gray, `my-5` = 3rem vertical margins).
  2. **Accordion card** — `div.container` → `div.accordion-wrap`
     (`max-width: 300px; margin: 0 auto;` box-shadow
     `0 15px 30px 0 rgba(0,0,0,.2)`) → `div.custom-accordion#accordion_1` →
     four `div.accordion-item` stacked flush (item bg `#4b4142`, NO gap, NO
     borders, NO radius). Each item: `h2.mb-0` → full-width `button.btn.btn-link`
     (`width: 100%`, `border-radius: 0`, `padding: 15px`, text-left,
     `background: #f16947`, `color: #fff`, `.3s all ease` transition) with a
     `<span class="wrap-icon mr-3">` icon (`mr-3` = 1rem right margin,
     white, ~18–20px) + label. **NOTE: the header background is `#f16947`
     for BOTH active and collapsed items** (`.accordion-item.active .btn-link`
     repeats the same values — there is NO visual state difference on the
     header itself, unlike Anise/Rosemary).
  3. **Panel bodies** — `div.accordion-body` (`color: #888`) → `ul.custom-menu`
     (block list, `padding: 0; margin: 0`) with SIX links, IDENTICAL in every
     panel: **Profile, Messages, Settings, Sales, Marketing, Marketing**.
     Each `li a`: `display: block`, `color: rgba(255,255,255,.5)`,
     `padding: 10px 20px`, `font-size: 13px`, relative; on hover →
     `padding-left: 30px`, `color: #fff`, and an 8px coral `#f16947` left bar
     (`a:before`, width 0 → 8px on hover, `.3s all ease`). Only one panel
     open at a time (`data-parent="#accordion_1"` = accordion behavior).
  4. **NO footer in the original** — add the mandatory Component Dock
     attribution footer (repo convention, kept tiny and muted so the minimal
     aesthetic survives).
- **KEY DIFFERENCES from Anise (accordion-13) and Rosemary (accordion-14):**
  (a) FOUR panels instead of three; (b) headers are coral `#f16947` on ALL
  items — no green `#72c02c` (Anise) or purple `#743beb` (Rosemary) state
  accent, no 2px left bar on the active header, no `#f8f8fa` active toggle
  bg; (c) panel bodies contain a dark MENU LIST (not FAQ text paragraphs);
  (d) the whole widget is a narrow 300px centered CARD with a drop shadow
  (`accordion-wrap`), not full-width rows; (e) page bg `#efefef` (same as
  Rosemary, differs from Anise's `#fff`). Do not copy Anise/Rosemary tokens.
- **Design tokens (from `css/style.css` + computed styles):**
  - Accent coral **#f16947** — header button bg (all states), menu-link
    hover left bar (`a:before`).
  - Dark **#4b4142** — `accordion-item` bg (= expanded panel bg).
  - Page bg **#efefef**; menu link color `rgba(255,255,255,.5)` (hover
    `#fff`); body copy `#888`; paragraph mute `#b3b3b3` (weight 300 — latent
    on this page, no `<p>` elements).
  - Font **Roboto** (body + headings, via Google Fonts `<link>`; body weight
    300); heading 20px; menu links 13px.
  - Card shadow `0 15px 30px 0 rgba(0,0,0,.2)`; NO radius, NO borders
    (flat); section padding `7rem 0`; header padding 15px; menu link padding
    10px 20px (hover 10px 30px); icon margin-right 1rem.
- **Icons (icomoon → lucide-react):** `icon-person_outline` → **User**;
  `icon-mail_outline` → **Mail**; `icon-gear` → **Settings**; **LogOut**
  for `icon-power_settings_new`. Probe each with the typeof check before
  committing to the icon map (lucide-react has renamed/removed icons
  silently before). Do NOT copy the icomoon icon font.
- **Copy fidelity:** keep the source content kinds exactly — four header
  labels (Profile / Messagess / Settings / Logout) and a six-link menu
  (Profile, Messages, Settings, Sales, Marketing, Marketing) repeated in
  every panel body. The source contains a typo "Messagess" and the menu
  lists "Marketing" twice — RECOMMENDED: fix the typo to "Messages" (and
  optionally dedupe the menu) as a documented deviation; keep the same
  labels/kinds either way. Do NOT paraphrase the panel bodies into FAQ text
  — they are menus here.
- **Placeholders:** none needed (no imagery in the reference).
- **Recreation decisions:** all photos → none (no imagery); icomoon icons →
  lucide-react (User, Mail, Settings, LogOut); Roboto via Google Fonts
  `<link>`; Bootstrap collapse → React state accordion (single `openIndex`,
  default 0); hover slide (padding-left 10px→30px) + 8px coral left bar →
  Tailwind group-hover utilities; no assets copied.

## Requirements

### Requirement: Page heading

The system SHALL render a centered page heading above the accordion card on a
light-gray page.

#### Scenario: Heading content

- **GIVEN** the Dill page is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show a centered heading (20px, dark gray, Roboto)
  as the only text above the accordion card
- **AND** the page background SHALL be `#efefef`
- **AND** the heading text SHALL be a simple page title in the same kind as
  the reference ("Bootstrap Accordion #5"; may be adapted to the new-name
  context per conventions, e.g. "Bootstrap Accordion — Dill")

### Requirement: Accordion card

The system SHALL render a narrow centered card (max-width ~300px, soft drop
shadow) containing exactly four stacked accordion rows with coral header
bars, white left icons, and labels.

#### Scenario: Card and header rows

- **GIVEN** the page is rendered
- **WHEN** the accordion card is displayed
- **THEN** it SHALL be centered with a soft shadow
  (`0 15px 30px 0 rgba(0,0,0,.2)`) and a max width of ~300px
- **AND** it SHALL contain four header rows, each a full-width left-aligned
  button with `#f16947` background, white text, 15px padding, no radius,
  an icon at the left (1rem gap to the label), and the labels: **Profile**,
  **Messagess** (or fixed "Messages"), **Settings**, **Logout**
- **AND** the header background SHALL be `#f16947` in BOTH the expanded and
  collapsed states (no color change on the active row)

#### Scenario: Single-open accordion behavior

- **GIVEN** the accordion is displayed with the first panel (Profile)
  expanded by default
- **WHEN** the user clicks another header (e.g. Settings)
- **THEN** that panel SHALL expand and the previously open panel SHALL
  collapse (only one panel open at a time)
- **AND** clicking the open panel's header SHALL collapse it

### Requirement: Panel bodies (menu lists)

The system SHALL render each expanded panel as a dark `#4b4142` area
containing a vertical menu list of links with a hover slide + coral left bar.

#### Scenario: Menu content

- **GIVEN** a panel is expanded
- **WHEN** the panel body is displayed
- **THEN** it SHALL show a dark (`#4b4142`) background with a menu list of
  six links: Profile, Messages, Settings, Sales, Marketing, Marketing (or a
  deduplicated variant of the same kinds)
- **AND** each link SHALL be 13px, `rgba(255,255,255,.5)`, with 10px/20px
  padding

#### Scenario: Menu link hover

- **GIVEN** the menu list is displayed
- **WHEN** the user hovers a link
- **THEN** the link SHALL slide right (padding-left 20px → 30px), turn white,
  and show an 8px coral `#f16947` bar on its left edge

#### Scenario: Panels share the same menu

- **GIVEN** any panel is expanded
- **WHEN** the user switches between panels
- **THEN** every panel SHALL show the same menu-list content (per the
  reference, all four bodies are identical)

### Requirement: Footer

The system SHALL render a minimal footer with the Component Dock attribution
(absent in the original — repo convention).

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a muted attribution line linking to
  `https://www.componentdock.com/` ("Component Dock")

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Dill app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the heading, accordion card, and footer in
  order inside a `main` landmark
- **AND** the document title SHALL be "Dill — Accordion Template" (or
  similar new-name title)

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App typechecks (`npm run typecheck -w @free-react-templates/dill`)
- [ ] Tests at 100% coverage (lines/functions/branches/statements) for the app
- [ ] Build succeeds (`npm run build -w @free-react-templates/dill`)
- [ ] Section order matches the reference 1:1 (heading → accordion card → footer)
- [ ] Design tokens from the reference used in `@theme` (accent #f16947, dark #4b4142, page #efefef, menu rgba(255,255,255,.5), hover #fff, body #888; Roboto Google Font)
- [ ] Page: `#efefef` bg, centered 20px heading with 3rem vertical margins, `7rem 0` section padding
- [ ] Card: max-width 300px, centered, shadow `0 15px 30px 0 rgba(0,0,0,.2)`, flat corners, no borders, items stacked flush
- [ ] Four header rows: full-width, text-left, 15px padding, `#f16947` bg + white text + white icon (1rem gap) in BOTH states; labels Profile / Messagess-or-Messages / Settings / Logout; lucide User, Mail, Settings, LogOut
- [ ] Accordion: single-open (openIndex state, default 0 = Profile), `aria-expanded`/`aria-controls`/`role="region"`, keyboard activation
- [ ] Panel bodies: dark `#4b4142`, six-link menu (Profile, Messages, Settings, Sales, Marketing, Marketing or deduped), 13px rgba(255,255,255,.5) links
- [ ] Hover: padding-left 20→30px, color → #fff, 8px `#f16947` left bar
- [ ] Footer: Component Dock attribution link (repo convention; not in original)
- [ ] Document title set; no ColorLib strings anywhere in app code
