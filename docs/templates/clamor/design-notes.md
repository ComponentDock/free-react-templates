# Clamor — Design Notes

Reference: **Shout** — `https://colorlib.com/wp/template/shout/`  
Live preview: `https://preview.colorlib.com/theme/shout/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/shout-free-template.jpg  
Shipped: https://clamor.free.componentdock.com

Clamor is a single-page blog template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Shout" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;600;700**, **Tenor Sans**

## Design tokens (`apps/clamor/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fff0f8` | primary 50 |
| `--color-primary-100` | `#ffd9ee` | primary 100 |
| `--color-primary-200` | `#ffb3dc` | primary 200 |
| `--color-primary-300` | `#ff8cc9` | primary 300 |
| `--color-primary-400` | `#ff75be` | primary 400 |
| `--color-primary-500` | `#ff63b5` | primary 500 |
| `--color-primary-600` | `#ff63b5` | primary 600 |
| `--color-primary-700` | `#ff7dc1` | primary 700 |
| `--color-primary-800` | `#e04a9d` | primary 800 |
| `--color-primary-900` | `#b8307f` | primary 900 |
| `--color-brand` | `#ff63b5` | brand |
| `--color-ink` | `#000000` | ink |
| `--color-muted` | `#666666` | muted |
| `--color-meta` | `rgba(0, 0, 0, 0.5)` | meta |
| `--color-date` | `#999999` | date |
| `--color-label` | `#bfbfbf` | label |
| `--color-latest` | `#4d4d4d` | latest |
| `--color-copyright` | `#1a1a1a` | copyright |
| `--color-surface` | `#fafafa` | surface |
| `--color-border-soft` | `#f2f2f2` | border soft |
| `--color-page` | `whitesmoke` | page |
| `--font-serif` | `'Tenor Sans', Georgia, serif` | font serif |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header | see fidelity note below |
| 2 | `FeaturedFlex` | Featured flex | see fidelity note below |
| 3 | `BlogGrid` | Blog grid | see fidelity note below |
| 4 | `InstagramStrip` | Instagram strip | see fidelity note below |
| 5 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render an absolute-positioned header with a white uppercase logo wordmark on the left and a hamburger menu toggle on the right.

### `FeaturedFlex`
The system SHALL render a two-part featured area: a pink intro panel (30%) with the agency headline, and a 70% slider of five image slides with white title + meta text.

### `BlogGrid`
The system SHALL render a "Most popular post" / "What's hot" section heading followed by a responsive grid of blog entry cards.

### `InstagramStrip`
The system SHALL render a centered "Instagram" heading followed by a row of eight square image tiles.

### `Footer`
The system SHALL render a white footer with About Me, Latest Blog, and Newsletter columns plus a copyright bar.

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
- **Provenance ban.** No file under `apps/clamor/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/clamor/public/CNAME` = `clamor.free.componentdock.com`
  and the package `homepage` = `https://clamor.free.componentdock.com`.
