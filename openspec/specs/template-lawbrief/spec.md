# Template: Lawbrief (Law Firm)

## Purpose

Lawbrief is a single-page law firm landing page in the free-react-templates
monorepo. It is a React recreation of the ColorLib "Lawmaker" free template
(source: https://colorlib.com/wp/template/lawmaker/), built under a DIFFERENT
name (**Lawbrief**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4
+ TypeScript.

The original is a multi-section law firm website with: a full-width hero slider
(FlexSlider with parallax background images + overlay gradient), a welcome
section (image + text + CTA), practice areas (3-column icon cards), a stats
counter section (parallax bg with animated numbers), a video/choose section, a
second practice areas section (6-column grid with heading), a consultation CTA
(parallax bg), testimonials (Owl Carousel), a contact form section (split:
parallax bg left + form right), a blog section (3-column cards), a team/attorneys
section (3 staff cards with social icons), a "Need Legal Services?" intro bar
(two-column blue/white), and a four-column footer with social icons. It uses the
Work Sans font family and a blue (`#2f89fc`) brand color.

**WHAT MAKES LAWBRIEF DISTINCT (signature behaviors):**

1. **Full-width hero slider with parallax background.** Three slides with
   background images (hero_1.jpg, hero_3.jpg, hero_2.jpg), each with a dark
   overlay-gradient and centered white text: "Defend Your Constitutional Right
   with Legal Help" + a CTA button. Uses FlexSlider with `js-fullheight` (100vh
   slides). The hero is the visual anchor — large, immersive, professional.
2. **Practice areas appear TWICE** — once as a 3-column row near the top
   (Real Estate, Insurance, Business Law with courthouse/padlock/folder icons)
   and again as a 6-column expanded grid (adds Personal Injury, Medical
   Negligence, Criminal Defense) with a "View More" button. Both use the same
   `.services` card pattern (centered icon + h3 link + description text).
3. **Animated stats counter section.** Four counters with icons (Our Lawyer:
   2893, Our Clients: 291, Successful Case: 952, Honor & Awards: 1921) on a
   parallax background image with dark overlay. Uses jQuery countTo with
   waypoints for scroll-triggered animation.
4. **Video/choose section.** Left side: full-width video thumbnail with play
   button overlay (links to Vimeo); right side: heading + description + CTA.
5. **Testimonials carousel.** Owl Carousel fullwidth with user avatar, name,
   and blockquote. Three testimonials (Carl Smith, John Lockwood, Joyce Kroell).
6. **Contact form in a split layout.** Left: parallax background image
   (hero_3.jpg); right: form with First Name, Last Name, Email, Subject,
   Message fields and a "Send Message" submit button.
7. **"Need Legal Services?" intro bar.** Two-column bar that sits above the
   footer: left column (white bg) with heading + description, right column
   (blue `#3f52e3` bg) with phone number + email.
8. **Four-column footer.** Company description, navigation links, contact
   info, opening hours, plus social icons (Twitter, Facebook, LinkedIn,
   Dribbble) and copyright line.

## Naming

The ColorLib source name "Lawmaker" is FORBIDDEN as the app name. **Lawbrief**
is the new, original name — single lowercase word, kebab-case, no collision
with `apps/`, `openspec/specs/`, `docs/templates/`, or any TEMPLATES.md name
(verified: no existing `lawbrief` in apps/ or specs/). Source slug + preview
URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Lawmaker" (TEMPLATES.md line 2126; section
  "## Lawyer (23)"). Source URL: https://colorlib.com/wp/template/lawmaker/
- **Preview URL — REACHABLE (verified by direct fetch):**
  https://preview.colorlib.com/theme/lawmaker/ (HTTP 200, 648 lines, `<title>
  Lawmaker — Website Template by Colorlib</title>`).
- **Preview CSS:** `css/style.css` (1,118 lines) + Bootstrap + animate.css +
  icomoon + flexslider + owl carousel + magnific popup. Main styles in
  `css/style.css`. Font: Work Sans (300/400/500/600/700 from Google Fonts
  via Cloudflare CDN).
- **Live DOM structure (from fetched HTML + CSS):**
  - `nav.ftco-nav` — top menu bar: logo "Lawmaker" left, nav links right
    (Home, Practice Areas, Won Cases, Gallery, Blog [with dropdown], About,
    Contact). Fixed/sticky navigation.
  - `aside#ftco-hero.js-fullheight` — FlexSlider hero with 3 slides, each
    with `background-image`, `.overlay-gradient`, centered `.slider-text-inner`
    containing h1 strong, h2, and a CTA button.
  - `.site-section` — Welcome section: 2-column layout, image left (rounded),
    heading "Welcome To Our Legal Office" + paragraph + "Read More" button
    right.
  - `.ftco-practice` (first instance) — 3-column practice area cards with
    courthouse/padlock/folder icons + h3 links + description text.
  - `#ftco-counter.ftco-counters` — Stats section: parallax bg image with
    dark overlay, 4 counters with icons + animated numbers + labels.
  - `#ftco-content` — Video/choose section: video thumbnail with play button
    left, heading + paragraph + "Learn More" button right.
  - `.ftco-practice` (second instance) — Expanded practice areas: heading
    "Practice Area", 6-column grid (3×2), "View More" button.
  - `#ftco-started` — Consultation CTA: parallax bg, centered heading +
    paragraph + "Consultation" button.
  - `#ftco-testimonial.ftco-bg-section` — Testimonials: heading
    "What are the clients says", Owl Carousel with 3 testimonial slides.
  - `#ftco-consult` — Contact form: parallax bg left, form right with
    First/Last Name, Email, Subject, Message, "Send Message" submit.
  - `#ftco-blog` — Blog section: heading "Recent Post", 3-column cards
    with image + title + meta + excerpt.
  - `#ftco-about` — Attorneys section: heading "Our Attorneys", 3 staff
    cards with photo + name + role + description + social icons.
  - `#intro-bg` — "Need Legal Services?" intro bar: two-column layout,
    left (white) with heading + text, right (blue `#3f52e3`) with phone +
    email + text.
  - `footer#ftco-footer` — Four-column footer: company description,
    navigation links, contact info, opening hours. Social icons row.
    Copyright line.
  - `.gototop.js-top` — Back to top button.
- **Screenshot (`lawmaker-free-template.jpg`):** Shows the hero with
  parallax background image of lawyers reviewing documents, dark overlay,
  centered white heading "Defend Your Constitutional Right with Legal Help",
  blue CTA button. White navbar with "LAWMAKER" logo. Below hero: "Welcome
  To Our Legal Office" section with image + text. Professional, clean law
  firm aesthetic with blue accent color.

## Design tokens

| Token                | Value                          | Notes                                                                   |
| -------------------- | ------------------------------ | ----------------------------------------------------------------------- |
| `--color-brand`      | `#2f89fc`                      | Primary blue — buttons, links, active nav                               |
| `--color-brand-hover`| `#4897fc`                      | Button hover state                                                      |
| `--color-ink`        | `#828282`                      | Body text (14px base)                                                   |
| `--color-heading`    | `#000`                         | Headings (h1, h2, h3)                                                   |
| `--color-white`      | `#fff`                         | Nav text, hero text, button text, counter labels                        |
| `--color-overlay`    | `rgba(0,0,0,0.5–0.7)`         | Hero gradient overlay, counter overlay, video overlay                   |
| `--color-cta-blue`   | `#3f52e3`                      | "Need Legal Services?" right column background                          |
| `--font-body`        | 'Work Sans', Arial, sans-serif | Google Fonts via Cloudflare CDN; 300/400/500/600/700                   |
| `--btn-primary`      | `#2f89fc` bg, `#fff` text      | 14px 30px padding, radius 4px; hover `#4897fc`                          |
| `--radius`           | `4px`                          | Buttons; cards rounded via `.img-rounded`                                |
| `--counter-icon`     | 50% radius, white bg           | Counter icons in circular white boxes with box-shadow                   |
| `--section-bg-light` | `rgba(0,0,0,0.05)`            | `.ftco-bg-section` — testimonials section background                    |

## Requirements

### Requirement: Navigation bar

The system SHALL render a fixed/sticky top navigation bar with the logo and
menu links.

#### Scenario: Desktop navigation

- **GIVEN** the Lawbrief app is rendered on a desktop viewport
- **THEN** a top navigation bar SHALL render with the logo text "Lawbrief"
  on the left (white, Work Sans bold)
- **AND** nav links SHALL appear on the right: Home, Practice Areas, Won
  Cases, Gallery, Blog, About, Contact
- **AND** the active link (Home) SHALL be highlighted in `#2f89fc`
- **AND** the nav bar SHALL be positioned over the hero (transparent or
  semi-transparent background)

#### Scenario: Mobile navigation

- **GIVEN** a viewport at or below 768px
- **THEN** the nav links SHALL collapse into a hamburger menu

### Requirement: Hero section

The system SHALL render a full-viewport hero with a background image,
overlay gradient, and centered call-to-action content.

#### Scenario: Hero rendering

- **GIVEN** the Lawbrief app is rendered on a desktop viewport
- **THEN** a full-width hero section SHALL display with a background image
  (placeholder via `https://picsum.photos/seed/lawbrief-hero/<w>/<h>`)
- **AND** a dark gradient overlay SHALL cover the image
- **AND** centered white text SHALL read "Defend Your Constitutional Right
  with Legal Help" (h1, bold)
- **AND** a subtitle line SHALL appear below the heading
- **AND** a blue CTA button (`#2f89fc`, radius 4px, white text) SHALL
  link to an appropriate section
- **AND** the hero SHALL be approximately 100vh in height

#### Scenario: Hero responsive

- **GIVEN** a mobile viewport
- **THEN** the hero text SHALL scale down responsively and remain centered

### Requirement: Welcome section

The system SHALL render a two-column welcome section with an image and text.

#### Scenario: Welcome layout

- **GIVEN** the Lawbrief app is rendered
- **THEN** a section SHALL display with an image on the left (rounded
  corners) and text on the right
- **AND** the heading SHALL read "Welcome To Our Legal Office"
- **AND** a paragraph of description text SHALL appear below the heading
- **AND** a "Read More" CTA button (`#2f89fc`) SHALL be present

### Requirement: Practice areas (compact)

The system SHALL render a compact 3-column practice area section.

#### Scenario: 3-column practice areas

- **GIVEN** the Lawbrief app is rendered
- **THEN** a 3-column grid SHALL display with practice area cards
- **AND** each card SHALL have a centered icon (from lucide-react:
  Building2 for Real Estate, Shield for Insurance, FolderOpen for Business)
- **AND** each card SHALL have an h3 link and a short description paragraph
- **AND** the three areas SHALL be: Real Estate Law, Insurance Law,
  Business Law

### Requirement: Stats counter section

The system SHALL render an animated stats counter section with parallax
background.

#### Scenario: Counter rendering

- **GIVEN** the Lawbrief app is rendered
- **THEN** a full-width section SHALL display with a parallax background
  image and dark overlay
- **AND** four counters SHALL appear in a row: Our Lawyer (2893), Our
  Clients (291), Successful Case (952), Honor & Awards (1921)
- **AND** each counter SHALL have an icon in a circular white box
- **AND** the numbers SHALL animate on scroll (count up from 0)

### Requirement: Video/choose section

The system SHALL render a split video/choose section.

#### Scenario: Video section layout

- **GIVEN** the Lawbrief app is rendered
- **THEN** a section SHALL display with a video thumbnail on the left
  (placeholder image with play button overlay) and text on the right
- **AND** the right side SHALL have a heading, description paragraph, and
  a "Learn More" CTA button

### Requirement: Expanded practice areas

The system SHALL render a second, expanded practice areas section with
6 columns.

#### Scenario: 6-column practice areas

- **GIVEN** the Lawbrief app is rendered
- **THEN** a centered heading "Practice Area" SHALL appear with a subtitle
- **AND** a 6-column (or 3×2 responsive) grid SHALL display with practice
  area cards
- **AND** the six areas SHALL be: Real Estate Law, Insurance Law, Business
  Law, Personal Injury, Medical Negligence, Criminal Defense
- **AND** each card SHALL have an icon (lucide: Building2, Shield,
  FolderOpen, AlertTriangle, HeartPulse, Scale)
- **AND** a "View More" button SHALL appear centered below the grid

### Requirement: Consultation CTA section

The system SHALL render a consultation call-to-action section with parallax
background.

#### Scenario: Consultation CTA

- **GIVEN** the Lawbrief app is rendered
- **THEN** a full-width section SHALL display with a parallax background
  image and dark overlay
- **AND** centered white text SHALL have a heading and description
- **AND** a "Consultation" CTA button (`#2f89fc`, white text) SHALL be
  present

### Requirement: Testimonials section

The system SHALL render a testimonials carousel section.

#### Scenario: Testimonials carousel

- **GIVEN** the Lawbrief app is rendered
- **THEN** a section with light background (`rgba(0,0,0,0.05)`) SHALL
  display with the heading "What Our Clients Say"
- **AND** a carousel/slider SHALL show 3 testimonial slides
- **AND** each slide SHALL have a user avatar (placeholder), name, and
  blockquote text
- **AND** navigation dots or arrows SHALL be present for slide control

### Requirement: Contact form section

The system SHALL render a split contact form section.

#### Scenario: Contact form layout

- **GIVEN** the Lawbrief app is rendered
- **THEN** a section SHALL display with a parallax background image on the
  left half and a form on the right half (or stacked on mobile)
- **AND** the form SHALL have fields: First Name, Last Name, Email,
  Subject, Message (textarea)
- **AND** a "Send Message" submit button (`#2f89fc`) SHALL be present
- **AND** form submission SHALL be mocked (no real network request)

### Requirement: Blog section

The system SHALL render a blog section with 3 post cards.

#### Scenario: Blog cards

- **GIVEN** the Lawbrief app is rendered
- **THEN** a section SHALL display with the heading "Recent Posts"
- **AND** three blog cards SHALL appear in a row (responsive grid)
- **AND** each card SHALL have a thumbnail image (picsum placeholder),
  title, date/comment meta, and excerpt text

### Requirement: Attorneys/team section

The system SHALL render a team section with staff cards.

#### Scenario: Attorney cards

- **GIVEN** the Lawbrief app is rendered
- **THEN** a section SHALL display with the heading "Our Attorneys"
- **AND** three staff cards SHALL appear in a row
- **AND** each card SHALL have a photo (picsum placeholder), name, role
  title, short bio, and social icon links (Facebook, Twitter, LinkedIn,
  Dribbble — using lucide-react icons)

### Requirement: "Need Legal Services?" intro bar

The system SHALL render a two-column intro bar above the footer.

#### Scenario: Intro bar layout

- **GIVEN** the Lawbrief app is rendered
- **THEN** a two-column bar SHALL appear above the footer
- **AND** the left column (white background) SHALL have the heading
  "Need Legal Services?" and a description paragraph
- **AND** the right column (blue `#3f52e3` background) SHALL have a phone
  number heading and email address

### Requirement: Footer

The system SHALL render a four-column footer with company info, navigation,
contact details, and opening hours.

#### Scenario: Footer layout

- **GIVEN** the Lawbrief app is rendered
- **THEN** a four-column footer SHALL display with: company description,
  navigation links, contact information (address, phone, email), and
  opening hours
- **AND** a copyright line SHALL appear below the columns
- **AND** social icon links (Twitter, Facebook, LinkedIn, Dribbble) SHALL
  be present
- **AND** the footer SHALL link to https://www.componentdock.com/ branded
  as "Component Dock"

### Requirement: Back to top button

The system SHALL render a back-to-top floating button.

#### Scenario: Back to top

- **GIVEN** the user has scrolled down the page
- **WHEN** the user clicks the back-to-top button
- **THEN** the page SHALL scroll smoothly to the top

### Requirement: Accessibility and semantics

The system SHALL expose accessible semantics throughout.

#### Scenario: Semantics

- **GIVEN** the Lawbrief app is rendered
- **THEN** all sections SHALL use semantic HTML (nav, main, section, footer)
- **AND** images SHALL have alt text
- **AND** form fields SHALL have associated labels
- **AND** interactive elements SHALL have visible focus rings
- **AND** the page SHALL have a descriptive document title

## Verification checklist

- [ ] `npm run verify:app -- lawbrief` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://preview.colorlib.com/theme/lawmaker/:
      full-width hero with parallax bg + overlay, welcome section (image
      left, text right), practice areas (3-col + 6-col), stats counters,
      video/choose, consultation CTA, testimonials carousel, contact form,
      blog cards, team section, intro bar, four-column footer.
- [ ] Behavior check: hero displays correctly, counters animate on scroll,
      carousel/slider navigates between testimonials, form validates
      fields, back-to-top works, mobile responsive.
- [ ] Responsive check at 768px (stacked layouts, no horizontal overflow).
