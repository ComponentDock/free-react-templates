# Roster — Design Notes

Reference: **Listco** — `https://colorlib.com/wp/template/listco/`  
Live preview: `https://preview.colorlib.com/theme/listco/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/listco-free-template.jpg  
Shipped: https://roster.free.componentdock.com

Roster is a directory listing landing page template that recreates the ColorLib Listco design. It provides a hero search section, popular city cards, a scrollable directory listing carousel, a how-it-works explainer, new listings, and a branded footer linking to Component Dock.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Rubik**, **Rubik:wght@300;400;500;700;900**

## Design tokens (`apps/roster/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#b367ff` | brand |
| `--color-brand-hover` | `#8d44d6` | brand hover |
| `--color-heading` | `#072366` | heading |
| `--color-text-dark` | `#140c40` | text dark |
| `--color-text-body` | `#10285d` | text body |
| `--color-border-light` | `#ecebf0` | border light |
| `--color-bg-subtle` | `#fbf9ff` | bg subtle |
| `--font-family-rubik` | `'Rubik', sans-serif` | font family rubik |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with logo, navigation, login, and add-listing button | see fidelity note below |
| 2 | `Hero` | Hero section with search form | see fidelity note below |
| 3 | `PopularLocations` | Popular locations section with city cards | see fidelity note below |
| 4 | `PopularDirectory` | Popular directory carousel | see fidelity note below |
| 5 | `HowItWorks` | How it works section with steps | see fidelity note below |
| 6 | `NewDirectory` | New directory section | see fidelity note below |
| 7 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The page renders a fixed navbar with the "Roster" logo, navigation links (Home, Categories, Explore, Contact), a Login link, and an "Add Listing" button. The navbar transitions from transparent to solid white on scroll.

### `Hero`
The hero section displays a background image with dark overlay, a heading "Explore Your City", a subtitle, a search form with text input, category dropdown, and search button, plus category icon shortcuts.

### `PopularLocations`
The page displays an "Explore Top Cities" section with 6 city cards in a responsive grid. Each card shows a city image, name, and listing count badge.

### `PopularDirectory`
The page displays a "Popular Directory" section with scrollable listing cards. Each card shows an image with overlay, price badge, status, title, description, category, and a favorite button.

### `HowItWorks`
The page displays a "How It Works" section with a CTA button and 3 numbered steps explaining the directory process.

### `NewDirectory`
The page displays a "New Directory" section with a carousel of new listing cards.

### `Footer`
The footer renders on a dark background with logo, contact info, newsletter signup, social links, and a "Component Dock" attribution link.

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
- **Provenance ban.** No file under `apps/roster/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/roster/public/CNAME` = `roster.free.componentdock.com`
  and the package `homepage` = `https://roster.free.componentdock.com`.
