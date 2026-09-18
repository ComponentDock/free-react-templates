# Template: Countdown (Coming Soon Page)

## Purpose

Countdown is a single-page coming-soon / maintenance page in the
free-react-templates monorepo. It is a React recreation of the ColorLib
"01 Comming Soon" free template (source:
https://colorlib.com/wp/template/01-comming-soon/), built under a
DIFFERENT name (**Countdown**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap + jQuery coming-soon page with a 50/50 split
layout: LEFT section (logo, "Under Construction" heading, maintenance
message, email signup form with pill-shaped input + pink submit button,
social media icons row) and RIGHT section (full-viewport background image
with a circular countdown timer overlay). It uses Open Sans for body text
and Poppins for headings, with a hot-pink `#F84982` brand color and a
purple-to-orange gradient overlay (`linear-gradient(to right, #23074d,
#cc5333)` at 0.3 opacity) on the right side image.

**WHAT MAKES COUNTDOWN DISTINCT (signature behaviors):**

1. **50/50 split layout, full viewport.** The page is `height: 100vh` with
   a `.left-section` (50% width, float left, white background, centered
   content) and `.right-section` (50% width, absolute right, background
   image with gradient overlay + countdown timer). On mobile (<992px) the
   layout stacks vertically (left 50% height top, right 50% height bottom).
2. **Pill-shaped email input with integrated submit button.** The email
   input is a full-width pill (`border-radius: 40px`, bg `#F1F2F3`) with
   `padding: 0 140px 0 25px`. The submit button is absolutely positioned
   inside the same container at the right (`border-radius: 0 40px 40px 0`),
   hot-pink `#F84982`, white text ("NOTIFY US"), turning `#e40b52` on
   hover. Input focus shows a pink `#f89fbc` border.
3. **Social media icon row at bottom.** Five Ionicons (Facebook, Twitter,
   Google+, Instagram, Pinterest) in 35×35px circles with individual brand
   colors (Facebook `#2A61D6`, Twitter `#3AA4F8`, Google+ `#F43846`,
   Instagram `#8F614A`, Pinterest `#E1C013`). Each shows a circular border
   on hover matching its brand color.
4. **Circular countdown timer on the right.** A `jquery.classycountdown`
   timer renders four circular progress rings (Days, Hours, Minutes,
   Seconds) inside `#rounded-countdown` (width 80%, centered). The
   countdown targets a fixed date. The timer circles use a `data-remaining-sec`
   attribute (e.g. `2000000`). The recreation should use a React countdown
   library or a custom implementation.
5. **Purple-to-orange gradient overlay on the right image.** The right
   section's `:after` pseudo-element applies a semi-transparent gradient
   `linear-gradient(to right, #23074d, #cc5333)` at 0.3 opacity over the
   background image, creating a warm dramatic tone.

## Naming

The ColorLib source name "01 Comming Soon" is FORBIDDEN as the app
name. **Countdown** is the new, original name — single lowercase word,
no collision with `apps/`, `openspec/specs/`, `docs/templates/`, or any
TEMPLATES.md name (verified 2026-09-16: zero hits for `countdown` in
TEMPLATES.md, `ls apps/`, `openspec/specs/`). Source slug + preview URL
are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "01 Comming Soon" (page title: "TITLE"). Listed
  in TEMPLATES.md under the first unchecked items (line 1321).
  Source slug: `01-comming-soon`.
  Preview URL: https://colorlib.com/wp/template/01-comming-soon/
  Live template: https://colorlib.com/etc/cs/01-comming-soon.html
- **Live preview — REACHABLE (verified 2026-09-16):** the naive
  `https://preview.colorlib.com/theme/01-comming-soon/` returns 404;
  the REAL preview is
  **`https://colorlib.com/etc/cs/01-comming-soon.html`**
  (HTTP 200, 14,367 bytes, 111 lines). Stylesheets: `common-css/bootstrap.css`
  (Bootstrap framework), `common-css/ionicons.css` (Ionicons icon font),
  `01-comming-soon/css/styles.css` (5,410 bytes, 165 lines — ALL custom
  styling), `01-comming-soon/css/responsive.css` (responsive breakpoints).
  Scripts: jQuery 3.1.1, Tether, Bootstrap JS, jquery.classycountdown.js,
  jquery.knob.js, jquery.throttle.js, custom scripts.js.
- **Live DOM structure (from the fetched HTML + CSS):**
  - `body` → `div.main-area` (height 100vh) → `div.container.full-height`
    - `section.left-section` (float left, width 50%, height 100%):
      - `a.logo` → logo image (absolute top 40px)
      - `div.display-table` → `div.display-table-cell` → `div.main-content`
        - `h1.title` (bold, "Under Construction")
        - `p` (maintenance message text)
        - `div.email-input-area` (width 400px, height 47px, relative)
          - `input.email-input` (pill, bg `#F1F2F3`, border-radius 40px)
          - `button.submit-btn` (absolute right, bg `#F84982`, "NOTIFY US")
        - `p.post-desc` ("Sign up now to get early notification...", grey `#999`)
      - `ul.footer-icons` (absolute bottom 30px)
        - 5 `li > a > i` social icons (Ionicons: facebook, twitter, googleplus, instagram-outline, pinterest)
    - `section.right-section` (absolute top 0 right 0, width 50%,
      bg image, gradient overlay `linear-gradient(to right, #23074d, #cc5333)` 0.3 opacity)
      - `div.display-table.center-text` → `div.display-table-cell`
        - `div#rounded-countdown` (width 80%)
          - `div.countdown` with `data-remaining-sec="2000000"`
  - Per monorepo convention add a minimal attribution footer linking
    https://www.componentdock.com/ ("Component Dock").

- **Screenshot (`coming-soon-16.jpg`, 1200×972; the TEMPLATES.md row
  embeds a downscaled copy):** Full viewport split: LEFT half is white
  with black "Under Construction" heading, grey maintenance text, a
  pill-shaped email input with pink "NOTIFY US" button, and social icons
  at the bottom. RIGHT half is a dark photographic background (appears
  to be a moody/dramatic image) with a semi-transparent purple-to-orange
  gradient overlay, and a centered circular countdown timer showing
  Days/Hours/Minutes/Seconds in circular progress rings. A small logo
  sits at the top-left of the left section. Aesthetic: clean,
  professional, maintenance-page look with warm gradient tones.

## Design tokens

| Token                    | Value                            | Notes                                                                      |
| ------------------------ | -------------------------------- | -------------------------------------------------------------------------- |
| `--color-brand`          | `#F84982`                        | Hot pink — submit button bg, input focus border                             |
| `--color-brand-hover`    | `#e40b52`                        | Darker pink on submit button hover                                          |
| `--color-focus-border`   | `#f89fbc`                        | Light pink border on email input focus                                      |
| `--color-input-bg`       | `#F1F2F3`                        | Light grey input background                                                |
| `--color-body-text`      | `#333`                           | Body text color                                                            |
| `--color-paragraph`      | `#555`                           | Paragraph text color                                                       |
| `--color-muted`          | `#999`                           | "Sign up now..." post-desc text                                            |
| `--color-heading`        | Inherited `#333`                 | h1 uses Poppins bold, no explicit color override                           |
| `--gradient-overlay`     | `linear-gradient(to right, #23074d, #cc5333)` | Purple-to-orange on right section at 0.3 opacity |
| `--font-body`            | `'Open Sans', sans-serif`        | Body text, paragraphs, input, buttons; 16px base, weight 400               |
| `--font-heading`         | `'Poppins', sans-serif`          | h1/h2/h3 headings                                                         |
| `--input-pill`           | `border-radius: 40px`            | Full pill shape; bg `#F1F2F3`; shadow inset `0 0 1px rgba(0,0,0,.1)`       |
| `--btn-pill`             | `border-radius: 0 40px 40px 0`   | Right-side pill on submit button; bg `#F84982`, color `#fff`; 120px wide    |
| `--social-icon`          | `35×35px`, radius 40px           | Inline-block; each has unique brand color; border on hover                  |
| `--social-facebook`      | `#2A61D6`                        | Facebook icon color + border                                               |
| `--social-twitter`       | `#3AA4F8`                        | Twitter icon color + border                                                |
| `--social-google`        | `#F43846`                        | Google+ icon color + border                                                |
| `--social-instagram`     | `#8F614A`                        | Instagram icon color + border                                              |
| `--social-pinterest`     | `#E1C013`                        | Pinterest icon color + border                                              |
| `--layout-split`         | 50/50                            | Left section (white, content) / Right section (image, countdown)           |
| `--countdown-width`      | `80%` (desktop), `100%` (≤1200px) | Inside right section, centered                                         |
| `--responsive-breakpoint`| `992px`                          | Below 992px: stack vertically, 100vw, each 50vh                            |

## Requirements

### Requirement: Page shell (split layout)

The system SHALL render a full-viewport split layout with a white left
section (content) and a photographic right section (countdown timer).

#### Scenario: Desktop split layout

- **GIVEN** the Countdown app is rendered on a desktop viewport (>992px)
- **THEN** the page SHALL occupy `100vh` height with no overflow
- **AND** the left section SHALL occupy the left 50% with a white
  background and vertically centered content
- **AND** the right section SHALL occupy the right 50% with a full-cover
  background image and the purple-to-orange gradient overlay
  (`linear-gradient(to right, #23074d, #cc5333)` at 0.3 opacity)

#### Scenario: Mobile stacked layout

- **GIVEN** a viewport at or below 992px
- **THEN** the layout SHALL stack vertically (left section top 50vh,
  right section bottom 50vh) with no horizontal overflow
- **AND** the email input area SHALL become full-width
- **AND** the countdown timer SHALL expand to 100% width

### Requirement: Logo

The system SHALL display a logo image at the top-left of the left section.

#### Scenario: Logo rendering

- **GIVEN** the Countdown app is rendered
- **THEN** a logo image SHALL display at the top-left of the left
  section (absolute positioned, top 40px, height 30px)
- **AND** the logo SHALL be replaced with a placeholder or the project's
  own logo (the source uses a black PNG logo; use an appropriate
  placeholder or omit if no brand logo is available)

### Requirement: Heading and message

The system SHALL display a bold heading and a maintenance message.

#### Scenario: Heading and text

- **GIVEN** the Countdown app is rendered
- **THEN** an h1 heading reading "Under Construction" SHALL display in
  Poppins bold
- **AND** a paragraph of maintenance text SHALL display below the heading
  (paraphrased from: "Our website is currently undergoing scheduled
  maintenance. We Should be back shortly. Thank you for your patience.")

### Requirement: Email signup form

The system SHALL render a pill-shaped email input with an integrated
pink submit button.

#### Scenario: Email input and button rendering

- **GIVEN** the Countdown app is rendered
- **THEN** an email input SHALL display with pill shape (`border-radius:
  40px`), light grey background (`#F1F2F3`), and placeholder "Enter your
  email"
- **AND** a submit button SHALL be positioned at the right end of the
  input container with pill-right shape (`border-radius: 0 40px 40px 0`),
  hot-pink background (`#F84982`), white text reading "NOTIFY US"
- **AND** hovering the submit button SHALL change its background to
  `#e40b52`

#### Scenario: Input focus state

- **GIVEN** the user focuses the email input
- **THEN** the input border SHALL change to pink `#f89fbc`

#### Scenario: Post-signup text

- **GIVEN** the form is rendered
- **THEN** a line of grey (`#999`) text SHALL display below the form
  reading something like "Sign up now to get early notification of our
  launch date!"

### Requirement: Social media icons

The system SHALL render a row of social media icons at the bottom of
the left section.

#### Scenario: Social icons rendering

- **GIVEN** the Countdown app is rendered
- **THEN** a row of social media icons SHALL display at the bottom of the
  left section
- **AND** the icons SHALL include Facebook, Twitter, Google+, Instagram,
  and Pinterest (or modern equivalents like YouTube if appropriate)
- **AND** each icon SHALL be a 35×35px circle with its own brand color
  (Facebook `#2A61D6`, Twitter `#3AA4F8`, Google+ `#F43446`,
  Instagram `#8F614A`, Pinterest `#E1C013`)
- **AND** hovering an icon SHALL show a circular border matching its
  brand color

#### Scenario: Social icons accessibility

- **GIVEN** the social icons are rendered
- **THEN** each icon link SHALL have an accessible label (e.g.
  `aria-label="Facebook"`)

### Requirement: Countdown timer

The system SHALL render a circular countdown timer on the right section.

#### Scenario: Timer rendering

- **GIVEN** the Countdown app is rendered on the right section
- **THEN** a countdown timer SHALL display centered in the right section
  showing Days, Hours, Minutes, and Seconds
- **AND** the timer SHALL use circular progress rings (matching the
  source's `jquery.classycountdown` visual style)
- **AND** the countdown SHALL target a configurable end date (default:
  a reasonable future date)
- **AND** the timer area SHALL have width 80% on desktop (>1200px) and
  100% on smaller screens

#### Scenario: Timer expiry

- **GIVEN** the countdown timer reaches zero
- **THEN** the timer SHALL display all zeros (00 Days, 00 Hours, 00
  Minutes, 00 Seconds) — no redirect, no explosion, no animation

### Requirement: Footer

The system SHALL include the required attribution footer.

#### Scenario: Component Dock credit

- **GIVEN** the Countdown app is rendered
- **THEN** the footer SHALL link to https://www.componentdock.com/
  branded as "Component Dock"

## Verification checklist

- [ ] `npm run verify:app -- countdown` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://colorlib.com/etc/cs/01-comming-soon.html:
      50/50 split layout, white left section with "Under Construction"
      heading, pill-shaped email input with pink "NOTIFY US" button,
      social icons row, right section with background image + gradient
      overlay + circular countdown timer.
- [ ] Behavior check: email input focus shows pink border, submit button
      hover darkens to #e40b52, social icons show brand-colored borders
      on hover, countdown timer ticks down, responsive stacks at 992px.
- [ ] Responsive check at 992px (stacked layout, full-width inputs,
      100% countdown width, no horizontal overflow).
