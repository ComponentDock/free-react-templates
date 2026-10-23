# Shotwise — Design Notes

Reference: **Pemodule** — `https://colorlib.com/wp/template/pemodule/`  
Live preview: `https://preview.colorlib.com/theme/pemodule/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/pemodule-free-photographer-website-template.jpg  
Shipped: https://shotwise.free.componentdock.com

Shotwise is a photographer/creative portfolio landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Pemodule" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/shotwise/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#be5ede` | brand |
| `--color-brand-dark` | `#3224b0` | brand dark |
| `--color-ink` | `#222222` | Ink — dark headings (#222222). |
| `--color-ink-dark` | `#111111` | ink dark |
| `--color-paper` | `#f9f9ff` | Paper — light section backgrounds (#f9f9ff). |
| `--color-mist` | `#777777` | Mist — muted body text (#777777). |
| `--color-accent` | `#6cbb23` | Accent green for newsletter (#6cbb23). |
| `--color-primary-50` | `#f3e8ff` | Primary scale resolving to brand purple. |
| `--color-primary-100` | `#e4ccf7` | primary 100 |
| `--color-primary-200` | `#c99aef` | primary 200 |
| `--color-primary-300` | `#ae68e7` | primary 300 |
| `--color-primary-400` | `#be5ede` | primary 400 |
| `--color-primary-500` | `#9a3dd6` | primary 500 |
| `--color-primary-600` | `#7c2db8` | primary 600 |
| `--color-primary-700` | `#5e1d9a` | primary 700 |
| `--color-primary-800` | `#3224b0` | primary 800 |
| `--color-primary-900` | `#1a1060` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `Featured` | Contact form captures user input | see fidelity note below |
| 4 | `Parallax` | — | no dedicated spec block |
| 5 | `Services` | — | no dedicated spec block |
| 6 | `Contact` | Contact form captures user input | see fidelity note below |
| 7 | `Newsletter` | Newsletter subscription form | see fidelity note below |
| 8 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Shotwise · Home · About · Services · Contact

### `Hero`
*anchors only* — Your best partner · Shotwise · Get Started

### `Featured`
The contact section SHALL provide a form with name, email, and message fields.

### `Parallax`
*anchors only* — Reasons To · Choose · Shotwise · Get Started

### `Services`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Contact`
The contact section SHALL provide a form with name, email, and message fields.

### `Newsletter`
The newsletter section SHALL provide an email subscription form.

### `Footer`
The footer SHALL link to https://www.componentdock.com/ with the brand name "Component Dock".

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
- **Provenance ban.** No file under `apps/shotwise/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/shotwise/public/CNAME` = `shotwise.free.componentdock.com`
  and the package `homepage` = `https://shotwise.free.componentdock.com`.
