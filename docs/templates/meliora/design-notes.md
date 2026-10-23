# Meliora — Design Notes

Reference: **Chariter** — `https://colorlib.com/wp/template/chariter/`  
Live preview: `https://preview.colorlib.com/theme/chariter/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/chariter-free-template.jpg  
Shipped: https://meliora.free.componentdock.com

Meliora is a charity / nonprofit landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Chariter" design (https://colorlib.com/wp/template/chariter/), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lora**, **Lora:wght@400;500;600;700**, **Roboto**

## Design tokens (`apps/meliora/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#c30047` | primary |
| `--color-primary-600` | `#c30047` | primary 600 |
| `--color-primary-700` | `#a3003c` | primary 700 |
| `--color-sweep` | `#e6115f` | sweep |
| `--color-hero` | `#ff6378` | hero |
| `--color-kicker` | `#7ea0ff` | kicker |
| `--color-plum` | `#301a22` | plum |
| `--color-muted` | `#6a6063` | muted |
| `--color-mist` | `#f9f9ff` | mist |
| `--color-lilac` | `#f0e9ff` | lilac |
| `--color-cardline` | `#f1f4f8` | cardline |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-serif` | `'Lora', ui-serif, Georgia, serif` | font serif |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header | see fidelity note below |
| 2 | `HeroSlider` | Hero slider | see fidelity note below |
| 3 | `CausesCarousel` | Causes carousel | see fidelity note below |
| 4 | `WhoWeAre` | — | no dedicated spec block |
| 5 | `CounterBand` | Counter band | see fidelity note below |
| 6 | `ServicesGrid` | Our services | see fidelity note below |
| 7 | `EmergencyBand` | Emergency care band | see fidelity note below |
| 8 | `JoinUs` | Join with Us | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Header`
The system SHALL render a header with a top utility bar and a main navigation bar.

### `HeroSlider`
The system SHALL render a full-height hero slider with three slides, a dark gradient overlay, headline, subtext, call-to-action, and vertical dot pagination.

### `CausesCarousel`
The system SHALL render a carousel of cause cards with photos, titles, progress and a Donate action.

### `WhoWeAre`
*anchors only* — Who we are · About Us · Who we are? · Learn More

### `CounterBand`
The system SHALL render a photo-background band with four statistics.

### `ServicesGrid`
The system SHALL render a centered icon grid of services.

### `EmergencyBand`
The system SHALL render a photo-background call-to-action band.

### `JoinUs`
The system SHALL render a centered callout with a Join Now button.

### `Footer`
The system SHALL render a dark four-column footer with a newsletter form and attribution.

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
- **Provenance ban.** No file under `apps/meliora/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/meliora/public/CNAME` = `meliora.free.componentdock.com`
  and the package `homepage` = `https://meliora.free.componentdock.com`.
