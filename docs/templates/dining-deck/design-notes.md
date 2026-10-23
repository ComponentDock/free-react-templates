# Dining-deck — Design Notes

Reference: **Wordpress Restaurant Themes** — `https://colorlib.com/wp/template/wordpress-restaurant-themes/`  
Live preview: `https://preview.colorlib.com/theme/wordpress-restaurant-themes/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/jevelin-restaurant-website-template.jpg  
Shipped: https://dining-deck.free.componentdock.com

A premium restaurant landing page with a dark hero overlay, teal accents, cursive branding, and warm culinary aesthetic. Sections include navbar, hero, about, stats, features, reservation/contact, and footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Kalam**, **Kalam:wght@400;700**, **Raleway**

## Design tokens (`apps/dining-deck/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-teal-50` | `#edfcfe` | teal 50 |
| `--color-teal-100` | `#d2f6fb` | teal 100 |
| `--color-teal-200` | `#abeef6` | teal 200 |
| `--color-teal-300` | `#72e2ef` | teal 300 |
| `--color-teal-400` | `#47c9e5` | teal 400 |
| `--color-teal-500` | `#2babc8` | teal 500 |
| `--color-teal-600` | `#239cb7` | teal 600 |
| `--color-teal-700` | `#237d96` | teal 700 |
| `--color-teal-800` | `#26677b` | teal 800 |
| `--color-teal-900` | `#245667` | teal 900 |
| `--color-gold-400` | `#d4a843` | gold 400 |
| `--color-gold-500` | `#c49a38` | gold 500 |
| `--font-sans` | `'Raleway', ui-sans-serif, system-ui, sans-serif` | Raleway — the original template's primary typeface |
| `--font-script` | `'Kalam', cursive` | font script |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with cursive branding | see fidelity note below |
| 2 | `Hero` | Hero section with food imagery | see fidelity note below |
| 3 | `About` | About section with image and text | see fidelity note below |
| 4 | `Stats` | Stats counters | see fidelity note below |
| 5 | `Features` | Features section | see fidelity note below |
| 6 | `Reservation` | Reservation / Contact section | see fidelity note below |
| 7 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The page SHALL display a fixed navigation bar with the "DiningDeck" logo in cursive font and links to Home, About Us, Menu, Reservation, and Contacts.

### `Hero`
The page SHALL display a full-width hero section with a food background image, "Premium Quality" script text, and a "Restaurant & Dishes" heading.

### `About`
The page SHALL display a two-column about section with an image on the left and descriptive text with a "Learn More" link on the right.

### `Stats`
The page SHALL display a row of 4 statistics with numbers and labels (Years of Experience, Branches Worldwide, Menu Items, Expert Staff).

### `Features`
The page SHALL display 3 feature cards with icons (UtensilsCrossed, Leaf, CalendarDays), titles, and descriptions.

### `Reservation`
The page SHALL display a dark-background section with "Make a Reservation" heading and contact information (phone, address, email).

### `Footer`
The page SHALL display a footer with the DiningDeck logo, social links, and a link to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/dining-deck/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/dining-deck/public/CNAME` = `dining-deck.free.componentdock.com`
  and the package `homepage` = `https://dining-deck.free.componentdock.com`.
