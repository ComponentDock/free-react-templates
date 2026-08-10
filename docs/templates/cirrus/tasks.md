# Cirrus (ColorLib Cloudtemplate) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-cirrus` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Cloudtemplate" — free Bootstrap 4 cloud-computing
  website template (source: https://colorlib.com/wp/template/cloudtemplate/;
  preview title "Cloud Template - Free Bootstrap 4 Template by Colorlib").
  Listed in TEMPLATES.md under Bootstrap (line 361; slug repeats at line
  3051 — one recreation covers both dup rows). New name: **cirrus** (a
  high-altitude cloud — fits the cloud brand; "cloud" itself is unavailable:
  `apps/cloud` + `template-cloud` are the ColorLib "Error 404 V14" page).
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/cloudtemplate/`
  (HTTP 200, ~41KB). CSS: `css/style.css` (~78KB custom theme) + animate,
  owl.carousel, magnific-popup, flaticon, Font Awesome 4.7 (cdnjs). Font:
  **Work Sans** (cf-fonts @font-face in head). Screenshot downloaded
  (`cloudtemplate-free-template.jpg`, actually AVIF); vision service was
  down, so the visual check was done against the LIVE RENDER with computed
  styles per section (values in the spec are getComputedStyle results).
- **Structure (1:1, section order from the DOM):**
  1. Navbar (`nav#ftco-navbar`, `.ftco-navbar-light`): transparent absolute
     `top: 20px` over hero; ≤992px solid `#000`. Brand white left; links
     Home / Company / Pricing / Leadership / Blog / Contact + trailing
     "Get started" CTA (green pill, radius 5px; hover white bg + blue
     text).
  2. Hero (`div.hero-wrap.js-fullheight`): overlay bg `#3f52e3`; 750px
     row — left 60% illustration (`undraw_co-working_825n.svg`), right
     text: subheading brand uppercase (rgba white .8, ls 2px), h1 white
     60px/700 with THREE stacked `span` lines ("Cloud," "Management,"
     "Template"), lorem paragraph, green "Get in touch" button
     (btn-secondary, radius 5px, px-4 py-3). Mobile: image stacks above
     centered text, dark overlay `.3`.
  3. Partners (`ftco-partner`): row of FIVE logo images.
  4. Cloud Services (`services-section.bg-light`): centered navy h2 "Cloud
     Services"; 3-col grid (col-lg-4 col-md-6) of SIX `block-6.services`
     cards — 80px green circle icon (white 44px glyph; hover → white circle
     - green glyph) + navy h3 + slate p. Items: Cloud databases, Website
       Hosting, File Storage, Forex Trading, File Backups, Remote Desktop.
  5. What Our Software Can Do For You (white): split — left illustration
     (`undraw_referral_4ki4.svg`), right FIVE `services.border p-3 mb-3`
     rows: transparent circle icon with pink `#ff8ba7` glyph (`icon-2`) +
     navy h3 + slate p. Items: Responsive Design, Android Apps Development,
     iOS Apps Development, UX/UI Design, Print Ready Design.
  6. Counters (`ftco-counter.img`, bg `#3f52e3`): white h2 "We Always Try
     To Understand Users Expectation" + FOUR counters — 12000 Download,
     100 Awards Won, 4050 Contributors, 9000 Satisfied Customers (white
     40px/700 numbers, labels rgba white .7, count-up on scroll).
  7. Intro strip (`ftco-no-pt ftco-no-pb bg-light`): centered col-lg-10 —
     col-md-8 h3 "Have any question about us?" (600) + paragraph; col-md-4
     pink "Get in Touch" button (btn-tertiary, radius 5px).
  8. FAQ (`ftco-no-pb bg-light ftco-faqs`): row — left `img-faqs` panel
     (700px tall, radius 4px, shadow `17px 25px 56px -22px rgba(0,0,0,.38)`;
     NO image in the source home page — use a picsum placeholder); right:
     subheading "FAQs" + h2 "Frequently Asks Questions" + intro + FOUR pill
     accordions (radius 40px, bg `#3f52e3`, white 600, capitalize, chevron,
     first open): How to Make an Account? / How to manage your Dashboard? /
     How to grow your investments funds? / What are those requirements for
     businesses?
  9. Pricing (bg-light): h2 "Our Best Pricing"; FOUR `block-7` white cards
     (padding 30px; hover shows `#3f52e3` offset sheet 20px below, radius
     4px): plan name (16px/600 slate), price sup $ + 60px/600 navy number
     (0/19/49/99) + /mo, tagline ("100% free. Forever" / "All features are
     included"), uppercase "Enjoy All The Features", slate feature list
     (Bandwidth / Storage / Overages / All features), full-width pink
     "Choose Plan".
  10. Testimonials (`testimony-section`): h2 "What Users Saying"; owl
      carousel of FIVE cards — circular avatar 150px (80px mobile) with
      40px green quote bubble (white quote icon, bottom-right), quote,
      name 18px/700, role slate. Source repeats "Mark Web" everywhere →
      distinct names in recreation.
  11. Recent Blog (bg-light): h2 "Recent Blog"; THREE cards — 275px cover
      photo (`block-20`), meta (May 17, 2020 | Admin | 💬), title h3.
      Source repeats the same title ×3 → distinct titles.
  12. Footer (`ftco-bg-dark`, bg `#421b9b`): FOUR columns — brand "Cirrus"
      - about + social icons; "Useful Links" (source typo "Unseful Links";
        Company, Pricing, Leadership, Blog, Contact); "Navigational" (Join
        Us, Blog, Privacy & Policy, Terms & Condition); "Office" (203 Fake
        St. Mountain View, San Francisco, California, USA; +2 392 3929 210;
        info@yourdomain.com — icon + text rows); copyright bar paraphrased,
        no Colorlib credit.
- **Tokens (from style.css + computed render):** Work Sans everywhere;
  blue `#3f52e3` (hero overlay, counter bg, FAQ pills, pricing hover);
  green `#21bf73` (hero button, nav CTA, service icons, quote bubbles;
  hover `#1da966`); pink `#ff8ba7` (tertiary buttons, software icons);
  footer purple `#421b9b`; navy `#203d67` (section h2 40px/700, card h3,
  price numbers 60px/600); slate `#72789a` (body, plan names); panels
  `#fafafa` (bg-light); buttons radius **5px**, px-4 py-3, 16px/600;
  FAQ pills radius **40px**; service icons 80px circles; counter numbers
  40px/700; hero h1 60px/700 stacked spans; footer text rgba white .7.
- **Caveats to fix in recreation:** source typos — "Resposive" →
  "Responsive", "Andriod" → "Android", "iOs" → "iOS", "Unseful Links" →
  "Useful Links", "Everthing" → "Everything". Testimonial name repeats
  "Mark Web" ×5, blog titles repeat ×3, every card body uses the same
  lorem — write DISTINCT content of the same kinds. All `href="#"` → real
  placeholder hrefs. The "Search Your Domain Name" section (`ftco-domain`)
  is COMMENTED OUT in the source — do NOT include it. Copyright →
  paraphrase, drop Colorlib credit.

## Tasks (implementation order)

1. Scaffold `apps/cirrus` from the simplest existing app (copy app, rename
   package to `@free-react-templates/cirrus`); `bun install` at root to
   register the workspace in the lockfile; verify
   `grep -c "free-react-templates/cirrus" package-lock.json`.
2. `index.html`: title "Cirrus — Cloud & Hosting Company", Work Sans Google
   Fonts `<link>` (300–700).
3. `src/index.css` `@theme` tokens (see Verification checklist in spec):
   brand `#3f52e3`, green `#21bf73`, pink `#ff8ba7`, footer `#421b9b`,
   heading `#203d67`, muted `#72789a`, panel `#fafafa`; `--font-sans: Work
Sans`; shared button treatment (radius 5px, green + pink variants), pill
   utility (radius 40px) for FAQ toggles, 80px circular icon treatment.
4. Components with colocated tests (TDD, 100% coverage):
   - `Navbar` — transparent over hero (solid black ≤992px), brand, links,
     green "Get started" CTA, mobile hamburger w/ aria-expanded.
   - `Hero` — blue overlay, illustration + 3-line stacked headline,
     paragraph, green "Get in touch" button; stacks on mobile.
   - `Partners` — row of five logo placeholders.
   - `Services` — "Cloud Services" heading + 6 cards (green circles, hover
     swap).
   - `Capabilities` — split layout, 5 pink-icon bordered rows.
   - `Stats` — 4 counters with count-up animation on scroll into view.
   - `IntroStrip` — h3 + paragraph + pink "Get in Touch".
   - `FaqSection` — image panel + 4 pill accordions (first open, chevron
     flip, aria-expanded).
   - `Pricing` — 4 plan cards (navy prices, hover back-sheet, pink Choose
     Plan).
   - `Testimonials` — carousel of 5 cards (prev/next/dots).
   - `Blog` — 3 cards (distinct titles).
   - `Footer` — 4 columns + copyright (no Colorlib credit).
5. `App.tsx`: Navbar → Hero → Partners → Services → Capabilities → Stats →
   IntroStrip → FaqSection → Pricing → Testimonials → Blog → Footer.
6. Images: `https://picsum.photos/seed/cirrus-<n>/<w>/<h>` only (hero
   700×750, partners 150×50, capabilities 600×600, FAQ panel 600×700,
   avatars 150×150, blog covers 600×275); social icons as inline SVG
   (lucide-react dropped brand icons).
7. Verify: `npm run verify:app cirrus` (typecheck + lint + vitest 100% +
   build). PR: branch `feat/template-cirrus`, conventional commits, merge
   immediately with `gh pr merge --squash --delete-branch`.
8. PR description must include: source (Cloudtemplate), preview URL
   (`https://preview.colorlib.com/theme/cloudtemplate/`), design tokens,
   renames, placeholder images, fixed source typos, dup-row note (line 3051
   covered by the same recreation).
