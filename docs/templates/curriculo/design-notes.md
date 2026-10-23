# Curriculo — Design Notes

Reference: **Rezume** — `https://colorlib.com/wp/template/rezume/`  
Live preview: `https://preview.colorlib.com/theme/rezume/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/rezume-free-template.jpg  
Shipped: https://curriculo.free.componentdock.com

Curriculo is a professional resume and portfolio single-page template that showcases skills, work experience, projects, and contact information. It recreates the ColorLib "Rezume" design under a new original name with React 19, Tailwind CSS 4, and TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Nunito Sans**, **Nunito Sans:wght@200;300;400;700**

## Design tokens (`apps/curriculo/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-start` | `#8490ff` | brand start |
| `--color-brand-end` | `#62bdfc` | brand end |
| `--color-brand-primary` | `#0d6efd` | brand primary |
| `--font-sans` | `'Nunito Sans', ui-sans-serif, system-ui, sans-serif` | Nunito Sans — the original template's typeface (Google Fonts via index.html) |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar navigation | see fidelity note below |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `Clients` | — | no dedicated spec block |
| 4 | `Portfolio` | Portfolio filter | see fidelity note below |
| 5 | `CaseStudies` | — | no dedicated spec block |
| 6 | `Resume` | — | no dedicated spec block |
| 7 | `Certifications` | — | no dedicated spec block |
| 8 | `About` | — | no dedicated spec block |
| 9 | `Testimonials` | Page loads with all sections | see fidelity note below |
| 10 | `Services` | — | no dedicated spec block |
| 11 | `Blog` | — | no dedicated spec block |
| 12 | `Contact` | Contact form | see fidelity note below |
| 13 | `Footer` | Footer contains Component Dock link | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The navbar SHALL provide fixed navigation with links to each section and a dark mode toggle.

### `Hero`
*anchors only* — Hello, I&apos;m · Alex Morgan

### `Clients`
*anchors only* — Trusted By · Leading Brands

### `Portfolio`
The portfolio section SHALL display filterable project items.

### `CaseStudies`
*anchors only* — Featured · Case Studies · View Case Study

### `Resume`
*anchors only* — Resume · Education · Experience

### `Certifications`
*anchors only* — Certifications &amp; · Awards

### `About`
*anchors only* — About · Hire Me · Download CV

### `Testimonials`
The template SHALL render all 13 sections in order: Navbar, Hero, Clients, Portfolio, Case Studies, Resume, Certifications, About, Testimonials, Services, Blog, Contact, Footer.

### `Services`
*anchors only* — Services · Learn More →

### `Blog`
*anchors only* — Blog on · Medium

### `Contact`
The contact section SHALL include a functional contact form.

### `Footer`
The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/curriculo/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/curriculo/public/CNAME` = `curriculo.free.componentdock.com`
  and the package `homepage` = `https://curriculo.free.componentdock.com`.
