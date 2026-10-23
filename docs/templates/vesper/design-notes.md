# Vesper — Design Notes

Reference: **Christian** — `https://colorlib.com/wp/template/christian/`  
Live preview: `https://preview.colorlib.com/theme/christian/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/christian-free-template.jpg  
Shipped: https://vesper.free.componentdock.com

Vesper is a church / ministry landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Christian" design (https://colorlib.com/wp/template/christian/), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Great Vibes**, **Lora**, **Open Sans**

## Design tokens (`apps/vesper/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fffbe6` | primary 50 |
| `--color-primary-100` | `#fff3b3` | primary 100 |
| `--color-primary-200` | `#ffe980` | primary 200 |
| `--color-primary-300` | `#ffdf4d` | primary 300 |
| `--color-primary-400` | `#ffd91f` | primary 400 |
| `--color-primary-500` | `#ffd615` | primary 500 |
| `--color-primary-600` | `#f0c400` | primary 600 |
| `--color-primary-700` | `#d9af00` | primary 700 |
| `--color-primary-800` | `#b89200` | primary 800 |
| `--color-primary-900` | `#8a6d00` | primary 900 |
| `--color-gold` | `#ffd615` | Brand gold — hero "Jesus" span, service icons, quote mark, buttons |
| `--color-gold-dark` | `#d9af00` | gold dark |
| `--color-accent` | `#033fff` | Secondary blue — .btn-secondary / accent pills |
| `--color-footer` | `#1b1919` | Dark charcoal footer background |
| `--color-section-bg` | `#f8f9fa` | Light grey section background (bg-light in the source) |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | Open Sans (body + nav) · Lora (serif headings) · Great Vibes (logo) |
| `--font-serif` | `'Lora', Georgia, serif` | font serif |
| `--font-script` | `'Great Vibes', cursive` | font script |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `CounterBand` | Counter band | see fidelity note below |
| 5 | `ServicesGrid` | Services grid | see fidelity note below |
| 6 | `SermonsSlider` | Sermons carousel | see fidelity note below |
| 7 | `Events` | Events section | see fidelity note below |
| 8 | `Causes` | Causes section | see fidelity note below |
| 9 | `DailyVerse` | Daily verse band | see fidelity note below |
| 10 | `Blog` | Blog section | see fidelity note below |
| 11 | `PastorGrid` | Pastor section | see fidelity note below |
| 12 | `Contact` | Contact section | see fidelity note below |
| 13 | `Gallery` | Gallery | see fidelity note below |
| 14 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a transparent navigation bar that becomes a fixed white bar with a shadow on scroll.

### `Hero`
The system SHALL render a full-width photo hero with an overlay, headline, subtext and two call-to-action buttons.

### `About`
The system SHALL render a split about section with a photo and copy.

### `CounterBand`
The system SHALL render a band with four statistics.

### `ServicesGrid`
The system SHALL render a centered icon grid of church services.

### `SermonsSlider`
The system SHALL render a light-background carousel of sermon slides with Watch and Download actions.

### `Events`
The system SHALL render a photo heading band and a list of event cards.

### `Causes`
The system SHALL render a grid of cause cards with progress and Donate actions.

### `DailyVerse`
The system SHALL render a dark photo band with the church icon, the verse and its citation.

### `Blog`
The system SHALL render three blog cards on a light background.

### `PastorGrid`
The system SHALL render a team grid of four pastors.

### `Contact`
The system SHALL render contact info columns and a contact form.

### `Gallery`
The system SHALL render a photo gallery with hover/zoom interaction.

### `Footer`
The system SHALL render a dark four-column footer with attribution.

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
- **Provenance ban.** No file under `apps/vesper/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/vesper/public/CNAME` = `vesper.free.componentdock.com`
  and the package `homepage` = `https://vesper.free.componentdock.com`.
