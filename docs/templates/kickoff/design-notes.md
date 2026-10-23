# Kickoff — Design Notes

Reference: **Knights** — `https://colorlib.com/wp/template/knights/`  
Live preview: `https://preview.colorlib.com/theme/knights/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/knights-free-template.jpg  
Shipped: https://kickoff.free.componentdock.com

Kickoff is a single-page sports-club landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Knights" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Nunito Sans**, **Nunito Sans:ital,opsz,wght@0,6..12,300;0,6..12,400;0,6..12,700;0,6..12,800;0,6..12,900;1,6..12,400**

## Design tokens (`apps/kickoff/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-gold` | `#ffb400` | gold |
| `--color-periwinkle` | `#6b75ff` | periwinkle |
| `--color-sky` | `#59b7ff` | sky |
| `--color-slate` | `#232931` | slate |
| `--color-mist` | `#f8f9fa` | mist |
| `--color-ink` | `#212529` | ink |
| `--color-muted` | `#6c757d` | muted |
| `--font-sans` | `'Nunito Sans', ui-sans-serif, system-ui, sans-serif` | Nunito Sans for everything (Google Fonts via index.html). |
| `--font-heading` | `'Nunito Sans', ui-sans-serif, system-ui, sans-serif` | font heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero cover | see fidelity note below |
| 3 | `EventBar` | Event bar with countdown | see fidelity note below |
| 4 | `GameReport` | Game report scoreboard | see fidelity note below |
| 5 | `GameSchedule` | Game schedule | see fidelity note below |
| 6 | `Services` | Services section | see fidelity note below |
| 7 | `Team` | Team squad carousel | see fidelity note below |
| 8 | `About` | About and counters | see fidelity note below |
| 9 | `Testimonial` | Testimonial section | see fidelity note below |
| 10 | `Blog` | — | no dedicated spec block |
| 11 | `Subscribe` | Subscribe form | see fidelity note below |
| 12 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a navbar with the brand in a dark box, the menu links, and a "Buy Ticket" CTA button.

### `Hero`
The system SHALL render a fullscreen hero with a background image, dark overlay, headline, subtext, and a "Watch Games" play link.

### `EventBar`
The system SHALL render a dark floating bar with the upcoming matchups, a countdown timer, and a "Buy Tickets" button.

### `GameReport`
The system SHALL render a "Game Report" section with a scoreboard of the last match and a highlights link.

### `GameSchedule`
The system SHALL render a "Game Schedule" section listing upcoming matches as carousel cards.

### `Services`
The system SHALL render a light-gray (#f8f9fa) section with four service cards.

### `Team`
The system SHALL render a background-image section with the squad heading and a player carousel.

### `About`
The system SHALL render an about section with club copy and four animated stat counters.

### `Testimonial`
The system SHALL render a background-image section with a quote carousel.

### `Blog`
*anchors only* — Recent news

### `Subscribe`
The system SHALL render a background-image subscribe band with an email form.

### `Footer`
The system SHALL render a dark footer with brand info, contact details, link columns, and a copyright bar.

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
- **Provenance ban.** No file under `apps/kickoff/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/kickoff/public/CNAME` = `kickoff.free.componentdock.com`
  and the package `homepage` = `https://kickoff.free.componentdock.com`.
