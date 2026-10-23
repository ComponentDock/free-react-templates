# Marlowe — Design Notes

Reference: **Callie** — `https://colorlib.com/wp/template/callie/`  
Live preview: `https://preview.colorlib.com/theme/callie/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/callie-free-template.jpg  
Shipped: https://marlowe.free.componentdock.com

Marlowe is a single-page blog/magazine template in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Callie" entry in TEMPLATES.md (Blog category), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@400;700**, **Muli**

## Design tokens (`apps/marlowe/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ee4266` | brand |
| `--color-ink` | `#323335` | ink |
| `--color-meta` | `#97989b` | meta |
| `--color-line` | `#e8eaed` | line |
| `--color-secondary` | `#353535` | secondary |
| `--color-night` | `#1b1c1e` | night |
| `--color-fb` | `#225b99` | fb |
| `--color-tw` | `#00adf2` | tw |
| `--color-gp` | `#dc4d2d` | gp |
| `--color-ig` | `#d341b2` | ig |
| `--color-pin` | `#cc2127` | pin |
| `--font-display` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font display |
| `--font-sans` | `'Muli', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `HotPosts` | Hot posts hero | see fidelity note below |
| 3 | `PostSections` | Recent posts sections | see fidelity note below |
| 4 | `Sidebar` | Sidebar | see fidelity note below |
| 5 | `InstagramFeed` | Instagram section | see fidelity note below |
| 6 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with social icons, a centered logo, a category menu, a search toggle and an aside-menu toggle.

### `HotPosts`
The system SHALL render a hot-posts hero with one large featured post on the left and two stacked posts on the right.

### `PostSections`
The system SHALL render the main column with four titled post sections (RECENT POSTS, LIFESTYLE, FASHION & TRAVEL, TECHNOLOGY & HEALTH) of post rows and a LOAD MORE button.

### `Sidebar`
The system SHALL render a right sidebar with an ad placeholder, a social media widget, a categories widget, a newsletter form and a popular posts widget.

### `InstagramFeed`
The system SHALL render a full-width Instagram strip with a title and a grid of square image tiles.

### `Footer`
The system SHALL render a dark footer with four widgets and a bottom bar.

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
- **Provenance ban.** No file under `apps/marlowe/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/marlowe/public/CNAME` = `marlowe.free.componentdock.com`
  and the package `homepage` = `https://marlowe.free.componentdock.com`.
