# Conclave — Design Notes

Reference: **Umeet** — `https://colorlib.com/wp/template/umeet/`  
Live preview: `https://preview.colorlib.com/theme/umeet/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/umeet-free-template.jpg  
Shipped: https://conclave.free.componentdock.com

Conclave is a single-page event/conference landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Umeet" free template (source: https://colorlib.com/wp/template/umeet/), built under a DIFFERENT name (**Conclave**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Oswald**, **Oswald:wght@400;500;600;700**, **Roboto**

## Design tokens (`apps/conclave/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#3b1d82` | primary |
| `--color-primary-deep` | `#2a1260` | primary deep |
| `--color-accent` | `#ea0763` | accent |
| `--color-accent-deep` | `#c90656` | accent deep |
| `--color-light` | `#f7f7f7` | light |
| `--color-footer` | `#111429` | footer |
| `--color-text` | `#242424` | text |
| `--color-muted` | `#797979` | muted |
| `--font-heading` | `'Oswald', ui-sans-serif, system-ui, sans-serif` | Oswald (headings) + Roboto (body) via Google Fonts <link> in index.html. |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `HeroBanner` | Hero Banner | see fidelity note below |
| 3 | `InnovationCountdown` | Innovation/Countdown section | see fidelity note below |
| 4 | `Features` | Features section | see fidelity note below |
| 5 | `Speakers` | Speakers section | see fidelity note below |
| 6 | `Schedule` | Schedule section | see fidelity note below |
| 7 | `Pricing` | Pricing section | see fidelity note below |
| 8 | `Sponsors` | Sponsors section | see fidelity note below |
| 9 | `Gallery` | Gallery section | see fidelity note below |
| 10 | `Blog` | Blog section | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The navbar MUST display logo, navigation links, and a CTA button.

### `HeroBanner`
The hero MUST display event information with a background image.

### `InnovationCountdown`
The countdown section MUST display a countdown timer and event description.

### `Features`
The features section MUST display 3 feature cards.

### `Speakers`
The speakers section MUST display speaker cards in a grid.

### `Schedule`
The schedule section MUST display tabbed day views.

### `Pricing`
The pricing section MUST display 3 tier cards.

### `Sponsors`
The sponsors section MUST display sponsor logos in tiers.

### `Gallery`
The gallery section MUST display an image grid with hover overlay.

### `Blog`
The blog section MUST display 3 blog preview cards.

### `Footer`
The footer MUST display 4 columns and a Component Dock link.

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
- **Provenance ban.** No file under `apps/conclave/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/conclave/public/CNAME` = `conclave.free.componentdock.com`
  and the package `homepage` = `https://conclave.free.componentdock.com`.
