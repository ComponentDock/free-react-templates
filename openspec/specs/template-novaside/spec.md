# Template: NovaSide (Sidebar / Slide-in Panel)
<!-- prep-status: shipped-as=sidenote -->
> **SHIPPED-UNDER** — the ColorLib `colorlib-sidebar-v03` design this prep describes already
> ships as `apps/sidenote` (<https://sidenote.free.componentdock.com>).
> Do not scaffold `apps/novaside`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-sidenote/spec.md`.

## Purpose

Recreation of ColorLib **Sidebar V03** (`colorlib-sidebar-v03`).

- **Preview URL:** https://preview.colorlib.com/theme/sidebar/colorlib-sidebar-v03/
- **ColorLib page:** https://colorlib.com/wp/template/colorlib-sidebar-v03/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-sidebar-v03.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Source slug:** `colorlib-sidebar-v03`
- **New name:** `novaside`

## Design tokens (extracted from preview stylesheet)

| Token | Value |
|---|---|
| **Brand color (sidebar bg)** | `#3f2ef8` (indigo-violet) |
| **Body background** | `#fcfcfc` (near-white) |
| **Text color** | `#212529` (dark charcoal) |
| **Paragraph color** | `#b3b3b3` (light gray) |
| **Post meta color** | `#ccc` |
| **Link color** | `#007bff` (blue) |
| **Link hover** | `#0056b3` |
| **Button primary bg** | `#007bff` (Bootstrap blue) |
| **Sidebar button** | white bg (`#fff`), black text, uppercase, letter-spacing 0.2rem, bold |
| **Font family** | Roboto (weights 300, 400, 700) |
| **Sidebar width** | 380px fixed right |
| **Border radius** | 0 (sharp edges on buttons and inputs) |
| **Hamburger color** | `#000` (black bars on white) |
| **Sidebar transition** | 1s cubic-bezier(0.23, 1, 0.32, 1) slide from right |
| **Shadow (open)** | `10px 0 30px 0 rgba(0,0,0,0.1)` |

## Visual design notes (from screenshot)

The screenshot shows a blog post grid layout (2-column) as the main content
area, with a fixed right-side sliding panel (sidebar). The sidebar has a
vibrant indigo-violet background with white text: a large bold heading
"Share Your Article to the World", a descriptive paragraph, an email input
field (no border radius, white text on transparent background), and a white
full-width "SIGN UP" button (uppercase, bold, letter-spaced). A hamburger
menu toggle is positioned at the top-right of the main content area. When the
sidebar is open, the main content shifts left by 380px with a semi-transparent
overlay behind.

## Requirements

### Sidebar Panel

Feature: NovaSide — slide-in sidebar panel

#### Scenario: Sidebar hidden by default

- **GIVEN** the page loads
- **THEN** the sidebar panel is translated off-screen to the right
- **AND** the main content fills the full viewport width

#### Scenario: Sidebar opens on hamburger click

- **GIVEN** the page loads
- **WHEN** the user clicks the hamburger toggle button
- **THEN** the sidebar slides in from the right
- **AND** the main content shifts left by 380px
- **AND** a dark overlay appears behind the sidebar
- **AND** the hamburger icon transforms to an X

#### Scenario: Sidebar closes on toggle click when open

- **GIVEN** the sidebar is open
- **WHEN** the user clicks the hamburger toggle button
- **THEN** the sidebar slides out to the right
- **AND** the main content returns to full width
- **AND** the overlay disappears
- **AND** the hamburger icon returns to three bars

#### Scenario: Sidebar closes on overlay click

- **GIVEN** the sidebar is open
- **WHEN** the user clicks the dark overlay
- **THEN** the sidebar closes

### Sidebar Content

Feature: NovaSide — sidebar content

#### Scenario: Heading is displayed

- **GIVEN** the sidebar is open
- **THEN** a heading reads "Share Your Article to the World"
- **AND** the heading uses bold weight at 3rem font size

#### Scenario: Description text is shown

- **GIVEN** the sidebar is open
- **THEN** a descriptive paragraph is visible below the heading

#### Scenario: Email signup form is present

- **GIVEN** the sidebar is open
- **THEN** an email input field is visible with placeholder "Enter your email"
- **AND** a "Sign Up" submit button is visible below the input
- **AND** the button is full-width with white background and black text

### Post Grid (Main Content)

Feature: NovaSide — post grid

#### Scenario: Posts are displayed in a 2-column grid

- **GIVEN** the page loads
- **THEN** the main content area shows posts in a 2-column grid layout
- **AND** each post entry has a thumbnail image on the left
- **AND** each post entry has a title and a date on the right

#### Scenario: Post entries are responsive

- **GIVEN** the viewport is narrower than 768px
- **THEN** the post grid collapses to a single column

#### Scenario: Post thumbnail is 80px square

- **GIVEN** a post entry is rendered
- **THEN** the thumbnail is 80x80 pixels with no border radius

### Hamburger Toggle

Feature: NovaSide — hamburger toggle

#### Scenario: Hamburger button is visible

- **GIVEN** the page loads
- **THEN** a hamburger toggle button is visible at the top-right
- **AND** it consists of three horizontal bars

#### Scenario: Hamburger animates to X when active

- **GIVEN** the sidebar is open
- **THEN** the middle bar fades out
- **AND** the top and bottom bars rotate to form an X shape

## Verification checklist

- [ ] Sidebar slides in/out with correct cubic-bezier transition (1s)
- [ ] Sidebar background is `#3f2ef8` (indigo-violet)
- [ ] Sidebar width is 380px
- [ ] Main content shifts left when sidebar is open
- [ ] Overlay appears when sidebar is open, closes sidebar on click
- [ ] Hamburger toggles to X and back
- [ ] Post grid is 2-column on desktop, 1-column on mobile
- [ ] Post thumbnails are 80x80px with no border radius
- [ ] Email input has no border radius, white text, transparent background
- [ ] Sign Up button is white bg, black text, uppercase, letter-spacing 0.2rem
- [ ] Font is Roboto (loaded from Google Fonts)
- [ ] Body background is `#fcfcfc`
- [ ] Paragraph text color is `#b3b3b3`
- [ ] All interactions work with keyboard (focus-visible rings)
- [ ] Sidebar is accessible (aria-expanded, aria-label on toggle)
- [ ] Footer links to https://www.componentdock.com/
