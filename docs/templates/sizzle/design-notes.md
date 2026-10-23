# Sizzle — Design Notes

Reference: **Marco** — `https://colorlib.com/wp/template/marco/`  
Live preview: `https://preview.colorlib.com/theme/marco/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/marco-free-template.jpg  
Shipped: https://sizzle.free.componentdock.com

Sizzle is a restaurant one-pager in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Marco" template design (see TEMPLATES.md — appears 2×: lines 444 and 2686; both rows point to the same source and are `- [ ]` — one prep covers both, mark ALL `[x]` when done; verified with `grep -c 'wp/template/…

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@100;300;400;500;600;700**

## Design tokens (`apps/sizzle/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f42f2c` | brand |
| `--color-ink` | `#222` | Near-black ink for headings (#222 in the source). |
| `--color-body-grey` | `#777` | Base body text (#777 in the source). |
| `--color-section` | `#f9f9ff` | Light lavender section background (#f9f9ff — menu + gallery areas). |
| `--color-overlay` | `rgba(17, 22, 24, 0.75)` | overlay |
| `--color-star` | `#ffc000` | Review star color (#ffc000 in the source). |
| `--color-header-scrolled` | `rgba(34, 34, 34, 0.9)` | Header scrolled background (rgba(34,34,34,0.9) in the source). |
| `--color-footer-bottom` | `#222` | Footer bottom bar background (#222 in the source). |
| `--color-social-bg` | `#111` | Footer social icon chip background (#111 in the source). |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Original font: "Poppins" via Google Fonts (loaded in index.html). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header (fixed transparent nav + scroll state + mobile menu) | see fidelity note below |
| 2 | `Hero` | Hero banner | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `MenuSection` | Menu section with filter pills | see fidelity note below |
| 5 | `Reservation` | Reservation section | see fidelity note below |
| 6 | `Gallery` | Gallery section | see fidelity note below |
| 7 | `Reviews` | Reviews carousel | see fidelity note below |
| 8 | `Blog` | Blog section | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a fixed header that floats transparently over the hero, darkens on scroll, and provides a responsive nav.

### `Hero`
The system SHALL render a full-width hero with a background photo, an eyebrow, a headline, a paragraph, and one CTA.

### `About`
The system SHALL render a two-column about section with a heading, copy, a button, and an image.

### `MenuSection`
The system SHALL render a light `#f9f9ff` menu section with filter pills and coffee menu cards.

### `Reservation`
The system SHALL render a photo-background reservation section with a dark overlay, a heading, and a white form.

### `Gallery`
The system SHALL render a light gallery section with filter pills and a photo grid.

### `Reviews`
The system SHALL render a photo-background testimonial carousel with avatar, star rating, quote, and name.

### `Blog`
The system SHALL render a "Latest From Our Blog" section with four cards.

### `Footer`
The system SHALL render a red footer widget band with Opening Hours, Contact Us, and Newsletter columns, plus a dark bottom bar.

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
- **Provenance ban.** No file under `apps/sizzle/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sizzle/public/CNAME` = `sizzle.free.componentdock.com`
  and the package `homepage` = `https://sizzle.free.componentdock.com`.
