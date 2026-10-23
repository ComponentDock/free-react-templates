# Dentora — Design Notes

Reference: **Brightsmile** — `https://colorlib.com/wp/template/brightsmile/`  
Live preview: `https://preview.colorlib.com/theme/brightsmile/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/brightsmile-template-1771943701965.jpg  
Shipped: https://dentora.free.componentdock.com

Dentora is a single-page dental clinic landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Brightsmile" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Plus Jakarta Sans**, **Plus Jakarta Sans:wght@300;400;500;600;700;800**

## Design tokens (`apps/dentora/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#f0fdfa` | primary 50 |
| `--color-primary-100` | `#ccfbf1` | primary 100 |
| `--color-primary-200` | `#99f6e4` | primary 200 |
| `--color-primary-300` | `#5eead4` | primary 300 |
| `--color-primary-400` | `#2dd4bf` | primary 400 |
| `--color-primary-500` | `#14b8a6` | primary 500 |
| `--color-primary-600` | `#0d9488` | primary 600 |
| `--color-primary-700` | `#0f766e` | primary 700 |
| `--color-primary-800` | `#115e59` | primary 800 |
| `--color-primary-900` | `#134e4a` | primary 900 |
| `--color-paper` | `#f9fafb` | paper |
| `--color-ink` | `#111827` | ink |
| `--color-body` | `#6b7280` | body |
| `--color-muted` | `#9ca3af` | muted |
| `--color-night` | `#030712` | night |
| `--color-carbon` | `#111827` | carbon |
| `--color-slate` | `#1f2937` | slate |
| `--font-sans` | `'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif` | Original font: "Plus Jakarta Sans" (Google Fonts <link> in index.html). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Stats` | Stats strip | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `Team` | Team section | see fidelity note below |
| 6 | `WhyUs` | Why Us section | see fidelity note below |
| 7 | `Results` | Results section | see fidelity note below |
| 8 | `Testimonials` | Testimonials section | see fidelity note below |
| 9 | `Insurance` | Insurance section | see fidelity note below |
| 10 | `Cta` | Emergency CTA section | see fidelity note below |
| 11 | `Faq` | FAQ section | see fidelity note below |
| 12 | `Contact` | Contact section | see fidelity note below |
| 13 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Dentora", anchor links to the page's sections, a "Book Appointment" button, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with an acceptance badge, a level-1 headline, a blurb, two call-to-action links, a stats row, and an office image.

### `Stats`
The system SHALL render a stats strip with four labeled counts.

### `Services`
The system SHALL render a services section with a heading and six service cards, each with a title and description.

### `Team`
The system SHALL render a team section with a heading and three dentist cards, each with a photo, name, role, bio, and education.

### `WhyUs`
The system SHALL render a "why us" section with a heading and four feature cards.

### `Results`
The system SHALL render a before/after results gallery with a heading and two treatment pairs.

### `Testimonials`
The system SHALL render a testimonials carousel with a heading, six reviews, star ratings, and previous/next controls.

### `Insurance`
The system SHALL render an insurance section with a heading and six accepted plan cards.

### `Cta`
The system SHALL render a teal gradient call-to-action section with a heading, a blurb, and two links.

### `Faq`
The system SHALL render an FAQ accordion with a heading and five questions, each expandable to reveal an answer.

### `Contact`
The system SHALL render a "Schedule Your Visit" section with a booking form and four contact detail cards.

### `Footer`
The system SHALL render a dark footer with a brand blurb, four link columns, contact details, and a copyright line.

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
- **Provenance ban.** No file under `apps/dentora/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/dentora/public/CNAME` = `dentora.free.componentdock.com`
  and the package `homepage` = `https://dentora.free.componentdock.com`.
