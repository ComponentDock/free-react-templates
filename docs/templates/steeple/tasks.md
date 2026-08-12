# Steeple (ColorLib Re/born) — Tasks & Design Notes

> Prep artifacts for the PREP stream. Implementation ships later on
> `feat/template-steeple` by an implementer stream.

## Design notes

- **Original:** ColorLib "Re/born" — free church/religious website template.
  Source: https://colorlib.com/wp/template/reborn/. New name: **steeple** (a
  church tower — fits the religious theme; single lowercase word, no collision
  with `ls apps/` or existing specs). Re/born appears in TEMPLATES.md at line
  486 (Bootstrap section, first unchecked without a prep — the claim) and
  again as a duplicate at line 1302.
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/reborn/`
  (HTTP 200, 27KB) + stylesheet `css/style.css` (24KB) plus `bootstrap.min.css`
  (btn-primary/text-primary tokens), `owl.carousel.min.css`, `aos.css`,
  `mediaelementplayer.min.css`, `magnific-popup.css`, icon fonts (icomoon,
  flaticon). Full rendered DOM extracted; structure below is from the DOM +
  CSS tokens. Screenshot `reborn-free-template.jpg` (AVIF, 1200×710) confirms:
  modern minimalist church site — "Re/born" logo top-left in an elegant light
  serif-ish style, uppercase wide-tracked sans nav top-right (HOME, SERMONS,
  BELIEFS ▼, EVENTS, ABOUT, CONTACT), full-width hero photo (woman's silhouette
  with raised hands against a sunset over water, purple/pink/orange sky) with
  centered white headline "The Truth Will Set You Free" ("The Truth" bolded)
  and left/right slider arrows, then a white "Latest Sermon" section with a
  dark sans heading + small gold underline bar + grey lorem text. Palette:
  white/light-grey sections, near-black headings, steel-blue #5c7893 primary,
  gold #eec60a accents, slate-blue #4d667d footer.
- **Structure observed (1:1):**
  1. `div.site-navbar-wrap.js-site-navbar.bg-white` (fixed, z-99, white,
     padding 20px 0; `.scrolled` shrinks + shadow): `div.site-navbar.bg-light`
     (border-bottom 1px rgba(0,0,0,0.1)): `h2.site-logo` `a` "Re/born" (Work
     Sans 200, 26px, #000, left) + `nav.site-navigation.text-right` (right):
     `ul.site-menu` **Home** (active), **Sermons**, **Beliefs** (dropdown:
     God, Humanity, Salvation, Churches → nested dropdown: America, Europe,
     Asia, Africa), **Events**, **About**, **Contact** — links uppercase,
     letter-spacing .05em, 15px, rgba(0,0,0,0.6)→#000 hover. Mobile:
     `site-menu-toggle` hamburger → `.site-mobile-menu` offcanvas (close icon
     - cloned nav).
  2. `div.slide-one-item.home-slider.owl-carousel` (hero slider): 2
     `div.site-blocks-cover` (bg imgs `hero_b1_1.jpg`/`hero_bg_2.jpg`, cover,
     stellar parallax 0.5, min-height 600px / height 100vh): centered `h1`
     white "For The Time **Is At Hand**" / "The **Truth** Will Set You Free"
     (3rem→4rem md, weight 300, `strong` 900). `.owl-nav` side arrows white
     50×50 at vertical center.
  3. `div.site-section.bg-light` (Latest Sermon): `div.section-heading`
     centered — `h2.mb-5` "Latest Sermon" (gold `#eec60a` ::before 100px@-10px
     - ::after 80px@-20px underline bars) + lorem paragraph; `h3.h5` centered:
       `span.text-uppercase` "“Thy Kingdom Come”" — `span.small` `em` "by"
       Pastor Edward Cane; `div.player`: `<audio controls>` (mediaelement).
  4. `div.site-section` (About Our Church, white): left `div.img-border`
     (col-md-6): `a.popup-vimeo.image-play` circular white 100px play button
     over `img` (`about_3.jpg`); gold offset frame behind image (97% h/w,
     bottom-right; hover: -30px expand, image -5px shift). Right (col-md-5
     ml-auto): `h2` "About Our Church", `p.h5` "We are helping people with
     the Cretor!", paragraph, `a.popup-vimeo.text-uppercase` "Watch Video" +
     arrow icon.
  5. `div.site-section.site-block-feature.bg-light` (2×2 grid, d-flex rows
     with border-bottom/border-right dividers), 4 `div.item.text-center.p-4`:
     flaticon icon (`text-primary`), `h2.h5.text-uppercase`, paragraph, `a`
     "Read More" + arrow: **Our Mission**, **Testimonies**, **Listen To Our
     Sermons**, **Join Our Church**.
  6. `div.site-section.block-15` (Recent Events, white): `div.section-heading`
     centered `h2` "Recent Events"; `div.nonloop-block-15.owl-carousel`:
     `div.media-with-text` cards (3 unique × 3 repeats): `.img-border-sm`
     photo (`img_1/2/3.jpg`) + play overlay, `h2.heading` — **Church Bible
     Study** / **Church Building Accomplishments in January 2018** / **Learn
     How To Pray** —, `span.post-date` "January 20, 2018 • By Josh Holmes",
     paragraph. owl-dots 7px `#ccc`/active `#5c7893` + side arrows (hidden
     <992px).
  7. `div.py-5.quick-contact-info` (bg `#5c7893`, rgba(255,255,255,0.5) text;
     3 columns; `h2` white uppercase 14px letter-spacing .2em + icon):
     **Location** (icon-room): "New York - 2398 / 10 Hadson Carl Street";
     **Service Times** (icon-clock-o): "Wednesdays at 6:30PM - 7:30PM / Fridays
     at Sunset - 7:30PM / Saturdays at 8:00AM - Sunset"; **Get In Touch**
     (icon-comments): "Email: info@yoursite.com / Phone: (123) 3240-345-9348".
  8. `footer.site-footer` (bg `#4d667d`, padding 4em 0): col-md-4 **About**
     (paragraph + `a.btn.btn-primary.pill.text-white.px-4` "Read More");
     col-md-6 split: **Quick Menu** (About, Services, Approach, Sustainability,
     News, Careers) + **Ministries** (Children, Women, Bible Study, Church,
     Missionaries); col-md-2 **Social Icons** (facebook, twitter, instagram,
     vimeo); bottom row (pt-5 mt-5 text-center): copyright → repo-standard
     credit.
- **Design tokens:**
  - Font: **Work Sans** (body/headings/nav/logo; weights 300/400/700 via
    cf-fonts in head — load via `<link>` in index.html). Logo 200/26px; hero
    h1 300 (strong 900); body line-height 1.7. Amatic SC font-face loaded but
    unused on home page.
  - Primary steel blue-grey **#5c7893**: `.btn-primary` bg/border, `.text-primary`
    icons, form focus border, quick-contact bg, active owl-dot. Hover
    `#4d657b`/`#485e74`.
  - Accent gold **#eec60a**: img-border offset frames, section-heading h2
    underline bars (2px, 100px@-10px + 80px@-20px).
  - Footer slate-blue **#4d667d**; heading ink **#000**; body
    rgba(0,0,0,0.5); nav rgba(0,0,0,0.6); post-date rgba(0,0,0,0.4); footer
    links rgba(255,255,255,0.3)→#fff.
  - Neutrals **#fff**, **#f8f9fa** (bg-light), **#ccc** (owl dots).
  - Buttons `.btn`: flat by default; `.pill` radius 30px; `.btn-primary`
    solid #5c7893 white text, padding ~6px 24px, hover shadow
    `0 5px 20px -7px rgba(0,0,0,0.9)`; uppercase text links with small arrow.
  - Hero `.site-blocks-cover`: 100vh (min 600px), cover bg; h1 4rem/300 with
    strong 900 accent words; side arrows white 50×50.
  - `.img-border`: gold frame 97% h/w bottom-right; hover -30px (sm -10px)
    expand + image -5px shift. `.image-play .icon-wrap`: 100px white circle,
    40px black play icon.
  - Spacing: `.site-section` 3em 0 (7em ≥768px); footer 4em 0;
    quick-contact py-5.
- **Implementation notes:**
  - Hero slides have no dark overlay class in the DOM, but the white headline
    needs contrast on the photos — add a subtle dark overlay (e.g.
    rgba(0,0,0,0.25–0.4)) like other ColorLib heroes; note in PR.
  - The audio player: the original streams a sample mp3 via mediaelement.
    Recreate as a functional `<audio>` element with `controls` and no src
    (or a mock player with play/volume/progress UI). No external audio asset.
    Note in PR.
  - Vimeo popup links (Watch Video, event card play overlays) are dead
    lightbox triggers — make them plain links/buttons with aria-labels.
  - Beliefs dropdown is two-level (Churches → continents). Implement with
    hover/click + focus handling; the nested level can be a plain list on
    mobile (offcanvas menu shows all links flat).
  - The events carousel repeats the same 3 unique cards 3× in the original
    DOM — implement with 3 unique cards and let the carousel loop; no need to
    duplicate data.
  - Section headings: gold underline bars via a styled span (2px, centered,
    two widths) rather than pseudo-elements if simpler — keep the visual.
  - Images: `picsum.photos/seed/steeple-N/w/h` (hero 2×~1600×900, about
    ~600×450, events 3×~400×300). Fonts via `<link>`; icons lucide-react
    (Menu, X, Play, ArrowRight, Send, MessagesSquare, Megaphone, Users,
    MapPin, Clock, MessageCircle, Facebook, Twitter, Instagram, Video, Heart).

## Tasks

- [ ] Scaffold app (copy simplest existing app; rename package
      `@free-react-templates/steeple`; `npm install` at root before
      committing so lockfile registers the workspace).
- [ ] Register `injectUiSource()` in `vite.config.ts` (see
      docs/conventions.md).
- [ ] TDD red: write section tests first (Navbar, Hero, LatestSermon, About,
      FeatureGrid, RecentEvents, QuickContact, Footer, App composition)
      mirroring the spec scenarios.
- [ ] Theme tokens in `index.css` `@theme`: primary `#5c7893` (+hover
      `#4d657b`), accent gold `#eec60a`, footer `#4d667d`, ink `#000`, light
      `#f8f9fa`, body grey rgba(0,0,0,0.5), font Work Sans.
- [ ] Implement sections in order; keep the original's 1:1 section order.
- [ ] Navbar: fixed white wrap, light-grey inner bar, logo left, uppercase
      nav right, Beliefs two-level dropdown, mobile offcanvas menu.
- [ ] Hero: full-viewport 2-slide carousel, white headline + bold accent,
      side arrows, subtle dark overlay for contrast.
- [ ] Latest sermon: gold-underlined centered heading + featured sermon line + audio player control.
- [ ] About: gold offset-framed photo with circular play button + copy +
      "Watch Video" link.
- [ ] Feature grid: 2×2 light-grey items with lucide icons, uppercase titles,
      "Read More" links.
- [ ] Recent events: white carousel, 3 cards (photo, title, byline, excerpt),
      dots + arrows.
- [ ] Quick contact strip: steel-blue 3-column (Location / Service Times /
      Get In Touch) with icons and uppercase white headings.
- [ ] Footer: About + pill button, Quick Menu, Ministries, social icons,
      repo-standard bottom credit.
- [ ] Run `npm run verify:app -- steeple` (typecheck → lint → vitest 100% →
      build) until green; fix root causes, never disable gates.
- [ ] Self-review (docs/self-review.md checklists), then PR on
      `feat/template-steeple` → merge immediately (`gh pr merge --squash
    --delete-branch`; if main checked out elsewhere, omit --delete-branch
      and `git push origin --delete` the remote).
- [ ] After merge: `[~]`→`[x]` in TEMPLATES.md for Re/born line 486 (+ the
      duplicate line 1302 gets the same treatment only if the checklist
      convention marks both — check sibling history first), add surge URL,
      `npm run readme:status`, commit `chore:` and push.
