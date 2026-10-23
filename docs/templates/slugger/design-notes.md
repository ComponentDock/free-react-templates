# Slugger — Design Notes

Reference: **Phoenix** — `https://colorlib.com/wp/template/phoenix/`  
Live preview: `https://preview.colorlib.com/theme/phoenix/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/phoenix-free-template.jpg  
Shipped: https://slugger.free.componentdock.com

Slugger is a single-page baseball-club / match-center website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Phoenix" design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato**, **Lato:wght@300;400;700**, **Oswald**

## Design tokens (`apps/slugger/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#00bd56` | brand |
| `--color-accent` | `#207dff` | accent |
| `--color-dark` | `#171b21` | dark |
| `--color-gold` | `#fdd043` | gold |
| `--color-night` | `#000000` | night |
| `--color-muted` | `#999999` | muted |
| `--color-primary-50` | `#eafaf1` | primary 50 |
| `--color-primary-100` | `#cdf3de` | primary 100 |
| `--color-primary-200` | `#9ce8bf` | primary 200 |
| `--color-primary-300` | `#63db9b` | primary 300 |
| `--color-primary-400` | `#2fce7a` | primary 400 |
| `--color-primary-500` | `#00bd56` | primary 500 |
| `--color-primary-600` | `#00bd56` | primary 600 |
| `--color-primary-700` | `#00a34a` | primary 700 |
| `--color-primary-800` | `#00823b` | primary 800 |
| `--color-primary-900` | `#00632d` | primary 900 |
| `--font-sans` | `'Lato', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Oswald', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `MatchStrip` | Upcoming match strip | see fidelity note below |
| 4 | `Scoreboard` | Scoreboard | see fidelity note below |
| 5 | `GameSchedule` | Game schedule carousel | see fidelity note below |
| 6 | `Highlights` | Video highlights | see fidelity note below |
| 7 | `About` | About section | see fidelity note below |
| 8 | `NextMatch` | Next match preview | see fidelity note below |
| 9 | `TeamSquad` | Team squad carousel | see fidelity note below |
| 10 | `Services` | Services | see fidelity note below |
| 11 | `Testimonials` | Testimonial carousel | see fidelity note below |
| 12 | `News` | Recent news | see fidelity note below |
| 13 | `Counters` | Counters | see fidelity note below |
| 14 | `Subscribe` | Subscribe | see fidelity note below |
| 15 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main · Slugger · Buy Ticket

### `Hero`
The system SHALL render a full-height hero with a photo background, an overlay, a large uppercase headline, a paragraph, and two buttons ("Watch match" blue, "Get ticket" green).

### `MatchStrip`
The system SHALL render a dark full-width strip with two teams, a league label, a live countdown, and a green "Buy Tickets" button.

### `Scoreboard`
The system SHALL render a scoreboard section on a skewed diagonal split background with a heading, two teams with scores, and a "Game Report" link.

### `GameSchedule`
The system SHALL render a game schedule section with a heading and a carousel of schedule cards, each with two team logos, a venue, a date, and a "Watch Game" link.

### `Highlights`
The system SHALL render a video highlights block with a large rounded image and a centered play button.

### `About`
The system SHALL render an about section on a photo background with the diagonal slash treatment, a heading, paragraphs, a "Watch Game" link, and an image.

### `NextMatch`
The system SHALL render a "Next Match" section with a heading, a large image, and four schedule cards.

### `TeamSquad`
The system SHALL render a dark team section with the diagonal slash treatment, a heading, and a carousel of player cards (photo, name, position).

### `Services`
The system SHALL render a light services section with four blocks, each with a green icon, an uppercase title, and a description.

### `Testimonials`
The system SHALL render a testimonials section with a dark overlay, a heading, and a carousel of testimonial cards (avatar, quote, name, role).

### `News`
The system SHALL render a blog section with a heading and four news cards, each with an image, a date block, a title, a snippet, and a "More Details" link.

### `Counters`
The system SHALL render a counter strip with four animated count-up stats and labels.

### `Subscribe`
The system SHALL render a subscribe section on a photo background with a heading, text, an email input, and a green submit button.

### `Footer`
The system SHALL render a black footer with five link widgets, contact details, and a copyright row crediting Component Dock.

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
- **Provenance ban.** No file under `apps/slugger/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/slugger/public/CNAME` = `slugger.free.componentdock.com`
  and the package `homepage` = `https://slugger.free.componentdock.com`.
