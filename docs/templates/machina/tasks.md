# Machina (ColorLib Braxit) — Tasks & Design Notes

> Prep artifacts for the PREP stream. Implementation ships later on
> `feat/template-machina` by an implementer stream.

## Design notes

- **Original:** ColorLib "Braxit" — free industrial / manufacturing website
  template. Source: https://colorlib.com/wp/template/braxit/. HTML title is
  "Industrial | Teamplate" (sic); internal project name "280.Industrial_HTML".
  New name: **machina** (machinery; single word, no collision with `ls apps/`
  or existing spec folders). Braxit appears once in TEMPLATES.md (line 352,
  Bootstrap section, first unchecked without a prep — the claim).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/braxit/`
  (HTTP 200, ~73KB) + stylesheet `assets/css/style.css` (~198KB). Full
  rendered DOM extracted; structure below is from the DOM + CSS tokens.
  Screenshot `braxit-free-template.jpg` (1200×946) confirms: dark-navy top
  bar with white phone/email and a red "Free Quote" button, white nav with
  red geometric logo mark, hero photo of an industrial curved structure with
  a crane at dusk + white headline "Market Leading Manufacturer" + red square
  "Learn More" button + circular play button, light about section with big
  red numbers (454 m / 127) and a yellow crane-on-dock photo with an orange
  "20 Years of experience" square overlay, gray categories section with 4
  icon cards, services on an image background, red square buttons
  everywhere, testimonial, form, blog, map, footer.
- **Structure observed (1:1):**
  1. `div.preloader` — full-screen logo spinner (optional to recreate).
  2. `div.header-area > div.main-header`:
     - `div.header-top` (bg `#140C40`, white): left phone +880 278 367 367 ·
       email brexitsupport@gmail.com; right red "Free Quote" button.
     - `div.header-bottom.header-sticky` (white): logo (image → text
       "Machina" + red mark); nav Home, About, Services, Project, Blog,
       Pages (dropdown: Blog Details, Element, Project Details, Services
       Details), Contact; search icon (opens `search-model-box` overlay,
       placeholder "Searching key....."); `div.mobile_menu` hamburger.
  3. `div.slider-area` (bg `../img/hero/h1_hero.png`, height 765px, white
     text): `div.slider-active` carousel with 2 `div.single-slider` slides;
     `div.hero__caption`: h1 "Market leading Manufacturer" (accent word red),
     p "The right candidate may exist, but talented people…",
     `a.btn.hero-btn` "Learn More" (red square + arrow),
     `div.video-icon` circular play → video modal.
  4. `section.about-low-area.section-padding40`: `div.about-caption` —
     section-tittle: red span "About Us" + h2 "We have all your needs, from
     micro macro" + paragraph; left `div.experience` counters ×2: **Delivery
     Packages "454 m"**, **Countries Covered "127"** (count-up animation);
     right `div.about-right-img` (crane photo) + `div.img-cap` orange square
     badge "**20** Years of experience".
  5. `div.gallery-area.container-fluid.p-0` — full-bleed 3 tiles
     (`div.single-gallery`): hover `div.thumb-content-box >
div.thumb-content` with title + line: **Building Yead, Meghna Bridge,
     Kalis Vadru**.
  6. `div.categories-area.section-padding40.gray-bg` (bg `#f7f7fd`):
     centered tittle (span "Categories" + h2 "To increase productivity and
     cost effectiveness on the market.") + 4 `div.single-cat` cards
     (flaticon icon + h5 + text): **Quality, Reliablity (sic), Experience,
     Manufacturing**.
  7. `div.service-area.section-bg` (image cover, `background-attachment:
fixed`): 3 `div.single-services` (first `.active`, others `.hide` —
     carousel): h4 "Mechanical Engineering" + text + `div.services-btn`
     "View More" (red, arrow).
  8. `section.wantToWork-area.gray-bg`: h2 "Up to 40% Off" + paragraph
     (first CTA banner).
  9. `div.contact-form.testimonial-area.section-padding40.mb-40`:
     - centered tittle: h2 "Some amazing words from our clients".
     - `div.h1-testimonial-active`: 2 `div.single-testimonial` slides —
       quote ("Working in conjunction with humanitarian aid agencies…") +
       `div.rattiong-caption` 5 stars + "- **Micky Mouse**, Business Man".
     - `div.single-man-slider`: 4 avatar thumbnails (`div.single-mam-img`).
     - `div.single-gallery` card: h3 "Need to make an enquiry?" + text.
     - `div.form-wrapper`: h2 "Drop your message" + form: **Your Name**
       (user-icon), **Email** (email-icon), **Phone no.** (email-icon),
       **Topic** select (Topic one / Topic Two / Topic Three), **Message**
       textarea (message-icon) + `div.submit-info` "Send Message" (red).
  10. `section.home-blog-area.pb-bottom`: tittle (span + h2 "News & Media
      center" + paragraph) + 2 `div.home-blog-single` cards: blog-img +
      blog-cap: date "22 Apr 2020", h3 title ("We might track your usage
      patterns to see" / "The massive stadium screens at the MCG"), Read
      More.
  11. `section.Map-area` — Google Maps embed.
  12. `section.wantToWork-area` (2nd CTA): `div.wantToWork-caption
wantToWork-caption2` + logo image + `div.double-btn.f-right`: "Learn
      More" solid (`btn w-btn wantToWork-btn`) + "Learn More" outline
      (`btn2 w-btn wantToWork-btn`, red text).
  13. `div.footer-area.footer-padding` (bg `#F5F9FB`):
      - **Company** links: Why choose us, Review, Customers, Blog, Carrier.
      - **Production** links: Technology, Products, Quality, Sales
        geography.
      - **Contact Us**: Address: 789/A green avenue Dhanmondi, Dhaka ·
        Phone: +10 783 3674 356 · Email: company@gmail.com.
      - **Newsletter**: "Subscribe our newsletter to get updates about our
        services" + email input (placeholder " Email Address ") + subscribe
        button.
      - `div.footer-bottom-area`: copyright (replace Colorlib credit with
        repo-standard credit) + `div.footer-social` icons.
  14. `div.search-model-box` — full-screen search overlay (input + close).
- **Design tokens extracted from `assets/css/style.css`:**
  - Font: **'Muli', sans-serif** (Google Fonts, weights 300–900) — headings
    AND body; load via `<link>` in index.html.
  - Brand red: **#FF3514** — buttons `linear-gradient(to left, #FF3514,
#d62d12, #FF3514)`, `.btn2` text, section-tittle span eyebrow labels
    (18px/700), nav hover, "Free Quote" button, hero accent word, counters,
    logo mark.
  - Dark navy: **#140C40** — header-top bg, headings (h1–h5), footer
    headings.
  - Body grey: **#7a8290 / #999999 / #888888 / #777**; nav #0d2d3e (600,
    16px).
  - Light bgs: **#f9f9ff / #f7f7fd / #F5F9FB** (gray-bg sections, footer);
    #f0e9ff alt tint.
  - Hero: `h1_hero.png` bg, 765px, white text; services `.section-bg` image
    cover + `background-attachment: fixed`.
  - Buttons `.btn`: **border-radius 0**, text-transform capitalize, 16px,
    padding 10px 65px 10px 31px (`.hero-btn` 17px 65px 17px 31px, `.w-btn`
    18px 65px 18px 33px), red gradient, arrow icon, hover shifts gradient;
    `.btn2` red text on white/transparent.
  - Map: Google Maps iframe → recreate as OSM iframe or static placeholder.
- **Recreation decisions:** header = navy top bar + white sticky nav
  ("Machina" text logo + red mark, Pages dropdown, search overlay, mobile
  hamburger); hero = picsum industrial photo, white headline with red accent
  word, red square "Learn More", circular play button opening a video modal;
  about = eyebrow + heading + paragraph + two count-up stats + photo with
  orange "20 Years of experience" badge; gallery = 3 hover-overlay tiles;
  categories = 4 icon cards (lucide: BadgeCheck, ShieldCheck, Award,
  Factory); services = 3 cards with "View More"; CTA = "Up to 40% Off";
  testimonials = quote slider + avatar strip; enquiry card + validated form;
  blog = 2 cards; map; logo CTA bar with double buttons; footer 4 columns +
  bottom bar; images `picsum.photos/seed/machina-N/w/h`; Muli via Google
  Fonts link; icons via lucide-react.

## Implementation tasks (for the implementer stream)

- [ ] Scaffold app: copy simplest existing app → `apps/machina`, rename
      package to `@free-react-templates/machina`, register workspace in
      package-lock.json (root `npm install` before committing), keep
      `injectUiSource()` in vite.config.ts.
- [ ] `src/index.css`: `@theme` tokens — brand red #FF3514 (+ gradient
      #d62d12), navy #140C40, greys #7a8290/#999999, light bgs #f9f9ff /
      #f7f7fd / #F5F9FB; Muli font link in index.html.
- [ ] Components (order of composition in App.tsx):
      Preloader (optional) → TopBar → Navbar (sticky, dropdown, search
      overlay, mobile menu) → Hero (slider + video modal) → About (counters +
      badge) → Gallery (3 tiles + hover overlay) → Categories (4 cards) →
      Services (3 cards) → CtaBanner → Testimonials (slider + avatars) →
      ContactForm (enquiry card + validated form) → Blog (2 cards) → Map →
      LogoCtaBar (double buttons) → Footer (4 cols + bottom bar).
- [ ] Count-up animation for "454 m" / "127" (simple useEffect/Intersection
      Observer or static values — keep testable).
- [ ] Contact form: zod validation, per-field errors, block invalid submit.
- [ ] TDD: spec scenarios → tests → implementation, 100% coverage.
- [ ] Run `npm run verify:app -- machina` (typecheck + lint + vitest 100% +
      build).
- [ ] PR: source Braxit, preview URL, tokens, renames; squash-merge
      immediately; then TEMPLATES.md `[~]`→`[x]` + surge URL + `npm run
    readme:status`.
