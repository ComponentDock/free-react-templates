# Craftline — Design Notes

Reference: **Jackson** — `https://colorlib.com/wp/template/jackson/`  
Live preview: `https://preview.colorlib.com/theme/jackson/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/jackson-free-personal-resume-website-template.jpg  
Shipped: https://craftline.free.componentdock.com

Recreate the ColorLib **Jackson** (https://colorlib.com/wp/template/jackson/) personal resume and portfolio template as a React 19 + Tailwind CSS 4 + TypeScript application.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@300;400;500;600;700**

## Design tokens (`apps/craftline/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#0066ff` | brand |
| `--color-brand-hover` | `#0052cc` | brand hover |
| `--color-brand-light` | `rgba(0, 102, 255, 0.08)` | brand light |
| `--color-text-primary` | `#1a1a1a` | text primary |
| `--color-text-secondary` | `#555555` | text secondary |
| `--color-text-muted` | `#888888` | text muted |
| `--color-bg-primary` | `#ffffff` | bg primary |
| `--color-bg-secondary` | `#f8f9fa` | bg secondary |
| `--color-bg-tertiary` | `#f1f3f5` | bg tertiary |
| `--color-border` | `#e5e7eb` | border |
| `--font-heading` | `'Inter', sans-serif` | font heading |
| `--font-body` | `'Inter', sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Sidebar` | Fixed sidebar navigation | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Counters` | Counters section | see fidelity note below |
| 5 | `Services` | Services section | see fidelity note below |
| 6 | `Skills` | Skills section | see fidelity note below |
| 7 | `Education` | Education section | see fidelity note below |
| 8 | `Experience` | Experience section | see fidelity note below |
| 9 | `Work` | Work portfolio section | see fidelity note below |
| 10 | `Blog` | Blog section | see fidelity note below |
| 11 | `Contact` | Contact section | see fidelity note below |
| 12 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Sidebar`
The template SHALL display a fixed left sidebar (280px) with profile photo, name, title, navigation links, dark mode toggle, social links, and copyright.

### `Hero`
The template SHALL display a full-height hero section with background image, greeting text, subtitle, and CTA button.

### `About`
The template SHALL display an about section with heading, description text, and a 4-column service icons grid.

### `Counters`
The template SHALL display a counters section with animated statistics over a parallax background.

### `Services`
The template SHALL display a services section with 6 service cards in a 3x2 grid.

### `Skills`
The template SHALL display a skills section with 6 progress bars showing skill levels.

### `Education`
The template SHALL display an education section with accordion entries for different degrees.

### `Experience`
The template SHALL display an experience section with a timeline of work entries.

### `Work`
The template SHALL display a work section with a filterable portfolio grid.

### `Blog`
The template SHALL display a blog section with a featured post and side posts.

### `Contact`
The template SHALL display a contact section with contact information and a form.

### `Footer`
The template SHALL display a footer with copyright and a link to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/craftline/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/craftline/public/CNAME` = `craftline.free.componentdock.com`
  and the package `homepage` = `https://craftline.free.componentdock.com`.
