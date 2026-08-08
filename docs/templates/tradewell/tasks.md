# Tradewell — Implementation Tasks

Recreation of **ColorLib Investpro** (https://colorlib.com/wp/template/investpro/)
under the NEW name **Tradewell**. Preview: https://investpro-colorlib.pages.dev/
(portal URL `preview.colorlib.com/theme/investpro/` 404s — demo is on
Cloudflare Pages per `products.js`). Spec: `openspec/specs/template-tradewell/spec.md`.

## Setup checklist

- [ ] Copy the simplest existing app (e.g. `apps/ticker` or `apps/aurora`) to
      `apps/tradewell`; rename package to `@free-react-templates/tradewell`
- [ ] `npm install` at repo root BEFORE committing (lockfile registration);
      verify `grep -c "free-react-templates/tradewell" package-lock.json`
- [ ] `vite.config.ts` registers `injectUiSource()` (never remove; relative
      `@source` paths are dropped by the Tailwind v4.3 vite plugin)
- [ ] Fonts `<link>` in `index.html`: Plus Jakarta Sans (500–800), Inter
      (400–700), JetBrains Mono (400–600)
- [ ] `src/test/setup.ts`: jest-dom + in-memory Storage polyfill
      (`window.localStorage` — jsdom 30 removed it)
- [ ] TDD: tests first per section, 100% coverage (lines/functions/branches/
      statements); `main.tsx` is the only excluded source

## Design tokens → `@theme` (from demo CSS)

- `--color-primary-*`: oklch hue 250 scale (`primary-500: oklch(55% .15 250)`,
  `primary-600: oklch(48% .15 250)`, `primary-950: oklch(18% .05 250)`)
- `--color-accent-*`: oklch hue 155 green (`accent-500: oklch(65% .18 155)`)
- `--color-danger-*`: oklch hue 25 red (`danger-500: oklch(58% .2 25)`)
- gray scale: oklch hue 260 (Tailwind-style)
- Buttons: `linear-gradient(135deg, primary-500, primary-600)`, white text,
  font-semibold, `rounded-xl`, hover: gradient 400→500 + `shadow 0 4px 20px -4px`

## Section build order (1:1 with demo)

1. **Ticker** — marquee bar at very top: `.ticker-animate flex gap-8 py-2`,
   duplicated content for seamless loop. Data: SPY $587.42 +0.72%, QQQ $518.91
   +1.54%, BTC $104,892 +2.28%, ETH $3,342 −1.33%, AAPL $227.63 +1.39%, TSLA
   $424.07 −2.06%, NVDA $137.71 +4.11%, DIA $437.89 +0.36%. Green up / red down.
   Test: symbols + price + % present; green/red classes by sign.
2. **Navbar** — logo "Tradewell", links (Invest, Markets, Pricing, Learn,
   About), "Markets Open" status dot, "Log in" link, "Get Started" primary
   button, dark-mode toggle (repo-standard, `window.localStorage` persistence).
   Sticky (`sticky top-0 z-50`). Desktop + mobile nav (test with
   `getAllByRole` — duplicate links in DOM).
3. **Hero** — split layout, `bg-gray-50 dark:bg-gray-950`, faint grid overlay.
   Left: "$0 Commission Trading" green pill badge (rounded-full), h1 "Invest
   Smarter, Trade Better" (second phrase primary blue), subtext ("The modern
   investment platform for stocks, ETFs, crypto, and options. Start with as
   little as $1 and build your wealth commission-free."), "Start Investing"
   (primary, px-8 rounded-xl) + "Watch Demo" (outline) buttons, avatar stack +
   5 stars + "4.9/5 from 50K+ reviews". Right: phone mockup — portfolio
   "$47,382.54", line chart, holdings (AAPL, BTC, NVDA, SPY) with green gains,
   floating notification bubbles ("Order Filled: Bought 5 TSLA", "Disbursed
   $42.39 AAPL").
4. **Stats strip** — 4 white rounded-xl cards with soft shadow: 12M+ Active
   Investors, $180B+ Assets Under Custody, 5M+ Trades Executed Daily, 50+
   Countries Supported. Bold number + gray label.
5. **Features** — "Everything You Need to Invest Confidently", `bg-white
dark:bg-gray-900`, 8 cards (grid 4-col on lg): Commission-Free Trading,
   Fractional Shares, Instant Deposits, Professional Research, Award-Winning
   App, Bank-Level Security, Developer API, Tax Optimization. Icon + title +
   blurb.
6. **Markets** — "Trade Multiple Asset Classes", `bg-gray-50 dark:bg-gray-950`,
   6 cards (grid 3-col): Stocks, ETFs, Crypto, Options, Bonds, Futures.
7. **Security** — DARK NAVY section `bg-primary-950`, heading "Your Assets Are
   Protected & Secure", 6 cards: SIPC Protected, FDIC Insured Cash, 256-bit
   Encryption, Two-Factor Auth, SEC Registered, 24/7 Monitoring. White text on
   dark; cards may be translucent/white-on-navy.
8. **Pricing** — "Simple, Transparent Pricing", `bg-white dark:bg-gray-900`,
   3 tiers: Basic (free), Pro, Premium. Feature lists + "Start Pro Trial"
   button (accent or primary variant). Middle tier highlighted.
9. **Testimonials** — "Loved by 12 Million+ Investors", `bg-gray-50
dark:bg-gray-950`, 6 quote cards with metrics: Portfolio Growth +47%,
   Trades/Month 500+, Clients Referred 200+, Crypto Holdings $85K, Tax Savings
   $3,200, Win Rate 68%.
10. **FAQ** — "Frequently Asked Questions", `bg-white dark:bg-gray-900`, 8
    accordion items: free?, money protection, portfolio transfer, fractional
    shares, retirement accounts, deposit speed, crypto, API. Expanded answer
    assert via `queryByLabelText` absence (success/unmount pattern).
11. **CTA** — "Ready to Start Building Wealth?" on `bg-gray-50
dark:bg-gray-950` with grid overlay, "Get Started Free" primary button.
12. **Footer** — `border-t border-gray-200 bg-gray-50 dark:bg-gray-800/950`:
    Products / Company / Resources columns + copyright line.

## Fidelity notes / pitfalls

- **Never copy assets**: picsum seeds `tradewell-<n>/<w>/<h>`; Google Fonts;
  lucide-react icons; inline SVG for brand icons (lucide removed them).
- Font stack is 3 families — JetBrains Mono for prices/numbers in ticker,
  stats, and mockup (gives the fintech feel).
- Phone mockup: build with divs + border-radius (no image); chart can be a
  simple inline SVG polyline.
- Dark mode: `dark:` utilities only; toggle flips `.dark` on
  `document.documentElement`; persist via `window.localStorage`.
- Keep copy fintech-flavored; paraphrase OK, same content types.
- Tests mirror the spec's Gherkin scenarios 1:1; one `describe` per component.
- After green: `scripts/verify-app.sh tradewell`, PR with source template +
  preview URL + tokens, immediate squash merge, then `[~]`→`[x]` + surge URL +
  `npm run readme:status` on main.
