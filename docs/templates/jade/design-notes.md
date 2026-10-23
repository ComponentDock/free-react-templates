# Jade — Design Notes

Reference: **Accordion 20** — `https://colorlib.com/wp/template/accordion-20/`  
Live preview: `https://preview.colorlib.com/theme/accordion-20/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/accordion-20.jpg  
Shipped: https://jade.free.componentdock.com

An elegant FAQ / accordion template built with React 19, TypeScript, and Tailwind CSS 4. Recreation of ColorLib Accordion 20 as **Jade**.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/jade/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#059669` | primary |
| `--color-primary-hover` | `#047857` | primary hover |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Hero & Heading` | Hero & Heading | see fidelity note below |
| 2 | `Interactive Accordion` | Interactive Accordion | see fidelity note below |
| 3 | `Footer` | Footer | see fidelity note below |
| 4 | `Component Dock attribution` | Component Dock attribution | see fidelity note below |

## Section-by-section fidelity

### `Hero & Heading`
Users SHALL see a clear title and description representing the accordion showcase.

### `Interactive Accordion`
Users SHALL be able to expand and collapse accordion items interactively.

### `Footer`
Users SHALL see a copyright footer with a branded link to Component Dock.

### `Component Dock attribution`
The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.

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
- **Provenance ban.** No file under `apps/jade/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/jade/public/CNAME` = `jade.free.componentdock.com`
  and the package `homepage` = `https://jade.free.componentdock.com`.
