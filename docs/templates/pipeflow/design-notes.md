# Pipeflow — Design Notes

Reference: **Plumber** — `https://colorlib.com/wp/template/plumber/`  
Live preview: `https://preview.colorlib.com/theme/plumber/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/plumber-free-template.jpg  
Shipped: https://pipeflow.free.componentdock.com

Recreate the ColorLib "Plumber" plumbing services landing template as a React + Tailwind CSS 4 + TypeScript single-page app under the name "Pipeflow". The template serves as a plumber/service-company landing page with a hero, services, features, counters, testimonials, video section, contact form, and footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/pipeflow/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-50` | `#fef2f4` | brand 50 |
| `--color-brand-100` | `#fde6ea` | brand 100 |
| `--color-brand-200` | `#fccdd6` | brand 200 |
| `--color-brand-300` | `#f9a6b5` | brand 300 |
| `--color-brand-400` | `#f53f51` | brand 400 |
| `--color-brand-500` | `#eb1c3d` | brand 500 |
| `--color-brand-600` | `#d90f30` | brand 600 |
| `--color-brand-700` | `#b70a2a` | brand 700 |
| `--color-brand-800` | `#990c28` | brand 800 |
| `--color-brand-900` | `#830e27` | brand 900 |
| `--color-navy-50` | `#f0f1f8` | navy 50 |
| `--color-navy-100` | `#d8dbed` | navy 100 |
| `--color-navy-200` | `#b5badf` | navy 200 |
| `--color-navy-300` | `#8c95cd` | navy 300 |
| `--color-navy-400` | `#6a74b8` | navy 400 |
| `--color-navy-500` | `#525ca2` | navy 500 |
| `--color-navy-600` | `#434b87` | navy 600 |
| `--color-navy-700` | `#373e6c` | navy 700 |
| `--color-navy-800` | `#2e355a` | navy 800 |
| `--color-navy-900` | `#04091e` | navy 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Poppins — the original template's typeface (Google Fonts via index.html) |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with logo and navigation links | see fidelity note below |
| 2 | `Hero` | Hero section with dark overlay and CTA | see fidelity note below |
| 3 | `Quote` | Quote/about section with split layout | see fidelity note below |
| 4 | `Services` | Services section with three service cards | see fidelity note below |
| 5 | `Features` | Features section with image and feature cards | see fidelity note below |
| 6 | `Counters` | Counter/stats section with four statistics | see fidelity note below |
| 7 | `Video` | Video/promotional section with dark background | see fidelity note below |
| 8 | `Cta` | Hero section with dark overlay and CTA | see fidelity note below |
| 9 | `Testimonials` | Testimonials section with carousel | see fidelity note below |
| 10 | `Contact` | Contact section with form | see fidelity note below |
| 11 | `Footer` | Footer with columns, newsletter, social links, and Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL render a navigation bar with the logo "Pipeflow", and navigation links (Home, Services, Features, Testimonials, Contact). The navbar SHALL be sticky with a dark transparent background that becomes solid on scroll.

### `Hero`
The template SHALL render a full-width hero section with a dark overlay background, a heading "We're your plumber", descriptive text, and a "Get Started" call-to-action button.

### `Quote`
The template SHALL render a two-column section with a heading on the left containing highlighted words and descriptive text on the right.

### `Services`
The template SHALL render three service cards (Maintenance, Residential Service, Commercial Service), each with an icon, heading, and description.

### `Features`
The template SHALL render a split section with a background image on the left and four feature cards on the right (Multiple Layouts, Clean Coding, Endless Features, Fully Customizable), each with a heading and description.

### `Counters`
The template SHALL render four counter cards showing statistics: 2536 Happy Clients, 6784 Total Projects, 1059 Cups Coffee, 12239 Tickets Submitted.

### `Video`
The template SHALL render a section with a dark background, a heading "Explore ourselves in a new way", descriptive text, and a "Watch Video" link.

### `Cta`
The template SHALL render a full-width hero section with a dark overlay background, a heading "We're your plumber", descriptive text, and a "Get Started" call-to-action button.

### `Testimonials`
The template SHALL render a testimonials section with heading "What our Client's Say about us", and three testimonial cards, each with an avatar, quote text, author name "Mark Alviro Wiens", and title "CEO at Google".

### `Contact`
The template SHALL render a contact section with a map area on the left and a form on the right containing name input, email input, message textarea, and a "Send Message" button.

### `Footer`
The template SHALL render a footer with "About Us" column, Newsletter subscription, social links (Facebook, Twitter, Dribbble, Behance), copyright text with the current year, and a link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/pipeflow/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/pipeflow/public/CNAME` = `pipeflow.free.componentdock.com`
  and the package `homepage` = `https://pipeflow.free.componentdock.com`.
