# Townhub — Design Notes

Reference: **Citylisting** — `https://colorlib.com/wp/template/citylisting/`  
Live preview: `https://preview.colorlib.com/theme/citylisting/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/citylisting-free-template.jpg  
Shipped: https://townhub.free.componentdock.com

Recreate the ColorLib CityListing directory/listing template as a React 19 + Vite + Tailwind CSS 4 + TypeScript app named "TownHub". The template is a city directory one-pager with a hero search bar, popular locations, how-it-works steps, featured categories, testimonials, newsletter subscribe, blog posts, and a dark footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Pacifico**, **Poppins**, **Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400**

## Design tokens (`apps/townhub/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff3d1c` | brand |
| `--color-brand-dark` | `#eb566c` | brand dark |
| `--color-accent` | `#31ff7a` | accent |
| `--color-navy` | `#1c1930` | navy |
| `--color-deep` | `#010e21` | deep |
| `--color-body` | `#10285d` | body |
| `--color-muted` | `#57667e` | muted |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-script` | `'Pacifico', cursive` | font script |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar provides navigation and CTA | see fidelity note below |
| 2 | `Hero` | Hero search form is interactive | see fidelity note below |
| 3 | `PopularLocations` | Popular Locations displays 3 cards | see fidelity note below |
| 4 | `HowItWorks` | — | no dedicated spec block |
| 5 | `Categories` | — | no dedicated spec block |
| 6 | `Testimonial` | — | no dedicated spec block |
| 7 | `Subscribe` | — | no dedicated spec block |
| 8 | `Blog` | — | no dedicated spec block |
| 9 | `Footer` | Footer contains Component Dock link | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The navbar SHALL display the Town Hub brand logo, navigation links (Home, About, Categories, Listing, Page, Contact), an "+ Add Listing" CTA button, and a "Sign in or Register" link.

### `Hero`
The hero section SHALL display a search form with a text input, category dropdown, and search button.

### `PopularLocations`
The Popular Locations section SHALL display 3 location cards with images and names.

### `HowItWorks`
*anchors only* — How It Works · Every Month, Millions of People · Trust Town Hub to find the best places in their cities. Here is how it works.

### `Categories`
*anchors only* — Most popular · Featured Categories

### `Testimonial`
*anchors only* — Testimonials · What our clients say

### `Subscribe`
*anchors only* — Email address · Subscribe

### `Blog`
*anchors only* — Latest tips · News and tips

### `Footer`
The footer SHALL contain a link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/townhub/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/townhub/public/CNAME` = `townhub.free.componentdock.com`
  and the package `homepage` = `https://townhub.free.componentdock.com`.
