# Lotwise (ColorLib Auction) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-lotwise`. Recreation name: **Lotwise** (NEW name —
> the ColorLib source keeps its name "Auction").

## Source mapping

- **ColorLib item:** "Auction" (TEMPLATES.md line 898).
- **Source URL:** https://colorlib.com/wp/template/auction/
- **Preview URL — REACHABLE (verified via curl):**
  **`https://preview.colorlib.com/theme/auction/`**
  Returns full HTML with 8 sections, multiple CSS files.
- **Preview CSS:** `css/style.css` (custom theme, ~1000 lines) +
  `css/bootstrap.min.css` (Bootstrap 4) + `css/owl.carousel.min.css` +
  `css/aos.css` + `css/jquery-ui.css` + `fonts/flaticon/font/flaticon.css`
  + `fonts/icomoon/style.css`. Font loaded: `@import Google Fonts Muli 300,400,700,900`.
  Icons: Flaticon + Icomoon — REPLACE with lucide-react, do not ship.

## Reference research (done — do not redo)

### Screenshot (`auction-free-template.jpg`)

Visual design from the TEMPLATES.md preview image and live page:
- Orange brand color (#f37121) prominent in headings, icons, price badges, section overlays
- Clean white sections alternating with full-bleed background images
- Muli font — geometric, modern, clean
- Full-viewport hero with background image and centered CTA
- Product grid with circular price badges overlapping images
- Orange circular step icons with arrow connectors
- Testimonials section with orange-tinted overlay over background image

### Design tokens (live stylesheet + rendered page, verified)

| Token           | Value                                                  | Use                                                          |
| --------------- | ------------------------------------------------------ | ------------------------------------------------------------ |
| Brand orange    | `#f37121`                                              | Headings, captions, step icons, price badges, overlay, active states |
| Bootstrap blue  | `#007bff`                                              | `.btn-primary` (hero Register button) — Bootstrap default    |
| Black           | `#000`                                                 | Item titles, step titles, text-black utility                 |
| Body text       | `#999999`                                              | Paragraphs, base font                                        |
| Dark text       | `#25262a`, `#343a40`                                  | Dropdown links, mobile menu text                             |
| Light bg        | `#f8f9fa`                                              | Footer bg, bid button bg                                     |
| Muted link      | `#777`                                                 | Footer links                                                 |
| Border          | `#edf0f5`                                              | Dropdown borders                                             |
| Font            | `Muli` 300/400/700/900, sans-serif                    | Google Fonts; base 15px/1.7 weight 300                        |
| Caption         | 11px, uppercase, letter-spacing .2rem, weight 700     | `.caption` class                                             |
| Hero heading    | 60px desktop / 34px mobile, weight 900, white         | `.intro-section h1`                                          |
| Hero subtitle   | 20px, white 80% opacity                               | `.intro-section p`                                           |
| Button radius   | `0px` (sharp corners)                                 | `.btn` border-radius 0                                       |
| Button padding  | `14px 20px`                                            | `.btn`                                                       |
| Price badge     | 90×90px circle, `#f37121` bg, white text, 20px bold  | `.auctions-entry .item .price` (absolute positioned)         |
| Bid button      | `#f8f9fa` bg, black text, 7px 15px, no transform     | `.btn-bid`                                                   |
| Step icon       | 90×90px circle, `#f37121` bg, white icon 40px        | `.step .wrap-icon`                                           |
| Step arrow      | icomoon `\e315` (right chevron), black 30px           | `.step:after` — REPLACE with lucide ChevronRight             |
| Testimonial     | 50px round avatar, name 1.2rem, role below            | `.ftco-testimonial-1`                                        |
| Section overlay | `#f37121` at 0.9 opacity                              | `.section-bg.style-1:before` (testimonials bg)               |
| Hero overlay    | `rgba(0,0,0,0.2)`                                     | `.intro-section:before`                                      |
| Section padding | `2.5em 0` mobile / `5em 0` desktop                    | `.site-section`                                              |
| Card shadow     | `0 1px 2px rgba(0,0,0,0.05)`                          | `.auctions-entry .item`                                      |
| Footer          | `#f8f9fa` bg, 4rem 0 padding                          | `.footer`                                                    |
| Dropdown        | white bg, orange top border, shadow                   | `.has-children .dropdown`                                    |
| Mobile menu     | 300px slide-in from right, white bg, shadow           | `.site-mobile-menu`                                          |
| Pagination      | 40px circle, `rgba(243,113,33,0.1)` bg, orange text  | `.custom-pagination a` (active: solid orange bg, white text) |

### Icon mapping (lucide — replace Flaticon + Icomoon)

| Source glyph (Flaticon/Icomoon) | Recreation                |
| -------------------------------- | ------------------------- |
| `icon-user` (Register)           | lucide `UserPlus`         |
| `icon-money` (Buy or Bid)        | lucide `DollarSign`       |
| `icon-glass` (Submit a bid)      | lucide `Gavel`            |
| `icon-trophy` (Win)              | lucide `Trophy`           |
| `icon-paper-plane` (Fast Support)| lucide `Send`             |
| `icon-smile-o` (Happy Customers) | lucide `Smile`            |
| `icon-support` (24/7 Support)    | lucide `Headphones`       |
| `\e315` (step arrow)             | lucide `ChevronRight`     |
| `icon-close2` (mobile close)     | lucide `X`                |
| `icon-menu` (hamburger)          | lucide `Menu`             |

### Picsum placeholder plan

- Hero background: `https://picsum.photos/seed/lotwise-hero/1920/1080`
- Product images (8): `https://picsum.photos/seed/lotwise-prod-1/400/300` through `lotwise-prod-8`
- Testimonial avatars (4): `https://picsum.photos/seed/lotwise-face-1/100/100` through `lotwise-face-4`
- About section image: `https://picsum.photos/seed/lotwise-about/800/600`
- Testimonials bg: `https://picsum.photos/seed/lotwise-test-bg/1920/800`
- Logo: text-based "Lotwise" (no image needed; source uses logo.png)

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/lotwise` from the simplest existing app
       (`cp -r apps/<simplest> apps/lotwise`), rename package to
       `@free-react-templates/lotwise`, add Muli 300/400/700/900
       Google Fonts `<link>` in index.html, set `public/CNAME` =
       `lotwise.free.componentdock.com` + `"homepage"`. Register the
       workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): Navbar (logo text, nav links, dropdown
       presence, mobile menu toggle), Hero (heading, subtitle, Register
       button), AuctionsGrid (8 product cards with price badge, image,
       title, category, bid count, bid button), HowItWorks (4 steps
       with icons, titles, descriptions, arrow connectors), AboutUs
       (image + 3 features with icons), Testimonials (carousel of
       testimonial cards with avatar, name, role, quote), CTA (text +
       button), Footer (4 columns, copyright, Component Dock link),
       App (landmarks, document title "Lotwise — Buy, Bid & Sell").
3. [ ] Navbar: transparent/absolute over hero, white text. Logo as text
       "Lotwise" (font-weight 900, 1.3rem). Nav links: Home, Buy, Sell,
       Services (dropdown with 3 items), Blog, About, Contact. "Sign In /
       Register" link right-aligned. Mobile: slide-in menu from right
       (300px width, white bg, dark text).
4. [ ] Hero section: full-viewport background image (cover, min-height
       500px), dark overlay (rgba(0,0,0,0.2)), centered content:
       60px bold white heading, 20px white subtitle, "Register" blue
       button (Bootstrap primary). Responsive: heading 34px on mobile.
5. [ ] Auctions grid: section with orange caption "Auctions", heading
       "Current Auctions" (text-black). 4-column responsive grid of 8
       product cards. Each card: position relative, image with absolute
       90px orange circle price badge (top-left), 22px bold black title,
       flex row with category + bid count, "Submit a Bid" button (light
       bg, no radius). Use picsum placeholders for product images.
6. [ ] How It Works: caption "How?", heading "How It Works". 4 steps in
       a row (col-lg-3 each). Each: 90px orange circle icon, 20px bold
       title, description. ChevronRight arrow connectors between steps
       (last step has none). Use lucide icons.
7. [ ] About Us: split layout (col-lg-7 image, col-lg-5 features).
       Image uses picsum placeholder. Features: caption "About?",
       heading "About Us", 3 inline icon+text items (Fast Support,
       Happy Customers, 24/7 Support) with lucide icons.
8. [ ] Testimonials: background image section with orange overlay
       (0.9 opacity). Caption "Testimonials", heading "Happy Clients"
       (white). Carousel of testimonial cards: 50px round avatar, name
       (1.2rem), role, quote text (white). Use simple auto-rotating
       carousel or static list.
9. [ ] CTA section: centered text "Create an account and start Buy,
       Bid or Sell Now!" + "Register" primary button.
10. [ ] Footer: `#f8f9fa` background, 4 columns — Logo+description,
        Solutions (links), Services (links), Contact (links).
        Copyright line centered at bottom. Footer MUST link Component Dock.
11. [ ] Run `npm run verify:app -- lotwise` (typecheck → lint → vitest
        100% → build) and fix until green.
12. [ ] Open PR `feat/template-lotwise` → merge immediately
        (`gh pr merge --squash --delete-branch`); PR description must
        include: source URL, preview URL, token list (#f37121 orange,
        Muli font, 90px circle icons/badges, sharp buttons, orange
        testimonial overlay), and what differs (renamed "Lotwise",
        Muli via Google Fonts, lucide icons replacing Flaticon/Icomoon,
        picsum placeholders, text-based logo, Component Dock footer).
13. [ ] Bookkeeping after merge: mark TEMPLATES.md line 898 `[x]` + surge
        URL (`https://lotwise.free.componentdock.com`), `npm run
        readme:status`, push.
