# Groovecraft — Design Notes

Reference: **Onemusic** — `https://colorlib.com/wp/template/onemusic/`  
Live preview: `https://preview.colorlib.com/theme/onemusic/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/one-music-free-template.jpg  
Shipped: https://groovecraft.free.componentdock.com

Groovecraft is a music artist landing page template that recreates the ColorLib "One Music" design as a single-page React application. It showcases albums, featured artists, music charts, and a contact form — all faithful to the original section order, layout, and design tokens.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Archivo Narrow**, **Archivo Narrow:wght@400;500;600;700**

## Design tokens (`apps/groovecraft/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-groove-black` | `#000000` | Groovecraft brand palette — dark music theme inspired by Archivo Narrow |
| `--color-groove-dark` | `#232323` | groove dark |
| `--color-groove-mid` | `#363636` | groove mid |
| `--color-groove-text` | `#5f5f5f` | groove text |
| `--color-groove-light` | `#f5f9fa` | groove light |
| `--color-groove-white` | `#ffffff` | groove white |
| `--font-sans` | `'Archivo Narrow', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `LatestAlbums` | Latest Albums section | see fidelity note below |
| 4 | `BuyNow` | Buy What's New section | see fidelity note below |
| 5 | `FeaturedArtist` | Featured Artist section | see fidelity note below |
| 6 | `MusicLists` | Music Lists section | see fidelity note below |
| 7 | `Contact` | Contact form | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a fixed transparent navbar with the brand "Groovecraft", navigation links (Home, Albums, Events, News, Contact), and a shopping cart icon.

### `Hero`
The template SHALL display a full-viewport hero section with a background image, subtitle "Latest album", heading "Beyond Time", and a "Discover" CTA button.

### `LatestAlbums`
The template SHALL display a "Latest Albums" section with a heading, description text, and a horizontal scrollable row of album cards.

### `BuyNow`
The template SHALL display a "Buy What's New" section on a light gray background with a grid of album cards including price badges and play button overlays, plus a "Load More" button.

### `FeaturedArtist`
The template SHALL display a "Featured Artist" section with a dark overlay background, artist image, description text, and an audio player row.

### `MusicLists`
The template SHALL display a three-column layout with "This week's top" tracks, "New Hits" with play controls, and "Popular Artist" list.

### `Contact`
The template SHALL display a "Get In Touch" section with a dark overlay background and a contact form with Name, E-mail, Subject, Message fields and a Send button.

### `Footer`
The template SHALL display a dark footer with the "Groovecraft" brand, copyright text linking to Component Dock, and navigation links.

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
- **Provenance ban.** No file under `apps/groovecraft/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/groovecraft/public/CNAME` = `groovecraft.free.componentdock.com`
  and the package `homepage` = `https://groovecraft.free.componentdock.com`.
