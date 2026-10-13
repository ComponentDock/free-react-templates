# Template: LedgerFlow (Bookkeeping / Financial Services)

## Purpose

Recreation of ColorLib "Book Keeping" — a bookkeeping consulting agency
website template with a top contact bar, navigation, full-width hero banner,
about section with two-column layout, services, and professional corporate
aesthetic. Focused on financial services / accounting businesses.

- **ColorLib source:** https://colorlib.com/wp/template/book-keeping/
- **Preview URL:** https://preview.colorlib.com/theme/book-keeping/ (404 — unreachable; design derived from screenshot)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **Package:** `@free-react-templates/ledgerflow`

## Design tokens

Extracted from the ColorLib screenshot (preview unreachable on 2026-09-10).

| Token            | Value                                | Usage                                        |
| ---------------- | ------------------------------------ | -------------------------------------------- |
| Brand color      | `#2563eb` (royal blue)              | CTA buttons, logo icon, social icons, accent dividers, list arrow icons |
| Dark text        | `#1e293b` (dark navy)               | Headings, logo text, nav links               |
| Body text        | `#64748b` (slate gray)              | Paragraphs, body copy, list items             |
| Muted text       | `#94a3b8` (light blue-gray)         | Section labels ("ABOUT US" meta), small text  |
| Background       | `#ffffff` (white)                    | All section backgrounds                      |
| Hero overlay     | Semi-transparent dark over photo     | Readability over hero background image        |
| Font family      | `"Inter", system-ui, sans-serif`    | All text (modern sans-serif)                  |
| Font size        | ~12px labels, ~14px nav/list, ~16px body, ~30px h2, ~44px hero h1 |
| Button style     | Uppercase, bold, `~13px`, rounded corners `4px radius`, padding `12px 28px` | Primary CTA buttons |
| Button color     | White text on `#2563eb` bg, hover darkens to `#1d4ed8` | Hero CTA and primary actions |
| Section spacing  | `60–80px` vertical padding between content sections |
| Content width    | `~1200px` max-width container, centered |
| Divider line     | `#60a5fa` (light blue), `1px` height, `~60px` width | Section heading underline |
| Social icons     | White icons on `#2563eb` circular bg | Nav bar social links                         |

## Layout structure (section order, faithful to source)

The original is a single-page scrolling template with corporate aesthetic.
All sections use a centered max-width container.

1. **Top contact bar** — Full-width white bar. Left-aligned content: phone
   icon + "Have a question?" text + phone number, envelope icon + email
   address. Small sans-serif text in slate gray (#64748b), ~12–13px.

2. **Navigation bar** — Full-width white background. Left: circular royal
   blue (#2563eb) icon with white dollar sign + "Book Keeping" brand text
   (dark navy). Center: nav links (Home, About, Services dropdown, Blog,
   Contact). Right: social media icons (Facebook, Twitter, LinkedIn) as
   white icons on royal blue circular buttons.

3. **Hero section** — Full-width background photo (business professional
   working with calculator/financial documents). Semi-transparent dark
   overlay for text readability. Centered content: large heading "Book
   Keeping Consulting Agency" (~44px, white, bold, drop shadow), subheading
   lorem ipsum (~16px, white), CTA button "GET STARTED" (royal blue bg,
   white text, uppercase, rounded corners).

4. **About Us section** — Two-column layout. Left column: cropped photo of
   hands on calculator (business/financial imagery). Right column: "ABOUT
   US" label (small uppercase, light blue-gray), heading "Mindful Planning
   of Monetary Spending and Saving" (~30px, dark navy, bold), thin blue
   (#60a5fa) horizontal divider line, body text paragraph, two-column list
   of items each with a blue right-arrow icon.

5. **Services section** — (Inferred from template type) Grid of service
   cards with icons and descriptions for bookkeeping services (Tax
   Preparation, Financial Planning, Payroll Management, etc.).

6. **Newsletter / CTA section** — Email subscription form with heading and
   input field, or call-to-action with button.

7. **Footer** — Company info, navigation links, contact details, copyright
   text with "Component Dock" link.

## Requirements

### Feature: Top Contact Bar

#### Scenario: Contact information is displayed above navigation

- **GIVEN** the page is loaded
- **WHEN** the top bar is visible
- **THEN** it shows a phone icon with text "Have a question?" and a phone number
- **AND** it shows an envelope icon with an email address
- **AND** the text is in slate gray (#64748b), ~12–13px
- **AND** the bar has a white background with tight vertical padding (~8px)

### Feature: Navigation Bar

#### Scenario: Desktop navigation shows logo, links, and social icons

- **GIVEN** the page is loaded on desktop (≥1024px)
- **WHEN** the navigation bar is visible
- **THEN** the left side shows a circular royal blue icon with "$" and brand text
- **AND** the center shows nav links: Home, About, Services, Blog, Contact
- **AND** the right side shows 3 social icons (Facebook, Twitter, LinkedIn) as white icons on blue circles
- **AND** nav links are dark navy (#1e293b), ~14px, regular weight
- **AND** the bar has white background with ~20px horizontal gap between links

#### Scenario: Navigation is responsive on mobile

- **GIVEN** the page is loaded on mobile (<768px)
- **WHEN** the viewport is narrow
- **THEN** the nav links are hidden behind a hamburger toggle
- **AND** tapping the toggle reveals a mobile menu overlay
- **AND** tapping a nav link closes the menu and scrolls to the section

### Feature: Hero Section

#### Scenario: Hero displays full-width banner with CTA

- **GIVEN** the hero section is visible
- **WHEN** the page loads
- **THEN** a full-width background photo is displayed (business professional with financial documents)
- **AND** a semi-transparent dark overlay covers the image
- **AND** centered text shows heading "Book Keeping Consulting Agency" in white (~44px, bold, with drop shadow)
- **AND** a subheading paragraph appears below in white (~16px)
- **AND** a "GET STARTED" button appears with royal blue (#2563eb) background, white text, uppercase, rounded corners

### Feature: About Us Section

#### Scenario: About section shows company description with two-column layout

- **GIVEN** the About Us section scrolls into view
- **WHEN** it becomes visible
- **THEN** it displays an image on the left column (financial/business imagery)
- **AND** the right column shows "ABOUT US" as a small uppercase label in light blue-gray (#94a3b8)
- **AND** a heading "Mindful Planning of Monetary Spending and Saving" (~30px, dark navy, bold)
- **AND** a thin blue (#60a5fa) horizontal divider line (~60px wide)
- **AND** a body text paragraph in slate gray
- **AND** a two-column list of items, each with a blue right-arrow icon
- **AND** the section has ~60–80px vertical padding

### Feature: Services Section

#### Scenario: Services are displayed in a grid layout

- **GIVEN** the services section scrolls into view
- **WHEN** it becomes visible
- **THEN** a section heading appears
- **AND** service cards are displayed in a responsive grid
- **AND** each card contains an icon, title, and description
- **AND** the section uses the centered max-width container

### Feature: Newsletter / CTA Section

#### Scenario: Newsletter signup collects email addresses

- **GIVEN** the newsletter section scrolls into view
- **WHEN** it becomes visible
- **THEN** a heading invites users to subscribe
- **AND** an email input field is displayed
- **AND** a submit button is shown in royal blue

### Feature: Footer

#### Scenario: Footer displays company info and Component Dock link

- **GIVEN** the footer is visible
- **WHEN** the page is scrolled to the bottom
- **THEN** it shows company information and navigation links
- **AND** it includes a link to "https://www.componentdock.com/" (Component Dock)
- **AND** it has a copyright notice

## Verification checklist

- [ ] Top contact bar: phone/email info, correct styling, responsive
- [ ] Navigation: logo with blue circle icon, nav links, social icons, mobile hamburger
- [ ] Hero: full-width photo, dark overlay, heading with shadow, CTA button, correct colors
- [ ] About Us: two-column layout, image left, text right with label/heading/divider/list
- [ ] Services: card grid with icons, responsive layout
- [ ] Newsletter/CTA: email form or call-to-action section
- [ ] Footer: company info, "Component Dock" link, copyright
- [ ] Design tokens: Royal blue #2563eb brand, Inter font, 4px button radius, white backgrounds
- [ ] Responsive: all sections stack properly on mobile
- [ ] No ColorLib references in app code (only in spec + TEMPLATES.md)
- [ ] Placeholder images use picsum.photos with deterministic seeds
- [ ] All interactive elements have proper a11y (aria labels, keyboard nav)
