# Namastay — Design Notes

Reference: **Yogafun** — `https://colorlib.com/wp/template/yogafun/`  
Live preview: `https://preview.colorlib.com/theme/yogafun/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/yogafun-free-template.jpg  
Shipped: https://namastay.free.componentdock.com

Namastay is a free yoga instructor website template that recreates the ColorLib Yogafun design in React 19 + Tailwind CSS 4 + TypeScript. It provides a complete landing page for yoga studios and instructors with a hero section, feature highlights, class listings, testimonials, blog preview, and newsletter signup.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;400;500;600;700**, **Oxygen**

## Design tokens (`apps/namastay/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#71774b` | Namastay brand palette — olive green (#71774b) from original design. |
| `--color-brand-dark` | `#5b603c` | brand dark |
| `--color-brand-darker` | `#535837` | brand darker |
| `--color-brand-light` | `#b0b68b` | brand light |
| `--color-ink` | `#212529` | Ink — dark text (#212529 from original). |
| `--color-ink-light` | `#44482d` | ink light |
| `--color-mist` | `#6c757d` | Mist — muted text (#6c757d from original). |
| `--color-paper` | `#ffffff` | Paper — light section backgrounds. |
| `--color-paper-alt` | `#f8f9fa` | paper alt |
| `--color-primary-50` | `#f4f5f0` | Primary scale so shared Button/ButtonLink `primary` variants resolve. |
| `--color-primary-100` | `#e5e7da` | primary 100 |
| `--color-primary-200` | `#cdd1b8` | primary 200 |
| `--color-primary-300` | `#b0b68b` | primary 300 |
| `--color-primary-400` | `#8f9668` | primary 400 |
| `--color-primary-500` | `#71774b` | primary 500 |
| `--color-primary-600` | `#5b603c` | primary 600 |
| `--color-primary-700` | `#4a4d31` | primary 700 |
| `--color-primary-800` | `#3a3c27` | primary 800 |
| `--color-primary-900` | `#2d2f1e` | primary 900 |
| `--font-sans` | `'Oxygen', ui-sans-serif, system-ui, sans-serif` | Fonts — Oxygen (body) + Montserrat (headings). |
| `--font-display` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar renders with brand and navigation links | see fidelity note below |
| 2 | `Hero` | Hero section displays headline and play button | see fidelity note below |
| 3 | `Features` | Features section shows three yoga feature cards | see fidelity note below |
| 4 | `ParallaxQuote` | Parallax quote section | see fidelity note below |
| 5 | `YogaStyles` | Yoga styles section | see fidelity note below |
| 6 | `YogaClasses` | Yoga classes section shows six class cards | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `StatsBar` | Stats bar with brand color | see fidelity note below |
| 9 | `BlogPosts` | Blog section with three posts | see fidelity note below |
| 10 | `Newsletter` | Newsletter subscription form | see fidelity note below |
| 11 | `Footer` | Footer with Component Dock attribution | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a sticky navigation bar with the brand name "Namastay", navigation links (Home, About, Classes, Blog, Contact), a classes dropdown menu, and a search input.

### `Hero`
The template SHALL display a full-width hero section with a background image overlay, the headline "Lose Yourself In Ambience & Atmosphere", and a play button linking to a video.

### `Features`
The template SHALL display three feature items (Chakra, Lotus, Yoga) with icons, titles, and descriptions alongside a large image.

### `ParallaxQuote`
The template SHALL display a parallax background section with the centered text "Do Yoga Today For Better Tomorrow".

### `YogaStyles`
The template SHALL display a "Perfect Yoga Style" section with three yoga style cards (Hatha Yoga, Vinyasa Flow, Yin Yoga).

### `YogaClasses`
The template SHALL display a "Yoga Classes" section with six class cards (Yoga Barre, Yoga Core, Yoga For Health, Yoga For Beginners, Yoga for All, Yoga Restore), each with an image, title, description, and Read More link.

### `Testimonials`
The template SHALL display a "Testimonial" section with testimonial cards containing quotes, names, and photos.

### `StatsBar`
The template SHALL display a brand-colored stats bar with three stat items: Chat With Us, Happy Customers, Fast Support.

### `BlogPosts`
The template SHALL display an "Our Blog" section with three blog post cards containing images, dates, titles, descriptions, and Read More links.

### `Newsletter`
The template SHALL display a newsletter section with a heading, email input, and subscribe button. The form handles submission and clears the input on success.

### `Footer`
The template SHALL display a footer with About section, Contact Info, Quick Links, social icons, and a Component Dock attribution link.

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
- **Provenance ban.** No file under `apps/namastay/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/namastay/public/CNAME` = `namastay.free.componentdock.com`
  and the package `homepage` = `https://namastay.free.componentdock.com`.
