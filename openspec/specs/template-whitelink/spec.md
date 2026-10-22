# Template: Whitelink (Footer / Bootstrap Footer)
<!-- prep-status: shipped-as=cairn -->
> **SHIPPED-UNDER** — the ColorLib `bootstrap-footer-05` design this prep describes already
> ships as `apps/cairn` (<https://cairn.free.componentdock.com>).
> Do not scaffold `apps/whitelink`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-cairn/spec.md`.

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

## Requirements

### Feature: Whitelink Footer Template

#### Scenario: Page renders with placeholder content above the footer

- **GIVEN** a user visits the Whitelink template page
- **THEN** they see a light-colored content area above the footer
- **AND** the content area displays a heading

#### Scenario: Footer displays with correct white background

- **GIVEN** a user scrolls to the footer
- **THEN** the footer background is white
- **AND** the footer has a subtle top border in light grey (#efefef)

#### Scenario: Email subscribe form

- **GIVEN** a user views the top section of the footer
- **THEN** an email input field is displayed with grey background (#e6e6e6)
- **AND** the input has placeholder text "Enter your email"
- **AND** the input is 45px tall with no border
- **AND** a submit button is positioned inside the input on the right

#### Scenario: Horizontal navigation links

- **GIVEN** a user views the top section of the footer
- **THEN** navigation links (Features, Blog, Pricing, Services) are displayed inline
- **AND** the links are centered horizontally
- **AND** each link has 10px padding

#### Scenario: Navigation link hover styling

- **GIVEN** a user hovers over a navigation link
- **THEN** the link color changes from grey (#777) to blue (#3e64ff)
- **AND** the transition is smooth (0.3s ease)

#### Scenario: Social media icons

- **GIVEN** a user views the top section of the footer
- **THEN** social icons (Twitter, Instagram, Facebook, Pinterest) are displayed inline
- **AND** the icons are right-aligned on desktop
- **AND** the icons are centered on mobile

#### Scenario: Divider between sections

- **GIVEN** a user views the footer
- **THEN** a border-bottom line separates the top section from the bottom bar
- **AND** the divider color is light grey (#efefef)

#### Scenario: Bottom bar with logo centered

- **GIVEN** a user views the bottom bar of the footer
- **THEN** the logo text "Component Dock" is centered and displayed in blue (#3e64ff)
- **AND** the logo is 30px font-size with weight 900
- **AND** the logo is above the legal links on mobile (order reversal)

#### Scenario: Legal links in bottom bar

- **GIVEN** a user views the bottom bar
- **THEN** legal links (Terms, About, Privacy, Contact) are displayed inline
- **AND** the links are left-aligned on desktop
- **AND** the links are centered on mobile

#### Scenario: Copyright section

- **GIVEN** a user views the bottom bar
- **THEN** copyright text is displayed right-aligned
- **AND** the text is in small font, grey (#777)

#### Scenario: Email form interaction

- **GIVEN** a user focuses on the email input
- **THEN** no outline or box-shadow appears
- **AND** the placeholder text is visible in light grey (#b3b3b3)

#### Scenario: Responsive layout

- **GIVEN** a user views the footer on a mobile device
- **THEN** the top section stacks vertically
- **AND** the bottom bar stacks with logo on top, links below, copyright at bottom

#### Scenario: Footer accessibility

- **GIVEN** a user navigates the footer with a keyboard
- **THEN** all links are focusable via Tab key
- **AND** the email input is focusable
- **AND** focus indicators are visible
