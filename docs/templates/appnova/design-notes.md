# Appnova — Design Notes

Reference: **Ca App** — `https://colorlib.com/wp/template/ca-app/`  
Live preview: `https://preview.colorlib.com/theme/ca-app/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ca-app-showcase-website-template.jpg  
Shipped: https://appnova.free.componentdock.com

Appnova is a single-page app landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "CA App Landing" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700;800**, **Roboto**

## Design tokens (`apps/appnova/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#eef6fb` | primary 50 |
| `--color-primary-100` | `#d5eaf7` | primary 100 |
| `--color-primary-200` | `#a8d5ef` | primary 200 |
| `--color-primary-300` | `#6bb8e3` | primary 300 |
| `--color-primary-400` | `#3b9bd6` | primary 400 |
| `--color-primary-500` | `#2078b8` | primary 500 |
| `--color-primary-600` | `#5b21b6` | primary 600 |
| `--color-primary-700` | `#4c1d95` | primary 700 |
| `--color-primary-800` | `#3b1575` | primary 800 |
| `--color-primary-900` | `#2e1058` | primary 900 |
| `--color-teal` | `#00d4aa` | Teal brand accent #00d4aa (gradient start, hover accents). |
| `--color-night` | `#0a1628` | Dark footer #0a1628, near-black #1a1a2e. |
| `--color-ink` | `#1a1a2e` | ink |
| `--color-paper` | `#f0faf8` | paper |
| `--color-mist` | `#f4fdfb` | mist |
| `--color-muted` | `#777777` | muted |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Stats` | — | no dedicated spec block |
| 4 | `Features` | Features section | see fidelity note below |
| 5 | `HowItWorks` | How It Works section | see fidelity note below |
| 6 | `AboutOne` | — | no dedicated spec block |
| 7 | `AboutTwo` | — | no dedicated spec block |
| 8 | `Video` | — | no dedicated spec block |
| 9 | `Testimonials` | Testimonials section | see fidelity note below |
| 10 | `Screenshots` | Screenshots gallery | see fidelity note below |
| 11 | `Pricing` | Pricing section | see fidelity note below |
| 12 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Appnova", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a headline, a subtitle blurb, a phone mockup illustration, and two app store buttons.

### `Stats`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Features`
The system SHALL render a features section with a heading and six feature cards, each with an icon, a title, and a description blurb.

### `HowItWorks`
The system SHALL render a "How It Works" section with a heading and three numbered steps, each with an icon and a description.

### `AboutOne`
*anchors only* — Designed for a Seamless Experience · Get Details

### `AboutTwo`
*anchors only* — Download Appnova Today

### `Video`
*anchors only* — Play video

### `Testimonials`
The system SHALL render a testimonials section with a heading and a carousel of user quotes, each with a name, role, avatar, and star rating.

### `Screenshots`
The system SHALL render a screenshots section with a heading and a horizontally scrollable gallery of phone screenshots.

### `Pricing`
The system SHALL render a pricing section with three plan tiers, each with a name, price, feature list, and a call-to-action button.

### `Footer`
The system SHALL render a footer with link columns, a Component Dock link, a copyright line, and social media icon links.

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
- **Provenance ban.** No file under `apps/appnova/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/appnova/public/CNAME` = `appnova.free.componentdock.com`
  and the package `homepage` = `https://appnova.free.componentdock.com`.
