# Template: Crewcut (Barber Shop Landing)

## Purpose

Crewcut is a single-page barber-shop landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Barber" design (see TEMPLATES.md, Barber category), built
under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a bold landing page with a pink-to-purple gradient brand: a
transparent navbar over a full-screen gradient banner (headline "HairStyle is
a Must try Fashion for all Occasion" + blurb + "View More Changes" pill
button + hero image), a 4-row icon services grid ("What We Can Do for You"),
a full-width photo gallery with hover captions ("Upper Cutting"), a 6-card
features grid ("Some Features that Made us Unique"), an about strip with
"See Details" + play-video image, a 4-member team row ("Experienced Mentor
Team"), three pricing plans ("Choose the Perfect Plan for you"), a contact
section ("If you need, Just drop us a line" — 4 info columns + name/email/
subject/message form), and a dark footer with About Us blurb + Newsletter
form + Follow Us social icons + copyright bar. Crewcut recreates that
structure section-for-section with matching layout, colors, typography, and
content types (no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Barber" is FORBIDDEN as the app name.
> **Crewcut** (a short back-and-sides haircut — the barber theme) is the new,
> original name — single lowercase word, no collision with `apps/`,
> `openspec/specs/`, `docs/templates/` or TEMPLATES.md (verified 2026-08-09).
> Source slug + preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Barber" — free barber shop website template
  (source: https://colorlib.com/wp/template/barber/). TEMPLATES.md lists it
  under **Barber (17)** (line 190). The recreation brands itself **Crewcut**.
- **Live preview DOM analyzed (verified 2026-08-09):**
  `https://preview.colorlib.com/theme/barber/` — HTTP 200, 32.4 KB HTML +
  `css/main.css` 34.9 KB. Section classes extracted from the rendered DOM:
  `default-header`, `banner-area`, `service-area section-gap`,
  `gallery-area`, `feature-area section-gap`, `about-area`, `team-area
section-gap`, `price-area section-gap`, `contact-area section-gap`,
  `footer-area section-gap`. Screenshot `barber-free-barber-website-template.jpg`
  (browser-verified 2026-08-09) matches: gradient hero, light sections,
  dark footer.
- **Section order (1:1, verified from live DOM):**
  1. **Navbar** (`header.default-header`, absolute top 0, full width,
     z-index 9, transparent over banner): logo (left, `logo.png`) + nav
     right (Home #home · Service #service · Team #team · Price #price ·
     Contact #contact · Pages dropdown → Generic/Elements). White links on
     the gradient.
  2. **Banner** (`div.banner-area`, 0deg linear-gradient `#f61daf` →
     `#691cff`): `.banner-left` (col-lg-6): `<h1>` "HairStyle is a Must try
     Fashion for all Occasion" + `<p>` lorem blurb ("Lorem ipsum dolor sit
     amet, consectetur adipisicing elit…") + `a.header-btn.text-uppercase`
     "View More Changes" (white bg, black text, radius 20px, shadow); right
     `.banner-right` (col-lg-6 no-padding): hero image (`header-img.png`).
  3. **Services** (`section.service-area.section-gap`): centered heading
     block — `<h1>` "What We Can Do for You" + `<p>` "Who are in extremely
     love with eco friendly system." — then a `.row` of 4 service rows
     (`h4` + text): **Beard Trimming** · **Quality Gel Shave** ·
     **Effective Body Massage** · **Stylish Hair Cutting** (each with an
     icon image `s1..s4.png`, `text-align: center` cards on light
     background, icons tinted with the brand palette colors — CSS uses
     multiple hue classes: `#4cd3e3` cyan, `#38a4ff` blue, `#f4e700`
     yellow, `#f44a40` red).
  4. **Gallery** (`section.gallery-area`, white bg): full-width strip of 6
     photos (`g1.jpg..g6.jpg`), each with hover caption `<h4>` "Upper
     Cutting" over a dark overlay.
  5. **Features** (`section.feature-area.section-gap`, bg `#f9f9ff`):
     centered heading `<h1>` "Some Features that Made us Unique" + blurb,
     then 6 feature cards (`h4` + text): **Expert Technicians** ·
     **Professional Service** · **Great Support** · **Technical Skills** ·
     **Highly Recomended** · **Positive Reviews**.
  6. **About** (`section.about-area`): left text block — `<h1>` "We Believe
     that Interior beautifies the Total Architecture" + 2 paragraphs
     ("inappropriate behavior is often laughed off as 'boys will be boys,'
     women face higher conduct stand…" + lorem) + `a.primary-btn` "See
     Details"; right: image (`about-img.jpg`) with a circular play button
     (`play-btn`, `play.png` icon, gradient bg).
  7. **Team** (`section.team-area.section-gap`, bg `#f9f9ff`): centered
     heading `<h1>` "Experienced Mentor Team" + blurb, then 4 member cards
     (photo `t1..t4.png`, `h4` name, `<p>` role): **Ethel Davis** —
     Managing Director (Sales) · **Rodney Cooper** — Creative Art Director
     (Project) · **Dora Walker** — Senior Core Developer · **Lena Keller** —
     Creative Content Developer.
  8. **Pricing** (`section.price-area.section-gap`, bg `#f9f9ff`): centered
     heading `<h1>` "Choose the Perfect Plan for you" + blurb, then 3 plan
     cards (`h4` name + `h1` price): **Standard £199** · **Business £399** ·
     **Ultimate £499**, each with 5 features ("2.5 GB Free Photos", "Secure
     Online Transfer Indeed", "Unlimited Styles for interface", "Reliable
     Customer Service", "Manual Backup Provided") + "Purchase Plan" button.
     Sub-copy per plan: "For the individuals" (Standard), "Few would argue
     that, despite the advancements…" (Business/Ultimate).
  9. **Contact** (`section.contact-area.section-gap`): centered heading
     `<h1>` "If you need, Just drop us a line" + blurb; left: 4 info
     columns (`h6` + `<p>`): **Visit Our Office** (address "56/8, bir uttam
     qazi nuruzzaman road, west panthapath, kalabagan, Dhanmondi, Dhaka -
     1205") · **Let's call us** (Phone 01: 012-6532-568-9746 / Phone 02:
     012-6532-568-9748 / FAX: 02-6532) · **Let's Email Us** (3 emails) ·
     **Customer Support** (3 emails); right: contact form (`form` with
     `input name=name placeholder="Enter your name"`, `input name=email
placeholder="Enter email address"`, `input name=subject placeholder=
"Enter your subject"`, `textarea name=message placeholder="Messege"`) +
     "Send Message" primary button.
  10. **Footer** (`footer.footer-area.section-gap`, bg `#222222`, padding-top
      100px): 3 `.single-footer-widget` columns — **About Us** (`h6` +
      blurb lorem) · **Newsletter** (`h6` "Stay update with our latest" +
      email input `placeholder="Enter Email"` + send arrow button) ·
      **Follow Us** (`h6` "Let us be social" + `.footer-social` icon links) —
      then a bottom copyright bar: "Copyright © [year] All rights reserved |
      This template is made with ♥ by Colorlib" → reword the credit
      (Component Dock), keep © line.
- **JS behaviors (original):** none heavy — anchor links, hover overlays on
  gallery/team, newsletter + contact forms post to external handlers (MC
  form + formspree-style), play button links to a video modal (Vimeo).
  Recreate as React: contact form client-side with zod validation, newsletter
  input with submit feedback, gallery hover captions via CSS, no backend.
- **Recreation decisions:** repo-standard Navbar (site name "Crewcut", Home
  anchor, dark-mode toggle per repo conventions) + Footer chrome; banner
  uses the gradient bg + seeded picsum hero image; services/features use
  lucide icons (Scissors, Droplets, Hand, Sparkles…); gallery is a 6-photo
  strip; team cards with picsum avatars; pricing cards with gradient hover;
  contact form client-side with zod; newsletter input in the footer. All
  images picsum-seeded, icons lucide-react (no assets copied).

## Design tokens (from `css/main.css`, verified 2026-08-09)

- **Font:** Poppins (Google Fonts) — body and headings, `"Poppins",
sans-serif`. Load via Google Fonts `<link>` in `index.html`.
- **Brand colors:**
  - `#f61daf` → `#691cff` — pink→purple **0deg linear gradient**: navbar
    (over banner), banner background, primary buttons (`primary-btn`),
    play button, hover accents. Used via a `bg-gradient-to-r` Tailwind
    utility with the two stops in `@theme`.
  - `#222222` — headings + footer bg.
  - `#777777` — body text on light backgrounds.
  - `#f9f9ff` — light lavender-gray section backgrounds (services,
    features, team, pricing).
  - `#fff` — white: header-btn bg, cards, gallery bg.
  - Accent hues for service icons (lucide `text-` classes): `#4cd3e3`
    (cyan), `#38a4ff` (blue), `#f4e700` (yellow), `#f44a40` (red).
- **Buttons:** pill shape — `primary-btn` border-radius 25px, gradient bg,
  white text, padding-left 30px / right 60px (arrow icon); `header-btn`
  white bg, black text, radius 20px, padding 8px 35px, shadow
  `0 20px 20px 0 rgba(0,0,0,0.1)`.
- **Spacing:** `section-gap` padding 120px 0; footer padding-top 100px;
  banner full-screen (default-header absolute top 0).
- **Placeholder images (never copy ColorLib assets):** banner hero →
  `https://picsum.photos/seed/crewcut-hero/600/650`, gallery 1–6 →
  `https://picsum.photos/seed/crewcut-gallery-<n>/800/500`, about →
  `https://picsum.photos/seed/crewcut-about/600/500`, team 1–4 →
  `https://picsum.photos/seed/crewcut-team-<n>/400/400`.

## Requirements

### Requirement: Transparent navbar over gradient banner

The system SHALL render an absolute transparent navbar at the top of the page
(z-index above the banner) with the brand "Crewcut" on the left, right-aligned
nav links (Home · Service · Team · Price · Contact), and a dark-mode toggle.

#### Scenario: Desktop navbar

- **GIVEN** the Crewcut page is rendered on a desktop viewport
- **WHEN** the navbar is displayed
- **THEN** the navbar SHALL be transparent and positioned over the banner
- **AND** the brand SHALL read "Crewcut"
- **AND** nav links SHALL read Home · Service · Team · Price · Contact

#### Scenario: Dark mode toggle

- **GIVEN** the Crewcut page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Gradient banner with headline and CTA

The system SHALL render a full-width banner with the pink→purple gradient
background, the headline "HairStyle is a Must try Fashion for all Occasion"
(white), a short blurb, a white "View More Changes" pill button, and a hero
image on the right.

#### Scenario: Banner content

- **GIVEN** the Crewcut page is rendered
- **WHEN** the banner is displayed
- **THEN** the banner SHALL have the `#f61daf` → `#691cff` gradient background
- **AND** it SHALL show the headline "HairStyle is a Must try Fashion for
  all Occasion" and a blurb paragraph
- **AND** it SHALL show a "View More Changes" button with white background,
  black text, and rounded (20px) shape

### Requirement: Services grid

The system SHALL render a "What We Can Do for You" section (centered heading +
blurb) with four service cards, each with a colored icon, an h4 title, and a
short blurb.

#### Scenario: Service items

- **GIVEN** the Crewcut page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "What We Can Do for You"
- **AND** it SHALL render four service cards titled Beard Trimming, Quality
  Gel Shave, Effective Body Massage, and Stylish Hair Cutting
- **AND** each card SHALL show a lucide icon (Scissors / Droplets / Hand /
  Sparkles) tinted with one of the four accent hues

### Requirement: Photo gallery

The system SHALL render a full-width photo strip of six images, each showing
a "Upper Cutting" caption on hover over a dark overlay.

#### Scenario: Gallery images

- **GIVEN** the Crewcut page is rendered
- **WHEN** the gallery section is displayed
- **THEN** six gallery images SHALL be shown in a row
- **AND** each image SHALL reveal an "Upper Cutting" caption on hover

### Requirement: Features grid

The system SHALL render a "Some Features that Made us Unique" section on a
`#f9f9ff` background with six feature cards (icon + h4 title + blurb).

#### Scenario: Feature cards

- **GIVEN** the Crewcut page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL show the heading "Some Features that Made us Unique"
- **AND** it SHALL render six feature cards: Expert Technicians,
  Professional Service, Great Support, Technical Skills, Highly Recomended,
  Positive Reviews

### Requirement: About strip

The system SHALL render an about section with the heading "We Believe that
Interior beautifies the Total Architecture", two paragraphs, a "See Details"
gradient pill button, and a photo with a play button.

#### Scenario: About content

- **GIVEN** the Crewcut page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the heading "We Believe that Interior beautifies
  the Total Architecture" and two paragraphs
- **AND** it SHALL show a "See Details" button
- **AND** a photo with a circular play button SHALL be shown on the right

### Requirement: Team row

The system SHALL render an "Experienced Mentor Team" section with four member
cards (photo, name, role).

#### Scenario: Team cards

- **GIVEN** the Crewcut page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL show the heading "Experienced Mentor Team"
- **AND** it SHALL render four team cards: Ethel Davis — Managing Director
  (Sales) · Rodney Cooper — Creative Art Director (Project) · Dora Walker —
  Senior Core Developer · Lena Keller — Creative Content Developer

### Requirement: Pricing plans

The system SHALL render a "Choose the Perfect Plan for you" section with
three pricing plans (name, price, five features, "Purchase Plan" button).

#### Scenario: Pricing plans

- **GIVEN** the Crewcut page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show the heading "Choose the Perfect Plan for you"
- **AND** it SHALL render three plans: Standard £199, Business £399, and
  Ultimate £499
- **AND** each plan SHALL list five features and a "Purchase Plan" button

### Requirement: Contact section

The system SHALL render a "If you need, Just drop us a line" contact section
with four info columns (Visit Our Office · Let's call us · Let's Email Us ·
Customer Support) and a client-side validated form (name, email, subject,
message) with a "Send Message" button.

#### Scenario: Contact info columns

- **GIVEN** the Crewcut page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL show the heading "If you need, Just drop us a line"
- **AND** four info columns SHALL be shown: Visit Our Office (with an
  address), Let's call us (with phone numbers), Let's Email Us (with email
  addresses), and Customer Support (with support emails)

#### Scenario: Contact form validation

- **GIVEN** the Crewcut page is rendered
- **WHEN** the contact form is displayed
- **THEN** the form SHALL contain labeled inputs for name, email, and
  subject plus a message textarea and a "Send Message" button
- **AND** submitting an empty form SHALL show validation errors without
  reloading the page (client-side only)
- **AND** submitting a valid form SHALL show a success message

### Requirement: Dark footer

The system SHALL render a `#222222` footer with three widgets — About Us
(blurb), Newsletter (email input + submit), Follow Us (social icon links) —
plus a centered bottom bar with the © line and a reworded credit (no
Colorlib link-back requirement).

#### Scenario: Footer content

- **GIVEN** the Crewcut page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL have a `#222222` background and show an About Us widget
  with a blurb
- **AND** it SHALL show a Newsletter widget with an email input
- **AND** it SHALL show a Follow Us widget with social links (inline SVG
  brand icons, NOT lucide brand icons)
- **AND** a centered bottom bar SHALL show "Copyright © [current year] All
  rights reserved | This template is made with ♥ by Component Dock"
  (reworded credit, keeping the © line and heart)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark,
a document title, and the footer in the contentinfo landmark.

#### Scenario: Full page render

- **GIVEN** the Crewcut app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the navbar, banner, services, gallery,
  features, about, team, pricing, contact, and footer sections
- **AND** the document title SHALL be "Crewcut — Barber Shop Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-crewcut`
- [ ] `scripts/verify-app.sh crewcut` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with source): transparent navbar (brand
      "Crewcut" + Home/Service/Team/Price/Contact) → gradient banner
      (`#f61daf`→`#691cff`, "HairStyle is a Must try Fashion for all
      Occasion", "View More Changes" white pill, hero image) → services
      ("What We Can Do for You", 4 icon cards) → gallery (6-photo strip,
      "Upper Cutting" hover captions) → features ("Some Features that Made
      us Unique", 6 cards, `#f9f9ff`) → about ("We Believe that Interior
      beautifies the Total Architecture" + "See Details" + play photo) →
      team ("Experienced Mentor Team", 4 members) → pricing ("Choose the
      Perfect Plan for you", £199/£399/£499) → contact ("If you need, Just
      drop us a line", 4 info cols + validated form) → footer `#222222`
      (About Us / Newsletter / Follow Us + © bar)
- [ ] Brand colors in `@theme`, used via Tailwind classes: `#f61daf`,
      `#691cff` (gradient), `#222222`, `#777777`, `#f9f9ff`; accent hues
      `#4cd3e3` / `#38a4ff` / `#f4e700` / `#f44a40`; radii 25px primary
      buttons / 20px header-btn
- [ ] Font: Poppins via Google Fonts `<link>` in `index.html`, title
      "Crewcut — Barber Shop Template"
- [ ] All imagery via picsum seeds (crewcut-hero / -gallery-1..6 /
      -about / -team-1..4) — NEVER copy ColorLib images; icons from
      `lucide-react` (brand social icons as inline SVG)
- [ ] Interactions: dark-mode toggle, contact form validation
      (name/email/subject/message, success message), newsletter submit,
      gallery hover captions, "See Details" + play buttons
- [ ] Copy kinds kept: "HairStyle is a Must try Fashion for all Occasion",
      "View More Changes", "What We Can Do for You", service titles, "Some
      Features that Made us Unique", feature titles, "We Believe that
      Interior beautifies the Total Architecture", "See Details",
      "Experienced Mentor Team", team names/roles, "Choose the Perfect Plan
      for you", plan names/prices/features, "If you need, Just drop us a
      line", contact info columns, footer widgets + reworded credit
