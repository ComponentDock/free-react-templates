# Helm — Design Notes

Reference: **Cruise** — `https://colorlib.com/wp/template/cruise/`  
Live preview: `https://preview.colorlib.com/theme/cruise/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/cruise-free-template.jpg  
Shipped: https://helm.free.componentdock.com

Helm is a free technology company landing page template built with React 19, Tailwind CSS 4, and TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **DM Sans**, **DM Sans:wght@300;400;700**

## Design tokens (`apps/helm/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fff1ee` | primary 50 |
| `--color-primary-100` | `#ffd9d2` | primary 100 |
| `--color-primary-200` | `#ffb3a6` | primary 200 |
| `--color-primary-300` | `#ff8c79` | primary 300 |
| `--color-primary-400` | `#ff5533` | primary 400 |
| `--color-primary-500` | `#e64525` | primary 500 |
| `--color-primary-600` | `#cc3a1e` | primary 600 |
| `--color-primary-700` | `#a32e18` | primary 700 |
| `--color-primary-800` | `#7a2212` | primary 800 |
| `--color-primary-900` | `#52170d` | primary 900 |
| `--color-ink` | `#364d59` | Body text from ColorLib (ColorLib #364d59). |
| `--color-mist` | `#f8f9fa` | Light section background (ColorLib .bg-light). |
| `--color-footer` | `#000000` | Footer black. |
| `--font-sans` | `'DM Sans', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'DM Sans', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar displays all navigation links | see fidelity note below |
| 2 | `Hero` | Hero displays the main headline | see fidelity note below |
| 3 | `WhatWeDo` | What We Do section shows three feature cards | see fidelity note below |
| 4 | `Features` | Features section shows two split rows | see fidelity note below |
| 5 | `FutureDesign` | Future Design section shows four feature boxes | see fidelity note below |
| 6 | `Testimonial` | Testimonial section displays a quote | see fidelity note below |
| 7 | `BlogPosts` | Blog section shows four post cards | see fidelity note below |
| 8 | `Footer` | Footer renders all columns | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The navbar SHALL render a centered "Helm" logo with left navigation (Home, Technology, Careers) and right navigation (About, Blog, Contact).

### `Hero`
The hero section SHALL display a full-width background image with a centered heading and subtitle.

### `WhatWeDo`
The What We Do section SHALL display a section label, heading, subtitle, and three feature cards with images, titles, descriptions, and "Learn More" links.

### `Features`
The Our Features section SHALL display two alternating rows, each with a large image and a numbered text sidebar.

### `FutureDesign`
The Design for the Future section SHALL display four feature boxes in a 2x2 grid with titles and descriptions.

### `Testimonial`
The testimonial section SHALL display a blockquote with a quote icon, testimonial text, and attribution.

### `BlogPosts`
The blog section SHALL display four blog post cards with images, dates, titles, and "Read More" links.

### `Footer`
The footer SHALL display About Us, Features, Newsletter, and social links with a copyright line linking to Component Dock.

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
- **Provenance ban.** No file under `apps/helm/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/helm/public/CNAME` = `helm.free.componentdock.com`
  and the package `homepage` = `https://helm.free.componentdock.com`.
