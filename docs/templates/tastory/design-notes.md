# Tastory — Design Notes

Reference: **Eatwell** — `https://colorlib.com/wp/template/eatwell/`  
Live preview: `https://preview.colorlib.com/theme/eatwell/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/eatwell-free-template.jpg  
Shipped: https://tastory.free.componentdock.com

A restaurant landing template with navbar, about story, tabbed menu and news blog sections. Provide a full-featured restaurant landing page with hero, about, offers carousel, tabbed menu, news/blog cards, photo gallery, contact form, and a dark footer — faithfully recreating the ColorLib Eatwell design under the name "Tastory".

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:ital,wght@0,400;0,700;1,400**, **Raleway**

## Design tokens (`apps/tastory/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-amber-brand` | `#fda403` | Tastory brand amber — from the original Eatwell stylesheet (style.css: #FDA403). |
| `--color-amber-dark` | `#cb8402` | amber dark |
| `--color-body-text` | `#b8b8b8` | Body text color — muted gray (#b8b8b8). |
| `--color-paper` | `#f5f5f5` | Light section background (#f5f5f5). |
| `--color-night` | `#1a1a1a` | Dark footer background (#1a1a1a). |
| `--font-heading` | `'Playfair Display', ui-serif, Georgia, serif` | Heading font: Playfair Display (serif). |
| `--font-sans` | `'Raleway', ui-sans-serif, system-ui, sans-serif` | Body font: Raleway (sans-serif). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with navigation links | see fidelity note below |
| 2 | `Hero` | Hero section with call-to-action | see fidelity note below |
| 3 | `About` | About section with story and image | see fidelity note below |
| 4 | `Offers` | Offers section with cards | see fidelity note below |
| 5 | `Menu` | Tabbed menu section | see fidelity note below |
| 6 | `News` | News section with blog cards | see fidelity note below |
| 7 | `Gallery` | Gallery section with photo grid | see fidelity note below |
| 8 | `Contact` | Contact section with form | see fidelity note below |
| 9 | `Footer` | Footer with Component Dock branding | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL render a fixed dark navbar with the brand name "Tastory" and navigation links to all sections (Home, About, Offer, Menu, News, Gallery, Contact). The navbar SHALL support a mobile toggle that shows/hides a mobile menu.

### `Hero`
The template SHALL render a full-screen hero section with a background image, the heading "Welcome To Tastory", a subheading about delicious and healthy foods, and a "Reservation" button linking to the contact section.

### `About`
The template SHALL render a split-layout about section with a "Our Story" subtitle, "Welcome" heading, descriptive text, a "Learn More About Us" button, and a restaurant image.

### `Offers`
The template SHALL render an offers section with a centered header ("Our Offers" subtitle, "Our Offer This Summer" heading) and three offer cards showing image, title, description, and price.

### `Menu`
The template SHALL render a menu section with "Delicious Menu" heading and three tabs (Breakfast, Lunch, Dinner). Each tab shows six menu items with thumbnail, name, description, and price.

### `News`
The template SHALL render a news section with "News" heading and three blog cards, each with an image, title, description, and "Read More" link.

### `Gallery`
The template SHALL render a gallery section with "Gallery" heading and six food images in a responsive grid.

### `Contact`
The template SHALL render a contact section with "Get In Touch" heading, a form with Name, Email, Message fields and a "Send Message" button, plus address and contact information.

### `Footer`
The template SHALL render a dark footer with About Us text, The Restaurant links, Useful links, social media icons (Twitter, Facebook, Instagram), and a link to Component Dock (https://www.componentdock.com/).

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
- **Provenance ban.** No file under `apps/tastory/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/tastory/public/CNAME` = `tastory.free.componentdock.com`
  and the package `homepage` = `https://tastory.free.componentdock.com`.
