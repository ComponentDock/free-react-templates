# Sarto — Design Notes

Reference: **Fashiop** — `https://colorlib.com/wp/template/fashiop/`  
Live preview: `https://preview.colorlib.com/theme/fashiop/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/fashiop-free-template.jpg  
Shipped: https://sarto.free.componentdock.com

Recreation of ColorLib "Fashiop" (https://colorlib.com/wp/template/fashiop/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript template. Sarto is a fashion e-commerce landing page with a bold blue brand palette, full-width hero banner, product grid with hover icons, newsletter subscription, and a multi-column footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**, **Roboto**

## Design tokens (`apps/sarto/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-50` | `#eef2ff` | brand 50 |
| `--color-brand-100` | `#dde5ff` | brand 100 |
| `--color-brand-200` | `#c2cfff` | brand 200 |
| `--color-brand-300` | `#96a8ff` | brand 300 |
| `--color-brand-400` | `#6478ff` | brand 400 |
| `--color-brand-500` | `#1641ff` | brand 500 |
| `--color-brand-600` | `#0e2fdb` | brand 600 |
| `--color-brand-700` | `#0c24b0` | brand 700 |
| `--color-brand-800` | `#0f228e` | brand 800 |
| `--color-brand-900` | `#132174` | brand 900 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Roboto — the original template's primary typeface |
| `--font-accent` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Poppins — accent typeface |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | TopBar displays contact and account links | see fidelity note below |
| 2 | `Navbar` | Navbar provides navigation and icon actions | see fidelity note below |
| 3 | `Hero` | Hero section displays fashion banner | see fidelity note below |
| 4 | `HotDeals` | Hot Deals section shows two deal cards | see fidelity note below |
| 5 | `ClientsLogo` | Clients Logo section shows partner logos | see fidelity note below |
| 6 | `FeaturedProducts` | Featured Products section displays product grid | see fidelity note below |
| 7 | `Newsletter` | Newsletter section accepts email subscriptions | see fidelity note below |
| 8 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `TopBar`
Users SHALL see a top bar with phone number on the left and Login/Register, My Account, Contact Us links on the right.

### `Navbar`
Users SHALL see a navbar with the "Sarto" logo, desktop nav links (Home, Shop, Blog, Pages, Contact), and icon buttons (search, user, heart, cart). Mobile users SHALL see a hamburger toggle.

### `Hero`
Users SHALL see a full-width hero banner with headline "Fashion for Upcoming Winter", subtext, and a "View Collection" CTA button.

### `HotDeals`
Users SHALL see two side-by-side deal cards with background images, headings, and "shop now" text.

### `ClientsLogo`
Users SHALL see a row of 5 partner logo placeholder images.

### `FeaturedProducts`
Users SHALL see a heading "Featured Products", 10 product cards with name, price, and hover action buttons (wishlist + cart), plus pagination controls.

### `Newsletter`
Users SHALL see a newsletter heading, subtext, email input, and "Get Started" button. Submitting a valid email shows a confirmation message.

### `Footer`
Users SHALL see a 4-column footer (About Us, Newsletter, Instagram Feed, Follow Us) with a bottom bar containing a "Component Dock" link to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/sarto/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sarto/public/CNAME` = `sarto.free.componentdock.com`
  and the package `homepage` = `https://sarto.free.componentdock.com`.
