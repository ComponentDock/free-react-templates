# Template: CounselHub (Law Firm Website)
<!-- prep-status: shipped-as=chambers -->
> **SHIPPED-UNDER** — the ColorLib `lawfirm` design this prep describes already
> ships as `apps/chambers` (<https://chambers.free.componentdock.com>).
> Do not scaffold `apps/counselhub`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-chambers/spec.md`.

## Purpose

- **ColorLib Template Source:** Lawfirm (`https://colorlib.com/wp/template/lawfirm/`)
- **Live Preview URL:** `https://preview.colorlib.com/theme/lawfirm/`
- **Screenshot:** `https://colorlib.com/wp/wp-content/uploads/sites/2/lawfirm-free-fullscreen-lawyer-website-template.jpg`
- **Assigned New Name:** `counselhub`
- **App Directory:** `apps/counselhub`
- **Package Name:** `@free-react-templates/counselhub`
- **Stack:** Vite, React 19, Tailwind CSS 4, TypeScript (strict), Lucide React icons.
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

**Consequence for the implementer:** no app to build here — `apps/chambers` ships this design (see the SHIPPED-UNDER
banner). The note exists so the three-row collapse and the retired thumbnail are recorded,
and so the blue-CTA line in the token list below is not read as design.

## Design Tokens (Extracted from Lawfirm)

- **Brand Gold / Accent:** `#cbb88c` (warm gold — used for navbar links, active states, CTA button backgrounds, intro box accents, icon highlights, footer link color)
- **Dark Background:** `#1d2227` (dark charcoal — used for top bar, navbar background, intro aside-stretch box, footer)
- **Base Body Font:** `Roboto, Arial, sans-serif` (Google Fonts, weights 300–700)
- **Heading Weight:** Bold (700) for h1/h2, Medium (500) for h3
- **Button Radius:** `0.25rem` (Bootstrap 4 default — `rounded` in Tailwind)
- **Section Backgrounds:** Alternating `#ffffff` (white), `#f5f4f0` (warm off-white — the sheet's `.bg-light`), and background images with dark overlay for hero/testimonials/counter/appointment sections
- **Intro Boxes:** Four dark shades for the feature strip — default `#1d2227`, then `color-1` `#161a1e`, `color-2` `#121518`, `color-3` `#0e1013` (a dark ramp, not gold)
- **Navbar:** Dark background (`#1d2227`), gold brand text (`#cbb88c`), white nav links, scrolled state with white background
- **Hero:** Full-width background image, `#1d2227` overlay at 50 %, white text, two CTA buttons (`btn-primary` = `#cbb88c` gold fill with `#1d2227` text + `btn-white` outline)
- **Footer:** Dark background (`#1d2227`), gold link accents, white text

---

## Requirements

### Feature: CounselHub Landing Page

#### Scenario: Top Bar

- **GIVEN** the user visits the CounselHub landing page
- **THEN** they should see a dark top bar with phone number and email on the left
- **AND** social media icon links (Facebook, Twitter, Instagram, Dribbble) on the right

#### Scenario: Navigation Bar

- **GIVEN** the user views the navbar
- **THEN** they should see a dark sticky navigation bar with the brand name "CounselHub" in gold (`#cbb88c`)
- **AND** navigation links: Home, About, Practice Areas, Cases, Attorneys, Blog, Contact
- **AND** a mobile hamburger menu toggle on small viewports
- **WHEN** the user scrolls past the hero
- **THEN** the navbar should transition to a white background with dark text

#### Scenario: Hero Section

- **GIVEN** the user views the hero section
- **THEN** they should see a full-width hero with a dark overlay over a background image
- **AND** a heading "Don't Feel Helpless We Fight for Justice"
- **AND** a descriptive paragraph
- **AND** two CTA buttons: "Contact us" (primary style) and "Read more" (white outline)
- **AND** a video play icon linking to a video popup

#### Scenario: Feature Strip / Intro Section

- **GIVEN** the user scrolls to the intro section
- **THEN** they should see a 4-column feature strip with icon boxes
- **AND** each box should have an icon, heading, and short description
- **AND** the boxes should be titled: "Expert Attorneys", "Case Dismissed", "Court Performance", and a fourth feature
- **AND** the first box should have a dark background, the remaining three should have colored accent backgrounds

#### Scenario: About Section

- **GIVEN** the user scrolls to the about section
- **THEN** they should see a split layout: background image/video on the left, content on the right
- **AND** the right side should have a light gray background box with a subheading "Welcome to CounselHub"
- **AND** a heading "Why to Put Your Trust In CounselHub"
- **AND** a 2x2 grid of service features: "Expert Attorneys", "Great Discount", "Legal Advisory", "Quick Charges"
- **AND** each feature should have an icon and short description

#### Scenario: Counter / Statistics Section

- **GIVEN** the user scrolls to the counter section
- **THEN** they should see a statistics bar with a background image
- **AND** four numbered counters: e.g. "350" Happy Clients, "450" Cases Won, "15" Years Experience, "10" Attorneys
- **AND** numbers should animate on scroll into view

#### Scenario: Practice Areas Section

- **GIVEN** the user scrolls to the practice areas section
- **THEN** they should see a heading "Our Practice Area"
- **AND** a grid of 6 practice area cards with icons
- **AND** the cards should be: Family Law, Business Law, Insurance Law, Education Law, Real Estate Law, Criminal Law
- **AND** each card should have an icon, title, and short description

#### Scenario: Cases Gallery Section

- **GIVEN** the user scrolls to the cases section
- **THEN** they should see a heading "Recently Won Cases"
- **AND** a gallery grid of case images with overlay titles
- **AND** 7 case items arranged in a masonry-style grid

#### Scenario: Testimonials Section

- **GIVEN** the user scrolls to the testimonials section
- **THEN** they should see a testimonial carousel/slider with a background image and dark overlay
- **AND** each testimonial should have an avatar image, a quote, the person's name, and role
- **AND** the carousel should auto-rotate between testimonials

#### Scenario: Appointment / CTA Section

- **GIVEN** the user scrolls to the appointment section
- **THEN** they should see a call-to-action section with a background image and dark overlay
- **AND** a heading inviting users to schedule a consultation
- **AND** a CTA button to contact or book

#### Scenario: Blog Section

- **GIVEN** the user scrolls to the blog section
- **THEN** they should see a heading "Recent Blog"
- **AND** 3 blog entry cards in a row
- **AND** each card should have a featured image, date, title, author, and short excerpt

#### Scenario: Footer

- **GIVEN** the user scrolls to the page footer
- **THEN** they should see a dark background footer with 5 columns
- **AND** columns for: About CounselHub (description + social icons), Practice Areas (links), Quick Links, Recent Blog entries, and Contact Info (address, phone, email)
- **AND** a copyright bar at the bottom
- **AND** the mandatory attribution link to **Component Dock** (`https://www.componentdock.com/`)

---

## Verification checklist

- [ ] Top bar with phone + email + social icons renders
- [ ] Navbar sticky, gold brand, all nav links present, mobile toggle works
- [ ] Navbar transitions on scroll (dark → light background)
- [ ] Hero full-width with overlay, heading, subtext, two CTA buttons, video icon
- [ ] Feature strip 4-column with icons and descriptions
- [ ] About section split layout, services grid, correct headings
- [ ] Counter section with 4 animated stats
- [ ] Practice Areas grid with 6 cards and icons
- [ ] Cases gallery grid with 7 items
- [ ] Testimonials carousel with auto-rotation
- [ ] Appointment CTA section with background image
- [ ] Blog section with 3 entry cards
- [ ] Footer 5-column, dark background, Component Dock link
- [ ] All placeholder images use deterministic Picsum seeds
- [ ] No ColorLib references in app code (only in spec + TEMPLATES.md)
- [ ] Footer links to `https://www.componentdock.com/`
