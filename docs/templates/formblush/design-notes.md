# Formblush — Design Notes

Reference: **Colorlib Regform 24** — `https://colorlib.com/wp/template/colorlib-regform-24/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-regform-24/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-24.jpg  
Shipped: https://formblush.free.componentdock.com

A free sign-up form template with a split-screen layout featuring a decorative photo on the left and a pink form panel on the right. Recreation of ColorLib **Regform 24**.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Pacifico**, **Poppins**, **Poppins:wght@400;500;600;700**

## Design tokens (`apps/formblush/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f5a0b0` | Brand palette: soft pink from the original form panel background. |
| `--color-brand-dark` | `#e8899a` | brand dark |
| `--color-brand-light` | `#fcd5dc` | brand light |
| `--color-ink` | `#333` | Heading color: dark text on pink background. |
| `--color-body` | `#555` | Body text on pink background. |
| `--color-input-bg` | `#ffffff` | Input field styling. |
| `--color-input-border` | `#e0e0e0` | input border |
| `--color-input-focus` | `#f5a0b0` | input focus |
| `--color-placeholder` | `#999` | Placeholder color. |
| `--color-social` | `#f5a0b0` | Social icon circles. |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Fonts: Poppins (body/inputs) + Pacifico (decorative heading). |
| `--font-heading` | `'Pacifico', cursive` | font heading |

> The spec has no section-level requirements; the order below is read from `apps/formblush/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `SignUpForm` | — | no dedicated spec block |
| 2 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `SignUpForm`
*anchors only* — Sign up with Facebook · Sign up with Instagram · Sign up with Twitter · Sign up with Tumblr

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
- **Provenance ban.** No file under `apps/formblush/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/formblush/public/CNAME` = `formblush.free.componentdock.com`
  and the package `homepage` = `https://formblush.free.componentdock.com`.
