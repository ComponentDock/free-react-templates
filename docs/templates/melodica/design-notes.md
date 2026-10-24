# Melodica — Design Notes

> **Reference identity (measured 2026-10-24).**
> `https://preview.colorlib.com/theme/music/` is claimed by TWO catalogue keys
> (`music` → `/wp/template/music-2/`, `catalog-141301` → `/wp/template/music/`). This
> row (`Music 2`) owns the design the directory serves, so the reference is unambiguous.
> **The shipped app does not follow it**: `apps/melodica` renders an invented page
> (`About`/`Tracks`/`Events`/`Gallery`, headline "Feel The Music", indigo palette) while
> the reference is the `your music.` hero, Tour Dates, App, Featured Albums, gradient
> news band, Josefin Sans + `#2ac275` on `#2457d7→#3b125d`. Authority:
> `openspec/specs/template-melodica/spec.md`.

Reference: **Music 2** — `https://colorlib.com/wp/template/music-2/`  
Live preview: `https://preview.colorlib.com/theme/music/` (HTTP 200, 24,529 B, 2026-10-24 — `theme/music-2/` itself **404s**: the post shares the `music` demo directory)  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/music-free-template.jpg  
Shipped: https://melodica.free.componentdock.com

Melodica is a dark-themed music artist/band landing page template with a deep blue-to-purple gradient color scheme, vibrant accent colors, and music-focused sections. It showcases an artist's brand, tracks, upcoming events, photo gallery, and newsletter signup.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@400;500;600;700**, **Poppins**

## Design tokens (`apps/melodica/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-50` | `#eef2ff` | brand 50 |
| `--color-brand-100` | `#e0e7ff` | brand 100 |
| `--color-brand-200` | `#c7d2fe` | brand 200 |
| `--color-brand-300` | `#a5b4fc` | brand 300 |
| `--color-brand-400` | `#818cf8` | brand 400 |
| `--color-brand-500` | `#6366f1` | brand 500 |
| `--color-brand-600` | `#4f46e5` | brand 600 |
| `--color-brand-700` | `#4338ca` | brand 700 |
| `--color-brand-800` | `#3730a3` | brand 800 |
| `--color-brand-900` | `#312e81` | brand 900 |
| `--color-brand-950` | `#1e1b4b` | brand 950 |
| `--color-deep-800` | `#1a1040` | deep 800 |
| `--color-deep-900` | `#120a2e` | deep 900 |
| `--color-deep-950` | `#0a0518` | deep 950 |
| `--color-accent-yellow` | `#f1f830` | accent yellow |
| `--color-accent-green` | `#31c571` | accent green |
| `--color-accent-purple` | `#e93efd` | accent purple |
| `--font-heading` | `'Poppins', sans-serif` | font heading |
| `--font-body` | `'Inter', sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar with logo and section links | see fidelity note below |
| 2 | `Hero` | Hero section with headline and CTAs | see fidelity note below |
| 3 | `About` | About section with artist info and stats | see fidelity note below |
| 4 | `Tracks` | Tracks section with featured tracks grid | see fidelity note below |
| 5 | `Events` | Events section with upcoming shows | see fidelity note below |
| 6 | `Gallery` | Photo gallery grid | see fidelity note below |
| 7 | `Newsletter` | Newsletter signup section | see fidelity note below |
| 8 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a fixed navigation bar with a logo text, section links (Home, About, Tracks, Events, Gallery, Contact), and a call-to-action button.

### `Hero`
The template SHALL display a hero section with a large headline, subtitle text, and two call-to-action buttons (primary filled, secondary outline).

### `About`
The template SHALL display an about section with an artist image, bio text, and statistic counters (albums, fans, concerts).

### `Tracks`
The template SHALL display a tracks section with a grid of featured tracks, each showing an image, title, and play button overlay.

### `Events`
The template SHALL display an events section listing upcoming shows with date, venue name, and a ticket button for each event.

### `Gallery`
The template SHALL display a gallery section with a responsive grid of placeholder images arranged in 2-3 columns.

### `Newsletter`
The template SHALL display a newsletter section with a heading, email input field, and a subscribe button.

### `Footer`
The template SHALL display a footer with social media links, quick navigation links, and a Component Dock attribution link.

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
- **Provenance ban.** No file under `apps/melodica/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/melodica/public/CNAME` = `melodica.free.componentdock.com`
  and the package `homepage` = `https://melodica.free.componentdock.com`.
