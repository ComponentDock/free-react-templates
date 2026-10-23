# Keynest — Design Notes

Reference: **Rolast** — `https://colorlib.com/wp/template/rolast/`  
Live preview: `https://preview.colorlib.com/theme/rolast/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/rolast-free-template.jpg  
Shipped: https://keynest.free.componentdock.com

Keynest is a free real estate property listing website template that recreates the ColorLib "Rolast" design (https://colorlib.com/wp/template/rolast/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript application.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Prompt**, **Prompt:wght@300;400;500;600;700;800**

## Design tokens (`apps/keynest/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#0fb45f` | primary |
| `--color-primary-dark` | `#0d9a4f` | primary dark |
| `--color-primary-light` | `#11e276` | primary light |
| `--color-heading` | `#140c40` | heading |
| `--color-body` | `#646d77` | body |
| `--color-mist` | `#f8f9fa` | mist |
| `--font-sans` | `'Prompt', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar with logo and links | see fidelity note below |
| 2 | `Hero` | Hero section with property search form | see fidelity note below |
| 3 | `PropertyListings` | Property listings grid | see fidelity note below |
| 4 | `FeatureShowcase` | Feature showcase section | see fidelity note below |
| 5 | `ProcessSteps` | 4-step process section | see fidelity note below |
| 6 | `Team` | Team/agents section | see fidelity note below |
| 7 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a sticky navigation bar with the "Keynest" logo, navigation links (Home, Property, About, Blog, Contact), and a phone number button on the right.

### `Hero`
The template SHALL display a hero section with a dark background image, heading "Find Your Dream Home", subtitle "We Have Over Million Properties For You", and a tabbed search form with Buy Property / Rent Property tabs containing Location, Property Type, Bedroom fields, and a Search button.

### `PropertyListings`
The template SHALL display a section titled "Searching for the Best Places?" with 6 property cards in a 3-column grid. Each card has an image, title, location, bed/bath info, and price.

### `FeatureShowcase`
The template SHALL display a split section with text on the left ("Just browse away. It's all here.") and an image carousel on the right, with a "Browse Property" button.

### `ProcessSteps`
The template SHALL display a 4-step process section with numbered steps: "Choose a category", "Find real estate", "Take the keys", "Live happy", each with an icon and description.

### `Team`
The template SHALL display a "Meet Our Agents" section with 4 agent cards. Each card shows a photo, social media icons, name, and role.

### `Footer`
The template SHALL display a footer with logo, About links, Services links, Newsletter form, and a link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/keynest/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/keynest/public/CNAME` = `keynest.free.componentdock.com`
  and the package `homepage` = `https://keynest.free.componentdock.com`.
