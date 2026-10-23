# Rivulet — Design Notes

Reference: **Droppler** — `https://colorlib.com/wp/template/droppler/`  
Live preview: `https://preview.colorlib.com/theme/droppler/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/droppler-photography-blog-website-template.jpg  
Shipped: https://rivulet.free.componentdock.com

Rivulet is a single-page photography-blog template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Droppler" website template (see TEMPLATES.md, Photography Blog), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@400;700**, **PT Serif**

## Design tokens (`apps/rivulet/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-navy` | `#2b3344` | navy |
| `--color-overlay` | `#343451` | overlay |
| `--color-footer` | `#191919` | footer |
| `--color-quote` | `#3b455b` | quote |
| `--color-muted` | `#757b88` | muted |
| `--color-accent` | `#e76f7d` | accent |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-serif` | `'PT Serif', Georgia, serif` | font serif |
| `--animate-particle-drift` | `particle-drift 5s ease-in-out infinite` | animate particle drift |
| `--animate-heart-pulse` | `heart-pulse 1s ease-in-out infinite` | animate heart pulse |
| `--animate-scroll-bounce` | `scroll-bounce 1.6s ease-in-out infinite` | animate scroll bounce |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header and navigation | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `PostSection` | Blog post sections | see fidelity note below |
| 4 | `Testimonials` | Testimonials slider | see fidelity note below |
| 5 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a fixed header with the site logo and a hamburger toggle that opens a full-screen navigation menu.

### `Hero`
The system SHALL render a full-height hero with a dark navy background, an animated particle effect, a level-1 headline, a quote sub-line, and a scroll indicator.

### `PostSection`
The system SHALL render at least three full-screen blog post sections, each with a background image, dark overlay, date, category, title, excerpt, and a read-more / watch-video action.

### `Testimonials`
The system SHALL render a testimonial slider with a large quote glyph, rotating quotes, and author names.

### `Footer`
The system SHALL render a dark footer with the logo, social links, and a copyright bar with a pulsing heart.

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
- **Provenance ban.** No file under `apps/rivulet/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/rivulet/public/CNAME` = `rivulet.free.componentdock.com`
  and the package `homepage` = `https://rivulet.free.componentdock.com`.
