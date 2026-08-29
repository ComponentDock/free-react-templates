# Specification: BtnFuse (Bootstrap Buttons 19 Recreation)

Recreation of ColorLib "Bootstrap Buttons 19" (`https://colorlib.com/wp/template/bootstrap-buttons-19/`). Preview URL: `https://preview.colorlib.com/theme/bb/bootstrap-buttons-19/`. Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Purpose

BtnFuse is a dashboard-style button showcase template featuring stat card buttons with colored icon panels and numeric displays. It presents four brand colors (purple, teal, pink, green) across white-background and colored-background card buttons, each displaying an icon, a number, and a label. The design uses Poppins font, a clean white background, and a 4-column responsive grid layout.

## Design Tokens

Extracted from the live preview CSS:

| Token                    | Value                                 | Usage                                               |
| ------------------------ | ------------------------------------- | --------------------------------------------------- |
| **Font family**          | `Poppins, sans-serif`                 | All text, loaded via Google Fonts (weights 300–600) |
| **Brand Purple**         | `#6c5ce7`                             | Primary buttons, icon panels                        |
| **Brand Purple Hover**   | `#4430e0`                             | Primary hover state                                 |
| **Brand Teal**           | `#1ee3cf`                             | Secondary buttons, icon panels                      |
| **Brand Teal Hover**     | `#17b7a7`                             | Secondary hover state                               |
| **Brand Pink**           | `#ff00c8`                             | Tertiary buttons, icon panels                       |
| **Brand Pink Hover**     | `#cc00a0`                             | Tertiary hover state                                |
| **Brand Green**          | `#a1dd70`                             | Quarternary buttons, icon panels                    |
| **Brand Green Hover**    | `#86d347`                             | Quarternary hover state                             |
| **White**                | `#fff`                                | White card background                               |
| **Heading Color**        | `#212529`                             | Headings and text                                   |
| **Icon Panel Width**     | `60px`                                | Left/right icon panel on stat cards                 |
| **Button Shadow**        | `0px 7px 15px -13px rgba(0,0,0,0.17)` | Subtle card shadow                                  |
| **Button Border Radius** | `4px`                                 | Card corners                                        |
| **Button Padding**       | `0` (auto via flex)                   | Cards use flex layout                               |
| **Heading Font Size**    | `32px`                                | Page heading                                        |
| **Subheading Font Size** | `16px`                                | Section subheadings                                 |
| **Section Padding**      | `7em 0`                               | Main section spacing                                |
| **Number Font Size**     | `22px`                                | Stat card numbers                                   |
| **Label Font Size**      | `14px`                                | Stat card labels                                    |

## Requirements

### Requirement: Page Title

The template SHALL display a heading "Button #09" at the top of the page.

#### Scenario: Page heading renders

- **WHEN** the page loads
- **THEN** the heading "Button #09" is visible at the top in the heading-section style (32px font)

### Requirement: Pick Your Color Section

The template SHALL display a "Pick Your Color" subheading with four default buttons: Default Primary, Default Secondary, Default Tertiary, Default Gradient.

#### Scenario: Color buttons render

- **WHEN** the page loads
- **THEN** four buttons are visible: "Default Primary" (purple bg), "Default Secondary" (teal bg), "Default Tertiary" (pink bg), "Default Gradient" (green bg)

### Requirement: White Card Stats — Icon Left

The template SHALL display four white-background stat cards in a row with icons on the left side.

#### Scenario: White left-icon cards render

- **WHEN** the page loads
- **THEN** four white cards are visible: "275 New Posts" (purple icon), "109 New Comment" (teal icon), "68 % Bounce Rate" (pink icon), "343 Total Visits" (green icon)

### Requirement: White Card Stats — Icon Right

The template SHALL display four white-background stat cards in a row with icons on the right side.

#### Scenario: White right-icon cards render

- **WHEN** the page loads
- **THEN** four white cards are visible: "275 New Projects" (green icon), "109 New Clients" (purple icon), "68 % Conversion Rate" (teal icon), "343 Support Tickets" (pink icon)

### Requirement: Colored Card Stats — Icon Left

The template SHALL display four colored-background stat cards in a row with icons on the left side.

#### Scenario: Colored left-icon cards render

- **WHEN** the page loads
- **THEN** four colored cards are visible: "275 New Posts" (purple bg), "109 New Comment" (teal bg), "68 % Bounce Rate" (pink bg), "343 Total Visits" (green bg)

### Requirement: Colored Card Stats — Icon Right

The template SHALL display four colored-background stat cards in a row with icons on the right side.

#### Scenario: Colored right-icon cards render

- **WHEN** the page loads
- **THEN** four colored cards are visible: "275 New Projects" (green bg), "109 New Clients" (purple bg), "68 % Conversion Rate" (teal bg), "343 Support Tickets" (pink bg)

### Requirement: Footer

The template SHALL include a footer with a link to Component Dock.

#### Scenario: Footer renders

- **WHEN** the page loads
- **THEN** the footer contains a link to "https://www.componentdock.com/" labeled "Component Dock"

### Requirement: Responsive Layout

The template SHALL use a 4-column responsive grid that stacks on smaller screens.

#### Scenario: Grid layout

- **WHEN** the page loads at desktop width
- **THEN** stat cards display in a 4-column grid
