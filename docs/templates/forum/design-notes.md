# Forum — Design Notes

Reference: **Conference** — `https://colorlib.com/wp/template/conference/`  
Live preview: `https://preview.colorlib.com/theme/conference/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/conference-free-template.jpg  
Shipped: https://forum.free.componentdock.com

Forum recreates the ColorLib "Conference" conference template under a new name. It is a single-page conference/event landing site with sticky navbar, hero with background image overlay, video/about sections, speakers carousel, schedule table, pricing cards, brand logos, call-to-action, and dark footer with Component Dock branding.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/forum/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#8ab92d` | Forum brand colors — green accent #8ab92d, dark navy #04091e, dark gray #222. |
| `--color-brand-hover` | `#76a025` | brand hover |
| `--color-body` | `#777` | Body + muted text. |
| `--color-muted` | `#999` | muted |
| `--color-dark` | `#04091e` | Dark sections. |
| `--color-dark-alt` | `#222` | dark alt |
| `--color-light` | `#f9f9ff` | Light background. |
| `--color-heading` | `#222` | Heading color. |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar is sticky and responsive | see fidelity note below |
| 2 | `Hero` | Hero displays conference information | see fidelity note below |
| 3 | `VideoAbout` | — | no dedicated spec block |
| 4 | `DarkAbout` | — | no dedicated spec block |
| 5 | `VideoSection` | Speakers section shows speaker cards | see fidelity note below |
| 6 | `Speakers` | Speakers section shows speaker cards | see fidelity note below |
| 7 | `Schedule` | Schedule table displays sessions | see fidelity note below |
| 8 | `Pricing` | Pricing shows 4 tier cards | see fidelity note below |
| 9 | `BrandLogos` | — | no dedicated spec block |
| 10 | `CTA` | — | no dedicated spec block |
| 11 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The navbar SHALL be fixed at the top with transparent-to-dark scroll effect and mobile hamburger menu.

### `Hero`
The hero section SHALL show the conference title, date, and location over a dark overlay background.

### `VideoAbout`
*anchors only* — Play video · Tutorial for beginner · We Telecast our Coffee Making Live · Watch our live coffee making session and learn the art of brewing the perfect cup.

### `DarkAbout`
*anchors only* — Our Conference Provides Great Support · Get the best experience with our dedicated support team available around the clock.

### `VideoSection`
The speakers section SHALL display speaker cards with image, name, description, contact info, and social links.

### `Speakers`
The speakers section SHALL display speaker cards with image, name, description, contact info, and social links.

### `Schedule`
The schedule section SHALL show a table with session, speaker, venue, and time columns.

### `Pricing`
The pricing section SHALL display 4 pricing cards (Economy, Business, Premium, Exclusive) with feature lists and buy buttons.

### `BrandLogos`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `CTA`
*anchors only* — Huge Transaction in last Week · Become a Member

### `Footer`
The footer SHALL contain a link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/forum/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/forum/public/CNAME` = `forum.free.componentdock.com`
  and the package `homepage` = `https://forum.free.componentdock.com`.
