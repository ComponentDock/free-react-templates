# Template: Consilio (Consulting)

## Purpose

Consilio is a single-page consulting business template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Consultingbiz" business consulting website template design
(see TEMPLATES.md, Consulting category, line 365), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Consultingbiz" — professional corporate consulting
  landing page: top info bar + transparent navbar over a full-screen hero
  slider, icon service cards, a split support/company section (red diagonal
  stripe block + dark navy panel), video intro with play button, two case
  study blocks (4-image strip + 3 detailed cards with metric chips), a
  gradient navy CTA banner, dark testimonial carousel, animated counters,
  team grid, 3-tier pricing with monthly/yearly toggle, FAQ accordion,
  want-to-work CTA, blog cards, brand logo strip, and a dark multi-column
  footer with newsletter form (source:
  https://colorlib.com/wp/template/consultingbiz/).
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/consultingbiz/`
  (HTTP 200, ~56KB HTML). DOM + `assets/css/style.css` (381KB, Bootstrap-based)
  extracted and analyzed; tokens below come from that stylesheet. Screenshot
  `consultingbiz-free-template.jpeg` viewed in browser and live preview
  visually inspected.
- **Visual design (from screenshot + live preview):** corporate navy +
  red-CTA consulting aesthetic. Hero is a full-width background-image slider
  (businessman at laptop photo, dark overlay) with left-aligned white text:
  small red eyebrow "COMMITTED TO SUCCESS", big bold headline "We help to grow
  your business", lorem subtext, and a solid red uppercase "OUR SERVICES"
  button. Deep navy `#14435c` is the dominant brand color (navy hover states,
  CTA banner gradient, footer-adjacent dark sections); accent red `#ff2143`
  for primary buttons and highlights; section eyebrows are pink-red `#eb566c`
  uppercase with a short 54px line before them. Split "Our Best Services"
  section: LEFT a red block with subtle diagonal stripes holding a meeting
  photo, RIGHT a dark navy panel with heading + copy + red "MORE ABOUT US"
  button. Counters row: 3 white boxes + one red-highlighted middle box
  ("480 Active Clients"). Footer is near-black `#11141b` with a newsletter
  form, phone/email, two link lists, and social icons. Typography: Roboto
  for headings (weight 500, color `#092c3f`), Poppins for body/buttons.
- **Section order (1:1) from the DOM:**
  1. Header (`header.header-area`): `header-top` bar (hidden below lg) with
     hours "MON - SAT: 6.00 AM - 10.00 PM" / "SUN: CLOSED" on the left and
     social icon links (Facebook, Twitter, LinkedIn, Google Plus) on the
     right; `main-header` below it: logo image (`assets/img/logo/logo.webp`,
     150×30, alt "ConsultingBiz") left, `nav` with links Home, About
     (dropdown: About Us, Testimonials), Services (dropdown: All Services,
     Service Details), Portfolio, Blog (dropdown: Blog Details), Contact
     (dropdown: Careers) — link color `#0d2d3e`, hover `#14435c`, 16px,
     `padding: 39px 19px`, dropdown bg `#0d2d3e` — and a dark "Get Free
     Consultation" button (`.btn-black`, bg `#0b1416`) on the right.
  2. Hero slider (`div.slider-area`, 2 slides): each slide = background image
     (`assets/img/slider/slider-img-1.jpg`) with dark overlay, left-aligned
     content: eyebrow "Committed to success" (small, uppercase, red line
     accent), `h1` "We help to grow your business" (large white), lorem
     subtext, red uppercase CTA "OUR SERVICES" (`.hero-btn`, padding
     30px 38px, bg `#ff2143`, radius 5px).
  3. Top services (`div.categories-area.section-padding30`): section header —
     eyebrow "Our Top Services" + `h2` "Our Best Services" — then 3 icon
     cards in a row: Strategy Planning, Insurance Service, Audit &
     Evaluation (icon + `h3` title + blurb + link).
  4. Company support split (`div.support-company-area.pt-100.pb-100.section-bg.fix`):
     two-column split; left = red block with diagonal stripe pattern holding
     the "Business consultation meeting" image; right = dark navy panel with
     `h2` "Our Best Services", two paragraphs, red "MORE ABOUT US" button.
  5. Video intro (`div.video-intro-area`): video thumbnail image + round
     play button (glightbox lightbox in the original; recreation: decorative
     button or no-op), `h2` "See How We Transform Businesses", paragraph,
     and a 4-item checkmark list (video-intro stats).
  6. Featured case studies (`div.services-area.section-padding3`): eyebrow
     "Our Portfolios of Cases" + `h2` "Featured Case Study" + 4 equal cards
     (image, small "Strategy planing" tag, title link "Within the
     construction industry as their overdraft").
  7. Case studies (`div.case-studies-area`): eyebrow "Success Stories" +
     `h2` "Our Case Studies" + 3 detailed cards: category tag
     (FINANCE / HEALTHCARE / MANUFACTURING), `h4` title link (e.g. "Digital
     Transformation for Regional Bank"), blurb, "Client: <name>" line, and a
     metric chip (+45% efficiency / -30% wait time / $2M saved).
  8. CTA banner (`div.cta-banner-area`): `background: linear-gradient(135deg,
#14435c 0%, #06151d 100%)`, centered `h2` "Ready to Transform Your
     Business?", white solid button "Get Free Consultation"
     (`.btn-cta-primary`: bg `#fff`, color `#14435c`, padding 15px 35px,
     radius 5px; hover bg `#092c3f`) + white outline button "View Our
     Services" (`.btn-cta-secondary`: transparent, 2px `#fff` border).
  9. Testimonials (`div.testimonial-area.testimonial-padding`, dark bg image
     `assets/img/gallery/section_bg04.webp`): carousel with one visible
     quote + author, Previous/Next slide buttons.
  10. Counters (`div.count-down-area.pb-120`): 4 stat boxes — 8705 Projects
      Completed, 480 Active Clients (red background, white text, highlighted),
      626 Cups of Coffee, 9774 Happy Clients.
  11. Team (`div.team-area.section-padding30`): eyebrow "Our Professional
      Members" + `h2` "Our Team Members" + 3 team cards (photo, name e.g.
      "Ethan Welch", role e.g. "UX Designer").
  12. Pricing (`div.pricing-area.section-bg`, bg image
      `assets/img/gallery/section_bg02.webp`): eyebrow "Our Pricing Plans" +
      `h2` "Choose Your Plan" + Monthly/Yearly toggle with "Save 20%" label +
      3 plans:
      - Starter — "For small businesses", $499/month: Initial Business
        Assessment, Monthly Strategy Session, Email Support, Basic Analytics
        Report, Dedicated Consultant, 24/7 Priority Support; "GET STARTED"
        button.
      - Professional — "For growing companies", $999/month, "MOST POPULAR"
        badge; "GET STARTED" button.
      - Enterprise — "For large organizations"; "CONTACT US" button.
  13. FAQ (`div.faq-area`): eyebrow "Got Questions?" + `h2` "Frequently Asked
      Questions" + accordion with 5 items (first expanded): "What types of
      businesses do you work with?", "How long does a typical consulting
      engagement last?", "What makes ConsultingBiz different from other
      consulting firms?", "Do you offer remote consulting services?", "How do
      I get started with a consultation?".
  14. Want-to-work CTA (`div.wantToWork-area.w-padding2.section-bg`, bg image
      `assets/img/gallery/section_bg03.webp`): `h2` "Are you Searching For a
      First-Class Consultant?" + "MORE ABOUT US" button.
  15. Blog (`div.home-blog-area.section-padding30`): eyebrow "Recent News of
      us" + `h2` "Our Recent Blog" + 3 blog cards (meta "By Admin - October
      27, 2032", title link e.g. "16 Easy Ideas to Use in Everyday", excerpt,
      "Read More" link).
  16. Brands (`div.brand-area.pb-140`): horizontal strip of client/brand
      logos.
  17. Footer (`footer.footer-area.section-bg`, bg `#11141b`, top border
      `#233148`): left column — logo + blurb "Receive updates and latest news
      direct from Simply enter." + newsletter form (email input + "SIGN UP"
      red button); contact column — phone "+564 7885 3222", email
      "youremail@gmail.com"; LOCATION column — links Advanced, Management,
      Corporate, Customer, Information; EXPLORE column — links Cookies,
      About, Privacy Policy, Proparties, Licenses; LOCATION column —
      address paragraph; social icons (Twitter, Facebook, Website,
      Instagram); copyright bar with credit (paraphrase the "made with ♥"
      credit per repo conventions, drop the Colorlib attribution).
- **Recreation decisions:** new name **Consilio** (Latin for "counsel /
  advice" — fits a consulting brand; no collision with `apps/`,
  `openspec/specs/`, or `docs/templates/`). Brand renders as a text wordmark
  "Consilio." (the original uses a logo image). Hero slider: 2 slides with
  picsum background images + dark overlay; slides advance on an interval with
  manual prev/next dots. Counters animate count-up on scroll into view (or
  static values if animation is skipped — layout must not depend on it).
  Pricing toggle switches Monthly/Yearly amounts (Yearly = 20% off per the
  "Save 20%" label). Testimonial carousel has prev/next controls; FAQ
  accordion allows one open item at a time (first open by default). The
  video play button is decorative (no lightbox). Social icons are inline SVGs
  (lucide-react removed brand icons). Footer contact data is placeholder
  text. Dark-mode `.dark` variants per repo conventions.

Consilio lives in `apps/consilio` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn).

## Design tokens (extracted from `assets/css/style.css`)

- Fonts (Google Fonts `@import` in CSS): **Roboto** (300/400/700/900) for
  headings — `h1..h6` are Roboto, weight 500, color `#092c3f`; **Poppins**
  for body/paragraphs (`p { font-family: "Poppins"; color: #10285d }`), the
  `body` font, and buttons (`font-family: "Poppins"`, 14px). Titillium Web +
  Alex Brush are also imported but barely used — wire Roboto + Poppins only.
- Brand navy: **`#14435c`** — dominant brand color: nav link hover,
  `.btn-cta-primary` text, CTA banner gradient start.
- Deep navy shades: **`#092c3f`** (headings, btn-cta-primary hover bg),
  **`#0d2d3e`** (nav link color, dropdown bg), **`#06151d`** (CTA gradient
  end), **`#0b1416`** (`.btn-black` nav CTA bg).
- Accent red: **`#ff2143`** — primary buttons (`.submit-btn`, hero CTA),
  SIGN UP button, red counter box, "MORE ABOUT US" button.
- Section eyebrows: **`#eb566c`** (Roboto 500, uppercase, `padding-left:
68px` with a 54×2px `#eb566c` line before the text).
- Surfaces: white `#ffffff`; light gray `#f5f5f5` (`.gray-bg`);
  `#13151b` (`.section-bg1`); footer `#11141b` (border `#233148`); muted
  text `#999999` / `#bdbdbd`.
- Body copy: `#10285d` (paragraphs).
- Buttons: radius **5px**, border 0, uppercase labels where the original
  uppercases; `.hero-btn` padding 30px 38px; `.submit-btn` bg `#ff2143`,
  white, uppercase, padding 19px 44px; `.btn-cta-primary` white bg / `#14435c`
  text / 15px 35px / radius 5px, hover `#092c3f`; `.btn-cta-secondary`
  transparent, 2px `#fff` border, radius 5px; `.pricing-btn` 15px 40px,
  weight 600; `.btn-black` bg `#0b1416`.
- CTA banner background: `linear-gradient(135deg, #14435c 0%, #06151d 100%)`.
- Section backgrounds: hero = slider image + dark overlay; support-company,
  pricing, wantToWork, testimonial, footer use `section-bg` images
  (`section_bg02/03/04.webp`) — recreate as solid navy/dark surfaces with
  subtle patterns, or picsum textures; the exact images are NOT to be copied.
- Layout rhythm: header-top `d-none d-lg-block`; nav links `padding: 39px
19px`; hero full-screen slider; `pt-100 pb-100` / `section-padding30` /
  `pb-120` / `pb-140` section paddings (≈100px/30px/120px/140px);
  `.section-tittle` margin-bottom 50px.

## Requirements

### Requirement: Header

The system SHALL render a top info bar and a main navigation bar with a logo,
menu links with dropdowns, and a consultation CTA button.

#### Scenario: Top info bar

- **GIVEN** the Consilio page is rendered on a desktop viewport
- **WHEN** the header is displayed
- **THEN** it SHALL show the business hours "MON - SAT: 6.00 AM - 10.00 PM"
  and "SUN: CLOSED" on the left
- **AND** it SHALL show social icon links (Facebook, Twitter, LinkedIn,
  Google Plus) on the right

#### Scenario: Main navigation

- **GIVEN** the main navigation bar is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the "Consilio" wordmark on the left
- **AND** it SHALL show the links Home, About, Services, Portfolio, Blog,
  and Contact
- **AND** it SHALL show a dark "Get Free Consultation" button on the right
- **AND** the Home link SHALL be marked active

#### Scenario: Mobile toggle

- **GIVEN** the page is rendered on a narrow viewport
- **WHEN** the user activates the menu toggle
- **THEN** the collapsed menu SHALL expand showing the nav links and the
  consultation button
- **AND** the toggle SHALL expose `aria-expanded` and an accessible label

### Requirement: Hero slider

The system SHALL render a full-width hero slider with two slides of
overlaid headline content and a CTA.

#### Scenario: Slide content

- **GIVEN** a hero slide is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the eyebrow "Committed to success" with a red accent
- **AND** it SHALL show the headline "We help to grow your business"
- **AND** it SHALL show a short subtext paragraph
- **AND** it SHALL show a red uppercase "OUR SERVICES" button

#### Scenario: Slider behavior

- **GIVEN** the hero slider is displayed
- **WHEN** the slide advances (interval, arrows, or dots)
- **THEN** the visible slide SHALL change to the next one
- **AND** the slider SHALL indicate the current slide (dots or counter)

### Requirement: Top services

The system SHALL render a section with three icon service cards.

#### Scenario: Card grid

- **GIVEN** the top services section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the eyebrow "Our Top Services" and the heading
  "Our Best Services"
- **AND** it SHALL show three cards: Strategy Planning, Insurance Service,
  and Audit & Evaluation
- **AND** each card SHALL show an icon, a title, and a short blurb

### Requirement: Company support split

The system SHALL render a two-column split section with an image on a red
panel and a navy panel with services copy.

#### Scenario: Split layout

- **GIVEN** the company support section is displayed
- **WHEN** it is rendered on a wide viewport
- **THEN** the left column SHALL show an image on a red panel with a subtle
  diagonal stripe pattern
- **AND** the right column SHALL show the heading "Our Best Services", two
  paragraphs, and a red "MORE ABOUT US" button
- **AND** on a narrow viewport the columns SHALL stack vertically

### Requirement: Video intro

The system SHALL render a video intro section with a thumbnail, play button,
heading, and feature list.

#### Scenario: Intro content

- **GIVEN** the video intro section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show a video thumbnail with a round play button overlay
- **AND** it SHALL show the heading "See How We Transform Businesses" and a
  paragraph
- **AND** it SHALL show a list of four features with check icons

### Requirement: Featured case studies

The system SHALL render a strip of four equal case-study cards.

#### Scenario: Card strip

- **GIVEN** the featured case studies section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the eyebrow "Our Portfolios of Cases" and the
  heading "Featured Case Study"
- **AND** it SHALL show four cards, each with an image, a small category tag,
  and a title link

### Requirement: Case studies

The system SHALL render three detailed case study cards with category tag,
client, and a metric.

#### Scenario: Detailed cards

- **GIVEN** the case studies section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the eyebrow "Success Stories" and the heading
  "Our Case Studies"
- **AND** it SHALL show three cards, each with a category tag (e.g. FINANCE),
  a title, a blurb, a "Client: ..." line, and a metric chip (e.g. "+45%
  efficiency")

### Requirement: CTA banner

The system SHALL render a navy gradient banner with a heading and two
buttons.

#### Scenario: Banner content

- **GIVEN** the CTA banner is displayed
- **WHEN** it is rendered
- **THEN** it SHALL sit on the navy gradient background
- **AND** it SHALL show the heading "Ready to Transform Your Business?"
- **AND** it SHALL show a white solid "Get Free Consultation" button and a
  white outline "View Our Services" button

### Requirement: Testimonials

The system SHALL render a dark testimonial carousel with quote, author, and
navigation controls.

#### Scenario: Carousel

- **GIVEN** the testimonial section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show one testimonial quote with an author at a time
- **AND** it SHALL provide Previous and Next controls to cycle quotes

### Requirement: Counters

The system SHALL render four stat counters with one highlighted box.

#### Scenario: Stats row

- **GIVEN** the counters section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the values 8705 (Projects Completed), 480 (Active
  Clients), 626 (Cups of Coffee), and 9774 (Happy Clients)
- **AND** the Active Clients box SHALL be highlighted on the red brand
  background with white text

### Requirement: Team

The system SHALL render a team grid with photo, name, and role.

#### Scenario: Team cards

- **GIVEN** the team section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the eyebrow "Our Professional Members" and the
  heading "Our Team Members"
- **AND** it SHALL show three cards, each with a photo, a name, and a role

### Requirement: Pricing

The system SHALL render three pricing plans with a monthly/yearly toggle and
a featured plan.

#### Scenario: Plan cards

- **GIVEN** the pricing section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the eyebrow "Our Pricing Plans" and the heading
  "Choose Your Plan"
- **AND** it SHALL show the plans Starter ($499), Professional ($999), and
  Enterprise
- **AND** the Professional plan SHALL carry a "MOST POPULAR" badge and the
  Enterprise plan SHALL use a "CONTACT US" button while the others use
  "GET STARTED"

#### Scenario: Billing toggle

- **GIVEN** the pricing section is displayed
- **WHEN** the user switches from Monthly to Yearly
- **THEN** the prices SHALL update to the discounted yearly rate (20% off,
  per the "Save 20%" label)
- **AND** the toggle SHALL expose accessible labels and an `aria-checked`
  state

### Requirement: FAQ

The system SHALL render an accordion of five questions with one open item.

#### Scenario: Accordion

- **GIVEN** the FAQ section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the eyebrow "Got Questions?" and the heading
  "Frequently Asked Questions"
- **AND** it SHALL show five questions, with the first expanded by default
- **WHEN** the user activates a collapsed question
- **THEN** it SHALL expand and the previously open item SHALL collapse

### Requirement: Want-to-work CTA

The system SHALL render a call-to-action band with a heading and button.

#### Scenario: Band content

- **GIVEN** the want-to-work band is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the heading "Are you Searching For a First-Class
  Consultant?"
- **AND** it SHALL show a "MORE ABOUT US" button

### Requirement: Blog

The system SHALL render a blog section with three post cards.

#### Scenario: Post cards

- **GIVEN** the blog section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the eyebrow "Recent News of us" and the heading
  "Our Recent Blog"
- **AND** it SHALL show three cards, each with a meta line ("By Admin -
  <date>"), a title link, an excerpt, and a "Read More" link

### Requirement: Brands

The system SHALL render a horizontal strip of brand logos.

#### Scenario: Logo strip

- **GIVEN** the brands section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show a row of placeholder brand logos (grayscale,
  consistent height)

### Requirement: Footer

The system SHALL render a dark multi-column footer with newsletter form,
contact info, link columns, and a copyright bar.

#### Scenario: Newsletter column

- **GIVEN** the footer is displayed
- **WHEN** the first column is rendered
- **THEN** it SHALL show the "Consilio" wordmark, a short blurb, and a
  newsletter form with an email input and a red "SIGN UP" button
- **WHEN** the user submits an invalid email
- **THEN** the form SHALL show a validation error and SHALL NOT submit
- **WHEN** the user submits a valid email
- **THEN** the form SHALL show a success confirmation

#### Scenario: Contact and link columns

- **GIVEN** the footer is displayed
- **WHEN** the contact column is rendered
- **THEN** it SHALL show a phone number and an email address with icon
  prefixes
- **WHEN** the link columns are rendered
- **THEN** it SHALL show a LOCATION column (Advanced, Management, Corporate,
  Customer, Information) and an EXPLORE column (Cookies, About, Privacy
  Policy, Proparties, Licenses)

#### Scenario: Copyright bar

- **GIVEN** the footer is displayed
- **WHEN** the bottom bar is rendered
- **THEN** it SHALL show a copyright notice with a "made with ♥" credit and
  social icon links

## Verification checklist

- [ ] `npm run verify:app consilio` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Section order matches the original 1:1 (header → hero slider → top
      services → company support split → video intro → featured case studies
      → case studies → CTA banner → testimonials → counters → team → pricing
      → FAQ → want-to-work CTA → blog → brands → footer)
- [ ] Tokens wired through `@theme`: navy `#14435c`, deep navy `#092c3f` /
      `#0d2d3e` / `#06151d`, accent red `#ff2143`, eyebrow `#eb566c`, footer
      `#11141b`, body copy `#10285d`
- [ ] Roboto + Poppins loaded via Google Fonts `<link>` in `index.html`
- [ ] Hero is a 2-slide slider with picsum background images + dark overlay,
      red uppercase CTA
- [ ] Split section: red striped panel with image + navy panel with copy and
      red button
- [ ] CTA banner uses the navy gradient; white solid + white outline buttons
- [ ] Counter row has the red-highlighted middle box; pricing toggle (20%
      yearly discount) with aria states; FAQ accordion one-open-at-a-time
- [ ] Placeholder images use `https://picsum.photos/seed/consilio-<n>/<w>/<h>`;
      no assets copied from the original
- [ ] Footer newsletter form validates email (zod) with success state; a11y
      labels and focus rings
- [ ] Mobile navbar toggle with aria-expanded; social icons are inline SVGs
- [ ] Dark-mode toggle present per repo conventions (dark: variants)
- [ ] README status table regenerated after merge (`npm run readme:status`)
