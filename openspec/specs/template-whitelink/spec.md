# Template: Whitelink (Footer / Bootstrap Footer)

## Purpose

Recreation of ColorLib "Bootstrap Footer 05" — a clean white footer with
a blue accent, email subscribe form, horizontal navigation links, social
icons, and a centered logo in the bottom bar.

- **Source template:** [bootstrap-footer-05](https://colorlib.com/wp/template/bootstrap-footer-05/)
- **Live preview:** https://preview.colorlib.com/theme/bft/bootstrap-footer-05/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-footer-05.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)

## Design Tokens

Extracted from the preview stylesheet (`css/style.css`):

| Token               | Value                                | Notes                                    |
|---------------------|--------------------------------------|------------------------------------------|
| Brand / accent      | `#3e64ff` (blue)                     | Logo color, nav link hover               |
| Background          | `#fff` (white)                       | Footer background                        |
| Text color          | `#777` (grey)                        | Nav links, copyright text                |
| Logo color          | `#3e64ff` (blue)                     | Site logo                                |
| Logo size           | `30px`, weight 900                   | `.site-logo a`                           |
| Link color          | `#777` (grey)                        | `.nav-links li a` default                |
| Link hover          | `#3e64ff` (blue)                     | `.nav-links li a:hover`                  |
| Input background    | `#e6e6e6` (light grey)               | Email subscribe input                    |
| Input height        | `45px`                               | Email input field                        |
| Input placeholder   | `#b3b3b3`, 14px                      | Placeholder text                         |
| Divider             | `#efefef` (very light grey)          | `border-top` / `border-bottom`           |
| Copyright color     | `#777` (grey)                        | `.copyright` text                        |
| Font family         | `Poppins`                            | Loaded via Google Fonts                   |
| Footer padding      | `4rem 0`                             | Top/bottom footer padding                |
| Top section         | `border-bottom`, `pb-5`, `mb-4`      | Subscribe + nav + social row             |
| Content area height | `70vh`, `bg-light`                   | Preview header area                      |

### Visual Design (from screenshot + preview)

- Clean, minimal white footer with subtle top border (#efefef)
- Blue accent color (#3e64ff) for logo and hover states
- Three-column top row: email subscribe (left) | nav links (center) | social (right)
- Divider (border-bottom) separates top row from bottom bar
- Bottom row: legal links (left) | logo (center) | copyright (right)
- Poppins font family throughout
- Light, airy, modern aesthetic — opposite of the dark Bootstrap Footer 04

## Gherkin Requirements

### Feature: Whitelink Footer Template

#### Scenario: Page renders with placeholder content above the footer

  Given a user visits the Whitelink template page
  Then they see a light-colored content area above the footer
  And the content area displays a heading

#### Scenario: Footer displays with correct white background

  Given a user scrolls to the footer
  Then the footer background is white
  And the footer has a subtle top border in light grey (#efefef)

#### Scenario: Email subscribe form

  Given a user views the top section of the footer
  Then an email input field is displayed with grey background (#e6e6e6)
  And the input has placeholder text "Enter your email"
  And the input is 45px tall with no border
  And a submit button is positioned inside the input on the right

#### Scenario: Horizontal navigation links

  Given a user views the top section of the footer
  Then navigation links (Features, Blog, Pricing, Services) are displayed inline
  And the links are centered horizontally
  And each link has 10px padding

#### Scenario: Navigation link hover styling

  Given a user hovers over a navigation link
  Then the link color changes from grey (#777) to blue (#3e64ff)
  And the transition is smooth (0.3s ease)

#### Scenario: Social media icons

  Given a user views the top section of the footer
  Then social icons (Twitter, Instagram, Facebook, Pinterest) are displayed inline
  And the icons are right-aligned on desktop
  And the icons are centered on mobile

#### Scenario: Divider between sections

  Given a user views the footer
  Then a border-bottom line separates the top section from the bottom bar
  And the divider color is light grey (#efefef)

#### Scenario: Bottom bar with logo centered

  Given a user views the bottom bar of the footer
  Then the logo text "Component Dock" is centered and displayed in blue (#3e64ff)
  And the logo is 30px font-size with weight 900
  And the logo is above the legal links on mobile (order reversal)

#### Scenario: Legal links in bottom bar

  Given a user views the bottom bar
  Then legal links (Terms, About, Privacy, Contact) are displayed inline
  And the links are left-aligned on desktop
  And the links are centered on mobile

#### Scenario: Copyright section

  Given a user views the bottom bar
  Then copyright text is displayed right-aligned
  And the text is in small font, grey (#777)

#### Scenario: Email form interaction

  Given a user focuses on the email input
  Then no outline or box-shadow appears
  And the placeholder text is visible in light grey (#b3b3b3)

#### Scenario: Responsive layout

  Given a user views the footer on a mobile device
  Then the top section stacks vertically
  And the bottom bar stacks with logo on top, links below, copyright at bottom

#### Scenario: Footer accessibility

  Given a user navigates the footer with a keyboard
  Then all links are focusable via Tab key
  And the email input is focusable
  And focus indicators are visible
