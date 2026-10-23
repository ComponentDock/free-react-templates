# Acumen — Design Notes

Reference: **Classic** — `https://colorlib.com/wp/template/classic/`  
Live preview: `https://preview.colorlib.com/theme/classic/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/classic-free-template.jpg  
Shipped: https://acumen.free.componentdock.com

A business template with hero, about, services, skills, portfolio and team sections. Recreation of the ColorLib **Classic** business template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@400;500;600;700;800**, **Roboto**, **Satisfy**

## Design tokens (`apps/acumen/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#a1c4fd` | brand |
| `--color-brand-light` | `#c2e9fb` | brand light |
| `--color-brand-dark` | `#7bade8` | brand dark |
| `--color-ink` | `#4f4f4f` | Ink — dark text (#4f4f4f from the original). |
| `--color-ink-dark` | `#333333` | ink dark |
| `--color-paper` | `#f9f9f9` | Paper — light section background (#f9f9f9). |
| `--color-mist` | `#898989` | Mist — muted text (#898989). |
| `--color-divider` | `#e8e8e8` | Border color. |
| `--color-primary-50` | `#f0f7ff` | primary 50 |
| `--color-primary-100` | `#e0f0ff` | primary 100 |
| `--color-primary-200` | `#c2e1ff` | primary 200 |
| `--color-primary-300` | `#a1c4fd` | primary 300 |
| `--color-primary-400` | `#7bade8` | primary 400 |
| `--color-primary-500` | `#5a96d8` | primary 500 |
| `--color-primary-600` | `#4080c8` | primary 600 |
| `--color-primary-700` | `#2e68b0` | primary 700 |
| `--color-primary-800` | `#1f4f90` | primary 800 |
| `--color-primary-900` | `#153a70` | primary 900 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Original fonts: "Montserrat" (headings) + "Roboto" (body) + "Satisfy" (accent). |
| `--font-display` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font display |
| `--font-accent` | `'Satisfy', cursive` | font accent |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `About` | About section tabs | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `Skills` | Skills section | see fidelity note below |
| 6 | `Portfolio` | Portfolio filter | see fidelity note below |
| 7 | `Team` | Team section | see fidelity note below |
| 8 | `Pricing` | Pricing toggle | see fidelity note below |
| 9 | `Blog` | Blog section | see fidelity note below |
| 10 | `Counter` | Counter stats | see fidelity note below |
| 11 | `Contact` | Contact form | see fidelity note below |
| 12 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a sticky top navigation bar with the site name "Acumen", navigation links (Home, Services, Portfolio, Team, Price, Blog, Contact), and a search toggle.

### `Hero`
The system SHALL render a full-width hero section with a background image, a dark overlay, a headline, a subtitle, and a "Contact Now" CTA button.

### `About`
The system SHALL render an about section with three tabbed content panels (Our Mission, Our Vision, Our Support) and a "View More" button.

### `Services`
The system SHALL render a services section with 6 service cards in a grid layout, each with an icon, title, description, and "Read More" link.

### `Skills`
The system SHALL render a skills section with 6 progress bars showing percentage levels with correct ARIA attributes.

### `Portfolio`
The system SHALL render a portfolio section with filterable gallery grid. Clicking a filter tab SHALL filter the displayed items.

### `Team`
The system SHALL render a team section with 4 team member cards, each showing a photo, name, role, and social links on hover.

### `Pricing`
The system SHALL render a pricing section with Monthly/Yearly toggle tabs and 4 pricing tiers. Clicking a toggle SHALL switch the displayed period.

### `Blog`
The system SHALL render a blog section with 1 featured post and 3 side posts, each showing a date, title, and excerpt.

### `Counter`
The system SHALL render a dark-background counter section with 4 stat counters displaying the correct values.

### `Contact`
The system SHALL render a contact section with a form (Name, Email, Subject, Message, Send Now button) and address information.

### `Footer`
The system SHALL render a dark footer with logo, description, subscription input, link columns (Company, Resources, Solutions), and a Component Dock credit link.

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
- **Provenance ban.** No file under `apps/acumen/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/acumen/public/CNAME` = `acumen.free.componentdock.com`
  and the package `homepage` = `https://acumen.free.componentdock.com`.
