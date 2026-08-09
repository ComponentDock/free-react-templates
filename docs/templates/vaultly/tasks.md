# Vaultly (ColorLib Wealthwise) — Tasks & Design Notes

> Prep artifacts committed on `main` (prep stream). Implementation ships
> later on `feat/template-vaultly` (implementer stream).

## Design notes (replication findings)

- **Original:** ColorLib "Wealthwise" — free AI financial advisor / fintech
  app landing template (source: https://colorlib.com/wp/template/wealthwise/,
  slug `wealthwise`; TEMPLATES.md category Astro; in-page product brand is
  "Finley", the fictional AI assistant).
- **Preview:** `https://preview.colorlib.com/theme/wealthwise/` → 404 "Not
  Found". The ColorLib preview hub
  (`preview.colorlib.com/assets/js/products.js`) maps the slug to the
  REACHABLE official Cloudflare Pages demo
  **`https://wealthwise-colorlib.pages.dev/`** (Astro rebuild). ALL
  structure/copy/tokens below are from that live demo (HTML 80,950 bytes +
  `/_astro/Base.DLOtl97a.css` 63,714 bytes, fetched 2026-08-09),
  cross-checked against the TEMPLATES.md screenshot
  (`wealthwise-template-1770211049269.jpg`).
- **Visual design:** modern clean fintech landing, purple + teal palette.
  Fixed blur navbar ("Finley" wordmark; Features / How It Works / Pricing /
  About; Log In + Get Started Free + dark toggle + mobile menu); hero with
  big bold H1 "Your Personal AI Financial Advisor", blurb, solid purple
  "Start Free Trial" + outline "See How It Works", stats (Assets Advised,
  Happy Users, App Rating) and an AI chat mockup card ("Finley — Online,
  Ready to help", message bubbles, "Message Finley anything about your
  finances..." input); gray-50 6-card features "Everything You Need to Build
  Wealth" (24/7 AI Advisor, Smart Portfolio Management, Goal-Based Planning,
  Bank-Level Security, Tax Optimization, Proactive Alerts); white 4-step
  "Get Started in Minutes" (Connect Your Accounts → Tell Finley Your Goals →
  Get Your Personalized Plan → Automate & Grow + Start Your Free Trial);
  gray-50 dashboard preview "Your Complete Financial Picture" (tabs
  Portfolio Allocation / Goals / Recent Activity, Total Net Worth
  $127,450.32, "Portfolio Rebalanced", "VTI Dividend"); white testimonials
  "Loved by 150,000+ Users" (Sarah Chen, Marcus Johnson, Emily Rodriguez);
  gray-50 pricing "Simple, Transparent Pricing" (Free / Plus highlighted /
  Premium); white FAQ "Frequently Asked Questions" (6 accordion items:
  "How does the AI financial advisor work?", "Is my financial data secure?",
  robo-advisor difference, "Can I talk to a human advisor?", existing
  investments, free trial — + "Still have questions? Contact support");
  purple gradient CTA band "Ready to Take Control of Your Finances?" (white
  "Start Free Trial" + outline "Talk to Sales", "30-day free trial • No
  credit card required • Cancel anytime"); light footer (border-t gray-50,
  brand + SEC note + Product / Company / Resources / Legal columns +
  copyright). **Dark mode supported** (toggle, `dark:` variants,
  localStorage `theme`).
- **Section order (1:1):**
  1. Navbar (`fixed top-0 z-50 border-b bg-white/80 backdrop-blur`, `h-16
lg:h-20`): "Finley" logo; Features / How It Works / Pricing / About;
     Log In (ghost) + Get Started Free (purple) + dark toggle (Moon/Sun,
     `aria-label="Toggle dark mode"`) + mobile menu (`aria-expanded`).
  2. Hero (`pt-32 pb-20 lg:pt-40`): H1 "Your Personal AI Financial Advisor";
     blurb (AI + human expertise, SEC-registered); CTAs "Start Free Trial"
     (`bg-primary-600 px-8 py-4 rounded-lg shadow-primary-600/25 hover:
darker`) + "See How It Works" (outline); stats row 3 (Assets Advised /
     Happy Users / App Rating — big number + label); AI chat mockup
     `rounded-2xl border bg-white shadow-2xl`: header "Finley — Online,
     Ready to help" (avatar + green status dot), 2+ message bubbles,
     suggestion chips, input "Message Finley anything about your
     finances..." + send icon.
  3. Features (`bg-gray-50 py-24`): h2 "Everything You Need to Build
     Wealth"; grid `sm:grid-cols-2 lg:grid-cols-3 gap-6`; 6 cards
     (icon + title + desc): 24/7 AI Advisor, Smart Portfolio Management,
     Goal-Based Planning, Bank-Level Security, Tax Optimization, Proactive
     Alerts.
  4. How it works (`bg-white py-24`): h2 "Get Started in Minutes" + sub;
     4 numbered steps: Connect Your Accounts, Tell Finley Your Goals, Get
     Your Personalized Plan, Automate & Grow; CTA "Start Your Free Trial".
  5. Dashboard preview (`bg-gray-50 py-24`): h2 "Your Complete Financial
     Picture"; mock dashboard card: tabs (Portfolio Allocation / Goals /
     Recent Activity), Total Net Worth `$127,450.32` (+24.5% badge), rows
     "Portfolio Rebalanced", "VTI Dividend" + mini bars/chart.
  6. Testimonials (`bg-white py-24`): h2 "Loved by 150,000+ Users"; 3 quote
     cards: 5 stars, quote, avatar initial, name, role — Sarah Chen, Marcus
     Johnson, Emily Rodriguez.
  7. Pricing (`bg-gray-50 py-24`): h2 "Simple, Transparent Pricing"; 3 plans
     Free ($0, "Free forever with limited AI chats...") / Plus (featured,
     purple border + badge) / Premium (everything + human advisor); feature
     lists + CTA buttons.
  8. FAQ (`bg-white py-24`): h2 "Frequently Asked Questions"; 6 accordion
     rows (button + ChevronDown rotate, `aria-expanded`): How does the AI
     financial advisor work? / Is my financial data secure? / Difference vs
     robo-advisor / Can I talk to a human advisor? / Existing investments /
     Free trial cancel; below: "Still have questions? Contact support".
  9. CTA band (`bg-gradient-to-br from-primary-600 to-primary-800 py-24
text-white`): h2 "Ready to Take Control of Your Finances?"; white
     "Start Free Trial" + outline "Talk to Sales"; "30-day free trial • No
     credit card required • Cancel anytime".
  10. Footer (`border-t bg-gray-50 py-16`): brand col ("Finley" + blurb +
      "Finley Advisors LLC, an SEC-registered investment adviser" note);
      Product / Company / Resources / Legal columns; bottom bar copyright.
- **Design tokens (real values from the demo CSS):**
  - Primary purple: `#6d49f4` (buttons, logo, links, gradient start);
    dark shades `#260c66`, `#11023a`; alpha `#6d49f433` (soft bgs/glows),
    `#6d49f41a`, `#6d49f440`, `#260c6680` (overlays).
  - Secondary teal: `#00978a` (accent/success) + dark `#00322d`; alpha
    `#00978a33`, `#00978a1a`.
  - Neutrals: white; gray-50 `#f9fafb`/`#f3f4f6` (light sections, borders),
    200 `#e5e7eb`, 300 `#d1d5db`, 400 `#9ca3af` (placeholder), 500
    `#6b7280`, 600 `#4b5563`, 700 `#374151`, 800 `#1f2937`, 900 `#111827`,
    950 `#030712`.
  - Fonts (Google Fonts link): **Plus Jakarta Sans** 500–800 (display,
    `--font-display`), **Inter** 400–700 (body, `--font-sans`), **JetBrains
    Mono** 400–500 (`--font-mono` — numbers/dashboard).
  - Buttons: purple, `rounded-lg` (`border-radius:.25rem` family), nav
    `px-5 py-2.5 text-sm`, hero/CTA `px-8 py-4 text-base`, shadow
    `shadow-lg shadow-primary-600/25`, hover darkens.
  - Radii: chat mockup + dashboard `rounded-2xl`, cards `rounded-xl`,
    inputs `rounded-lg`.
  - Rhythm: sections `py-24`, container `mx-auto max-w-7xl px-4 sm:px-6
lg:px-8`, alternating gray-50/white, gradient CTA band, footer light.
  - Dark mode: `.dark` on `<html>`, persisted localStorage `theme`.
- **Recreation name:** Vaultly (single lowercase word; evokes a wealth
  "vault" — fits the fintech brand; NO collision with `apps/` or existing
  spec folders; not a ColorLib source name). App folder `apps/vaultly`,
  package `@free-react-templates/vaultly`. The stale FORBIDDEN source-name
  prep (`template-wealthwise` + `docs/templates/wealthwise`) was deleted in
  the prep commit.
- **Recreation approach:** chat mockup + dashboard are pure CSS/JSX (no
  images); avatars → seeded picsum (`picsum.photos/seed/vaultly-<n>/<w>/<h>`)
  if the demo uses photos; lucide-react icons (Bot/MessageSquare for logo,
  TrendingUp, Target, ShieldCheck, Receipt, Bell, Link2, LayoutDashboard,
  Star, ChevronDown, Sparkles, LineChart, Wallet, PiggyBank, Moon, Sun,
  Menu, X — VERIFY exports); Plus Jakarta Sans + Inter + JetBrains Mono via
  Google Fonts; dark mode with `window.localStorage` persistence (Keyhaven
  pattern — jsdom 30 needs the in-memory Storage polyfill in
  `src/test/setup.ts`); FAQ accordion client-side with `aria-expanded`;
  "Log In"/"See How It Works"/footer links anchor to `#` placeholders; repo
  standard extras (skip link, back-to-top).
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn). Fidelity
  decisions for the PR: single-page landing only (source demo is an Astro
  SPA — only the landing page is recreated); in-page product brand "Finley"
  kept from the demo (it is the fictional AI assistant's name, not the
  ColorLib source name); chat mockup is static (no backend); numbers/copy
  paraphrased per docs/replication.md but same kind of content.

## Tasks

- [x] Write `openspec/specs/template-vaultly/spec.md` (Gherkin requirements +
      scenarios reflecting the sections above).
- [x] Delete stale FORBIDDEN source-name prep `openspec/specs/template-wealthwise` + `docs/templates/wealthwise` (per naming mandate).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/vaultly` (copy a simple card-grid app — e.g. Moda/Coverly-
      style; rename package to `@free-react-templates/vaultly`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Gate: `scripts/verify-app.sh vaultly` (typecheck → lint → 100% coverage
      tests → build) + `npm run spec:validate`.
- [ ] Push `feat/template-vaultly`, open PR (source template, preview URL,
      design tokens, what differs, pages.dev-reference note), merge
      immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main), `npm run readme:status`.
