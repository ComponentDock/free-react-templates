# Loginbolt — Design Notes

Reference: **Login Form V17** — `https://colorlib.com/wp/template/login-form-v17/`  
Live preview: `https://preview.colorlib.com/theme/login-form-v17/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v17.jpg  
Shipped: https://loginbolt.free.componentdock.com

A Login Form template with form title, input fields, sign in button, forgot password and sign up and form validation sections. Recreation of ColorLib **Login Form V17** as a React 19 + Vite + Tailwind CSS 4 + TypeScript template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@700**, **Poppins**

## Design tokens (`apps/loginbolt/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-poppins` | `'Poppins', sans-serif` | font poppins |
| `--font-montserrat` | `'Montserrat', sans-serif` | font montserrat |
| `--color-brand` | `#00ad5f` | brand |
| `--color-brand-hover` | `#333333` | brand hover |
| `--color-input-border` | `#e6e6e6` | input border |
| `--color-input-placeholder` | `#999999` | input placeholder |
| `--color-text-body` | `#666666` | text body |
| `--color-text-title` | `#555555` | text title |
| `--color-page-bg` | `#f2f2f2` | page bg |
| `--color-error` | `#c80000` | error |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `ImagePanel` | — | no dedicated spec block |
| 2 | `LoginForm` | Form title | see fidelity note below |
| 3 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `ImagePanel`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `LoginForm`
The form SHALL display the title "Account Login" in uppercase with letter spacing (#555555).

### `Footer`
The page footer SHALL link to Component Dock.

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
- **Provenance ban.** No file under `apps/loginbolt/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/loginbolt/public/CNAME` = `loginbolt.free.componentdock.com`
  and the package `homepage` = `https://loginbolt.free.componentdock.com`.

## Reference tokens (measured 2026-10-23)

The form templates were never published on the `preview.colorlib.com/theme/`
host. The live demo is `https://colorlib.com/etc/lf/Login_v17/index.html`
(HTTP 200, 1,763 B, title `Login V17`) with one sheet,
`css/style.css?v=93221552` (11,098 B, no framework).

| Token | Reference | App (`apps/loginbolt`) |
| ----- | --------- | --------------------- |
| Action green | `#00ad5f` (4: button fill, forgot link, sign-up link) | `--color-brand: #00ad5f` ✓ |
| Button hover | `#333333` | `--color-brand-hover: #333333` ✓ |
| Field border | `#e6e6e6`, square (no radius) | `--color-input-border: #e6e6e6` ✓ |
| Input text | `#666666` 18px | `--color-text-body` ✓ |
| Title | `#555555`, 20px, uppercase, `letter-spacing: 2px` | `--color-text-title` ✓ |
| Helper/placeholder | `#999999` (9) | `--color-input-placeholder` ✓ |
| Error | `#c80000` | `--color-error` ✓ |
| Type | Poppins-Regular body, **Montserrat-Bold 12px** button | `--font-poppins` / `--font-montserrat` ✓ |
| Shape | 1170px white card, `row-reverse` → form right / photo left, 50px button, radius 3px | — |

Section order measured: full-viewport centred card → form half (title → user
name → password → SIGN IN → forgot link → SIGN UP) → photo half (`bg-01.jpg`).
