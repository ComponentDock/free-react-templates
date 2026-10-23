# Wayfarer — Design Notes

Reference: **Travelo** — `https://colorlib.com/wp/template/travelo/`  
Live preview: `https://preview.colorlib.com/theme/travelo/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/travelo-free-template.jpg  
Shipped: https://wayfarer.free.componentdock.com

Wayfarer is a single-page travel / tourism template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Nothing You Could Do**, **Rubik**, **Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900**

## Design tokens (`apps/wayfarer/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-teal` | `#1ec6b6` | teal |
| `--color-coral` | `#ff4a52` | coral |
| `--color-navy` | `#040e27` | navy |
| `--color-soft` | `#f7fafd` | soft |
| `--color-muted` | `#7a838b` | muted |
| `--color-star` | `#fdae5c` | star |
| `--color-field-line` | `#363e52` | field line |
| `--color-placeholder` | `#aab1b7` | placeholder |
| `--color-swiper-accent` | `#ff5e13` | swiper accent |
| `--font-sans` | `'Rubik', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-cursive` | `'Nothing You Could Do', ui-serif, cursive` | font cursive |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header — transparent bar with nav, phone, socials, search | see fidelity note below |
| 2 | `HeroSlider` | Hero slider | see fidelity note below |
| 3 | `SearchStrip` | Where you want to go? search strip | see fidelity note below |
| 4 | `Destinations` | Popular Destination section | see fidelity note below |
| 5 | `Newsletter` | Newsletter band | see fidelity note below |
| 6 | `Places` | Popular Places section | see fidelity note below |
| 7 | `VideoSection` | Enjoy Video section | see fidelity note below |
| 8 | `Variation` | Travel variation features | see fidelity note below |
| 9 | `Testimonials` | Testimonial carousel | see fidelity note below |
| 10 | `Trips` | Recent Trips section | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a transparent header over the hero with the brand logo on the left, a centered nav (Home, About, Destination, Pages with dropdown, Blog with dropdown, Contact), and on the right a phone number with a red phone icon, four social icons, and a search icon that opens a search modal. On mobile a hamburger SHALL open the same nav links.

### `HeroSlider`
The system SHALL render a full-width hero slider with three slides, each showing a travel photo under a dark overlay, a cursive white country-name headline, a white sub-line, and a teal "Explore Now" button, with white circular prev/next arrows and pagination dots.

### `SearchStrip`
The system SHALL render a dark-navy `#040E27` strip with the heading "Where you want to go?" on the left and, on the right, a search form with a "Where to go?" text input, a date input, a "Travel type" select, and a red "Search" button. Inputs SHALL be transparent with a 1px `#363E52` border and 5px radius.

### `Destinations`
The system SHALL render a white section with the centered title "Popular Destination", a supporting grey paragraph, and six destination cards, each showing a photo, a country name, and a teal "0N Places" pill.

### `Newsletter`
The system SHALL render a newsletter band on a photo background with a dark navy overlay (opacity .7), the heading "Subscribe Our Newsletter", a supporting paragraph, a white email input, and a red "Subscribe" button.

### `Places`
The system SHALL render a light `#F7FAFD` section with the centered title "Popular Places" and six white place cards, each showing a photo with a teal price pill, a place name, a country line, five gold stars with a review count, a days label, and a "More Places" button below the grid.

### `VideoSection`
The system SHALL render a full-width video section on a dimmed photo background (overlay opacity .2) with a cursive white "Enjoy Video" headline and a teal circular play button.

### `Variation`
The system SHALL render a white section with three icon features (Comfortable Journey / Luxuries Hotel / Travel Guide), each with an icon, a navy heading, and a grey paragraph.

### `Testimonials`
The system SHALL render a light `#F7FAFD` testimonial section with a carousel of three testimonials, each showing a circular author photo, a quote, and an author name.

### `Trips`
The system SHALL render a white section with the centered title "Recent Trips" and three trip cards, each showing a photo, a date, and a trip title.

### `Footer`
The system SHALL render a dark-navy `#040E27` footer with four widgets (logo, Company 4 links, Popular destination 8 links in two columns, Instagram 6-photo grid) and a bottom copyright bar. The credit SHALL read "This template is made with ♥ by **Component Dock**" linking https://www.componentdock.com/ (no ColorLib credit).

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
- **Provenance ban.** No file under `apps/wayfarer/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/wayfarer/public/CNAME` = `wayfarer.free.componentdock.com`
  and the package `homepage` = `https://wayfarer.free.componentdock.com`.
