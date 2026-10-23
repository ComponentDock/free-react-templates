# Goquest — Design Notes

Reference: **Gotrip** — `https://colorlib.com/wp/template/gotrip/`  
Live preview: `https://preview.colorlib.com/theme/gotrip/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/gotrip-free-template.jpg  
Shipped: https://goquest.free.componentdock.com

A Travel & Tour Booking template with hero section with search, services section with 4 icon and favourite places with 6 tour sections. Recreation of ColorLib "Gotrip" travel/tour booking template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page site.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Barlow Condensed**, **Barlow Condensed:wght@200;300;400;500;600;700;800;900**, **Roboto**, **Satisfy**

## Design tokens (`apps/goquest/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#014b85` | brand |
| `--color-brand-hover` | `#013968` | brand hover |
| `--color-accent-yellow` | `#fde02f` | accent yellow |
| `--color-accent-warm` | `#ffb400` | accent warm |
| `--color-accent-warm-alt` | `#ffa801` | accent warm alt |
| `--color-accent-red` | `#e6373d` | accent red |
| `--color-navy-dark` | `#0e1c35` | navy dark |
| `--color-heading` | `#0b1c39` | heading |
| `--color-body` | `#506172` | body |
| `--color-nav-text` | `#264247` | nav text |
| `--color-card-border` | `#f0f1f2` | card border |
| `--color-price` | `#4cafa4` | price |
| `--color-star` | `#ffa800` | star |
| `--color-footer-text` | `#ced9e1` | footer text |
| `--font-heading` | `'Barlow Condensed', sans-serif` | font heading |
| `--font-body` | `'Roboto', sans-serif` | font body |
| `--font-display` | `'Satisfy', cursive` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Header with info bar and sticky navigation | see fidelity note below |
| 2 | `Hero` | Hero section with search form | see fidelity note below |
| 3 | `Services` | Services section with 4 icon cards | see fidelity note below |
| 4 | `FavouritePlaces` | Favourite Places with 6 tour cards | see fidelity note below |
| 5 | `VideoArea` | Video area with parallax background | see fidelity note below |
| 6 | `AboutCompany` | About company section with image and checklist | see fidelity note below |
| 7 | `Testimonial` | Testimonial section | see fidelity note below |
| 8 | `BlogSection` | Blog section with 2 cards | see fidelity note below |
| 9 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The header shall display a dark navy top info bar with email, phone, and address plus social icons. Below that, a sticky white navigation bar with the GoQuest logo on the left and 6 menu links (Home, About, Package, Blog, Pages, Contact) with dropdown submenus for Blog and Pages.

### `Hero`
The hero section shall display a full-width background image with dark overlay, a yellow script headline "Find your Next tour!", subtitle "Where would you like to go?", and a search form with destination input, date dropdown, and yellow search button.

### `Services`
The services section shall display 4 service cards in a horizontal grid with icons and headings: "8000+ Our Local Guides", "100% Trusted Tour Agency", "28+ Years of Travel Experience", "98% Our Travelers are Happy".

### `FavouritePlaces`
The section shall display "FEATURED TOURS Packages" / "Favourite Places" title and 6 tour package cards in a 3-column grid, each with image, star rating, name, price (teal), duration, and location.

### `VideoArea`
The video section shall display a full-width parallax background with a yellow play button and text overlay "Love where you're going in the perfect time" and "GoQuest is a World Leading Online Tour Booking Platform".

### `AboutCompany`
The about section shall display a 2-column layout: left side has an image with rotated "Since 1992" badge, right side has heading "About Our Company", paragraph, 4 checked items, and "About us" outline button.

### `Testimonial`
The testimonial section shall display a background image with a centered carousel containing a quote icon, testimonial text, founder avatar, name, and title.

### `BlogSection`
The blog section shall display "Our Recent news" / "Tourist Blog" title and 2 blog cards with image, category tag "Traveling", title, "Read more" link, and floating date badge.

### `Footer`
The footer shall display a dark background with 4 columns (logo+about, Quick Links, New Products, Support), bottom bar with copyright and social icons, and links in yellow. Footer MUST link to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/goquest/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/goquest/public/CNAME` = `goquest.free.componentdock.com`
  and the package `homepage` = `https://goquest.free.componentdock.com`.
