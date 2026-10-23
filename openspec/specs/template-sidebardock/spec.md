# Template: Sidebardock (Sidebar / Journal)

## Purpose

Recreation of the ColorLib **Sidebar V10** template.
- Source: https://colorlib.com/wp/template/colorlib-sidebar-v10/
- Preview: https://preview.colorlib.com/theme/colorlib-sidebar-v10/ (404 — unreachable; design derived from screenshot) — **re-probed 2026-10-23: the demo serves** (measured record below)
- Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript
- Category: Sidebar layout — fixed left sidebar with author portrait, navigation, and social links; scrollable content grid of blog/article cards.

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://preview.colorlib.com/theme/sidebar/colorlib-sidebar-v10/` — HTTP 200, 12,666 B, title `Sidebar #1`.
>
> Sheet: `https://preview.colorlib.com/theme/sidebar/colorlib-sidebar-v10/css/style.css?v=df77926e` (14,562 B).
> Faces it actually declares: `Roboto`, `Segoe UI`, `Helvetica Neue`, `Noto Sans`.
> The recorded brand `#00b4d8` occurs nowhere in it: the values below are screenshot samples, not measurements — `docs/replication.md` makes the sheet canonical.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->

## Design tokens

Extracted from the screenshot (preview was unreachable) — **re-probed 2026-10-23: the demo serves** (measured record below):

| Token              | Value                                          |
| ------------------ | ---------------------------------------------- |
| Brand color        | `#00b4d8` (cyan-blue, sidebar gradient start)  |
| Brand color 2      | `#7b2ff7` (violet, sidebar gradient end)       |
| Sidebar bg         | Gradient from `#00b4d8` → `#7b2ff7` (top→bottom) |
| Content bg         | `#ffffff` (white)                              |
| Text primary       | `#333333` (dark gray, card titles)             |
| Text secondary     | `#999999` (gray, card dates)                   |
| Text on sidebar    | `#ffffff` (white)                              |
| Social icon bg     | `rgba(255,255,255,0.2)` (semi-transparent white) |
| Social icon border | none (rounded-full)                            |
| Font – heading     | Playfair Display (serif, sidebar title)        |
| Font – body        | Poppins (sans-serif, navigation + card text)   |
| Font – card date   | Poppins 300, `#999`                            |
| Border radius      | 0 (sidebar, cards — flat edges)                |
| Sidebar width      | ~33% (fixed, full height)                      |
| Social icon size   | 40×40px circles                                |
| Card layout        | 2-column grid in content area                   |
| Card gap           | ~30px vertical, ~20px horizontal               |
| Portrait overlay   | Blue gradient overlay on author photo           |

## Section structure

1. **Sidebar** (fixed left, full height)
   - Author portrait image with blue-cyan gradient overlay
   - Site title ("Journal") in serif display font
   - Tagline / description paragraph
   - Navigation links (Latest, Projects, About)
   - Social icon row (Facebook, Twitter, Instagram, Globe/Dribbble, LinkedIn)
2. **Content area** (scrollable, right side)
   - Toggle button (X icon) to show/hide sidebar
   - Article grid: 2 columns of post cards
   - Each card: thumbnail image (circular or rounded), post title, date

## Requirements

### Sidebar

Feature: Sidebar component

#### Scenario: Sidebar displays author portrait with gradient overlay

- **GIVEN** the sidebar is visible
- **THEN** the author portrait image is displayed
- **AND** a blue-to-violet gradient overlay covers the portrait

#### Scenario: Sidebar displays site title

- **GIVEN** the sidebar is visible
- **THEN** the title "Journal" is displayed in a large serif font
- **AND** the title text is white

#### Scenario: Sidebar displays tagline

- **GIVEN** the sidebar is visible
- **THEN** a tagline paragraph is displayed below the title
- **AND** the tagline text is white

#### Scenario: Sidebar displays navigation links

- **GIVEN** the sidebar is visible
- **THEN** navigation links for "Latest", "Projects", and "About" are shown
- **AND** the link text is white

#### Scenario: Sidebar displays social icons

- **GIVEN** the sidebar is visible
- **THEN** 5 social icons are displayed in a horizontal row
- **AND** each icon is a circular button with semi-transparent white background
- **AND** the icons represent Facebook, Twitter, Instagram, Dribbble, and LinkedIn

### Content area

Feature: Content area

#### Scenario: Toggle button controls sidebar visibility

- **GIVEN** the sidebar is visible
- **WHEN** the user clicks the toggle button (X)
- **THEN** the sidebar slides out of view
- **WHEN** the user clicks the toggle button again
- **THEN** the sidebar slides back into view

#### Scenario: Article grid displays post cards in 2 columns

- **GIVEN** the content area is visible
- **THEN** post cards are arranged in a 2-column grid
- **AND** each card contains a thumbnail image
- **AND** each card contains a post title
- **AND** each card contains a posted date

#### Scenario: Post cards display correct content

- **GIVEN** the content area is visible
- **THEN** each card title is displayed in dark text
- **AND** each card date is displayed in gray text
- **AND** each card date reads "Posted: [date]"

### Responsive behavior

Feature: Responsive layout

#### Scenario: Sidebar is full width on mobile

- **GIVEN** the viewport is less than 768px wide
- **THEN** the sidebar occupies the full width
- **AND** the content area is hidden or below the sidebar

#### Scenario: Content grid collapses to single column on small screens

- **GIVEN** the viewport is less than 768px wide
- **THEN** the article grid shows 1 column instead of 2

## Verification checklist

- [ ] Sidebar gradient matches blue→violet from screenshot
- [ ] Author portrait has gradient overlay effect
- [ ] Title uses serif font (Playfair Display)
- [ ] Navigation links are white and clickable
- [ ] Social icons are circular with semi-transparent bg
- [ ] Toggle button shows/hides sidebar with animation
- [ ] Article grid is 2-column on desktop, 1-column on mobile
- [ ] Cards show thumbnail, title, and date
- [ ] Footer links to https://www.componentdock.com/ (Component Dock)
- [ ] No ColorLib references in app code
- [ ] Uses picsum.photos for placeholder images
- [ ] Uses lucide-react for social icons
- [ ] 100% test coverage
- [ ] Spec + docs committed and pushed to main

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/sidebar/colorlib-sidebar-v10/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#00b4d8` — nearest `#007bff` (d=69)
- `#7b2ff7` — nearest `#007bff` (d=145)
<!-- live-palette-unverified:end -->
