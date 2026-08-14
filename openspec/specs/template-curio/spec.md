# Template: Curio (Personal Portfolio / CV)

## Purpose

Curio is a single-page personal portfolio/CV template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Personal" free template (source:
https://colorlib.com/wp/template/personal/), built under a DIFFERENT name
(**Curio** — an old, curious, collectible object; single lowercase word, no
collision with `apps/`, `openspec/specs/`, `docs/templates/` or TEMPLATES.md,
verified 2026-08-14 — per the monorepo naming mandate, never reuse the
ColorLib source name), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a classic ColorLib "one-pager" personal CV site: white
sticky navbar → hero with the person's name and a portrait → about ("Personal
Details") → 6 service cards with colored circle icons → a bright indigo→blue
gradient stats band (4 counters) → filterable portfolio grid → testimonial
slider → 4-column pricing with hover-reveal "Buy Now" → 3 blog posts → brand
logo strip on the same gradient → dark navy footer with newsletter. The whole
page is driven by ONE accent family: periwinkle `#8490ff` → light blue
`#62bdfc` gradient, Poppins type, square-ish buttons, alternate section
backgrounds (`#f9f9ff` lavender-white on content bands, white elsewhere).
Curio recreates that structure 1:1 with matching layout, tokens,
typography, and content kinds (no ColorLib assets copied — placeholder
images via `https://picsum.photos/seed/curio-<n>/<w>/<h>`, icons from
`lucide-react`).

> NAMING NOTE: the ColorLib source name "Personal" is FORBIDDEN as the app
> name. **Curio** is the new, original name. Source slug + preview URL are
> recorded below. The slug `personal` appears TWICE in TEMPLATES.md (line
> 472 under **Bootstrap (216)** and line 2413 under **Personal (53)** — a
> duplicate category row); BOTH rows must be marked `[x]` with the same
> surge URL at ship time.

## Design reference (replication findings)

- **Original:** ColorLib "Personal". Listed in TEMPLATES.md at line 472
  (category **Bootstrap (216)**) and DUPLICATE row line 2413 (category
  **Personal (53)**) — same slug, same preview screenshot. Free one-page
  personal portfolio/CV template.
- **Live preview DOM — REACHABLE (verified 2026-08-14):**
  `https://preview.colorlib.com/theme/personal/` returns HTTP 200 (35,976
  bytes HTML). Stylesheets: `css/main.css` (67,369 bytes — ALL the design
  tokens below) + `css/bootstrap.css`, `css/font-awesome.min.css`,
  `css/linearicons.css`, `css/owl.carousel.css` (testimonial slider),
  `css/magnific-popup.css` (portfolio zoom), `css/nice-select.css`,
  `css/animate.min.css`, `css/jquery-ui.css`. Scripts: jquery, bootstrap,
  owl.carousel, counter-up, etc. Structure, copy, and tokens below are from
  the live DOM + `main.css`, cross-checked against the rendered screenshot.
- **Visual design (screenshot `personal-free-template.jpg`, 1200×946 JPG —
  browser-verified 2026-08-14):** clean, modern, whitespace-heavy personal
  portfolio one-pager. White header + hero. Hero: small-caps "THIS IS ME"
  over a huge bold "PHILIP GILBERT", a short placeholder paragraph, and a
  bright indigo→blue gradient "DISCOVER NOW" button; the right side holds a
  portrait photo (young man, glasses, beanie, green sweater) framed by a
  large rounded-corner periwinkle `#8490ff` square behind it (layered
  effect). The bottom edge shows the next section: "ABOUT ME" small caps +
  "PERSONAL DETAILS" heading with the image left / text right. Menu is
  uppercase sans-serif: HOME, ABOUT, SERVICES, PORTFOLIO, PRICING, BLOG
  (dropdown), PAGES (dropdown), CONTACT. Accent = vibrant periwinkle/indigo
  `#8490ff`; headings near-black, body copy light gray; font reads as a
  clean geometric sans (Poppins per CSS).
- **Section order (1:1 from live DOM):**
  1. **Navbar** — `header#header` (white, fixed/sticky) → logo "Personal"
     (diamond icon + wordmark, left) → `ul.nav-menu` (right): Home, About,
     Services, Portfolio, Pricing, Blog (dropdown: Blog Home, Blog Single),
     Pages (dropdown), Contact. Links `#333`, hover indigo; 2px animated
     underline on hover. Mobile: hamburger + slide-in menu.
  2. **Hero/banner** — `section.banner-area`: left column
     (`banner-left`): small-caps eyebrow "THIS IS ME", `<h1>` "Philip
     Gilbert" (big, bold), placeholder paragraph (the "Dickens Pattern"
     copy), `.primary-btn` "DISCOVER NOW". Right column: portrait image
     behind a rounded-corner periwinkle square frame (decorative block,
     `#8490ff` ~70% opacity layered behind the photo).
  3. **Home About** — `section.home-about-area pt-120` (WHITE): eyebrow
     "ABOUT ME", `<h1 class="text-uppercase">` "Personal Details"; left:
     about image (the same person pointing up); right: 1–2 paragraphs +
     `.primary-btn` "VIEW FULL DETAILS".
  4. **Services** — `section.services-area section-gap` (`#f9f9ff` bg):
     centered `<h1 class="mb-10">` "My Offered Services" + subtitle; grid
     of 6 `.single-services` cards: **Web Design, Web Development,
     Photography, Clipping Path, Apps Interface, Graphic Design** — each a
     colored CIRCLE with a white icon (linearicons) + card title + short
     blurb; hover: circle inverts (white bg, colored border, icon becomes
     indigo gradient text).
  5. **Facts** — `section.facts-area section-gap` (INDIGO GRADIENT band,
     white text): 4 `.single-fact` counters: **2536 Projects Completed,
     6784 Happy Clients, 2239 Cups of Coffee, 435 Real Professionals**
     (big white numbers + white labels). Animated count-up on scroll.
  6. **Portfolio** — `section.portfolio-area section-gap` (`#f9f9ff` bg):
     centered `<h1 class="mb-10">` "Our Latest Featured Projects";
     filter tabs: **All, Vector, Raster, UI/UX, Printing**; responsive
     grid of `.thumb` image cards (titles: 2D Vinyl Design, Creative
     Poster Design, Embosed Logo Design, 3D Helmet Design, …) — hover:
     indigo gradient overlay + zoom icon (`img-pop-up`). Filtering
     client-side.
  7. **Testimonial** — `section.testimonial-area section-gap` (white):
     centered `<h1 class="mb-10">` "Client's Feedback About Me"; owl
     carousel of quote cards — a quote paragraph, 5-star row, author name
     (**Harriet Maxwell** — CEO at Google, **Carolyn Craig** — CEO at
     Facebook), avatar. Prev/next or dots navigation.
  8. **Pricing** — `section.price-area section-gap` (`#f9f9ff` bg):
     centered `<h1 class="mb-10">` "Choose Your Plan"; 4 `.single-price`
     cards: **Economy £199.00, Business £299.00, Premium £399.00,
     Exclusive £499.00** — each with package number (01–04), features
     list (**Secure Online Transfer, Unlimited Styles for interface,
     Reliable Customer Service**), and a hidden "Buy Now" button that
     appears on hover; hover also flips the whole card to the indigo
     gradient with white text.
  9. **Recent Blog** — `section.recent-blog-area section-gap` (white):
     centered `<h1 class="mb-10">` "Latest posts from our blog"; 3
     `.single-recent-blog` cards (image, meta "Mark Wiens" + date, title):
     **"Break Through Self Doubt And Fear"**, **"Portable Fashion for
     young women"**, **"Do Dreams Serve As A Premonition"**.
  10. **Brands** — `section.brands-area` (INDIGO GRADIENT band): row of
      brand logo images (`brand-wrap`), grayscale/white-ish.
  11. **Footer** — `footer.footer-area section-gap` (`#04091e` near-black
      navy): 3 widgets — **About Me** (text), **Newsletter** ("Stay
      updated with our latest trends", email input "Enter Email Address"
      - subscribe button), **Follow Me** ("Let us be social" + social
        icon row); bottom bar: "Copyright © … All rights reserved | This
        template is made with ♥ by Colorlib" → REPLACE the Colorlib
        attribution with the mandatory Component Dock link
        (`https://www.componentdock.com/`).
- **Buttons (`.primary-btn`, from CSS):** `background: #8490ff`, `color:
#fff`, `line-height: 42px`, `padding: 0 30px`, `font-weight: 500`,
  `border: none`, `display: inline-block`, NO border-radius (square), text
  uppercase; hover/active → indigo→blue gradient (`background:
-moz-linear-gradient(0deg, #8490ff 0%, #62bdfc 100%)` — shared rule with
  `.facts-area`, `.brands-area`, `.price-area .single-price:hover`,
  `.about-banner`). "DISCOVER NOW" and "VIEW FULL DETAILS" both use it.
- **Service icon circles:** colored circle, white icon inside; colors seen
  in `main.css`: `#4cd3e3` cyan, `#38a4ff` blue, `#f4e700` yellow,
  `#f44a40` red, `#e66686` pink, `#73fbaf` green (+ sheet variants
  `#6382e6`, `#f09359`, `#a367e7`). Hover: `background: #fff` + colored
  `1px` border, icon text gets the `#8490ff → #62bdfc` gradient
  (`-webkit-background-clip: text`). Map each of the 6 services to one of
  the 6 core colors.
- **Pricing hover:** `.price-area .single-price:hover` gets the indigo
  gradient; `.bottom-part .price-btn` (white bg, `#222` text, weight 600,
  `padding: 10px 50px`) is `display: none` by default and `display: block`
  on card hover — the "Buy Now" button REVEALS on hover.
- **Facts/brands bands:** same gradient rule as buttons — solid indigo →
  light-blue horizontal band; facts numbers/labels and brand logos sit on
  it (white).
- **Spacing rhythm:** `.section-gap { padding: 120px 0 }` on every content
  band; `.pt-120` (120px top) on the about section; hero banner taller.
  Section headings centered with `margin-bottom: 10px` (`mb-10`) + a
  subtitle line beneath.
- **Responsive (source CSS):** Bootstrap grid — content bands keep
  `120px 0` padding at desktop; on mobile the hero stacks (text over
  image), the 6 service cards / 4 facts / 4 price cards / 3 blog cards
  collapse to single column, nav collapses to the hamburger slide-in.
  Scale section padding down (e.g. `py-16`–`py-24`) per repo conventions.

## Design tokens (verified from live stylesheet `css/main.css` + rendered screenshot, 2026-08-14)

- **Brand colors:**
  - `#8490ff` — periwinkle/indigo PRIMARY (buttons, icon circles' gradient
    start, facts/brands bands, hover states; `background: #8490ff` appears
    17× in the sheet).
  - `#62bdfc` — light blue, gradient END of the brand gradient
    (`#8490ff 0% → #62bdfc 100%`).
  - `#f9f9ff` — light lavender-white SECTION background (services,
    portfolio, price areas; `background: #f9f9ff` 12×).
  - `#ffffff` — white page/hero/about/blog backgrounds + cards.
  - `#04091e` — near-black navy FOOTER background.
  - `#333333` — nav link color; `#222` — price-btn text / dark headings
    base; body copy gray (`#777`-ish in footer, lighter gray in sections).
  - Service icon circle colors: `#4cd3e3` cyan, `#38a4ff` blue,
    `#f4e700` yellow, `#f44a40` red, `#e66686` pink, `#73fbaf` green.
- **Fonts:** **Poppins** — `font-family: "Poppins", sans-serif` (body +
  headings, 3 occurrences in `main.css`; the classic ColorLib Poppins
  stack). Load via Google Fonts `<link>` in `index.html` (400/500/600/700).
  Headings bold, near-black; eyebrow labels small-caps/uppercase, letter-
  spaced, indigo or gray.
- **Buttons:** `.primary-btn` — solid `#8490ff`, white uppercase text,
  line-height 42px, padding `0 30px`, weight 500, NO radius (square
  corners), hover → `#8490ff → #62bdfc` gradient. Price "Buy Now":
  white bg, `#222` text, weight 600, `padding: 10px 50px`, hidden until
  card hover. Newsletter subscribe: small solid button beside the input.
- **Radii:** buttons square (0); the decorative hero frame behind the
  portrait has large rounded corners (`border-radius: ~30px`-ish — the
  screenshot shows a soft rounded square; source uses a `.banner-img`
  overlay with rounded `background: #8490ff`); service icon circles fully
  round; image thumbs square with a rounded overlay on hover.
- **Shadows:** none prominent at rest; portfolio thumbs get an indigo
  gradient overlay on hover; price cards lift/flip on hover (transition
  `all 0.3s ease 0s`).
- **Spacing rhythm:** `.section-gap` = `120px 0`; hero `pt-120`-scale;
  section heading `margin-bottom: 10px` + subtitle; cards ~30px gutter
  (Bootstrap `col-lg-4`/`col-lg-3` grid); facts `col-lg-3 col-md-6`
  (4-up desktop, 2-up tablet, 1-up mobile); services `col-lg-4` (3-up);
  price `col-lg-3` (4-up); blog `col-lg-4` (3-up).
- **Icons:** linearicons (source) → **lucide-react** equivalents: diamond
  logo mark (use a lucide icon e.g. `Gem`), service icons (Web Design →
  `Palette`/`PenTool`, Web Development → `Code`, Photography → `Camera`,
  Clipping Path → `Scissors`, Apps Interface → `Smartphone`, Graphic
  Design → `Layout`/`Brush`), portfolio hover zoom → `Maximize`/`Search`,
  social (Facebook/Twitter/Instagram/Github/Dribbble), quote stars →
  `Star`, newsletter `Send`/`ArrowRight`.
- **Images:** NO ColorLib assets — placeholders via
  `https://picsum.photos/seed/curio-<n>/<w>/<h>`: hero portrait
  (curio-1, ~570×700), about image (curio-2, ~540×450), 6 portfolio thumbs
  (curio-3..8, ~600×450), 3 blog images (curio-9..11, ~350×230), brand
  logos (curio-12..17, ~120×40), testimonial avatars (curio-18..19,
  80×80), hero decorative frame = pure CSS rounded square in `#8490ff`.
- **Gradients:** brand gradient `linear-gradient(0deg, #8490ff 0%,
#62bdfc 100%)` on: primary buttons (hover), facts band, brands band,
  price-card hover, about-banner, portfolio thumb overlay.

## Requirements

### Requirement: Navbar

The system SHALL render a white sticky navbar with a logo ("Curio" — diamond
icon + wordmark) on the left and a menu on the right: Home, About, Services,
Portfolio, Pricing, Blog (dropdown: Blog Home, Blog Single), Pages
(dropdown), Contact — matching the reference's uppercase nav.

#### Scenario: Navbar layout

- **GIVEN** the Curio page is rendered
- **WHEN** the page loads
- **THEN** a white navbar SHALL be fixed at the top with the Curio logo
  (icon + wordmark) on the left and the menu links on the right
- **AND** menu items SHALL be uppercase, `#333`, and turn indigo on hover
  with the reference's 2px animated underline

#### Scenario: Dropdown menus

- **GIVEN** the navbar is displayed
- **WHEN** the user hovers/activates the "Blog" or "Pages" item
- **THEN** a dropdown SHALL reveal its sub-items ("Blog Home", "Blog
  Single" under Blog; placeholder pages under Pages)

#### Scenario: Mobile menu

- **GIVEN** the Curio page is rendered on a viewport ≤768px
- **WHEN** the user opens the hamburger
- **THEN** the menu SHALL slide in and all items SHALL be reachable, with
  `aria-expanded` on the toggle

#### Scenario: Section anchors

- **GIVEN** the navbar is displayed
- **WHEN** the user clicks Home / About / Services / Portfolio / Pricing /
  Blog
- **THEN** the page SHALL smooth-scroll to the matching section

### Requirement: Hero banner

The system SHALL render the hero: left column with small-caps eyebrow "THIS
IS ME", a huge bold name heading, a short paragraph, and a square
indigo "DISCOVER NOW" button; right column with a portrait placeholder
behind a rounded periwinkle `#8490ff` square frame.

#### Scenario: Hero layout and content

- **GIVEN** the Curio page is rendered
- **WHEN** the user views the top of the page
- **THEN** the hero SHALL show the eyebrow "THIS IS ME", the name heading
  (bold, near-black, large), one paragraph of placeholder copy, and the
  "DISCOVER NOW" primary button on the left
- **AND** a portrait image SHALL be shown on the right, framed by a
  rounded-corner `#8490ff` square behind it (layered decorative frame)

#### Scenario: Hero CTA

- **GIVEN** the hero is displayed
- **WHEN** the user clicks "DISCOVER NOW"
- **THEN** the page SHALL scroll to the About section (or follow the
  button's link)

### Requirement: Home About section

The system SHALL render the about section: eyebrow "ABOUT ME", uppercase
heading "Personal Details", an image on the left, and text + a
"VIEW FULL DETAILS" primary button on the right, on a white background.

#### Scenario: About layout and content

- **GIVEN** the Curio page is rendered
- **WHEN** the user scrolls past the hero
- **THEN** the about section SHALL show "ABOUT ME" and "Personal Details"
  headings with an image left and paragraphs right
- **AND** a "VIEW FULL DETAILS" primary button SHALL be present under the
  paragraphs

### Requirement: Services section

The system SHALL render "My Offered Services" (`#f9f9ff` background) with
exactly six service cards — Web Design, Web Development, Photography,
Clipping Path, Apps Interface, Graphic Design — each with a colored circle
icon (six distinct colors) and a short blurb.

#### Scenario: Six service cards

- **GIVEN** the services section is displayed
- **WHEN** the user views it
- **THEN** exactly six cards SHALL render with the reference titles and a
  short blurb each
- **AND** each card SHALL show a circular icon in one of the six reference
  colors (cyan `#4cd3e3`, blue `#38a4ff`, yellow `#f4e700`, red `#f44a40`,
  pink `#e66686`, green `#73fbaf`) with a white icon

#### Scenario: Service card hover

- **GIVEN** a service card is displayed
- **WHEN** the user hovers it
- **THEN** the circle SHALL invert (white background, colored border) and
  the icon SHALL take the indigo→blue gradient text treatment

### Requirement: Facts band

The system SHALL render a full-width indigo→blue gradient band with four
counters: 2536 Projects Completed, 6784 Happy Clients, 2239 Cups of Coffee,
435 Real Professionals — big white numbers with white labels.

#### Scenario: Four counters

- **GIVEN** the facts band is displayed
- **WHEN** the user scrolls to it
- **THEN** the band SHALL show the gradient background with the four
  counter values and labels in white
- **AND** the numbers SHALL animate count-up when scrolled into view (or
  render statically if animation is not feasible — values MUST match)

### Requirement: Portfolio section

The system SHALL render "Our Latest Featured Projects" (`#f9f9ff`
background) with filter tabs (All, Vector, Raster, UI/UX, Printing) and a
responsive image grid whose items filter client-side by category.

#### Scenario: Filter tabs and grid

- **GIVEN** the portfolio section is displayed
- **WHEN** the user views it
- **THEN** the filter tabs (All, Vector, Raster, UI/UX, Printing) SHALL
  render above a responsive grid of at least 6 placeholder project images
  with reference-style titles
- **AND** clicking a tab SHALL show only the matching items ("All" shows
  everything), with the active tab highlighted

#### Scenario: Thumb hover overlay

- **GIVEN** a portfolio thumb is displayed
- **WHEN** the user hovers it
- **THEN** an indigo→blue gradient overlay with a zoom icon SHALL appear
  over the image

### Requirement: Testimonial slider

The system SHALL render "Client's Feedback About Me" (white background) as a
slider of quote cards — quote paragraph, 5-star rating row, author name and
role (e.g. Harriet Maxwell — CEO at Google, Carolyn Craig — CEO at
Facebook), avatar — with navigation.

#### Scenario: Quote cards

- **GIVEN** the testimonial section is displayed
- **WHEN** the user views it
- **THEN** at least two quote cards SHALL be defined with quote, five
  stars, author name, role, and avatar placeholder
- **AND** the slider SHALL expose prev/next (and/or dots) navigation and
  SHALL be keyboard-operable

### Requirement: Pricing section

The system SHALL render "Choose Your Plan" (`#f9f9ff` background) with four
plan cards — Economy £199.00, Business £299.00, Premium £399.00, Exclusive
£499.00 — each with a package number, the reference features (Secure Online
Transfer, Unlimited Styles for interface, Reliable Customer Service), and a
"Buy Now" button that appears on hover; hovering the card flips it to the
indigo gradient.

#### Scenario: Four plan cards

- **GIVEN** the pricing section is displayed
- **WHEN** the user views it
- **THEN** four plan cards SHALL render with the reference names, prices,
  package numbers (01–04), and the three feature lines

#### Scenario: Hover reveal

- **GIVEN** a plan card is displayed
- **WHEN** the user hovers it
- **THEN** the card SHALL flip to the indigo→blue gradient with white text
  and a white "Buy Now" button SHALL appear

### Requirement: Recent blog section

The system SHALL render "Latest posts from our blog" (white background)
with three post cards — image, meta (author + date), title ("Break Through
Self Doubt And Fear", "Portable Fashion for young women", "Do Dreams Serve
As A Premonition").

#### Scenario: Three post cards

- **GIVEN** the blog section is displayed
- **WHEN** the user views it
- **THEN** three post cards SHALL render with a placeholder image, author
  meta, and the reference-style titles

### Requirement: Brands band

The system SHALL render a full-width indigo→blue gradient band with a row of
grayscale brand logo placeholders.

#### Scenario: Brand logos

- **GIVEN** the brands band is displayed
- **WHEN** the user scrolls to it
- **THEN** a row of 4–6 brand logo placeholders SHALL render on the
  gradient background

### Requirement: Footer

The system SHALL render the `#04091e` dark navy footer with three widgets —
About Me (text), Newsletter ("Stay updated with our latest trends", email
input + subscribe), Follow Me ("Let us be social", social icon row) — and a
bottom bar whose attribution links `https://www.componentdock.com/`
("Component Dock", mandatory convention replacing the source's "made with ♥
by Colorlib" line).

#### Scenario: Footer widgets

- **GIVEN** the Curio page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** the footer SHALL show the About Me text, the Newsletter widget
  with an "Enter Email Address" input and subscribe control, and the
  Follow Me social icons on the `#04091e` background

#### Scenario: Component Dock attribution

- **GIVEN** the footer is displayed
- **WHEN** the user views the bottom bar
- **THEN** the copyright line SHALL include a link to
  `https://www.componentdock.com/` branded "Component Dock" (e.g. "More
  templates at Component Dock")

#### Scenario: Newsletter submit

- **GIVEN** the newsletter input is displayed
- **WHEN** the user submits an email
- **THEN** the form SHALL validate the email (block invalid input) and show
  a success/error state — never a silent failure

### Requirement: Global tokens and responsive behavior

The system SHALL put the design tokens in `@theme` (Tailwind v4) and use
them via Tailwind classes; the page SHALL collapse gracefully to single
column on mobile.

#### Scenario: Theme tokens

- **GIVEN** the app is built
- **WHEN** the CSS is inspected
- **THEN** `@theme` SHALL define `--color-brand: #8490ff`, the gradient
  stops, `#f9f9ff` section bg, `#04091e` footer, the six service circle
  colors, and Poppins as the font family

#### Scenario: Mobile layout (≤768px)

- **GIVEN** the Curio page is rendered on a mobile viewport
- **WHEN** the page is displayed
- **THEN** hero, about, services, portfolio, pricing, and blog sections
  SHALL stack to single column with reduced section padding
- **AND** the navbar SHALL collapse to the hamburger menu
- **AND** no horizontal scroll SHALL occur

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-curio`
- [ ] `scripts/verify-app.sh curio` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with reference): sticky white Navbar (logo +
      Home/About/Services/Portfolio/Pricing/Blog/Pages/Contact, Blog+Pages
      dropdowns, mobile hamburger) → Hero ("THIS IS ME" / "Philip Gilbert"
      / paragraph / "DISCOVER NOW", portrait + rounded `#8490ff` frame) →
      About ("ABOUT ME" / "Personal Details", image left, text +
      "VIEW FULL DETAILS") → Services ("My Offered Services", 6 cards with
      colored circle icons, `#f9f9ff` bg) → Facts (gradient band, 2536 /
      6784 / 2239 / 435) → Portfolio ("Our Latest Featured Projects",
      All/Vector/Raster/UI/UX/Printing tabs + grid, `#f9f9ff` bg) →
      Testimonial ("Client's Feedback About Me", slider + stars) → Pricing
      ("Choose Your Plan", 4 cards, hover reveal) → Blog ("Latest posts
      from our blog", 3 cards) → Brands (gradient logo band) → Footer
      (`#04091e`, About Me / Newsletter / Follow Me + Component Dock link)
- [ ] Brand tokens in `@theme`, used via Tailwind classes: `#8490ff` →
      `#62bdfc` gradient, `#f9f9ff` section bg, `#04091e` footer, `#333`
      nav, six service circle colors
- [ ] Font: Poppins via Google Fonts `<link>` in `index.html`; title
      "Curio — Personal Portfolio"
- [ ] Primary buttons square (`#8490ff`, white uppercase, px-30/42px
      line-height), hover = gradient; price "Buy Now" hidden → shown on
      card hover with gradient card flip
- [ ] No ColorLib assets: picsum placeholders (`curio-<n>` seeds), lucide
      icons, CSS-drawn hero frame; NO colorlib strings anywhere in `apps/`
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md: mark BOTH `personal` rows `[~]` → `[x]` + surge URL +
      `npm run readme:status` done by implementer at ship time (line 472 —
      Bootstrap (216) category, AND duplicate row line 2413 — Personal
      (53) category; same URL `https://curio.free.componentdock.com`)
- [ ] PR description MUST note: (a) source template + preview URL
      (`https://preview.colorlib.com/theme/personal/`), (b) design tokens,
      (c) the duplicate TEMPLATES.md row situation, (d) paraphrased copy +
      placeholder images
