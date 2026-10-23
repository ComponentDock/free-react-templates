# Vantage — Design Notes

Reference: **Biznance** — `https://colorlib.com/wp/template/biznance/`  
Live preview: `https://preview.colorlib.com/theme/biznance/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/biznance-free-template.jpg  
Shipped: https://vantage.free.componentdock.com

Vantage is a single-page business & finance landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Biznance" design (see TEMPLATES.md, Bootstrap category), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Roboto**, **Roboto:400,500,700|Poppins:600**

## Design tokens (`apps/vantage/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-400` | `#8d83ff` | Brand accent (ColorLib nav hover/active, blog h4 hover, footer links). |
| `--color-grad-400` | `#e187f0` | grad 400 |
| `--color-grad-500` | `#f27fd3` | grad 500 |
| `--color-grad-600` | `#a276ff` | grad 600 |
| `--color-grad-700` | `#8889ff` | grad 700 |
| `--color-coral-400` | `#f766a5` | CTA button gradients (ColorLib .org_btn pink/coral, .green_btn mint). |
| `--color-coral-500` | `#f78762` | coral 500 |
| `--color-mint-400` | `#73ca96` | mint 400 |
| `--color-mint-500` | `#98d370` | mint 500 |
| `--color-lavender-50` | `#f9f9ff` | lavender 50 |
| `--color-ink-900` | `#222222` | Near-black text/footer (ColorLib headings, .footer-area #222222). |
| `--color-ink-600` | `#777777` | Body text (ColorLib paragraphs #777777). |
| `--color-line-100` | `#eeeeee` | Hairline borders (ColorLib 1px #eeeeee). |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font display |
| `--font-btn` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Poppins for the uppercase CTA buttons (ColorLib .org_btn/.green_btn). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header / navigation | see fidelity note below |
| 2 | `Hero` | Hero banner | see fidelity note below |
| 3 | `Offer` | What we offer | see fidelity note below |
| 4 | `Features` | Top rated features | see fidelity note below |
| 5 | `Gallery` | Completed projects gallery | see fidelity note below |
| 6 | `ContactQuote` | Free quotation contact band | see fidelity note below |
| 7 | `LatestBlog` | Latest blog posts | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a white sticky header with a logo, primary navigation, and a search icon.

### `Hero`
The system SHALL render a full-width hero with a photo background tinted by the purple→pink gradient, a headline, a tagline, and two gradient buttons.

### `Offer`
The system SHALL render an offer section with a heading and three photo cards whose text block fills with the gradient on hover.

### `Features`
The system SHALL render a light-lavender (#f9f9ff) section with a heading and four text-only feature tiles.

### `Gallery`
The system SHALL render a filterable gallery with filter tabs and photo tiles that reveal a gradient overlay with a lightbox icon on hover.

### `ContactQuote`
The system SHALL render a full-width gradient band with a photo on the left and a contact form on the right.

### `LatestBlog`
The system SHALL render a light-lavender section with three blog post cards.

### `Footer`
The system SHALL render a near-black (#222222) footer with About, Navigation Links, Newsletter, and InstaFeed widgets plus a copyright bar.

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
- **Provenance ban.** No file under `apps/vantage/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/vantage/public/CNAME` = `vantage.free.componentdock.com`
  and the package `homepage` = `https://vantage.free.componentdock.com`.
