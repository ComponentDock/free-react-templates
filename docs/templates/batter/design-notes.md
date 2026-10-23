# Batter — Design Notes

Reference: **Go Crepe** — `https://colorlib.com/wp/template/go-crepe/`  
Live preview: `https://preview.colorlib.com/theme/go-crepe/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/go-crepe-creative-digital-agency-website-template.jpg  
Shipped: https://batter.free.componentdock.com

Recreation of ColorLib Go Crepe (https://colorlib.com/wp/template/go-crepe/) as a React 19 + Tailwind CSS 4 + TypeScript template. Batter is a creative digital agency landing page with a hero banner, feature grid, about story, portfolio works, newsletter signup, and footer with contact widgets.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/batter/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fff4ed` | primary 50 |
| `--color-primary-100` | `#ffe6d5` | primary 100 |
| `--color-primary-200` | `#ffc9aa` | primary 200 |
| `--color-primary-300` | `#ffa274` | primary 300 |
| `--color-primary-400` | `#ff6b35` | primary 400 |
| `--color-primary-500` | `#fe4a11` | primary 500 |
| `--color-primary-600` | `#ef3007` | primary 600 |
| `--color-primary-700` | `#c62008` | primary 700 |
| `--color-primary-800` | `#9d1c0f` | primary 800 |
| `--color-primary-900` | `#7e1b10` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Poppins font via Google Fonts <link> in index.html. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with navigation and mobile toggle | see fidelity note below |
| 2 | `Hero` | Hero section with CTA | see fidelity note below |
| 3 | `Features` | Features grid with three cards | see fidelity note below |
| 4 | `Story` | Story section with dark background | see fidelity note below |
| 5 | `Works` | Portfolio works grid | see fidelity note below |
| 6 | `Newsletter` | Newsletter signup form | see fidelity note below |
| 7 | `FooterWidgets` | Footer widgets with contact info | see fidelity note below |
| 8 | `Footer` | Footer widgets with contact info | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL render a sticky navbar with logo, navigation links (Home, About, Works, Contact), and a hamburger menu toggle on mobile.

### `Hero`
The template SHALL render a full-width hero section with a dark gradient background, heading text, subtext, and an orange CTA button linking to the contact section.

### `Features`
The template SHALL render a 3-column features section with three feature cards, each containing an icon, title, and description.

### `Story`
The template SHALL render a dark-background story section with a title on the left and a white content card on the right containing a heading, paragraph, and CTA button.

### `Works`
The template SHALL render a portfolio grid with six work items, each showing a placeholder image, title, and description.

### `Newsletter`
The template SHALL render a newsletter section with a heading, email input field, and submit button.

### `FooterWidgets`
The template SHALL render a dark-background footer widget section with three contact info blocks: address, email, and phone.

### `Footer`
The template SHALL render a dark-background footer widget section with three contact info blocks: address, email, and phone.

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
- **Provenance ban.** No file under `apps/batter/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/batter/public/CNAME` = `batter.free.componentdock.com`
  and the package `homepage` = `https://batter.free.componentdock.com`.
