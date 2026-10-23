# Loop — Design Notes

Reference: **Repeat** — `https://colorlib.com/wp/template/repeat/`  
Live preview: `https://preview.colorlib.com/theme/repeat/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/repeat-free-template.jpg  
Shipped: https://loop.free.componentdock.com

Loop is a digital agency landing page template recreating the ColorLib "Repeat" design. It features a dark navy + coral palette, Comfortaa display font, service slider, stat counters, and a three-column footer with Component Dock branding.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Comfortaa**, **Comfortaa:wght@400;700**, **Roboto**

## Design tokens (`apps/loop/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-coral-50` | `#fff5f3` | Brand palette — coral primary (#ff8e71), navy secondary (#003a70) |
| `--color-coral-100` | `#ffe8e3` | coral 100 |
| `--color-coral-200` | `#ffd1c7` | coral 200 |
| `--color-coral-300` | `#ffb3a3` | coral 300 |
| `--color-coral-400` | `#ff8e71` | coral 400 |
| `--color-coral-500` | `#ff6b4a` | coral 500 |
| `--color-coral-600` | `#e8533a` | coral 600 |
| `--color-coral-700` | `#c4402d` | coral 700 |
| `--color-coral-800` | `#a33527` | coral 800 |
| `--color-coral-900` | `#872f25` | coral 900 |
| `--color-navy-50` | `#f0f4f8` | navy 50 |
| `--color-navy-100` | `#d9e2ec` | navy 100 |
| `--color-navy-200` | `#bcccdc` | navy 200 |
| `--color-navy-300` | `#9fb3c8` | navy 300 |
| `--color-navy-400` | `#829ab1` | navy 400 |
| `--color-navy-500` | `#627d98` | navy 500 |
| `--color-navy-600` | `#486581` | navy 600 |
| `--color-navy-700` | `#334e68` | navy 700 |
| `--color-navy-800` | `#243b53` | navy 800 |
| `--color-navy-900` | `#102a43` | navy 900 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Comfortaa', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar renders all navigation links | see fidelity note below |
| 2 | `Hero` | Hero section displays headline and CTA | see fidelity note below |
| 3 | `About` | About section shows company description | see fidelity note below |
| 4 | `Services` | Services slider navigates between services | see fidelity note below |
| 5 | `Stats` | Stats section displays four counters | see fidelity note below |
| 6 | `Media` | Media section shows heading and images | see fidelity note below |
| 7 | `Footer` | Footer contains contact info and Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The navbar SHALL display the "Loop" logo and desktop navigation links (Home, Services, Pricing, About, Contact Us). On mobile it SHALL show a hamburger toggle.

### `Hero`
The hero section SHALL display a background image with dark overlay, the heading "We are pretty Awesome", descriptive subtext, and a "Our Services" CTA link.

### `About`
The about section SHALL display "About Us" subheading, a heading, an image, and descriptive text with a coral left border.

### `Services`
The services section SHALL display a service slider with 4 services (Web Design, Graphic Design, Web/Mobile Application, Brand Identity) and prev/next navigation.

### `Stats`
The stats section SHALL display four stat counters: Projects (230), Happy Clients (229), Leadership (8), Years Experience (15).

### `Media`
The media section SHALL display "Get anything done in one place" heading, description text, a CTA link, and two images.

### `Footer`
The footer SHALL display Contact info, Sources links, Links + social icons, and a copyright line with a Component Dock link.

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
- **Provenance ban.** No file under `apps/loop/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/loop/public/CNAME` = `loop.free.componentdock.com`
  and the package `homepage` = `https://loop.free.componentdock.com`.
