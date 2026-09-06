# Template: Cornerstone (Dark Footer with Background Image)

## Purpose

Recreation of ColorLib "Bootstrap Footer 08" — a dark footer with a background image overlay, column headings, navigation links in four columns, social icons, and a centered copyright bar.

- **Source:** ColorLib Bootstrap Footer 08 (https://colorlib.com/wp/template/bootstrap-footer-08/)
- **Preview URL:** https://preview.colorlib.com/theme/bft/bootstrap-footer-08/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-footer-08.jpg
- **New name:** `cornerstone` (the foundational stone — fitting for a footer)
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens

Extracted from the preview stylesheet (`css/style.css`):

| Token             | Value                          | Notes                              |
| ----------------- | ------------------------------ | ---------------------------------- |
| Brand / accent    | `#e42c64` (pink/magenta)       | CTA button background              |
| Background        | Background image with `rgba(0,0,0,0.7)` overlay | `hero_1.jpg` + dark overlay |
| Text color        | `#777` (grey)                  | Default footer text                |
| Logo color        | `#fff` (white)                 | `.footer-site-logo`                |
| Logo size         | `1.5rem`                       | `.footer-site-logo`                |
| Heading color     | `#fff` (white)                 | `h3` column headings               |
| Heading size      | `16px`, bold                   | `h3` in footer                     |
| Heading margin    | `30px` bottom                  | `h3` margin-bottom                 |
| Link color        | `#999999` (light grey)         | `.nav-links li a` default          |
| Link hover        | `#fff` (white)                 | `.nav-links li a:hover`            |
| Social icon color | `gray`                         | `.social li a` default             |
| Social hover      | `#fff` (white)                 | `.social li a:hover`               |
| Button background | `#e42c64` (pink/magenta)       | `.btn.btn-tertiary`                |
| Button text       | `#fff` (white)                 | `.btn.btn-tertiary`                |
| Button radius     | `30px`                         | Pill-shaped CTA                    |
| Button padding    | `10px 20px`                    | `.btn.btn-tertiary`                |
| Copyright border  | `#595959` (medium grey)        | `border-top` on `.copyright`       |
| Footer padding    | `7rem 0`                       | Top/bottom footer padding          |
| Font family       | `Poppins`                      | Loaded via Google Fonts            |
| Overlay           | `rgba(0, 0, 0, 0.7)`           | Dark semi-transparent overlay      |
| Link transition   | `0.3s all ease`                | Smooth hover transitions           |

### Visual Design (from screenshot + preview)

- Full-width footer with a background image (landscape/nature photo) covered by a dark semi-transparent overlay (rgba(0,0,0,0.7))
- White logo text top-left, followed by a short description paragraph
- Five-column layout: logo+desc | Discover (nav) | About (nav) | Help (nav) | Follow Us (social)
- Each nav column has a white bold heading (16px) above the link list
- Nav links: light grey (#999999) text, white on hover, vertical list with 10px bottom margin
- Social icons: inline horizontal row (Instagram, Twitter, Facebook, Pinterest, Dribbble) under "Follow Us" heading
- No CTA button in this variant (unlike Footer 07)
- Copyright bar at bottom with medium grey (#595959) top border, centered text
- Poppins font family throughout
- Clean, dark, atmospheric aesthetic — background image adds depth

## Requirements

### Requirement: Footer renders with background image and overlay

The footer component SHALL render with a background image and a dark semi-transparent overlay.

#### Scenario: Footer background styling

- **WHEN** the Cornerstone component is rendered
- **THEN** the footer element has a background image
- **AND** the footer has a dark overlay (rgba(0,0,0,0.7))
- **AND** the footer text color is grey (#777)
- **AND** the footer has 7rem top and bottom padding

### Requirement: Logo and description are displayed

The footer SHALL display a site logo (white, 1.5rem) and a short description paragraph in the left column.

#### Scenario: Logo display

- **WHEN** the user views the left column of the footer
- **THEN** the logo text "Cornerstone" is displayed in white (#fff) at 1.5rem font size
- **AND** the logo is wrapped in an anchor tag

#### Scenario: Description paragraph

- **WHEN** the user views the left column of the footer
- **THEN** a description paragraph is displayed below the logo in grey (#777)

### Requirement: Navigation columns have headings

The footer SHALL display white bold headings above each navigation column.

#### Scenario: Heading display

- **WHEN** the user views the navigation columns
- **THEN** each column has a white (#fff) bold heading at 16px
- **AND** the heading has 30px bottom margin

### Requirement: Navigation links are displayed in columns

The footer SHALL display navigation links organized in vertical lists across multiple columns.

#### Scenario: Navigation link content

- **WHEN** the user views the middle columns of the footer
- **THEN** navigation links are displayed in vertical lists under headings
- **AND** each column contains 3-5 links
- **AND** each link has 10px bottom margin

#### Scenario: Navigation link hover styling

- **WHEN** the user hovers over a navigation link
- **THEN** the link color changes from light grey (#999999) to white (#fff)
- **AND** the transition is smooth (0.3s ease)

### Requirement: Social media icons are displayed

The footer SHALL display social media icons (Instagram, Twitter, Facebook, Pinterest, Dribbble) under a "Follow Us" heading.

#### Scenario: Social icon links

- **WHEN** the user views the right column of the footer
- **THEN** a "Follow Us" heading is displayed
- **AND** social icons are displayed inline in a horizontal row below the heading
- **AND** each icon is wrapped in a link with target="_blank"

#### Scenario: Social icon hover styling

- **WHEN** the user hovers over a social icon
- **THEN** the icon color changes from grey (gray) to white (#fff)

### Requirement: Copyright bar is displayed

The footer SHALL display a centered copyright bar at the bottom with a medium grey top border.

#### Scenario: Copyright display

- **WHEN** the user views the bottom of the footer
- **THEN** a copyright bar is displayed with centered text
- **AND** the copyright bar has a top border in medium grey (#595959)
- **AND** the copyright text reads "© 2019—2020 All Rights Reserved."

### Requirement: Component Dock attribution

The footer SHALL include a "Component Dock" attribution link pointing to https://www.componentdock.com/.

#### Scenario: Attribution link

- **WHEN** the user scrolls to the bottom of the footer
- **THEN** a "Component Dock" link is displayed
- **AND** the link points to https://www.componentdock.com/

### Requirement: Responsive layout

The footer SHALL stack columns vertically on mobile devices.

#### Scenario: Mobile layout

- **WHEN** the user views the footer on a mobile device
- **THEN** the columns stack vertically
- **AND** the social icons remain inline
- **AND** the copyright bar remains centered

## Verification Checklist

- [ ] Footer renders with background image and dark overlay
- [ ] Logo is white, 1.5rem
- [ ] Column headings are white, bold, 16px
- [ ] Nav links are light grey (#999999), white on hover
- [ ] Social icons are inline, grey, white on hover
- [ ] Copyright bar has medium grey (#595959) top border
- [ ] Footer padding is 7rem top/bottom
- [ ] Poppins font family loaded
- [ ] Link transitions are 0.3s ease
- [ ] Responsive stacking on mobile
- [ ] Component Dock attribution link present
