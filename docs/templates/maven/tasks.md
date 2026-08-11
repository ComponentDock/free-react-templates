# Maven (ColorLib Kanox) — Tasks & Design Notes

> Recreation of ColorLib "Kanox"
> (https://colorlib.com/wp/template/kanox/) under the NEW name **Maven**
> (an expert/authority — fits the creative-agency positioning), per the
> monorepo naming mandate (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Kanox" — creative/digital agency template
  (source: https://colorlib.com/wp/template/kanox/).
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/kanox/`
  (HTTP 200, ~49 KB HTML + `css/style.css` ~196 KB parsed for tokens).
  The live preview is the authoritative reference.
- **Screenshot analyzed:** `kanox-free-template.jpg` (TEMPLATES.md) — light
  hero, abstract colorful geometric shards, giant black/navy two-line
  headline, circular team photo with colorful ring, hot-pink LEARN MORE
  button; "KANOX" logo with pink spark. Matches the live preview.
- **Visual design (from live preview):** creative-agency landing. Light-gray
  (#f7f7f7) hero with floating colorful geometric shapes + animated icons,
  Poppins-800 giant uppercase headline, hot-pink #ff1481 rounded buttons with
  soft glow. Alternating light sections and dark navy (#162b45) bands
  (services, stats, team, footer). Oswald for section headings, Roboto for
  body/nav. Service cards dark #2e4158 flipping to white on hover with the
  icon medallion turning pink. Split about with overlapping "25 Years" h2.
  Stats band with huge white numbers. Video poster with pulsing pink play
  button + testimonial slider. Bordered grayscale team cards with dotted
  social links. White blog cards with pink meta icons. Dark footer with
  newsletter form + Instagram grid.
- **Structure (1:1, section order):**
  1. Navbar (`main_menu home_menu`): logo image left; nav right: Home,
     About, Services, Portfolio, Blog, Pages (dropdown: Single Blog,
     Elements), Contact. Links Roboto 15px uppercase 500 #112e41, padding
     9px 24px; navbar padding 12px 0.
  2. Banner hero (`banner_part`, bg #f7f7f7, height 900px): 2-col
     (col-xl-6/6). Left `banner_text` centered: h2 "Think <span>Creative
     Turn</span>" (Poppins 800, 100px, uppercase; span block 70%) + h3
     "Ideas Into Life" (Roboto 300, 70px, uppercase) + `btn_1` "learn
     more" with ti-angle-right. Right `banner_bg`: circular photo
     (banner_img.png) framed by colorful ring. Floating animated icons
     (hero-app-1/5/7/8, custom-animation classes). Overlay shards via
     banner_overlay_1/2.png (decorative, CSS-recreate).
  3. CTA band (`cta_part`, centered, padding 132px 0 74px): pink eyebrow p
     "Our Features" (#ff1481 uppercase 500) + h1 "Building brands with
     purpose" (42px 700).
  4. Services (`service_part section_bg_2 section_padding`, dark #162b45):
     4 cards `single_service_part_iner`: bg #2e4158, radius 5px, padding
     50px 24px, centered; icon span 61px circle #586779 white glyph
     (margin-bottom 30px); h3 white Oswald 600 22px (margin-bottom 26px);
     p rgba(255,255,255,0.4) 15px/1.8. Hover: card → #fff, h3 → #112e41,
     p → #888888, span → #ff1481. Titles: Responsive Design, Quality
     Matters, Better Security, 24/7 Service.
  5. About (`about_part`, padding 170px 0 80px): left col-lg-5 `about_img`
     (height 549px; about_img_1.png + about_overlay.png) with absolute h2
     "25 Years Working Experience" (Oswald 600 42px, bottom -29px right
     -115px, z 6; mobile: white, left 12px); right `about_text`: pink
     eyebrow "About our company" + h2 "Make the customer the hero of your
     story" + h4 paragraph + `btn_1` learn more.
  6. Recent work (`our_latest_work section_padding`): section_tittle pink
     eyebrow "recent work" + h2 "Creative work for client" (42px/700
     #112e41); 3 `.single_work` rows alternating image/text — `.single_work_demo`
     padding-left 76px (2n+2: padding-left 45px / padding-right 150px):
     pink h5 "Mockup design" 14px uppercase + h3 30px (lh 1.333) +
     paragraph + learn-more link with arrow.
  7. Stats band (`happy_client`, bg #162b45, padding 110px 0 80px): 4
     `single_happy_client`: span number 60px/700 white float-left + h4
     white 22px uppercase (padding-left 88px, margin-top 28px). Values:
     85 Satisfied client, 95 Total project, 75 Work completed, 95 Work
     completed.
  8. Review (`review_part padding_top`): section_tittle "recent work" +
     "Creative work for client". Left col-lg-5: `intro_video_bg` (bg image,
     height 550px, black overlay 0.7) with `.video-play-button` (80px
     circle #ff1481, pulse-border animation, white play glyph 28px) + p
     "Watch intro video" white 15px (margin-top 60px). Right: testimonial
     slider (owl-carousel): `client_review_text` — italic quote 16px
     (margin 26px 0 50px), h3 name Oswald 20px/500 ("Daniel E Gilcritst"),
     h5 role 14px/400 ("Manager, Vision"); owl-nav prev/next arrows with
     pink hover highlight.
  9. CTA band 2 (`cta_part`): pink eyebrow "recent work" + h2 "Creative
     work for client" (introduces team).
  10. Team (`team_member_section section_padding`, bg #162b45): 3
      `single_team_member` cards: border 1px #45556a, padding 20px,
      centered; grayscale photo; `single_team_text` padding 35px 10px: h3
      name white (Oswald) + p role #abb2ba 14px (margin 11px 0 26px) +
      social links "Facebok/Twitter/Skype" #abb2ba (margin 0 23px, dot
      separators 10px #45556a). Members: Jhosef Williams, Daniel Hancock,
      Bernard Perales — Web developer.
  11. Blog (`blog_part section_padding`): section_tittle "Latest news" +
      h2 "We Have True Story". 3 `.single-home-blog` cards: card-img-top
      radius 0; card transparent; card-body white border 1px #e2e6e7
      (border-top 0) padding 30px: category link uppercase #888888
      ("Art, design"/"Technology"), date span #888888 ("March 30, 2019"),
      h5 20px/600 capitalize (hover #ff1481), meta ul: "4 Comments" /
      "10 View" (li #8a8a8a margin-right 30px, pink icons).
  12. Footer (`footer-area`, bg #162b45, padding 100px 0 20px): 3 widgets:
      footer_1: about paragraphs (#abb2ba 14px/1.8); footer_2: h4
      "Newsletter" (white 24px/700) + p + form (input-group border 1px
      #45556a padding 5px; input h 40px transparent no border width 67% pl
      20px 13px #999999 Roboto; button .btn bg #ff1481 white 49×40px radius
      0 ti-angle-right) + `social_icon` links (#cccccc 14px margin-right
      20px); footer_3: h4 "Instagram" + `footer_img` 6 square thumbs
      (`single_footer_img`). Copyright bar: "Copyright © <year> All rights
      reserved | made with ♥ by Colorlib" → replace ColorLib credit with
      original attribution.

## Design tokens (from `css/style.css`)

| Token        | Value(s)                                                                                                                               |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| Primary      | #ff1481 (hot pink — btn_1, eyebrows, work labels, hover states, video play, blog meta icons, footer subscribe, footer/copyright links) |
| Dark navy    | #162b45 (section_bg_2 services band, happy_client stats, team, footer)                                                                 |
| Card navy    | #2e4158 (service card bg; hover → #fff)                                                                                                |
| Icon circle  | #586779 (61px service medallion; hover → #ff1481)                                                                                      |
| Heading      | #112e41 (h2 44px/600 Oswald, nav links 15px, section_tittle h2 42px/700)                                                               |
| Banner bg    | #f7f7f7 (hero) + colorful geometric overlay shards + floating animated icons                                                           |
| Muted text   | #888888, #999999, #abb2ba (on dark), rgba(255,255,255,0.4) (service p), #8a8a8a (blog meta), #cccccc (footer social)                   |
| Borders      | #45556a (team cards, footer input-group), #e2e6e7 (blog card body)                                                                     |
| Fonts        | "Roboto" (body 14px, nav, banner h3 300), "Oswald" (h2s, service h3, names), "Poppins" (banner h2, 800) — Google Fonts link needed     |
| Buttons      | btn_1: bg #ff1481, white 14px uppercase 500, padding 19.5px 42px, radius 4px, shadow 0 10px 30px rgba(190,0,88,0.35), margin-top 44px  |
| Footer btn   | bg #ff1481, white, 49×40px, radius 0, arrow icon (ti-angle-right)                                                                      |
| Service card | bg #2e4158, radius 5px, padding 50px 24px, centered; hover flips to white + pink medallion                                             |
| Stats        | number 60px/700 white + label 22px uppercase white, padding-left 88px                                                                  |
| Video        | poster + black overlay 0.7; play button 80px circle #ff1481 with pulse-border animation                                                |
| Team card    | border 1px #45556a, padding 20px, centered, grayscale photo; social links dotted separators                                            |
| Blog card    | white body, border 1px #e2e6e7 (top 0), padding 30px, image radius 0                                                                   |
| Radii        | 4px (buttons), 5px (service cards), 50% (medallions, video play), 0 (footer subscribe, blog images)                                    |

## Implementation notes (for the implementer)

- Tailwind `@theme`: `--color-brand` = #ff1481, `--color-navy` = #162b45,
  `--color-card` = #2e4158, `--color-steel` = #586779, `--color-ink` =
  #112e41, `--color-mist` = #f7f7f7, `--color-line` = #45556a,
  `--color-border` = #e2e6e7. Use via Tailwind classes per conventions.
- Google Fonts `<link>` in `index.html`: Roboto (300, 400, 500), Oswald
  (500, 600), Poppins (800).
- Interactions in the live demo: navbar collapse (mobile), Pages dropdown
  (hover/click), service card hover, testimonial slider (prev/next — build a
  small state-based carousel or index cycler; no library needed), newsletter
  form (controlled input + submit; no backend, prevent default or show a
  "subscribed" state per repo conventions), video play button (link or
  modal-free placeholder; original opens a video — use an anchor to a video
  URL or a no-op with aria-label).
- Reusable components: ServiceCard (icon medallion + title + copy + hover
  flip), WorkRow (alternating image/text), StatItem (big number + label),
  TeamCard (grayscale photo + name + role + dotted social links), BlogCard
  (image + category + date + title + meta).
- Section title pattern: pink uppercase eyebrow (14px/500, mb 17px) + h2
  (Oswald 42px/700 #112e41). Dark bands keep the same pattern.
- Hero decorations: recreate the colorful shards with absolutely-positioned
  rotated divs or SVG shapes (pink/teal/navy, low opacity); animated floating
  icons optional (subtle CSS float keyframes) — keep it static-safe for
  tests.
- Placeholders: `picsum.photos/seed/maven-<n>/<w>/<h>` — hero circle
  (~500×500), about collage (~570×549), work images (~600×400), video poster
  (~570×550), team grayscale (~370×400, apply grayscale filter), blog thumbs
  (~370×250), Instagram squares (6 × ~80×80).
- Icons: lucide-react (Smartphone, Monitor, Shield, Headphones, Play,
  ArrowRight, MessageCircle, Eye, Instagram, ChevronLeft, ChevronRight);
  brand social icons (Facebook, Twitter, Skype) → inline SVG paths (lucide
  removed brand icons).
- Do NOT copy the demo's images, fonts files, or CSS — recreate tokens in
  Tailwind.

## TODO (prep stream does NOT implement)

- [ ] Implementer: copy simplest existing app → `apps/maven`
- [ ] Implementer: write tests (red) per spec scenarios, then
      implementation (green) — 100% coverage
- [ ] Implementer: `scripts/verify-app.sh maven` until green
- [ ] Implementer: mark `[~]` → `[x]` in TEMPLATES.md + surge URL,
      `npm run readme:status`, PR + immediate squash merge
