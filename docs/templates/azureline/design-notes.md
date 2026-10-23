# Azureline — Design Notes

Reference: **Blueline** — `https://colorlib.com/wp/template/blueline/`  
Live preview: `https://preview.colorlib.com/theme/blueline/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/blueline-free-fullscreen-business-website-template.jpg  
Shipped: https://azureline.free.componentdock.com

A business template with hero, features, video, services section with split, newsletter subscription and contact form with split sections. Recreation of ColorLib **Blueline** template as a fullscreen business landing page.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@200;300;400;500;600;700**

## Design tokens (`apps/azureline/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-50` | `#eef2fc` | brand 50 |
| `--color-brand-100` | `#d5e0f7` | brand 100 |
| `--color-brand-200` | `#b3c9f0` | brand 200 |
| `--color-brand-300` | `#7da4e4` | brand 300 |
| `--color-brand-400` | `#4a7fd8` | brand 400 |
| `--color-brand-500` | `#2954c9` | brand 500 |
| `--color-brand-600` | `#2244a8` | brand 600 |
| `--color-brand-700` | `#1b3587` | brand 700 |
| `--color-brand-800` | `#142666` | brand 800 |
| `--color-brand-900` | `#0d1845` | brand 900 |
| `--color-accent-50` | `#edf9fd` | accent 50 |
| `--color-accent-100` | `#d0f0f9` | accent 100 |
| `--color-accent-200` | `#a6e5f4` | accent 200 |
| `--color-accent-300` | `#77d5f7` | accent 300 |
| `--color-accent-400` | `#4cc5ef` | accent 400 |
| `--color-accent-500` | `#2ab5e7` | accent 500 |
| `--color-accent-600` | `#1f93c1` | accent 600 |
| `--color-accent-700` | `#16719b` | accent 700 |
| `--color-accent-800` | `#0e4f75` | accent 800 |
| `--color-accent-900` | `#072d4f` | accent 900 |
| `--color-charcoal` | `#0a0a0a` | charcoal |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar renders logo and navigation links | see fidelity note below |
| 2 | `Hero` | Hero displays fullscreen intro banner | see fidelity note below |
| 3 | `Features` | Features display numbered cards | see fidelity note below |
| 4 | `VideoSection` | Video section shows thumbnail and content | see fidelity note below |
| 5 | `Services` | Services section with split layout | see fidelity note below |
| 6 | `LatestWorks` | Latest Works carousel | see fidelity note below |
| 7 | `Newsletter` | Newsletter subscription form | see fidelity note below |
| 8 | `Contact` | Contact form with split layout | see fidelity note below |
| 9 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The navbar SHALL display a logo on the left and navigation links (Home, About, Services, Work, Contact) with smooth scroll, plus a mobile hamburger toggle.

### `Hero`
The hero section SHALL display a fullscreen gradient background with centered "INTRODUCING" subtitle and "AZURELINE" main heading.

### `Features`
The features section SHALL display three numbered feature cards (01, 02, 03) with gradient text numbers, titles, and descriptions.

### `VideoSection`
The video section SHALL display a video thumbnail with a play button overlay and a heading with descriptive text below.

### `Services`
The services section SHALL display a dark left panel with "Services We Offered" heading and a white right panel with a 2x2 grid of service cards.

### `LatestWorks`
The latest works section SHALL display a heading and an image carousel with prev/next navigation.

### `Newsletter`
The newsletter section SHALL display a heading, email input, and a "Get Started" CTA button.

### `Contact`
The contact section SHALL display an image on the left and a form (name, email, message, send button) on the right.

### `Footer`
The footer SHALL display copyright text with the current year, social media icon links, and a link to Component Dock.

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
- **Provenance ban.** No file under `apps/azureline/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/azureline/public/CNAME` = `azureline.free.componentdock.com`
  and the package `homepage` = `https://azureline.free.componentdock.com`.
