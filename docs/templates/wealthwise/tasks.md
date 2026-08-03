# Wealthwise (Colorlib Wealthwise) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cloud PR (#7) awaits review.
> Implementation ships later on `feat/template-wealthwise`.

## Design notes (replication findings)

- **Original:** ColorLib "Wealthwise" — AI financial advisor / fintech app
  landing template (source: https://colorlib.com/wp/template/wealthwise/).
- **Demo DOM analyzed:** https://wealthwise-colorlib.pages.dev/ (HTTP 200,
  full rendered DOM + `/_astro/Base.*.css` (64KB, minified) extracted;
  `https://preview.colorlib.com/theme/wealthwise/` returns 404 — preview
  portal loads demos from `<slug>-colorlib.pages.dev`, confirmed via
  `preview.colorlib.com/assets/js/products.js`).
- **Visual design (from DOM + CSS tokens):** modern fintech landing on a
  light purple-tinted hero with an AI chat mockup, **purple** brand color
  (`#6d49f4`) with **teal** secondary (`#00978a`), Plus Jakarta Sans display
  - Inter body fonts, rounded cards, pill buttons, alternating gray-50/white
    sections, purple CTA band, full dark mode.
- **Structure (1:1, section order):**
  1. Fixed navbar (blur): "Finley" logo + Features, How It Works, Pricing,
     About + "Log In" + "Get Started Free".
  2. Hero: "Your Personal AI Financial Advisor" + "Start Free Trial" /
     "See How It Works"; stats (Assets Advised, Happy Users, App Rating);
     AI chat mockup (Finley, Online • Ready to help + sample messages).
  3. Features: "Everything You Need to Build Wealth" — 6 cards (24/7 AI
     Advisor, Smart Portfolio Management, Goal-Based Planning, Bank-Level
     Security, Tax Optimization, Proactive Alerts).
  4. How it works: "Get Started in Minutes" — 4 steps (Connect Accounts,
     Tell Finley Your Goals, Get Your Personalized Plan, Automate & Grow).
  5. Dashboard preview: "Your Complete Financial Picture" — net worth
     $127,450.32 + activity feed + tabs.
  6. Testimonials: "Loved by 150,000+ Users" — 3 quotes (Sarah Chen,
     Marcus Johnson, Emily Rodriguez).
  7. Pricing: "Simple, Transparent Pricing" — Free / Plus / Premium.
  8. FAQ: "Frequently Asked Questions" — 6 accordions + support contact.
  9. CTA band (gradient primary-600 → 800): "Ready to Take Control of Your
     Finances?" + "Start Free Trial" / "Talk to Sales" + trial bullets.
  10. Footer (`border-t bg-gray-50`): "Finley" blurb + Product / Company /
      Resources / Legal + copyright.
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **purple** #6d49f4 (dark #260c66, #11023a) + **teal**
    #00978a (dark #00322d); CTA gradient primary-600 → 800.
  - Neutrals: gray scale — #f3f4f6 → #030712.
  - Fonts: **"Plus Jakarta Sans"** (display) + **"Inter"** (body) via
    Google Fonts.
  - Shapes: rounded cards, pill buttons; section padding `py-24`.
- **Recreation name:** Wealthwise (kept — matches ColorLib name; product
  brand "Finley" per demo). App folder `apps/wealthwise`, package
  `@free-react-templates/wealthwise`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/wealthwise-<n>/<w>/<h>`); lucide-react icons (Bot,
  TrendingUp, Target, ShieldCheck, Receipt, Bell, Link2, MessageSquare,
  LayoutDashboard, Star, ChevronDown, Sparkles, LineChart, Wallet,
  PiggyBank); Plus Jakarta Sans + Inter via Google Fonts; repo-standard
  Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-wealthwise/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/wealthwise` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/wealthwise`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-wealthwise`, open PR (source template, preview
      URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
