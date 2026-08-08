# Blastoff (ColorLib Launchpad) — Tasks & Design Notes

> Recreation of ColorLib "Launchpad"
> (https://colorlib.com/wp/template/launchpad/) under the NEW name
> **Blastoff** (launch/rocket imagery), per the monorepo naming mandate
> (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Launchpad" — startup / dev-platform (CI-CD,
  deploy, analytics) SaaS landing template (category: Startup per the
  ColorLib preview portal).
- **Demo DOM analyzed:** https://launchpad-colorlib.pages.dev/ (HTTP 200,
  ~91 KB HTML + `/_astro/Base.Dq6-tIhe.css` ~68 KB parsed for tokens; the
  official `https://preview.colorlib.com/theme/launchpad/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal).
- **Visual design (screenshot `launchpad-template-1771943657968.jpg`):**
  the ORIGINAL design — sticky white nav with rocket logo, center links
  (About, Features, How it works, Pricing, Testimonials, FAQ, Integrations,
  Blog, Changelog, Contact), search + user icons, indigo "Get Early Access"
  button; hero "Ship products smarter than ever" with "smarter" in dark
  indigo and "than ever" in lime-green; dashboard analytics mockup framed in
  a soft light-purple rounded shape with drop shadow; stats row (2,000+
  Users / 99.9% Uptime / $2.5M Raised / 4.9 Rating); indigo primary + lime
  accent + pale periwinkle gradient bg; pill buttons in the original. The
  live Astro demo re-skins this (headline "Ship products 10x faster",
  rounded-lg buttons, dark-mode toggle) — use the live demo DOM as the
  authoritative structure/token reference; keep the indigo two-tone headline
  spirit from the screenshot.
- **Structure (1:1, section order):**
  1. Navbar: Blastoff logo (rocket icon), About, Features, How It Works,
     Pricing, Testimonials, FAQ, Integrations, Blog, Changelog, Contact,
     dark toggle, "Get Early Access" CTA; mobile hamburger ("Open menu") +
     slide-down panel.
  2. Hero (gradient from-primary-50 → white): badge "Now in Beta — 2,000+
     on the waitlist", H1 "Ship products 10x faster", blurb, buttons "Join
     the Waitlist" (primary → #waitlist) + "See it in action" (outline,
     play icon → #how-it-works), dashboard mockup image, stats row (2,000+
     Beta Users / 99.9% Uptime / $2.5M Raised / 4.9 Rating).
  3. Stats band (border-y, bg-gray-50): 4 count-up counters
     (`<span data-counter="2000+">0</span>`) — Active Users, Uptime,
     Funding Raised, User Rating; value text-4xl/5xl font-bold
     text-primary-600, label text-sm gray-600; fade-in-up + data-delay.
  4. Features (bg-gray-50): eyebrow pill "Features", H2 "Everything you
     need to ship", 6 cards (icon + title + blurb): CI/CD Pipeline,
     Real-time Analytics, Team Collaboration, Auto-scaling, Security
     First, Developer API.
  5. How It Works (bg-white): eyebrow "How It Works", H2 "From idea to
     production in minutes", 3 numbered steps: 01 Connect, 02 Build,
     03 Deploy.
  6. Integrations (bg-gray-50): eyebrow "Integrations", H2 "Works with
     your favorite tools", 8 items with "Connected" badge: GitHub, GitLab,
     Slack, AWS, Vercel, Docker, Jira, Figma.
  7. Pricing (bg-white): eyebrow "Pricing", H2 "Simple, transparent
     pricing", monthly/yearly toggle (role=switch, "Save 20%"), 3 tiers:
     Hobby $0/mo (1 project, 100 build minutes/month, Community support,
     Basic analytics, Custom domains, Team collaboration; "Get started
     free"), Startup $49/mo — Most Popular ($468/yr; Unlimited projects,
     3,000 build minutes/month, Priority support, Advanced analytics,
     Custom domains, Up to 10 team members; "Get started"), Scale $149/mo
     ($1428/yr; Unlimited projects, Unlimited build minutes, 24/7
     dedicated support, Custom analytics & reports, SSO & SAML, Unlimited
     team members; "Contact sales").
  8. Testimonials (bg-gray-50): eyebrow "Testimonials", H2 "Trusted by
     fast-moving startups", carousel prev/next (lg-only), 6 slides: Alex
     Rivera CTO NexaFlow, Priya Sharma Head of Engineering DataPulse,
     Jordan Kim Lead Developer CloudSync, Chris Park CEO QuickShip,
     Rebecca Stone Founder MedConnect, Ahmed Hassan CTO GreenRoute.
  9. FAQ (bg-white): eyebrow "FAQ", H2 "Frequently Asked Questions", 4
     accordions: platform differences, project migration, cloud providers,
     free tier.
  10. Waitlist CTA (gradient from-primary-600 to-primary-800): H2 "Ready
      to launch faster?", "Get Early Access" button, note "Join 2,000+
      developers already on the waitlist. No credit card required."
  11. Footer (bg-gray-900, text-gray-300): brand blurb, columns PRODUCT
      (Features, Pricing, Changelog, Roadmap) / RESOURCES (Documentation,
      API Reference, Blog, Tutorials) / COMPANY (About, Careers, Press,
      Contact), STAY UPDATED newsletter (email + Subscribe), "© 2026
      Blastoff. All rights reserved.", legal links (Privacy Policy, Terms
      of Service, Style Guide), social icons GitHub + LinkedIn.
  12. Extras: cookie-consent dialog (Decline / Accept All), back-to-top
      button (fixed bottom-6 right-6, h-12 w-12 rounded-full bg-primary-600,
      appears on scroll).

## Design tokens (from Base CSS)

- Brand: `#4f46e5` (primary-600), scale `#eef2ff` `#e0e7ff` `#c7d2fe`
  `#a5b4fc` `#818cf8` `#6366f1` `#4f46e5` `#4338ca` `#3730a3` (Tailwind
  indigo aliased as `primary`)
- Neutrals: `#030712` `#111827` `#1f2937` `#374151` `#4b5563` `#6b7280`
  `#9ca3af` `#d1d5db` `#e5e7eb` `#f3f4f6` `#f9fafb` `#fff`
- Font: Manrope (300–800), Google Fonts
- Buttons: rounded-lg px-6 py-3 text-base font-medium — primary
  `bg-primary-600 text-white shadow-lg` / secondary `border border-gray-300
bg-white`; eyebrow pills rounded-full `bg-primary-100 text-primary-700`;
  circular controls rounded-full (carousel arrows, back-to-top, billing
  switch h-7 w-14)
- Cards: rounded-2xl `bg-white p-8 shadow-soft` (features),
  `ring-1 ring-gray-200 shadow-2xl` (testimonial)
- Sections: hero gradient `from-primary-50 to-white`, alternating gray-50 /
  white, waitlist gradient `from-primary-600 to-primary-800`, footer
  gray-900
- Dark mode: class-based, toggle button + `.dark` on root, persist via
  `window.localStorage` (in-memory Storage polyfill in test setup — Keyhaven
  pattern)

## Implementation tasks (implementer)

- [ ] Scaffold `apps/blastoff` (copy simplest existing app; package
      `@free-react-templates/blastoff`; `npm install` at root so the
      lockfile registers the workspace; keep `injectUiSource()` in
      vite.config.ts)
- [ ] Spec-first: this spec is already in `openspec/specs/template-blastoff/`
      — write tests (red) before components (green), 100% coverage
- [ ] Navbar: logo + 10 links + dark toggle + "Get Early Access" CTA +
      mobile menu
- [ ] Hero: badge, H1, blurb, 2 CTAs, dashboard placeholder
      (`picsum.photos/seed/blastoff-1/1200/675`), stats row
- [ ] Stats band with count-up animation (IntersectionObserver, no deps)
- [ ] Features grid (6 cards, lucide icons)
- [ ] How It Works (3 numbered steps)
- [ ] Integrations grid (8 items, inline-SVG brand marks — lucide has no
      brand icons; "Connected" badge)
- [ ] Pricing with billing toggle (Monthly/Yearly, "Save 20%", annual
      prices swap)
- [ ] Testimonials carousel (6 slides, prev/next)
- [ ] FAQ accordion (4 items)
- [ ] Waitlist CTA gradient section
- [ ] Footer (3 columns + newsletter + legal + socials)
- [ ] Extras: cookie-consent dialog, back-to-top button
- [ ] `scripts/verify-app.sh blastoff` green; commit `feat:`; open PR +
      merge immediately; `[~]` → `[x]` + surge URL; `npm run readme:status`
