# Joinbox — Design Notes

Reference: **Signup Form 02** — `https://colorlib.com/wp/template/signup-form-02/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/signup-form-02/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-02.jpg  
Shipped: https://joinbox.free.componentdock.com

Joinbox is a single-page split-layout SIGNUP REGISTRATION FORM in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700**

## Design tokens (`apps/joinbox/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#fb771a` | Brand orange — the single focal accent on the page. |
| `--color-brand-hover` | `#eb6304` | brand hover |
| `--color-brand-border` | `#de5e04` | brand border |
| `--color-area` | `#f6f7fc` | Form area background (left panel). |
| `--color-field` | `#efefef` | Input field background. |
| `--color-caption` | `#888` | Caption / link grey. |
| `--color-checkbox-idle` | `#e6e6e6` | Checkbox unchecked indicator. |
| `--color-checkbox-hover` | `#ccc` | checkbox hover |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Roboto — Google Fonts loaded in index.html (weight 300 body, 400 labels/heading). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `SignupForm` | — | no dedicated spec block |
| 2 | `Footer` | Footer with Component Dock branding | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `SignupForm`
*anchors only* — alert · Register · You&apos;re all set! · Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing. · First Name · Last Name

### `Footer`
The page SHALL render a footer with a link to https://www.componentdock.com/ labeled "Component Dock".

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
- **Provenance ban.** No file under `apps/joinbox/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/joinbox/public/CNAME` = `joinbox.free.componentdock.com`
  and the package `homepage` = `https://joinbox.free.componentdock.com`.
