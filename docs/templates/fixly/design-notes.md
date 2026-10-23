# Fixly — Design Notes

Reference: **Carepair** — `https://colorlib.com/wp/template/carepair/`  
Live preview: `https://preview.colorlib.com/theme/carepair/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/carepair-free-template-1.jpg  
Shipped: https://fixly.free.componentdock.com

Fixly is a single-page auto repair shop landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Carepair" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@400;500;700;900**

## Design tokens (`apps/fixly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#e02f33` | brand |
| `--color-brand-dark` | `#b81f23` | brand dark |
| `--color-accent` | `#1a508b` | Accent — navy blue #1a508b secondary (top bar, service icons). |
| `--color-ink` | `#212529` | Ink — headings (#212529 from the original). |
| `--color-mist` | `#6c757d` | Mist — muted body text (#6c757d from the original). |
| `--color-paper` | `#f8f9fa` | Paper — light section backgrounds (#f8f9fa from the original). |
| `--color-coal` | `#111111` | Coal — dark top bar / footer (#111111 from the original). |
| `--color-primary-50` | `#fef2f2` | primary 50 |
| `--color-primary-100` | `#fde3e3` | primary 100 |
| `--color-primary-200` | `#fbcccc` | primary 200 |
| `--color-primary-300` | `#f7a5a5` | primary 300 |
| `--color-primary-400` | `#f17070` | primary 400 |
| `--color-primary-500` | `#e02f33` | primary 500 |
| `--color-primary-600` | `#cf2226` | primary 600 |
| `--color-primary-700` | `#ad1a1e` | primary 700 |
| `--color-primary-800` | `#8f1a1d` | primary 800 |
| `--color-primary-900` | `#771b1e` | primary 900 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Original font: "Roboto" (Google Fonts via index.html). |
| `--font-display` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Navigation bar | see fidelity note below |
| 2 | `Navbar` | — | no dedicated spec block |
| 3 | `Hero` | Hero section | see fidelity note below |
| 4 | `Intro` | — | no dedicated spec block |
| 5 | `WhyChooseUs` | Why choose us | see fidelity note below |
| 6 | `AppointmentBand` | — | no dedicated spec block |
| 7 | `Services` | Services section | see fidelity note below |
| 8 | `Steps` | Steps section | see fidelity note below |
| 9 | `Stats` | Statistics section | see fidelity note below |
| 10 | `Mechanics` | Mechanics section | see fidelity note below |
| 11 | `Testimonials` | Testimonials section | see fidelity note below |
| 12 | `Blog` | Blog section | see fidelity note below |
| 13 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
The system SHALL render a top navigation bar with the site name "Fixly", anchor links to the page's sections, an appointment button, and a dark-mode toggle button.

### `Navbar`
*anchors only* — Primary · Open menu · Close menu · Mobile menu

### `Hero`
The system SHALL render a full-width hero with a headline and two buttons.

### `Intro`
*anchors only* — Contact Details · Call us now · Location · Open hours · Mon – Fri: 8:00AM – 8:00PM · About our shop

### `WhyChooseUs`
The system SHALL render a why-choose-us section with four cards.

### `AppointmentBand`
*anchors only* — Book your visit · Schedule Your Appointment Today! · Make An Appointment

### `Services`
The system SHALL render a services section with at least ten services.

### `Steps`
The system SHALL render an easy-steps section with three steps.

### `Stats`
The system SHALL render a technical statistics section with counters.

### `Mechanics`
The system SHALL render a mechanics section with team cards.

### `Testimonials`
The system SHALL render a testimonials section with at least one quote.

### `Blog`
The system SHALL render a recent blog section with post cards.

### `Footer`
The system SHALL render a footer with link columns, contact details, and a copyright line.

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
- **Provenance ban.** No file under `apps/fixly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/fixly/public/CNAME` = `fixly.free.componentdock.com`
  and the package `homepage` = `https://fixly.free.componentdock.com`.
