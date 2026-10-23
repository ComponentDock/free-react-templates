# Edifice — Design Notes

Reference: **Construction** — `https://colorlib.com/wp/template/construction/`  
Live preview: `https://preview.colorlib.com/theme/construction/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/construction-free-construction-website-template.jpg  
Shipped: https://edifice.free.componentdock.com

Edifice is a single-page construction/building landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Construction" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700;800**

## Design tokens (`apps/edifice/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#fab700` | Edifice brand yellow — measured from the reference stylesheet (css/main.css): #fab700 buttons, accents, overline labels. |
| `--color-brand-dark` | `#e6a500` | Deeper amber for hover states. |
| `--color-ink` | `#222222` | Ink — headings and dark text (#222222 from the original). |
| `--color-mist` | `#777777` | Mist — muted body text (#777777 from the original). |
| `--color-paper` | `#f9f9ff` | Paper — light section backgrounds (#f9f9ff from the original). |
| `--color-coal` | `#1a1a1a` | Coal — dark CTA/footer background (#1a1a1a from the original). |
| `--color-primary-50` | `#fefce8` | primary 50 |
| `--color-primary-100` | `#fef9c3` | primary 100 |
| `--color-primary-200` | `#fef08a` | primary 200 |
| `--color-primary-300` | `#fde047` | primary 300 |
| `--color-primary-400` | `#facc15` | primary 400 |
| `--color-primary-500` | `#fab700` | primary 500 |
| `--color-primary-600` | `#d99a00` | primary 600 |
| `--color-primary-700` | `#b57e00` | primary 700 |
| `--color-primary-800` | `#926600` | primary 800 |
| `--color-primary-900` | `#755100` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Original font: "Poppins" (Google Fonts). |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Features` | Features section | see fidelity note below |
| 4 | `Projects` | Projects section | see fidelity note below |
| 5 | `Facts` | Facts band | see fidelity note below |
| 6 | `Services` | Services section | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `Blog` | Blog section | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Edifice", anchor links to the page's sections, a phone number, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width banner hero with an eyebrow label, a headline, a blurb, and a call-to-action button.

### `Features`
The system SHALL render a features section with three feature cards.

### `Projects`
The system SHALL render a projects section with a heading and a project gallery.

### `Facts`
The system SHALL render a stats band with counters and labels.

### `Services`
The system SHALL render a services section with a heading, a subline, and service cards.

### `Testimonials`
The system SHALL render a testimonials section with a quote slider.

### `Blog`
The system SHALL render a latest-blog section with post cards.

### `Footer`
The system SHALL render a footer with link columns, social links, and a copyright line.

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
- **Provenance ban.** No file under `apps/edifice/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/edifice/public/CNAME` = `edifice.free.componentdock.com`
  and the package `homepage` = `https://edifice.free.componentdock.com`.
