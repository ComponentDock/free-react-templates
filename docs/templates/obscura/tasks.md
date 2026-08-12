# Obscura (ColorLib Porto) — Tasks & Design Notes

> Prep artifacts for the PREP stream. Implementation ships later on
> `feat/template-obscura` by an implementer stream.

## Design notes

- **Original:** ColorLib "Porto" — free photo gallery HTML template.
  Source: https://colorlib.com/wp/template/porto/. Despite the name it is a
  dark, moody photographer portfolio, NOT a shop/multipurpose theme.
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/porto/`
  (HTTP 200, 19.2KB) + stylesheet `css/style.css` (19.9KB) plus
  bootstrap.min.css / font-awesome.min.css / owl.carousel.min.css /
  fullpage.min.css / magnific-popup.css. Full rendered DOM extracted
  (`/tmp/porto-ref/porto.html`, `style.css`); structure below is from the
  DOM + CSS tokens. Screenshot `porto-free-template.jpg` (1200×946)
  confirms: dark desaturated purple/blue full-screen hero photo of a model
  with metallic gold body paint on a dark tufted chaise, white "PORTO" logo
  top-left inside a thin white box, small white menu (Home, About the
  Artist, Portfolio, News, Contact), cursive script line above the big
  centered white "Showcase your work", thin-outline uppercase "READ MORE"
  button, "1/2" counter right, "DISCOVER" + down arrow bottom center,
  circular avatar + "CONTACT ME" vertical-line widget bottom left.
- **Structure observed (1:1):**
  1. `#preloder`: fixed full-screen black #000; `.loader` spinner
     (border-radius 60px, 4px border alternating #f44336 → #673ab7, rotate
     0.8s linear infinite).
  2. `header.header-section` (absolute, top 0, z-index 999, transparent):
     `.header-warp` (max-width 1464px, margin auto, padding-top 35px):
     `.site-logo` left (logo.png — thin white box around wordmark in the
     art; recreate as text logo "Obscura" in a 1px white border box),
     `.header-social` right (5 white icons: pinterest, facebook, twitter,
     dribbble, behance; margin-left 35px, padding 9px 0), `.nav-switch`
     (hidden desktop; mobile: 40px circle, 1px #8c8c8c border, white bars
     icon), `ul.main-menu` right (padding-right 220px): Home / About the
     Artist / Portfolio / News / Contact — 16px white, margin-right 60px,
     padding 9px 0.
  3. `#fullpage` (+ `#fp-nav` right dots: 14px circles, 1px #565656,
     active filled #020202):
     - `#hero-section` > `.hero-slider.owl-carousel`: 2 `.hs-item.set-bg`
       slides (height 919px, flex-centered, text-center; slider/1.jpg,
       slider/2.jpg), each: `h1` 36px BickhamScriptPro-Regular (script,
       weight 400) — "Fusce erat dui, venenatis et erat in, vulputate
       dignissim lacus." (same both slides); `h2` 60px 600 white (mb 40px)
       — slide 1 "Showcase your work", slide 2 "Creative natural short";
       `.site-btn` "Read More". Plus `.slide-num-holder` (right 101px, top
       50%, white 16px 500, "1/2"), `.owl-nav` arrows (right 52px),
       `.down-sign` (bottom 37px centered, width 60px): `h6` "Discover"
       (10px 500 uppercase white, mb 10px) + arrow-down.png.
     - `.contact-link` (left 42px, bottom 40px): `p` "Contact me" (10px
       uppercase 500 white, rotated 90deg, mb 180px) + `:after` 1px white
       vertical rule (135px tall, top 50px) + 71×71 circular avatar img.
     - `.about-section.about-one/three.set-bg` (section-bg/1.jpg,
       section-bg/3.jpg) > `.about-content-warp.text-white` (max-width
       470px, section padding-left 227px): `h2` "Artistic Portraits" (48px
       500, mb 20px) + lorem `p` (mb 40px) + `.site-btn` "Read More".
     - `.about-section.about-two.set-bg` (section-bg/2.jpg) >
       `.about-content-warp` WITHOUT text-white → dark #111111 text on the
       lighter photo; same h2/p/button content.
  4. `section.banner-section.set-bg` (banner-bg.jpg, padding 111px 0):
     `.col-lg-9` `h2` "Need a photographer? Get in touch" (30px 500 white
     uppercase ls 2px, 1px white bottom border, padding 8px 0 10px) +
     `.col-lg-3.text-lg-right` `.site-btn` "Read More".
  5. `footer.footer-section.set-bg` (footer-bg.jpg, padding 116px 0 130px):
     `.footer-about` (max-width 470px): logo (mb 35px) + `p` (white,
     opacity 0.25); `.footer-info` "Discover" (h6 white uppercase 500 ls
     3px, mb 27px, padding-top 27px): ul — About the Artist, Portfolio,
     News, Contact (white opacity 0.25, 14px uppercase, mb 15px);
     `.footer-info` "Talk to us": +34 5667 4332 244 /
     Contact@sportify25.com / office@sportify25.com; "Location": MAin str.
     25 / 458811 CA. Copyright bar: "Copyright © [year] All rights
     reserved | This template is made with [heart] by Colorlib" → repo
     standard credit.
- **Design tokens (`css/style.css`):**
  - Fonts: Montserrat (body/headings/menu/footer); BickhamScriptPro-Regular
    (hero h1 script — licensed, NOT copyable → substitute Google Fonts
    "Great Vibes" or "Dancing Script" 400, record in PR).
  - Colors: #fff text on dark; #111111 heading default (light about-two);
    #000 preloader; #020202 active fp dot; #05020d portfolio subpage bg;
    #f44336/#673ab7 spinner ring; #565656 fp dot border; #8c8c8c mobile
    hamburger border; footer muted = white opacity 0.25.
  - Buttons `.site-btn`: transparent, white, 14px 600 uppercase,
    min-width 186px; 4 corner brackets 15×14px 2px white (top pair
    :before/:after, bottom pair span:before/:after); span padding 23px
    45px; `.sb-dark` black variant exists (unused on index — keep
    available).
  - Spacing: hero slide 919px; about padding-left 227px / content max-width
    470px; banner 111px; footer 116px 0 130px; header-warp padding-top
    35px; menu item margin-right 60px.
  - Section bgs: full-bleed photos (set-bg), dark/moody.
- **Recreation decisions:** transparent overlay header (sticky not needed);
  2-slide autoplay hero slider with counter + arrows; fullpage scroll
  snapping approximated with tall viewport sections (no new dep); script
  font substituted via Google Fonts; brand icons as inline SVG
  (pinterest/facebook/twitter/dribbble/behance — lucide-react lacks brand
  icons); text logo "Obscura" in 1px white box; picsum-seeded photos
  (`picsum.photos/seed/obscura-N/w/h`); placeholder contact data kept
  (phone, sportify25.com emails, MAin str. 25).

## Tasks (implementer checklist)

- [ ] Scaffold `apps/obscura` (copy simplest existing app; package
      `@free-react-templates/obscura`; register workspace).
- [ ] index.html: title "Obscura — Photography", Google Fonts link
      (Montserrat + Great Vibes/Dancing Script).
- [ ] `@theme` tokens: `--color-ink: #020202` (near-black), `--color-char`
      #111111, `--color-ghost` white/0.25 (footer muted), spinner accents
      #f44336/#673ab7.
- [ ] Preloader component: fixed black overlay + spinning ring, unmounts on
      mount/ready.
- [ ] Header: transparent overlay, bordered text logo, 5 inline-SVG brand
      icons, menu (Home, About the Artist, Portfolio, News, Contact);
      mobile circular hamburger + slide-down menu (test desktop + mobile
      variants; duplicates in DOM → use getAllByRole, index mobile last).
- [ ] Hero slider: 2 full-viewport slides, script h1 + 60px h2 (slide 1
      "Showcase your work", slide 2 "Creative natural short"), corner-
      bracket "Read More" button; slide counter "1/2", prev/next arrows;
      "Discover" + down arrow bottom center; "Contact me" avatar widget
      (circular img + vertical rule + rotated label) bottom left.
- [ ] About ×3: full-bleed photo sections, offset content column, h2
      "Artistic Portraits" 48px/500, paragraph, outline button; about-two
      dark text (#111111), one/three white text.
- [ ] CTA band: "Need a photographer? Get in touch" (uppercase, ls 2px,
      white underline) + right-aligned outline button.
- [ ] Footer: photo bg, about column (logo + muted paragraph), Discover /
      Talk to us / Location columns (muted uppercase 14px), copyright bar.
- [ ] Buttons: implement corner-bracket outline button (2px white, 15×14px
      brackets, span padding 23px 45px, uppercase 14px/600) — check
      packages/ui Button vs app-local component.
- [ ] Tests: 100% coverage (header, hero slider nav, about sections, CTA,
      footer, composition, document title).
- [ ] Gate: `npm run verify:app -- obscura` (typecheck → lint → vitest
      100% → build).
- [ ] PR description: source Porto, preview URL, tokens, renames, script
      font substitution, picsum note.
- [ ] After merge: verify live surge URL + bundle; bookkeeping `[x]` +
      URL on ALL FOUR TEMPLATES.md rows (lines 479, 1487, 2468, 2552).
