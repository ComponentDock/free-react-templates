# Template: Juris (Law Firm Template)

## Purpose

Juris is a law-firm one-pager in the free-react-templates monorepo. It is an
original React recreation of the ColorLib free "Lawyerlegal" template design
(see TEMPLATES.md — appears 2×: lines 599 and 2127; both rows point to the
same source and are `- [ ]` — one prep covers both, mark ALL `[x]` when done;
verified with `grep -c 'wp/template/lawyerlegal/'` = 2), built under a
DIFFERENT name (Juris — a Latin law/legal term, fitting the firm theme; single
lowercase word, no collision with `apps/` or existing spec folders) per the
monorepo naming mandate (never reuse the ColorLib source name), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Source: https://colorlib.com/wp/template/lawyerlegal/ (Bootstrap 5 category;
`<title>Lawyer | Template</title>`).
Preview URL: https://preview.colorlib.com/theme/lawyerlegal/ (HTTP 200,
~29 KB HTML + `assets/css/style.css` ~72 KB fetched and parsed — the preview
slug matches the TEMPLATES.md slug, no alias).

## Design reference (replication findings)

- **Original:** ColorLib "Lawyerlegal" — a classic, authoritative LAW FIRM
  one-pager. A near-black `#2e0000` top bar carries contact info (phone
  "+1 (78) 673 3567", email) with white 14px text separated by faint white
  dividers, and social icons on the right; a white sticky bottom header row
  holds the logo ("LAWYER" wordmark with a scales-of-justice icon), nav
  (Home, Practice Area, About, Blog with submenu Blog Details + Elements,
  Contact), a red-outline "Make An Appointment" button (`btn_2`) and a "Call
  Us: +1 (78) 673 3567" link with a dotted red underline. The hero is a
  full-width photo (a classical philosopher bust against wooden bookshelves —
  wisdom/authority metaphor) with a left-to-right black gradient overlay
  (`.hero-overly`, `#000` → transparent), a big white serif h1 "Special
  Approach Dedicated Attorney" (70px), a white lorem paragraph (22px 300), and
  a flat white "Our Practice Area" button (`btn_1`: white bg, `#B40000` text,
  0 radius). Then a white about section ("Why You Need the Top Lawyers in
  O'Renders") with an arch-cropped portrait (radius `140px 0 0 0`) and a
  `#B40000` "15 / Years of experience" badge box anchored bottom-right
  (`.img-cap`), a "Read More" link with a 2px `#B40000` underline
  (`.browse-btn`), and a signature block ("Reuben Sandwich — CEO of
  Colorlib"). The practice-area section (`#F8F4F4` bg) holds a centered
  "Our Practice Area" title, a 2×2 grid of white service cards (icon + title
  - blurb: Family Law / Corporate Law / Accidental Law / Finance Law), and a
    tall **red quote-form panel** (`.form-wrapper`, bg `#B40000`, radius
    `0 140px 0 0` — distinctive clipped top-right corner) titled "Get Free
    Quote" with pill inputs (Your name, Email, a Family Law select, Message)
    and a full-width orange "Send Message" button (`.submit-btn`, bg `#FF6F00`,
    hover sweeps white and turns text red). A 6-logo brand strip sits on a top
    border; then a dark photo-background testimonial carousel ("What Client
    Says") with a big quote, and founder cards (photo, "Jacson Kalish",
    "Legal law Supporter"); a "Recent News" section (2 photo cards: "Tax I
    Information" etc. + Read More links); a soft `#EFE2E2` CTA band ("Why
    Choose Us?" — red Roboto 24px heading, dark quote paragraph, "Learn More"
    red button, and a right-side "Call For a Free Consulting" phone CTA
    "(89) 673 378-309"); and a dark `#2D0000` centered footer (logo, lorem,
    menu links Home / Practice Area / About / Blog / Contact, copyright bar
    with a top border) plus a circular `#B40000` back-to-top button. The brand
    is BRICK RED `#B40000` (buttons, links, hover sweeps, badge, quote panel,
    back-to-top) with ORANGE `#FF6F00` accents (form submit button, button
    hover sweep, bold text) on a white/`#F8F4F4` canvas with near-black
    `#2D0000` headings and footer.
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/lawyerlegal/
  (HTTP 200, ~29 KB HTML; `assets/css/style.css` ~72 KB parsed for tokens).
  The site is jQuery + Bootstrap 5 + Owl Carousel (hero + testimonial
  carousels) + Slick (brand strip) + NiceSelect + SlickNav (mobile menu),
  NOT Tailwind. All interactivity must be recreated client-side in React.
- **Screenshot note:** `lawyerlegal-free-template.jpg` (1200×946, viewed in
  the browser): law-firm homepage with a thin dark top strip (address/email/
  socials), white nav bar ("LAWYER" logo with scales icon; Home, Practice
  Area, About, Blog, Contact; red "Make An Appointment" button), hero photo
  of a stone philosopher bust against floor-to-ceiling bookshelves with a
  dark left-side gradient overlay, white serif headline + lorem + flat
  brick-red/white CTA; below, a white two-column about row with an arch-
  cropped blonde professional portrait; flat rectangular buttons, elegant
  serif headings (Playfair-like — actual font is Baskervville), red/white/
  near-black palette. The live rendered page + parsed stylesheet are the
  authoritative reference.

### Design tokens (extracted from `assets/css/style.css`)

- **Brand (brick red):** `#B40000` — `.btn`, `.boxed-btn`, `#back-top`,
  `.img-cap`, `.form-wrapper` bg, `.browse-btn::before` underline, nav hover
  - 3px underline sweep, `.btn_2` border/text, `a:hover` in several scopes,
    `.wantToWork-caption h2` (red), `.submit-btn:hover` text.
- **Accent (orange):** `#FF6F00` — `.submit-btn` bg, `.btn::before` hover
  sweep, `b,sup,sub,u,del` text, `.genric-btn.primary` (elements page).
- **Ink (near-black):** `#2D0000` — `h1–h6` color, nav links, `.browse-btn`
  text, `.wantToWork-caption p`, `.footer-wrappper` bg; header-top bg is
  `#2e0000`.
- **Canvas / section bgs:** white `#fff` (cards, btn_1), `#F8F4F4`
  (`.section-bg` practice area, `slider-area`), `#EFE2E2` (`.wantToWork-area`
  CTA band), `#f9f9ff` (light lavender, utility), `#ffff` service cards.
- **Body text:** `#6B5A5A` (`p`, Roboto 300, 16px, line-height 1.6);
  muted `#888`/`#999`; practice-card blurb `#66816A`; footer muted
  `#AC9191`.
- **Fonts (Google Fonts `@import`, index.html `<link>` in React):**
  headings `"Baskervville", serif` (weights 400/500, `h1–h6` default 500,
  hero h1 weight 400); body/nav `"Roboto", sans-serif` (300/400/500/700/900).
- **Buttons — all radius 0 (flat/square):** `.btn` big red (padding
  `30px 35px`, bg `#B40000`, hover sweep `::before` `#FF6F00` scaleX);
  `.btn_1` white bg / `#B40000` text (padding `11px 20px`, hover → outline
  white); `.btn_2` `#B40000` outline (hover → filled `#B40000`, white text);
  `.submit-btn` full-width orange (padding `25px 43px`, font Baskervville,
  hover → white sweep, text `#B40000`); `.boxed-btn` white + `#B40000`
  border, uppercase, hover → filled red. `.browse-btn` "Read More" link:
  `#2D0000` 500 with 2px `#B40000` underline offset below.
- **Distinctive shapes:** `.form-wrapper` bg `#B40000`, radius
  `0 140px 0 0` (clipped top-right); `.about-right-img img` radius
  `140px 0 0 0` (arch top-left); `.img-cap` badge (194×171, bg `#B40000`,
  white 76px 900 number + caption, absolute `bottom:-18px right:-35px`);
  hero pill eyebrow style exists in CSS (`span`: white bg, `#2D0000` text,
  radius 17px) but the rendered hero caption has NO eyebrow span — omit;
  form inputs follow the nice-select pill look (1px `#eaeaea` border,
  radius 25px, height 50px, text `#071112`).
- **Hero overlay:** `.hero-overly::before` — `linear-gradient(to right,
#000 0%, rgba(60,0,0,0.61) 40%, … rgba(0,0,0,0) 73%)` (left dark → right
  clear); hero bg photo `h1_hero1.jpg` (philosopher bust + bookshelves),
  `.slider-height` 750px, cover.
- **Nav underline sweep:** `a::after` 3px `#B40000`, width 0 → 100% on
  hover (`.main-menu ul>li`).
- **CTA band:** `.wantToWork-area` bg `#EFE2E2`, padding `20px 36px 10px
50px`, `box-shadow: 0px 20px 30px rgba(0,0,0,0.06)`.

### Section structure (from the live DOM, top to bottom)

1. `div.header-area > div.main-header`:
   - `div.header-top` (bg `#2e0000`, padding 13px 88px): left
     `div.header-info-left ul li` — phone "+1 (78) 673 3567" (icon) and
     email (white 14px, right border `rgba(255,255,255,0.2)` between
     items); right `div.header-info-right > .header-social li a` — social
     icons (white 16px).
   - `div.header-bottom.header-sticky` (white, sticky on scroll): left
     `div.logo` (wordmark with scales-of-justice icon — recreate "Juris"
     text logo); `div.main-menu > ul#navigation`: Home, Practice Area,
     About, Blog (with `ul.submenu`: Blog Details, Elements), Contact —
     Roboto 18px `#2D0000`, hover `#B40000` + 3px underline sweep; right
     `div.header-right-btn`: `a.btn_2` "Make An Appointment" +
     `a.header-btn2` "Call Us: <span>+1 (78) 673 3567</span>" (dotted
     `#B40000` underline on span).
   - `div.mobile_menu` — hamburger menu for <lg (recreate with a client-
     side toggle).
2. `section.slider-area` (bg `#F8F4F4`) > `div.slider-active` (owl
   carousel; hero is effectively a single slide) > `div.single-slider.
hero-overly.slider-height.slider-bg1` (bg photo, 750px, left→right
   black gradient overlay): `div.hero-caption` — `h1` "Special Approach
   Dedicated Attorney" (white, Baskervville 70px 400), `p` lorem (white
   22px 300), `a.btn_1` "Our Practice Area" (white bg, `#B40000` text).
3. `section.about-low-area.section-padding` (white):
   - left `div.about-right-cap` (relative): `div.about-right-img` — photo
     `border-radius:140px 0 0 0` (arch) + `div.img-cap` badge
     (`#B40000`, white span "15" 76px 900 + "Years of experience" text),
     absolute bottom-right.
   - right `div.about-caption` (padding-top 80px): `div.section-tittle` —
     `h2` "Why You Need the Top Lawyers in O'Renders" (46px 400
     `#2D0000`) + `p` lorem; `div.about-bottom`: signature image +
     "Reuben Sandwich — CEO of Colorlib" (paraphrase the name/role);
     `a.browse-btn` "Read More".
4. `div.our-practice-area.section-bg.section-padding` (bg `#F8F4F4`):
   - centered `div.section-tittle.text-center`: `h2` "Our Practice Area".
   - 2×2 grid of 4 `div.single-services1.text-center` cards (white bg,
     margin 4px, padding 35px 30px): `div.services-ion` (icon) +
     `div.services-cap` (`h3` link title + `p` blurb `#66816A` 20px):
     "Family Law" / "Corporate Law" / "Acidental Law" / "Finance Law".
   - right column `div.form-wrapper` (bg `#B40000`, radius `0 140px 0 0`,
     padding 44px 60px): `div.form-tittle` — `h2` "Get Free Quote" (white
     38px 600) + p; `form#three-form`: `div.form-box` `input` "Your name",
     `input` "Email" (pill, `#eaeaea` border 25px radius), `div.single-form
     > .select-option` `select`(Family Law, Family Law 1–3),`textarea`"Message",`button.submit-btn` "Send Message" (orange, full width).
5. `div.brand-area.border-top` — 6 `div.single-brand` logo images
   (demo repeats `brand1.png` — recreate as 6 varied text/logo marks),
   `pt-50 pb-40`, centered.
6. `div.testimonial-area.testimonial-padding.section-img-bg2` (dark photo
   bg, cover): `div.h1-testimonial-active` (carousel) of 2
   `div.single-testimonial`: `div.testimonial-caption` (padding-left 80px)
   → `div.testimonial-top-cap`: `h2` "What Client Says" + big quote
   (`"Our professional leadership team is truly committed to producing
the best results for our clients very successfully…"`); `div.
testimonial-founder.d-flex`: `div.founder-img` (photo) +
   `div.founder-text`: `h2` "Jacson Kalish" + `p` "Legal law Supporter".
7. `div.services-area.section-padding` (white) — "Recent News": centered
   `div.section-tittle.text-center` (`h2` "Recent News"); 2
   `div.single-services` cards: `div.services-img` (photo news1.jpg-style)
   - `div.services-caption` — `span` "Tax I Information" (eyebrow), `h3`
     "Our lawyers offer clients a range of integrated global…" (24px 400
     `#2D0000`), `p` lorem, `a.browse-btn` "Read More". (Vary the second
     card's content.)
8. `section.wantToWork-area` > `div.want-wrapper` (bg `#EFE2E2`, shadow,
   `padding:20px 36px 10px 50px`, z-1): row — left `div.wantToWork-
caption.wantToWork-caption2` (centered): `h2` "Why Choose Us?" (Roboto
   `#B40000` 24px 400), `p` quote (24px `#2D0000`), `p.pera-bottom` lorem,
   `a.btn` "Learn More" (big red); right `div.contact-now`:
   `span` "Call For a Free Consulting" + `a.btn2.wantToWork-btn` with
   phone icon "(89) 673 378-309".
9. `div.footer-wrappper` (bg `#2D0000`) > `footer.footer-area.footer-
padding`: `div.single-footer-caption.text-center`: `div.footer-logo`
   (footer logo), `div.footer-tittle > div.footer-pera` (lorem p),
   `div.footer-menu` (Home, Practice Area, About, Blog, Contact links,
   centered); `div.footer-bottom-area`: `div.bottom-top` (1px
   `rgba(255,255,255,0.2)` top/bottom borders) → `div.footer-copy-right.
text-center` — "Copyright © <year> All rights reserved | This template
   is made with [heart] by Colorlib" — the Colorlib credit is REPLACED
   with the mandatory Component Dock link (https://www.componentdock.com/);
   footer text color `#AC9191`.
10. `div#back-top` — fixed circular button (50×50, bg `#B40000`, white
    arrow icon, radius 50%, bottom-right) scrolling to top.

## Requirements

### Requirement: Header (top bar + sticky nav + CTAs)

The system SHALL render a near-black `#2e0000` top bar with contact info
and social icons, and a white sticky nav row with logo, menu, and two CTAs.

#### Scenario: Top bar content

- **GIVEN** the Juris app is rendered
- **WHEN** the page loads
- **THEN** the top bar SHALL have a `#2e0000` background
- **AND** SHALL show a phone number ("+1 (78) 673 3567" with an icon) and
  an email on the left (white 14px, separated by faint white dividers)
- **AND** SHALL show social icon links on the right

#### Scenario: Nav row

- **GIVEN** the header is rendered
- **WHEN** the user looks at the white row beneath the top bar
- **THEN** it SHALL show the "Juris" logo (scales-of-justice icon +
  wordmark) on the left
- **AND** SHALL show nav links Home, Practice Area, About, Blog, Contact
  (Roboto 18px `#2D0000`; hover `#B40000` with a 3px underline sweep)
- **AND** SHALL show a "Make An Appointment" outline button (`btn_2`
  style) and a "Call Us: +1 (78) 673 3567" link with a dotted underline
  on the right
- **AND** the nav row SHALL become sticky with a white background and
  shadow after scrolling past the hero

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrower than the desktop breakpoint
- **WHEN** the user opens the hamburger menu
- **THEN** the nav links SHALL be shown in a collapsible panel with an
  `aria-expanded` toggle

### Requirement: Hero

The system SHALL render a full-width hero with a background photo, a dark
left-to-right overlay, a serif headline, a paragraph, and one CTA.

#### Scenario: Hero content

- **GIVEN** the hero section is rendered
- **WHEN** the user is at the top of the page
- **THEN** the hero SHALL show a full-width law-themed background photo
  (philosopher-bust/bookshelves style) with a dark `#000` → transparent
  left-to-right gradient overlay
- **AND** SHALL contain the h1 "Special Approach Dedicated Attorney"
  (white, serif 70px, weight 400), a white lorem paragraph (22px 300),
  and a flat white "Our Practice Area" button (`#B40000` text, 0 radius)
- **AND** the hero SHALL be ~750px tall with a cover background

### Requirement: About section

The system SHALL render a two-column about section with an arch-cropped
portrait, a red experience badge, a heading, and a Read More link.

#### Scenario: About layout

- **GIVEN** the about section is rendered
- **WHEN** the user scrolls to it
- **THEN** the left column SHALL show a portrait photo cropped with a
  `140px 0 0 0` arch radius
- **AND** SHALL show a `#B40000` badge box anchored to the bottom-right
  of the portrait with a large number ("15") and "Years of experience"
- **AND** the right column SHALL show the h2 "Why You Need the Top
  Lawyers in O'Renders" (46px 400), a lorem paragraph, a signature block
  (name + role), and a "Read More" link with a 2px `#B40000` underline

### Requirement: Practice areas + quote form

The system SHALL render a `#F8F4F4` section with a centered "Our Practice
Area" title, a 2×2 grid of four service cards, and a red quote-form panel.

#### Scenario: Practice area cards

- **GIVEN** the practice-area section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section-tittle SHALL read "Our Practice Area"
- **AND** SHALL show four white cards in a 2×2 grid (icon + title + blurb):
  Family Law, Corporate Law, Accidental Law, Finance Law

#### Scenario: Quote form

- **GIVEN** the quote form panel is rendered
- **WHEN** the user looks at the right column
- **THEN** the panel SHALL have a `#B40000` background and the distinctive
  `0 140px 0 0` clipped top-right corner
- **AND** SHALL show the heading "Get Free Quote" (white 38px 600), a
  subtitle, pill inputs for "Your name" and "Email", a select with law
  practice options, a "Message" textarea, and a full-width orange
  "Send Message" button
- **AND** SHALL validate required fields and show a success message on
  submit without navigating away

### Requirement: Brand strip

The system SHALL render a centered logo strip on a top border.

#### Scenario: Brand logos

- **GIVEN** the brand strip is rendered
- **WHEN** the user scrolls to it
- **THEN** SHALL be a row of six varied brand marks (the demo repeats one
  logo image — VARY with six text/logo marks)

### Requirement: Testimonials

The system SHALL render a dark photo-background testimonial carousel with
a heading, quotes, and founder cards.

#### Scenario: Testimonial content

- **GIVEN** the testimonial section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show a dark cover background with the h2
  "What Client Says" and a large quote
- **AND** SHALL show a founder card with a photo, name ("Jacson Kalish" —
  vary), and role ("Legal law Supporter")
- **AND** the carousel SHALL cycle through 2+ testimonials via client-side
  controls

### Requirement: Recent News

The system SHALL render a "Recent News" section with two photo cards.

#### Scenario: News cards

- **GIVEN** the news section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section-tittle SHALL read "Recent News"
- **AND** SHALL show two cards, each with a photo, an eyebrow tag (e.g.
  "Tax I Information"), a 24px title link, a blurb, and a "Read More"
  link (content varied between cards)

### Requirement: CTA band (Why Choose Us)

The system SHALL render a soft `#EFE2E2` CTA band with a heading, text, a
Learn More button, and a phone CTA.

#### Scenario: CTA content

- **GIVEN** the CTA band is rendered
- **WHEN** the user scrolls to it
- **THEN** the band SHALL have a `#EFE2E2` background with a soft shadow
- **AND** SHALL show the h2 "Why Choose Us?" (Roboto `#B40000` 24px), a
  quote paragraph (24px `#2D0000`), a lorem paragraph, and a big red
  "Learn More" button
- **AND** SHALL show "Call For a Free Consulting" with a phone button
  "(89) 673 378-309" on the right

### Requirement: Footer

The system SHALL render a dark `#2D0000` centered footer with logo, blurb,
menu, and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** the footer SHALL have a `#2D0000` background and centered
  content: logo, lorem blurb (text `#AC9191`), and menu links (Home,
  Practice Area, About, Blog, Contact)
- **AND** the copyright bar SHALL show "Copyright © <year> All rights
  reserved" and a "made with" line linking Component Dock
  (https://www.componentdock.com/) — the Colorlib credit is replaced

#### Scenario: Back to top

- **GIVEN** the page is scrolled down
- **WHEN** the user clicks the fixed circular `#B40000` back-to-top button
- **THEN** the page SHALL scroll smoothly to the top

## Verification checklist

- [ ] Spec validates: `npm run spec:validate`
- [ ] TDD: tests written before implementation; `npm run test:coverage` at
      100% lines/functions/branches/statements (per-app gate via
      `scripts/verify-app.sh juris`)
- [ ] Design tokens from this spec applied in `@theme` (brand `#B40000`,
      accent `#FF6F00`, ink `#2D0000`, header-top `#2e0000`, body-text
      `#6B5A5A`, section-bg `#F8F4F4`, cta-bg `#EFE2E2`, footer-muted
      `#AC9191`, card-blurb `#66816A`)
- [ ] Baskervville (400/500) + Roboto (300–900) loaded via Google Fonts
      `<link>` in index.html
- [ ] Section structure + order matches the live DOM 1:1 (header-top →
      nav row → hero → about → practice areas + quote form → brands →
      testimonials → recent news → CTA band → footer → back-to-top)
- [ ] Placeholder images via `https://picsum.photos/seed/juris-<n>/<w>/<h>`
      (hero bg, about portrait, 2 news photos, testimonial founder photo,
      brand marks); NO assets copied from ColorLib
- [ ] Buttons flat radius 0: `.btn` big red (hover sweep `#FF6F00`),
      `btn_1` white/`#B40000`, `btn_2` outline, `.submit-btn` orange
      full-width (hover → white sweep), `.boxed-btn`-style link buttons;
      `browse-btn` Read More links with 2px `#B40000` underline
- [ ] Distinctive shapes: form-wrapper `#B40000` radius `0 140px 0 0`;
      about portrait radius `140px 0 0 0`; `#B40000` experience badge
      (76px 900 number) anchored bottom-right of the portrait; pill form
      inputs (25px radius, `#eaeaea` border)
- [ ] Icons from lucide-react or inline SVG (scales-of-justice logo icon,
      phone/email icons, practice-area icons, social brand paths,
      back-to-top arrow). Verify every lucide export with the typeof
      probe; NO fontawesome / themify / icon fonts
- [ ] Interactivity client-side only: sticky header, mobile menu toggle,
      testimonial carousel, quote-form validation/success (no
      jquery/owl/slick/nice-select/slicknav)
- [ ] Footer phone/email rendered as display strings; any `tel:`/`mailto:`
      hrefs computed at runtime from spaced literals (tel-literal
      redaction pitfall — NEVER write `tel:+...` literals in source)
- [ ] Demo-repeated content varied (brand logos, testimonials, news cards)
      — same kinds of content, no duplicated strings
- [ ] Footer links Component Dock (https://www.componentdock.com/) —
      replaces the original "Colorlib" credit
- [ ] No colorlib.com / preview.colorlib.com strings in any app file
- [ ] TEMPLATES.md: mark BOTH lawyerlegal rows `[x]` (lines 599 and 2127) + surge URL + readme:status when shipped
- [ ] Deploy check: merged PR → Deploy to Surge.sh workflow green + surge
      URL (juris.free.componentdock.com) returns 200
