# Lightwell — Design Notes

Reference: **Cellon** — `https://colorlib.com/wp/template/cellon/`  
Live preview: `https://preview.colorlib.com/theme/cellon/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/cellon-free-ligh-consulting-company-template.jpg  
Shipped: https://lightwell.free.componentdock.com

A light consulting company template. Recreation of ColorLib **Cellon**. **Source slug:** `cellon` **Source URL:** https://colorlib.com/wp/template/cellon/ **Preview URL:** https://preview.colorlib.com/theme/cellon/ **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/lightwell/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#6cbb23` | brand |
| `--color-brand-light` | `#f0f8e9` | brand light |
| `--color-brand-medium` | `#a6d477` | brand medium |
| `--color-body-bg` | `#f6f6fc` | body bg |
| `--color-card-bg` | `#ffffff` | card bg |
| `--color-ink` | `#777777` | ink |
| `--color-heading` | `#222222` | heading |
| `--color-overlay-green` | `rgba(108, 187, 35, 0.85)` | overlay green |
| `--font-heading` | `'Poppins', sans-serif` | Poppins via Google Fonts <link> in index.html. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero Banner | see fidelity note below |
| 3 | `VideoCta` | Video CTA | see fidelity note below |
| 4 | `About` | About | see fidelity note below |
| 5 | `Features` | Features | see fidelity note below |
| 6 | `FaqStats` | FAQ and Stats | see fidelity note below |
| 7 | `Contact` | Contact | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a fixed-position navigation bar with the Lightwell logo, desktop nav links, and a hamburger menu for mobile viewports.

### `Hero`
The system SHALL render a full-height split hero section with an illustration on the left and a headline, subtitle, and green pill CTA button on the right.

### `VideoCta`
The system SHALL render a full-width section with a green semi-transparent overlay, a play button, and a heading.

### `About`
The system SHALL render a split about section with text content on the left and an illustration image on the right.

### `Features`
The system SHALL render 7 feature cards in a 3-column responsive grid with a green overlay background.

### `FaqStats`
The system SHALL render a section with 4 counter statistics on the left and 3 accordion FAQ items on the right.

### `Contact`
The system SHALL render a contact form section with a green overlay background, name and email inputs, a message textarea, and a submit button.

### `Footer`
The system SHALL render a footer with 4 content columns, social icons, a copyright notice, and a link to componentdock.com.

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
- **Provenance ban.** No file under `apps/lightwell/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/lightwell/public/CNAME` = `lightwell.free.componentdock.com`
  and the package `homepage` = `https://lightwell.free.componentdock.com`.
