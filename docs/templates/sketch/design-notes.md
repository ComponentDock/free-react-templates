# Sketch — Design Notes

Reference: **Design** — `https://colorlib.com/wp/template/design/`  
Live preview: `https://preview.colorlib.com/theme/design/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/design-free-template.jpg  
Shipped: https://sketch.free.componentdock.com

Sketch is a single-page design agency landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Design" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;400;700**

## Design tokens (`apps/sketch/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#1264fa` | brand |
| `--color-brand-hover` | `#2671fa` | brand hover |
| `--color-heading` | `#000839` | heading |
| `--font-family-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font family sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar displays navigation and branding | see fidelity note below |
| 2 | `Hero` | Hero section displays headline and features | see fidelity note below |
| 3 | `Achievements` | Achievements section shows statistics | see fidelity note below |
| 4 | `HowItWorks` | HowItWorks shows 3-step process | see fidelity note below |
| 5 | `Services` | Services section displays offerings | see fidelity note below |
| 6 | `Testimonials` | Testimonials display client feedback | see fidelity note below |
| 7 | `Blog` | Blog section shows recent posts | see fidelity note below |
| 8 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The navbar SHALL display the "Sketch" logo, navigation links (Home, Services, Work, About), and a "Get Started" CTA button.

### `Hero`
The hero SHALL display the heading "Create, Code, and Launch.", a subtitle paragraph, a "Get Started" CTA, two feature cards, a hero image, and a quote overlay.

### `Achievements`
The achievements section SHALL display 4 stat cards: 99.55% ratings, 98,000+ customers, 99.99% uptime, 1M+ love.

### `HowItWorks`
The section SHALL display a "How it works" title and three steps: Create Account, Create Orders, Ship & Track.

### `Services`
The services section SHALL show a title, heading, paragraph, checklist of 3 items, a CTA button, and an image.

### `Testimonials`
The testimonials section SHALL show at least 3 testimonial cards with author images, quotes, and names.

### `Blog`
The blog section SHALL display a "Latest Blog Posts" title and at least 3 blog entries with dates, titles, and descriptions.

### `Footer`
The footer SHALL include an About section, social media links, navigation columns, and a copyright line linking to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/sketch/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sketch/public/CNAME` = `sketch.free.componentdock.com`
  and the package `homepage` = `https://sketch.free.componentdock.com`.
