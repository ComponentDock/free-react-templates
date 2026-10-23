# Blitz — Design Notes

Reference: **Rango** — `https://colorlib.com/wp/template/rango/`  
Live preview: `https://preview.colorlib.com/theme/rango/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/rango-free-template.jpg  
Shipped: https://blitz.free.componentdock.com

Blitz is a creative agency landing page template featuring a fixed navbar, hero slider section, icon boxes, about/features section with vertical content blocks, services carousel, features grid, call-to-action banner, text line section, newsletter form, and multi-column footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**, **Roboto**

## Design tokens (`apps/blitz/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#301b54` | brand |
| `--color-brand-light` | `#452b78` | brand light |
| `--color-brand-dark` | `#1b0b32` | brand dark |
| `--color-accent` | `#ff6b09` | Accent — bright orange CTAs (#ff6b09). |
| `--color-ink` | `#28262d` | Ink — dark text (#28262d). |
| `--color-paper` | `#f9f8fc` | Paper — light section backgrounds (#f9f8fc). |
| `--color-mist` | `#6e6e6e` | Mist — muted text (#6e6e6e). |
| `--color-light` | `#ffd9bf` | Light orange for highlights. |
| `--color-lavender` | `#9988ba` | Lavender accent (#9988ba). |
| `--color-divider` | `#e5e7eb` | Border color. |
| `--color-primary-50` | `#f0eef5` | Primary scale — deep purple. |
| `--color-primary-100` | `#d9d3e8` | primary 100 |
| `--color-primary-200` | `#b3a7d1` | primary 200 |
| `--color-primary-300` | `#8d7bba` | primary 300 |
| `--color-primary-400` | `#6a52a3` | primary 400 |
| `--color-primary-500` | `#301b54` | primary 500 |
| `--color-primary-600` | `#271544` | primary 600 |
| `--color-primary-700` | `#1b0b32` | primary 700 |
| `--color-primary-800` | `#140926` | primary 800 |
| `--color-primary-900` | `#0d051a` | primary 900 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Fonts: Poppins (headings) + Roboto (body). |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `IconBoxes` | Icon boxes section | see fidelity note below |
| 4 | `AboutSection` | About section | see fidelity note below |
| 5 | `Services` | Services section | see fidelity note below |
| 6 | `Features` | Features section | see fidelity note below |
| 7 | `Cta` | — | no dedicated spec block |
| 8 | `TextLine` | Text line section | see fidelity note below |
| 9 | `Newsletter` | Newsletter section | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
Blitz SHALL display a fixed navigation bar with the logo "Blitz" (stressed "z" in accent color), desktop navigation links (Home, About Us, Services, Portfolio, Blog, Contact), a search toggle, and a hamburger menu for mobile viewports.

### `Hero`
Blitz SHALL display a full-width hero section with a background image, overlay, headline "Modern design easy to use", subtitle text, and a "Discover More" CTA button.

### `IconBoxes`
Blitz SHALL display a three-column icon boxes section with a heading, CTA, and four feature cards (Great team, Modern Design, Online Marketing, Easy to use).

### `AboutSection`
Blitz SHALL display an about section on a dark purple background with an image on the left and three feature blocks on the right, each containing a heading, description, and person card.

### `Services`
Blitz SHALL display a services section with a grid of service cards, each containing an icon, title, description, and "Discover More" link.

### `Features`
Blitz SHALL display a features section with a three-column layout: left features, center image with CTA, and right features.

### `Cta`
*anchors only* — We love our customers

### `TextLine`
Blitz SHALL display a text line section with an image and "We integrate the future" headline with description and CTA button.

### `Newsletter`
Blitz SHALL display a newsletter section with a dark background, heading "Subscribe to our newsletter", email input, and subscribe button.

### `Footer`
Blitz SHALL display a footer with the brand logo, social icons (Pinterest, Facebook, Twitter, Dribbble, LinkedIn), link columns (Services, Menu, About), and a copyright bar linking to Component Dock.

## Reference evidence (re-captured 2026-10-23)

The stylesheet evidence recorded below is what the spec's token table is built
from. The first capture read `plugins/icon-font/styles.css` — an icon-font
plugin — and left the palette census empty. Plugin and vendor sheets
(`plugins/*`, `styles/bootstrap4/bootstrap.min.css`) only ship glyphs, the grid
and the reset; **the design system is `styles/main_styles.css`**, with
`styles/responsive.css` for the breakpoints.

| artifact | status | size | sha256 |
| --- | --- | --- | --- |
| `/theme/rango/` | HTTP 200 | 29,985 B | `04e954caed66…` |
| `styles/main_styles.css` | HTTP 200, 232 rules, 89 hex declarations | 26,362 B | `02645bf23652…` |
| `styles/responsive.css` | HTTP 200, 109 rules | 7,780 B | `44ec82494b49…` |

### Band-by-band (DOM order → background → type)

| # | band (source class) | component | background | fidelity notes |
| --- | --- | --- | --- | --- |
| 1 | `.header` (fixed, 128px → 80px scrolled) | `Navbar` | `rgba(27,11,51,0.52)` → `rgba(27,11,51,0.92)` | logo 36px/500 `#fefefe`, `letter-spacing:0.1em`, trailing glyph `#ff6b09`; search input on white with `0 8px 20px rgba(0,0,0,.15)` |
| 2 | hero slider (carousel, prev/next) | `Hero` | photographic slides | 54px-tall `.button`-less CTA row; arrows circular, `#a2baff` icon, hover icon `#251343` on `#ff6b09` scaling in; scroll-down `.double_arrow` white → hover `#ff6b09` |
| 2b | `.hero_side_text_container` (rotated −90°) | `Hero` | `#301b55` | 865×236 band pinned right, `h2` 30px/300 `#9878e2`, `p` 16px/300 white; hidden at ≤1280px in `responsive.css` |
| 3 | `.icon_boxes` | `IconBoxes` | white | heading + `span` kicker `#452b78` 18px/500 with 29px top gap; 3-up grid, `.icon_box_item` 63px bottom rhythm (43px mobile) |
| 4 | `.v_slider_section` | `AboutSection` | white band, purple cards | image left, vertical slick slider right; `.person_image` 44px circle, name 15px `#28262d`, title 13px `#909090` |
| 5 | `.services` | `Services` | white | 7-card owl carousel; **centre card** `#452b78` with white copy and `#9c83ce` 50px icon; dots 10px `#d6cbed` → active 18px `#452b78` (rectangular sheet, only circles) |
| 6 | `.features` | `Features` | `#fafbfb`, 120/130px padding | 3-col at `col-lg-4`: two `.features_item` blocks in the left column, a centre column with `.features_image` + `.features_button`, then two more items in the right column closed by `.features_button_2`; both buttons fill `#452b78` on hover; mobile order flips image first (`order-lg-2 order-1`) |
| 7 | `.cta` | `Cta` | `#b0d5db` under `.cta_background` photo | 116/101px padding, white h1 + 16px/500 white copy; `.cta_image` 776px wide sits on the right, stacks under the copy on mobile |
| 8 | `.text_line` | `TextLine` | white, 127/118px padding | copy left, `.text_line_image` absolute bottom-right; `.text_line_button` fills `#452b78` on hover |
| 9 | `.newsletter` | `Newsletter` | `#1b0d37`, 110/141px padding | white h1 + 16px/500 `span`; `.newsletter_email` 53px `#452b78` white text; `.newsletter_submit_button` uppercase 14px/700 filling `#452b78` on hover; mobile: field 40px |
| 10 | `.footer` | `Footer` | white | logo `#452b78`, intro 16px, social icons 12px `#bab6c3` → hover `#1b0d37`, column titles 18px/500 `#28262d`, links 16px/500 `#909090` → `#28262d`, credit 16px/500 `#cacaca` |

### Type + shape contract

- Body: `Poppins` 15px / line-height 2 / 400, colour `#6e6e6e`, on `#ffffff`.
- Headings: `Poppins`, ink `#28262d`, h1 48px / h2 24px / h3 18px
  (mobile 36 → 24 and h2 20).
- Button labels: `Roboto` 14px / 700 / uppercase; `.button` is 174×54 with a
  2px `#452b78` border and **no border radius** (140×40 on mobile).
- The only `border-radius` in the sheet is `50%` — dots, arrows, avatars. Any
  rounded card or pill button in the recreation would be a fidelity break.
- Selection: `#ffd9bf` text on `#ff6b09`.

### Token drift vs the shipped app

`apps/blitz/src/index.css` already carries `#452b78`, `#ff6b09`, `#28262d`,
`#6e6e6e`, `#fafbfb`-adjacent paper, `#1b0b32` (deep purple) and the
Poppins/Roboto pair, so the implementation matches the sheet. The one mismatch
is `--color-brand: #301b54` where the sheet's primary is `#452b78` and
`#301b54` appears only on `.search_button:active` — the darker purple reads as a
deliberate accent in the header, not a fidelity break, but it must not be used
as the general CTA fill.

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
- **Provenance ban.** No file under `apps/blitz/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/blitz/public/CNAME` = `blitz.free.componentdock.com`
  and the package `homepage` = `https://blitz.free.componentdock.com`.
