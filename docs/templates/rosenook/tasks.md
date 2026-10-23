# Rosenook — Implementation Tasks

Source design: **Bootstrap Footer 13** (`https://colorlib.com/wp/template/bootstrap-footer-13/`) → recreation name **rosenook**. Shipped at https://rosenook.free.componentdock.com.

Scope: Recreation of ColorLib **Bootstrap Footer 13** (`bootstrap-footer-13`), a feminine multi-column footer template targeting fashion/lifestyle sites. Light pink background (#f8f1f1), salmon/coral accent (#f17e7e), three link columns (Men, Women, Kids), social icons as 40x40 circles, newsletter subscription form, and copyright bar.

## Component breakdown

Render order as composed in `apps/rosenook/src/App.tsx`:

### 1. Footer
- The application SHALL display a footer with a light pink background (#f8f1f1) and 7em vertical padding, containing a two-column layout with link columns on the left and social/subscribe content on the right.
- Scenario — Footer renders with correct background:
  - **WHEN** the page loads
  - **THEN** the footer has background color #f8f1f1
  - **AND** the footer has padding of approximately 7em top and bottom
  - **AND** the left column contains three link sections
  - **AND** the right column contains social icons and a subscription form

### Cross-cutting requirements

- **Three-column link section** — The footer SHALL display three link columns (Men, Women, Kids) on the left side, each with an uppercase heading and a list of links.
  - Scenario — Men column renders: **WHEN** the footer renders; **THEN** the Men column contains links: Jeans, Jumpers, Leather, Shorts, Boots, Watches; **AND** the heading is uppercase with 2px letter-spacing
  - Scenario — Women column renders: **WHEN** the footer renders; **THEN** the Women column contains links: Dresses, Jumpsuits, Shirts, T-shirts, Sweatshirts, Jackets, Coats
  - Scenario — Kids column renders: **WHEN** the footer renders; **THEN** the Kids column contains links: Shirts, T-shirts, Polos, Sweaters, Sweatshirts, Jackets, Watches
- **Social icons** — The footer SHALL display four circular social icons (Twitter, Facebook, Instagram, LinkedIn) with a 40x40px circle shape, accent color #f17e7e, and white on hover.
  - Scenario — Social icons render: **WHEN** the footer renders; **THEN** four social icon links are displayed (Twitter, Facebook, Instagram, LinkedIn); **AND** each icon is in a 40x40px circle with 50% border-radius; **AND** the icon color is #f17e7e (salmon coral); **AND** hovering an icon turns the background to the accent color with white text
- **Newsletter subscription form** — The footer SHALL include a newsletter subscription form with an email input and a "Subscribe" button, both 52px tall with square corners.
  - Scenario — Subscribe form renders: **WHEN** the footer renders; **THEN** a "Subscribe Us" heading is displayed; **AND** an email input with placeholder "Enter email address" is shown; **AND** a "Subscribe" button with background #f17e7e and white text is shown; **AND** both input and button are 52px tall with no border-radius
- **Copyright and legal links** — The footer SHALL display a copyright bar at the bottom with a thin top border separator, copyright text on the left, and Terms & Conditions / Privacy links on the right.
  - Scenario — Copyright bar renders: **WHEN** the footer renders; **THEN** a thin top border separates the copyright bar from main content; **AND** the left side shows copyright text with the current year; **AND** the right side shows "Terms & Conditions" and "Privacy" links
- **Component Dock branding** — The footer SHALL link to https://www.componentdock.com/ with "More templates at Component Dock" text.
  - Scenario — Component Dock link renders: **WHEN** the footer renders; **THEN** a link to https://www.componentdock.com/ is present; **AND** the link text includes "Component Dock"
- **Responsive layout** — The footer SHALL be responsive, stacking columns vertically on mobile viewports.
  - Scenario — Mobile layout stacks columns: **WHEN** the viewport is below the md breakpoint; **THEN** the three link columns stack vertically; **AND** the social/subscribe section stacks below the links; **AND** the copyright row stacks with full-width items
- **Typography** — The footer SHALL use Poppins font family with uppercase headings, 2px letter-spacing, and specific link colors.
  - Scenario — Typography styles apply: **WHEN** the footer renders; **THEN** headings use Poppins font, 14px, uppercase, 2px letter-spacing, weight 500; **AND** list links use color rgba(0,0,0,0.3); **AND** all interactive elements use the accent color #f17e7e
- **No ColorLib references** — The application SHALL NOT contain any references to ColorLib in app source code, comments, or data files.
  - Scenario — No ColorLib strings in app code: **WHEN** inspecting apps/rosenook/src/; **THEN** no file contains the string "colorlib" or "ColorLib"

## Verification

- [x] `apps/rosenook` ships on https://rosenook.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/rosenook/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/rosenook/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/rosenook/public/CNAME` = `rosenook.free.componentdock.com`
  and the package `homepage` = `https://rosenook.free.componentdock.com`.
