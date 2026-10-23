# Clearpoint — Design Notes

Reference: **Schmidt** — `https://colorlib.com/wp/template/schmidt/`  
Live preview: `https://preview.colorlib.com/theme/schmidt/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/schmidt-free-template.jpg  
Shipped: https://clearpoint.free.componentdock.com

Clearpoint is a single-page portfolio landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Schmidt" free template, built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Jost**, **Jost:wght@300;400;500;600**, **Oswald**

## Design tokens (`apps/clearpoint/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#00ffab` | brand |
| `--color-brand-dark` | `#55a48a` | brand dark |
| `--color-ink` | `#1e1e1e` | ink |
| `--color-dark-alt` | `#2a2a2a` | dark alt |
| `--color-play` | `#f04506` | play |
| `--color-sweep` | `#ec583a` | sweep |
| `--color-surface` | `#f2f4f8` | surface |
| `--color-surface2` | `#dfebe6` | surface2 |
| `--color-mist` | `#f2f2f2` | mist |
| `--color-body` | `#656565` | body |
| `--font-display` | `'Oswald', ui-sans-serif, system-ui, sans-serif` | Oswald for display headings + buttons, Jost for body/nav |
| `--font-sans` | `'Jost', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `HeroSlider` | — | no dedicated spec block |
| 3 | `MissionStrip` | — | no dedicated spec block |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `About` | About section | see fidelity note below |
| 6 | `Solutions` | Hero section | see fidelity note below |
| 7 | `VideoCta` | — | no dedicated spec block |
| 8 | `CaseStudy` | Works / case studies | see fidelity note below |
| 9 | `Stats` | Experiences / stats | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |
| 11 | `BackToTop` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a fixed top navigation bar with the brand name "Clearp." and section links: Home, About, Services, Experiences, Works, Blog, Contact. On mobile (< 768px), a hamburger button SHALL toggle the navigation menu.

### `HeroSlider`
*anchors only* — Featured highlights · Slides · Unlock Your · Potential · Check Our Services

### `MissionStrip`
*anchors only* — Our Mission · The Foremost &amp; Premier Source For Everything Business. · Learn More

### `Services`
The system SHALL render a services grid with at least 4 service cards, each containing an icon, title, and description.

### `About`
The system SHALL render an about section with bio details and skill progress bars. Personal info items (name, age, phone, email, address) SHALL be displayed alongside the bio.

### `Solutions`
The system SHALL render a hero section with a full-bleed background image, a subheading "UI/UX Designer & Developer", the heading "I'm John Clearpoint", and two CTA buttons: "More About Me" and "Hire Me".

### `VideoCta`
*anchors only* — Play introduction video · We boost our clients&apos; bottom line by optimizing · The result is a compounding growth curve — not a one-off spike. · Learn More

### `CaseStudy`
The system SHALL render a works section with case study items containing images and titles.

### `Stats`
The system SHALL render an experiences section with stat counters for key metrics.

### `Footer`
The system SHALL render a footer with a copyright notice and a link to https://www.componentdock.com/ branded as "Component Dock".

### `BackToTop`
*anchors only* — Back to top

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
- **Provenance ban.** No file under `apps/clearpoint/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/clearpoint/public/CNAME` = `clearpoint.free.componentdock.com`
  and the package `homepage` = `https://clearpoint.free.componentdock.com`.
