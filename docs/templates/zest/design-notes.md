# Zest — Design Notes

Reference: **Zeedapp** — `https://colorlib.com/wp/template/zeedapp/`  
Live preview: `https://preview.colorlib.com/theme/zeedapp/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/zeedapp-free-template.jpg  
Shipped: https://zest.free.componentdock.com

Zest is a single-page app-landing showcase template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Zeedapp" website template design (see TEMPLATES.md), built under the new name **Zest** with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design tokens (`apps/zest/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f26367` | brand |
| `--color-punch` | `#f16266` | punch |
| `--color-ink` | `#372940` | Dark text / hero overlay from the original (#372940). |
| `--color-ink-strong` | `#444` | ink strong |
| `--color-mist` | `#555` | Counter labels (#555) and light section backgrounds. |
| `--color-paper` | `#f9f9f9` | paper |
| `--color-fog` | `#f3f3f3` | fog |
| `--font-mono` | `ui-monospace, SFMono-Regular, Menlo, Consolas, monospace` | Original font: system sans stack (monospace reserved for demo titles). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Demos` | Demo showcase section | see fidelity note below |
| 4 | `Cta` | CTA section | see fidelity note below |
| 5 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Zest" and a dark-mode toggle button.

### `Hero`
The system SHALL render a hero with a headline, a blurb, a "Purchase Now" button, and demo counts.

### `Demos`
The system SHALL render a demo showcase section listing the template's home-page and blog variants.

### `Cta`
The system SHALL render a CTA section with a heading and a "Purchase Now" button.

### `Footer`
The system SHALL render a footer with a copyright line.

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
- **Provenance ban.** No file under `apps/zest/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/zest/public/CNAME` = `zest.free.componentdock.com`
  and the package `homepage` = `https://zest.free.componentdock.com`.
