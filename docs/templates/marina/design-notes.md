# Marina — Design Notes

Reference: **Waterboat** — `https://colorlib.com/wp/template/waterboat/`  
Live preview: `https://preview.colorlib.com/theme/waterboat/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/waterboat-free-template.jpg  
Shipped: https://marina.free.componentdock.com

Marina is a single-page yacht-charter/business website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Dancing Script**, **Muli**, **Oswald**, **Oswald:wght@400;700**

## Design tokens (`apps/marina/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#1089ff` | brand |
| `--color-light` | `#f8f9fa` | light |
| `--color-icon-circle` | `#efefef` | icon circle |
| `--color-ink` | `#000000` | ink |
| `--color-body` | `#6c757d` | body |
| `--color-foot` | `#6c757d` | foot |
| `--color-overlay` | `rgba(16, 137, 255, 0.8)` | overlay |
| `--font-heading` | `'Oswald', ui-sans-serif, system-ui, sans-serif` | font heading |
| `--font-serif` | `'Dancing Script', ui-serif, Georgia, serif` | font serif |
| `--font-body` | `'Muli', ui-sans-serif, system-ui, sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Top bar with brand and contact info | see fidelity note below |
| 2 | `Navbar` | Sticky navbar | see fidelity note below |
| 3 | `HeroSlider` | Hero slider with two slides | see fidelity note below |
| 4 | `WelcomeIntro` | Welcome intro | see fidelity note below |
| 5 | `Features` | Feature cards | see fidelity note below |
| 6 | `StatsBand` | Stats band | see fidelity note below |
| 7 | `Destinations` | Destinations grid | see fidelity note below |
| 8 | `BookingForm` | Booking form | see fidelity note below |
| 9 | `Team` | Team carousel | see fidelity note below |
| 10 | `Testimonials` | Testimonials | see fidelity note below |
| 11 | `ContactCta` | Contact CTA | see fidelity note below |
| 12 | `CtaBanner` | CTA banner | see fidelity note below |
| 13 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `TopBar`
The system SHALL render a light top bar above the navbar with the site logo on the left and three contact blocks on the right.

### `Navbar`
The system SHALL render a brand-blue sticky navbar with six uppercase white links and a visible active-link indicator.

### `HeroSlider`
The system SHALL render a full-screen hero carousel with two slides, each with a headline, paragraph and CTA, plus dash-style indicators.

### `WelcomeIntro`
The system SHALL render an intro section with a heading, two paragraphs and a "Learn More" action.

### `Features`
The system SHALL render three feature cards, each with a circular icon, a title and a description.

### `StatsBand`
The system SHALL render a parallax band with a blue overlay and five white-numbered counters with labels.

### `Destinations`
The system SHALL render a light-grey section with a heading and six destination cards, each with a photo, name, dates and a price chip.

### `BookingForm`
The system SHALL render a "Book A Yacht" section with a labeled form and a submit action that shows a success state.

### `Team`
The system SHALL render an "Our Team" section with four person cards showing a photo, name, role and social icons.

### `Testimonials`
The system SHALL render a testimonials carousel with a heading, quotes and author attributions.

### `ContactCta`
The system SHALL render a contact section with a heading, a paragraph and a "Contact Us" action.

### `CtaBanner`
The system SHALL render a final parallax banner with a blue overlay, one paragraph and a "Learn More" button.

### `Footer`
The system SHALL render a light 4-column footer plus a copyright bar with the mandated Component Dock link.

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
- **Provenance ban.** No file under `apps/marina/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/marina/public/CNAME` = `marina.free.componentdock.com`
  and the package `homepage` = `https://marina.free.componentdock.com`.
