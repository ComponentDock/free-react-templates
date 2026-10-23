# Sidewell — Design Notes

Reference: **Bootstrap Sidebar 07** — `https://colorlib.com/wp/template/bootstrap-sidebar-07/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap-sidebar-07/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-sidebar-170658.jpg  
Shipped: https://sidewell.free.componentdock.com

Sidewell is a sidebar navigation template featuring a fixed blue sidebar with icon-labeled navigation, a sticky top bar with navigation links, and a clean white content area. Designed for dashboards, portfolios, and documentation sites.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600;700**

## Design tokens (`apps/sidewell/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-sidebar-bg` | `#4361ee` | sidebar bg |
| `--color-sidebar-text` | `#ffffff` | sidebar text |
| `--color-sidebar-hover` | `#3a56d4` | sidebar hover |
| `--color-page-bg` | `#ffffff` | page bg |
| `--color-heading-text` | `#212529` | heading text |
| `--color-body-text` | `#6c757d` | body text |
| `--color-accent` | `#4361ee` | accent |
| `--color-accent-hover` | `#3a56d4` | accent hover |
| `--font-family-body` | `'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` | font family body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Sidebar` | Sidebar Navigation | see fidelity note below |
| 2 | `TopBar` | Top Bar | see fidelity note below |
| 3 | `MainContent` | Main Content | see fidelity note below |
| 4 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Sidebar`
The sidebar SHALL display a logo ("M.") and five navigation items (Home, About, Blog, Services, Contacts) with lucide-react icons on a royal blue (#4361ee) background. The active item SHALL be visually highlighted.

### `TopBar`
A sticky top bar SHALL display navigation links (Home, About, Portfolio, Contact) right-aligned on a white background. On mobile, a blue hamburger button SHALL be shown on the left.

### `MainContent`
The main content area SHALL display a "Sidebar #07" heading and two paragraphs of body text on a white background.

### `Footer`
The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/sidewell/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sidewell/public/CNAME` = `sidewell.free.componentdock.com`
  and the package `homepage` = `https://sidewell.free.componentdock.com`.
