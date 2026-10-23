# Imminence — Design Notes

Reference: **02 Comming Soon** — `https://colorlib.com/wp/template/02-comming-soon/`  
Live preview: `https://preview.colorlib.com/theme/02-comming-soon/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-17.jpg  
Shipped: https://imminence.free.componentdock.com

A split-screen coming soon / under-construction page template with a countdown timer on the left panel and an email subscription form on the right.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Poppins**, **Poppins:wght@400;500;600;700**

## Design tokens (`apps/imminence/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-pink` | `#f84982` | brand pink |
| `--color-brand-pink-hover` | `#e40b52` | brand pink hover |
| `--color-brand-pink-focus` | `#f89fbc` | brand pink focus |
| `--color-input-bg` | `#f1f2f3` | input bg |
| `--color-social-facebook` | `#2a61d6` | Social brand colors |
| `--color-social-twitter` | `#3aa4f8` | social twitter |
| `--color-social-google` | `#f43846` | social google |
| `--color-social-instagram` | `#8f614a` | social instagram |
| `--color-social-pinterest` | `#e1c013` | social pinterest |
| `--color-body` | `#333` | Text colors |
| `--color-paragraph` | `#555` | paragraph |
| `--color-muted` | `#999` | muted |
| `--color-light` | `#444` | light |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `LeftPanel` | Background image on left panel | see fidelity note below |
| 2 | `RightPanel` | Logo on right panel | see fidelity note below |
| 3 | `Footer` | Social media icons footer | see fidelity note below |

## Section-by-section fidelity

### `LeftPanel`
The template SHALL display a full-bleed background image on the left section, covering the entire panel.

### `RightPanel`
The template SHALL display a logo image at the top of the right section.

### `Footer`
The template SHALL display a row of social media icons (Facebook, Twitter, Instagram, Pinterest) at the bottom of the right section, with "Stay in touch" label. Each icon uses its brand color.

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
- **Provenance ban.** No file under `apps/imminence/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/imminence/public/CNAME` = `imminence.free.componentdock.com`
  and the package `homepage` = `https://imminence.free.componentdock.com`.
