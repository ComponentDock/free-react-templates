# Rosette — Design Notes

Reference: **Colorlib Regform 20** — `https://colorlib.com/wp/template/colorlib-regform-20/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-regform-20/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-20.jpg  
Shipped: https://rosette.free.componentdock.com

A free, production-ready React registration form template with a pink/coral beauty theme. Split-screen layout with overlapping hero images on the left and a sign-up form (Name, Email, Password) with terms checkbox on the right. Designed for beauty, cosmetics, and lifestyle sign-up pages.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Cormorant Garamond:wght@400;500;600;700**

## Design tokens (`apps/rosette/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#e8888a` | brand |
| `--color-brand-dark` | `#d47779` | brand dark |
| `--color-bg-page` | `#f8c8c8` | bg page |
| `--color-bg-card` | `#ffffff` | bg card |
| `--color-bg-input` | `#f5f5f5` | bg input |
| `--color-text` | `#333333` | text |
| `--color-text-muted` | `#999999` | text muted |
| `--color-border` | `#e0e0e0` | border |
| `--color-dot` | `#e8888a` | dot |
| `--color-link` | `#e8888a` | link |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `HeroImages` | — | no dedicated spec block |
| 2 | `RegistrationForm` | Registration form renders all fields | see fidelity note below |
| 3 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `HeroImages`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `RegistrationForm`
Users SHALL see a "Sign Up" heading, three input fields (Name, Email, Password) each with a coral dot indicator, a Terms & Conditions checkbox, a "SIGN UP" submit button, and a "Login" link.

### `Footer`
Users SHALL see a footer with "More templates at Component Dock" linking to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/rosette/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/rosette/public/CNAME` = `rosette.free.componentdock.com`
  and the package `homepage` = `https://rosette.free.componentdock.com`.
