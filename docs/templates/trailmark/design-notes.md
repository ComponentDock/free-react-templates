# Trailmark (ColorLib "Destino") — Design Notes

Replication research for `openspec/specs/template-trailmark/spec.md`,
gathered 2026-10-01 per `docs/replication.md`.

## Reference sources

- **Original:** ColorLib "Destino" — travel agency template,
  https://colorlib.com/wp/template/destino/ (TEMPLATES.md Travel, line
  2978; slug appears once).
- **Live preview DOM:** https://preview.colorlib.com/theme/destino/
  (HTTP 200, 23,855 bytes) → `/tmp/destino.html`.
- **Theme stylesheet:** `styles/main_styles.css` (HTTP 200, 29,211 bytes)
  → `/tmp/destino-main.css`. Also referenced (NOT copied):
  `styles/bootstrap4/bootstrap.min.css`, font-awesome 4.7,
  OwlCarousel 2.2.1 (+ theme/animate), magnific-popup, `responsive.css`.
- **Screenshot:** `destino-free-template-1.jpg` (reviewed visually): dark
  navy floating navbar over a sunset Cinque-Terre-style coastal cliff
  photo; giant translucent amber "DISCOVER" watermark behind white
  "Discover new worlds"; dark navy search band "Find the Adventure of a
  lifetime" with 4 white-bordered fields + coral-red Find button; white
  section "Top destinations in Europe" below.

## DOM skeleton (section order, from preview HTML)

```
div.super_container
├── header.header > .header_container (fixed, navy #131a2f, h 121px,
│     top 47px → scrolled: top 15px, h 90px)
│   ├── .logo (.logo_image plane mark + "destino" 24px/500 upper white
│   │         + "travel agency" 10px upper)
│   ├── nav .main_nav (.main_nav_item ×5: Home · About us · Offers ·
│   │         News · Contact; white 15px, line-height 121px; active:
│   │         #fe435b + 3px underline; hover: #fe435b)
│   └── .search (absolute right, 121×100% #fe435b magnifier block;
│             hover #eb334a; .active → width 300px + input)
├── .home
│   ├── .home_background (images/home.jpg — coastal cliff town at sunset)
│   └── .home_content (abs, top 46%, centered)
│       ├── .home_text_large "discover" (Montserrat 900, 215px,
│       │       #fdaa27, opacity .34, upper, lh .75)
│       └── .home_text_small "Discover new worlds" (72px/400 white,
│               text-shadow 0 11px 51px rgba(0,0,0,.35))
├── .find (parallax find.jpg — dark palm leaves)
│   ├── .find_title "Find the Adventure of a lifetime" (30px/300 white)
│   └── .find_form (one flex row)
│       ├── .find_item Destination: + input "Keyword here" (31.413%)
│       ├── .find_item Adventure type: + select "Categories" (31.413%)
│       ├── .find_item Min price + select (10.122%)
│       ├── .find_item Max price + select (10.122%)
│       └── button.find_button "Find" (14.048%, h56, #fe435b,
│               translateY(14px), hover opacity .8)
│       .find_input: h56, transparent, 2px solid rgba(255,255,255,.5),
│       white 13px, padding 0 20px; selects appearance-none + chevron
│       image, italic #939393 text; hover/focus border rgba(254,67,91,.5)
├── .top (white)
│   ├── .section_title (padding-top 111px): h2 "Top destinations in
│   │       Europe" (Montserrat 300, #131a2f) + div "take a look at
│   │       these offers" (16px upper #7d8293, mt 19px)
│   └── .top_content (mt 82px): .top_item ×4 flex justify-between
│       (Paris · French Riviera · Cinque Terre · Santorini); photo +
│       .top_item_content abs (left 33px, bottom 29px): "From $890"
│       (14px white) + name (20px white). No hover zoom in stylesheet.
├── .last (parallax last.jpg — beach)
│   ├── .last_logo (abs, top -51px left -70px, 156×151, decorative)
│   └── .last_col ×2 > .last_item > .last_item_content
│       (rgba(254,64,91,0.79) red translucent card, padding
│        53/35/90/80, white, centered):
│       ├── .last_subtitle ("maldive"/"bali", 16px/500 upper)
│       ├── .last_percent ("50%"/"38%", 160px weight 100, lh .75)
│       ├── .last_title "Last Minute Offer" (40px/300)
│       ├── .last_text (lorem, 14px, lh 2.14)
│       └── .button.last_button "See Offer" (#131a2f, 161×56,
│               white 16px/500, square)
├── .video_section (parallax video.jpg; flex center)
│   ├── .video_title "A day on the island" (30px/300 white)
│   ├── .video_subtitle "A trip organized by Destino's team"
│   │       (14px/300 white, mt 3px)
│   └── .video_play (SVG circle: fill transparent → hover
│           rgba(255,255,255,0.15), 400ms)
├── .popular (white)
│   ├── .section_title: h2 "Popular destinations in 2018" + subtitle
│   └── .popular_content: .popular_item ×8, width calc((100%-90px)/4),
│       flex-wrap, mb 26px (last row 0): Turkey · Hawai · Ireland ·
│       Thailand · Croatia · Bali · France · Vietnam; photo + content
│       abs (left 28px, bottom 27px): "From $890" (14px white) + name
│       (20px white)
├── .special (white)
│   ├── .section_title: h2 "Special offers" + subtitle
│   └── .special_content (mt 76px): owl-carousel .special_slider
│       of .special_item slides (Indonesia · India · Thailand · Bali ·
│       France; category labels Visiting · Culture · ...):
│       ├── .special_item_background img + ::after overlay
│       │       rgba(254,67,91,0) → rgba(254,67,91,0.83) on
│       │       .owl-item.center (500ms)
│       └── .special_item_content (centered): .special_category
│               (24px/300 white) + .special_title a (36px/300 white)
│       .special_slider_nav ×2: 90×90 circles #fe3c52, radius 50%,
│       white chevrons, hover opacity .8
├── .newsletter (newsletter.jpg dark leaves, full cover)
│   ├── .newsletter_title "Subscribe to our Newsletter"
│   │       (40px/300 white, centered)
│   └── form: .newsletter_input email "Your E-mail Address"
│           (calc(100%-180px), h56, 2px solid rgba(255,255,255,.5),
│            transparent, white, italic white placeholder, pl 31px)
│           + .newsletter_button "Subscribe" (161×56, #fe364a,
│            white 16px/500, hover opacity .8)
└── footer.footer (bg #080d1d, padding 79px 0; 3 × col-lg-4)
    ├── About: .logo (mark + "destino"/"travel agency") +
    │       .footer_about_text (lorem, 12px/300 #7d8293, lh 2.5) +
    │       .copyright (12px/300 #7d8293; original links Colorlib —
    │       recreation links Component Dock)
    ├── Latest: .footer_title "latest posts" (24px/300 white) +
    │       .footer_latest_item ×2 (78×78 img + title link 16px/300
    │       #7d8293 hover #fe3c52 + date 12px/300 #fe3c52;
    │       "Brazil Summer", "A perfect vacation")
    └── Tags: .footer_title + .tags_content: .tag pills
            (bg rgba(254,60,82,1), h36, 12px/300 white links,
             padding 0 27px, lh 36px, margins 6px, hover opacity .8):
            travel · summer · cruise · beach · offer · vacation ·
            trip · city break · adventure
```

## Token table (main_styles.css)

| Token | Value |
| --- | --- |
| body font | `Montserrat, sans-serif` 14px/400, color `#131a2f` |
| secondary body font | `Open Sans, sans-serif` 14px/400 `#3a3a3a` |
| brand red | `#fe435b` (buttons, nav active/hover, search, tags base) |
| search hover | `#eb334a` |
| offer card overlay | `rgba(254,64,91,0.79)` |
| center slide overlay | `rgba(254,67,91,0.83)` |
| input hover/focus border | `rgba(254,67,91,0.5)` |
| tag pill | `rgba(254,60,82,1)` (hover 0.8) |
| newsletter button | `#fe364a` |
| slider nav / footer accent | `#fe3c52` |
| hero watermark | `#fdaa27` @ opacity 0.34 |
| navy (headings/buttons/navbar) | `#131a2f` |
| footer bg | `#080d1d` |
| body text | `#3a3a3a` |
| muted grey (subtitles/footer) | `#7d8293` |
| placeholder grey (selects) | `#939393` |

- Buttons: square (radius 0), 56px tall, white 16px/500; red primary
  hover opacity 0.8; dark navy `.button` 161×56 `#131a2f`.
- Circles: slider nav 90px radius 50%; play button SVG circle.
- Inputs on dark bands: transparent bg, 2px `rgba(255,255,255,0.5)`,
  white text, 56px.

## Fidelity notes / recreation deltas

- **Section order is authoritative from the DOM**, not the screenshot:
  header → hero → find → top → last → video → popular → special →
  newsletter → footer.
- Parallax (`data-parallax` JS) → static cover images (optionally CSS
  `background-attachment: fixed`); owl carousel → React-state
  center-focus slider; magnific-popup video → accessible React modal with
  placeholder content.
- Original brand "destino" + paper-plane mark → "trailmark" + plane mark
  (lucide Send/Plane). Copy: same kind of content; brand-name strings in
  the video subtitle become "Trailmark's team".
- Hero watermark word "discover" and all overlay-card white text stay as
  in the reference.
- Placeholder images (picsum seeds): `trailmark-hero` (hero), `trailmark-
  find` (find band), `trailmark-top-1..4`, `trailmark-last`, `trailmark-
  video`, `trailmark-pop-1..8`, `trailmark-special-1..5`, `trailmark-news`,
  `trailmark-latest-1..2`. Icons: lucide-react (plane, search, chevrons,
  play, menu/x).
- Footer attribution link → `https://www.componentdock.com/`
  ("Component Dock") per repo conventions; NO ColorLib strings in the app.
- Inner pages (offers.html, about, news, contact) are NOT recreated —
  in-page anchors / "#" only.
