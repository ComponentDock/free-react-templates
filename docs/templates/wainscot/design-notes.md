# Wainscot — Design Notes

Reference: **Tangre** — `https://colorlib.com/wp/template/tangre/`  
Live preview: `https://preview.colorlib.com/theme/tangre/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/tangre-free-template.jpg  
Shipped: https://wainscot.free.componentdock.com

Wainscot is a single-page furniture & interior design website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/wainscot/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#3face4` | brand |
| `--color-ink` | `#222222` | ink |
| `--color-body` | `#777777` | body |
| `--color-surface` | `#f9f9ff` | surface |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Top utility bar | see fidelity note below |
| 2 | `Navbar` | Navbar | see fidelity note below |
| 3 | `Hero` | Hero section | see fidelity note below |
| 4 | `News` | Latest news strip | see fidelity note below |
| 5 | `Offer` | Offer area with stats | see fidelity note below |
| 6 | `Projects` | Completed projects gallery | see fidelity note below |
| 7 | `Testimonials` | Testimonials | see fidelity note below |
| 8 | `Blog` | Blog strip | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `TopBar`
The system SHALL render a thin white top bar above the navbar with a phone number on the left (icon + "012-6532-568-9746"), four social icon links in the center (Facebook, Twitter, Dribbble, Behance style glyphs — use inline SVG brand icons), and a brand-blue "GET FREE QUOTE" button on the right (`#3face4` background, white text, small padding, uppercase). On mobile the bar SHALL hide the social icons and keep phone + CTA, or collapse as needed to stay usable.

### `Navbar`
The system SHALL render a white navbar below the utility bar with the brand logo on the left (a blue diamond mark with a white cross — recreated as an inline SVG/wordmark for "Wainscot", no image asset copy) and a right-aligned nav with uppercase links HOME, PORTFOLIO, ABOUT, BLOG (with dropdown), PAGES (with dropdown), CONTACT (dark text, hover brand blue). On mobile a hamburger SHALL open a responsive menu with the same links.

### `Hero`
The system SHALL render a full-bleed hero with a cover photo of a modern interior (placeholder image — an airy light-blue-paneled room, subject verified via the picsum seed), a large thin white headline "Creativity Beyond Life" (Poppins 300, 48px/54px, left-aligned over the photo) and a white "Hire Us Now!" button (`background: #fff`, dark text, 5px radius, 42px line-height).

### `News`
The system SHALL render a white section titled "Latest News from all categories" (large section heading + one-line lorem subtext) with three cards in a row, each with a photo, a title (h4) and a short paragraph. Source titles: "Addiction Whit Gambling", "Headset No Longer Wired", "Life Advice Looking At Window" — paraphrase to interior/furniture-flavored titles keeping the same card structure.

### `Offer`
The system SHALL render a dark (`#222`) section containing: a 4-column stat row — "1.5K Happy Clients", "10 Years of Experience", "250 Professionals", "369 On Going Job" (large white numbers + labels) — followed by the heading "We can be your digital Problems Solution Partner" (white), a short paragraph (grey), and two buttons: "What we Offer" (transparent bg, 1px white border, white text) and "Get a free Quote" (solid white bg, dark text).

### `Projects`
The system SHALL render a white section titled "Our Recent Completed Projects" with a one-line subtext and a filter tab row: All Categories / Branding / Image Manipulation / Creative Work / Web Design / Print Material. Below the tabs a 3-column grid (2 rows) of six project cards, each with a cover image and a title. Source titles: "3D Helmet Design", "2D Vinyl Design", "Creative Poster Design", "Embosed Logo Design", "3D Disposable Bottle", "3D Logo Design" — paraphrase to design-work titles while keeping six cards. Filter tabs are presentational (clicking may filter visually or be non-functional; implement a simple active-state toggle).

### `Testimonials`
The system SHALL render a photo-background testimonial section with a carousel of quote cards. Each card shows a quote paragraph ("Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector, hardware." — paraphrase), the person's name (e.g. "Mark Alviro Wiens"), and their role ("CEO at Google" — paraphrase to a plausible role). The carousel SHALL cycle through at least two testimonials with previous/next controls (or auto-advance with manual dots); implement one accessible carousel pattern.

### `Blog`
The system SHALL render a white section titled "Latest From Our Blog" with a one-line subtext and four blog cards in a row. Each card has a small date line ("10 Jan 2018"), a title (h4), a short excerpt, and a like/comment count line ("15 Likes" / "02 Comments" with icons). Source titles: "Cooking Perfect Fried Rice in minutes", "Secret of making Heart Shaped eggs", "How to check steak if it is tender or not", "Addiction When Gambling Becomes A Problem" — paraphrase to interior/furniture blog post titles.

### `Footer`
The system SHALL render a dark (`#222`) footer with three columns: "Top Products" (links: Managed Website, Manage Reputation, Power Tools, Marketing Service), "Newsletter" (subtext "You can trust us. we only send promo offers, not a single spam." + an email input + a brand-blue "Subscribe" button; a valid submission SHALL show a success state, no backend), and "Instagram Feed" (a grid of 8 thumbnail images). Below the columns a copyright bar SHALL read "Copyright © <year> All rights reserved | This template is made with ♥ by Component Dock" where "Component Dock" links https://www.componentdock.com/ (replacing the source's Colorlib credit).

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
- **Provenance ban.** No file under `apps/wainscot/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/wainscot/public/CNAME` = `wainscot.free.componentdock.com`
  and the package `homepage` = `https://wainscot.free.componentdock.com`.
