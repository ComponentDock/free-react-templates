# Homefront — Design Notes

Reference: **Royalestate** — `https://colorlib.com/wp/template/royalestate/`  
Live preview: `https://preview.colorlib.com/theme/royalestate/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/royalestate-free-template.jpg  
Shipped: https://homefront.free.componentdock.com

Homefront is a directory and listings landing page with a navbar, hero, search, services, recent properties, testimonials, stat counters and footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/homefront/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#1e3a5f` | primary |
| `--color-primary-dark` | `#152c4a` | primary dark |
| `--color-accent` | `#c8a951` | accent |
| `--color-accent-dark` | `#b89a3f` | accent dark |
| `--color-navy` | `#1a1a2e` | navy |
| `--color-surface` | `#f8f9fa` | surface |
| `--font-family-poppins` | `'Poppins', sans-serif` | font family poppins |

> The spec has no section-level requirements; the order below is read from `apps/homefront/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `PropertySearch` | — | no dedicated spec block |
| 4 | `Services` | — | no dedicated spec block |
| 5 | `FeaturedProperties` | — | no dedicated spec block |
| 6 | `Testimonials` | — | no dedicated spec block |
| 7 | `Stats` | — | no dedicated spec block |
| 8 | `Newsletter` | — | no dedicated spec block |
| 9 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Toggle menu · Homefront · Sign-In · Sign-Up

### `Hero`
*anchors only* — View Details

### `PropertySearch`
*anchors only* — Search Property · Keyword · Location · Property Type · All Types · Property Status

### `Services`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `FeaturedProperties`
*anchors only* — Recent Properties · Browse our latest property listings

### `Testimonials`
*anchors only* — Testimonials

### `Stats`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Newsletter`
*anchors only* — Subscribe to our Newsletter · Get the latest property updates and market insights delivered to your inbox. · Subscribe

### `Footer`
*anchors only* — Homefront · Home For Sale · Open Houses · New Listing · Recently Reduced · Sell

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
- **Provenance ban.** No file under `apps/homefront/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/homefront/public/CNAME` = `homefront.free.componentdock.com`
  and the package `homepage` = `https://homefront.free.componentdock.com`.
