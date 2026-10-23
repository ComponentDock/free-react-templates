# Capitex — Design Notes

Reference: **Finlone** — `https://colorlib.com/wp/template/finlone/`  
Live preview: `https://preview.colorlib.com/theme/finlone/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/finlone-free-template.jpg  
Shipped: https://capitex.free.componentdock.com

A Finance / Loan template with hero, about, services, clients/stats, how it works and faq sections. Recreation of ColorLib "Finlone" — a finance/loan landing page.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Heebo**, **Heebo:wght@200;300;400;500;600;700;800;900**, **Open Sans**

## Design tokens (`apps/capitex/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#0bde8c` | brand |
| `--color-brand-hover` | `#27cb8b` | brand hover |
| `--color-navy` | `#204570` | navy |
| `--color-blue` | `#0077ff` | blue |
| `--color-body` | `#3f4854` | body |
| `--color-gray-bg` | `#f4f6f9` | gray bg |
| `--color-border` | `#dbe2e9` | border |
| `--color-placeholder` | `#b6babe` | placeholder |
| `--color-purple` | `#a03af9` | purple |
| `--font-heading` | `'Heebo', sans-serif` | font heading |
| `--font-body` | `'Open Sans', sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar renders correctly | see fidelity note below |
| 2 | `Hero` | Hero section renders with loan form | see fidelity note below |
| 3 | `About` | About section renders | see fidelity note below |
| 4 | `Services` | Services section renders loan cards | see fidelity note below |
| 5 | `Testimonials` | Testimonials section renders slider | see fidelity note below |
| 6 | `Clients` | Clients/Stats section renders | see fidelity note below |
| 7 | `HowItWorks` | How It Works section renders steps | see fidelity note below |
| 8 | `FAQ` | FAQ section renders accordion | see fidelity note below |
| 9 | `Footer` | Footer renders with Component Dock link | see fidelity note below |
| 10 | `BackToTop` | Back-to-top button | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
A transparent navbar with logo, nav links, and CTA button that becomes sticky blue on scroll.

### `Hero`
A split hero section with headline on the left and a loan application form on the right.

### `About`
A two-column about section with image and customer trust heading.

### `Services`
A gray-background section with three service cards.

### `Testimonials`
A parallax-background section with a dot-navigated testimonial slider.

### `Clients`
A 2x2 grid with loan approval and customer satisfaction counters.

### `HowItWorks`
A three-column section with numbered steps.

### `FAQ`
A gray-background section with a split layout and 4-item accordion.

### `Footer`
A three-column footer with contact info, useful links, and newsletter form.

### `BackToTop`
A floating green circular button that scrolls to top.

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
- **Provenance ban.** No file under `apps/capitex/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/capitex/public/CNAME` = `capitex.free.componentdock.com`
  and the package `homepage` = `https://capitex.free.componentdock.com`.
