# Tangerine — Design Notes

Reference: **Signup Form 04** — `https://colorlib.com/wp/template/signup-form-04/`  
Live preview: `https://preview.colorlib.com/theme/signup-form-04/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-04.jpg  
Shipped: https://tangerine.free.componentdock.com

Tangerine is a single-page sign-up form in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Signup Form 04" template design (see TEMPLATES.md line 2818; `grep -c 'wp/template/signup-form-04/'` = 1 — single row, no duplicates), built under a DIFFERENT name (Tangerine — a single lowercase word evok…

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto:wght@300;400;500;700**

## Design tokens (`apps/tangerine/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#fb771a` | brand |
| `--color-brand-hover` | `#eb6304` | brand hover |
| `--color-brand-active` | `#de5e04` | brand active |
| `--color-brand-checked-hover` | `#fb8633` | brand checked hover |
| `--color-panel` | `#f6f7fc` | panel |
| `--color-input-bg` | `#efefef` | input bg |
| `--color-checkbox-unchecked` | `#e6e6e6` | checkbox unchecked |
| `--color-checkbox-hover` | `#cccccc` | checkbox hover |
| `--color-text-muted` | `#b3b3b3` | text muted |
| `--color-text-secondary` | `#888888` | text secondary |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `SignupForm` | — | no dedicated spec block |
| 2 | `Footer` | Form card and heading | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `SignupForm`
*anchors only* — Registration Complete · Your account has been created successfully. · Back to form · Sign Up · Your Email · Password

### `Footer`
The system SHALL render the sign-up card with its heading and stacked form.

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
- **Provenance ban.** No file under `apps/tangerine/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/tangerine/public/CNAME` = `tangerine.free.componentdock.com`
  and the package `homepage` = `https://tangerine.free.componentdock.com`.
