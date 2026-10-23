# Listhub — Design Notes

Reference: **Listio** — `https://colorlib.com/wp/template/listio/`  
Live preview: `https://preview.colorlib.com/theme/listio/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/listio-free-template.jpg  
Shipped: https://listhub.free.componentdock.com

Listhub is a directory listing template that helps users discover and connect with local businesses. It features a search-driven hero, category browsing, featured listing cards, a how-it-works section, testimonials, newsletter signup, and blog posts.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Josefin Sans**, **Josefin Sans:wght@300;400;500;600;700**

## Design tokens (`apps/listhub/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff377b` | brand |
| `--color-brand-hover` | `#e62e6d` | brand hover |
| `--color-heading` | `#1f2b7b` | heading |
| `--color-text-dark` | `#222222` | text dark |
| `--color-text-muted` | `#777777` | text muted |
| `--color-bg-light` | `#f9f9ff` | bg light |
| `--color-bg-subtle` | `#f0e9ff` | bg subtle |
| `--color-border-light` | `#eaeaea` | border light |
| `--color-surface` | `#ffffff` | surface |
| `--color-dark-bg` | `#071112` | dark bg |
| `--font-family-heading` | `'Josefin Sans', sans-serif` | font family heading |
| `--font-family-body` | `'Josefin Sans', sans-serif` | font family body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar is interactive | see fidelity note below |
| 2 | `Hero` | Hero search form works | see fidelity note below |
| 3 | `Categories` | — | no dedicated spec block |
| 4 | `FeatureBlock` | Featured listings display correctly | see fidelity note below |
| 5 | `FeaturedListings` | — | no dedicated spec block |
| 6 | `HowItWorks` | — | no dedicated spec block |
| 7 | `Testimonials` | Page renders all major sections | see fidelity note below |
| 8 | `Newsletter` | Newsletter accepts email | see fidelity note below |
| 9 | `BlogPosts` | — | no dedicated spec block |
| 10 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The navbar SHALL provide navigation links, a search input, and a mobile menu toggle.

### `Hero`
The hero section SHALL provide a search form with text input, category dropdown, city dropdown, and submit button.

### `Categories`
*anchors only* — We help you to find · Explore Categories

### `FeatureBlock`
The featured listings section SHALL display 6 listing cards in a 3-column grid.

### `FeaturedListings`
*anchors only* — Featured Listing · Explore Categories · Explore More

### `HowItWorks`
*anchors only* — How Listhub Works · Explore Our Process

### `Testimonials`
The template SHALL render a complete directory listing page with navbar, hero, categories, feature block, featured listings, how-it-works, testimonials, newsletter, blog posts, and footer.

### `Newsletter`
The newsletter section SHALL accept email input and have a working form.

### `BlogPosts`
*anchors only* — Latest News · Explore Blog Post

### `Footer`
The footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/listhub/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/listhub/public/CNAME` = `listhub.free.componentdock.com`
  and the package `homepage` = `https://listhub.free.componentdock.com`.
