# Cortex — Design Notes

Reference: **Agentforge** — `https://colorlib.com/wp/template/agentforge/`  
Live preview: `https://preview.colorlib.com/theme/agentforge/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/agentforge-template-1771944000058.jpg  
Shipped: https://cortex.free.componentdock.com

Cortex is a single-page AI agent platform landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Agentforge" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Manrope**, **Manrope:wght@300;400;500;600;700;800**

## Design tokens (`apps/cortex/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#ecfdf5` | primary 50 |
| `--color-primary-100` | `#d1fae5` | primary 100 |
| `--color-primary-200` | `#a7f3d0` | primary 200 |
| `--color-primary-300` | `#6ee7b7` | primary 300 |
| `--color-primary-400` | `#34d399` | primary 400 |
| `--color-primary-500` | `#10b981` | primary 500 |
| `--color-primary-600` | `#059669` | primary 600 |
| `--color-primary-700` | `#047857` | primary 700 |
| `--color-primary-800` | `#065f46` | primary 800 |
| `--color-primary-900` | `#064e3b` | primary 900 |
| `--font-sans` | `'Manrope', ui-sans-serif, system-ui, sans-serif` | Manrope — the original template's typeface (Google Fonts via index.html) |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Features` | Features section | see fidelity note below |
| 4 | `SocialProof` | Social proof section | see fidelity note below |
| 5 | `Contact` | Contact section | see fidelity note below |
| 6 | `Faq` | FAQ section | see fidelity note below |
| 7 | `CtaBand` | CTA band | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Cortex", anchor links to the page's sections, a "Start Building" call-to-action, and a dark-mode toggle button.

### `Hero`
The system SHALL render a hero with a trust badge, a level-1 headline, a blurb, two CTA buttons, a statistics row, and a code panel.

### `Features`
The system SHALL render a features section with a heading and at least six feature cards.

### `SocialProof`
The system SHALL render a social-proof section with a heading and testimonials.

### `Contact`
The system SHALL render a contact section with a heading, a validated form, and contact information cards.

### `Faq`
The system SHALL render an FAQ section with a heading and an accordion of questions.

### `CtaBand`
The system SHALL render a closing CTA band with a heading and buttons.

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
- **Provenance ban.** No file under `apps/cortex/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/cortex/public/CNAME` = `cortex.free.componentdock.com`
  and the package `homepage` = `https://cortex.free.componentdock.com`.
