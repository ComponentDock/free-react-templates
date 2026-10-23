# Sunlodge — Design Notes

Reference: **Ecoho** — `https://colorlib.com/wp/template/ecoho/`  
Live preview: `https://preview.colorlib.com/theme/ecoho/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ecoho-free-template.jpg  
Shipped: https://sunlodge.free.componentdock.com

A hotel template with hero, about, popular rooms, video preview, booking and blog sections. Recreation of ColorLib "Ecoho" hotel template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page site.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Cormorant**, **Cormorant:wght@400;500;600;700**, **Josefin Sans**

## Design tokens (`apps/sunlodge/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#fd8f5f` | brand |
| `--color-brand-hover` | `#e67a45` | brand hover |
| `--color-sienna` | `#a85432` | sienna |
| `--color-sienna-hover` | `#8c4529` | sienna hover |
| `--color-brown` | `#391f14` | brown |
| `--color-navy` | `#140c40` | navy |
| `--color-offwhite` | `#f9f9ff` | offwhite |
| `--color-light-alt` | `#fbf9ff` | light alt |
| `--color-ink` | `#391f14` | ink |
| `--color-mute` | `#777777` | mute |
| `--color-muted-light` | `#999999` | muted light |
| `--font-heading` | `'Cormorant', Georgia, serif` | font heading |
| `--font-sans` | `'Josefin Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar renders with correct links and contact info | see fidelity note below |
| 2 | `Hero` | Hero displays headline with split layout | see fidelity note below |
| 3 | `About` | About section shows description and overlapping images | see fidelity note below |
| 4 | `PopularRooms` | Popular rooms section displays room cards | see fidelity note below |
| 5 | `VideoPreview` | Video preview section shows play button | see fidelity note below |
| 6 | `BookingForm` | Booking form displays all fields | see fidelity note below |
| 7 | `BlogCards` | Blog cards section shows post cards | see fidelity note below |
| 8 | `Testimonials` | Testimonials section shows client quotes | see fidelity note below |
| 9 | `InstagramFeed` | Instagram feed shows photo grid | see fidelity note below |
| 10 | `Footer` | Footer shows site info and Component Dock attribution | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The navbar shall display the brand name "Sunlodge" and navigation links: Home, Rooms, About, Blog, Contact. It shall show a "Book Now" CTA button. Contact info (phone, address) shall be visible on desktop. The navbar background shall be dark navy.

### `Hero`
The hero section shall show a dark brown left panel with headline "World Class Accommodation", subtitle text, and an orange "View More" CTA button. The right side shall display a hotel room photo.

### `About`
The about section shall display a centered heading, a two-column layout with descriptive text and a "Learn More" button on the left, and two overlapping hotel images on the right.

### `PopularRooms`
The popular rooms section shall display four room cards in a responsive grid. Each card shall show an image, room title, price per night, and description.

### `VideoPreview`
The video section shall display a background image with a centered play button and "Hotel Preview" label.

### `BookingForm`
The booking section shall show a two-column layout with descriptive text on the left and a form on the right. The form shall include Check In date, Check Out date, Room select, Guest select, and a "Check Availability" submit button.

### `BlogCards`
The blog section shall display three blog post cards in a responsive grid. Each card shall show an image, title, and description.

### `Testimonials`
The testimonials section shall display three testimonial cards. Each card shall show a title, quoted text, and author name.

### `InstagramFeed`
The Instagram section shall display six photo thumbnails in a responsive grid with hover overlay showing an Instagram icon.

### `Footer`
The footer shall display the brand name, description, social icons, navigation links, address, and contact info. It shall include a Component Dock attribution link.

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
- **Provenance ban.** No file under `apps/sunlodge/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sunlodge/public/CNAME` = `sunlodge.free.componentdock.com`
  and the package `homepage` = `https://sunlodge.free.componentdock.com`.
