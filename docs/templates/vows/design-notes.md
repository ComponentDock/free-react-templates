# Vows — Design Notes

Reference: **Forever Always** — `https://colorlib.com/wp/template/forever-always/`  
Live preview: `https://preview.colorlib.com/theme/forever-always/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/foreveralways-template-1771943944925.jpg  
Shipped: https://vows.free.componentdock.com

Vows is a single-page wedding planner landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lora**, **Playfair Display**, **Playfair Display:wght@400;500;600;700;800**

## Design tokens (`apps/vows/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fff1f2` | primary 50 |
| `--color-primary-100` | `#ffe4e6` | primary 100 |
| `--color-primary-200` | `#fecdd3` | primary 200 |
| `--color-primary-300` | `#fda4af` | primary 300 |
| `--color-primary-400` | `#fb7185` | primary 400 |
| `--color-primary-500` | `#f43f5e` | primary 500 |
| `--color-primary-600` | `#e11d48` | primary 600 |
| `--color-primary-700` | `#be123c` | primary 700 |
| `--color-primary-800` | `#9f1239` | primary 800 |
| `--color-primary-900` | `#881337` | primary 900 |
| `--color-primary-950` | `#82181a` | primary 950 |
| `--font-sans` | `'Lora', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-serif` | `'Playfair Display', ui-serif, Georgia, serif` | font serif |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `StatsBand` | Stats band | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `Portfolio` | Portfolio section | see fidelity note below |
| 6 | `Transformations` | Venue Transformations section | see fidelity note below |
| 7 | `Planner` | Meet Your Planner section | see fidelity note below |
| 8 | `Packages` | Wedding Packages section | see fidelity note below |
| 9 | `Testimonials` | Testimonials section | see fidelity note below |
| 10 | `Faq` | FAQ section | see fidelity note below |
| 11 | `ContactCta` | Contact CTA section | see fidelity note below |
| 12 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a sticky top navigation bar with the brand wordmark, section links, a "Start Planning" button, a dark-mode toggle and a mobile drawer menu.

### `Hero`
The system SHALL render a centered hero on a blush gradient background with a serif headline, a sub-paragraph, two CTAs and a stats row.

### `StatsBand`
The system SHALL render a bordered gray stats band with four animated statistics.

### `Services`
The system SHALL render a "Our Services" section with six service cards.

### `Portfolio`
The system SHALL render a "Our Portfolio" section with six couple cards.

### `Transformations`
The system SHALL render a "Venue Transformations" section with before/after image cards.

### `Planner`
The system SHALL render a "Meet Your Planner" section with a planner profile.

### `Packages`
The system SHALL render a "Wedding Packages" section with three pricing cards.

### `Testimonials`
The system SHALL render a "What Our Couples Say" section with at least three testimonial cards.

### `Faq`
The system SHALL render a "Frequently Asked Questions" accordion with five questions.

### `ContactCta`
The system SHALL render a rose gradient call-to-action band with two buttons.

### `Footer`
The system SHALL render a dark footer with a brand blurb, three link columns and a newsletter signup.

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
- **Provenance ban.** No file under `apps/vows/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/vows/public/CNAME` = `vows.free.componentdock.com`
  and the package `homepage` = `https://vows.free.componentdock.com`.
