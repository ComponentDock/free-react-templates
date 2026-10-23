# Dialpad — Design Notes

Reference: **Callcenter** — `https://colorlib.com/wp/template/callcenter/`  
Live preview: `https://preview.colorlib.com/theme/callcenter/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/callcenter-free-call-center-website-template.jpg  
Shipped: https://dialpad.free.componentdock.com

Dialpad is a single-page call-center landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Callcenter" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript (strict).

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/dialpad/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#8490ff` | Brand — blue-purple primary (#8490ff). |
| `--color-brand-dark` | `#6a7ae6` | brand dark |
| `--color-sky` | `#62bdfc` | Sky — light blue end of gradient (#62bdfc). |
| `--color-ink` | `#222222` | Ink — dark headings (#222222). |
| `--color-paper` | `#f9f9ff` | Paper — light section background (#f9f9ff). |
| `--color-mist` | `#777777` | Mist — muted body text (#777777). |
| `--color-charcoal` | `#222222` | Charcoal — dark footer/overlay background (#222222). |
| `--color-primary-50` | `#f0f1ff` | primary 50 |
| `--color-primary-100` | `#e0e3ff` | primary 100 |
| `--color-primary-200` | `#c1c7ff` | primary 200 |
| `--color-primary-300` | `#a2abff` | primary 300 |
| `--color-primary-400` | `#93a0ff` | primary 400 |
| `--color-primary-500` | `#8490ff` | primary 500 |
| `--color-primary-600` | `#6a7ae6` | primary 600 |
| `--color-primary-700` | `#5064cc` | primary 700 |
| `--color-primary-800` | `#3a4eb3` | primary 800 |
| `--color-primary-900` | `#273a99` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Original font: "Poppins" (Google Fonts). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Features` | Features section | see fidelity note below |
| 4 | `Testimonials` | Testimonials section | see fidelity note below |
| 5 | `OfferedServices` | Offered services section | see fidelity note below |
| 6 | `Stats` | Stats section | see fidelity note below |
| 7 | `Services` | Offered services section | see fidelity note below |
| 8 | `AboutInfo` | About info section | see fidelity note below |
| 9 | `AboutVideo` | About video section | see fidelity note below |
| 10 | `BrandLogos` | Brand logos section | see fidelity note below |
| 11 | `ContactForm` | Contact form section | see fidelity note below |
| 12 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Dialpad" and links to the page's sections, plus a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero section with a dark overlay background, a subtitle, a main heading, a description paragraph, and a call-to-action button.

### `Features`
The system SHALL render a features section on a light background with three feature cards in a horizontal row, each containing an icon, a title, and a short description.

### `Testimonials`
The system SHALL render a testimonials section with a dark overlay background and a heading "Why Choose Us Your Trusted Partner", containing two testimonial cards with avatar images, names, roles, and quotes.

### `OfferedServices`
The system SHALL render an offered-services section with a dark overlay background, a heading "Our Offered Services", a grid of six service icons on the left, and a "Content Synchronization" description with a "View Details" CTA button on the right.

### `Stats`
The system SHALL render a stats section on a light background with five stat counters in a row. Each counter SHALL display a number with gradient text and a label below it.

### `Services`
The system SHALL render an offered-services section with a dark overlay background, a heading "Our Offered Services", a grid of six service icons on the left, and a "Content Synchronization" description with a "View Details" CTA button on the right.

### `AboutInfo`
The system SHALL render an about-info section on a light background with a split layout: an image on the left and text content on the right including a heading, a description paragraph, and a "Learn More" CTA button.

### `AboutVideo`
The system SHALL render an about-video section with a split layout: text content on the left (heading, description, "See Details" CTA button) and a video background area with a play button overlay on the right.

### `BrandLogos`
The system SHALL render a brand-logos section displaying five partner/client logos in a horizontal row. The logos SHALL transition from grayscale to full color on hover.

### `ContactForm`
The system SHALL render a contact form section with the heading "If you need, Just drop us a line", containing a form with name, email, and subject inputs, a message textarea, and a "Send Message" CTA button.

### `Footer`
The system SHALL render a dark footer with three columns (About Us, Contact Us, Newsletter), a social icons row, and a copyright line with Component Dock attribution.

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
- **Provenance ban.** No file under `apps/dialpad/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/dialpad/public/CNAME` = `dialpad.free.componentdock.com`
  and the package `homepage` = `https://dialpad.free.componentdock.com`.
