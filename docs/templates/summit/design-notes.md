# Summit — Design Notes

Reference: **Confer** — `https://colorlib.com/wp/template/confer/`  
Live preview: `https://preview.colorlib.com/theme/confer/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/confer-free-template-1.jpg  
Shipped: https://summit.free.componentdock.com

Summit is a single-page conference / event template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600;700**

## Design tokens (`apps/summit/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#df42b1` | brand |
| `--color-brand-deep` | `#c63fa4` | brand deep |
| `--color-indigo` | `#505add` | indigo |
| `--color-navy` | `#151853` | navy |
| `--color-navy-deep` | `#111343` | navy deep |
| `--color-tab` | `#1f2371` | tab |
| `--color-tab-active` | `#5d5e8d` | tab active |
| `--color-muted` | `#9293bc` | muted |
| `--color-line` | `#444675` | line |
| `--color-form-line` | `#dbdcf1` | form line |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Poppins (body + headings) via Google Fonts <link> in index.html. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header | see fidelity note below |
| 2 | `HeroSlider` | Hero slider | see fidelity note below |
| 3 | `AboutCountdown` | About and countdown | see fidelity note below |
| 4 | `Speakers` | Speakers | see fidelity note below |
| 5 | `Schedule` | Schedule | see fidelity note below |
| 6 | `TicketPricing` | Ticket pricing | see fidelity note below |
| 7 | `Sponsors` | Sponsors and testimonials | see fidelity note below |
| 8 | `LatestNews` | Latest news | see fidelity note below |
| 9 | `Contact` | Contact | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a fixed dark header with the logo, uppercase menu and a Get Tickets button.

### `HeroSlider`
The system SHALL render a full-screen hero swiper with two slides, arrows and a scroll indicator.

### `AboutCountdown`
The system SHALL render the about text block and a live countdown timer on a dark navy background.

### `Speakers`
The system SHALL render a speakers grid over the pink→indigo gradient overlay.

### `Schedule`
The system SHALL render a day-tabbed schedule with bordered cards.

### `TicketPricing`
The system SHALL render three ticket cards over the gradient overlay.

### `Sponsors`
The system SHALL render a sponsor logo grid and a testimonial carousel.

### `LatestNews`
The system SHALL render three blog cards over the gradient overlay.

### `Contact`
The system SHALL render contact information blocks and a message form.

### `Footer`
The system SHALL render a dark four-column footer with a copyright bar.

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
- **Provenance ban.** No file under `apps/summit/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/summit/public/CNAME` = `summit.free.componentdock.com`
  and the package `homepage` = `https://summit.free.componentdock.com`.
