# Gaze — Design Notes

Reference: **Thelook** — `https://colorlib.com/wp/template/thelook/`  
Live preview: `https://preview.colorlib.com/theme/thelook/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/thelook-free-template.jpg  
Shipped: https://gaze.free.componentdock.com

Recreate the ColorLib "The Look" photography gallery template as a React 19 + Tailwind CSS 4 + TypeScript app named "Gaze". The template features a hero image slider, two-column portfolio gallery, blog section, and contact form footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato**, **Lato:wght@300;400;700**

## Design tokens (`apps/gaze/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#081624` | Gaze brand palette — dark navy from the original "The Look" gallery template. |
| `--color-primary-50` | `#f0f3f5` | primary 50 |
| `--color-primary-100` | `#d9e0e6` | primary 100 |
| `--color-primary-200` | `#b3c1cd` | primary 200 |
| `--color-primary-300` | `#8da2b4` | primary 300 |
| `--color-primary-400` | `#67839b` | primary 400 |
| `--color-primary-500` | `#416482` | primary 500 |
| `--color-primary-600` | `#345068` | primary 600 |
| `--color-primary-700` | `#273c4e` | primary 700 |
| `--color-primary-800` | `#1a2834` | primary 800 |
| `--color-primary-900` | `#0d141a` | primary 900 |
| `--color-primary-950` | `#081624` | primary 950 |
| `--font-display` | `'Lato', ui-sans-serif, system-ui, sans-serif` | Lato font family (loaded via Google Fonts in index.html) |
| `--font-sans` | `'Lato', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero Section | see fidelity note below |
| 3 | `Gallery` | Gallery Section | see fidelity note below |
| 4 | `Blog` | Blog Section | see fidelity note below |
| 5 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL render a sticky navigation bar with logo and links.

### `Hero`
The template SHALL render a full-width hero section with background image, overlay, heading, subtitle, and call-to-action button.

### `Gallery`
The template SHALL render a two-column gallery section with a photography quote, 6 gallery items, and a "See All Galleries" call-to-action.

### `Blog`
The template SHALL render a blog section with the latest posts.

### `Footer`
The template SHALL render a dark footer with contact form and Component Dock attribution.

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
- **Provenance ban.** No file under `apps/gaze/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/gaze/public/CNAME` = `gaze.free.componentdock.com`
  and the package `homepage` = `https://gaze.free.componentdock.com`.
