# Pulp (ColorLib Erase) — Tasks & Design Notes

> Prep artifacts for the PREP stream. Implementation ships later on
> `feat/template-pulp` by an implementer stream.

## Design notes

- **Original:** ColorLib "Erase" — free Bootstrap 4 magazine / fashion
  editorial website template. Source: https://colorlib.com/wp/template/erase/.
  New name: **pulp** (print-magazine "pulp"; single word, no collision with
  `ls apps/` or existing spec folders). Erase appears in TEMPLATES.md at
  lines 217 (Beauty section — the claim, first unchecked without a prep),
  1703, and 2194 (duplicate rows; bookkeeping marks them `[x]` when shipped).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/erase/`
  (HTTP 200, ~30KB). Stylesheets: `css/style.css` (~61KB — Bootstrap 4.3.1
  base vars + custom template styles), `css/icomoon.css` icon font, plus
  owl.carousel/animate/aos/magnific-popup/ionicons. Fonts: **Poppins**
  (100–700) + **Abril Fatface** (400) served via inline Cloudflare cf-fonts
  `@font-face` — use Google Fonts `<link>` in the recreation.
  Screenshot `erase-free-template.jpg` (1200×946) confirms: deep olive/dark
  hero, giant high-contrast serif **"ERASE"** letters filled with a
  watercolor/multicolor image texture, "MAGAZINE" / "UK EDITION" small
  uppercase letter-spaced labels, white logo top-left + hamburger top-right;
  below, an article card with dark portrait photo left + white content right
  (circular avatar, "Jamie Jonson", "FASHION.COM", headline, "Read more"
  pill).
- **Structure observed (1:1):**
  1. `nav#colorlib-main-nav` — fullscreen overlay menu, bg rgba(0,0,0,0.99),
     hidden (opacity 0, `transform: scale(0)`, 0.8s cubic-bezier
     reveal → scale(1)); faint bg photo + rgba(0,0,0,0.3) overlay; centered:
     Abril Fatface 80px white uppercase logo "Erase" + tagline span (14px,
     letter-spacing 8px, rgba(255,255,255,0.8)); links Home, About, Blog,
     Contact (12px uppercase letter-spacing 5px white; hover underline
     scaleX animation; active text **#f8b500** gold + #69779b underline);
     close = hamburger morphing to X (top/right 40px).
  2. `header` — absolute, transparent, padding 2em (1em mobile); left logo
     "Erase" (Poppins 12px uppercase letter-spacing 5px white) + tagline
     span (11px, letter-spacing 7px); right hamburger (2px white bars).
  3. `section.hero-wrap.js-fullheight` — full-height hero (100vh / 700px),
     `container-fluid.px-0`, centered `div.desc`: `span.subheading`
     **"Magazine"** (12px uppercase letter-spacing 20px white, top-left) /
     `h1` **"Erase"** (Abril Fatface 340px → 200/150/100 responsive,
     uppercase, inline bg-image + `background-clip: text` → image-filled
     letters) / `span.subheading-2` **"UK Edition"** (bottom-right,
     letter-spacing 10px). Hero bg-color cycles `@keyframes myanimation`
     20s: #69779b → #f8b500 → #212121 → #064acb → back; optional overlay
     rgba(0,0,0,0.3).
  4. `section.ftco-section.ftco-no-pb.ftco-no-pt` — edge-to-edge list of
     **11** `div.blog-wrap` rows (`container-fluid.px-0`): image half
     `col-md-6.img.js-fullheight` + text half `col-md-6 > div.text.p-md-5.
p-4`: author chip (60px circular avatar + h4 "Jamie Jonson" +
     span "fashion.com" uppercase ls 4px) → `h2` 50px black headline link
     → paragraph → `p.mb-0.mt-4 > a.btn.btn-primary` "Read more" + arrow
     (pill radius 30px, bg/border **#69779b**, white text; hover
     transparent + colored text). Rows **3 and 10** are `bg-darken`
     (**#212121**): image side `order-md-last` (right) as a 400×400px
     circle, text rgba(255,255,255,0.5), headline white, author h4 white.
     Image order: 1,2,4,5,6,7,8,9,10,11,12.
  5. `footer.ftco-footer.ftco-section.img` — bg **#212121**, padding 7em 0,
     inner overlay; 4 widgets: `col-lg-3` Abril Fatface 24px logo "Erase" +
     blurb (rgba(255,255,255,0.7)) + 3 social circles (60px, radius 50%,
     bg rgba(255,255,255,0.05), 26px icons, hover white); `col-lg-4`
     **"Recent Blog"** — 2 `block-21` entries (thumb + 18px heading link
     rgba(255,255,255,0.8) → **#69779b** hover + meta: calendar "July 12,
     2018", person "Admin", chat "19" in gray); `col-lg-2` **"Site Links"**
     — Home, About, Model, Services, Blog; `col-lg-3` **"Have a
     Questions?"** — map/phone/envelope rows (40px white icon column; text
     rgba(255,255,255,0.7)). Bottom bar: copyright + heart + repo-standard
     credit (replace Colorlib credit).
- **Design tokens extracted from `css/style.css`:**
  - Fonts: **Abril Fatface** (display: hero wordmark 340px, menu logo 80px,
    footer logo 24px), **Poppins** (body 18px/1.8 + everything else).
    Google Fonts `<link>`.
  - Brand blue-gray **#69779b**: btn-primary bg/border, link color, active
    menu underline, Recent Blog hover, hero anim stop 1; variant #6c7a9d
    (contact links).
  - Gold **#f8b500**: active menu link; hero anim stop 2.
  - Dark **#212121**: bg-darken rows, footer bg; hero anim stop 3; deep
    blue **#064acb** stop 4.
  - Neutrals: body rgba(0,0,0,0.5), headings #000, light #f8f9fa, meta gray.
  - Buttons: pill radius 30px, bg/border #69779b, white text; hover
    transparent + colored text.
  - Section rhythm: hero full-height; editorial section edge-to-edge
    (no top/bottom padding); footer 7em.
  - Micro-copy: uppercase + wide letter-spacing (5–20px) — signature detail.
  - Social circles 60px radius 50% bg rgba(255,255,255,0.05); avatar 60px
    circle; dark-row image 400px circle.
- **Recreation decisions:** header = absolute transparent bar (Poppins
  uppercase logo "Pulp" + tagline + hamburger); hamburger → fullscreen
  near-black overlay menu (scale-in, faint picsum bg + overlay, big Abril
  Fatface logo, uppercase links, gold active, X close); hero = full-height,
  giant "Pulp" wordmark `bg-clip-text text-transparent` filled with a picsum
  texture, "Magazine"/"UK Edition" labels, animated bg-color cycle
  (keyframes in index.css); editorial list = 11 alternating rows (avatar
  chip, 50px headline, excerpt, pill "Read more" + ArrowRight), rows 3 & 10
  dark with right-side 400px circular image; footer = #212121 4 widgets +
  bottom bar with repo-standard credit; images
  `picsum.photos/seed/pulp-N/w/h`; icons via lucide-react (Twitter,
  Facebook, Instagram, Calendar, User, MessageCircle, MapPin, Phone, Mail,
  ArrowRight).

## Implementation tasks (for the implementer stream)

- [ ] Scaffold app: copy simplest existing app → `apps/pulp`, rename package
      to `@free-react-templates/pulp`, register workspace in
      package-lock.json (root `npm install` before committing), keep
      `injectUiSource()` in vite.config.ts.
- [ ] `src/index.css`: `@theme` tokens — brand blue-gray #69779b, gold
      #f8b500, dark #212121, deep blue #064acb (anim stop), black/white
      neutrals; `@keyframes` hero color cycle (20s, 4 stops); font links for
      Poppins (body) + Abril Fatface (display) in index.html.
- [ ] Components (order of composition in App.tsx):
      Header (absolute transparent bar + hamburger) → Hero (wordmark +
      eyebrows) → EditorialList (11 rows from a data array with `dark` flags
      at index 2 and 9) → Footer (4 widgets + bottom bar).
- [ ] Nav overlay: fullscreen fixed container, near-black bg, scale-in
      animation, logo + Home/About/Blog/Contact links (active gold), close
      control; body scroll lock while open; keep testable (open/close
      state).
- [ ] Editorial rows: half image / half text; author chip (60px avatar,
      name + source label), 50px headline, excerpt, pill "Read more" with
      ArrowRight (hover: transparent bg + #69779b text); dark rows flip
      image right as 400px circle (Tailwind `order-*`, `rounded-full`).
- [ ] Hero wordmark: Abril Fatface, responsive clamp size, `bg-clip-text
    text-transparent` + picsum bg image; "Magazine" top-left, "UK Edition"
      bottom-right letter-spaced eyebrows.
- [ ] Footer: brand + 3 social circles (lucide Twitter/Facebook/Instagram),
      Recent Blog ×2 (thumb, title, meta date/author/comments), Site Links,
      Have a Questions? (MapPin/Phone/Mail rows); bottom bar with
      repo-standard credit.
- [ ] TDD: spec scenarios → tests → implementation, 100% coverage.
- [ ] Run `npm run verify:app -- pulp` (typecheck + lint + vitest 100% +
      build).
- [ ] PR: source Erase, preview URL, tokens, renames; squash-merge
      immediately; then TEMPLATES.md `[~]`→`[x]` + surge URL +
      `npm run readme:status`.
