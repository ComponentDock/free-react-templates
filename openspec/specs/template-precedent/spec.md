# Template: Precedent (Lawyer)

## Purpose

Recreation of ColorLib "Lawfirm 2" (https://colorlib.com/wp/template/lawfirm-2/) as a professional law firm landing page. The live preview is `https://preview.colorlib.com/theme/lawfirm/` (HTTP 200, v3.0.2 rebuild — measured 2026-10-24, see §Reference identity); the tokens below are read from its stylesheet.

**New name:** Precedent  
**Original:** ColorLib Lawfirm 2  
**Category:** Legal  
**Design style:** Professional, dark `#1d2227` + gold `#cbb88c` accent, Roboto only (no serif face in the sheet), warm off-white `#f5f4f0` panels

## Reference identity — catalog URL collision (measured 2026-10-24)

This entry's demo directory is shared by two catalogue posts, and the directory serves
the **2026 v3.0.2 rebuild** — this row's design. Two keys resolve to
`https://preview.colorlib.com/theme/lawfirm/` in the host's own 1,961-entry map
(`assets/js/catalog-products-*.js`):

| catalogue key | `details` post | that entry's `img` |
| --- | --- | --- |
| `lawfirm` | `/wp/template/lawfirm-2/` — "Free Law Business Website Template Design 2026", *Updated October 2026 · v3.0.2* — **this row** | `lawfirm-free-template.jpg` — the `ftco` page the directory serves |
| `catalog-141453` | `/wp/template/lawfirm/` — "Best Lawyer & Attorney Website Template" (December 13, 2021) | `lawfirm-free-fullscreen-lawyer-website-template.jpg` — a **retired** serif gold/navy full-screen page |

Measured chain (all fetched 2026-10-24, `curl -4`, Chrome/124 UA):

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

The **row thumbnail is that same page**: `lawfirm-free-template.jpg` (1200×946,
143,174 B) shows the dark top bar, the `Law Firm` wordmark, the hero "Don't Feel
Helpless We Fight for Justice" and the cream `WELCOME TO LAW FIRM` panel. The only
wording drift against the live page is the pre-3.0 feature strip ("Case Dismissed /
Court Performance / Court Performance"), which v3.0.2 renders as "Case Review /
Court Hearings / Legal Research". The **retired** design belongs to the sibling entry:
a serif, gold-on-white, navy-CTA full-screen page that exists nowhere on the preview
host (13 prefix probes → 404, both archives → 404); its pixel samples live in
`template-chambers`' §Reference identity.

The v3.0.2 sheet also settles the accent: `.btn.btn-primary{background:#cbb88c!important;
border:1px solid #cbb88c!important;color:#1d2227!important}`, and the hero markup's two
buttons are `btn btn-primary` + `btn btn-white`. `#007bff` survives only inside the
compiled Bootstrap 5.3.8 frame (`--bs-btn-bg` on the vendor `.btn-primary` rule, the
`0 0 0 .25rem #007bff40` focus ring, `.form-check-input:checked`) and is **never painted
by this design** — a token table that names it "primary" points an implementer at a
colour the page does not use.

**Consequence for the implementer:** build the design the demo serves (the `ftco`
page) — the only design in this family with a live DOM and a stylesheet. The earlier
reading in this file ("Preview URL was unreachable (404) … tokens extracted from
screenshot") was wrong in both halves: the preview has served all along, and the
palette it invented (`#c5a55a` gold, `#1a1a2e` navy, Georgia headings, Inter body)
occurs nowhere in the sheet — this design is Roboto-only. App debt: `apps/precedent`
paints that invented palette (`#c5a55a` ×37) — implementer repaint, never a prep edit.

## Design Tokens (measured 2026-10-24, live `css/style.min.css` v3.0.2)

| Token                   | Value                  | Usage                                         |
| ----------------------- | ---------------------- | --------------------------------------------- |
| `--color-primary`       | `#cbb88c` (warm gold)  | `.btn.btn-primary` fill (text `#1d2227`), links, active nav, icon accents, `.bg-primary` |
| `--color-ink`           | `#1d2227`              | `.wrap` top bar, navbar, `.intro` strip, hero overlay (`opacity .5`), appointment overlay (`.95`), testimony band (`.95`), footer socials |
| `--color-accent-deep`   | `#7e6939`              | `.subheading` (12px, 600, 2px tracking, uppercase), staff positions, blog date day, contact labels, pagination |
| `--color-surface`       | `#f5f4f0`              | `.bg-light` cream panels (the about block), hover states of the icon circles |
| `--color-strip-1`       | `#161a1e`              | `.intro.color-1`                              |
| `--color-strip-2`       | `#121518`              | `.intro.color-2`                              |
| `--color-strip-3`       | `#0e1013`              | `.intro.color-3`                              |
| `--color-white`         | `#ffffff`              | page background, hero text, `btn-white` fill  |
| `--color-body`          | `#212529`              | body copy (Bootstrap 5 body colour)           |
| `--color-muted`         | `#6c757d`              | secondary captions                            |
| Font family             | `Roboto` 400/500/700   | self-hosted woff2, latin + latin-ext — **no serif, no Inter** |
| Hero                    | `600px` tall           | `.overlay` `#1d2227` at `opacity .5`; h1 `60px`/1.1/`500` `#fff`; subtext `18px` `#ffffffe6` |
| Button radius           | `2px` navbar CTA, `4px`/`5px` body buttons | `.nav-item.cta>a` = gold fill, `18px` side padding; scrolled variant `5px` |
| Circles                 | `50%`                  | `170px` intro/service icon, `50px` footer social, `100px` blog date badge |
| Vendor blue             | `#007bff`              | compiled-Bootstrap frame only — overridden, never painted |

## Requirements

### Requirement: TopBar

The page SHALL display a dark top bar with phone number, email, and social media links.

#### Scenario: TopBar renders contact info

- **WHEN** the page loads
- **THEN** a dark top bar shows phone number "+00 1234 567" and email "youremail@email.com"

#### Scenario: TopBar renders social links

- **WHEN** the page loads
- **THEN** the top bar shows Facebook, Twitter, Instagram, and LinkedIn social links

### Requirement: Navbar

The page SHALL display a sticky navigation bar with the brand name and navigation links.

#### Scenario: Navbar renders brand and links

- **WHEN** the page loads
- **THEN** the navbar displays "Precedent" logo and links: Home, About, Practice Areas, Cases, Attorneys, Blog, Contact

#### Scenario: Navbar becomes scrolled

- **WHEN** the user scrolls down more than 50px
- **THEN** the navbar background changes from semi-transparent to solid

#### Scenario: Mobile menu toggle

- **WHEN** on mobile viewport and the hamburger button is clicked
- **THEN** the mobile navigation menu opens
- **AND** clicking a link closes the menu

### Requirement: Hero

The page SHALL display a full-width hero section with a background image, heading, and CTA buttons.

#### Scenario: Hero renders content

- **WHEN** the page loads
- **THEN** the hero shows heading "Don't Feel Helpless We Fight for Justice"
- **AND** shows "Contact us" button linking to #contact
- **AND** shows "Read more" button linking to #about

### Requirement: FeatureStrip

The page SHALL display a dark 4-column feature strip below the hero.

#### Scenario: FeatureStrip renders features

- **WHEN** the page loads
- **THEN** four feature cards are displayed: Expert Attorneys, Case Dismissed, Court Performance, Client Satisfaction

### Requirement: TrustSection

The page SHALL display a trust/why-us section with a two-column layout.

#### Scenario: TrustSection renders content

- **WHEN** the page loads
- **THEN** the section shows "Welcome to Precedent" subtitle and "Why to Put Trust In Precedent" heading
- **AND** shows a Lady Justice statue image
- **AND** shows 2x2 feature grid: Expert Attorneys, Great Discount, Legal Advisory, Quick Charges

### Requirement: PracticeAreas

The page SHALL display practice area cards in a grid layout.

#### Scenario: PracticeAreas renders cards

- **WHEN** the page loads
- **THEN** six practice area cards are displayed: Business Law, Family Law, Criminal Law, Real Estate Law, Personal Injury, Judicial Law

### Requirement: Attorneys

The page SHALL display team member cards with photos, names, titles, and social links.

#### Scenario: Attorneys renders team

- **WHEN** the page loads
- **THEN** four attorney cards are displayed with names, titles, and social media links

### Requirement: Testimonials

The page SHALL display client testimonials in a carousel format.

#### Scenario: Testimonials navigation

- **WHEN** the user clicks "Next testimonial"
- **THEN** the next testimonial is displayed
- **WHEN** the user clicks "Previous testimonial"
- **THEN** the previous testimonial is displayed

### Requirement: CtaBanner

The page SHALL display a dark CTA banner with stats and a consultation button.

#### Scenario: CtaBanner renders content

- **WHEN** the page loads
- **THEN** the section shows "We Have Great Results" heading
- **AND** shows stats: Award Winning, 60 Years of Experience, Best Attorneys Team
- **AND** shows "Free Case Consultation" button

### Requirement: ContactForm

The page SHALL display a consultation form with validation.

#### Scenario: Form renders fields

- **WHEN** the page loads
- **THEN** the form shows fields: Your Name, Your Email, Subject, Message

#### Scenario: Form validation

- **WHEN** the user submits the form empty
- **THEN** validation errors appear for all required fields

#### Scenario: Form submission

- **WHEN** the user fills all fields with valid data and submits
- **THEN** a success message appears and the form resets

### Requirement: Footer

The page SHALL display a dark footer with three columns and Component Dock link.

#### Scenario: Footer renders content

- **WHEN** the page loads
- **THEN** the footer shows "Precedent" brand, Practice Areas links, Quick Links, and Contact info
- **AND** includes "More templates at Component Dock" linking to https://www.componentdock.com/

#### Scenario: No external attribution

- **WHEN** the footer renders
- **THEN** no external attribution links appear (only Component Dock)

### Requirement: Accessibility

All interactive elements SHALL have proper ARIA attributes.

#### Scenario: Semantic HTML

- **WHEN** any interactive element renders
- **THEN** it uses semantic elements with proper aria-labels

### Requirement: Responsive

The template SHALL be fully responsive across all viewport sizes.

#### Scenario: Mobile layout

- **WHEN** the viewport is mobile width
- **THEN** the navbar collapses to a hamburger menu
- **AND** grid sections stack vertically

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/precedent/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/precedent/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] TopBar — a dark top bar shows phone number "+00 1234 567" and email "youremail@email.com"
- [x] Navbar — the navbar displays "Precedent" logo and links: Home, About, Practice Areas, Cases, Attorneys, Blog, Contact
- [ ] Hero — the hero shows heading "Don't Feel Helpless We Fight for Justice"
- [ ] FeatureStrip — four feature cards are displayed: Expert Attorneys, Case Dismissed, Court Performance, Client Satisfaction
- [x] TrustSection — the section shows "Welcome to Precedent" subtitle and "Why to Put Trust In Precedent" heading
- [ ] PracticeAreas — six practice area cards are displayed: Business Law, Family Law, Criminal Law, Real Estate Law, Personal Injury, Judicial Law
- [ ] Attorneys — four attorney cards are displayed with names, titles, and social media links
- [ ] Testimonials — the next testimonial is displayed
- [x] CtaBanner — the section shows "We Have Great Results" heading
- [ ] ContactForm — the form shows fields: Your Name, Your Email, Subject, Message
- [ ] Accessibility — it uses semantic elements with proper aria-labels
- [ ] Responsive — the navbar collapses to a hamburger menu
