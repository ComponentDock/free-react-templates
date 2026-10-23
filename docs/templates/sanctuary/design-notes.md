# Sanctuary — Design Notes

Reference: **Faithcommunity** — `https://colorlib.com/wp/template/faithcommunity/`  
Live preview: `https://preview.colorlib.com/theme/faithcommunity/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/faithcommunity-template-1770211119687.jpg  
Shipped: https://sanctuary.free.componentdock.com

Sanctuary is a single-page church landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@300;400;500;600;700**, **Lora**

## Design tokens (`apps/sanctuary/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#faf5ff` | primary 50 |
| `--color-primary-100` | `#f3e8ff` | primary 100 |
| `--color-primary-200` | `#e9d5ff` | primary 200 |
| `--color-primary-300` | `#d8b4fe` | primary 300 |
| `--color-primary-400` | `#c084fc` | primary 400 |
| `--color-primary-500` | `#a855f7` | primary 500 |
| `--color-primary-600` | `#9333ea` | primary 600 |
| `--color-primary-700` | `#7e22ce` | primary 700 |
| `--color-primary-800` | `#6b21a8` | primary 800 |
| `--color-primary-900` | `#581c87` | primary 900 |
| `--color-gold` | `#facc15` | Signature accent: gold service times |
| `--font-serif` | `'Lora', ui-serif, Georgia, serif` | Lora (serif headings) + Inter (body) — the original's fonts |
| `--font-sans` | `'Inter', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Services` | Services section | see fidelity note below |
| 4 | `About` | About section | see fidelity note below |
| 5 | `Events` | Events section | see fidelity note below |
| 6 | `Ministries` | Ministries section | see fidelity note below |
| 7 | `Sermons` | Sermons section | see fidelity note below |
| 8 | `Stories` | Stories of Faith section | see fidelity note below |
| 9 | `CtaBanner` | CTA banner | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a fixed top navigation bar with the brand wordmark, section links, a "Plan Your Visit" pill, a "Give" pill, a dark-mode toggle and a mobile menu.

### `Hero`
The system SHALL render a full-screen dark hero with a congregation photo background, a serif headline, a sub-paragraph and two CTAs.

### `Services`
The system SHALL render a "Service Times" section with three service cards, each with a title and a description.

### `About`
The system SHALL render a "Who We Are" section with an intro paragraph and a beliefs list.

### `Events`
The system SHALL render an "Upcoming Events" section with a featured event card and a list of additional events.

### `Ministries`
The system SHALL render a "Get Connected" section with six ministry cards.

### `Sermons`
The system SHALL render a "Recent Sermons" section with four sermon cards.

### `Stories`
The system SHALL render a "Stories of Faith" testimonial section with round avatar images.

### `CtaBanner`
The system SHALL render a purple "You're Welcome Here" banner with a "Plan Your Visit" action.

### `Footer`
The system SHALL render a dark footer with a brand blurb, three link columns, contact details and a copyright bar.

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
- **Provenance ban.** No file under `apps/sanctuary/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sanctuary/public/CNAME` = `sanctuary.free.componentdock.com`
  and the package `homepage` = `https://sanctuary.free.componentdock.com`.
