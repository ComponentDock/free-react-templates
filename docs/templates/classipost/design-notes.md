# Classipost — Design Notes

Reference: **Classy Ads** — `https://colorlib.com/wp/template/classy-ads/`  
Live preview: `https://preview.colorlib.com/theme/classy-ads/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/classyads-free-template.jpg  
Shipped: https://classipost.free.componentdock.com

ClassiPost is a classified ads listing template that recreates the ColorLib "Classy Ads" design (https://colorlib.com/wp/template/classy-ads/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript application. The template features a hero section with search bar, category grid, featured ads, and a footer with Component Dock branding.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/classipost/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-teal-50` | `#f0fdfa` | teal 50 |
| `--color-teal-100` | `#ccfbf1` | teal 100 |
| `--color-teal-200` | `#99f6e4` | teal 200 |
| `--color-teal-300` | `#5eead4` | teal 300 |
| `--color-teal-400` | `#2dd4bf` | teal 400 |
| `--color-teal-500` | `#14b8a6` | teal 500 |
| `--color-teal-600` | `#0d9488` | teal 600 |
| `--color-teal-700` | `#0f766e` | teal 700 |
| `--color-teal-800` | `#115e59` | teal 800 |
| `--color-teal-900` | `#134e4a` | teal 900 |
| `--color-brand` | `#1ec6b6` | brand |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero Section | see fidelity note below |
| 3 | `Categories` | Categories Section | see fidelity note below |
| 4 | `FeaturedAds` | Featured Ads Section | see fidelity note below |
| 5 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL include a sticky top navbar with the brand name "ClassiPost" and navigation links.

### `Hero`
The template SHALL include a hero section with a heading, subtitle, and search bar.

### `Categories`
The template SHALL include a categories section with icon grid showing listing categories and counts.

### `FeaturedAds`
The template SHALL include a featured ads section with ad cards in a grid.

### `Footer`
The template SHALL include a footer with Component Dock branding.

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
- **Provenance ban.** No file under `apps/classipost/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/classipost/public/CNAME` = `classipost.free.componentdock.com`
  and the package `homepage` = `https://classipost.free.componentdock.com`.
