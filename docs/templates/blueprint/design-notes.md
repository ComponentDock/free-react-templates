# Blueprint — Design Notes

Reference: **Unapp** — `https://colorlib.com/wp/template/unapp/`  
Live preview: `https://preview.colorlib.com/theme/unapp/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/unapp-free-template.jpg  
Shipped: https://blueprint.free.componentdock.com

Blueprint is a single-page app/template-builder landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Nunito**, **Nunito:wght@400;500;600;700**, **Poppins**

## Design tokens (`apps/blueprint/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#eef6fd` | primary 50 |
| `--color-primary-100` | `#d8ebfa` | primary 100 |
| `--color-primary-200` | `#b2d8f5` | primary 200 |
| `--color-primary-300` | `#7eb9ee` | primary 300 |
| `--color-primary-400` | `#499bea` | primary 400 |
| `--color-primary-500` | `#2f82d6` | primary 500 |
| `--color-primary-600` | `#2168b3` | primary 600 |
| `--color-primary-700` | `#1d548f` | primary 700 |
| `--color-primary-800` | `#1d4876` | primary 800 |
| `--color-primary-900` | `#1d3e62` | primary 900 |
| `--color-accent-300` | `#93a5ef` | Indigo hero gradient end (.video-hero overlay). |
| `--color-accent-400` | `#798eea` | accent 400 |
| `--color-accent-500` | `#6479e0` | accent 500 |
| `--color-mint-300` | `#5ed092` | Green accent (.btn-primary #4aca85, hover #5ed092). |
| `--color-mint-400` | `#4aca85` | mint 400 |
| `--color-mint-500` | `#3ab973` | mint 500 |
| `--color-ink` | `#303133` | Dark copy (#303133) and muted copy (#7f7f7f). |
| `--color-smoke` | `#7f7f7f` | smoke |
| `--font-sans` | `'Nunito', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Features` | Feature tiles | see fidelity note below |
| 4 | `Collaborate` | Collaborate split section | see fidelity note below |
| 5 | `Steps` | Steps section | see fidelity note below |
| 6 | `Stats` | Stats section | see fidelity note below |
| 7 | `Blog` | Blog section | see fidelity note below |
| 8 | `Trust` | Trust section | see fidelity note below |
| 9 | `Pricing` | Pricing section | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Blueprint", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width gradient hero with a headline, a sub-headline, a "Get premium" button, and an app dashboard preview image.

### `Features`
The system SHALL render three feature tiles: "Automatic Backup Data", "Page Builder", and "Create your own template", each with an icon and a blurb.

### `Collaborate`
The system SHALL render a split section with the heading "Collaborate with your design team in a new way", a checklist, and a preview image.

### `Steps`
The system SHALL render two alternating rows: "Real template creation" and "Finish template creation", each with a preview image, three feature items with icons and blurbs, and a "Start collaborating" call to action.

### `Stats`
The system SHALL render three stats: 1500 customers satisfied, 500 preset options, and 1200 average response time, each with a label.

### `Blog`
The system SHALL render a blog section with a heading and at least three post cards, each with a title, date, and author.

### `Trust`
The system SHALL render a trust section with the heading "Already trusted by over 10,000 users" and a subscribe form with an email input and a "Subscribe Now" button.

### `Pricing`
The system SHALL render a pricing section with the heading "Pricing" and four plans: Starter $9, Basic $27, Pro $74, and Unlimited $140, each with a "Select Plan" button.

### `Footer`
The system SHALL render a footer with about text, link columns, recent blog entries, contact info, social links, and a copyright line.

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
- **Provenance ban.** No file under `apps/blueprint/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/blueprint/public/CNAME` = `blueprint.free.componentdock.com`
  and the package `homepage` = `https://blueprint.free.componentdock.com`.
