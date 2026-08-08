# Newsline (ColorLib Vizew) — Tasks & Design Notes

> Prep artifact written on `main` by the prep stream so implementers start
> instantly. Implementation ships later on `feat/template-newsline`.

## Design notes (replication findings)

- **Original:** ColorLib "Vizew" — HTML template for blog & magazine
  (source: https://colorlib.com/wp/template/vizew/).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/vizew/
  (HTTP 200; ~94 KB HTML + `style.css` ~63 KB parsed for tokens; sub-CSS:
  bootstrap, classy-nav, owl.carousel, animate, magnific-popup,
  font-awesome, nice-select). Screenshot `vizew-free-template.jpg`
  (1200×946) viewed in browser.
- **Visual design (from screenshot):** dark news portal. Black top utility
  bar: "Breaking News:" (red) + scrolling ticker left; social icons, search
  icon, Login link right. Bright red (#DB4437) main navbar: "Vizew" logo
  (play triangle in the V, white) left; uppercase white links Home
  (active, white underline) / Archives / Pages ▾ / Features ▾ / Contact
  right. Page background dark charcoal (#222627). Hero split: left ~2/3
  large featured video card (photo cover, red SPORTS tag, big white
  headline, comments/eye/like meta icons, centered red circular play
  button, red "05.03" duration badge bottom-right); right ~1/3 dark panel
  (#393C3D) listing 7 recent-video rows (100px thumb left, title + meta
  right) that act as tabs. Below: centered "Trending Videos" heading with
  red underline, 3-column video card grid. Screenshot crops before footer.
- **Structure (1:1, section order):**
  1. Top header (`div.top-header-area`, 50px): `.breaking-news-area`
     (`.news-title` red "Breaking News:" + `#breakingNewsTicker` ul of
     rotating links) + `.top-social-info` social links, search icon,
     Login link.
  2. Navbar (`div.vizew-main-menu#sticker` > `nav.classy-navbar
.justify-content-between` id `vizewNav`; `.classy-nav-container` bg
     #DB4437): `a.nav-brand` logo left; `div.classynav` ul — Home
     (`.active`, white bottom border), Archives, Pages ▾ (`.dropdown` ul:
     Home, Archive List, Archive Grid, Single Post, Single Video Post,
     Contact, Typography, Login), Features ▾ (`.megamenu`, 4 columns of
     the same 8 links), Contact.
  3. Hero (`div.hero-area` row): left `col-lg-8` `div.tab-content` with
     seven `div.tab-pane.fade#post-N` — each `.single-feature-post
.video-post.bg-img`: `a.btn.play-btn` (fa-play), `.post-content`
     (`.post-cata` Sports, `.post-title` headline, `.post-meta.d-flex`
     comments / eye / thumbs-up counts), `.video-duration` "05.03";
     right `col-md-5.col-lg-4` `ul.nav.vizew-nav-tab` (bg #393C3D,
     ~450px): seven `li.nav-item` > `a.nav-link` (first active; padding
     15px 20px; border-left 4px transparent; active bg #4D5051 +
     border-left-color #DB4437) wrapping `.single-blog-post.style-2
.d-flex.align-items-center` — `.post-thumbnail` (flex 0 0 100px) +
     `.post-content` (h6 title 16px 700, `.post-meta` spans 12px #A6A6A6).
  4. Trending (`section.trending-posts-area`): `.section-heading` centered
     h4 700 + `.line` (150px×1px #4E5152, ::after 60px×2px #DB4437);
     `.vizew-post-area` grid of 3 `.single-blog-post.style-2` columns —
     thumb + `.video-duration` badge + title + meta.
  5. Main content (`div.vizew-post-area`): left `col-lg-8` blocks —
     "Featured Videos" (`div.featured-post-slides`, owl carousel of
     `.single-feature-post.video-post`), "Sport Videos" &
     "Business Videos" (owl slides of `.single-blog-post` cards), "Latest
     News" (list of `.single-post-area` rows: thumb mb-30, title 20px
     #fff, meta); right `col-lg-4` sidebar widgets — "Latest Video"
     (`.single-post-area`), "Hot Channels" (`.single-youtube-channel`
     rows: avatar + name + subscribe), "Newsletter"
     (`.newsletter-widget`: input placeholder "Enter your email" +
     `a.vizew-btn.w-100` Subscribe), "Most Viewed Playlist"
     (`.single-blog-post` rows).
  6. Footer (`footer.footer-area`, bg #191C1D, padding-top 70px):
     `.footer-widget` columns — "Latest Twister" (`.twitter-slides` of
     `.single-twit`: red icon + white span), "Sport Videos"
     (`.single-blog-post` rows), "Our Address" (`.contact-address`:
     "101 E 129th St, East Chicago, IN 46312, US / Phone:
     001-1234-88888 / Email: info.colorlib@gmail.com" + `.footer-nl-area`
     form: input bg #303334 40px + red 40px submit button);
     `.footer-social-area` round 40px buttons (facebook #597DCA, twitter
     #1DA1F2, google-plus #DB4437, instagram #A67C52, linkedin #3B5998,
     hover #DB4437); `div.copywrite-area` `.copywrite-text` "Copyright ©
     <year> All rights reserved | This template is made with <heart> by
     Colorlib".
- **Design tokens (from CSS):**
  - Brand: **#DB4437** (vivid red) — navbar container bg, `.vizew-btn`
    bg, breaking-news label, section-heading line ::after, active tab
    left border, footer newsletter submit, social default bg. Put in
    `@theme` as `--color-brand`.
  - Ink/near-black: #0F1112 (btn hover bg, duration badges, link hover),
    #222627 (body bg), #393C3D (hero tab panel bg), #4D5051 (active tab
    item bg), #303334 (footer input bg), #191C1D (footer bg).
  - Light: #FFFFFF (content/card text, nav links).
  - Muted: #A6A6A6 (ticker links, style-2/3 meta), #595959 (post-meta),
    #4E5152 (section line base).
  - Social: #597DCA / #1DA1F2 / #DB4437 / #A67C52 / #3B5998 (round
    buttons).
  - Font: **"Roboto"** (400/500/700) via Google Fonts; body base 14px;
    nav links 700 uppercase 16px white, height/line-height 90px,
    border-bottom 3px transparent, active white; post titles 700 #fff;
    meta 12px.
  - Buttons: `.vizew-btn` — min-width 160px, height 50px, line-height
    50px, padding 0 30px, 16px 500, capitalize, border-radius 0; hover
    bg #0F1112, 500ms. `.play-btn` red circular overlay. Duration badge
    absolute bottom-right, bg #0F1112, padding 6px 12px, radius 2px,
    14px.
  - Hero tabs: bg #393C3D, nav-link padding 15px 20px, border-left 4px
    transparent; active bg #4D5051 + left border #DB4437.

## Implementation tasks (order)

1. Scaffold `apps/newsline` (copy simplest existing app, rename package to
   `@free-react-templates/newsline`; register workspace via root
   `npm install`; verify `grep -c "free-react-templates/newsline"`
   package-lock.json). Remember `injectUiSource()` in vite.config.ts.
2. `src/index.css`: Tailwind entry + `@theme` tokens — `--color-brand:
#DB4437`, `--color-ink: #0F1112`, body bg #222627, panel #393C3D,
   active-tab #4D5051, footer #191C1D, muted #A6A6A6; font Roboto
   (400/500/700) via Google Fonts `<link>` in `index.html`.
3. `src/components/TopHeader.tsx`: dark utility bar — red "Breaking
   News:" label + rotating ticker (interval state, aria-live polite),
   social icons, search icon, Login link. Tests: label + ticker headlines
   render; social/search/login controls present; controls focusable.
4. `src/components/Navbar.tsx`: red (#DB4437) navbar — logo/wordmark
   ("Newsline", play-triangle accent) left; links Home (active, white
   underline), Archives, Pages ▾ (dropdown), Features ▾ (dropdown), Contact
   right; uppercase white 700. Tests: 5 links render, Home active; dropdown
   opens with 8 sub-links; links focusable; aria-labels on icon controls.
5. `src/components/Hero.tsx`: split hero — left featured card
   (`.single-feature-post.video-post`): cover image, Sports tag, headline,
   meta counts (comments/views/likes via lucide MessageCircle/Eye/
   ThumbsUp), centered play button, duration badge "05.03"; right playlist
   panel (`ul.nav.vizew-nav-tab`): 7 rows (100px thumb + title + meta);
   state swaps featured card on row click; active row gets brand red left
   border. Tests: featured card renders all elements; 7 playlist rows;
   clicking row N swaps image/title/meta and active styling.
6. `src/components/Trending.tsx`: centered "Trending Videos" heading with
   red-accented divider + 3-column grid of video cards (thumb + duration
   badge + title + meta). Tests: heading + divider; 3 cards with badge,
   title, meta.
7. `src/components/ContentBlocks.tsx` (+ `VideoRow.tsx` card): left column
   — "Featured Videos" carousel row (large cards + prev/next arrows),
   "Sport Videos" / "Business Videos" card rows with prev/next, "Latest
   News" list of post rows. Tests per block: heading + cards render;
   arrows present and scroll the row.
8. `src/components/Sidebar.tsx`: "Latest Video" post card; "Hot Channels"
   (3+ avatar/name/subscribe rows); "Newsletter" (email input +
   full-width red Subscribe button, non-functional); "Most Viewed
   Playlist" rows. Tests: 4 widgets with headings + required content.
9. `src/components/Footer.tsx`: dark #191C1D footer — "Latest Twister"
   (tweet rows: red icon + white text), "Sport Videos" rows, "Our
   Address" (address/phone/email + newsletter input + red submit), round
   social buttons (5 brand colors), copyright bar with current year +
   paraphrased attribution. Tests: 3 columns render; social buttons
   present; copyright line with year.
10. `src/App.tsx`: compose TopHeader + Navbar + Hero + Trending +
    ContentBlocks + Sidebar + Footer in reference order; document title
    "Newsline — Blog & Magazine Template"; main landmark.
11. Gate: `scripts/verify-app.sh newsline` (typecheck + lint + 100%
    coverage + build). PR: `feat: Newsline — blog & magazine template
(ColorLib Vizew)` → merge immediately.

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] `scripts/verify-app.sh newsline` green (100% coverage)
- [ ] Section order 1:1 with reference; playlist swaps featured video
- [ ] Brand #DB4437 in @theme; Roboto loaded
- [ ] Placeholder images seeded per template; no copied assets
