# Spark — Design Notes

Reference: **Appco** — `https://colorlib.com/wp/template/appco/`  
Live preview: `https://preview.colorlib.com/theme/appco/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/spark-free-templatel.jpg — the ROW's slug `spark`, not the spec's `appco`  
Shipped: https://spark.free.componentdock.com

Row note: `TEMPLATES.md` links the slug `spark` for this app while the spec records `appco`. This brief follows the SPEC — the disagreement is recorded, not resolved (ROW-MULTIPLICITY class, see the SPEC-REFERENCE audit, main `4820f472b`).

Spark is a single-page app landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Appco" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Nunito**, **Nunito:wght@400;600;700;800**, **Poppins**

## Design tokens (`apps/spark/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#f5eefb` | primary 50 |
| `--color-primary-100` | `#eadaf7` | primary 100 |
| `--color-primary-200` | `#d5b4f0` | primary 200 |
| `--color-primary-300` | `#bb8be7` | primary 300 |
| `--color-primary-400` | `#a258dc` | primary 400 |
| `--color-primary-500` | `#8f1bdc` | primary 500 |
| `--color-primary-600` | `#7a16ba` | primary 600 |
| `--color-primary-700` | `#641298` | primary 700 |
| `--color-primary-800` | `#4e0e76` | primary 800 |
| `--color-primary-900` | `#3a0b57` | primary 900 |
| `--color-accent` | `#f9218d` | accent |
| `--color-accent-light` | `#fce4f0` | accent light |
| `--color-ink` | `#222222` | ink |
| `--color-mist` | `#f9f9ff` | mist |
| `--color-lavender` | `#f0e9ff` | lavender |
| `--color-smoke` | `#6c757d` | smoke |
| `--font-heading` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font heading |
| `--font-sans` | `'Nunito', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Features` | Features section | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `VideoDemo` | Video demo section | see fidelity note below |
| 6 | `Pricing` | Pricing section | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `FAQ` | FAQ section | see fidelity note below |
| 9 | `CTA` | — | no dedicated spec block |
| 10 | `Integrations` | Integrations section | see fidelity note below |
| 11 | `Metrics` | Metrics section | see fidelity note below |
| 12 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Spark", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a kicker, a headline, a blurb, and a "Download" button.

### `Features`
The system SHALL render a features section with a heading and four feature cards, each with an icon, a title, and a description.

### `Services`
The system SHALL render a services section with a heading and three services, each with an icon, a title, and a description.

### `VideoDemo`
The system SHALL render a video demo section with a heading, a blurb, and a video placeholder with playback badges.

### `Pricing`
The system SHALL render a pricing section with a heading and three plans (Starter, Professional, Enterprise), each with a price, a feature list, and a "Get Started" button.

### `Testimonials`
The system SHALL render a testimonials section with a heading and at least two customer quotes with names.

### `FAQ`
The system SHALL render a "Frequently Asked Questions" section with at least four questions, each expandable to reveal an answer.

### `CTA`
*anchors only* — Our App Available For Any Device · Download for iOS · Download for Android

### `Integrations`
The system SHALL render an integrations section with a heading, a subheading, a "Contact Us" button, and at least six tool names.

### `Metrics`
The system SHALL render a metrics strip with at least four stats.

### `Footer`
The system SHALL render a footer with the site name, quick links, support links, a newsletter widget, social links, and a copyright line; submitting the newsletter SHALL NOT navigate away.

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
- **Provenance ban.** No file under `apps/spark/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/spark/public/CNAME` = `spark.free.componentdock.com`
  and the package `homepage` = `https://spark.free.componentdock.com`.
