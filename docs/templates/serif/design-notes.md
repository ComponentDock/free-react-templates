# Serif — Design Notes

Reference: **Sensive** — `https://colorlib.com/wp/template/sensive/`  
Live preview: `https://preview.colorlib.com/theme/sensive/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/sensive-free-template.jpg  
Shipped: https://serif.free.componentdock.com

Serif is a single-page blog homepage template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Sensive" blog design (see TEMPLATES.md, lines 286 and 2212 — mark BOTH `[x]` when done), built under a different name with the monorepo stack: Vite + React 19

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lora**, **Lora:wght@400;700**, **Source Sans Pro**

## Design tokens (`apps/serif/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fff8eb` | primary 50 |
| `--color-primary-100` | `#ffedc4` | primary 100 |
| `--color-primary-200` | `#ffdd8a` | primary 200 |
| `--color-primary-300` | `#ffc94a` | primary 300 |
| `--color-primary-400` | `#ffb51f` | primary 400 |
| `--color-primary-500` | `#ff9907` | primary 500 |
| `--color-primary-600` | `#e07f00` | primary 600 |
| `--color-primary-700` | `#b95f00` | primary 700 |
| `--color-primary-800` | `#8f4700` | primary 800 |
| `--color-primary-900` | `#6b3600` | primary 900 |
| `--color-brand` | `#ff9907` | brand |
| `--color-ink` | `#3a414e` | ink |
| `--color-ink-deep` | `#000022` | ink deep |
| `--color-coal` | `#222222` | coal |
| `--color-footer-input` | `#191919` | footer input |
| `--color-meta` | `#777777` | meta |
| `--color-meta-light` | `#999999` | meta light |
| `--color-cat` | `#797979` | cat |
| `--color-tag` | `#555555` | tag |
| `--color-widget` | `#f9f9ff` | widget |
| `--color-arrow` | `#f5f9fc` | arrow |
| `--color-menu` | `#dddddd` | menu |
| `--color-hairline` | `#ededed` | hairline |
| `--color-sky-from` | `#4dabff` | sky from |
| `--color-sky-to` | `#62ddff` | sky to |
| `--font-serif` | `'Lora', Georgia, serif` | font serif |
| `--font-sans` | `'Source Sans Pro', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header / navigation | see fidelity note below |
| 2 | `Hero` | Hero banner | see fidelity note below |
| 3 | `FeaturedSlider` | Featured posts slider | see fidelity note below |
| 4 | `RecentPosts` | Recent blog posts | see fidelity note below |
| 5 | `Pagination` | Pagination | see fidelity note below |
| 6 | `Sidebar` | Sidebar — Newsletter widget | see fidelity note below |
| 7 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a white header with a logo, primary navigation, a Pages dropdown, social icons, a search icon, and a mobile menu.

### `Hero`
The system SHALL render a full-width hero banner with a background photo, a dark overlay, and centered white text.

### `FeaturedSlider`
The system SHALL render a carousel of featured post cards with a label, a title, meta text, and navigation arrows.

### `RecentPosts`
The system SHALL render a main column with four recent blog posts, each with a photo, meta bar, title, tags, excerpt, and a READ MORE button.

### `Pagination`
The system SHALL render pagination links below the post list.

### `Sidebar`
The system SHALL render a Newsletter widget with an email input and a subscribe button.

### `Footer`
The system SHALL render a black footer with About Us, Newsletter, Instagram Feed, and Follow Us columns plus a copyright bar.

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
- **Provenance ban.** No file under `apps/serif/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/serif/public/CNAME` = `serif.free.componentdock.com`
  and the package `homepage` = `https://serif.free.componentdock.com`.
