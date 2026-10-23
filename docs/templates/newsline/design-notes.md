# Newsline — Design Notes

Reference: **Vizew** — `https://colorlib.com/wp/template/vizew/`  
Live preview: `https://preview.colorlib.com/theme/vizew/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/vizew-free-template.jpg  
Shipped: https://newsline.free.componentdock.com

Newsline is a single-page news & magazine landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Vizew" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@400;500;700**

## Design tokens (`apps/newsline/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#db4437` | brand |
| `--color-brand-hover` | `#0f1112` | brand hover |
| `--color-ink` | `#0f1112` | ink |
| `--color-night` | `#222627` | night |
| `--color-panel` | `#393c3d` | panel |
| `--color-panel-active` | `#4d5051` | panel active |
| `--color-footer` | `#191c1d` | footer |
| `--color-mute` | `#a6a6a6` | mute |
| `--color-meta` | `#595959` | meta |
| `--color-body` | `#a6a6a6` | body |
| `--color-line` | `#393c3d` | line |
| `--color-facebook` | `#597dca` | Social brand colors (footer round buttons). |
| `--color-twitter` | `#1da1f2` | twitter |
| `--color-googleplus` | `#db4437` | googleplus |
| `--color-instagram` | `#a67c52` | instagram |
| `--color-linkedin` | `#3b5998` | linkedin |
| `--font-display` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopHeader` | Top header bar | see fidelity note below |
| 2 | `Navbar` | Main navigation bar | see fidelity note below |
| 3 | `Hero` | Hero featured video with playlist | see fidelity note below |
| 4 | `TrendingVideos` | Trending videos section | see fidelity note below |
| 5 | `Content` | Component Dock attribution | see fidelity note below |
| 6 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `TopHeader`
The system SHALL render a dark top utility bar with a breaking-news ticker on the left and social/search/login controls on the right.

### `Navbar`
The system SHALL render a red navbar below the top header with the logo on the left and the menu items Home, Archives, Pages, Features, Contact.

### `Hero`
The system SHALL render a split hero: a large featured video card on the left and a vertical playlist on the right whose items swap the featured video.

### `TrendingVideos`
The system SHALL render a "Trending Videos" section with a centered heading and a three-column grid of video cards.

### `Content`
The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.

### `Footer`
The system SHALL render a dark footer with widget columns (Latest Twister, Sport Videos, Our Address), social buttons and a copyright bar.

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
- **Provenance ban.** No file under `apps/newsline/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/newsline/public/CNAME` = `newsline.free.componentdock.com`
  and the package `homepage` = `https://newsline.free.componentdock.com`.
