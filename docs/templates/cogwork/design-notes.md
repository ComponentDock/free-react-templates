# Cogwork — Design Notes

Reference: **Industries** — `https://colorlib.com/wp/template/industries/`  
Live preview: `https://preview.colorlib.com/theme/industries/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/industries-free-template.jpg  
Shipped: https://cogwork.free.componentdock.com

Cogwork is a single-page industrial company landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Industries" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Oxygen**, **Oxygen:wght@400;700**

## Design tokens (`apps/cogwork/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#fd5f00` | brand |
| `--color-brand-dark` | `#d75100` | brand dark |
| `--color-ink` | `#212529` | Ink — dark text (#212529 from the original). |
| `--color-paper` | `#f8f9fa` | Paper — light section background (#f8f9fa). |
| `--color-mist` | `#6c757d` | Mist — muted body text (#6c757d). |
| `--color-primary-50` | `#fff7ed` | primary 50 |
| `--color-primary-100` | `#ffedd5` | primary 100 |
| `--color-primary-200` | `#fed7aa` | primary 200 |
| `--color-primary-300` | `#fdba74` | primary 300 |
| `--color-primary-400` | `#fb923c` | primary 400 |
| `--color-primary-500` | `#fd5f00` | primary 500 |
| `--color-primary-600` | `#d75100` | primary 600 |
| `--color-primary-700` | `#ba3f08` | primary 700 |
| `--color-primary-800` | `#93320a` | primary 800 |
| `--color-primary-900` | `#782b0c` | primary 900 |
| `--font-sans` | `'Oxygen', ui-sans-serif, system-ui, sans-serif` | Original font: "Oxygen" (Google Fonts). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `HeroSlider` | Hero slider | see fidelity note below |
| 3 | `Features` | Features section | see fidelity note below |
| 4 | `Engineering` | Engineering section | see fidelity note below |
| 5 | `About` | About section | see fidelity note below |
| 6 | `Projects` | Projects gallery | see fidelity note below |
| 7 | `Testimonials` | Testimonials | see fidelity note below |
| 8 | `BlogPosts` | Blog posts | see fidelity note below |
| 9 | `CtaBanner` | CTA banner | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Cogwork", a "Home" link, an "About" link, a "Projects" link, a "Services" dropdown, a "Blog" link, a "Contact" link, and a mobile hamburger toggle.

### `HeroSlider`
The system SHALL render a hero section with two auto-rotating slides, each containing a background image, a play button, a heading, and a subtitle.

### `Features`
The system SHALL render a features section with three feature cards on a light background, each containing an icon, heading, and description.

### `Engineering`
The system SHALL render an engineering section with a heading, an image, and four feature items with icons.

### `About`
The system SHALL render an about section with an image, a heading, a paragraph, and a "Read More" link.

### `Projects`
The system SHALL render a projects gallery with a heading, subtitle, and six project cards in a 3-column grid with hover overlay.

### `Testimonials`
The system SHALL render a testimonials section on a light background with a heading and three testimonial cards.

### `BlogPosts`
The system SHALL render a blog section with a heading and four blog post items in a 2-column layout.

### `CtaBanner`
The system SHALL render a full-width CTA banner with an orange background, a heading, description text, and a "Contact Us" button.

### `Footer`
The system SHALL render a footer with About Us, Contact Info, Quick Links columns, social media links, and a copyright line linking to Component Dock.

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
- **Provenance ban.** No file under `apps/cogwork/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/cogwork/public/CNAME` = `cogwork.free.componentdock.com`
  and the package `homepage` = `https://cogwork.free.componentdock.com`.
