# Template: Sidecraft (Sidebar Navigation)

## Purpose

A Sidebar Navigation template with hamburger and main sections. Recreation of ColorLib **Bootstrap Sidebar 02** template as a React 19 + Vite + Tailwind 4 + TypeScript app.

- Source: https://colorlib.com/wp/template/bootstrap-sidebar-02/
- Preview: https://preview.colorlib.com/theme/bootstrap-sidebar-02/ (unreachable — 404) — **re-probed 2026-10-23: the demo serves** (measured record below)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-sidebar-170618.jpg
- New name: `sidecraft` (apps/sidecraft, @free-react-templates/sidecraft)
- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript
- Note: Live preview was unreachable (404). Design tokens and structure derived from the screenshot — **re-probed 2026-10-23: the demo serves** (measured record below).

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://colorlib.com/etc/bootstrap-sidebar/sidebar-02/` — HTTP 200, 4,808 B, title `Sidebar 02`.
>
> Sheet: `https://colorlib.com/etc/bootstrap-sidebar/sidebar-02/css/style.css?v=49f8fffb` (16,998 B).
> Faces it actually declares: `Poppins`, `Segoe UI`, `Roboto`, `Helvetica Neue`.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->

## Design tokens (extracted from screenshot)

| Token | Value | Usage |
|-------|-------|-------|
| Sidebar background (brand purple) | `#6C4AB6` | Sidebar container background |
| Sidebar text | `#ffffff` | All sidebar text (nav links, logo, copyright) |
| Content background | `#f5f5f5` | Main content area background |
| Content heading color | `#333333` | Main content h1/h2 headings |
| Content body text | `#555555` | Paragraph text in content area |
| Hamburger button bg | `#6C4AB6` | Circular hamburger toggle button |
| Hamburger button text | `#ffffff` | Hamburger icon lines |
| Font family | `Poppins` (via Google Fonts) | Global font for all text |
| Heading weight | 600 | Sidebar nav links, content headings |
| Body weight | 400 | Paragraphs, body text |
| Body font size | 16px | Paragraphs |
| Sidebar width | ~270px | Fixed left sidebar |
| Nav link style | White text, 16px, padding ~12px vertical, dropdown arrows on Home/Pages | Sidebar navigation |
| Newsletter input | White bg, rounded, placeholder "Enter Email Address" | Newsletter subscription form |
| Copyright text | White, 12px, below newsletter | Footer copyright in sidebar |
| Section separator | Thin border/line between nav and newsletter | Visual divider |

## Page structure (section order, from screenshot)

1. **Sidebar (left, fixed)** — Purple (#6C4AB6) background, full viewport height.
   - Logo: "Splash" text, white, bold, large font (top of sidebar).
   - Navigation links: Home (with dropdown arrow ▼), About, Pages (with dropdown arrow ▼), Portfolio, Contact. White text, stacked vertically.
   - Newsletter section: "Subscribe for newsletter" heading, email input field (white bg, rounded, placeholder "Enter Email Address").
   - Copyright: "Copyright ©2019 All rights reserved | This template is made with by" (white text, small font, bottom of sidebar).

2. **Hamburger toggle** — Purple circular button (#6C4AB6) positioned at top-right of sidebar/content boundary. Toggles sidebar visibility on mobile.

3. **Main content area (right)** — Light gray (#f5f5f5) background, fills remaining width.
   - Heading: "Sidebar #02" — large, bold, dark text.
   - Body text: Two paragraphs of lorem ipsum text — standard paragraph styling with relaxed line-height.

## Requirements

### Feature: Sidecraft Sidebar Template

Feature: Sidecraft — Sidebar Navigation Website Template
As a user visiting the Sidecraft website
I want to see a clean sidebar-based layout
So that I can navigate the site via a persistent sidebar with newsletter signup

#### Scenario: Sidebar displays logo and navigation

- **GIVEN** I am on the Sidecraft homepage
- **THEN** I see a fixed left sidebar with purple background
- **AND** I see the logo "Splash" at the top of the sidebar
- **AND** I see navigation links: Home, About, Pages, Portfolio, Contact
- **AND** Home and Pages have dropdown arrows indicating submenus
- **AND** all sidebar text is white

#### Scenario: Sidebar shows newsletter subscription

- **GIVEN** I am on the Sidecraft homepage
- **THEN** I see a "Subscribe for newsletter" section in the sidebar
- **AND** I see an email input field with placeholder "Enter Email Address"
- **AND** the input has a white background with rounded corners

#### Scenario: Sidebar displays copyright at bottom

- **GIVEN** I am on the Sidecraft homepage
- **THEN** I see copyright text at the bottom of the sidebar
- **AND** the copyright text is white and small

#### Scenario: Main content shows page heading and body text

- **GIVEN** I am on the Sidecraft homepage
- **THEN** I see the heading "Sidebar #02" in the main content area
- **AND** I see paragraphs of body text below the heading
- **AND** the content area has a light gray background

#### Scenario: Hamburger toggle is visible

- **GIVEN** I am on the Sidecraft homepage
- **THEN** I see a purple circular hamburger button at the sidebar boundary
- **AND** on mobile it toggles sidebar visibility

#### Scenario: Sidebar navigation supports dropdowns

- **GIVEN** I click the "Home" link in the sidebar
- **THEN** a dropdown submenu appears below it
- **GIVEN** I click the "Pages" link in the sidebar
- **THEN** a dropdown submenu appears below it

#### Scenario: Newsletter form accepts email

- **GIVEN** I am on the Sidecraft homepage
- **WHEN** I enter an email address in the newsletter input
- **AND** I submit the form
- **THEN** the form processes the subscription

#### Scenario: Responsive layout adapts to mobile

- **GIVEN** I view the site on a mobile viewport
- **THEN** the sidebar collapses and is toggled by the hamburger button
- **AND** the main content fills the full width

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/sidecraft/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/sidecraft/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Sidebar: fixed left position, purple (#6C4AB6) background, full viewport height
- [x] Logo: "Splash" text, white, bold, large font at top of sidebar
- [ ] Navigation: Home (with ▼), About, Pages (with ▼), Portfolio, Contact — white text, vertical stack
- [ ] Dropdowns: Home and Pages show/hide submenu on click
- [x] Newsletter: "Subscribe for newsletter" heading, email input with white bg + rounded corners
- [ ] Copyright: small white text at bottom of sidebar
- [ ] Hamburger: purple circular button at sidebar boundary, toggles sidebar on mobile
- [ ] Main content: light gray (#f5f5f5) background, "Sidebar #02" heading, body text paragraphs
- [ ] Responsive: sidebar collapses on mobile, hamburger toggles visibility
- [x] Footer links to `https://www.componentdock.com/`
- [x] `public/CNAME` contains `sidecraft.free.componentdock.com`
- [x] Package name `@free-react-templates/sidecraft`, homepage `https://sidecraft.free.componentdock.com`
- [x] No ColorLib references in app code (provenance only in spec/TEMPLATES.md)
- [ ] Global font: Poppins via Google Fonts
- [ ] Brand color: `#6C4AB6` in Tailwind theme
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
