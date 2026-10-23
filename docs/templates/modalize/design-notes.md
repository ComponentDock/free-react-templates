# Modalize — Design Notes

Reference: **Modal 05** — `https://colorlib.com/wp/template/modal-05/`  
Live preview: `https://preview.colorlib.com/theme/modal-05/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/modal-05.jpg  
Shipped: https://modalize.free.componentdock.com

Modalize is a single-page login/registration MODAL FORM in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/modalize/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#007bff` | brand |
| `--color-brand-hover` | `#0069d9` | brand hover |
| `--color-label` | `rgba(0, 0, 0, 0.3)` | label |
| `--color-social-bg` | `rgba(0, 0, 0, 0.05)` | social bg |
| `--color-muted-link` | `rgba(0, 0, 0, 0.3)` | muted link |
| `--font-poppins` | `'Poppins', sans-serif` | font poppins |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `LaunchSection` | Page shell with launch button | see fidelity note below |
| 2 | `Footer` | Footer attribution | see fidelity note below |
| 3 | `RegistrationModal` | Registration form | see fidelity note below |

## Section-by-section fidelity

### `LaunchSection`
The system SHALL render a white full-width page with a centered heading and a primary button that opens the registration modal.

### `Footer`
The system SHALL render a footer with the mandatory Component Dock link.

### `RegistrationModal`
The system SHALL render a registration form with three labeled fields and a submit button.

## Deltas from the reference

- Photographs are deterministic placeholders (`picsum.photos/seed/…`); no source asset is copied.
- Icon glyphs come from `lucide-react`, not the source's icon font.
- Copy is paraphrased to the same kind of content (headline + subtext + CTA, card title + blurb + link).
- The source's credit bar is replaced by the Component Dock credit (see delivery contract).

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/modalize/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/modalize/public/CNAME` = `modalize.free.componentdock.com`
  and the package `homepage` = `https://modalize.free.componentdock.com`.
