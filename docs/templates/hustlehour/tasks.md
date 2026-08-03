# Hustlehour (Colorlib The Hustle Hour) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cloud PR (#7) awaits review.
> Implementation ships later on `feat/template-hustlehour`.

## Design notes (replication findings)

- **Original:** ColorLib "The Hustle Hour" — podcast / interview show
  landing template
  (source: https://colorlib.com/wp/template/the-hustle-hour/).
- **Demo DOM analyzed:** https://hustlehour-colorlib.pages.dev/ (HTTP 200,
  full rendered DOM + `/_astro/Base.*.css` (66KB, minified) extracted;
  pages.dev slug is `hustlehour` per
  `preview.colorlib.com/assets/js/products.js`;
  `https://preview.colorlib.com/theme/the-hustle-hour/` returns 404 —
  preview portal loads demos from `<slug>-colorlib.pages.dev`).
- **Visual design (from DOM + CSS tokens):** bold dark podcast landing,
  **red** brand color (`#dc2626` red-600 scale), Outfit typography,
  near-black (`#030712`/`#111827`) hero and section backgrounds, rounded
  cards, pill buttons, light FAQ section for contrast, full dark mode.
- **Structure (1:1, section order):**
  1. Sticky navbar (dark blur): "The Hustle Hour" logo + Episodes, About,
     Sponsors, Newsletter, Sponsorships, Blog, Release Notes, Contact +
     "Listen Now".
  2. Hero (`bg-gray-950`): "Stories That Inspire Action" + "Listen Latest
     Episode" / "Subscribe" + platform links (Spotify, Apple Podcasts,
     Google Podcasts, YouTube).
  3. Featured episode: "Building a $100M Company with No Funding" with
     Sarah Chen, Founder of TechFlow.
  4. Recent Episodes: 6 cards (bootstrapped $100M, product-market fit,
     side project → IPO, remote teams, AI in business, hypergrowth
     culture).
  5. Host: "Meet Your Host" — Alex Morgan + quote.
  6. Sponsors: "Proudly Supported By" — 4 cards (LinearB, Notion, Vercel,
     Lemon.io) + "Want to sponsor the show? Get in touch".
  7. Testimonials: "What Listeners Say".
  8. Newsletter: "Never Miss an Episode" — subscribe ("Join 50,000+
     subscribers").
  9. FAQ: "Frequently Asked Questions" — 5 accordions (guest booking,
     release frequency, where to listen, sponsorships, topic suggestions).
  10. Contact: "Let's Connect" — message form + "Send Message" + email
      hello@thehustlehour.com.
  11. Footer (`bg-gray-950`): blurb + Podcast / Follow / More + copyright.
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **red scale** — #dc2626 primary (dark: #b91c1c, #991b1b;
    light: #ef4444, #f87171, #fca5a5, #fecaca, #fee2e2, #fef2f2); dark
    theme: hero/episodes/footer bg-gray-950, host/testimonials bg-gray-900.
  - Neutrals: #030712, #111827, #1f2937, #374151, #6b7280, #9ca3af,
    #d1d5db.
  - Fonts: **"Outfit"** (Outfit, system-ui, sans-serif) via Google Fonts.
  - Shapes: rounded cards, pill buttons; section padding `py-20 lg:py-28`.
- **Recreation name:** Hustlehour (shortened from "The Hustle Hour"). App
  folder `apps/hustlehour`, package `@free-react-templates/hustlehour`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/hustlehour-<n>/<w>/<h>`); lucide-react icons (Mic,
  Play, Radio, Podcast, Users, Sparkles, Star, ChevronDown, Mail, Send,
  Headphones, Music2, Youtube, Rss); Outfit via Google Fonts; repo-standard
  Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-hustlehour/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/hustlehour` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/hustlehour`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-hustlehour`, open PR (source template, preview
      URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
