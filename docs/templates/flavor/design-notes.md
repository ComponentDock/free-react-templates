# Flavor — Design Notes

Reference: **Luto** — `https://colorlib.com/wp/template/luto/`  
Live preview: `https://preview.colorlib.com/theme/luto/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/luto-free-template.jpg  
Shipped: https://flavor.free.componentdock.com

A Restaurant Website template with header with navigation, info bar with contact, about, parallax introduction and tabbed menu sections.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lora**, **Lora:wght@400;700**, **Poppins**

## Design tokens (`apps/flavor/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff6107` | brand |
| `--color-ink` | `#404044` | ink |
| `--color-body-grey` | `#636363` | body grey |
| `--color-section` | `#f8f9fa` | section |
| `--color-overlay` | `rgba(0, 0, 0, 0.5)` | overlay |
| `--color-footer-bg` | `#404044` | footer bg |
| `--font-heading` | `'Lora', Georgia, serif` | font heading |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header with navigation | see fidelity note below |
| 2 | `Hero` | Hero section with call-to-action | see fidelity note below |
| 3 | `InfoBar` | Info bar with contact details | see fidelity note below |
| 4 | `About` | About section | see fidelity note below |
| 5 | `Specialties` | Specialties section | see fidelity note below |
| 6 | `ParallaxIntro` | Parallax introduction | see fidelity note below |
| 7 | `Testimonials` | Testimonials | see fidelity note below |
| 8 | `Menu` | Tabbed menu | see fidelity note below |
| 9 | `Reservation` | Reservation form | see fidelity note below |
| 10 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Header`
Users SHALL see a fixed transparent navbar with the brand name "Flavor" and navigation links (Home, About, Specialties, Menu, Reservation, Contact).

### `Hero`
Users SHALL see a full-screen hero banner with a background image, heading "Special & Fresh Food", description text, and a "Book a table" CTA button.

### `InfoBar`
Users SHALL see a 4-column info bar with Address, Opening Time, Phone, and Email, each with a lucide icon.

### `About`
Users SHALL see a two-column about section with "Welcome to Flavor" heading, description, and two food images.

### `Specialties`
Users SHALL see a "Our Delicious Specialties" section with three dish cards showing images and titles.

### `ParallaxIntro`
Users SHALL see a parallax background section with "Foods you love to taste" heading and a "Watch Video" button.

### `Testimonials`
Users SHALL see a "Our Customer Says" section with testimonial blockquotes on a parallax background.

### `Menu`
Users SHALL see a menu section with tabs (Main, Desserts, Drinks) showing dish items with images, prices, and categories.

### `Reservation`
Users SHALL see a reservation form with name, email, phone, date, time, and person count fields.

### `Footer`
Users SHALL see a footer with 4 columns (About, Latest Blog, Instagram, Newsletter) and a copyright line linking to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/flavor/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/flavor/public/CNAME` = `flavor.free.componentdock.com`
  and the package `homepage` = `https://flavor.free.componentdock.com`.
