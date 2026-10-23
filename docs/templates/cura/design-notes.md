# Cura — Design Notes

Reference: **Vitality** — `https://colorlib.com/wp/template/vitality/`  
Live preview: `https://preview.colorlib.com/theme/vitality/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/vitality-template-1770211473540.jpg  
Shipped: https://cura.free.componentdock.com

Cura is a single-page medical / healthcare clinic landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@400;500;600;700;800**

## Design tokens (`apps/cura/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#eff6ff` | primary 50 |
| `--color-primary-100` | `#dbeafe` | primary 100 |
| `--color-primary-200` | `#bfdbfe` | primary 200 |
| `--color-primary-300` | `#93c5fd` | primary 300 |
| `--color-primary-400` | `#60a5fa` | primary 400 |
| `--color-primary-500` | `#3b82f6` | primary 500 |
| `--color-primary-600` | `#2563eb` | primary 600 |
| `--color-primary-700` | `#1d4ed8` | primary 700 |
| `--color-primary-800` | `#1e40af` | primary 800 |
| `--color-primary-900` | `#1e3a8a` | primary 900 |
| `--color-primary-950` | `#172554` | primary 950 |
| `--color-accent-50` | `#fff1f2` | accent 50 |
| `--color-accent-100` | `#ffe4e6` | accent 100 |
| `--color-accent-200` | `#fecdd3` | accent 200 |
| `--color-accent-300` | `#fda4af` | accent 300 |
| `--color-accent-400` | `#fb7185` | accent 400 |
| `--color-accent-500` | `#f43f5e` | accent 500 |
| `--color-accent-600` | `#e11d48` | accent 600 |
| `--color-accent-700` | `#be123c` | accent 700 |
| `--color-accent-800` | `#9f1239` | accent 800 |
| `--color-accent-900` | `#881337` | accent 900 |
| `--color-success-50` | `#ecfdf5` | success 50 |
| `--color-success-100` | `#d1fae5` | success 100 |
| `--color-success-200` | `#a7f3d0` | success 200 |
| `--color-success-300` | `#6ee7b7` | success 300 |
| `--color-success-400` | `#34d399` | success 400 |
| `--color-success-500` | `#10b981` | success 500 |
| `--color-success-600` | `#059669` | success 600 |
| `--color-success-700` | `#047857` | success 700 |
| `--color-success-800` | `#065f46` | success 800 |
| `--color-success-900` | `#064e3b` | success 900 |
| `--font-sans` | `'Inter', ui-sans-serif, system-ui, sans-serif` | Original font: "Inter" (Google Fonts, loaded in index.html). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Top info bar | see fidelity note below |
| 2 | `Navbar` | Navigation bar | see fidelity note below |
| 3 | `Hero` | Hero section | see fidelity note below |
| 4 | `Slider` | Slider strip | see fidelity note below |
| 5 | `Services` | Services section | see fidelity note below |
| 6 | `Doctors` | Doctors section | see fidelity note below |
| 7 | `Booking` | Appointment booking | see fidelity note below |
| 8 | `Emergency` | Emergency contact section | see fidelity note below |
| 9 | `Reveal` | — | no dedicated spec block |
| 10 | `Testimonials` | Testimonials section | see fidelity note below |
| 11 | `Insurance` | Insurance and payment section | see fidelity note below |
| 12 | `About` | About section | see fidelity note below |
| 13 | `Contact` | Emergency contact section | see fidelity note below |
| 14 | `Footer` | Footer | see fidelity note below |
| 15 | `CookieConsent` | Component Dock attribution | see fidelity note below |
| 16 | `BackToTop` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
The system SHALL render a dark blue utility bar above the navbar with phone, hours, and an emergency hotline.

### `Navbar`
The system SHALL render a sticky white navigation bar with the site name "Cura", anchor links to the page's sections, a "Book Appointment" CTA, a dark-mode toggle, and a mobile menu.

### `Hero`
The system SHALL render a light hero with a trust badge, a blue-accented headline, a blurb, two CTA buttons, a trust row, and a doctor photo with two floating cards.

### `Slider`
The system SHALL render a pale-mint carousel strip with dot navigation between the hero and the Services section.

### `Services`
The system SHALL render a Services section with a badge, heading, description, and six service cards.

### `Doctors`
The system SHALL render a Doctors section with doctor profile cards.

### `Booking`
The system SHALL render an appointment booking form with department selection and inline validation.

### `Emergency`
The system SHALL render an emergency contact band with a hotline.

### `Reveal`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Testimonials`
The system SHALL render a patient testimonials section with quote cards.

### `Insurance`
The system SHALL render an insurance and payment information section.

### `About`
The system SHALL render an About section with a clinic story and a stats row.

### `Contact`
The system SHALL render an emergency contact band with a hotline.

### `Footer`
The system SHALL render a footer with brand info, quick links, contact columns, and a bottom bar.

### `CookieConsent`
The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.

### `BackToTop`
*anchors only* — Back to top

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
- **Provenance ban.** No file under `apps/cura/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/cura/public/CNAME` = `cura.free.componentdock.com`
  and the package `homepage` = `https://cura.free.componentdock.com`.
