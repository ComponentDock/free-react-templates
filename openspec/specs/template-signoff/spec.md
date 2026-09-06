# Template: Signoff (Footer)

## Purpose

Recreation of ColorLib's **Bootstrap Footer 09** — a centered, minimalist
footer with a logo, horizontal nav links, colorful social icons, and a
copyright bar. This is a focused footer component template, not a full-page
website template.

- **Source:** ColorLib Bootstrap Footer 09 (https://colorlib.com/wp/template/bootstrap-footer-09/)
- **Preview URL:** https://preview.colorlib.com/theme/bft/bootstrap-footer-09/
- **New name:** `signoff` (a clean closing statement — a minimalist footer signing off)
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Source slug:** `bootstrap-footer-09`

## Design Tokens

Extracted from the live preview CSS (`css/style.css` — `.footer-16371`):

| Token                     | Value                                       | Notes                                  |
| ------------------------- | ------------------------------------------- | -------------------------------------- |
| **Font family (body)**    | `"Roboto", sans-serif`                      | Loaded via Google Fonts                |
| **Font family (footer)**  | `"Poppins", sans-serif`                     | Overrides body font inside footer      |
| **Footer background**     | `#ffffff` (white)                           | No explicit bg override — white default|
| **Footer padding**        | `7rem 0`                                    | Generous vertical spacing              |
| **Content area height**   | `70vh`                                      | Demo hero area above footer            |
| **Content area bg**       | `#f8f9fa` (bg-light)                        | Light gray demo area                   |
| **Column layout**         | `col-md-9`, centered (`justify-content-center`) | Single centered column            |
| **Logo color**            | `#4200ff` (deep purple)                     | `.footer-site-logo a`                  |
| **Logo font-size**        | `2rem`                                      | `.footer-site-logo`                    |
| **Logo weight**           | `900` (black)                               | `.footer-site-logo`                    |
| **Nav link display**      | `inline-block`                              | Horizontal link list                   |
| **Nav link color**        | `#000` (black)                              | Default link text                      |
| **Nav link hover**        | `#4200ff` (deep purple)                     | Matches logo color                     |
| **Nav link padding**      | `10px`                                      | Clickable area per link                |
| **Social heading color**  | `#000` (black)                              | "Stay in touch" h3                     |
| **Social heading weight** | `bold`                                      | Bold emphasis                          |
| **Social heading size**   | `18px`                                      | Moderate size                          |
| **Social icon display**   | `inline-block`                              | Horizontal icon row                    |
| **Social icon padding**   | `10px`                                      | Clickable area per icon                |
| **Instagram icon**        | `#df588a` (pink)                            | `.social ul li.in a`                   |
| **Facebook icon**         | `#3742d0` (navy blue)                       | `.social ul li.fb a`                   |
| **Twitter icon**          | `#15b8ff` (sky blue)                        | `.social ul li.tw a`                   |
| **Dribbble icon**         | `#fa38c1` (magenta)                         | `.social ul li.dr a`                   |
| **Pinterest icon**        | `#dd4d5a` (red)                             | `.social ul li.pin a`                  |
| **Copyright color**       | `#999999` (gray)                            | `.copyright` text                      |
| **Link transition**       | `.3s all ease`                              | Smooth hover on all anchor tags        |

### Visual Design (from preview DOM + screenshot)

- Clean, white, centered footer with generous vertical padding
- Deep purple (#4200ff) accent for logo and nav hover states
- Logo text at top: large (2rem), bold (900), purple
- Horizontal nav links in black (About, Services, Press, Careers, FAQ, Legal, Contact)
- "Stay in touch" heading followed by colorful social icons (each platform has its brand color)
- Copyright bar at bottom in muted gray
- Minimalist, airy aesthetic — opposite of dark Bootstrap Footer themes
- 70vh light content area above footer (demo hero)

## Requirements

### Requirement: Footer renders with white background and generous padding

The footer component SHALL render with a white background (#fff) and generous
vertical padding (7rem top and bottom).

#### Scenario: Footer background styling

- **WHEN** the Signoff component is rendered
- **THEN** the footer element has a white background
- **AND** the footer has 7rem vertical padding

### Requirement: Site logo is centered and styled

The footer SHALL display a centered logo text in deep purple (#4200ff),
2rem font-size, and weight 900.

#### Scenario: Logo rendering

- **WHEN** the footer is visible
- **THEN** a logo text "Signoff" is displayed centered
- **AND** the logo is colored deep purple (#4200ff)
- **AND** the logo has font-size 2rem and font-weight 900

### Requirement: Navigation links are displayed inline

The footer SHALL display horizontal navigation links (About, Services,
Press, Careers, FAQ, Legal, Contact) centered below the logo.

#### Scenario: Navigation link content

- **WHEN** the footer is visible
- **THEN** navigation links are displayed inline and centered horizontally
- **AND** each link has 10px padding

#### Scenario: Navigation link hover styling

- **WHEN** the user hovers over a navigation link
- **THEN** the link color changes from black (#000) to deep purple (#4200ff)
- **AND** the transition is smooth (0.3s ease)

### Requirement: "Stay in touch" social section with brand-colored icons

The footer SHALL display a "Stay in touch" heading followed by social media
icons (Instagram, Facebook, Twitter, Pinterest, Dribbble), each in its
respective brand color.

#### Scenario: Social heading renders

- **WHEN** the footer is visible
- **THEN** a "Stay in touch" heading is displayed
- **AND** the heading is black, bold, and 18px

#### Scenario: Social icons render with brand colors

- **WHEN** the footer is visible
- **THEN** 5 social icons are displayed inline: Instagram, Facebook, Twitter, Pinterest, Dribbble
- **AND** the Instagram icon is pink (#df588a)
- **AND** the Facebook icon is navy blue (#3742d0)
- **AND** the Twitter icon is sky blue (#15b8ff)
- **AND** the Dribbble icon is magenta (#fa38c1)
- **AND** the Pinterest icon is red (#dd4d5a)

### Requirement: Copyright bar

A centered copyright row SHALL be present at the bottom of the footer in
muted gray (#999).

#### Scenario: Copyright text renders

- **WHEN** the footer is visible
- **THEN** a copyright row is centered at the bottom
- **AND** the text reads "© Signoff. All Rights Reserved." in small muted gray (#999)

### Requirement: Accessibility

All interactive elements SHALL have accessible names and appropriate ARIA
attributes.

#### Scenario: Social link accessibility

- **WHEN** the footer renders
- **THEN** each social icon link has a descriptive aria-label (e.g. "Instagram", "Facebook")

#### Scenario: Navigation link accessibility

- **WHEN** the footer renders
- **THEN** each navigation link is wrapped in an anchor element with descriptive text

### Requirement: Responsive behavior

The footer layout SHALL adapt responsively: single-column on mobile, centered
multi-element layout on desktop.

#### Scenario: Mobile layout stacks vertically

- **WHEN** the viewport width is below 768px
- **THEN** navigation links stack or wrap
- **AND** social icons center-align

#### Scenario: Desktop layout is centered

- **WHEN** the viewport width is 768px or above
- **THEN** the footer content is centered in a 9-column grid
- **AND** nav links display inline

### Requirement: Component Dock attribution

The footer SHALL include a link to https://www.componentdock.com/ branded
as "Component Dock".

#### Scenario: Footer links to Component Dock

- **WHEN** the footer renders
- **THEN** a link to https://www.componentdock.com/ is present
- **AND** the link text reads "Component Dock"

### Requirement: No ColorLib references

The application SHALL NOT contain any references to ColorLib in source files.

#### Scenario: App code contains no ColorLib strings

- **WHEN** any source file in apps/signoff/ is inspected
- **THEN** no file contains the string "colorlib" (case-insensitive)

### Requirement: Preview content area

The application SHALL display a centered heading "Footer #9" on a light
background, filling 70vh.

#### Scenario: Preview content area renders

- **WHEN** the page loads
- **THEN** a centered heading "Footer #9" is visible
- **AND** the content area uses a light background and fills 70vh
