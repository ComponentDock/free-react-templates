# Kicker (ColorLib Megasis) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-kicker`.

## Design notes (replication findings)

- **Original:** ColorLib "Megasis" — bold, high-contrast MAGAZINE / NEWS
  homepage (page title "Magazine News"; source:
  https://colorlib.com/wp/template/megasis/, appears in the Bootstrap 5 AND
  Magazine categories — TEMPLATES.md lines 604 + 2202, mark ALL `[x]` when
  done).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/megasis/
  (HTTP 200, ~32 KB HTML; `assets/css/style.css` ~236 KB parsed for tokens).
  Stack: Bootstrap 5 + slick (bottom carousel) + slicknav (mobile menu) +
  owl.carousel + magnific-popup (video lightbox) + Font Awesome +
  themify-icons + nice-select — recreate ALL interactivity client-side in
  React.
- **Screenshot:** `megasis-colorlib-template.jpg` (1200×946, viewed in
  browser) — red "MEGASIS" wordmark top-left with geometric icon; "Sign In"
  - socials top-right; category nav bar; hero split: big feature photo left
    (telescope mirror honeycomb) with red "Technology" tag + huge serif
    headline + "by Pete Sariya", three stacked stories right; "Arts & Culture"
    heading + See All + 3-card grid with red tags (Health / Culture / Video).
    Stark white canvas, near-black text, dark-red accent; serif headlines +
    clean sans nav/tags. (No search icon in the DOM — the screenshot vision
    over-reported; trust the DOM.)
- **New name:** Kicker (journalism: the short attention-grabbing line above
  a headline — the red category tags ARE kickers). Single lowercase word,
  no collision with `apps/` or existing spec folders. NOT "megasis" — never
  reuse the source name.
- **Visual design (DOM + CSS tokens + screenshot):** BRAND RED `#C70D0D`
  (kicker tags, Send Now button, all headline hovers, video play icon) +
  INK `#131313` (headlines, section-title top rule 4px, nav links, input
  underline, and the DARK section/footer backgrounds) + `#C2C5DB` footer
  text + `#F3F3F3` newsletter bg + `#DFDFDF` divider. Two fonts: Chivo
  (nav/tags/headings/buttons) + Shippori Mincho (body serif 16px). Section
  title pattern: `border-top: 4px solid #131313` + bold h2 + underlined
  "See All" link. Cards: image + red kicker (14px Chivo 700) + 30px bold
  headline (hover red) + "by <author>" byline. Video play: white 90px circle
  - red icon + pulsing ring (63px rgba(255,255,255,.2)); hover → red bg.

## Structure (1:1, section order — from the live DOM)

1. **Header** (`header-area > main-header`):
   - `.header-top` (padding 0 88px): left red wordmark logo; right: "Sign
     in" link (ink, border-right `#DFDFDF`) + social icons (facebook,
     instagram, twitter, youtube, vimeo).
   - `.header-bottom.header-sticky` (padding 0 88px): logo2 + `.main-menu`
     (desktop): Home, Page ▾ (Blog, Blog Details, Post Details, Category,
     Element, Contact), Science, Technology, Beauty, Health, Arts & Culture,
     Opinion, Videos, Gallery — ink Chivo 18px 700; `.mobile_menu` hamburger
     (slicknav) → collapse panel.
2. **Hero split** (`whats-news-area mt-20 pb-30`, padding 0 88px):
   - LEFT col-7: `.trending-top` — photo + red span "Technology" + h2 44px
     "The world's first fitness influencer was a Victorian strongman"
     (margin-right 120px) + "by Pete Sariya".
   - RIGHT col-5: 3× `.whats-right-single` (img + red span + h4 22px):
     "Needs to Rename the James Webb Space Telescope", "These striking
     photos capture the future of human flight", "Exploring the origins of
     punk across America with Kid Karate".
3. **Arts & Culture** (`technology-area`, padding 0 88px):
   - `.section-tittle` (4px ink top rule, padding-top 30px): h2 30px "Arts &
     Culture" + underlined "See All".
   - MAIN col-10: 3 cards (col-lg-4) `.technology-post` — photo, red span
     (Health / Culture / video), h3 30px (23/20/18 responsive), byline;
     middle card has `.video-icon` play. Headlines: "Substituting 'follow
     your passion' with 'find your purpose'", "Ibuprofen should not be used
     for managing symptoms", "Fearing corona recession, France announces".
   - SIDEBAR col-2: `.google-add` ad placeholder (hidden < xl).
4. **Science Update grid** (`technology-area mb-30`): section-tittle "Science
   Update" + See All; 4 cards (col-lg-3): "26 last-minute holiday gifts that
   are still thoughtful and unique", "The Amex Business Platinum vs. the
   Amex Business Gold", "Lights that warn planes of obstacles were exposed
   to Open Internet", "Substituting 'follow your passion' with 'find your
   purpose'".
5. **Video Gallery — DARK** (`whats-news-area2`, bg `#131313`):
   - `.section-tittle2`: WHITE h2 "Video Gallery" + white See All.
   - LEFT: trending-top video card — thumbnail + `.video-icon` (pulsing
     white circle) + white h2 30px (same feature headline — VARY).
   - RIGHT: 3× `whats-right-cap2` video stories — white h4 22px, kickers
     rgba(255,255,255,.5) (VARY the rail headlines).
6. **Science Update carousel** (`technology-area mt-60 mb-60`):
   - `.section-tittle` "Science Update" + See All; `.technology-active`
     carousel: 5× `.technology-post2` cards (margin 0 12px, arrows above
     track right-aligned, top -60px); below `.googl-add2` centered ad strip.
7. **Newsletter** (`subscribe-area`, bg `#F3F3F3`, padding 80px 0 70px,
   centered col-7/8/9): h2 44px "Subscribe to the newsletter" + "Get a
   weekly digest of our most important stories direct to your inbox."; form:
   input (60px, transparent, 2px ink bottom border, placeholder "Enter your
   mail") + red "Send Now"; disclaimer pera below.
8. **Footer** (`footer-wrapper`, bg `#131313`, padding 100px 0): 4 columns —
   About (Our Story, Mission, About Us, News), Categories (Work, Services,
   Products, Tips & Tricks), Categories (Work, Services, Products, Tips &
   Tricks), Quick Links (Privacy Policy, Privacy Statement, Use of cookies,
   International Editions) — white 20px h4, `#C2C5DB` links; bottom bar
   (border-top rgba(255,255,255,.1), padding 33px 0 20px): "Copyright ©
   <year> All rights reserved | made with ♥ by <Component Dock link>".
9. Back-top scroll button (optional).

## Tasks

1. Scaffold app: copy simplest existing app → `apps/kicker`, rename package
   `@free-react-templates/kicker`, register workspace (lockfile-only), set
   public/CNAME `kicker.free.componentdock.com` + homepage.
2. Theme: `@theme` tokens — brand `#C70D0D`, ink `#131313`, footer text
   `#C2C5DB`, light `#F3F3F3`, divider `#DFDFDF`; Chivo + Shippori Mincho
   Google Fonts `<link>` in index.html.
3. Tests first (TDD, 100% coverage): header, hero split, Arts & Culture
   grid, Science grid, Video Gallery dark, carousel, newsletter, footer.
4. Components: Header (utility + sticky nav + dropdown + mobile collapse),
   HeroSplit, StoryCard (shared card: image + kicker + headline + byline),
   StoryGrid, DarkVideoSection, StoryCarousel, Newsletter, Footer,
   BrandIcon (inline SVG socials), BackTop.
5. Placeholders: `https://picsum.photos/seed/kicker-<n>/<w>/<h>` for all
   photos (hero, rails, cards, videos, ads).
6. Interactivity client-side: sticky header, mobile menu, carousel arrows,
   newsletter success state, back-top; video lightbox optional (plain links
   OK).
7. Gate: `scripts/verify-app.sh kicker` (typecheck + lint + knip + fallow +
   100% coverage + build).
8. PR `feat/template-kicker` → immediate squash merge; bookkeeping: BOTH
   megasis rows `[x]` + kicker.free.componentdock.com + readme:status;
   verify Deploy to Surge.sh run + curl 200.
