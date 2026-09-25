# Template: Swatchkit (UI Kit / Component Showcase)

## Purpose

Swatchkit is a single-page UI KIT / COMPONENT SHOWCASE in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Equip Ui Kit" free template (source:
https://colorlib.com/wp/template/equip-ui-kit/; preview:
https://preview.colorlib.com/theme/equip-ui-kit/ — UNREACHABLE, fallback to
screenshot), built under a DIFFERENT name (**Swatchkit**), with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 UI kit landing page: a dark transparent navbar
with logo + dropdown + download button, a full-viewport hero with a dark
cityscape background image (Shanghai skyline at dusk), a large "EQUIP UI KIT"
heading, subtitle, and two CTA buttons (Download Tools + Components). Below
the hero, a "Basic Elements" section showcases button styles (Default, Round,
With Icon, icon-only, Simple), button sizes (Small, Regular, Large — filled
and outlined), and button color variants (Primary, Success, Danger, Warning,
Info, Light, Dark). The template is a component reference/showcase rather
than a typical website.

**WHAT MAKES SWATCHKIT DISTINCT (signature behaviors):**

1. **UI Kit landing page structure.** Unlike typical website templates,
   Swatchkit is a COMPONENT SHOWCASE — its primary purpose is to display
   and demonstrate UI components (buttons, typography, forms, cards, etc.)
   in organized sections. The hero serves as an introduction, not a content
   driver.

2. **Dark moody hero with cityscape.** The hero features a dark purple/blue
   cityscape background (Shanghai skyline at dusk/night) with a semi-transparent
   overlay. The heading "SWATCHKIT" is rendered in large white uppercase text.
   Two CTA buttons sit below: "Download Tools" (pink/magenta filled pill)
   and "Components" (dark/outlined pill with border).

3. **Pink/magenta primary accent.** The brand color is a vibrant hot
   pink/magenta (approximately #e91e63 or similar material pink) used on:
   the navbar Download button, the hero primary CTA, the Default button
   style, filled button variants, and the active/primary states throughout.

4. **Button showcase section.** The "Basic Elements" section is the core
   content — it demonstrates button variations in three groups:
   - **Style variants:** Default (filled, rounded corners), Round (pill),
     With Icon (pill + icon), icon-only (circle), Simple (outlined)
   - **Size variants:** Small, Regular, Large — in both filled and outlined
   - **Color variants:** Primary (pink), Success (green), Danger (red),
     Warning (yellow/orange), Info (teal), Light (white), Dark (black)
     — in both filled and outlined rows

5. **Dark-to-light section transition.** The hero and initial sections use
   a dark navy/purple gradient background that transitions to lighter
   sections below (visible in the screenshot's gradient at the bottom).

## Naming

The ColorLib source name "Equip Ui Kit" is FORBIDDEN as the app name. The
new name is **Swatchkit** (apps/swatchkit, package
@free-react-templates/swatchkit). Source slug: `equip-ui-kit`. Preview:
https://preview.colorlib.com/theme/equip-ui-kit/ (UNREACHABLE — 404;
screenshot used as sole reference).

## Design tokens (extracted from screenshot)

> **Note:** The live preview at preview.colorlib.com/theme/equip-ui-kit/
> returned 404. All tokens below are derived from the screenshot
> (https://colorlib.com/wp/wp-content/uploads/sites/2/equip-free-template.jpg)
> and the ColorLib source page description ("Bootstrap 4 UI Kit").

| Token                            | Value                                                                                                                  | Source                                                                                |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Brand primary                    | `#e91e63` (hot pink/magenta, approx)                                                                                   | Hero CTA, navbar Download button, Default button, filled primary variants             |
| Hero background                  | Dark cityscape (Shanghai skyline at dusk)                                                                              | Screenshot — dark purple/blue tones with building silhouettes                         |
| Hero overlay                     | Semi-transparent dark (approx rgba(0,0,0,0.4-0.6))                                                                     | Screenshot — text is clearly readable over the cityscape                              |
| Body background                  | Dark navy/purple gradient transitioning to lighter                                                                     | Screenshot — the gradient below the hero                                              |
| Section background (elements)    | Light/white or very light gray                                                                                         | Screenshot — the "Basic Elements" section has a lighter background                    |
| Heading font                     | Clean sans-serif, large, white, uppercase                                                                              | Screenshot — "EQUIP UI KIT" heading, geometric sans-serif (likely Poppins or similar) |
| Body font                        | Clean sans-serif                                                                                                       | Screenshot — subtitle and labels                                                      |
| Button border-radius (Default)   | Approx 4-6px (slightly rounded corners)                                                                                | Screenshot — Default buttons have subtle rounding                                     |
| Button border-radius (Round)     | Full pill (large radius)                                                                                               | Screenshot — Round buttons are fully pill-shaped                                      |
| Button border-radius (icon-only) | 50% (circle)                                                                                                           | Screenshot — heart icon button is circular                                            |
| Button colors                    | Primary (#e91e63 pink), Success (green), Danger (red), Warning (yellow), Info (teal), Light (white/gray), Dark (black) | Screenshot — color row                                                                |
| Button sizes                     | Small, Regular, Large — both filled and outlined variants                                                              | Screenshot — size rows                                                                |
| Navbar                           | Dark transparent, logo left, nav items + download button right                                                         | Screenshot — fixed/absolute top bar                                                   |
| CTA buttons (hero)               | Two buttons: "Download Tools" (pink filled) + "Components" (dark/outlined)                                             | Screenshot — hero section                                                             |

## Requirements

### Requirement: Navigation bar

The system SHALL render a dark transparent navbar with logo, navigation,
and action button.

#### Scenario: Navbar renders on desktop

- **GIVEN** the Swatchkit app is rendered on a desktop viewport
- **THEN** a dark transparent navbar SHALL render fixed/absolute at the top
  spanning full width
- **AND** the logo "Swatchkit" SHALL render on the left in white
- **AND** a "Components" dropdown/nav link SHALL render on the right
- **AND** a pink "Download" button SHALL render on the far right

#### Scenario: Navbar scroll behavior

- **GIVEN** the navbar is rendered
- **WHEN** the user scrolls past the hero
- **THEN** the navbar SHALL remain visible (sticky/fixed)

### Requirement: Hero section

The system SHALL render a full-viewport hero with a dark background image,
heading, subtitle, and two CTA buttons.

#### Scenario: Hero renders at full viewport

- **GIVEN** the Swatchkit app is rendered
- **THEN** the hero section SHALL occupy the full viewport width with a
  dark cityscape background image (cover, centered)
- **AND** a semi-transparent dark overlay SHALL be applied for text readability
- **AND** a large "Swatchkit" heading SHALL render centered in white
  uppercase text (large font size, approx 4-5rem)
- **AND** a subtitle paragraph SHALL render below the heading in white/light
  text (e.g. "A Free UI Kit on Swatchkit Design.")

#### Scenario: Hero CTA buttons

- **GIVEN** the hero section is rendered
- **THEN** two CTA buttons SHALL render side-by-side centered below the
  subtitle:
  - Primary button ("Download Tools"): pink/magenta filled, pill or
    rounded shape, white text, with a download icon
  - Secondary button ("Components"): dark/outlined, pill or rounded shape,
    white text, with a code/brackets icon
- **WHEN** the user clicks either button
- **THEN** the page SHALL scroll to the corresponding section (components
  section or download/action)

### Requirement: Basic Elements section — Buttons showcase

The system SHALL render a "Basic Elements" section showcasing button
variations in organized groups.

#### Scenario: Section heading

- **GIVEN** the Swatchkit app is rendered
- **THEN** a "Basic Elements" heading SHALL render below the hero section
- **AND** a "Buttons" subheading SHALL render below it

#### Scenario: Button style variants

- **GIVEN** the Buttons section is rendered
- **THEN** a "Pick your style" label SHALL render
- **AND** four button style variants SHALL render in a row:
  - Default: pink filled, slightly rounded corners
  - Round: pink filled, fully pill-shaped (large border-radius)
  - With Icon: pink filled pill with an icon + text
  - Icon-only: pink circle (50% radius) with just an icon

#### Scenario: Button size variants

- **GIVEN** the Buttons section is rendered
- **THEN** a "Pick your size" label SHALL render
- **AND** three size variants SHALL render in a row: Small, Regular, Large
- **AND** both filled (pink) and outlined (border only) variants SHALL
  be shown for each size

#### Scenario: Button color variants

- **GIVEN** the Buttons section is rendered
- **THEN** a "Pick your color" label SHALL render
- **AND** seven color variants SHALL render in a row: Primary (pink),
  Success (green), Danger (red), Warning (yellow), Info (teal),
  Light (white/gray), Dark (black)
- **AND** both filled and outlined variants SHALL be shown for each color

### Requirement: Footer

The system SHALL include the required attribution footer.

#### Scenario: Component Dock credit

- **GIVEN** the Swatchkit app is rendered
- **THEN** the footer SHALL link to https://www.componentdock.com/
  branded as "Component Dock"

### Requirement: Accessibility and semantics

The system SHALL expose accessible semantics for all interactive elements.

#### Scenario: Semantics

- **GIVEN** the Swatchkit app is rendered
- **THEN** the navbar SHALL use `<nav>` with semantic markup
- **AND** all buttons SHALL have accessible labels (text or aria-label)
- **AND** all images SHALL have descriptive `alt` attributes
- **AND** interactive elements SHALL have visible focus-visible rings

## Verification checklist

- [ ] `npm run verify:app -- swatchkit` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the screenshot at
      https://colorlib.com/wp/wp-content/uploads/sites/2/equip-free-template.jpg:
      dark transparent navbar with pink Download button, full-viewport dark
      cityscape hero with "Swatchkit" heading + subtitle + two CTA buttons
      (pink filled + dark outlined), "Basic Elements" section with button
      style/size/color showcase groups.
- [ ] Behavior check: navbar stays fixed on scroll; hero CTA buttons
      scroll to sections; all button variants render correctly (style,
      size, color); responsive layout works.
- [ ] Responsive check at 768px (navbar collapses if needed, hero heading
      scales, button showcase wraps appropriately).
- [ ] Responsive check at 375px (mobile: all sections readable, buttons
      stack or wrap).
- [ ] Accessibility: all buttons have accessible labels, images have alt
      text, nav uses semantic markup, focus-visible on interactive elements.
- [ ] Note: Preview URL (preview.colorlib.com/theme/equip-ui-kit/) returned
      404 — screenshot used as sole reference. If preview becomes available,
      re-verify tokens and section structure.
