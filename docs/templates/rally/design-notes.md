# Rally — Design Notes

Reference: **Eventure** — `https://colorlib.com/wp/template/eventure/`  
Live preview: `https://preview.colorlib.com/theme/eventure/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/eventure-free-template.jpg  
Shipped: https://rally.free.componentdock.com

Rally is a single-page event/conference template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Heebo**, **Heebo:wght@400;500;700;800**, **Roboto**

## Design tokens (`apps/rally/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-gradient-a` | `#141da2` | gradient a |
| `--color-gradient-b` | `#9b5cf6` | gradient b |
| `--color-cta-start` | `#2c28b1` | cta start |
| `--color-accent` | `#6247ea` | accent |
| `--color-cyan` | `#4cd3e3` | cyan |
| `--color-blue` | `#38a4ff` | blue |
| `--color-gold` | `#f8b600` | gold |
| `--color-heading` | `#222222` | heading |
| `--color-muted` | `#777777` | muted |
| `--color-team` | `#f9f9ff` | team |
| `--color-pricing` | `#fafcff` | pricing |
| `--color-footer` | `#04091e` | footer |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Heebo', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Fixed header with logo, nav links, Get Tickets CTA and search | see fidelity note below |
| 2 | `Hero` | Full-bleed photo hero | see fidelity note below |
| 3 | `Countdown` | Countdown card overlapping the hero | see fidelity note below |
| 4 | `Welcome` | Welcome section | see fidelity note below |
| 5 | `Speakers` | Head speakers section | see fidelity note below |
| 6 | `Schedule` | Event schedule with day tabs | see fidelity note below |
| 7 | `Venue` | Venue and map section | see fidelity note below |
| 8 | `Pricing` | Ticket pricing cards | see fidelity note below |
| 9 | `Footer` | Dark footer with newsletter, Instagram and socials | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a fixed header that is transparent over the hero and becomes a purple gradient bar after scrolling.

### `Hero`
The system SHALL render a hero section with a background photo, dark overlay, uppercase headline and ghost button.

### `Countdown`
The system SHALL render a white countdown card that overlaps the hero's bottom edge and ticks in real time.

### `Welcome`
The system SHALL render a two-column welcome section with a photo and text.

### `Speakers`
The system SHALL render a light-grey (`#f9f9ff`) speakers section with 4 speaker cards.

### `Schedule`
The system SHALL render a schedule section with a purple gradient tab bar and per-day talk listings.

### `Venue`
The system SHALL render a venue section with location details and a map.

### `Pricing`
The system SHALL render 4 pricing cards with hover-revealed gradient buttons.

### `Footer`
The system SHALL render a dark navy (`#04091e`) footer with widget columns and a copyright bar.

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
- **Provenance ban.** No file under `apps/rally/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/rally/public/CNAME` = `rally.free.componentdock.com`
  and the package `homepage` = `https://rally.free.componentdock.com`.
