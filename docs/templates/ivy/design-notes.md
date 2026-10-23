# Ivy — Design Notes

Reference: **Fox** — `https://colorlib.com/wp/template/fox/`  
Live preview: `https://preview.colorlib.com/theme/fox/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/fox-free-template.jpg  
Shipped: https://ivy.free.componentdock.com

Ivy is a single-page education / university website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Fox" (Fox University) website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/ivy/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#fd5f00` | primary |
| `--color-primary-hover` | `#e55500` | primary hover |
| `--color-navy` | `#0d1128` | navy |
| `--color-navy-lighter` | `#1a1f3a` | navy lighter |
| `--color-gold` | `#fda638` | gold |
| `--color-purple` | `#5d50c6` | purple |
| `--color-footer` | `#1a1a1a` | footer |
| `--color-light` | `#f8f9fa` | light |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Top bar with wordmark, contact info, and Apply CTA | see fidelity note below |
| 2 | `Navbar` | Navbar with nav links and search | see fidelity note below |
| 3 | `HeroSlider` | Home slider with two slides | see fidelity note below |
| 4 | `ServicesStrip` | Services strip with alternating colored cards | see fidelity note below |
| 5 | `WhatWeOffer` | — | no dedicated spec block |
| 6 | `CounterVideo` | Counter and video section | see fidelity note below |
| 7 | `Courses` | Courses section | see fidelity note below |
| 8 | `Teachers` | Certified Teachers section | see fidelity note below |
| 9 | `QuoteForm` | Request A Quote form | see fidelity note below |
| 10 | `Events` | Upcoming Events section | see fidelity note below |
| 11 | `BlogSection` | "What We Offer" split section | see fidelity note below |
| 12 | `Testimonials` | Student testimonials carousel | see fidelity note below |
| 13 | `GalleryStrip` | Gallery strip | see fidelity note below |
| 14 | `Footer` | Footer with five widgets | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
The system SHALL render a white top bar with the Ivy wordmark, contact toppers with orange icons, and an orange "Apply now" button.

### `Navbar`
The system SHALL render a dark navy navbar with six white nav links and a search input.

### `HeroSlider`
The system SHALL render a 600px-tall hero carousel with two slides, each with a background photo, overlay, headline, copy, and CTA button.

### `ServicesStrip`
The system SHALL render four full-width service cards alternating orange `#fd5f00` and navy `#0d1128` backgrounds.

### `WhatWeOffer`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `CounterVideo`
The system SHALL render a section with a background photo under a navy-to-orange gradient, a video thumbnail with a white circular play button, the heading "Ivy University", and four animated counters.

### `Courses`
The system SHALL render a centered "Our Courses" heading and four course cards, each with a photo, a meta row with orange icons, a title, a blurb, and an "Apply now" button.

### `Teachers`
The system SHALL render a light-gray section with four staff cards showing a photo, name, orange position, and social icons.

### `QuoteForm`
The system SHALL render a form section over an orange-to-navy gradient with name, course select, phone, and message fields and a submit button.

### `Events`
The system SHALL render three event cards, each with an orange date badge, a time, a title, a blurb, and a "Learn More" link.

### `BlogSection`
The system SHALL render a split section with a framed photo on the left and a heading, copy, and six feature rows on the right.

### `Testimonials`
The system SHALL render a testimonial carousel with avatar, purple quote icon, quote text, name, and orange position.

### `GalleryStrip`
The system SHALL render a row of photo tiles, each with an orange circular instagram icon overlay.

### `Footer`
The system SHALL render a dark footer with Have a Questions?, Recent Blog, Quick Links, Subscribe Us!, and Connect With Us widgets plus a copyright bar.

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
- **Provenance ban.** No file under `apps/ivy/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/ivy/public/CNAME` = `ivy.free.componentdock.com`
  and the package `homepage` = `https://ivy.free.componentdock.com`.
