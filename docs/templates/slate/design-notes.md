# Slate — Design Notes

Reference: **Wordpress Business Themes** — `https://colorlib.com/wp/template/wordpress-business-themes/`  
Live preview: `https://preview.colorlib.com/theme/wordpress-business-themes/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/wordpress-business-themes1.jpg  
Shipped: https://slate.free.componentdock.com

Slate is a single-page business website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Wordpress Business Themes" entry in TEMPLATES.md (Business Template category), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;400;700**

## Design tokens (`apps/slate/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-slate` | `#6a6f82` | slate |
| `--color-slate-dark` | `#5a6270` | slate dark |
| `--color-mist` | `#f4f5f7` | mist |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | Montserrat (geometric sans) via Google Fonts. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Hero` | Hero | see fidelity note below |
| 2 | `MobileMenu` | Mobile menu | see fidelity note below |
| 3 | `Features` | Features | see fidelity note below |
| 4 | `Stats` | About / stats band | see fidelity note below |
| 5 | `Testimonials` | Testimonials | see fidelity note below |
| 6 | `Contact` | Contact | see fidelity note below |
| 7 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Hero`
The system SHALL render the slate split hero exactly as captured: solid slate background, left text block, right portrait, bottom-corner nav anchors.

### `MobileMenu`
The system SHALL open a full-screen overlay menu when the hero hamburger is activated.

### `Features`
The system SHALL render a features section on a light background (reconstructed below the fold per business-landing conventions).

### `Stats`
The system SHALL render a dark slate band with company stats (reconstructed).

### `Testimonials`
The system SHALL render a testimonials section (reconstructed).

### `Contact`
The system SHALL render a contact section (reconstructed).

### `Footer`
The system SHALL render the footer (reconstructed, repo standard).

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
- **Provenance ban.** No file under `apps/slate/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/slate/public/CNAME` = `slate.free.componentdock.com`
  and the package `homepage` = `https://slate.free.componentdock.com`.
