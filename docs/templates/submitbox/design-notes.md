# Submitbox — Design Notes

Reference: **Signup Form 13** — `https://colorlib.com/wp/template/signup-form-13/`  
Live preview: `https://preview.colorlib.com/theme/signup-form-13/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-13.jpg  
Shipped: https://submitbox.free.componentdock.com

Submitbox is a signup form template. It recreates the ColorLib **Signup Form 13** design (https://colorlib.com/wp/template/signup-form-13/, preview: https://preview.colorlib.com/theme/bootstrap/signup-form-13/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto:wght@400;500;700**

## Design tokens (`apps/submitbox/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#7fa998` | brand |
| `--color-brand-dark` | `#6b9a87` | brand dark |
| `--color-primary` | `#007bff` | primary |
| `--color-primary-hover` | `#0069d9` | primary hover |
| `--color-facebook` | `#44629b` | facebook |
| `--color-twitter` | `#1dade9` | twitter |
| `--color-input-border` | `#ced4da` | input border |
| `--color-text-heading` | `#000000` | text heading |
| `--color-text-body` | `#212529` | text body |
| `--color-text-sub` | `#6c757d` | text sub |
| `--color-placeholder` | `#6c757d` | placeholder |
| `--color-bg-page` | `#ffffff` | bg page |
| `--color-bg-form` | `#ffffff` | bg form |

> The spec has no section-level requirements; the order below is read from `apps/submitbox/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `LeftPanel` | — | no dedicated spec block |
| 2 | `SignupForm` | — | no dedicated spec block |
| 3 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `LeftPanel`
*anchors only* — Soccer Ball · Already have an account? · Sign In

### `SignupForm`
*anchors only* — Signup with Facebook · Signup with Twitter · Please signup to continue · Full Name · Email Address · Password

### `Footer`
*anchors only* — More templates at Component Dock

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
- **Provenance ban.** No file under `apps/submitbox/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/submitbox/public/CNAME` = `submitbox.free.componentdock.com`
  and the package `homepage` = `https://submitbox.free.componentdock.com`.
