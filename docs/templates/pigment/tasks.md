# Pigment (ColorLib "Creativex 3") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-pigment` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Creativex 3" — creative/digital agency template
  (source: https://colorlib.com/wp/template/creativex-3/). Listed in
  TEMPLATES.md (Astro section, line 138; duplicates at lines 1459 under
  Creative and 2907 under Tailwind Css — mark EVERY copy `[x]` when done).
- **Preview URL:** https://preview.colorlib.com/theme/creativex-3/ is a 404.
  The real preview renders through the ColorLib shell
  https://preview.colorlib.com/#creativex-3 → iframe
  **https://creativex-colorlib.pages.dev/** (Astro build on Cloudflare Pages).
  Fetched: `/tmp/creativex3-prep/creativex.html` (58 KB),
  `/_astro/Base.BjbRLE8f.css` (41 KB). Screenshot
  `creativex-template-1770211073725.jpg` (2400×1892, viewed in browser).
  Preview DOM and screenshot agree — minimal light-mode agency page: soft
  grey hero with lavender→peach blurred glow, magenta pill CTAs, gradient
  headline, 4-stat row, awards band, 4 service cards, 3 project cards, 3
  testimonials, contact form, footer.
- **Demo brand in the preview is "Pixel Studio"** → rename to **Pigment**.
- **Visual design:** light default, class-based dark mode (`html.dark` +
  localStorage `theme` key, moon/sun toggle button). White/grey-50 sections
  alternate; fuchsia `#d946ef` is the primary accent everywhere (buttons,
  links, focus rings, gradient icon boxes); orange `#f97316` is the secondary
  accent (glow circle, second gradient stop); the hero headline "Bold Digital"
  uses a `#d946ef → #f97316` background-clip gradient. Fully-rounded pill
  buttons. Project cards are photos with a dark bottom-gradient caption.
- **Fonts:** Inter 400–800 via Google Fonts `<link>` in `index.html`
  (`css2?family=Inter:wght@400;500;600;700;800`). Single font family.
- **Structure (1:1 from the preview DOM):**
  1. Header `header.fixed.left-0.right-0.top-0.z-50` — `bg-white/95
backdrop-blur-sm shadow-sm dark:bg-gray-950/95`; nav `max-w-7xl px-4 py-4
lg:px-8`: brand "Pigment" (32px wordmark, light + dark variants) · links
     Work / Services / About / Contact (`text-sm font-medium`, hover
     `text-primary-500`) · theme toggle (`rounded-lg p-2 text-gray-500
hover:bg-gray-100`, moon/sun) · pill CTA "Start a Project" (`rounded-full
bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white`, hidden on
     mobile) · hamburger (`lg:hidden`) opening a panel with stacked links +
     full-width CTA.
  2. Hero `section.relative.overflow-hidden.bg-gray-50 dark:bg-gray-900` —
     glow layer: `div.absolute.inset-0.opacity-30` → `bg-primary-500
blur-[128px] h-72 w-72` top-left, `bg-accent-500 blur-[128px]` bottom-
     right; content `max-w-4xl mx-auto text-center py-24 lg:py-32`:
     - badge pill `rounded-full border border-primary-200 bg-primary-50 px-4
py-1.5 text-sm font-medium text-primary-700` + pulsing 8px dot
       (`animate-ping bg-primary-400` + solid `bg-primary-500`): "Award-
       Winning Creative Agency".
     - h1 `text-4xl font-bold sm:text-5xl lg:text-6xl tracking-tight` — "We
       Create **Bold Digital** Experiences" (`span.text-gradient` =
       `linear-gradient(to right, #d946ef, #f97316)`, background-clip: text).
     - subtitle `mt-6 max-w-2xl mx-auto text-lg lg:text-xl text-gray-600`.
     - CTAs `mt-10 flex flex-col sm:flex-row gap-4 justify-center`:
       primary pill "View Our Work" + ArrowRight icon (`bg-primary-500 px-8
py-4 text-base font-semibold text-white shadow-lg shadow-primary-500/25
hover:bg-primary-600`); secondary pill "Start a Project" (`border-2
border-gray-300 bg-white text-gray-700 hover:border-gray-400
hover:bg-gray-50`).
     - stats `mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t
border-gray-200 pt-12`: 150+ Projects Delivered · 50+ Happy Clients ·
       12 Team Members · 8 Years Experience (number `text-3xl lg:text-4xl
font-bold text-gray-900`, label `mt-1 text-sm text-gray-600`).
     - scroll cue `absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col
items-center gap-3 text-gray-400 hover:text-primary-500` — "SCROLL" +
       mouse icon, href="#services".
  3. Awards band `section.border-y border-gray-200 bg-white py-8 dark:border-
gray-800 dark:bg-gray-950` — `flex flex-wrap justify-center gap-8
lg:gap-16`: Awwwards Site of the Day 2024 · CSS Design Awards 2024 · FWA
     of the Month 2023 · Webby Awards Honoree 2023 (name `text-sm font-semibold
text-gray-900`, year `text-xs text-gray-500`, centered).
  4. Services `section.bg-white py-20 lg:py-28 dark:bg-gray-950` — centered
     h2 "What We Do" (`text-3xl sm:text-4xl lg:text-5xl font-bold
tracking-tight`) + intro "We offer a full range of creative services…";
     `mt-12 grid gap-12 lg:grid-cols-4` cards: white `rounded-2xl border
border-gray-200 p-6 hover:border-primary-500`; icon box `mb-6 inline-flex
rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 p-3
text-white shadow-lg shadow-primary-500/25`; h3 `text-xl font-bold`; blurb
     `mt-3 text-gray-600`; `mt-6 space-y-2` feature rows (Check icon 16px
     `text-primary-500`); "Learn More" link (`text-sm font-semibold
text-primary-500` + arrow). Services: Web Design (Custom Design /
     Responsive Development / CMS Integration / SEO Optimization), Mobile Apps
     (iOS & Android / React Native / UI/UX Design / App Store Launch), Brand
     Identity (Logo Design / Brand Guidelines / Visual Identity / Brand
     Strategy), Digital Marketing (Social Media / Content Strategy / PPC
     Advertising / Analytics & Reporting).
  5. Work `section.bg-gray-50 py-20 lg:py-28 dark:bg-gray-900` — h2 "Selected
     Work" + intro + "View All Projects" link; `mt-12 grid gap-8 sm:grid-cols-2
lg:grid-cols-3`: card = `a.group.relative.overflow-hidden.rounded-2xl
bg-gray-900` with photo (`object-cover group-hover:scale-110 duration-500`
     transition), bottom caption `absolute bottom-0 left-0 right-0 bg-gradient-
to-t from-gray-900/90 to-transparent p-6` (uppercase category `text-xs`,
     title `mt-2 text-xl font-bold text-white`; hover variant duplicates title
     smaller), corner arrow icon `absolute right-8 top-8 h-12 w-12
text-gray-100`. Projects: Nova Fintech Rebrand (BRANDING) / Mindful
     Wellness App (MOBILE APP) / Urban Eats Platform (WEB DESIGN).
  6. Testimonials `section.bg-gray-50 py-20 lg:py-28 dark:bg-gray-900` — h2
     "What Clients Say" + intro; `mt-16 grid gap-8 lg:grid-cols-3` cards
     (white `rounded-2xl p-6` shadow `0 4px 16px -4px rgba(0,0,0,0.1)`): 5
     stars `flex gap-1 text-yellow-400` (20px Star fill icons), blockquote
     `mt-6 text-gray-700`, author `mt-8 flex items-center gap-4` (48px avatar,
     name `font-semibold text-gray-900`, role `text-sm text-gray-600`).
     David Kim CEO Nova Financial · Lisa Thompson Founder Mindful Inc. ·
     Michael Torres Marketing Director Urban Eats (paraphrase quotes).
  7. Contact `section.bg-white py-20 lg:py-28 dark:bg-gray-950` — h2 "Let's
     Work Together" + blurb ("…we'll get back to you within 24 hours"); `grid
gap-12 lg:grid-cols-2 lg:gap-16`:
     - info column: 4 blocks (icon `rounded-xl bg-gray-100 p-2.5 text-gray-600`
       - heading `font-semibold text-gray-900`): Email Us
         hello@pixelstudio.com (mailto) · Call Us (555) 987-6543 (tel) · Visit Us
         456 Creative Ave, Suite 200, Los Angeles, CA 90028 · Follow Us (4 social
         icon links, hover `bg-primary-50`).
     - form `space-y-6`: Name (required, placeholder "John Doe") · Email
       (required, "john@example.com") · Company (optional) · Service Interested
       In select (Web Design / Mobile Apps / Brand Identity / Digital
       Marketing / Other) · Budget Range select ($5,000 - $10,000 / $10,000 -
       $25,000 / $25,000 - $50,000 / $50,000+) · Project Details textarea
       (required) · submit "Send Message" (`w-full rounded-lg bg-primary-500
px-6 py-4 text-base font-semibold text-white shadow-lg
shadow-primary-500/25 hover:bg-primary-600`). Inputs `rounded-lg border
border-gray-300 bg-white px-4 py-3 focus:border-primary-500 focus:ring-2
focus:ring-primary-500/20`; labels `text-sm font-medium text-gray-700`.
  8. Footer `footer.border-t border-gray-200 bg-gray-50 py-12 dark:border-
gray-800 dark:bg-gray-900` — brand column (logo, tagline, 4 social icon
     buttons `rounded-lg bg-gray-200 p-2.5 text-gray-600 hover:bg-primary-50`)
     - 3 columns with h4 `text-sm font-semibold uppercase tracking-wider`:
       NAVIGATION (Work / Services / About / Contact), SERVICES (Web Design /
       Mobile Apps / Brand Identity / Digital Marketing), CONTACT (email + phone
       links); bottom bar `mt-12 border-t border-gray-200 pt-8 flex flex-col
sm:flex-row justify-between gap-4`: "© 2026 Pigment. All rights
       reserved." + Privacy Policy / Terms of Service links.
- Dark mode: every section has `dark:` variants; toggle = `html.classList.
toggle('dark')` + localStorage `theme` key; default light. Implement the
  toggle (moon/sun lucide icons) — it is a visible part of the design.
- Inner pages (/work, /services, /about, /contact, /work/*, /privacy, /terms)
  are NOT recreated — single-page index.html only; nav links may be dead
  anchors.
- Images to replace with picsum: project photos (nova/wellness/urban eats →
  `https://picsum.photos/seed/pigment-work-1/800/600` etc.), testimonial
  avatars (→ `picsum.photos/seed/pigment-avatar-1/100/100`). Icons from
  lucide-react (ArrowRight, Check, Star, Moon, Sun, Menu, X, Mail, Phone,
  MapPin, Twitter, Instagram, Linkedin; Dribbble → inline SVG).

## Implementation tasks (implementer)

- [ ] Scaffold `apps/pigment` from the simplest existing app; package
      `@free-react-templates/pigment`; `npm install` at root to register the
      workspace in package-lock.json; keep `injectUiSource()` in
      `vite.config.ts`.
- [ ] `src/index.css` `@theme` tokens: `--color-primary-500: #d946ef`,
      `--color-primary-600: #c026d3`, `--color-primary-50: #fae8ff`,
      `--color-primary-200: #f0abfc`, `--color-accent-500: #f97316`,
      `--color-ink: #111827`, `--color-body: #374151`, `--color-muted:
    #6b7280`, `--color-light: #f9fafb`, `--color-dark-page: #030712`,
      `--color-dark-section: #111827`, `--color-line: #e5e7eb`, `--color-line-
    strong: #d1d5db`, `--color-star: #facc15`; Inter 400–800 via Google
      Fonts `<link>`; `.text-gradient` utility (linear-gradient to right
      `#d946ef → #f97316`, background-clip: text).
- [ ] Shared UI: use `Button`/`ButtonLink`/`cn` from `packages/ui`; social
      icons typed with `BrandName` (satisfy knip — see repo memory); rest of
      icons from lucide-react (Dribbble inline SVG).
- [ ] Components (each with colocated 100%-coverage tests): `Navbar` (fixed
      translucent, theme toggle with localStorage, mobile hamburger panel),
      `Hero` (glow circles, badge, gradient h1, 2 CTAs, stats, scroll cue),
      `Awards`, `ServiceCard`/`Services`, `ProjectCard`/`Work`,
      `TestimonialCard`/`Testimonials`, `Contact` (info column + form with
      selects, validation, success state), `Footer` (3 columns + bottom bar).
- [ ] Dark mode: `useEffect` reading localStorage `theme` + toggling `dark`
      class on `<html>`; default light; moon/sun icon swap.
- [ ] Tests mirror the Gherkin scenarios in
      `openspec/specs/template-pigment/spec.md`; keep 100% coverage.
- [ ] `App.tsx` composes sections in order: Navbar → Hero → Awards → Services →
      Work → Testimonials → Contact → Footer; document title "Pigment —
      Creative Agency Template".
- [ ] Self-review (docs/self-review.md) + `scripts/verify-app.sh pigment`
      green; README status regenerated after merge; mark ALL THREE TEMPLATES.md
      copies `[x]` (lines 138, 1459, 2907).
- [ ] Commit `feat: Pigment — creative agency template (ColorLib Creativex 3)`;
      PR + immediate squash merge; surge deploy
      https://free-react-templates-pigment.surge.sh.
