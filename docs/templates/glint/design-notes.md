# Glint — Design Notes

Reference: **Prodent** — `https://colorlib.com/wp/template/prodent/`  
Live preview: `https://preview.colorlib.com/theme/prodent/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/prodent-free-template.jpg  
Shipped: https://glint.free.componentdock.com

Glint is a single-page dental clinic landing page in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Prodent" free template (source: https://colorlib.com/wp/template/prodent/), built under a DIFFERENT name (**Glint**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@400;500;600;700**

## Design tokens (`apps/glint/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#71cd29` | brand |
| `--color-brand-dark` | `#5ab021` | brand dark |
| `--color-ink` | `#2d2d2d` | Ink — dark headings (#2d2d2d from the original). |
| `--color-paper` | `#eff2f4` | Soapstone — light section background (#eff2f4 from the original). |
| `--color-mist` | `#696969` | Mist — muted body text (#696969 from the original). |
| `--color-primary-50` | `#f0fce3` | primary 50 |
| `--color-primary-100` | `#ddf8bd` | primary 100 |
| `--color-primary-200` | `#baf185` | primary 200 |
| `--color-primary-300` | `#97e94d` | primary 300 |
| `--color-primary-400` | `#7cd62e` | primary 400 |
| `--color-primary-500` | `#71cd29` | primary 500 |
| `--color-primary-600` | `#5ab021` | primary 600 |
| `--color-primary-700` | `#428a19` | primary 700 |
| `--color-primary-800` | `#357015` | primary 800 |
| `--color-primary-900` | `#2a5a12` | primary 900 |
| `--color-footer` | `#0d0d0d` | Footer dark (#0d0d0d from the original). |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | Original font: "Montserrat" (headings + body). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `HeaderInfoBar` | Header info bar | see fidelity note below |
| 2 | `Navbar` | Navigation bar | see fidelity note below |
| 3 | `Hero` | Hero slider | see fidelity note below |
| 4 | `CtaBanner` | CTA banner | see fidelity note below |
| 5 | `About` | About section | see fidelity note below |
| 6 | `Stats` | Stats counter | see fidelity note below |
| 7 | `Services` | Services grid | see fidelity note below |
| 8 | `Gallery` | Photo gallery | see fidelity note below |
| 9 | `Testimonials` | Testimonials | see fidelity note below |
| 10 | `Newsletter` | Newsletter section | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `HeaderInfoBar`
The header SHALL render a four-column info bar above the navbar with address, hours, phone, and appointment details, each with an icon.

### `Navbar`
The navbar SHALL display the Glint logo and navigation links (Home, About, Services, Blog, Contact).

### `Hero`
The hero section SHALL render a two-slide carousel with dark overlay on dental images, heading, paragraph, and green CTA button.

### `CtaBanner`
A full-width green banner SHALL appear below the hero with a consultation prompt and a light button.

### `About`
The about section SHALL display an image on the left and descriptive text on the right, with an awards image below.

### `Stats`
A dark-background section SHALL display 4 dental statistics with icons.

### `Services`
A services section SHALL display 6 service cards in a 3-column grid.

### `Gallery`
A gallery section SHALL display 4 placeholder images in a row.

### `Testimonials`
A testimonials section SHALL display quotes with author name, role, and photo.

### `Newsletter`
A newsletter section SHALL render on a green background with an email input and subscribe button.

### `Footer`
The footer SHALL render a three-column top section and a copyright bar with Component Dock link.

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
- **Provenance ban.** No file under `apps/glint/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/glint/public/CNAME` = `glint.free.componentdock.com`
  and the package `homepage` = `https://glint.free.componentdock.com`.
