# Template: Equity (Investment Consulting Template)

## Purpose

Equity is a single-page investment-consulting website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Inves" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Inves" — investment consulting template
  (source: https://colorlib.com/wp/template/inves/).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/inves/
  (HTTP 200, ~32.8 KB HTML fetched + `css/style.css` ~21.7 KB parsed;
  live render inspected in the browser for section order and computed
  styles).
- **Screenshot analyzed:** `inves-free-template.jpg` (TEMPLATES.md) —
  fixed white header with purple "INVES" logo and dark-gray nav links
  (Home, Investors, About, Services, Press, Blog, Contact); full-bleed
  hero photo of a business meeting under a dark overlay, centered white
  headline "Investment Consulting." + white-outline "Get in touch" button,
  carousel arrows at the sides; directly below the hero, a 3-column row of
  image cards (skyscrapers / suit cufflink / smartphone with a finance
  chart) that slightly overlaps the hero's bottom edge.
- **Section order (1:1, from the live render):** Header (sticky, logo +
  desktop nav + mobile toggle) → Hero carousel (2 slides: "Investing for
  Success" / "Investment Consulting", each with white-outline CTA) →
  Featured services strip (3 image cards overlapping the hero bottom) →
  Investors (heading + 4 client logos) → About (video figure + "Welcome
  to Inves" copy + 4 counters) → Services (6 icon cards on `bg-light`) →
  Leadership (3 team cards) → Press Releases (3 news items) →
  Testimonials (dark image-background carousel) → Blog (2 post cards) →
  Contact (form + "Call Us" block on `bg-light`) → Footer (#333333).
- **Design tokens extracted from the preview CSS:**
  - Brand accent: **#7f4782** (purple) — logo span, section headings
    (`.block-heading-1 h2`, `h2.text-primary`), service card titles
    (`.text-primary h4`), counter numbers, testimonial carousel active
    dot, form-control focus border. Headings: 2.5rem (block headings),
    weight bold.
  - Ink: **#25262a** / **#000** — body text and links (`.text-black`,
    headings); secondary text **#939393** (body default) and
    **#b8b8b8** (`.font-gray-5`, `.block-heading-1 span` eyebrow).
  - Section backgrounds: white (hero-adjacent sections, about, team,
    press, blog), **#f4f5f9** (`bg-light` — services + contact),
    dark overlay `rgba(52, 58, 64, 0.3–0.4)` over hero/testimonial
    photos, footer **#333333**.
  - Buttons: hero CTA is white-outline (transparent bg, `border: 2px
solid #fff` (`border-w-2`), white text, hover = white bg + black
    text, padding `8px 20px` `.btn-md`); contact submit and newsletter
    subscribe are solid purple (`btn-primary` Bootstrap default with
    #7f4782 overrides via `.btn` link color) white text; team social
    buttons are 2px-outline rounded squares.
  - Fonts: **"Nunito"**, sans-serif stack (headings + body); testimonial
    blockquote uses **'Georgia', Times, serif** italic 18px.
  - Hero: `.site-section-cover` full viewport (`100vh`, min-height
    700px), `h1` 4.5rem white line-height 1, subtext 1.6rem
    `rgba(255,255,255,0.8)`; carousel via owl (`.slide-one-item`, white
    prev/next arrows 5rem, 40% opacity).
  - Counters: number 4rem purple, 50×3px underline, caption 14px
    uppercase-ish (`letter-spacing: .05em`) black.
  - Team cards: `.block-team-member-1` padding 30px, `border: 1px solid
#e9ecef`, centered; photo 130px rounded-circle; name h3 20px; role
    span uppercase 12px #b8b8b8.
  - Testimonials: `.block-13.overlay.bg-image` (fixed-attachment photo +
    dark overlay), white heading, white blockquote cards on #fff with
    Georgia italic 18px, 60px round avatar, name 18px; dots #ccc /
    active #7f4782.
  - Forms: `.form-control` height 55px, no border, soft shadow
    `0 4px 5px -3px rgba(0,0,0,0.2)`, focus border #7f4782; newsletter
    input is transparent with white text on the dark footer.
  - Footer: `background: #333333`, padding 4–8em, headings white 16px,
    body links #999999 (hover white), body text #737373, bottom border
    `rgba(255,255,255,0.1)`.
- **Known upstream quirk (recorded for implementers):** team member names
  carry Bootstrap `text-white` (computed `rgb(255,255,255)`) on a white
  card — invisible in the original; recreate with readable ink
  (#25262a) and note the deviation in the PR.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/equity-<n>/<w>/<h>`); icons → lucide-react (signal,
  anchor, magnet, briefcase, money, play, menu; social brands as inline
  SVG simple-icons paths — lucide removed brand icons); Nunito via Google
  Fonts `<link>`; purple accent in `@theme`; no assets copied.

Equity lives in `apps/equity` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a sticky top navigation bar with the site name
"Equity" (purple), anchor links to all sections, and a mobile toggle.

#### Scenario: Navbar content

- **GIVEN** the Equity page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Equity" with the brand
  accent color #7f4782
- **AND** the navbar SHALL show links to Home, Investors, About,
  Services, Press, Blog, and Contact (anchors to their sections)

#### Scenario: Mobile menu toggle

- **GIVEN** the navbar is rendered on a narrow viewport
- **WHEN** the page loads
- **THEN** the navbar SHALL show a menu toggle button instead of the
  inline link list
- **AND** activating the toggle SHALL open a mobile menu with the same
  section links

### Requirement: Hero carousel

The system SHALL render a full-viewport hero carousel with at least two
slides, each with a headline, subtext, and a white-outline CTA.

#### Scenario: Hero slides

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** the hero SHALL show a full-viewport (100vh, min 700px)
  photo background with a dark overlay `rgba(52, 58, 64, 0.3)`
- **AND** the first slide SHALL headline "Investing for Success" and the
  second slide "Investment Consulting", each with a paragraph of subtext
  and a "Get in touch" white-outline button (transparent bg, 2px white
  border, white text)

#### Scenario: Carousel navigation

- **GIVEN** the hero carousel is displayed
- **WHEN** the user activates the next/previous arrow
- **THEN** the carousel SHALL advance to the next/previous slide

### Requirement: Featured services strip

The system SHALL render a 3-column row of image cards that overlaps the
hero's bottom edge.

#### Scenario: Strip content

- **GIVEN** the page is rendered
- **WHEN** the featured strip is displayed
- **THEN** it SHALL show three cards titled Business Analytics,
  Investment Solutions, and Individual Approach
- **AND** each card SHALL show a photo above the title, a short
  paragraph, and a "Read more" link
- **AND** the strip SHALL overlap the hero bottom (negative top margin,
  raised z-index)

### Requirement: Investors section

The system SHALL render an "Our Investors" heading followed by a row of
four client logos.

#### Scenario: Investors content

- **GIVEN** the page is rendered
- **WHEN** the investors section is displayed
- **THEN** it SHALL show the uppercase eyebrow and heading "Our
  Investors" in purple 2.5rem
- **AND** it SHALL show four client logo images in a single row

### Requirement: About section

The system SHALL render an about block with a playable video figure,
welcome copy, and four stat counters.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show a video figure (photo with a round white play
  button) on the left
- **AND** it SHALL show a purple "Welcome to Equity" heading, three
  paragraphs of copy, and a "Read More" link on the right

#### Scenario: Stat counters

- **GIVEN** the about section is displayed
- **WHEN** the counters row renders
- **THEN** it SHALL show four counters: Year of Experience, Number of
  Engineers, Number of Employees, and Number of Golds
- **AND** each counter SHALL show a large (4rem) purple number with a
  short underline and a 14px caption

### Requirement: Services section

The system SHALL render a light-background services section with six
icon cards in two rows of three.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "Our Services" on a #f4f5f9
  background
- **AND** it SHALL show six cards: Business Analytics, Investment
  Solutions, and Individual Approach (each appearing twice)
- **AND** each card SHALL show an icon (line/outline style), a purple
  title, and a short paragraph

### Requirement: Leadership section

The system SHALL render three centered team cards with photo, name, role,
bio, and social buttons.

#### Scenario: Team card content

- **GIVEN** the page is rendered
- **WHEN** the leadership section is displayed
- **THEN** it SHALL show the heading "Our Leadership"
- **AND** it SHALL show three cards with a round photo, a name (readable
  ink — see upstream-quirk note), an uppercase role label (e.g. Mining
  Expert, Project Manager, Engineer), a short bio, and three social icon
  buttons

### Requirement: Press section

The system SHALL render a "Press Releases" list with three news items,
each with a thumbnail, title, date, and excerpt.

#### Scenario: Press items

- **GIVEN** the page is rendered
- **WHEN** the press section is displayed
- **THEN** it SHALL show the heading "Press Releases" beside a list of
  three items
- **AND** each item SHALL show a thumbnail image, a linked title (e.g.
  "How To Invest In Investing Company"), a date line (e.g. Apr 19,
  2019), and an excerpt paragraph

### Requirement: Testimonials section

The system SHALL render a dark photo-background testimonial carousel
with white quote cards and author names.

#### Scenario: Testimonial carousel

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show a photo background with a dark overlay and the
  heading "Testimonial" in white
- **AND** it SHALL show at least four quotes, each as a white card with
  italic serif text, a round avatar, and the author's name

### Requirement: Blog section

The system SHALL render a "Our Blog" heading with two post cards.

#### Scenario: Blog post cards

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the uppercase eyebrow "Latest Blog Posts" and
  the heading "Our Blog"
- **AND** it SHALL show two cards, each with a photo, a linked title, a
  meta line (date + author), an excerpt, and a link ("Get Started" /
  "Read More")

### Requirement: Contact section

The system SHALL render a light-background contact section with a form
and a "Call Us" info block.

#### Scenario: Contact form

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL show the heading "Contact Us"
- **AND** the form SHALL have First name, Last name (placeholder "First
  name"), and Email address inputs, a message textarea ("Write your
  message."), and a "Send Message" submit button

#### Scenario: Call Us block

- **GIVEN** the contact section is displayed
- **WHEN** the info block renders
- **THEN** it SHALL show "Need to know more on details? Call Us" with a
  phone number link and a short paragraph

### Requirement: Footer

The system SHALL render a dark footer with About Us, Features links, a
paragraph column, a newsletter form, social icons, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL have a #333333 background
- **AND** it SHALL show an "About Us" column with a paragraph
- **AND** it SHALL show a "Features" column with links (About Us, Press
  Releases, Testimonials, Terms of Service, Privacy, Contact Us)
- **AND** it SHALL show a "Subscribe to Newsletter" form (email input +
  purple Subscribe button)
- **AND** it SHALL show social icons and a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Equity app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo
  landmark
- **AND** the document title SHALL be "Equity — Investment Consulting
  Template"

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] 100% coverage on `apps/equity` (lines/functions/branches/statements)
- [ ] Per-app gate: `npm run verify:app -- equity` (typecheck + lint + coverage + build)
- [ ] Full gate green in CI on merge (typecheck → lint → test:coverage → build → knip → fallow)
- [ ] Section order matches the preview 1:1; brand tokens (#7f4782, #25262a/#000, #f4f5f9, #333333, Nunito + Georgia) used via `@theme`
- [ ] Team names readable (upstream `text-white` bug deviation documented in PR)
- [ ] No ColorLib assets copied (picsum seeds `equity-<n>`, Google Fonts links, lucide/inline-SVG icons only)
