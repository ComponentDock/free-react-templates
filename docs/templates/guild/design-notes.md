# Guild — Design Notes

Reference: **The Quest** — `https://colorlib.com/wp/template/the-quest/`  
Live preview: `https://preview.colorlib.com/theme/thequest/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/thequest-free-template.jpg  
Shipped: https://guild.free.componentdock.com

Guild is a single-page gaming-community blog website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@400;500;700**

## Design tokens (`apps/guild/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#10ddb4` | brand |
| `--color-ink` | `#161616` | ink |
| `--color-meta` | `#8c8c8c` | meta |
| `--color-cata-1` | `#10ddb4` | cata 1 |
| `--color-cata-2` | `#ff1980` | cata 2 |
| `--color-cata-3` | `#ffe119` | cata 3 |
| `--color-cata-4` | `#5da9e4` | cata 4 |
| `--color-cata-5` | `#bd9bd2` | cata 5 |
| `--color-cata-6` | `#f89843` | cata 6 |
| `--color-post-link` | `#ffea00` | post link |
| `--color-video-play` | `#ff2260` | video play |
| `--color-header` | `#353535` | header |
| `--color-section` | `#1c1c1c` | section |
| `--color-section-2` | `#222222` | section 2 |
| `--color-video` | `#2d2d2d` | video |
| `--color-footer` | `#000000` | footer |
| `--color-dot` | `#7a7e7d` | dot |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header — logo, nav, ad | see fidelity note below |
| 2 | `HeroSlider` | Hero slider | see fidelity note below |
| 3 | `BlogSection` | Blog section | see fidelity note below |
| 4 | `BlogListSection` | Blog list section | see fidelity note below |
| 5 | `VideoSection` | Video promo section | see fidelity note below |
| 6 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a dark (`#353535`) header absolutely positioned over the hero, full-width, containing a logo image (left), a nav with the links Home / Characters / Games / Reviews / News / Page (16px/500 white, generous 44px vertical padding), and a promo ad image on the right. On mobile a hamburger SHALL open a dark menu with the same links.

### `HeroSlider`
The system SHALL render a 2-slide hero slider (each slide 804px tall, flex-centered, cover background image positioned top-center) with centered content: an "Enter the Battle" title (96px/700 white), a blurb paragraph (20px), and a pill "Read More" button (mint `#10ddb4` bg, `#161616` uppercase 14px/600 text, radius 50px). Slider dots SHALL be 9×9px circles (`#7a7e7d` inactive / `#10ddb4` active) at the right-bottom of the hero.

### `BlogSection`
The system SHALL render a dark (`#1c1c1c`, 106px vertical padding) section with an 8-column posts column and a 4-column sidebar. The posts column SHALL show a featured post (full-width photo, mint date badge "April 1, 2019", white h3 title "The best games of 2019", meta row "By Admin | in Games | 3 Comments" with the category link in `#ffea00`, excerpt, pill Read More button) followed by four regular posts (photo, date badge, white h4 title, meta row, excerpt, Read More) with the same layout.

### `BlogListSection`
The system SHALL render a second dark section (`#222222`) with an 8-column list of 4 compact posts (166px left thumbnail, date, white h6 title, meta row, excerpt) and a 4-column sidebar containing only a "Top 5 this week" widget: 5 items each numbered `01`–`05` with a thumbnail, date, h6 title, and meta row.

### `VideoSection`
The system SHALL render a video promo section (`#2d2d2d`, 70px vertical padding, centered) with a logo image and the tagline "2018's Best Game", plus a video thumbnail with a centered pink (`#ff2260`) pill play button (100×56, radius 50px, white play icon) linking to the source's YouTube video (or a placeholder).

### `Footer`
The system SHALL render a black footer with five columns: about (logo + paragraph), Useful Links (Games / testimonials / Reviews / Characters / Latest news), Services (About us / Services / Become a writer / Jobs / FAQ), Careers (Donate / Services / Subscriptions / Careers / Our team), and a latest-posts widget titled "Useful Links" (2 text items: date, h6 title, meta row). A centered copyright bar (16px `#8c8c8c`) SHALL read "Copyright © <year> All rights reserved | This template is made with ♥ by **Component Dock**" where "Component Dock" links https://www.componentdock.com/ (no Colorlib credit).

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
- **Provenance ban.** No file under `apps/guild/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/guild/public/CNAME` = `guild.free.componentdock.com`
  and the package `homepage` = `https://guild.free.componentdock.com`.
