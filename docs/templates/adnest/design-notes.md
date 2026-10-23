# Adnest — Design Notes

Reference: **Classy Ads** — `https://colorlib.com/wp/template/classy-ads/`  
Live preview: `https://preview.colorlib.com/theme/classy-ads/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/classyads-free-template.jpg  
Shipped: https://adnest.free.componentdock.com

Adnest is a single-page classified ads directory website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Classy Ads" free template (source: https://colorlib.com/wp/template/classy-ads/), built under a DIFFERENT name (**Adnest**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter:wght@300;400;500;600;700**

## Design tokens (`apps/adnest/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#00c9b7` | brand |
| `--color-brand-dark` | `#00a89a` | brand dark |
| `--color-body-bg` | `#f8f9fa` | body bg |
| `--color-nav-text` | `#212121` | nav text |
| `--color-muted-text` | `#757575` | muted text |
| `--color-border` | `#e0e0e0` | border |
| `--color-footer-bg` | `#1a1a2e` | footer bg |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar renders correctly | see fidelity note below |
| 2 | `Hero` | Hero section renders search functionality | see fidelity note below |
| 3 | `CategoryStrip` | Category strip displays all categories | see fidelity note below |
| 4 | `FeaturedAds` | Featured ads grid renders correctly | see fidelity note below |
| 5 | `Footer` | Footer renders with Component Dock attribution | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a sticky white navbar with the "CLASSYADS" logo, desktop nav links (Home, Ads, About with dropdown, Blog, Contact), auth links (Log In, Register), and a teal "Post an Ad" button.

### `Hero`
The system SHALL render a full-width hero section (~65vh) with a dark-overlaid background image, centered headline, subtext, and a horizontal search bar.

### `CategoryStrip`
The system SHALL render an elevated white horizontal bar below the hero with 6 category items, each showing a teal icon, category name, and item count.

### `FeaturedAds`
The system SHALL render a section heading "Featured Ads" followed by a 4-column grid of ad listing cards with white backgrounds, rounded corners, images, and text content.

### `Footer`
The system SHALL render a dark navy footer with brand, quick links, categories, social icons, and a "Component Dock" attribution link.

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
- **Provenance ban.** No file under `apps/adnest/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/adnest/public/CNAME` = `adnest.free.componentdock.com`
  and the package `homepage` = `https://adnest.free.componentdock.com`.
