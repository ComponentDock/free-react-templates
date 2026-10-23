# Topaz — Implementation Tasks

Source design: **Bootstrap Footer 14** (`https://colorlib.com/wp/template/bootstrap-footer-14/`) → recreation name **topaz**. Shipped at https://topaz.free.componentdock.com.

Scope: A dark-themed footer with a charcoal background, golden amber accent color, four-column layout. It also includes tag cloud, subscribe form + social icons), and a bottom copyright bar on a darker strip. Recreation of ColorLib's **Bootstrap Footer 14**.

## Component breakdown

Render order as composed in `apps/topaz/src/App.tsx`:

### 1. Footer
- The footer SHALL have a dark charcoal (#272727) background with four columns: brand description, categories list, tag cloud, and subscribe form + social icons.
- Scenario — Footer displays dark background:
  - **WHEN** the footer renders
  - **THEN** the footer background is dark charcoal (#272727)
  - **AND** the footer has approximately 7em vertical padding
- Scenario — Brand column shows logo and description:
  - **WHEN** the footer renders
  - **THEN** a brand logo text "Topaz" is displayed in white, 16px, capitalized
  - **AND** a description paragraph in rgba(255,255,255,0.3) text appears below
  - **AND** a "read more" link is displayed in golden amber (#f7b633)
- Scenario — Categories column:
  - **WHEN** the footer renders
  - **THEN** a "Categories" heading is displayed in white, uppercase, 13px, weight 600
  - **AND** 4 category links are listed vertically: Buy & Sell, Merchant, Giving back, Help & Support
  - **AND** each link is rgba(255,255,255,0.7) with vertical padding
- Scenario — Tag cloud column:
  - **WHEN** the footer renders
  - **THEN** a "Tag cloud" heading is displayed with the same heading style
  - **AND** 8 tag links are displayed: dish, menu, food, sweet, tasty, delicious, desserts, drinks
  - **AND** each tag has a 1px solid border rgba(255,255,255,0.1) and white text
- Scenario — Subscribe form column:
  - **WHEN** the footer renders
  - **THEN** a "Subscribe" heading is displayed with the same heading style
  - **AND** an email input with placeholder "Enter email address" is shown
  - **AND** the input has a semi-transparent background rgba(255,255,255,0.05)
  - **AND** a golden amber (#f7b633) submit button with a send icon is adjacent to the input
  - **AND** the submit button is 52×52px with no border-radius (square)
- Scenario — Social icons:
  - **WHEN** the footer renders
  - **THEN** a "Follow us" heading is displayed below the subscribe form
  - **AND** 3 social icons are displayed horizontally: Twitter, Facebook, Instagram
  - **AND** each icon is white with a 1px solid rgba(255,255,255,0.1) border and 4px border-radius

### Cross-cutting requirements

- **Preview content area** — The application SHALL display a centered heading "Footer #14" on a light background, with section padding matching the original (12em).
  - Scenario — Preview content area renders: **WHEN** the page loads; **THEN** a centered heading "Footer #14" is visible; **AND** the content area uses a light background; **AND** the section has generous vertical padding (~12em)
- **Copyright bar** — A full-width copyright bar on a darker strip (#1a1a1a) with a top border SHALL be present at the bottom of the footer.
  - Scenario — Copyright bar renders: **WHEN** the footer renders; **THEN** a copyright row appears at the bottom on a #1a1a1a background; **AND** the left side shows copyright text with a heart icon; **AND** the right side shows policy links: Terms, Privacy, Compliances; **AND** policy links are rgba(255,255,255,0.5)
- **Accessibility** — All interactive elements SHALL have accessible names and appropriate ARIA attributes.
  - Scenario — Social link accessibility: **WHEN** the footer renders; **THEN** each social icon link has a descriptive aria-label (e.g. "Twitter", "Facebook", "Instagram")
  - Scenario — Subscribe form accessibility: **WHEN** the footer renders; **THEN** the email input has an associated label or aria-label; **AND** the submit button has an accessible name
- **Responsive behavior** — The footer layout SHALL adapt responsively: single-column on mobile, four-column grid on desktop.
  - Scenario — Mobile layout stacks vertically: **WHEN** the viewport width is below 768px; **THEN** all footer columns stack vertically; **AND** social icons center-align
  - Scenario — Desktop layout uses four columns: **WHEN** the viewport width is 768px or above; **THEN** the footer displays in a four-column grid
- **Component Dock attribution** — The footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".
  - Scenario — Footer links to Component Dock: **WHEN** the footer renders; **THEN** a link to https://www.componentdock.com/ is present; **AND** the link text reads "Component Dock"
- **No ColorLib references** — The application SHALL NOT contain any references to ColorLib in source files.
  - Scenario — App code contains no ColorLib strings: **WHEN** any source file in apps/topaz/ is inspected; **THEN** no file contains the string "colorlib" (case-insensitive); [ ] Footer background is #272727; [ ] Bottom bar background is #1a1a1a; [ ] Font family is Nunito Sans (loaded via Google Fonts); [ ] Accent color #f7b633 used for links and submit button; [ ] 4-column layout on desktop, stacked on mobile; [ ] Tag cloud with bordered tags; [ ] Subscribe form with square golden submit button; [ ] Social icons with border and 4px radius; [ ] Copyright bar with Terms, Privacy, Compliances links; [ ] Component Dock footer link present; [ ] No ColorLib references in app code; [ ] All tests pass with 100% coverage

## Verification

- [x] `apps/topaz` ships on https://topaz.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/topaz/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/topaz/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/topaz/public/CNAME` = `topaz.free.componentdock.com`
  and the package `homepage` = `https://topaz.free.componentdock.com`.
