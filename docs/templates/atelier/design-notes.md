# Atelier — Design Notes

Reference: **Design** — `https://colorlib.com/wp/template/design/`  
Live preview: `https://preview.colorlib.com/theme/design/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ashion-free-template.jpg — the ROW's slug `ashion`, not the spec's `design`  
Shipped: https://atelier.free.componentdock.com

Row note: `TEMPLATES.md` links the slug `ashion` for this app while the spec records `design`. This brief follows the SPEC — the disagreement is recorded, not resolved (ROW-MULTIPLICITY class, see the SPEC-REFERENCE audit, main `4820f472b`).

Atelier is a creative agency landing page with a split hero, achievement stats, process steps, services, a testimonial carousel and blog cards. It recreates the ColorLib "Design" design with Vite, React 19, Tailwind CSS 4 and TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;400;500;600;700;800**

## Design tokens (`apps/atelier/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-50` | `#eef4ff` | brand 50 |
| `--color-brand-100` | `#d9e6ff` | brand 100 |
| `--color-brand-200` | `#bcd4ff` | brand 200 |
| `--color-brand-300` | `#8ebcff` | brand 300 |
| `--color-brand-400` | `#5999ff` | brand 400 |
| `--color-brand-500` | `#1264fa` | brand 500 |
| `--color-brand-600` | `#0a50e0` | brand 600 |
| `--color-brand-700` | `#0a3dbb` | brand 700 |
| `--color-brand-800` | `#0f3498` | brand 800 |
| `--color-brand-900` | `#132f79` | brand 900 |
| `--color-navy` | `#000839` | navy |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with logo, links, and mobile menu | see fidelity note below |
| 2 | `Hero` | Hero section with split layout | see fidelity note below |
| 3 | `Achievements` | Achievements statistics section | see fidelity note below |
| 4 | `HowItWorks` | How It Works process steps | see fidelity note below |
| 5 | `Services` | Services section with checklist | see fidelity note below |
| 6 | `Testimonial` | Testimonial carousel | see fidelity note below |
| 7 | `Blog` | Blog section with post cards | see fidelity note below |
| 8 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL render a sticky navbar with the logo "Atelier", navigation links (Home, About, Services, Blog, Contact), and a "Get Started" CTA button. On mobile, a hamburger toggle shows/hides a mobile menu.

### `Hero`
The template SHALL render a hero section with a left column containing a heading, paragraph, CTA button, and feature cards, and a right column with an image and quote overlay.

### `Achievements`
The template SHALL render 4 stat columns showing performance metrics.

### `HowItWorks`
The template SHALL render a 3-step process section with icons, titles, and descriptions.

### `Services`
The template SHALL render a services section with a heading, paragraph, checkmark list, and CTA on the left, and a decorative image on the right.

### `Testimonial`
The template SHALL render a testimonial carousel with navigation dots.

### `Blog`
The template SHALL render a blog section with 5 post cards showing dates, titles, and descriptions.

### `Footer`
The template SHALL render a footer with about text, social icons, navigation columns, and a copyright line linking to Component Dock.

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
- **Provenance ban.** No file under `apps/atelier/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/atelier/public/CNAME` = `atelier.free.componentdock.com`
  and the package `homepage` = `https://atelier.free.componentdock.com`.
