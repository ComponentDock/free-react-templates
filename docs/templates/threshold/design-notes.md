# Threshold — Design Notes

Reference: **Login Form 02** — `https://colorlib.com/wp/template/login-form-02/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/login-form-02/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-02.jpg  
Shipped: https://threshold.free.componentdock.com

Threshold provides a 50/50 split-screen login form template with a light form panel on the left and a full-height decorative image on the right. It uses the Roboto font (weights 300, 400) and a distinctive orange (#fb771a) checkbox accent. Designed for authentication pages that need a modern, minimal aesthetic with visual depth.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400**

## Design tokens (`apps/threshold/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#4f46e5` | Brand indigo — primary button color. |
| `--color-card` | `#ffffff` | Card / panel white. |
| `--color-form-bg` | `#f6f7fc` | Form background — light gray from the original design. |
| `--color-border` | `#d1d5db` | Input border color — light gray. |
| `--color-placeholder` | `#6b7280` | Placeholder / label text color — medium gray. |
| `--color-ink` | `#1f2937` | Input text / heading color — dark gray. |
| `--color-muted` | `#4b5563` | Subtitle text — muted. |
| `--color-paragraph` | `#b3b3b3` | Paragraph text from original design. |
| `--color-link` | `#888` | Link text from original design. |
| `--color-checkbox` | `#fb771a` | Orange checkbox color from original design. |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Original font: "Roboto" via Google Fonts (loaded in index.html). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Threshold` | — | no dedicated spec block |
| 2 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Threshold`
*anchors only* — Decorative login background

### `Footer`
The template SHALL render a footer with a link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/threshold/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/threshold/public/CNAME` = `threshold.free.componentdock.com`
  and the package `homepage` = `https://threshold.free.componentdock.com`.
