# Greenplate — Design Notes

Reference: **Vegefoods** — `https://colorlib.com/wp/template/vegefoods/`  
Live preview: `https://preview.colorlib.com/theme/vegefoods/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/vegefoods-free-template.jpg  
Shipped: https://greenplate.free.componentdock.com

Recreate the ColorLib Vegefoods design as a React 19 + Tailwind CSS 4 + TypeScript single-page grocery/organic food e-commerce landing page. The original design is a Bootstrap 4 template featuring a hero slider, product grid, deal countdown, testimonials, and newsletter subscription.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lora**, **Lora:wght@400;600;700**, **Poppins**

## Design tokens (`apps/greenplate/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#82ae46` | brand |
| `--color-brand-dark` | `#6f9538` | brand dark |
| `--color-ink` | `#000000` | ink |
| `--color-paper` | `#f8f9fa` | paper |
| `--color-mist` | `#999999` | mist |
| `--color-body` | `#212529` | body |
| `--color-primary-50` | `#f0f7e6` | Primary scale — brand #82ae46 at 500 |
| `--color-primary-100` | `#ddefc2` | primary 100 |
| `--color-primary-200` | `#c1e39a` | primary 200 |
| `--color-primary-300` | `#a3d66e` | primary 300 |
| `--color-primary-400` | `#8bcf4b` | primary 400 |
| `--color-primary-500` | `#82ae46` | primary 500 |
| `--color-primary-600` | `#6f9538` | primary 600 |
| `--color-primary-700` | `#5a7a2e` | primary 700 |
| `--color-primary-800` | `#466024` | primary 800 |
| `--color-primary-900` | `#34481c` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Fonts: Poppins (sans + body), Lora (serif accents) |
| `--font-serif` | `'Lora', ui-serif, Georgia, serif` | font serif |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Top Bar | see fidelity note below |
| 2 | `Navbar` | Navigation Bar | see fidelity note below |
| 3 | `Hero` | Hero Section | see fidelity note below |
| 4 | `Features` | Features Section | see fidelity note below |
| 5 | `Categories` | Categories Section | see fidelity note below |
| 6 | `Products` | Products Section | see fidelity note below |
| 7 | `DealOfDay` | Deal of the Day | see fidelity note below |
| 8 | `Testimonials` | Testimonials | see fidelity note below |
| 9 | `Partners` | Partners | see fidelity note below |
| 10 | `Newsletter` | Newsletter | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `TopBar`
The template displays a branded top bar with contact information.

### `Navbar`
The template includes a dark navigation bar with brand identity and links.

### `Hero`
The template features a full-width hero slider with calls to action.

### `Features`
The template shows a 4-column feature grid.

### `Categories`
The template displays product categories in an image grid.

### `Products`
The template showcases products in a grid layout.

### `DealOfDay`
The template includes a promotional deal section with countdown.

### `Testimonials`
The template shows customer testimonials in a carousel.

### `Partners`
The template displays partner logos.

### `Newsletter`
The template includes a newsletter subscription form.

### `Footer`
The template ends with a dark footer containing links and contact information.

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
- **Provenance ban.** No file under `apps/greenplate/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/greenplate/public/CNAME` = `greenplate.free.componentdock.com`
  and the package `homepage` = `https://greenplate.free.componentdock.com`.
