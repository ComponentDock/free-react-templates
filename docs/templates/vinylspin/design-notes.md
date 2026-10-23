# Vinylspin — Design Notes

Reference: **Mixtape** — `https://colorlib.com/wp/template/mixtape/`  
Live preview: `https://preview.colorlib.com/theme/mixtape/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/mixtape-free-template.jpg  
Shipped: https://vinylspin.free.componentdock.com

Vinylspin is a dark-themed music band landing page template featuring a hero slider, featured album with audio player, upcoming shows list, artist biography with player, CTA banner, and newsletter footer. The design uses a black background (#000), white text, red accent (#de4f32), and Montserrat font (Futura-like geometric sans).

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;400;500;600;700;800**

## Design tokens (`apps/vinylspin/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fef2f0` | primary 50 |
| `--color-primary-100` | `#fddbd5` | primary 100 |
| `--color-primary-200` | `#fbb5a8` | primary 200 |
| `--color-primary-300` | `#f5836d` | primary 300 |
| `--color-primary-400` | `#de4f32` | primary 400 |
| `--color-primary-500` | `#c43a20` | primary 500 |
| `--color-primary-600` | `#a32d18` | primary 600 |
| `--color-primary-700` | `#7a2112` | primary 700 |
| `--color-primary-800` | `#52160d` | primary 800 |
| `--color-primary-900` | `#2b0b07` | primary 900 |
| `--color-accent-300` | `#ffcdb8` | Salmon accent (ColorLib hover #ffa07f). |
| `--color-accent-400` | `#ffa07f` | accent 400 |
| `--color-accent-500` | `#e08060` | accent 500 |
| `--color-void` | `#000000` | Dark backgrounds. |
| `--color-deep` | `#1a1a1a` | deep |
| `--color-surface` | `#333232` | surface |
| `--color-muted` | `#888888` | Muted text on dark. |
| `--color-subtle` | `#d3d3d3` | subtle |
| `--color-ink` | `#ffffff` | ink |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | Montserrat (geometric sans, Futura-like) via Google Fonts. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar provides navigation and auth | see fidelity note below |
| 2 | `Hero` | Hero section displays release info | see fidelity note below |
| 3 | `FeaturedAlbum` | Featured Album shows player | see fidelity note below |
| 4 | `Shows` | Featured Album shows player | see fidelity note below |
| 5 | `Artist` | Artist section displays bio | see fidelity note below |
| 6 | `CtaBanner` | CTA banner has action button | see fidelity note below |
| 7 | `Footer` | Footer has newsletter and link columns | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The Navbar SHALL display the logo "Vinylspin", navigation links (Home, About, Music, News, Contact), Login/Register links, and a mobile hamburger menu.

### `Hero`
The Hero SHALL display a "New single release" subtitle, "Love is all around" main title, and a "Listen on Soundcloud" CTA button over a background image.

### `FeaturedAlbum`
The Featured Album section SHALL display an album artwork image, artist name "Maria Smith", track title "Love is all Around", play button, progress bar, and "Buy it on iTunes" link.

### `Shows`
The Featured Album section SHALL display an album artwork image, artist name "Maria Smith", track title "Love is all Around", play button, progress bar, and "Buy it on iTunes" link.

### `Artist`
The Artist section SHALL display "The Artist" heading, an artist image, biography text paragraphs, a signature, and a single-track audio player.

### `CtaBanner`
The CTA Banner SHALL display "Get your tickets now!" heading, description text, and a "Buy Now" button over a background image.

### `Footer`
The Footer SHALL display a newsletter form (email input + Subscribe button), three link columns (Useful Links, Vinylspin, Connect), and a copyright line linking to Component Dock.

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
- **Provenance ban.** No file under `apps/vinylspin/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/vinylspin/public/CNAME` = `vinylspin.free.componentdock.com`
  and the package `homepage` = `https://vinylspin.free.componentdock.com`.
