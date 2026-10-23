# Lotus — Design Notes

Reference: **Yoga** — `https://colorlib.com/wp/template/yoga/`  
Live preview: `https://preview.colorlib.com/theme/yoga/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/yoga-free-template.jpg  
Shipped: https://lotus.free.componentdock.com

Lotus is a single-page yoga/fitness website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Quicksand**, **Quicksand:wght@300;400;500;600;700**

## Design tokens (`apps/lotus/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#79efb4` | brand |
| `--color-brand-dark` | `#57eba1` | brand dark |
| `--color-ink` | `#404044` | Ink — dark headings and footer background (#404044 from the original). |
| `--color-muted` | `#6c757d` | Muted — secondary text (#6c757d from the original). |
| `--color-mist` | `#f8f9fa` | Mist — light section background (#f8f9fa from the original). |
| `--color-primary-50` | `#eafcf2` | primary 50 |
| `--color-primary-100` | `#d4f9e5` | primary 100 |
| `--color-primary-200` | `#a9f4cb` | primary 200 |
| `--color-primary-300` | `#7deeb1` | primary 300 |
| `--color-primary-400` | `#63ec9f` | primary 400 |
| `--color-primary-500` | `#79efb4` | primary 500 |
| `--color-primary-600` | `#79efb4` | primary 600 |
| `--color-primary-700` | `#57eba1` | primary 700 |
| `--color-primary-800` | `#2fdc85` | primary 800 |
| `--color-primary-900` | `#1faf67` | primary 900 |
| `--font-sans` | `'Quicksand', ui-sans-serif, system-ui, sans-serif` | Original font: "Quicksand" (300/400/500/600/700). |
| `--font-display` | `'Quicksand', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Full-height hero slider | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Services` | Services grid | see fidelity note below |
| 5 | `Classes` | Classes showcase | see fidelity note below |
| 6 | `Trainers` | Trainer cards | see fidelity note below |
| 7 | `Testimonials` | Testimonial carousel | see fidelity note below |
| 8 | `Pricing` | Pricing cards | see fidelity note below |
| 9 | `Schedule` | Weekly class schedule | see fidelity note below |
| 10 | `Blog` | Blog cards | see fidelity note below |
| 11 | `Instagram` | Instagram gallery strip | see fidelity note below |
| 12 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Primary

### `Hero`
The system SHALL render a full-height image slider with two slides, each with a headline, supporting copy, and a two-button CTA pair, plus carousel indicator dots.

### `About`
The system SHALL render an about section below the hero with a centered paragraph introducing the studio's wellness philosophy.

### `Services`
The system SHALL render a "Explore our services" section with exactly three service cards, each with an icon, a title, and a description.

### `Classes`
The system SHALL render an "All in one Yoga classes" section with exactly three class cards and an "Explore our classes" button.

### `Trainers`
The system SHALL render a "Meet our trainers" section with exactly three trainer cards, each with a photo, name, role, description, and a "View class times" button.

### `Testimonials`
The system SHALL render a "Testimonial" section with at least one quote attributed to an author name and role.

### `Pricing`
The system SHALL render a "Pricing Plan" section with exactly three pricing cards, each with a plan name, price, "per class" label, and a "Book now" button.

### `Schedule`
The system SHALL render a "Classes Schedule" section with Monday rows, each showing a time, a class name, a description, and a "Join now" button.

### `Blog`
The system SHALL render an "Our Blog" section with four blog cards, each with an image, a date, an "Admin" byline, a title, and a "Read more" link.

### `Instagram`
The system SHALL render an "Instagram" section with a horizontal strip of square images.

### `Footer`
The system SHALL render a dark footer with the brand "Lotus", a "Contact Us" block with an email address, a copyright line, and a Component Dock link.

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
- **Provenance ban.** No file under `apps/lotus/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/lotus/public/CNAME` = `lotus.free.componentdock.com`
  and the package `homepage` = `https://lotus.free.componentdock.com`.
