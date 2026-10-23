# Homely — Design Notes

Reference: **Easylo** — `https://colorlib.com/wp/template/easylo/`  
Live preview: `https://preview.colorlib.com/theme/easylo/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/easylo-colorlib-template.jpg  
Shipped: https://homely.free.componentdock.com

Homely is a single-page online-loan / personal-finance landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Easylo" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Chivo**, **Chivo:wght@300;400;700;900**, **Inter**

## Design tokens (`apps/homely/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#10c98f` | brand |
| `--color-brand-deep` | `#0f4332` | brand deep |
| `--color-brand-label` | `#0c8760` | brand label |
| `--color-ink` | `#0f4332` | ink |
| `--color-body` | `#4c5753` | body |
| `--color-muted` | `#6d6d6d` | muted |
| `--color-meta` | `#a4aca9` | meta |
| `--color-quote` | `#d5ece5` | quote |
| `--color-mint` | `#e4f1ed` | mint |
| `--color-soft` | `#f4fcfa` | soft |
| `--color-faint` | `#f1fbff` | faint |
| `--color-header` | `#26be9f` | header |
| `--font-sans` | `'Chivo', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Inter', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `Services` | Services 1 | see fidelity note below |
| 4 | `About` | About 1 | see fidelity note below |
| 5 | `WhyChooseUs` | Services 2 (Why choose us) | see fidelity note below |
| 6 | `Testimonials` | Testimonials | see fidelity note below |
| 7 | `Blog` | Blog | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a header with the brand wordmark, nav links, a green "Apply For Loan" call-to-action, and a working mobile menu.

### `Hero`
The system SHALL render a split hero with marketing copy and a floating loan-calculator card on a photo background with a green overlay.

### `Services`
The system SHALL render a "Solutions for every business need." section with three labeled service cards.

### `About`
The system SHALL render a mint about section with a photo, a floating green "99% Customer Satisfaction" badge, a heading, and three icon rows.

### `WhyChooseUs`
The system SHALL render a "Why choose us?" section with four centered feature cards.

### `Testimonials`
The system SHALL render a dark-green testimonial carousel with distinct customer quotes, avatars, names, and roles.

### `Blog`
The system SHALL render a "Latest News" section with three distinct blog cards, each with an image, a date, a title, an excerpt, and a link.

### `Footer`
The system SHALL render a mint footer with four widgets and a copyright bar linking to Component Dock.

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
- **Provenance ban.** No file under `apps/homely/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/homely/public/CNAME` = `homely.free.componentdock.com`
  and the package `homepage` = `https://homely.free.componentdock.com`.
