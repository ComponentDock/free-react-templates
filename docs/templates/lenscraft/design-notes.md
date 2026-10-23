# Lenscraft — Design Notes

Reference: **Proshoot** — `https://colorlib.com/wp/template/proshoot/`  
Live preview: `https://preview.colorlib.com/theme/proshoot/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/proshoot-free-template.jpg  
Shipped: https://lenscraft.free.componentdock.com

A Photography Portfolio template with hero banner, about, services, portfolio gallery, pricing and blog sections. Recreation of ColorLib's "Proshoot" photography portfolio template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Oswald**, **Oswald:wght@300;400;500;600**, **Roboto**

## Design tokens (`apps/lenscraft/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-coral-50` | `#fef2f2` | Brand palette — coral/rose from the Proshoot design (#fc6060) |
| `--color-coral-100` | `#fde3e3` | coral 100 |
| `--color-coral-200` | `#fccbcb` | coral 200 |
| `--color-coral-300` | `#f9a3a3` | coral 300 |
| `--color-coral-400` | `#fc6060` | coral 400 |
| `--color-coral-500` | `#f53e3e` | coral 500 |
| `--color-coral-600` | `#e22020` | coral 600 |
| `--color-coral-700` | `#be1616` | coral 700 |
| `--color-coral-800` | `#9c1616` | coral 800 |
| `--color-coral-900` | `#821a1a` | coral 900 |
| `--font-heading` | `'Oswald', ui-sans-serif, system-ui, sans-serif` | Oswald — heading typeface; Roboto — body (Google Fonts via index.html) |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar renders with navigation links | see fidelity note below |
| 2 | `Hero` | Hero banner displays with headline and image | see fidelity note below |
| 3 | `About` | About section renders with image and text | see fidelity note below |
| 4 | `Services` | Services section displays 6 service cards | see fidelity note below |
| 5 | `Portfolio` | Portfolio gallery shows work items | see fidelity note below |
| 6 | `Pricing` | Pricing section shows 3 packages | see fidelity note below |
| 7 | `Blog` | Blog section shows recent posts | see fidelity note below |
| 8 | `Footer` | Footer renders with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The navbar SHALL display the "Lenscraft" logo and navigation links (Home, About, Projects, Services, Blog). The navbar SHALL collapse to a hamburger menu on mobile viewports.

### `Hero`
The hero section SHALL display the headline "Images matter", a subtitle paragraph, an "Explore More" pill button, a hero image on the right, and social media icons on the side.

### `About`
The about section SHALL display a title "Let's Introduce About Myself", a portrait image, descriptive text, and a "Read More" button.

### `Services`
The services section SHALL display a "What We Offer" heading and 6 service cards in a 3-column grid, each with an icon, title, and description.

### `Portfolio`
The portfolio section SHALL display a "Check Our Work" heading, portfolio items in an asymmetric masonry grid with hover overlays showing title and category, and a "View More" button.

### `Pricing`
The pricing section SHALL display a "Choose Your Package" heading and 3 pricing cards (Wedding $46, Studio $76, Fashion $96) with feature lists and "Book Now" buttons.

### `Blog`
The blog section SHALL display a "Latest Good Story" heading, 1 large featured blog post, and 3 smaller blog posts, each with an image, title, author, date, and excerpt.

### `Footer`
The footer SHALL display About Us text, a newsletter signup form, social media follow icons, and copyright text with a "Component Dock" attribution link.

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
- **Provenance ban.** No file under `apps/lenscraft/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/lenscraft/public/CNAME` = `lenscraft.free.componentdock.com`
  and the package `homepage` = `https://lenscraft.free.componentdock.com`.
