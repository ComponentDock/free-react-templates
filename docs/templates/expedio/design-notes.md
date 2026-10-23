# Expedio — Design Notes

Reference: **Safario** — `https://colorlib.com/wp/template/safario/`  
Live preview: `https://preview.colorlib.com/theme/safario/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/safario-free-template.jpg  
Shipped: https://expedio.free.componentdock.com

Recreation of ColorLib "Safario" — a travel agency landing page with hero, services, about, tour packages, testimonials, search form, blog, and footer sections. The original uses Roboto/Roboto Condensed fonts with a purple (#6059f6) brand color, sharp-cornered buttons, and a clean travel-themed layout.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto Condensed**, **Roboto Condensed:wght@700**

## Design tokens (`apps/expedio/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#f0eeff` | primary 50 |
| `--color-primary-100` | `#d1cff4` | primary 100 |
| `--color-primary-200` | `#b3b0ea` | primary 200 |
| `--color-primary-300` | `#9590e0` | primary 300 |
| `--color-primary-400` | `#7676ff` | primary 400 |
| `--color-primary-500` | `#6059f6` | primary 500 |
| `--color-primary-600` | `#4e48d4` | primary 600 |
| `--color-primary-700` | `#3c37b0` | primary 700 |
| `--color-primary-800` | `#2c288a` | primary 800 |
| `--color-primary-900` | `#1e1b64` | primary 900 |
| `--color-mist` | `#f8f8ff` | mist |
| `--color-cloud` | `#ebebff` | cloud |
| `--color-ink` | `#2a2a2a` | ink |
| `--color-smoke` | `#888888` | smoke |
| `--color-ash` | `#555555` | ash |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Roboto Condensed', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar renders with brand and navigation | see fidelity note below |
| 2 | `Hero` | Hero section displays travel headline | see fidelity note below |
| 3 | `Services` | Services section shows three service cards | see fidelity note below |
| 4 | `About` | About section shows exploration text | see fidelity note below |
| 5 | `Tours` | Tours section shows tour package cards | see fidelity note below |
| 6 | `Testimonials` | Testimonials section shows client quotes | see fidelity note below |
| 7 | `SearchPackage` | Search Package form has all fields | see fidelity note below |
| 8 | `Blog` | Blog section shows three blog posts | see fidelity note below |
| 9 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The page SHALL display a navigation bar with the brand name "Expedio" and links for Home, About, Packages, Blog, Contact, plus a "Get Started" CTA button.

### `Hero`
The hero SHALL show "Travel More To Discover Yourself" with description text, a CTA button, a hero image, and badge overlays.

### `Services`
The services section SHALL display "Our Popular Services" heading with three service cards (Hotel Booking, Flight Booking, Destination Booking) each with an icon, title, and description.

### `About`
The about section SHALL display an image alongside text about exploration with a "Learn More" button.

### `Tours`
The tours section SHALL display "We offer worldwide tour plan recently" heading with tour cards showing destination names, durations, and prices.

### `Testimonials`
The testimonials section SHALL display "Our client says" heading with testimonial cards containing avatar, name, role, and quote text.

### `SearchPackage`
The search section SHALL display a search form with text input, category select, duration select, date input, price range select, and a "Search Package" submit button.

### `Blog`
The blog section SHALL display "From our Blog" heading with three blog post cards each having an image, title, date, comment count, and excerpt.

### `Footer`
The footer SHALL contain an "About Agency" section, "Navigation Links", "Newsletter" with email form, "Follow Us" social section, and a copyright line with a link to componentdock.com.

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
- **Provenance ban.** No file under `apps/expedio/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/expedio/public/CNAME` = `expedio.free.componentdock.com`
  and the package `homepage` = `https://expedio.free.componentdock.com`.

## Reference tokens (measured 2026-10-23)

Evidence: https://preview.colorlib.com/theme/safario/ — HTTP 200 on 2026-10-23; measured `css/style.css` (41,540 bytes). Title served: "Safario Travel - Home".

- Hex census: `#6059f6` 25, `#999999` 17, `#888888` 15, `#f0e9ff` 13, `#2a2a2a` 7, `#f8f8ff` 3, `#ebebff` 1, `#7676ff` 1, `#d1cff4` 1 (count = literal occurrences in the sheet).
- Typefaces: Body: `Roboto`; Headings: `Roboto Condensed`.
- Radii: theme `5px` (4 — form controls), `12px` (2), `20px` (1), `50%` (4), plus the Bootstrap `.25rem` (20).
- Section order (shipped): `Navbar -> Hero -> Services -> About -> Tours -> Testimonials -> SearchPackage -> Blog -> Footer`.

### Deltas measured against the shipped app

- The app's brand violet matches the reference exactly (`--color-primary-500 #6059f6`, 25 occurrences).
- `#f0e9ff` (the reference's field fill) and `#999999` (search placeholders) are not tokenized in `apps/expedio`, which carries `--color-mist #f8f8ff` and `--color-smoke #888888` instead.
- Section order matches; the app adds the `SearchPackage` band the reference keeps inside the search bar.
