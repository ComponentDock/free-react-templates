# Esquire — Design Notes

Reference: **Lawyer** — `https://colorlib.com/wp/template/lawyer/`  
Live preview: `https://preview.colorlib.com/theme/lawyer/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/lawyer-free-template.jpg  
Shipped: https://esquire.free.componentdock.com

Esquire is a law-firm one-page template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Lawyer" template design (see TEMPLATES.md — appears 2×: lines 435, 2126; both rows point to the same source, one prep covers all; verified with `grep -c 'wp/template/lawyer/'` = 2), built under a different…

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:wght@400;500;600;700**, **Poppins**

## Design tokens (`apps/esquire/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f2c64d` | brand |
| `--color-brand-dark` | `#d9a92f` | brand dark |
| `--color-gold-deep` | `#cea159` | gold deep |
| `--color-ink` | `#1f1f1f` | Ink — near-black headings and section titles (#1F1F1F). |
| `--color-hero` | `#000000` | Hero-black — the header and hero backgrounds (#000). |
| `--color-footer` | `#202020` | Footer — the dark footer background (#202020). |
| `--color-warm` | `#fffdf8` | Warm — the cream about/practice section backgrounds (#FFFDF8). |
| `--color-cream-chip` | `#fef7e7` | Cream-chip — the lawyer social chip background (#FEF7E7). |
| `--color-social-chip` | `#171717` | Social-chip — the header circular social icon background (#171717). |
| `--color-hero-sub` | `#c7c7c7` | hero sub |
| `--color-section-sub` | `#727272` | Section-sub — muted grey section paragraph and role text (#727272). |
| `--color-placeholder` | `#919191` | Placeholder — form placeholder text and case-count labels (#919191). |
| `--color-paper` | `#ffffff` | Paper — white text on dark sections and the newsletter input (#fff). |
| `--color-primary-500` | `#f6d36b` | primary 500 |
| `--color-primary-600` | `#f2c64d` | primary 600 |
| `--color-primary-700` | `#d9a92f` | primary 700 |
| `--font-heading` | `'Playfair Display', Georgia, 'Times New Roman', serif` | font heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `PracticeArea` | Practice area | see fidelity note below |
| 5 | `Lawyers` | Our Lawyers | see fidelity note below |
| 6 | `Testimonials` | Testimonials carousel | see fidelity note below |
| 7 | `Appointment` | Appointment form | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main

### `Hero`
The system SHALL render a dark full-width hero over a banner background with a serif headline, a tagline, and an outlined gold CTA.

### `About`
The system SHALL render the cream about area with two centered info columns, a signature, a 93% stat, and two gold counters.

### `PracticeArea`
The system SHALL render a "Practice Area" section with a 4-across photo grid that reveals a dark overlay card on hover.

### `Lawyers`
The system SHALL render three centered lawyer cards with photo, name, role, and social chips.

### `Testimonials`
The system SHALL render a background-image testimonial section with a client-side carousel of centered white quotes.

### `Appointment`
The system SHALL render an appointment section with a photo, an info column, and a border-bottom-only form with a full-width gold submit.

### `Footer`
The system SHALL render a `#202020` footer with a contact block, two link columns, a subscribe form, and the copyright line.

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
- **Provenance ban.** No file under `apps/esquire/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/esquire/public/CNAME` = `esquire.free.componentdock.com`
  and the package `homepage` = `https://esquire.free.componentdock.com`.
