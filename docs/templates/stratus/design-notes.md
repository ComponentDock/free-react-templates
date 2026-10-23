# Stratus — Design Notes

Reference: **Cloud83** — `https://colorlib.com/wp/template/cloud83/`  
Live preview: `https://preview.colorlib.com/theme/cloud83/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/cloud83-free-template.jpg  
Shipped: https://stratus.free.componentdock.com

Stratus is a single-page web-hosting template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Cloud83" design (see TEMPLATES.md — line 360, Hosting section; first unchecked item whose prep did not exist on main), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600;700**

## Design tokens (`apps/stratus/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#25ae88` | brand |
| `--color-slate` | `#556080` | slate |
| `--color-softblue` | `#7fabda` | softblue |
| `--color-darktop` | `#1f2430` | darktop |
| `--color-darkbar` | `#171b26` | darkbar |
| `--color-light` | `#f4f7fa` | light |
| `--color-heading` | `#151414` | heading |
| `--color-body` | `#7c7c7c` | body |
| `--color-muted` | `#636363` | muted |
| `--font-sans` | `'Poppins', Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Semi-transparent header bar | see fidelity note below |
| 2 | `Hero` | Full-width hero slider | see fidelity note below |
| 3 | `Features` | Feature row | see fidelity note below |
| 4 | `Services` | Dark services section | see fidelity note below |
| 5 | `Trust` | Trust section | see fidelity note below |
| 6 | `Milestones` | Milestones band | see fidelity note below |
| 7 | `Cta` | Get-started CTA | see fidelity note below |
| 8 | `Footer` | Dark footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a semi-transparent dark header over the hero with the brand, primary links, and action buttons.

### `Hero`
The system SHALL render a full-width hero with a photographic background, a headline, supporting copy, and a "Read More" CTA.

### `Features`
The system SHALL render a white row of three feature cards with icon, title, and description.

### `Services`
The system SHALL render a dark image-backed services section with a white title and six hosting offerings around a central graphic.

### `Trust`
The system SHALL render a light about/trust section with a heading, photo, paragraph, and a four-item checklist.

### `Milestones`
The system SHALL render a solid slate-blue (#556080) statistics band with four counters.

### `Cta`
The system SHALL render a compact call-to-action band with a heading, subtext, and a green "Start" button.

### `Footer`
The system SHALL render a two-tone dark footer with brand info, social links, four link columns, and the bottom credit bar.

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
- **Provenance ban.** No file under `apps/stratus/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/stratus/public/CNAME` = `stratus.free.componentdock.com`
  and the package `homepage` = `https://stratus.free.componentdock.com`.
