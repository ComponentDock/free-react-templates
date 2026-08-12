# Learnly (ColorLib Academia) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-learnly`.

## Design notes (replication findings)

- **Original:** ColorLib "Academia" — online education / learning website
  template (source: https://colorlib.com/wp/template/academia/). TEMPLATES.md
  has TWO copies of this item (lines 548 in "Bootstrap 5", 1619 in
  "Education" — mark BOTH `[x]` when done). `academica` is a DIFFERENT
  template; the name "academia" is already taken by the Edumark recreation
  (`apps/academia` + `template-academia` spec) — use the NEW name **Learnly**.
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/academia/
  (HTTP 200, ~68.6 KB, title "Academia - Free Bootstrap 5 Template by
  Colorlib"). Stylesheets: `css/style.css` (248 KB) + `css/aos.css` +
  `css/glightbox.min.css` + bootstrap-icons CDN. All icons are
  bootstrap-icons classes (`bi bi-*`); fonts: **Roboto** everywhere.
  jQuery + Bootstrap 5 drive the transparent navbar, AOS reveals, and the
  custom multi-item carousels (courses + testimonials).
- **Live computed styles (browser, authoritative):** brand teal `#1eb2a6`;
  `.btn-custom` bg `#17867d` radius 0; hero `.btn-primary` bg `#1eb2a6`
  radius 4px; hero h1 40px white 600; counters: number 40px 700 white,
  caption `rgba(255,255,255,.9)`, icon white, over `images/bg_3.webp` +
  30% `#111` overlay; top-bar brand WHITE; newsletter `.ftco-intro` bg
  `#188f85`; footer bg `#eeeeee`; bottom bar `#111111`. FOUR pricing plans
  (Basic 49K / Beginner 79K / Premium 109K / Ultimate 149K); NINE course
  cards; NINE testimonials.
- **Screenshot:** `academia-free-template.jpg` (lines 548/1619) — verified
  in a browser (vision, 1200×946): shows an OLDER design variant (teal top
  strip, white navbar with logo, 2-col Learn Anything section with photo).
  The LIVE PREVIEW is the authoritative reference; where they disagree,
  follow the live preview. The screenshot confirms the aesthetic (teal
  brand, white cards, dark headings).
- **Visual design:** clean modern education aesthetic — white page, dark
  headings `rgba(0,0,0,.8)`, brand teal `#1eb2a6` (buttons, links, icons,
  ratings, prices, subheadings), dark teal `#17867d` (Get Certificate),
  deep teal `#188f85` (newsletter band), `#f8f9fa` light sections
  (testimonials, blog), footer `#eeeeee` + `#111111` bottom bar, Roboto
  type, 4px radii, soft card shadows.

## Design tokens (from css/style.css + live computed styles)

| Token      | Value                                                                                                                                                                                                                                                                                                                                                                       | Where                                                                                                                                                                                                                                                                                                                                                                           |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Brand teal | `#1eb2a6`                                                                                                                                                                                                                                                                                                                                                                   | `.btn.btn-primary` bg, links, `.text-primary`, `.bg-primary`, nav active/hover, `.courses .icon` (80px circle), `.course-price`, `.star`, `.services` icons (60px), `.services-2` icons (70px), `.heading-section .subheading`, `.testimony-wrap .icon` (30px) + `.position`, `.block-7 .price .number` (50px), `.btn-white` text, footer logo span, active dot, footer socials |
| Dark teal  | `#17867d`                                                                                                                                                                                                                                                                                                                                                                   | `.btn-custom` "Get Certificate" (radius 0, width 250px, padding 1.5rem, uppercase 13px 700, letter-spacing 2px, skewed `:before` sliver)                                                                                                                                                                                                                                        |
| Deep teal  | `#188f85`                                                                                                                                                                                                                                                                                                                                                                   | `.ftco-intro` newsletter band bg                                                                                                                                                                                                                                                                                                                                                |
| Ink        | `#111111`                                                                                                                                                                                                                                                                                                                                                                   | bottom bar bg; testimonial/blog headings; counter overlay at 30% opacity; hero overlay at 0 (invisible)                                                                                                                                                                                                                                                                         |
| Greys      | `#eeeeee` (footer bg), `#f8f9fa` (testimonial + blog bgs), `#4d4d4d` (footer links), `#ddd` (dots), `#6c757d`/`#666` (muted), `rgba(0,0,0,.8)` (headings)                                                                                                                                                                                                                   | footers, light sections, carousel dots, meta text                                                                                                                                                                                                                                                                                                                               |
| Fonts      | **'Roboto', Arial, sans-serif** (body + headings)                                                                                                                                                                                                                                                                                                                           | section h2 46px w500 lh1.4 (40px mobile); hero h1 40px white w600; counter number 40px w700; blog h3 24px; footer logo 30px; headings lh 1.5 rgba(0,0,0,.8)                                                                                                                                                                                                                     |
| Buttons    | `.btn-primary`: bg `#1eb2a6`, white text, radius **4px**; hover: transparent + teal text; `.btn-outline-primary`: teal outline, hover fills teal; `.btn-white`: white fill + white border + teal text; `.btn-custom`: `#17867d`, radius 0                                                                                                                                   | Get Started Now! / Enroll Now! / Get Started / View Course / Get Certificate                                                                                                                                                                                                                                                                                                    |
| Cards      | `.services-2`: radius 4px, shadow `0 5px 25px -2px rgba(0,0,0,.06)`; `.courses`: white, padding 30px 30px 40px; `.blog-entry`: radius 4px, shadow `0 10px 25px -13px rgba(0,0,0,.1)`, image 300px; `.block-7`: padding 40px 0, shadow `0 24px 48px -13px rgba(0,0,0,.05)`; `.testimony-wrap`: padding 35px 30px 30px, shadow `0 5px 12px -9px rgba(0,0,0,.17)`, avatar 80px | categories, courses, blog, pricing, testimonials                                                                                                                                                                                                                                                                                                                                |
| Icons      | bootstrap-icons (source) → lucide-react: Clock, Phone, ArrowRight, Laptop, Award, Users, GraduationCap, CalendarDays, BookOpen, Star, Cog, PenTool, Network, FileCode, Palette, Megaphone, Music, Monitor, Search, Activity, Quote, User, MessageCircle, Send, MapPin, Mail; brand socials (Facebook, Twitter/X, Instagram, Dribbble) as inline SVG                         | everywhere (lucide removed brand glyphs)                                                                                                                                                                                                                                                                                                                                        |
| Spacing    | `.ftco-section` 8em 0 (6em smaller); `.ftco-section-counter` 6em 0; footer 5em 0 0; bottom bar py-5; top bar 1.2em 0; centered heading blocks (`col-md-7`)                                                                                                                                                                                                                  | vertical rhythm                                                                                                                                                                                                                                                                                                                                                                 |

## Tasks (implementation order)

1. Scaffold `apps/learnly` (copy simplest existing app; package
   `@free-react-templates/learnly`; `vite.config.ts` with
   `injectUiSource()`).
2. `npm install` at repo root (registers workspace in package-lock.json;
   verify `grep -c "free-react-templates/learnly" package-lock.json`).
3. `index.css` `@theme` tokens: `--color-primary: #1eb2a6`,
   `--color-primary-dark: #17867d`, `--color-primary-deep: #188f85`,
   `--color-ink: #111111`, `--color-footer: #eeeeee`,
   `--color-surface: #f8f9fa`, `--font-sans: 'Roboto', sans-serif`. Add
   Roboto Google Fonts `<link>` to `index.html`.
4. `TopBar.tsx` — transparent absolute bar (z-3, padding 1.2em 0): brand
   wordmark "Learnly" + small uppercase tagline "Online Education &
   Learning" (white on hero), hours block (Clock icon, "Monday - Friday" /
   "8:00AM-8:00PM"), Call Us block (Phone icon + number), 4 circular social
   links (Facebook/Twitter/Instagram/Dribbble — inline SVG, 40px circles,
   `bg-white/20`, accessible names). Hide hours/call/socials below `lg`.
5. `Navbar.tsx` — absolute bar below the top bar (`top: 95px`), transparent:
   right-aligned "Get Certificate" button (`#17867d`, radius 0, ~250px,
   uppercase, tracking-wide), hamburger toggle with "Menu" label
   (aria-expanded) + collapsible nav with 7 links (Home active, All
   Courses, About, Team, Pricing, Journal, Contact; white, teal
   active/hover). NOTE: no brand in the navbar (source comments it out).
6. `Hero.tsx` — `min-h-screen` section with fixed bg image (picsum seed
   learnly-hero, 1920×1080-class; screen with the bright sky metric —
   light/blue scene), left text column (`lg:col-span-5`): eyebrow "Welcome
   to Learnly" (uppercase, tracking-[2px], white/70), h1 "Best Online
   Education Expertise" (40px white 600), lorem paragraph, buttons: teal
   "Get Started Now!" (radius 4px) + white "View Course" (white fill, teal
   text), both with ArrowRight icons.
7. `Benefits.tsx` — heading block (teal subheading "Learn Anything" +
   46px dark h2 "Benefits About Online Learning Expertise") + 3 full-width
   rows: 60px teal icon (Laptop / Award / Users) + h2 title ("Online
   Courses" / "Earn A Certificates" / "Learn with Expert") + paragraph.
8. `Counters.tsx` — bg image (picsum learnly-campus, bright) + 30% dark
   overlay; 4 counters (`lg:grid-cols-4`, 2-up mobile): white icon
   (GraduationCap / Users / CalendarDays / BookOpen), 40px bold white
   number (3000/320/1000/587), white/90 caption (Success Stories / Trusted
   Tutors / Schedules / Courses). Static numbers or simple count-up —
   tests must not depend on animation timing.
9. `Courses.tsx` — heading block ("Our Courses" / "Explore Our Popular
   Online Courses") + 9 cards in a 3-col grid (1-col mobile): 80px teal
   circle icon (Cog / PenTool / Network / FileCode / Palette / Megaphone /
   Music + repeats), h2 title, 5 teal Stars + "(5.0)", "by John Smith",
   "50 lectures (190 hrs)" link (Clock icon; last 3 cards: Sarah Lee 35/120,
   Mike Johnson 45/160, David Chen 60/200), teal price "$100 All Course /
   $15 per month", outline-teal "Enroll Now!" button (fills on hover).
10. `Categories.tsx` — heading block ("Courses" / "Browse Our Online
    Courses") + 12 white cards (radius 4px, soft shadow, centered): 70px
    teal icon + h3 title + count ("25 Courses" / "10 Courses" / "15
    Courses"); mark Art & Design active.
11. `Testimonials.tsx` — bg-light section, heading block ("Testimonial" /
    "Our Successful Students") + multi-item carousel (React state, bar dots
    30×3px + prev/next) of 9 white cards: 80px circular avatar (verified
    person picsum IDs 1027/64/823/996, reused), 30px teal Quote icon
    circle, uppercase name (20px 600), teal uppercase role, quote. People:
    Roger Scott, Sarah Johnson, Michael Chen, Emily Davis, James Wilson,
    Lisa Martinez, Robert Taylor, Amanda Foster, Kevin Park (roles in
    spec).
12. `Blog.tsx` — bg-light section, heading block ("Our Blog" / "Recent From
    Blog") + 3 cards (3-col grid): 300px-tall bg image (picsum
    learnly-blog-1..3, aria-label "Read article: …"), uppercase meta line
    (User "Admin" · Calendar "Oct. 15, 2030" · MessageCircle "3 Comments"),
    24px heading ("Build your Dream Software & Engineering Career" — may
    paraphrase per card), excerpt.
13. `Pricing.tsx` — heading block ("Our Pricing" / "Pricing & Packages") +
    4 cards (Basic $49K / Beginner $79K / Premium $109K / Ultimate $149K):
    plan name, 50px teal price, paragraph, outline-teal block "Get
    Started" button.
14. `Newsletter.tsx` — deep teal `#188f85` band, white h2 "Newsletter -
    Stay tune and get the latest update" + paragraph + subscribe form:
    email input (placeholder "Enter email address") + 44px icon submit
    (Send icon, aria-label "Subscribe to newsletter"); zod validation,
    success message, no navigation.
15. `Footer.tsx` — bg `#eeeeee`, padding 5em 0 0; 4 columns: brand (logo
    30px ink + teal tagline, blurb, socials Twitter/Facebook/Instagram),
    Explore (About Us, Services, Courses, Blog, Contact us), Quick Links
    (Contact Us, Pricing, Terms & Conditions, Privacy, Feedbacks), Recent
    Posts (3 entries: meta + "Creativity and Inspiration" heading) +
    "Have a Questions?" (MapPin address, Phone link, Mail link). Bottom
    bar `#111111` py-5: copyright with year + **Component Dock** credit
    linking https://www.componentdock.com/.
16. `App.tsx` — compose TopBar + Navbar + main (Hero, Benefits, Counters,
    Courses, Categories, Testimonials, Blog, Pricing, Newsletter) +
    Footer; document title "Learnly — Online Education Template".
17. Tests: one describe per component, Gherkin-mirroring scenarios from
    spec.md; 100% coverage lines/functions/branches/statements. NOTE:
    desktop + mobile nav can render duplicate links — use `getAllByRole`
    and index.
18. Run `scripts/verify-app.sh learnly` (typecheck + lint + coverage tests
    - build) until green.
19. Update TEMPLATES.md lines 548 AND 1619 `[ ]` → `[x]` (BOTH copies) with
    surge URL + homepage after deploy; `npm run readme:status`; commit
    `feat: Learnly — online education template (ColorLib Academia)`;
    PR → main → merge immediately.

## Fidelity gotchas

- **The screenshot in TEMPLATES.md is an OLD design variant** (teal top
  strip, white navbar, 2-col benefits). The live preview is the NEW design
  and is authoritative: transparent top bar + navbar over the hero, three
  stacked benefit rows, 9-course grid, 12-category grid, carousels. Follow
  the live preview.
- **Brand teal is `#1eb2a6` everywhere** (buttons, icons, links) — NOT
  Bootstrap blue. `.btn-primary` radius is **4px** (computed), `.btn-custom`
  radius 0.
- **The navbar brand is commented out in the source** — the only brand is
  in the top bar (white over the hero photo). Navbar links start with the
  Get Certificate button, not a logo.
- **Top bar content (hours/call/socials) is `display: none` below 992px**
  — hide on mobile, keep the brand.
- **Hero has NO image element** — the photo is the section background
  (100vh, fixed attachment). No HTML overlay in the source; text sits
  directly on the photo (white).
- **Counters sit on a photo with a 30% `#111` overlay** — numbers are 40px
  700 WHITE, captions white/90, icons white (no explicit CSS — verified
  computed).
- **FOUR pricing plans** (Basic/Beginner/Premium/Ultimate 49K–149K) — the
  curl text parse only caught 3; the live DOM has 4.
- **NINE course cards with varying meta** — the first six use John Smith /
  50 lectures (190 hrs); the last three differ (Sarah Lee 35/120, Mike
  Johnson 45/160, David Chen 60/200).
- **Nine testimonials** in a custom multi-item carousel (bar dots 30×3px +
  slide controls) — a11y dots are labeled "Go to slide N".
- **All source icons are bootstrap-icons** — swap to lucide-react; brand
  socials (Facebook/Twitter/Instagram/Dribbble) need inline SVGs (lucide
  removed brand glyphs).
- **Picsum seeds are arbitrary** — hero and counter backgrounds are
  subject-critical (bright, light-blue classroom/campus scenes): screen
  candidates with the bright-sky pixel metric before pinning. Testimonial
  avatars: only ~4 verified person IDs exist (1027, 64, 823, 996) — reuse
  across the 9 slides or paraphrase names; note in the PR.
- **Tel-literal redaction:** never write `tel:+…` literals in source —
  compute hrefs at runtime from a spaced display string or render contact
  info as plain label+value text.
- **TWO TEMPLATES.md copies (548, 1619):** BOTH must be marked `[x]`.
- Blog meta shows "Oct. 15, 2030" in the source — keep the date kind or
  modernize (e.g. current year); note any change in the PR.
