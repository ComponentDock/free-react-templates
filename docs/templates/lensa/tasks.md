# Lensa (ColorLib Nissa) — Tasks & Design Notes

> Recreation of ColorLib "Nissa" (https://colorlib.com/wp/template/nissa/)
> under the NEW name **Lensa** (lens-themed word for the photography-studio
> design; single lowercase word, no collision with `apps/`,
> `openspec/specs/`, `docs/templates/` or TEMPLATES.md — verified
> 2026-08-11), per the monorepo naming mandate (never reuse the ColorLib
> source name). TEMPLATES.md: primary row in Bootstrap (216) at line 465;
> duplicate rows in Business (365) at line 1110 and Photography (49) at
> line 2458 (all `- [ ]`).

## Design notes (replication findings)

- **Original:** ColorLib "Nissa" — free HTML5 PHOTOGRAPHY STUDIO template
  (split-screen: fixed white sidebar with brand + intro + contact + CTA,
  beside a horizontally scrolling full-height photo slider; slide-in black
  off-canvas menu; fixed bottom-left copyright bar). The recreation brands
  itself **Lensa**.
- **Live preview analyzed (verified 2026-08-11):**
  `https://preview.colorlib.com/theme/nissa/` — HTTP 200, ~45 KB HTML +
  `css/style.css` ~19.3 KB (curl), assets under `img/` (Bootstrap +
  font-awesome + magnific-popup + owl.carousel + nicescroll). The
  TEMPLATES.md screenshot (`nissa-free-template.jpg`, 1200×975, viewed in
  browser) matches the live render: split layout, two vertical hero photos
  (snowy mountain river + white architecture) with white caption boxes,
  header hamburger + socials, copyright bottom-left.
- **Visual design (screenshot):** minimalist monochrome (white/black/grey)
  split-screen portfolio. Left ~40% white column: giant widely-letterspaced
  "NISSA" + "PHOTOGRAPHY STUDIO" subtitle; high-contrast serif headline "My
  name is Michael Smith."; light-grey body text; address/phone/email; grey
  outlined "SEE MY PORTFOLIO" button with right arrow. Right ~60%: two tall
  vertical photos (nature + architecture) each with a small white caption
  box bottom-left (title + category); faint prev/next arrows below; thin
  header bar (hamburger left, socials right); tiny copyright line
  bottom-left with pink heart. Photography supplies all the color.
- **Section order (1:1, verified from live DOM):**
  1. **Preloader (optional)** — `#preloder` fixed black overlay with
     `.loader` spinner (keyframes cycle 4px borders `#f44336`/`#673ab7` —
     pre-hydration artifact; skip or brief loading state).
  2. **Off-canvas menu** — `div.site-menu-warp` fixed, width 614px,
     left -620px, bg `#242424`, z 9999; `.push-side` slides it in
     (transform translateX(614px)); full-width ≤767px. `div.close-menu` "x"
     (30px white) + `ul.site-menu` (padding-left 185px, padding-top 160px):
     Home (`.active`) · About Me · Blog · Portfolio · Contact · Elements —
     30px white, hover/active 3px white underline (width 30px) + `div.menu-
social` (padding-left 185px, pt 50px): pinterest · facebook · twitter ·
     dribbble · behance, 18px white.
  3. **Header** — `header.header-section` absolute top, full width, white
     bg, padding 27px 45px, z 999: `div.nav-switch` hamburger left (28px
     `#4e4e4e`) + `div.header-social` right (same 5 brand icons, 18px
     `#242424`, margin-right 30px; `display:none` ≤479px).
  4. **Left sidebar** — `div.main-sidebar` fixed, width 614px, z 99
     (relative + 100% width below 992px) > `.mb-warp` padding
     151px 95px 100px 145px:
     - `.site-logo` (block, mb 80px): h2 "Nissa" 100px/400/UPPERCASE/
       letter-spacing 18px/lh 100px + p "Photography Studio" 12px UPPERCASE
       ls 12px `#aaaaaa` (padding-left 10px).
     - `.about-info` (mb 80px): h2 "My name is Michael Smith." 48px/900
       Playfair lh 1.1 (mb 40px) + lorem p 13px lh 2.
     - `ul.contact-info` (mb 65px; `:after` position-marker icon
       `img/icons/place.png` at left -36px): li 14px `#aaaaaa` mb 5px —
       "1525 Boring Lane, Los Angeles, CA" · "+34 56672 9984 22" ·
       contactme@myemail.com (a `#242424`).
     - `a.site-btn` "see my portfolio" + arrow img.
  5. **Hero photo slider** — `.page-section` > `.hero-section` >
     `.hero-scroll` > `.hero-track` (overflow hidden, padding-bottom 50px;
     owl horizontal track; nicescroll on desktop) of 3 × `.hs-item.set-bg`
     (height 750px, float left, margin-right 50px; `data-setbg`
     img/hero/1.jpg · img/hero/2.jpg · img/hero/1.jpg):
     - `.hs-info` absolute left 0 bottom 0, width 221px, white bg, padding
       44px 0 10px: h5 title + p category (mb 5px) + arrow link
       (img/arrow-right.png).
     - Captions: "Ice Cold Love" / "Nature Photography" (DOM typo
       "Photoagraphy" — use screenshot spelling) · "Bold Architecture" /
       "Cityscape Photography" · slide 3 = dup of slide 1.
     - ≤767px: `.hero-track .owl-nav` prev/next 30px circles `#242424` bg
       white glyphs, centered (padding-top 30px).
  6. **Copyright bar** — `div.copyright` fixed bottom 0 left 0, width
     614px, height 80px, white bg, padding-left 145px, pt 20px: "Copyright
     ©<year> All rights reserved | This template is made with ♥ by
     ColorLib" 13px `rgba(130,130,130,.29)` (heart `rgba(204,17,17,.29)`) →
     rephrase to Lensa. Below 768px: static centered block (padding
     60px 15px 50px).
- **Sub-pages (nav-linked; optional scope for the recreation):**
  - **about.html** — `.video-section` (flex, centered; `.video-play-btn`
    159×69px white text radius 27px bg rgba(255,255,255,.43)) +
    `.milestones` 4 × `.milestone` (Playfair h2 72px/900 float + h5 + p
    `#828282`): "25 Years Of experience" · "16k Photograps taken" · "59
    Weddings/Year" · "37k IG Followers" (source typos — paraphrase).
  - **portfolio.html** — `.portfolio-section` 5 × `.portfolio-item`
    (padding 0 3px, mb 41px): photo + `.pi-info` white caption box (same
    221px style; items titled "Ice Cold Love" + category).
  - **blog.html** — `.blog-post-item`s: `.blog-thumb` 566px + white
    `.post-date` (Playfair h3 48px/900 day + p month, 138×84px) +
    overlapping `.blog-content` (width calc(100% - 138px), margin-top
    -133px, ml 62px, padding 55px 58px): h2 link + `.blog-metas` (13px
    items separated by `|` `#828282`) + excerpt; `.blog-comments` with
    circular 67px avatars.
  - **contact.html** — `.map` (grey `#ddd` placeholder, iframe) +
    `.contact-text` (h2 + lorem) + `.contact-form`: inputs Name / E-mail /
    Subject + textarea Message (56px tall, 14px italic, 2px `#e1e1e1`
    border, mb 30px) + `.site-btn` submit.
- **Key CSS selectors (style.css):** `.site-logo h2` (100px/400/uppercase/
  ls 18px), `.site-logo p` (12px/uppercase/ls 12px/#aaaaaa), `.about-info
h2` (48px/900 Playfair/lh 1.1), `.contact-info li` (14px/#aaaaaa),
  `.site-btn` (uppercase 14px/700, min-width 167px, padding 19px 35px,
  transparent, 2px #e1e1e1, color #242424), `.site-btn.sb-solid`
  (bg #242424, white), `.site-btn.sb-dark` (border #242424),
  `.site-menu-warp` (fixed 614px, bg #242424), `.site-menu li a`
  (30px white, :after 3px white underline), `.header-section` (absolute,
  white, padding 27px 45px), `.nav-switch` (28px #4e4e4e),
  `.main-sidebar` (fixed 614px), `.mb-warp` (padding 151px 95px 100px
  145px), `.hs-item` (750px, mr 50px), `.hs-info` (absolute 221px white,
  padding 44px 0 10px), `.copyright` (fixed 614px 80px white,
  rgba(130,130,130,.29)).

## Design tokens (summary)

- Brand: `#242424` ink (headings, btn text, solid btn, menu bg) · White
  `#fff` (page/sidebar/captions) · `#e1e1e1` (btn + form borders) ·
  `#aaaaaa` (logo subtitle, contact info) · `#828282` (secondary text) ·
  `#4e4e4e` (hamburger). Loader-only (not brand): `#f44336` / `#673ab7`.
- Fonts: "Playfair Display" (serif, 400+900 — sidebar intro h2 48px/900,
  milestone h2 72px/900) + "Open Sans" (sans — everything else incl. the
  100px logo wordmark). Google Fonts `<link>` in index.html.
- Buttons: sharp (radius 0), uppercase, 2px `#e1e1e1` outline, min-width
  167px, padding 19px 35px; `.sb-solid` = `#242424` bg white text.
- Shapes: sharp everywhere; circles only for mobile hero arrows (30px) and
  blog avatars (67px); video-play-btn radius 27px (about page only).
- Sections: split layout (sidebar 614px + right content padding-left 614px);
  hero track 750px slides; caption boxes 221px white; sidebar stacks above
  hero below 992px; copyright fixed bottom-left 80px → static centered
  below 768px; header-social hidden ≤479px.

## Tasks / todo outline (implementation order)

- [ ] Scaffold `apps/lensa` (copy simplest existing app, rename package to
      `@free-react-templates/lensa`, register in root `package-lock.json`
      via `npm install`, `injectUiSource()` in vite.config.ts).
- [ ] `src/index.css`: `@theme` tokens — `--color-ink: #242424`,
      `--color-paper: #ffffff`, `--color-line: #e1e1e1`,
      `--color-muted: #aaaaaa`, `--color-dim: #828282`; Playfair Display +
      Open Sans via Google Fonts `<link>` in `index.html`.
- [ ] Components (one per section, colocated tests):
  - [ ] `Header.tsx` — white top bar: hamburger `Menu` toggle (opens
        off-canvas menu) + social brand icon links (inline SVG: Pinterest /
        Facebook / Twitter / Dribbble / Behance); hide socials ≤479px.
  - [ ] `OffCanvasMenu.tsx` — fixed `#242424` panel sliding in from the
        left: close "x", links Home (active) / About Me / Blog / Portfolio /
        Contact / Elements (30px white, underline hover), social icons;
        slides out on close / link click.
  - [ ] `Sidebar.tsx` — fixed white column (stacked <992px): logo "Lensa"
        (100px uppercase, wide tracking) + "Photography Studio" subtitle;
        Playfair headline "My name is Michael Smith." + paragraph; contact
        list (MapPin + address, phone, email); outlined uppercase "see my
        portfolio" button with ArrowRight.
  - [ ] `HeroSlider.tsx` — horizontal track of 750px photo slides, white
        caption box bottom-left (h5 title + p category + ArrowRight link);
        slides: "Ice Cold Love / Nature Photography" + "Bold Architecture /
        Cityscape Photography" (+ optional loop dup); prev/next circular
        arrows on ≤767px (reuse shared Carousel or a scroll-snap track).
  - [ ] `CopyrightBar.tsx` — fixed bottom-left faint-gray line:
        "Copyright ©{year} All rights reserved | made with ♥ by ColorLib"
        (rephrased); static centered <768px.
- [ ] `App.tsx` — compose in exact order: (Preloader optional) →
      OffCanvasMenu → Header → Sidebar → HeroSlider → CopyrightBar.
- [ ] Tests: one `describe` per component mirroring the spec scenarios;
      menu open/close state via click; slider advance via arrow click (fake
      timers if autoplay added); copyright year assertion; 100% coverage.
- [ ] Hero slide images: screen picsum seeds so the subject fits the
      caption (snow/peaks for "Ice Cold Love", white architecture for "Bold
      Architecture") — see seed-screening method in the replication skill.
- [ ] `scripts/verify-app.sh lensa` green (typecheck + lint + knip +
      fallow + vitest 100% + build).
- [ ] PR: branch `feat/template-lensa`, description with source template
      (ColorLib Nissa), preview URL, design tokens, differences (renames,
      picsum placeholders `lensa-<n>`, paraphrased copy, fixed source
      typos); merge immediately (`gh pr merge --squash`), verify deploy +
      curl bundle.
