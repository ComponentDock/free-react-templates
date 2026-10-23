# Loanworks — Design Notes

Reference: **Finloans** — `https://colorlib.com/wp/template/finloans/`  
Live preview: `https://preview.colorlib.com/theme/finloans/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/finloans-free-template.jpg  
Shipped: https://loanworks.free.componentdock.com

A payday loan template with hero, about, services, how it works, FAQ, testimonials and CTA banner sections. Recreation of the ColorLib **Finloans** template as a React 19 + Vite + Tailwind 4 + TypeScript site.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@100;300;400;500;700;900**

## Design tokens (`apps/loanworks/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#33d4d6` | brand |
| `--color-brand-dark` | `#2ab8ba` | brand dark |
| `--color-navy` | `#001d38` | navy |
| `--color-navy-dark` | `#040e27` | navy dark |
| `--color-body-text` | `#7a838b` | body text |
| `--color-text-dark` | `#1f1f1f` | text dark |
| `--color-works-bg` | `#f5fbff` | works bg |
| `--color-service-start` | `#0a8cff` | service start |
| `--color-service-end` | `#054680` | service end |
| `--font-sans` | `'Roboto', sans-serif` | font sans |

> The spec has no section-level requirements; the order below is read from `apps/loanworks/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `Services` | — | no dedicated spec block |
| 4 | `About` | — | no dedicated spec block |
| 5 | `HowItWorks` | — | no dedicated spec block |
| 6 | `FAQ` | — | no dedicated spec block |
| 7 | `Testimonials` | — | no dedicated spec block |
| 8 | `Brands` | — | no dedicated spec block |
| 9 | `CTABanner` | — | no dedicated spec block |
| 10 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Loanworks · Apply for a Loan

### `Hero`
*anchors only* — Get Loan for your Business growth or startup · How it Works · How much do you want? · We provide online instant cash loans with quick approval that suit your term · Amount · Month

### `Services`
*anchors only* — What we offer for you · We provide online instant cash loans with quick approval that suit your term · Apply Now

### `About`
*anchors only* — Why Choose Us? · About Us

### `HowItWorks`
*anchors only* — How it Works · We provide online instant cash loans with quick approval that suit your term

### `FAQ`
*anchors only* — Frequently ask

### `Testimonials`
*anchors only* — Testimonials

### `Brands`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `CTABanner`
*anchors only* — Apply for a Loan for your startup, education or company · Apply Now

### `Footer`
*anchors only* — Facebook · Twitter · Instagram

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
- **Provenance ban.** No file under `apps/loanworks/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/loanworks/public/CNAME` = `loanworks.free.componentdock.com`
  and the package `homepage` = `https://loanworks.free.componentdock.com`.
