# Zen — Design Notes

Reference: **Namaste** — `https://colorlib.com/wp/template/namaste/`  
Live preview: `https://preview.colorlib.com/theme/namaste/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/namaste-free-template.jpg  
Shipped: https://zen.free.componentdock.com

Zen is a single-page yoga and meditation studio website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@400;500;600;700**

## Design tokens (`apps/zen/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-zen-purple` | `#493365` | zen purple |
| `--color-zen-muted` | `#938e99` | zen muted |
| `--color-zen-yellow` | `#f7ffa0` | zen yellow |
| `--color-zen-gradient-from` | `#7364b0` | zen gradient from |
| `--color-zen-gradient-to` | `#ffb8e7` | zen gradient to |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar renders navigation links | see fidelity note below |
| 2 | `Hero` | Hero section displays main heading and CTA | see fidelity note below |
| 3 | `Courses` | Courses section shows three yoga disciplines | see fidelity note below |
| 4 | `Meditation` | Meditation section has CTA | see fidelity note below |
| 5 | `Timetable` | Timetable shows working hours and progress | see fidelity note below |
| 6 | `Testimonial` | Testimonial displays a quote | see fidelity note below |
| 7 | `Contact` | Contact section shows info | see fidelity note below |
| 8 | `Gallery` | Gallery renders images | see fidelity note below |
| 9 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a fixed navbar with logo and navigation links (Home, About Us, Classes, Blog, Contact) and a mobile hamburger toggle.

### `Hero`
The template SHALL display a full-width hero with background image, heading "Find your inner CHI", description text, and a "Discover" button.

### `Courses`
The template SHALL display a 3-column grid of course cards for Yoga, Hatha, and Pilates with icons and descriptions.

### `Meditation`
The template SHALL display a meditation sessions section with background image, descriptive text, and a "Discover" CTA.

### `Timetable`
The template SHALL display working hours for Monday through Sunday and skill progress bars for Breathing, Meditation, and Flexibility.

### `Testimonial`
The template SHALL display a testimonial section with a quote from a named person.

### `Contact`
The template SHALL display a contact section with address, phone number, and email.

### `Gallery`
The template SHALL display a horizontal scrolling gallery of images.

### `Footer`
The template SHALL display a gradient footer with a link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/zen/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/zen/public/CNAME` = `zen.free.componentdock.com`
  and the package `homepage` = `https://zen.free.componentdock.com`.
