# Takeoff — Design Notes

Reference: **Appson** — `https://colorlib.com/wp/template/appson/`  
Live preview: `https://preview.colorlib.com/theme/appson/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/appson-free-template.jpg  
Shipped: https://takeoff.free.componentdock.com

Takeoff is a single-page app landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Appson" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@400;500;600;700;800**

## Design tokens (`apps/takeoff/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fff4ec` | primary 50 |
| `--color-primary-100` | `#ffe6d5` | primary 100 |
| `--color-primary-200` | `#ffc9a8` | primary 200 |
| `--color-primary-300` | `#ffa670` | primary 300 |
| `--color-primary-400` | `#ff8340` | primary 400 |
| `--color-primary-500` | `#ff6f26` | primary 500 |
| `--color-primary-600` | `#ff6818` | primary 600 |
| `--color-primary-700` | `#e0550c` | primary 700 |
| `--color-primary-800` | `#b8450d` | primary 800 |
| `--color-primary-900` | `#93390f` | primary 900 |
| `--color-azure` | `#00b0ff` | Supporting blue accent #00b0ff (from style.css). |
| `--color-ink` | `#272727` | Dark headings #272727, near-black #1a1a1a. |
| `--color-night` | `#1a1a1a` | night |
| `--color-paper` | `#f3f3f3` | paper |
| `--color-muted` | `#666666` | muted |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Features` | Features section | see fidelity note below |
| 5 | `Screenshots` | Screenshots section | see fidelity note below |
| 6 | `Download` | Download band | see fidelity note below |
| 7 | `Pricing` | Pricing section | see fidelity note below |
| 8 | `Team` | Team and stats section | see fidelity note below |
| 9 | `Testimonials` | Testimonial section | see fidelity note below |
| 10 | `Blog` | Blog section | see fidelity note below |
| 11 | `Contact` | Contact section | see fidelity note below |
| 12 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Takeoff", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a hero with a headline, a blurb, a phone mockup, and a download button.

### `About`
The system SHALL render an about section with a heading, blurbs, a feature list, and a screen image.

### `Features`
The system SHALL render a features band on the brand background with a heading and six feature tiles.

### `Screenshots`
The system SHALL render a screenshots section with a heading and four phone screens.

### `Download`
The system SHALL render a download band on the brand background with a heading and store buttons.

### `Pricing`
The system SHALL render three pricing plans, each with a name, a price, a feature list, and a purchase button.

### `Team`
The system SHALL render a team section with four members and a stats row.

### `Testimonials`
The system SHALL render a testimonial with a quote and an author.

### `Blog`
The system SHALL render a blog section with a heading and three posts.

### `Contact`
The system SHALL render a contact section with a heading, a form, and a newsletter signup.

### `Footer`
The system SHALL render a footer with a copyright line.

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
- **Provenance ban.** No file under `apps/takeoff/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/takeoff/public/CNAME` = `takeoff.free.componentdock.com`
  and the package `homepage` = `https://takeoff.free.componentdock.com`.
