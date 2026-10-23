# Gastronome — Design Notes

Reference: **Pato** — `https://colorlib.com/wp/template/pato/`  
Live preview: `https://preview.colorlib.com/theme/pato/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/pato-free-modern-restuarant-website-template.jpg  
Shipped: https://gastronome.free.componentdock.com

A modern Italian restaurant website template. Recreation of ColorLib "Pato". **Source slug:** `pato` **Source URL:** https://colorlib.com/wp/template/pato/ **Preview URL:** https://preview.colorlib.com/theme/pato/ **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript **New name:** `gastronome` (app: `apps/gastronome`, package: `@free-r…

## Typography

Fonts loaded by `index.html` (Google Fonts): **Courgette**, **Montserrat**, **Poppins**

## Design tokens (`apps/gastronome/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ec1d25` | brand |
| `--color-surface-dark` | `#222222` | surface dark |
| `--color-surface-darker` | `#111111` | surface darker |
| `--color-text-dark` | `#222222` | text dark |
| `--color-text-gray` | `#666666` | text gray |
| `--color-text-placeholder` | `#aaaaaa` | text placeholder |
| `--color-border-light` | `#d9d9d9` | border light |
| `--color-border-lighter` | `#e6e6e6` | border lighter |
| `--color-white` | `#ffffff` | white |
| `--font-heading` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font heading |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-accent` | `'Courgette', cursive` | font accent |
| `--font-secondary` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font secondary |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `HeroSlider` | Hero slider shows slides with CTA | see fidelity note below |
| 3 | `Welcome` | Welcome section displays restaurant info | see fidelity note below |
| 4 | `Intro` | Intro section shows three feature cards | see fidelity note below |
| 5 | `OurMenu` | Menu section shows food categories | see fidelity note below |
| 6 | `Events` | Events section displays countdown timer | see fidelity note below |
| 7 | `Booking` | Booking form renders all fields | see fidelity note below |
| 8 | `Reviews` | Reviews carousel shows customer testimonials | see fidelity note below |
| 9 | `Video` | Video section has parallax and play button | see fidelity note below |
| 10 | `Blog` | Blog section shows latest news cards | see fidelity note below |
| 11 | `Signup` | Sign-up form collects email | see fidelity note below |
| 12 | `Footer` | Footer renders contact info and gallery | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Gastronome

### `HeroSlider`
The hero section SHALL display a carousel with background images, centered text, and CTA buttons.

### `Welcome`
The Welcome section SHALL display restaurant info with subtitle, heading, description, and image.

### `Intro`
The Intro section SHALL display a parallax banner and three feature cards with images, titles, descriptions, and links.

### `OurMenu`
The Our Menu section SHALL display food category images in an asymmetric grid with overlay buttons.

### `Events`
The Events section SHALL display event cards with countdown timers.

### `Booking`
The Booking section SHALL display a reservation form with Date, Time, People, Name, Phone, Email fields.

### `Reviews`
The Reviews section SHALL display customer reviews with avatars, quotes, star ratings, and reviewer names.

### `Video`
The Video section SHALL display a parallax background with a centered play button.

### `Blog`
The Blog section SHALL display three blog cards with images, date badges, titles, excerpts, and links.

### `Signup`
The Sign-up section SHALL display an email input and submit button on a patterned background.

### `Footer`
The footer SHALL display contact info, opening times, latest posts, gallery, and social icons.

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
- **Provenance ban.** No file under `apps/gastronome/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/gastronome/public/CNAME` = `gastronome.free.componentdock.com`
  and the package `homepage` = `https://gastronome.free.componentdock.com`.
