# Ticktock — Design Notes

Reference: **Watch** — `https://colorlib.com/wp/template/watch/`  
Live preview: `https://preview.colorlib.com/theme/watch/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/watch-free-template.jpg  
Shipped: https://ticktock.free.componentdock.com

TickTock is a single-page smartwatch landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Watch" free template (source: https://colorlib.com/wp/template/watch/), built under a DIFFERENT name (**TickTock**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/ticktock/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#eff4ff` | primary 50 |
| `--color-primary-100` | `#dbe6fe` | primary 100 |
| `--color-primary-200` | `#bfd3fe` | primary 200 |
| `--color-primary-300` | `#93b4fd` | primary 300 |
| `--color-primary-400` | `#608dfa` | primary 400 |
| `--color-primary-500` | `#235ee7` | primary 500 |
| `--color-primary-600` | `#1a4bc5` | primary 600 |
| `--color-primary-700` | `#1539a0` | primary 700 |
| `--color-primary-800` | `#153083` | primary 800 |
| `--color-primary-900` | `#172c6c` | primary 900 |
| `--color-accent` | `#4cd3e3` | accent |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar displays brand and navigation links | see fidelity note below |
| 2 | `Hero` | Hero section displays headline and CTA | see fidelity note below |
| 3 | `About` | About section displays split layout | see fidelity note below |
| 4 | `Features` | Features section displays cards and image | see fidelity note below |
| 5 | `Products` | Products section displays cards on dark background | see fidelity note below |
| 6 | `Services` | Services section displays grid of service cards | see fidelity note below |
| 7 | `Reviews` | Reviews section displays cards with star ratings | see fidelity note below |
| 8 | `FAQ` | FAQ section displays accordion | see fidelity note below |
| 9 | `Footer` | Footer displays brand, newsletter, and social links | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a sticky navbar with the TickTock brand and 6 navigation links (Home, About, Services, Products, Reviews, FAQ).

### `Hero`
The template SHALL display a full-screen hero with gradient background, subtitle, heading, and a Buy Now call-to-action.

### `About`
The template SHALL display an about section with text on the left and a video thumbnail on the right.

### `Features`
The template SHALL display 4 feature cards with icons and a central watch image.

### `Products`
The template SHALL display 4 product cards with images, names, prices, and Pre Order buttons on a dark background.

### `Services`
The template SHALL display 6 service cards in a responsive grid.

### `Reviews`
The template SHALL display review cards with reviewer names, text, and star ratings.

### `FAQ`
The template SHALL display an FAQ accordion with single-open behavior.

### `Footer`
The template SHALL display a footer with the brand, newsletter signup form, social links, and Component Dock attribution.

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
- **Provenance ban.** No file under `apps/ticktock/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/ticktock/public/CNAME` = `ticktock.free.componentdock.com`
  and the package `homepage` = `https://ticktock.free.componentdock.com`.
