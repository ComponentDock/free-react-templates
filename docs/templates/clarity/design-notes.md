# Clarity — Design Notes

Reference: **Coaching** — `https://colorlib.com/wp/template/coaching/`  
Live preview: `https://preview.colorlib.com/theme/coaching/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/coaching-free-template.jpg  
Shipped: https://clarity.free.componentdock.com

Clarity is a single-page professional coaching website template in the free-react-templates monorepo.

## Design tokens (`apps/clarity/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#373a6d` | primary |
| `--color-primary-light` | `#4a4d7a` | primary light |
| `--color-primary-dark` | `#2a2d5a` | primary dark |
| `--color-warning` | `#ffc107` | warning |
| `--color-surface` | `#ffffff` | surface |
| `--color-surface-light` | `#f8f9fa` | surface light |
| `--color-footer-bg` | `#333333` | footer bg |
| `--color-footer-text` | `rgba(255, 255, 255, 0.5)` | footer text |
| `--color-footer-link` | `rgba(255, 255, 255, 0.6)` | footer link |

> The spec has no section-level requirements; the order below is read from `apps/clarity/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `About` | — | no dedicated spec block |
| 4 | `Training` | — | no dedicated spec block |
| 5 | `Testimonials` | — | no dedicated spec block |
| 6 | `Services` | — | no dedicated spec block |
| 7 | `Blog` | — | no dedicated spec block |
| 8 | `Contact` | — | no dedicated spec block |
| 9 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — banner · Main navigation · Mobile navigation

### `Hero`
*anchors only* — I&apos;m Professional · Contact Me

### `About`
*anchors only* — Welcome To My Website

### `Training`
*anchors only* — Life Coach Training

### `Testimonials`
*anchors only* — Happy Customers

### `Services`
*anchors only* — Our Services

### `Blog`
*anchors only* — Our Blog · Read More..

### `Contact`
*anchors only* — Contact Me · Address · Phone · Email Address · Thank you for your message! We&apos;ll get back to you soon. · Send Message

### `Footer`
*anchors only* — About Clarity · Quick Links · Follow Us · Subscribe Newsletter · Send · Component Dock

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
- **Provenance ban.** No file under `apps/clarity/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/clarity/public/CNAME` = `clarity.free.componentdock.com`
  and the package `homepage` = `https://clarity.free.componentdock.com`.
