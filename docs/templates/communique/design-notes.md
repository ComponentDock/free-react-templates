# Communique — Design Notes

Reference: **Modal 07** — `https://colorlib.com/wp/template/modal-07/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/modal-07/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/modal-07.jpg  
Shipped: https://communique.free.componentdock.com

Communique is a free consultation modal template recreating ColorLib Modal 07. Source: https://colorlib.com/wp/template/modal-07/ Preview: https://preview.colorlib.com/theme/bootstrap/modal-07/ Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript The template displays a centered landing page with a "Launch Modal" button that opens a two-c…

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700;900**

## Design tokens (`apps/communique/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-poppins` | `'Poppins', sans-serif` | font poppins |
| `--color-olive` | `#afa939` | olive |
| `--color-charcoal` | `#2b2b28` | charcoal |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Landing` | Landing page with modal trigger | see fidelity note below |
| 3 | `Footer` | Footer with Component Dock link | see fidelity note below |
| 4 | `ConsultationModal` | Consultation contact form | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Communique

### `Landing`
The template SHALL display a centered landing section with the heading "Communique" and a "Launch Modal" button that opens the modal dialog.

### `Footer`
The template footer SHALL display the site name, a tagline, and a link to https://www.componentdock.com/ branded as "Component Dock".

### `ConsultationModal`
The modal SHALL contain a contact form with four fields and a submit button.

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
- **Provenance ban.** No file under `apps/communique/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/communique/public/CNAME` = `communique.free.componentdock.com`
  and the package `homepage` = `https://communique.free.componentdock.com`.
