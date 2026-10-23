# Aurora — Design Notes

Reference: **Maze** — `https://colorlib.com/wp/template/maze/`  
Live preview: `https://preview.colorlib.com/theme/maze/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/maze-bright-free-personal-website-template.jpg  
Shipped: https://aurora.free.componentdock.com

Aurora is a single-page style & fashion template — the flagship template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/aurora/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-blush-50` | `#fef2f4` | blush 50 |
| `--color-blush-100` | `#fde3e8` | blush 100 |
| `--color-blush-200` | `#fbccd5` | blush 200 |
| `--color-blush-300` | `#f8a4b4` | blush 300 |
| `--color-blush-400` | `#f66483` | blush 400 |
| `--color-blush-500` | `#f14a6e` | blush 500 |
| `--color-blush-600` | `#e02e56` | blush 600 |
| `--color-blush-700` | `#bd1f45` | blush 700 |
| `--color-blush-800` | `#9c1c3d` | blush 800 |
| `--color-blush-900` | `#821c38` | blush 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Poppins — the original template's typeface (Google Fonts via index.html) |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Arrivals` | Arrivals section | see fidelity note below |
| 4 | `Parallax` | Parallax tiles | see fidelity note below |
| 5 | `Gallery` | Gallery section | see fidelity note below |
| 6 | `Features` | Features section | see fidelity note below |
| 7 | `Performance` | Performance section | see fidelity note below |
| 8 | `Newsletter` | Newsletter form | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a pink navbar with the site name "Aurora", section links (Home, Arrivals, Gallery, Features, Contact), and a hamburger toggle that opens a mobile menu on small screens.

### `Hero`
The system SHALL render a split hero on the brand pink background with a headline, supporting paragraph, a white pill "Send Message" button, and a portrait image.

### `Arrivals`
The system SHALL render a white "What's New" section with three cards, each with an image, a title, a blurb and a "Learn Details" link.

### `Parallax`
The system SHALL render two full-width image tiles with dark gradient overlays, titles and captions.

### `Gallery`
The system SHALL render a "Lookbook" gallery with a grid of six images.

### `Features`
The system SHALL render a "Why Aurora" section with six feature tiles, each with a pink icon, a title and a blurb.

### `Performance`
The system SHALL render a two-column "Built to Perform" section with two points ("Powerful Performance", "Light & Dark Color Schemes") and an image.

### `Newsletter`
The system SHALL render a pink newsletter section with an email form. Submitting an invalid email SHALL show an error; a valid email SHALL show a success message and clear the field.

### `Footer`
The system SHALL render a dark footer with the site name, a tagline, and social links (Facebook, Twitter, Instagram, LinkedIn) that open in a new tab.

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
- **Provenance ban.** No file under `apps/aurora/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/aurora/public/CNAME` = `aurora.free.componentdock.com`
  and the package `homepage` = `https://aurora.free.componentdock.com`.
