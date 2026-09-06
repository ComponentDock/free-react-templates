# Template: Footrest (Dark Footer)

## Purpose

Recreation of ColorLib "Bootstrap Footer 07" — a dark footer with black
background, grey navigation links in four columns, social icons, a pink CTA
button, and a centered copyright bar at the bottom.

- **Source:** ColorLib Bootstrap Footer 07 (https://colorlib.com/wp/template/bootstrap-footer-07/)
- **Preview URL:** https://preview.colorlib.com/theme/bft/bootstrap-footer-07/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-footer-07.jpg
- **New name:** `footrest` (a place to rest your feet — fitting for a footer)
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens

Extracted from the preview stylesheet (`css/style.css`):

| Token             | Value                          | Notes                              |
| ----------------- | ------------------------------ | ---------------------------------- |
| Brand / accent    | `#e42c64` (pink/magenta)       | CTA button background              |
| Background        | `#000` (black)                 | Footer background                  |
| Text color        | `#777` (grey)                  | Default footer text                |
| Logo color        | `#fff` (white)                 | `.footer-site-logo`                |
| Logo size         | `1.5rem`                       | `.footer-site-logo`                |
| Link color        | `gray`                         | `.nav-links li a` default          |
| Link hover        | `#fff` (white)                 | `.nav-links li a:hover`            |
| Social icon color | `gray`                         | `.social li a` default             |
| Social hover      | `#fff` (white)                 | `.social li a:hover`               |
| Button background | `#e42c64` (pink/magenta)       | `.btn.btn-tertiary`                |
| Button text       | `#fff` (white)                 | `.btn.btn-tertiary`                |
| Button radius     | `30px`                         | Pill-shaped CTA                    |
| Button padding    | `10px 20px`                    | `.btn.btn-tertiary`                |
| Copyright border  | `#404040` (dark grey)          | `border-top` on `.copyright`       |
| Footer padding    | `7rem 0`                       | Top/bottom footer padding          |
| Font family       | `Roboto`                       | Loaded via Google Fonts            |
| Link transition   | `0.3s all ease`                | Smooth hover transitions           |

### Visual Design (from screenshot + preview)

- Full-width dark footer with solid black (#000) background
- White logo text top-left, followed by a short description paragraph
- Four-column navigation grid: logo column, two nav-link columns, one social/CTA column
- Nav links: grey text, white on hover, vertical list with 10px bottom margin
- Social icons: inline horizontal row (Instagram, Twitter, Facebook, Pinterest, Dribbble)
- Pink pill-shaped "Contact Us" CTA button below social icons
- Copyright bar at bottom with dark grey (#404040) top border, centered text
- Roboto font family throughout
- Clean, dark, minimal aesthetic — high contrast between black bg and white/grey text

## Requirements

### Requirement: Footer renders with dark background

The footer component SHALL render with a black (#000) background and grey (#777) text color.

#### Scenario: Footer background styling

- **WHEN** the Footrest component is rendered
- **THEN** the footer element has a black background (#000)
- **AND** the footer text color is grey (#777)
- **AND** the footer has 7rem top and bottom padding

### Requirement: Logo and description are displayed

The footer SHALL display a site logo (white, 1.5rem) and a short description paragraph in the left column.

#### Scenario: Logo display

- **WHEN** the user views the left column of the footer
- **THEN** the logo text "Footrest" is displayed in white (#fff) at 1.5rem font size
- **AND** the logo is wrapped in an anchor tag

#### Scenario: Description paragraph

- **WHEN** the user views the left column of the footer
- **THEN** a description paragraph is displayed below the logo in grey (#777)

### Requirement: Navigation links are displayed in columns

The footer SHALL display navigation links organized in vertical lists across multiple columns.

#### Scenario: Navigation link content

- **WHEN** the user views the middle columns of the footer
- **THEN** navigation links are displayed in vertical lists
- **AND** each column contains 3-5 links
- **AND** each link has 10px bottom margin

#### Scenario: Navigation link hover styling

- **WHEN** the user hovers over a navigation link
- **THEN** the link color changes from grey (gray) to white (#fff)
- **AND** the transition is smooth (0.3s ease)

### Requirement: Social media icons are displayed

The footer SHALL display social media icons (Instagram, Twitter, Facebook, Pinterest, Dribbble) in the right column.

#### Scenario: Social icon links

- **WHEN** the user views the right column of the footer
- **THEN** social icons are displayed inline in a horizontal row
- **AND** each icon is wrapped in a link with target="_blank"

#### Scenario: Social icon hover styling

- **WHEN** the user hovers over a social icon
- **THEN** the icon color changes from grey (gray) to white (#fff)

### Requirement: Contact Us CTA button is displayed

The footer SHALL display a "Contact Us" button with pink background and pill shape.

#### Scenario: Button styling

- **WHEN** the user views the right column of the footer
- **THEN** a "Contact Us" button is displayed below the social icons
- **AND** the button has pink background (#e42c64)
- **AND** the button has white text (#fff)
- **AND** the button has border-radius of 30px (pill shape)
- **AND** the button has padding of 10px 20px

### Requirement: Copyright bar is displayed

The footer SHALL display a centered copyright bar at the bottom with a dark grey top border.

#### Scenario: Copyright display

- **WHEN** the user views the bottom of the footer
- **THEN** a copyright bar is displayed with centered text
- **AND** the copyright bar has a top border in dark grey (#404040)
- **AND** the copyright text reads "© 2019-2020 All Rights Reserved."

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

- [ ] Footer renders with black background (#000)
- [ ] Logo is white, 1.5rem
- [ ] Nav links are grey, white on hover
- [ ] Social icons are inline, grey, white on hover
- [ ] CTA button is pink (#e42c64), pill-shaped (border-radius 30px)
- [ ] Copyright bar has dark grey (#404040) top border
- [ ] Footer padding is 7rem top/bottom
- [ ] Roboto font family loaded
- [ ] Link transitions are 0.3s ease
- [ ] Responsive stacking on mobile
- [ ] Component Dock attribution link present
