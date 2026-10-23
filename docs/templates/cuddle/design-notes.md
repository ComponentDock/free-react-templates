# Cuddle — Design Notes

Reference: **Lovecare** — `https://colorlib.com/wp/template/lovecare/`  
Live preview: `https://preview.colorlib.com/theme/lovecare/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/lovecare-colorlib-template.jpg  
Shipped: https://cuddle.free.componentdock.com

A charity/donation landing page template with hero, donation widget, causes carousel, volunteer showcase, testimonials, blog, and footer — all styled with warm gold/teal brand colors, Patrick Hand display font, and Poppins body font.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Patrick Hand**, **Poppins**

## Design tokens (`apps/cuddle/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#d49a3a` | brand |
| `--color-brand-hover` | `#c08a2e` | brand hover |
| `--color-brand-light` | `#f3f0eb` | brand light |
| `--color-teal` | `#042628` | teal |
| `--color-teal-light` | `#efebe5` | teal light |
| `--color-ink` | `#042628` | Ink — dark teal headings/footer (#042628 from the original). |
| `--color-ink-dark` | `#031a1b` | ink dark |
| `--color-paper` | `#f3f0eb` | Paper — light section background (#f3f0eb from the original). |
| `--color-mist` | `#666666` | Mist — muted body text. |
| `--color-primary-50` | `#fdf6ec` | primary 50 |
| `--color-primary-100` | `#fae9d2` | primary 100 |
| `--color-primary-200` | `#f3d1a0` | primary 200 |
| `--color-primary-300` | `#ebb369` | primary 300 |
| `--color-primary-400` | `#e4973c` | primary 400 |
| `--color-primary-500` | `#d49a3a` | primary 500 |
| `--color-primary-600` | `#c08a2e` | primary 600 |
| `--color-primary-700` | `#a07026` | primary 700 |
| `--color-primary-800` | `#805820` | primary 800 |
| `--color-primary-900` | `#66461a` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Original fonts: "Patrick Hand" (headings) + "Poppins" (body). |
| `--font-display` | `'Patrick Hand', cursive` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar renders with transparent background and scrolled state | see fidelity note below |
| 2 | `Hero` | Hero section displays background image, overlay, heading, CTAs, and donation widget | see fidelity note below |
| 3 | `Intro` | Intro/About section renders two-column layout with feature cards | see fidelity note below |
| 4 | `Counter` | Counter section displays four statistics over background image | see fidelity note below |
| 5 | `Causes` | Causes carousel displays cause cards with progress | see fidelity note below |
| 6 | `CtaImage` | CTA/Image section renders split layout | see fidelity note below |
| 7 | `Volunteers` | Volunteers grid displays four volunteer cards | see fidelity note below |
| 8 | `Testimonials` | Testimonials carousel displays testimonial cards | see fidelity note below |
| 9 | `CtaBanner` | CTA Banner section renders | see fidelity note below |
| 10 | `Blog` | Blog section displays three blog cards | see fidelity note below |
| 11 | `Footer` | Footer renders with three columns and Component Dock credit | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
Users SHALL see a fixed navbar with logo on left and navigation links on right.

### `Hero`
Users SHALL see a full-screen hero with child portrait background, gold/white heading in Patrick Hand font, two CTAs, and a right-side donation widget.

### `Intro`
Users SHALL see a two-column section with image left, content right, and three feature cards.

### `Counter`
Users SHALL see a section with background image and four stat cards.

### `Causes`
Users SHALL see a horizontal carousel of cause cards with category badge, title, progress bar, and raised/goal amounts.

### `CtaImage`
Users SHALL see left content with heading and two CTAs, right background image.

### `Volunteers`
Users SHALL see a responsive grid of 4 volunteer cards with photo, name, role, and social icons.

### `Testimonials`
Users SHALL see a carousel of testimonial cards with quote, author, and role.

### `CtaBanner`
Users SHALL see a full-width banner with heading and volunteer CTA button.

### `Blog`
Users SHALL see a responsive grid of 3 blog cards with image, meta, title, excerpt, and read more link.

### `Footer`
Users SHALL see a dark teal footer with about column, recent posts, contact info, and copyright bar linking to Component Dock.

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
- **Provenance ban.** No file under `apps/cuddle/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/cuddle/public/CNAME` = `cuddle.free.componentdock.com`
  and the package `homepage` = `https://cuddle.free.componentdock.com`.
