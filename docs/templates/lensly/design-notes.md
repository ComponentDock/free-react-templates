# Lensly — Design Notes

Reference: **Capture 2** — `https://colorlib.com/wp/template/capture-2/`  
Live preview: `https://preview.colorlib.com/theme/capture2/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/capture2-free-template.jpg  
Shipped: https://lensly.free.componentdock.com

Lensly is a single-page wedding & event photography portfolio template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Hepta Slab**, **Hepta Slab:wght@400;700;900**, **Mulish**

## Design tokens (`apps/lensly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f4ad2d` | brand |
| `--color-ink` | `#212529` | ink |
| `--color-smoke` | `#666666` | smoke |
| `--color-meta` | `#cccccc` | meta |
| `--color-light` | `#f8f9fa` | light |
| `--font-sans` | `'Mulish', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Hepta Slab', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Works` | Works portfolio grid | see fidelity note below |
| 4 | `About` | About section | see fidelity note below |
| 5 | `Video` | Video section | see fidelity note below |
| 6 | `Testimonials` | Testimonials | see fidelity note below |
| 7 | `Events` | News / Events section | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a full-width navbar that is transparent dark over the hero and turns solid white on scroll.

### `Hero`
The system SHALL render a full-height photo hero with an eyebrow, an amber serif headline, a paragraph, and a call-to-action button.

### `Works`
The system SHALL render a centered "See My Works" header and a responsive grid of portfolio image tiles with hover overlays.

### `About`
The system SHALL render a black two-column about section with circular social buttons.

### `Video`
The system SHALL render a "See The Video" section with a centered play button.

### `Testimonials`
The system SHALL render a light-gray testimonials section with three quote cards.

### `Events`
The system SHALL render a white "Events" section with three blog post cards.

### `Footer`
The system SHALL render a black footer with an about blurb, quick links, a newsletter form, and a bottom bar.

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
- **Provenance ban.** No file under `apps/lensly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/lensly/public/CNAME` = `lensly.free.componentdock.com`
  and the package `homepage` = `https://lensly.free.componentdock.com`.
