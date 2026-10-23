# Showcase — Design Notes

Reference: **Ronaldo** — `https://colorlib.com/wp/template/ronaldo/`  
Live preview: `https://preview.colorlib.com/theme/ronaldo/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ronaldo-free-template.jpg  
Shipped: https://showcase.free.componentdock.com

Showcase is a single-page personal-portfolio website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700;800;900**

## Design tokens (`apps/showcase/src/index.css` `@theme`)

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
| `--color-brand` | `#4f46e5` | brand |
| `--color-brand-hover` | `#433cc3` | brand hover |
| `--color-brand-active` | `#3f38b7` | brand active |
| `--color-heading` | `#111827` | heading |
| `--color-ink` | `#000000` | ink |
| `--color-value` | `#374151` | value |
| `--color-label` | `#6b7280` | label |
| `--color-muted` | `#4b5563` | muted |
| `--color-line` | `#e5e7eb` | line |
| `--color-surface` | `#f3f4f6` | surface |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `About` | About | see fidelity note below |
| 4 | `Partners` | Partner strip | see fidelity note below |
| 5 | `Resume` | Resume tabs | see fidelity note below |
| 6 | `Services` | Services | see fidelity note below |
| 7 | `Projects` | Projects | see fidelity note below |
| 8 | `Counters` | Counter band | see fidelity note below |
| 9 | `Blog` | Blog | see fidelity note below |
| 10 | `HireMe` | Hire-me band | see fidelity note below |
| 11 | `Contact` | Contact | see fidelity note below |
| 12 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a transparent navbar over the hero with an indigo circle logo mark, a brand wordmark, seven navigation links, an active-section underline, a fixed white blurred bar after scrolling, and a mobile hamburger menu.

### `Hero`
The system SHALL render a full-height hero with a pale lavender background (left-half indigo overlay at 10% opacity), centered intro text with a rotating typed role word, and a scroll-down mouse indicator.

### `About`
The system SHALL render an About section with a rounded portrait photo, a "120 Project complete" count-up stat, a "Download CV" button, and a six-row personal detail list.

### `Partners`
The system SHALL render a thin strip of five muted partner logotype placeholders between the About and Resume sections.

### `Resume`
The system SHALL render a Resume section with a heading, four pill tabs (Education, Experience, Skills, Awards), and distinct panels per tab with white cards, indigo dates, tinted icon boxes, and progress meters.

### `Services`
The system SHALL render a Services section with a heading and six white cards (icon, uppercase title, description) that lift with a soft shadow on hover.

### `Projects`
The system SHALL render a Projects section with a heading and six image tiles that reveal an indigo overlay with a title and label on hover or focus.

### `Counters`
The system SHALL render a band of four white cards with indigo count-up numbers and uppercase labels.

### `Blog`
The system SHALL render a Blog section with a heading and three white cards, each with an image, a meta row, a linked title, and an excerpt.

### `HireMe`
The system SHALL render a full-width CTA band on a background image under an indigo gradient overlay with a heading, paragraph, and a "Hire me" button.

### `Contact`
The system SHALL render a Contact section with a heading, four icon info cards, and a validated contact form (Your Name, Your Email, Subject, Message) with a "Send Message" button.

### `Footer`
The system SHALL render a black footer with four columns (About with social buttons, Links, Services, Have a Questions?) and a copyright bar.

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
- **Provenance ban.** No file under `apps/showcase/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/showcase/public/CNAME` = `showcase.free.componentdock.com`
  and the package `homepage` = `https://showcase.free.componentdock.com`.
