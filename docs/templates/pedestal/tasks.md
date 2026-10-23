# Pedestal — Implementation Tasks

Source design: **Bootstrap Footer 02** (`https://colorlib.com/wp/template/bootstrap-footer-02/`) → recreation name **pedestal**. Shipped at https://pedestal.free.componentdock.com.

Scope: Recreation of ColorLib "Bootstrap Footer 02" (https://colorlib.com/wp/template/bootstrap-footer-02/). Preview: https://preview.colorlib.com/theme/bft/bootstrap-footer-02/ Stack: React 19, Vite, Tailwind CSS 4, TypeScript (strict). Vitest + Testing Library with 100% coverage enforced.

## Component breakdown

Render order as composed in `apps/pedestal/src/App.tsx`:

### 1. Footer
- The footer MUST be a `<footer>` element with role="contentinfo" and a dark background.
- Scenario — Footer element renders:
  - **GIVEN** the page loads
  - **THEN** a `<footer>` element with role="contentinfo" is present
  - **AND** the footer has a dark charcoal background (`#202126`)

### Cross-cutting requirements

- **About Us column renders with contact info and subscribe form** — The About Us section MUST display a heading, descriptive paragraph, phone and email links with orange icons, and a subscribe form.
  - Scenario — About Us content renders: **GIVEN** the footer is visible; **THEN** the "About Us" heading is displayed; **AND** a descriptive paragraph is shown; **AND** a phone number link (+1 291 3912 329) is displayed; **AND** an email address link (info@gmail.com) is displayed; **AND** a subscribe form with email input and Send button is present
  - Scenario — Subscribe form accepts email input: **GIVEN** the subscribe form is visible; **WHEN** the user types an email address; **THEN** the input field displays the typed email; **AND** the Send button is clickable
  - Scenario — Subscribe form prevents default submission: **GIVEN** the subscribe form is visible; **WHEN** the user submits the form; **THEN** the page does not reload (default prevented)
- **Latest Tweet column renders with 3 tweet items** — The Latest Tweet section MUST display a heading and exactly 3 tweet items with Twitter icons.
  - Scenario — Tweet items render: **GIVEN** the footer is visible; **THEN** the "Latest Tweet" heading is displayed; **AND** exactly 3 tweet items are shown
- **Instagram column renders with 4 placeholder images** — The Instagram section MUST display a heading and a 2x2 grid of 4 images with alt text.
  - Scenario — Instagram gallery renders: **GIVEN** the footer is visible; **THEN** the "Instagram" heading is displayed; **AND** exactly 4 images are shown with non-empty alt text
- **Footer menu bar renders navigation and Component Dock branding** — The footer menu bar MUST display horizontal navigation links and a Component Dock attribution link.
  - Scenario — Navigation menu renders: **GIVEN** the footer is visible; **THEN** navigation links are displayed: Home, About, Our works, Services, Blog, Contacts; **AND** all navigation links point to "#"
  - Scenario — Component Dock attribution renders: **GIVEN** the footer is visible; **THEN** a link to componentdock.com is present with text "Component Dock"; **AND** the link opens in a new tab with rel="noreferrer"
- **Design tokens are applied correctly** — The footer MUST use the correct font families (Poppins for footer, Source Serif Pro for paragraphs) and accent color for interactive elements.
  - Scenario — Font families applied: **GIVEN** the footer is visible; **THEN** the footer element uses Poppins font family; **AND** paragraphs use Source Serif Pro font family
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/pedestal/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/pedestal/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/pedestal` ships on https://pedestal.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/pedestal/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/pedestal/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/pedestal/public/CNAME` = `pedestal.free.componentdock.com`
  and the package `homepage` = `https://pedestal.free.componentdock.com`.
