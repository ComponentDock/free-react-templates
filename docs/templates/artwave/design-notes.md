# Artwave — Design Notes

Reference: **Bobsled** — `https://colorlib.com/wp/template/bobsled/`  
Live preview: `https://preview.colorlib.com/theme/bobsled/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bobsled-creative-website-template.jpg  
Shipped: https://artwave.free.componentdock.com

ArtWave is a single-page creative agency template in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Bobsled" creative agency template design, built under a different name (**ArtWave**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;500;600**

## Design tokens (`apps/artwave/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-poppins` | `'Poppins', sans-serif` | font poppins |
| `--color-brand-blue` | `#3e69fe` | brand blue |
| `--color-brand-cyan` | `#4cd4e3` | brand cyan |
| `--color-heading` | `#222222` | heading |
| `--color-body` | `#777777` | body |
| `--color-light-bg` | `#f9f9ff` | light bg |
| `--color-border-subtle` | `#eee` | border subtle |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero banner renders correctly | see fidelity note below |
| 3 | `WorkingProcess` | Working process section displays four steps | see fidelity note below |
| 4 | `FeaturedArea` | Featured area shows three feature cards | see fidelity note below |
| 5 | `RemarkableWorks` | Remarkable works shows alternating layout | see fidelity note below |
| 6 | `StoryArea` | Story area displays with gradient background | see fidelity note below |
| 7 | `Subscription` | Subscription section has email form | see fidelity note below |
| 8 | `ContactForm` | Contact form collects user input | see fidelity note below |
| 9 | `FooterWidget` | Footer widget shows contact information | see fidelity note below |
| 10 | `Footer` | Footer widget shows contact information | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main navigation · Toggle navigation menu · Mobile navigation

### `Hero`
The template SHALL display a hero section with a gradient background (#3e69fe → #4cd4e3).

### `WorkingProcess`
The template SHALL display a working process section with 4 steps.

### `FeaturedArea`
The template SHALL display a featured area with 3 cards on gradient background.

### `RemarkableWorks`
The template SHALL display remarkable works with 3 alternating image+text rows.

### `StoryArea`
The template SHALL display a story area with gradient background and CTA.

### `Subscription`
The template SHALL display a subscription section with email input.

### `ContactForm`
The template SHALL display a contact form with name, email, and message fields.

### `FooterWidget`
The template SHALL display a footer widget with 3 columns and copyright bar.

### `Footer`
The template SHALL display a footer widget with 3 columns and copyright bar.

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
- **Provenance ban.** No file under `apps/artwave/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/artwave/public/CNAME` = `artwave.free.componentdock.com`
  and the package `homepage` = `https://artwave.free.componentdock.com`.
