# Reachly (ColorLib Calvino) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-reachly`.

## Design notes (replication findings)

- **Original:** ColorLib "Calvino" — free responsive Bootstrap SEO / digital
  marketing agency website template (source:
  https://colorlib.com/wp/template/calvino/). TEMPLATES.md line 556 (single
  `- [ ]` row).
- **Demo DOM analyzed:** REACHABLE — `https://preview.colorlib.com/theme/calvino/`
  returns HTTP 200 (curl, 2026-08-13, 40.8 KB HTML). Title: "SEO | Template".
  This is a FULL-fidelity reference: section order, copy, buttons all taken
  from the live DOM. Token source: `assets/css/style.css` (76.9 KB). NOTE:
  the shared stylesheet bundles rules for OTHER pages of the theme (extra
  colors `#f4e700`, `#38a4ff`, `#4cd3e3` …) — only the tokens listed below
  are used by the index page.
- **Visual design (browser vision confirmed on the screenshot
  `calvino-free-template.jpg`):** clean marketing-agency landing page, hot
  pink `#FF4495` primary, white/light-grey surfaces, soft pink/blue pastel
  blobs behind the hero. Logo + centered nav (Home / About / Services / Case
  Study / Blog / Contact) + "Call Us:" + pink pill "Let's Talk"; split hero
  ("Digital Marketing Expert" pill tag, dark h1 "We bring you new
  customers", pink pill "Explore Services", office photo with big white play
  button, wavy bottom edge); "OUR SERVICES / Provide Awesome Service With
  Our Tools" + FOUR white cards (line icon in light-pink circle, drop
  shadow, faint dotted grid behind). Screenshot cuts off at the services
  cards — the rest (About, Pricing, Why Choose Us, brand strip, Case Study,
  testimonials, CTA banner, footer) comes from the live DOM. Demo brands
  itself "Calvino" → recreation: **Reachly**.

## Design tokens (from the live stylesheet)

| Token          | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Where                                                                                                                                                                                          |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Brand pink     | `#FF4495`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `.section-tittle > span` / `.hero-caption span` eyebrow text, `.btn_0` gradient, `.browse-btn` underline, service/pricing icon circles, `.get-btn` hover border+text, nav/footer hover accents |
| Pink gradient  | `#FF4495 → #FF6D6D`                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `.btn_0` buttons, `.single-emargency` CTA box                                                                                                                                                  |
| Dark navy      | `#192839`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | h1 (58px), `.section-tittle h2`, `.hero-caption p`, `.single-cat h5 a`, `.single-cat::before` hover fill, active `.nav-link` bg, `.browse-btn` text                                            |
| Secondary blue | `#1F2B7B`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | shared sheet accents (not on this page's key surfaces)                                                                                                                                         |
| Stats numbers  | `#131933` (`.pera-count h5`, 24px Jost)                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Why Choose Us counters                                                                                                                                                                         |
| Body copy      | `#545454` (Jost 16px, lh 1.4–1.8)                                                                                                                                                                                                                                                                                                                                                                                                                                                           | paragraphs, card copy                                                                                                                                                                          |
| Footer text    | `#5E5E5E`; footer headings `#1A1A1A` (20px 600)                                                                                                                                                                                                                                                                                                                                                                                                                                             | `.footer-pera p`, `.footer-tittle h4`, link items                                                                                                                                              |
| Pricing band   | `#F8FBFE` (`.p-bg` + `pt-70`)                                                                                                                                                                                                                                                                                                                                                                                                                                                               | whole pricing section background                                                                                                                                                               |
| White surfaces | `#fff` (cards, sticky header, eyebrow pill, pricing hover bg)                                                                                                                                                                                                                                                                                                                                                                                                                               | `.single-cat`, `.header-sticky.sticky-bar`, `.hero-caption span`, `.single-card:hover`                                                                                                         |
| Shadows        | card `0 25px …` neutral; pricing hover `0 15px 30px rgba(255,87,0,0.12)`                                                                                                                                                                                                                                                                                                                                                                                                                    | `.single-cat`, `.single-card:hover`                                                                                                                                                            |
| Fonts          | Body **"Jost"** 16px; headings **"Nunito"** 700 (h1 58px, h2 36–40px lh 1.4); eyebrows Jost 13–14px uppercase ls .1em mb 18px                                                                                                                                                                                                                                                                                                                                                               | Google Fonts `<link>` in `index.html` (Jost 300–600 + Nunito 400–800)                                                                                                                          |
| Buttons        | PILL radius 25–40px. `.btn_0`: pink gradient, white 18px/500, padding 11px 36px, radius 25px, trailing arrow icon (left 26px → 30px hover); `.hero-btn` padding 15px 36px radius 30px; `.get-btn`: ORANGE `#E67118` bg Nunito radius 40px, hover → transparent + 1px `#FF4495` border + pink text; `.border-btn`: transparent, 1px `#fff`, white 18px/500, radius 30px, padding 15px 34px, ls 1px; `.browse-btn`: `#192839` 16px/500 + 2px pink underline bottom -11px, hover pink + ls 1px | all CTAs                                                                                                                                                                                       |
| Tabs           | `.nav-tabs` container 1px `#000` border radius 20px; `.nav-link` Nunito 13px 600 uppercase padding 10px 19px; active = `#192839` bg + white                                                                                                                                                                                                                                                                                                                                                 | Yearly/Monthly pricing toggle                                                                                                                                                                  |
| Hero           | cover bg image; h1 58px Nunito 700 `#192839` lh 1.2; p `#192839` 20px mb 48px; eyebrow white pill (`#fff` bg, pink 14px, radius 20px, 1px `rgba(255,68,149,0.2)` border, padding 5px 18px)                                                                                                                                                                                                                                                                                                  | `.slider-bg1`, `.hero-caption`                                                                                                                                                                 |
| Card hover     | `.single-cat::before` bottom fill `#192839` height 0→100% radius 5px; text flips white; `.single-sutps::before` bottom gradient overlay height 40%                                                                                                                                                                                                                                                                                                                                          | services + case-study cards                                                                                                                                                                    |
| Section rhythm | `section-padding` 120px 0 (100/70 responsive); pricing `p-bg pt-70`; brand `pt-50 pb-40`; stups `pt-100`                                                                                                                                                                                                                                                                                                                                                                                    | —                                                                                                                                                                                              |

## Structure (1:1 section order)

1. Header — transparent sticky; "Reachly" wordmark (pink icon mark) left,
   nav center: Home / About / Services / Case Study / Blog (dropdown: Blog,
   Blog Details, Elements) / Contact, "Call Us: +10 (78) 378 3784" + pink
   pill "Let's Talk" right; sticky → `#fff` bg, padding 15px.
2. Hero — cover photo (picsum `reachly-hero`) + white pill eyebrow "Digital
   Marketing Expert" + h1 "We bring you new customers" (58px Nunito 700
   `#192839`) + subcopy + pink pill "Explore Services" (hero padding) +
   DECORATIVE circular play button (lucide Play, no video) floating over the
   right-side photo.
3. Services — "Our Services / Provide Awesome Service With Our Tools"; FOUR
   white cards: icon in light-pink circle (lucide: TrendingUp, BarChart,
   Laptop, FileText), h5 "Discover, Explore the Product" (22px 700
   `#192839`), p "Effective strategies to help you reach customers.";
   hover → navy fill + white text.
4. About — photo left (picsum `reachly-about`), caption right: "About Us"
   eyebrow + h2 "We Create a Steps to Build a Successful Digital Product" +
   paragraph + pink "Explore More" pill.
5. Pricing — `#F8FBFE` band; "Pricing Plan / Choose Your Best Pricing
   Plan"; Yearly (active)/Monthly pill tabs; THREE cards per pane (icon
   78px circle, plan name, "$ 05.00", features: Increase traffic 50% /
   Social Media Marketing / 10 Free Optimization / 24/7 support, orange
   pill "Get Started"); hover → white bg + shadow + pink-outline button.
6. Why Choose Us — "Why Choose US / We are an SEO company that specializes
   in developing" + "Explore More" browse-btn right (same row, border-bottom
   divider); stats 450+ "Successfully completed projects" / 860 "Highly
   specialised employees" (counter number 24px `#131933` + label); body
   paragraph + quote "- Shonda Leer, Chief of Staff at Franclin
   Technologies".
7. Brand strip — 6 logo placeholders in a row (picsum `reachly-brand-1..6`
   or styled text logos), pt-50 pb-40.
8. Case Study — "Case Study / Some Of Our Awesome Stuffs"; FOUR photo cards
   (`reachly-stuff-1..4`): "Marketing" tag + "Discover, Explore the
   Product" overlaid bottom-left in white over dark gradient.
9. Testimonials — 3 slides: quote icon + quote + avatar (`reachly-avatar`)
   - author "Robert — Creative Director" (NEVER "at Colorlib").
10. CTA banner — full-width bg photo + pink-gradient rounded box right:
    "Interested to Digging Dipper?" (white 36px 700) + white paragraph +
    "Contact Us" white-bordered pill.
11. Footer — 5 columns: about (wordmark + blurb + Instagram/Facebook/
    Twitter icons), Navigation (Home/About/Services/Blog/Contact),
    Services (Drone Mapping/Real State/Commercial/Construction), Support
    (same four), Contact Us (Mail icon + contact@reachly.example + phone
    10 (87) 738-3940); bottom bar: "Copyright © <year> All rights reserved
    | Made with Component Dock" + mandatory link
    (https://www.componentdock.com/).

## Tasks (implementation order)

1. Scaffold `apps/reachly` (copy the simplest existing app; package
   `@free-react-templates/reachly`; `vite.config.ts` with
   `injectUiSource()`).
2. `npm install` at repo root (registers workspace in package-lock.json;
   verify `grep -c "free-react-templates/reachly" package-lock.json`).
3. `index.css` `@theme` tokens: `--color-brand: #FF4495`,
   `--color-brand-dark: #FF6D6D`, `--color-navy: #192839`,
   `--color-band: #F8FBFE`, `--color-copy: #545454`,
   `--color-footer-text: #5E5E5E`, `--color-footer-heading: #1A1A1A`,
   `--color-orange: #E67118`, `--font-sans: 'Jost', sans-serif`,
   `--font-heading: 'Nunito', sans-serif`.
4. `index.html`: Google Fonts `<link>` (Jost 300–600 + Nunito 400–800);
   document title "Reachly — SEO & Marketing Template".
5. Components (in order): `Header` (wordmark + nav + Blog dropdown + Call
   Us + Let's Talk + mobile menu + sticky) → `Hero` (eyebrow pill, h1,
   subcopy, CTA, decorative play) → `Services` (4 hover-fill cards) →
   `About` → `Pricing` (tabs + 3 cards + orange pill button) →
   `WhyChooseUs` (stats + quote) → `BrandStrip` → `CaseStudy` (4 overlay
   cards) → `Testimonials` (3 slides) → `CtaBanner` → `Footer`; compose in
   `App.tsx`.
6. Data: nav links + Blog dropdown, service cards (4 × title + copy),
   pricing (2 panes × 3 plans, 4 features each), stats (450+/860), case
   study (4 × "Marketing" + title), testimonials (3 × quote + author),
   footer widgets (blurb, Navigation/Services/Support links, Contact Us).
7. Icons: lucide-react — Play (hero), ArrowRight (button trailing arrows),
   TrendingUp/BarChart/Laptop/FileText (service icons), Quote
   (testimonials), Instagram/Facebook/Twitter (footer socials), MapPin or
   Mail/Phone (footer contact).
8. Placeholders: picsum seeds — `reachly-hero`, `reachly-about`,
   `reachly-stuff-1..4`, `reachly-avatar`, `reachly-brand-1..6`. SCREEN the
   seeds (like the Pumply gym finding): hero should look like an office/team
   photo, stuffs like portfolio shots; swap seeds if a photo shows faces,
   text, or anything off-brand; note chosen seed numbers in the PR.
9. Buttons: one `Button` variant "pink-pill" (gradient `#FF4495→#FF6D6D`,
   white text, radius 25px, padding 11px 36px, trailing ArrowRight icon
   that slides right on hover); hero size = padding 15px 36px radius 30px.
   "Get Started" variant "orange-pill" (`#E67118`, radius 40px, hover →
   transparent + 1px pink border + pink text). "Contact Us" variant
   "white-outline" (transparent, 1px white border, radius 30px). "Explore
   More" = `browse-btn` link (navy + 2px pink underline, hover pink + ls
   1px).
10. TDD per section; 100% coverage; verify with `scripts/verify-app.sh
reachly` (or `npm run verify:app`).
11. PR description: source (ColorLib Calvino, preview URL), tokens, what
    differs (name, YouTube link → decorative play button, placeholders,
    paraphrased copy), mark TEMPLATES.md line 556 `[x]` + surge URL +
    homepage + `npm run readme:status` after deploy.

## Fidelity pitfalls to watch

- The page is LIGHT (white/`#F8FBFE` bands) — the pink `#FF4495` gradient
  buttons and the pink CTA box are the color anchors; the hover fill is
  DARK NAVY `#192839`, not pink.
- Buttons are PILLS (radius 25–40px), never square. `.btn_0` has a trailing
  arrow icon that slides right on hover — don't drop it.
- The pricing "Get Started" buttons are ORANGE `#E67118` in the demo
  (radius 40px) and only become pink-outline on hover — do not recolor them
  pink by default.
- The demo repeats the IDENTICAL "Basic / $05.00" card in all six slots (2
  tab panes × 3 columns). Keep the same content kind; either repeat the
  cards like the demo (most faithful) or lightly paraphrase to distinct
  plan names (Basic/Business/Pro) — pick one and note it in the PR. Do NOT
  invent pricing content beyond the four listed features.
- Hero eyebrow is a WHITE PILL with PINK text (not plain pink text) —
  `#fff` bg, radius 20px, 1px `rgba(255,68,149,0.2)` border.
- The hero h1 and subcopy are DARK NAVY `#192839`, not grey; body copy
  elsewhere is `#545454`.
- Tabs: the ACTIVE tab is `#192839` (dark) with white text; the container
  has a 1px black border — match the pill-group look.
- Testimonial author in the demo is "- Robert . Creative Director at
  Colorlib" — the Colorlib reference MUST NOT appear in app files
  (provenance only in spec/TEMPLATES.md/PR). Use "Robert — Creative
  Director".
- Footer contact email in the demo is `contact@carwash.com` (carwash
  placeholder) — recreate as `contact@reachly.example`; phone
  "10 (87) 738-3940" is fine as-is.
- The CTA box `.single-emargency` is ~490×505 with a pink gradient over a
  shape image and sits on the RIGHT half of a full-width background photo
  (offset-xl-6) — the box, not the whole band, is pink.
- The case-study overlay title sits at the bottom-LEFT (left 30px bottom
  25px) over a 40%-height dark gradient — match the overlay, don't put the
  text below the image.
- Brand strip and Case Study and Testimonials are slick carousels in the
  original — implement with CSS scroll-snap or a small state-driven
  carousel (no new dependency); tests must cover any interactive control.
- Service card icon circles are LIGHT pink (`#f0e9ff`-ish tint / soft pink)
  with the pink icon — check the exact tint in the preview CSS when
  implementing (`.cat-icon`), and the hover flips the icon circle to white.
- The "Why Choose Us" section has a `border-bottom` divider under the
  heading row — keep it.
- Footer link columns in the demo: Navigation lists Home/About/Services/
  Blog/Contact (5 links); Services and Support list the same four items —
  reproduce as-is.
- Original footer credit "made with ♥ by Colorlib" → Component Dock link
  per repo conventions; wordmark is "Reachly", never "Calvino".
- picsum seeds are random — SCREEN them before merging (hero should look
  like an office/team photo, `reachly-stuff-*` like portfolio shots).
