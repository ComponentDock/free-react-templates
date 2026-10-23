# Footerdash — Implementation Tasks

Source design: **Bootstrap Footer 18** (`https://colorlib.com/wp/template/bootstrap-footer-18/`) → recreation name **footerdash**. Shipped at https://footerdash.free.componentdock.com.

Scope: Recreation of ColorLib's **Bootstrap Footer 18** — a dark footer with a centered subscription form (email input + button), a row of navigation links, social media icons, and a copyright line. Clean, modern, dark-background footer design.

## Component breakdown

Render order as composed in `apps/footerdash/src/App.tsx`:

### 1. Footer
- The page SHALL display a white content area in the upper portion and a dark footer in the lower portion.

### Cross-cutting requirements

- **Footer section renders with dark background** — The footer SHALL have a dark background (#121212) and occupy the lower portion of the viewport.
- **Subscription form is present** — The footer SHALL contain a centered subscription form with an email input and submit button.
  - Scenario — Subscription form renders
- **WHEN** the FooterDash page loads
- **THEN** the footer displays a centered subscription form
- **AND** the form contains an email input field with placeholder text "Enter your email"
- **AND** the form contains a "Subscribe" button with blue background (#007bff) and white text
- **AND** the form is visually centered within the footer: **WHEN** the user hovers over the "Subscribe" button; **THEN** the button background changes to a darker blue shade
- **Navigation links are present** — The footer SHALL display a row of navigation links with muted white text that brightens on hover.
- **Social media icons are present** — The footer SHALL display circular social media icons with muted white color that brightens on hover.
- **Copyright section is present** — The footer SHALL display a copyright line at the bottom with muted text and a Component Dock link.
- **Footer padding and spacing** — The footer SHALL have generous vertical padding (80px top/bottom) and consistent spacing between sections.
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/footerdash/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/footerdash/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/footerdash` ships on https://footerdash.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/footerdash/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/footerdash/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/footerdash/public/CNAME` = `footerdash.free.componentdock.com`
  and the package `homepage` = `https://footerdash.free.componentdock.com`.
