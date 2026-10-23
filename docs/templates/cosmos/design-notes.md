# Cosmos — Design Notes

Reference: **Space** — `https://colorlib.com/wp/template/space/`  
Live preview: `https://preview.colorlib.com/theme/space/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/space-free-template.jpg  
Shipped: https://cosmos.free.componentdock.com

Cosmos is a minimal, clean portfolio template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Space" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Mulish**, **Mulish:wght@400;700**, **Roboto Mono**

## Design tokens (`apps/cosmos/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-mulish` | `'Mulish', sans-serif` | font mulish |
| `--font-roboto-mono` | `'Roboto Mono', monospace` | font roboto mono |
| `--color-primary` | `#ff2e63` | primary |
| `--color-ink` | `#1a1a2e` | ink |
| `--color-muted` | `#888888` | muted |
| `--color-line` | `#ebebeb` | line |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with navigation and mobile menu | see fidelity note below |
| 2 | `Hero` | Hero section with headline and CTA | see fidelity note below |
| 3 | `Portfolio` | Portfolio grid with 9 items | see fidelity note below |
| 4 | `Services` | Services section with 6 cards | see fidelity note below |
| 5 | `About` | About section with bio and work experience | see fidelity note below |
| 6 | `Contact` | Contact form with validation | see fidelity note below |
| 7 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
Cosmos SHALL display a fixed dark navbar with the "Cosmos." logo (dot in primary color), navigation links (Home, Portfolio, Services, About, Contact), and a responsive mobile hamburger menu.

### `Hero`
Cosmos SHALL display a hero section with the heading "Hey! I'm Cosmos.", a subtitle about the portfolio template, and a CTA button linking to Component Dock.

### `Portfolio`
Cosmos SHALL display a 3-column grid of 9 portfolio items, each with an image, hover overlay showing title and tags, and a link icon.

### `Services`
Cosmos SHALL display a services section with a heading, wavy underline SVG, and 6 service cards (Web Design, Photography, Marketing, App Development, Branding, Search Ranking) in a 3x2 grid.

### `About`
Cosmos SHALL display an about section with an experience badge ("12 Years of experience"), a portfolio/CV links, an image, bio text, and work experience cards in a 2x2 grid.

### `Contact`
Cosmos SHALL display a contact form with Name, Email, Subject, and Message fields, a "Send Message" button, and client-side validation that requires Name, Email, and Message.

### `Footer`
Cosmos SHALL display a dark footer with copyright text and a "Component Dock" link to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/cosmos/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/cosmos/public/CNAME` = `cosmos.free.componentdock.com`
  and the package `homepage` = `https://cosmos.free.componentdock.com`.
