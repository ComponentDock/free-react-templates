# Jockford — Design Notes

Reference: **Jackson** — `https://colorlib.com/wp/template/jackson/`  
Live preview: `https://preview.colorlib.com/theme/jackson/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/jackson-free-personal-resume-website-template.jpg  
Shipped: https://jockford.free.componentdock.com

Jockford is a personal resume/portfolio website template with a fixed left sidebar navigation, full-height hero slider, and single-page scrollable sections. It features a clean, modern, professional aesthetic with a blue accent color, icon cards, progress bars, accordion, timeline, and filterable portfolio grid.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@300;400;500;600;700**

## Design tokens (`apps/jockford/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#0066ff` | brand |
| `--color-brand-hover` | `#0052cc` | brand hover |
| `--color-text-primary` | `#1a1a1a` | text primary |
| `--color-text-secondary` | `#555555` | text secondary |
| `--color-text-muted` | `#888888` | text muted |
| `--color-bg-primary` | `#ffffff` | bg primary |
| `--color-bg-secondary` | `#f8f9fa` | bg secondary |
| `--color-bg-tertiary` | `#f1f3f5` | bg tertiary |
| `--color-border` | `#e5e7eb` | border |
| `--font-sans` | `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Sidebar` | Sidebar Navigation | see fidelity note below |
| 2 | `Hero` | Hero Section | see fidelity note below |
| 3 | `About` | About Section | see fidelity note below |
| 4 | `Services` | Services Section | see fidelity note below |
| 5 | `Skills` | Skills Section | see fidelity note below |
| 6 | `Education` | Education Section | see fidelity note below |
| 7 | `Experience` | Experience Section | see fidelity note below |
| 8 | `Work` | Work / Portfolio Section | see fidelity note below |
| 9 | `Blog` | Blog Section | see fidelity note below |
| 10 | `Contact` | Contact Section | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Sidebar`
The template SHALL render a fixed left sidebar (~250px) with a circular avatar, author name, role, navigation links, social icons, dark mode toggle, and footer text.

### `Hero`
The template SHALL render a full-viewport-height hero section with a background image, dark gradient overlay, headline, subtitle, and CTA buttons.

### `About`
The template SHALL render an About section with a heading, bio paragraph, 4 stat cards, and a "Hire me" button.

### `Services`
The template SHALL render a Services section with 6 service cards in a grid layout.

### `Skills`
The template SHALL render a Skills section with 6 animated progress bars.

### `Education`
The template SHALL render an Education section with 5 collapsible accordion items.

### `Experience`
The template SHALL render an Experience section with a centered vertical timeline and 5 entries alternating sides.

### `Work`
The template SHALL render a Work section with filter tabs and a 2-column portfolio grid with hover overlays.

### `Blog`
The template SHALL render a Blog section with 1 featured card and 2 standard cards.

### `Contact`
The template SHALL render a Contact section with 3 contact info items and a contact form.

### `Footer`
The template SHALL render a footer with copyright text, Component Dock attribution link, and social media links.

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
- **Provenance ban.** No file under `apps/jockford/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/jockford/public/CNAME` = `jockford.free.componentdock.com`
  and the package `homepage` = `https://jockford.free.componentdock.com`.
