# Plano — Design Notes

Reference: **Interior 2** — `https://colorlib.com/wp/template/interior-2/`  
Live preview: `https://preview.colorlib.com/theme/interior2/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/interior2-free-template.jpg  
Shipped: https://plano.free.componentdock.com

Plano is a single-page interior design landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/plano/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#001d38` | primary |
| `--color-accent` | `#ffe8c3` | accent |
| `--color-skills-bg` | `#f5fbff` | skills bg |
| `--color-footer-border` | `#334a60` | footer border |
| `--color-text-secondary` | `#999999` | text secondary |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar renders navigation and dropdown menus | see fidelity note below |
| 2 | `HeroSlider` | Hero slider displays with overlay and CTA | see fidelity note below |
| 3 | `ServicesStrip` | Services strip shows three service columns | see fidelity note below |
| 4 | `PortfolioGallery` | Portfolio gallery shows alternating image-text rows | see fidelity note below |
| 5 | `SkillsSection` | Skills section shows progress bars | see fidelity note below |
| 6 | `Testimonials` | Testimonials carousel displays quotes | see fidelity note below |
| 7 | `InstagramGrid` | Instagram grid shows three images | see fidelity note below |
| 8 | `Footer` | Footer contains CTA, links, and newsletter | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a sticky header with logo ("Plano."), navigation links (Home, Projects, Pages dropdown, Blog dropdown, Contact), and a "Say Hello" text link on the right. Mobile viewport shows a hamburger toggle.

### `HeroSlider`
The template SHALL display a full-width hero slider with two slides, each with a background image, dark navy overlay (60% opacity), heading text, and a cream "View Works" button.

### `ServicesStrip`
The template SHALL display three equal-width columns (Planing, Architecture, 3D Design) each with a title, description, and large decorative number (01, 02, 03).

### `PortfolioGallery`
The template SHALL display "Our Works" heading and four project rows in alternating layout (image-left/text-right, then text-left/image-right), each with a title, description, and "Details" outline button.

### `SkillsSection`
The template SHALL display a split layout with image on the left and content on the right, including heading "Professional and creative mind", description, three progress bars (Architecture 60%, 3D Design 65%, Interior 80%), and an "About Us" outline button.

### `Testimonials`
The template SHALL display a testimonial carousel with dark overlay background, showing a quote icon, testimonial text, author photo, name, and role.

### `InstagramGrid`
The template SHALL display a centered "@Instagram" heading and a 3-column image grid with hover overlay effects.

### `Footer`
The template SHALL display a query CTA bar ("Have any project or query?"), four footer columns (Address, Services, Company, Subscribe with form), and a copyright bar linking to Component Dock.

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
- **Provenance ban.** No file under `apps/plano/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/plano/public/CNAME` = `plano.free.componentdock.com`
  and the package `homepage` = `https://plano.free.componentdock.com`.
