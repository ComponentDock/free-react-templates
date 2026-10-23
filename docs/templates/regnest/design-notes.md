# Regnest — Design Notes

Reference: **Colorlib Regform 29** — `https://colorlib.com/wp/template/colorlib-regform-29/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-regform-29/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-29.jpg  
Shipped: https://regnest.free.componentdock.com

Provide a clean, centered booking ticket registration form with an image carousel, supporting multiple ticket types with dynamic pricing.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@400;500;600;700**, **Playfair Display**

## Design tokens (`apps/regnest/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#8fb8c8` | brand |
| `--color-brand-dark` | `#7aa8ba` | brand dark |
| `--color-card-bg` | `#ffffff` | card bg |
| `--color-label` | `#999999` | label |
| `--color-border` | `#dddddd` | border |
| `--color-heading` | `#222222` | heading |
| `--color-price` | `#2d6a4f` | price |
| `--color-button` | `#222222` | button |
| `--color-button-hover` | `#333333` | button hover |
| `--color-terms-link` | `#3b82f6` | terms link |
| `--font-heading` | `'Playfair Display', Georgia, serif` | font heading |
| `--font-sans` | `'Inter', system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `BookingCard` | Form renders all booking fields | see fidelity note below |
| 2 | `Footer` | Footer attribution | see fidelity note below |

## Section-by-section fidelity

### `BookingCard`
Users SHALL see a "Booking Tickets" heading, inputs for Full Name, Email, Person count, Date, and Ticket Type, a price display, terms checkbox, and a "BUY NOW" button.

### `Footer`
The page footer SHALL link to Component Dock (https://www.componentdock.com/).

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
- **Provenance ban.** No file under `apps/regnest/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/regnest/public/CNAME` = `regnest.free.componentdock.com`
  and the package `homepage` = `https://regnest.free.componentdock.com`.
