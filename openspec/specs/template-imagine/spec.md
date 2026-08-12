# Template: Imagine (Creative Agency)

## Purpose

Imagine is a single-page creative-agency landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Creative Agency 2" website template design (see TEMPLATES.md,
Bootstrap category, line 368 — dup rows also at lines 961 and 1457 under
other categories), built under a different name with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Creative Agency 2" — creative-agency Bootstrap
  HTML template (page title "Creative Agency"; source:
  https://colorlib.com/wp/template/creative-agency-2/). Structure: light
  navbar with dropdown menus, a full-width parallax photo hero with
  right-aligned thin/bold headline and a gradient pill CTA, a 4-icon
  services strip, a split photo "digital problems partner" section, a
  projects carousel, a black skills section with donut charts, a 4-card
  team grid with hover social overlays, a photo-background testimonial
  carousel, a 4-card blog grid, and a dark 3-column footer with newsletter
  form and Instagram feed.
- **Live preview UNREACHABLE at the canonical URL:**
  `https://preview.colorlib.com/theme/creative-agency-2/` returns HTTP 404
  (also empty in a real browser), and the portal fallback
  `preview.colorlib.com/#creative-agency-2` redirects to an UNRELATED theme
  ("Rea") — the old hash-based preview does not map this slug. No
  wayback.archive.org snapshot exists for the preview path either.
- **Reference used instead (cross-verified):** the TEMPLATES.md screenshot
  `agency-free-agency-website-template.jpg` (1200×935) was reviewed in the
  browser, and its design matches 1:1 the LIVE theme at
  `https://preview.colorlib.com/theme/creativeagency/` (HTTP 200, ~28KB
  HTML; page title "Creative Agency"). DOM + `css/main.css` (36KB, Bootstrap
  - owl-carousel based) extracted and analyzed; all tokens below come from
    that stylesheet. Cross-check: the screenshot's hero headline ("We Provide
    Solutions that Brings Joy"), "Hire Us Now!" button, "Latest News from all
    categories" title and the four service titles ("Easy Flight Search", "Get
    Hotel Offers", "Holiday Packages", "Dedicated Support") are ALL present in
    the `/theme/creativeagency/` DOM verbatim.
- **Do NOT confuse with sibling templates** (important — ColorLib's slug →
  preview mapping for this family is scrambled):
  - "Creative Agency 2 2" (`creative-agency-2-2`, TEMPLATES.md line 369) is
    a DIFFERENT template whose live preview IS reachable at
    `https://preview.colorlib.com/theme/creativeagency2/` (the
    "We are Design and Development Agency based on California" design with a
    works grid, black services section, counters, Instagram strip). Do NOT
    use that preview — it belongs to the other template.
  - "Creative Agency" v1 (`creative-agency`, TEMPLATES.md line 1456) has a
    different screenshot (`digilab-free-template.jpg`, the "DIGILAB" green
    design). Also not our reference.
- **Visual design (from screenshot + live reference DOM):** clean agency
  landing. White navbar with dark links. Hero is a full-width photo
  (close-up of hands in a blue knitted sweater holding a small potted
  plant, muted/greyish overlay) with a black 40% overlay; content is
  RIGHT-aligned: thin (weight 100) white 72px headline "We Provide
  Solutions that Brings Joy" with bold (700) spans on "Solutions" and
  "Joy", and a pill button "HIRE US NOW!" filled with the brand
  lavender-purple gradient `#908ced → #b56fe8`. Sections below on white:
  "Latest News from all categories" (4 icon cards), split about section on
  a photo background with white text + two outline buttons, "Latest Project
  on the go" carousel, black "Our Fields of Expertness" skills section with
  gradient donut charts (Wireframing / User Research / User Experience),
  "About Creative Agency Team" (4 members, hover social icons), testimonial
  slider on a photo with gradient overlay (Mark Alviro Wiens, CEO at
  Google), "Latest From Our Blog" (4 cards with black date badges, likes /
  comments meta), and a dark `#222222` footer with Top Products links,
  Newsletter form (Subscribe gradient pill) and an 8-thumb Instagram feed.
- **Section order (1:1) from the DOM:**
  1. Header (`header.default-header`): Bootstrap navbar-light; logo image
     (`img/logo.png` — "Agency" diamond + wordmark per screenshot;
     recreation: text wordmark) left; `ul.navbar-nav` right with links Home,
     Service, project, blog, team, and a Pages dropdown (Generic, Elements).
     Mobile: hamburger toggler collapsing the nav.
  2. Hero (`section.banner-area.relative#home`, `data-parallax` bg image
     `img/header-bg.jpg` + `div.overlay-bg.overlay` black at opacity .4):
     `.row.fullscreen` (700px) `d-flex align-items-center
justify-content-end`; `.banner-content.col-lg-6`: `h1` "We Provide
     <br> <span>Solutions</span> that <br> Brings <span>Joy</span>" —
     72px, white, weight 100, line-height 1em, margin-bottom 40px, spans
     weight 700 (36–45px on smaller viewports) — and `a.primary-btn2
.header-btn.text-uppercase` "Hire Us Now!" (gradient fill, white;
     hover = transparent with 1px white border).
  3. Services (`section.service-area.pt-100.pb-150#service`): centered
     `.menu-content.pb-70.col-lg-8` `.title` `h1.mb-10` "Latest News from
     all categories" + lorem subtext `p`; row of 4 `.sigle-service.col-lg-3
.col-md-6`: `span.lnr` icon (rocket / magic-wand / gift / phone; 35px,
     `#777777`, hover = gradient text), `h4` title ("Easy Flight Search",
     "Get Hotel Offers", "Holiday Packages", "Dedicated Support"), `p`
     lorem, `a.text-uppercase.primary-btn2.primary-border.circle` "View
     Details" (black text, weight 600, 1px `#f4f4f4` border, radius 20px;
     hover = gradient fill + white).
  4. About (`section.about-area`): `container-fluid`; background
     `img/about-bg.png` cover; row `justify-content-end align-items-center`:
     LEFT `col-lg-6.about-left.mt-70` (padding-left 20%, white text): `h1`
     "We can be your digital <br> Problems Solution Partner", `p` lorem,
     `.buttons` with two `a.about-btn.text-uppercase.primary-border.circle`
     ("What we offer", "Get a free quote" — white outline circles);
     RIGHT `col-lg-6.about-right`: `img.img-fluid` `img/about.png`.
  5. Projects (`section.project-area.section-gap#project`): centered
     `.menu-content.pb-40` `h1.mb-10` "Latest Project on the go" + lorem
     `p`; `.active-works-carousel` owl carousel of 5 `.item`: `img` +
     `.caption.text-center.mt-20` with `h6.text-uppercase` "Vector
     Illustration" and lorem `p`. (Recreation: horizontal scroll strip or
     responsive grid of project cards.)
  6. Skills (`section.skill-area.section-gap`): `background-color: #000`;
     split: LEFT `col-lg-6.skill-left`: `h1.text-white.mb-30` "Our Fields
     of Expertness" + lorem `p`; RIGHT `col-lg-6.skill-right`: 3
     `.single-skill.col-lg-4` donut widgets (`.skill1/.skill2/.skill3`,
     gradient `#908ced → #b56fe8` segments) each labeled `h4` "Wireframing"
     / "User Research" / "User Experience". (Recreation: CSS conic-gradient
     rings.)
  7. Team (`section.team-area.section-gap#team`): centered `h1.mb-10`
     "About Creative Agency Team" + `p` "Who are in extremely love with eco
     friendly system."; row of 4 `.single-team.col-md-3`: `.thumb` photo
     (`t1–t4.jpg`) with hover social overlay (facebook / twitter /
     linkedin), `.meta-text.mt-30.text-center` `h4` name + `p` role —
     Ethel Davis (Managing Director (Sales)), Rodney Cooper (Creative Art
     Director (Project)), Dora Walker (Senior Core Developer), Lena Keller
     (Creative Content Developer).
  8. Testimonials (`section.testimonial-area.relative.section-gap`): bg
     `img/testimonial-bg.jpg` cover + `.overlay-bg` gradient at opacity .6;
     `.active-testimonial` carousel of 2 identical slides: `.thumb`
     `user1.png` + `.desc` quote `p`, `h4` "Mark Alviro Wiens", `p` "CEO at
     Google". (Recreation: single testimonial or 2-card static grid.)
  9. Blog (`section.blog-area.section-gap#blog`): centered `h1.mb-10`
     "Latest From Our Blog" + lorem `p`; 4 `.single-blog.col-lg-3.col-md-6`
     cards: `img` (`b1–b4.jpg`), `p.date` black badge "10 Jan 2018", `h4`
     link "Addiction When Gambling Becomes A Problem" (hover = gradient
     text), excerpt `p`, `.meta-bottom` with `♥ 15 Likes` and `💬 02
Comments`.
  10. Footer (`footer.footer-area.section-gap`, bg `#222222`, padding-top
      100px): 3 columns — (1) `.col-lg-3` "Top Products" `ul.footer-nav`
      (Managed Website, Manage Reputation, Power Tools, Marketing Service;
      links white, hover `#8490ff`), (2) `.col-lg-6` Newsletter widget:
      `p` "You can trust us. we only send promo offers, not a single
      spam." + email input + `button.nw-btn.primary-btn` "Subscribe" with
      arrow (gradient pill, radius 25px), (3) `.col-lg-3` "Instragram
      Feed": 8 thumbs (`i1–i8.jpg`). Bottom row `.footer-bottom`: left
      copyright `p` (♥ credit — recreation replaces the Colorlib link with
      the repo-mandated Component Dock link) + right `.footer-social`: 4
      icon links (facebook / twitter / dribbble / behance; 40px `#111111`
      squares, hover = gradient fill).
- **Recreation decisions:** new name **Imagine** (single word evoking
  creative thinking — fits a creative-agency brand; no collision with
  `apps/`, `openspec/specs/`, or `docs/templates/`). Brand renders as a
  text wordmark (original uses a logo image). Hero: full-width picsum photo
  with dark overlay, right-aligned thin/bold headline + gradient "Hire Us
  Now!" pill (the parallax effect is not recreated; a fixed cover image
  preserves the look). Service icons: lucide-react equivalents of
  linearicons (Rocket, Wand2, Gift, Phone). Donut charts: CSS
  conic-gradient progress rings. Carousels (projects, testimonials) become
  static responsive grids. Team photos: picsum portraits; names paraphrased
  but same kind of content. Newsletter form: controlled input with
  validation + success state (input unmounts on success per repo
  convention). Social icons are inline SVGs (lucide-react removed brand
  icons). Footer: `#222222` background, Component Dock link in the
  copyright bar per repo conventions, no Colorlib attribution anywhere.
  Dark-mode `.dark` variants per repo conventions.

Imagine lives in `apps/imagine` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn).

## Design tokens (extracted from `css/main.css` of the reference theme)

- Fonts (Google Fonts): **Poppins** — body and headings. Banner `h1`:
  72px, weight 100 (thin), `span` weight 700, white, line-height 1em,
  margin-bottom 40px (36px on ≤991px, 45px on ≤1199px). Section `h1`
  titles: centered, `margin-bottom: 10px` (`.mb-10`). Service `h4` titles
  and team/blog `h4`: default Poppins weights.
- Brand gradient: **`linear-gradient(0deg, #908ced 0%, #b56fe8 100%)`** —
  the signature lavender-purple; used for `.primary-btn` (Subscribe), the
  hero `.header-btn` "Hire Us Now!", `.primary-btn2:hover` fills, donut
  chart segments, `.testimonial-area .overlay-bg`, `.footer-social a:hover`,
  `.generic-banner`, and gradient-text hovers (service icons, blog `h4`).
- Periwinkle **`#8490ff`** — footer nav link hover.
- Ink **`#000`** — hero overlay at opacity .4, `skill-area` background,
  blog date badge background, blog `h4 a` color, `.primary-btn2` text.
- **`#222222`** — footer background; **`#111111`** — footer social button
  squares (40×40px).
- **`#777777`** — service icon color (35px) and muted body text.
- **`#f4f4f4`** — outline-button border (`.primary-btn2`).
- White **`#fff`** — hero/white-section text, button text, about-left text.
- Buttons:
  - `.primary-btn` (filled pill): gradient bg, white text, uppercase,
    weight 500, line-height 42px, padding-left 30px / right 60px, radius
    25px; arrow icon absolute right that slides right→20px on hover.
  - `.primary-btn2` (outline pill): color `#000`, weight 600, 1px `#f4f4f4`
    border, padding 8px 35px, radius 20px; hover = gradient fill + white
    text. `.primary-border` = white border variant used on dark/photo
    backgrounds (about buttons); `.circle` = fully rounded.
  - `.header-btn`: gradient fill, white; hover = transparent + 1px white
    border.
- Hero: `.fullscreen` height 700px; right-aligned content column (col-lg-6,
  `justify-content-end`); mobile ≤991px centers text.
- Section rhythm: `.section-gap` = 120px top/bottom; `.service-area` pt-100
  pb-150; `.menu-content` centered heading block with pb-70/pb-40.
- Footer: bg `#222222`, padding-top 100px; nav links white, hover
  `#8490ff`; social squares `#111111` 40×40px, hover gradient.

## Requirements

### Requirement: Header

The system SHALL render a light navbar with a wordmark, nav links including
a dropdown, and a mobile toggle.

#### Scenario: Navbar

- **GIVEN** the Imagine page is rendered
- **WHEN** the header is displayed
- **THEN** it SHALL show the "Imagine" wordmark on the left
- **AND** it SHALL show the links Home, Service, Project, Blog, Team, and a
  Pages dropdown (Generic, Elements), with Home marked active
- **AND** on a narrow viewport the links SHALL collapse behind a toggle
  with `aria-expanded` and an accessible label

### Requirement: Hero

The system SHALL render a full-width photo hero with a right-aligned
thin/bold headline and a gradient CTA button.

#### Scenario: Hero content

- **GIVEN** the hero section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL sit on a full-width background photo with a dark
  overlay
- **AND** it SHALL show the headline "We Provide Solutions that Brings
  Joy" with "Solutions" and "Joy" emphasized (bold spans)
- **AND** it SHALL show a "Hire Us Now!" button filled with the brand
  gradient
- **AND** on a wide viewport the content SHALL be right-aligned, and on a
  narrow viewport centered

### Requirement: Services strip

The system SHALL render a centered heading and four icon cards with outline
buttons.

#### Scenario: Icon cards

- **GIVEN** the services strip is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the centered heading "Latest News from all
  categories" with a short subtext
- **AND** it SHALL show four cards titled "Easy Flight Search", "Get Hotel
  Offers", "Holiday Packages", and "Dedicated Support"
- **AND** each card SHALL show an icon, a short paragraph, and a "View
  Details" outline pill button

### Requirement: About section

The system SHALL render a split section on a photo background with white
text and two outline buttons.

#### Scenario: About layout

- **GIVEN** the about section is displayed
- **WHEN** it is rendered on a wide viewport
- **THEN** the left column SHALL show the heading "We can be your digital
  Problems Solution Partner", a paragraph, and two outline buttons ("What
  we offer", "Get a free quote")
- **AND** the right column SHALL show an image
- **AND** on a narrow viewport the columns SHALL stack vertically

### Requirement: Projects

The system SHALL render a centered heading with a row of project cards.

#### Scenario: Project cards

- **GIVEN** the projects section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the centered heading "Latest Project on the go"
  with a short subtext
- **AND** it SHALL show at least four project cards, each with an image, an
  uppercase label (e.g. "Vector Illustration"), and a caption paragraph

### Requirement: Skills

The system SHALL render a black section with a heading and three progress
rings.

#### Scenario: Skills layout

- **GIVEN** the skills section is displayed
- **WHEN** it is rendered on a wide viewport
- **THEN** the left column SHALL show the white heading "Our Fields of
  Expertness" and a paragraph
- **AND** the right column SHALL show three labeled progress rings:
  "Wireframing", "User Research", and "User Experience"

### Requirement: Team

The system SHALL render a grid of four team member cards with hover social
icons.

#### Scenario: Team cards

- **GIVEN** the team section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the centered heading "About Creative Agency Team"
  with the tagline "Who are in extremely love with eco friendly system."
- **AND** it SHALL show four cards, each with a photo, a name, and a role
  (e.g. Ethel Davis — Managing Director (Sales))
- **AND** hovering a card SHALL reveal social icon links (Facebook,
  Twitter, LinkedIn)

### Requirement: Testimonials

The system SHALL render a testimonial section on a photo background.

#### Scenario: Testimonial

- **GIVEN** the testimonials section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL sit on a background photo with a brand-gradient overlay
- **AND** it SHALL show a quote, a name (e.g. "Mark Alviro Wiens"), and a
  role line (e.g. "CEO at Google")

### Requirement: Blog

The system SHALL render a centered heading and four blog post cards with
meta info.

#### Scenario: Blog cards

- **GIVEN** the blog section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the centered heading "Latest From Our Blog" with a
  short subtext
- **AND** it SHALL show four cards, each with an image, a date badge, a
  title link (e.g. "Addiction When Gambling Becomes A Problem"), an
  excerpt, and a likes/comments meta line (e.g. "15 Likes", "02 Comments")

### Requirement: Footer

The system SHALL render a dark three-column footer with a newsletter form,
link list, Instagram feed, and a copyright bar.

#### Scenario: Footer columns

- **GIVEN** the footer is displayed
- **WHEN** the first column is rendered
- **THEN** it SHALL show a "Top Products" heading with the links Managed
  Website, Manage Reputation, Power Tools, and Marketing Service
- **WHEN** the newsletter column is rendered
- **THEN** it SHALL show a short trust line, an email input, and a
  "Subscribe" button with an arrow
- **WHEN** the user submits an invalid email
- **THEN** the form SHALL show a validation error and not submit
- **WHEN** the user submits a valid email
- **THEN** the form SHALL show a success state
- **WHEN** the third column is rendered
- **THEN** it SHALL show an "Instagram Feed" heading with eight thumbnails

#### Scenario: Copyright bar

- **GIVEN** the footer bottom bar is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show a copyright line with a ♥ credit on the left and
  social icon links (Facebook, Twitter, Dribbble, Behance) on the right
- **AND** it SHALL link to https://www.componentdock.com/ (Component Dock,
  per repo conventions — no Colorlib attribution anywhere in app code)

## Verification checklist

- [ ] `npm run verify:app imagine` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Section order matches the original 1:1 (header → hero → services →
      about → projects → skills → team → testimonials → blog → footer)
- [ ] Tokens wired through `@theme`: gradient `#908ced → #b56fe8`,
      periwinkle `#8490ff`, ink `#000`, footer `#222222`, social squares
      `#111111`, icon gray `#777777`, outline border `#f4f4f4`
- [ ] Poppins loaded via Google Fonts `<link>` in `index.html`
- [ ] Hero uses a full-width photo (picsum) + dark overlay, right-aligned
      thin headline with bold spans, gradient "Hire Us Now!" pill; centers
      on mobile
- [ ] Services strip: 4 icon cards (Easy Flight Search, Get Hotel Offers,
      Holiday Packages, Dedicated Support) with "View Details" outline pills
- [ ] About: photo background, white text, two outline circle buttons,
      right-side image; stacks on mobile
- [ ] Projects: ≥4 cards with uppercase labels; Skills: black section with
      3 conic-gradient progress rings (Wireframing, User Research, User
      Experience)
- [ ] Team: 4 cards with picsum portraits + hover social overlay (inline
      SVG brand icons)
- [ ] Testimonials: photo background + gradient overlay, quote + name +
      role
- [ ] Blog: 4 cards with date badges and likes/comments meta
- [ ] Footer: `#222222`, Top Products links, newsletter form with
      validation + success state, Instagram feed thumbs, Component Dock
      link in the copyright bar
- [ ] Placeholder images use `https://picsum.photos/seed/imagine-<n>/<w>/<h>`
      (hero seed screened for a suitable subject per the seed-screening
      method); no assets copied from the original
- [ ] Mobile navbar toggle with aria-expanded; focus-visible rings; dark
      mode per repo conventions
- [ ] README status table regenerated after merge (`npm run readme:status`);
      ALL THREE TEMPLATES.md Creative Agency 2 rows (lines 368, 961, 1457)
      marked `[x]` with the same surge URL at bookkeeping time (one
      recreation covers all dup rows)
