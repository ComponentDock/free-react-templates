# Stratos (ColorLib Cloudnest) — Tasks & Design Notes

> Recreation of ColorLib "Cloudnest"
> (https://colorlib.com/wp/template/cloudnest/) under the NEW name
> **Stratos** (cloud platform → stratosphere), per the monorepo naming
> mandate (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Cloudnest" — cloud platform Astro template.
- **Demo DOM analyzed:** https://cloudnest-colorlib.pages.dev/ (HTTP 200;
  the official `https://preview.colorlib.com/theme/cloudnest/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal).
- **Visual design (screenshot `cloudnest-template-1771944017064.jpg`):**
  dark-mode SaaS landing — deep navy hero (gray-950 → indigo-950 gradient)
  with electric indigo accents, terminal mockup, white/gray-50 light
  sections below, DM Sans font.
- **Structure (1:1, section order):**
  1. Navbar: CloudNest logo, Products (`#services`), Pricing, About, Blog,
     Contact, dark toggle, "Get Started Free" CTA.
  2. Hero (dark gradient): badge "Trusted by 10,000+ developers worldwide",
     H1 "Deploy at the Speed of Light" (gradient text), blurb, buttons
     "Start Deploying Free" + "View Documentation", stats row (500K+
     Deployments / 40+ Global Regions / 99.99% Uptime SLA / <50ms Global
     Latency), terminal mockup (`$ cloudnest login` → `$ cloudnest deploy`
     → "Deployment successful! URL: https://myapp.cloudnest.app").
  3. Stats band (gray-50, bordered): 500K+ Deployments / 40+ Global
     Regions / 99.99% Uptime SLA / 10K+ Active Teams.
  4. Features (`#services`): "Products" pill, "Everything You Need to Ship",
     6 cards — App Hosting, Managed Databases, Edge Functions, Object
     Storage, Container Registry, Load Balancing.
  5. Testimonials: "Loved by Developers" — Sarah Chen (CTO, DataStream),
     Marcus Rodriguez (Lead Engineer, Fintech Labs), Aisha Patel (VP
     Engineering, NovaTech).
  6. FAQ: 5 accordion items (frameworks, pricing, uptime, migration,
     security).
  7. CTA (indigo gradient): "Ready to Ship Faster?" + "Get Started Free" +
     "Talk to Sales".
  8. Footer: blurb, contact ((555) 456-7890, hello@cloudnest.dev,
     800 NW 6th Ave, Portland, OR 97209), columns Products / Developers /
     Company, copyright + legal links.
- **Design tokens extracted from the demo stylesheet
  (`/_astro/Base.*.css`, oklch → hex):**
  - Primary: indigo scale — `#6366f1` (500), `#4f46e5` (600), `#4338ca`
    (700), `#818cf8` (400), `#a5b4fc` (300), `#c7d2fe` (200), `#1e1b4b`
    (950).
  - Accent: `#38bdf8` (sky-400) for gradient text end.
  - Dark: `#030712`/`#111827`/`#1f2937`; light: `#f9fafb`/`#f3f4f6`.
  - Font: **DM Sans** (Google Fonts `<link>`).
  - Buttons: rounded-lg; pill badges border-primary-500/30 +
    bg-primary-500/10 + text-primary-300.
- **Recreation name:** **Stratos** (new, original — differs from ColorLib
  "Cloudnest"). App folder `apps/stratos`, package
  `@free-react-templates/stratos`, homepage
  `https://free-react-templates-stratos.surge.sh`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/stratos-<n>/<w>/<h>` for avatars); lucide-react
  icons (Cloud logo inline SVG); DM Sans via Google Fonts; indigo palette
  in `@theme`; repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).
- **What differs:** name; no count-up/typewriter/parallax JS (static
  values); placeholder avatars; Pricing/About/Blog/Contact are anchors.

## Tasks

- [x] Replication research (demo DOM + screenshot + CSS tokens).
- [x] Write `openspec/specs/template-stratos/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Remove stale prep `openspec/specs/template-cloudnest/` +
      `docs/templates/cloudnest/` (used the forbidden source name).
- [x] Validate spec: `npm run spec:validate`.
- [x] Create `apps/stratos` (copy the Parapet landing app pattern; rename
      package to `@free-react-templates/stratos`).
- [x] TDD: tests first for each section component; run red.
- [x] Implement components (green) at 100% coverage.
- [x] Per-app gate: `bash scripts/verify-app.sh stratos` (typecheck →
      lint → 100% coverage tests → build) + `npm run spec:validate`.
- [x] Push `feat/template-stratos`, open PR (source template, preview
      URL, design tokens, what differs), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage +
      `npm run readme:status` (bookkeeping on main).
