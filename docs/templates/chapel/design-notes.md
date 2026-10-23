# Chapel — Design Notes

Reference: **Libchurch** — `https://colorlib.com/wp/template/libchurch/`  
Live preview: `https://preview.colorlib.com/theme/libchurch/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/libchurch-free-template.jpg  
Shipped: https://chapel.free.componentdock.com

Recreate the ColorLib "Libchurch" church event template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page app. The template provides a full church website with hero, events, about, services, sermons, blog, newsletter, and contact sections.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lora**, **Lora:ital,wght@0,400;0,700;1,400**, **Open Sans**

## Design tokens (`apps/chapel/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#dd3e3e` | brand |
| `--color-brand-hover` | `#c43636` | brand hover |
| `--color-nav` | `#3c1919` | nav |
| `--color-section` | `#f6f8f9` | section |
| `--color-ink` | `#252525` | ink |
| `--color-body` | `#636363` | body |
| `--color-mist` | `#e8eaed` | mist |
| `--color-white` | `#ffffff` | white |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Lora', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | TopBar renders social links and countdown | see fidelity note below |
| 2 | `Navbar` | Navbar displays site name, donation CTA, and navigation | see fidelity note below |
| 3 | `Hero` | Hero section renders heading and CTA | see fidelity note below |
| 4 | `EventSpotlight` | EventSpotlight shows event details and countdown | see fidelity note below |
| 5 | `About` | About section renders heading, text, CTA, and image | see fidelity note below |
| 6 | `Services` | Services section renders three cards | see fidelity note below |
| 7 | `Sermon` | Sermon section displays sermon details | see fidelity note below |
| 8 | `EventList` | EventList renders upcoming events | see fidelity note below |
| 9 | `Blog` | Blog section renders post cards | see fidelity note below |
| 10 | `Newsletter` | Newsletter renders email subscription form | see fidelity note below |
| 11 | `ContactInfo` | ContactInfo displays contact details | see fidelity note below |
| 12 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `TopBar`
The top bar SHALL display social media icon links and an event countdown timer.

### `Navbar`
The navbar SHALL show the site logo/name, a "Send Donation" button, and navigation links with mobile hamburger menu.

### `Hero`
The hero SHALL display a background image with overlay, heading text, paragraph, and a call-to-action button.

### `EventSpotlight`
The event spotlight section SHALL display the next event's date, title, time, location, and countdown.

### `About`
The about section SHALL show the heading, descriptive paragraphs, a CTA button, and a complementary image.

### `Services`
The services section SHALL display three service cards (Our Values, Our Vision, Our Mission) each with an icon, description, and read-more link.

### `Sermon`
The sermon section SHALL show the sermon title, preacher, categories, date, description, and download action links.

### `EventList`
The event list SHALL display event items with thumbnails, dates, authors, locations, descriptions, and read-more buttons.

### `Blog`
The blog section SHALL display three blog post cards with thumbnails, dates, titles, authors, and categories.

### `Newsletter`
The newsletter section SHALL display a heading and an email input with a subscribe button.

### `ContactInfo`
The contact section SHALL show the heading, address, email, and phone number.

### `Footer`
The footer SHALL display the copyright line with a link to Component Dock and social media icon links.

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
- **Provenance ban.** No file under `apps/chapel/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/chapel/public/CNAME` = `chapel.free.componentdock.com`
  and the package `homepage` = `https://chapel.free.componentdock.com`.
