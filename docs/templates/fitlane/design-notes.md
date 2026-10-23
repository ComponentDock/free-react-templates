# Fitlane — Design Notes

Reference: **Sportify** — `https://colorlib.com/wp/template/sportify/`  
Live preview: `https://preview.colorlib.com/theme/sportify/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/sportify-free-template.jpg  
Shipped: https://fitlane.free.componentdock.com

Fitlane is a single-page gym/fitness landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;600;700**

## Design tokens (`apps/fitlane/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fff0f2` | primary 50 |
| `--color-primary-100` | `#ffdde1` | primary 100 |
| `--color-primary-200` | `#ffb5be` | primary 200 |
| `--color-primary-300` | `#ff7a8a` | primary 300 |
| `--color-primary-400` | `#ff4359` | primary 400 |
| `--color-primary-500` | `#ff0e3b` | primary 500 |
| `--color-primary-600` | `#e6002e` | primary 600 |
| `--color-primary-700` | `#b30024` | primary 700 |
| `--color-primary-800` | `#80001a` | primary 800 |
| `--color-primary-900` | `#4d000f` | primary 900 |
| `--color-navy-500` | `#190a49` | Dark navy background (#190a49). |
| `--color-navy-600` | `#140840` | navy 600 |
| `--color-navy-700` | `#0f0630` | navy 700 |
| `--color-navy-800` | `#0a0420` | navy 800 |
| `--color-navy-900` | `#050210` | navy 900 |
| `--color-accent-400` | `#9b4dff` | Purple accent (#7800ff). |
| `--color-accent-500` | `#7800ff` | accent 500 |
| `--color-accent-600` | `#6200cc` | accent 600 |
| `--color-accent-700` | `#4c0099` | accent 700 |
| `--color-smoke` | `#a5a5a5` | Muted copy colors. |
| `--color-muted` | `#909090` | muted |
| `--color-ink` | `#2c2c2c` | Text. |
| `--color-gradient-start` | `rgba(120, 0, 255, 0.34)` | Gradient overlay — purple to red at 34% opacity. |
| `--color-gradient-end` | `rgba(255, 14, 59, 0.34)` | gradient end |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | Fonts — Open Sans (headings + body). |
| `--font-display` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Header / Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `IntroFeatures` | Intro (Features) section | see fidelity note below |
| 4 | `About` | About section | see fidelity note below |
| 5 | `Quote` | Quote section | see fidelity note below |
| 6 | `CTA` | CTA (Call to Action) section | see fidelity note below |
| 7 | `Classes` | Classes section | see fidelity note below |
| 8 | `Pricing` | Pricing section | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a fixed-top header with the site name "Fitlane", navigation links, social icons, and a hamburger menu for mobile.

### `Hero`
The system SHALL render a full-width hero section with a background image, gradient overlay, subtitle, title, and a CTA button.

### `IntroFeatures`
The system SHALL render a three-column feature intro section with icons, titles, and descriptions.

### `About`
The system SHALL render a two-column about section with text content on the left and an image on the right.

### `Quote`
The system SHALL render a full-width centered quote section with attribution.

### `CTA`
The system SHALL render a two-column call-to-action section with an image on the left and content with checklist and buttons on the right.

### `Classes`
The system SHALL render a horizontal slider with at least three class cards.

### `Pricing`
The system SHALL render a pricing section with a parallax background and three pricing tiers.

### `Footer`
The system SHALL render a footer with contact columns and a copyright bar.

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
- **Provenance ban.** No file under `apps/fitlane/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/fitlane/public/CNAME` = `fitlane.free.componentdock.com`
  and the package `homepage` = `https://fitlane.free.componentdock.com`.
