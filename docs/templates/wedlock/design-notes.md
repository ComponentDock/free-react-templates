# Wedlock — Design Notes

Reference: **Wordpress Wedding Themes** — `https://colorlib.com/wp/template/wordpress-wedding-themes/`  
Live preview: `https://preview.colorlib.com/theme/wordpress-wedding-themes/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/wedding-wordpress-themes.jpg  
Shipped: https://wedlock.free.componentdock.com

Wedlock is a single-page wedding / event-planner website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **DM Sans**, **DM Sans:wght@400;500;600;700**, **Playfair Display**

## Design tokens (`apps/wedlock/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-accent-50` | `#fdf1ec` | accent 50 |
| `--color-accent-100` | `#fadfd3` | accent 100 |
| `--color-accent-200` | `#f4bda4` | accent 200 |
| `--color-accent-300` | `#ee976f` | accent 300 |
| `--color-accent-400` | `#e97a47` | accent 400 |
| `--color-accent-500` | `#e74923` | accent 500 |
| `--color-accent-600` | `#d63d17` | accent 600 |
| `--color-accent-700` | `#c9320e` | accent 700 |
| `--color-accent-800` | `#a02808` | accent 800 |
| `--color-accent-900` | `#7d2006` | accent 900 |
| `--color-magenta-100` | `#fbdce9` | magenta 100 |
| `--color-magenta-200` | `#f6b3d0` | magenta 200 |
| `--color-magenta-300` | `#ee82b1` | magenta 300 |
| `--color-magenta-400` | `#e24d8d` | magenta 400 |
| `--color-magenta-500` | `#d60058` | magenta 500 |
| `--color-magenta-600` | `#c4004e` | magenta 600 |
| `--color-magenta-700` | `#bd004d` | magenta 700 |
| `--color-magenta-800` | `#93003d` | magenta 800 |
| `--color-magenta-900` | `#6e002e` | magenta 900 |
| `--color-ink-900` | `#0e0d0e` | Text darks + dark section bands (scheme_dark #040817 / #000912) |
| `--color-ink-700` | `#3c3b3b` | ink 700 |
| `--color-ink-500` | `#3f3d47` | ink 500 |
| `--color-night-800` | `#000912` | night 800 |
| `--color-night-900` | `#040817` | night 900 |
| `--color-cream-100` | `#f3ebe3` | Warm neutrals from the reference |
| `--color-cream-200` | `#e3d7cc` | cream 200 |
| `--color-mauve-100` | `#ece6ea` | mauve 100 |
| `--color-mauve-200` | `#ded4d9` | mauve 200 |
| `--font-sans` | `'DM Sans', ui-sans-serif, system-ui, sans-serif` | DM Sans (body) + Playfair Display (headings) — Google Fonts via index.html |
| `--font-serif` | `'Playfair Display', ui-serif, Georgia, serif` | font serif |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Services` | Services section | see fidelity note below |
| 4 | `Gallery` | Gallery and preparation strip | see fidelity note below |
| 5 | `GetReady` | — | no dedicated spec block |
| 6 | `Testimonials` | Testimonials | see fidelity note below |
| 7 | `Stories` | Wedding stories | see fidelity note below |
| 8 | `Newsletter` | Newsletter band | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main · Wedlock home · Toggle mobile menu

### `Hero`
The system SHALL render a full-width photo hero with a serif headline, subline, and CTA buttons over a dark overlay.

### `Services`
The system SHALL render a services teaser and a "We arrange the perfect weddings" services block.

### `Gallery`
The system SHALL render a "Your memories" photo gallery and a "Get ready with us" preparation band.

### `GetReady`
*anchors only* — Get ready with us

### `Testimonials`
The system SHALL render a "Feedback from our happy couples" testimonial section.

### `Stories`
The system SHALL render a "Wedding stories" blog row.

### `Newsletter`
The system SHALL render a dark "Subscribe for the updates!" newsletter band with an email form.

### `Footer`
The system SHALL render a footer with office contact info, link columns, and a newsletter widget.

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
- **Provenance ban.** No file under `apps/wedlock/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/wedlock/public/CNAME` = `wedlock.free.componentdock.com`
  and the package `homepage` = `https://wedlock.free.componentdock.com`.
