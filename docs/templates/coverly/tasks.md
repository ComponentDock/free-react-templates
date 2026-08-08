# Coverly (ColorLib Shieldguard) — Tasks & Design Notes

> Recreation of ColorLib "Shieldguard"
> (https://colorlib.com/wp/template/shieldguard/) under the NEW name
> **Coverly** (coverage, made personal), per the monorepo naming mandate
> (never reuse the ColorLib source name). Replaces the stale
> `template-shieldguard` prep (forbidden source name), same as
> Pipelineiq→Dealflow.

## Design notes (replication findings)

- **Original:** ColorLib "Shieldguard" — insurance company landing Astro
  template.
- **Demo DOM analyzed:** https://shieldguard-colorlib.pages.dev/ (HTTP 200,
  ~79 KB HTML + `/_astro/Base.BZ-9KC9t.css` ~63 KB parsed for tokens; the
  official `https://preview.colorlib.com/theme/shieldguard/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal, same
  pattern as Dealflow/Freightly).
- **Visual design (screenshot `shieldguard-template-1771943902281.jpg`):**
  clean, airy insurance landing — white-to-ice-blue gradient hero (subtle,
  not heavy), corporate blue (#2563eb) primary CTAs and stats, vibrant green
  (#16a34a) accent for the headline highlight word and trust badges, rounded
  rectangle buttons, dark navy footer. No photography anywhere — the design
  is typography + icons/badges. Screenshot headline reads "Protection You
  Can Depend On"; live DOM H1 is "Protection You Can Count On" with a
  typewriter gradient tail cycling Depend On / Trust In / Rely On — use the
  DOM copy + typewriter.
- **Structure (1:1, section order):**
  1. Navbar (sticky, white/80 blur): "ShieldGuard" shield logo, links About,
     Coverage, Why Us, Process, Testimonials, Pricing, Blog, Services,
     Contact, "Get a Quote" pill CTA, dark-mode toggle, mobile hamburger
     drawer.
  2. Hero (centered, `bg-gradient-to-b from-primary-50 to-white`): pill badge
     "Trusted by 50,000+ Families", H1 "Protection You Can Count On"
     (gradient typewriter tail), blurb, "Get Free Quote" (primary,
     rounded-lg, shadow-primary-600/25) + "Call (555) 567-8901" (white
     bordered) buttons, stats row (50,000+ Clients Protected / 98% Claim
     Approval / A+ AM Best Rating / 24/7 Support Available), 3 green trust
     badges (BBB Accredited / AM Best Rated / Licensed in 50 States).
  3. Stats band (`border-y border-gray-200 bg-gray-50`): 4 JS-animated
     counters — Claims Paid, Active Policies, Claims Approval, Years Trusted.
  4. Coverage (bg-gray-50): kicker pill "Coverage Options", h2 "Insurance
     for Every Need", 6 cards (Auto, Home, Life, Health, Business, Umbrella)
     with icons + blurb + "Learn More".
  5. Why Us (white): kicker "Why ShieldGuard", h2 "The Smart Choice for
     Coverage", 4 cards (Save Up to 35%, Claims in 24 Hours, Personal
     Advisors, Digital First).
  6. Process (bg-gray-50): kicker "How It Works", h2 "Getting Covered is
     Easy", 3 numbered steps (01 Get a Quote / 02 Choose Your Plan / 03
     You're Covered).
  7. Calculator (white): kicker "Savings" — GREEN pill (accent-100, unlike
     the blue kickers), h2 "See How Much You Could Save", form (Coverage
     Type select, Current Monthly Premium ($), Age Range radios 18-25/26-35/
     36-50/51-65/65+, "Calculate Savings" button) → reveals "Estimated
     Annual Savings / Up to $540/year" + disclaimer.
  8. Testimonials (bg-gray-50): kicker "Testimonials", h2 "What Our Clients
     Say", 6 quote cards (initial avatar, quote, name + role: Jennifer
     Martinez — Homeowner Austin TX, David Thompson — Auto Insurance Client,
     Patricia Chen — CEO Bright Ideas LLC, Tom & Lisa Park — Homeowner, +2),
     round prev/next carousel buttons.
  9. FAQ (white): kicker "FAQ", h2 "Common Questions", 6 accordion items
     (coverage types, filing a claim, bundling, cancellation, premiums, new
     drivers/first-time homebuyers).
  10. Contact (bg-gray-50): kicker "Get Started", h2 "Request Your Free
      Quote", quote form (Full Name, Email, Phone, Coverage Type select incl.
      Umbrella/Other, Message, "Request Free Quote" GREEN accent submit) +
      Contact Info card (Phone (555) 567-8901, Email info@shieldguard.com,
      Office Hours Mon-Fri 8am-6pm / Sat 9am-1pm) + "Licensed in All 50
      States".
  11. Footer (bg-gray-900): brand blurb, columns Coverage / Resources /
      Company / Contact Us, © 2026 ShieldGuard, Privacy Policy / Terms of
      Service / Style Guide links.
- **Design tokens (from Base.BZ-9KC9t.css + DOM):**
  - Brand primary (blue): #2563eb (600), #1d4ed8 (700 hover), #1e3a8a (800),
    #3b82f6 (500), #60a5fa (400 dark), #dbeafe (100 kicker pills), #eff6ff
    (50 hero gradient).
  - Accent (green): #16a34a (600 submit), #15803d (700), #dcfce7 (100 pills),
    #14532d (900/50 dark pills).
  - Neutrals: gray scale #f9fafb → #030712 (footer #111827).
  - Font: Manrope (Google Fonts).
  - Shapes: CTAs `rounded-lg` (NOT pill) + `shadow-lg shadow-primary-600/25`
    hover:bg-primary-700; nav CTA pill; cards rounded-2xl; kickers
    `rounded-full bg-primary-100 px-3 py-1 text-sm font-medium`; carousel
    nav/avatars/toggles rounded-full; inputs rounded-lg.
  - Rhythm: alternate white / bg-gray-50, `py-20 lg:py-28`; full dark:
    variants (dark:bg-gray-900 sections, dark:bg-gray-950 hero, dark:border-gray-800).
- **Recreation decisions:** keep the no-photography icon/badge aesthetic
  (picsum seeds only if a visual is needed: `picsum.photos/seed/coverly-<n>`);
  lucide-react icons (Shield, Car, Home, HeartPulse, Briefcase, Umbrella,
  Phone, Mail, Clock, Star, ChevronDown, Calculator, CheckCircle, Menu, Sun,
  Moon, Quote); Manrope via Google Fonts `<link>`; shared packages/ui chrome
  (Navbar w/ dark toggle, Footer, Button, ButtonLink, Badge, Card, cn);
  FAQ accordion with state (or `<details>`); calculator reveal on button
  press (client-side estimate text, e.g. "Up to $540/year"); stats band
  counters animate on scroll into view (IntersectionObserver). No new
  dependencies.

## Tasks (implementation order)

- [ ] Scaffold `apps/coverly` (copy simplest existing app; package
      `@free-react-templates/coverly`; Tailwind 4 `@theme`: primary #2563eb
      scale, accent #16a34a scale, font Manrope; `injectUiSource()` in
      vite.config.ts; register workspace + `npm install` at root)
- [ ] Navbar: sticky white/80 blur, shield logo "ShieldGuard" (or "Coverly"
      — keep brand text ShieldGuard per source), 9 links, "Get a Quote" pill
      CTA, dark-mode toggle, mobile drawer
- [ ] Hero: badge, H1 with gradient typewriter tail (Depend On / Trust In /
      Rely On), blurb, 2 CTAs, 4-stat row, 3 green trust badges
- [ ] Stats band: 4 counters (Claims Paid, Active Policies, Claims
      Approval, Years Trusted) with scroll-into-view animation
- [ ] Coverage: 6 insurance cards (Auto/Home/Life/Health/Business/Umbrella)
      with lucide icons + "Learn More"
- [ ] Why Us: 4 value cards
- [ ] Process: 3 numbered steps
- [ ] Calculator: select + premium input + age radios + reveal estimate on
      "Calculate Savings"
- [ ] Testimonials: 6 quote cards with initial avatars + carousel nav
- [ ] FAQ: 6-item accordion
- [ ] Contact: form (name/email/phone/coverage/message) + info card + state
      license note
- [ ] Footer: 4 columns, contact info, copyright, legal links
- [ ] App.tsx composition + document title "Coverly — Insurance Template"
- [ ] Vitest tests for every section (mirror spec scenarios), 100% coverage
- [ ] `npm run verify:app coverly` green; README status + TEMPLATES.md `[x]`
      via PR to main
