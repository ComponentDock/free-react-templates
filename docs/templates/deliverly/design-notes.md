# Deliverly — Design Notes

Reference: **Dusk** — `https://colorlib.com/wp/template/dusk/`  
Live preview: `https://preview.colorlib.com/theme/dusk/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/dusk-free-template.jpg  
Shipped: https://deliverly.free.componentdock.com

Deliverly is a single-page logistics / package-delivery company website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Dusk" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@400;600;700**, **Playfair Display**

## Design tokens (`apps/deliverly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#61b15a` | brand |
| `--color-brand-hover` | `#79bd73` | brand hover |
| `--color-brand-border` | `#71b96b` | brand border |
| `--color-brand-active` | `#81c17b` | brand active |
| `--color-brand-deep` | `#436871` | brand deep |
| `--color-brand-soft` | `rgba(97, 177, 90, 0.2)` | brand soft |
| `--color-brand-soft-strong` | `rgba(97, 177, 90, 0.5)` | brand soft strong |
| `--color-ink` | `#212529` | ink |
| `--color-muted` | `#6c757d` | muted |
| `--color-faint` | `#fafafa` | faint |
| `--color-light` | `#f8f9fa` | light |
| `--color-footer` | `#efefef` | footer |
| `--color-link-muted` | `#777` | link muted |
| `--font-serif` | `'Playfair Display', Georgia, serif` | font serif |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Hero | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `InquiryCard` | Business inquiry card | see fidelity note below |
| 4 | `ProofOnDisplay` | Proof On Display | see fidelity note below |
| 5 | `Pricing` | Pricing | see fidelity note below |
| 6 | `Services` | Services | see fidelity note below |
| 7 | `Testimonials` | Testimonials | see fidelity note below |
| 8 | `RecentBlog` | — | no dedicated spec block |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Header`
The system SHALL render a full-height hero with a background photo, dark overlay, centered headline, subtext, and two call-to-action buttons.

### `Hero`
The system SHALL render a full-height hero with a background photo, dark overlay, centered headline, subtext, and two call-to-action buttons.

### `InquiryCard`
The system SHALL render a white inquiry card overlapping the hero bottom with a package icon, a headline, a paragraph, and a green link.

### `ProofOnDisplay`
The system SHALL render an about-style section with a photo, a green underline, a heading, a lead paragraph, and three icon stats.

### `Pricing`
The system SHALL render a "Choose Your Ideal Pack" section with four pricing cards, each with a name, a green price, a feature list with included and excluded items, and a link.

### `Services`
The system SHALL render a "Services" section with four large-icon feature cards.

### `Testimonials`
The system SHALL render a "What people says about us" testimonials carousel with four distinct customer quotes, each with a photo, a large quote mark, the quote, and a name + role attribution.

### `RecentBlog`
*anchors only* — Latest blog posts

### `Footer`
The system SHALL render a light-gray footer with an about widget, social icons, two link columns, a contact column, and a copyright bar linking to Component Dock.

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
- **Provenance ban.** No file under `apps/deliverly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/deliverly/public/CNAME` = `deliverly.free.componentdock.com`
  and the package `homepage` = `https://deliverly.free.componentdock.com`.
