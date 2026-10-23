# Crane — Design Notes

Reference: **Constructo** — `https://colorlib.com/wp/template/constructo/`  
Live preview: `https://preview.colorlib.com/theme/constructo/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/constructo-free-template.jpg  
Shipped: https://crane.free.componentdock.com

Recreate the ColorLib "Constructo" construction company landing page as a modern React 19 + Tailwind CSS 4 + TypeScript single-page template named "Crane".

## Typography

Fonts loaded by `index.html` (Google Fonts): **Raleway**, **Raleway:wght@200;300;400;500;600;700;800**

## Design tokens (`apps/crane/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fef3ef` | primary 50 |
| `--color-primary-100` | `#fde2d9` | primary 100 |
| `--color-primary-200` | `#fac5b3` | primary 200 |
| `--color-primary-300` | `#f69e82` | primary 300 |
| `--color-primary-400` | `#f0542c` | primary 400 |
| `--color-primary-500` | `#e04320` | primary 500 |
| `--color-primary-600` | `#c23216` | primary 600 |
| `--color-primary-700` | `#a22614` | primary 700 |
| `--color-primary-800` | `#852218` | primary 800 |
| `--color-primary-900` | `#6e2018` | primary 900 |
| `--color-navy` | `#001d38` | Navy overlay (ColorLib .overlay::before background #001D38). |
| `--color-mist` | `#f8f8f8` | Light section backgrounds. |
| `--color-smoke` | `#707070` | smoke |
| `--color-ink` | `#1a1a1a` | ink |
| `--color-heading` | `#001d38` | heading |
| `--color-body` | `#596672` | body |
| `--font-sans` | `'Raleway', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Raleway', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | TopBar displays opening hours and CTA | see fidelity note below |
| 2 | `Navbar` | Navbar displays navigation links | see fidelity note below |
| 3 | `Hero` | Hero displays heading and CTA | see fidelity note below |
| 4 | `Features` | Features section shows 3 feature cards | see fidelity note below |
| 5 | `About` | About section shows split layout | see fidelity note below |
| 6 | `Services` | Services section shows service cards | see fidelity note below |
| 7 | `Gallery` | Gallery section shows filterable project grid | see fidelity note below |
| 8 | `WhyChooseUs` | Why Choose Us section shows content | see fidelity note below |
| 9 | `Testimonials` | Testimonials section shows testimonial cards | see fidelity note below |
| 10 | `ContactCTA` | Contact CTA banner displays | see fidelity note below |
| 11 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `TopBar`
The TopBar SHALL display "Opening Hours: 10:00 AM – 7:00 PM" on the left and a "Get a Quote" button on the right (desktop only).

### `Navbar`
The navbar SHALL display Home, About, Services, Projects, Blog, and Contact links plus a search icon.

### `Hero`
The hero section SHALL display a heading "We Build Your Home Secure and Safe", subtext, and an "Our Services" CTA button over a background image with dark overlay.

### `Features`
The features section SHALL display three feature cards in a row: "Creative Plan & Design", "Talented Peoples", and "Modern Tools", each with an icon, title, and description.

### `About`
The about section SHALL display an image on the left and text content on the right including a heading, two paragraphs, and an "About Us" button.

### `Services`
The services section SHALL display a section title "Our Services" and a row of service cards each with an image, title, description, and "More" link.

### `Gallery`
The gallery section SHALL display filter buttons (All, Architecture, Buildings, Bridges) and a grid of project images with hover overlay.

### `WhyChooseUs`
The Why Choose Us section SHALL display a heading, quote text, description, and a video play button on the left, with supporting content.

### `Testimonials`
The testimonials section SHALL display a section title "Testimonials" and testimonial cards with avatar, name, role, and quote.

### `ContactCTA`
The contact CTA SHALL display a dark overlay banner with heading text and a "Contact Us" button.

### `Footer`
The footer SHALL display four columns (About, Popular Searches, Useful Links, Subscribe) and a bottom bar with a link to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/crane/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/crane/public/CNAME` = `crane.free.componentdock.com`
  and the package `homepage` = `https://crane.free.componentdock.com`.
