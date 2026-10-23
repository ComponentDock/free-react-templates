# Ministry — Design Notes

Reference: **Salvation** — `https://colorlib.com/wp/template/salvation/`  
Live preview: `https://preview.colorlib.com/theme/salvation/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/salvation-free-template.jpg  
Shipped: https://ministry.free.componentdock.com

Ministry is a single-page church website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Salvation" church website template design, built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700;800**

## Design tokens (`apps/ministry/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ce0f3d` | brand |
| `--color-brand-hover` | `#b00d33` | brand hover |
| `--color-body-text` | `#40415e` | body text |
| `--color-heading` | `rgba(0, 0, 0, 0.8)` | heading |
| `--color-surface` | `#f8f9fa` | surface |
| `--color-hero-overlay` | `#00043c` | hero overlay |
| `--color-footer-bg` | `#222222` | footer bg |
| `--color-counter-bg` | `#ce0f3d` | counter bg |
| `--font-poppins` | `'Poppins', sans-serif` | font poppins |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | — | no dedicated spec block |
| 2 | `Navbar` | Navbar with navigation links and Donate CTA | see fidelity note below |
| 3 | `Hero` | Hero section with background image and CTA | see fidelity note below |
| 4 | `Services` | Services section with cards and quote | see fidelity note below |
| 5 | `About` | About section with image and text | see fidelity note below |
| 6 | `Counter` | Counter section with statistics | see fidelity note below |
| 7 | `Sermons` | Sermons section with sermon cards | see fidelity note below |
| 8 | `Testimony` | Testimony section with testimonials | see fidelity note below |
| 9 | `Blog` | Blog section with blog cards | see fidelity note below |
| 10 | `Events` | Events section with event listings | see fidelity note below |
| 11 | `Gallery` | Gallery section with image grid | see fidelity note below |
| 12 | `Footer` | Footer with brand, links, and contact | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Navbar`
The template SHALL render a transparent navbar with the brand name "Ministry", navigation links (Home, About, Ministries, Sermons, Events, Blog, Contact), and a pill-shaped "Donate" button.

### `Hero`
The template SHALL render a full-viewport hero section with a background image, dark overlay, headline, subheading, description, and a CTA button.

### `Services`
The template SHALL render a services section with three service cards (Worship, Connect, God's Love) each with icon, title, subheading, and description, plus a quote block.

### `About`
The template SHALL render an about section with an image, heading, description paragraphs, and a "Learn More" button.

### `Counter`
The template SHALL render a counter section with brand-colored background and four statistics: Members, Pastors, Donations, Churches.

### `Sermons`
The template SHALL render a sermons section with three sermon cards, each containing an image, title, speaker, categories, date, description, and Watch/Download buttons.

### `Testimony`
The template SHALL render a dark-background testimony section with testimonials showing avatars, quotes, and names.

### `Blog`
The template SHALL render a blog section with three blog cards showing images, meta information, titles, excerpts, and Read more buttons.

### `Events`
The template SHALL render an events section with three event items showing images, titles, dates, locations, and More Details buttons.

### `Gallery`
The template SHALL render a gallery section with seven images in a grid layout with hover overlay effects.

### `Footer`
The template SHALL render a four-column footer with brand info and social icons, latest news, quick links, and contact information. The footer copyright MUST link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/ministry/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/ministry/public/CNAME` = `ministry.free.componentdock.com`
  and the package `homepage` = `https://ministry.free.componentdock.com`.
