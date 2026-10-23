# Terra — Design Notes

Reference: **Kayelux** — `https://colorlib.com/wp/template/kayelux/`  
Live preview: `https://preview.colorlib.com/theme/kayelux/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/kayelux-colorlib-template.jpg  
Shipped: https://terra.free.componentdock.com

Terra is a single-page beauty & spa wellness template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Kayelux" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**, **Prata**

## Design tokens (`apps/terra/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#e95b3a` | brand |
| `--color-brand-deep` | `#d14a2c` | brand deep |
| `--color-brand-soft` | `#f8ebe6` | brand soft |
| `--color-ink` | `#111111` | ink |
| `--color-muted` | `#6c757d` | muted |
| `--color-cream` | `#f8ebe6` | cream |
| `--color-primary-50` | `#fdf1ec` | primary 50 |
| `--color-primary-100` | `#fbe0d4` | primary 100 |
| `--color-primary-200` | `#f6c0aa` | primary 200 |
| `--color-primary-300` | `#f19976` | primary 300 |
| `--color-primary-400` | `#ee7449` | primary 400 |
| `--color-primary-500` | `#e95b3a` | primary 500 |
| `--color-primary-600` | `#d14a2c` | primary 600 |
| `--color-primary-700` | `#ad3a21` | primary 700 |
| `--color-primary-800` | `#8a2c1a` | primary 800 |
| `--color-primary-900` | `#6b2113` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Prata', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Welcome hero | see fidelity note below |
| 3 | `Intro` | — | no dedicated spec block |
| 4 | `Services` | Services | see fidelity note below |
| 5 | `Featured` | Featured services | see fidelity note below |
| 6 | `Stats` | Blog posts | see fidelity note below |
| 7 | `Team` | Expert team | see fidelity note below |
| 8 | `Gallery` | — | no dedicated spec block |
| 9 | `Pricing` | Pricing | see fidelity note below |
| 10 | `Appointment` | Appointment band | see fidelity note below |
| 11 | `Testimony` | Testimony band | see fidelity note below |
| 12 | `Blog` | Blog posts | see fidelity note below |
| 13 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Terra", a "Home" link, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero section with a headline and a call-to-action button.

### `Intro`
*anchors only* — Welcome · Beauty Anywhere Anytime · Our Services · Make An Appointment

### `Services`
The system SHALL render an "Our Beauty & Spa Services" section with at least eight icon cards.

### `Featured`
The system SHALL render a featured services band with at least six items.

### `Stats`
The system SHALL render a "Recent From Blog" section with at least three post cards.

### `Team`
The system SHALL render an "Our Expert Makeup & Beautician Artist" section with at least four member cards.

### `Gallery`
*anchors only* — Gallery · Beauty &amp; Massage

### `Pricing`
The system SHALL render a "Get Our Package Pricing" section with pricing cards.

### `Appointment`
The system SHALL render a "Make An Appointment" band.

### `Testimony`
The system SHALL render a "What Customers Saying" testimony band.

### `Blog`
The system SHALL render a "Recent From Blog" section with at least three post cards.

### `Footer`
The system SHALL render a footer with the site name and link columns.

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
- **Provenance ban.** No file under `apps/terra/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/terra/public/CNAME` = `terra.free.componentdock.com`
  and the package `homepage` = `https://terra.free.componentdock.com`.
