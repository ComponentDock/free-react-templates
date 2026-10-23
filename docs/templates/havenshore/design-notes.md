# Havenshore — Design Notes

Reference: **Ocheandeview** — `https://colorlib.com/wp/template/ocheandeview/`  
Live preview: `https://preview.colorlib.com/theme/ocheandeview/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ocheandeview-colorlib-template.jpg  
Shipped: https://havenshore.free.componentdock.com

A Hotel & Resort Landing template with hero, booking form with date and instagram gallery sections. Recreate the ColorLib "Ochean de View" hotel/resort landing template as a React application under the name "Havenshore", matching the original's section order, layout, and design tokens.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Cormorant Garamond**, **Cormorant Garamond:wght@300;400;500;600;700**, **Raleway**

## Design tokens (`apps/havenshore/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#85856d` | brand |
| `--color-brand-dark` | `#6d6d5a` | brand dark |
| `--color-ink` | `#3c3a34` | Ink — dark brown headings (#3C3A34). |
| `--color-ink-dark` | `#2a2822` | ink dark |
| `--color-paper` | `#fafaf8` | Paper — light section background (#FAFAF8). |
| `--color-mist` | `#94817e` | Mist — muted body text (#94817E). |
| `--color-sage` | `#b8b8a0` | Sage — button primary (#B8B8A0). |
| `--color-surface` | `#16161a` | Dark surface (#16161a) for footer. |
| `--color-primary-50` | `#f5f5f0` | primary 50 |
| `--color-primary-100` | `#e8e8df` | primary 100 |
| `--color-primary-200` | `#d4d4c5` | primary 200 |
| `--color-primary-300` | `#b8b8a0` | primary 300 |
| `--color-primary-400` | `#a0a08a` | primary 400 |
| `--color-primary-500` | `#85856d` | primary 500 |
| `--color-primary-600` | `#6d6d5a` | primary 600 |
| `--color-primary-700` | `#565648` | primary 700 |
| `--color-primary-800` | `#404038` | primary 800 |
| `--color-primary-900` | `#2a2a26` | primary 900 |
| `--font-sans` | `'Raleway', ui-sans-serif, system-ui, sans-serif` | Fonts: Cormorant Garamond (display) + Raleway (body). |
| `--font-display` | `'Cormorant Garamond', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar renders with transparent header, logo, phone, and Book Now CTA | see fidelity note below |
| 2 | `Hero` | Hero section displays heading, tagline, and scroll arrow | see fidelity note below |
| 3 | `BookingForm` | Booking form with date inputs, guest select, and submit button | see fidelity note below |
| 4 | `VideoIntro` | Video intro section with heading, description, and play button | see fidelity note below |
| 5 | `RoomGallery` | Instagram gallery strip | see fidelity note below |
| 6 | `Pampering` | Pampering section with heading and description | see fidelity note below |
| 7 | `AboutFeatures` | About features section with three alternating image-text rows | see fidelity note below |
| 8 | `FullWidthImage` | — | no dedicated spec block |
| 9 | `Testimonials` | Testimonials section with quote cards | see fidelity note below |
| 10 | `InstagramGallery` | — | no dedicated spec block |
| 11 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The navbar SHALL display a transparent sticky header with the logo text "Havenshore", a phone number, a "Book Now" CTA button, and a hamburger menu icon for mobile.

### `Hero`
The hero section SHALL display a full-width background image with overlay, the heading "Havenshore", a tagline about going offline, and a down-arrow link.

### `BookingForm`
The booking form SHALL display check-in and check-out date inputs, a guest count dropdown, and a "Check Availability" submit button.

### `VideoIntro`
The video intro SHALL display a heading "The shelter is the Outcome of the Dream", descriptive paragraphs, and a video play button overlay.

### `RoomGallery`
The instagram gallery SHALL display a horizontal strip of images with Instagram icon overlays.

### `Pampering`
The pampering section SHALL display the heading "Pampering Included" and descriptive text.

### `AboutFeatures`
The about features section SHALL display a heading "Joyful experiences for you and your family" and three feature rows: "A world-class restaurant", "Swimming Pool", and "Party Center", each with an image and descriptive text.

### `FullWidthImage`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Testimonials`
The testimonials section SHALL display the heading "Hear what our past guests have to say" and testimonial cards with quotes, author names, and roles.

### `InstagramGallery`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Footer`
The footer SHALL display a dark background, logo, navigation links, contact info, social icons, and a copyright line linking to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/havenshore/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/havenshore/public/CNAME` = `havenshore.free.componentdock.com`
  and the package `homepage` = `https://havenshore.free.componentdock.com`.
