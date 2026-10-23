# Footerbreeze — Implementation Tasks

Source design: **Bootstrap Footer 07** (`https://colorlib.com/wp/template/bootstrap-footer-07/`) → recreation name **footerbreeze**. Shipped at https://footerbreeze.free.componentdock.com.

Scope: A dark-themed footer with a black background, four-column layout (brand description, two nav link columns, social + CTA). It also includes and a centered copyright bar with a top border. Recreation of ColorLib's **Bootstrap Footer 07**.

## Component breakdown

Render order as composed in `apps/footerbreeze/src/App.tsx`:

### 1. Footer
- The footer SHALL have a black (#000) background with 7rem vertical padding and four columns: brand description, primary nav links, secondary nav links, and legal nav + social icons + CTA button.
- Scenario — Footer displays dark background:
  - **WHEN** the footer renders
  - **THEN** the footer background is black (#000)
  - **AND** the footer has 7rem vertical padding
- Scenario — Brand column shows logo and description:
  - **WHEN** the footer renders
  - **THEN** a brand logo text "FooterBreeze" is displayed in white, 1.5rem
  - **AND** a description paragraph in gray text appears below the logo
- Scenario — Primary navigation links:
  - **WHEN** the footer renders
  - **THEN** 5 navigation links are displayed vertically: Home, About Us, Portfolio, Services, Contact
  - **AND** each link is gray (#808080) with 10px bottom margin
  - **AND** hovering a link changes its color to white
- Scenario — Secondary navigation links:
  - **WHEN** the footer renders
  - **THEN** 5 navigation links are displayed vertically: Clients, Team, Career, Testimonials, Journal
  - **AND** each link follows the same styling as primary nav
- Scenario — Legal navigation links:
  - **WHEN** the footer renders
  - **THEN** 3 navigation links are displayed vertically: Privacy Policy, Terms & Conditions, Partners
  - **AND** each link follows the same styling as primary nav
- Scenario — Social icons:
  - **WHEN** the footer renders
  - **THEN** 5 social icons are displayed horizontally: Instagram, Twitter, Facebook, Pinterest, Dribbble
  - **AND** each icon is gray (#808080) and changes to white on hover
- Scenario — Contact Us CTA button:
  - **WHEN** the footer renders
  - **THEN** a "Contact Us" button is displayed below the social icons
  - **AND** the button has a pink (#e42c64) background with white text
  - **AND** the button is pill-shaped (border-radius 30px)

### Cross-cutting requirements

- **Preview content area** — The application SHALL display a centered heading "Footer #7" on a light background, filling 70vh.
  - Scenario — Preview content area renders: **WHEN** the page loads; **THEN** a centered heading "Footer #7" is visible; **AND** the content area uses a light background
- **Copyright bar** — A full-width centered copyright row with a top border (#404040) and extra padding SHALL be present at the bottom of the footer.
  - Scenario — Copyright bar renders: **WHEN** the footer renders; **THEN** a copyright row is centered at the bottom; **AND** the row has a top border (#404040); **AND** the text reads "© 2019-2020 All Rights Reserved." in small muted text
- **Accessibility** — All interactive elements SHALL have accessible names and appropriate ARIA attributes.
  - Scenario — Social link accessibility: **WHEN** the footer renders; **THEN** each social icon link has a descriptive aria-label (e.g. "Instagram", "Twitter")
  - Scenario — CTA button accessibility: **WHEN** the footer renders; **THEN** the Contact Us button has an accessible name
- **Responsive behavior** — The footer layout SHALL adapt responsively: single-column on mobile, four-column grid on desktop.
  - Scenario — Mobile layout stacks vertically: **WHEN** the viewport width is below 768px; **THEN** all footer columns stack vertically; **AND** social icons center-align
  - Scenario — Desktop layout uses four columns: **WHEN** the viewport width is 768px or above; **THEN** the footer displays in a four-column grid; **AND** the social icons and CTA center-align in the fourth column
- **Component Dock attribution** — The footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".
  - Scenario — Footer links to Component Dock: **WHEN** the footer renders; **THEN** a link to https://www.componentdock.com/ is present; **AND** the link text reads "Component Dock"
- **No ColorLib references** — The application SHALL NOT contain any references to ColorLib in source files.
  - Scenario — App code contains no ColorLib strings: **WHEN** any source file in apps/footerbreeze/ is inspected; **THEN** no file contains the string "colorlib" (case-insensitive)

## Verification

- [x] `apps/footerbreeze` ships on https://footerbreeze.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/footerbreeze/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/footerbreeze/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/footerbreeze/public/CNAME` = `footerbreeze.free.componentdock.com`
  and the package `homepage` = `https://footerbreeze.free.componentdock.com`.
