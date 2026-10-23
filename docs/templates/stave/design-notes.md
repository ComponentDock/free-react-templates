# Stave — Design Notes

Reference: `https://colorlib.com/wp/template/musico/` (the design page the spec records)  
Live preview: `https://preview.colorlib.com/theme/bac/accordion-14/` (the ROW's slug `accordion-14`, probed 200 on 2026-10-23) — the spec names `musico` and records no demo.  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/accordion-14.jpg — the ROW's slug `accordion-14`, not the spec's `musico`  
Shipped: https://stave.free.componentdock.com

Row note: `TEMPLATES.md` links the slug `accordion-14` for this app while the spec records `musico`. This brief follows the SPEC — the disagreement is recorded, not resolved (ROW-MULTIPLICITY class, see the SPEC-REFERENCE audit, main `4820f472b`).

Stave is a music artist landing page template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Josefin Sans**, **Josefin Sans:wght@300;400;600;700**, **Muli**

## Design tokens (`apps/stave/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ed1b1b` | brand |
| `--color-brand-dark` | `#c41717` | brand dark |
| `--color-heading` | `#001d38` | heading |
| `--color-body` | `#727272` | body |
| `--color-link` | `#1f1f1f` | link |
| `--color-overlay` | `rgba(0, 0, 0, 0.7)` | overlay |
| `--color-hero-bg` | `#111111` | hero bg |
| `--font-heading` | `'Josefin Sans', system-ui, sans-serif` | font heading |
| `--font-body` | `'Muli', 'Josefin Sans', system-ui, sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `FeaturedTrack` | Featured track section | see fidelity note below |
| 4 | `About` | About section | see fidelity note below |
| 5 | `VideoGallery` | Video gallery section | see fidelity note below |
| 6 | `LatestTracks` | Latest tracks section | see fidelity note below |
| 7 | `Gallery` | Video gallery section | see fidelity note below |
| 8 | `ContactCTA` | Contact CTA section | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Stave", nav links (Home, About, Tracks, Blog, Contact), and social icon links (Facebook, Twitter, Instagram).

### `Hero`
The system SHALL render a full-width hero section with a dark background image and a centered "Musician" heading.

### `FeaturedTrack`
The system SHALL render a featured track section with artist thumbnail, artist name "Frando Kally", date, audio player placeholder, and a "Buy Album" button.

### `About`
The system SHALL render an about section with a two-column layout: left artist photo, right artist name "Jack Kalib" and bio text.

### `VideoGallery`
The system SHALL render a 4-column grid of video thumbnails with play button overlays, event labels, and titles on hover.

### `LatestTracks`
The system SHALL render a "Latest Tracks" section with 3 track rows, each containing a thumbnail, name, date, audio player placeholder, and a "Buy" button.

### `Gallery`
The system SHALL render a 4-column grid of video thumbnails with play button overlays, event labels, and titles on hover.

### `ContactCTA`
The system SHALL render a centered "Contact For RSVP" heading and a solid red "Contact Me" button linking to a mailto.

### `Footer`
The system SHALL render a footer with a newsletter form, contact info, social icon links, and a Component Dock link.

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
- **Provenance ban.** No file under `apps/stave/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/stave/public/CNAME` = `stave.free.componentdock.com`
  and the package `homepage` = `https://stave.free.componentdock.com`.
