# Shear — Design Notes

Reference: **Barberz** — `https://colorlib.com/wp/template/barberz/`  
Live preview: `https://preview.colorlib.com/theme/barberz/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/barberz-free-template.jpg  
Shipped: https://shear.free.componentdock.com

Shear is a single-page barber-shop landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Barberz" design (https://colorlib.com/wp/template/barberz/), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **DM Sans**, **DM Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700**

## Design tokens (`apps/shear/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#dc3545` | brand |
| `--color-brand-dark` | `#b02a37` | brand dark |
| `--color-paper` | `#f8f9fa` | Paper — light section backgrounds (#f8f9fa from the original). |
| `--color-ink` | `#343a40` | Ink — headings + body text (dark gray from the original). |
| `--color-mist` | `#6c757d` | Mist — muted body text. |
| `--color-primary-50` | `#fdf2f3` | primary 50 |
| `--color-primary-100` | `#fbe3e5` | primary 100 |
| `--color-primary-200` | `#f6c8cc` | primary 200 |
| `--color-primary-300` | `#ef9aa1` | primary 300 |
| `--color-primary-400` | `#e56871` | primary 400 |
| `--color-primary-500` | `#e04a55` | primary 500 |
| `--color-primary-600` | `#dc3545` | primary 600 |
| `--color-primary-700` | `#b02a37` | primary 700 |
| `--color-primary-800` | `#932430` | primary 800 |
| `--color-primary-900` | `#7b212b` | primary 900 |
| `--font-sans` | `'DM Sans', ui-sans-serif, system-ui, sans-serif` | Original font: "DM Sans" (Google Fonts in index.html). |
| `--font-display` | `'DM Sans', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `Welcome` | Welcome split | see fidelity note below |
| 4 | `Pricing` | Services & Pricing | see fidelity note below |
| 5 | `HairStyles` | Hair styles | see fidelity note below |
| 6 | `Services` | Services & Pricing | see fidelity note below |
| 7 | `Testimonials` | Testimonials | see fidelity note below |
| 8 | `Blog` | — | no dedicated spec block |
| 9 | `Cta` | — | no dedicated spec block |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Shear", a "Home" link, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a background image, a level-1 headline, and a call-to-action button.

### `Welcome`
The system SHALL render a welcome section with an image, a years-of-service badge, and a heading.

### `Pricing`
The system SHALL render a "Services & Pricing" section with at least two pricing cards, each with priced items.

### `HairStyles`
The system SHALL render a "More Hair Styles" section with three photo cards with prices.

### `Services`
The system SHALL render a "Services & Pricing" section with at least two pricing cards, each with priced items.

### `Testimonials`
The system SHALL render an "Our Top Client Says" section with three quotes.

### `Blog`
*anchors only* — Our Blog · Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.

### `Cta`
*anchors only* — Quality Haircut · Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. · Contact Us Now

### `Footer`
The system SHALL render a footer with the site name, a short tagline, quick links, a newsletter field, and social links.

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
- **Provenance ban.** No file under `apps/shear/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/shear/public/CNAME` = `shear.free.componentdock.com`
  and the package `homepage` = `https://shear.free.componentdock.com`.
