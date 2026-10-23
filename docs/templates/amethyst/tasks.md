# Amethyst — Implementation Tasks

Source design: **Bootstrap Footer 19** (`https://colorlib.com/wp/template/bootstrap-footer-19/`) → recreation name **amethyst**. Shipped at https://amethyst.free.componentdock.com.

Scope: Recreation of ColorLib Bootstrap Footer 19 (https://colorlib.com/wp/template/bootstrap-footer-19/). A purple gradient footer with 4 columns: About, Latest News, Information, and Instagram.

## Component breakdown

Render order as composed in `apps/amethyst/src/App.tsx`:

### 1. Footer
- The footer SHALL be a semantic `<footer>` element with `role="contentinfo"`.
- Scenario — Footer has correct semantic role:
  - **WHEN** the Footer component renders
  - **THEN** a `<footer>` element with `role="contentinfo"` is present in the DOM

### Cross-cutting requirements

- **Purple gradient background** — The footer SHALL display a purple gradient background from #2a1a5e to #5126a7 at 45 degrees.
  - Scenario — Gradient background applied: **WHEN** the Footer component renders; **THEN** the footer element has a linear-gradient background
- **Four-column layout on desktop** — The footer SHALL display 4 columns on desktop (lg breakpoint) and stack on mobile.
  - Scenario — Grid layout present: **WHEN** the Footer component renders; **THEN** a CSS grid with 4 columns at lg breakpoint is applied
- **About column with contact details** — The footer SHALL include an About column with address, phone, email, and a newsletter form.
  - Scenario — About heading and contact info: **WHEN** the Footer component renders; **THEN** an "About" heading is displayed; **AND** address, phone, and email information are visible; **AND** a newsletter subscription form is present
  - Scenario — Newsletter form interaction: **WHEN** a user types an email address into the newsletter input; **THEN** the input value updates; **WHEN** the user submits the form; **THEN** the default form submission is prevented
- **Latest News column with article cards** — The footer SHALL include a Latest News column with 2 news cards showing thumbnail, title, date, author, and comment count.
  - Scenario — News articles displayed: **WHEN** the Footer component renders; **THEN** a "Latest News" heading is displayed; **AND** 2 news articles with thumbnails, titles, dates, authors, and comment counts are visible
- **Information column with navigation links** — The footer SHALL include an Information column with navigation links.
  - Scenario — Info links present: **WHEN** the Footer component renders; **THEN** an "Information" heading is displayed; **AND** links for About, Products, Blog, Contact, and Help & Support are visible
- **Instagram column with photo grid** — The footer SHALL include an Instagram column with a 2x3 grid of placeholder images.
  - Scenario — Instagram grid rendered: **WHEN** the Footer component renders; **THEN** an "Instagram" heading is displayed; **AND** 6 Instagram photo placeholders are visible in a grid
- **Bottom bar with copyright and Component Dock attribution** — The footer SHALL include a bottom bar with copyright text and a Component Dock attribution link.
  - Scenario — Copyright and attribution: **WHEN** the Footer component renders; **THEN** copyright text with the current year is displayed; **AND** a "Component Dock" link pointing to https://www.componentdock.com/ is present; **AND** a top border separator divides the bottom bar from the main content
- **Design token colors** — The footer SHALL use design tokens for accent color (#fe59d7 pink), text colors, and border colors.
  - Scenario — Token classes applied: **WHEN** the Footer component renders; **THEN** footer text uses the footer-text token color; **AND** headings use the footer-heading token color; **AND** accent elements use the footer-accent token color
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/amethyst/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/amethyst/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/amethyst` ships on https://amethyst.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/amethyst/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/amethyst/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/amethyst/public/CNAME` = `amethyst.free.componentdock.com`
  and the package `homepage` = `https://amethyst.free.componentdock.com`.
