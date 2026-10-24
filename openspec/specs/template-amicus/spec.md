# Template: Amicus (Legal / Law Firm)
<!-- prep-status: shipped-as=chambers -->
> **SHIPPED-UNDER** — the ColorLib `lawfirm` design this prep describes already
> ships as `apps/chambers` (<https://chambers.free.componentdock.com>).
> Do not scaffold `apps/amicus`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-chambers/spec.md`.

## Purpose

Amicus is a law firm / legal services website template in the
free-react-templates monorepo. It is a React recreation of the ColorLib
"Law Firm" free template (source:
https://colorlib.com/wp/template/lawfirm/; preview:
https://preview.colorlib.com/theme/lawfirm/), built under a DIFFERENT name
(**Amicus** — from Latin "amicus curiae", friend of the court, per the
monorepo naming mandate: never reuse the ColorLib source name), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a full-featured Bootstrap 4 law firm landing page (Roboto
font, gold `#cbb88c` primary brand, dark navbar/footer, dark intro boxes)
with: top contact bar, sticky dark navbar, full-width hero with video play
button, 4 intro stat boxes, counter stats row, 6 practice area cards with
rotating icon animation, 8 case study image cards, testimonial slider with
background image, appointment/consultation section with background image and
form, 3 blog cards, and a dark footer. Amicus recreates that entire structure
1:1 with matching layout, tokens, typography, and content (no ColorLib
assets copied; images replaced with picsum.photos placeholders, icons with
lucide-react).

> NAMING NOTE: the ColorLib source name "Law Firm" is FORBIDDEN as the app
> name. **Amicus** is the new, original name — single lowercase word,
> no collision with `apps/`, `openspec/specs/`, `docs/templates/` or any
> TEMPLATES.md name (verified 2026-09-21: zero hits across all namespaces).

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

**Consequence for the implementer:** no app to build here — `apps/chambers` ships this design (see the SHIPPED-UNDER
banner). The block above supersedes the 2026-09-21 reading below: the title tag and the
Bootstrap-4 / Owl-Carousel / flaticon asset set are pre-3.0, while the current page is
Bootstrap 5.3.8 + Swiper 14 + Jarallax with self-hosted Roboto and Lucide SVG icons.

## Design reference (replication findings)

- **Original:** ColorLib "Law Firm". Listed in TEMPLATES.md under
  **Law Firm (12)** (section header ~line 1759; first `- [ ]` item at
  line 1760). Category: Legal / Law Firm.
- **Live preview DOM — REACHABLE (verified 2026-09-21 by direct curl):**
  `https://preview.colorlib.com/theme/lawfirm/` returns HTTP 200. Title
  tag: "Law Firm - Free Bootstrap 4 Template by Colorlib". Stylesheets:
  `css/style.css` (main custom styles, ~78KB), `css/animate.css` (scroll
  animations), `css/owl.carousel.min.css`, `css/owl.theme.default.min.css`,
  `css/magnific-popup.css` (lightbox), `css/flaticon.css` (icons).
  Fonts loaded via cf-fonts @font-face blocks: **Roboto** (weights 300, 400,
  500, 700) — this is the primary font family used throughout. Icons:
  Font Awesome 4.7.0 (CDN), flaticon icon font. Scripts: jQuery, Bootstrap 4,
  Owl Carousel, Magnific Popup, Waypoints, Stellar.js, animateNumber.
- **Screenshot** (`lawfirm-free-fullscreen-lawyer-website-template.jpg`):
  Professional law firm site with full-width hero (dark overlay, white text
  "Don't Feel Helpless We Fight for Justice"), dark intro boxes below hero,
  white content sections, dark footer. Overall aesthetic is corporate/legal
  with blue primary accents on a dark + white base.

## Design tokens (extracted from preview CSS)

| Token | Value | Usage |
|---|---|---|
| Font family | `"Roboto", Arial, sans-serif` | All text (headings, body, nav) |
| Font weights | 300 (light), 400 (regular), 500 (medium), 700 (bold) | Headings 600-700, body 400, nav 500 |
| Primary brand | `#cbb88c` (gold) | `.btn.btn-primary` fill, links, active nav, icon accents |
| Primary ink | `#1d2227` | Text on the gold CTA; dark bands |
| Accent deep | `#7e6939` | Sub-labels, staff roles, blog date day |
| Vendor blue | `#007bff` (never painted) | Compiled Bootstrap 5.3.8 frame only |
| ~~Accent/loader~~ | ~~`#F96D00`~~ **gone in v3.0.2** | The full-screen preloader was removed in 3.0 — the hex no longer occurs in `style.min.css` |
| Navbar bg | `#1d2227` (dark) | Default navbar background |
| Navbar scrolled | `#000000` (black) | Navbar on scroll |
| Intro box default | `#1d2227` (dark) | First intro box background |
| Intro box color-1 | `#161a1e` | Second intro box background |
| Intro box color-2 | `#121518` | Third intro box background |
| Intro box color-3 | `#0e1013` | Fourth intro box background |
| Footer bg | `#121518` (very dark) | Site footer background |
| Footer bottom | `#000000` (black) | Footer copyright bar |
| Footer text | `rgba(255,255,255,0.7)` | Footer links, paragraphs |
| Footer headings | `#fff` | Footer section headings |
| Button radius | `0.25rem` (4px) | All `.btn` elements (Bootstrap default) |
| Button padding | `py-3 px-4` | Hero/CTA buttons (Bootstrap utility classes) |
| Body text | `#212529` (Bootstrap default) | Paragraph text |
| Heading text | `#212529` | h1-h6 |
| Subheading | `18px inline-block` | Section subtitle labels |
| Section heading | `40px font-weight: 600` | h2 in heading-section |
| Section bg (light) | `#f8f9fa` (Bootstrap bg-light) | About section inner box |
| Selection bg | `#000` | Text selection highlight |
| Selection color | `#fff` | Text selection text |
| Hero height | `600px` | Hero section fixed height |
| Hero overlay | semi-transparent dark | Image overlay for text legibility |
| Testimonial bg | background image with dark overlay | Parallax-style background |

## Requirements

### Feature: Amicus — Law Firm Website Template

#### Scenario: Top bar renders with contact info and social links

- **GIVEN** the page is loaded
- **THEN** a top bar displays phone number "+00 1234 567" and email "youremail@email.com"
- **AND** social media icons are displayed on the right (Facebook, Twitter, Instagram, Dribbble)

#### Scenario: Navbar renders with correct logo and navigation links

- **GIVEN** the page is loaded
- **THEN** the navbar displays "Amicus" as the logo text
- **AND** the navbar contains links: "Home", "About", "Practice Areas", "Cases", "Attorneys", "Blog", "Contact"
- **AND** the navbar has a mobile hamburger menu toggle
- **AND** the navbar starts dark (#1d2227) and darkens on scroll

#### Scenario: Hero section displays with background image and content

- **GIVEN** the page is loaded
- **THEN** the hero section shows a full-width background image with dark overlay
- **AND** the hero contains heading "Don't Feel Helpless We Fight for Justice"
- **AND** the hero contains a subtitle paragraph
- **AND** two buttons are displayed: "Contact us" (primary blue) and "Read more" (white outline)
- **AND** a video play button icon is displayed on the right side

#### Scenario: Intro boxes section displays 4 dark info boxes

- **GIVEN** the page is loaded
- **THEN** 4 dark intro boxes are displayed in a full-width row
- **AND** each box has an icon, title ("Expert Attorneys", "Case Dismissed", "Court Performance", "Court Performance"), and description
- **AND** the boxes have progressively darker backgrounds (#1d2227, #161a1e, #121518, #0e1013)

#### Scenario: Counter stats section displays 4 statistics

- **GIVEN** the page is loaded
- **THEN** 4 counter items are displayed in a row
- **AND** each counter shows an icon, a number (3000, 1000, 2000, 10540), and a label ("Trusted Clients", "Honor's & Awards", "Expert Lawyers", "Successful Cases")
- **AND** the numbers animate counting up on scroll

#### Scenario: About section displays with image and services

- **GIVEN** the page is loaded
- **THEN** a split section shows a background image on the left
- **AND** a light background panel on the right with "Welcome to Amicus" subheading
- **AND** "Why to Put Trust Your Trust In Amicus" heading
- **AND** 4 service items: "Expert Attorneys", "Great Discount", "Legal Advisory", "Quick Charges"
- **AND** each service has an icon and description

#### Scenario: Practice Areas section displays 6 area cards

- **GIVEN** the page is loaded
- **THEN** the Practice Areas section shows "Practice Area" subheading and "What We Cover" heading
- **AND** 6 practice area cards are displayed in a 3-column grid
- **AND** each card has a rotating icon animation on hover, a title, and description
- **AND** the practice areas are: "Business Law", "Family Law", "Criminal Law", "Real Estate Law", "Personal Injury", "Judicial Law"

#### Scenario: Case Studies section displays 8 case cards

- **GIVEN** the page is loaded
- **THEN** the Cases section shows "Cases" subheading and "Recent Case Studies" heading
- **AND** 8 case study cards are displayed in a mixed-width grid (3-6-3 columns per row)
- **AND** each card has a background image with title overlay ("Business Law", "Criminal Offense", "Dispute Resolution", etc.)

#### Scenario: Testimonials section displays with background image

- **GIVEN** the page is loaded
- **THEN** the Testimonial section has a background image with dark overlay
- **AND** the heading "Happy Clients" is displayed in white
- **AND** a carousel of testimonial cards is displayed
- **AND** each testimonial has a quote icon, quote text, customer photo, name, and position

#### Scenario: Appointment/CTA section displays with form and features

- **GIVEN** the page is loaded
- **THEN** the appointment section has a background image with dark overlay
- **AND** "We Have Great Results" heading is displayed on the left
- **AND** 3 feature items are listed: "Award Winning", "60 Years of Experience", "Best Attorneys team"
- **AND** a "Free Case Consultation" form is displayed on the right
- **AND** the form has fields: Your Name, Email, Practice Areas (dropdown), Message
- **AND** a "Send message" submit button is displayed

#### Scenario: Blog section displays 3 blog cards

- **GIVEN** the page is loaded
- **THEN** the Blog section shows "Blog" subheading and "Recent Blog" heading
- **AND** 3 blog cards are displayed in a 3-column grid
- **AND** each card has a background image with date overlay (day/month/year), title, and description

#### Scenario: Footer displays with correct structure

- **GIVEN** the page is loaded
- **THEN** the footer has a dark background (#121518)
- **AND** the footer contains 5 widget columns: Logo + social links, Explore links, Legal links, Company links, Contact info
- **AND** social media icons are displayed (Twitter, Facebook, Instagram)
- **AND** contact info shows address, phone, and email with icons
- **AND** a dark bottom bar (#000000) has a copyright line with a "Component Dock" link

## Verification checklist

- [ ] Top bar renders with phone number and email on left, social icons on right
- [ ] Navbar renders with "Amicus" logo, nav links, mobile hamburger, dark bg that darkens on scroll
- [ ] Hero section has full-width background image with dark overlay, heading, subtitle, two buttons, video play icon
- [ ] Intro boxes section has 4 dark boxes with icons, titles, descriptions, progressively darker backgrounds
- [ ] Counter stats section has 4 items with animated count-up numbers and labels
- [ ] About section has split layout: image left, light panel right with subheading, heading, 4 service items
- [ ] Practice Areas section has 6 cards with rotating icon animation, titles, descriptions
- [ ] Case Studies section has 8 cards in mixed-width grid with background images and title overlays
- [ ] Testimonials section has background image with overlay, white heading, carousel of quote cards with photos
- [ ] Appointment section has background image with overlay, features list, consultation form with dropdown
- [ ] Blog section has 3 cards with date overlays, titles, descriptions
- [ ] Footer has dark bg (#121518), 5 widget columns, social icons, contact info, dark bottom bar with copyright and Component Dock link
- [ ] All colors match design tokens (primary #cbb88c, ink #1d2227, footer #121518, panels #f5f4f0)
- [ ] Buttons are Bootstrap-default rounded (border-radius: 0.25rem)
- [ ] Font is Roboto throughout
- [ ] Responsive layout works (mobile hamburger menu, stacked columns)
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Footer links to https://www.componentdock.com/
