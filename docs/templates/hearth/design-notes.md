# Hearth — Design Notes

Reference: **Kusina** — `https://colorlib.com/wp/template/kusina/`  
Live preview: `https://preview.colorlib.com/theme/kusina/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/kusina-free-template.jpeg  
Shipped: https://hearth.free.componentdock.com

Hearth is a single-page restaurant website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lovers Quarrel**, **Poppins**

## Design tokens (`apps/hearth/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f34949` | brand |
| `--color-brand-soft` | `#f67979` | brand soft |
| `--color-brand-dark` | `#d83a3a` | brand dark |
| `--color-ink` | `#000000` | Ink — pure black headings and nav links (#000000). |
| `--color-paper` | `#ffffff` | Paper — white page/section backgrounds (#ffffff). |
| `--color-footer` | `#141313` | Footer — the dark footer background (#141313). |
| `--color-footer-alt` | `#3c312e` | Footer-alt — the brown-dark footer class color (#3c312e). |
| `--color-divider` | `#e6e6e6` | Divider — 1px dashed menu-row divider and input borders (#e6e6e6). |
| `--color-foot` | `#959595` | Foot — secondary footer text color (#959595). |
| `--color-muted` | `#6c757d` | Muted — bootstrap gray-600 general muted text (#6c757d). |
| `--color-primary-500` | `#f66b6b` | primary 500 |
| `--color-primary-600` | `#f34949` | primary 600 |
| `--color-primary-700` | `#d83a3a` | primary 700 |
| `--font-script` | `'Lovers Quarrel', cursive` | font script |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `HeroSlider` | Home slider | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `CounterStrip` | Counter strip | see fidelity note below |
| 5 | `MenuSection` | Menu section | see fidelity note below |
| 6 | `TestimonyCarousel` | Testimony carousel | see fidelity note below |
| 7 | `StaffSection` | Staff section | see fidelity note below |
| 8 | `Reservation` | Reservation form | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a transparent navbar over the hero with the brand left and a right-aligned nav, which turns fixed and white after scrolling.

### `HeroSlider`
The system SHALL render a 750px-tall split hero slider with a text half and a photo half, plus three circular dish thumbs and a booking CTA.

### `About`
The system SHALL render an about section in reverse zig-zag with a photo column, a heading pair, copy, and three circular thumbs.

### `CounterStrip`
The system SHALL render a photo-background strip with four animated statistics.

### `MenuSection`
The system SHALL render a "Specialties / Our Menu" section with six menu columns of three priced dishes each and a View All Menu button.

### `TestimonyCarousel`
The system SHALL render a photo-background "Testimony / Happy Customer" section with a carousel of customer quotes.

### `StaffSection`
The system SHALL render a "Chef / Our Master Chef" section with four chef cards.

### `Reservation`
The system SHALL render a "Book a Table / Make Reservation" split section with a photo column and a six-field booking form.

### `Footer`
The system SHALL render a dark footer with brand/social, open hours, newsletter, and Instagram widgets plus a copyright bar.

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
- **Provenance ban.** No file under `apps/hearth/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/hearth/public/CNAME` = `hearth.free.componentdock.com`
  and the package `homepage` = `https://hearth.free.componentdock.com`.
