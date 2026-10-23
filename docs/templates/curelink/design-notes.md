# Curelink — Design Notes

Reference: **Remedic** — `https://colorlib.com/wp/template/remedic/`  
Live preview: `https://preview.colorlib.com/theme/remedic/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/remedic-free-template.jpg  
Shipped: https://curelink.free.componentdock.com

Curelink is a single-page health/medical landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Remedic" website template design, built under a different name (**Curelink**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Work Sans**, **Work Sans:wght@300;400;500;600;700**

## Design tokens (`apps/curelink/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#e6f2fd` | Curelink brand colors |
| `--color-primary-100` | `#c0def9` | primary 100 |
| `--color-primary-200` | `#96c8f4` | primary 200 |
| `--color-primary-300` | `#5eadee` | primary 300 |
| `--color-primary-400` | `#167ce9` | primary 400 |
| `--color-primary-500` | `#0f6ad4` | primary 500 |
| `--color-primary-600` | `#0b54ab` | primary 600 |
| `--color-primary-700` | `#084082` | primary 700 |
| `--color-primary-800` | `#052d59` | primary 800 |
| `--color-primary-900` | `#031b34` | primary 900 |
| `--color-purple-50` | `#f0eff5` | Dark purple |
| `--color-purple-100` | `#d5d2e3` | purple 100 |
| `--color-purple-200` | `#b5b0cd` | purple 200 |
| `--color-purple-300` | `#8c86af` | purple 300 |
| `--color-purple-400` | `#5e578a` | purple 400 |
| `--color-purple-500` | `#39345a` | purple 500 |
| `--color-purple-600` | `#2e2a48` | purple 600 |
| `--color-purple-700` | `#231f37` | purple 700 |
| `--color-purple-800` | `#181525` | purple 800 |
| `--color-purple-900` | `#0d0b14` | purple 900 |
| `--color-teal-50` | `#edfcf5` | Teal |
| `--color-teal-100` | `#d1f8e7` | teal 100 |
| `--color-teal-200` | `#a4f1d1` | teal 200 |
| `--color-teal-300` | `#79efb4` | teal 300 |
| `--color-teal-400` | `#4ee69a` | teal 400 |
| `--color-teal-500` | `#2dd480` | teal 500 |
| `--color-teal-600` | `#1fb868` | teal 600 |
| `--color-teal-700` | `#189a54` | teal 700 |
| `--color-teal-800` | `#147b44` | teal 800 |
| `--color-teal-900` | `#0f5c34` | teal 900 |
| `--color-lightblue-50` | `#f0f9fd` | Light blue |
| `--color-lightblue-100` | `#dcf0f9` | lightblue 100 |
| `--color-lightblue-200` | `#bee3f3` | lightblue 200 |
| `--color-lightblue-300` | `#97d3ed` | lightblue 300 |
| `--color-lightblue-400` | `#78d5ef` | lightblue 400 |
| `--color-lightblue-500` | `#55c4e8` | lightblue 500 |
| `--color-lightblue-600` | `#3badd9` | lightblue 600 |
| `--color-lightblue-700` | `#2b90b8` | lightblue 700 |
| `--color-lightblue-800` | `#1f7295` | lightblue 800 |
| `--color-lightblue-900` | `#155672` | lightblue 900 |
| `--color-ink` | `#1a1a1a` | ink |
| `--font-sans` | `'Work Sans', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Work Sans', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Dark navbar with pharmacy logo and appointment CTA | see fidelity note below |
| 2 | `Hero` | Hero with blue overlay and headline | see fidelity note below |
| 3 | `Departments` | Department tabs with vertical pills | see fidelity note below |
| 4 | `ServicesBg` | Services section with background image | see fidelity note below |
| 5 | `Doctors` | Doctor flip cards | see fidelity note below |
| 6 | `Counter` | Counter / Fun Facts section | see fidelity note below |
| 7 | `Testimonials` | Testimonials carousel | see fidelity note below |
| 8 | `Blog` | Blog cards grid | see fidelity note below |
| 9 | `Newsletter` | Newsletter with gradient background | see fidelity note below |
| 10 | `Footer` | Footer with widgets and bottom bar | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a dark navbar with a pharmacy icon, "Curelink" wordmark, navigation links, and an "Make an Appointment" CTA button.

### `Hero`
The system SHALL render a 650px hero with a background image, blue overlay, and centered white headline text.

### `Departments`
The system SHALL render a departments section with vertical pill tabs on the left and tab content panels on the right.

### `ServicesBg`
The system SHALL render a services section with a background image and four service cards.

### `Doctors`
The system SHALL render four doctor profile cards that flip on hover to reveal a quote.

### `Counter`
The system SHALL render a counter statistics section on a background image with four stat items.

### `Testimonials`
The system SHALL render an Owl Carousel of testimonial cards with circular user photos and quotes.

### `Blog`
The system SHALL render a 2-column grid of four blog post cards with thumbnails, metadata, titles, and excerpts.

### `Newsletter`
The system SHALL render a newsletter section with a blue→teal diagonal gradient, centered heading, and email subscription form.

### `Footer`
The system SHALL render a dark purple footer with four widget columns and a copyright bottom bar linking to Component Dock.

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
- **Provenance ban.** No file under `apps/curelink/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/curelink/public/CNAME` = `curelink.free.componentdock.com`
  and the package `homepage` = `https://curelink.free.componentdock.com`.
