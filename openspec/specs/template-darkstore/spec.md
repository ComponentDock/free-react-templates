# Template: Darkstore (Footer / Bootstrap Footer)

## Purpose

Recreation of ColorLib "Bootstrap Footer 04" — a dark-themed e-commerce
footer with four-column navigation, a divider, bottom bar with legal links
and social icons, and a copyright line.

- **Source template:** [bootstrap-footer-04](https://colorlib.com/wp/template/bootstrap-footer-04/)
- **Live preview:** https://preview.colorlib.com/theme/bft/bootstrap-footer-04/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-footer-04.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)

## Design Tokens

Extracted from the preview stylesheet (`css/style.css`):

| Token               | Value                                | Notes                                    |
|---------------------|--------------------------------------|------------------------------------------|
| Brand color         | N/A (black/white/grey palette)       | No single accent color                   |
| Background          | `#000` (black)                       | Footer background                        |
| Text color          | `#777` (grey)                        | Body/footer text                         |
| Link color          | `#999` (light grey)                  | Navigation link default                  |
| Link hover          | `#fff` (white)                       | Navigation link hover                    |
| Logo color          | `#fff` (white)                       | Site logo                                |
| Heading color       | `#fff` (white)                       | Section headings (h3)                    |
| Social icon color   | `#ccc` (silver)                      | Social media icons                       |
| Divider             | `rgba(255,255,255,0.2)`             | Horizontal rule between sections         |
| Font family (body)  | `Roboto`                             | Loaded via CloudFonts                    |
| Font family (head)  | `Roboto`                             | Same as body                             |
| Logo font size      | `26px`, bold                         | `.footer-site-logo`                      |
| Heading font size   | `16px`, bold                         | `.footer-14398 h3`                       |
| Section padding     | `7rem 0`                             | Top/bottom footer padding                |
| Content area height | `70vh`, `bg-light`                   | Preview header area                      |

### Visual Design (from screenshot)

- Dark black footer occupying the bottom of the page
- Light grey content area above with centered "Footer #4" heading
- Four-column layout: logo + description | Shop links | Press links | About links
- Thin semi-transparent white horizontal divider
- Bottom bar: legal links (left) + social icons (right)
- Copyright text at the very bottom in small text
- Minimal, clean e-commerce footer aesthetic
- No accent colors — purely monochromatic (black, white, greys)

## Gherkin Requirements

### Feature: Darkstore Footer Template

#### Scenario: Page renders with placeholder content above the footer

  Given a user visits the Darkstore template page
  Then they see a light-colored content area above the footer
  And the content area displays a heading

#### Scenario: Footer displays with correct dark background

  Given a user scrolls to the footer
  Then the footer background is solid black
  And the footer text color is grey

#### Scenario: Footer logo section

  Given a user views the footer
  Then the logo text "Component Dock" is displayed in white, bold, 26px
  And a short description paragraph appears below the logo

#### Scenario: Four-column navigation layout

  Given a user views the footer
  Then there are four navigation sections side by side
  And the first column contains the site logo and description
  And the second column is titled "Shop" with 5 links
  And the third column is titled "Press" with 5 links
  And the fourth column is titled "About" with 5 links

#### Scenario: Navigation links have correct styling

  Given a user views the footer navigation links
  Then each link is displayed in light grey (#999)
  And on hover the link text changes to white
  And the transition is 0.3s ease

#### Scenario: Divider separates navigation from bottom bar

  Given a user views the footer
  Then a thin horizontal line separates the navigation columns from the bottom bar
  And the line color is semi-transparent white (rgba(255,255,255,0.2))

#### Scenario: Bottom bar with legal links and social icons

  Given a user views the footer bottom bar
  Then legal links (Privacy Policy, Terms & Conditions, Code of Conduct) appear on the left
  And social media icons appear on the right
  And social icons are displayed inline in silver/grey (#ccc)

#### Scenario: Copyright section

  Given a user views the bottom of the footer
  Then a copyright text line is displayed
  And the text is in small font size

#### Scenario: Footer link navigation

  Given a user hovers over a navigation link
  Then the link transitions smoothly from grey to white over 0.3s

#### Scenario: Social icon hover

  Given a user hovers over a social media icon
  Then the icon changes color from silver to white

#### Scenario: Responsive layout

  Given a user views the footer on a mobile device
  Then the four columns stack vertically
  And the bottom bar legal links and social icons stack vertically

#### Scenario: Footer accessibility

  Given a user navigates the footer with a keyboard
  Then all links are focusable via Tab key
  And focus indicators are visible
