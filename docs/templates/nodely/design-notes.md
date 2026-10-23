# Nodely — Design Notes

Reference: **Ecobit** — `https://colorlib.com/wp/template/ecobit/`  
Live preview: `https://preview.colorlib.com/theme/ecobit/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ecobit-free-template.jpg  
Shipped: https://nodely.free.componentdock.com

Nodely is a single-page app/business landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Ecobit" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Barlow Semi Condensed**, **Barlow Semi Condensed:wght@400;500;600;700**, **Rajdhani**

## Design tokens (`apps/nodely/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fff4f0` | primary 50 |
| `--color-primary-100` | `#ffe6dc` | primary 100 |
| `--color-primary-200` | `#ffcbb8` | primary 200 |
| `--color-primary-300` | `#ffa585` | primary 300 |
| `--color-primary-400` | `#ff7a52` | primary 400 |
| `--color-primary-500` | `#ff5c2b` | primary 500 |
| `--color-primary-600` | `#ff4800` | primary 600 |
| `--color-primary-700` | `#d63c00` | primary 700 |
| `--color-primary-800` | `#a82f00` | primary 800 |
| `--color-primary-900` | `#7a2200` | primary 900 |
| `--color-paper` | `#f9f9ff` | paper |
| `--color-mist` | `#f0e9ff` | mist |
| `--color-fog` | `#f7f7f7` | fog |
| `--color-ink` | `#182028` | ink |
| `--color-body` | `#888888` | body |
| `--color-aqua` | `#4cd3e3` | aqua |
| `--color-skyblue` | `#38a4ff` | skyblue |
| `--color-violet` | `#7c32ff` | violet |
| `--color-sun` | `#f4e700` | sun |
| `--font-sans` | `'Barlow Semi Condensed', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-accent` | `'Rajdhani', ui-sans-serif, system-ui, sans-serif` | font accent |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Features` | Feature tiles | see fidelity note below |
| 4 | `About` | — | no dedicated spec block |
| 5 | `Opportunity` | — | no dedicated spec block |
| 6 | `Pricing` | Pricing section | see fidelity note below |
| 7 | `Reviews` | Reviews section | see fidelity note below |
| 8 | `Subscribe` | Subscribe band | see fidelity note below |
| 9 | `Clients` | Clients strip | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Nodely", anchor links to the page's sections, a "Sign up" button, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a headline, a blurb, and a "try for free" button.

### `Features`
The system SHALL render three feature tiles: "Fully Secured", "Unique Design", and "A Volunteer", each with an icon and a blurb.

### `About`
*anchors only* — About · Easy To Access Social Media · Learn More

### `Opportunity`
*anchors only* — Opportunities · With efficiency to unlock more opportunities · Learn More

### `Pricing`
The system SHALL render a pricing section with a heading and at least two plans, each with a price and a purchase button.

### `Reviews`
The system SHALL render a reviews carousel with quotes and navigation controls.

### `Subscribe`
The system SHALL render a subscribe band with a heading, a blurb, an email input, and a subscribe button.

### `Clients`
The system SHALL render a strip of client logo tiles between the subscribe band and the footer.

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
- **Provenance ban.** No file under `apps/nodely/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/nodely/public/CNAME` = `nodely.free.componentdock.com`
  and the package `homepage` = `https://nodely.free.componentdock.com`.
