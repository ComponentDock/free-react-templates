# Coursely — Design Notes

Reference: **Learnhub** — `https://colorlib.com/wp/template/learnhub/`  
Live preview: `https://preview.colorlib.com/theme/learnhub/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/learnhub-template-1770211181840.jpg  
Shipped: https://coursely.free.componentdock.com

Coursely is a single-page online-learning platform landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Plus Jakarta Sans**, **Plus Jakarta Sans:wght@500;600;700;800**

## Design tokens (`apps/coursely/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#eef2ff` | primary 50 |
| `--color-primary-100` | `#e0e7ff` | primary 100 |
| `--color-primary-200` | `#c7d2fe` | primary 200 |
| `--color-primary-300` | `#a5b4fc` | primary 300 |
| `--color-primary-400` | `#818cf8` | primary 400 |
| `--color-primary-500` | `#6366f1` | primary 500 |
| `--color-primary-600` | `#4f46e5` | primary 600 |
| `--color-primary-700` | `#4338ca` | primary 700 |
| `--color-primary-800` | `#3730a3` | primary 800 |
| `--color-primary-900` | `#312e81` | primary 900 |
| `--font-sans` | `'Inter', ui-sans-serif, system-ui, sans-serif` | Plus Jakarta Sans (display) + Inter (body) via Google Fonts <link> |
| `--font-display` | `'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Categories` | Categories section | see fidelity note below |
| 4 | `Courses` | Courses section | see fidelity note below |
| 5 | `WhyUs` | Why-us section | see fidelity note below |
| 6 | `Instructors` | Instructors section | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `Pricing` | Pricing section | see fidelity note below |
| 9 | `CtaBand` | — | no dedicated spec block |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name, anchor links to the page's sections, a "Get Started" CTA button, and a dark-mode toggle.

### `Hero`
The system SHALL render a full-width hero with a headline, subcopy, two call-to-action buttons, trust badges, and a stats row.

### `Categories`
The system SHALL render a categories section with at least six category cards, each with an icon, title, and course count.

### `Courses`
The system SHALL render a popular courses section with at least four course cards.

### `WhyUs`
The system SHALL render a value-proposition section with at least four cards.

### `Instructors`
The system SHALL render an instructors section with at least four instructor cards.

### `Testimonials`
The system SHALL render a testimonials section with at least three quotes.

### `Pricing`
The system SHALL render a pricing section with three tiers and a billing toggle.

### `CtaBand`
*anchors only* — Ready to Start Learning? · Join 50,000+ students already learning on Coursely today. · Browse Courses · No credit card required. 7-day free Pro trial. Cancel anytime.

### `Footer`
The system SHALL render a footer with link columns and a copyright line.

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
- **Provenance ban.** No file under `apps/coursely/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/coursely/public/CNAME` = `coursely.free.componentdock.com`
  and the package `homepage` = `https://coursely.free.componentdock.com`.
