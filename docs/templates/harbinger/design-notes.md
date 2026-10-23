# Harbinger — Design Notes

Reference: **04 Comming Soon** — `https://colorlib.com/wp/template/04-comming-soon/`  
Live preview: `https://colorlib.com/etc/cs/04-comming-soon.html`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-19.jpg  
Shipped: https://harbinger.free.componentdock.com

A Coming Soon template with under construction heading, email subscription and social media sections. Recreation of ColorLib "04 Comming Soon" (`04-comming-soon`).

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Poppins**, **Poppins:wght@400;500;600;700**

## Design tokens (`apps/harbinger/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-pink` | `#f84982` | Harbinger brand tokens — dark split layout + hot pink accent |
| `--color-brand-pink-hover` | `#e40b52` | brand pink hover |
| `--color-brand-pink-focus` | `#ff6fa3` | brand pink focus |
| `--color-brand-dark` | `#0c0d0f` | brand dark |
| `--color-input-bg` | `#f1f2f3` | input bg |
| `--color-input-border` | `transparent` | input border |
| `--color-social-facebook` | `#2a61d6` | Social brand colors |
| `--color-social-twitter` | `#3aa4f8` | social twitter |
| `--color-social-google` | `#f43846` | social google |
| `--color-social-instagram` | `#8f614a` | social instagram |
| `--color-social-pinterest` | `#e1c013` | social pinterest |
| `--color-body` | `#333333` | Text colors |
| `--color-paragraph` | `#555555` | paragraph |
| `--color-description` | `#eeeeee` | description |
| `--color-muted` | `#999999` | muted |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Hero` | Split layout with hero image | see fidelity note below |
| 2 | `Footer` | Component Dock footer | see fidelity note below |

## Section-by-section fidelity

### `Hero`
The page SHALL display a full-viewport split layout with a hero image on the left and content on the right. On mobile, the layout stacks vertically.

### `Footer`
The page SHALL display a footer with a link to Component Dock.

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
- **Provenance ban.** No file under `apps/harbinger/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/harbinger/public/CNAME` = `harbinger.free.componentdock.com`
  and the package `homepage` = `https://harbinger.free.componentdock.com`.
