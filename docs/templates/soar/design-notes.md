# Soar — Design Notes

Reference: **Raptor** — `https://colorlib.com/wp/template/raptor/`  
Live preview: `https://preview.colorlib.com/theme/raptor/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/raptor-free-template.jpg  
Shipped: https://soar.free.componentdock.com

Soar is a single-page domain/hosting landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Raptor" website template design (see TEMPLATES.md), built under a **different name** with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600;700**, **Work Sans**

## Design tokens (`apps/soar/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#e6fbfc` | primary 50 |
| `--color-primary-100` | `#c4f4f6` | primary 100 |
| `--color-primary-200` | `#92e9ee` | primary 200 |
| `--color-primary-300` | `#5fd9e1` | primary 300 |
| `--color-primary-400` | `#2ebdc4` | primary 400 |
| `--color-primary-500` | `#27a7ad` | primary 500 |
| `--color-primary-600` | `#1f878c` | primary 600 |
| `--color-primary-700` | `#1b6d71` | primary 700 |
| `--color-primary-800` | `#17575a` | primary 800 |
| `--color-primary-900` | `#13474a` | primary 900 |
| `--color-accent-300` | `#a3f0d0` | Green accent (ColorLib hero gradient end + accents). |
| `--color-accent-400` | `#85eac2` | accent 400 |
| `--color-accent-500` | `#68e5b2` | accent 500 |
| `--color-accent-600` | `#3fd698` | accent 600 |
| `--color-skyblue` | `#78d5ef` | Light-blue button color (ColorLib .btn-primary). |
| `--color-limegreen` | `#22d47b` | Green CTA accent (ColorLib domain search). |
| `--color-ink` | `#3a4348` | ink |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Work Sans', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `DomainSearch` | Domain search section | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `Pricing` | Pricing section | see fidelity note below |
| 6 | `FunFacts` | Fun facts section | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `HowItWorks` | How it works section | see fidelity note below |
| 9 | `Newsletter` | Newsletter section | see fidelity note below |
| 10 | `Blog` | Blog section | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Soar", anchor links to the page's sections, a "Get started" button, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a headline and two buttons.

### `DomainSearch`
The system SHALL render a domain search section with a heading, a search form, and a list of domain extensions with prices.

### `Services`
The system SHALL render a services section with a heading and three service cards.

### `Pricing`
The system SHALL render a pricing section with a heading and four plans, each with a price and a "Get Started" button.

### `FunFacts`
The system SHALL render a fun facts section with a heading and four counter stats.

### `Testimonials`
The system SHALL render a testimonials section with a heading, a quote, and an author.

### `HowItWorks`
The system SHALL render a "How it works" section with a tab list and a feature description.

### `Newsletter`
The system SHALL render a newsletter section with a heading, a blurb, and an email form.

### `Blog`
The system SHALL render a blog section with a heading and three blog cards.

### `Footer`
The system SHALL render a footer with link columns, social links, and a copyright line.

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
- **Provenance ban.** No file under `apps/soar/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/soar/public/CNAME` = `soar.free.componentdock.com`
  and the package `homepage` = `https://soar.free.componentdock.com`.
