# Taster — Design Notes

Reference: **Meal** — `https://colorlib.com/wp/template/meal/`  
Live preview: `https://preview.colorlib.com/theme/meal/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/meal-free-template.jpg  
Shipped: https://taster.free.componentdock.com

Taster is a single-page restaurant landing page in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Meal" free template (source: https://colorlib.com/wp/template/meal/), built under a DIFFERENT name (**Taster**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Playfair Display**, **Playfair Display:wght@300;400;700;800**

## Design tokens (`apps/taster/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff7a5c` | Coral/orange accent — #FF7A5C from the original css/style.css |
| `--color-brand-dark` | `#e0694d` | brand dark |
| `--color-ink` | `#000000` | Headings dark — #000000 from the original |
| `--color-paper` | `#f8f9fa` | Light section background — #F8F9FA from the original |
| `--color-mist` | `#b3b3b3` | Muted text — #B3B3B3 from the original |
| `--color-border` | `#cccccc` | Border gray — #CCCCCC from the original |
| `--color-primary-50` | `#fff5f2` | Primary scale so shared Button/ButtonLink primary variants resolve to the coral |
| `--color-primary-100` | `#ffe8e0` | primary 100 |
| `--color-primary-200` | `#ffd0c2` | primary 200 |
| `--color-primary-300` | `#ffb09a` | primary 300 |
| `--color-primary-400` | `#ff8c6d` | primary 400 |
| `--color-primary-500` | `#ff7a5c` | primary 500 |
| `--color-primary-600` | `#e0694d` | primary 600 |
| `--color-primary-700` | `#c05540` | primary 700 |
| `--color-primary-800` | `#9e4333` | primary 800 |
| `--color-primary-900` | `#7e3629` | primary 900 |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | Fonts: Playfair Display (headings) + Open Sans (body) from the original |
| `--font-display` | `'Playfair Display', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar renders with logo and hamburger | see fidelity note below |
| 2 | `Hero` | Hero section displays with background image and CTA | see fidelity note below |
| 3 | `Features` | Features section shows alternating image-text cards | see fidelity note below |
| 4 | `About` | About section displays restaurant description | see fidelity note below |
| 5 | `ImageDivider` | Image divider renders decorative image | see fidelity note below |
| 6 | `Chefs` | Chefs section shows chef profiles | see fidelity note below |
| 7 | `Menu` | Menu section has tabbed food items | see fidelity note below |
| 8 | `Services` | Services section displays 6 service cards | see fidelity note below |
| 9 | `Reservation` | Reservation form renders all fields | see fidelity note below |
| 10 | `Testimonials` | Testimonials carousel cycles through reviews | see fidelity note below |
| 11 | `Contact` | Contact form renders with fields | see fidelity note below |
| 12 | `Footer` | Footer contains about, hours, social, newsletter, and Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a fixed top header with a "T" logo centered and a hamburger toggle. Clicking the toggle SHALL open a right-sliding sidebar with nav links: Home, About Us, Our Menu, Reserve A Table, Contact.

### `Hero`
The system SHALL render a full-width hero section with a background image, centered heading "Welcome to Taster", and a "Reserve A Table" button that scrolls to the reservation section.

### `Features`
The system SHALL render 3 feature cards in alternating image/text layout with category labels, headings, descriptions, and "Learn More" links.

### `About`
The system SHALL render a centered "The Restaurant" heading with two descriptive paragraphs.

### `ImageDivider`
The system SHALL render a full-width decorative image divider between sections.

### `Chefs`
The system SHALL render 2 chef profiles side by side, each with a circular photo, name, "Master Chef" role, bio text, and social icons (Facebook, Twitter, Instagram).

### `Menu`
The system SHALL render a tabbed menu interface with 3 tabs (Breakfast, Brunch, Dinner), each containing 4 menu items with thumbnail, dish name, description, and price. The Breakfast tab is active by default.

### `Services`
The system SHALL render 6 service cards in a 3-column grid, each with an icon, heading, and description.

### `Reservation`
The system SHALL render a reservation form with fields: Name, Email, Phone, Number of Persons (dropdown), Date, Time, and a "Reserve Now" submit button. Submitting shows a confirmation message.

### `Testimonials`
The system SHALL render a testimonial carousel with 4 reviews, each showing a quote, author photo, author name, and role. Navigation via prev/next buttons and dot indicators.

### `Contact`
The system SHALL render a contact form with fields: Name, Email, Phone, Message, and a "Send Message" submit button. Submitting shows a confirmation message.

### `Footer`
The system SHALL render a 3-column footer with: (1) About Taster + Read More button, (2) Lunch/Dinner service hours, (3) Social icons + Newsletter form. The copyright line SHALL include a "Component Dock" link to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/taster/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/taster/public/CNAME` = `taster.free.componentdock.com`
  and the package `homepage` = `https://taster.free.componentdock.com`.
