# Marginote — Design Notes

Reference: **Colorlib Sidebar V10** — `https://colorlib.com/wp/template/colorlib-sidebar-v10/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-sidebar-v10/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-sidebar-v10.jpg  
Shipped: https://marginote.free.componentdock.com

A sidebar blog template with a cyan-accented nav panel, toggle button and a responsive post grid. Recreation of ColorLib's **Sidebar V10** as a React 19 + Vite + Tailwind 4 + TypeScript template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/marginote/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#00d4ff` | brand |
| `--color-brand-dark` | `#00b8e6` | brand dark |
| `--color-ink` | `#333333` | ink |
| `--color-muted` | `#999999` | muted |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Sidebar` | Sidebar displays brand name and tagline | see fidelity note below |
| 2 | `SidebarToggle` | Sidebar shows navigation links | see fidelity note below |
| 3 | `BlogGrid` | Blog posts display in grid | see fidelity note below |
| 4 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `Sidebar`
The sidebar SHALL display the brand name "Journal" as a prominent heading and a tagline paragraph below it.

### `SidebarToggle`
The sidebar SHALL display navigation links for Latest, Projects, and About.

### `BlogGrid`
Blog posts SHALL be displayed in a 2-column grid with avatar, title, and date.

### `Footer`
The footer SHALL link to https://www.componentdock.com/ with branded text.

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
- **Provenance ban.** No file under `apps/marginote/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/marginote/public/CNAME` = `marginote.free.componentdock.com`
  and the package `homepage` = `https://marginote.free.componentdock.com`.
