# Spec: Imminence — Coming Soon Page Template

> Recreation of ColorLib "02 Comming Soon" (https://colorlib.com/wp/template/02-comming-soon/)

## Purpose

A split-screen coming soon / under-construction page template with a countdown
timer on the left panel and an email subscription form on the right. The original
ColorLib preview (`https://preview.colorlib.com/theme/02-comming-soon/`) returns
404; design research is based on the live demo HTML at
`https://colorlib.com/etc/cs/02-comming-soon.html` and the screenshot at
`https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-17.jpg`.

**Stack:** React 19, Vite, Tailwind CSS 4, TypeScript.
**Recreation name:** Imminence (NEW — different from ColorLib source "02 Comming Soon").

### Design tokens (extracted from CSS)

| Token                       | Value                   | Source element                       |
| --------------------------- | ----------------------- | ------------------------------------ |
| Font — headings (h1–h3)     | `Poppins`, sans-serif   | CSS `h1,h2,h3`                       |
| Font — body (default)       | `Open Sans`, sans-serif | CSS `body`                           |
| Font weights — Open Sans    | 400, 700                | `@font-face` declarations            |
| Font weights — Poppins      | 400, 500                | `@font-face` declarations            |
| Body text color             | `#333`                  | `body { color }`                     |
| Paragraph text color        | `#555`                  | `p { color }`                        |
| Subtext / muted color       | `#999`                  | `.post-desc { color }`               |
| Brand accent (pink)         | `#F84982`               | `.submit-btn`, `.time-sec { color }` |
| Button hover (darker pink)  | `#e40b52`               | `.submit-btn:hover`                  |
| Input focus border          | `#f89fbc`               | `.email-input:focus`                 |
| Input background            | `#F1F2F3`               | `.email-input { background }`        |
| Link hover color            | `#E45F74`               | `a:hover`                            |
| Countdown circle background | `#fff`                  | `.time-sec { background }`           |
| Countdown circle ring       | `rgba(255,255,255,.4)`  | `.time-sec { box-shadow }`           |
| Countdown number color      | `#F84982`               | `.time-sec { color }`                |
| Social icon — Facebook      | `#2A61D6`               | `.facebook { color }`                |
| Social icon — Twitter       | `#3AA4F8`               | `.twitter { color }`                 |
| Social icon — Google+       | `#F43846`               | `.google { color }`                  |
| Social icon — Instagram     | `#8F614A`               | `.instagram { color }`               |
| Social icon — Pinterest     | `#E1C013`               | `.pinterest { color }`               |
| Light text color            | `#444`                  | `b.light-color { color }`            |

**Button radius:** `0 2px 2px 0` (right-side only; sits flush against email input).
**Input radius:** `2px` (all corners).
**Countdown circle radius:** `100px` (full circle; 120px × 120px element).

## Requirements

### Requirement: Split-screen full-viewport layout

The template SHALL render a full-viewport-height layout split into two equal
halves: a left section (50% width, background image, centered countdown timer)
and a right section (50% width, content area with logo, heading, form, social icons).

#### Scenario: Desktop renders two side-by-side panels

- **WHEN** the page loads on a viewport wider than 992px
- **THEN** the left section occupies 50% of the viewport width
- **AND** the right section occupies the remaining 50%
- **AND** both sections fill the full viewport height

#### Scenario: Mobile stacks panels vertically

- **WHEN** the page loads on a viewport 992px wide or narrower
- **THEN** the right section renders on top (50% height)
- **AND** the left section renders below it (50% height)

### Requirement: Background image on left panel

The template SHALL display a full-bleed background image on the left section,
covering the entire panel.

#### Scenario: Background image covers left panel

- **WHEN** the page loads
- **THEN** the left section shows a background image that covers the full area
- **AND** the background uses `background-size: cover`

### Requirement: Countdown timer

The template SHALL display a live countdown timer with four circular units:
days, hours, minutes, and seconds until a target date. Each unit sits inside
a white circle with a subtle ring shadow.

#### Scenario: Countdown displays four time units

- **WHEN** the page loads
- **THEN** four circular countdown elements are visible
- **AND** each circle displays a numeric value in pink (#F84982)
- **AND** each circle has a label beneath the number (Days, Hours, Minutes, Seconds)

#### Scenario: Countdown updates every second

- **WHEN** one second elapses
- **THEN** the countdown values update

#### Scenario: Countdown circles are centered on left panel

- **WHEN** the page loads
- **THEN** the four countdown circles are horizontally and vertically centered
  within the left section

### Requirement: Logo on right panel

The template SHALL display a logo image at the top of the right section.

#### Scenario: Logo renders at top of right panel

- **WHEN** the page loads
- **THEN** a logo image is visible in the upper area of the right section

### Requirement: "Under Construction" heading

The template SHALL display a prominent bold heading reading "Under Construction".

#### Scenario: Heading is visible and styled

- **WHEN** the page loads
- **THEN** the text "Under Construction" is visible
- **AND** the heading uses Poppins font
- **AND** the heading is bold

### Requirement: Description paragraph

The template SHALL display a description paragraph below the heading explaining
the site is under scheduled maintenance.

#### Scenario: Description text renders

- **WHEN** the page loads
- **THEN** a paragraph is visible below the heading
- **AND** the paragraph text mentions scheduled maintenance
- **AND** the paragraph text mentions the site will be back shortly

### Requirement: Email subscription form

The template SHALL provide an email subscription form with an email input field
and a "NOTIFY US" submit button. The button is attached flush to the right side
of the input (shared border-radius on the left, button-only radius on the right).

#### Scenario: Email form renders

- **WHEN** the page loads
- **THEN** an email input field with placeholder "Enter your email" is visible
- **AND** a "NOTIFY US" button is visible to the right of the input
- **AND** the button has a pink (#F84982) background with white text

#### Scenario: Button hover changes color

- **WHEN** the user hovers over the "NOTIFY US" button
- **THEN** the button background changes to a darker pink (#e40b52)

#### Scenario: Email input focus highlights border

- **WHEN** the user focuses the email input field
- **THEN** the input border changes to a light pink (#f89fbc)

#### Scenario: Email submission shows confirmation

- **WHEN** the user enters a valid email and clicks "NOTIFY US"
- **THEN** a confirmation message is displayed

### Requirement: Subtext below form

The template SHALL display a muted subtext line below the email form encouraging
signups for early notification.

#### Scenario: Subtext renders below form

- **WHEN** the page loads
- **THEN** a line of muted (#999) text is visible below the email form
- **AND** the text mentions signing up for early notification

### Requirement: Social media icons footer

The template SHALL display a row of social media icons (Facebook, Twitter,
Instagram, Pinterest) at the bottom of the right section, with "Stay in touch"
label. Each icon uses its brand color.

#### Scenario: Social icons render at bottom of right panel

- **WHEN** the page loads
- **THEN** the text "Stay in touch" is visible at the bottom of the right section
- **AND** social media icon links are visible (at minimum Facebook, Twitter, Instagram, Pinterest)

#### Scenario: Social icons use brand colors

- **WHEN** the user views the social icons
- **THEN** each icon displays its respective brand color on hover (Facebook blue,
  Twitter light blue, Instagram brown, etc.)

### Requirement: Footer with Component Dock link

The template SHALL display a footer linking to https://www.componentdock.com/.

#### Scenario: Footer renders Component Dock link

- **WHEN** the page loads
- **THEN** the footer displays a link to componentdock.com
- **AND** the link text mentions "Component Dock"

### Requirement: Responsive email form

The template SHALL make the email form responsive — full-width on smaller
viewports with the submit button adapting in size.

#### Scenario: Form is full-width on tablet

- **WHEN** the viewport is 992px or narrower
- **THEN** the email input area spans the full width of its container

## Verification checklist

- [ ] Split-screen layout renders correctly at 100vw × 100vh
- [ ] Left panel shows background image with `cover` sizing
- [ ] Countdown timer displays 4 circular units with pink numbers
- [ ] Countdown updates every second
- [ ] Logo is visible at top-right of right panel
- [ ] "Under Construction" heading in Poppins, bold
- [ ] Description paragraph visible with maintenance message
- [ ] Email input with "Enter your email" placeholder
- [ ] "NOTIFY US" button in pink (#F84982), hover darkens to #e40b52
- [ ] Input focus shows pink border (#f89fbc)
- [ ] Subtext visible below form
- [ ] Social icons with brand colors
- [ ] Component Dock footer link present
- [ ] Responsive: stacks vertically at ≤992px
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] `public/CNAME` contains `imminence.free.componentdock.com`
- [ ] `package.json` homepage is `https://imminence.free.componentdock.com`
