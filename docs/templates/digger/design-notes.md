# Digger — Design Notes

Reference: **Unearth** — `https://colorlib.com/wp/template/unearth/`  
Live preview: `https://preview.colorlib.com/theme/unearth/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/unearth-free-template.jpg  
Shipped: https://digger.free.componentdock.com

Digger is a construction and mining landing page template recreated from the ColorLib Unearth design.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Oswald**, **Oswald:wght@400;500;600;700**, **Rubik**

## Design tokens (`apps/digger/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff8b00` | brand |
| `--color-brand-dark` | `#e67e00` | brand dark |
| `--color-green-accent` | `#71bc42` | green accent |
| `--color-heading` | `#1a1a2e` | heading |
| `--color-body` | `#666666` | body |
| `--color-light-bg` | `#f8f9fa` | light bg |
| `--color-dark-bg` | `#111111` | dark bg |
| `--color-border` | `#e0e0e0` | border |
| `--font-heading` | `'Oswald', ui-sans-serif, system-ui, sans-serif` | font heading |
| `--font-sans` | `'Rubik', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Top bar with contact info and social links | see fidelity note below |
| 2 | `Navbar` | — | no dedicated spec block |
| 3 | `Hero` | Hero section with CTA | see fidelity note below |
| 4 | `Services` | Services section with alternating blocks | see fidelity note below |
| 5 | `Features` | Feature cards | see fidelity note below |
| 6 | `About` | About section with stats | see fidelity note below |
| 7 | `Team` | Team section | see fidelity note below |
| 8 | `Pricing` | Pricing section | see fidelity note below |
| 9 | `FAQ` | FAQ section | see fidelity note below |
| 10 | `Press` | Press section | see fidelity note below |
| 11 | `Testimonials` | Testimonials section | see fidelity note below |
| 12 | `Blog` | Blog section | see fidelity note below |
| 13 | `Contact` | Top bar with contact info and social links | see fidelity note below |
| 14 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
The template SHALL display a gradient top bar with email and phone contact information on the left and social media links on the right.

### `Navbar`
*anchors only* — Toggle menu · Digger

### `Hero`
The template SHALL display a full-width hero section with a background image, heading text, subtitle, and a call-to-action button.

### `Services`
The template SHALL display two service blocks with alternating image-text layouts.

### `Features`
The template SHALL display six feature cards with icons on a light background.

### `About`
The template SHALL display an about section on a dark background with a video placeholder and four counter stats.

### `Team`
The template SHALL display three team member cards with photos, names, and roles.

### `Pricing`
The template SHALL display three pricing tiers with prices and feature lists.

### `FAQ`
The template SHALL display an FAQ section with 8 questions in a 2-column layout with toggle functionality.

### `Press`
The template SHALL display three press/news entries with dates and descriptions.

### `Testimonials`
The template SHALL display testimonial quotes with client names and photos.

### `Blog`
The template SHALL display two blog post cards with images, titles, dates, and excerpts.

### `Contact`
The template SHALL display a gradient top bar with email and phone contact information on the left and social media links on the right.

### `Footer`
The template SHALL display a dark footer with about text, feature links, newsletter form, social icons, and a copyright line linking to Component Dock.

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
- **Provenance ban.** No file under `apps/digger/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/digger/public/CNAME` = `digger.free.componentdock.com`
  and the package `homepage` = `https://digger.free.componentdock.com`.
