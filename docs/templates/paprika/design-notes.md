# Paprika — Design Notes

Reference: **Redcayenne** — `https://colorlib.com/wp/template/redcayenne/`  
Live preview: `https://preview.colorlib.com/theme/redcayenne/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/redcayenne-free-template.jpg  
Shipped: https://paprika.free.componentdock.com

A premium restaurant landing page with top bar, navbar, hero slider, services grid, table booking form, menu showcase, chef profiles. It also includes events section, blog, and footer. Recreation of ColorLib's **RedCayenne**.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Cantata One**, **Great Vibes**, **Open Sans**

## Design tokens (`apps/paprika/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#b10400` | brand |
| `--color-brand-dark` | `#8b0300` | brand dark |
| `--font-heading` | `'Cantata One', serif` | font heading |
| `--font-cursive` | `'Great Vibes', cursive` | font cursive |
| `--font-body` | `'Open Sans', sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | TopBar renders contact info and action buttons | see fidelity note below |
| 2 | `Navbar` | Navbar displays brand and navigation links | see fidelity note below |
| 3 | `Hero` | Hero section displays welcome message and CTA | see fidelity note below |
| 4 | `Services` | Services section shows four items | see fidelity note below |
| 5 | `BookTable` | BookTable form with date, time, party size | see fidelity note below |
| 6 | `MenuSection` | Menu section shows food items with prices | see fidelity note below |
| 7 | `Chefs` | Chefs section shows team members | see fidelity note below |
| 8 | `Events` | Events section shows upcoming event | see fidelity note below |
| 9 | `Blog` | Blog section shows recent posts | see fidelity note below |
| 10 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `TopBar`
The application SHALL display a dark top bar with phone, email, and booking action buttons.

### `Navbar`
The application SHALL display a sticky white navbar with the brand name "Paprika" and navigation links.

### `Hero`
The application SHALL display a full-width hero with background image and call-to-action.

### `Services`
The application SHALL display a 4-column services grid with food/drink categories.

### `BookTable`
The application SHALL display a reservation form on a dark background.

### `MenuSection`
The application SHALL display a grid of food menu items with images, names, prices, and ratings.

### `Chefs`
The application SHALL display chef cards with photos, names, and roles.

### `Events`
The application SHALL display a split-layout event section with image and details.

### `Blog`
The application SHALL display a 3-column grid of blog post cards.

### `Footer`
The application SHALL display a footer with about, contact, posts, gallery, and a Component Dock link.

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
- **Provenance ban.** No file under `apps/paprika/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/paprika/public/CNAME` = `paprika.free.componentdock.com`
  and the package `homepage` = `https://paprika.free.componentdock.com`.
