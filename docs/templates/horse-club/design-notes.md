# Horse-club — Design Notes

Reference: **Horse Club** — `https://colorlib.com/wp/template/horse-club/`  
Live preview: `https://preview.colorlib.com/theme/horseclub/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/horseclub-free-template.jpg  
Shipped: https://horse-club.free.componentdock.com

Horse Club is a multi-section equestrian-club website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Horse Club" design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/horse-club/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f6214b` | brand |
| `--color-cyan` | `#4cd3e3` | Feature-icon palette (css/main.css): cyan, yellow, blue, orange, red. |
| `--color-sun` | `#f4e700` | sun |
| `--color-azure` | `#38a4ff` | azure |
| `--color-tangerine` | `#f45622` | tangerine |
| `--color-coral` | `#f44a40` | coral |
| `--color-ink` | `#222222` | Headings (#222222) and muted text (#777777). |
| `--color-muted` | `#777777` | muted |
| `--color-paper` | `#f9f9ff` | Light section background — features/price areas (#f9f9ff). |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `AboutVideo` | About/video section | see fidelity note below |
| 4 | `Features` | Features section | see fidelity note below |
| 5 | `HomeAbout` | Home about section | see fidelity note below |
| 6 | `Pricing` | Pricing section | see fidelity note below |
| 7 | `Booking` | Booking section | see fidelity note below |
| 8 | `Blog` | Blog section | see fidelity note below |
| 9 | `Gallery` | Gallery section | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a navigation bar with the site name "Horse Club", contact details (email, phone), links to the main sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a hero section with the eyebrow "Introducing Horse Club", the headline "Inter relation Between Horse & Rider", and a "Book Consultancy" CTA button.

### `AboutVideo`
The system SHALL render an about section with descriptive copy and a video play block.

### `Features`
The system SHALL render a features section with six cards: Expert Technicians, Professional Service, Great Support, Technical Skills, Highly Recomended, and Positive Reviews.

### `HomeAbout`
The system SHALL render a second about block with an image and descriptive copy.

### `Pricing`
The system SHALL render a pricing section titled "Choose the best plan that suits you" with four plans: Basic, Economy, Premium, and Enterprise, each with a price.

### `Booking`
The system SHALL render a booking section with an "Appointment Form" and at least two testimonials.

### `Blog`
The system SHALL render a blog section titled "Latest News from our Blog" with at least three posts, each with a title and an excerpt.

### `Gallery`
The system SHALL render a gallery section with a grid of at least six images.

### `Footer`
The system SHALL render a footer with an "About Us" blurb, "Contact Us" details, a "Newsletter" signup, and social links.

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
- **Provenance ban.** No file under `apps/horse-club/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/horse-club/public/CNAME` = `horse-club.free.componentdock.com`
  and the package `homepage` = `https://horse-club.free.componentdock.com`.
