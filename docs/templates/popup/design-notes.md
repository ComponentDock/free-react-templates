# Popup — Design Notes

Reference: **Modal 11** — `https://colorlib.com/wp/template/modal-11/`  
Live preview: `https://preview.colorlib.com/theme/modal-11/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/modal-11.jpg  
Shipped: https://popup.free.componentdock.com

Popup is a single-page MINIMAL TEXT MODAL in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Modal 11" free template (source: https://colorlib.com/wp/template/modal-11/), built under a DIFFERENT name (**Popup**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/popup/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#007bff` | brand |
| `--color-brand-hover` | `#0069d9` | brand hover |
| `--color-label` | `rgba(0, 0, 0, 0.3)` | label |
| `--font-poppins` | `'Poppins', sans-serif` | font poppins |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `LaunchSection` | Launch section renders with heading and CTA button | see fidelity note below |
| 2 | `Footer` | Footer renders with Component Dock link | see fidelity note below |
| 3 | `TextModal` | Modal opens on button click | see fidelity note below |

## Section-by-section fidelity

### `LaunchSection`
The page SHALL display a centered launch section with a heading ("Popup"), a descriptive subtitle, and a "Show Message" button.

### `Footer`
The page footer SHALL display the template name, a description, and a link to Component Dock.

### `TextModal`
Clicking the "Show Message" button SHALL open a modal dialog overlay.

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
- **Provenance ban.** No file under `apps/popup/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/popup/public/CNAME` = `popup.free.componentdock.com`
  and the package `homepage` = `https://popup.free.componentdock.com`.
