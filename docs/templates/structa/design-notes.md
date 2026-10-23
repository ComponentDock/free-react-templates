# Structa — Design Notes

Reference: **Consto** — `https://colorlib.com/wp/template/consto/`  
Live preview: `https://preview.colorlib.com/theme/consto/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/consto-free-template.jpg  
Shipped: https://structa.free.componentdock.com

Structa is a construction company template with a navbar, hero, about band, services, projects, testimonials, contact and footer. It recreates the ColorLib **Consto** design (https://colorlib.com/wp/template/consto/, preview: https://preview.colorlib.com/theme/consto/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Raleway**, **Raleway:wght@200;300;400;500;600;700;800;900**

## Design tokens (`apps/structa/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff5e14` | brand |
| `--color-brand-dark` | `#e5520f` | brand dark |
| `--color-dark` | `#2d0a31` | dark |
| `--color-dark-light` | `#3a1240` | dark light |
| `--color-paper` | `#ffffff` | paper |
| `--color-mist` | `#646d77` | mist |
| `--color-heading` | `#000000` | heading |
| `--font-sans` | `'Raleway', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `About` | — | no dedicated spec block |
| 4 | `Services` | — | no dedicated spec block |
| 5 | `Projects` | — | no dedicated spec block |
| 6 | `MoreCTA` | — | no dedicated spec block |
| 7 | `Testimonials` | — | no dedicated spec block |
| 8 | `Contact` | — | no dedicated spec block |
| 9 | `BannerCTA` | — | no dedicated spec block |
| 10 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — banner · Primary · Mobile

### `Hero`
*anchors only* — Hero · Experienced Construction Solution · Our Services · Explore Our Latest Projects · Discover our portfolio of completed construction projects. · Explore Now

### `About`
*anchors only* — About · Complete solution of large projects · Learn More

### `Services`
*anchors only* — Services · Services we provide · Get Free Quote

### `Projects`
*anchors only* — Projects · Projects we have Done · Take a look at some of our most recent and successful construction projects. · View Project

### `MoreCTA`
*anchors only* — More projects CTA · Want to build something great? · Let's discuss your next construction project and bring your vision to life. · Contact Us

### `Testimonials`
*anchors only* — Testimonials · Previous testimonial · Next testimonial

### `Contact`
*anchors only* — Contact · alert · Thank you! · Your message has been sent. We will get back to you shortly. · Contact Us · Have a project in mind? Get in touch with us.

### `BannerCTA`
*anchors only* — Call to action · Any help needed? · Contact Us

### `Footer`
*anchors only* — contentinfo · alert · Structa · Navigation · Services · Newsletter

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
- **Provenance ban.** No file under `apps/structa/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/structa/public/CNAME` = `structa.free.componentdock.com`
  and the package `homepage` = `https://structa.free.componentdock.com`.
