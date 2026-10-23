# Bidcraft — Design Notes

Reference: **Auction** — `https://colorlib.com/wp/template/auction/`  
Live preview: `https://preview.colorlib.com/theme/auction/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/auction-free-template.jpg  
Shipped: https://bidcraft.free.componentdock.com

Bidcraft is a single-page auction marketplace landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Mulish**, **Mulish:wght@300;400;700;900**

## Design tokens (`apps/bidcraft/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fff3ec` | primary 50 |
| `--color-primary-100` | `#ffe0d1` | primary 100 |
| `--color-primary-200` | `#ffc1a3` | primary 200 |
| `--color-primary-300` | `#ff9a6b` | primary 300 |
| `--color-primary-400` | `#f37121` | primary 400 |
| `--color-primary-500` | `#e05f14` | primary 500 |
| `--color-primary-600` | `#c44e0d` | primary 600 |
| `--color-primary-700` | `#a03d0a` | primary 700 |
| `--color-primary-800` | `#7d300b` | primary 800 |
| `--color-primary-900` | `#64270c` | primary 900 |
| `--color-smoke` | `#999999` | Muted body copy (#999999). |
| `--color-ink` | `#000000` | Dark headings (#000000). |
| `--font-sans` | `'Mulish', ui-sans-serif, system-ui, sans-serif` | Mulish (headings + body) via Google Fonts <link> in index.html. |
| `--font-display` | `'Mulish', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with navigation links and brand | see fidelity note below |
| 2 | `Hero` | Hero section with CTA | see fidelity note below |
| 3 | `AuctionGrid` | Auction grid with product cards | see fidelity note below |
| 4 | `HowItWorks` | How It Works steps | see fidelity note below |
| 5 | `AboutSplit` | About Us split section | see fidelity note below |
| 6 | `Testimonials` | Testimonials section | see fidelity note below |
| 7 | `CTA` | Hero section with CTA | see fidelity note below |
| 8 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a fixed navigation bar with the "Bidcraft" brand name and links to Home, Buy, Sell, Services (with dropdown), Blog, About, and Contact sections. A "Sign In / Register" link SHALL be visible.

### `Hero`
The template SHALL display a full-width hero section with a background image, dark overlay, heading "The Best Place to Buy and Sell", descriptive subtext, and a "Register" call-to-action button.

### `AuctionGrid`
The template SHALL display 8 product auction cards in a responsive grid. Each card SHALL show a price badge, product image, title, category, bid count, and a "Submit a Bid" button.

### `HowItWorks`
The template SHALL display a "How It Works" section with 4 steps: Register, Buy or Bid, Submit a Bid, and Win. Each step SHALL have an icon, title, and description.

### `AboutSplit`
The template SHALL display an About Us section with an image on the left and feature items (Fast Support, 24/7 Support) on the right.

### `Testimonials`
The template SHALL display a testimonials section with a background image overlay, heading "Happy Clients", and at least one testimonial card with a photo, name, role, and quote.

### `CTA`
The template SHALL display a full-width hero section with a background image, dark overlay, heading "The Best Place to Buy and Sell", descriptive subtext, and a "Register" call-to-action button.

### `Footer`
The template SHALL display a footer with 4 columns (brand, Solutions, Services, Contact) and a copyright line. The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/bidcraft/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/bidcraft/public/CNAME` = `bidcraft.free.componentdock.com`
  and the package `homepage` = `https://bidcraft.free.componentdock.com`.
