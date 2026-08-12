# Homestead (ColorLib "Uptown") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-homestead` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Uptown" — real-estate agency template
  (source: https://colorlib.com/wp/template/uptown/). Listed in TEMPLATES.md
  (Bootstrap section, line 524).
- **Preview URL:** https://preview.colorlib.com/theme/uptown/ (title
  "Uptown - Free Bootstrap 4 Template by Colorlib"). Fetched:
  `/tmp/prep-uptown/index.html` (41 KB), `/tmp/prep-uptown/style.css`
  (75 KB), screenshot `/tmp/prep-uptown/uptown-screenshot.jpg` (viewed in
  browser). Preview DOM and screenshot agree — photo hero + pill search,
  hot-pink `#e86ed0` accent on white, four service columns, three property
  cards, dark how-it-works band, counter, agents, blog, near-white footer.
- **Demo brand in the preview is "Uptown"** → rename to **Homestead**
  (homestead = house with land; text logo "HOMESTEAD" recreated as styled
  text, never the copied `img/logo.png`).
- **Visual design:** modern light real-estate landing page. Signature
  elements: transparent navbar (dark links) over the street-photo hero with
  a centered 60px black headline, a white pill search (70px, radius 40px,
  soft shadow) + circular pink search button (70px, `border-radius: 0 50%
50% 50%`); the angled white divider (two 50%-wide skewY±4deg strips) at
  hero bottom and the how-it-works band bottom; section labels 12px
  uppercase pink `#e86ed0` with 50px pink flanking rules; 40px weight-600
  headings; property cards with the white text block overlapping the photo
  (-50px top, 20px left, 75% width, soft shadow) and the 40px pink corner
  arrow (`border-radius: 50% 0 0 0`); how-it-works band = photo + black 50%
  left overlay with pink circle numbers 01–04; near-white footer
  (`rgba(0,0,0,0.02)`) with black headings and pink accent links.
- **Font:** `"Nunito Sans", Arial, sans-serif` for everything (body 16px
  1.8; headings weight 400–600) via Google Fonts `<link>` in `index.html`
  (400/600/700).
- **Brand colors:** accent `#e86ed0` (links, icons, labels, search button,
  step circles, card arrows), brand-mark span `#f7b71d` (gold), text
  `#666666`, headings `rgba(0,0,0,0.8)`/`#000`, counter numbers `#000`.
- **Structure (1:1 from the preview DOM):**
  1. Navbar `nav.navbar.ftco_navbar` — transparent, absolute `top: 20px`,
     `z-index: 3`; `a.navbar-brand` "Uptown" (gold span) · Home (active) ·
     About · Agent · Services · Properties · Blog · Contact (15px `#000`,
     hover pink, 20px padding) · hamburger on mobile (black bg, white text).
  2. Hero `section.hero-wrap.ftco-degree-bg` — 850px, `bg_1.jpg` (suburban
     street photo), white→transparent gradient overlay
     (`linear-gradient(to bottom, #fff 0%, #fff 3%, transparent 54%)`);
     centered `.slider-text`: `h1` "The Simplest Way to Find Property"
     (60px, `#000`, lh 1.1) · `p` lorem · `.search-location` form (pill
     input "Search location" + pink circle button w/ white magnifier icon).
     Pink circular scroll-down button below the hero.
  3. Services `section.ftco-section.ftco-no-pb` — `.heading-section`:
     label "Our Services" + `h2` "The smartest way to buy a home"; 4
     `col-md-3 .services`: 60px pink icon (flaticon-piggy-bank → lucide
     `PiggyBank`, flaticon-wallet → `Wallet`, flaticon-file → `FileText`,
     flaticon-locked → `Lock`) + `h3` (No Downpayment · All Cash Offer ·
     Experts in Your Corner · Locked in Pricing) + lorem `p`.
  4. Properties `section.ftco-section.goto-here` — label "What we offer" +
     `h2` "Exclusive Offer For You"; 3 `col-md-4 .property-wrap`: `a.img`
     250px (work-1/2/3.jpg) · `.text` (white, `margin-top: -50px`,
     `margin-left: 20px`, `width: 75%`, shadow `0px 5px 21px -14px
rgba(0,0,0,0.14)`, hover `0px 5px 39px -14px rgba(0,0,0,0.26)`):
     `p.price` (`span.old-price` "800,000" struck + `span.orig-price`
     "$3,050" + `small` "/mo") · `ul.property_list` (bed 3 · bathtub 2 ·
     floor-plan 1,878 sqft, inline 16px) · `h3` 18px 600 "The Blue Sky
     Home" · `span.location` "Oakland" · `a.btn-custom` (40px `#e86ed0`,
     `border-radius: 50% 0 0 0`, white link icon).
  5. How it works `section.ftco-section.ftco-degree-bg.services-section.img`
     — `bg_2.jpg` + `.overlay` black 50% width (mobile: 100% at .4 opacity);
     white heading variant: label "Work flow" + `h2` "How it works"; 4
     `col-md-3` steps — pink circle number (01·02·03·04) + title (Evaluate
     Property · Meet Your Agent · Close the Deal · Have Your Property) +
     lorem `p`. Angled white divider at the bottom.
  6. About `section.ftco-section.ftco-no-pb` — `.wrap-about.py-md-5`:
     `h2` "We Put People First." + long lorem paragraph + `about.jpg` photo.
  7. Counter `section.ftco-counter.img#section-counter` — 4
     `col-md-6.col-lg-3 .counter-wrap`: `strong.number` (50px 600 `#000`,
     `data-number` 305 / 1090 / 209 / 67, JS count-up) + `span` 18px
     `rgba(0,0,0,0.7)` label ("Area Population" / "Total Properties" /
     "Average House" / "Total Branches"); `.text-border` = `border-right:
1px solid rgba(0,0,0,0.07)` except last.
  8. Testimonials `section.ftco-section.testimony-section` — label
     "Testimonial" + `h2` "Happy Clients"; owl-carousel: quote lorem +
     person photo + "Roger Scott" / "Marketing Manager".
  9. Agents `section.ftco-section.ftco-agent.ftco-no-pt` — label "Agents"
     - `h2` "Our Agents"; 4 `col-md-3` cards: `img` (team-1..4.jpg) + `h3`
       "James Stallon" + `.h-info` ("Listing — 10 Properties").
  10. Blog `section.ftco-section.ftco-no-pt` — label "Blog" + `h2` "Recent
      Blog"; 3 `col-md-4 .blog-entry`: `.block-20.img` (image_1..3.jpg),
      `h3.heading` (18px 600 `#000`) "Why Lead Generation is Key for
      Business Growth", `.meta` (July. 24, 2019 · Admin · chat icon 3),
      excerpt `p`.
  11. Footer `footer.ftco-footer.ftco-section` — `rgba(0,0,0,0.02)`,
      `padding: 7em 0`; col 1: brand "Uptown" + blurb + `ul.ftco-footer-
social` (twitter/facebook/instagram 50px circles); "Community"
      (Search Properties · For Agents · Reviews · FAQs); "About Us" (Our
      Story · Meet the team · Careers); "Company" (About Us · Press ·
      Contact · Careers); "Have a Questions?" (203 Fake St. Mountain View,
      San Francisco, California, USA · +2 392 3929 210 ·
      info@yourdomain.com). Copyright: ColorLib credit → Component Dock
      link (mandatory).
- **Note:** inner pages exist in the original (about / agent / services /
  properties / blog / blog-single / contact) — NOT required; single index
  page only. Nav links become scroll anchors or dead anchors `#`. Hero is
  static (no slider). Logo is an image asset in the source — recreate as
  styled text. Google Fonts Nunito Sans via `<link>`. Icons from
  `lucide-react` (never the copied flaticon/icomoon fonts).

## Implementation tasks (for the implementer stream)

1. `git fetch origin`; confirm `openspec/specs/template-homestead/spec.md`
   exists on main; claim with a `[~]` mark on TEMPLATES.md line 524.
2. Scaffold `apps/homestead` from the simplest existing app (copy pattern,
   rename package to `@free-react-templates/homestead`); register the
   workspace (`npm install` at root so `package-lock.json` updates; verify
   with `grep -c "free-react-templates/homestead" package-lock.json`); keep
   `injectUiSource()` in `vite.config.ts`.
3. TDD: write tests first (Vitest + Testing Library, 100% coverage)
   mirroring the spec's Gherkin scenarios, then implement:
   - `src/components/Navbar.tsx` — transparent over hero, text logo
     "HOMESTEAD" (gold span), dark links (Home active · About · Agent ·
     Services · Properties · Blog · Contact), hover pink, hamburger +
     `aria-expanded` on mobile (black bg).
   - `src/components/Hero.tsx` — 850px street photo + white gradient
     overlay, 60px headline "The Simplest Way to Find Property", pill
     search form (input + circular pink button, submit handler).
   - `src/components/Services.tsx` — 4 icon feature columns (lucide
     PiggyBank / Wallet / FileText / Lock).
   - `src/components/Properties.tsx` — 3 property cards (photo, overlapping
     text block: struck old price + $3,050/mo, bed/bath/sqft row, title,
     location, pink corner arrow).
   - `src/components/HowItWorks.tsx` — photo band + black 50% overlay, 4
     pink-circle numbered steps, white heading variant.
   - `src/components/About.tsx` — "We Put People First." heading + copy +
     photo.
   - `src/components/Counter.tsx` — 4 animated count-up stats (305/1090/
     209/67; tests use fake timers inside `act()`).
   - `src/components/Testimonials.tsx` — quote card(s) + photo + name/role.
   - `src/components/Agents.tsx` — 4 agent photo cards + name + listing
     line.
   - `src/components/Blog.tsx` — 3 entries (image, title, meta, excerpt).
   - `src/components/Footer.tsx` — brand + 3 link columns + contact column
     - social icons + copyright bar with Component Dock link.
   - `src/App.tsx` — compose in order; `src/index.css` — `@theme` tokens
     (brand `#e86ed0`, gold `#f7b71d`, text `#666666`, heading
     `rgba(0,0,0,0.8)`, footer bg `rgba(0,0,0,0.02)`).
4. Images: `https://picsum.photos/seed/homestead-<n>/<w>/<h>` (hero street,
   about photo, 3 property photos, 4 agent portraits, testimonial portrait,
   3 blog photos); SCREEN the hero seed for a street/houses subject before
   pinning (picsum seeds are arbitrary — use the seed-screening method from
   the replication skill); icons from `lucide-react` (search, bed, bath,
   ruler/floor-plan, arrow-right, menu, x, social icons are inline SVG
   brand marks if kept).
5. Verification: `npm run spec:validate`; `scripts/verify-app.sh homestead`
   (typecheck + lint + 100% coverage + build). Never touch shared files
   (package-lock only via `npm install`).
6. PR: branch `feat/template-homestead`, PR to main, description must state
   source (ColorLib "Uptown"), preview URL, design tokens, what differs;
   merge immediately (`gh pr merge --squash --delete-branch`).
7. After merge: pull --rebase; mark TEMPLATES.md line 524 `[x]`, add surge
   URL `https://homestead.free.componentdock.com` + homepage;
   `npm run readme:status`; push.
