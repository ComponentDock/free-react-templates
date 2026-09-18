# Template: Signal (Coming Soon Page)

## Purpose

Signal is a single-page coming-soon / maintenance page in the
free-react-templates monorepo. It is a React recreation of the ColorLib
"07 Comming Soon" free template (source:
https://colorlib.com/wp/template/07-comming-soon/), built under a
DIFFERENT name (**Signal**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a full-viewport coming-soon page with a background image
and a blue-to-pink gradient overlay. Content is centered vertically and
horizontally. It features an email signup form (pill-shaped input with
integrated submit button), a countdown timer with glowing circles, social
icons, and a "Follow us for update" label. It uses Open Sans for body
text and Poppins for headings, with a hot-pink `#F84982` brand color.

**WHAT MAKES SIGNAL DISTINCT (signature behaviors):**

1. **Full-viewport layout with no wrapper.** Unlike Debut (05) and
   Overture (06) which have a wrapper div creating a frame/padding, Signal
   places the background image directly on `.main-area` which fills 100%
   height. There is NO `.main-area-wrapper`. The background fills the
   entire viewport edge-to-edge.
2. **Blue-to-pink gradient overlay.** Instead of a plain black overlay,
   Signal uses `linear-gradient(-9deg, #6a82fb 0%, #6a82fb 40%, #fc5c7d
   100%)` at 0.7 opacity on the `::after` pseudo-element. This creates a
   vivid blue-to-pink gradient that gives the page a colorful, energetic
   aesthetic.
3. **Email signup form with integrated submit button.** Instead of a
   standalone "NOTIFY US" button, Signal has a pill-shaped email input
   area (450px wide, 53px tall) containing:
   - An email input (`border-radius: 40px`, bg `#F1F2F3`, padding
     `0 140px 0 25px`, box-shadow with white glow ring, focus border
     `#f89fbc`)
   - A submit button absolutely positioned inside the same container
     (`120px` wide, `border-radius: 40px`, bg `#F84982`, white text
     "NOTIFY US", hover bg `#e40b52`)
4. **Glowing countdown circles.** The countdown timer circles have an
   additional `box-shadow: 0px 0px 0px 5px rgba(255,255,255,0.5)` creating
   a white glow ring around each 90×90px white circle. Margin is 12px
   (vs 10px in 05/06).
5. **Content order: heading → description → email form → countdown →
   social icons.** The email form comes BEFORE the countdown timer (in
   05/06, the button was AFTER the countdown).

## Naming

The ColorLib source name "07 Comming Soon" is FORBIDDEN as the app
name. **Signal** is the new, original name — single lowercase word,
no collision with `apps/`, `openspec/specs/`, `docs/templates/`, or any
TEMPLATES.md name (verified 2026-09-16: zero hits for `signal` in
TEMPLATES.md, `ls apps/`, `openspec/specs/`). Source slug + preview URL
are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "07 Comming Soon" / "Coming Soon V22". Listed
  in TEMPLATES.md under the first unchecked items (line 1327).
  Source slug: `07-comming-soon`.
  Preview URL: https://colorlib.com/wp/template/07-comming-soon/
  Live template: https://colorlib.com/etc/cs/07-comming-soon.html
- **Live preview — REACHABLE (verified 2026-09-16):** the naive
  `https://preview.colorlib.com/theme/07-comming-soon/` returns 404;
  the REAL preview is
  **`https://colorlib.com/etc/cs/07-comming-soon.html`**
  (HTTP 200, 13,381 bytes). Stylesheets: `common-css/ionicons.css`,
  `common-css/jquery.classycountdown.css`, `07-comming-soon/css/styles.css`,
  `07-comming-soon/css/responsive.css`. Scripts: jQuery 3.1.1,
  jquery.countdown.min.js, common-js/scripts.js.
- **Live DOM structure (from the fetched HTML + CSS):**
  - `body` → `div.main-area.center-text` (NO wrapper — bg image directly
    on main-area, height 100%, padding 0 20px, background-size cover,
    box-shadow 2px 5px 30px rgba(0,0,0,0.3), color #fff, position relative,
    z-index 1)
    - `::after` pseudo-element (z-index: -1, opacity: 0.7, background:
      linear-gradient(-9deg, #6a82fb 0%, #6a82fb 40%, #fc5c7d 100%))
    - `div.display-table` → `div.display-table-cell` (vertical-align: middle)
      - `h1.title` (Poppins bold, "Comming Soon", font-size: 3.5em)
      - `p.desc.font-white` (maintenance message, max-width: 500px,
        margin: 20px auto)
      - `div.email-input-area` (width: 450px, height: 53px, margin: 40px auto)
        - `form` → `input.email-input` (pill: border-radius 40px, bg #F1F2F3,
          padding 0 140px 0 25px, box-shadow inset + white glow, focus border
          #f89fbc)
        - `button.submit-btn` (absolute, 120px wide, border-radius 40px,
          bg #F84982, color #fff, "NOTIFY US", hover #e40b52)
      - `div#normal-countdown` (data-date="2018/01/01")
        - countdown circles: 90×90px, border-radius 100px, bg #fff,
          box-shadow 0px 0px 0px 5px rgba(255,255,255,0.5), margin 12px,
          main-time: color #F84982, font-size 2em, weight 500
      - `ul.social-btn` (absolute bottom: 30px, width: 100%, centered)
        - `li.list-heading` ("Follow us for update", margin-bottom 15px)
        - 5 `li > a > i` social icons (Ionicons) — 35×35px circles with
          brand colors
  - Per monorepo convention add a minimal attribution footer linking
    https://www.componentdock.com/ ("Component Dock").

- **Screenshot (`coming-soon-22.jpg`, 1200×972):** Full viewport dark
  photographic background with a vivid blue-to-pink gradient overlay.
  Centered white content: bold "Comming Soon" heading, grey maintenance
  text, pill-shaped email input with integrated pink "NOTIFY US" button,
  four white circular countdown units with a subtle glow ring and pink
  numbers, and social media icons at the bottom. The gradient overlay
  gives the page an energetic, colorful aesthetic compared to the darker
  tone of 05/06.

## Design tokens

| Token                    | Value                            | Notes                                                                      |
| ------------------------ | -------------------------------- | -------------------------------------------------------------------------- |
| `--color-brand`          | `#F84982`                        | Hot pink — button bg, border, countdown number color, submit hover darker  |
| `--color-brand-hover`    | `#e40b52`                        | Darker pink on submit button hover                                         |
| `--color-focus-border`   | `#f89fbc`                        | Light pink border on email input focus                                      |
| `--color-input-bg`       | `#F1F2F3`                        | Light grey email input background                                          |
| `--color-link-hover`     | `#E45F74`                        | Link/anchor hover color                                                    |
| `--color-body-text`      | `#333`                           | Body text color (used on white bg contexts)                                |
| `--color-paragraph`      | `#555`                           | Paragraph text color                                                       |
| `--color-heading`        | Inherited `#fff`                 | h1 uses Poppins bold, white on dark bg                                     |
| `--gradient-overlay`     | `linear-gradient(-9deg, #6a82fb 0%, #6a82fb 40%, #fc5c7d 100%)` | Blue-to-pink gradient at 0.7 opacity |
| `--color-countdown-bg`   | `#fff`                           | White background for countdown circles                                     |
| `--color-countdown-num`  | `#F84982`                        | Hot pink number inside countdown circles                                   |
| `--color-countdown-label`| `#333`                           | Grey label text below countdown numbers                                    |
| `--color-countdown-glow` | `rgba(255,255,255,0.5)`          | White glow ring around countdown circles (box-shadow 0 0 0 5px)            |
| `--color-social-facebook`| `#2A61D6`                        | Facebook icon background                                                   |
| `--color-social-twitter` | `#3AA4F8`                        | Twitter icon background                                                    |
| `--color-social-google`  | `#F43846`                        | Google+ icon background                                                    |
| `--color-social-instagram`| `#8F614A`                       | Instagram icon background                                                  |
| `--color-social-pinterest`| `#E1C013`                       | Pinterest icon background                                                  |
| `--font-body`            | `'Open Sans', sans-serif`        | Body text, paragraphs; 16px base, weight 400                               |
| `--font-heading`         | `'Poppins', sans-serif`          | h1/h2/h3 headings                                                         |
| `--input-pill`           | `border-radius: 40px`            | Full pill shape; bg #F1F2F3; shadow inset + white glow; padding 0 140px 0 25px |
| `--btn-submit`           | `120px wide, border-radius 40px` | Inside input container; bg #F84982, color #fff; hover #e40b52              |
| `--countdown-circle`     | `90×90px`, radius 100px          | White circles with white glow ring; margin 12px; shrink at 767px/479px    |
| `--social-icon`          | `35×35px`, radius 40px           | Inline-block circles; each has unique brand color; hover turns bg white    |
| `--frame-shadow`         | `2px 5px 30px rgba(0,0,0,0.3)`  | Box-shadow on main content area                                            |
| `--responsive-breakpoint`| `767px`                          | Below 767px: font sizes reduced, countdown shrinks                        |

## Requirements

### Requirement: Page shell (full-viewport, no wrapper)

The system SHALL render a full-viewport layout with a background image
filling the entire viewport and a blue-to-pink gradient overlay.

#### Scenario: Desktop layout

- **GIVEN** the Signal app is rendered on a desktop viewport (>767px)
- **THEN** the page SHALL occupy 100% height with no overflow
- **AND** the main area SHALL have a full-cover background image with no
  wrapper div (image fills viewport edge-to-edge)
- **AND** a blue-to-pink gradient overlay SHALL apply via `::after`
  pseudo-element: `linear-gradient(-9deg, #6a82fb 0%, #6a82fb 40%,
  #fc5c7d 100%)` at 0.7 opacity
- **AND** the main area SHALL have `box-shadow: 2px 5px 30px
  rgba(0,0,0,0.3)` for depth
- **AND** all content SHALL be vertically and horizontally centered

#### Scenario: Mobile layout

- **GIVEN** a viewport at or below 767px
- **THEN** heading font size SHALL reduce from 3.5em to 2.8em
- **AND** countdown circles SHALL shrink proportionally
- **AND** no horizontal overflow SHALL occur

### Requirement: Heading and message

The system SHALL display a bold heading and a maintenance message.

#### Scenario: Heading and text

- **GIVEN** the Signal app is rendered
- **THEN** an h1 heading reading "Comming Soon" SHALL display in
  Poppins bold, white text, font-size 3.5em
- **AND** a paragraph of maintenance text SHALL display below the heading
  (paraphrased from: "Our website is currently undergoing scheduled
  maintenance. We Should be back shortly. Thank you for your patience.")
- **AND** the paragraph SHALL be white, max-width 500px, centered with
  20px auto margin

### Requirement: Email signup form

The system SHALL render a pill-shaped email input with an integrated
pink submit button.

#### Scenario: Email input and button rendering

- **GIVEN** the Signal app is rendered
- **THEN** an email input area SHALL display (450px wide, 53px tall,
  centered with 40px auto margin)
- **AND** an email input SHALL display with pill shape (`border-radius:
  40px`), light grey background (`#F1F2F3`), placeholder "Enter your
  email", and padding `0 140px 0 25px`
- **AND** a submit button SHALL be positioned at the right end of the
  input container (120px wide, `border-radius: 40px`), hot-pink
  background (`#F84982`), white text reading "NOTIFY US"
- **AND** hovering the submit button SHALL change its background to
  `#e40b52`

#### Scenario: Input focus state

- **GIVEN** the user focuses the email input
- **THEN** the input border SHALL change to pink `#f89fbc`

### Requirement: Countdown timer

The system SHALL render a simple countdown timer with four circular
units that have a white glow ring.

#### Scenario: Timer rendering

- **GIVEN** the Signal app is rendered
- **THEN** a countdown timer SHALL display centered below the email form
  showing Days, Hours, Minutes, and Seconds
- **AND** each unit SHALL be a white circle (90×90px desktop) with
  `border-radius: 100px` and a white glow ring (`box-shadow: 0px 0px
  0px 5px rgba(255,255,255,0.5)`)
- **AND** each unit SHALL display a hot-pink number (`#F84982`,
  font-size 2em, font-weight 500) and a small label below
- **AND** the countdown SHALL target a configurable end date

#### Scenario: Timer expiry

- **GIVEN** the countdown timer reaches zero
- **THEN** the timer SHALL display all zeros — no redirect, no animation

### Requirement: Social media icons

The system SHALL render a row of social media icons at the bottom of
the page.

#### Scenario: Social icons rendering

- **GIVEN** the Signal app is rendered
- **THEN** a "Follow us for update" label SHALL display at the bottom
- **AND** a row of social media icons SHALL display below the label
- **AND** each icon SHALL be a 35×35px circle with its own brand color
- **AND** hovering an icon SHALL make its background white

#### Scenario: Social icons accessibility

- **GIVEN** the social icons are rendered
- **THEN** each icon link SHALL have an accessible label

### Requirement: Footer

The system SHALL include the required attribution footer.

#### Scenario: Component Dock credit

- **GIVEN** the Signal app is rendered
- **THEN** the footer SHALL link to https://www.componentdock.com/
  branded as "Component Dock"

## Verification checklist

- [ ] `npm run verify:app -- signal` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://colorlib.com/etc/cs/07-comming-soon.html:
      full-viewport background with blue-to-pink gradient overlay,
      "Comming Soon" heading, maintenance text, pill-shaped email input
      with integrated pink "NOTIFY US" button, glowing countdown circles,
      social icons at bottom.
- [ ] Behavior check: email input focus shows pink border, submit button
      hover darkens to #e40b52, social icons show white bg on hover,
      countdown timer ticks down, responsive at 767px.
- [ ] Responsive check at 767px (reduced font sizes, no horizontal
      overflow).
- [ ] Gradient overlay: must be blue-to-pink (`#6a82fb` → `#fc5c7d`)
      at 0.7 opacity, NOT a plain black overlay.
