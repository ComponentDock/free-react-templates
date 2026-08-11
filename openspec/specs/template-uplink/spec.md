# Template: Uplink (Web Hosting Template)

## Purpose

Uplink is a single-page web hosting website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Hosthub" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Hosthub" — web hosting company website template
  (source: https://colorlib.com/wp/template/hosthub/, Bootstrap 4).
- **Preview URL analyzed:** https://preview.colorlib.com/theme/hosthub/
  (HTTP 200, "Hosthub"). Live DOM fetched and parsed, plus `css/style.css`
  (unminified, complete) for tokens; Google Fonts confirmed in the
  stylesheet (Roboto 300/400/500/700 for everything, Open Sans for price
  list links). The screenshot `hosthub-free-template.jpg` was reviewed
  visually in a browser.
- **Visual design (from screenshot):** modern hosting site in white +
  electric purple `#6247ea` + warm orange `#ec9d5f`. Thin orange top strip
  with contact info (left) and a purple "Purchase Hosting" button (right);
  white main header with logo and uppercase nav + search icon. Hero:
  solid purple background, split layout — uppercase white headline "We're
  Web Hosting Professionals" + orange "Explore Our Features" button on the
  left, isometric server-rack illustration with a dotted world map behind on
  the right. Below: white feature cards, pricing table, orange solution
  band, testimonials, purple services band with map pattern, blog cards,
  client logos, near-black `#04091e` footer.
- **Section order (1:1, from the DOM):**
  1. Header — `.top_menu` (bg `#ec9d5f`, 40px): left contact links
     `+880 1234 654 953` + `support@colorlib.com` (12px uppercase white
     Roboto, margin-right 50px, hover `#6247ea`); right `.pur_btn`
     "Purchase Hosting" (bg `#6247ea`, white, 500 12px, line-height 40px,
     padding 0 40px). `.main_menu` (white): logo image left; right-aligned
     nav — Home, About, Services, Pages (dropdown: Blog, Blog Details,
     Elements), Features, Pricing, Blog, Contact — plus search icon
     (`lnr-magnifier`). Sticky on scroll (`.navbar_fixed`).
  2. Hero `.home_banner_area` — solid bg `#6247ea`, `.banner_inner`
     (overflow hidden, padding 225px 0); left `.banner_content` (white):
     h2 36px 500 uppercase "We're Web Hosting Professionals", p 300 white
     opacity .6 max-width 405px (lorem-ish hosting copy), CTA
     `.banner_btn` "Explore Our Features" (bg `#ec9d5f`, white, padding
     0 50px, line-height 50px, radius 5px, hover color `#6247ea`); right
     `.banner_map_img` — dotted world map + isometric server illustration
     (server racks, database cylinder, green/orange status lights).
  3. Features `.feature_area.p_120` — `.main_title` centered: h2 36px 500
     "Some Features that Made us Unique" + p 14px/24px `#777` max-width
     570px; grid of 6 `.feature_item` cards (1px `#eeeeee` border, radius
     10px, padding 60px 20px 60px 30px; hover: shadow
     `0px 10px 30px rgba(98,71,234,0.1)` + border transparent): lnr icon
     24px `#6247ea` + h4 20px 500 `#222222` (margin-bottom 25px) + p.
     DOM repeats "Expert Technicians" ×4 — use six distinct feature names
     (e.g. Expert Technicians, Data Security, 24/7 Support, Fast Servers,
     Easy Setup, Money Back Guarantee). Icons seen: `lnr-cloud`,
     `lnr-earth`, `lnr-screen`, `lnr-inbox`, `lnr-chart-bars`,
     `lnr-lighter`.
  4. Pricing `.price_area.p_120` — bg `#fafcff`; `.main_title` "Choose Your
     Best Pricing Plans"; `.price_inner` (white, radius 10px, shadow
     `0px 10px 30px rgba(98,71,234,0.1)`); 4 `.price_item` columns with a
     1px `#eeeeee` vertical divider between (`.price_text:before`, height
     336px, right edge; hidden on last col): h3 plan name (Basic, Starter,
     Business, Enterprise) 20px 500 `#222`; h5 audience
     (Individuals/Freelancers, Small Companies, Medium Companies, Large
     Companies) 14px 300 `#777`; h2 price (£39/mo … £99/mo) 36px `#222`
     with span 14px 300 `#777`; `.list` li links 14px `#777` Open Sans
     (RAM 1–8 GB, Core CPU 1–8, SSD Storage 20–100 GB, Transfer 1–2 TB,
     Network In 40–100 Gb); `.price_btn` (block, bg `#6247ea`, white,
     line-height 50px, bottom-left/right radius 10px) "Get Started".
  5. Custom solution `.solution_area.p_120` — bg `#ec9d5f`, centered:
     h4 36px white "Looking for a Custom Solution?", p 14px white opacity
     .6 max-width 770px, white CTA "Request Free Consultation"
     (`.white_btn` — white bg, `#222` text, radius 5px, hover `#6247ea`).
  6. Testimonials `.client_says_area.p_120` — 3-column row: left
     `.says_left` h3 "What our Client's Say about us" + p; two
     `.says_item` cards: h4 author (Nellie Vega, Estelle Andrews), h5 role
     ("Head of Marketing, Apple Inc."), p quote (lorem).
  7. Services `.service_area.p_120` — bg `#6247ea` with a map-pattern
     overlay (`.service_area:before`, `img/map-bg.png`); `.main_title.white`
     "Top Services We Provided"; 6 `.service_item` cards (bg
     `rgba(255,255,255,0.1)`, radius 10px, padding 40px 60px 40px 40px,
     border 1px `#9381eb`, margin-bottom 30px; hover: white bg + h4
     `#222222` + p `#777777` opacity 1): h4 18px 500 white with lnr icon
     24px (padding-right 15px) + p white opacity .6. Services: Cloud
     Hosting, Web Hosting, Cloud Computing, VPS Hosting, Server Analytics,
     Data Mining.
  8. Latest blog `.latest_grid_blog_area.p_120` — `.main_title` "Latest
     Posts from Our Blog"; 3 `.l_blog_item` cards (1px `#eeeeee` border,
     radius 10px, padding 60px 30px; hover: shadow
     `0px 10px 30px rgba(98,71,234,0.1)` + border transparent): h6 date
     badge (inline-block, bg `#ec9d5f`, white 300 12px, line-height 30px,
     padding 0 20px, radius 3px) "10 April, 2018"; h4 title 20px `#222222`
     (hover `#6247ea`); p excerpt; `.view_text` meta links (`fa-eye`,
     `fa-commenting`, `fa-share`) 14px `#aaaaaa` with 10px icon gap. (DOM
     repeats one title ×3 — use three distinct hosting blog post titles.)
  9. Client logos `.clients_logo_area.p_120` — bg `#fafcff`; `.clients_slider`
     owl-carousel row of 5 logo images (grayscale, full color on hover).
     Replace with text-based logo placeholders (e.g. styled brand names) —
     never copy the original logo files.
  10. Footer `.footer-area.p_120` — bg `#04091e`; columns: "Top Products"
      (links: Managed Website, Manage Reputation, Power Tools, Marketing
      Service), "Newsletter" (`.subscribe_form`: input 13px border
      `#333333` max-width 340px + `.sub-btn` "Subscribe" bg `#6247ea` 500
      12px line-height 38px padding 0 38px; hover transparent bg),
      "Instagram Feed" (2×4 grid of images — replace with picsum
      placeholders), social icons (`fa-facebook`, `fa-twitter`,
      `fa-dribbble`, `fa-behance`); bottom copyright bar (replace the
      ColorLib credit with monorepo credit, e.g. "© <year> Uplink. All
      rights reserved.").
- **Design tokens extracted from the preview CSS (`style.css`):**
  - Primary brand **electric purple `#6247ea`** — top-bar CTA button, hero
    bg, feature icon + card hover shadow, price button, service section bg
    - card borders (`#9381eb`), newsletter button, footer link hovers.
  - Accent **warm orange `#ec9d5f`** — top menu bar bg, hero CTA
    `.banner_btn`, solution band bg, blog date badge.
  - Neutral palette: `#fff` (header, price inner, card surfaces),
    `#fafcff` (price + clients-logo section backgrounds), `#f9f9ff`
    (hero paragraph text), `#222222` (headings), `#777777` (body/footer
    link text), `#aaaaaa` (blog meta), `#eeeeee` (card borders + price
    dividers), `#04091e` (footer bg), `#333333` (footer input border).
  - Fonts: **"Roboto"** (300/400/500/700) — everything; "Open Sans" only
    for price `.list` links (Google Fonts in the stylesheet; recreation
    loads both via `<link>` in `index.html`).
  - Buttons: `.banner_btn` — bg `#ec9d5f`, white text, `padding: 0 50px`,
    `line-height: 50px`, `border-radius: 5px`, hover text `#6247ea`;
    `.pur_btn` (top bar) — bg `#6247ea`, white 500 12px, `line-height:
40px`, `padding: 0 40px`; `.price_btn` — block, bg `#6247ea`, white,
    `line-height: 50px`, bottom radius 10px; `.sub-btn` (newsletter) — bg
    `#6247ea`, white 500 12px, `line-height: 38px`, `padding: 0 38px`,
    hover transparent.
  - Cards: radius 10px everywhere (features, services, blog, price inner);
    hover shadow `0px 10px 30px 0px rgba(98, 71, 234, 0.1)` +
    transparent border (features, blog); service hover flips to white bg.
  - Section rhythm: `.p_120` padding 120px 0; `.main_title` centered,
    h2 36px 500 `#222222` + p 14px/24px `#777777` max-width 570px,
    margin-bottom 75px; `.main_title.white` white h2 + white p opacity .6
    (used on purple service section).
- **Recreation decisions:** photos (blog thumbs, instagram grid) → seeded
  picsum placeholders (`picsum.photos/seed/uplink-<n>/<w>/<h>`); client
  logos → styled text placeholders; icons → lucide-react (menu, search,
  phone, mail, cloud, globe, monitor, inbox, bar-chart, server, database,
  eye, message-circle, share-2, socials); Roboto + Open Sans via Google
  Fonts `<link>`; brand `#6247ea` + accent `#ec9d5f` in `@theme` so shared
  Button/ButtonLink `primary` variants resolve to them; 5px / 10px radius
  tokens; newsletter form is presentational — validate + show a
  confirmation, no backend; no asset/CSS/font-file copying.

Uplink lives in `apps/uplink` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn) and the repo-standard Navbar/Footer chrome.

## Requirements

### Requirement: Header

The system SHALL render an orange top info bar and a white sticky main
navigation with the site brand and section links.

#### Scenario: Top info bar

- **GIVEN** the Uplink page is rendered
- **WHEN** the page loads
- **THEN** the top bar SHALL show the phone number and email
  (paraphrased to Uplink-branded contact) on the left
- **AND** the top bar SHALL show a "Purchase Hosting" button on the right

#### Scenario: Main navigation

- **GIVEN** the Uplink page is rendered
- **WHEN** the user inspects the header
- **THEN** the header SHALL show the brand logo/name "Uplink" and uppercase
  links Home, About, Services, Features, Pricing, Blog, and Contact that
  anchor to their sections
- **AND** the header SHALL include a Pages dropdown with secondary links

#### Scenario: Sticky header and mobile menu

- **GIVEN** the page is scrolled
- **WHEN** the header passes the top of the viewport
- **THEN** the header SHALL become fixed/sticky
- **GIVEN** the viewport is narrow
- **WHEN** the user activates the hamburger trigger
- **THEN** the navigation links SHALL be revealed in a collapsible menu

### Requirement: Hero

The system SHALL render a full-width purple hero with a split layout:
headline + CTA on the left, an illustration area on the right.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the headline "We're Web Hosting Professionals" in
  large white uppercase text over the purple background
- **AND** it SHALL show a supporting paragraph and an "Explore Our
  Features" button

#### Scenario: Hero illustration

- **GIVEN** the hero is displayed
- **WHEN** the user inspects the right side
- **THEN** the hero SHALL show an illustration area (server-themed graphic
  or abstract motif) hinting at a dotted world map

### Requirement: Features

The system SHALL render a grid of feature cards with icon, title, and
description.

#### Scenario: Feature cards

- **GIVEN** the Features section is displayed
- **WHEN** the user inspects it
- **THEN** it SHALL show a centered heading "Some Features that Made us
  Unique"
- **AND** it SHALL show six feature cards, each with an icon, a title
  (e.g. Expert Technicians, Data Security, 24/7 Support, Fast Servers,
  Easy Setup, Money Back Guarantee), and a short description
- **AND** hovering a card SHALL show a soft purple shadow and lift the
  card border

### Requirement: Pricing

The system SHALL render a four-column pricing table with plan name,
audience, price, feature list, and CTA.

#### Scenario: Pricing plans

- **GIVEN** the Pricing section is displayed
- **WHEN** the user inspects it
- **THEN** it SHALL show a centered heading "Choose Your Best Pricing
  Plans"
- **AND** it SHALL show four plans — Basic, Starter, Business, Enterprise —
  each with an audience label, a monthly price, a list of specs (RAM, CPU,
  SSD, Transfer, Network In), and a "Get Started" button

### Requirement: Custom Solution

The system SHALL render an orange band with a headline and CTA.

#### Scenario: Solution band

- **GIVEN** the Custom Solution section is displayed
- **WHEN** the user inspects it
- **THEN** it SHALL show the headline "Looking for a Custom Solution?" with
  supporting text and a "Request Free Consultation" button

### Requirement: Testimonials

The system SHALL render a left column heading plus two testimonial cards.

#### Scenario: Client testimonials

- **GIVEN** the Testimonials section is displayed
- **WHEN** the user inspects it
- **THEN** it SHALL show the heading "What our Client's Say about us" with
  supporting text on the left
- **AND** it SHALL show two testimonial cards, each with an author name, a
  role, and a quote

### Requirement: Services

The system SHALL render a purple section with a map-pattern background and
a grid of six service cards.

#### Scenario: Service cards

- **GIVEN** the Services section is displayed
- **WHEN** the user inspects it
- **THEN** it SHALL show a centered white heading "Top Services We
  Provided" on the purple background
- **AND** it SHALL show six service cards — Cloud Hosting, Web Hosting,
  Cloud Computing, VPS Hosting, Server Analytics, Data Mining — each with
  an icon, a title, and a short description
- **AND** hovering a card SHALL flip it to a white background with dark
  text

### Requirement: Latest Blog

The system SHALL render a three-column grid of blog post cards.

#### Scenario: Blog cards

- **GIVEN** the Latest Blog section is displayed
- **WHEN** the user inspects it
- **THEN** it SHALL show a centered heading "Latest Posts from Our Blog"
- **AND** it SHALL show three cards, each with a date badge, a title link,
  an excerpt, and view/comment/share meta links

### Requirement: Client Logos

The system SHALL render a row of client logo placeholders.

#### Scenario: Logo row

- **GIVEN** the Client Logos section is displayed
- **WHEN** the user inspects it
- **THEN** it SHALL show a row of five client brand placeholders in
  grayscale that gain color on hover

### Requirement: Footer

The system SHALL render a dark footer with link columns, a newsletter
signup, an image grid, social icons, and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a "Top Products" column of links, a "Newsletter"
  signup input with subscribe button, an "Instagram Feed" image grid, and
  social icons
- **AND** the footer SHALL show a copyright line

#### Scenario: Newsletter validation

- **GIVEN** the newsletter form is displayed
- **WHEN** the user submits an invalid email
- **THEN** the form SHALL show a validation error
- **AND** the form SHALL show a confirmation on successful submission

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Uplink app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header, hero, Features, Pricing,
  Custom Solution, Testimonials, Services, Latest Blog, Client Logos, and
  footer in order
- **AND** the document title SHALL be "Uplink — Hosting Template"

## Verification checklist

- [ ] `openspec/specs/template-uplink/spec.md` present with the REAL section
      list (header → hero → features → pricing → custom solution →
      testimonials → services → latest blog → client logos → footer).
- [ ] Design tokens above (purple `#6247ea`, orange `#ec9d5f`, `#fafcff`,
      `#222222`, `#777777`, `#04091e`, `#9381eb`, Roboto 300/400/500/700 +
      Open Sans, 5px hero CTA radius / 10px card radius, 120px section
      rhythm) captured in the spec.
- [ ] `docs/templates/uplink/tasks.md` has the task outline + design notes.
- [ ] `npm run spec:validate` passes for this spec.
- [ ] Implementer: TDD at 100% coverage, `bash scripts/verify-app.sh uplink`,
      PR lists source (ColorLib Hosthub), preview URL, tokens, and what
      differs.
