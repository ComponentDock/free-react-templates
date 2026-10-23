# Haven — Design Notes

Reference: **Sona** — `https://colorlib.com/wp/template/sona/`  
Live preview: `https://preview.colorlib.com/theme/sona/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/sona-free-template.jpg  
Shipped: https://haven.free.componentdock.com

A luxury hotel landing page with a hero section featuring a booking form, an about section, a services grid, room cards with pricing, testimonials, and a footer with contact info and newsletter signup. Built with React 19, Tailwind CSS 4, and TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Cabin**, **Cabin:wght@400;500;600;700**, **Lora**

## Design tokens (`apps/haven/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fdf6ed` | primary 50 |
| `--color-primary-100` | `#f9e8d3` | primary 100 |
| `--color-primary-200` | `#f2d0a5` | primary 200 |
| `--color-primary-300` | `#e9b472` | primary 300 |
| `--color-primary-400` | `#dfa974` | primary 400 |
| `--color-primary-500` | `#d4944f` | primary 500 |
| `--color-primary-600` | `#b87a3d` | primary 600 |
| `--color-primary-700` | `#996033` | primary 700 |
| `--color-primary-800` | `#7d4e2e` | primary 800 |
| `--color-primary-900` | `#674128` | primary 900 |
| `--color-ink` | `#19191a` | ink |
| `--color-body` | `#6b6b6b` | body |
| `--font-sans` | `'Cabin', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Lora', Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with navigation and booking CTA | see fidelity note below |
| 2 | `Hero` | Hero section with booking form | see fidelity note below |
| 3 | `About` | About section with hotel description | see fidelity note below |
| 4 | `Services` | Services section with 6 service cards | see fidelity note below |
| 5 | `Rooms` | Room cards with pricing | see fidelity note below |
| 6 | `Testimonials` | Testimonials section | see fidelity note below |
| 7 | `Footer` | Footer with contact, newsletter, and Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL render a sticky navbar with the brand name "Haven", navigation links for Home, Rooms, About, Services, Testimonials, and Contact, and a "Booking Now" call-to-action button. On mobile, the navbar SHALL show a hamburger menu that toggles open/closed.

### `Hero`
The template SHALL render a hero section with a headline "Haven A Luxury Hotel", a description paragraph, a "Discover Now" CTA link, and a booking form with Check In, Check Out date inputs, Guests select, Room select, and a "Check Availability" submit button.

### `About`
The template SHALL render an About section with a "About Us" label, a heading about the hotel, two paragraphs of description, a "Read More" link, and two placeholder images.

### `Services`
The template SHALL render a Services section with a "What We Do" label, a "Discover Our Services" heading, and 6 service cards (Travel Plan, Catering Service, Babysitting, Laundry, Hire Driver, Bar & Drink), each with an icon, title, and description.

### `Rooms`
The template SHALL render 4 room cards (Double Room $199, Premium King Room $159, Deluxe Room $198, Family Room $299), each with an image, room name, price, specs table, and a "More Details" link.

### `Testimonials`
The template SHALL render a Testimonials section with a "Testimonials" label, a "What Customers Say?" heading, a customer quote, 5 star icons, and an author name.

### `Footer`
The template SHALL render a footer with the brand name, a description, social links (Facebook, Twitter, Instagram, YouTube), contact information (phone, email, address), a newsletter signup form, copyright with the current year, and a link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/haven/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/haven/public/CNAME` = `haven.free.componentdock.com`
  and the package `homepage` = `https://haven.free.componentdock.com`.

## Reference tokens (measured 2026-10-23)

Evidence: https://preview.colorlib.com/theme/sona/ — HTTP 200 on 2026-10-23; measured `css/style.min.css` (157,454 bytes). Title served: "Sona | Luxury Hotel and Room Booking".

- Hex census: `#19191a` 60, `#dfa974` 45, `#707079` 28, `#000` 27, `#aaaab3` 14, `#e5e5e5` 10, `#ebebeb` 10 (count = literal occurrences in the sheet).
- Typefaces: Body: `Cabin`; Headings: `Lora` (serif); Icons: `Font Awesome 7 Brands`.
- Radii: `2px` (15), `50%` (10), `5px` (6).
- Section order (shipped): `Navbar -> Hero -> About -> Services -> Rooms -> Testimonials -> Footer`.

### Deltas measured against the shipped app

- Brand gold `#dfa974` and ink `#19191a` match the app's `@theme` 1:1.
- `#707079`, `#aaaab3`, `#e5e5e5` and `#ebebeb` are not tokenized in `apps/haven` — the app carries `--color-body #6b6b6b`, a literal with a single occurrence in the sheet.
- The app drops the reference's Blog band (7 sections rendered vs 8 in the demo).
