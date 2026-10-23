# Vigil — Design Notes

Reference: **05 Comming Soon** — `https://colorlib.com/wp/template/05-comming-soon/`  
Live preview: `https://preview.colorlib.com/theme/05-comming-soon/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-20.jpg  
Shipped: https://vigil.free.componentdock.com

A Coming Soon template with full-screen background, heading, description paragraph, countdown timer, notify us cta button and social media sections. Recreation of ColorLib "05 Comming Soon" (`05-comming-soon`).

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@400;600**, **Poppins**

## Design tokens (`apps/vigil/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-pink` | `#f84982` | brand pink |
| `--color-brand-pink-hover` | `#e45f74` | brand pink hover |
| `--color-overlay` | `rgba(0, 0, 0, 0.4)` | overlay |
| `--font-heading` | `'Poppins', sans-serif` | font heading |
| `--font-body` | `'Open Sans', sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `CountdownTimer` | Countdown timer displays | see fidelity note below |
| 2 | `SocialLinks` | Social media links | see fidelity note below |
| 3 | `Footer` | Footer attribution | see fidelity note below |

## Section-by-section fidelity

### `CountdownTimer`
The page SHALL display a countdown timer with four circular units.

### `SocialLinks`
The page SHALL display five colored social media icons at the bottom.

### `Footer`
The page SHALL link to Component Dock in the footer.

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
- **Provenance ban.** No file under `apps/vigil/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/vigil/public/CNAME` = `vigil.free.componentdock.com`
  and the package `homepage` = `https://vigil.free.componentdock.com`.
