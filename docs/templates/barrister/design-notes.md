# Barrister — Design Notes

Reference: **Fective** — `https://colorlib.com/wp/template/fective/`  
Live preview: `https://preview.colorlib.com/theme/fective/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/fective-free-template.jpg  
Shipped: https://barrister.free.componentdock.com

Barrister is a single-page law firm / attorney website landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Fective" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:wght@400;700**, **Raleway**

## Design tokens (`apps/barrister/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#d79100` | brand |
| `--color-brand-dark` | `#dda226` | brand dark |
| `--color-brand-deep` | `#db9c1a` | brand deep |
| `--color-brand-active` | `#dfa733` | brand active |
| `--color-slate` | `#242f3a` | slate |
| `--color-ink` | `#212529` | ink |
| `--color-muted` | `#6c757d` | muted |
| `--color-surface` | `#f8f9fa` | surface |
| `--color-edge` | `#e9ecef` | edge |
| `--color-gold-light` | `#ebc880` | gold light |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `Intro` | Intro (promise) section | see fidelity note below |
| 4 | `About` | About me section | see fidelity note below |
| 5 | `WhyUs` | Why Us heading + icon row | see fidelity note below |
| 6 | `Gallery` | Gallery slider | see fidelity note below |
| 7 | `WhyChoose` | Why Choose Us section | see fidelity note below |
| 8 | `Services` | List Of Services section | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main navigation · Mobile navigation

### `Hero`
The system SHALL render a full-width hero with a photo background, a dark slate overlay, an uppercase gold kicker, the main headline, a gold-outline CTA button, and a gold vertical rule accent.

### `Intro`
The system SHALL render a white intro section with a centered promise heading, two paragraphs, a signature, and a gold vertical rule accent.

### `About`
The system SHALL render a light-gray about section with a text block and a photo side by side.

### `WhyUs`
The system SHALL render a "Why Us" heading block followed by a four-column row of court-themed icon cards.

### `Gallery`
The system SHALL render an image gallery slider with dot navigation.

### `WhyChoose`
The system SHALL render a "Why Choose Us" section with a photo and three numbered feature rows.

### `Services`
The system SHALL render a "List Of Services" section with a text box, a photo, and a two-column checklist.

### `Footer`
The system SHALL render a light footer with four widget columns and a copyright bar.

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
- **Provenance ban.** No file under `apps/barrister/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/barrister/public/CNAME` = `barrister.free.componentdock.com`
  and the package `homepage` = `https://barrister.free.componentdock.com`.
