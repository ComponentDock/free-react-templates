# Brasserie — Design Notes

Reference: **Caviar** — `https://colorlib.com/wp/template/caviar/`  
Live preview: `https://preview.colorlib.com/theme/caviar/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/caviar-free-template.jpg  
Shipped: https://brasserie.free.componentdock.com

A Premium Restaurant template with hero, about, specials / menu and awards sections.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Work Sans**, **Work Sans:wght@300;400;500;600;700**

## Design tokens (`apps/brasserie/src/index.css` `@theme`)

| token                    | value                                               | role                                                            |
| ------------------------ | --------------------------------------------------- | --------------------------------------------------------------- |
| `--color-brand-red`      | `#ff0000`                                           | brand red                                                       |
| `--color-brand-red-dark` | `#cc0000`                                           | brand red dark                                                  |
| `--font-sans`            | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | Fonts: Work Sans (headings) + Open Sans (body) via Google Fonts |
| `--font-heading`         | `'Work Sans', ui-sans-serif, system-ui, sans-serif` | font heading                                                    |

## Document order

| #   | component      | spec requirement                | notes                   |
| --- | -------------- | ------------------------------- | ----------------------- |
| 1   | `Navbar`       | Navigation bar                  | see fidelity note below |
| 2   | `Hero`         | Hero section                    | see fidelity note below |
| 3   | `About`        | About section                   | see fidelity note below |
| 4   | `Specials`     | Specials / Menu section         | see fidelity note below |
| 5   | `Awards`       | Awards section                  | see fidelity note below |
| 6   | `Testimonials` | Testimonials section            | see fidelity note below |
| 7   | `Reservation`  | Reservation section             | see fidelity note below |
| 8   | `Footer`       | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`

The system SHALL render a black navbar with the site name "Brasserie", section links (Home, About, Menu, Awards, Testimonials, Reservation), and a hamburger toggle that opens a mobile menu on small screens.

### `Hero`

The system SHALL render a hero section with a dark overlay on a background image, the heading "Brasserie", subtitle "Premium Restaurant", and a "Reservation" call-to-action button linking to the reservation section.

### `About`

The system SHALL render an about section with two sub-sections: "Restaurant Style" and "Our Chef", each with descriptive text and an image.

### `Specials`

The system SHALL render a specials section with the heading "Our Specials", a "View The Menu" CTA, and three dish cards showing name and price.

### `Awards`

The system SHALL render an awards section with award cards showing icons, titles, and descriptions.

### `Testimonials`

The system SHALL render a testimonials section with testimonial cards showing author name, role, and quote.

### `Reservation`

The system SHALL render a reservation section with the heading "Reserve Your Desk" and a "Book Now" CTA button.

### `Footer`

The system SHALL render a footer with the brand name "Brasserie", copyright text, and a link to `https://www.componentdock.com/` labeled "Component Dock".

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
- **Provenance ban.** No file under `apps/brasserie/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/brasserie/public/CNAME` = `brasserie.free.componentdock.com`
  and the package `homepage` = `https://brasserie.free.componentdock.com`.

## Reference tokens (measured 2026-10-23)

Evidence: https://preview.colorlib.com/theme/caviar/ — HTTP 200 on 2026-10-23; measured `style.min.css` (187,430 bytes, Bootstrap 5 based).

- Hex census: `#d40000` 8, `#fff` 70, `#000` 38 (count = rules containing the literal).
- Typefaces: Headings: `Work Sans`; Body: `Open Sans`.
- Radii: Bootstrap `--bs-border-radius` (14 rules) — soft default corners.
- Section order (shipped): `Navbar -> Hero -> About -> Specials -> Awards -> Testimonials -> Reservation -> Footer`.

### Deltas measured against the shipped app

- The app's `--color-brand-red` is `#ff0000`, but the reference accent is `#d40000` (`#ff0000` occurs 0 times in the stylesheet) — a one-shade drift on every accent.
