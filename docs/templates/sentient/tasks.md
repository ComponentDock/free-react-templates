# Sentient (ColorLib NeuralFlow) — Tasks & Design Notes

> Recreation of ColorLib "NeuralFlow"
> (https://colorlib.com/wp/template/neuralflow/) under the NEW name
> **Sentient** (sentient AI), per the monorepo naming mandate (never
> reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "NeuralFlow" — AI platform / ML API landing
  template (Tailwind CSS / Astro category).
- **Demo DOM analyzed:** `https://neuralflow-colorlib.pages.dev/` (HTTP
  200, ~89 KB HTML + `/_astro/Base.CBdnxI3u.css` ~70 KB parsed for
  tokens; the official `https://preview.colorlib.com/theme/neuralflow/`
  returns 404 — demo hosted on Cloudflare Pages and reachable from the
  ColorLib preview portal at `https://preview.colorlib.com/#neuralflow`,
  same pattern as Logitrans→Freightly).
- **Visual design (screenshot `neuralflow-template-1771943830583.jpg`):**
  AI-platform landing — very dark hero (deep violet→charcoal gradient,
  faint violet grid, pulsing glow orbs) with a violet badge pill, white
  headline with violet→cyan gradient typewriter word, violet primary
  CTAs with glow shadow, code window with Python syntax highlighting;
  light gray/white sections below; Space Grotesk headings + Inter body +
  JetBrains Mono code; rounded-lg buttons, rounded-2xl cards; dark
  footer with violet→cyan gradient.
- **Structure (1:1, section order):**
  1. Navbar: "NeuralFlow" logo (icon + wordmark), links About,
     Capabilities, How It Works, Use Cases, Pricing, Developers,
     Integrations, Blog, Changelog, Solutions, Contact; dark-mode
     toggle; "Try Free" violet button.
  2. Hero (dark, glow orbs + grid): badge pill "Powered by GPT-5
     Architecture" (pulsing dot), H1 "Build Intelligent Apps" +
     typewriter gradient span cycling ["in Half the Time", "at Any
     Scale", "with Full Control"], subtext, buttons "Start Building
     Free" + "View Documentation" + "Watch Demo", stats row (1M+ API
     Calls/Day, 99.99% Uptime, 50ms Avg Latency, 10,000+ Developers),
     code window "api_example.py" (client init → generate → print).
  3. Stats strip: count-up counters (Active Users, Uptime SLA, API
     Calls Served, User Rating).
  4. Capabilities: "AI That Actually Works" — 6 cards (icon + title +
     blurb): Natural Language Processing, Computer Vision, Predictive
     Analytics, Voice AI, Code Generation, Custom Models.
  5. How It Works: "From Data to Intelligence in Minutes" — 3 numbered
     steps: 01 Connect Your Data, 02 Train & Fine-tune, 03 Deploy &
     Scale.
  6. Use Cases: "AI for Every Industry" — 4 cards (image + title +
     blurb + 3 bullets): Healthcare, Finance, E-commerce,
     Manufacturing.
  7. Pricing: "Usage-based pricing that scales" — Monthly/Yearly
     toggle ("Save 20%"), 3 tiers: Free $0 ("Start Free"), Pro $49
     ("Most Popular" badge, "Start Pro Trial"), Enterprise $299
     ("Contact Sales").
  8. Developers: "Built by Developers, for Developers" — code window
     "example.py" (model load + generate) + 4 cards: SDKs in 8
     Languages, OpenAPI Spec, Webhooks & Streaming, 99.99% Uptime SLA.
  9. Testimonials: "Trusted by AI-first teams" — carousel, 6 quotes
     (Dr. Sarah Chen, James Rodriguez, Priya Patel, Daniel Kim, Elena
     Vasquez, James O'Brien), prev/next + dots.
  10. FAQ: "Frequently Asked Questions" — accordion, 5 Qs (free trial,
      data security, rate limits, custom models, enterprise).
  11. CTA: "The Future of AI is Here" — "Start Free" + "Talk to Sales".
  12. Footer: brand + blurb + socials (Twitter, GitHub, LinkedIn,
      Discord), columns PRODUCT / RESOURCES / COMPANY, STAY UPDATED
      newsletter (email + Subscribe), legal links (Privacy Policy,
      Terms of Service, Style Guide), "© 2026 NeuralFlow".
  - Extras: skip-to-content, cookie-consent dialog (Decline / Accept
    All), back-to-top button, scroll-reveal fade-in-up.

## Design tokens (from `Base.CBdnxI3u.css`)

| Token        | Value(s)                                                                                                                                         |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Primary      | #7c3aed (violet-600); scale #ede9fe, #ddd6fe, #c4b5fd, #a78bfa, #8b5cf6, #6d28d9, #5b21b6, #4c1d95                                               |
| Accent       | #06b6d4 (cyan-500); #67e8f9, #22d3ee, #0891b2                                                                                                    |
| Neutrals     | #fff, #f9fafb, #f3f4f6, #e5e7eb, #d1d5db, #9ca3af, #6b7280, #4b5563, #374151, #1f2937, #111827, #030712                                          |
| Dark bg/text | bg #030712, text #f3f4f6 (`.dark` class on root)                                                                                                 |
| Light bg     | #fff, text #111827                                                                                                                               |
| Fonts        | Space Grotesk (display 300–700), Inter (body 300–800), JetBrains Mono (code)                                                                     |
| Radii        | lg 0.5rem (buttons), xl 0.75rem, 2xl 1rem (cards), full (pills)                                                                                  |
| Buttons      | .btn: px-5 py-2.5 text-sm font-medium radius-lg, gap-2; .btn-primary bg #7c3aed, white, glow `0 10px 15px -3px #7c3aed40`, hover shadow stronger |
| Grid pattern | 1px lines `#8b5cf60d` (violet-500/5)                                                                                                             |
| Glow orbs    | bg-primary-600/20, bg-accent-500/15, bg-primary-500/10, blur 100–120px, animate-glow-pulse                                                       |
| Gradients    | violet→cyan (headline `.text-gradient`, footer, some buttons)                                                                                    |

## Implementation notes (for the implementer)

- Tailwind `@theme`: `--color-primary-*` = violet scale, `--color-accent-*`
  = cyan scale; use `bg-primary-600`, `text-accent-500` etc. via Tailwind
  classes per conventions.
- Google Fonts `<link>` in `index.html`: Space Grotesk, Inter, JetBrains
  Mono (exact weights from the demo's fonts.googleapis.com link).
- Interactive pieces (each a small hook, no deps):
  - Typewriter: cycle phrases in the hero accent span.
  - Count-up: IntersectionObserver-triggered number animation for the
    stats strip.
  - Carousel: testimonial slides with prev/next + dot indicators.
  - Accordion: FAQ single-open (or independent) expand/collapse with
    aria-expanded.
  - Billing toggle: switch prices between monthly and annual (Pro $49 →
    billed annually $468/year; Enterprise $299 → $2868/year; Free stays
    $0 with "Billed annually ($0/year)").
  - Scroll reveal: fade-in-up on `[data-animate]` elements.
- Code windows: static pre/code blocks with token spans for syntax color —
  do NOT copy the demo's code verbatim; paraphrase with the same shape
  (import, init client, generate, print).
- Placeholders: `picsum.photos/seed/sentient-<n>/<w>/<h>` for use-case
  card images and testimonial avatars.
- Icons: lucide-react (nav logo mark, capability tiles, socials, arrows,
  chevrons).

## TODO (prep stream does NOT implement)

- [ ] Implementer: copy simplest existing app → `apps/sentient`
- [ ] Implementer: write tests (red) per spec scenarios, then
      implementation (green) — 100% coverage
- [ ] Implementer: `scripts/verify-app.sh sentient` until green
- [ ] Implementer: mark `[~]` → `[x]` in TEMPLATES.md + surge URL,
      `npm run readme:status`, PR + immediate squash merge
