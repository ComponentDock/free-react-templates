# Template: FooterDash (Footer)

## Purpose

Recreation of ColorLib's **Bootstrap Footer 18** — a dark footer with a centered subscription form (email input + button), a row of navigation links, social media icons, and a copyright line. Clean, modern, dark-background footer design.

- **Source slug:** `bootstrap-footer-18`
- **ColorLib page:** https://colorlib.com/wp/template/bootstrap-footer-18/
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap-footer-18/ (404 at time of research — design tokens derived from screenshot analysis and standard Bootstrap Footer series conventions)
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Category:** Footer

## Design Tokens

Extracted from screenshot analysis (preview unreachable). Tokens are inferred from the rendered screenshot and standard Bootstrap Footer series conventions.

| Token                      | Value                                  | Source                                      |
| -------------------------- | -------------------------------------- | ------------------------------------------- |
| Font family                | `"Poppins", sans-serif`                | Consistent with ColorLib Bootstrap Footer series |
| Page background            | `#ffffff` (white)                      | Screenshot top section dominant color       |
| Footer background          | `#121212` (near-black)                 | Screenshot bottom section dominant color    |
| Footer text color          | `rgba(255, 255, 255, 0.5)`            | Muted white for body text                   |
| Footer link color          | `rgba(255, 255, 255, 0.5)`            | Same as body text                           |
| Footer link hover          | `#ffffff` (pure white)                 | Bright on hover                             |
| Footer heading color       | `#ffffff` (pure white)                 | Column/section headings                     |
| Subscribe form background  | `#1a1a1a` or `rgba(255,255,255,0.1)`  | Subtle contrast on dark footer              |
| Subscribe input background | `#ffffff` (white)                      | White input field                           |
| Subscribe input color      | `rgba(0, 0, 0, 0.5)`                  | Muted placeholder/text color                |
| Subscribe input radius     | `4px` (slight round)                   | Standard Bootstrap input styling            |
| Subscribe button background| `#007bff` (Bootstrap primary blue)     | Standard Bootstrap primary accent           |
| Subscribe button color     | `#ffffff` (white)                      | White text on primary button                |
| Subscribe button radius    | `4px` (matches input)                  | Consistent with input styling               |
| Subscribe button padding   | `10px 30px`                            | Standard button padding                     |
| Social icon color          | `rgba(255, 255, 255, 0.5)`            | Default state                               |
| Social icon hover          | `#ffffff` (white)                      | Bright on hover                             |
| Social icon shape          | Circle, 40px diameter                  | Standard icon circle pattern                |
| Social icon background     | `#1a1a1a` (dark circle)               | Subtle dark circle background               |
| Copyright text color       | `rgba(255, 255, 255, 0.3)`            | Muted for copyright line                    |
| Copyright border-top       | `1px solid rgba(255, 255, 255, 0.1)`  | Subtle separator above copyright            |
| Section padding            | `80px 0`                               | Generous vertical spacing for footer        |
| Nav link text-transform    | `uppercase`                            | Standard footer heading convention          |
| Nav link letter-spacing    | `1px`                                  | Subtle letter spacing                       |

## Visual Design Notes (from screenshot)

- The screenshot shows a dark footer occupying the lower portion of the viewport, with a white content area above.
- The footer contains a centered heading (likely "Footer #18" or similar), a subscription form with email input and submit button, a row of navigation links, social media icons, and a copyright line.
- The design is clean and modern, relying on dark background with white text and a single accent color (Bootstrap primary blue) for the subscribe button.
- The subscription form appears to be the primary interactive element, centered at the top of the footer section.

## Requirements

### Requirement: Content area renders above footer
The page SHALL display a white content area in the upper portion and a dark footer in the lower portion.

#### Scenario: Content area is visible
- **WHEN** the FooterDash page loads
- **THEN** a white content area is visible in the upper portion of the viewport
- **AND** a centered heading "Footer #18" is displayed in the content area

### Requirement: Footer section renders with dark background
The footer SHALL have a dark background (#121212) and occupy the lower portion of the viewport.

#### Scenario: Footer has dark background
- **WHEN** the FooterDash page loads
- **THEN** the footer section has a dark background (#121212)
- **AND** the footer occupies the lower portion of the viewport

### Requirement: Subscription form is present
The footer SHALL contain a centered subscription form with an email input and submit button.

#### Scenario: Subscription form renders
- **WHEN** the FooterDash page loads
- **THEN** the footer displays a centered subscription form
- **AND** the form contains an email input field with placeholder text "Enter your email"
- **AND** the form contains a "Subscribe" button with blue background (#007bff) and white text
- **AND** the form is visually centered within the footer

#### Scenario: Subscribe button hover state
- **WHEN** the user hovers over the "Subscribe" button
- **THEN** the button background changes to a darker blue shade

### Requirement: Navigation links are present
The footer SHALL display a row of navigation links with muted white text that brightens on hover.

#### Scenario: Navigation links render
- **WHEN** the FooterDash page loads
- **THEN** the footer displays navigation menu links including "Home", "About", "Services", "Portfolio", "Blog", "Contact"
- **AND** the links use muted white text color (rgba(255, 255, 255, 0.5))
- **AND** hovering a link changes its color to pure white (#ffffff)

### Requirement: Social media icons are present
The footer SHALL display circular social media icons with muted white color that brightens on hover.

#### Scenario: Social icons render
- **WHEN** the FooterDash page loads
- **THEN** the footer displays social media icons (Facebook, Twitter/X, Instagram, LinkedIn, YouTube)
- **AND** the icons are circular (40px diameter) with dark background
- **AND** the icons use muted white color (rgba(255, 255, 255, 0.5))
- **AND** hovering an icon changes its color to pure white (#ffffff)

### Requirement: Copyright section is present
The footer SHALL display a copyright line at the bottom with muted text and a Component Dock link.

#### Scenario: Copyright renders
- **WHEN** the FooterDash page loads
- **THEN** the footer displays a copyright line at the bottom
- **AND** the copyright text uses muted white color (rgba(255, 255, 255, 0.3))
- **AND** the copyright line is separated from the content above by a subtle border (1px solid rgba(255, 255, 255, 0.1))
- **AND** the copyright includes a link to "https://www.componentdock.com/" with text "Component Dock"

### Requirement: Footer padding and spacing
The footer SHALL have generous vertical padding (80px top/bottom) and consistent spacing between sections.

#### Scenario: Footer spacing is correct
- **WHEN** the FooterDash page loads
- **THEN** the footer has 80px vertical padding
- **AND** the subscription form, navigation links, social icons, and copyright are evenly spaced vertically within the footer
