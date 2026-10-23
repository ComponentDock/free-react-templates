# Signupglow — Design Notes

Reference: **Signup Form 12** — `https://colorlib.com/wp/template/signup-form-12/`  
Live preview: `https://preview.colorlib.com/theme/signup-form-12/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-12.jpg  
Shipped: https://signupglow.free.componentdock.com

Recreation of ColorLib Signup Form 12 as a free React signup form template with golden accent colors, built with React, Tailwind CSS 4, and TypeScript. Original: https://colorlib.com/wp/template/signup-form-12/ Design tokens extracted from screenshot:

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700**

## Design tokens (`apps/signupglow/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-golden-50` | `#faf7eb` | golden 50 |
| `--color-golden-100` | `#f3edcc` | golden 100 |
| `--color-golden-200` | `#e8dc9e` | golden 200 |
| `--color-golden-300` | `#dcc86e` | golden 300 |
| `--color-golden-400` | `#c9b458` | golden 400 |
| `--color-golden-500` | `#b39d40` | golden 500 |
| `--color-golden-600` | `#957f30` | golden 600 |
| `--color-golden-700` | `#746126` | golden 700 |
| `--color-golden-800` | `#53441c` | golden 800 |
| `--color-golden-900` | `#332a12` | golden 900 |
| `--color-text` | `#333333` | text |
| `--color-muted` | `#999999` | muted |
| `--color-border` | `#dddddd` | border |
| `--color-surface` | `#ffffff` | surface |
| `--color-page-bg` | `#f5f5f5` | page bg |
| `--color-fb-blue` | `#3b5998` | fb blue |
| `--color-tw-blue` | `#1da1f2` | tw blue |
| `--color-avatar-bg` | `#cccccc` | avatar bg |
| `--color-badge-green` | `#8bc34a` | badge green |
| `--font-roboto` | `'Roboto', sans-serif` | font roboto |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `SignupCard` | Signup card heading | see fidelity note below |
| 2 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `SignupCard`
The signup card SHALL display a "Hello!" heading and "Please signup to continue" subtext.

### `Footer`
The template SHALL display a footer with a link to Component Dock.

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
- **Provenance ban.** No file under `apps/signupglow/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/signupglow/public/CNAME` = `signupglow.free.componentdock.com`
  and the package `homepage` = `https://signupglow.free.componentdock.com`.

## Reference tokens (measured 2026-10-23)

Read from `https://preview.colorlib.com/theme/bootstrap/signup-form-12/`
(HTTP 200, title `Sign Up 01`) and its single sheet `css/style.css?v=4e2c0ed1`
(17,420 B).

| Token | Reference | App (`apps/signupglow`) |
| ----- | --------- | ----------------------- |
| Brand gold | `#d5c455` (8: `a`, primary button fill + border, focus border, social hover, badge dot) | `--color-golden-400: #c9b458` (and `#C9B458` in the old spec) ✗ — the screenshot-sampled value is a compression artefact |
| Page ground | `#f8f9fd` (`body`) | `--color-page-bg: #f5f5f5` |
| Card | `#fff` | `--color-surface: #ffffff` ✓ |
| Headings | `#000`, weight **400** | `--color-text: #333333` |
| Copy | `gray` (`#808080`), 16 px / 1.8 | `--color-muted: #999999` |
| Field border | `#ced4da` (Bootstrap), focus → gold + no shadow | `--color-border: #dddddd` |
| Not in the sheet | `#3b5998`, `#1da1f2`, `#8bc34a` (0 occurrences) | `--color-fb-blue`, `--color-tw-blue`, `--color-badge-green`, `--color-avatar-bg` — all app-only |
| Button | `border-radius: 40px` pill, gold fill → transparent+gold label on hover | pill present |
| Face | Roboto 400/500/700 self-hosted | `--font-roboto` ✓ |
