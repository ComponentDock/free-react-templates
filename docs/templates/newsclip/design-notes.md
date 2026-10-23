# Newsclip — Design Notes

Reference: **Thegazette** — `https://colorlib.com/wp/template/thegazette/`  
Live preview: `https://preview.colorlib.com/theme/thegazette/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/thegazette-free-template.jpg  
Shipped: https://newsclip.free.componentdock.com

NewsClip is a single-page news/magazine template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "TheGazette" news website template design, built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **PT Serif**, **PT Serif:wght@400;700**, **Roboto**

## Design tokens (`apps/newsclip/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff084e` | brand |
| `--color-brand-hover` | `#e60745` | brand hover |
| `--color-dark-bg` | `#1d1d1d` | dark bg |
| `--color-light-bg` | `#f6f6f6` | light bg |
| `--color-ink` | `#3a3a3a` | ink |
| `--color-meta` | `#9f9f9f` | meta |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Roboto (body) + PT Serif (headings) — Google Fonts via index.html |
| `--font-serif` | `'PT Serif', Georgia, serif` | font serif |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header | see fidelity note below |
| 2 | `Hero` | Hero carousel | see fidelity note below |
| 3 | `LatestNewsTicker` | — | no dedicated spec block |
| 4 | `MainContent` | Main content | see fidelity note below |
| 5 | `CategoryPosts` | Category posts | see fidelity note below |
| 6 | `VideoPosts` | Video posts | see fidelity note below |
| 7 | `Editorial` | Editorial | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Header`
The system SHALL render a 3-tier dark header with breaking news ticker, logo, ad banner, and navigation.

### `Hero`
The system SHALL render a full-width hero carousel with 4 slides.

### `LatestNewsTicker`
*anchors only* — Latest

### `MainContent`
The system SHALL render a 2-column layout with featured content and sidebar.

### `CategoryPosts`
The system SHALL render a 3-column category section with featured and text posts.

### `VideoPosts`
The system SHALL render an 8-column grid of video posts with play button overlays and duration labels.

### `Editorial`
The system SHALL render a dark-background editorial carousel with featured posts.

### `Footer`
The system SHALL render a dark footer with 6 widget columns and copyright.

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
- **Provenance ban.** No file under `apps/newsclip/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/newsclip/public/CNAME` = `newsclip.free.componentdock.com`
  and the package `homepage` = `https://newsclip.free.componentdock.com`.
