# Keycard — Design Notes

Reference: **Creative Login Form** — `https://colorlib.com/wp/template/creative-login-form/`  
Live preview: **none** — no demo is served for this design (design page 200, `theme/<slug>/` and `theme/bootstrap/<slug>/` 404, no catalog entry; probed 2026-10-23). The TEMPLATES.md screenshot is the sole visual reference.  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/creative-html5-css3-login-form.png  
Shipped: https://keycard.free.componentdock.com

Recreation of ColorLib "Creative Login Form" (https://colorlib.com/wp/template/creative-login-form/) as a React 19 + Tailwind CSS 4 + TypeScript template. Provides a clean, flat login form with a sage green background and centered white card containing username/password fields, a login button, and a registration link.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600**

## Design tokens (`apps/keycard/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#8bc34a` | brand |
| `--color-card` | `#ffffff` | Card white. |
| `--color-border` | `#e0e0e0` | Input border color — light gray. |
| `--color-placeholder` | `#999999` | Placeholder text color — medium gray. |
| `--color-ink` | `#333333` | Input text color — dark gray. |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Original font: "Poppins" via Google Fonts (loaded in index.html). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `LoginPage` | Full-page login layout | see fidelity note below |
| 2 | `Footer` | Component Dock footer | see fidelity note below |

## Section-by-section fidelity

### `LoginPage`
The template SHALL render a full-viewport sage green background with a white login card centered both vertically and horizontally.

### `Footer`
The template SHALL render a footer linking to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/keycard/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/keycard/public/CNAME` = `keycard.free.componentdock.com`
  and the package `homepage` = `https://keycard.free.componentdock.com`.
