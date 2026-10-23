# Loanforge — Design Notes

Reference: **Loan** — `https://colorlib.com/wp/template/loan/`  
Live preview: `https://preview.colorlib.com/theme/loan/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/loan-free-template.jpg  
Shipped: https://loanforge.free.componentdock.com

Loanforge is a single-page finance/lending website in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Loan" free template (source: https://colorlib.com/wp/template/loan/), built under a DIFFERENT name (**Loanforge**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Rubik**, **Rufina**, **Rufina:wght@400;700**

## Design tokens (`apps/loanforge/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#3589f1` | brand |
| `--color-brand-dark` | `#2171d3` | brand dark |
| `--color-navy` | `#000a2d` | navy |
| `--color-orange` | `#ff872d` | orange |
| `--color-text` | `#635c5c` | text |
| `--color-text-dim` | `#7a8290` | text dim |
| `--color-bg-light` | `#f7f7f7` | bg light |
| `--color-bg-lavender` | `#fbf9ff` | bg lavender |
| `--color-gold` | `#dca73a` | gold |
| `--font-heading` | `'Rufina', serif` | font heading |
| `--font-body` | `'Rubik', ui-sans-serif, system-ui, sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Header / Navbar | see fidelity note below |
| 2 | `Hero` | Hero Slider | see fidelity note below |
| 3 | `About` | About Section | see fidelity note below |
| 4 | `Services` | Services Section | see fidelity note below |
| 5 | `Support` | Support / Why-Choose Section | see fidelity note below |
| 6 | `ApplicationForm` | Application / Apply Form | see fidelity note below |
| 7 | `Team` | Team Section | see fidelity note below |
| 8 | `Testimonial` | Testimonial Section | see fidelity note below |
| 9 | `Blog` | Blog Section | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a transparent sticky header with logo, navigation links, and a phone-number CTA button.

### `Hero`
The system SHALL render a full-width hero slider with background image, overlay, headline, subtitle, CTA button, and hero illustration.

### `About`
The system SHALL render a two-column about section with text content on the left and overlapping images on the right.

### `Services`
The system SHALL render a services grid with a dark background, centered heading, and 4 service cards.

### `Support`
The system SHALL render a two-column support section with an image + badge on the left and checklist items on the right.

### `ApplicationForm`
The system SHALL render a loan application form on a dark background.

### `Team`
The system SHALL render a team grid with photos, social links, names, and roles.

### `Testimonial`
The system SHALL render a testimonial carousel with quotes, founder info, and navigation dots.

### `Blog`
The system SHALL render a blog grid with article cards.

### `Footer`
The system SHALL render a four-column footer with a bottom bar.

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
- **Provenance ban.** No file under `apps/loanforge/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/loanforge/public/CNAME` = `loanforge.free.componentdock.com`
  and the package `homepage` = `https://loanforge.free.componentdock.com`.
