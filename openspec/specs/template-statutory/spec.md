# Template: Statutory (Legal / Law Firm)

## Purpose

A Legal / Law Firm template with hero, intro, about, counter stats, practice areas and case studies sections. Recreation of the ColorLib "Lawfirm" template as a React 19 + Vite + Tailwind 4 + TypeScript site.

- **Source slug:** `lawfirm`
- **Source URL:** https://colorlib.com/wp/template/lawfirm/
- **Preview URL:** https://preview.colorlib.com/theme/lawfirm/
- **New name:** `statutory`
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript, packages/ui shared components
- **Deploy target:** `statutory.free.componentdock.com`

## Reference identity — catalog URL collision (measured 2026-10-24)

This entry's row thumbnail and its demo directory disagree, and the disagreement is
ColorLib's, not a slug-only 404. Two catalogue keys resolve to
`https://preview.colorlib.com/theme/lawfirm/` in the host's own 1,961-entry map
(`assets/js/catalog-products-*.js`):

| catalogue key | `details` post | that entry's `img` |
| --- | --- | --- |
| `catalog-141453` | `/wp/template/lawfirm/` — "Best Lawyer & Attorney Website Template" (December 13, 2021) | `lawfirm-free-fullscreen-lawyer-website-template.jpg` — a **serif, gold-on-white, navy-CTA full-screen** page (hero "We Help to Solve Business Law Solution") |
| `lawfirm` | `/wp/template/lawfirm-2/` — "Free Law Business Website Template Design 2026", *Updated October 2026 · v3.0.2* | `lawfirm-free-template.jpg` — the **`ftco`** page the directory actually serves (`Law Firm` wordmark, hero "Don't Feel Helpless We Fight for Justice") |

Each post's own Preview button points at this one directory (the 2021 post at
`#catalog-141453`, the 2026 post at `#lawfirm`), so neither button adjudicates identity.
The directory serves the **2026 v3.0.2 rebuild** — the `lawfirm-2` design. Measured
chain (all fetched 2026-10-24, `curl -4`, Chrome/124 UA):

| Fact | Reading |
| --- | --- |
| demo dir | `theme/lawfirm/` HTTP **200**, **46,599 B**; `theme/lawfirm/index.html` 200, same 46,599 B — a no-op link, never a 404 |
| theme sheet | `css/style.min.css` **202,719 B**, sha256 `93358180c45c4b5c282960a248ca56cc0dfe1aaf4f2030f2ad79445c0379d82d` (linked as `?v=3.0.2`); un-minified `css/style.css` **251,276 B**, sha256 `71595d25ca1a6bed8050605a604d5bf8339bc0ca3c289b12e18c3c07e6525977` |
| script / vendor | `js/main.min.js` **45,942 B**; `vendor/bootstrap/5.3.8`, `vendor/swiper/14.3.0`, `vendor/jarallax/3.1.0`, `vendor/fontawesome/7.3.1` (subset) — the 3.0 rebuild the 2026 post describes |
| faces | self-hosted **Roboto** 400/500/700 (`fonts/roboto/*.woff2`, latin + latin-ext; `roboto-latin-400-normal.woff2` 21,884 B); **no Google Fonts link, no serif face anywhere** |
| sheet census | `#fff` ×94 · **`#cbb88c` ×65** · `#000` ×61 · `#007bff` ×25 (compiled-Bootstrap frame only) · **`#1d2227` ×20** · `#6c757d` ×19 · `#343a40` ×19 · `#f8f9fa` ×16 · **`#7e6939` ×11** · **`#f5f4f0` ×4** |
| radii | `50%` ×20 · `4px` ×6 · `5px` ×4 · `1rem` ×4 · `30px` ×1 · `2px` (navbar CTA) |
| pages | **8 live pages, all 200**: `index.html` 46,599 B · `about.html` 30,959 B · `practice-area.html` 23,575 B · `cases.html` 16,355 B · `attorney.html` 23,028 B · `blog.html` 18,769 B · `blog-single.html` 32,041 B · `contact.html` 18,415 B |
| anchors | 307 across the eight pages, **115 dead `href="#"`** (index: 44 anchors, 18 dead); the menu resolves seven real pages, `index.html` is a no-op link |
| forms | `.appointment` → `includes/send-email.php` on index/about/practice-area (`name`/`email`/`area`/`message`, honeypot `cl_hp_url`, hidden `subject`); `contact.html` adds `#contactForm` (`name`/`email`/`subject`/`message`) |
| archive | `downloads/free/lawfirm.zip` **404** and `downloads/free/lawfirm-2.zip` **404** — the live directory is the only reference that exists |

The **row thumbnail is the retired variant**:
`lawfirm-free-fullscreen-lawyer-website-template.jpg` (1024×798, 50,676 B; AVIF served
for a `.jpg` name, decoded with PIL) shows a page that exists nowhere on the preview
host and has no archive — `theme/lawfirm-fullscreen/`, `theme/lawfirmfs/`,
`theme/lawfirm2/`, `theme/lawfirm-2/`, `theme/fullscreen-lawfirm/`, `theme/law-firm/`,
`theme/lawfirm-serif/`, `theme/lawfirm-2021/`, `theme/lawfirm-old/`,
`theme/bootstrap/lawfirm/`, `theme/bb/lawfirm/`, `etc/lawfirm/index.html`,
`colorlib.com/etc/lawfirm/index.html` → all **404**. Its values are pixel samples,
never CSS declarations:

| Sampled role | Value | Where it was read |
| --- | --- | --- |
| nav bar | `#ffffff` | (200,48)–(420,62) |
| nav CTA pill "MAKE AN APPOINTMENT" | `#c0a44a` | (745,60)–(880,85) |
| hero CTA pill "Make An Appointment" | `#2f486e` | (435,500)–(585,528) |

The v3.0.2 sheet also settles the accent: `.btn.btn-primary{background:#cbb88c!important;
border:1px solid #cbb88c!important;color:#1d2227!important}`, and the hero markup's two
buttons are `btn btn-primary` + `btn btn-white`. `#007bff` survives only inside the
compiled Bootstrap 5.3.8 frame (`--bs-btn-bg` on the vendor `.btn-primary` rule, the
`0 0 0 .25rem #007bff40` focus ring, `.form-check-input:checked`) and is **never painted
by this design** — a token table that names it "primary" points an implementer at a
colour the page does not use.

**Consequence for the implementer:** build the design the demo serves (the `ftco` page) — that is what `apps/statutory`
ships. Do **not** reproduce the row thumbnail: it has no DOM, no stylesheet and no
archive, so there is nothing left to measure; rows 1387/1760/2123 all point at this one
directory, so this app is a documented duplicate of the same design as
`chambers`/`docket`. App debt: `apps/statutory` paints the gold (`#cbb88c` ×3) but still
ships `#007bff` CTAs — implementer repaint.

## Design tokens (measured 2026-10-24, live `css/style.min.css` v3.0.2)

| Token              | Value                       | Usage                                                     |
| ------------------ | --------------------------- | --------------------------------------------------------- |
| `--brand`          | `#cbb88c`                   | `.btn.btn-primary` fill (text `#1d2227`), links, active nav, icon accents, `.bg-primary` |
| `--ink`            | `#1d2227`                   | `.wrap` top bar, navbar, `.intro` strip, hero overlay (`opacity .5`), appointment overlay (`.95`), testimony band (`.95`) |
| `--accent-deep`    | `#7e6939`                   | `.subheading` (12px / 600 / 2px tracking / uppercase), staff roles, blog date day, contact labels |
| `--panel`          | `#f5f4f0`                   | `.bg-light` cream panels, icon-circle hover               |
| `--strip-1/2/3`    | `#161a1e` / `#121518` / `#0e1013` | `.intro.color-1/2/3` — the dark feature-strip ramp   |
| `--body`           | `#212529`                   | body copy                                                 |
| `--muted`          | `#6c757d`                   | secondary captions                                        |
| `--white`          | `#ffffff`                   | page background, hero text, `btn-white` fill              |
| `--font-sans`      | `Roboto` 400/500/700        | self-hosted woff2 on the reference — no serif face        |
| hero               | `600px` tall                | `.overlay` `#1d2227` at `opacity .5`; h1 `60px`/1.1/`500` `#fff`; subtext `18px` `#ffffffe6` |
| radii              | `2px` / `4px` / `5px` / `50%` | navbar CTA · body buttons · scrolled CTA · icon and social circles |
| vendor blue        | `#007bff`                   | compiled Bootstrap frame only — overridden, never painted |

## Requirements

### Requirement: Navbar

Statutory SHALL display a dark fixed navbar with brand name and navigation links.

#### Scenario: Desktop navigation

- **WHEN** the user opens the page on a viewport wider than 992px
- **THEN** a dark navbar is visible with brand "Statutory" and nav links for Home, About, Practice Areas, Cases, Contact

#### Scenario: Mobile hamburger menu

- **WHEN** the user taps the hamburger icon on a narrow viewport
- **THEN** the nav links expand in a dropdown below the brand

### Requirement: Hero section

Statutory SHALL display a hero section with a dark overlay background image, headline, subtext, and two CTA buttons.

#### Scenario: Hero displays headline and CTAs

- **WHEN** the hero section is visible
- **THEN** the heading reads "Don't Feel Helpless We Fight for Justice"
- **AND** a "Contact us" primary button is visible
- **AND** a "Read more" outline button is visible

### Requirement: Intro strip

Statutory SHALL display four dark feature boxes in a row with icons and descriptions.

#### Scenario: Four dark boxes with icons

- **WHEN** the intro section is in view
- **THEN** four feature boxes are displayed: Expert Attorneys, Case Dismissed, Court Performance, Legal Protection

### Requirement: About section

Statutory SHALL display a split layout with an image on the left and feature list on the right.

#### Scenario: About content with image and feature list

- **WHEN** the about section is visible
- **THEN** the heading reads "Why Put Your Trust In Our Law Firm"
- **AND** four feature items are listed: Expert Attorneys, Great Discount, Legal Advisory, Quick Charges

### Requirement: Counter stats

Statutory SHALL display four animated stat counters over a dark background image.

#### Scenario: Four stat cards

- **WHEN** the counter section is visible
- **THEN** four stats are displayed: Trusted Clients (3,000), Honor's & Awards (1,000), Expert Lawyers (2,000), Successful Cases (10,540)

### Requirement: Practice areas

Statutory SHALL display six practice area cards in a grid with icons.

#### Scenario: Six practice area cards

- **WHEN** the practice areas section is visible
- **THEN** six areas are displayed: Business Law, Family Law, Criminal Law, Real Estate Law, Personal Injury, Judicial Law

### Requirement: Case studies

Statutory SHALL display case study cards with background images, category tags, and titles.

#### Scenario: Case study grid

- **WHEN** the case studies section is visible
- **THEN** six case study cards are displayed in a grid

### Requirement: Testimonials

Statutory SHALL display client testimonial cards over a dark background image.

#### Scenario: Client testimonial cards

- **WHEN** the testimonials section is visible
- **THEN** three testimonial cards are displayed with client names, roles, and quotes

### Requirement: Appointment section

Statutory SHALL display a contact form with feature highlights and a submit button.

#### Scenario: Contact section with form

- **WHEN** the appointment section is visible
- **THEN** the heading reads "We Have Great Results"
- **AND** a contact form with name, email, subject, and message fields is displayed

### Requirement: Footer

Statutory SHALL display a dark footer with brand, link columns, contact info, and Component Dock attribution.

#### Scenario: Footer with links and contact

- **WHEN** the footer is visible
- **THEN** the brand "Statutory" is displayed
- **AND** a link to Component Dock (https://www.componentdock.com/) is present
- **AND** copyright text is shown

### Requirement: Design tokens

Statutory SHALL use Roboto font (400/500/700, self-hosted), the gold `#cbb88c` primary
accent with `#1d2227` ink, the deep-gold `#7e6939` sub-labels and the warm off-white
`#f5f4f0` panels, matching the measured design (see §Reference identity).

#### Scenario: Correct design tokens

- **WHEN** the page renders
- **THEN** the primary accent is gold (#cbb88c) with #1d2227 text on the CTA
- **AND** the deep-gold sub-label colour is #7e6939
- **AND** no Bootstrap-blue (#007bff) control is painted
- **AND** font family is Roboto
- **AND** no ColorLib references exist in app source code

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/statutory/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/statutory/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar — a dark navbar is visible with brand "Statutory" and nav links for Home, About, Practice Areas, Cases, Contact
- [ ] Hero section — the heading reads "Don't Feel Helpless We Fight for Justice"
- [ ] Intro strip — four feature boxes are displayed: Expert Attorneys, Case Dismissed, Court Performance, Legal Protection
- [x] About section — the heading reads "Why Put Your Trust In Our Law Firm"
- [ ] Counter stats — four stats are displayed: Trusted Clients (3,000), Honor's & Awards (1,000), Expert Lawyers (2,000), Successful Cases (10,540)
- [ ] Practice areas — six areas are displayed: Business Law, Family Law, Criminal Law, Real Estate Law, Personal Injury, Judicial Law
- [ ] Case studies — six case study cards are displayed in a grid
- [ ] Testimonials — three testimonial cards are displayed with client names, roles, and quotes
- [x] Appointment section — the heading reads "We Have Great Results"
