# Zenith (ColorLib Saasify) — Tasks & Design Notes

> Recreation of ColorLib "Saasify"
> (https://colorlib.com/wp/template/saasify/) under the NEW name
> **Zenith** (the peak of SaaS productivity), per the monorepo naming
> mandate (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Saasify" — SaaS / software product landing
  template (Tailwind CSS / Astro category).
- **Demo DOM analyzed:** `https://saasify-colorlib.pages.dev/` (HTTP
  200, ~49 KB HTML + `/_astro/Base.xIhJ7-Et.css` ~47 KB parsed for
  tokens; the official `https://preview.colorlib.com/theme/saasify/`
  returns 404 — demo hosted on Cloudflare Pages, same pattern as
  Logitrans→Freightly / Neuralflow→Sentient).
- **Visual design (screenshot `saasify-template-1770211006733.jpg`):**
  light-mode SaaS landing — white body with a soft lavender→white
  gradient hero, violet brand accents (logo mark, "faster than ever"
  headline highlight, badge pill, primary CTAs), Inter typography,
  rounded-lg/pill buttons, rounded-2xl cards; below the fold a dark
  navy dashboard preview (sidebar + white metric cards: Total Revenue
  $24,563, Active Users 1,234, Uptime 98.5%) suggesting a dark-mode
  product UI; stats row (10k+ / 99.9% / 50+ / 4.9★); features grid;
  three pricing cards; testimonial cards with yellow 5-star rows; CTA
  banner; dark footer.
- **Structure (1:1, section order):**
  1. Navbar: "Saasify" logo (icon + wordmark), links Features, Pricing,
     Testimonials, Resources, Documentation, Blog, Help Center, Contact;
     dark-mode toggle; "Get Started" violet button.
  2. Hero (light, soft lavender→white gradient): pill badge "New with
     AI-powered automation" (violet), H1 "Build better products, faster
     than ever" ("faster than ever" in violet), subtext, buttons "Start
     free trial" + "Watch demo", stats row (10k+ Active users, 99.9%
     Uptime SLA, 50+ Integrations, 4.9★ User rating), dashboard preview
     image (dark sidebar + white cards).
  3. Features: "Everything you need to ship faster" — 6 cards (icon
     tile + title + blurb): Workflow Automation, Real-time
     Collaboration, Advanced Analytics, Enterprise Security, API &
     Integrations, 24/7 Support.
  4. Pricing: "Simple, transparent pricing" + "Choose the plan that
     fits your needs. All plans include a 14-day free trial." —
     Monthly/Annual toggle ("Save 20%"), 3 tiers: Starter $29/mo
     (annual $276/yr), Pro $79/mo (annual $756/yr, "Most Popular"
     badge), Enterprise $199/mo (annual $1908/yr, "Contact sales").
  5. Testimonials: "Loved by teams worldwide" + "See what our
     customers have to say about their experience." — 3 quote cards
     (5 yellow stars + quote + name + role).
  6. CTA: "Ready to transform your workflow?" + "Join thousands of
     teams already using SaaSify to build better products, faster." —
     "Start free trial" + "Contact sales".
  7. Footer: brand + blurb + socials, columns PRODUCT (Features,
     Pricing, Integrations, Changelog) / COMPANY (About, Blog,
     Careers, Contact) / LEGAL (Privacy, Terms, Security), STAY
     UPDATED newsletter (email + Subscribe), "© 2026 Saasify. All
     rights reserved." + Privacy Policy / Terms of Service.
  - Extras: skip-to-content, mobile hamburger menu (aria-expanded),
    dark-mode toggle persisted to localStorage, scroll-reveal
    fade-in-up.

## Design tokens (from `Base.xIhJ7-Et.css`)

| Token        | Value(s)                                                                                                    |
| ------------ | ----------------------------------------------------------------------------------------------------------- |
| Primary      | #7c3aed (violet-600); scale #f5f3ff, #ede9fe, #ddd6fe, #c4b5fd, #a78bfa, #8b5cf6, #6d28d9, #5b21b6, #4c1d95 |
| Neutrals     | #fff, #f9fafb, #f3f4f6, #e5e7eb, #d1d5db, #9ca3af, #6b7280, #4b5563, #374151, #1f2937, #111827, #030712     |
| Dark bg/text | bg #030712/#111827, text #f3f4f6 (`.dark` class on root, localStorage "theme")                              |
| Light bg     | #fff, text #111827; hero soft lavender→white gradient                                                       |
| Fonts        | Inter (300–800) via Google Fonts; ui-monospace fallback for code                                            |
| Radii        | lg 0.5rem (buttons), xl 0.75rem (icon tiles), 2xl 1rem (cards), full (badge pills)                          |
| Buttons      | primary bg #7c3aed + white text; secondary outlined/ghost; focus ring 2px; px-5 py-2.5 text-sm font-medium  |
| Icon tiles   | `h-14 w-14 rounded-xl bg-primary-100 text-primary-600`, group-hover → `bg-primary-600 text-white`           |
| Stars        | `h-5 w-5 text-yellow-400` (5 per testimonial)                                                               |
| Cards        | `rounded-2xl bg-white p-8 shadow-soft`, hover `shadow-soft-lg`; dark: `bg-gray-800`                         |

## Implementation notes (for the implementer)

- Tailwind `@theme`: `--color-primary-*` = violet scale; use
  `bg-primary-600`, `text-primary-600` etc. via Tailwind classes per
  conventions.
- Google Fonts `<link>` in `index.html`: Inter (weights 300–800).
- Interactive pieces (each a small hook, no deps):
  - Billing toggle: switch prices between monthly and annual (Starter
    $29 → $276/yr, Pro $79 → $756/yr, Enterprise $199 → $1908/yr;
    show "Billed annually ($X/year)" under the monthly price).
  - Mobile menu: hamburger with `aria-expanded`, toggles the mobile
    link panel.
  - Dark-mode toggle: `.dark` on `document.documentElement`, persist
    to localStorage ("theme"), same pattern as other apps.
  - Scroll reveal: fade-in-up on `[data-animate]` elements.
- Dashboard preview: build a static mock panel (dark sidebar with nav
  items + white cards showing Total Revenue $24,563 / Active Users
  1,234 / Uptime 98.5%) — do NOT copy demo assets.
- Placeholders: `picsum.photos/seed/zenith-<n>/<w>/<h>` for the
  dashboard preview and testimonial avatars.
- Icons: lucide-react (nav logo mark, feature tiles, socials, arrows,
  stars via lucide `Star` filled).
- Copy: paraphrase the demo's text, keep the same _kind_ of content
  (badge + headline + subtext + CTAs, card title + blurb, tier name +
  price + feature list + CTA).

## TODO (prep stream does NOT implement)

- [ ] Implementer: copy simplest existing app → `apps/zenith`
- [ ] Implementer: write tests (red) per spec scenarios, then
      implementation (green) — 100% coverage
- [ ] Implementer: `scripts/verify-app.sh zenith` until green
- [ ] Implementer: mark `[~]` → `[x]` in TEMPLATES.md + surge URL,
      `npm run readme:status`, PR + immediate squash merge
