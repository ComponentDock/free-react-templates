# Template: Thermly (Home services — HVAC booking landing)

## Purpose

An on-demand HVAC landing page whose product *is* the appointment: a split hero pairs a short claim
with a three-step booking widget (what needs doing → which day → which two-hour arrival window), then
a **season-swapped** services grid that flips between a cooling and a heating catalogue (teal vs
amber accent), a four-reason "the appointment is the product" band with a technician photograph, a
three-step visit timeline, three maintenance-plan cards, a sixteen-town service-area list, three
review cards, a five-row FAQ accordion, and a full-width teal closing call-out over a near-black
five-column footer with a newsletter field.

Recreation of the ColorLib "Airwise" design (https://colorlib.com/wp/template/airwise/, live preview
https://preview.colorlib.com/theme/airwise/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript
single-page application.

* **Source slug:** `airwise`
* **ColorLib page:** https://colorlib.com/wp/template/airwise/ — HTTP 200, 112,042 B,
  `<title>` **"Airwise - HVAC Website Template 2026 - Colorlib"**
* **Live preview:** https://preview.colorlib.com/theme/airwise/ — HTTP 200, 94,591 B, page
  `<title>` **"HVAC repair and installation in Fresno, booked by the hour | Airwise Heating & Air"**
  (read 2026-10-24 with `curl -4`; this host is IPv4-only)
* **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/airwise-template.jpg
  (served as AVIF, 79,408 B; the catalog card links it as `airwise-template.jpg`)
* **New name:** `thermly` (apps/thermly, `@free-react-templates/thermly`) — one lowercase word from
  *therm* + *-ly*, in the house naming style (`manorly`, `groomly`); differs from the source slug and
  has no collision in `apps/`, `openspec/specs/`, `docs/templates/` or `TEMPLATES.md`
* **Deploy target:** https://thermly.free.componentdock.com (`apps/thermly/public/CNAME`,
  `homepage` in `apps/thermly/package.json`)
* **Category:** **no `TEMPLATES.md` row exists yet** — see *Why this design has no row* below.
  Suggested home: `## Business (365)`, the section that already holds the two HVAC designs
  (`hvac` → `clutch`/`aeroworks`, `hvacompany` → `frostguard`).

### Why this design has no row (catalogue gap, measured 2026-10-24)

`TEMPLATES.md` is exhausted — 0 `- [ ]`, 2,857 `[x]`, and every row resolves to an `apps/` folder and
an `openspec/specs/template-<app>/` spec — but the **catalogue is not complete**. All 40 pages of
https://colorlib.com/wp/templates/ were crawled (`curl -4`, 1,874 distinct `wp/template/<slug>/`
links after de-duplication) and compared with the 1,631 slugs `TEMPLATES.md` cites:

| bucket | count | what it is |
| --- | ---: | --- |
| in the listing, absent from `TEMPLATES.md` — standalone designs | **42** | `airwise` plus the 41 listed in `docs/catalog-coverage.md`; of these, 35 have a name that is free everywhere, and 7 — `cairn`, `groundwork`, `kinetic`, `lantern`, `threadline` (existing apps) and `onyx`, `zephyr` (orphan preps, both `colorlib-error-404-*` designs) — coincide with a name already used for a *different* design, so those need a different invented name before they can be prepped |
| in the listing, absent from `TEMPLATES.md` — snippet families | 214 | `card-01…20` (20), `alert-`, `hero-`, `pricing-table-`, `progress-bar-`, `shopping-cart-`, `tabs-`, `toast-` (12 each), `appointment-form-`, `breadcrumb-`, `coming-soon-page-`, `error-page-`, `job-application-form-`, `login-page-`, `newsletter-form-`, `offcanvas-`, `pagination-`, `registration-page-`, `survey-form-` (10 each) — 19 families |
| cited by `TEMPLATES.md`, absent from the listing | 13 | `*-wordpress-themes` round-up posts (`blog-`, `church-`, `education-`, `landing-page-`, `medical-`, `personal-`, `portfolio-`, `travel-`, `wordpress-business-`, `wordpress-dentist-`, `wordpress-ecommerce-`, `wordpress-restaurant-`, `wordpress-wedding-`) — catalogue pages, not designs |

Neither `airwise` nor any of the 42 owns an app or a spec (`grep -rl 'template/airwise' openspec/specs/`
→ empty), so this prep is not a duplicate of an earlier rename. `airwise` was chosen first because it
is the first standalone design in the listing that is not a snippet. The census, its commands and the
open decision (batch-add rows vs leave the catalogue as is) are recorded in
`docs/catalog-coverage.md`.

**Implementer note:** because there is no row yet, add one before the PR title claims a row —
`- [~] **Airwise** — [colorlib](https://colorlib.com/wp/template/airwise/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/airwise-template.jpg) · [thermly](https://thermly.free.componentdock.com)`
under `## Business (365)`, then flip it to `[x]` with the other bookkeeping. Do not invent a second
row for the same slug.

## Reference readings (2026-10-24, `curl -4`)

| artefact | bytes | sha256 |
| --- | ---: | --- |
| `theme/airwise/` page (DOM authority) | 94,591 | — (page bodies are request-unstable; bytes only) |
| `theme/airwise/_astro/Base.C_WkB4-N.css` (token authority) | 60,585 | `be1904cfd3e7ff1831f3303554ef9cd9e3790f6fe2df41f912fe3cb622347173` |
| catalog screenshot `airwise-template.jpg` (AVIF; decoded 2400×1892) | 79,408 | — (shows header + hero + the top of the booking card) |
| `colorlib.com/wp/template/airwise/` (catalog entry) | 112,042 | — |
| Playwright full-page render, 1440 × 7,459 px | — | used to read bands 3–10, whose `data-animate` reveal leaves them at `opacity:0` in a plain screenshot |

The preview is an **Astro** build with Tailwind 4 output: one CSS file, no framework JS bundle, and
four small inline scripts (`booking`, `season toggle`, `faq accordion`, `header`). It ships
`dark:` variants for every band (gray-950/900 grounds) — the recreation is **light-only**, a recorded
deviation. The only images are `assets/img/logo.svg`, `logo-light.svg` and one Unsplash technician
photo; **none** of those files, and no CSS, font or icon, is copied. The recreation uses
`packages/ui` primitives, `lucide-react` icons and `https://picsum.photos/seed/thermly-<n>/<w>/<h>`
placeholders.

## Design tokens (measured from `_astro/Base.C_WkB4-N.css`, 60,585 B)

### Brand ramp — `primary` (cooling / default accent)

| token | hex | where the reference uses it |
| --- | --- | --- |
| `primary-50` | `#effafa` | tinted chips, focus surfaces |
| `primary-100` | `#d6f2f2` | eyebrow pills (`Reviews`, `Questions`) |
| `primary-200` | `#aae4e5` | star glyphs, avatar circles |
| `primary-400` | `#3eb2b5` | dark-mode text, gradient end stop |
| `primary-500` | `#22979b` | focus ring (`.btn-primary:focus`), input focus border |
| `primary-600` | `#187e83` | **brand** — solid CTA, active `Cooling` pill, price lines |
| `primary-700` | `#156669` | **closing CTA band**, `.btn-primary:hover`, cooling price text |
| `primary-800` | `#145256` | deep text on tint |

Gradient measured in the sheet: `linear-gradient(to right, #187e83, #3eb2b5)` — used on the hero's
eyebrow/hero wash only, not on the CTA band.

### Season accent — `heat` (heating)

| token | hex | where |
| --- | --- | --- |
| `heat-600` | `#a9691a` | active `Heating` pill (`aria-pressed="true"`) |
| `heat-700` | `#8a5517` | heating price lines |

The two ramps are swapped by the season state, never mixed in one band: a cooling panel prices in
`primary-700`, a heating panel in `heat-700`.

### Ink (cool near-black) and neutrals

| token | hex | where |
| --- | --- | --- |
| `ink-50` | `#f5f7f8` | alternating band ground (hero, why-us, plans) |
| `ink-100` | `#e8ecee` | hairline borders (header bottom) |
| `ink-200` | `#ced6d9` | card borders, input borders |
| `ink-400` | `#6e8085` | muted meta |
| `ink-500` | `#4d5e63` | body copy in cards |
| `ink-600` | `#334347` | secondary copy |
| `ink-700` | `#243134` | sub-headings |
| `ink-800` | `#182225` | headline colour |
| `ink-900` | `#0f1719` | footer ground (footer renders `bg-gray-900`) |
| white | `#ffffff` | card grounds, alternating bands |

Grays present in the sheet for the band grounds the tokens do not cover: `#f9fafb` (reviews band,
`bg-gray-50`), `#e5e7eb` / `#d1d5db` (dividers, secondary-button border), `#6b7280` / `#9ca3af`
(meta), `#111827` (body text default), `#030712` (dark-mode ground).

### Typography

* **Family:** `"Plus Jakarta Sans", system-ui, sans-serif` — one family for the whole page, loaded
  from the preview's own `/cf-fonts` (v5.2.8, weights 400/500/600/700/800). The recreation loads it
  from Google Fonts via `<link>` in `index.html`; no font file is copied.
* **h1:** `text-4xl sm:text-5xl`, `font-bold`, `leading-[1.1]`, `tracking-tight`, colour `ink-800`.
* **h2:** `text-3xl sm:text-4xl`, `font-bold`, `tracking-tight`, `ink-800`.
* **h3 (card titles):** `text-lg`, `font-bold`, `ink-800`; FAQ rows `text-lg`, `font-semibold`.
* **Body:** `text-lg` for section ledes, `text-ink-500/600`; card blurbs `text-sm`/`text-base`.
* **Eyebrow pill:** `text-sm font-medium text-primary-700` on `bg-primary-100`, `rounded-full`,
  `px-3 py-1`.
* **Numbers / step ordinals:** `font-bold`, `text-sm`, tabular figures are not used.

### Buttons and form controls

| element | measured |
| --- | --- |
| `.btn` / `.btn-primary` | `inline-flex`, `border-radius: 0.5rem` (`--radius-lg`), padding `0.625rem 1.25rem`, `font-size: 0.875rem`, weight 500, white text, `background: #187e83`, shadow `0 10px 15px -3px #187e8333, 0 4px 6px -4px #187e8333`; hover `#156669` + deeper shadow; focus ring 2px `#22979b` |
| `.btn-secondary` | white ground, `border: 1px solid #d1d5db`, text `#374151`; hover `#f9fafb`; focus ring 2px `#6b7280` |
| CTA band buttons | white solid (`Book a visit`) and white 1px outline on the teal ground |
| season pills | `rounded-full` group with a 1px `ink-200`/gray-300 track; active pill is solid (`#187e83` cooling, `#a9691a` heating), inactive is ink text on white |
| booking option pills | `rounded-full` label on a checked radio — selected `#187e83` with white text; day chips are square-ish `rounded-xl` cards with name / number / month stacked |
| inputs | `rounded-lg`, `border: 1px solid ink-200`, `px-4 py-2.5`, focus `border-primary-500` + `ring-2 ring-primary-500/30` |
| cards | `rounded-2xl`, `border: 1px solid ink-200`, `bg-white`, `shadow-sm`, `p-6 lg:p-8`; the services grid is one bordered block whose cells are divided by 1px hairlines (no per-cell border) |

Radii: `--radius-lg: .5rem`, `--radius-xl: .75rem`, `--radius-2xl: 1rem`, plus `9999px` pills.
Shadows: `0 4px 16px -4px #0000001a` (card), `0 12px 32px -8px #00000024` (hover/lifted card).

### Rhythm

* Section padding: `.section` = `padding-block: 5rem`, `lg: 7rem` (`py-20 lg:py-28`).
* Container: full width with `px-4` / `lg:px-8`, content max-widths `max-w-3xl` (centred heads),
  `max-w-7xl` (grids).
* Band grounds alternate: `ink-50` → white → `ink-50` → white → `ink-50` → white → `gray-50` →
  white → teal → near-black footer.
* Header: `sticky top-0 z-50`, `bg-white/90 backdrop-blur-lg`, 1px `ink-100` bottom border.

## Reference document order (ten bands + header + footer)

| # | id | ground | content |
| --- | --- | --- | --- |
| — | `header` | white/90, blurred | wordmark + mark; nav `Services`, `Maintenance plans`, `Service areas`, `About`, `Blog`, `Contact`; city link `Fresno, CA`; phone `(555) 020-0200`; solid CTA `Book a visit`; mobile disclosure |
| 1 | (hero wrapper) | `ink-50` | eyebrow pill `Fresno · Licensed C-20 contractor`; h1 `Pick your arrival window right now.`; lede about AC/heating/air quality across the county; rating `4.8` + `340+ reviews on Google · sample data`; four ticks — *A two-hour window, not a whole day*, *Diagnostic fee waived if you go ahead*, *Part prices quoted before we fit them*, *NATE-certified technicians, no subcontractors* |
| 2 | `hero-book` | transparent (sits in the hero's right column) | booking card: `Book a technician` + one-line lede; **step 1** `What needs doing?` — 5 pills; **step 2** `Which day suits you?` — 7 day chips; **step 3** `Pick an arrival window` — 4 windows with status; name / phone / address fields; live summary line; submit |
| 3 | `seasons` | white | eyebrow `What we are busy with`; month-driven h2 (`It is cooling season in Fresno` / `It is heating season in Fresno`) + description; `Cooling` / `Heating` pill switch; 3 × 2 bordered grid of 6 service cards per season, each title + blurb + price (`From $89 diagnostic`, `From $6,400 installed`, `Quoted on site`); footnote `Starting prices are sample data…` |
| 4 | `why-us` | `ink-50` | two columns: technician photograph (with the reference's own "replace with your own photograph" caption) left; right eyebrow `Why the window matters`, h2 `The appointment is the product`, lede, four numbered-free reasons — `Two hours, not eight`, `The price of the part, before it goes in`, `Sized properly, not matched to the old one`, `Employed technicians` |
| 5 | `process` | white | eyebrow `How a visit goes`; h2 `From booking to a working system`; lede `You already did step one if you used the picker above.`; three steps `01 You pick the window` / `02 We diagnose and quote` / `03 We fix it and log it` with duration notes `Under a minute`, `Usually 45 minutes`, `Most calls, one visit` |
| 6 | `plans` | `ink-50` | eyebrow `Maintenance plans`; h2 `Two visits a year, and you go to the front of the queue`; footnote `Sample pricing for demonstration…`; three cards — `Seasonal $14/month`, `Priority $24/month` (badge `Most chosen`, emphasised), `Whole home $39/month` — each with 4–5 feature ticks and its own outline/solid CTA |
| 7 | `areas` | white | eyebrow `Where we work`; copy about two technicians placed so the windows hold; 16 towns in three columns (`Fresno`, `Clovis`, `Madera`, `Kingsburg`, `Selma`, `Sanger`, `Reedley`, `Fowler`, `Kerman`, `Visalia`, `Hanford`, `Tulare`, `Chowchilla`, `Parlier`, `Dinuba`, `Firebaugh`); note `Replace this list with your own towns…` |
| 8 | `testimonials` | `gray-50` | eyebrow `Reviews`; h2 `What people say afterwards`; footnote `Sample reviews for demonstration…`; three white `rounded-2xl` cards — 5 teal stars, quoted review, initial avatar (`R`/`A`/`S` on `primary-200`), name + town (`Renee K. · Clovis`, `Anthony V. · Hanford`, `Sofia M. · Kingsburg`) |
| 9 | `faq` | white | eyebrow `Questions`; h2 `Before you book`; lede; five hairline-divided accordion rows with a `+`/`−` circle control |
| 10 | `contact` | `primary-700` `#156669` | h2 `Warm rooms in July, cold ones in January?`; one line; white solid `Book a visit` + white outline `Call (555) 020-0200` |
| — | `footer` | `gray-900` | five columns: mark + wordmark + blurb + `3180 East Shields Avenue, Fresno, CA 93726` + phone + email + 3 social icons; `Services` (4 links); `Company` (5); `Support` (4); `Stay Updated` (blurb + email field + `Subscribe`); legal bar `© 2026 … All rights reserved.` + `Privacy Policy` / `Terms of Service`; cookie strip with `Decline` / `Accept All` |

## Requirements

### Requirement 1: Header

The app SHALL render a sticky, blurred white header with the Thermly mark and wordmark, six in-page
navigation links (`Services`, `Maintenance plans`, `Service areas`, `About`, `Blog`, `Contact`), a
location link, a `tel:` phone link, and one solid `Book a visit` CTA, collapsing to a disclosure
below the `xl` breakpoint.

#### Scenario: Visitor navigates from the header

- **GIVEN** the header is rendered at a desktop viewport
- **WHEN** the header is inspected
- **THEN** it is a `banner` landmark containing a navigation landmark with the six links
- **AND** every link targets an in-page section id that exists on the page
- **AND** the phone control is an `href="tel:"` link and the CTA is a link, not a button

#### Scenario: Visitor opens the mobile navigation

- **GIVEN** the header is rendered at a narrow viewport
- **WHEN** the visitor activates the menu control
- **THEN** the control reports `aria-expanded="true"` and a mobile navigation lists the same links
- **AND** activating the control again, or following any link, closes the panel and restores
  `aria-expanded="false"`

### Requirement 2: Hero

The app SHALL render a split hero on the `ink-50` ground with an eyebrow pill, exactly one `h1`
(`Pick your arrival window right now.`), one supporting paragraph, a rating line (`4.8`, `340+
reviews`), and four benefit ticks, with the booking widget occupying the right column at `lg` and
stacking beneath the copy below it.

#### Scenario: Visitor lands on the page

- **GIVEN** the page has loaded
- **WHEN** the hero is in view
- **THEN** the `h1` is the only level-1 heading on the page
- **AND** the four ticks are a list of four items, each with an icon that is `aria-hidden`
- **AND** the rating renders `4.8` next to a stars control whose accessible name reports the score

### Requirement 3: Booking widget

The app SHALL render a booking form in three labelled steps — service (5 options), day (7 chips), and
arrival window (4 windows) — followed by name, phone and address fields, a live summary line, and a
submit control. The seven day chips SHALL be re-dated from the visitor's current date at render, and
the widget SHALL model taken slots: a window the demo marks as taken for the selected day is
disabled, reads `Taken`, and cannot be submitted.

#### Scenario: Visitor picks a day and a window

- **GIVEN** the booking widget is rendered with no summary
- **WHEN** the visitor selects the third day chip and the fourth window
- **THEN** the summary reads `Your visit: <day>, <window>` using the chip's displayed day/month
- **AND** the selected day chip and window pill render in the brand teal with `aria-pressed`/checked
  state exposed to assistive technology

#### Scenario: Visitor picks a day whose first window is taken

- **GIVEN** the demo's taken-slot table marks the first window of the selected day as taken
- **WHEN** the visitor selects that day
- **THEN** that window's radio is `disabled`, its status text reads `Taken`, and its styling is muted
- **AND** the remaining windows stay selectable and their status text reads `Open`

#### Scenario: Visitor submits a complete booking

- **GIVEN** a service, a day, a window, a name, a phone and an address are provided
- **WHEN** the visitor submits the form
- **THEN** a confirmation region appears reading `Booked for <day>, <window>` and names itself as a
  demo confirmation
- **AND** the page does not navigate away and no network request is made

#### Scenario: Visitor submits an incomplete booking

- **GIVEN** no window is selected
- **WHEN** the visitor submits the form
- **THEN** native validation blocks the submit and no confirmation region appears

### Requirement 4: Seasonal services grid

The app SHALL render a services band whose heading, description and six cards switch between a
cooling catalogue and a heating catalogue. The switcher SHALL expose two `aria-pressed` pills and
SHALL default to the season of the visitor's current month — heating for October through March,
cooling otherwise — with the active accent following the season (`#187e83` cooling, `#a9691a`
heating).

#### Scenario: Visitor lands in a heating month

- **GIVEN** the current month is November
- **WHEN** the services band renders
- **THEN** the heading reads `It is heating season in <city>` and the `Heating` pill is pressed
- **AND** the six visible cards are `No heat`, `Heating tune-up`, `Furnace replacement`,
  `Heat pump service`, `Safety inspection`, `Insulation top-up`

#### Scenario: Visitor switches to cooling

- **GIVEN** the heating panel is showing
- **WHEN** the visitor activates the `Cooling` pill
- **THEN** the heading reads `It is cooling season in <city>` and the six cooling cards replace the
  heating ones in the same grid
- **AND** the pressed state moves to `Cooling` and the price lines adopt the cool accent

#### Scenario: Visitor reads a service price

- **GIVEN** the cooling panel is showing
- **WHEN** the visitor reads the `AC replacement` card
- **THEN** it carries a blurb and a price line reading `From $6,400 installed`
- **AND** every card in the grid exposes a title, a blurb and a price line

### Requirement 5: Why the window matters

The app SHALL render a two-column band on the `ink-50` ground: an image on the left with descriptive
alternative text, and on the right an eyebrow, a level-2 heading, a lede and four reasons, each a
title plus a paragraph.

#### Scenario: Visitor reads the four reasons

- **GIVEN** the band is in view
- **WHEN** the visitor reads the list
- **THEN** it contains exactly four items titled `Two hours, not eight`,
  `The price of the part, before it goes in`, `Sized properly, not matched to the old one` and
  `Employed technicians`
- **AND** the photograph is a placeholder that carries alternative text describing a technician

### Requirement 6: Visit timeline

The app SHALL render a three-step process band on the white ground with ordinals `01`, `02`, `03`,
each step a title, a paragraph and a duration note.

#### Scenario: Visitor scans the process

- **GIVEN** the band is in view
- **WHEN** the visitor reads the steps in order
- **THEN** the titles read `You pick the window`, `We diagnose and quote`, `We fix it and log it`
- **AND** the notes read `Under a minute`, `Usually 45 minutes`, `Most calls, one visit`

### Requirement 7: Maintenance plans

The app SHALL render three plan cards on the `ink-50` ground — `Seasonal` at `$14` per month,
`Priority` at `$24` per month and `Whole home` at `$39` per month — each with a feature list and a
CTA, the middle card visually emphasised and carrying a `Most chosen` badge, plus a footnote stating
the prices are illustrative.

#### Scenario: Visitor compares the plans

- **GIVEN** the plans band is in view
- **WHEN** the visitor reads the three cards
- **THEN** each card shows its name, its monthly price, at least four feature ticks and one CTA
- **AND** only the middle card renders the `Most chosen` badge and the emphasised border/CTA, and its
  emphasis is not the only difference (the name and price are text, not part of an image)

### Requirement 8: Service areas

The app SHALL render a service-area band listing the covered towns as plain text in three columns.

#### Scenario: Visitor checks whether their town is covered

- **GIVEN** the band is in view
- **WHEN** the visitor reads the list
- **THEN** it contains sixteen town names as list items in a single list
- **AND** the surrounding copy explains that the arrival windows hold because technicians are based
  across the county

### Requirement 9: Reviews

The app SHALL render three review cards on the `gray-50` ground, each with a five-star rating, a
quoted review, an initial avatar and a name with a town.

#### Scenario: Visitor reads the reviews

- **GIVEN** the reviews band is in view
- **WHEN** the visitor reads a card
- **THEN** the card exposes the rating to assistive technology (five stars, labelled) rather than
  five unlabelled glyphs
- **AND** the avatar initial is decorative and the reviewer's name and town are text

### Requirement 10: FAQ accordion

The app SHALL render five question rows divided by hairlines, each a button that expands one answer
and reports its state, starting collapsed.

#### Scenario: Visitor expands a question

- **GIVEN** all five rows are collapsed
- **WHEN** the visitor activates the first row (`Do you really hold the two-hour window?`)
- **THEN** the row reports `aria-expanded="true"`, its answer becomes visible, and its control shows
  the minus glyph
- **AND** activating it again collapses the row and hides the answer

#### Scenario: Visitor opens several questions

- **GIVEN** the first row is expanded
- **WHEN** the visitor activates a second row
- **THEN** the second row expands and the first may stay open — the panel is not exclusive
- **AND** every row's expanded state is independent and keyboard reachable

### Requirement 11: Closing call-out and footer

The app SHALL render a full-width closing call-out on `#156669` with a heading, one line of copy, a
white solid CTA and a white outline phone CTA, followed by a near-black footer with five columns
(brand + address/phone/email + socials, `Services`, `Company`, `Support`, `Stay Updated` newsletter),
a legal bar, and a cookie strip. The footer SHALL link `https://www.componentdock.com/` labelled
"Component Dock".

#### Scenario: Visitor follows the closing call-out

- **GIVEN** the call-out is in view
- **WHEN** the visitor reads it
- **THEN** the solid CTA is white on the teal ground and the secondary control is a white outline
  `tel:` link
- **AND** both meet a 4.5:1 contrast ratio against `#156669`

#### Scenario: Visitor subscribes to the newsletter

- **GIVEN** the footer is in view
- **WHEN** the visitor submits an empty newsletter field
- **THEN** native validation blocks the submit
- **AND** submitting a valid address shows an inline confirmation without a page reload

#### Scenario: Visitor follows the marketplace credit

- **GIVEN** the footer is in view
- **WHEN** the visitor reads the legal bar
- **THEN** it renders the copyright line, a privacy link, a terms link and the `Component Dock` link
  to `https://www.componentdock.com/`
- **AND** no app file mentions the source design or ColorLib (provenance lives in this spec only)

### Requirement 12: Accessibility

The app SHALL provide a skip link to `main`, one `h1`, sequential heading levels, labelled form
controls, visible focus rings (`2px #22979b`) on every interactive element, and `aria-pressed`,
`aria-expanded` and disabled states that mirror what is visible.

#### Scenario: Assistive technology reads the page

- **GIVEN** the page is loaded
- **WHEN** the landmark and heading structure is read
- **THEN** exactly one `banner`, one `main`, one `contentinfo` and one `h1` exist
- **AND** the skip link is the first focusable element and targets `#main-content`

## Verification checklist

- [ ] `npx tsc --noEmit` and `npm run lint` clean for `apps/thermly`
- [ ] `npm run test:coverage --workspace @free-react-templates/thermly` at 100% lines/functions/
      branches/statements; no `/* v8 ignore */` added to dodge a branch
- [ ] `npm run build --workspace @free-react-templates/thermly` clean; `scripts/verify-app.sh thermly`
      passes
- [ ] Tokens in `apps/thermly/src/index.css` `@theme`: `primary-50/100/200/400/500/600/700/800`,
      `heat-600/700`, `ink-50/100/200/400/500/600/700/800/900`, Plus Jakarta Sans — values identical
      to §Design tokens
- [ ] Ten bands present in the order of §Reference document order, grounds alternating as measured
- [ ] Booking widget: 5 services, 7 re-dated day chips, 4 windows with one taken slot per the demo
      table, summary line, confirmation region; date injection makes tests deterministic
- [ ] Season default proven for a heating month **and** a cooling month (month injected, not read from
      a global), pills carry `aria-pressed`, accent swaps `#187e83` ↔ `#a9691a`
- [ ] Plans: three tiers at `$14` / `$24` / `$39`, `Most chosen` on the middle card only
- [ ] Areas: sixteen towns in one list; Reviews: three cards with labelled five-star ratings;
      FAQ: five independent `aria-expanded` rows
- [ ] Closing call-out on `#156669` with white solid + white outline CTAs
- [ ] Footer links `https://www.componentdock.com/` as "Component Dock"; `public/CNAME` =
      `thermly.free.componentdock.com`; `homepage` = `https://thermly.free.componentdock.com`
- [ ] No ColorLib / "Airwise" string in any file under `apps/thermly`; images are
      `picsum.photos/seed/thermly-<n>/...`; no copied asset, font file or stylesheet
- [ ] `dynamic grep`: `grep -ril "colorlib\|airwise" apps/thermly` → empty
- [ ] Row added for the design (`## Business (365)`) and flipped to `[x]` with the bookkeeping commit

## Deliberate deviations from the reference

1. **Multi-page → one page.** The preview is a seven-route Astro site (`/services`,
   `/maintenance-plans`, `/service-areas`, `/about`, `/blog`, `/contact`, `/book`). The recreation is
   the single landing page described here, with those nav items pointing at the matching in-page
   bands; the booking widget stands in for `/book`.
2. **Dark mode dropped.** The source ships `dark:` variants for every band; the recreation is
   light-only (house convention, keeps coverage honest).
3. **Copy and placeholders re-branded.** Thermly replaces the source brand; the Fresno address, the
   `(555) 020-0200` number, the `office@airwisehvac.example` mailbox, the Unsplash technician photo
   and the six `…sample data` footnotes are replaced with Thermly equivalents, an invented demo
   county and `picsum.photos/seed/thermly-*` images. Section structure, item counts, price shape and
   the seasonal behaviour are kept 1:1.
4. **Cookie strip.** The source renders one; the recreation renders the same strip as a dismissible
   banner with `Decline` / `Accept All`, dismissed state kept in component state only (no storage key
   is invented, so no test depends on persistence).
5. **Logo.** `logo.svg` is not copied; the mark is drawn inline (two-arc glyph in `#187e83`) next to
   the wordmark `Therm` + `ly`.
