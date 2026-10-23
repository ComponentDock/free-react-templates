# Brightmind — Design Notes

Reference: **Genius** — `https://colorlib.com/wp/template/genius/`  
Live preview: `https://preview.colorlib.com/theme/genius/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/genius-free-template.jpg  
Shipped: https://brightmind.free.componentdock.com

An education and university landing page template featuring courses, teachers, events, testimonials, and a newsletter signup. Recreation of ColorLib "Genius" (https://colorlib.com/wp/template/genius/).

## Typography

Fonts loaded by `index.html` (Google Fonts): **Work Sans**, **Work Sans:wght@300;400;500;600;700**

## Design tokens (`apps/brightmind/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-50` | `#eef5ff` | brand 50 |
| `--color-brand-100` | `#d9e8ff` | brand 100 |
| `--color-brand-200` | `#bbdaff` | brand 200 |
| `--color-brand-300` | `#8cc3ff` | brand 300 |
| `--color-brand-400` | `#55a3ff` | brand 400 |
| `--color-brand-500` | `#167ce9` | brand 500 |
| `--color-brand-600` | `#0d60c7` | brand 600 |
| `--color-brand-700` | `#0a4da0` | brand 700 |
| `--color-brand-800` | `#0e4284` | brand 800 |
| `--color-brand-900` | `#11386d` | brand 900 |
| `--color-gold-50` | `#fffbeb` | gold 50 |
| `--color-gold-100` | `#fff3c4` | gold 100 |
| `--color-gold-200` | `#ffe588` | gold 200 |
| `--color-gold-300` | `#ffd54f` | gold 300 |
| `--color-gold-400` | `#ffc300` | gold 400 |
| `--color-gold-500` | `#f5b800` | gold 500 |
| `--color-gold-600` | `#d49a00` | gold 600 |
| `--color-gold-700` | `#a87300` | gold 700 |
| `--color-gold-800` | `#8a5c00` | gold 800 |
| `--color-gold-900` | `#744c00` | gold 900 |
| `--color-dark` | `#1b212c` | dark |
| `--color-muted` | `#8d9db9` | muted |
| `--font-sans` | `'Work Sans', ui-sans-serif, system-ui, sans-serif` | Work Sans — the original template's typeface (Google Fonts via index.html) |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `SearchCourse` | Search course section | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `Stats` | Stats section | see fidelity note below |
| 6 | `Testimonials` | Testimonials section | see fidelity note below |
| 7 | `Teachers` | Teachers section | see fidelity note below |
| 8 | `FreeTrial` | Free trial section | see fidelity note below |
| 9 | `Courses` | Courses section | see fidelity note below |
| 10 | `Blog` | Blog section | see fidelity note below |
| 11 | `Events` | Events section | see fidelity note below |
| 12 | `Newsletter` | Newsletter section | see fidelity note below |
| 13 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a dark navigation bar with the "Brightmind" brand and links to all sections.

### `Hero`
The template SHALL display a full-width hero with a gradient overlay background, headline, and two CTA buttons.

### `SearchCourse`
The template SHALL display a search section with a study interest input and a featured article card.

### `Services`
The template SHALL display three service cards (Admission, Notice Board, Scholarship).

### `Stats`
The template SHALL display statistics counters for students, courses, and advisors.

### `Testimonials`
The template SHALL display student testimonial cards with quotes and avatars.

### `Teachers`
The template SHALL display teacher/advisor cards with photos and subjects.

### `FreeTrial`
The template SHALL display a gold banner with a trial course CTA.

### `Courses`
The template SHALL display course cards with category, title, price, and enroll link.

### `Blog`
The template SHALL display recent blog post cards.

### `Events`
The template SHALL display upcoming event cards.

### `Newsletter`
The template SHALL display a newsletter subscription form with email input and submit button.

### `Footer`
The template SHALL display a dark footer with brand, social links, recent blog, contact info, and Component Dock attribution.

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
- **Provenance ban.** No file under `apps/brightmind/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/brightmind/public/CNAME` = `brightmind.free.componentdock.com`
  and the package `homepage` = `https://brightmind.free.componentdock.com`.
