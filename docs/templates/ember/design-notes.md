# Ember — Design Notes

Reference: **Dingo** — `https://colorlib.com/wp/template/dingo/`  
Live preview: `https://preview.colorlib.com/theme/dingo/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/dingo-free-template.jpg  
Shipped: https://ember.free.componentdock.com

Ember is a restaurant landing template that recreates the ColorLib "Dingo" design (https://colorlib.com/wp/template/dingo/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript application.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Cardo**, **Lora**, **Lora:ital,wght@0,400;0,600;0,700;1,400**

## Design tokens (`apps/ember/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff6426` | brand |
| `--color-brand-dark` | `#e04000` | brand dark |
| `--color-ink` | `#2c3033` | Ink — dark headings/footer (#2c3033 from the original). |
| `--color-ink-dark` | `#1e2224` | ink dark |
| `--color-paper` | `#f9f9ff` | Soapstone — light section background (#f9f9ff from the original). |
| `--color-lavender` | `#f0e9ff` | Lavender — secondary light section background (#f0e9ff). |
| `--color-cream` | `#f6f5f1` | Cream — tertiary light section background (#f6f5f1). |
| `--color-mist` | `#999999` | Mist — muted body text (#999999 from the original). |
| `--color-primary-50` | `#fff4ed` | primary 50 |
| `--color-primary-100` | `#ffe6d5` | primary 100 |
| `--color-primary-200` | `#ffc8aa` | primary 200 |
| `--color-primary-300` | `#ffa274` | primary 300 |
| `--color-primary-400` | `#ff7c3d` | primary 400 |
| `--color-primary-500` | `#ff6426` | primary 500 |
| `--color-primary-600` | `#e04e0a` | primary 600 |
| `--color-primary-700` | `#ba3f08` | primary 700 |
| `--color-primary-800` | `#93320a` | primary 800 |
| `--color-primary-900` | `#782b0c` | primary 900 |
| `--font-sans` | `'Cardo', ui-serif, Georgia, serif` | Original fonts: "Lora" (headings) + "Cardo" (body). |
| `--font-display` | `'Lora', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with navigation and brand | see fidelity note below |
| 2 | `Hero` | Hero section with headline and CTAs | see fidelity note below |
| 3 | `PopularDishes` | Popular Dishes section | see fidelity note below |
| 4 | `History` | History section | see fidelity note below |
| 5 | `ExpectTheBest` | Expect The Best video section | see fidelity note below |
| 6 | `PopularMenu` | Popular Menu with tabbed interface | see fidelity note below |
| 7 | `Team` | Team section with chef cards | see fidelity note below |
| 8 | `Reservation` | Reservation form | see fidelity note below |
| 9 | `Testimonials` | Testimonials section | see fidelity note below |
| 10 | `Blog` | Blog section | see fidelity note below |
| 11 | `Footer` | Footer with Component Dock branding | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a sticky navbar with the "Ember" brand logo, navigation links (Home, About, Menu, Chefs, Blog, Contact), a "Book a Table" CTA button, a dark mode toggle, and a mobile hamburger menu.

### `Hero`
The template SHALL display a full-width hero section with a background image, the tagline "Expensive but the best", the headline "Deliciousness jumping into the mouth", descriptive body text, and two call-to-action buttons: "Reservation" and "Watch our story".

### `PopularDishes`
The template SHALL display a "Popular Dishes" section with an "Our Exclusive Items" heading and four food cards, each with a placeholder image, dish name, description, and a "Read More" link.

### `History`
The template SHALL display a two-column history section with a background image on the left and the heading "Where The Food's As Good As The Root Beer." with descriptive text and a "Read More" button on the right.

### `ExpectTheBest`
The template SHALL display a dark overlay section with the heading "Expect The Best", descriptive text, and a circular play button linking to a YouTube video.

### `PopularMenu`
The template SHALL display a tabbed menu section with tabs for Special, Breakfast, Lunch, Dinner, and Snacks. Each tab shows six menu items with an image, name, description, and price. Clicking a tab switches the displayed items.

### `Team`
The template SHALL display a "Team Member" section with an "Our Experience Chefs" heading and four chef cards, each with a circular image, name, and role.

### `Reservation`
The template SHALL display a reservation form with fields for email (required), number of guests (select), time slot (select), and optional notes. Form validation requires a valid email address. On successful submission, a confirmation message is displayed.

### `Testimonials`
The template SHALL display a "Testimonials" section with an "Customers Feedback" heading and three testimonial cards, each with a star rating, quoted text, author name, and role.

### `Blog`
The template SHALL display a "Recent News" section with an "Latest From Blog" heading and four blog post cards, each with a placeholder image, date, category tag, title, and "Read More" link.

### `Footer`
The template SHALL display a dark footer with four columns: About Us (brand description and social links), Important Links (navigation), Contact Us (address, phone, email), and Newsletter (email subscription form). The copyright bar MUST link to https://www.componentdock.com/ as "Component Dock".

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
- **Provenance ban.** No file under `apps/ember/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/ember/public/CNAME` = `ember.free.componentdock.com`
  and the package `homepage` = `https://ember.free.componentdock.com`.
