# Movere (ColorLib SwiftMove) — Tasks & Design Notes

> Recreation of ColorLib "SwiftMove"
> (https://colorlib.com/wp/template/swiftmove/) under the NEW name **Movere**
> (Latin for "to move", single lowercase word), per the monorepo naming
> mandate (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "SwiftMove" — moving & relocation company landing
  template (Astro + Tailwind CSS + Transportation categories, April 2026,
  CC BY 3.0, Aigars Silkalns). Demo's internal brand is "SwiftMove"; the
  recreation brands itself **Movere**.
- **Demo DOM analyzed (verified 2026-08-09):**
  `https://swiftmove-colorlib.pages.dev/` (HTTP 200, ~97 KB HTML +
  `/_astro/Base.Ce97irTr.css` ~65 KB parsed for tokens; the official
  `https://preview.colorlib.com/theme/swiftmove/` returns 404 — demo hosted
  on Cloudflare Pages, same pattern as Workhub→Deskly / Serenite→Sooth /
  Saasify→Zenith, confirmed via the Colorlib template page's LIVE PREVIEW
  link (resolves to `preview.colorlib.com/#swiftmove`, iframe src
  `swiftmove-colorlib.pages.dev`)). The TEMPLATES.md screenshot
  (`swiftmove-template-1771943964825.jpg`, HTTP 200, viewed in browser)
  matches the live demo.
- **Visual design (screenshot + live render):** clean, modern, corporate
  yet approachable moving-company landing. White hero with soft blue
  gradient (from-primary-50 to white); **blue primary (#2563eb)** +
  **orange accent (#f97316)** two-tone system; headline second line in a
  blue→orange text gradient with typewriter rotation ("Fast & Reliable" /
  "Safe & Secure" / "Smooth & Easy"); pill badge with check icon; stats row
  (25,000+ / 98% / 15+ / Same-Day); right side moving-crew photo with
  floating "Fully Insured" badge; light alternating sections (gray-50 /
  white); gradient blue CTA band; dark gray-900 footer. Full dark mode
  (`.dark` variants, toggle in navbar).
- **Structure (1:1, section order, verified live):**
  1. Sticky navbar (white/80 blur, border-b, h-16 lg:h-20): "SwiftMove"
     logo + links About, Services, How It Works, Areas, Pricing,
     Testimonials, Quote, Blog, Contact + dark-mode toggle + "Free Quote"
     (orange); mobile hamburger.
  2. Hero (from-primary-50 to-white): pill badge "Licensed & Insured in
     All 50 States", H1 "Moving Made" + typewriter gradient span, blurb,
     CTAs "Get Free Quote" (blue solid) + "Call (555) 890-1234" (white
     outline, phone icon); stats row; moving-crew photo + "Fully Insured
     / All belongings protected" badge; blurred decorative circles.
  3. About band (border-y border-gray-200 bg-gray-50): 4 count-up counters
     (Successful Moves, On-Time Rate, Trucks & Vehicles, Years Experience).
  4. Services (bg-gray-50): "Moving Solutions for Every Need" — 6 cards:
     Local Moving, Long Distance, Commercial Moving, Packing Services,
     Storage Solutions, Specialty Items.
  5. How It Works (bg-white): "Your Move in 4 Easy Steps" — 01 Request a
     Quote, 02 Schedule Your Move, 03 We Handle Everything, 04 Welcome
     Home.
  6. Service Areas (bg-gray-50): "We Move You Anywhere" — Local Moves
     (Chicago Metro, Milwaukee, Indianapolis, Detroit, St. Louis,
     Minneapolis + ~hr drive) | Long Distance (Chicago→NY ~790 mi, →LA
     ~2,015 mi, →Dallas ~920 mi, →Denver ~1,000 mi, →Atlanta ~720 mi,
     →Miami ~1,380 mi).
  7. Pricing (bg-white): "Transparent, Honest Pricing" — Studio/1BR from
     $299, 2-3 Bedrooms from $599 (Most Popular, ring-2 ring-primary-600),
     4+ Bedrooms from $999; "Get Exact Quote" each; disclaimer under.
  8. Testimonials (bg-gray-50): "Trusted by Thousands of Families" —
     carousel, 6 slides (Jennifer Martinez, Robert Chen, Amanda Foster,
     Brian & Kelly Adams, Patricia Nguyen, David Hoffman), arrows + dots.
  9. Quote form (bg-white): "Get Your Free Moving Quote" — Full Name*,
     Email*, Phone, Move Date, Moving From*, Moving To*, Home Size select,
     checkboxes (Packing & Unpacking, Storage, Piano/Specialty Items),
     Additional Details, submit; sidebar: "Why Choose SwiftMove?",
     "Prefer to Call?" (555) 890-1234, Business Hours.
  10. FAQ (bg-white): "Frequently Asked Questions" — 5 accordion items
      (insurance, booking lead, packing, specialty items, storage).
  11. CTA (from-primary-600 to-primary-800): "Ready to Make Your Move?" +
      "Get Free Quote" / "Call Now".
  12. Footer (bg-gray-900 text-gray-300): brand blurb + phone/email/
      address + socials + SERVICES / COMPANY / SUPPORT columns + legal row
      (Privacy Policy, Terms of Service, Style Guide).
- **Design tokens extracted from the live CSS + DOM (verified 2026-08-09):**
  - Brand colors — **primary (blue) scale**: #eff6ff (50), #dbeafe (100),
    #bfdbfe (200), #60a5fa (400), #3b82f6 (500), **#2563eb (600 primary)**,
    #1d4ed8 (700), #1e40af (800), #1e3a8a (900). Hero gradient
    from-primary-50 to white; CTA from-primary-600 to-primary-800.
  - Brand colors — **accent (orange) scale**: #fff7ed (50), #ffedd5 (100),
    #fed7aa (200), **#f97316 (500)**, #ea580c (600), #c2410c (700),
    #7c2d12 (900). Navbar "Free Quote" CTA, headline gradient end,
    decorative circles.
  - Headline gradient `.text-gradient`: linear-gradient(to right in
    oklab, #2563eb → #f97316), background-clip:text.
  - Neutrals: gray scale — #f9fafb (50) … #111827 (900 body text),
    #030712 (950 dark bg).
  - Font: **"Outfit"** (`Outfit, system-ui, sans-serif`, weights 300–800)
    via Google Fonts.
  - Buttons: rounded-lg, px-5 py-2.5, text-sm font-medium, inline-flex,
    gap-2. Primary = bg #2563eb, white, soft shadow tinted #2563eb40.
    Secondary = white, 1px #d1d5db border, #374151 text. Navbar CTA +
    accent actions in orange (#f97316).
  - Shapes: rounded-lg buttons, rounded-xl/2xl cards, rounded-full pills;
    featured pricing card ring-2 ring-primary-600 + shadow-soft; sections
    alternate bg-gray-50/white, py-20 lg:py-28; container mx-auto px-4
    lg:px-8.
  - Dark mode: `.dark` on root, dark:bg-gray-900/gray-950 sections,
    dark:text-white headings; toggle persisted (window.localStorage +
    Storage polyfill).
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/movere-<n>/<w>/<h>`); lucide-react icons (Phone,
  Check, CheckCircle2, Truck, MapPin, Package, Warehouse, Piano, Shield,
  Star, ChevronDown, ChevronLeft, ChevronRight, Clock, Mail, ArrowRight,
  Menu, X, Quote); Outfit via Google Fonts; repo-standard Navbar (dark-mode
  toggle) + Footer chrome.
- Rename demo brand "SwiftMove" → "Movere" everywhere (logo wordmark,
  "Why Choose Movere?", "Get Your Free Moving Quote"); headings keep
  same-kind copy, may be paraphrased.
- Optional animated extras: typewriter headline, count-up counters,
  scroll-reveal, scroll-progress bar, preloader. Implement typewriter +
  count-up if cheap; static equivalents acceptable. Keep FAQ accordion +
  testimonial carousel functional.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn) — apps MUST
  import these from `packages/ui` or knip/CI deploy fails.

## Tasks

- [ ] Implementer: copy the simplest existing app → `apps/movere`
      (package `@free-react-templates/movere`), wire the Tailwind v4
      theme tokens per the spec.
- [ ] Implementer: write tests (red) per spec scenarios, then
      implementation (green) — 100% coverage (vitest + Testing Library).
- [ ] Sections in order: navbar, hero (badge + typewriter headline +
      stats + photo), about band (counters), services, how-it-works,
      areas, pricing, testimonials (carousel), quote form, FAQ, CTA,
      footer.
- [ ] Hero: from-primary-50 to-white gradient, pill badge, headline with
      blue→orange gradient span, two CTAs (blue solid / white outline),
      stats row, moving-crew photo (picsum seed) + "Fully Insured" badge.
- [ ] Services: 6 icon cards. How It Works: 4 numbered steps. Areas:
      local city list + long-distance route list. Pricing: 3 tiers +
      "Most Popular" highlight.
- [ ] Testimonials: 6-slide carousel with arrows + dots. Quote form:
      required fields + select + checkboxes + submit. FAQ: 5 accordion
      items (expand on activation). CTA: primary-600→800 gradient band,
      2 buttons.
- [ ] Footer: 3 link columns + contact + legal row + copyright;
      landmarks banner/main/contentinfo; document title "Movere —
      Moving Company Template".
- [ ] `scripts/verify-app.sh movere` until green (typecheck + lint +
      vitest 100% + build).
- [ ] Implementer: mark `[~]` → `[x]` in TEMPLATES.md + surge URL,
      `npm run readme:status`, PR + immediate squash merge.
