# Eduforge — Design Notes

Reference: **Edusite** — `https://colorlib.com/wp/template/edusite/`  
Live preview: `https://preview.colorlib.com/theme/edusite/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/edusite-free-online-courses-website-template.jpg  
Shipped: https://eduforge.free.componentdock.com

Provide a free, production-ready online education landing page template with hero, about, course catalog, call-to-action, and footer sections. Built for training providers, online course platforms, and education businesses.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;400;500;600;700**

## Design tokens (`apps/eduforge/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff6700` | brand |
| `--color-brand-light` | `#ff8533` | brand light |
| `--color-heading` | `#374050` | heading |
| `--color-body` | `#798696` | body |
| `--color-gray-bg` | `#ebebeb` | gray bg |
| `--color-overlay-dark` | `#374050` | overlay dark |
| `--color-overlay-light` | `#798796` | overlay light |
| `--font-montserrat` | `'Montserrat', sans-serif` | font montserrat |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Courses` | Courses section | see fidelity note below |
| 5 | `CtaSection` | CTA section | see fidelity note below |
| 6 | `WhyUs` | Why Us section | see fidelity note below |
| 7 | `ContactCta` | Contact CTA section | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL render a sticky navigation bar with logo and links.

### `Hero`
The template SHALL render a full-viewport hero with background image, headline, and CTA.

### `About`
The template SHALL render an about section with features and an image.

### `Courses`
The template SHALL render a course catalog grid with 8 course cards.

### `CtaSection`
The template SHALL render a call-to-action section with parallax background.

### `WhyUs`
The template SHALL render a "Why Eduforge" section with features and a video thumbnail.

### `ContactCta`
The template SHALL render a contact call-to-action section.

### `Footer`
The template SHALL render a footer with Component Dock branding.

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
- **Provenance ban.** No file under `apps/eduforge/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/eduforge/public/CNAME` = `eduforge.free.componentdock.com`
  and the package `homepage` = `https://eduforge.free.componentdock.com`.
