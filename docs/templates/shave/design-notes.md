# Shave — Design Notes

Reference: **Barber** — `https://colorlib.com/wp/template/barber/`  
Live preview: `https://preview.colorlib.com/theme/barber/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/barber-free-barber-website-template.jpg  
Shipped: https://shave.free.componentdock.com

Recreate ColorLib "Barber" (https://colorlib.com/wp/template/barber/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript template under the name "Shave". The original is a barber shop landing page with services, gallery, features, about, team, pricing, contact, and footer sections.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/shave/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-pink-50` | `#fef2f8` | Shave brand palette — pink-to-purple gradient from the original barber design |
| `--color-pink-100` | `#fde3f0` | pink 100 |
| `--color-pink-200` | `#fbc8e2` | pink 200 |
| `--color-pink-300` | `#f8a0cb` | pink 300 |
| `--color-pink-400` | `#f61daf` | pink 400 |
| `--color-pink-500` | `#e010a0` | pink 500 |
| `--color-pink-600` | `#c00888` | pink 600 |
| `--color-pink-700` | `#a00470` | pink 700 |
| `--color-pink-800` | `#800358` | pink 800 |
| `--color-pink-900` | `#600340` | pink 900 |
| `--color-purple-400` | `#691cff` | purple 400 |
| `--color-purple-500` | `#5510e8` | purple 500 |
| `--color-purple-600` | `#4508d0` | purple 600 |
| `--color-section-light` | `#f9f9ff` | Section backgrounds |
| `--color-footer-dark` | `#222222` | Footer dark |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Poppins typeface |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with navigation | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Services` | Services section | see fidelity note below |
| 4 | `Gallery` | Gallery section | see fidelity note below |
| 5 | `Features` | Features section | see fidelity note below |
| 6 | `About` | About section | see fidelity note below |
| 7 | `Team` | Team section | see fidelity note below |
| 8 | `Pricing` | Pricing section | see fidelity note below |
| 9 | `Contact` | Contact section | see fidelity note below |
| 10 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The navbar MUST show the brand name and navigation links, with a mobile hamburger toggle.

### `Hero`
The hero section MUST display a headline, subtitle, CTA button, and hero image.

### `Services`
The services section MUST display 4 service cards with icons, titles, and descriptions.

### `Gallery`
The gallery section MUST display 6 images with hover overlay labels.

### `Features`
The features section MUST display 6 feature cards with icons, titles, and descriptions.

### `About`
The about section MUST display a heading, description, CTA button, image, and play button.

### `Team`
The team section MUST display 4 team member cards with photos, names, roles, and social links.

### `Pricing`
The pricing section MUST display 3 pricing plans with names, prices, feature lists, and purchase buttons.

### `Contact`
The contact section MUST display contact info cards and a contact form.

### `Footer`
The footer MUST display About, Newsletter, and Social columns, and link to Component Dock.

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
- **Provenance ban.** No file under `apps/shave/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/shave/public/CNAME` = `shave.free.componentdock.com`
  and the package `homepage` = `https://shave.free.componentdock.com`.
