# Template: Chambers (Law Firm Landing)

## Purpose

A Law Firm template with hero section, intro features, about section, counter stats, practice areas and cases gallery sections. Recreation of ColorLib's **Lawfirm** law firm template.

- **Source:** https://colorlib.com/wp/template/lawfirm/
- **Preview:** https://preview.colorlib.com/theme/lawfirm/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/lawfirm-free-fullscreen-lawyer-website-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Package:** `@free-react-templates/chambers`
- **Deploy:** `chambers.free.componentdock.com`

A law firm landing page with a dark top bar, sticky navbar, fullscreen hero with
video overlay, 4-column feature strip, about section with video play, stat
counters, practice area cards, case gallery, attorney team grid, and a 5-column
footer with dark bottom bar.
- **Source design:** ColorLib "Lawfirm" — https://colorlib.com/wp/template/lawfirm/

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

**Consequence for the implementer:** build the design the demo serves (the `ftco` page) — that is what `apps/chambers`
ships. Do **not** reproduce the row thumbnail: it has no DOM, no stylesheet and no
archive, so there is nothing left to measure. All three `**Lawfirm**` rows in
`TEMPLATES.md` (lines 1387, 1760, 2123) point at this single directory, so
`chambers`/`statutory`/`docket` are a documented duplicate of one design, not three
designs. App debt from this reading: `apps/chambers` still paints `#007bff` and no
`#cbb88c` — an implementer repaint, never a prep edit.

## Design Tokens

| Token         | Value                  | Usage                      |
| ------------- | ---------------------- | -------------------------- |
| primary       | `#cbb88c`              | CTA fill, links, icon accents (`.btn.btn-primary` = `#cbb88c` bg + `#1d2227` text) |
| primary-hover | transparent + `#cbb88c` border | `.btn.btn-primary:hover`, `.btn-outline-primary` |
| primary-ink   | `#1d2227`              | Text on the gold CTA       |
| accent-deep   | `#7e6939`              | Section sub-labels, staff roles, blog date day, contact labels |
| vendor-blue   | `#007bff` (never painted) | Compiled Bootstrap 5.3.8 frame only; the vendor `.btn-primary` vars are overridden |
| text-dark     | `#212529`              | Headings, strong text      |
| text-body     | `#333333`              | Body text                  |
| text-muted    | `#6c757d`              | Secondary text, captions   |
| bg-dark       | `#161a1e`              | Intro strip, footer bg     |
| bg-darker     | `#121518`              | Alternate intro panels     |
| bg-light      | `#f5f4f0`              | About section bg (`.bg-light`, `!important`) |
| font-body     | `'Roboto', sans-serif` | Body text, UI elements     |
| font-heading  | `'Roboto', sans-serif` | Headings (bold/700 weight) |

## Requirements

### Requirement: Top Bar

The system SHALL render a top bar with contact info (phone number, email) on the
left and social media icon links (Twitter, Facebook, Instagram, Dribbble) on the
right. The top bar SHALL have a dark background with white text.

#### Scenario: Top bar shows contact info

- **WHEN** the page loads
- **THEN** the top bar displays a phone number and email address
- **AND** social media icon links are visible on the right side

### Requirement: Navbar

The system SHALL render a sticky dark navbar with the brand name "Chambers" and
navigation links: Home, About, Practice Areas, Cases, Attorneys, Blog, Contact.
A hamburger toggle SHALL appear on mobile viewports.

#### Scenario: Navbar shows navigation links

- **WHEN** the page loads
- **THEN** the navbar displays "Chambers" as the brand
- **AND** navigation links for Home, About, Practice Areas, Cases, Attorneys, Blog, Contact are visible

#### Scenario: Navbar toggles on mobile

- **WHEN** the viewport width is below 768px
- **THEN** a hamburger menu button is visible
- **AND** clicking it toggles the navigation menu open/closed

### Requirement: Hero Section

The system SHALL render a fullscreen hero section with a background image, dark
overlay, headline "Don't Feel Helpless We Fight for Justice", a subtitle
paragraph, two CTA buttons ("Contact us" primary, "Read more" white), and a
video play link.

#### Scenario: Hero displays headline and CTAs

- **WHEN** the page loads
- **THEN** the hero headline reads "Don't Feel Helpless We Fight for Justice"
- **AND** a primary "Contact us" button is visible
- **AND** a white "Read more" button is visible

### Requirement: Intro Features

The system SHALL render a 4-column feature strip with dark backgrounds. Each
column SHALL have an icon, heading, and description text. The four features are:
Expert Attorneys, Case Dismissed, Court Performance, and Court Performance
(variant).

#### Scenario: Intro shows four feature cards

- **WHEN** the page loads
- **THEN** four feature cards are displayed in a row
- **AND** each card has an icon, heading, and description

### Requirement: About Section

The system SHALL render a split about section: left side with a background image
and video play button, right side with "Welcome to Chambers" subheading,
heading "Why to Put Your Trust In Chambers", description text, and a 2x2 grid
of service items (Expert Attorneys, Great Discount, Legal Advisory, Quick
Charges) each with an icon, heading, and short description.

#### Scenario: About section shows welcome content

- **WHEN** the page loads
- **THEN** the about section displays "Welcome to Chambers" as a subheading
- **AND** the heading reads "Why to Put Your Trust In Chambers"
- **AND** four service items are shown in a grid

### Requirement: Counter Stats

The system SHALL render a stats section with four counters: 3000+ Trusted
Clients, 1000+ Honors & Awards, 2000+ Expert Lawyers, 10540+ Successful Cases.
Each stat SHALL have an icon, number, and label.

#### Scenario: Counter displays stats

- **WHEN** the page loads
- **THEN** four stat blocks are visible
- **AND** each stat shows an icon, a number, and a label

### Requirement: Practice Areas

The system SHALL render a practice areas section with a centered heading "What
We Cover" and a 3-column grid of practice area cards. Each card SHALL have an
icon, heading, and description. Practice areas include: Business Law, Family
Law, Criminal Law, and Insurance Law.

#### Scenario: Practice areas shows four areas

- **WHEN** the page loads
- **THEN** the heading reads "What We Cover"
- **AND** four practice area cards are displayed
- **AND** each card has an icon, title, and description

### Requirement: Cases Gallery

The system SHALL render a cases section showing recent cases in a grid layout
with images and case category labels.

#### Scenario: Cases section displays gallery

- **WHEN** the page loads
- **THEN** case items are shown in a grid
- **AND** each case has an image and category label

### Requirement: Attorneys

The system SHALL render an attorneys/team section showing team member cards
with photos, names, and specializations.

#### Scenario: Attorneys shows team members

- **WHEN** the page loads
- **THEN** attorney cards are displayed
- **AND** each card has a photo, name, and role/specialization

### Requirement: Footer

The system SHALL render a 5-column footer with: brand logo + social links,
Explore links, Legal links, Company links, and contact info (address, phone,
email). A dark bottom bar SHALL contain copyright text and a "More templates at
Component Dock" link pointing to https://www.componentdock.com/.

#### Scenario: Footer shows brand and links

- **WHEN** the page loads
- **THEN** the footer displays the "Chambers" brand name
- **AND** navigation link columns are visible
- **AND** contact information is shown

#### Scenario: Footer links to Component Dock

- **WHEN** the page loads
- **THEN** the footer bottom bar contains a link to https://www.componentdock.com/
- **AND** the link text mentions "Component Dock"

### Requirement: Responsive Design

The system SHALL be responsive across desktop, tablet, and mobile viewports.
The navbar SHALL collapse to a hamburger on mobile. Grid layouts SHALL stack
vertically on smaller screens.

#### Scenario: Mobile layout adapts

- **WHEN** the viewport is 375px wide
- **THEN** the navbar shows a hamburger toggle
- **AND** multi-column grids stack to single column
- **AND** the hero text remains readable

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/chambers/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/chambers/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Top Bar — the top bar displays a phone number and email address
- [x] Navbar — the navbar displays "Chambers" as the brand
- [ ] Hero Section — the hero headline reads "Don't Feel Helpless We Fight for Justice"
- [ ] Intro Features — four feature cards are displayed in a row
- [x] About Section — the about section displays "Welcome to Chambers" as a subheading
- [ ] Counter Stats — four stat blocks are visible
- [x] Practice Areas — the heading reads "What We Cover"
- [ ] Cases Gallery — case items are shown in a grid
- [ ] Attorneys — attorney cards are displayed
- [ ] Responsive Design — the navbar shows a hamburger toggle
