# Template: Flank (Sidebar Navigation)

## Purpose

Recreation of ColorLib **Bootstrap Sidebar 03** template as a React 19 + Vite + Tailwind 4 + TypeScript app.

- Source: https://colorlib.com/wp/template/bootstrap-sidebar-03/
- Preview: https://preview.colorlib.com/theme/bootstrap-sidebar-03/ (unreachable — 404)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-sidebar-170625.jpg
- New name: `flank` (apps/flank, @free-react-templates/flank)
- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript
- Note: Live preview was unreachable (404). Design tokens and structure derived from the screenshot and the existing sidecraft (Bootstrap Sidebar 02) pattern.

## Design tokens (derived from sidebar template series)

| Token                           | Value                                                         | Usage                                         |
| ------------------------------- | ------------------------------------------------------------- | --------------------------------------------- |
| Sidebar background (brand navy) | `#1B2A4A`                                                     | Sidebar container background                  |
| Sidebar text                    | `#ffffff`                                                     | All sidebar text (nav links, logo, copyright) |
| Sidebar hover                   | `#243656`                                                     | Nav link hover background                     |
| Sidebar active                  | `#2C3E6B`                                                     | Active nav link background                    |
| Content background              | `#ffffff`                                                     | Main content area background                  |
| Content heading color           | `#2D3748`                                                     | Main content h1/h2 headings                   |
| Content body text               | `#4A5568`                                                     | Paragraph text in content area                |
| Accent color                    | `#3B82F6`                                                     | Links, buttons, active indicators             |
| Hamburger button bg             | `#1B2A4A`                                                     | Circular hamburger toggle button              |
| Hamburger button text           | `#ffffff`                                                     | Hamburger icon lines                          |
| Font family                     | `Poppins` (via Google Fonts)                                  | Global font for all text                      |
| Heading weight                  | 600                                                           | Sidebar nav links, content headings           |
| Body weight                     | 400                                                           | Paragraphs, body text                         |
| Body font size                  | 16px                                                          | Paragraphs                                    |
| Sidebar width                   | ~260px                                                        | Fixed left sidebar                            |
| Nav link style                  | White text, 14px, padding ~10px vertical, icons beside labels | Sidebar navigation                            |
| Newsletter input                | White bg, rounded, placeholder "Email Address"                | Newsletter subscription form                  |
| Copyright text                  | White, 11px, below newsletter                                 | Footer copyright in sidebar                   |
| Section separator               | Thin border/line between nav and newsletter                   | Visual divider                                |

## Page structure (section order, from screenshot)

1. **Sidebar (left, fixed)** — Navy blue (#1B2A4A) background, full viewport height.
   - Logo: "Flank" text, white, bold, large font (top of sidebar).
   - Navigation links: Home (with icon), About (with icon), Services (with icon), Portfolio (with icon), Blog (with icon), Contact (with icon). White text, stacked vertically, each with a lucide-react icon on the left.
   - Newsletter section: "Stay Updated" heading, email input field (white bg, rounded, placeholder "Email Address"), "Subscribe" button (blue accent).
   - Copyright: "© 2024 Flank. All rights reserved." white text, small font, bottom of sidebar.

2. **Hamburger toggle** — Navy circular button (#1B2A4A) positioned fixed at top-left. Toggles sidebar visibility on mobile.

3. **Main content area (right)** — White (#ffffff) background, fills remaining width.
   - Heading: "Sidebar Navigation" — large, bold, dark text.
   - Subheading: "A clean sidebar template" — smaller, gray text.
   - Content cards: 2x2 grid of cards with icon, title, and description.
   - Body text: paragraph describing the template below cards.

## Requirements

### Feature: Flank Sidebar Template

Feature: Flank — Sidebar Navigation Website Template
As a user visiting the Flank website
I want to see a clean sidebar-based layout with icons
So that I can navigate the site via a persistent sidebar with newsletter signup

#### Scenario: Sidebar displays logo and navigation

- **GIVEN** I am on the Flank homepage
- **THEN** I see a fixed left sidebar with navy background
- **AND** I see the logo "Flank" at the top of the sidebar
- **AND** I see navigation links: Home, About, Services, Portfolio, Blog, Contact
- **AND** each nav link has an icon on the left
- **AND** all sidebar text is white

#### Scenario: Sidebar shows newsletter subscription

- **GIVEN** I am on the Flank homepage
- **THEN** I see a "Stay Updated" section in the sidebar
- **AND** I see an email input field with placeholder "Email Address"
- **AND** I see a "Subscribe" button with blue accent color

#### Scenario: Sidebar displays copyright at bottom

- **GIVEN** I am on the Flank homepage
- **THEN** I see copyright text at the bottom of the sidebar
- **AND** the copyright text is white and small

#### Scenario: Main content shows heading and cards

- **GIVEN** I am on the Flank homepage
- **THEN** I see the heading "Sidebar Navigation" in the main content area
- **AND** I see a subheading "A clean sidebar template"
- **AND** I see 4 content cards in a grid layout

#### Scenario: Content cards display icon, title, and description

- **GIVEN** I am on the Flank homepage
- **THEN** each content card has an icon, title, and description text
- **AND** the cards are arranged in a 2-column grid

#### Scenario: Hamburger toggle is visible on mobile

- **GIVEN** I am on the Flank homepage on a mobile viewport
- **THEN** I see a navy circular hamburger button
- **AND** clicking it toggles the sidebar visibility

#### Scenario: Sidebar navigation supports active state

- **GIVEN** I am on the Flank homepage
- **THEN** the "Home" nav link is highlighted as active
- **AND** active link has a distinct background color

#### Scenario: Newsletter form accepts email

- **GIVEN** I am on the Flank homepage
- **WHEN** I enter an email address in the newsletter input
- **AND** I click the Subscribe button
- **THEN** the form processes the subscription

#### Scenario: Responsive layout adapts to mobile

- **GIVEN** I view the site on a mobile viewport
- **THEN** the sidebar collapses and is toggled by the hamburger button
- **AND** the main content fills the full width

#### Scenario: Footer links to Component Dock

- **GIVEN** I am on the Flank homepage
- **THEN** I see a link to https://www.componentdock.com/ in the sidebar copyright area
- **AND** the link text includes "Component Dock"

## Verification checklist

- [ ] Sidebar: fixed left position, navy (#1B2A4A) background, full viewport height
- [ ] Logo: "Flank" text, white, bold, large font at top of sidebar
- [ ] Navigation: Home, About, Services, Portfolio, Blog, Contact — white text with icons, vertical stack
- [ ] Newsletter: "Stay Updated" heading, email input + "Subscribe" button with blue accent
- [ ] Copyright: small white text at bottom of sidebar, links to componentdock.com
- [ ] Hamburger: navy circular button, toggles sidebar on mobile
- [ ] Main content: white background, "Sidebar Navigation" heading, 4 content cards in 2x2 grid
- [ ] Content cards: icon + title + description in each card
- [ ] Responsive: sidebar collapses on mobile, hamburger toggles visibility
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] `public/CNAME` contains `flank.free.componentdock.com`
- [ ] Package name `@free-react-templates/flank`, homepage `https://flank.free.componentdock.com`
- [ ] No ColorLib references in app code (provenance only in spec/TEMPLATES.md)
- [ ] Global font: Poppins via Google Fonts
- [ ] Brand color: `#1B2A4A` in Tailwind theme
