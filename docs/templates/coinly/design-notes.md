# Coinly — Design Notes

Reference: **Crypto Currency** — `https://colorlib.com/wp/template/crypto-currency/`  
Live preview: `https://preview.colorlib.com/theme/crypto-currency/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/cryptocurrency-free-template.jpg  
Shipped: https://coinly.free.componentdock.com

Coinly is a single-page cryptocurrency/fintech landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Jost**, **Jost:wght@400;500;600;700**, **Lato**

## Design tokens (`apps/coinly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#20509e` | brand |
| `--color-accent` | `#16d0c5` | accent |
| `--color-grad-start` | `#3e2bce` | grad start |
| `--color-grad-end` | `#2dd3aa` | grad end |
| `--color-mist` | `#f3f7f9` | mist |
| `--color-muted` | `#75849a` | muted |
| `--color-faint` | `#acb9cc` | faint |
| `--color-ash` | `#cbd3df` | Ash — team social circle base (#cbd3df from the source style.css). |
| `--color-outline` | `#7ad4cc` | outline |
| `--color-hairline` | `#ebebeb` | hairline |
| `--color-ink` | `#081624` | ink |
| `--color-primary-50` | `#eef3fb` | primary 50 |
| `--color-primary-100` | `#d8e4f5` | primary 100 |
| `--color-primary-200` | `#b3c8ea` | primary 200 |
| `--color-primary-300` | `#86a5dc` | primary 300 |
| `--color-primary-400` | `#5882cd` | primary 400 |
| `--color-primary-500` | `#20509e` | primary 500 |
| `--color-primary-600` | `#1b4488` | primary 600 |
| `--color-primary-700` | `#173a73` | primary 700 |
| `--color-primary-800` | `#122f5e` | primary 800 |
| `--color-primary-900` | `#0d2449` | primary 900 |
| `--font-sans` | `'Lato', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Jost', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Features` | Features band | see fidelity note below |
| 5 | `Process` | Process steps | see fidelity note below |
| 6 | `Facts` | Fact band | see fidelity note below |
| 7 | `Team` | Team section | see fidelity note below |
| 8 | `Review` | — | no dedicated spec block |
| 9 | `Newsletter` | Newsletter band | see fidelity note below |
| 10 | `Blog` | Blog section | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Header`
The system SHALL render an absolutely-positioned header over the hero with a logo, the main navigation, and an outline Sign Up Free button.

### `Hero`
The system SHALL render a 900px-tall split hero with headline, sub-copy, email capture, CTA button, and a laptop mockup on the right.

### `About`
The system SHALL render a two-column "What is Bitcoin" section with text and a CTA on the left and an illustration on the right.

### `Features`
The system SHALL render a gradient "Our Features" band with six icon feature cards.

### `Process`
The system SHALL render a "Get Started With Bitcoin" section with three numbered process steps.

### `Facts`
The system SHALL render a gradient stats band with four large teal numbers.

### `Team`
The system SHALL render a "Meet Our Team" section with four member cards.

### `Review`
*anchors only* — Previous review · Next review

### `Newsletter`
The system SHALL render a gradient newsletter band with a headline, copy, pill email input, and a gradient Get Started button.

### `Blog`
The system SHALL render a "Latest News" section with three blog cards.

### `Footer`
The system SHALL render a light footer with brand blurb, three link columns, social circles, and a bottom bar.

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
- **Provenance ban.** No file under `apps/coinly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/coinly/public/CNAME` = `coinly.free.componentdock.com`
  and the package `homepage` = `https://coinly.free.componentdock.com`.
