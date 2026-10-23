# Kicker — Design Notes

Reference: **Megasis** — `https://colorlib.com/wp/template/megasis/`  
Live preview: `https://preview.colorlib.com/theme/megasis/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/megasis-colorlib-template.jpg  
Shipped: https://kicker.free.componentdock.com

Kicker is a magazine / news homepage in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Megasis" template design (see TEMPLATES.md — appears 2×: lines 604 and 2202; both rows point to the same source and are `- [ ]` — one prep covers both, mark ALL `[x]` when done; verified with `grep -c 'wp/tem…

## Typography

Fonts loaded by `index.html` (Google Fonts): **Chivo**, **Chivo:wght@400;600;700**, **Shippori Mincho**

## Design tokens (`apps/kicker/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-red` | `#c70d0d` | brand red |
| `--color-ink` | `#131313` | ink |
| `--color-footer-text` | `#c2c5db` | footer text |
| `--color-light-bg` | `#f3f3f3` | light bg |
| `--color-divider` | `#dfdfdf` | divider |
| `--font-chivo` | `'Chivo', ui-sans-serif, system-ui, sans-serif` | font chivo |
| `--font-serif` | `'Shippori Mincho', Georgia, 'Times New Roman', serif` | font serif |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header (utility row + sticky nav + mobile menu) | see fidelity note below |
| 2 | `Hero` | Hero split (feature story + rail) | see fidelity note below |
| 3 | `ArtsCulture` | Arts & Culture grid | see fidelity note below |
| 4 | `ScienceUpdate` | Science Update grid | see fidelity note below |
| 5 | `VideoGallery` | Video Gallery (dark section) | see fidelity note below |
| 6 | `Carousel` | Science Update carousel | see fidelity note below |
| 7 | `Newsletter` | Newsletter | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a two-row header: a top utility row with the brand and sign-in/social cluster, and a sticky bottom row with the category nav and a responsive mobile menu.

### `Hero`
The system SHALL render a split hero: one large feature story on the left and three stacked stories on the right.

### `ArtsCulture`
The system SHALL render a section with a top-rule title, a "See All" link, and a three-card story grid with a video card.

### `ScienceUpdate`
The system SHALL render a four-card story grid under a "Science Update" title.

### `VideoGallery`
The system SHALL render a dark `#131313` section with a white "Video Gallery" title, a feature video card with a pulsing play button, and three video rail stories.

### `Carousel`
The system SHALL render a horizontally scrollable carousel of story cards with prev/next arrows, plus a centered ad strip below.

### `Newsletter`
The system SHALL render a light-grey newsletter section with an underline email input and a red "Send Now" button.

### `Footer`
The system SHALL render a dark four-column footer with a bottom copyright bar.

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
- **Provenance ban.** No file under `apps/kicker/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/kicker/public/CNAME` = `kicker.free.componentdock.com`
  and the package `homepage` = `https://kicker.free.componentdock.com`.
