# Zestly — Design Notes

Reference: **Tasty Recipes** — `https://colorlib.com/wp/template/tasty-recipes/`  
Live preview: `https://preview.colorlib.com/theme/tasty-recipes/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/tastyrecipes-free-template.jpg  
Shipped: https://zestly.free.componentdock.com

Zestly is a free cooking and recipe website template that recreates the ColorLib Tasty Recipes design as a modern React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application. It provides a visually appealing layout for showcasing recipes, cooking videos, dishes, customer testimonials, and app download links.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@400;500;700**, **Satisfy**

## Design tokens (`apps/zestly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-pink` | `#ff008c` | Brand gradient: #ff008c (pink) to #ff6357 (coral). |
| `--color-brand-coral` | `#ff6357` | brand coral |
| `--color-blue-light` | `#5db2ff` | Blue gradient: #5db2ff to #65b4f9. |
| `--color-blue-lighter` | `#65b4f9` | blue lighter |
| `--color-body` | `#1f1f1f` | Body text (#1F1F1F). |
| `--color-secondary` | `#777777` | Secondary text (#777777). |
| `--color-dark-bg` | `#020c26` | Dark background (#020c26). |
| `--color-footer` | `#1f1f1f` | Footer background (#1f1f1f / #2C2C2C). |
| `--color-footer-alt` | `#2c2c2c` | footer alt |
| `--color-light-bg` | `#f5f5f5` | Light section background (#f5f5f5). |
| `--font-display` | `'Satisfy', cursive` | Display font: Satisfy (Google Fonts, script style). |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Body font: Roboto (Google Fonts). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with navigation and mobile toggle | see fidelity note below |
| 2 | `Hero` | Hero section with headline and CTA | see fidelity note below |
| 3 | `Recipes` | Recipe cards grid | see fidelity note below |
| 4 | `RecipeVideos` | Recipe videos section with play button | see fidelity note below |
| 5 | `Dishes` | Dishes showcase section | see fidelity note below |
| 6 | `LatestTrending` | Latest trending CTA section | see fidelity note below |
| 7 | `CustomerFeedback` | Customer feedback testimonials | see fidelity note below |
| 8 | `DownloadApp` | Download app section | see fidelity note below |
| 9 | `Footer` | Footer with links, newsletter, and Component Dock attribution | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
Users SHALL see a sticky top navigation bar with the Zestly logo, navigation links (Home, Recipes, Videos, Dishes, Feedback, Contact), and a search icon. On mobile, a hamburger menu toggle SHALL be visible that expands/collapses the navigation.

### `Hero`
Users SHALL see a full-width hero section with a background image, headline text, supporting copy, and an "Explore Recipes" call-to-action button.

### `Recipes`
Users SHALL see a 3-column grid of recipe cards, each with a circular image, recipe title, category badge, cook time, and a "View Full Recipe" link.

### `RecipeVideos`
Users SHALL see a split layout with a heading, description, and play button on the left, and stacked video thumbnails on the right.

### `Dishes`
Users SHALL see a 3-column grid of dish cards, each with a circular image, title, and description.

### `LatestTrending`
Users SHALL see a call-to-action section with a heading, subtext, and a "View all Recipes" button linking to the recipes section.

### `CustomerFeedback`
Users SHALL see a testimonials section with customer cards showing avatar, name, role, and quote text.

### `DownloadApp`
Users SHALL see a split layout with phone mockup images on the left and a heading with App Store and Play Store download buttons on the right.

### `Footer`
Users SHALL see a footer with four columns (Top Products, Quick Links, Features, Subscribe), a newsletter form, copyright text linking to Component Dock, and social media icons.

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
- **Provenance ban.** No file under `apps/zestly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/zestly/public/CNAME` = `zestly.free.componentdock.com`
  and the package `homepage` = `https://zestly.free.componentdock.com`.
