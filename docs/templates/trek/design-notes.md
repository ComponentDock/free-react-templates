# Trek — Design Notes

Reference: **Trips** — `https://colorlib.com/wp/template/trips/`  
Live preview: `https://preview.colorlib.com/theme/trips/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/trips-free-template.jpg  
Shipped: https://trek.free.componentdock.com

Trek is a single-page travel / nature-journey template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Work Sans**, **Work Sans:wght@300;400;700;900**

## Design tokens (`apps/trek/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-sand` | `#efba6c` | sand |
| `--color-body` | `#364d59` | body |
| `--color-ink` | `#000000` | ink |
| `--color-ghost` | `#efefef` | ghost |
| `--color-soft` | `#f6f5f5` | soft |
| `--color-meta` | `#ccc` | meta |
| `--color-caption` | `#888` | caption |
| `--font-sans` | `'Work Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header — static white navbar | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `Story` | Our Story | see fidelity note below |
| 4 | `Journey` | Journey pricing cards | see fidelity note below |
| 5 | `Team` | Our Team | see fidelity note below |
| 6 | `Testimonials` | Testimonials | see fidelity note below |
| 7 | `Blog` | Our Blog | see fidelity note below |
| 8 | `CtaBand` | CTA band | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a static white navbar with a logo (mark + wordmark) on the left and nav links (Home, About, Trips, Blog, Contact) on the right, with the active link highlighted in sand. On mobile a hamburger SHALL open an off-canvas drawer with the same links.

### `Hero`
The system SHALL render a full-height hero with a nature photo under a dark wash, a white headline "Let's Enjoy The Wonders of Nature", a sub-line, and a circular play button labelled "Watch the video".

### `Story`
The system SHALL render a two-column section with the heading and two paragraphs on the left and a hiking photo on the right.

### `Journey`
The system SHALL render six photo cards, each with a sand price pill and a white trip title overlaid at the bottom, with the image zooming out on hover.

### `Team`
The system SHALL render three centered staff cards, each with a photo, name, "Staff" caption, bio, and three social icons.

### `Testimonials`
The system SHALL render four sand-coloured testimonial cards, each with a photo, a quote, and an author name, in a carousel with prev/next arrows and dots.

### `Blog`
The system SHALL render three blog post cards, each with a photo and a white content box containing a title, a date/author meta line, and an excerpt.

### `CtaBand`
The system SHALL render a full-width band with a photo under a sand wash, a white bold headline "Join and Trip With Us", a white sub-line, and a sand "Get In Touch" button.

### `Footer`
The system SHALL render a light `#f6f5f5` footer with an Instagram 3×2 thumb grid, a Quick Links widget (5 links), a Newsletter form (email input + sand "Send" button), and a copyright bar crediting Component Dock (no ColorLib credit).

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
- **Provenance ban.** No file under `apps/trek/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/trek/public/CNAME` = `trek.free.componentdock.com`
  and the package `homepage` = `https://trek.free.componentdock.com`.
