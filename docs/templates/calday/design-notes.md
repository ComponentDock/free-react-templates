# Calday — Design Notes

Reference: **Calendar 03** — `https://colorlib.com/wp/template/calendar-03/`  
Live preview: `https://preview.colorlib.com/theme/calendar-03/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/calendar-03.jpg  
Shipped: https://calday.free.componentdock.com

A dual side-by-side interactive calendar component built with React 19, Tailwind CSS 4, and TypeScript. Recreation of ColorLib "Calendar 03" (https://colorlib.com/wp/template/calendar-03/) as "CalDay".

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato**, **Lato:wght@300;400;700**

## Design tokens (`apps/calday/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-accent` | `#bd83ce` | accent |
| `--color-today` | `#bd83ce` | today |
| `--color-selected-bg` | `rgba(153, 153, 161, 0.2)` | selected bg |
| `--color-past` | `#d5d5d5` | past |
| `--color-future` | `#111111` | future |
| `--color-weekday` | `#000000` | weekday |
| `--color-chevron` | `#cccccc` | chevron |
| `--color-page` | `#ffffff` | page |
| `--color-heading` | `#000000` | heading |
| `--color-border-hover` | `#ededed` | border hover |
| `--font-family-sans` | `'Lato', system-ui, sans-serif` | font family sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Calendar` | Calendar navigation is independent | see fidelity note below |
| 2 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `Calendar`
Each calendar SHALL maintain its own month state so navigating one does not affect the other.

### `Footer`
The page footer SHALL contain a link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/calday/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/calday/public/CNAME` = `calday.free.componentdock.com`
  and the package `homepage` = `https://calday.free.componentdock.com`.
