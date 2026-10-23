# Rhythm — Design Notes

Reference: **Djoz** — `https://colorlib.com/wp/template/djoz/`  
Live preview: `https://preview.colorlib.com/theme/djoz/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/djoz-free-template.jpg  
Shipped: https://rhythm.free.componentdock.com

Rhythm is a single-page DJ/music-artist website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Rajdhani**, **Rajdhani:wght@500;600;700**

## Design tokens (`apps/rhythm/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#5c00ce` | brand |
| `--color-brand-deep` | `#5400bc` | brand deep |
| `--color-brand-dark` | `#290849` | brand dark |
| `--color-brand-alt` | `#7e00ad` | brand alt |
| `--color-ink` | `#111111` | ink |
| `--color-muted` | `#666666` | muted |
| `--color-muted-light` | `#888888` | muted light |
| `--color-watermark` | `#f2f2f2` | watermark |
| `--color-paper` | `#ffffff` | paper |
| `--color-overlay` | `rgb(42 1 74 / 0.5)` | overlay |
| `--font-display` | `'Rajdhani', ui-sans-serif, system-ui, sans-serif` | font display |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Header — logo, nav, social | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `Events` | Upcoming events carousel | see fidelity note below |
| 4 | `About` | About section | see fidelity note below |
| 5 | `Services` | Services band | see fidelity note below |
| 6 | `Tracks` | Latest tracks | see fidelity note below |
| 7 | `Youtube` | Youtube feed | see fidelity note below |
| 8 | `Countdown` | Countdown band | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render an absolutely-positioned header (semi-transparent deep purple `rgba(42, 1, 74, 0.5)`, full-width, top of page) containing a logo image on the left and, on the right, a nav with the links Home (active) / About / Discography / Tours / Videos / Pages (dropdown: About / Blog / Blog Details) / Contact, plus 4 social icons (Facebook, Twitter, Instagram, Dribbble). On mobile a hamburger SHALL open a deep-purple menu with the same links.

### `Hero`
The system SHALL render a full-width hero (purple-tinted DJ photo background, ~400px top / ~295px bottom padding) with centered content: a "New single" eyebrow, a giant (110px, display-font, white) "Feel the heart beats" headline, a white blurb paragraph, a circular play button (90px, 50% radius, translucent white bg, purple play icon) linking a music-video URL, and a bottom-center downward chevron.

### `Events`
The system SHALL render an "Upcoming Events" section (42px uppercase `#111111` h2 title) with a carousel of event cards (6 cards, 3 per view, arrow controls + autoplay or manual next/prev). Each card SHALL show a 360px photo, a date badge ("Dec 15, 2019") straddling the photo's bottom edge, an h4 title, and a location line (pin icon + venue).

### `About`
The system SHALL render a split about section (6/6 columns): the artist photo on the left; on the right a section title ("DJ Alexandra Rud" h2 with a giant "About me" watermark behind), a paragraph of artist copy, and a square purple "CONTACT ME" primary button.

### `Services`
The system SHALL render a full-bleed services section: a left column with a photo background and a centered circular play button (linking a YouTube video), and a right column with a 2×2 grid of purple service tiles (alternating `#5c00ce` / `#5400BC` deep-bg, zigzag order) titled Wedding, Clubs and bar, DJ lessons, Corporate events — each with an icon, an h4 title, and a blurb.

### `Tracks`
The system SHALL render a "Latest tracks" section (h2 with a "Music podcast" watermark) with a right-aligned outline "View all tracks" button (transparent bg, 2px `#5c00ce` border, `#111111` text) and a scrollable track list (4 rows). Each row SHALL show a track title, a circular play button, a progress bar, a current-time label, a duration label, and a volume control. No audio assets: the play button may open the source's YouTube video or be decorative.

### `Youtube`
The system SHALL render a "Youtube feed" section (h2 with a "Latest videos" watermark) with three video cards (photo, centered circular play button linking the video's YouTube URL, h4 title below).

### `Countdown`
The system SHALL render a countdown section over a dark background image with a 90px white display-font "Tomorrowland 2020" title, a 26px uppercase "Music festival start in" subtitle, a live countdown timer showing days / hours / minutes / seconds (90px/700 Rajdhani numbers, initial 20 / 45 / 18 / 09), and a square purple "Buy tickets" button.

### `Footer`
The system SHALL render a footer over a dark background image with three columns: an address column (phone + email with icons and labels), a brand column (brand h2 + 4 social icon links — Facebook, Twitter, Instagram, Dribbble), and a newsletter column ("Stay With me" heading, email input + send-icon button). A centered copyright bar SHALL read "Copyright © <year> All rights reserved | This template is made with ♥ by **Component Dock**" where "Component Dock" links https://www.componentdock.com/ (no Colorlib credit).

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
- **Provenance ban.** No file under `apps/rhythm/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/rhythm/public/CNAME` = `rhythm.free.componentdock.com`
  and the package `homepage` = `https://rhythm.free.componentdock.com`.
