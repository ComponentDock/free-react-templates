# Foyer — Design Notes

Reference: **Interior** — `https://colorlib.com/wp/template/interior/`  
Live preview: `https://preview.colorlib.com/theme/interior/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/interior-free-template-1.jpg  
Shipped: https://foyer.free.componentdock.com

Foyer is a single-page interior design landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Interior" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/foyer/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#c6b069` | Foyer brand gold: #c6b069 buttons, accents, headings. |
| `--color-brand-dark` | `#a8914f` | Deeper gold for hover states. |
| `--color-ink` | `#222222` | Ink — dark text (#222222 from the original). |
| `--color-mist` | `#6c757d` | Mist — muted body text. |
| `--color-paper` | `#f9f9ff` | Paper — light section backgrounds (#f9f9ff from the original). |
| `--color-coal` | `#04091e` | Coal — dark section background (#04091e from the original). |
| `--color-primary-50` | `#fbf8ef` | primary 50 |
| `--color-primary-100` | `#f5eed6` | primary 100 |
| `--color-primary-200` | `#eadbab` | primary 200 |
| `--color-primary-300` | `#ddc47b` | primary 300 |
| `--color-primary-400` | `#d1b257` | primary 400 |
| `--color-primary-500` | `#c6b069` | primary 500 |
| `--color-primary-600` | `#b49d51` | primary 600 |
| `--color-primary-700` | `#9a853f` | primary 700 |
| `--color-primary-800` | `#7f6d33` | primary 800 |
| `--color-primary-900` | `#66572a` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Original font: "Poppins" (Google Fonts). |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Services` | Services section | see fidelity note below |
| 4 | `Gallery` | Gallery section | see fidelity note below |
| 5 | `Features` | Features section | see fidelity note below |
| 6 | `Testimonials` | — | no dedicated spec block |
| 7 | `Cta` | — | no dedicated spec block |
| 8 | `Blog` | — | no dedicated spec block |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Foyer", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a headline and a "Get Started" button.

### `Services`
The system SHALL render a services section with a heading and at least three service cards.

### `Gallery`
The system SHALL render a gallery section with a heading and a project gallery.

### `Features`
The system SHALL render a features section with a heading and feature cards.

### `Testimonials`
*anchors only* — Reviews · Testimonial from our Clients

### `Cta`
*anchors only* — Looking for a quality and affordable interior design? · Request quote now

### `Blog`
*anchors only* — Our blog · Ongoing Exhibitions from the scratch

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
- **Provenance ban.** No file under `apps/foyer/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/foyer/public/CNAME` = `foyer.free.componentdock.com`
  and the package `homepage` = `https://foyer.free.componentdock.com`.
