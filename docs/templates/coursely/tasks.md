# Coursely (ColorLib Learnhub) — Tasks & Design Notes

> Recreation of ColorLib "Learnhub"
> (https://colorlib.com/wp/template/learnhub/) under the NEW name
> **Coursely** (courses + learning), per the monorepo naming mandate
> (never reuse the ColorLib source name). A stale prep at
> `openspec/specs/template-learnhub/` (FORBIDDEN source name) was deleted
> and replaced by this fresh prep.

## Design notes (replication findings)

- **Original:** ColorLib "Learnhub" — e-learning / online courses platform
  template (category: Learning per the ColorLib preview portal). The live
  demo brand is "Learnify — Learn Without Limits".
- **Demo DOM analyzed:** https://learnhub-colorlib.pages.dev/ (HTTP 200,
  ~88 KB HTML + `/_astro/Base.DLlC-awY.css` ~57 KB parsed for tokens; the
  official `https://preview.colorlib.com/theme/learnhub/` returns HTTP 404
  — demo hosted on Cloudflare Pages per the ColorLib preview portal).
- **Visual design (screenshot `learnhub-template-1770211181840.jpg`):**
  the ORIGINAL design — dark navy/indigo gradient hero with a subtle
  perspective grid overlay, "Learn Without Limits" in white with
  "Learnify" in bright teal accent, white pill "Explore Courses" CTA +
  outlined pill "View Pricing", trust badges (4.8 rating / 30-day
  guarantee / Lifetime access), stats row (50K+ Active Students, 500+
  Expert Instructors, 2,500+ Quality Courses, 95% Success Rate), white
  navbar with blue-square logo + centered links (Courses, Categories,
  Instructors, Pricing, About) + search/bell/profile icons + "Get
  Started" indigo pill. The live Astro demo re-skins this (light
  indigo-on-white, dark-mode toggle, "Sign In"/"Get Started" → "Get
  Started" only) — use the live demo DOM as the authoritative
  structure/token reference; keep the pill-button + indigo-brand spirit
  from the screenshot.
- **Structure (1:1, section order):**
  1. Navbar: Coursely logo (GraduationCap icon), Courses, Categories,
     Instructors, Pricing, About links, dark toggle, "Get Started" CTA;
     mobile hamburger ("Open menu") + slide-down panel.
  2. Hero (gradient from-primary-50 → white): pill badge "Trusted by
     50,000+ learners worldwide", H1 "Learn Without Limits", subcopy
     ("Master new skills with world-class instructors. Access thousands
     of courses in technology, business, design, and more."), buttons
     "Explore Courses" (primary) + "View Pricing" (outline), trust badges
     (4.8 average rating / 30-day money-back guarantee / Lifetime
     access), stats row (50K+ / 500+ / 2,500+ / 95%), "Browse Categories"
     pill link.
  3. Top Categories (bg-white): eyebrow "Explore Our Top Categories", H2
     "Browse by category", 8 cards (icon tile + title + course count +
     arrow): Web Development (156 courses), Data Science, UI/UX Design
     (124 courses), Business, Digital Marketing, Mobile Development,
     Cloud & DevOps, Photography.
  4. Most Popular Courses (bg-gray-50): eyebrow "Most Popular Courses",
     H2 "Courses for every skill level", 4 course cards: The Complete Web
     Development Bootcamp 2032 (BESTSELLER), Machine Learning A-Z: AI,
     Python & R (55% OFF), UI/UX Design: The Complete Guide, AWS
     Certified Solutions Architect 2032. Card anatomy: thumbnail, badge,
     category pill, title, star rating + reviews, hours + lessons meta,
     instructor avatar + name, price + strikethrough.
  5. Why Learnify (bg-white): H2 "The Best Platform to Learn New
     Skills", 4 cards: Learn at Your Pace, Expert Instructors, Hands-on
     Projects, Certificates.
  6. Instructors (bg-gray-50): H2 "Learn From the Best", 4 avatar cards:
     Sarah Johnson — Senior Engineer at Google, Michael Chen — ML
     Engineer at Netflix, Emily Rodriguez — Product Designer at Airbnb,
     David Kim — Cloud Architect at AWS.
  7. Testimonials (bg-white): H2 "What Our Students Say", 3 quote cards:
     Alex Thompson — Software Engineer at Stripe, Data Scientist at Meta,
     Product Designer at Figma.
  8. Pricing (bg-gray-50): H2 "Choose Your Learning Path", billing toggle
     (monthly/yearly, "Save 20%"), 3 tiers:
     - Free $0 — "Get started with free courses": Access to 50+ free
       courses, Basic course completion certificates, Community forum
       access, Mobile app access.
     - Pro $29/mo (yearly $232, "Save $58/year") — "Perfect for serious
       learners": Unlimited access to all courses, Verified certificates,
       Offline downloads, Priority support, Advanced progress tracking.
       Highlighted card ("Most Popular", primary border).
     - Team $49/mo (yearly $392, "Save $118/year") — "For teams and
       organizations": Everything in Pro, Team management dashboard,
       Custom learning paths, Analytics & reporting, Dedicated support.
  9. CTA band (gradient from-primary-600 to-primary-800): H2 "Ready to
     Start Learning?", "Browse Courses" button, note "No credit card
     required. 7-day free Pro trial. Cancel anytime."
  10. Footer (bg-gray-900, text-gray-300): brand blurb, Categories /
      Company / Support link columns, copyright, cookie notice.

## Design tokens (from Base CSS)

- Brand: `#6366f1` (indigo-500, aliased `primary`), scale `#eef2ff`
  `#e0e7ff` `#c7d2fe` `#a5b4fc` `#818cf8` `#6366f1` `#4f46e5` `#4338ca`
  `#312e81` `#1e1b4b`
- Accents: emerald `#10b981` (ratings/success), amber `#fbbf24`
  (stars/badges), red `#82181a` (BESTSELLER), `#8b0836` (55% OFF)
- Neutrals: white / gray scale / `#101828`; gray-50 section bands
- Font: **Plus Jakarta Sans** (display 500–800) + **Inter** (body
  400–700), Google Fonts
- Buttons: `rounded-full` pills — primary `bg-primary-600 text-white` /
  outline `border-2 border-gray-300`; eyebrow pills `rounded-full
bg-primary-100 text-primary-700`; badge pills `rounded-full bg-red-500
text-white` (BESTSELLER) / `bg-amber-500` (badge-pulse)
- Cards: `rounded-2xl` `bg-white border border-gray-200 p-6` (categories,
  why-us), `rounded-2xl` course cards with `hover:shadow-xl`, `rounded-3xl
p-8` pricing cards
- Sections: hero gradient `from-primary-50 to-white`, alternating gray-50 /
  white, CTA gradient `from-primary-600 to-primary-800`, footer gray-900
- Dark mode: class-based, toggle + `.dark` on root, persist via
  `window.localStorage` (in-memory Storage polyfill in test setup —
  Keyhaven pattern)

## Implementation tasks (implementer)

- [ ] Scaffold `apps/coursely` (copy simplest existing app; package
      `@free-react-templates/coursely`; `npm install` at root so the
      lockfile registers the workspace; keep `injectUiSource()` in
      vite.config.ts)
- [ ] Spec-first: spec already in `openspec/specs/template-coursely/` —
      write tests (red) before components (green), 100% coverage
- [ ] Navbar: logo + 5 links + dark toggle + "Get Started" CTA + mobile
      menu
- [ ] Hero: badge, H1, subcopy, 2 CTAs, trust badges, stats row
- [ ] Categories grid (8 cards, lucide icons + course counts)
- [ ] Courses grid (4 cards: thumbnail `picsum.photos/seed/coursely-2/..`,
      badges, rating, meta, price)
- [ ] Why-us section (4 cards)
- [ ] Instructors grid (4 avatar cards)
- [ ] Testimonials (3 quote cards)
- [ ] Pricing with billing toggle (monthly/yearly price swap, "Save 20%")
- [ ] CTA gradient band
- [ ] Footer (3 columns + copyright + cookie notice)
- [ ] `scripts/verify-app.sh coursely` green; commit `feat:`; open PR +
      merge immediately; `[~]` → `[x]` + surge URL; `npm run readme:status`
