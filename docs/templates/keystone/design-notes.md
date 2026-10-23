# Keystone — Design Notes

Reference: **Archi** — `https://colorlib.com/wp/template/archi/`  
Live preview: `https://preview.colorlib.com/theme/archi/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/archi-free-template.jpg  
Shipped: https://keystone.free.componentdock.com

Keystone is a single-page architecture studio landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Archi" website template design (see TEMPLATES.md), built under a **different name** with the monorepo stack: Vite + React 19 + Tailwind CSS 4

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600**, **Rajdhani**

## Design tokens (`apps/keystone/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff1f1f` | brand |
| `--color-brand-dark` | `#d91818` | Deeper red for hover states. |
| `--color-navy` | `#1f2b7b` | Navy — headlines and dark accents (#1f2b7b). |
| `--color-ink` | `#1d2434` | Ink — section title color (#1d2434). |
| `--color-paper` | `#f9f9ff` | Light section backgrounds (#f9f9ff, #f0e9ff). |
| `--color-lilac` | `#f0e9ff` | lilac |
| `--color-mist` | `#888888` | Muted secondary text (#888888). |
| `--color-coal` | `#292c37` | Footer charcoal (#292c37 from the original stylesheet). |
| `--color-primary-50` | `#fff1f1` | primary 50 |
| `--color-primary-100` | `#ffdfdf` | primary 100 |
| `--color-primary-200` | `#ffbfbf` | primary 200 |
| `--color-primary-300` | `#ff9494` | primary 300 |
| `--color-primary-400` | `#ff5c5c` | primary 400 |
| `--color-primary-500` | `#ff1f1f` | primary 500 |
| `--color-primary-600` | `#e81a1a` | primary 600 |
| `--color-primary-700` | `#c21515` | primary 700 |
| `--color-primary-800` | `#9c1212` | primary 800 |
| `--color-primary-900` | `#7d1010` | primary 900 |
| `--font-display` | `'Rajdhani', ui-sans-serif, system-ui, sans-serif` | Original fonts: "Rajdhani" (display) + "Poppins" (body), Google Fonts. |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `Work` | Popular work section | see fidelity note below |
| 6 | `Experience` | Experience band | see fidelity note below |
| 7 | `Team` | Team section | see fidelity note below |
| 8 | `Blog` | Blog section | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Keystone", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero over a darkened building photo with a kicker, a level-1 headline, a blurb, and a "Contact Us" button.

### `About`
The system SHALL render an about section with a heading "52 Years of Experience in This Area", a blurb, an "About Us" button, and two photos.

### `Services`
The system SHALL render a services section with a heading and three service cards: "Architecture", "Interior Design", and "Urban Design".

### `Work`
The system SHALL render a portfolio section with a heading, a photo grid, and three project cards with locations.

### `Experience`
The system SHALL render an experience band with a blurb and an "About Us" button.

### `Team`
The system SHALL render a team section with a heading and three team member cards (name + role + photo).

### `Blog`
The system SHALL render a blog section with a heading and two article cards, each with a "Read More" link.

### `Footer`
The system SHALL render a footer with link columns, social links, and a copyright line.

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
- **Provenance ban.** No file under `apps/keystone/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/keystone/public/CNAME` = `keystone.free.componentdock.com`
  and the package `homepage` = `https://keystone.free.componentdock.com`.
