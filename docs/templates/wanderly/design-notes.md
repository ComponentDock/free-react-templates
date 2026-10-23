# Wanderly — Design Notes

Reference: **Martine** — `https://colorlib.com/wp/template/martine/`  
Live preview: `https://preview.colorlib.com/theme/martine/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/martine-free-template.jpg  
Shipped: https://wanderly.free.componentdock.com

Wanderly is a travel agency landing template, a React recreation of the ColorLib "Martine" design (https://colorlib.com/wp/template/martine/). It features a top navigation bar, hero banner with gradient overlay, tabbed booking form, destination cards, event showcase, hotel listings, client testimonials, and services section.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@400;600;700**

## Design tokens (`apps/wanderly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fff4ec` | Orange primary (#fe5c24 — ColorLib Martine .btn_1, .place_btn). |
| `--color-primary-100` | `#ffe3cc` | primary 100 |
| `--color-primary-200` | `#ffc599` | primary 200 |
| `--color-primary-300` | `#ffa366` | primary 300 |
| `--color-primary-400` | `#ff7e5f` | primary 400 |
| `--color-primary-500` | `#fe5c24` | primary 500 |
| `--color-primary-600` | `#e04a18` | primary 600 |
| `--color-primary-700` | `#b83c13` | primary 700 |
| `--color-primary-800` | `#8c2e0e` | primary 800 |
| `--color-primary-900` | `#5c1f09` | primary 900 |
| `--color-coral-400` | `#ff7e5f` | Coral accent (from banner gradient endpoint). |
| `--color-coral-500` | `#ff6b45` | coral 500 |
| `--color-navy` | `#0c3e72` | Dark blue headings (#0c3e72 — ColorLib Martine h1/h2/h3). |
| `--color-sky-400` | `#2493e0` | Light blue (#2493e0 — social icons). |
| `--color-gold` | `#ffc962` | Gold for star ratings (#ffc962). |
| `--color-smoke` | `#999999` | Muted copy (#999999, #666666). |
| `--color-ash` | `#666666` | ash |
| `--color-cloud` | `#fbf9ff` | Section backgrounds. |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | Open Sans for both headings and body — matching the original. |
| `--font-display` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | TopBar with destinations and social links | see fidelity note below |
| 2 | `Navbar` | Navbar with navigation and Book Now CTA | see fidelity note below |
| 3 | `Banner` | Hero banner with gradient overlay | see fidelity note below |
| 4 | `BookingSection` | Tabbed booking form | see fidelity note below |
| 5 | `TopPlaces` | Top Places destination cards | see fidelity note below |
| 6 | `FeaturedEvent` | Featured Event section | see fidelity note below |
| 7 | `HotelList` | Hotel & Restaurant listings | see fidelity note below |
| 8 | `ClientReviews` | Client testimonials | see fidelity note below |
| 9 | `BestServices` | Best Services section | see fidelity note below |
| 10 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `TopBar`
The template SHALL display a top bar with destination links (Asia, Europe, America), social media icons (Facebook, Twitter, Instagram), and a phone number.

### `Navbar`
The template SHALL display a sticky navbar with the "Wanderly" logo, navigation links (Home, About, Packages, Blog, Pages, Contact), dropdown menus for Blog and Pages, and a "Book Now" button.

### `Banner`
The template SHALL display a full-width hero banner with a coral-to-orange gradient overlay, the title "Wanderly", a tagline, and a "Discover Now" CTA button linking to the booking section.

### `BookingSection`
The template SHALL display a booking section with three tabs (Hotels, Flights, Places) each showing a form with relevant input fields and a Search button.

### `TopPlaces`
The template SHALL display a "Top Places to visit" section with four destination cards, each showing an image, category tag, name, location, star rating, and review count.

### `FeaturedEvent`
The template SHALL display a featured event section with an image, "Upcoming Event" label, destination title, description, date, cost, organizer, star rating, and a "Plan Details" CTA button.

### `HotelList`
The template SHALL display a "Top Hotels & Restaurants" section with three hotel cards showing image, name, rating, location, and starting price.

### `ClientReviews`
The template SHALL display a "What they said" section with review cards showing star ratings, review text, and author names.

### `BestServices`
The template SHALL display a services section with four service items, each with an icon, title, and description.

### `Footer`
The template SHALL display a footer with three columns: destination links, newsletter signup form, and contact information. The copyright line MUST link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/wanderly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/wanderly/public/CNAME` = `wanderly.free.componentdock.com`
  and the package `homepage` = `https://wanderly.free.componentdock.com`.
