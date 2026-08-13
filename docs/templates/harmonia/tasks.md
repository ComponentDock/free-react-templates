# Harmonia (ColorLib Musiclab) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-harmonia`.

## Design notes (replication findings)

- **Original:** ColorLib "Musiclab" — dark-heroed SaaS landing page for a
  music streaming app (page title "Music Labe"; source:
  https://colorlib.com/wp/template/musiclab/, appears 2× in TEMPLATES.md —
  line 606 (Bootstrap 5), line 2271 (Music); mark ALL `[x]` when done).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/musiclab/
  (HTTP 200, ~32 KB HTML; `assets/css/style.css` ~96 KB parsed for tokens).
  Stack: Bootstrap 5 + slick carousels (hero slider + testimonials) + Font
  Awesome / themify icons — recreate ALL interactivity client-side in React.
- **Screenshot:** `musiclab-colorlib-template.jpg` (1200×946, viewed in
  browser): DARK charcoal hero; white "MUSIC LAB" wordmark + gradient icon;
  centered white nav (Home, Features, Pricing, Download, Blog, Contact);
  gradient "Sign Up" pill; huge white headline "Open the world of music.
  It's all here."; gradient "DOWNLOAD FOR DESKTOP" pill + translucent
  bordered "DOWNLOAD FOR MOBILE" pill; below them a large desktop-app
  mockup (music library, "Popular in this week", "Featured episodes") with a
  phone mockup beside it; fold cuts into a white section (top of a rounded
  purple phone-mockup card visible).
- **New name:** Harmonia ("harmony" — the template's persona is a music
  streaming app). Single lowercase word, no collision with `apps/` or
  existing spec folders. NOT "musiclab" — never reuse the source name.
- **Visual design (DOM + CSS tokens + screenshot):** SIGNATURE BRAND
  GRADIENT `linear-gradient(to right, #ca42f2 0%, #6a42f2 39%, #4294f2 75%,
#42b5f2 100%, #7db9e8 100%)` on every primary button (btn_01) and on
  ghost-button hover (btn_001:hover). Theme blue `#42B5F2` (section-tittle
  caption spans, submenu hover); price blue `#4294F2` (pricing card amount,
  pricing-button outline on card hover). DARK `#262929` (headings, pricing
  card hover bg, footer-wrapper bg) + hero/nav dark gradient
  `#161a1a → #262929`. Muted `#97A7AF` (hero sub-caption, footer links,
  hovered-card features), body `#6D6D6D`, small captions `#8F8F8F`.
  Light bands `#F5F7F9` (section-bg), `#F1FBFF` (gray-bg), white elsewhere.
  Accent orange `#F15B43` (Sign In hover). Buttons = 30px-radius pills,
  uppercase 14px/500: hero padding 17px 35px, pricing padding 13px 76px;
  ghost = `rgba(255,255,255,0.1)` fill + white text. Section titles: 16px
  `#42B5F2` caption span + 38px/700 `#262929` h2 (letter-spacing -0.04em).
  Hero h1 52px/700 white (letter-spacing -0.05em), sub-caption 18px
  `#97A7AF`. Pricing cards: white, 1px `#DDE4E8` border, radius 8px,
  padding 30px 31px; hover → dark `#262929` card, white name + icons,
  `#97A7AF` features, transparent `#4294F2` outline CTA. Footer bg
  `#262929`, h4 20px/600 white, links 16px/600 `#97A7AF` (hover underline).
- **Section rhythm (1:1 with preview):** dark navbar (brand + Home,
  Features, Pricing, Download, Blog ▾, Contact + Sign In gradient pill) →
  DARK HERO (sub-caption "Intuitive. Powerful. Runs everywhere." + h1 "Open
  the world of music. It's all here." + Download For Desktop gradient pill +
  Download For Mobile ghost pill + full-width hero-desktop.png app mockup)
  → white "Listen to a personalized mix of tracks" band (sound.png icon +
  h2 + 3 numbered rows + about1.png) → `#F5F7F9` band (h2 — preview copy is
  leftover "We are tender heart charity foundation." → paraphrase to music
  context — + 3 finder-icon rows + about2.png) → white "Get ready for
  seamless online music" (4 cards: Offline mode. / High quality audio. /
  No ads. / Unlimited skips. + 4-image strip onlinemusic1-4.png) →
  `#F5F7F9` pricing band ("Listen free or subscribe to MusicLab Premium." +
  2 cards) → light testimonials carousel ("Customers are loving MusicLab",
  3 slides w/ founder photos + quote + role "CEO at Creativelab") → dark
  `#262929` footer (logo + pera + socials + Quick Links / Support /
  Navigation columns + copyright).
- **Pricing caveat (fidelity):** the preview DOM renders the SAME card twice
  ("MusicBox Free" / $0.00 / Online listening, Regular audio, With
  advertising, 30 skips per day / Get Free). The section heading promises
  Free vs Premium — keep two cards but differentiate the second as the
  Premium plan (matching feature kind: high quality audio / no ads /
  unlimited skips), same card anatomy. Note the price displays as $0.00 in
  the preview; a realistic premium amount is fine per copy latitude but
  document any deviation in the PR.
- **Leftover-copy caveats (paraphrase, keep same kind of content):**
  about-2 heading ("We are tender heart charity foundation.") and the
  pricing/testimonial intro paragraphs ("Utrust is a seamless integration…
  digital currencies") are generic ColorLib boilerplate — reword for the
  music context; the DOM structure stays authoritative.
- **Footer convention:** the ColorLib copyright line credits Colorlib —
  per monorepo convention the footer MUST instead link
  `https://www.componentdock.com/` ("Component Dock"). Socials are
  Facebook / LinkedIn / Instagram — use inline SVG brand icons (lucide has
  no brand icons).

## Implementation tasks (order)

1. Scaffold app: `cp -r apps/<simplest-existing-app> apps/harmonia`, rename
   package to `@free-react-templates/harmonia` in package.json + lockfile
   (`npm install --package-lock-only`), `public/CNAME` =
   `harmonia.free.componentdock.com`, homepage =
   `https://harmonia.free.componentdock.com`, keep `injectUiSource()` in
   vite.config.ts.
2. `src/index.css`: Inter import + `@theme` tokens — brand gradient stops
   (`--color-brand-a #ca42f2` … `--color-brand-e #7db9e8`), `ink` `#262929`,
   `section-bg` `#F5F7F9`, `muted` `#97A7AF`, `bodytext` `#6D6D6D`, `price`
   `#4294F2`, `accent` `#F15B43`, card border `#DDE4E8`; pill button
   utilities (30px radius, uppercase).
3. `data.ts`: nav links (Home/Features/Pricing/Download/Blog/Contact),
   hero copy, about rows, 4 great-stuffs cards, 2 pricing plans, 3
   testimonials, footer columns; picsum seeds (see spec Assets).
4. Components in order: `Navbar` (sticky dark, dropdown + mobile toggle w/
   aria-expanded) → `Hero` (dark gradient, sub-caption, h1, two pills,
   mockup image) → `AboutMix` (icon + h2 + 3 numbered rows + image) →
   `AboutWay` (`#F5F7F9`, flipped layout) → `GreatStuffs` (4 cards +
   4-image strip) → `Pricing` (2 cards + dark hover flip + outline CTA) →
   `Testimonials` (client-side 3-slide carousel, aria-labels) → `Footer`
   (dark, 3 columns, inline-SVG socials, Component Dock link).
5. `App.tsx` composes in the order above; footer copyright line renders
   dynamically (no ColorLib credit).
6. TDD per component (scenario-style `it` blocks mirroring the spec);
   keep 100% coverage; run `scripts/verify-app.sh harmonia` (typecheck →
   lint → knip → fallow → vitest → build).
7. `npm run spec:validate`; commit conventionally
   (`feat: Harmonia — music streaming landing (ColorLib Musiclab)`), PR +
   immediate squash merge; then bookkeeping: both Musiclab rows (lines 606, 2271) `[x]` + `harmonia.free.componentdock.com` + `npm run readme:status`.
8. Deploy happens on merge; verify the surge URL returns 200 with matching
   bundle hash; report honestly if the account rate-limit path is hit
   (see replication skill).
