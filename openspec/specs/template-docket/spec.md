# Template: Docket (Law Firm)

## Purpose

Docket is a law firm landing page template. It recreates the ColorLib "Lawfirm" design (https://colorlib.com/wp/template/lawfirm/) with a dark professional aesthetic, Roboto font, and the design's gold accent (#cbb88c). Sections: top bar, navbar, hero, intro cards, trust features, statistics counters, practice areas, case studies, testimonials carousel, CTA banner, blog, and footer.

- **Source**: https://colorlib.com/wp/template/lawfirm/
- **Preview**: https://preview.colorlib.com/theme/lawfirm/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/lawfirm-free-fullscreen-lawyer-website-template.jpg
- **Category**: Lawyer
- **Stack**: React 19 + Vite + Tailwind CSS 4 + TypeScript

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

**Consequence for the implementer:** build the design the demo serves (the `ftco` page) — that is what `apps/docket` ships.
Do **not** reproduce the row thumbnail: it has no DOM, no stylesheet and no archive, so
there is nothing left to measure; rows 1387/1760/2123 all point at this one directory, so
this app is a documented duplicate of the same design as `chambers`/`statutory`. App debt:
`apps/docket` paints `#007bff` ×15 and no `#cbb88c` at all — implementer repaint.

### Design tokens (measured 2026-10-24, live `css/style.min.css` v3.0.2)

| Token               | Value                              | Usage                                  |
| ------------------- | ---------------------------------- | -------------------------------------- |
| font-family         | Roboto (400, 500, 700 — self-hosted woff2 on the reference) | Global body + headings |
| brand-primary       | #cbb88c                            | CTA fill, links, accents (`.btn.btn-primary`, text #1d2227) |
| brand-primary-hover | transparent + #cbb88c border       | `.btn.btn-primary:hover`               |
| brand-accent-deep   | #7e6939                            | Sub-labels, staff roles, blog date day |
| vendor-blue         | #007bff (never painted)            | Compiled Bootstrap 5.3.8 frame only    |
| body-bg             | #ffffff                            | Page background                        |
| body-text           | #212529                            | Body text                              |
| heading-text        | #ffffff                            | Hero heading, section headings on dark |
| dark-section-bg     | #1d2227, #161a1e, #121518, #0e1013 | Intro card backgrounds (gradient dark) |
| navbar-bg           | #1d2227                            | Dark navbar background (`.ftco-navbar-light`) |
| button-radius       | 4px                                | Standard Bootstrap buttons             |
| hero-overlay        | rgba(0,0,0,0.5)                    | Hero dark overlay                      |

## Requirements

### Requirement: Top bar

The template SHALL display a top bar with phone number and email on the left, and social media icons (Facebook, Twitter, Instagram, Dribbble) on the right.

#### Scenario: Top bar renders

- **WHEN** the page loads
- **THEN** the phone number, email, and social icons are visible

### Requirement: Navigation bar

The template SHALL display a dark navigation bar with brand name "Docket", section links (Home, About, Practice Areas, Cases, Attorneys, Blog, Contact), and a mobile menu toggle.

#### Scenario: Desktop navigation

- **WHEN** the page loads on a desktop viewport
- **THEN** the brand link and all section links are visible in the navbar

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the mobile hamburger menu button
- **THEN** the mobile menu slides open with the same nav links

### Requirement: Hero section

The template SHALL display a full-width hero with a dark background image overlay, heading "Don't Feel Helpless We Fight for Justice", description text, and two CTA buttons ("Contact us" primary, "Read more" white).

#### Scenario: Hero renders

- **WHEN** the page loads
- **THEN** the hero heading, description, and both CTA buttons are visible over the background image

### Requirement: Intro cards section

The template SHALL display 4 dark-background intro cards in a row: Expert Attorneys, Case Dismissed, Court Performance, Court Performance — each with an icon, title, and short description.

#### Scenario: Intro cards render

- **WHEN** the page loads
- **THEN** all four intro cards with icons, titles, and descriptions are visible

### Requirement: Trust features section

The template SHALL display a section with heading "Why to Put Trust in Law Firm" and 4 feature items (Expert Attorneys, Great Discount, Legal Advisory, Quick Charges) each with an icon, title, and description.

#### Scenario: Trust features render

- **WHEN** the page loads
- **THEN** the heading and all four feature items are visible

### Requirement: Statistics section

The template SHALL display a statistics section with a background image and 4 counter items: 90+ Happy Clients, 45+ Court Won, 19+ Awards, 26+ Practice Years — each with a number and label.

#### Scenario: Statistics render

- **WHEN** the page loads
- **THEN** all four statistics with numbers and labels are visible

### Requirement: Practice areas section

The template SHALL display a section with heading "What We Cover" and 6 practice area cards: Business Law, Family Law, Criminal Law, Real Estate Law, Personal Injury, Judicial Law — each with an icon, title, and description.

#### Scenario: Practice areas render

- **WHEN** the page loads
- **THEN** the heading and all six practice area cards are visible

### Requirement: Case studies section

The template SHALL display a section with heading "Recent Case Studies" and 7 case study items in a 2-column grid, each with an image, category tag, title, and short description.

#### Scenario: Case studies render

- **WHEN** the page loads
- **THEN** the heading and all seven case study items are visible

### Requirement: Testimonials section

The template SHALL display a dark-background carousel section with heading "Happy Clients" and 5 testimonial cards, each with a quote, author photo, name, and title. Navigation arrows allow cycling through testimonials.

#### Scenario: Testimonials render

- **WHEN** the page loads
- **THEN** the heading and at least the first testimonial card are visible

#### Scenario: Testimonial navigation

- **WHEN** the user clicks the next arrow
- **THEN** the carousel advances to the next testimonial

### Requirement: CTA banner

The template SHALL display a full-width call-to-action banner with a background image overlay, heading "We Have Great Results", 3 stat items (Award Winning, 60 Years of Experience, Best Attorneys team), and a "Free Case Consultation" button.

#### Scenario: CTA renders

- **WHEN** the page loads
- **THEN** the CTA heading, stats, and button are visible over the background

### Requirement: Blog section

The template SHALL display a section with heading "Recent Blog" and 3 blog post cards, each with an image, date, author, title, and short description.

#### Scenario: Blog renders

- **WHEN** the page loads
- **THEN** the heading and all three blog post cards are visible

### Requirement: Footer

The template SHALL display a dark footer with 4 columns: Company info (about text, social icons), Practice Areas links, Services links, and Contact info (address, phone, email). Footer copyright line with Component Dock link.

#### Scenario: Footer renders

- **WHEN** the page loads
- **THEN** all four footer columns and the copyright line with Component Dock link are visible

### Requirement: Component Dock attribution

The system SHALL credit Component Dock — the marketplace that publishes this
template — with a visible link to `https://www.componentdock.com/` in the site
footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT
change the footer's own layout or copy beyond the credit line.

#### Scenario: Footer attribution

- **GIVEN** any page of the template is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain an anchor whose `href` is
  `https://www.componentdock.com/`
- **AND** the anchor's text SHALL name Component Dock

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/docket/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/docket/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Top bar with phone, email, social icons
- [ ] Navbar with brand, links, mobile toggle
- [ ] Hero background image with overlay, heading, two CTA buttons
- [ ] Intro cards: 4 dark cards with icons
- [ ] Trust features: 4 items with icons
- [ ] Statistics: 4 counters with numbers and labels
- [ ] Practice areas: 6 cards in grid
- [ ] Case studies: 7 items in 2-column grid
- [ ] Testimonials: carousel with 5 cards, navigation arrows
- [ ] CTA banner: background image, heading, stats, button
- [ ] Blog: 3 post cards
- [ ] Footer: 4 columns, social icons, Component Dock link
- [ ] Design tokens: Roboto font, #cbb88c gold accent on #1d2227 ink, #f5f4f0 panels (no Bootstrap blue — §Reference identity)
- [ ] All sections match original section order
- [ ] Responsive layout (mobile + desktop)
- [x] No ColorLib references in app code
- [x] Footer credits Component Dock with a link to https://www.componentdock.com/
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
