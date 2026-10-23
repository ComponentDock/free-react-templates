# Ecopulse — Design Notes

Reference: **Environmentalorganization** — `https://colorlib.com/wp/template/environmentalorganization/`  
Live preview: `https://preview.colorlib.com/theme/environmentalorganization/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/environmentalorganization-free-template.jpg  
Shipped: https://ecopulse.free.componentdock.com

EcoPulse is a single-page environmental organization landing page in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Environmentalorganization" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;400;500;600;700**

## Design tokens (`apps/ecopulse/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#09cc7f` | brand |
| `--color-brand-dark` | `#07b56e` | brand dark |
| `--color-brand-light` | `rgba(9, 204, 127, 0.1)` | brand light |
| `--color-cta-left` | `#46c0be` | Gradient stop colors for CTA buttons. |
| `--color-cta-right` | `#6dd56f` | cta right |
| `--color-subtitle-green` | `#70d76a` | Section subtitle green. |
| `--color-ink` | `#425140` | Heading text — dark green-gray. |
| `--color-body` | `#10285d` | Body text — dark navy. |
| `--color-nav-link` | `#072366` | Nav link color. |
| `--color-hero-overlay` | `rgba(35, 39, 35, 0.4)` | Hero overlay. |
| `--color-paper` | `#eefffa` | Light section background. |
| `--color-footer-bg` | `#1a2332` | Footer dark bg. |
| `--color-mist` | `#8899aa` | Muted text. |
| `--color-divider` | `#dde4ea` | Divider. |
| `--color-primary-50` | `#e6faf1` | primary 50 |
| `--color-primary-100` | `#b3f0d6` | primary 100 |
| `--color-primary-200` | `#80e6bb` | primary 200 |
| `--color-primary-300` | `#4ddca0` | primary 300 |
| `--color-primary-400` | `#26d48c` | primary 400 |
| `--color-primary-500` | `#09cc7f` | primary 500 |
| `--color-primary-600` | `#07b56e` | primary 600 |
| `--color-primary-700` | `#05995b` | primary 700 |
| `--color-primary-800` | `#037d48` | primary 800 |
| `--color-primary-900` | `#016135` | primary 900 |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero slider | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `Support` | Support section | see fidelity note below |
| 6 | `Cases` | Cases section | see fidelity note below |
| 7 | `Blog` | Blog section | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a sticky top navigation bar with the site name "EcoPulse" and links to all major sections, with a hamburger toggle for mobile viewports.

### `Hero`
The system SHALL render a full-width hero section with a rotating image carousel, dark overlay, heading, subtitle, CTA buttons, and dot navigation.

### `About`
The system SHALL render an about section with a light green background (#EEFFFA), split layout with text and image, and a video play button overlay.

### `Services`
The system SHALL render three service cards in a row with icons, titles, and descriptions.

### `Support`
The system SHALL render a support section with floating counter badges and a "Join Us Now" outline button.

### `Cases`
The system SHALL render three case study cards with images, titles, descriptions, and animated progress bars.

### `Blog`
The system SHALL render two blog post cards with images, titles, and excerpts.

### `Footer`
The system SHALL render a dark footer with logo, social media icons, three link columns, copyright, and Component Dock attribution.

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
- **Provenance ban.** No file under `apps/ecopulse/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/ecopulse/public/CNAME` = `ecopulse.free.componentdock.com`
  and the package `homepage` = `https://ecopulse.free.componentdock.com`.
