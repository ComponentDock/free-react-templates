# Template: PentaStudio (Creative Agency)

## Purpose

PentaStudio is a single-page creative agency template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Five Star"
art and crafting HTML template design (see TEMPLATES.md, line 1469 under
**Bootstrap (216)** and duplicate line under **Business**), built under a
different name ("PentaStudio" — penta = five, studio = creative workspace,
a nod to the "Five Star" source without reusing it) with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript (strict). No ColorLib references
in app code — provenance lives in this spec, TEMPLATES.md, and the PR.

## Design reference (replication findings)

- **Original:** ColorLib "Five Star" — free art/crafting agency HTML template
  (source: https://colorlib.com/wp/template/five-star/). Single page: a white
  header (logo left, right-aligned nav Home / Generic / Elements, hamburger
  menu), a full-width darkened hero banner ("Crafting Best Experience" +
  "Art and Crafting / Acting and Philosophy"), an Experience section (2 photo
  thumbs left + text content right with "View Details" button), a darkened
  carousel section (right-aligned white card with 3 carousel items + prev/next
  arrows), a Services section (4 centered icon cards on light bg), a Video
  section (red-tinted overlay, video thumbnail with play button left + text
  right), a Services-2 section (3 horizontal icon+text cards), a Contact
  section (address/email/phone blocks left + dark contact form right), and
  a dark Footer (About Agency links + Newsletter subscription + Instafeed
  grid + copyright bar with social icons).
- **Live preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/five-star/`. DOM fetched
  (`/tmp/fivestar-preview.html`, 19,836 bytes) + stylesheet `css/main.css`
  (`/tmp/fivestar-main.css`, 33,235 bytes) + TEMPLATES.md screenshot
  (`five-star-art-crafting-website-template.jpg`).
- **Visual design (live DOM + CSS):** Clean, modern creative-agency aesthetic
  with a bold red accent. White header over a darkened hero banner; the hero
  h1 "Crafting Best Experience" is in the brand red `#f5204b` at 60px. The
  experience section uses 2 photo thumbnails (left 6 columns) alongside
  descriptive text (right 6 columns). A darkened carousel section follows
  with a white card on the right containing testimonial/experience quotes in
  red text. Services are displayed as 4 centered white square icon cards on
  a light `#f9faff` background. The video section has a red-tinted overlay
  (`rgba(245,32,75,0.75)`) with a video thumbnail and white text. Services-2
  shows 3 horizontal icon+text cards on white. The contact section has a
  light background with address blocks (square icons that turn red on hover)
  on the left and a dark `#222` contact form on the right. The footer is
  dark `#222` with 3 columns (About Agency, Newsletter, Instafeed) and a
  copyright bar with 4 social icon squares. The ONLY accent is vivid red
  `#f5204b` — used for buttons, h1, carousel headings, icon colors, hover
  states, social icon hovers, and the video overlay tint. Font is single
  family: "Poppins" everywhere. Buttons are pill-shaped (`border-radius: 20px`),
  transparent with red text, filling red on hover.

## Design tokens (from `css/main.css` of the live preview)

- **Brand red:** `#f5204b` — `.primary-btn` hover background/border, `.banner-content h1` color, `.carousel-area .active-exprience-carousel .item h3` color, `.single-service .icon span` color, `.video-area .overlay-bg` (`rgba(245,32,75,0.75)`), `.single-address:hover .icon` background, `.footer-social a:hover` background, `.footer-bottom .footer-text i` heart color, `.subscription .info.error` color. Used ~38 times — THE accent of the whole template.
- **Body text:** `#777777` — paragraphs, `.common-input` / `.common-textarea` text color, placeholder colors. `font-family: "Poppins", sans-serif`.
- **Headings:** `#222222` — h2 (experience content, 36px), h4 (service titles, 18px 500), h5 (address labels, 16px 500), h6 (footer widgets, white 500 uppercase), footer background.
- **Light surfaces:** `#f9faff` (or `#f9f9ff` — near-identical) — `.service-area` background, `.service-area-2 .single-service .icon` background, `.contact-area` background, `.subscription input` background.
- **Dark surfaces:** `#222222` — footer background, `.contact-form` background. `#111111` — `.footer-social a` background.
- **Font:** Single family — `"Poppins", sans-serif` (Google-imported, weights 300/400/500/600). Loaded via inline `<style>` in the source; load via `<link>` in `index.html`.
- **Buttons (`.primary-btn`):** `background: transparent`, `border: 1px solid #eee`, `color: #f5204b`, `border-radius: 20px` (pill), `padding: 0 30px`, `line-height: 40px`, `text-transform: uppercase`, `font-weight: 500`. Hover: `background: #f5204b`, `border: 1px solid #f5204b`, `color: #fff`. `.white-bg` variant: `background: #fff`.
- **Header (`.default-header`):** White `#fff` background (inferred from `.header-top`), logo image left, right-aligned nav (Home / Generic / Elements) hidden on mobile, hamburger menu bar (`.menu-bar` with `lnr lnr-menu` icon).
- **Hero (`.banner-area`):** `background: url(banner-bg.jpg) no-repeat center center/cover`, dark overlay (`.overlay-bg` with `rgba(0,0,0,0.75)`), `fullscreen` height. Content centered: h1 "Crafting Best Experience" (60px Poppins 600, color `#f5204b`, responsive to 40px on mobile) + p subtitle (white 16px).
- **Experience (`.exprience-area`, section-gap):** White background. 2 `.exprience-thumb` columns (col-3 each, `min-height: 400px`, bg cover photos) + `.exprience-content` (col-6): h2 (36px, `#222`), h6 subtitle (16px 400 `#222`), p paragraph, `.primary-btn` "View Details".
- **Carousel (`.carousel-area`, section-gap):** `background: url(c-bg.jpg) cover`, dark overlay (`rgba(0,0,0,0.25)`). Right-aligned white card (`.active-exprience-carousel .item`, col-6/9, `background: #fff`, `padding: 100px 60px`): h3 (36px `#f5204b`) + p paragraph. 3 carousel items. Prev/next trigger buttons (40px square, white bg, `border: 1px solid #eee`; hover: `#f5204b` bg, white text) positioned absolute right outside the card.
- **Services 1 (`.service-area`, bg `#f9faff`, padding 90px 0 120px):** 4 `.single-service` columns: `.icon` (130px square, white bg, `border-radius: 3px`) with centered Linearicons icon (36px `#f5204b` 600) + `.desc` (mt-30): h4 (18px 500) + p paragraph. All centered.
- **Video (`.video-area`):** `background: url(c-bg.jpg) cover`, red overlay (`rgba(245,32,75,0.75)`). 2-column: left (col-6/5): `.video-wrap` (bg photo, dark overlay `rgba(0,0,0,0.75)`, centered `.play-btn` image); right (col-6/7): `.video-content` with h3 (36px white) + p (white). `box-shadow: 0.872px 9.962px 30px rgba(0,0,0,0.3)` on video wrap.
- **Services 2 (`.service-area-2`, padding 90px 0 120px):** 3 `.single-service` columns (col-md-4): `.icon` (90px square, `#f9faff` bg, `border-radius: 3px`) with Linearicons icon (36px `#f5204b`) + `.desc` (ml-20, text-left): h4 (18px 500) + p. Horizontal layout (`d-flex justify-content-between`).
- **Contact (`.contact-area`, bg `#f9faff`):** 2-column: left (col-lg-5): 3 `.single-address` blocks, each with `.icon` (60px square, white bg, `border-radius: 3px`, Linearicons icon 24px `#222`; hover: bg `#f5204b`, icon white) + `.desc` (ml-30): h5 label (16px 500) + p / a links. Address, Email Address (2 links), Phone Number (2 links). Right (col-lg-6/7): `.contact-form` (bg `#222`, `padding: 40px 30px`): 2 inputs (name, email) + textarea + "Send Message" button (`.primary-btn white-bg`).
- **Footer (section-gap, bg `#222222`):** 3-column widget area:
  - About Agency (col-lg-3): h6 (white uppercase 500, mb-20) + `.footer-nav` list (4 links: Managed Website / Manage Reputation / Power Tools / Marketing Service; white, hover `#f5204b`)
  - Newsletter (col-lg-6): h6 + p (white) + `.subscription` form: email input (60% width, `#f9f9ff` bg, `border-radius: 25px`) + "Get Started" button (`.primary-btn white-bg`)
  - Instafeed (col-lg-3): h6 + `.instafeed` grid (8 images, 4 per row, 25% width each)
  Footer bottom bar (`.footer-bottom`): copyright text (white, heart icon in `#f5204b`, "Colorlib" credit → replace with "Component Dock" link to https://www.componentdock.com/) + 4 `.footer-social` icon links (30px squares, `#111` bg, white icons; hover: `#f5204b` bg).
- **Section gap:** `.section-gap` adds `padding: 120px 0` (from the base CSS).
- **Overlay pattern:** `.overlay` is absolute, full coverage; `.overlay-bg` applies the specific dark/tinted background. Used on hero, carousel, video, and video-wrap.
- **Placeholder images:** `https://picsum.photos/seed/pentastudio-<n>/<w>/<h>`. Subject-critical: hero banner, 2 experience thumbs, carousel bg, video bg + thumbnail, 8 instafeed images. Icons from `lucide-react` (replacing Linearicons). Social icons: inline SVG (FB, Twitter, Dribbble, Behance).
- **Carousel:** owl-carousel in source with prev/next arrow triggers — implement as a React state carousel (currentSlide, prev/next handlers). 3 slides, one visible at a time.
- **Mobile menu:** hamburger `.menu-bar` with `lnr-menu` icon — jQuery toggle in source → React state.

## Requirements

### Requirement: Header — white bar with logo + nav + hamburger

#### Scenario: Header content
- GIVEN the page loads
- WHEN the header is rendered
- THEN it displays a logo (image or text) on the left
- AND navigation links: Home, Generic, Elements
- AND a hamburger menu icon on the right for mobile

#### Scenario: Mobile menu
- GIVEN the viewport is below 768px
- WHEN the page is rendered
- THEN the nav links are hidden and a hamburger icon appears
- AND clicking the hamburger toggles a dropdown with all nav links

### Requirement: Hero banner — full-width darkened photo with centered red heading

#### Scenario: Hero content
- GIVEN the hero section is rendered
- WHEN viewed
- THEN it displays heading "Crafting Best Experience" in brand red
- AND a white subtitle "Art and Crafting / Acting and Philosophy"

#### Scenario: Hero styling
- GIVEN the hero section is rendered
- WHEN viewed
- THEN it has a darkened background photo (cover, centered) with 75% black overlay
- AND h1 is 60px Poppins 600 in `#f5204b` (red), responsive to 40px on mobile
- AND the section is full-screen height

### Requirement: Experience section — photo thumbs + descriptive text

#### Scenario: Experience content
- GIVEN the experience section is rendered
- WHEN viewed
- THEN it displays heading "From the root of experience We dig out the best talent"
- AND a subtitle paragraph
- AND a description paragraph
- AND a "View Details" button

#### Scenario: Experience layout
- GIVEN the experience section is rendered
- WHEN viewed on desktop
- THEN it uses a 3+3+6 column layout (2 photo thumbs on left, text on right)
- AND photo thumbs have min-height 400px with cover background

### Requirement: Carousel section — dark bg with white card carousel

#### Scenario: Carousel content
- GIVEN the carousel section is rendered
- WHEN viewed
- THEN it displays a white card with heading (in brand red) and paragraph
- AND prev/next arrow buttons for navigation
- AND 3 carousel items that cycle on arrow click

#### Scenario: Carousel styling
- GIVEN the carousel section is rendered
- WHEN viewed
- THEN it has a darkened background photo with 25% black overlay
- AND the white card is positioned on the right half of the viewport
- AND prev/next buttons are 40px squares, white bg, turning red on hover

### Requirement: Services section — 4 centered icon cards

#### Scenario: Services content
- GIVEN the services section is rendered
- WHEN viewed
- THEN it displays 4 service cards, each with a square icon, title, and description
- AND icons are in brand red color

#### Scenario: Services layout
- GIVEN the services section is rendered
- WHEN viewed
- THEN background is `#f9faff` (light)
- AND icon containers are 130px white squares with 3px border-radius
- AND cards are centered in a 4-column grid

### Requirement: Video section — red-tinted overlay with video thumbnail + text

#### Scenario: Video content
- GIVEN the video section is rendered
- WHEN viewed
- THEN it displays heading "From the root of experience We dig out the best talent" in white
- AND a description paragraph in white
- AND a video thumbnail with a centered play button on the left

#### Scenario: Video styling
- GIVEN the video section is rendered
- WHEN viewed
- THEN the section has a red-tinted overlay (`rgba(245,32,75,0.75)`)
- AND the video thumbnail has a dark overlay (`rgba(0,0,0,0.75)`) with box-shadow
- AND text content is on the right side

### Requirement: Services-2 section — 3 horizontal icon+text cards

#### Scenario: Services-2 content
- GIVEN the services-2 section is rendered
- WHEN viewed
- THEN it displays 3 service cards, each with a square icon, title, and description
- AND cards are laid out horizontally (icon left, text right)

#### Scenario: Services-2 layout
- GIVEN the services-2 section is rendered
- WHEN viewed
- THEN icon containers are 90px squares with `#f9faff` background
- AND text is left-aligned with 20px left margin

### Requirement: Contact section — address blocks + dark contact form

#### Scenario: Contact content
- GIVEN the contact section is rendered
- WHEN viewed
- THEN it displays 3 address blocks: Address, Email Address, Phone Number
- AND a contact form with name input, email input, textarea, and "Send Message" button

#### Scenario: Contact address hover
- GIVEN an address block is rendered
- WHEN the user hovers over it
- THEN the icon square turns brand red
- AND the icon color turns white

#### Scenario: Contact form styling
- GIVEN the contact form is rendered
- WHEN viewed
- THEN it has a dark `#222` background with 40px/30px padding
- AND inputs have transparent backgrounds with subtle border
- AND the submit button is white with red text (`.primary-btn white-bg`)

### Requirement: Footer — 3-column widgets + copyright bar

#### Scenario: Footer content
- GIVEN the footer is rendered
- WHEN viewed
- THEN it has 3 columns: About Agency (4 links), Newsletter (email form), Instafeed (8 images in a 4×2 grid)
- AND a copyright bar with social icons

#### Scenario: Footer credit
- GIVEN the footer copyright bar is rendered
- WHEN viewed
- THEN it displays "Copyright © <year> All rights reserved" with a heart icon
- AND a credit link to https://www.componentdock.com/ ("Component Dock")

#### Scenario: Footer styling
- GIVEN the footer is rendered
- WHEN viewed
- THEN background is dark `#222222`
- AND all widget headings are white, uppercase, 500 weight
- AND footer links are white, hover to `#f5204b`
- AND social icon squares are 30px, `#111` bg, white icons, hover `#f5204b`
- AND the newsletter input has `border-radius: 25px` (pill shape)

## Verification checklist

- [ ] `openspec/specs/template-pentastudio/spec.md` validated (`npm run spec:validate`)
- [ ] App folder `apps/pentastudio`, package `@free-react-templates/pentastudio`,
      no ColorLib references in app code (grep for colorlib/five-star in
      apps/pentastudio)
- [ ] Footer links https://www.componentdock.com/
- [ ] Tests first, 100% coverage (Vitest + RTL) — `bash scripts/verify-app.sh pentastudio`
- [ ] Section order matches the source: header → hero banner → experience →
      carousel → services → video → services-2 → contact → footer
- [ ] Tokens in `src/index.css` `@theme`: `--color-brand: #f5204b`,
      `--color-body: #777`, `--color-heading: #222`, `--color-surface: #f9faff`,
      `--color-dark: #222`, `--color-dark-alt: #111`; Google Fonts `<link>` in
      `index.html`: Poppins (300/400/500/600)
- [ ] Header: white bg, logo + 3 nav links + hamburger icon; mobile toggle
- [ ] Hero: full-screen bg photo with 75% black overlay, centered h1
      "Crafting Best Experience" in `#f5204b` 60px Poppins 600, white
      subtitle, responsive to 40px on mobile
- [ ] Experience: 2 photo thumbs (col-3 each, min-height 400px) + text
      (col-6) with heading, subtitle, paragraph, "View Details" button
- [ ] Carousel: dark bg photo with 25% overlay, right-aligned white card
      with 3 items (h3 in `#f5204b` + p), prev/next arrow buttons
- [ ] Services: `#f9faff` bg, 4 centered cards with 130px white icon
      squares (Linearicons/lucide icons in `#f5204b`), h4 + p
- [ ] Video: `#f5204b`-tinted overlay (`rgba(245,32,75,0.75)`), video
      thumbnail with dark overlay + play button on left, white h3 + p on
      right, box-shadow on video wrap
- [ ] Services-2: white bg, 3 horizontal cards with 90px `#f9faff` icon
      squares, icon + h4 + p left-aligned
- [ ] Contact: `#f9faff` bg, 3 address blocks (60px icon squares, hover
      `#f5204b`), dark `#222` contact form (name + email + textarea +
      "Send Message" white-bg button)
- [ ] Footer: dark `#222` bg, 3-column widgets (About Agency 4 links,
      Newsletter email form with pill input, Instafeed 4×2 image grid) +
      copyright bar with Component Dock link + 4 social icon squares
- [ ] Placeholder images via `https://picsum.photos/seed/pentastudio-<n>/<w>/<h>`,
      subject-screened (hero, 2 experience thumbs, carousel bg, video bg +
      thumbnail, 8 instafeed images); icons from `lucide-react` (replacing
      Linearicons) + inline SVG for social icons (FB, Twitter, Dribbble,
      Behance)
- [ ] PR description: source template, preview URL
      (`preview.colorlib.com/theme/five-star/`), design tokens, diffs (name,
      placeholder images, React carousel instead of owl-carousel, React
      hamburger instead of jQuery, Component Dock footer credit)
