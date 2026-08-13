# Template: Meliora (Charity)

## Purpose

Meliora is a charity / nonprofit landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Chariter"
design (https://colorlib.com/wp/template/chariter/), built under the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. "Meliora" (Latin for
"better things") is a NEW original name — the ColorLib source name is never
reused in app code.

The original is a warm, people-focused charity site ("Chariter", Bootstrap 5):
a rose-red top utility bar (phone + email left, social icons right) over a
white sticky navbar with a heart logo, "Home / Causes / About / Blog /
Contact" links and a pill "Donate Now" CTA; a full-height 3-slide photo hero
(dark plum gradient overlay, Lora serif H1, salmon-pink "Active Causes"
button, vertical dot pagination); a "Causes we are serving" carousel of white
cause cards (rounded photo, pink tag, title, copy, "$ Goal / $ Raised"
progress bar, Donate link); a "Who we are?" split section with an image,
copy and a Learn More button; a photo-background counter band (35+ Active
Cases, 12m People Joined, 200m Cases every Year, 1200 People get help from
us); a "We serve for peoples" icon service grid (Pure Food & Water, Health &
Medicine, Education, ...); a "They need your help" emergency-care photo band
with "Donate in a Case" + "Join with Us" buttons; a "Join with Us" centered
callout with a "Join Now" button; and a dark plum (#301A22) four-column
footer (brand blurb | Navigation | Services | Subscribe newsletter form) with
a copyright bar. Meliora recreates that structure section-for-section with
matching layout, colors, typography, and content types (no ColorLib assets
copied).

## Design reference (replication findings)

- **Original:** ColorLib "Chariter" — free charity/nonprofit website
  Bootstrap 5 template (source: https://colorlib.com/wp/template/chariter/;
  listed in the "Bootstrap 5 (89)" section of TEMPLATES.md with a duplicate
  row in "Charity (37)"). This spec covers the single source `chariter`; the
  two `- [ ]` rows share one implementation.
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/chariter/`
  (HTTP 200, ~38.4KB) + stylesheet `assets/css/style.css` (~62.7KB,
  minified). The rendered DOM is the reference below; the TEMPLATES.md
  screenshot (`chariter-free-template.jpg`, 1200×946) confirms the visual
  design: rose-red utility bar + "Donate Now" pill, white navbar, photo hero
  of children with right-side white headline + pink "Active Causes" button,
  centered serif "Causes we are serving" heading above a 3-card carousel
  (rounded photos, pink tag overlays, progress bars), mix of Lora serif
  headings + Roboto body.
- **Section order (1:1):**
  1. Header: `header-area` — `header-top` (background `#C30047`, padding
     8px 210px): left `header-info-left` phone "+10 (78) 564 4568" and email
     "info.90@chariter.com" as white list items separated by
     `rgba(255,255,255,0.2)` right borders; right `header-info-right`
     social links (Facebook / Twitter / LinkedIn / Instagram, white 16px
     icons, rotateY(180deg) hover). Below, `header-bottom` + `main-header`
     (white): left heart logo "Chariter"; center `main-menu` links
     (Home, Causes, About, Blog, Contact — Roboto 500 `#301A22`, hover
     `#C30047`, dropdown submenus); right `header-btn` pill "Donate Now"
     (`background:#C30047;border-radius:30px;padding:10px 31px`). On scroll
     the header becomes `sticky-bar`: fixed, white, `box-shadow 0 10px 15px
rgba(25,25,25,0.1)`, fadeInDown.
  2. Hero slider (`slider-area`, `slider-active dot-style`): 3 slides
     (`single-slider hero-overly slider-height slider-bg1/2/3
d-flex align-items-center`), `slider-height` min-height 800px (680 →
     600 → 450 mobile), cover background photos (`h1_hero1.jpg`,
     `h1_hero2.jpg`, `h1_hero3.jpg`). Slide 1 uses `hero-overly` — a LEFT
     linear-gradient overlay `rgba(48,26,34,0.95) → transparent`; slide 2
     uses `hero-overly01` — the SAME gradient mirrored to the RIGHT. Content
     (`hero-caption`): uppercase white kicker span (18px, weight 300, ls
     wide), H1 "Support a causes you care about" (Lora 70px weight 700
     white, line-height 1.1; 35px mobile), white paragraph (20px weight 300,
     line-height 1.5), and a `hero-btn` "Active Causes"
     (`background:#FF6378;padding:30px 40px`). Vertical `dot-style` dots on
     the right edge (7px white circles, active = 23px ring with 2px white
     border). NOTE: the source headline has a grammar slip ("a causes") —
     paraphrase to "Support a cause you care about" (content-kind latitude).
  3. Causes carousel (`services-area1 section-padding`): centered
     `section-tittle` with periwinkle kicker span (`#7EA0FF`, 16px,
     uppercase) + H2 "Causes we are serving" (Lora 46px weight 700) + intro
     paragraph; `services1-active` carousel of `properties` cards (margin
     0 12px): white card, `border-radius:10px`, image top
     (`border-radius:10px 10px 0 0`), `wrap-wrapper` 1px `#F1F4F8` border
     (top 0), title + grey copy, "$67,845 Goal / $48,845 Raised" progress
     bar, "Donate" link; hover `box-shadow:0 8px 8px rgba(2,25,65,0.08)`.
     Screenshot titles: "Help senior citizens", "Help the ecosystems".
     Carousel arrows in `properties-footer` (left/right chevrons,
     justify-content-between). The recreation uses a simple index-based
     carousel with prev/next buttons (no owl.carousel).
  4. Who we are? (`support-company-area section-padding`): split section —
     photo left, content right with `section-tittle` "Who we are?" +
     paragraph, body copy about the legal definition of charitable
     organizations, and a "Learn More" `btn` (pill `#C30047`).
  5. Counter band (`count-down-area pt-25 section-img-bg2`, data-background
     `assets/img/gallery/section-bg1.jpg`): image background, four counters —
     "35+ Active Cases", "12m People Joined", "200m Cases every Year",
     "1200 People get help from us" (animated count-up in the source;
     recreation can render static numbers or a simple count-up hook).
  6. Our services (`our-services section-padding position-relative`):
     centered `section-tittle` "We serve for peoples" + intro paragraph;
     grid of `single-services text-center mb-30` cards: `services-icon`
     (round icon badge) + `services-cap` title + copy. Observed items:
     "Pure Food & Water", "Health & Medicine", "Education" (3+ in a row;
     expand to 4–6 like the source grid).
  7. Emergency-care band (`emargency-care section-img-bg2`,
     data-background `assets/img/gallery/section-bg2.jpg`, padding 100px 0):
     photo background, heading "They need your help" + two short paragraphs +
     two buttons: "Donate in a Case" (`btn`) and "Join with Us"
     (`boxed-btn` white pill, `#C30047` border/text → filled on hover).
  8. Join with Us (`join-us-area section-padding`): centered block — H2
     "Join with Us" + paragraph ("The legal definition of a charitable
     organization ...") + "Join Now" `btn` pill.
  9. Footer (`footer-wrapper`, `background:#301A22` dark plum, white text):
     four columns — (a) brand logo + blurb (`footer-pera`, Roboto 300 white)
     - `footer-social` icons (circular, hover `#C30047`); (b) "Navigation"
       `footer-tittle` links: Home / About / Services / Blog / Contact; (c)
       "Services" links — the source ships BASE-TEMPLATE LEFTOVERS ("Pet Care,
       Pet Treatment, Pet Training, Hygienic Care" — the theme was built on a
       pet-care base); paraphrase to charity-relevant items (e.g. Fundraising,
       Volunteers, Donations, Events) keeping the 4-link column; (d)
       "Subscribe newsletter" + `footer-form` (email input + submit button,
       Mailchimp action in source → client-validated, non-functional in the
       recreation). `footer-bottom-area`: `footer-border` top border +
       centered copyright "Copyright ©2020 All rights reserved | This template
       is made with by Colorlib" → attribution becomes the Component Dock link.
- **Design tokens:**
  - Brand rose-red **#C30047** — top utility bar, `.btn` / `.submit-btn` /
    `.header-btn` / `.boxed-btn` fills, link hover, back-to-top circle,
    blog date badge, footer social hover.
  - Button hover sweep **#e6115f** — `.btn::before` scaleX(0→1) reveal,
    `transition-timing-function:cubic-bezier(0.5,1.6,0.4,0.7)`.
  - Hero button **#FF6378** (salmon pink, `.hero-btn`).
  - Section-title kicker accent **#7EA0FF** (periwinkle, `.section-tittle
    > span`, uppercase, letter-spacing .05em).
  - Text / heading plum **#301A22** (headings Lora, body Roboto 300 16px
    line-height 1.6); muted body #6A6063 (`.section-tittle p`).
  - Light section backgrounds: **#f9f9ff**, **#f0e9ff**, **#fbf9ff**
    (lavender-white family); white cards/sections; card border **#F1F4F8**.
  - Footer background **#301A22** (dark plum), white text.
  - Hero overlay: `linear-gradient(to right, rgba(48,26,34,0.95) 0%,
rgba(48,26,34,0) 100%)` (slide 1 left; mirrored right on slide 2).
  - Fonts (Google Fonts): **Roboto** (body/nav, 300/400/500/700/900) +
    **Lora** (headings, 400/500/600/700; section H2 46px w700, hero H1
    70px w700).
  - Buttons: pill radius **35px**; `.btn` padding 22px 32px 16px font;
    `.hero-btn` 30px 40px; `.header-btn` radius 30px, padding 10px 31px;
    `.boxed-btn` white, 1px `#C30047` border, `#C30047` text, uppercase.
  - Cards: radius 10px; image top radius 10px 10px 0 0; hover shadow
    `0 8px 8px rgba(2,25,65,0.08)`.
  - Rhythm: `.section-padding` 120px top/bottom (70px mobile);
    `.footer-padding` 80px top; `.emargency-care` 100px vertical.
  - Slider dots: vertical right edge, 7px white circles, active 23px ring
    (2px white border).
- **Recreation approach:** warm light theme with rose-red `#C30047` accents;
  hero = full-width seeded picsum photo band + dark plum gradient overlay +
  Lora H1 + salmon CTA + vertical dot pagination (3 slides, simple
  index-based slider); cause cards carousel with picsum photos, pink tag,
  progress bar (Goal/Raised figures rendered as text + a styled track);
  counters band over a seeded background photo; icon service grid with
  lucide-react icons (HeartHandshake / Droplets / GraduationCap etc.);
  emergency band with two pill CTAs; centered Join callout; dark plum footer
  with 4 columns + newsletter input + Component Dock copyright; all images
  picsum-seeded (`picsum.photos/seed/meliora-N/w/h`); Google Fonts via
  `<link>`.

## Requirements

### Requirement: Header

The system SHALL render a header with a top utility bar and a main
navigation bar.

#### Scenario: Top utility bar

- **GIVEN** the Meliora app is rendered
- **WHEN** the header displays
- **THEN** a rose-red (`#C30047`) utility bar SHALL show the phone number
  and email address on the left
- **AND** it SHALL show social icons (Facebook, Twitter, LinkedIn, Instagram)
  on the right
- **AND** the bar SHALL be separated from the main navigation by the white
  nav background

#### Scenario: Main navigation

- **WHEN** the header displays
- **THEN** the white main bar SHALL show the brand "Meliora" with a heart
  icon on the left
- **AND** it SHALL show navigation links (Home, Causes, About, Blog, Contact)
- **AND** it SHALL show a pill "Donate Now" call-to-action button
- **AND** the header SHALL become fixed with a shadow when the page scrolls

### Requirement: Hero slider

The system SHALL render a full-height hero slider with three slides, a dark
gradient overlay, headline, subtext, call-to-action, and vertical dot
pagination.

#### Scenario: Hero slide content

- **GIVEN** the Meliora app is rendered
- **WHEN** the first slide is active
- **THEN** the hero SHALL show a full-width background photo with a dark
  plum gradient overlay
- **AND** it SHALL show an uppercase kicker, an H1 headline
  ("Support a cause you care about"), a supporting paragraph
- **AND** it SHALL show a salmon-pink (`#FF6378`) pill button "Active Causes"

#### Scenario: Slide navigation

- **WHEN** the user advances the slider
- **THEN** the second and third slides SHALL render with alternating
  (left/right) overlay positions
- **AND** vertical dot indicators SHALL mark the active slide
- **AND** the active dot SHALL be highlighted with a ring

### Requirement: Causes carousel

The system SHALL render a carousel of cause cards with photos, titles,
progress and a Donate action.

#### Scenario: Cause card

- **GIVEN** the Meliora app is rendered
- **WHEN** the causes section displays
- **THEN** the centered section title SHALL read "Causes we are serving"
- **AND** it SHALL show white rounded cards, each with a photo (rounded top
  corners), a title, a short description, a "Goal / Raised" progress bar
  and a Donate link
- **AND** prev/next arrow controls SHALL navigate between card sets

### Requirement: Who we are

The system SHALL render a split about section with a photo, copy and a
Learn More button.

#### Scenario: About section

- **GIVEN** the Meliora app is rendered
- **WHEN** the "Who we are?" section displays
- **THEN** it SHALL show a photo on one side and a section title
  "Who we are?" with body copy on the other
- **AND** it SHALL show a pill "Learn More" button

### Requirement: Counter band

The system SHALL render a photo-background band with four statistics.

#### Scenario: Statistics

- **GIVEN** the Meliora app is rendered
- **WHEN** the counter band displays
- **THEN** it SHALL show an image background
- **AND** it SHALL show four counters: "35+ Active Cases", "12m People
  Joined", "200m Cases every Year" and "1200 People get help from us"

### Requirement: Our services

The system SHALL render a centered icon grid of services.

#### Scenario: Service cards

- **GIVEN** the Meliora app is rendered
- **WHEN** the "We serve for peoples" section displays
- **THEN** it SHALL show a centered section title "We serve for peoples"
- **AND** it SHALL show a row of service cards, each with an icon badge, a
  title (e.g. "Pure Food & Water", "Health & Medicine", "Education") and a
  short description

### Requirement: Emergency care band

The system SHALL render a photo-background call-to-action band.

#### Scenario: Emergency band

- **GIVEN** the Meliora app is rendered
- **WHEN** the emergency band displays
- **THEN** it SHALL show an image background with the heading
  "They need your help" and two paragraphs
- **AND** it SHALL show a filled "Donate in a Case" button and an outlined
  "Join with Us" button

### Requirement: Join with Us

The system SHALL render a centered callout with a Join Now button.

#### Scenario: Join callout

- **GIVEN** the Meliora app is rendered
- **WHEN** the "Join with Us" section displays
- **THEN** it SHALL show the centered heading "Join with Us", a paragraph
  and a pill "Join Now" button

### Requirement: Footer

The system SHALL render a dark four-column footer with a newsletter form and
attribution.

#### Scenario: Footer columns

- **GIVEN** the Meliora app is rendered
- **WHEN** the footer displays
- **THEN** it SHALL have a dark plum (`#301A22`) background with white text
- **AND** it SHALL show the brand with a blurb and social icons
- **AND** it SHALL show a "Navigation" link list (Home, About, Services,
  Blog, Contact)
- **AND** it SHALL show a "Services" link list (charity-relevant items —
  the source ships base-template leftovers; paraphrase to Fundraising,
  Volunteers, Donations, Events)
- **AND** it SHALL show a "Subscribe newsletter" heading with an email
  input and a submit button
- **AND** the copyright bar SHALL link to `https://www.componentdock.com/`
  (Component Dock attribution)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Meliora app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Header in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Meliora — Charity Template"

## Verification checklist

- [ ] `openspec/specs/template-meliora/spec.md` exists on main with the full
      section list, Gherkin scenarios, and design tokens (this file).
- [ ] `docs/templates/meliora/tasks.md` exists on main with design notes and
      the implementation task outline.
- [ ] Fidelity: section order matches the Chariter preview DOM 1:1 (header
      utility bar + nav → hero slider → causes carousel → who we are →
      counter band → our services → emergency band → join with us → footer).
- [ ] Tokens used in the app: rose-red `#C30047`, sweep `#e6115f`, hero
      button `#FF6378`, kicker `#7EA0FF`, text plum `#301A22`, light bgs
      `#f9f9ff`/`#f0e9ff`, footer bg `#301A22`; Roboto body + Lora headings
      via Google Fonts `<link>`; pill buttons (radius 35px), rounded cards
      (10px), vertical hero dots.
- [ ] No ColorLib references in `apps/meliora` (provenance lives in this
      spec, TEMPLATES.md, and the PR only).
- [ ] Footer links `https://www.componentdock.com/`.
- [ ] All images picsum-seeded (`picsum.photos/seed/meliora-N/w/h`); hero +
      counter + emergency background seeds screened for a people/charity
      subject (see tasks.md verified picsum IDs).
- [ ] Implementer gate: `scripts/verify-app.sh meliora` (typecheck + lint +
      100% coverage tests + build) and `npm run spec:validate`.
