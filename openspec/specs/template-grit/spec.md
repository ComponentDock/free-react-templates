# Template: Grit (Fitness / Gym)

## Purpose

Grit is a single-page gym/fitness website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Stamina" website template design (see TEMPLATES.md, Bootstrap
category, line 502 — duplicate rows at lines 1179, 1879, 2361, same template,
one app only), built under a different name with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript (strict). No ColorLib
references in app code — provenance lives in this spec, TEMPLATES.md, and the
PR.

## Design reference (replication findings)

- **Original:** ColorLib "Stamina" — free gym/fitness website HTML template
  (page title "Stamina — Website Template by ColorLib"; source:
  https://colorlib.com/wp/template/stamina/). Single page: hero with
  background video, features carousel, two parallax CTA bands, classes
  carousel, weekly schedule with day tabs, trainers, services, contact form,
  footer.
- **Live preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/stamina/` — fetched
  (`/tmp/stamina.html`, 72,691 bytes) plus the main stylesheet
  `css/style.css` (`/tmp/stamina.css`, 20,960 bytes) and analyzed for
  structure + tokens. Screenshot `stamina-free-template.jpg` (1200×946,
  TEMPLATES.md) viewed in the browser and cross-verified with the live DOM:
  dark hero (blurred dumbbell-rack photo) with white centered headline "We
  Believe Little Things Matter", a white-outline GET STARTED button, and a
  red slanted bar reading "Hours — Opening: 7:30am — Closing: 9:00pm" with a
  CONTACT US > button. Both sources agree on section order and palette.
- **Visual design (screenshot + live DOM):** high-contrast fitness landing
  page. White page background, brand red `#f23a2e` + accent orange
  `#f89d13`. Bold Muli 900 uppercase headings; dark ink `#25262a` text on
  light sections. Signature element: red boxes skewed by 12° (hero hours
  bar, bottom-right hours bar) that overlap adjacent sections. Hero is a
  full-width background video (YouTube `w-cRWOjlk8c`, autoplay muted) with a
  `rgba(0,0,0,0.4)` overlay and centered white copy.

## Design tokens (from `css/style.css` of the live preview)

- **Brand red (primary):** `#f23a2e` — `.btn-primary` bg/border,
  `.ftco-feature-1` icon circles + hover bg, `.schedule-wrap` background,
  `.form-control` focus border, active schedule tab/row, trainer card hover
  bg, `.site-menu .active` underline.
- **Accent orange:** `#f89d13` — `.schedule-wrap .cta a` button background.
- **Coral hover:** `#ff7c67` — trainer name color on card hover.
- **Dark ink:** `#25262a` — nav links, `.person h3` hover base, headings;
  `#000` for `.ftco-feature-1 h2` / large headings.
- **Light grays:** `#edf0f5` (schedule cell borders), `#f4f5f9` / `#f8f9fa`
  (light section backgrounds — contact section is `bg-light`).
- **Muted text:** `#989898`, `#aeaeae`, `#ababab` (feature card paragraphs,
  trainer paragraphs, footer text).
- **Hero overlay:** `rgba(0, 0, 0, 0.4)` over the background video/image.
- **Font:** `"Muli", sans-serif` at 300/400/700/900 (body + headings). Load
  Muli via Google Fonts `<link>` in `index.html`.
- **Buttons:** `text-transform: uppercase`, `font-size: 12px`,
  `font-weight: 900`, `border-width: 2px`. Primary: red bg, white text
  (`#fff`). Outline white (hero): transparent bg, white 2px border + white
  text; hover → white bg + black text. Source padding `py-3 px-5`.
- **Form controls:** `height: 50px`, `border-radius: 0`, `border-width: 2px`,
  no fill; focus border `#f23a2e`.
- **Feature cards (`.ftco-feature-1`):** centered, `padding: 30px`, icon in
  a 70px `#f23a2e` circle (icon glyph white), `h2` 20px bold `#000`,
  paragraph `#989898`. Hover: card bg → `#f23a2e`, icon bg → `#fff` (icon
  glyph red), `h2`/`p` → white.
- **Headings:** section `h2.heading` 2.5rem weight 900 (40px); hero `h1`
  3rem weight 900 white (2rem below 992px); eyebrow `.subheading` uppercase
  red letter-spaced (e.g. "Stay Healthy", "Fitness Class").
- **Section rhythm:** `.site-section` padding `2.5em 0` (`5em 0` at ≥768px).
- **Skewed red boxes:** `.schedule-wrap` bg `#f23a2e`, `padding: 40px`,
  `transform: skew(-12deg)` with `::before` skewed background,
  `translateY(-50%)`, `max-width: 700px`; inner content unskewed. Variant
  `.schedule-wrap2` skews +12°, absolute `right: 0`, `width: 50%` (90%
  below 992px). CTA inside is a `#f89d13` button ("Contact us" + right-arrow
  icon).
- **Schedule tabs:** single-letter day tabs (S M T W T F S); active tab gets
  `border-top: 2px solid #f23a2e`. Class rows: cells bordered `#edf0f5`;
  hover/active cell bg `#f23a2e` with white text.
- **Parallax CTA bands:** `.bgimg` full-width blocks with cover background
  image + dark overlay (`data-stellar-background-ratio="0.5"`), centered
  white `h2` (3rem-ish), `p.lead` white, and a white-on-red
  "Get Started" button (`.btn` with `background: #f23a2e`).

## Requirements

### Requirement: Header and navbar

The system SHALL render a sticky full-width white header: the brand
wordmark "Grit" on the left (dark ink, bold, uppercase) and nav links Home,
Classes, Schedule, Trainer, Services, Contact on the right (dark ink,
uppercase, 12px-ish). The active link (Home) SHALL show a red underline.

#### Scenario: Navbar content

- **GIVEN** the page is rendered
- **WHEN** the header is inspected
- **THEN** it shows the brand wordmark "Grit" and the nav links
  Home/Classes/Schedule/Trainer/Services/Contact, with the active link
  underlined in brand red

#### Scenario: Mobile menu

- **GIVEN** a viewport below the desktop breakpoint
- **WHEN** the nav is collapsed
- **THEN** a mobile menu toggle is shown, and activating it expands the nav
  links on a full-screen dark panel

### Requirement: Hero section

The system SHALL render a full-width hero with a dark background image
(placeholder — the source uses a muted YouTube background video with a
`rgba(0,0,0,0.4)` overlay; do NOT embed the video, use a dark picsum image +
overlay; the chosen `picsum.photos/id/593` tiger photo reads as a dark,
powerful "strength" hero since picsum has no gym photography) and centered
white content: `h1` "We Believe Little Things Matter"
(3rem, weight 900), a `p.lead` supporting sentence (1.4rem, max-width
700px), and a "Get Started" outline button (transparent, white 2px border,
white text; hover inverts to white bg / black text).

#### Scenario: Hero content

- **GIVEN** the hero section is rendered
- **WHEN** it is inspected
- **THEN** it shows the headline "We Believe Little Things Matter", a
  supporting paragraph, and a "Get Started" button styled as a white outline
  button on the dark background

### Requirement: Hours bar (overlapping hero)

The system SHALL render a red (`#f23a2e`) box skewed −12° that overlaps the
bottom of the hero, containing "Hours" (bold) with "Opening: 7:30am —
Closing: 9:00pm" on the left and a "Contact us" button with a right-arrow
icon on the right, the button in accent orange (`#f89d13`).

#### Scenario: Hours bar content

- **GIVEN** the hours bar is rendered over the hero
- **WHEN** it is inspected
- **THEN** it shows the opening hours text and a "Contact us" button in
  accent orange with an arrow icon, all on a skewed red panel

### Requirement: Features ("Get A Perfect Body")

The system SHALL render a section with the eyebrow "Stay Healthy", heading
"Get A Perfect Body", and an intro paragraph, followed by five feature cards
(Be Fit, Join Club, Gym Fitness, Eat Vegie, Fruit Juices, Body Warmup). Each
card SHALL have a circular red icon, a bold 20px heading, and a muted
paragraph. On hover the card background SHALL turn brand red with the icon
circle inverting to white and the text turning white.

#### Scenario: Feature cards

- **GIVEN** the features section is rendered
- **WHEN** it is inspected
- **THEN** it shows the six feature cards "Be Fit", "Join Club", "Gym
  Fitness", "Eat Vegie", "Fruit Juices", "Body Warmup", each with a red
  circular icon, heading, and muted paragraph

#### Scenario: Feature card hover

- **GIVEN** a feature card is rendered
- **WHEN** the pointer hovers over it
- **THEN** the card background becomes brand red, the icon circle becomes
  white, and the text turns white

### Requirement: CTA band ("Get The Result You Want")

The system SHALL render the FIRST full-width parallax-style band (dark cover
image + overlay) with centered white content: heading "Get The Result You
Want" and a lead paragraph whose text contains an inline "Get Started" link
(the source renders it as a text link inside the lead, not a button).

#### Scenario: First CTA band content

- **GIVEN** the first CTA band is rendered
- **WHEN** it is inspected
- **THEN** it shows the heading "Get The Result You Want", a lead paragraph,
  and an inline "Get Started" link inside the lead on a dark background

### Requirement: Classes

The system SHALL render a section with the eyebrow "Fitness Class", heading
"Classes", and an intro paragraph, followed by a carousel/row of five class
cards. Each card SHALL have a square thumbnail image, a linked heading
"Fitness Class Name #1"–"#5", "By Ava Martinez" (source "By Justin Daniel" —
instructor name paraphrased to match the trainer portraits), and "30 minutes".

#### Scenario: Class cards

- **GIVEN** the classes section is rendered
- **WHEN** it is inspected
- **THEN** it shows five class cards, each with a thumbnail image, a class
  name heading, an instructor ("By Justin Daniel"), and a duration
  ("30 minutes")

### Requirement: CTA band ("Every Step Counts")

The system SHALL render the SECOND full-width parallax-style band (dark cover
image + overlay) with centered white content: heading "Every Step Counts", a
short lead paragraph, and a "Get Started" red button.

#### Scenario: Second CTA band content

- **GIVEN** the second CTA band is rendered
- **WHEN** it is inspected
- **THEN** it shows the heading "Every Step Counts", a lead paragraph, and a
  "Get Started" button in brand red on a dark background

### Requirement: Schedule (day tabs)

The system SHALL render a section with the eyebrow "Fitness Sched", heading
"Schedule", and an intro paragraph, followed by single-letter day tabs
S M T W T F S (active tab marked with a 2px red top border). Each day pane
SHALL list up to five class entries in a two-column grid, each entry with a
thumbnail, the time span (e.g. "Sunday 7:30am - 9:00am"), a class name
heading, "By Ava Martinez", and "30 minutes".

#### Scenario: Day tabs

- **GIVEN** the schedule section is rendered
- **WHEN** it is inspected
- **THEN** it shows the day tabs S M T W T F S with the active tab marked in
  brand red, and the active day's pane lists class entries with time,
  name, instructor, and duration

#### Scenario: Switching days

- **GIVEN** the schedule tabs are rendered
- **WHEN** a different day tab is activated
- **THEN** the active marker moves to that tab and the pane updates to show
  that day's class entries

### Requirement: CTA band ("Your Fitness Partner")

The system SHALL render the THIRD full-width parallax-style band (dark cover
image + overlay) with centered white content: heading "Your Fitness Partner
Where Ever You Are", a short lead paragraph, and a "Get Started" red button.

#### Scenario: Third CTA band content

- **GIVEN** the third CTA band is rendered
- **WHEN** it is inspected
- **THEN** it shows the heading "Your Fitness Partner Where Ever You Are", a
  lead paragraph, and a "Get Started" button in brand red on a dark
  background

### Requirement: Trainers

The system SHALL render a section with the eyebrow "Trainer", heading "Our
Trainers", and an intro paragraph, followed by a 4-column grid of trainer
cards. Each card SHALL have a photo, name ("Ava Martinez", "Elena Reyes",
"Mia Chen", "Sofia Alvarez" — the source uses "Justin Daniel" + three
"Matthew Davidson" cards, but picsum has no male portraits, so names are
paraphrased to match the available verified person photos), position
"Trainer", and a paragraph. On hover the card background SHALL turn brand red
with the name in coral (`#ff7c67`) and the text white.

#### Scenario: Trainer cards

- **GIVEN** the trainers section is rendered
- **WHEN** it is inspected
- **THEN** it shows four trainer cards, each with a photo, name, the
  position "Trainer", and a paragraph, in a 4-column grid (2-column on
  tablets)

#### Scenario: Trainer card hover

- **GIVEN** a trainer card is rendered
- **WHEN** the pointer hovers over it
- **THEN** the card background becomes brand red, the name turns coral, and
  the text turns white

### Requirement: Services

The system SHALL render a section with the eyebrow "Fitness Services",
heading "Services", and an intro paragraph, followed by a 3-column grid of
six service cards reusing the feature-card style (Be Fit, Join Club, Gym
Fitness, Eat Vegie, Fruit Juices, Body Warmup), each with a circular red
icon, bold heading, and muted paragraph.

#### Scenario: Service cards

- **GIVEN** the services section is rendered
- **WHEN** it is inspected
- **THEN** it shows the six service cards "Be Fit", "Join Club", "Gym
  Fitness", "Eat Vegie", "Fruit Juices", "Body Warmup", each with a red
  circular icon, heading, and muted paragraph, in a 3-column grid

### Requirement: Contact

The system SHALL render a light-background section with the eyebrow "Get In
Touch", heading "Contact Us", and an intro paragraph, followed by a centered
contact form: First name + Last name (two-column row), Subject, Email, a
message textarea, and a full-width "Send Message" submit button in brand
red. Inputs SHALL be 50px tall with a 2px border and no rounded corners,
focusing to a red border.

#### Scenario: Contact form fields

- **GIVEN** the contact section is rendered
- **WHEN** the form is inspected
- **THEN** it shows First name, Last name, Subject, Email, and message
  textarea inputs plus a "Send Message" submit button in brand red

#### Scenario: Form focus styling

- **GIVEN** the contact form is rendered
- **WHEN** an input receives focus
- **THEN** its border becomes brand red

### Requirement: Bottom hours bar (overlapping contact/footer)

The system SHALL render a second red (`#f23a2e`) box skewed +12° that sits at
the right edge between the contact section and the footer, containing
"Hours" (bold) with "Opening: 7:30am — Closing: 9:00pm" on the left and a
"Contact us" button with a right-arrow icon on the right, the button in
accent orange (`#f89d13`).

#### Scenario: Bottom hours bar content

- **GIVEN** the bottom hours bar is rendered between contact and footer
- **WHEN** it is inspected
- **THEN** it shows the opening hours text and a "Contact us" button in
  accent orange with an arrow icon, all on a skewed red panel

### Requirement: Footer

The system SHALL render a white footer with three columns: "About Grit"
(paragraph), "Links" (Home, Classes, Schedule, Trainer), and "Subscribe"
(paragraph + email input + "Subscribe" button). The copyright bar SHALL
link https://www.componentdock.com/ ("Component Dock") replacing the
source's Colorlib credit.

#### Scenario: Footer columns

- **GIVEN** the footer is rendered
- **WHEN** it is inspected
- **THEN** it shows the About, Links, and Subscribe columns, and the
  copyright bar contains a link to https://www.componentdock.com/

#### Scenario: Subscribe form

- **GIVEN** the Subscribe column is rendered
- **WHEN** it is inspected
- **THEN** it shows an email input and a "Subscribe" button side by side

## Verification checklist

- [ ] `openspec/specs/template-grit/spec.md` validated (`npm run spec:validate`)
- [ ] App folder `apps/grit`, package `@free-react-templates/grit`, no
      ColorLib references in app code (grep for colorlib/Stamina in apps/grit)
- [ ] Footer links https://www.componentdock.com/
- [ ] Tests first, 100% coverage (Vitest + RTL) — `bash scripts/verify-app.sh grit`
- [ ] Section order matches the source: header → hero → hours bar →
      features → CTA (Get The Result You Want) → classes → CTA (Every Step
      Counts) → schedule → CTA (Your Fitness Partner) → trainers → services →
      contact → bottom hours bar → footer
- [ ] Tokens in `src/index.css` `@theme`: `--color-brand: #f23a2e`,
      `--color-accent: #f89d13`, `--color-ink: #25262a`, muted grays; Muli
      Google Fonts link in `index.html`
- [ ] Buttons uppercase 12px weight 900 with 2px borders; form controls
      50px, radius 0; skewed red hours boxes (−12° hero, +12° bottom)
- [ ] Placeholder images via `https://picsum.photos/seed/grit-<n>/<w>/<h>`;
      icons from `lucide-react`
- [ ] PR description: source template, preview URL, design tokens, diffs
      (name, placeholder images, no video background)
