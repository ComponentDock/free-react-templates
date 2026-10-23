# Topicpick — Design Notes

Reference: **Multiselect 02** — `https://colorlib.com/wp/template/multiselect-02/`  
Live preview: `https://preview.colorlib.com/theme/multiselect-02/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-02.jpg  
Shipped: https://topicpick.free.componentdock.com

Recreation of ColorLib "Multiselect 02" (https://colorlib.com/wp/template/multiselect-02/). A centered page with a heading, a label, and a multiselect dropdown for selecting topics from a list of 11 options. Brand color: #e8647c (pink/rose), font: Lato, white background.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato**, **Lato:wght@300;400;700**

## Design tokens (`apps/topicpick/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-topicpick-bg` | `#fff` | topicpick bg |
| `--color-topicpick-text` | `#6c757d` | topicpick text |
| `--color-topicpick-heading` | `#000` | topicpick heading |
| `--color-topicpick-brand` | `#e8647c` | topicpick brand |
| `--color-topicpick-border` | `#e6e6e6` | topicpick border |
| `--color-topicpick-hover-bg` | `#e8647c` | topicpick hover bg |
| `--color-topicpick-hover-text` | `#fff` | topicpick hover text |
| `--color-topicpick-label-bg` | `#e8647c` | topicpick label bg |
| `--color-topicpick-label-text` | `#fff` | topicpick label text |
| `--color-topicpick-card-bg` | `#fff` | topicpick card bg |
| `--color-topicpick-card-border` | `#e6e6e6` | topicpick card border |
| `--font-sans` | `'Lato', Arial, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopicDropdown` | Page renders with heading and dropdown | see fidelity note below |
| 2 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `TopicDropdown`
Users SHALL see a centered page with a "Topic Selector" heading, a "Select Topics" label, and a dropdown trigger showing "Select options".

### `Footer`
The footer SHALL display a "Component Dock" link to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/topicpick/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/topicpick/public/CNAME` = `topicpick.free.componentdock.com`
  and the package `homepage` = `https://topicpick.free.componentdock.com`.
