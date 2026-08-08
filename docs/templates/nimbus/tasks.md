# Nimbus (ColorLib Cloudnest) — Tasks & Design Notes

> Prep artifact written on `main` by the prep stream so implementers start
> instantly. Implementation ships later on `feat/template-nimbus`.

## Design notes (replication findings)

- **Original:** ColorLib "Cloudnest" — developer-focused cloud platform
  landing template (source: https://colorlib.com/wp/template/cloudnest/).
- **Preview URL:** `https://preview.colorlib.com/theme/cloudnest/` → HTTP 404. Live demo (hosted by the ColorLib preview portal on Cloudflare
  Pages): `https://cloudnest-colorlib.pages.dev/` (HTTP 200). HTML ~59 KB,
  stylesheet `/_astro/Base.CdYQQ8EO.css` ~65 KB parsed for tokens.
  Screenshot `cloudnest-template-1771944017064.jpg` (2400×1892) viewed in
  browser; live demo matches it 1:1.
- **Visual design (from screenshot + demo):** developer-SaaS aesthetic
  (Vercel/Linear/Supabase vibe). Dark navy hero with terminal-window
  graphic (macOS dots, green deploy output). Electric **indigo** brand
  color. Light gray body sections. Bold indigo gradient CTA band. Dark
  footer with faint grid pattern.
- **Structure (1:1, section order):**
  1. Navbar (sticky): "CloudNest" wordmark left; links Products
     (→#services), Pricing, About, Blog, Contact; dark-mode toggle; primary
     pill "Get Started Free" right; mobile hamburger.
  2. Hero (`bg-gradient-to-br from-gray-950 via-primary-950 to-gray-950`):
     badge "Trusted by 10,000+ developers worldwide"; H1 "Deploy at the
     \<word\>" (typewriter cycles Edge/Scale/Cloud; gradient
     `from-primary-400 to-accent-400 bg-clip-text`); sub "The
     developer-first cloud platform for deploying, scaling, and managing
     modern applications. Push your code and let CloudNest handle the
     rest."; CTAs "Start Deploying Free" (primary) + "View Documentation"
     (ghost); right terminal mock (Authenticated as hello@cloudnest.dev →
     Running health checks… → Deployment successful! → URL
     https://myapp.cloudnest.app → Latency: <50ms globally); stats row:
     500K+ Deployments / 40+ Global Regions / 99.99% Uptime SLA / <50ms
     Global Latency (animated counters).
  3. Features (`border-y border-gray-200 bg-gray-50 py-16 lg:py-20
dark:bg-gray-800 dark:bg-gray-900`): eyebrow badge "Products"; H2
     "Everything You Need to Ship"; 6 cards: App Hosting, Managed
     Databases, Edge Functions, Object Storage, Container Registry, Load
     Balancing (icon tile + title + blurb).
  4. Testimonials (`bg-gray-50 py-20 lg:py-28 dark:bg-gray-900`): H2 "Loved
     by Developers" + sub "See what engineering teams around the world say
     about building on CloudNest."; carousel of 6 quotes (Sarah Chen / CTO
     DataStream; Marcus Rodriguez / Lead Engineer Fintech Labs; Aisha Patel
     / VP Engineering NovaTech; +3), round prev/next arrows + dots.
  5. FAQ (`bg-gray-50 py-20 lg:py-28 dark:bg-gray-900`): H2 "Frequently
     Asked Questions"; 5 accordion items (frameworks support, pricing,
     uptime guarantee, migration, security & compliance).
  6. CTA band (`bg-gradient-to-br from-primary-600 to-primary-800 py-20
lg:py-28`): H2 "Ready to Ship Faster?" + "Get Started Free" +
     "Talk to Sales".
  7. Footer (dark): brand blurb; contact (phone (555) 456-7890, email
     hello@cloudnest.dev, 800 NW 6th Ave, Portland, OR 97209); socials
     (GitHub, Twitter, LinkedIn); columns PRODUCTS (Hosting, Databases,
     Edge Functions, Object Storage), DEVELOPERS (Documentation, API
     Reference, CLI, Status), COMPANY (About, Blog, Careers, Contact);
     legal (Privacy Policy, Terms of Service, Style Guide).
  8. Extras: cookie dialog (Decline / Accept All), back-to-top round
     button bottom-right, dark-mode toggle.
- **Design tokens (from demo CSS):**
  - Primary (indigo): 100 #e0e7ff · 200 #c7d2fe · 300 #a5b4fc · 400 #818cf8
    · 500 #6366f1 · **600 #4f46e5** (brand CTA) · 700 #4338ca · 800/900/950
    darker (hero `via-primary-950`, CTA `to-primary-800`).
  - Accent (sky): **accent-400 #38bdf8** (hero gradient word end).
  - Grays: 50 #f9fafb (light bg) · 100 #f3f4f6 · 200 #e5e7eb (borders) ·
    300 #d1d5db (ghost border) · 400 #9ca3af · 500 #6b7280 (muted) · 600
    #4b5563 · 700 #374151 · 800 #1f2937 · 900 #111827 (dark bg) · 950
    #030712 (hero end).
  - Font: **DM Sans** 300–800 (Google Fonts `<link>` in `index.html`).
  - Buttons: primary `rounded-lg bg-primary-600 px-5 py-2.5 text-sm
font-medium text-white` (hover bg-primary-700); ghost `rounded-lg
border border-gray-300 px-5 py-2.5 text-sm font-medium` (dark:
    border-gray-700). Radius rounded-lg (0.5rem); rounded-full for arrows,
    back-to-top, avatar initials.
- **Recreation decisions:** multi-page Astro demo → single-page recreation:
  Pricing/About/Blog/Contact become `#` placeholder links (or anchor to
  #pricing/CTA); Products + "View Documentation" anchor to the features
  section (`#services`); typewriter word → simple state rotator or static
  gradient word; stat counters animate 0→value on in-view; testimonial
  carousel = state-driven slider (prev/next + dots); FAQ = accordion with
  aria-expanded; cookie dialog = dismissible banner; wordmark "Nimbus" +
  lucide Cloud icon; avatars → initial-letter circles or seeded picsum;
  icons from lucide-react (Cloud, ArrowRight, BookOpen, Moon, Sun, Menu, X,
  Phone, Mail, MapPin, Github, Twitter, Linkedin, ChevronDown/Left/Right,
  ArrowUp, Database, Server, Boxes, Container, Scale, Shield); brand
  #4f46e5 in `@theme`; no assets copied.

## Implementation tasks

- [ ] Scaffold `apps/nimbus` from the simplest existing app; rename package
      to `@free-react-templates/nimbus`; run `npm install` at root and
      verify `grep -c "free-react-templates/nimbus" package-lock.json`
- [ ] `src/index.css`: `@theme` with `--color-primary-*` (indigo scale) +
      DM Sans font stack
- [ ] `src/components/Navbar.tsx` — wordmark, 5 links, dark-mode toggle,
      "Get Started Free", mobile menu (aria-expanded)
- [ ] `src/components/Hero.tsx` — badge, H1 + gradient word, sub, 2 CTAs,
      terminal graphic, 4 stats
- [ ] `src/components/Features.tsx` — eyebrow + H2 + 6 icon cards
- [ ] `src/components/Testimonials.tsx` — carousel (prev/next + dots, ≥4
      slides)
- [ ] `src/components/Faq.tsx` — 5-item accordion (aria-expanded)
- [ ] `src/components/CtaBand.tsx` — gradient band + 2 buttons
- [ ] `src/components/Footer.tsx` — brand, contact, socials, 3 columns,
      legal
- [ ] `src/App.tsx` — compose sections; document title "Nimbus — Cloud
      Platform Template"
- [ ] Tests per section mirroring spec scenarios (100% coverage)
- [ ] `scripts/verify-app.sh nimbus` green; PR with source mapping +
      tokens; merge immediately
