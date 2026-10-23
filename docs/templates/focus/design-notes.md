# Focus — Design Notes

Reference: **Snapshot** — `https://colorlib.com/wp/template/snapshot/`  
Live preview: `https://preview.colorlib.com/theme/snapshot/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/snapshot-free-template.jpg  
Shipped: https://focus.free.componentdock.com

Focus is a single-page photography / film production portfolio landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Noto Sans**, **Noto Sans:wght@400;600;700**, **Noto Serif**

## Design tokens (`apps/focus/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#9d8f8f` | brand |
| `--color-ink` | `#191a1c` | ink |
| `--color-panel` | `#202224` | panel |
| `--color-muted` | `#9da1a5` | muted |
| `--font-serif` | `'Noto Serif', Georgia, 'Times New Roman', serif` | font serif |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `DotNav` | Fixed right-edge dot navigation | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `AboutSection` | About section | see fidelity note below |
| 4 | `ServicesSection` | Services section | see fidelity note below |
| 5 | `GallerySection` | Gallery section | see fidelity note below |
| 6 | `TestimonialsSection` | Testimonial carousel | see fidelity note below |
| 7 | `ContactSection` | Contact section | see fidelity note below |
| 8 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `DotNav`
The page SHALL show a fixed vertical dot-menu on the right edge (right: 50px, vertically centered) with six labelled dots and scroll-spy.

### `Hero`
The hero SHALL fill the viewport with a full-bleed background photo and a 50% black overlay, centered brand line, headline, blurb and ghost CTA.

### `AboutSection`
The About section SHALL show a video-thumb image with a play button on the left and, on the right, the heading, copy, an animated project counter and a serif pull-quote.

### `ServicesSection`
The Services section SHALL show a centered heading, three production-service cards and three skill progress bars.

### `GallerySection`
The Gallery section SHALL show a centered heading and a no-gutter grid of 12 photo tiles with overlay captions and a lightbox.

### `TestimonialsSection`
The Testimonial section SHALL show a centered subheading "Testimony" and H2 "Our satisfied customer says" with a carousel of client quotes.

### `ContactSection`
The Contact section SHALL show a centered heading, four dark info panels and a validated message form that confirms submission.

### `Footer`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

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
- **Provenance ban.** No file under `apps/focus/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/focus/public/CNAME` = `focus.free.componentdock.com`
  and the package `homepage` = `https://focus.free.componentdock.com`.
