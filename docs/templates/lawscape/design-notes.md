# Lawscape — Design Notes

Reference: **Lawride** — `https://colorlib.com/wp/template/lawride/`  
Live preview: `https://preview.colorlib.com/theme/lawride/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/lawride-free-template.jpg  
Shipped: https://lawscape.free.componentdock.com

Recreate ColorLib Lawride as a faithful React landing page for a law firm, using the original as the design reference.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lora**, **Lora:wght@400;500;600;700**, **Roboto**

## Design tokens (`apps/lawscape/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fef3ec` | primary 50 |
| `--color-primary-100` | `#fddcc5` | primary 100 |
| `--color-primary-200` | `#f9b88b` | primary 200 |
| `--color-primary-300` | `#f48f4e` | primary 300 |
| `--color-primary-400` | `#e87028` | primary 400 |
| `--color-primary-500` | `#de6320` | primary 500 |
| `--color-primary-600` | `#c2581e` | primary 600 |
| `--color-primary-700` | `#a04a1a` | primary 700 |
| `--color-primary-800` | `#7d3b15` | primary 800 |
| `--color-primary-900` | `#5a2b10` | primary 900 |
| `--color-dark-bar` | `#0f0f16` | Dark backgrounds |
| `--color-light-bg` | `#f7f7f7` | Light background |
| `--color-ink` | `#222222` | Text colors |
| `--color-smoke` | `#777777` | smoke |
| `--font-heading` | `'Lora', Georgia, 'Times New Roman', serif` | Lora (headings) + Roboto (body) via Google Fonts <link> in index.html |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `HeaderTop` | HeaderTop displays contact information and social links | see fidelity note below |
| 2 | `Navbar` | Navbar renders with logo and navigation links | see fidelity note below |
| 3 | `Hero` | Hero displays headline and call-to-action | see fidelity note below |
| 4 | `StatsCounter` | Statistics counter displays four metric cards | see fidelity note below |
| 5 | `About` | About section shows video placeholder and description | see fidelity note below |
| 6 | `PracticeAreas` | Practice areas section shows four area cards | see fidelity note below |
| 7 | `Testimonials` | Testimonials section renders client reviews | see fidelity note below |
| 8 | `Team` | Team section shows four attorney cards | see fidelity note below |
| 9 | `CTA` | CTA section displays evaluation prompt | see fidelity note below |
| 10 | `Blog` | Blog section shows latest posts | see fidelity note below |
| 11 | `Newsletter` | Newsletter section with email subscription form | see fidelity note below |
| 12 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `HeaderTop`
The template SHALL display a dark header top bar with phone number, email address, and social media icon links. The bar SHALL be hidden on mobile viewports.

### `Navbar`
The template SHALL display a sticky orange navbar with the "Lawscape" logo text and navigation links: Home, About, Services, Practice Areas, Team, Blog, Contact. The navbar SHALL include a mobile hamburger menu toggle.

### `Hero`
The template SHALL display a full-width hero section with a dark image overlay, a centered headline about understanding client intention, and a "Make an Appointment" CTA button linking to the contact section.

### `StatsCounter`
The template SHALL display four statistics cards showing lawyer count, successful cases, satisfied clients, and personal cases, with numbers and labels.

### `About`
The template SHALL display an about section with a side-by-side layout containing a video placeholder image and descriptive text with a "Learn More" button.

### `PracticeAreas`
The template SHALL display four practice area cards (Employment Law, Personal Injury, Family Law, Bank & Financial) with images, hover overlays, and a "View All Practices" button.

### `Testimonials`
The template SHALL display client testimonials with names, roles, review text, and profile images on a light background.

### `Team`
The template SHALL display four attorney cards with photo, name, specialization, and social media links.

### `CTA`
The template SHALL display a dark-background call-to-action section with a "Free Case Evaluation" heading and a "Contact us Now" button.

### `Blog`
The template SHALL display three blog post cards with images, titles, dates, comment counts, excerpts, and "Read More" links.

### `Newsletter`
The template SHALL display a newsletter section with About, Navigation Links, Newsletter (with email input), and InstaFeed columns.

### `Footer`
The template SHALL display a footer with a copyright line that includes a link to https://www.componentdock.com/ branded as "Component Dock", and social media icons.

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
- **Provenance ban.** No file under `apps/lawscape/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/lawscape/public/CNAME` = `lawscape.free.componentdock.com`
  and the package `homepage` = `https://lawscape.free.componentdock.com`.
