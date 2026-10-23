# Banknote — Design Notes

Reference: **Banker** — `https://colorlib.com/wp/template/banker/`  
Live preview: `https://preview.colorlib.com/theme/banker/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/banker-free-template.jpg  
Shipped: https://banknote.free.componentdock.com

Banknote is a single-page multi-section BANKING / FINANCE WEBSITE in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;600;700**

## Design tokens (`apps/banknote/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#fd7e14` | brand |
| `--color-brand-dark` | `#e86e0c` | brand dark |
| `--color-secondary` | `#71bc42` | Green secondary (#71bc42 from the original). |
| `--color-ink` | `#343a40` | Dark gray for footer and dark sections (#343a40). |
| `--color-ink-dark` | `#23272b` | ink dark |
| `--color-paper` | `#f8f9fa` | Light section background (#f8f9fa). |
| `--color-mist` | `#eff1f3` | Alt light background (#eff1f3). |
| `--color-primary-50` | `#fff8f0` | primary 50 |
| `--color-primary-100` | `#ffedd5` | primary 100 |
| `--color-primary-200` | `#fed7aa` | primary 200 |
| `--color-primary-300` | `#fdba74` | primary 300 |
| `--color-primary-400` | `#fb923c` | primary 400 |
| `--color-primary-500` | `#fd7e14` | primary 500 |
| `--color-primary-600` | `#e86e0c` | primary 600 |
| `--color-primary-700` | `#c2410c` | primary 700 |
| `--color-primary-800` | `#9a3412` | primary 800 |
| `--color-primary-900` | `#7c2d12` | primary 900 |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | Original font: "Open Sans" (body + headings). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `Features` | — | no dedicated spec block |
| 4 | `AboutEmail` | — | no dedicated spec block |
| 5 | `AboutUs` | — | no dedicated spec block |
| 6 | `Team` | — | no dedicated spec block |
| 7 | `Gallery` | — | no dedicated spec block |
| 8 | `HowItWorks` | — | no dedicated spec block |
| 9 | `Services` | — | no dedicated spec block |
| 10 | `Testimonials` | — | no dedicated spec block |
| 11 | `Pricing` | — | no dedicated spec block |
| 12 | `FAQ` | — | no dedicated spec block |
| 13 | `AboutFeatures` | — | no dedicated spec block |
| 14 | `Blog` | — | no dedicated spec block |
| 15 | `Contact` | — | no dedicated spec block |
| 16 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Toggle menu · Banknote

### `Hero`
*anchors only* — Scroll down

### `Features`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `AboutEmail`
*anchors only* — Amortization Computation · Submit Email

### `AboutUs`
*anchors only* — About Us · We Solve Your Financial Problem

### `Team`
*anchors only* — Meet Team

### `Gallery`
*anchors only* — Gallery

### `HowItWorks`
*anchors only* — Previous · Next · How It Works · Getting started with Banknote is simple. Follow these three easy steps. · Learn More →

### `Services`
*anchors only* — Our Services · We offer a comprehensive range of financial services to meet your needs. · Learn More →

### `Testimonials`
*anchors only* — Happy Customers · See what our clients have to say about their experience with Banknote.

### `Pricing`
*anchors only* — Pricing · Choose the plan that fits your financial needs. · Popular · Buy Now

### `FAQ`
*anchors only* — Frequently Ask Questions

### `AboutFeatures`
*anchors only* — Learn More →

### `Blog`
*anchors only* — Our Blog · Stay updated with the latest financial insights and tips. · Continue Reading...

### `Contact`
*anchors only* — Contact Us · Get in touch with our team for any inquiries or assistance. · Send Message

### `Footer`
*anchors only* — Banknote · Quick Links · Subscribe Newsletter · Get the latest financial tips and updates delivered to your inbox. · Send · Component Dock

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
- **Provenance ban.** No file under `apps/banknote/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/banknote/public/CNAME` = `banknote.free.componentdock.com`
  and the package `homepage` = `https://banknote.free.componentdock.com`.
