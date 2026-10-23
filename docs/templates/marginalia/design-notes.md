# Marginalia — Design Notes

Reference: **Blog Wordpress Themes** — `https://colorlib.com/wp/template/blog-wordpress-themes/`  
Live preview: `https://preview.colorlib.com/theme/blog-wordpress-themes/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/blog-templates.jpg  
Shipped: https://marginalia.free.componentdock.com

Marginalia is a single-page personal blog template in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Blog Wordpress Themes" entry in TEMPLATES.md (Blog category), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@200;300;400;600**, **Playfair Display**

## Design tokens (`apps/marginalia/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-charcoal` | `#141414` | charcoal |
| `--color-ink` | `#222222` | ink |
| `--color-meta` | `#9b9b9b` | meta |
| `--color-description` | `#6b6b6b` | description |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-serif` | `'Playfair Display', ui-serif, Georgia, serif` | font serif |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `BlogFeed` | Blog feed | see fidelity note below |
| 4 | `ShareRail` | Share rail | see fidelity note below |
| 5 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a dark top navigation bar with a search icon on the left, the site name centered, and a menu trigger on the right.

### `Hero`
The system SHALL render a full-height hero with a background photo, a dark overlay, and a centered headline with a serif-italic accent word.

### `BlogFeed`
The system SHALL render a blog feed of alternating horizontal post cards, each with a photo, meta row, title, excerpt, tags and a comments count.

### `ShareRail`
The system SHALL render a fixed vertical rail of social share icons on the right edge of the viewport.

### `Footer`
The system SHALL render a footer with the site name, navigation links, social icons and a copyright line.

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
- **Provenance ban.** No file under `apps/marginalia/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/marginalia/public/CNAME` = `marginalia.free.componentdock.com`
  and the package `homepage` = `https://marginalia.free.componentdock.com`.
