# Confetti — Design Notes

Reference: **Eventz** — `https://colorlib.com/wp/template/eventz/`  
Live preview: `https://preview.colorlib.com/theme/eventz/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/evento-free-template-1.jpg  
Shipped: https://confetti.free.componentdock.com

A Digital Conference template with hero, countdown, about, gallery, pricing and sponsors sections. Provide a free React recreation of the ColorLib "Eventz" digital conference template, featuring a hero with countdown, about section, gallery, pricing cards, sponsors, blog posts, and a branded footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700**, **Sarabun**

## Design tokens (`apps/confetti/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#331391` | brand |
| `--color-brand-dark` | `#2e0e8c` | brand dark |
| `--color-ink` | `#26264b` | Ink — dark navy headings (#26264b from the original). |
| `--color-ink-dark` | `#1a1a3a` | ink dark |
| `--color-paper` | `#f8f8ff` | Paper — light section background. |
| `--color-mist` | `#999999` | Mist — muted body text (#999999 from the original). |
| `--color-primary-50` | `#f0ecff` | primary 50 |
| `--color-primary-100` | `#ddd6ff` | primary 100 |
| `--color-primary-200` | `#bbb0ff` | primary 200 |
| `--color-primary-300` | `#9688ff` | primary 300 |
| `--color-primary-400` | `#6b55ff` | primary 400 |
| `--color-primary-500` | `#331391` | primary 500 |
| `--color-primary-600` | `#2e0e8c` | primary 600 |
| `--color-primary-700` | `#250b7a` | primary 700 |
| `--color-primary-800` | `#1c0868` | primary 800 |
| `--color-primary-900` | `#140556` | primary 900 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Fonts: Sarabun (headings) + Roboto (body) — matching the original. |
| `--font-display` | `'Sarabun', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar renders navigation and CTA | see fidelity note below |
| 2 | `Hero` | Hero displays conference headline and actions | see fidelity note below |
| 3 | `Countdown` | Countdown shows time units | see fidelity note below |
| 4 | `About` | About section shows conference details | see fidelity note below |
| 5 | `Gallery` | Gallery displays images | see fidelity note below |
| 6 | `Pricing` | Pricing shows three tiers | see fidelity note below |
| 7 | `Sponsors` | Sponsors section shows brand logos | see fidelity note below |
| 8 | `Blog` | Blog section shows posts | see fidelity note below |
| 9 | `Footer` | Footer contains Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The navbar SHALL display navigation links (Home, About, Speakers, Schedule, Blog, Contact) and a "Get Your Ticket" CTA button. On mobile, a hamburger menu toggles the nav links.

### `Hero`
The hero section SHALL display "Committed to success" subtitle, "Digital Conference For Designers" heading, a Download button, and a play video icon.

### `Countdown`
The countdown section SHALL display four time unit circles: Days, Hours, Min, Sec with numeric values.

### `About`
The about section SHALL display "The Biggest Digital Conference" heading, Where/When info cards, a "Get Your Ticket" button, and an image.

### `Gallery`
The gallery SHALL display 5 placeholder images in a grid layout.

### `Pricing`
The pricing section SHALL display 3 pricing cards with day labels, prices, feature lists, and "View Details" buttons.

### `Sponsors`
The sponsors section SHALL display "Our Top General Sponsors" heading and 6 sponsor logo placeholders on a dark purple background.

### `Blog`
The blog section SHALL display 2 blog cards with images, date overlays, categories, titles, and "Read more" links.

### `Footer`
The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock". It SHALL include About Us, Contact Info, Important Links, Newsletter sections, and stats.

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
- **Provenance ban.** No file under `apps/confetti/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/confetti/public/CNAME` = `confetti.free.componentdock.com`
  and the package `homepage` = `https://confetti.free.componentdock.com`.
