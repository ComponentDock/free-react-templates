# Forge — Design Notes

Reference: **Craft** — `https://colorlib.com/wp/template/craft/`  
Live preview: `https://preview.colorlib.com/theme/craft/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/craft-free-template.jpg  
Shipped: https://forge.free.componentdock.com

Forge is a single-page creative-agency landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Craft" website template (see TEMPLATES.md, Bootstrap category, line 367), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Raleway**, **Raleway:wght@300;400;500;600;700**

## Design tokens (`apps/forge/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#20c997` | brand |
| `--color-brand-deep` | `#1ba87e` | brand deep |
| `--color-brand-light` | `#3ce0af` | brand light |
| `--color-portfolio` | `#90a8af` | portfolio |
| `--color-footer` | `#333333` | footer |
| `--color-surface` | `#f8f9fa` | surface |
| `--color-secondary` | `#6c757d` | secondary |
| `--color-body` | `#212529` | body |
| `--font-sans` | `'Raleway', ui-sans-serif, system-ui, sans-serif` | Raleway 300/400/700 (Google Fonts <link>). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header and navigation | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Portfolio` | Portfolio section | see fidelity note below |
| 5 | `Services` | Services section | see fidelity note below |
| 6 | `Testimonials` | Testimonials section | see fidelity note below |
| 7 | `CtaBanner` | — | no dedicated spec block |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Header`
The system SHALL render a transparent header with the site wordmark, nav links, a dropdown, and a search field.

### `Hero`
The system SHALL render a full-screen hero with a background image, dark overlay, a level-1 headline with a highlighted span, a play button, and "Watch Video" text.

### `About`
The system SHALL render a two-column "Who We Are" section with an eyebrow, divider bar, heading, text, button, and an image with a decorative offset shadow.

### `Portfolio`
The system SHALL render a portfolio grid on the blue-gray `#90a8af` background with hover-reveal work cards and a "More Portfolio" button.

### `Services`
The system SHALL render a split "Featured Services" section with four icon cards.

### `Testimonials`
The system SHALL render a testimonial carousel on a light background with white quote cards containing avatar, name, role, and a quote.

### `CtaBanner`
*anchors only* — Do You Have An Awesome Project In Mind? · Get In Touch!

### `Footer`
The system SHALL render a dark footer with About / Contact Info / Quick Links columns, social icons, and a copyright bar.

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
- **Provenance ban.** No file under `apps/forge/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/forge/public/CNAME` = `forge.free.componentdock.com`
  and the package `homepage` = `https://forge.free.componentdock.com`.
