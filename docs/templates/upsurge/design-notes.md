# Upsurge — Design Notes

Reference: **Ithost** — `https://colorlib.com/wp/template/ithost/`  
Live preview: `https://preview.colorlib.com/theme/ithost/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ithost-free-template.jpg  
Shipped: https://upsurge.free.componentdock.com

Upsurge is a single-page web-hosting landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Ithost" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@400;500;600;700**

## Design tokens (`apps/upsurge/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-100` | `#fde8ee` | primary 100 |
| `--color-primary-200` | `#f9bdd1` | primary 200 |
| `--color-primary-300` | `#f48db0` | primary 300 |
| `--color-primary-400` | `#ef5d8e` | primary 400 |
| `--color-primary-500` | `#e83c73` | primary 500 |
| `--color-primary-600` | `#eb2b63` | primary 600 |
| `--color-primary-700` | `#c72253` | primary 700 |
| `--color-primary-800` | `#a01b43` | primary 800 |
| `--color-primary-900` | `#7a1433` | primary 900 |
| `--color-indigo-deep` | `#2e1779` | Deep indigo / near-black purple pair for the dark space sections. |
| `--color-near-black` | `#0a0228` | near black |
| `--color-mist` | `#eef6f9` | Section accents and footer surfaces from the reference. |
| `--color-footer-top` | `#200545` | footer top |
| `--color-footer-bottom` | `#1b043b` | footer bottom |
| `--color-ink` | `#1c1c1c` | ink |
| `--color-body-gray` | `#585858` | body gray |
| `--color-eyebrow` | `#8e8e8e` | eyebrow |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | Montserrat for everything (Google Fonts via index.html). |
| `--font-heading` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Hero section | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Features` | Features section | see fidelity note below |
| 4 | `DomainSearch` | Domain search section | see fidelity note below |
| 5 | `SkillsTestimonials` | Skills & testimonials section | see fidelity note below |
| 6 | `Pricing` | Pricing section | see fidelity note below |
| 7 | `Banner` | Banner section | see fidelity note below |
| 8 | `Footer` | Footer widgets | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a full-height dark hero with a headline, supporting copy, a call-to-action button, and a rocket graphic.

### `Hero`
The system SHALL render a full-height dark hero with a headline, supporting copy, a call-to-action button, and a rocket graphic.

### `Features`
The system SHALL render a white section with a centered section title and a 3-column grid of six feature cards, each with a circular magenta icon.

### `DomainSearch`
The system SHALL render a dark section with a white section title and a domain-search form with an input and a search button.

### `SkillsTestimonials`
The system SHALL render a two-column section with animated skill progress bars on the left and a testimonial slider on the right.

### `Pricing`
The system SHALL render three pricing plan cards with a highlighted middle "gold" plan.

### `Banner`
The system SHALL render a dark call-to-action band with a headline and a button.

### `Footer`
The system SHALL render a dark footer-top band with three widgets: about + social, useful links, and latest posts.

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
- **Provenance ban.** No file under `apps/upsurge/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/upsurge/public/CNAME` = `upsurge.free.componentdock.com`
  and the package `homepage` = `https://upsurge.free.componentdock.com`.
