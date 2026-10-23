# Bolt — Design Notes

Reference: **Xgym** — `https://colorlib.com/wp/template/xgym/`  
Live preview: `https://preview.colorlib.com/theme/xgym/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/xgym-free-template.jpg  
Shipped: https://bolt.free.componentdock.com

Bolt is a single-page gym / fitness-club website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **PT Sans**, **PT Sans:wght@400;700**

## Design tokens (`apps/bolt/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#fcff18` | brand |
| `--color-brand-dark` | `#e3e60f` | brand dark |
| `--color-ink` | `#353535` | Ink — dark text/headings (#353535 / #242424 from the original). |
| `--color-ink-dark` | `#242424` | ink dark |
| `--color-muted` | `#b5babc` | Muted — footer/secondary text (#b5babc / #d1d1d1 from the original). |
| `--color-primary-50` | `#feffd9` | primary 50 |
| `--color-primary-100` | `#fdffb3` | primary 100 |
| `--color-primary-200` | `#fcff85` | primary 200 |
| `--color-primary-300` | `#fcff58` | primary 300 |
| `--color-primary-400` | `#fcff2b` | primary 400 |
| `--color-primary-500` | `#fcff18` | primary 500 |
| `--color-primary-600` | `#e3e60f` | primary 600 |
| `--color-primary-700` | `#b9bc08` | primary 700 |
| `--color-primary-800` | `#8f9106` | primary 800 |
| `--color-primary-900` | `#656704` | primary 900 |
| `--font-sans` | `'PT Sans', ui-sans-serif, system-ui, sans-serif` | Original font: "PT Sans" (400/700). |
| `--font-display` | `'PT Sans', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header with nav and address box | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Features` | Features section | see fidelity note below |
| 4 | `DiscountBand` | Discount band | see fidelity note below |
| 5 | `Milestones` | Milestones | see fidelity note below |
| 6 | `Trainers` | Trainers section | see fidelity note below |
| 7 | `BmiCalculator` | BMI calculator | see fidelity note below |
| 8 | `Newsletter` | Newsletter section | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a header with the site logo "Bolt", five anchor links, a yellow address box, and a hamburger trigger on small screens that opens a mobile menu.

### `Hero`
The system SHALL render a hero with a dark background photo, a two-line white headline with a neon-yellow highlighted phrase, and a yellow CTA button.

### `Features`
The system SHALL render a features section with a highlighted heading and three circular icon cards.

### `DiscountBand`
The system SHALL render a dark full-width band with a discount heading, a three-item checklist, and a "Become a Member" button.

### `Milestones`
The system SHALL render a light-background milestones band with four yellow number chips and captions.

### `Trainers`
The system SHALL render a "Meet the Trainers" section with four cards, each with a circular photo, a name, and a bio.

### `BmiCalculator`
The system SHALL render a BMI section with a dark calculator panel holding weight and height inputs, a Calculate button, and a read-only result field, and SHALL compute the BMI on submit.

### `Newsletter`
The system SHALL render a dark newsletter band with a "Subscribe to newsletter" heading and an email input with a Subscribe button.

### `Footer`
The system SHALL render a dark footer with four widgets (Location, Subscriptions, E-mail, Social Media) and a copyright line linking to Component Dock.

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
- **Provenance ban.** No file under `apps/bolt/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/bolt/public/CNAME` = `bolt.free.componentdock.com`
  and the package `homepage` = `https://bolt.free.componentdock.com`.
