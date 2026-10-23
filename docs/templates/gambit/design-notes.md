# Gambit — Design Notes

Reference: **Comodo** — `https://colorlib.com/wp/template/comodo/`  
Live preview: `https://preview.colorlib.com/theme/comodo/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/comodo-free-template.jpg  
Shipped: https://gambit.free.componentdock.com

Gambit is a single-page gaming / esports website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Rajdhani**, **Rajdhani:wght@600;700**, **Roboto**

## Design tokens (`apps/gambit/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#3fcaff` | brand |
| `--color-brand-2` | `#a4ffb0` | brand 2 |
| `--color-purple-deep` | `#231a60` | purple deep |
| `--color-purple-nav` | `#2c2172` | purple nav |
| `--color-purple-price` | `#342b7e` | purple price |
| `--color-purple-mid` | `#3b328b` | purple mid |
| `--color-purple-end` | `#3c338d` | purple end |
| `--color-purple-ink` | `#22195e` | purple ink |
| `--color-ink` | `#222222` | ink |
| `--color-star` | `#f8b600` | star |
| `--font-display` | `'Rajdhani', ui-sans-serif, system-ui, sans-serif` | font display |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `UpcomingGames` | Upcoming Games | see fidelity note below |
| 5 | `RecentUpdate` | Recent Update tabs | see fidelity note below |
| 6 | `Gallery` | Screens Gallery | see fidelity note below |
| 7 | `Testimonials` | Testimonials | see fidelity note below |
| 8 | `Pricing` | Pricing | see fidelity note below |
| 9 | `Faq` | FAQ | see fidelity note below |
| 10 | `Blog` | Latest Blog Posts | see fidelity note below |
| 11 | `Newsletter` | Newsletter | see fidelity note below |
| 12 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render an absolute dark-purple navbar over the hero with a logo, ten links, and a gradient "join us" CTA.

### `Hero`
The system SHALL render a full-bleed dark hero split between game artwork and a text block with a pulsing video-play button.

### `About`
The system SHALL render an intro row with a light heading, paragraph, "Learn More" button, and an image on the right.

### `UpcomingGames`
The system SHALL render a centered "Upcoming Games" section with four image cards carrying centered overlay titles.

### `RecentUpdate`
The system SHALL render a tabbed "Recent Update" area with three tabs and matching image+text panes.

### `Gallery`
The system SHALL render a "Screens Gallery" section with four images that open in a lightbox.

### `Testimonials`
The system SHALL render a centered testimonial carousel with star ratings.

### `Pricing`
The system SHALL render a "Pricing Plans" row with three gradient cards, the middle one highlighted.

### `Faq`
The system SHALL render a "Frequently Asked Questions" list of six accordion items.

### `Blog`
The system SHALL render a "Latest Blog Posts" row with three blog cards.

### `Newsletter`
The system SHALL render a cyan→mint gradient newsletter band with a pill email input and a subscribe button.

### `Footer`
The system SHALL render a dark-purple gradient footer with four link columns and a copyright bar.

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
- **Provenance ban.** No file under `apps/gambit/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/gambit/public/CNAME` = `gambit.free.componentdock.com`
  and the package `homepage` = `https://gambit.free.componentdock.com`.
