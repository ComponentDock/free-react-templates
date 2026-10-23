# Loginleaf — Design Notes

Reference: **Login Form 08** — `https://colorlib.com/wp/template/login-form-08/`  
Live preview: `https://preview.colorlib.com/theme/login-form-08/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-08.jpg  
Shipped: https://loginleaf.free.componentdock.com

Recreation of ColorLib "Login Form 08" (`login-form-08`). Preview: https://preview.colorlib.com/theme/login-form-08/ (404 as of 2026-09-23 — design tokens extracted from screenshot). Source page: https://colorlib.com/wp/template/login-form-08/ Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700**

## Design tokens (`apps/loginleaf/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#4ecdc4` | Primary accent — mint/teal (#4ecdc4), used for Log In button and checkbox. |
| `--color-primary-hover` | `#3dbdb5` | Primary hover — deeper teal (#3dbdb5). |
| `--color-page` | `#ffffff` | Page background — white (#ffffff). |
| `--color-ink` | `#333333` | Text color — dark gray (#333333). |
| `--color-caption` | `#999999` | Subtitle / caption — light gray (#999999). |
| `--color-input-border` | `#dddddd` | Input border — light gray (#dddddd). |
| `--color-link` | `#888888` | Link / forgot password — gray (#888888). |
| `--color-fb` | `#3b5998` | Facebook brand blue (#3b5998). |
| `--color-twitter` | `#1da1f2` | Twitter brand blue (#1da1f2). |
| `--color-google` | `#dd4b39` | Google brand red (#dd4b39). |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Font: Roboto via Google Fonts (loaded in index.html). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Illustration` | Illustration | see fidelity note below |
| 2 | `LoginForm` | Login button | see fidelity note below |
| 3 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Illustration`
The right column SHALL display a decorative illustration using a placeholder image.

### `LoginForm`
The form SHALL include a full-width "Log In" button with mint/teal background, white text, and rounded corners.

### `Footer`
The template SHALL include a footer linking to Component Dock.

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
- **Provenance ban.** No file under `apps/loginleaf/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/loginleaf/public/CNAME` = `loginleaf.free.componentdock.com`
  and the package `homepage` = `https://loginleaf.free.componentdock.com`.
