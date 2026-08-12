# Journee (ColorLib "Tourbi") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-journee` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Tourbi" — free travel / tour booking HTML template
  (source: https://colorlib.com/wp/template/tourbi/). Listed in TEMPLATES.md
  under the Bootstrap category (line 517); duplicate rows at line 1207 under
  Business (365) and line 2999 under Travel (44) — same template, ONE app
  only. Mark ALL THREE rows `[x]` after merge.
- **Preview REACHABLE (HTTP 200):** `https://preview.colorlib.com/theme/tourbi/`.
  DOM fetched (`/tmp/tourbi-preview.html`, 34,897 bytes, title "travel") +
  stylesheet `css/style.css` (`/tmp/tourbi-style.css`, 171,615 bytes) +
  TEMPLATES.md screenshot (`tourbi-free-template.jpg`, AVIF, viewed in the
  browser).
- **Aesthetic:** bright, cheerful travel-agency look — sky-cyan blue hero
  photo (clouds + hot-air balloon illustration) with white script + bold
  text; body sections white with 180px padding; TWO saturated accents only:
  yellow `#ffcc00` (search panel, pill buttons, big "view all" square,
  stars, "subscribe now") and sky blue `#00c0ff` (Search button, script-link
  hovers, newsletter paper-plane). Logo is an orange script wordmark
  (recreate as text — "Journee" in Kaushan Script, orange).
- **Sliders/menus are jQuery/Bootstrap plugins in the source** (owl-carousel
  for the tour-package carousel, Bootstrap collapse for the mobile nav,
  nice-select for the country/city selects, counterup, magnific-popup) —
  implement with React state: a 4-slide carousel with prev/next controls, a
  hamburger mobile nav, native `<select>`s.
- **Fonts:** THREE Google families via one `@import` in style.css:
  **Roboto** (body, 300–700), **Poppins** (headings/buttons, 300–700),
  **Kaushan Script** (script accents: banner h5, read_btn/btn1, cta h5,
  view_btn). Load all three via `<link>` in `index.html`.
- **Buttons:** `.btn_1` = yellow pill (`#ffcc00`, radius 50px, padding 13px
  40px, Poppins 500 15px, black text; hover inverts). `.search_btn` = blue
  block (`#00c0ff`, 19px 60px, white, full-width in its column).
  `.subs_btn` = yellow block (`#ffcc00`, 19px 29px, uppercase).
  `.view_btn` = BIG yellow square 265×215px (150×80px ≤1200px), Kaushan
  Script 24px. `.read_btn`/`.btn1` = script text links (Kaushan Script
  17px, black, hover `#00c0ff`).
- **Copy is placeholder/Lorem with typos** ("chaina", "Life of Egeft",
  "Sawpalo, Brasil") — paraphrase freely, FIX the typos, keep the same
  kinds: nav (Home / about / packages / Blog + pages dropdowns / Contact),
  hero ("Best way to tour" + lorem headline), search (country/city +
  "search"), donation cards x3 ("donation" + "read more"), feature
  ("Amazing tour" + london 35 / Kashmir 75 / chaina 85 Places), popular
  (Life of Egeft / Biking in Norway / Tour of iceland + "book now"), tour
  package ("Sawpalo, Brasil" x4 + stars + "join now"), CTA ("Join Our
  Newsletter" / "Subscribe to get Updated with new offers" + "subscribe
  now"), blog ("Luxerious Car Rental" x3 + 13th Dec / 15 / 10), footer
  (About Agency / Navigation Links 8 / Newsletter / Instafeed 8).
- **DOM oddity:** the "Hot Line 052" button is `d-none d-lg-block` —
  desktop only. The search `.search_form` is `position: absolute; top:
-265px` inside a section with `margin-top: -254px` — the yellow panel
  straddles the boundary between hero and the white section; approximate
  with a negative-margin white section + yellow panel pulled up.

## Structure (top → bottom, single page)

1. **Header** (`.main_menu.home_menu`, `position: absolute; top: 0;
width: 100%; z-index: 999`, transparent over hero) — logo image left
   (orange script wordmark → text logo); nav Home / about / packages /
   Blog (dropdown: blog, Single blog) / pages (dropdown: Elements) /
   Contact (white 15px Roboto, hover `#ffcc00`); right: `.btn_1` yellow
   pill "Hot Line 052" (desktop only). Mobile: hamburger (`.menu_icon`
   fa-bars) toggles the nav (Bootstrap collapse → React state).
2. **Hero banner** (`.banner_part`, height 1050px / 700px mobile) — bg
   image `banner_bg.png` (blue sky + clouds + hot-air balloon, cover) +
   `background-color: #ffcc00` fallback; wavy `banner_overlay.svg` at the
   bottom edge (::after, `bottom: -132px`, z-index -1); text left
   (`.banner_text`, pt 235px): h5 "Best way to tour" (Kaushan Script 36px
   white) + h1 lorem headline (66px 700 white, lh 75) with a
   `heading_bg.png` underline strip (::after, width 50%, bottom -86px).
3. **Search your country** (`.search_your_country`, white, max-width
   1690px, `margin-top: -254px`, padding 165px 0 100px, container 980px) —
   `.search_form` (bg `#ffcc00`, padding 80px 95px, absolute top -265px):
   country + city custom selects (height 60px, text `#c3c3c3`, width 50%
   each) + `.search_btn` "search" (blue block, 19px 60px, white); below
   (mt 70px): 3 `.single_donation_item` cards (icon 27px + h4 "donation"
   18px + p lorem + `.read_btn` "read more" script link). Decorative
   shapes (`feature_icon_1/2`, absolute PNGs).
4. **Feature** (`.feature_part.padding_top`, pt 180px) — split: left
   col-lg-7 `feature_img` (photo `about_img.png`); right col-lg-5
   `feature_part_text`: `section_tittle_img.png` + h2 "Amazing tour" + p +
   span + 3 `.feature_part_text_iner` mini-cards (col-sm-6 col-md-4):
   icon + h4 london / Kashmir / chaina + p "35 Places" / "75 Places" /
   "85 Places". 3 decorative shapes.
5. **Popular place** (`.popular_place.padding_top`) — centered
   `.section_tittle` (img + h2 "Most Popular place" + p); 3
   `.single_popular_place` cards (padding 60px 25px 56px, centered):
   icon (max-width 150px) + h4 (20px 600, mt 45px mb 20px) + p (`#7f7f7f`
   15px lh 1.8) + `.btn1` "book now" (script link, mt 42px). Titles: Life
   of Egeft / Biking in Norway / Tour of iceland. Shapes behind.
6. **Place details** (`.place_details.section_padding`, padding 180px 0) —
   left col-md-6: centered text block (col-lg-8 col-xl-6: img + h2
   "Amazing tour" + p + span) then photo `plase_details_1.png`; right
   col-md-6: photo `plase_details_2.png`; below centered `.view_all_btn`
   → `.view_btn` "view all" (BIG yellow square 265×215px, Kaushan Script
   24px).
7. **Tour package** (`.tour_package.section_padding`) — left col-lg-6:
   owl-carousel → React 4-slide carousel of `.single_tour_package`:
   photo (`tour_plan_1.png` / `tour_plan_2.png` alternating) +
   `.tour_pack_content` (bg `#fafafa`, padding 45px 48px): h4 "Sawpalo,
   Brasil" (24px) + p (mb 50px) + `.tour_content_rating` (flex
   space-between): 5 yellow `fa-star` icons + `.btn1` "join now"; right
   col-lg-5 col-xl-3 offset-lg-1: `.tour_pack_content` with
   `section_tittle_img.png` + h2 "tour package" + p + `.btn_1` "join now"
   (yellow pill).
8. **CTA** (`.cta_part.section_padding`) — bg `cta_bg.png` (blue sky,
   cover), height 750px; centered (col-lg-8 col-xl-7): h5 "Join Our
   Newsletter" (Kaushan Script 20px white) + h2 "Subscribe to get Updated
   with new offers" (47px white lh 60) + `.input-group`: email input
   (height 60px, no radius) + `.subs_btn` "subscribe now" (yellow,
   uppercase).
9. **Blog** (`.blog_part.padding_top`) — left `.section_tittle` (img + h2
   "our blog" + p); 3 `.single_blog_part` white cards: photo
   (`blog_1/2/3.png`) + `.blog_text` (padding 43px 0): h2 "Luxerious Car
   Rental" (24px) + p + meta ul (flex, mt 40px): Calendar "13th Dec" /
   Heart "15" / MessageCircle "10". Decorative `.blog_img` overlay
   (absolute right, top 20%).
10. **Footer** (`.footer_part`, padding 180px 0 25px, white + decorative
    `.footer_overlay` PNG top-left, hidden ≤1200px) — 4 columns
    (col-sm-6 col-lg-3): **About Agency** (h4 20px 500 + p); **Navigation
    Links** (8 links, `column-count: 2`); **Newsletter** (p + email input
    - `.email_icon` blue 40×39 paper-plane submit); **Instafeed** (8
      thumbs). `<hr>` + bottom bar: `.copyright_text` (p `#888`, credit →
      **Component Dock** link, replaces Colorlib) + 4 social icons
      (facebook-f / twitter / globe / behance → inline SVG + lucide Globe).

## Implementation tasks (for the implementer stream)

- [ ] `cp -r` scaffold from the simplest existing app; rename package to
      `@free-react-templates/journee`; `npm install` at repo root; CNAME +
      homepage `journee.free.componentdock.com`
- [ ] `src/index.css` `@theme` tokens: brand `#ffcc00`, sky `#00c0ff`,
      ink `#14182d`, muted `#7f7f7f`, soft `#fafafa`, fade `#888`; Google
      Fonts `<link>` (Roboto 300–700, Poppins 300–700, Kaushan Script)
- [ ] `src/data.ts` — nav (6 + 2 dropdowns), donation cards (3), feature
      mini-cards (3), popular places (3), tour-package slides (4), blog
      cards (3), footer nav links (8), instafeed thumbs (8), socials (4)
- [ ] Components: `Navbar` (absolute transparent, dropdowns, hotline pill,
      mobile hamburger), `Hero` (blue-sky bg + script subheading + big
      headline + wavy bottom overlay), `SearchCountry` (yellow panel with 2
      selects + blue search button + 3 donation cards), `Feature` (split + 3 mini-cards), `PopularPlace` (3 icon cards + script "book now"),
      `PlaceDetails` (text block + 2 photos + big yellow "view all" square),
      `TourPackage` (4-slide carousel + side blurb), `CtaNewsletter` (blue
      bg + email + subscribe), `Blog` (3 cards with meta), `Footer` (4
      widgets + subscribe form + Component Dock credit + socials)
- [ ] Tests per section mirroring the spec Gherkin scenarios, 100%
      coverage (carousel next/prev, mobile nav toggle, dropdowns, subscribe
      forms)
- [ ] Subject-screen picsum seeds (hero bg — prefer a sky/clouds shot or
      light-blue gradient fallback; about photo; 2 place-details; 2
      tour-plan; 3 blog; 8 instafeed thumbs) — pixel metric + browser
      verify; pin seeds in PR
- [ ] `bash scripts/verify-app.sh journee` green; PR with source, preview
      URL, tokens, deviations (React carousel / mobile nav / native selects
      / Component Dock credit); squash-merge immediately
- [ ] After merge: mark TEMPLATES.md Tourbi rows at lines 517, 1207 AND
      2999 `[x]` + surge URL; `npm run readme:status`

## Verification notes / pitfalls

- Desktop + mobile navs render duplicate links in the DOM — use
  `getAllByRole` and index the mobile one last (skill pitfall).
- jsdom applies the injected Tailwind CSS, so `hidden lg:flex` desktop nav
  lists are `display:none` and getByRole excludes them — query desktop-only
  links with `{ hidden: true }`; CSS `uppercase` does NOT change accessible
  names, query raw text ('Home'), not 'HOME'.
- `aria-current={cond}` renders `aria-current="false"` — use
  `aria-current={cond ? 'true' : undefined}`.
- The tour-package "carousel" is owl-carousel in the source with NO visible
  dot pagination on the home DOM (only prev/next arrows appear) — implement
  a simple state-indexed carousel with ChevronLeft/ChevronRight controls and
  assert the active slide's title changes.
- The hero heading `:after` underline strip (heading_bg.png, width 50%) is a
  decorative image — recreate as a short yellow/gradient bar under the
  headline (`w-1/2` block) or skip; the wavy bottom overlay
  (banner_overlay.svg) → an SVG wave (inline or CSS) at the hero's bottom.
- The yellow search panel is absolutely positioned (`top: -265px`) inside a
  section with negative top margin — implement as a normal flow element
  with negative `mt` on the white section and a yellow panel pulled up with
  `-translate-y` or negative margin; test asserts order + labels, not exact
  overlap.
- No `tel:` literals anywhere (secret-scan rewrites them) — render the "Hot
  Line 052" button text as plain text, NOT a `tel:` link.
- The footer newsletter + CTA subscribe forms use MailChimp endpoints in the
  source — implement as local forms (submit → success message pattern per
  conventions; assert input unmounts on success with `queryByLabelText`).
- `.view_btn` is an oversized decorative yellow square with "view all"
  inside — keep it a link/button; it is NOT a standard pill.
- Social icons: lucide-react removed brand icons — inline SVG paths for
  facebook / twitter / behance; the source's third icon is a globe
  (lucide `Globe`).
- Instafeed thumbs are 8 small photos — seeded picsum 100×100 is fine.
- The source nav has mixed capitalization ("Home", "about", "packages",
  "Contact") — normalize to Title Case; queries should use the rendered
  text.
