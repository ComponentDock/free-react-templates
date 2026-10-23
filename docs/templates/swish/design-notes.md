# Swish — Design Notes

Reference: **Basketball** — `https://colorlib.com/wp/template/basketball/`  
Live preview: `https://preview.colorlib.com/theme/basketball/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/basketball-free-template.jpg  
Shipped: https://swish.free.componentdock.com

Swish is a single-page basketball-club website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Basketball" website template (see TEMPLATES.md, line 345), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@800**, **Playfair Display**, **Roboto**

## Design tokens (`apps/swish/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff8b23` | brand |
| `--color-brand-dark` | `#f5790b` | brand dark |
| `--color-peach` | `#fdcb9e` | peach |
| `--color-ink` | `#2a2a2a` | ink |
| `--color-body` | `#666666` | body |
| `--color-muted` | `#999999` | muted |
| `--color-light` | `#f9f9ff` | light |
| `--color-cream` | `#fdf8f3` | cream |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Playfair Display', serif` | font display |
| `--font-hero` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font hero |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header with top bar and navbar | see fidelity note below |
| 2 | `Hero` | Hero banner | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Events` | Upcoming Event section | see fidelity note below |
| 5 | `Learn` | Learn About Basketball video block | see fidelity note below |
| 6 | `Program` | Recreational Program section | see fidelity note below |
| 7 | `Players` | Player info cards | see fidelity note below |
| 8 | `Gallery` | Gallery grid | see fidelity note below |
| 9 | `Blog` | Blog posts | see fidelity note below |
| 10 | `Social` | Instagram-style social grid | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a white header with a top bar (phone + REGISTER button) and a navbar with the logo and menu.

### `Hero`
The system SHALL render a cream hero with the split headline, subtext and an orange CTA.

### `About`
The system SHALL render a split about section (image left, text right).

### `Events`
The system SHALL render an upcoming-event section with two event cards.

### `Learn`
The system SHALL render a split video block with a play button.

### `Program`
The system SHALL render a second split section (image right, text left).

### `Players`
The system SHALL render three player cards.

### `Gallery`
The system SHALL render a responsive six-tile gallery grid.

### `Blog`
The system SHALL render four blog post cards.

### `Social`
The system SHALL render a six-square image grid under "Follow Us Instagram".

### `Footer`
The system SHALL render a dark five-column footer with a newsletter form.

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
- **Provenance ban.** No file under `apps/swish/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/swish/public/CNAME` = `swish.free.componentdock.com`
  and the package `homepage` = `https://swish.free.componentdock.com`.
