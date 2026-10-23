# Prowess — Design Notes

Reference: **Sportify** — `https://colorlib.com/wp/template/sportify/`  
Live preview: `https://preview.colorlib.com/theme/sportify/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/sportify-free-template.jpg  
Shipped: https://prowess.free.componentdock.com

Prowess is a single-page gym & fitness company landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;600;700;800**

## Design tokens (`apps/prowess/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff0e3b` | brand |
| `--color-brand-dark` | `#e00c35` | brand dark |
| `--color-navy` | `#190a49` | navy |
| `--color-navy-dark` | `#130838` | navy dark |
| `--color-accent` | `#7800ff` | accent |
| `--color-heading` | `#2c2c2c` | heading |
| `--color-body` | `#909090` | body |
| `--color-primary-50` | `#fff0f3` | primary 50 |
| `--color-primary-100` | `#ffd6e0` | primary 100 |
| `--color-primary-200` | `#ffb3c4` | primary 200 |
| `--color-primary-300` | `#ff7d9b` | primary 300 |
| `--color-primary-400` | `#ff4570` | primary 400 |
| `--color-primary-500` | `#ff0e3b` | primary 500 |
| `--color-primary-600` | `#e00c35` | primary 600 |
| `--color-primary-700` | `#ba0a2d` | primary 700 |
| `--color-primary-800` | `#930a26` | primary 800 |
| `--color-primary-900` | `#780a20` | primary 900 |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar navigation | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Intro` | Intro feature boxes | see fidelity note below |
| 4 | `About` | About section | see fidelity note below |
| 5 | `Quote` | Quote section | see fidelity note below |
| 6 | `Cta` | CTA section | see fidelity note below |
| 7 | `Programs` | Programs section | see fidelity note below |
| 8 | `Pricing` | Pricing section | see fidelity note below |
| 9 | `Contact` | Contact section | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The navbar SHALL display the "Prowess" logo and navigation links (Home, About, Programs, Pricing, Contact) with a mobile menu toggle.

### `Hero`
The hero SHALL display a background image, subtitle "go to the gym now!", title "never limit yourself" with "never" in a circular highlight, and a "read more" CTA button.

### `Intro`
The intro section SHALL display 3 feature boxes: Aerobics Program, Train Hard, Basic Program.

### `About`
The about section SHALL display the heading "about prowess", a description, and a "train hard" CTA button alongside an image.

### `Quote`
The quote section SHALL display a motivational quote and author attribution.

### `Cta`
The CTA section SHALL display "join our gym" heading, description, image, and benefit list.

### `Programs`
The programs section SHALL display 3 program cards: Aerobics, Pilates, Yoga.

### `Pricing`
The pricing section SHALL display 3 pricing tiers: Beginner (Free), Pro ($29/mo), Expert ($59/mo).

### `Contact`
The contact section SHALL display phone, email, and location information.

### `Footer`
The footer SHALL display the Component Dock link, navigation links, social icons, and copyright.

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
- **Provenance ban.** No file under `apps/prowess/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/prowess/public/CNAME` = `prowess.free.componentdock.com`
  and the package `homepage` = `https://prowess.free.componentdock.com`.
