# Soleplate — Implementation Tasks

Source design: **Bootstrap Footer 09** (`https://colorlib.com/wp/template/bootstrap-footer-09/`) → recreation name **soleplate**. Shipped at https://soleplate.free.componentdock.com.

Scope: A Clean White Footer template with site logo and horizontal navigation sections. Recreation of ColorLib's **Bootstrap Footer V09** template as a modern React component.

## Component breakdown

Render order as composed in `apps/soleplate/src/App.tsx`:

### 1. Footer
- The footer component SHALL render with a white background and Poppins font family.
- Scenario — Footer background and font:
  - **WHEN** the footer component is mounted
  - **THEN** the footer has a white background
  - **AND** the footer uses Poppins font family
  - **AND** the footer has 7rem vertical padding

### Cross-cutting requirements

- **Site logo display** — The footer SHALL display a centered site logo in blue-purple.
  - Scenario — Logo styling: **WHEN** the footer is rendered; **THEN** the site logo text "Soleplate" is visible; **AND** the logo is centered; **AND** the logo uses blue-purple (#4200ff) color; **AND** the logo has font-weight 900
- **Horizontal navigation links** — The footer SHALL render horizontal inline navigation links.
  - Scenario — Navigation links: **WHEN** the footer is rendered; **THEN** navigation links include About, Services, Press, Careers, FAQ, Legal, Contact; **AND** links are displayed horizontally; **AND** link text is black (#000) by default; **AND** links have 10px horizontal padding
- **Social media icons with brand colors** — The footer SHALL display social media icons each in their brand color.
  - Scenario — Social icons: **WHEN** the footer is rendered; **THEN** a "Stay in touch" heading is shown (bold, black); **AND** social icons are displayed for Instagram, Twitter, Facebook, Dribbble, Pinterest; **AND** each icon has its brand color (pink, sky blue, deep blue, magenta, red); **AND** social icons open in new tabs with noreferrer
- **Copyright bar with Component Dock link** — The footer SHALL display a centered copyright bar linking to Component Dock.
  - Scenario — Copyright and attribution: **WHEN** the footer is rendered; **THEN** a copyright line is centered at the bottom; **AND** the copyright text is gray (#999); **AND** a "Component Dock" link points to https://www.componentdock.com/
- **Accessibility** — The footer SHALL be accessible with proper ARIA attributes and keyboard navigation.
  - Scenario — Accessible elements: **WHEN** the footer is rendered; **THEN** all links are keyboard-focusable; **AND** social icon links have aria-label attributes; **AND** SVG icons have aria-hidden="true"; **AND** the footer uses semantic `<footer>` with role="contentinfo"
- **Responsive layout** — The footer SHALL be responsive on mobile devices.
  - Scenario — Mobile responsiveness: **WHEN** the footer is rendered on a narrow viewport; **THEN** navigation links wrap gracefully; **AND** the footer remains centered and readable
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/soleplate/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/soleplate/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/soleplate` ships on https://soleplate.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/soleplate/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/soleplate/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/soleplate/public/CNAME` = `soleplate.free.componentdock.com`
  and the package `homepage` = `https://soleplate.free.componentdock.com`.
