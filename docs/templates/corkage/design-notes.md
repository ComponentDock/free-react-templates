# Corkage — Design Notes

Reference: **Resta** — `https://colorlib.com/wp/template/resta/`  
Live preview: `https://preview.colorlib.com/theme/resta/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/resta-free-template.jpg  
Shipped: https://corkage.free.componentdock.com

Recreate the ColorLib "Resta" template (https://colorlib.com/wp/template/resta/) as a React 19 + Tailwind CSS 4 + TypeScript single-page restaurant landing template named "Corkage". The design is a warm-toned Indian restaurant site with a hero carousel, about section, tabbed menu, testimonials, reservation form, and footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Playfair Display**, **Playfair Display:wght@400;500;600;700**

## Design tokens (`apps/corkage/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#e8a87c` | brand |
| `--color-brand-dark` | `#d4956a` | brand dark |
| `--color-ink` | `#333333` | Ink — dark text. |
| `--color-ink-light` | `#555555` | ink light |
| `--color-paper` | `#ffffff` | Paper — light section background. |
| `--color-surface` | `#222222` | Dark surface — navbar/footer (#222222). |
| `--color-surface-light` | `#2a2a2a` | surface light |
| `--color-mist` | `#777777` | Mist — muted body text. |
| `--color-primary-50` | `#fdf5ef` | primary 50 |
| `--color-primary-100` | `#fae8d9` | primary 100 |
| `--color-primary-200` | `#f5d0b3` | primary 200 |
| `--color-primary-300` | `#e8a87c` | primary 300 |
| `--color-primary-400` | `#d4956a` | primary 400 |
| `--color-primary-500` | `#c4824f` | primary 500 |
| `--color-primary-600` | `#b06e3a` | primary 600 |
| `--color-primary-700` | `#9a5c2d` | primary 700 |
| `--color-primary-800` | `#7d4a24` | primary 800 |
| `--color-primary-900` | `#5f381b` | primary 900 |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | Original fonts: "Open Sans" (body) + "Playfair Display" (headings). |
| `--font-display` | `'Playfair Display', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Menu` | Menu section | see fidelity note below |
| 5 | `Testimonials` | Testimonials section | see fidelity note below |
| 6 | `Reservation` | Reservation form | see fidelity note below |
| 7 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a sticky dark (#222222) navigation bar with brand name "Corkage" and links to Home, Menu, About, Testimonials, and Contact. The navbar SHALL include a "Book a Table" CTA button on the right side. The navbar SHALL include a mobile hamburger menu that toggles open/closed on click.

### `Hero`
The template SHALL display a full-width hero section with a background image, dark overlay, heading text "Fresh And Delicious Food For Your Health", and an orange (#E8A87C) "View Menus" CTA button linking to the menu section.

### `About`
The template SHALL display a split-layout about section with a decorative food icon on the left, a heading "Sed ut perspiciatis unde omnis iste natus", descriptive paragraph text, and two stacked food images on the right.

### `Menu`
The template SHALL display a tabbed menu section with tabs for Starters, Main Course, and Desserts. Each tab SHALL show menu items with name, description, and price.

### `Testimonials`
The template SHALL display a testimonials section with customer quotes, names, and roles. The testimonials SHALL be displayed in a carousel with previous/next navigation.

### `Reservation`
The template SHALL display a "Book a Table" reservation form with fields for Name, Email, Phone, Date, Time, and Number of Guests, plus a "Book Now" submit button.

### `Footer`
The template SHALL display a dark-background footer with About Us, Recent Blog, Services links, and Newsletter signup. The footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/corkage/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/corkage/public/CNAME` = `corkage.free.componentdock.com`
  and the package `homepage` = `https://corkage.free.componentdock.com`.
