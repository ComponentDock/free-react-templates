# Flair (ColorLib "Fancy") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-flair` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Fancy" — creative agency website template
  (source: https://colorlib.com/wp/template/fancy/). Listed in TEMPLATES.md
  (Bootstrap section, line 392; duplicates at lines 1006 Business, 2047
  Landing Page, 2320 One Page — mark EVERY copy `[x]` when done).
- **Live preview:** https://preview.colorlib.com/theme/fancy/ — reachable
  (HTTP 200). HTML saved at `/tmp/fancy.html` (28.9 KB), stylesheet at
  `/tmp/fancy.css` (22.6 KB, `style.css`), responsive CSS at
  `/tmp/fancy-responsive.css` (189 lines). Screenshot
  `fancy-free-creative-business-website-template.jpg` (1200×933) reviewed via
  browser vision: photo hero of young professionals under a dark blue/purple
  overlay, centered white headline, purple "About Us" + teal/green "Get a
  quote" buttons, lowercase white "fancy" logo, white 3-column features row
  with green icons below.
- **Brand:** "Fancy" — creative agency. Demo brand "fancy" (lowercase).
  Rename → **Flair**.
- **Fonts:** Poppins 300/400/500/600/700 (body, headings, buttons) +
  Playfair Display (serif) for the giant testimonial quote mark only. One
  Google Fonts `<link>` (`Playfair+Display|Poppins:300,400,500,600,700`).

### Design tokens

| Token          | Value                 | Used for                                                                                   |
| -------------- | --------------------- | ------------------------------------------------------------------------------------------ |
| brand-purple   | `#7450fe`             | primary accent, gradient partner                                                           |
| brand-green    | `#21d397`             | secondary accent, gradient partner                                                         |
| gradient       | `#7450fe → #21d397`   | button fill/frame, skill bars, icon+quote gradient text, subscribe, mobile menu, preloader |
| accent-green   | `#2bc0a4`             | feature icons, video play glyph, search close, Learn More, socials, tweet icon             |
| overlay        | `rgba(4,8,29,0.7)`    | hero, services, CTA photo overlays                                                         |
| sticky-header  | `rgba(4,8,29,0.85)`   | header after scroll                                                                        |
| footer dark    | `#131627`             | footer background                                                                          |
| copyright dark | `#04081d`             | copyright bar, overlay base                                                                |
| footer input   | `#2b2e3d`             | newsletter email input background                                                          |
| heading        | `#232d37`             | headings, blog titles, dark button text                                                    |
| body           | `#51545f`             | paragraphs (14px, line-height 2)                                                           |
| muted          | `#b5aec4`             | search input, footer text, tweet, link list, author role                                   |
| border light   | `#ebebeb` / `#e5e5e5` | blog card border / feature divider + barfiller track                                       |
| arrow grey     | `#c2c1ca`             | testimonial nav arrows                                                                     |

### Buttons (`.fancy-btn` — the signature gradient frame)

- White 13px/600 uppercase text, `line-height: 44px; padding: 0 15px; width:
160px; height: 46px`.
- Frame: `border-left: 2px solid #7450fe; border-right: 2px solid #21d397`;
  top/bottom 2px edges = two `linear-gradient(to right, #7450fe, #21d397)`
  background layers, `background-size: 100% 2px`.
- `::after` gradient fill, opacity 0 → `:hover`/`.fancy-active` opacity 1
  (button fills purple→green, white text stays).
- `.fancy-btn.fancy-dark`: text `#232d37` (light backgrounds — about "Read
  More", skills "Work with us"); hover → white text + fill.
- Mobile: width 140px. Subscribe button: absolute right in input, gradient
  bg, white 13px uppercase 600, height 40px.

### Section-by-section fidelity notes (in DOM order)

1. **Preloader** (`#preloader`): full-screen gradient (`#7450fe → #21d397`)
   with 3 rotating spans. OPTIONAL — skip or brief fade-out; don't block
   render.
2. **Search overlay** (`.fancy-search-form`): white fixed bar, height 100px,
   hidden (`top: -130px`); header search icon toggles it in (translate). Close
   (lucide `X`) `#2bc0a4` 30px; input 36px `#b5aec4`, placeholder "| Enter
   Your Search..."; Esc closes.
3. **Header** (`.header_area`): fixed, 100px, `padding: 0 60px`, transparent
   over hero, `border-bottom: 1px solid rgba(255,255,255,0.1)`. Brand
   "flair" 30px white 700 lowercase. Nav white 14px/500 (padding 0 25px):
   Home (active) · Pages (dropdown Home/Static Page/Contact — optional) ·
   Work · Blog · Shop · Contact. Search (`icon_search` → lucide `Search`) +
   bag (`icon_bag_alt` → lucide `ShoppingBag`) 16px white, margin-left 65px.
   Sticky: bg `rgba(4,8,29,0.85)`. Mobile: toggler (2px white border), panel
   bg = gradient, padding 15px.
4. **Hero** (`.fancy-hero-area`): 900px, hero-1.jpg + `rgba(4,8,29,0.7)`
   overlay; 20s Ken-Burns bg animation (optional). Centered: "Watch The
   Overview" link (white 12px uppercase + 2px underline bar; play glyph in
   30px white circle, `#2bc0a4`; YouTube f5BBJ4ySgpo → open URL or modal),
   h2 48px/700 white "Website Design, Brand Strategy, Digital Marketing with
   Stunning Results" (mb 50px), "About Us" (fancy-active = filled) + "Get a
   quote" (frame only).
5. **Top Features** (`.fancy-top-features-area bg-gray`): THE signature
   layout — `.fancy-top-features-content` absolutely positioned
   (`bottom: 50%; translateY(50%); z-index: 99`) floating over the hero's
   bottom edge; shadow `2px 3px 10px rgba(0,0,0,0.15)`, radius 2px. 3 white
   cards (padding 45px), 1px `#e5e5e5` vertical dividers (top 30px, height
   calc(100% - 60px), none after last). h5 + lucide icon `#2bc0a4`
   (ThumbsUp/Clock/Gem): Reliability · Expertise · Quality + lorem p.
6. **About** (`.fancy-about-us-area bg-gray`): padding-top 200px (float
   clearance), padding-bottom 100px. Left: h2 38px "We Are A Creative
   Digital Agency Focused on Growing Brands Online", 2 p (line-height 1.8),
   "Read More" (fancy-dark). Right: about-1.jpg radius 5px.
7. **Skills** (`.fancy-skills-area section-padding-200`): side thumb
   absolute left (width calc(50% - 15px), top 50%), right col (xl-5 ml-auto):
   h2 38px "We Serve All Industries" + subtext; 4 bars (mb 35px, last 60px):
   h6 14px label + 8px `#e5e5e5` track + gradient fill animated to % (90/95/
   85/90) on scroll-into-view; labels Website Design · Brand Strategy ·
   Digital Marketing · Website Development; "Work with us" (fancy-dark).
8. **Services** (`.fancy-services-area bg-img bg-overlay section-padding-
100-70`, hero-2.jpg): white centered h2 38px "Our Services" + subtext; 3
   cards (col-md-4 text-center mb 30px): 40px gradient-clipped icon (lucide
   PenTool/Monitor/Megaphone; hover scale 1.2), white h5 (my 20px 0), white
   p.
9. **Testimonials** (`.fancy-testimonials-area section-padding-100`): owl
   carousel, 3 identical slides → static 1-up + arrows OK. Slide:
   170px circular thumb (radius 50%, shadow `0 1px 5px rgba(0,0,0,0.15)`,
   mr 70px) + content: Playfair "“" 120px gradient-clipped (mt -30px on h5),
   h5 18px `#51545f` lh 30px quote, h6 "Aigars Silkalns - <span>CEO
   DeerCreative</span>" (span 14px `#b5aec4`). Arrows 30×50 `#c2c1ca` at
   ±4% (lucide ChevronLeft/Right).
10. **CTA** (`.fancy-cta-area bg-img bg-overlay section-padding-100`,
    hero-3.jpg): centered h2 40px white "Ready To Discuss Your Project?", p
    white, "Work with us" (fancy-btn).
11. **Blog** (`.fancy-blog-area section-padding-100-70`): h2 "Latest News" +
    subtext; 3 cards (col-md-4): 1px `#ebebeb` border, hover shadow `2px 8px
40px rgba(0,0,0,0.1)`; content padding 30px: h5 18px `#232d37` title
    (We Create Experiences · Simple, Fast And Fun · Device Friendly), p,
    "Learn More" (`#2bc0a4` underline, hover `#7450fe`).
12. **Footer** (`.fancy-footer-area fancy-bg-dark` = `#131627`,
    section-padding-80-50): 4 widgets (col-sm-6 col-lg-3), h6 white 600 mb
    30px:
    - Our Newsletter: p muted 300 + form (input 40px `#2b2e3d` radius 2px
      `#b5aec4` 12px placeholder "E-mail", gradient Subscribe absolute
      right) + socials flex row mt 30px (facebook/twitter/google-plus/
      instagram/pinterest inline SVG `#2bc0a4`, hover `#7450fe`, flex 1).
    - Twitter Feed: tweet a muted 14px lh 1.9 + twitter icon `#2bc0a4` +
      span 12px "About 20 hours ago".
    - Link Categories: 2-col (li 50% float) 10 links with chevrons-right
      (Agency/Home/Studio/About/Studio/Services/Blogs/Work/Shop/Privacy);
      hover: margin-left 5px + `#2bc0a4`.
    - Contact Us: 3 p lines — phone "1 (800) 686-6688", email
      "info.deercreative@gmail.com", "40 Baria Sreet 133/2 / NewYork City,
      US", "Open hours: 8.00-18.00 Mon-Fri".
    - Copyright bar (`#04081d`, 50px): "© <year> All rights reserved |
      made with ❤ by <reworded>" (NO ColorLib credit) + footer nav right:
      Disclaimer · Privacy · Advertisement · Contact us (muted 14px padding
      0 20px).
13. **Mobile** (responsive.css): toggler 2px white border; nav panel =
    gradient bg, padding 15px; `.fancy-btn` width 140px;
    `.fancy-top-features-content` becomes `position: relative; bottom:
-100px` (card drops below hero, still overlapping).

## Tasks / implementation order

1. Scaffold `apps/flair` (copy simplest existing app; package
   `@free-react-templates/flair`; `npm install` at root; grep
   `free-react-templates/flair` in package-lock.json).
2. `index.html`: title "Flair — Creative Agency Template", Google Fonts
   `<link>` (Poppins 300–700 + Playfair Display).
3. `src/index.css` `@theme` tokens (purple/green/gradient/accent/overlay/
   darks/muted) + utility for gradient-clipped text.
4. Components (one per section, colocated tests, 100% coverage):
   Header (sticky + search overlay + mobile menu), Hero (video link + 2
   CTAs), TopFeatures (floating card), About, Skills (animated bars —
   IntersectionObserver), Services, Testimonials (arrows), CTA, Blog,
   Footer (newsletter validation + socials + nav).
5. `src/App.tsx` composition + landmarks; responsive pass 320–1920px.
6. `scripts/verify-app.sh flair` (typecheck + lint + 100% coverage + build).
7. PR to main (squash merge immediately): source = ColorLib "Fancy",
   preview URL, tokens, differences (name, picsum placeholders, paraphrased
   copy, no ColorLib credit). Mark ALL FOUR TEMPLATES.md rows `[x]` (lines
   392, 1006, 2047, 2320) + surge URL + `npm run readme:status`.

## Image seed map (picsum.photos/seed/flair-<n>)

| n   | Source asset      | Use         |
| --- | ----------------- | ----------- |
| 1   | hero-1.jpg        | hero bg     |
| 2   | about-1.jpg       | about photo |
| 3   | skills.png        | skills side |
| 4   | hero-2.jpg        | services bg |
| 5   | hero-3.jpg        | CTA bg      |
| 6   | clients-img/1.jpg | avatar      |
| 7   | blog-1.jpg        | blog card 1 |
| 8   | blog-2.jpg        | blog card 2 |
| 9   | blog-3.jpg        | blog card 3 |
