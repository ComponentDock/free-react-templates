# Template: BuildWell (Construction Company)

## Purpose

A Construction Company template with header navigation, hero, about, stats, portfolio, services, FAQ, testimonial, partners, blog, two CTA bands and a footer with a subscribe widget. Recreation of ColorLib's **Celt** construction company website template.

- **Source:** https://colorlib.com/wp/template/celt/ — HTTP 200, 109,359 B (re-read 2026-10-24)
- **Preview:** https://preview.colorlib.com/theme/celt/ — HTTP 200, 31,820 B, `<title>` "Celt - HTML Construction Website Template" (re-read 2026-10-24)
- **Source slug:** `celt`
- **New name:** `buildwell`
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Category:** Construction / Corporate
- **Source design:** ColorLib "Celt" — https://colorlib.com/wp/template/celt/

## Source map (live preview, re-read 2026-10-24)

| page | status | bytes | notes |
| --- | --- | --- | --- |
| `index.html` | 200 | 31,820 | the directory URL serves this page byte-identical — one no-op nav link |
| `blog.html` | 200 | 18,229 | a **blog-single** page ("Blog Single Post", 3 comments, "Leave a reply", sidebar Category / Populare Posts / Tags) — the reference for the blog cards' detail view |
| every other guessed page (`about`, `contact`, `blog-single`, `project`, `services`, `elements`, …) | 404 | 9 | the theme really is one page + one blog-single page |
| `downloads/free/celt.zip` | 404 | 9 | no archive; the live preview is the only reference |

- **Theme stylesheet:** `css/style.css` — 28,799 B, sha256 `2f934fdfad5f782de6cea2a69acd4c04a01bd4b4aa2762cc320448669019ff84`.
  Vendor sheets beside it (`bootstrap.min.css` 23,729 B, `font-awesome.min.css`, `magnific-popup.css`, `owl.carousel.css`, `owl.theme.default.css`) carry no design tokens — never census them as the palette.
- **Scripts:** `js/main.js` 2,298 B (sliders, sticky nav, accordion, lightbox, preloader); `js/snippet.js` **404** — behaviour lives in `main.js`.
- **Bands, in document order:** `#header` (`#top-navbar`, `#main-navbar`) → `#home.banner-area` → `#about` (band 1 = three image cards, band 2 = `md-section bg-grey` with a half background image) → `#numbers` (`bg-main`) → `#portfolio` (`padding-bottom: 0`) → `#service` (the "Why Choose Us" accordion `#accordion` is nested **inside** this band) → `#cta-1` (`bg-main`) → `#clients` (a background-image wrapper, no content of its own — it hosts the testimonial band) → `#testimonial` → `#partners` → `#blog` → `#cta-2` (`bg-main`, `xs-section`) → `#footer.bg-dark` (`#top-footer`, `#bottom-footer`) → `#preloader`.
- **Anchors: 75** — **65 dead `href="#"`** (the whole desktop/mobile nav is dead: Home · Home version 01/02/03 · About · Projects · Single Project · Project Detail · Services ▾ (Construction/Renovation/Architecture/Painting/Decorating/Consulting) · Blog · Blog page · Blog post page · Contact), 2 × `index.html`, 4 × `./img/projectN.jpg` (magnific-popup lightbox targets), 3 × `#collapse-1|2|3` (accordion toggles), 1 external `https://colorlib.com`. There is no live inner-page link set to mirror.

## Design tokens

The stylesheet's own header comment is the canonical token block — `Body: #64728A`, `Headers: #004`, `Primary: #FFD626`, `Dark: #001232`, `Grey: #F8F8F8 #EEE`, `Fonts: Poppins`. Literal counts below are from `css/style.css` (28,799 B, sha256 `2f934fdfad5f…`), case-folded.

| Token            | Value                                   | Usage                                        |
| ---------------- | --------------------------------------- | -------------------------------------------- |
| `--brand-dark`   | `#001232` (8 hits)                      | Navbar, `.main-button`, `.bg-dark` footer     |
| `--brand-accent` | `#FFD626` (31 hits)                     | `.bg-main` bands, `.secondary-button`, icon glyphs, 4px image underlines |
| `--text-heading` | `#004` = `#000044` (28 hits)            | All `h1..h4`, links, stat numbers             |
| `--text-body`    | `#64728A` (10 hits)                     | Body copy, `.sub-title`, input borders        |
| `--bg-white`     | `#FFF` (14 hits)                        | Content bands, `.bg-img.overlay` wash         |
| `--bg-grey`      | `#F8F8F8` (2 hits)                      | `.bg-grey` About band                         |
| `--line`         | `#EEE` (19 hits)                        | Card hairlines, `.service:hover` shadow       |
| `font-family`    | `"Poppins", sans-serif` (1 rule, on `body`) | Global font                               |
| `body` type      | `16px/24px`, `letter-spacing: 0.3px`    | Global scale                                  |
| Heading scale    | `h1 35px` · `h2 28px` · `h3 20px` · `h4 16px`, weight `700` | Every band title           |
| Section rhythm   | `.md-section 90px` · `.sm-section 60px` · `.xs-section 30px` (top+bottom) | Band padding |
| `border-radius`  | `0px` (buttons, 4 rules) · `50%` (slider dots, 2 rules) | Square buttons, round dots |
| Button padding   | `10px 30px`, `border: 1px solid transparent` | Both button variants                    |
| Button hover     | slide-fill: `:after` grows `height 0% → 100%` in `0.2s` (`.main-button` fills `#FFD626` and turns `#004`; `.secondary-button` fills `#001232` and turns `#FFF`) | No colour fade, no radius |
| Image underline  | `border-bottom: 4px solid #FFD626`      | `.about > img`, `.blog .blog-img`             |
| Icon block       | `60×60`, `line-height: 60px`, `font-size: 35px` | `.number i` (`#004`, left of the 28px number) · `.service i` (`#FFD626`, left of the padded content) |
| Card hover       | `box-shadow: 0 0 10px 3px #EEE`         | `.service:hover`                              |

Poppins availability verified 2026-10-24: `fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap` → **200** (legacy `css?family=Poppins:300,400,500,600,700` also 200). Load 300–700; the sheet uses 700 for all headings and 400 for body.

### Color palette summary

- **Dark navy** `#001232` — navbar, primary button, footer; the dominant brand colour
- **Yellow accent** `#FFD626` — the three full-bleed CTA/stats bands, secondary button, icon glyphs, 4px image rules
- **Heading navy-black** `#000044` (`#004`) — every heading, link, stat number
- **Body grey-blue** `#64728A` — paragraphs and kickers
- **Light greys** `#F8F8F8` / `#EEE` — the About band and hairlines/shadows

## Visual design notes (TEMPLATES.md screenshot + live preview)

- **Top bar** — solid `#001232`, three contact items right-aligned (address · phone · e-mail), each with a **yellow circular outline icon**; text white, ~14px.
- **Main navbar** — white, wordmark left (yellow circular mark + navy bold "Company"), nav right with dropdown carets, magnifier icon last. Becomes `fixed-navbar` once the page scrolls past the top bar's height.
- **Hero** — full-viewport-minus-header band: construction photo under a **white 0.9 wash** (`.bg-img.overlay:after { background:#FFF; opacity:.9 }`), so the background reads as a pale tint and the **headline is navy `#004`**, not white. H1 "We Build Your Dream" (35px/700), grey lead paragraph, then **one** yellow `.secondary-button` "Learn more" — the source has no second hero button.
- **About band 1** — three columns, each: full-width photo with a 4px yellow bottom rule, `h3` title (Certified Experience · The Great Teamwork · Modern Thechnology — the source's spelling), one-line blurb, underlined "Read more" text-link whose yellow underline fills on hover.
- **About band 2** — `#F8F8F8` band with a **half-width background photo** on the left (`about4.jpg`, white 0.9 overlay on `<992px`); content sits in the right 6 columns: yellow-neutral kicker "Subtitle", `h2` "About Us", lead paragraph + paragraph.
- **Stats band** — full-width yellow `#FFD626`, four `.number` blocks (2×2 on mobile): a 60px `#004` icon glyph on the left, 28px number + smaller label to its right (not a centred circle badge). Values: 20 Year Of Experience · 154 Project Completed · 785 Happy Client · 14 Award Won.
- **Portfolio** — kicker "Subtitle" + `h2` "Featured Works", then an **owl carousel**: 1 item (mobile) / 2 (≥480px) / 4 (≥992px), arrows only, loop, no autoplay; each card is an `h3` "Project Title" + "Category" over a photo, click opens a **lightbox** of the 4 project images; a "View All" text-link closes the row. Band has `padding-bottom: 0`.
- **Services** — `h2` "Our Services", 6 `.service` cards in 3 columns (2 on tablet): 35px yellow icon at `left:0, top:20px`, content padded `15px 15px 15px 70px`, title + one-line blurb, hover lifts a `0 0 10px 3px #EEE` shadow. The **same band continues** into "Why Choose Us": kicker + `h2`, a lead paragraph, then a 3-panel Bootstrap accordion (`Certified Experience` open by default; the source keeps the open panel from collapsing on its own header click).
- **CTA band 1** — full-bleed yellow, centred `h2` + `h4` sub-line + navy `.main-button` "Contact Us".
- **Testimonial** — sits on a **background photo with a white 0.9 overlay** (`#clients` wrapper): kicker "Subtitle" + `h2` "Happy Clients", a 1-up owl carousel with dots and autoplay (15px margin); each slide is a quote paragraph + "John Doe / CEO Company".
- **Partners** — six-up logo carousel (2/4/6 items by breakpoint), arrows + autoplay, logos only, no heading.
- **Blog** — kicker "Subtitle" + `h2` "Lastest News" (the source's typo); three cards: photo with 4px yellow rule, meta "10 November 2017 , By John Doe", title, blurb, "Read more" text-link.
- **CTA band 2** — `xs-section` yellow strip: `h3` on the left (9 cols) + navy `.main-button` "Contact Us" on the right (3 cols).
- **Footer** — `#001232`, three 4-column widgets: (1) logo + blurb + contact list with map/phone/envelope glyphs, (2) "Quick Links" title over **two identical 6-link lists** (Home · About Us · Services · Projects · News · Contact Us — the theme ships the duplicate), (3) "Keep in touch" + blurb + **e-mail input + "Subscribe"** form + four social glyphs (facebook, twitter, google-plus, linkedin). Bottom strip: "© Copyright 2017. All Rights Reserved, Created by Colorlib" — replaced in the recreation by the Component Dock credit.
- **Preloader** — `#preloader` fades out 600 ms after `load`.

## Requirements

### Requirement: Header navigation

The page SHALL display a top info bar with contact details and a main navbar with logo, navigation links, and search icon.

#### Scenario: Top navbar shows contact info

- **WHEN** the page loads
- **THEN** I see an address, phone number, and email in the top bar
- **AND** the top bar has a dark navy `#001232` background
- **AND** each contact item carries a circular outline icon in the yellow accent

#### Scenario: Main navbar displays logo and navigation links

- **WHEN** the page loads
- **THEN** I see the BuildWell logo on the left
- **AND** I see nav links: Home, About, Services, Portfolio, Blog, Contact
- **AND** a search icon is present in the navbar
- **AND** the navbar becomes fixed once the page scrolls past the top bar

### Requirement: Hero section

The page SHALL display a hero section with headline, description, and a single primary call to action.

#### Scenario: Hero displays headline and CTA

- **WHEN** the page loads
- **THEN** I see a large headline "We Build Your Dream" in the heading colour `#000044`
- **AND** I see one yellow `#FFD626` "Learn more" button
- **AND** the hero height fills the viewport minus the header

#### Scenario: Hero has a washed background image

- **WHEN** the page loads
- **THEN** the hero shows a construction photograph
- **AND** the photograph is covered by a white overlay at 0.9 opacity, so the band reads as a pale tint rather than a dark scrim

### Requirement: About section

The page SHALL display three feature cards followed by an About Us band.

#### Scenario: About section shows three feature cards

- **WHEN** I scroll to the About section
- **THEN** I see three columns: Certified Experience, The Great Teamwork, Modern Thechnology
- **AND** each card has an image with a 4px yellow bottom rule, a title, a blurb, and a "Read more" text-link

#### Scenario: About Us band with half background image

- **WHEN** I scroll past the feature cards
- **THEN** I see a light `#F8F8F8` band with a half-width background photograph on the left
- **AND** the right half holds the "Subtitle" kicker, the "About Us" heading, and two paragraphs

### Requirement: Stats section

The page SHALL display a yellow stats band with four counters.

#### Scenario: Yellow stats band shows four counters

- **WHEN** I scroll to the Numbers section
- **THEN** I see a full-width `#FFD626` background band
- **AND** four counters are displayed: 20 Year Of Experience, 154 Project Completed, 785 Happy Client, 14 Award Won
- **AND** each counter pairs a 60px dark icon glyph on the left with the number and label to its right

### Requirement: Portfolio section

The page SHALL display a featured works carousel with lightbox previews.

#### Scenario: Featured Works carousel

- **WHEN** I scroll to the Portfolio section
- **THEN** I see the kicker "Subtitle" and the heading "Featured Works"
- **AND** four project cards are displayed with a title and a category line
- **AND** prior/next arrows move the carousel, which shows 1, 2 or 4 cards by breakpoint
- **AND** activating a card opens a lightbox of the project image

### Requirement: Services section

The page SHALL display six service cards with icons and descriptions.

#### Scenario: Six service cards

- **WHEN** I scroll to the Services section
- **THEN** I see the heading "Our Services"
- **AND** six service cards are displayed: Construction, Renovation, Architecture, Painting, Decorating, Consulting
- **AND** each card has a yellow icon glyph, title, and short description
- **AND** hovering a card raises a soft grey shadow

### Requirement: FAQ section

The page SHALL display an interactive accordion FAQ inside the services band.

#### Scenario: Accordion FAQ with three items

- **WHEN** I scroll to the Why Choose Us block
- **THEN** I see the heading "Why Choose Us" and three collapsible panels
- **AND** the first panel is open on load
- **AND** clicking a closed panel expands it and collapses the open one

### Requirement: CTA bands

The page SHALL display two yellow call-to-action bands.

#### Scenario: Mid-page CTA band

- **WHEN** I scroll past the FAQ
- **THEN** I see a full-bleed yellow band with a large heading, a sub-line, and a navy "Contact Us" button

#### Scenario: Pre-footer CTA strip

- **WHEN** I scroll past the Blog section
- **THEN** I see a slim yellow strip with a heading on the left and a navy "Contact Us" button on the right

### Requirement: Testimonial section

The page SHALL display client testimonials over a washed background photograph.

#### Scenario: Testimonial carousel

- **WHEN** I scroll to the Testimonial section
- **THEN** I see the heading "Happy Clients" over a background photograph with a white overlay
- **AND** one quote is shown at a time with its client name and role
- **AND** dots below the quote move between the slides

### Requirement: Partners section

The page SHALL display partner logos.

#### Scenario: Partner logos carousel

- **WHEN** I scroll to the Partners section
- **THEN** I see a row of partner logos
- **AND** the row shows six logos on desktop with arrows to move it

### Requirement: Blog section

The page SHALL display latest news blog cards.

#### Scenario: Latest News with three blog cards

- **WHEN** I scroll to the Blog section
- **THEN** I see the heading "Latest News"
- **AND** three blog cards are displayed with image, date and author meta, title, excerpt, and a "Read more" link

### Requirement: Subscribe widget

The page SHALL display an e-mail subscribe form in the footer's "Keep in touch" widget.

#### Scenario: Footer subscribe form

- **WHEN** I scroll to the footer
- **THEN** I see a "Keep in touch" column with a short blurb
- **AND** I see an e-mail input and a "Subscribe" button
- **AND** a submitted invalid address is reported to the user without a page reload

### Requirement: Footer

The page SHALL display a dark footer with widgets and Component Dock link.

#### Scenario: Dark footer with widgets

- **WHEN** I scroll to the footer
- **THEN** I see a dark navy `#001232` background
- **AND** it contains the BuildWell logo with contact details, a Quick Links column, and the Keep in touch column
- **AND** social media icons are displayed

#### Scenario: Bottom footer copyright

- **WHEN** I scroll to the very bottom
- **THEN** I see a copyright notice
- **AND** a "Component Dock" link is present

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

## App deltas (as shipped, `apps/buildwell`)

Recorded 2026-10-24 while re-reading the live reference — these are **app-side** deviations, not spec errors, and the app is not changed by this prep:

1. **Hero overlay inverted.** The app paints `bg-brand/80` (navy scrim) with a white headline and two buttons (outline + accent). The source washes the photo with **white at 0.9** and uses a **navy** headline and **one** yellow button.
2. **Newsletter band invented.** The app renders a standalone yellow "Subscribe to Our Newsletter" section between Blog and Footer. The source has no such band: the only e-mail form is the footer's "Keep in touch" widget, and the yellow pre-footer strip is a Contact-Us CTA.
3. **Stats badges.** The app centres 16×4 circular navy badges above each number; the source lays a 60px `#004` icon to the **left** of the number and label.
4. The app's Quick Links column lists one link set; the source ships two identical 6-link lists.

## Verification checklist

- [ ] Sections rendered in source order: TopNavbar → Navbar → Hero → About (cards) → About Us band → Stats → Portfolio → Services + FAQ → CTA 1 → Testimonial → Partners → Blog → CTA 2 → Footer
- [ ] Design tokens match the stylesheet: `#001232` navy, `#FFD626` yellow, `#000044` headings, `#64728A` body, `#F8F8F8`/`#EEE` greys, Poppins 300–700
- [ ] Buttons are square (0 radius), `10px 30px`, with the bottom-up slide-fill hover
- [ ] Hero uses the white 0.9 wash with a `#000044` headline and one yellow CTA
- [ ] Stats band is full-bleed `#FFD626` with a 60px icon left of each number
- [ ] Portfolio carousel: 1/2/4 items by breakpoint, arrows, lightbox on card activation
- [ ] Accordion FAQ opens the first panel and swaps panels on click
- [ ] Footer subscribe form validates the e-mail and reports errors inline
- [ ] Footer links to Component Dock
- [x] No references to ColorLib in any app source files
- [ ] Placeholder images via `picsum.photos/seed/buildwell-<n>/`
- [ ] Tests at 100% coverage (lines, functions, branches, statements)
- [ ] `npm run verify:app buildwell` passes
- [x] Footer credits Component Dock with a link to https://www.componentdock.com/
