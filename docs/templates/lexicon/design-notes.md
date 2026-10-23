# Lexicon — Design Notes

Reference: **Rolax** — `https://colorlib.com/wp/template/rolax/`  
Live preview: `https://preview.colorlib.com/theme/rolax/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/rolax-free-template.jpg  
Shipped: https://lexicon.free.componentdock.com

A hotel template with hero, about, rooms, services, video, guest reviews and brand logo sections. Recreation of ColorLib's **Rolax** hotel template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Baskervville**, **Baskervville:ital@0;1**, **Jost**

## Design tokens (`apps/lexicon/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#e29c89` | brand |
| `--color-brand-dark` | `#ec583a` | brand dark |
| `--color-ink` | `#191514` | Dark base — near-black heading color, sticky header bg. |
| `--color-ink-dark` | `#0f0d0c` | ink dark |
| `--color-header-top` | `#2e0000` | Header top bar — very dark maroon. |
| `--color-mist` | `#94817e` | Warm gray — paragraph text. |
| `--color-paper` | `#f7f7f7` | Light section background. |
| `--color-card-overlay` | `#292621` | Card overlay gradient end. |
| `--color-primary-50` | `#fdf3f0` | primary 50 |
| `--color-primary-100` | `#fbe4de` | primary 100 |
| `--color-primary-200` | `#f7c8bc` | primary 200 |
| `--color-primary-300` | `#f0a593` | primary 300 |
| `--color-primary-400` | `#e29c89` | primary 400 |
| `--color-primary-500` | `#d47a64` | primary 500 |
| `--color-primary-600` | `#ec583a` | primary 600 |
| `--color-primary-700` | `#c94028` | primary 700 |
| `--color-primary-800` | `#a33520` | primary 800 |
| `--color-primary-900` | `#862e1e` | primary 900 |
| `--font-sans` | `'Jost', ui-sans-serif, system-ui, sans-serif` | Fonts: Baskervville (serif headings) + Jost (sans body). |
| `--font-display` | `'Baskervville', ui-serif, Georgia, serif` | font display |

> The spec has no section-level requirements; the order below is read from `apps/lexicon/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `About` | — | no dedicated spec block |
| 4 | `Rooms` | — | no dedicated spec block |
| 5 | `Services` | — | no dedicated spec block |
| 6 | `Video` | — | no dedicated spec block |
| 7 | `Guests` | — | no dedicated spec block |
| 8 | `Testimonials` | — | no dedicated spec block |
| 9 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Facebook · Twitter · LinkedIn · Main navigation

### `Hero`
*anchors only* — Rest Journey in Single Step, in the Breathtaking · Experience luxury and comfort in the heart of Prague · Check In · Check Out · Adults · Children

### `About`
*anchors only* — Luxury & Comfort: Our Services and Wonders of Prague · Learn More

### `Rooms`
*anchors only* — Previous room · Next room · Our Rooms · Choose from our selection of beautifully appointed rooms and suites · Started from

### `Services`
*anchors only* — Surrounded by galleries, boutiques, restaurants and cafés · Find a Room For You · Take Advantage of Our Seasonal Specials · View Project

### `Video`
*anchors only* — Play video · dialog · Video player · Close video · Hotel video

### `Guests`
*anchors only* — We Offer to Our Guest

### `Testimonials`
*anchors only* — Previous testimonial · Next testimonial

### `Footer`
*anchors only* — Facebook · Twitter · LinkedIn · Email for newsletter · Subscribe

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
- **Provenance ban.** No file under `apps/lexicon/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/lexicon/public/CNAME` = `lexicon.free.componentdock.com`
  and the package `homepage` = `https://lexicon.free.componentdock.com`.
