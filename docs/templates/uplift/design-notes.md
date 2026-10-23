# Uplift — Design Notes

Reference: **Hopehand** — `https://colorlib.com/wp/template/hopehand/`  
Live preview: `https://preview.colorlib.com/theme/hopehand/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/hopehand-template-1771943776003.jpg  
Shipped: https://uplift.free.componentdock.com

Uplift is a single-page nonprofit fundraising landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Hopehand" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Manrope**, **Manrope:wght@300;400;500;600;700;800**

## Design tokens (`apps/uplift/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#ecfdf5` | primary 50 |
| `--color-primary-100` | `#d1fae5` | primary 100 |
| `--color-primary-200` | `#a7f3d0` | primary 200 |
| `--color-primary-300` | `#6ee7b7` | primary 300 |
| `--color-primary-400` | `#34d399` | primary 400 |
| `--color-primary-500` | `#10b981` | primary 500 |
| `--color-primary-600` | `#059669` | primary 600 |
| `--color-primary-700` | `#047857` | primary 700 |
| `--color-primary-800` | `#065f46` | primary 800 |
| `--color-primary-900` | `#064e3b` | primary 900 |
| `--color-accent-400` | `#fb923c` | accent 400 |
| `--color-accent-500` | `#f97316` | accent 500 |
| `--color-accent-600` | `#ea580c` | accent 600 |
| `--font-sans` | `'Manrope', ui-sans-serif, system-ui, sans-serif` | Manrope (300–800) — the original's font, via Google Fonts <link> |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Mission` | Mission section | see fidelity note below |
| 4 | `Programs` | Programs section | see fidelity note below |
| 5 | `Impact` | Impact section | see fidelity note below |
| 6 | `Stories` | Stories section | see fidelity note below |
| 7 | `GetInvolved` | Get involved section | see fidelity note below |
| 8 | `Faq` | FAQ section | see fidelity note below |
| 9 | `Donate` | Donate section | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Uplift", anchor links to the page's sections, a "Donate Now" CTA, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a badge, headline, mission subtext, two call-to-action buttons, and impact stats.

### `Mission`
The system SHALL render a mission section with at least three cause cards.

### `Programs`
The system SHALL render a programs section with at least four program cards on an alternating gray band.

### `Impact`
The system SHALL render an impact section with a stats display.

### `Stories`
The system SHALL render a stories section with at least one testimonial quote.

### `GetInvolved`
The system SHALL render a "Join Our Mission" section with at least three involvement cards.

### `Faq`
The system SHALL render an FAQ accordion with at least three questions.

### `Donate`
The system SHALL render a donate section on a dark band with donation amount options and trust badges.

### `Footer`
The system SHALL render a footer with link columns, a newsletter signup, and a copyright line.

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
- **Provenance ban.** No file under `apps/uplift/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/uplift/public/CNAME` = `uplift.free.componentdock.com`
  and the package `homepage` = `https://uplift.free.componentdock.com`.
