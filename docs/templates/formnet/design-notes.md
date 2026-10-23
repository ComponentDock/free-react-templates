# Formnet — Design Notes

Reference: **Contact Form V7** — `https://colorlib.com/wp/template/contact-form-v7/`  
Live preview: `https://preview.colorlib.com/theme/contact-form-v7/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v7.jpg  
Shipped: https://formnet.free.componentdock.com

A Contact Form template with form and checkbox sections. Recreation of ColorLib [Contact Form V7](https://colorlib.com/wp/template/contact-form-v7/) Preview: https://colorlib.com/etc/cf/ContactFrom_v7/index.html A minimal, centered contact form with Oswald font, left-aligned icon inputs, a custom checkbox, and a gradient pink-to-red submi…

## Typography

Fonts loaded by `index.html` (Google Fonts): **Oswald**, **Oswald:wght@400;500**

## Design tokens (`apps/formnet/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-heading` | `#43383e` | Dark plum from the original Contact Form V7 heading/text. |
| `--color-bg` | `#e6e6e6` | Light gray background from original. |
| `--color-placeholder` | `#999999` | Placeholder gray. |
| `--color-error` | `#c80000` | Validation error red. |
| `--color-btn-start` | `#d5007d` | Button gradient start (pink) and end (red). |
| `--color-btn-end` | `#e53935` | btn end |
| `--font-sans` | `'Oswald', ui-sans-serif, system-ui, sans-serif` | Original font: Oswald (weights 400/500) via Google Fonts. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `ContactForm` | — | no dedicated spec block |
| 2 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `ContactForm`
*anchors only* — Contact form · name · email · phone · message · copy-mail

### `Footer`
The footer SHALL contain a link to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/formnet/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/formnet/public/CNAME` = `formnet.free.componentdock.com`
  and the package `homepage` = `https://formnet.free.componentdock.com`.
