# Sienna — Design Notes

Reference: **Remake** — `https://colorlib.com/wp/template/remake/`  
Live preview: `https://preview.colorlib.com/theme/remake/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/remake-free-template.jpg  
Shipped: https://sienna.free.componentdock.com

Sienna is a single-page barber-shop landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Remake" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Josefin Sans**, **Josefin Sans:wght@400;600;700**, **Roboto Condensed**

## Design tokens (`apps/sienna/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#99513a` | brand |
| `--color-brand-dark` | `#7e4230` | brand dark |
| `--color-ink` | `#3a414e` | Slate — headings + dark footer text (#3a414e from the original). |
| `--color-ink-dark` | `#2b313c` | ink dark |
| `--color-paper` | `#fff9f7` | Soapstone — light warm section background (#fff9f7 from the original). |
| `--color-mist` | `#999999` | Mist — muted body text (#999999 from the original). |
| `--color-primary-50` | `#faf5f2` | primary 50 |
| `--color-primary-100` | `#f3e5df` | primary 100 |
| `--color-primary-200` | `#e6c8bc` | primary 200 |
| `--color-primary-300` | `#d4a391` | primary 300 |
| `--color-primary-400` | `#b9785f` | primary 400 |
| `--color-primary-500` | `#99513a` | primary 500 |
| `--color-primary-600` | `#7e4230` | primary 600 |
| `--color-primary-700` | `#653627` | primary 700 |
| `--color-primary-800` | `#4d2a1f` | primary 800 |
| `--color-primary-900` | `#3a2018` | primary 900 |
| `--font-sans` | `'Roboto Condensed', ui-sans-serif, system-ui, sans-serif` | Original fonts: "Josefin Sans" (headings) + "Roboto Condensed" (body). |
| `--font-display` | `'Josefin Sans', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Features` | Advance features | see fidelity note below |
| 5 | `Video` | — | no dedicated spec block |
| 6 | `Services` | Services grid | see fidelity note below |
| 7 | `Team` | Team | see fidelity note below |
| 8 | `Pricing` | Pricing plan | see fidelity note below |
| 9 | `Testimonials` | — | no dedicated spec block |
| 10 | `Blog` | — | no dedicated spec block |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Sienna", a "Home" link, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a background image, a level-1 headline, and a call-to-action button.

### `About`
The system SHALL render an about section with a heading and supporting copy.

### `Features`
The system SHALL render an "Advance Feature" section with at least four icon cards.

### `Video`
*anchors only* — Video · Play the shop tour video · Intro Video · View Our Work

### `Services`
The system SHALL render an "Our Services" section with at least three service cards.

### `Team`
The system SHALL render an "Our Team" section with at least two member cards.

### `Pricing`
The system SHALL render a "Pricing Plan" section with three priced tiers.

### `Testimonials`
*anchors only* — What Clients Say · Testimonials

### `Blog`
*anchors only* — Read The Latest Hair Style News · Our Blog · Read More

### `Footer`
The system SHALL render a footer with the site name, quick links, a newsletter form, and social links.

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
- **Provenance ban.** No file under `apps/sienna/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sienna/public/CNAME` = `sienna.free.componentdock.com`
  and the package `homepage` = `https://sienna.free.componentdock.com`.
