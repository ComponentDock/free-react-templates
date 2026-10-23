# Kael — Design Notes

Reference: **Satner** — `https://colorlib.com/wp/template/satner/`  
Live preview: `https://preview.colorlib.com/theme/satner/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/satner-free-template.jpg  
Shipped: https://kael.free.componentdock.com

Recreate the ColorLib "Satner" portfolio template (https://colorlib.com/wp/template/satner/) as a React 19 + Tailwind CSS 4 + TypeScript single-page portfolio site.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@400;500;700**, **Rubik**

## Design tokens (`apps/kael/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#eef0ff` | primary 50 |
| `--color-primary-100` | `#d8dcff` | primary 100 |
| `--color-primary-200` | `#b1b8ff` | primary 200 |
| `--color-primary-300` | `#854fee` | primary 300 |
| `--color-primary-400` | `#6b5ce0` | primary 400 |
| `--color-primary-500` | `#4458dc` | primary 500 |
| `--color-primary-600` | `#3a4abf` | primary 600 |
| `--color-primary-700` | `#2f3da3` | primary 700 |
| `--color-primary-800` | `#253187` | primary 800 |
| `--color-primary-900` | `#1c256b` | primary 900 |
| `--color-accent-300` | `#a97cf8` | Accent (gradient end / button highlight). |
| `--color-accent-400` | `#854fee` | accent 400 |
| `--color-accent-500` | `#6d3de0` | accent 500 |
| `--color-smoke` | `#777777` | Muted copy. |
| `--color-mist` | `#f8f8fa` | Light section backgrounds. |
| `--color-ink` | `#000000` | ink |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Roboto (body) + Rubik (headings) via Google Fonts. |
| `--font-display` | `'Rubik', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Responsive navbar with mobile menu | see fidelity note below |
| 2 | `Hero` | Hero section with greeting, role, and CTAs | see fidelity note below |
| 3 | `About` | About section with bio and CV download | see fidelity note below |
| 4 | `Brands` | Brand logos and experience counter | see fidelity note below |
| 5 | `Services` | Services section with four service cards | see fidelity note below |
| 6 | `Portfolio` | Portfolio section with filter tabs and image grid | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `Newsletter` | Newsletter signup | see fidelity note below |
| 9 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The page SHALL render a navbar with desktop nav links and a hamburger toggle on mobile. Clicking the hamburger SHALL open a mobile menu. Clicking a link in the mobile menu SHALL close the menu.

### `Hero`
The page SHALL render a hero section with gradient background, greeting text ("Hello"), developer name ("I am Kael"), role subtitle ("Senior Developer"), two CTA buttons (Hire Me, Get CV), and a portrait image on the right.

### `About`
The page SHALL render an about section with an image on the left, a heading ("Let's Introduce About Myself"), two bio paragraphs, and a "Download CV" button.

### `Brands`
The page SHALL render a brand logos grid (6 logos) alongside a "10 Years Experience" counter and a phone number CTA.

### `Services`
The page SHALL render a services section with a heading ("Service Offers") and four service cards (Web Development, UI/UX Design, Web Design, SEO Optimization), each with an icon, title, and description.

### `Portfolio`
The page SHALL render a portfolio section with filter tabs (All, Popular, Latest, Following, Upcoming) and a 3-column image grid. Clicking a tab SHALL filter the grid to show only items in that category.

### `Testimonials`
The page SHALL render a testimonials section with a heading ("Client Say About Me") and three testimonial cards, each with a client photo, name, star rating, and quote.

### `Newsletter`
The page SHALL render a newsletter section with gradient background, heading, email input, and subscribe button. Submitting with a valid email SHALL show a thank-you message. Submitting with an empty email SHALL not submit.

### `Footer`
The page SHALL render a footer with the brand name, "Follow Me" heading, social links (Facebook, Twitter, Dribbble, Behance), and a copyright line that links to https://www.componentdock.com/ ("Component Dock").

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
- **Provenance ban.** No file under `apps/kael/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/kael/public/CNAME` = `kael.free.componentdock.com`
  and the package `homepage` = `https://kael.free.componentdock.com`.
