# Landmark — Design Notes

Reference: **Konato** — `https://colorlib.com/wp/template/konato/`  
Live preview: `https://preview.colorlib.com/theme/konato/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/konato-free-template.jpg  
Shipped: https://landmark.free.componentdock.com

Landmark is a real-estate listing one-pager in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Konato" template design (see TEMPLATES.md — appears 2×: lines 598 and 2598; both rows point to the same source and are `- [ ]` — one prep covers both, mark ALL `[x]` when done; verified with `grep -c '…

## Typography

Fonts loaded by `index.html` (Google Fonts): **Jost**, **Jost:wght@300;400;500;600;700;800;900**

## Design tokens (`apps/landmark/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#00aeff` | brand |
| `--color-navy` | `#004274` | navy |
| `--color-ink` | `#192839` | Ink — headings (Jost 500) and select text. |
| `--color-body` | `#545454` | Body — paragraph text on light sections. |
| `--color-muted` | `#5e5e5e` | Muted — card blurbs, section-tittle paragraphs, placeholders. |
| `--color-light` | `#f2f4f8` | Light — the #F2F4F8 band behind "Explore by Property Type". |
| `--color-line` | `#beccd6` | Line — #BECCD6 search/select borders and the newsletter input rule. |
| `--color-blue-bg` | `#00a0eb` | Blue-bg — the solid #00A0EB services band background. |
| `--color-footer-bg` | `#f2f6f9` | Footer-bg — the #F2F6F9 copyright bar. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header (top bar + search) | see fidelity note below |
| 2 | `HeroSlider` | Hero slider | see fidelity note below |
| 3 | `PropertyCarousel` | Property types band | see fidelity note below |
| 4 | `Services` | Services band | see fidelity note below |
| 5 | `PropertyTypes` | Featured properties | see fidelity note below |
| 6 | `Agents` | Agents carousel | see fidelity note below |
| 7 | `Newsletter` | Newsletter band | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a dark-navy `#004274` top bar with a brand logo, primary navigation, a call-us link and a Sign In button, plus a white search row beneath it.

### `HeroSlider`
The system SHALL render a full-width hero photo slider with a dark navy overlay, an eyebrow, a title, a price, and a View Property button.

### `PropertyCarousel`
The system SHALL render a light-gray "Explore by Property Type" band with a heading, a View All Property button, and four icon category cards.

### `Services`
The system SHALL render a solid-blue "How we help people?" band with three icon service cards.

### `PropertyTypes`
The system SHALL render a "Display Latest & Featured Properties" carousel with four property cards.

### `Agents`
The system SHALL render an "Our Agents" carousel with four agent photo cards.

### `Newsletter`
The system SHALL render a split subscribe band with a dark-navy text panel and a photo panel.

### `Footer`
The system SHALL render a footer with a brand column, four link columns, and a copyright bar linking Component Dock.

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
- **Provenance ban.** No file under `apps/landmark/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/landmark/public/CNAME` = `landmark.free.componentdock.com`
  and the package `homepage` = `https://landmark.free.componentdock.com`.
