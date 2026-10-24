# Givingheart — Design Notes

Reference: **Charity 2** — `https://colorlib.com/wp/template/charity-2/`  
Live preview: `https://preview.colorlib.com/theme/charity2/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/charity2-free-template.jpg  
Shipped: https://givingheart.free.componentdock.com

GivingHeart is a single-page charity landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Charity 2" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/givingheart/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#f41665` | primary |
| `--color-primary-500` | `#f41665` | primary 500 |
| `--color-primary-600` | `#d11254` | primary 600 |
| `--color-primary-700` | `#b00e47` | primary 700 |
| `--color-dark` | `#222222` | dark |
| `--color-light` | `#f9f9ff` | light |
| `--color-ink` | `#222222` | ink |
| `--color-surface` | `#ffffff` | surface |
| `--color-muted` | `#777777` | muted |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-heading` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero / Banner section | see fidelity note below |
| 3 | `CTA` | — | no dedicated spec block |
| 4 | `Projects` | Projects section | see fidelity note below |
| 5 | `About` | About section | see fidelity note below |
| 6 | `Volunteers` | Volunteers section | see fidelity note below |
| 7 | `Donate` | Donate / Contact section | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a sticky top navigation bar with the site name "GivingHeart", anchor links to page sections, and a "Donate Now" CTA button.

### `Hero`
The system SHALL render a full-width hero with a dark overlay background image, a level-1 heading, and a call-to-action button.

### `CTA`
*anchors only* — Please Help them and Donate now · Donate Now

### `Projects`
The system SHALL render a projects section with a heading and 3 project cards in a 3-column grid, each with an image overlay and hover effect.

### `About`
The system SHALL render a split about section with a full-width image on the left and text content on the right, on a dark background.

### `Volunteers`
The system SHALL render a volunteers section with a heading and 4 volunteer cards in a 4-column grid, each with an image overlay and hover effect.

### `Donate`
The system SHALL render a donate section with a dark parallax background, a heading, a trust information column on the left, and a donation form on the right.

### `Footer`
The system SHALL render a footer with navigation links, social media icons, and a copyright notice linking to Component Dock.

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
- **Provenance ban.** No file under `apps/givingheart/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/givingheart/public/CNAME` = `givingheart.free.componentdock.com`
  and the package `homepage` = `https://givingheart.free.componentdock.com`.

## Token re-read (2026-10-24s) — REFERENCE CORRECTED

**The reference in this file is the wrong demo.** `theme/charity-2/` is a
different ColorLib charity page (hot-pink → orange → yellow gradients, Poppins).
The "Charity 2" entry's demo — the one its screenshot
(`charity2-free-template.jpg`) renders, and the one the preview host's catalog
maps the entry to — is `https://preview.colorlib.com/theme/charity2/`
(HTTP 200, 39,401 B; sheet `css/style.css` 28,184 B, sha256 `13ed53e60d095731…`).

Measured palette: **brand green `#83ba09`** (32 decls — `.primary-button`,
link/nav hover, counters, progress bars, image hover overlays, footer social);
ink `#23262a` (headings + links); body `#5f646b` (15 px Roboto); band `#f4f4f8`
(footer, about tint); hairlines `#e6e6ea` (18); white cards. Headings
**Source Sans Pro** 700; 25 px pill buttons with a diagonal sheen; 10 px cards;
50% avatars / meta icons.

Sections (live DOM): header/navbar (Home · About · Causes · Events · Blog ·
Contact + search + burger) → hero carousel, 100 vh ("Save The Children" /
"Become A Volunteer") → `#about` "Welcome to Charity" + "Read More" →
`#numbers` 47k Donors / 154K Children Saved / 785K Donated / 357 Volunteers →
`#causes` "Our Causes" 6 cards with % progress bars → `#cta` "Become A Volunteer"
parallax band → `#events` "Upcoming Events" 4 cards → `#testimonial` parallax,
4 quotes → `#blog` "Our Blog" 3 cards → `#footer` (brand, Galery, Newsletter) +
`#footer-bottom`.

The pink tokens recorded above are not in this sheet; `apps/givingheart` still
paints them → app debt. Spec: `openspec/specs/template-givingheart/spec.md`.
