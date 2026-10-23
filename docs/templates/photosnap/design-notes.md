# Photosnap — Design Notes

Reference: **Louie** — `https://colorlib.com/wp/template/louie/`  
Live preview: `https://preview.colorlib.com/theme/louie/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/louie-free-template.jpg  
Shipped: https://photosnap.free.componentdock.com

Photosnap is a photographer portfolio template for creative professionals. It features a sidebar navigation layout with a dark aesthetic, a hero section with large typography and a signature element, an Instagram-style photo grid gallery, and a dark footer with recent photos, archives, and contact information.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Herr Von Muellerhoff**, **Montserrat**, **Poppins**

## Design tokens (`apps/photosnap/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#78d5ef` | brand |
| `--color-brand-dark` | `#56caeb` | brand dark |
| `--color-accent` | `#c4ac7d` | accent |
| `--color-dark` | `#242423` | dark |
| `--color-ink` | `#212529` | ink |
| `--color-muted` | `#6c757d` | muted |
| `--color-watermark` | `#ededed` | watermark |
| `--color-light` | `#f8f9fa` | light |
| `--color-primary-50` | `#edf9fd` | primary 50 |
| `--color-primary-100` | `#d4f1f9` | primary 100 |
| `--color-primary-200` | `#a9e3f3` | primary 200 |
| `--color-primary-300` | `#78d5ef` | primary 300 |
| `--color-primary-400` | `#56caeb` | primary 400 |
| `--color-primary-500` | `#34c0e7` | primary 500 |
| `--color-primary-600` | `#1da8d4` | primary 600 |
| `--color-primary-700` | `#1789ab` | primary 700 |
| `--color-primary-800` | `#116b85` | primary 800 |
| `--color-primary-900` | `#0c4d5e` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font display |
| `--font-signature` | `'Herr Von Muellerhoff', cursive` | font signature |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Sidebar` | Sidebar Navigation | see fidelity note below |
| 2 | `Hero` | Hero Section | see fidelity note below |
| 3 | `InstagramGallery` | Instagram Gallery Section | see fidelity note below |
| 4 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Sidebar`
The template SHALL render a fixed left sidebar with a profile image, name "Louie Smith" (replaced with "Photosnap"), navigation links (Home, Collection, About Me, My Services, Blog, Contact), a newsletter signup form, and social links (Twitter, Facebook, Instagram).

### `Hero`
The template SHALL render a full-width hero section with a large background image, the name "Louie Smith" (replaced with "Photosnap") as a large faded watermark, a headline "A Photographer. I Capture Life", a descriptive paragraph, a cursive signature element, and social media icons.

### `InstagramGallery`
The template SHALL render a gallery section titled "Follow me on Instagram" with a row of 5 equal-width photo thumbnails, each with an Instagram icon overlay on hover.

### `Footer`
The template SHALL render a dark footer with three columns: Recent Photos (6 thumbnail grid), Archives (monthly list), and Have a Questions? (address, phone, email), plus a copyright line.

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
- **Provenance ban.** No file under `apps/photosnap/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/photosnap/public/CNAME` = `photosnap.free.componentdock.com`
  and the package `homepage` = `https://photosnap.free.componentdock.com`.
