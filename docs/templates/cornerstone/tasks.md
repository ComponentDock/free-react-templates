# Cornerstone — Implementation Tasks

Source design: **Bootstrap Footer 08** (`https://colorlib.com/wp/template/bootstrap-footer-08/`) → recreation name **cornerstone**. Shipped at https://cornerstone.free.componentdock.com.

Scope: A dark footer with a background image overlay, column headings, navigation links in four columns, social icons, and a centered copyright bar. Recreation of ColorLib "Bootstrap Footer 08".

## Component breakdown

Render order as composed in `apps/cornerstone/src/App.tsx`:

### 1. Footer
- The footer component SHALL render with a background image and a dark semi-transparent overlay.
- Scenario — Footer background styling:
  - **WHEN** the Cornerstone component is rendered
  - **THEN** the footer element has a background image
  - **AND** the footer has a dark overlay (rgba(0,0,0,0.7))
  - **AND** the footer text color is grey (#777)
  - **AND** the footer has 7rem top and bottom padding

### Cross-cutting requirements

- **Logo and description are displayed** — The footer SHALL display a site logo (white, 1.5rem) and a short description paragraph in the left column.
  - Scenario — Logo display: **WHEN** the user views the left column of the footer; **THEN** the logo text "Cornerstone" is displayed in white (#fff) at 1.5rem font size; **AND** the logo is wrapped in an anchor tag
  - Scenario — Description paragraph: **WHEN** the user views the left column of the footer; **THEN** a description paragraph is displayed below the logo in grey (#777)
- **Navigation columns have headings** — The footer SHALL display white bold headings above each navigation column.
  - Scenario — Heading display: **WHEN** the user views the navigation columns; **THEN** each column has a white (#fff) bold heading at 16px; **AND** the heading has 30px bottom margin
- **Navigation links are displayed in columns** — The footer SHALL display navigation links organized in vertical lists across multiple columns.
  - Scenario — Navigation link content: **WHEN** the user views the middle columns of the footer; **THEN** navigation links are displayed in vertical lists under headings; **AND** each column contains 3-5 links; **AND** each link has 10px bottom margin
  - Scenario — Navigation link hover styling: **WHEN** the user hovers over a navigation link; **THEN** the link color changes from light grey (#999999) to white (#fff); **AND** the transition is smooth (0.3s ease)
- **Social media icons are displayed** — The footer SHALL display social media icons (Instagram, Twitter, Facebook, Pinterest, Dribbble) under a "Follow Us" heading.
  - Scenario — Social icon links: **WHEN** the user views the right column of the footer; **THEN** a "Follow Us" heading is displayed; **AND** social icons are displayed inline in a horizontal row below the heading; **AND** each icon is wrapped in a link with target="_blank"
  - Scenario — Social icon hover styling: **WHEN** the user hovers over a social icon; **THEN** the icon color changes from grey (gray) to white (#fff)
- **Copyright bar is displayed** — The footer SHALL display a centered copyright bar at the bottom with a medium grey top border.
  - Scenario — Copyright display: **WHEN** the user views the bottom of the footer; **THEN** a copyright bar is displayed with centered text; **AND** the copyright bar has a top border in medium grey (#595959); **AND** the copyright text reads "© 2019—2020 All Rights Reserved."
- **Component Dock attribution** — The footer SHALL include a "Component Dock" attribution link pointing to https://www.componentdock.com/.
  - Scenario — Attribution link: **WHEN** the user scrolls to the bottom of the footer; **THEN** a "Component Dock" link is displayed; **AND** the link points to https://www.componentdock.com/
- **Responsive layout** — The footer SHALL stack columns vertically on mobile devices.
  - Scenario — Mobile layout: **WHEN** the user views the footer on a mobile device; **THEN** the columns stack vertically; **AND** the social icons remain inline; **AND** the copyright bar remains centered
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/cornerstone/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/cornerstone/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Footer renders with background image and dark overlay; [ ] Logo is white, 1.5rem; [ ] Column headings are white, bold, 16px; [ ] Nav links are light grey (#999999), white on hover; [ ] Social icons are inline, grey, white on hover; [ ] Copyright bar has medium grey (#595959) top border; [ ] Footer padding is 7rem top/bottom; [ ] Poppins font family loaded; [ ] Link transitions are 0.3s ease; [ ] Responsive stacking on mobile; [ ] Component Dock attribution link present; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/cornerstone` ships on https://cornerstone.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/cornerstone/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/cornerstone/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/cornerstone/public/CNAME` = `cornerstone.free.componentdock.com`
  and the package `homepage` = `https://cornerstone.free.componentdock.com`.
