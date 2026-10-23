# Cairn — Implementation Tasks

Source design: **Bootstrap Footer 05** (`https://colorlib.com/wp/template/bootstrap-footer-05/`) → recreation name **cairn**. Shipped at https://cairn.free.componentdock.com.

Scope: A clean white footer with a blue accent, email subscribe form, horizontal navigation links, social icons, and a centered logo in the bottom bar. Recreation of ColorLib "Bootstrap Footer 05".

## Component breakdown

Render order as composed in `apps/cairn/src/App.tsx`:

### 1. Footer
- The footer component SHALL render with a white (#fff) background and a subtle top border in light grey (#efefef).
- Scenario — Footer background styling:
  - **WHEN** the Cairn component is rendered
  - **THEN** the footer element has a white background (#fff)
  - **AND** the footer has a top border in light grey (#efefef)

### Cross-cutting requirements

- **Email subscribe form is displayed** — The footer SHALL display an email subscribe form with a grey input field and a blue submit button.
  - Scenario — Email input field: **WHEN** the user views the top section of the footer; **THEN** an email input field is displayed with grey background (#e6e6e6); **AND** the input has placeholder text "Enter your email"; **AND** the input is 45px tall with no border
  - Scenario — Subscribe button: **WHEN** the user views the top section of the footer; **THEN** a subscribe button is positioned next to the email input; **AND** the button has blue background (#3e64ff) and white text
- **Navigation links are displayed inline** — The footer SHALL display horizontal navigation links (Features, Blog, Pricing, Services) centered in the top section.
  - Scenario — Navigation link content: **WHEN** the user views the top section of the footer; **THEN** navigation links are displayed inline and centered horizontally; **AND** each link has 10px padding
  - Scenario — Navigation link hover styling: **WHEN** the user hovers over a navigation link; **THEN** the link color changes from grey (#777) to blue (#3e64ff); **AND** the transition is smooth (0.3s ease)
- **Social media icons are displayed** — The footer SHALL display social media icons (Twitter, Instagram, Facebook, Pinterest) right-aligned in the top section.
  - Scenario — Social icon links: **WHEN** the user views the top section of the footer; **THEN** social icons are displayed inline and right-aligned on desktop; **AND** each icon is wrapped in a link with target="_blank"
- **Divider separates top and bottom sections** — The footer SHALL display a border-bottom divider between the top and bottom sections.
  - Scenario — Divider styling: **WHEN** the user views the footer; **THEN** a border-bottom line separates the top section from the bottom bar; **AND** the divider color is light grey (#efefef)
- **Bottom bar with logo centered** — The footer SHALL display a bottom bar with legal links on the left, logo centered, and copyright on the right.
  - Scenario — Logo display: **WHEN** the user views the bottom bar; **THEN** the logo text "Cairn" is centered; **AND** the logo is displayed in blue (#3e64ff) with 30px font-size and weight 900
  - Scenario — Legal links: **WHEN** the user views the bottom bar; **THEN** legal links (Terms, About, Privacy, Contact) are displayed inline on the left
  - Scenario — Copyright text: **WHEN** the user views the bottom bar; **THEN** copyright text is displayed on the right in small font, grey (#777)
- **Component Dock attribution** — The footer SHALL include a "Component Dock" attribution link pointing to https://www.componentdock.com/.
  - Scenario — Attribution link: **WHEN** the user scrolls to the bottom of the footer; **THEN** a "Component Dock" link is displayed; **AND** the link points to https://www.componentdock.com/
- **Responsive layout** — The footer SHALL stack sections vertically on mobile devices.
  - Scenario — Mobile layout: **WHEN** the user views the footer on a mobile device; **THEN** the top section stacks vertically; **AND** the bottom bar stacks with logo on top, links below, copyright at bottom
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/cairn/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/cairn/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/cairn` ships on https://cairn.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/cairn/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/cairn/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/cairn/public/CNAME` = `cairn.free.componentdock.com`
  and the package `homepage` = `https://cairn.free.componentdock.com`.
