# Flair — Design Notes

Reference: **Fancy** — `https://colorlib.com/wp/template/fancy/`  
Live preview: `https://preview.colorlib.com/theme/fancy/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/fancy-free-creative-business-website-template.jpg  
Shipped: https://flair.free.componentdock.com

Flair is a single-page creative agency landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:wght@400;700**, **Poppins**

## Design tokens (`apps/flair/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-purple` | `#7450fe` | brand purple |
| `--color-brand-green` | `#21d397` | brand green |
| `--color-accent` | `#2bc0a4` | accent |
| `--color-heading` | `#232d37` | Heading — section titles and blog card titles. |
| `--color-body` | `#51545f` | Body — the grey body-copy colour. |
| `--color-muted` | `#b5aec4` | Muted — search input, footer text, tweet, link list, author role. |
| `--color-line` | `#e5e5e5` | Line — feature-card dividers + skill bar tracks. |
| `--color-border-light` | `#ebebeb` | Border-light — blog card borders. |
| `--color-arrow` | `#c2c1ca` | Arrow — testimonial navigation arrows. |
| `--color-footer` | `#131627` | Footer — the dark navy footer background. |
| `--color-copyright` | `#04081d` | Copyright — the footer copyright bar background. |
| `--color-input` | `#2b2e3d` | Input — the newsletter email input background. |
| `--font-serif` | `'Playfair Display', Georgia, 'Times New Roman', serif` | font serif |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Fixed transparent header with wordmark, nav, search and bag | see fidelity note below |
| 2 | `Hero` | Full-height photo hero with video link and CTAs | see fidelity note below |
| 3 | `TopFeatures` | Floating top-features card | see fidelity note below |
| 4 | `About` | About section | see fidelity note below |
| 5 | `Skills` | Skills section with progress bars | see fidelity note below |
| 6 | `Services` | Services on dark overlay | see fidelity note below |
| 7 | `Testimonials` | Testimonials | see fidelity note below |
| 8 | `Cta` | CTA band | see fidelity note below |
| 9 | `Blog` | Latest news blog row | see fidelity note below |
| 10 | `Footer` | Dark footer with newsletter, twitter, links, contact | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a fixed header that is transparent over the hero and darkens on scroll, with a lowercase wordmark, white nav links, a search icon and a bag icon.

### `Hero`
The system SHALL render a 900px hero with a background photo, dark navy overlay, animated background, video overview link, headline and two gradient-framed buttons.

### `TopFeatures`
The system SHALL render a white 3-card features strip that overlaps the hero's bottom edge.

### `About`
The system SHALL render a two-column about section with text and a rounded photo.

### `Skills`
The system SHALL render a skills section with a side photo and 4 animated gradient progress bars.

### `Services`
The system SHALL render a photo-background services section with white text and gradient-clipped icons.

### `Testimonials`
The system SHALL render a testimonials carousel with circular avatars and a Playfair quote mark.

### `Cta`
The system SHALL render a dark-overlay CTA band with a heading and button.

### `Blog`
The system SHALL render a "Latest News" heading and 3 bordered blog cards.

### `Footer`
The system SHALL render a dark navy (`#131627`) footer with 4 widget columns and a copyright bar.

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
- **Provenance ban.** No file under `apps/flair/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/flair/public/CNAME` = `flair.free.componentdock.com`
  and the package `homepage` = `https://flair.free.componentdock.com`.
