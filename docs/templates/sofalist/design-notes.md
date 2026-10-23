# Sofalist — Design Notes

Reference: **Furnish** — `https://colorlib.com/wp/template/furnish/`  
Live preview: `https://preview.colorlib.com/theme/furnish/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/furnish-colorlib-template.jpg  
Shipped: https://sofalist.free.componentdock.com

Sofalist is a furniture-store business landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600**

## Design tokens (`apps/sofalist/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-amber` | `#cf7500` | amber |
| `--color-steel` | `#267aa4` | steel |
| `--color-paleblue` | `#d4eaf5` | paleblue |
| `--color-linkblue` | `#3099cd` | linkblue |
| `--color-light` | `#f8f9fa` | light |
| `--color-ink` | `#000` | ink |
| `--color-paper` | `#fff` | paper |
| `--color-muted` | `#666` | muted |
| `--color-rose` | `#f5ebeb` | rose |
| `--color-rose-icon` | `#cb9696` | rose icon |
| `--color-sage` | `#dcebdd` | sage |
| `--color-sage-icon` | `#8bbd8e` | sage icon |
| `--color-gold` | `#f5efd8` | gold |
| `--color-gold-icon` | `#d1b54a` | gold icon |
| `--color-tan` | `#f4e6d8` | tan |
| `--color-tan-icon` | `#d29a61` | tan icon |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `FeatureCards` | Feature cards | see fidelity note below |
| 4 | `AboutSplit` | About split | see fidelity note below |
| 5 | `Gallery` | Furniture Collection gallery | see fidelity note below |
| 6 | `StatsBand` | Statistics band | see fidelity note below |
| 7 | `Testimonials` | Testimonials | see fidelity note below |
| 8 | `HowItWorks` | How it Works | see fidelity note below |
| 9 | `Blog` | Blog | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a transparent navbar over the hero with a brand wordmark and the five nav links, plus an accessible mobile menu.

### `Hero`
The system SHALL render a 100vh split hero with a text panel on the left and a photo on the right, plus a white pill CTA.

### `FeatureCards`
The system SHALL render four equal pastel feature cards with circular icons, titles, and blurbs.

### `AboutSplit`
The system SHALL render an image+text about split with a "Watch Video" play link.

### `Gallery`
The system SHALL render a gallery of eight tiles with hover caption overlays.

### `StatsBand`
The system SHALL render a light-blue stats band with a heading and four counters.

### `Testimonials`
The system SHALL render a testimonial carousel on the light-gray band with quotes, avatars, authors, and prev/next controls.

### `HowItWorks`
The system SHALL render a three-step flow with numbered white circular icons and a two-button CTA row.

### `Blog`
The system SHALL render three blog cards with image, meta row, title, and excerpt.

### `Footer`
The system SHALL render a pale-blue footer with brand/social, Services, Recent Posts, contact info, and the Component Dock attribution.

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
- **Provenance ban.** No file under `apps/sofalist/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sofalist/public/CNAME` = `sofalist.free.componentdock.com`
  and the package `homepage` = `https://sofalist.free.componentdock.com`.
