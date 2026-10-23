# Shred — Design Notes

Reference: **Slim2** — `https://colorlib.com/wp/template/slim2/`  
Live preview: `https://preview.colorlib.com/theme/slim2/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/slim2-free-template.jpg  
Shipped: https://shred.free.componentdock.com

Shred is a single-page fitness-club / personal-training template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Nunito Sans**, **Nunito Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000**

## Design tokens (`apps/shred/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#fe9191` | Brand coral — primary buttons, icons, accents, program tab strip. |
| `--color-brand-dark` | `#fe7878` | Deeper coral for the promo band + hover states. |
| `--color-ink` | `#000000` | Ink — headings and the dark navbar/footer. |
| `--color-mist` | `#999999` | Mist — muted body text. |
| `--color-paper` | `#f8f9fa` | Paper — light section backgrounds. |
| `--color-blush` | `#ffdddd` | Blush — training schedule band. |
| `--color-overlay` | `#232931` | Overlay — testimonial section dark overlay. |
| `--color-primary-50` | `#fff5f5` | primary 50 |
| `--color-primary-100` | `#ffe9e9` | primary 100 |
| `--color-primary-200` | `#ffd6d6` | primary 200 |
| `--color-primary-300` | `#febcbc` | primary 300 |
| `--color-primary-400` | `#fea6a6` | primary 400 |
| `--color-primary-500` | `#fe9191` | primary 500 |
| `--color-primary-600` | `#fb7d7d` | primary 600 |
| `--color-primary-700` | `#ef6363` | primary 700 |
| `--color-primary-800` | `#d94f4f` | primary 800 |
| `--color-primary-900` | `#b53f3f` | primary 900 |
| `--font-sans` | `'Nunito Sans', ui-sans-serif, system-ui, sans-serif` | Original typeface: Nunito Sans (weights 200–900). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `PromoBand` | Promo band | see fidelity note below |
| 4 | `Programs` | Fitness Program | see fidelity note below |
| 5 | `Services` | Services | see fidelity note below |
| 6 | `Schedule` | Training Schedule | see fidelity note below |
| 7 | `CounterBand` | Counter band | see fidelity note below |
| 8 | `Testimonials` | Testimonials | see fidelity note below |
| 9 | `Coaches` | Coaches | see fidelity note below |
| 10 | `Blog` | Blog | see fidelity note below |
| 11 | `Contact` | Contact | see fidelity note below |
| 12 | `MapSection` | Page composition | see fidelity note below |
| 13 | `Gallery` | Gallery | see fidelity note below |
| 14 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render the transparent dark navbar over the hero with the brand and eight nav links, turning solid black on scroll.

### `Hero`
The system SHALL render the split hero carousel with headline, eyebrow, keyword accent and a coral CTA.

### `PromoBand`
The system SHALL render the coral promo band with three white-icon cards.

### `Programs`
The system SHALL render the light program section with a coral tab strip of eight programs.

### `Services`
The system SHALL render the "Get a Perfect Body" services block with five icon services.

### `Schedule`
The system SHALL render the schedule section with seven day tabs and trainer cards.

### `CounterBand`
The system SHALL render the image-background counter band with the years counter.

### `Testimonials`
The system SHALL render the testimonials section with client quotes.

### `Coaches`
The system SHALL render the Our Coaches row with four circular-photo cards.

### `Blog`
The system SHALL render the blog grid with three post cards.

### `Contact`
The system SHALL render the contact section with the info list and the message form.

### `MapSection`
The system SHALL compose all sections in the original's order in a single page.

### `Gallery`
The system SHALL render the gallery heading with a photo strip.

### `Footer`
The system SHALL render the black footer with four columns, the contact widget and the copyright/credit row.

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
- **Provenance ban.** No file under `apps/shred/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/shred/public/CNAME` = `shred.free.componentdock.com`
  and the package `homepage` = `https://shred.free.componentdock.com`.
