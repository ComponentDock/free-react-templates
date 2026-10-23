# Citadel — Design Notes

Reference: **Durg** — `https://colorlib.com/wp/template/durg/`  
Live preview: `https://preview.colorlib.com/theme/durg/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/durg-free-template.jpg  
Shipped: https://citadel.free.componentdock.com

Citadel is an industrial/construction company landing page template. It showcases industrial services (construction, mechanical engineering, bridge construction), project portfolio, company info (location, hours, contact), and a call-to-action for industrial consulting.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Rubik**, **Rubik:wght@300;400;500;700**

## Design tokens (`apps/citadel/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff5e13` | brand |
| `--color-brand-dark` | `#e04e0a` | brand dark |
| `--color-ink` | `#020c26` | Ink — dark navy headings (#020c26 from the original). |
| `--color-ink-dark` | `#010816` | ink dark |
| `--color-smoke` | `#f5f5f5` | Smoke — light section background (#f5f5f5 from the original). |
| `--color-mist` | `#5c5c5c` | Mist — muted body text (#5c5c5c from the original). |
| `--color-primary-50` | `#fff4ed` | primary 50 |
| `--color-primary-100` | `#ffe6d5` | primary 100 |
| `--color-primary-200` | `#ffc8aa` | primary 200 |
| `--color-primary-300` | `#ffa274` | primary 300 |
| `--color-primary-400` | `#ff7c3d` | primary 400 |
| `--color-primary-500` | `#ff5e13` | primary 500 |
| `--color-primary-600` | `#e04e0a` | primary 600 |
| `--color-primary-700` | `#ba3f08` | primary 700 |
| `--color-primary-800` | `#93320a` | primary 800 |
| `--color-primary-900` | `#782b0c` | primary 900 |
| `--font-sans` | `'Rubik', ui-sans-serif, system-ui, sans-serif` | Original font: "Rubik" (headings + body). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header with navigation and contact info | see fidelity note below |
| 2 | `HeroSlider` | Hero slider with industrial messaging | see fidelity note below |
| 3 | `BrandLogos` | Brand logos section | see fidelity note below |
| 4 | `Services` | Services section with 3 service cards | see fidelity note below |
| 5 | `Projects` | Projects section with dark overlay | see fidelity note below |
| 6 | `Cta` | CTA section | see fidelity note below |
| 7 | `LocationInfo` | Location info section with 3 cards | see fidelity note below |
| 8 | `Footer` | Footer with company info and Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Header`
The template SHALL display a top information bar with phone and email, plus a main navigation with logo, links, search icon, and "Get a Quote" CTA button.

### `HeroSlider`
The template SHALL display a hero section with tagline, heading, and CTA button on a dark background with white card overlay.

### `BrandLogos`
The template SHALL display 6 brand/partner logos on a gray background.

### `Services`
The template SHALL display a services section with section title and 3 service cards (image, title, description, Read More link).

### `Projects`
The template SHALL display a projects section with dark background overlay, left-aligned title/description, and right-aligned project cards.

### `Cta`
The template SHALL display a call-to-action section with heading, description, and action button.

### `LocationInfo`
The template SHALL display location information in 3 columns: address, opening hours, and contact details.

### `Footer`
The template SHALL display a footer with logo, company links, solutions links, branch offices, social icons, and copyright linking to Component Dock.

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
- **Provenance ban.** No file under `apps/citadel/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/citadel/public/CNAME` = `citadel.free.componentdock.com`
  and the package `homepage` = `https://citadel.free.componentdock.com`.
