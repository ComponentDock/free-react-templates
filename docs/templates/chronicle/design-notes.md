# Chronicle — Design Notes

Reference: **Content** — `https://colorlib.com/wp/template/content/`  
Live preview: `https://preview.colorlib.com/theme/content/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/content-free-template.jpg  
Shipped: https://chronicle.free.componentdock.com

Chronicle is a single-page blog/magazine template in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Content" entry in TEMPLATES.md (Blog category), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Jost**, **Jost:wght@400;500;600;700**, **Playfair Display**

## Design tokens (`apps/chronicle/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#c1a57b` | brand |
| `--color-brand-light` | `#c9b18c` | brand light |
| `--color-ink` | `#000000` | ink |
| `--color-meta` | `#989898` | meta |
| `--color-paper` | `#f0f0f0` | paper |
| `--color-tile` | `#f8f9fa` | tile |
| `--color-line` | `#e9ecef` | line |
| `--font-sans` | `'Jost', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Playfair Display', Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Top bar | see fidelity note below |
| 2 | `NavMenu` | Navigation menu | see fidelity note below |
| 3 | `HeroSlider` | Hero slider | see fidelity note below |
| 4 | `HighlightSection` | Today's Highlight section | see fidelity note below |
| 5 | `CategorySections` | Category sections | see fidelity note below |
| 6 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `TopBar`
The system SHALL render a top utility bar with a Sign In link, a centered text logo, a search toggle and a mobile menu toggle.

### `NavMenu`
The system SHALL render a centered category menu below the top bar with the links Food and Drinks, Categories, Travel, Elements, Inner Page and Contact us.

### `HeroSlider`
The system SHALL render a full-height hero slider with slides that each carry a white post card (share icons, category, title, excerpt, meta) and slider navigation.

### `HighlightSection`
The system SHALL render a "Today's Highlight" section with two vertical post entries and three horizontal post entries, plus a sticky newsletter card in the right column.

### `CategorySections`
The system SHALL render two half-width category sections (Lifestyle and Travel) and a four-card Food and Drink section.

### `Footer`
The system SHALL render a centered footer with social icon links, a copyright line and legal links.

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
- **Provenance ban.** No file under `apps/chronicle/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/chronicle/public/CNAME` = `chronicle.free.componentdock.com`
  and the package `homepage` = `https://chronicle.free.componentdock.com`.
