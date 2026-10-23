# Ascendly — Design Notes

Reference: **Arcwork** — `https://colorlib.com/wp/template/arcwork/`  
Live preview: `https://preview.colorlib.com/theme/arcwork/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/arcwork-free-template.jpg  
Shipped: https://ascendly.free.componentdock.com

Ascendly is a single-page business/consulting landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Arcwork" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@400;500;700;900**

## Design tokens (`apps/ascendly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#3b4eda` | brand |
| `--color-cream` | `#fff6da` | cream |
| `--color-muted` | `#6c7b95` | muted |
| `--color-ink` | `#212529` | ink |
| `--color-tint` | `#f8f9fa` | tint |
| `--color-primary-400` | `#6b7aeb` | Map the shared ui Button/ButtonLink primary palette to the brand indigo. |
| `--color-primary-500` | `#5565e3` | primary 500 |
| `--color-primary-600` | `#3b4eda` | primary 600 |
| `--color-primary-700` | `#3140c4` | primary 700 |
| `--color-primary-800` | `#2935a3` | primary 800 |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Features` | Feature cards | see fidelity note below |
| 4 | `Solutions` | Solutions carousel | see fidelity note below |
| 5 | `Testimonial` | Testimonial | see fidelity note below |
| 6 | `Blog` | Blog section | see fidelity note below |
| 7 | `CtaBand` | CTA band | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Ascendly", a "Home" link, and a dark-mode toggle button.

### `Hero`
The system SHALL render a split-background hero with a level-1 headline, a call-to-action link, and a cream band covering the right half of the section.

### `Features`
The system SHALL render three feature cards (Financial Analysis, Marketing Plans, Optimize Solutions), each with a large icon, a heading, a blurb, and a link, with the middle card in the active state.

### `Solutions`
The system SHALL render an "Our Solutions" section with a heading on a left-half cream band and a row of image cards with titles.

### `Testimonial`
The system SHALL render a "Testimonial" section with at least one slide showing a portrait image, a quote, and an author name.

### `Blog`
The system SHALL render a "Blog" section with a "View All" link and three bordered post cards showing an image, a title, a date/author line, and an excerpt.

### `CtaBand`
The system SHALL render a cream call-to-action band with a headline and a "View Our Services" link.

### `Footer`
The system SHALL render a footer with the site logo, a Contact Us column, two link columns, social icons, and a copyright bar.

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
- **Provenance ban.** No file under `apps/ascendly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/ascendly/public/CNAME` = `ascendly.free.componentdock.com`
  and the package `homepage` = `https://ascendly.free.componentdock.com`.
