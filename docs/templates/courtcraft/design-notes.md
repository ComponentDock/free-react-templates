# Courtcraft — Design Notes

Reference: **Lawmaker** — `https://colorlib.com/wp/template/lawmaker/`  
Live preview: `https://preview.colorlib.com/theme/lawmaker/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/lawmaker-free-template.jpg  
Shipped: https://courtcraft.free.componentdock.com

Courtcraft is a single-page law firm / attorney website landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Lawmaker" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Work Sans**, **Work Sans:wght@400;500;600;700**

## Design tokens (`apps/courtcraft/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#2f89fc` | brand |
| `--color-brand-dark` | `#3f52e3` | brand dark |
| `--color-text-muted` | `#828282` | text muted |
| `--color-overlay-dark` | `rgba(0, 0, 0, 0.7)` | overlay dark |
| `--color-overlay-mid` | `rgba(0, 0, 0, 0.5)` | overlay mid |
| `--color-overlay-light` | `rgba(0, 0, 0, 0.4)` | overlay light |
| `--font-heading` | `'Work Sans', sans-serif` | font heading |
| `--font-body` | `'Work Sans', sans-serif` | font body |
| `--font-sans` | `'Work Sans', sans-serif` | font sans |
| `--color-primary-500` | `#2f89fc` | primary 500 |
| `--color-primary-600` | `#3f52e3` | primary 600 |
| `--color-primary-700` | `#3446c0` | primary 700 |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `HeroSlider` | Hero slider | see fidelity note below |
| 3 | `StatsCounter` | Statistics counter | see fidelity note below |
| 4 | `ServicesGrid` | Services / Practice Areas | see fidelity note below |
| 5 | `CtaBanner` | CTA parallax banner | see fidelity note below |
| 6 | `Testimonials` | Testimonials | see fidelity note below |
| 7 | `ContactForm` | Contact form | see fidelity note below |
| 8 | `BlogPosts` | Blog posts | see fidelity note below |
| 9 | `AttorneyTeam` | Attorney team | see fidelity note below |
| 10 | `IntroBanner` | Intro banner | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Toggle navigation

### `HeroSlider`
The system SHALL render a full-width hero with a background-image slider, dark overlay gradient, centered headline, and CTA button.

### `StatsCounter`
The system SHALL render a statistics section with 4 counters over a parallax background image.

### `ServicesGrid`
The system SHALL render a content section with a video/image block, a heading, and a 6-card grid of practice areas.

### `CtaBanner`
The system SHALL render a call-to-action section with a parallax background image, heading, text, and a large button.

### `Testimonials`
The system SHALL render a testimonials section with client quotes in a carousel.

### `ContactForm`
The system SHALL render a contact section with a form on the right and a background image on the left.

### `BlogPosts`
The system SHALL render a blog section with a heading and a 3-column grid of blog post cards.

### `AttorneyTeam`
The system SHALL render an attorney team section with a heading and a 3-column grid of attorney cards.

### `IntroBanner`
The system SHALL render a 3-column intro banner with contact info and a CTA button.

### `Footer`
The system SHALL render a footer with 4 widget columns and a copyright bar.

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
- **Provenance ban.** No file under `apps/courtcraft/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/courtcraft/public/CNAME` = `courtcraft.free.componentdock.com`
  and the package `homepage` = `https://courtcraft.free.componentdock.com`.
