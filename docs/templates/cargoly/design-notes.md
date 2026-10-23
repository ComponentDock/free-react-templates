# Cargoly — Design Notes

Reference: **Boxe** — `https://colorlib.com/wp/template/boxe/`  
Live preview: `https://preview.colorlib.com/theme/boxe/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/boxe-free-template.jpg  
Shipped: https://cargoly.free.componentdock.com

Cargoly is a single-page logistics/freight company website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;600;700;800**, **Roboto**

## Design tokens (`apps/cargoly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#6345fe` | brand |
| `--color-brand-dark` | `#4f35d4` | brand dark |
| `--color-accent` | `#f6a515` | accent |
| `--color-ink` | `#415094` | Ink — headings (dark indigo #415094). |
| `--color-body` | `#777777` | Body greys — paragraphs (#777777) + muted (#999999). |
| `--color-mist` | `#999999` | mist |
| `--color-heart` | `#d32a2a` | Heart — footer credit heart (#d32a2a). |
| `--color-soft` | `#f9f9ff` | Neutrals — light lavender section bgs + borders. |
| `--color-lavender` | `#f0e9ff` | lavender |
| `--color-line` | `#f1f1f1` | line |
| `--color-night` | `#111534` | Night — footer background (dark navy, replaces footer_bg.png). |
| `--color-primary-50` | `#f0edff` | primary 50 |
| `--color-primary-100` | `#e0dbff` | primary 100 |
| `--color-primary-200` | `#c6bcff` | primary 200 |
| `--color-primary-300` | `#a391ff` | primary 300 |
| `--color-primary-400` | `#8266ff` | primary 400 |
| `--color-primary-500` | `#6a4aff` | primary 500 |
| `--color-primary-600` | `#6345fe` | primary 600 |
| `--color-primary-700` | `#4f35d4` | primary 700 |
| `--color-primary-800` | `#3f2aa8` | primary 800 |
| `--color-primary-900` | `#32227f` | primary 900 |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header | see fidelity note below |
| 2 | `Hero` | Hero banner | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Services` | Services grid | see fidelity note below |
| 5 | `CtaBanner` | CTA banner | see fidelity note below |
| 6 | `Process` | Delivery process | see fidelity note below |
| 7 | `Quote` | Quote request section | see fidelity note below |
| 8 | `Deliveries` | Recent deliveries | see fidelity note below |
| 9 | `Blog` | Blog section | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a sticky header with a logo, uppercase navigation, and a search icon.

### `Hero`
The system SHALL render a full-bleed dark hero with headline, phone CTA, and a floating pick-up card.

### `About`
The system SHALL render a two-column about section with an image and text.

### `Services`
The system SHALL render a section header and four service cards.

### `CtaBanner`
The system SHALL render a dark full-width call-to-action strip.

### `Process`
The system SHALL render the delivery process strip with percentage stats.

### `Quote`
The system SHALL render a violet quote-request section with a form and a sender column.

### `Deliveries`
The system SHALL render the recent-deliveries card grid.

### `Blog`
The system SHALL render three blog cards with date blocks and meta.

### `Footer`
The system SHALL render a four-column footer with working hours, links, gallery, and a newsletter form.

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
- **Provenance ban.** No file under `apps/cargoly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/cargoly/public/CNAME` = `cargoly.free.componentdock.com`
  and the package `homepage` = `https://cargoly.free.componentdock.com`.
