# Shatter — Design Notes

Reference: **Smashed** — `https://colorlib.com/wp/template/smashed/`  
Live preview: `https://preview.colorlib.com/theme/smashed/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/smashed-free-template.jpg  
Shipped: https://shatter.free.componentdock.com

Shatter is a magazine/news blog template in the free-react-templates monorepo. It is a React recreation of the ColorLib "Smashed" free template (source: https://colorlib.com/wp/template/smashed/; preview: https://preview.colorlib.com/theme/smashed/), built under a DIFFERENT name (**Shatter**), with the monorepo stack: Vite + React 19 + Ta…

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@400;600;700**, **Roboto**

## Design tokens (`apps/shatter/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff1857` | brand |
| `--color-brand-dark` | `#e0104d` | brand dark |
| `--color-ink` | `#222222` | Ink — near-black headings (#222222 from the original). |
| `--color-ink-dark` | `#111111` | ink dark |
| `--color-paper` | `#f9f9ff` | Paper — very light lavender/white background (#f9f9ff from the original). |
| `--color-mist` | `#777777` | Mist — muted body text (#777777 from the original). |
| `--color-meta` | `#999999` | Meta — lighter grey for dates and meta info (#999999). |
| `--color-dark` | `#252525` | Dark — navbar and footer background (#252525). |
| `--color-dark-card` | `#2e2e2e` | dark card |
| `--color-primary-50` | `#fff0f4` | primary 50 |
| `--color-primary-100` | `#ffe0e9` | primary 100 |
| `--color-primary-200` | `#ffb3c7` | primary 200 |
| `--color-primary-300` | `#ff80a1` | primary 300 |
| `--color-primary-400` | `#ff4d7b` | primary 400 |
| `--color-primary-500` | `#ff1857` | primary 500 |
| `--color-primary-600` | `#e0104d` | primary 600 |
| `--color-primary-700` | `#b80c40` | primary 700 |
| `--color-primary-800` | `#8f0933` | primary 800 |
| `--color-primary-900` | `#660726` | primary 900 |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | Fonts: Open Sans (body) + Roboto (headings). |
| `--font-display` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `BannerArea` | Banner hero left column | see fidelity note below |
| 2 | `Navbar` | Navigation bar | see fidelity note below |
| 3 | `EditorsPicks` | Editors' Picks section | see fidelity note below |
| 4 | `InternationalNews` | International News section | see fidelity note below |
| 5 | `TechNews` | Technology News section | see fidelity note below |
| 6 | `ExclusiveVideos` | Exclusive Videos section | see fidelity note below |
| 7 | `PopularNews` | Popular News Feed section | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `BannerArea`
The banner left column SHALL display 3 stacked small post cards.

### `Navbar`
The navbar SHALL be sticky with dark background and active link highlighting.

### `EditorsPicks`
The Editors' Picks section SHALL display 4 horizontal post cards.

### `InternationalNews`
The International News section SHALL use an 8/4 column split layout.

### `TechNews`
The Technology News section SHALL display 4 post cards in a grid.

### `ExclusiveVideos`
The Exclusive Videos section SHALL display a carousel of large video post cards.

### `PopularNews`
The Popular News Feed section SHALL display 4 post cards in a grid.

### `Footer`
The footer SHALL display 3 columns with dark background and Component Dock link.

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
- **Provenance ban.** No file under `apps/shatter/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/shatter/public/CNAME` = `shatter.free.componentdock.com`
  and the package `homepage` = `https://shatter.free.componentdock.com`.
