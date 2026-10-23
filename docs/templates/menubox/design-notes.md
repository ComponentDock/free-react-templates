# Menubox — Design Notes

Reference: **Dropdown 02** — `https://colorlib.com/wp/template/dropdown-02/`  
Live preview: `https://preview.colorlib.com/theme/dropdown-02/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/dropdown-02.jpg  
Shipped: https://menubox.free.componentdock.com

A single-page React component showcase displaying a profile dropdown menu with user avatar, icons, and hover effects. The profile button reveals a dropdown containing user info and action items (Settings, Profile, Dashboard, Logout). Serves as a reference implementation for profile/user menus built with React and Tailwind CSS.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@400;500;600;700**

## Design tokens (`apps/menubox/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-sans` | `'Inter', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--color-primary-50` | `#eff6ff` | primary 50 |
| `--color-primary-100` | `#dbeafe` | primary 100 |
| `--color-primary-200` | `#bfdbfe` | primary 200 |
| `--color-primary-300` | `#93c5fd` | primary 300 |
| `--color-primary-400` | `#60a5fa` | primary 400 |
| `--color-primary-500` | `#3b82f6` | primary 500 |
| `--color-primary-600` | `#0075f6` | primary 600 |
| `--color-primary-700` | `#005dc3` | primary 700 |
| `--color-primary-800` | `#004aad` | primary 800 |
| `--color-primary-900` | `#003a8c` | primary 900 |
| `--color-primary-950` | `#002266` | primary 950 |
| `--color-dark` | `#212529` | dark |
| `--color-muted` | `#6c757d` | muted |
| `--color-surface` | `#f8f9fa` | surface |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `ProfileButton` | Profile button display | see fidelity note below |
| 2 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `ProfileButton`
The page SHALL render a centered profile button displaying a circular avatar image, user name, and a dropdown chevron indicator.

### `Footer`
The footer SHALL contain a link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/menubox/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/menubox/public/CNAME` = `menubox.free.componentdock.com`
  and the package `homepage` = `https://menubox.free.componentdock.com`.
