# Fitcraft — Design Notes

Reference: **Gymlife** — `https://colorlib.com/wp/template/gymlife/`  
Live preview: `https://preview.colorlib.com/theme/gymlife/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/gymlife-free-template.jpg  
Shipped: https://fitcraft.free.componentdock.com

Fitcraft is a gym and fitness landing page template recreated from the ColorLib "Gymlife" design. It provides a modern, dark-themed fitness website with hero, features, classes, pricing, gallery, team, contact, and footer sections.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Muli**, **Muli:wght@300;400;500;600;700;800;900**, **Oswald**

## Design tokens (`apps/fitcraft/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fff7ed` | Fitcraft brand palette: orange #f36100 primary, dark #111111. |
| `--color-primary-100` | `#ffedd5` | primary 100 |
| `--color-primary-200` | `#fed7aa` | primary 200 |
| `--color-primary-300` | `#fdba74` | primary 300 |
| `--color-primary-400` | `#f36100` | primary 400 |
| `--color-primary-500` | `#e05800` | primary 500 |
| `--color-primary-600` | `#c24a00` | primary 600 |
| `--color-primary-700` | `#9a3b00` | primary 700 |
| `--color-primary-800` | `#7a2f00` | primary 800 |
| `--color-primary-900` | `#5c2300` | primary 900 |
| `--color-brand` | `#f36100` | Brand alias for components |
| `--color-brand-dark` | `#e05800` | brand dark |
| `--color-ink` | `#111111` | Dark / ink color |
| `--color-ink-dark` | `#0a0a0a` | ink dark |
| `--color-smoke` | `#a9a9a9` | Muted copy |
| `--color-mist` | `#f4f4f4` | Light section background |
| `--font-sans` | `'Muli', ui-sans-serif, system-ui, sans-serif` | Fonts |
| `--font-display` | `'Oswald', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header with navigation | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Features` | Features section | see fidelity note below |
| 4 | `Classes` | Classes section | see fidelity note below |
| 5 | `Banner` | Banner section | see fidelity note below |
| 6 | `Pricing` | Pricing section | see fidelity note below |
| 7 | `Gallery` | Gallery section | see fidelity note below |
| 8 | `Team` | Team section | see fidelity note below |
| 9 | `Contact` | Contact section | see fidelity note below |
| 10 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Header`
The template SHALL render a sticky header with the FitCraft logo, navigation links (Home, About, Classes, Pricing, Gallery, Contact), and a mobile hamburger menu.

### `Hero`
The template SHALL render a full-screen hero section with a background image, headline, subtitle, and call-to-action button.

### `Features`
The template SHALL render a features section with 4 feature cards showing equipment, nutrition, hours, and trainers.

### `Classes`
The template SHALL render a classes section with 5 fitness class cards.

### `Banner`
The template SHALL render a banner section with a parallax background, headline, and appointment button.

### `Pricing`
The template SHALL render a pricing section with 3 plans: Basic ($39), Premium ($99), and Standard ($59).

### `Gallery`
The template SHALL render a gallery section with 6 gym photos in a masonry-style layout.

### `Team`
The template SHALL render a team section with 3 trainer cards.

### `Contact`
The template SHALL render a contact section with address, phone, and email information.

### `Footer`
The template SHALL render a footer with about text, quick links, newsletter form, and a link to Component Dock.

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
- **Provenance ban.** No file under `apps/fitcraft/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/fitcraft/public/CNAME` = `fitcraft.free.componentdock.com`
  and the package `homepage` = `https://fitcraft.free.componentdock.com`.
