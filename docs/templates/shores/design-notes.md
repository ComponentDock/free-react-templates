# Shores — Design Notes

Reference: **Seelife** — `https://colorlib.com/wp/template/seelife/`  
Live preview: `https://preview.colorlib.com/theme/seelife/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/seelife-free-template.jpg  
Shipped: https://shores.free.componentdock.com

A charity/nonprofit landing page template with hero banner, donation causes, about section, featured causes with progress tracking, events with countdown timers, team showcase, CTA, blog, newsletter, and 4-column footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600;700**, **Roboto**

## Design tokens (`apps/shores/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#60bc0f` | brand |
| `--color-brand-hover` | `#4ea50c` | brand hover |
| `--color-brand-light` | `#f0faf0` | brand light |
| `--color-accent` | `#fdbb00` | Yellow accent for secondary buttons and highlights. |
| `--color-accent-hover` | `#e0a500` | accent hover |
| `--color-overlay` | `rgba(6, 13, 1, 0.6)` | Dark overlay for banner. |
| `--color-ink` | `#222222` | Ink — dark headings (#222222 from the original). |
| `--color-ink-dark` | `#1a1a1a` | ink dark |
| `--color-paper` | `#ffffff` | Paper — white section backgrounds. |
| `--color-mist` | `#777777` | Mist — muted body text. |
| `--color-primary-50` | `#f0faf0` | primary 50 |
| `--color-primary-100` | `#d4f2d4` | primary 100 |
| `--color-primary-200` | `#a8e5a8` | primary 200 |
| `--color-primary-300` | `#7cd87c` | primary 300 |
| `--color-primary-400` | `#50cb50` | primary 400 |
| `--color-primary-500` | `#60bc0f` | primary 500 |
| `--color-primary-600` | `#4ea50c` | primary 600 |
| `--color-primary-700` | `#3d850a` | primary 700 |
| `--color-primary-800` | `#2d6508` | primary 800 |
| `--color-primary-900` | `#1e4506` | primary 900 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Fonts: Poppins for headings, Roboto for body. |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero Banner | see fidelity note below |
| 3 | `Causes` | Causes Section | see fidelity note below |
| 4 | `About` | About Section | see fidelity note below |
| 5 | `FeaturedCauses` | Featured Causes | see fidelity note below |
| 6 | `Events` | Events | see fidelity note below |
| 7 | `Team` | Team | see fidelity note below |
| 8 | `CtaBanner` | CTA Banner | see fidelity note below |
| 9 | `Blog` | Blog | see fidelity note below |
| 10 | `Newsletter` | Newsletter | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a transparent navigation bar with logo and navigation links (Home, About, Causes, Events, Contact).

### `Hero`
The template SHALL display a full-width hero banner with dark overlay, subtitle, heading, description, and two CTA buttons.

### `Causes`
The template SHALL display three cause cards with icons, titles, and descriptions.

### `About`
The template SHALL display a split layout with image on the left and text on the right.

### `FeaturedCauses`
The template SHALL display three cause cards with images, progress bars, raised/goal amounts, and donor counts.

### `Events`
The template SHALL display four event cards with images, countdown timers, and learn more buttons.

### `Team`
The template SHALL display four team member cards with photos, names, roles, descriptions, and social links.

### `CtaBanner`
The template SHALL display a full-width dark CTA section with heading, description, and join button.

### `Blog`
The template SHALL display three story cards with images, dates, categories, and titles.

### `Newsletter`
The template SHALL display a newsletter subscription form with email input and subscribe button.

### `Footer`
The template SHALL display a 4-column footer with mission, quick links, gallery, and contact information, plus a footer bottom linking to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/shores/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/shores/public/CNAME` = `shores.free.componentdock.com`
  and the package `homepage` = `https://shores.free.componentdock.com`.

## Reference tokens (measured 2026-10-23)

Evidence: https://preview.colorlib.com/theme/seelife/ — HTTP 200 on 2026-10-23; measured `css/style.css` (66,116 bytes). Title served: "Seelife Charity".

- Hex census: `#60bc0f` 44, `#222222` 33, `#f8b600` 19, `#f9f9ff` 17, `#777777` 13, `#4cd3e3` 11, `#f4e700` 10, `#38a4ff` 9, `#fdbb00` 7, `#f44a40` 6 (count = literal occurrences in the sheet).
- Typefaces: Body: `Roboto`; Headings: `Poppins`.
- Radii: `0px` (15 — square buttons), `3px` (8), `8px` (6), `20px` (5), `8.5px` (5), `50%` (4).
- Section order (shipped): `Navbar -> Hero -> Causes -> About -> FeaturedCauses -> Events -> Team -> CtaBanner -> Blog -> Newsletter -> Footer`.

### Deltas measured against the shipped app

- The app's `--color-brand #60bc0f` matches the reference (44 occurrences).
- The reference's PRIMARY CTA is gold `#f8b600` (19 occurrences, `.genric-btn.primary`); the app tokens `#fdbb00` instead (7 occurrences, a secondary literal).
- Icon accents `#4cd3e3`, `#38a4ff`, `#f4e700` and `#f44a40` are untokenized in `apps/shores` — the app keeps only green + gold.
- App adds `CtaBanner` and `Newsletter` bands absent from the demo's section list.
