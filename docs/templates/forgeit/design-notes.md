# Forgeit — Design Notes

Reference: **Create** — `https://colorlib.com/wp/template/create/`  
Live preview: `https://preview.colorlib.com/theme/create/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/create-free-template.jpg  
Shipped: https://forgeit.free.componentdock.com

Forgeit is a creative agency / web studio onepage template. It recreates the ColorLib "Create" design under a different name with React 19, Tailwind CSS 4, and TypeScript. The template showcases a full creative agency landing page with sections for features, portfolio, services, about, team, blog, and contact.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Quicksand**, **Quicksand:wght@300;400;500;700;900**

## Design tokens (`apps/forgeit/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#32dbc6` | brand |
| `--color-brand-hover` | `#2ac4b3` | brand hover |
| `--color-dark` | `#000000` | dark |
| `--color-body` | `#4d4d4d` | body |
| `--color-surface` | `#ffffff` | surface |
| `--color-surface-light` | `#f8f9fa` | surface light |
| `--color-footer-bg` | `#333333` | footer bg |
| `--color-footer-text` | `#737373` | footer text |
| `--color-footer-heading` | `#ffffff` | footer heading |
| `--font-sans` | `'Quicksand', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | TopBar renders contact info and social links | see fidelity note below |
| 2 | `Navbar` | Navbar renders logo and navigation links | see fidelity note below |
| 3 | `Hero` | Hero section displays headline with typed animation | see fidelity note below |
| 4 | `Features` | Features section shows three feature cards | see fidelity note below |
| 5 | `Portfolio` | Portfolio section shows work gallery | see fidelity note below |
| 6 | `DarkFeatureStrip` | Dark feature strip shows capabilities | see fidelity note below |
| 7 | `Testimonials` | Testimonials section shows client quotes | see fidelity note below |
| 8 | `Services` | Services section shows six service items | see fidelity note below |
| 9 | `About` | About section shows company info | see fidelity note below |
| 10 | `Team` | Team section shows team members | see fidelity note below |
| 11 | `Blog` | Blog section shows post cards | see fidelity note below |
| 12 | `Contact` | TopBar renders contact info and social links | see fidelity note below |
| 13 | `CtaBanner` | CTA banner renders full-width call to action | see fidelity note below |
| 14 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `TopBar`
The template SHALL render a dark top bar with phone number, email address, and social media icon links.

### `Navbar`
The template SHALL render a sticky white navbar with the logo "Forgeit." and navigation links.

### `Hero`
The template SHALL render a hero section with a background image, heading text, and a CTA button.

### `Features`
The template SHALL render a features section with three numbered feature cards.

### `Portfolio`
The template SHALL render a portfolio section with a grid of work items.

### `DarkFeatureStrip`
The template SHALL render a dark background section with feature items and an image.

### `Testimonials`
The template SHALL render a testimonials section with quoted text and person names.

### `Services`
The template SHALL render a services section with icon-based service cards.

### `About`
The template SHALL render an about section with a heading, description, and feature cards.

### `Team`
The template SHALL render a team section with member profiles.

### `Blog`
The template SHALL render a blog section with post cards.

### `Contact`
The template SHALL render a dark top bar with phone number, email address, and social media icon links.

### `CtaBanner`
The template SHALL render a full-width brand-colored CTA banner.

### `Footer`
The template SHALL render a footer with navigation, social links, newsletter form, and a link to Component Dock.

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
- **Provenance ban.** No file under `apps/forgeit/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/forgeit/public/CNAME` = `forgeit.free.componentdock.com`
  and the package `homepage` = `https://forgeit.free.componentdock.com`.
