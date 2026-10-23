# Cleanpage — Design Notes

Reference: **Whitespace** — `https://colorlib.com/wp/template/whitespace/`  
Live preview: `https://preview.colorlib.com/theme/whitespace/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/whitespace-free-template.jpg  
Shipped: https://cleanpage.free.componentdock.com

A Business Consulting template with hero section, about section, services grid, counter stats, projects gallery and case study sections. Recreation of ColorLib's **Whitespace** business consulting template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700;800**, **Work Sans**

## Design tokens (`apps/cleanpage/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#4ac7ea` | Brand palette — teal/cyan #4ac7ea accents, dark bg #141313, light sections #f7f7f7. |
| `--color-brand-dark` | `#34c0e7` | brand dark |
| `--color-ink` | `#1a1a1a` | Ink — dark text (#1a1a1a from original). |
| `--color-ink-dark` | `#141313` | ink dark |
| `--color-paper` | `#f7f7f7` | Soapstone — light section background (#f7f7f7). |
| `--color-mist` | `#666666` | Mist — muted body text (#666666 from the original). |
| `--color-primary-50` | `#ecfaff` | primary 50 |
| `--color-primary-100` | `#d0f3ff` | primary 100 |
| `--color-primary-200` | `#a8e9ff` | primary 200 |
| `--color-primary-300` | `#78d5ef` | primary 300 |
| `--color-primary-400` | `#56caeb` | primary 400 |
| `--color-primary-500` | `#4ac7ea` | primary 500 |
| `--color-primary-600` | `#34c0e7` | primary 600 |
| `--color-primary-700` | `#1daad4` | primary 700 |
| `--color-primary-800` | `#1a8aab` | primary 800 |
| `--color-primary-900` | `#1b7089` | primary 900 |
| `--font-sans` | `'Work Sans', ui-sans-serif, system-ui, sans-serif` | Original fonts: "Poppins" (headings) + "Work Sans" (body). |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero Section | see fidelity note below |
| 3 | `About` | About Section | see fidelity note below |
| 4 | `Services` | Services Grid | see fidelity note below |
| 5 | `Counter` | Counter Stats | see fidelity note below |
| 6 | `Projects` | Projects Gallery | see fidelity note below |
| 7 | `Testimonials` | Testimonials | see fidelity note below |
| 8 | `CaseStudy` | Case Study | see fidelity note below |
| 9 | `Pricing` | Pricing | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL render a dark fixed navbar with the brand name "Cleanpage" and navigation links (Home, About, Work, Pricing, Blog, Contact). The navbar SHALL include a mobile hamburger toggle.

### `Hero`
The template SHALL render a split hero with a text panel on the left and a background image on the right.

### `About`
The template SHALL render an about section with 4 service items and a heading.

### `Services`
The template SHALL render a 4-column grid of service cards.

### `Counter`
The template SHALL render a dark parallax section with 4 statistics.

### `Projects`
The template SHALL render a masonry-style grid of 6 project cards.

### `Testimonials`
The template SHALL render 3 testimonial cards with quotes, names, and positions.

### `CaseStudy`
The template SHALL render 3 blog-style case study cards.

### `Pricing`
The template SHALL render 4 pricing tier cards.

### `Footer`
The template SHALL render a dark footer with brand, useful links, quick links, contact info, and a link to Component Dock.

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
- **Provenance ban.** No file under `apps/cleanpage/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/cleanpage/public/CNAME` = `cleanpage.free.componentdock.com`
  and the package `homepage` = `https://cleanpage.free.componentdock.com`.
