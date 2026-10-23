# Vitalis — Design Notes

Reference: **Aesthetic** — `https://colorlib.com/wp/template/aesthetic/`  
Live preview: `https://preview.colorlib.com/theme/aesthetic/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/aesthetic-free-template.jpg  
Shipped: https://vitalis.free.componentdock.com

Vitalis is a single-page medical/cosmetic-surgery landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Aesthetic" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/vitalis/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#13a2b7` | brand |
| `--color-brand-dark` | `#0d7f91` | brand dark |
| `--color-brown` | `#785028` | brown |
| `--color-ink` | `#111111` | Ink — near-black bands and footer (#111111 from the original). |
| `--color-ink-dark` | `#000000` | ink dark |
| `--color-paper` | `#f8f9fa` | Paper — light section backgrounds (default white, alt #f8f9fa). |
| `--color-mist` | `#666666` | Mist — muted body text (#666666 from the original). |
| `--color-primary-50` | `#eefafc` | primary 50 |
| `--color-primary-100` | `#d5f2f6` | primary 100 |
| `--color-primary-200` | `#aae4ec` | primary 200 |
| `--color-primary-300` | `#6fd0dd` | primary 300 |
| `--color-primary-400` | `#33b5c8` | primary 400 |
| `--color-primary-500` | `#13a2b7` | primary 500 |
| `--color-primary-600` | `#0d7f91` | primary 600 |
| `--color-primary-700` | `#0e6675` | primary 700 |
| `--color-primary-800` | `#115360` | primary 800 |
| `--color-primary-900` | `#124552` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Original font: "Poppins" (body + headings) via Google Fonts. |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `Consultation` | Consultation band | see fidelity note below |
| 4 | `ChooseUs` | Choose us | see fidelity note below |
| 5 | `Services` | — | no dedicated spec block |
| 6 | `Team` | — | no dedicated spec block |
| 7 | `Blog` | Blog | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Vitalis", a "Home" link, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a background image, a level-1 headline, and a call-to-action button.

### `Consultation`
The system SHALL render a consultation band with a heading, introductory copy, an appointment form, and a video play button.

### `ChooseUs`
The system SHALL render an "Offer for you" section with at least four icon cards.

### `Services`
*anchors only* — Our services · Offer for you · From routine care to advanced cosmetic surgery, we cover every step of your journey.

### `Team`
*anchors only* — Our Team · Our Expert Doctors · Meet the specialists who will take care of your health and beauty.

### `Blog`
The system SHALL render a "Skin care tips" section with at least three post cards.

### `Footer`
The system SHALL render a footer with the site name, quick links, contact details, and social links.

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
- **Provenance ban.** No file under `apps/vitalis/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/vitalis/public/CNAME` = `vitalis.free.componentdock.com`
  and the package `homepage` = `https://vitalis.free.componentdock.com`.
