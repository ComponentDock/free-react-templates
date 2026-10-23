# Horizon — Design Notes

Reference: **08 Comming Soon** — `https://colorlib.com/wp/template/08-comming-soon/`  
Live preview: `https://colorlib.com/etc/cs/08-comming-soon/index.html`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-23.jpg  
Shipped: https://horizon.free.componentdock.com

A free coming soon landing page with a full-screen background image and a centered "framed" content box — bordered with backdrop blur — containing a countdown timer, email signup, and social links. Distinct from the other seven ColorLib coming-soon recreations by its elegant framed aesthetic. <!-- live-token-reverify:2026-10-22 -->

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@400;500;600**, **Playfair Display**

## Design tokens (`apps/horizon/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#c9a96e` | Horizon brand gold — warm amber tone for the framed coming-soon aesthetic. |
| `--color-brand-hover` | `#b08d4f` | brand hover |
| `--color-frame-border` | `rgba(255, 255, 255, 0.8)` | frame border |
| `--color-frame-bg` | `rgba(255, 255, 255, 0.08)` | frame bg |
| `--color-overlay` | `rgba(0, 0, 0, 0.5)` | overlay |
| `--font-body` | `'Inter', ui-sans-serif, system-ui, sans-serif` | font body |
| `--font-heading` | `'Playfair Display', ui-serif, Georgia, serif` | font heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `CountdownTimer` | Countdown timer | see fidelity note below |
| 2 | `EmailSignup` | Email signup form | see fidelity note below |
| 3 | `SocialLinks` | Social links | see fidelity note below |
| 4 | `Footer` | Component Dock footer | see fidelity note below |

## Section-by-section fidelity

### `CountdownTimer`
The page SHALL include a countdown timer that counts down to a target date.

### `EmailSignup`
The page SHALL include an email signup form for visitors to notify when the site launches.

### `SocialLinks`
The page SHALL include social media icon links.

### `Footer`
The page footer SHALL link to Component Dock.

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
- **Provenance ban.** No file under `apps/horizon/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/horizon/public/CNAME` = `horizon.free.componentdock.com`
  and the package `homepage` = `https://horizon.free.componentdock.com`.
