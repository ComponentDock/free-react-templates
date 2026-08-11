# Template: Maven (Creative Agency Template)

## Purpose

Maven is a single-page creative/digital-agency landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Kanox" website template design (see TEMPLATES.md), built under
a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Kanox" — creative agency / digital agency template
  (source: https://colorlib.com/wp/template/kanox/).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/kanox/
  (HTTP 200, ~49 KB HTML fetched; `css/style.css` ~196 KB parsed for tokens).
  Title tag: "Kanox". Bootstrap 4 + owl-carousel (testimonials) + themify
  icons + flaticon; no AOS; animated floating hero icons via `custom-animation`.
- **Screenshot analyzed:** `kanox-free-template.jpg` (TEMPLATES.md) — light
  hero with abstract colorful geometric shards (pink/teal/navy) on the left,
  giant two-line headline "THINK CREATIVE / TURN IDEAS INTO LIFE" (black +
  navy), a large circular photo of three people at a laptop framed by a
  colorful ring, and a hot-pink "LEARN MORE" button. Logo top-left: "KANOX"
  in bold black caps with a pink spark/star above the K. This matches the live
  preview 1:1.
- **Section order (1:1):** Navbar (`main_menu.home_menu`, logo image left,
  links right) → Banner hero (`banner_part`, light gray #f7f7f7 + colorful
  overlay shards, 2-col: giant uppercase h2/h3 left, circular framed photo
  right, pink `.btn_1` "learn more") → CTA band (`cta_part`, centered pink
  eyebrow "Our Features" + h1 "Building brands with purpose") → Services
  (`service_part.section_bg_2`, dark navy #162b45 band, 4 dark cards) →
  About (`about_part`, split: image collage with absolute "25 Years Working
  Experience" h2 overlapping bottom, right text + pink eyebrow + `.btn_1`) →
  Recent Work (`our_latest_work.section_padding`, "Creative work for client"
  heading + 3 alternating image/text rows) → Stats band (`happy_client`, dark
  navy, 4 big white counters 85/95/75/95) → Review/Video (`review_part`, left:
  video poster with black overlay + pulsing pink play button + "Watch intro
  video", right: testimonial slider) → CTA band 2 (`cta_part`, "Creative work
  for client" heading introducing team) → Team (`team_member_section`, dark
  navy, 3 bordered cards, grayscale photos, name/role/social links) → Blog
  (`blog_part.section_padding`, "We Have True Story", 3 white cards with
  category/date/title/meta) → Footer (`footer-area`, dark navy, about +
  newsletter form + social icons + Instagram grid + copyright).
- **Design tokens extracted from the preview CSS:**
  - Brand accent: **#ff1481** (hot pink) — `.btn_1` background (white 14px
    uppercase 500 text, padding 19.5px 42px, border-radius **4px**, margin-top
    44px, box-shadow `0px 10px 30px 0px rgba(190,0,88,0.35)`), `.cta_part`
    eyebrow text, `.section_tittle p` eyebrow (14px/500 uppercase), work h5
    labels, blog meta icons, footer subscribe button (49×40px, radius 0),
    footer link hover, copyright link, video play button, owl-nav hover
    highlight `rgba(255,20,129,0.6)`.
  - Dark navy: **#162b45** — `.section_bg_2` (services band), `.happy_client`
    (stats), `.team_member_section`, `.footer-area`. Muted on dark:
    #abb2ba, rgba(255,255,255,0.4); borders #45556a (team cards, footer input
    group).
  - Service cards: bg **#2e4158**, border-radius **5px**, padding 50px 24px,
    centered; icon medallion 61×61px circle bg **#586779** white glyph;
    h3 white **Oswald 600 22px**; p rgba(255,255,255,0.4) 15px/1.8. Hover:
    card → #fff, h3 → **#112e41**, p → #888888, icon circle → #ff1481.
  - Heading color: **#112e41** (deep navy) — h2 (Oswald 600 44px), nav links
    (Roboto 15px uppercase 500), section_tittle h2 (42px/700).
  - Banner: bg **#f7f7f7** (height 900px) with PNG overlay shards
    (banner_overlay_1/2, colorful geometric shapes) + floating animated
    icons; h2 **Poppins 800, 100px, uppercase** (span block 70%); h3 Roboto
    300 70px uppercase; right column circular photo (`banner_img.png`).
  - Fonts: **"Roboto", sans-serif** (body 14px), **"Oswald", sans-serif**
    (section h2s, service h3s, testimonial name, team names), **"Poppins",
    sans-serif** (banner h2, weight 800). Load all three via Google Fonts.
  - Stats band: big number 60px/700 white float-left + h4 white 22px uppercase
    label, padding-left 88px, margin-top 28px.
  - Video block: `.intro_video_bg` height 550px, bg image + black overlay
    opacity **0.7**; play button 80px circle #ff1481 with infinite
    `pulse-border` animation; caption p white 15px.
  - Testimonial (owl): italic quote 16px, name h3 Oswald 20px/500, role h5
    14px/400; prev/next arrows 30px with pink hover highlight.
  - Team: card border 1px #45556a, padding 20px, centered; grayscale photo;
    name white Oswald, role #abb2ba 14px; social links (Facebok/Twitter/Skype)
    #abb2ba, margin 0 23px, with 10px #45556a dot separators.
  - Blog cards: image radius 0; card-body white, border 1px **#e2e6e7**
    (border-top 0), padding 30px; category link uppercase #888888; date span
    #888888; h5 20px/600 capitalize, hover → #ff1481; meta li #8a8a8a with
    pink icons, margin-right 30px.
  - Footer: bg #162b45, padding 100px 0 20px; widget h4 white 24px/700;
    paragraph #abb2ba 14px/1.8; newsletter input h 40px transparent no border
    pl 20px 13px #999999 (input-group border 1px #45556a, padding 5px);
    subscribe button .btn bg #ff1481 white, 49×40px, radius 0, arrow icon;
    social icons #cccccc 14px margin-right 20px; Instagram widget = 6 square
    thumbs; bottom copyright line (ColorLib credit replaced with original
    attribution).
  - Radii: buttons 4px; service cards 5px; circles 50% (icon medallions,
    video play). Blog/footer subscribe radius 0.
- **Recreation decisions:** hero video-poster/photo backgrounds → seeded
  picsum with black overlay (video `bg-black/70`); no copied images; icons →
  lucide-react (Smartphone/Monitor/Shield/Headphones for services, Play for
  video, ArrowRight for buttons/links, MessageCircle + Eye for blog meta,
  Instagram for footer grid; brand social icons → inline SVG paths since
  lucide removed brand icons); team/blog photos, hero circle photo, work
  images, Instagram thumbs → `picsum.photos/seed/maven-<n>/<w>/<h>`; Roboto +
  Oswald + Poppins (800) via Google Fonts `<link>` in `index.html`; tokens
  #ff1481 / #162b45 / #2e4158 / #586779 / #112e41 / #f7f7f7 in `@theme`.

Maven lives in `apps/maven` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a light navbar with a logo on the left and uppercase
anchor links on the right.

#### Scenario: Navbar content

- **GIVEN** the Maven page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site logo on the left
- **AND** the navbar SHALL show uppercase links for Home, About, Services,
  Portfolio, Blog, Pages, and Contact on the right

#### Scenario: Navbar styling

- **GIVEN** the navbar is rendered
- **WHEN** a nav link is displayed
- **THEN** the link SHALL be Roboto 15px uppercase weight 500 in deep navy
  (#112e41)

#### Scenario: Pages dropdown

- **GIVEN** the navbar is rendered
- **WHEN** the user activates the "Pages" item
- **THEN** a dropdown SHALL reveal links for Single Blog and Elements

#### Scenario: Mobile menu

- **GIVEN** the navbar is rendered on a narrow viewport
- **WHEN** the user activates the hamburger toggle
- **THEN** the nav links SHALL be reachable via the collapsible menu

### Requirement: Banner hero

The system SHALL render a full-width light-gray hero with a giant two-line
headline, a circular framed photo, and a hot-pink call-to-action button.

#### Scenario: Hero content

- **GIVEN** the Maven page is rendered
- **WHEN** the hero is in view
- **THEN** the hero SHALL show the headline "Think Creative Turn" in Poppins
  800, 100px uppercase, deep navy
- **AND** the second line SHALL read "Ideas Into Life" in Roboto 300, 70px
  uppercase
- **AND** the hero SHALL show a hot-pink (#ff1481) button labeled "Learn More"
  with a right arrow icon, radius 4px, padding ~19.5px 42px, and a soft pink
  glow shadow

#### Scenario: Hero background

- **GIVEN** the hero is rendered
- **WHEN** the page loads
- **THEN** the hero SHALL use a light gray (#f7f7f7) background with abstract
  colorful geometric shape decorations (pink/teal/navy) rendered with CSS
  shapes or gradient-free divs (no copied overlay images)

#### Scenario: Hero photo

- **GIVEN** the hero is rendered
- **WHEN** the right column is in view
- **THEN** it SHALL show a large circular photo (seeded picsum) framed by a
  colorful ring border

### Requirement: Features CTA band

The system SHALL render a centered band with a pink eyebrow label and a bold
section headline directly below the hero.

#### Scenario: Band content

- **GIVEN** the features band is rendered
- **WHEN** the page loads
- **THEN** the band SHALL show the pink uppercase eyebrow "Our Features"
- **AND** the band SHALL show the headline "Building brands with purpose" in
  deep navy, 42px weight 700

### Requirement: Services section

The system SHALL render a dark navy (#162b45) band with four centered service
cards with icon medallions.

#### Scenario: Service cards

- **GIVEN** the services section is rendered
- **WHEN** the page loads
- **THEN** it SHALL render four cards in a 4-column row (stacking on mobile):
  Responsive Design, Quality Matters, Better Security, and 24/7 Service
- **AND** each card SHALL have a dark navy-blue (#2e4158) background with
  border-radius 5px, a 61px circular icon medallion (#586779) with a white
  glyph, a white Oswald 22px heading, and a short muted description
  (rgba(255,255,255,0.4))

#### Scenario: Card hover

- **GIVEN** a service card is rendered
- **WHEN** the card is hovered
- **THEN** the card background SHALL turn white, the heading SHALL turn deep
  navy (#112e41), the description SHALL turn #888888, and the icon medallion
  SHALL turn hot pink (#ff1481)

### Requirement: About section

The system SHALL render a split section with an image collage on the left
carrying an overlapping experience headline, and text with a button on the
right.

#### Scenario: About content

- **GIVEN** the about section is rendered
- **WHEN** the page loads
- **THEN** the left column SHALL show a photo collage with the headline "25
  Years Working Experience" (Oswald 600, 42px) overlapping the bottom edge
- **AND** the right column SHALL show the pink uppercase eyebrow "About our
  company" and the headline "Make the customer the hero of your story"
- **AND** the right column SHALL show a supporting paragraph and a hot-pink
  "Learn More" button

### Requirement: Recent work section

The system SHALL render a "Creative work for client" heading followed by three
alternating image/text work rows.

#### Scenario: Section title

- **GIVEN** the recent work section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the pink uppercase eyebrow "Recent Work" and
  the headline "Creative work for client"

#### Scenario: Work rows

- **GIVEN** the work section is rendered
- **WHEN** the rows are in view
- **THEN** it SHALL render three rows, alternating image-left/text-right and
  text-left/image-right (stacking on mobile)
- **AND** each row SHALL show a pink uppercase label ("Mockup design"), a bold
  title, a short paragraph, and a "Learn More" text link with an arrow

### Requirement: Stats band

The system SHALL render a dark navy (#162b45) band with four large white
counters.

#### Scenario: Counter items

- **GIVEN** the stats band is rendered
- **WHEN** the page loads
- **THEN** it SHALL show four items in a 4-column row (stacking on mobile):
  85 Satisfied Client, 95 Total Project, 75 Work Completed, and 95 Work
  Completed
- **AND** each item SHALL show a large white number (60px weight 700) with a
  white uppercase label beside it (22px)

### Requirement: Video and testimonials section

The system SHALL render a split section with a video poster and pulsing play
button on the left, and a testimonial slider on the right.

#### Scenario: Video block

- **GIVEN** the review section is rendered
- **WHEN** the page loads
- **THEN** the left column SHALL show a video poster image (seeded picsum)
  with a black overlay at ~70% opacity
- **AND** a hot-pink (#ff1481) circular play button with a pulsing ring
  animation SHALL sit on the poster, with the caption "Watch intro video"
  below it

#### Scenario: Testimonial slider

- **GIVEN** the review section is rendered
- **WHEN** the slider is in view
- **THEN** it SHALL show a testimonial with an italic quote, the author name
  (e.g. "Daniel E Gilcritst") in Oswald 20px, and a role (e.g. "Manager,
  Vision") in 14px
- **AND** prev/next controls SHALL cycle between the testimonial slides

### Requirement: Team section

The system SHALL render a dark navy (#162b45) section with three bordered team
member cards.

#### Scenario: Team cards

- **GIVEN** the team section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the heading "Creative work for client"
- **AND** it SHALL render three cards in a 3-column row (stacking on mobile):
  Jhosef Williams, Daniel Hancock, and Bernard Perales — each a Web Developer
- **AND** each card SHALL have a 1px #45556a border, a grayscale photo, a
  white Oswald name, a muted role line (#abb2ba), and social links (Facebook,
  Twitter, Skype) separated by small dots

### Requirement: Blog section

The system SHALL render a "We Have True Story" heading with three blog cards
showing category, date, title, and engagement meta.

#### Scenario: Blog cards

- **GIVEN** the blog section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the pink uppercase eyebrow "Latest News" and
  the headline "We Have True Story"
- **AND** it SHALL render three cards in a 3-column row (stacking on mobile),
  each with an image, an uppercase category link (e.g. "Art, design" or
  "Technology"), a date ("March 30, 2019"), a bold 20px title (hover turns
  hot pink), and meta showing "4 Comments" and "10 View" with pink icons

#### Scenario: Card styling

- **GIVEN** a blog card is rendered
- **WHEN** the card is in view
- **THEN** the card body SHALL be white with a 1px #e2e6e7 border (top open)
  and 30px padding, matching the original's card treatment

### Requirement: Footer

The system SHALL render a dark navy (#162b45) footer with about text, a
newsletter form, social icons, an Instagram grid, and a copyright bar.

#### Scenario: Footer widgets

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the footer SHALL show an about paragraph with the site name
- **AND** it SHALL show a "Newsletter" widget: heading, description, an email
  input (transparent, 40px, no border) and a hot-pink square subscribe button
  with an arrow icon
- **AND** it SHALL show social icons (Facebook, Twitter, Instagram, etc.)
- **AND** it SHALL show an "Instagram" widget with a grid of six square image
  thumbnails

#### Scenario: Copyright bar

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the footer SHALL show a centered copyright line with an original
  attribution (the ColorLib credit is replaced)

#### Scenario: Newsletter submit

- **GIVEN** the newsletter form is rendered
- **WHEN** the user submits an email address
- **THEN** the form SHALL prevent default navigation (no backend call)

### Requirement: Page composition

The system SHALL compose all sections in a single page with proper landmarks
and a document title.

#### Scenario: Full page render

- **GIVEN** the Maven app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections (Hero, Features, Services, About, Recent Work, Stats, Video +
  Testimonials, Team, Blog) in the main landmark, and the Footer in the
  contentinfo landmark
- **AND** the document title SHALL be "Maven — Creative Agency Template"

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] 100% coverage on `apps/maven` (lines/functions/branches/statements)
- [ ] Per-app gate: `npm run verify:app -- maven` (typecheck + lint + coverage + build)
- [ ] Full gate green in CI on merge (typecheck → lint → test:coverage → build → knip → fallow)
- [ ] Section order matches the preview 1:1; tokens (#ff1481, #162b45, #2e4158, #586779, #112e41, #f7f7f7, Roboto/Oswald/Poppins) used via `@theme`
- [ ] No ColorLib assets copied (picsum seeds `maven-<n>`, Google Fonts links, lucide icons + inline SVG brand icons only)
