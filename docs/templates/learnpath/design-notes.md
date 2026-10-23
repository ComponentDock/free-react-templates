# Learnpath — Design Notes

Reference: **Ezuca** — `https://colorlib.com/wp/template/ezuca/`  
Live preview: `https://preview.colorlib.com/theme/ezuca/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ezuca-free-template.jpg  
Shipped: https://learnpath.free.componentdock.com

An education and online learning template with top header bar, hero, icon boxes, featured courses and gallery sections. Recreation of the ColorLib **Ezuca** template as a React 19 + Vite + Tailwind 4 + TypeScript template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700**

## Design tokens (`apps/learnpath/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#19c880` | brand |
| `--color-brand-hover` | `#34d986` | brand hover |
| `--color-text` | `#383749` | text |
| `--color-text-muted` | `#757686` | text muted |
| `--color-border` | `#ebebeb` | border |
| `--color-bg-light` | `#f7f7f7` | bg light |
| `--color-bg-input` | `#f3f3f3` | bg input |
| `--color-star` | `#f3a90b` | star |
| `--color-dark` | `#1a1a2e` | dark |
| `--font-body` | `'Roboto', sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Top header bar displays contact info and search | see fidelity note below |
| 2 | `Navbar` | Navigation bar shows all sections | see fidelity note below |
| 3 | `Hero` | Hero section displays headline and CTA | see fidelity note below |
| 4 | `IconBoxes` | Icon boxes show four feature highlights | see fidelity note below |
| 5 | `FeaturedCoursesHorizontal` | — | no dedicated spec block |
| 6 | `About` | About section shows stats and video | see fidelity note below |
| 7 | `Testimonials` | Testimonials slider shows quotes | see fidelity note below |
| 8 | `FeaturedCoursesGrid` | — | no dedicated spec block |
| 9 | `NewsEvents` | Latest news and events section | see fidelity note below |
| 10 | `Gallery` | Gallery mosaic grid | see fidelity note below |
| 11 | `ClientLogos` | Client logos row | see fidelity note below |
| 12 | `Footer` | Footer shows contact and links | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
The template SHALL display a top header bar with email and phone contact info on the left, and a search input with Register/Login links on the right.

### `Navbar`
The template SHALL display a navigation bar with the LearnPath logo, nav links (Home, About, Courses, Blog, Contact), and a cart icon.

### `Hero`
The template SHALL display a hero section with a background image, dark overlay, heading, subtitle, and a read more CTA button.

### `IconBoxes`
The template SHALL display 4 icon boxes in a row, each with an icon, title, description, and read more link.

### `FeaturedCoursesHorizontal`
*anchors only* — Featured Courses · Free

### `About`
The template SHALL display an about section with a heading, description, 4 stat counters, and a video placeholder.

### `Testimonials`
The template SHALL display a testimonial slider with avatar, quote, name, and university for each slide, with navigation dots.

### `FeaturedCoursesGrid`
*anchors only* — Featured Courses · Free

### `NewsEvents`
The template SHALL display a news/events section with a featured event (image, date badge, title, location, duration) and 2 blog post cards.

### `Gallery`
The template SHALL display a full-width mosaic image grid with mixed aspect ratios.

### `ClientLogos`
The template SHALL display 5 partner/brand logos in a centered row.

### `Footer`
The template SHALL display a 4-column footer (About, Contact Us, Quick Links, Follow Us) with a bottom bar linking to componentdock.com.

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
- **Provenance ban.** No file under `apps/learnpath/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/learnpath/public/CNAME` = `learnpath.free.componentdock.com`
  and the package `homepage` = `https://learnpath.free.componentdock.com`.
