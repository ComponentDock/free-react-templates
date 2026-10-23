# Loginlens — Design Notes

Reference: **Login Form V7** — `https://colorlib.com/wp/template/login-form-v7/`  
Live preview: `https://preview.colorlib.com/theme/login-form-v7/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v7.jpg  
Shipped: https://loginlens.free.componentdock.com

LoginLens is a single-page LOGIN FORM in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Login Form V7" free template (source: https://colorlib.com/wp/template/login-form-v7/, preview: https://preview.colorlib.com/theme/login-form-v7/ [404 — design derived from live preview at https://colorlib.com/et…

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600;700**

## Design tokens (`apps/loginlens/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-poppins` | `'Poppins', sans-serif` | font poppins |
| `--color-page-bg` | `#d5d5d5` | page bg |
| `--color-facebook` | `#4a5568` | facebook |
| `--color-facebook-hover` | `#3d4759` | facebook hover |
| `--color-twitter` | `#1da1f2` | twitter |
| `--color-twitter-hover` | `#1a91da` | twitter hover |
| `--color-btn-dark` | `#2d2d2d` | btn dark |
| `--color-btn-dark-hover` | `#1a1a1a` | btn dark hover |
| `--color-input-bg` | `#ffffff` | input bg |
| `--color-input-border` | `#e0e0e0` | input border |
| `--color-heading` | `#2d2d2d` | heading |
| `--color-text-muted` | `#777777` | text muted |
| `--color-signup-link` | `#2d2d2d` | signup link |

> The spec has no section-level requirements; the order below is read from `apps/loginlens/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `LoginForm` | — | no dedicated spec block |
| 2 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `LoginForm`
*anchors only* — email · password · Login · Login with email · Don&apos;t have an account? · Sign up now

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
- **Provenance ban.** No file under `apps/loginlens/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/loginlens/public/CNAME` = `loginlens.free.componentdock.com`
  and the package `homepage` = `https://loginlens.free.componentdock.com`.
