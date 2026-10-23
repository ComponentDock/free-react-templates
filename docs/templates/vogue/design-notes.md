# Vogue — Design Notes

Reference: **Violet** — `https://colorlib.com/wp/template/violet/`  
Live preview: `https://preview.colorlib.com/theme/violet/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/violet-free-template.jpg  
Shipped: https://vogue.free.componentdock.com

Vogue is a single-page fashion e-commerce landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Jost**, **Jost:wght@400;500;600;700**, **Montserrat**

## Design tokens (`apps/vogue/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#1e1e1e` | Brand palette — editorial fashion store (grey-blue accent on near-black). |
| `--color-accent` | `#b0bcc2` | accent |
| `--color-sale` | `#fe439f` | sale |
| `--color-lightgrey` | `#d0d7db` | lightgrey |
| `--color-secondary` | `#727272` | secondary |
| `--color-secondary-2` | `#787878` | secondary 2 |
| `--color-secondary-3` | `#838383` | secondary 3 |
| `--color-caption` | `#5b5b5b` | caption |
| `--color-dot` | `#969d9e` | dot |
| `--color-footer` | `#262626` | footer |
| `--color-social` | `#222121` | social |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | Montserrat (body + UI) + Jost (geometric display captions) via Google Fonts. |
| `--font-display` | `'Jost', 'Montserrat', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header with logo, nav and account tools | see fidelity note below |
| 2 | `AnnouncementBar` | Announcement bar | see fidelity note below |
| 3 | `HeroSlider` | Hero slider | see fidelity note below |
| 4 | `Features` | Feature row | see fidelity note below |
| 5 | `LookbookCollage` | Lookbook collage | see fidelity note below |
| 6 | `LatestProducts` | Latest products | see fidelity note below |
| 7 | `Lookbook` | Lookbook collage | see fidelity note below |
| 8 | `LogoStrip` | Brand logo strip | see fidelity note below |
| 9 | `Footer` | Dark footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a white header with a text brand, centered nav with a Shop dropdown, icon tools and register/sign-in links.

### `AnnouncementBar`
The system SHALL render a grey-blue promo strip above the hero.

### `HeroSlider`
The system SHALL render a full-width hero slider with giant typography and a pill CTA.

### `Features`
The system SHALL render three feature columns with icons.

### `LookbookCollage`
The system SHALL render a 3-box image collage with letter-spaced captions.

### `LatestProducts`
The system SHALL render a filterable product grid with status badges.

### `Lookbook`
The system SHALL render a 3-box image collage with letter-spaced captions.

### `LogoStrip`
The system SHALL render a ghosted brand-logo strip.

### `Footer`
The system SHALL render a dark footer with newsletter form, link columns, socials and copyright.

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
- **Provenance ban.** No file under `apps/vogue/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/vogue/public/CNAME` = `vogue.free.componentdock.com`
  and the package `homepage` = `https://vogue.free.componentdock.com`.
