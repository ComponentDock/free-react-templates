# Regalia — Design Notes

Reference: **Luxury Hotel** — `https://colorlib.com/wp/template/luxury-hotel/`  
Live preview: `https://preview.colorlib.com/theme/luxury-hotel/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/luxuryhotel-free-template.jpg  
Shipped: https://regalia.free.componentdock.com

Recreate the ColorLib "Luxury Hotel" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript template named "Regalia". The original is a luxury hotel landing page with hero slider, reservation bar, services, rooms showcase, dining section, blog, testimonials, newsletter, and footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Cormorant Garamond**, **Cormorant Garamond:wght@400;500;600;700**, **Lato**

## Design tokens (`apps/regalia/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-green` | `#2c3e2d` | brand green |
| `--color-brand-green-dark` | `#1e2b1f` | brand green dark |
| `--color-accent-gold` | `#b8860b` | accent gold |
| `--color-accent-gold-light` | `#d4a843` | accent gold light |
| `--color-bg-warm` | `#f9f7f4` | bg warm |
| `--color-bg-dark` | `#1a1a1a` | bg dark |
| `--color-text-body` | `#555555` | text body |
| `--color-text-heading` | `#1a1a1a` | text heading |
| `--font-heading` | `'Cormorant Garamond', serif` | font heading |
| `--font-body` | `'Lato', sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | TopBar displays contact information and social links | see fidelity note below |
| 2 | `Navbar` | Navbar displays brand and navigation links | see fidelity note below |
| 3 | `HeroSlider` | HeroSlider displays hero section with CTA | see fidelity note below |
| 4 | `ReservationBar` | ReservationBar displays booking form | see fidelity note below |
| 5 | `Services` | Services displays 4 service cards | see fidelity note below |
| 6 | `Rooms` | Rooms displays 3 room cards with prices | see fidelity note below |
| 7 | `DiningBar` | DiningBar displays dining section | see fidelity note below |
| 8 | `Blog` | Blog displays 3 blog post cards | see fidelity note below |
| 9 | `Testimonials` | Testimonials displays guest reviews | see fidelity note below |
| 10 | `Newsletter` | Newsletter displays email signup form | see fidelity note below |
| 11 | `Footer` | Footer displays content and Component Dock link | see fidelity note below |
| 12 | `BackToTop` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
The template SHALL display a top bar with phone number, email, and social media icon links.

### `Navbar`
The template SHALL display a sticky navbar with the "Regalia" brand name and navigation links.

### `HeroSlider`
The template SHALL display a full-width hero section with heading, subtitle, and call-to-action button.

### `ReservationBar`
The template SHALL display a reservation form with check-in/check-out date fields and a book button.

### `Services`
The template SHALL display a services section with 4 cards showing icons and descriptions.

### `Rooms`
The template SHALL display a rooms section with 3 cards showing images, titles, and prices.

### `DiningBar`
The template SHALL display a dining section with background image, heading, and description.

### `Blog`
The template SHALL display a blog section with 3 post cards.

### `Testimonials`
The template SHALL display a testimonials section with quotes and author information.

### `Newsletter`
The template SHALL display a newsletter section with email input and subscribe button.

### `Footer`
The template SHALL display a footer with 4 columns and a link to componentdock.com.

### `BackToTop`
*anchors only* — Back to top

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
- **Provenance ban.** No file under `apps/regalia/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/regalia/public/CNAME` = `regalia.free.componentdock.com`
  and the package `homepage` = `https://regalia.free.componentdock.com`.
