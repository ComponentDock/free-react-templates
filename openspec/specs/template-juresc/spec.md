# Template: Juresc (Law Firm)
<!-- prep-status: shipped-as=docket -->
> **SHIPPED-UNDER** — the ColorLib `lawfirm` design this prep describes already
> ships as `apps/docket` (<https://docket.free.componentdock.com>).
> Do not scaffold `apps/juresc`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-docket/spec.md`.

## Purpose

Recreation of ColorLib "Lawfirm" template.
- Source slug: `lawfirm`
- Source URL: https://colorlib.com/wp/template/lawfirm/
- Preview URL: https://preview.colorlib.com/theme/lawfirm/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/lawfirm-free-fullscreen-lawyer-website-template.jpg
- Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript

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

**Consequence for the implementer:** no app to build here — `apps/docket` ships this design (see the SHIPPED-UNDER banner).
The note exists so the three-row collapse and the retired thumbnail are recorded, and so
the `--btn-primary` row below is read as the measured gold, not Bootstrap blue.

## Design tokens

| Token              | Value                                     | Notes                                                  |
| ------------------ | ----------------------------------------- | ------------------------------------------------------ |
| `font-family`      | `"Roboto", sans-serif`                    | Weights 300, 400, 500, 700                             |
| `--brand-dark`     | `#1d2227`                                 | Header bar, navbar, hero overlay, footer background    |
| `--brand-gold`     | `#cbb88c`                                 | Link color, active states, social icon hover, accents  |
| `--brand-white`    | `#ffffff`                                 | Body background, testimonial dots                      |
| `--brand-gray`     | `gray`                                    | Body text color                                        |
| `--heading-color`  | `rgba(0, 0, 0, 0.7)`                     | Headings (h1-h6)                                       |
| `--brand-light`    | `#f5f4f0`                                 | About section background (`.bg-light`), light card areas |
| `--btn-primary`    | `#cbb88c`                                 | CTA fill (`.btn.btn-primary`), text `#1d2227` — the `#007bff` in the compiled Bootstrap frame is overridden and never painted (§Reference identity) |
| `--hero-overlay`   | `#1d2227` at 50% opacity                 | Hero section image overlay                             |
| `--btn-radius`     | `0.25rem`                                 | Bootstrap default button border-radius                 |
| `--hero-height`    | `600px`                                   | Hero section fixed height                              |

### Section-specific backgrounds

- Top bar (`.wrap`): `#1d2227` dark
- Navbar (`.ftco-navbar-light`): `#1d2227` dark, sticky on scroll → white
- Hero: background image + dark overlay at 50%
- Intro strip: 4 columns, each with a different accent color class
- About section: image left + light background right (`#f8f9fa`)
- Counter section: background image
- Practice Areas: white background, 6 icon cards
- Case Studies: no section background, cards use background images
- Testimonials: background image + dark overlay, carousel
- Appointment/CTA: background image + dark overlay, form
- Blog: white background, 3 blog card entries
- Footer: `#1d2227` dark, bottom bar is `#000000`

## Section structure (from live preview DOM)

1. **TopBar** — phone + email left, social icons right, dark background
2. **Navbar** — brand "Law Firm" left, nav links right (Home, About, Practice Areas, Cases, Attorneys, Blog, Contact), dark bg, sticky on scroll
3. **Hero** — fullscreen background image, dark overlay 50%, headline "Don't Feel Helpless We Fight for Justice", subtext, two CTA buttons (Contact us primary, Read more white), video play button
4. **IntroStrip** — 4 equal columns with icons + title + text (Expert Attorneys, Case Dismissed, Court Performance, Court Performance)
5. **AboutSection** — split: left half image with video play button overlay, right half light bg with subheading "Welcome to Law Firm", heading, paragraph, 4 service items (Expert Attorneys, Great Discount, Legal Advisory, Quick Charges)
6. **CounterSection** — 4 stat counters (3000 Trusted Clients, 1000 Honors & Awards, 2000 Expert Lawyers, 10540 Successful Cases) over background image
7. **PracticeAreas** — heading "What We Cover", 6 icon cards in 3-col grid (Business Law, Family Law, Criminal Law, Real Estate Law, Personal Injury, Judicial Law)
8. **CaseStudies** — heading "Recent Case Studies", mixed grid: 1 col left + 2 col center + 1 col right, 7 cards total with background images and overlay text
9. **Testimonials** — heading "Happy Clients", owl-carousel of testimonial cards with quote icon, text, person image, name, position, over dark bg image
10. **AppointmentCTA** — split: left "We Have Great Results" with 3 service items + right "Free Case Consultation" form (name, email, practice area select, message, submit button), bg image
11. **Blog** — heading "Recent Blog", 3 blog cards with image, date overlay, title, excerpt
12. **Footer** — 5 columns: logo + social, Explore links, Legal links, Company links, contact info (address, phone, email)
13. **FooterBottom** — copyright bar, dark black background

## Requirements

### TopBar

Feature: TopBar

#### Scenario: TopBar displays contact info and social links

- **GIVEN** I visit the Juresc homepage
- **THEN** I see a phone number "+00 1234 567" in the top bar
- **AND** I see an email "youremail@email.com" in the top bar
- **AND** I see social icons for Facebook, Twitter, Instagram, and Dribbble

### Navbar

Feature: Navbar

#### Scenario: Navbar shows brand and navigation links

- **GIVEN** I visit the Juresc homepage
- **THEN** I see the brand "Juresc" in the navbar
- **AND** I see navigation links: Home, About, Practice Areas, Cases, Attorneys, Blog, Contact

#### Scenario: Navbar is dark themed

- **GIVEN** I visit the Juresc homepage
- **THEN** the navbar background is dark colored

### Hero

Feature: Hero section

#### Scenario: Hero displays headline and CTAs

- **GIVEN** I visit the Juresc homepage
- **THEN** I see the headline "Don't Feel Helpless We Fight for Justice"
- **AND** I see a "Contact us" primary button
- **AND** I see a "Read more" white button
- **AND** I see a video play button

#### Scenario: Hero has background image with overlay

- **GIVEN** I visit the Juresc homepage
- **THEN** the hero section has a background image
- **AND** the hero section has a dark overlay

### IntroStrip

Feature: Intro strip

#### Scenario: Intro strip shows 4 feature cards

- **GIVEN** I visit the Juresc homepage
- **THEN** I see 4 intro cards in a row
- **AND** the first card has title "Expert Attorneys"
- **AND** the second card has title "Case Dismissed"
- **AND** the third card has title "Court Performance"
- **AND** the fourth card has title "Court Performance"

### AboutSection

Feature: About section

#### Scenario: About section has split layout

- **GIVEN** I visit the Juresc homepage
- **THEN** I see an image with a video play button on the left
- **AND** I see text content on the right with a light background
- **AND** I see a subheading "Welcome to Juresc"
- **AND** I see a heading about trust
- **AND** I see 4 service items: Expert Attorneys, Great Discount, Legal Advisory, Quick Charges

### CounterSection

Feature: Counter section

#### Scenario: Counter section shows statistics

- **GIVEN** I visit the Juresc homepage
- **THEN** I see a counter for "3000" Trusted Clients
- **AND** I see a counter for "1000" Honors & Awards
- **AND** I see a counter for "2000" Expert Lawyers
- **AND** I see a counter for "10540" Successful Cases

### PracticeAreas

Feature: Practice areas

#### Scenario: Practice areas displays 6 cards

- **GIVEN** I visit the Juresc homepage
- **THEN** I see a heading "What We Cover"
- **AND** I see 6 practice area cards
- **AND** the cards are: Business Law, Family Law, Criminal Law, Real Estate Law, Personal Injury, Judicial Law

### CaseStudies

Feature: Case studies

#### Scenario: Case studies shows mixed grid of cases

- **GIVEN** I visit the Juresc homepage
- **THEN** I see a heading "Recent Case Studies"
- **AND** I see case study cards with background images
- **AND** each card has a title and short text

### Testimonials

Feature: Testimonials

#### Scenario: Testimonials section with carousel

- **GIVEN** I visit the Juresc homepage
- **THEN** I see a heading "Happy Clients"
- **AND** I see testimonial cards with a quote icon, text, person image, name, and position
- **AND** the testimonials are in a carousel/slider
- **AND** the section has a background image with dark overlay

### AppointmentCTA

Feature: Appointment CTA

#### Scenario: CTA section shows results info and consultation form

- **GIVEN** I visit the Juresc homepage
- **THEN** I see a heading "We Have Great Results" on the left
- **AND** I see 3 service items: Award Winning, 60 Years of Experience, Best Attorneys team
- **AND** I see a heading "Free Case Consultation" on the right
- **AND** I see a form with Name, Email, Practice Areas select, Message textarea, and Send message button
- **AND** the section has a background image with dark overlay

#### Scenario: Consultation form has practice area dropdown

- **GIVEN** I visit the Juresc homepage
- **WHEN** I look at the consultation form
- **THEN** I see a dropdown with options: Business Law, Criminal Law, Family Law, Judicial Law, Personal Injury, Real Estate Law

### Blog

Feature: Blog section

#### Scenario: Blog shows 3 entries

- **GIVEN** I visit the Juresc homepage
- **THEN** I see a heading "Recent Blog"
- **AND** I see 3 blog cards
- **AND** each card has an image, date (day/month/year), title, and excerpt

### Footer

Feature: Footer

#### Scenario: Footer has 5 columns

- **GIVEN** I visit the Juresc homepage
- **THEN** I see a footer with brand name and social links
- **AND** I see an "Explore" column with links: About, Contact, Practice Areas, Cases
- **AND** I see a "Legal" column with links: Join us, Blog, Privacy & Policy, Term & Conditions
- **AND** I see a "Company" column with links: About Us, Blog, Contact, Careers
- **AND** I see a "Have a Questions?" column with address, phone, and email
- **AND** I see a copyright bottom bar

#### Scenario: Footer links to Component Dock

- **GIVEN** I visit the Juresc homepage
- **THEN** the footer contains a link to "https://www.componentdock.com/"

## Verification checklist

- [ ] All 13 sections present in correct order
- [ ] Design tokens match: Roboto font, #1d2227 dark, #cbb88c gold accent, white bg
- [ ] Hero is fullscreen with dark overlay at 50% opacity
- [ ] 4-column intro strip with different accent colors
- [ ] About section is split layout (image left, content right on light bg)
- [ ] Counter section with animated numbers over background image
- [ ] 6 practice area cards in 3-column grid
- [ ] Case studies in mixed grid layout (1+2+1 columns)
- [ ] Testimonials carousel with dark bg image overlay
- [ ] Appointment CTA split with form (name, email, select, textarea, submit)
- [ ] 3 blog cards with date overlays
- [ ] Footer with 5 columns + Component Dock link
- [ ] Top bar with phone/email and social icons
- [ ] Navbar dark themed, sticky on scroll
- [ ] No ColorLib references in app code
- [ ] All placeholder images via picsum.photos
