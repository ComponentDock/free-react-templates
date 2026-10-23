# Terracotta — Design Notes

Reference: **Heaven** — `https://colorlib.com/wp/template/heaven/`  
Live preview: `https://preview.colorlib.com/theme/heaven/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/heaven-free-template.jpg  
Shipped: https://terracotta.free.componentdock.com

Terracotta is a single-page architecture & design landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;700**

## Design tokens (`apps/terracotta/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff7e00` | brand |
| `--color-brand-dark` | `#e56f00` | Deeper orange for hover states. |
| `--color-ink` | `#2c2c2c` | Ink — headings and dark text (#2c2c2c from the original). |
| `--color-mist` | `#999999` | Mist — muted body text (#999999 from the original). |
| `--color-paper` | `#f9f9ff` | Paper — light section backgrounds (#f9f9ff / #f0e9ff from the original). |
| `--color-coal` | `#242429` | Coal — dark footer background (#242429 from the original). |
| `--color-primary-50` | `#fff7ed` | primary 50 |
| `--color-primary-100` | `#ffedd5` | primary 100 |
| `--color-primary-200` | `#fed7aa` | primary 200 |
| `--color-primary-300` | `#fdba74` | primary 300 |
| `--color-primary-400` | `#fb923c` | primary 400 |
| `--color-primary-500` | `#ff7e00` | primary 500 |
| `--color-primary-600` | `#ea6a00` | primary 600 |
| `--color-primary-700` | `#c2570a` | primary 700 |
| `--color-primary-800` | `#9a4610` | primary 800 |
| `--color-primary-900` | `#7c3a12` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Original font: "Poppins" (body + display). |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Innovative` | Innovative strip | see fidelity note below |
| 4 | `About` | About section | see fidelity note below |
| 5 | `Services` | Services section | see fidelity note below |
| 6 | `Projects` | Projects section | see fidelity note below |
| 7 | `Blog` | Blog section | see fidelity note below |
| 8 | `Contact` | Contact section | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Terracotta", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a headline and a "learn more" button.

### `Innovative`
The system SHALL render three feature cards below the hero.

### `About`
The system SHALL render an about section with a heading and a blurb.

### `Services`
The system SHALL render a services section with a heading and service cards.

### `Projects`
The system SHALL render a projects section with a heading and project cards.

### `Blog`
The system SHALL render a blog section with a heading and blog post cards.

### `Contact`
The system SHALL render a contact section with contact details.

### `Footer`
The system SHALL render a footer with link columns, social links, and a copyright line.

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
- **Provenance ban.** No file under `apps/terracotta/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/terracotta/public/CNAME` = `terracotta.free.componentdock.com`
  and the package `homepage` = `https://terracotta.free.componentdock.com`.
