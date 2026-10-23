# Pixelate — Design Notes

Reference: **Calvin** — `https://colorlib.com/wp/template/calvin/`  
Live preview: `https://preview.colorlib.com/theme/calvin/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/calvin-free-template.jpg  
Shipped: https://pixelate.free.componentdock.com

Pixelate is a personal portfolio template for digital product designers. It showcases a designer's expertise, works, skills, testimonials, and blog posts with a clean, modern aesthetic.

## Typography

Fonts loaded by `index.html` (Google Fonts): **DM Sans**, **DM Sans:wght@400;500;700**, **Roboto Condensed**

## Design tokens (`apps/pixelate/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#6382e6` | brand |
| `--color-brand-dark` | `#4a6ad4` | brand dark |
| `--color-accent` | `#ff8553` | Accent — coral/orange (#FF8553). |
| `--color-accent-dark` | `#e06e3e` | accent dark |
| `--color-paper` | `#fbf9ff` | Paper — light section background (#fbf9ff). |
| `--color-ink` | `#000d21` | Ink — dark text (#000d21). |
| `--color-mist` | `#666666` | Mist — muted body text. |
| `--color-primary-50` | `#eef2fd` | primary 50 |
| `--color-primary-100` | `#d5defa` | primary 100 |
| `--color-primary-200` | `#b3c4f5` | primary 200 |
| `--color-primary-300` | `#8ba5ee` | primary 300 |
| `--color-primary-400` | `#6e8de8` | primary 400 |
| `--color-primary-500` | `#6382e6` | primary 500 |
| `--color-primary-600` | `#4a6ad4` | primary 600 |
| `--color-primary-700` | `#3a55b8` | primary 700 |
| `--color-primary-800` | `#2e4494` | primary 800 |
| `--color-primary-900` | `#263878` | primary 900 |
| `--font-sans` | `'DM Sans', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Roboto Condensed', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with navigation and CTA | see fidelity note below |
| 2 | `Hero` | Hero section with designer intro | see fidelity note below |
| 3 | `AboutInfo` | About info bar | see fidelity note below |
| 4 | `Services` | Services section with 4 cards | see fidelity note below |
| 5 | `Gallery` | Gallery section with hover overlay | see fidelity note below |
| 6 | `AboutMe` | About Me with skill bars | see fidelity note below |
| 7 | `BrandCarousel` | Brand carousel | see fidelity note below |
| 8 | `Testimonials` | Testimonials section | see fidelity note below |
| 9 | `Blog` | Blog section with 3 posts | see fidelity note below |
| 10 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL render a fixed navbar with the site logo, navigation links (Home, Work, Service, Blog, Contact), and a "Let's Talk" CTA button. The navbar SHALL include a mobile hamburger menu toggle.

### `Hero`
The template SHALL render a hero section with a split layout: a designer portrait image on the left and a heading "My name is Alex. Digital Product Designer" with subtitle on the right.

### `AboutInfo`
The template SHALL render a horizontal info bar below the hero with three items: "Design For: Web & Mobile", phone number, and email address.

### `Services`
The template SHALL render a "My Expertise" section with four service cards in a 2×2 grid, each with an icon, title, description, and "Learn more" link.

### `Gallery`
The template SHALL render a "My Works" section with four gallery images. Each image SHALL show a category label overlay on hover. A "More Work" button SHALL be displayed below.

### `AboutMe`
The template SHALL render an "About Me" section with descriptive text on the left and three animated skill bars (UI Design 60%, UX 89%, Illustration 95%) on the right.

### `BrandCarousel`
The template SHALL render a horizontal row of six brand/partner logo placeholders with grayscale styling.

### `Testimonials`
The template SHALL render a "Client Testimonial" section with testimonial quotes, author avatars, names, and roles.

### `Blog`
The template SHALL render a "Latest News" section with three blog cards, each containing an image, category tag, date/author line, and post title.

### `Footer`
The template SHALL render a footer with a CTA section (logo, description, social icons, "Let's Talk" and "Download CV" buttons) and a bottom bar with copyright "Made with Component Dock" linking to https://www.componentdock.com/ and footer navigation links.

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
- **Provenance ban.** No file under `apps/pixelate/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/pixelate/public/CNAME` = `pixelate.free.componentdock.com`
  and the package `homepage` = `https://pixelate.free.componentdock.com`.
