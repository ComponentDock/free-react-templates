# Velox — Design Notes

Reference: **Ronin** — `https://colorlib.com/wp/template/ronin/`  
Live preview: `https://preview.colorlib.com/theme/ronin/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ronin-free-template.jpg  
Shipped: https://velox.free.componentdock.com

Velox is a personal/freelancer portfolio template with a navbar, hero, welcome about, features services, projects portfolio, testimonials and blog.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Heebo**, **Heebo:wght@400;500;700**, **Roboto**

## Design tokens (`apps/velox/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-periwinkle-50` | `#f0f1ff` | periwinkle 50 |
| `--color-periwinkle-100` | `#e0e3ff` | periwinkle 100 |
| `--color-periwinkle-200` | `#c4c8ff` | periwinkle 200 |
| `--color-periwinkle-300` | `#a8adff` | periwinkle 300 |
| `--color-periwinkle-400` | `#8490ff` | periwinkle 400 |
| `--color-periwinkle-500` | `#6b7aef` | periwinkle 500 |
| `--color-periwinkle-600` | `#5463d6` | periwinkle 600 |
| `--color-periwinkle-700` | `#404eb5` | periwinkle 700 |
| `--color-periwinkle-800` | `#343f94` | periwinkle 800 |
| `--color-periwinkle-900` | `#2a3374` | periwinkle 900 |
| `--font-heading` | `'Heebo', ui-sans-serif, system-ui, sans-serif` | Heebo — the original template's heading typeface |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Roboto — the original template's body typeface |

> The spec has no section-level requirements; the order below is read from `apps/velox/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `About` | — | no dedicated spec block |
| 4 | `Features` | — | no dedicated spec block |
| 5 | `Projects` | — | no dedicated spec block |
| 6 | `Testimonials` | — | no dedicated spec block |
| 7 | `Blog` | — | no dedicated spec block |
| 8 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Primary · Mobile · Velox

### `Hero`
*anchors only* — This is me · Travor James · Discover Now

### `About`
*anchors only* — progressbar · About Myself · Tools Expertness

### `Features`
*anchors only* — Offerings to my clients

### `Projects`
*anchors only* — tablist · presentation · Our Recent Completed Projects · Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor. · Client Project

### `Testimonials`
*anchors only* — Testimonials

### `Blog`
*anchors only* — Latest Posts from Blog

### `Footer`
*anchors only* — Email address · Subscribe · About Me · Component Dock · Newsletter · Stay updated with our latest trends

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
- **Provenance ban.** No file under `apps/velox/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/velox/public/CNAME` = `velox.free.componentdock.com`
  and the package `homepage` = `https://velox.free.componentdock.com`.
