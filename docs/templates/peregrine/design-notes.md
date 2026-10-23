# Peregrine — Design Notes

Reference: **Traveland** — `https://colorlib.com/wp/template/traveland/`  
Live preview: `https://preview.colorlib.com/theme/traveland/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/traveland-free-template.jpg  
Shipped: https://peregrine.free.componentdock.com

Peregrine is a single-page travel agency / tour booking template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/peregrine/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ffb400` | brand |
| `--color-panel` | `#232931` | panel |
| `--color-footer` | `#222831` | footer |
| `--color-ink` | `rgba(0, 0, 0, 0.8)` | ink |
| `--color-soft` | `#f8f9fa` | soft |
| `--color-fade` | `rgba(0, 0, 0, 0.3)` | fade |
| `--color-faint` | `rgba(255, 255, 255, 0.7)` | faint |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header — scroll-aware navbar with Book Now pill | see fidelity note below |
| 2 | `Hero` | Hero banner | see fidelity note below |
| 3 | `SearchPanel` | Search panel | see fidelity note below |
| 4 | `Destinations` | — | no dedicated spec block |
| 5 | `Services` | Activities services section | see fidelity note below |
| 6 | `About` | About Traveland section with counters | see fidelity note below |
| 7 | `Hotels` | Hotel & Restaurant section | see fidelity note below |
| 8 | `TravelTips` | Best Place to Travel section | see fidelity note below |
| 9 | `Testimonials` | Happy Traveler Says testimonial carousel | see fidelity note below |
| 10 | `Blog` | Recent Stories blog section | see fidelity note below |
| 11 | `Subscribe` | Subscribe band | see fidelity note below |
| 12 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Header`
The system SHALL render a navbar with the brand on the left, six nav links (Home, About, Destination, Hotels & Restaurant, Blog, Contact), and a gold "Book Now" pill on the right (desktop only). At the top of the page the navbar SHALL be transparent with white text over the hero; on scroll it SHALL become a fixed white bar with black text. On mobile a hamburger SHALL open the same nav links.

### `Hero`
The system SHALL render a full-viewport hero with a travel-photo background under a purple-blue gradient overlay, a large white headline "Be a Traveler not a Tourist" right-aligned, and a white supporting paragraph.

### `SearchPanel`
The system SHALL render a dark `#232931` search panel directly below the hero with four labeled fields — Destination (text), Check-in date, Check-out date (date inputs), Price Limit (select from $5,000 to $2,000,000) — and a gold "Search" button with black text.

### `Destinations`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Services`
The system SHALL render an Activities section on a light-grey background with four service blocks (Activities, Travel Arrangements, Private Guide, Location Manager), each showing a gradient icon, a heading, and a paragraph.

### `About`
The system SHALL render a split About section with a photo on the left and, on the right, the "About Traveland" heading, a paragraph, and a 2×2 grid of grey counter boxes (30 Amazing Deals, 200 Sold Tours, 2500 New Tours, 40 Happy Customers).

### `Hotels`
The system SHALL render a "Hotel & Restaurant" section with a centered heading and three price cards, each showing a photo, a white "$600" price badge, a "300 per person" label, a hotel title, five gold stars, and a "(120)" review count.

### `TravelTips`
The system SHALL render a "Best Place to Travel" section with a centered heading and four destination cards, each showing a photo, a white "$400" price badge, a "15 Days Tour" label, a destination title, five gold stars, and a "(120)" review count.

### `Testimonials`
The system SHALL render a testimonial section on a dark overlay background with a centered white "Happy Traveler Says" heading and a carousel of traveler testimonials, each showing a quote, a name, and a position.

### `Blog`
The system SHALL render a "Recent Stories" section on a light-grey background with three blog cards, each showing a photo, a date block (day, month, year), and a post title.

### `Subscribe`
The system SHALL render a dark-background subscribe band with the heading "Subscribe to our Newsletter", an email input, and a gold "Subscribe" button.

### `Footer`
The system SHALL render a dark footer with four widget columns (brand + 3 social icons, Infromation links, Experience links, Have a Questions? contact) and a bottom bar with the copyright line. The credit SHALL read "This template is made with ♥ by **Component Dock**" linking https://www.componentdock.com/ (no ColorLib credit).

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
- **Provenance ban.** No file under `apps/peregrine/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/peregrine/public/CNAME` = `peregrine.free.componentdock.com`
  and the package `homepage` = `https://peregrine.free.componentdock.com`.
