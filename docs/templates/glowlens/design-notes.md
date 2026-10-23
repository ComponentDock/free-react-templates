# Glowlens — Design Notes

Reference: **Halo** — `https://colorlib.com/wp/template/halo/`  
Live preview: `https://preview.colorlib.com/theme/halo/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/halo-free-template.jpg  
Shipped: https://glowlens.free.componentdock.com

Provide a photography portfolio single-page template with hero, intro, portfolio grid, milestones, services, contact form, and footer sections.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400**

## Design tokens (`apps/glowlens/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#c1a052` | brand |
| `--color-ink` | `#222121` | ink |
| `--color-muted` | `#868686` | muted |
| `--color-dim` | `#5a5a5a` | dim |
| `--color-coal` | `#2b2b2b` | coal |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | Open Sans — Google Fonts via index.html |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Intro` | Intro section | see fidelity note below |
| 4 | `Portfolio` | Portfolio grid | see fidelity note below |
| 5 | `Milestones` | Milestones section | see fidelity note below |
| 6 | `Services` | Services section | see fidelity note below |
| 7 | `Contact` | Contact section | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Search

### `Hero`
Users SHALL see a full-width hero with background image, title "Glowlens", and subtitle text.

### `Intro`
Users SHALL see a two-column intro with text on the left and an image on the right.

### `Portfolio`
Users SHALL see a 7-item portfolio grid with hover overlays.

### `Milestones`
Users SHALL see 4 milestone stat boxes with icons and numbers.

### `Services`
Users SHALL see a services section with descriptive text and 4 service cards.

### `Contact`
Users SHALL see a contact section with contact information and a form.

### `Footer`
Users SHALL see a footer with CTA, social links, and Component Dock attribution.

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
- **Provenance ban.** No file under `apps/glowlens/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/glowlens/public/CNAME` = `glowlens.free.componentdock.com`
  and the package `homepage` = `https://glowlens.free.componentdock.com`.
