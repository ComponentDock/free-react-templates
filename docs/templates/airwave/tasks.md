# Airwave (ColorLib The Hustle Hour) — Tasks & Design Notes

> Prep artifacts committed on `main` (prep stream). Implementation ships
> later on `feat/template-airwave` (implementer stream).

## Design notes (replication findings)

- **Original:** ColorLib "The Hustle Hour" — podcast / interview-show landing
  template (source: https://colorlib.com/wp/template/the-hustle-hour/).
- **Demo DOM analyzed:** https://hustlehour-colorlib.pages.dev/ (HTTP 200,
  full rendered DOM + `/_astro/Base.fzo6El3r.css` (66KB, minified)
  extracted; pages.dev slug is `hustlehour` per
  `preview.colorlib.com/assets/js/products.js`;
  `https://preview.colorlib.com/theme/the-hustle-hour/` returns 404 —
  preview portal loads demos from `<slug>-colorlib.pages.dev`).
- **Visual design (screenshot + live render):** bold dark podcast landing —
  near-black (`#030712`) hero, red brand (`#dc2626`), red→purple gradient
  headline ("Stories That Inspire Action") and newsletter card, Outfit
  typography, pill buttons, `rounded-2xl` bordered cards, alternating
  gray-950/gray-900 dark bands with a light featured-episode band, stats row
  with red numbers, full dark-first mode (`<html class="dark">`).
- **Structure (1:1, section order):**
  1. Preloader (fixed, white/gray-950, hides on load).
  2. Sticky navbar (dark blur `bg-gray-950/80 backdrop-blur-lg`, border-b):
     "The Hustle Hour" → brand **Airwave** + Episodes, About, Sponsors,
     Newsletter, Sponsorships, Blog, Release Notes, Contact + red pill
     "Listen Now"; dark-mode toggle; mobile menu (aria-expanded).
  3. Hero (`bg-gray-950`): badge "New Episode Every Tuesday" (red pill),
     H1 "Stories That Inspire Action" (2nd line red→purple gradient text),
     blurb, "Listen Latest Episode" (red pill) + "Subscribe" (outline),
     "Available on:" platform pills (Spotify, Apple Podcasts, Google
     Podcasts, YouTube), stats row 500+ / 2M+ / Top 50 / 4.8 (red values).
  4. Featured episode band (LIGHT `bg-gray-50 border-y`): eyebrow "Latest
     Episode", EP. 247 · Feb 18, 2026 · 58 min, "Building a $100M Company
     with No Funding" with Sarah Chen (TechFlow), description, tags
     Startup/Bootstrapping/Growth, round red play button.
  5. Recent Episodes (`#episodes`, `bg-gray-950`): 6 cards (EP number, date
     - duration, title, guest, blurb, round play btn; alternating
       bg-gray-900/30 & bg-gray-950), "View All Episodes".
  6. Host (`#about`, `bg-gray-900`): "Meet Your Host" — Alex Morgan, bio,
     quote "Every founder has a story worth sharing."
  7. Sponsors (`#sponsors`, `bg-gray-950`): "Proudly Supported By" — 4 cards
     (LinearB, Notion, Vercel, Lemon.io + tagline + Learn More); "Want to
     sponsor the show? / Get in touch".
  8. Testimonials (`bg-gray-900`): "What Listeners Say" — 6 quote cards
     (carousel w/ dots); 3 source quotes mention leftover "EchoWave" →
     paraphrase to Airwave.
  9. Newsletter (`#newsletter`): red→purple gradient card (`from-primary-600
to-accent-600`, blur circles) "Never Miss an Episode" + email +
     Subscribe + "Join 50,000+ subscribers."
  10. FAQ (`#faq`, light `bg-white dark:bg-gray-950`): 5 accordions (guest
      booking, release frequency, where to listen, sponsorships, topics).
  11. Contact (`#contact`, `bg-gray-950`): "Let's Connect" — Name/Email/
      Subject/Message + Send Message; email hello@thehustlehour.com (→
      original address for Airwave).
  12. Footer (`bg-gray-950`, border-t): blurb + Podcast (Guests, Clips) /
      Follow (RSS Feed) / More (Sponsor, Merch) + Apple platform link +
      © 2026 + Privacy Policy / Terms of Service / Style Guide.
  - Extras: skip-to-content, cookie banner (Decline/Accept All), back-to-top,
    scroll-reveal (`data-animate="fade-in-up"`), dark-mode toggle
    (localStorage-persisted), mobile menu.
- **Design tokens extracted from the CSS + DOM:**
  - Brand primary = **red scale**: 50 `#fef2f2` … 400 `#f87171`, 500
    `#ef4444` (hover/gradient start), 600 `#dc2626` (buttons), 700
    `#b91c1c`, 900 `#7f1d1d`.
  - Accent = **purple**: 500 `#a855f7` (gradient text end), 600 `#9333ea`
    (newsletter gradient end). Gradients: headline text
    `linear-gradient(to right, #ef4444, #a855f7)` clip-text; newsletter card
    `bg-gradient-to-r from-primary-600 to-accent-600`.
  - Neutrals: gray-950 `#030712`, gray-900 `#111827`, gray-800 `#1f2937`,
    gray-700 `#374151`, gray-600 `#4b5563`, gray-500 `#6b7280`, gray-400
    `#9ca3af`, gray-300 `#d1d5db`, gray-200 `#e5e7eb`, gray-50 `#f9fafb`.
  - Font: **"Outfit"** (300–800) via Google Fonts.
  - Buttons: pill `rounded-full`; primary `bg-primary-600 text-white px-6
py-3 text-sm font-medium`, hover `bg-primary-500` + shadow
    `shadow-primary-600/25→/30`, focus ring-2 ring-primary-500; outline
    "Subscribe" = dark bordered.
  - Cards: `rounded-2xl` (episodes/sponsors/testimonials), `rounded-3xl`
    (newsletter card), `border border-gray-800`, fills `bg-gray-900/30–50`;
    play buttons `h-12 w-12`/`h-14 w-14 rounded-full`.
  - Section rhythm `py-20 lg:py-28`; featured band `py-16 lg:py-20 border-y`.
- **Recreation name:** Airwave (single lowercase word, evokes podcast/radio
  broadcast waves; NO collision with `apps/` or existing spec folders).
  App folder `apps/airwave`, package `@free-react-templates/airwave`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/airwave-<n>/<w>/<h>`); lucide-react icons (Play, Mic,
  Radio, Podcast, Users, Star, ChevronDown, Mail, Send, Headphones, Music2,
  Rss, Menu, X, Sun, Moon, Sparkles — VERIFY exports); Spotify/Apple/Google/
  YouTube marks as inline SVG (lucide-react removed brand icons); Outfit via
  Google Fonts; repo-standard Navbar (dark-mode toggle) + Footer chrome;
  newsletter + contact forms client-side validated with success states; FAQ
  accordion; testimonial carousel with dots (or static grid if carousel is
  judged out of scope — dots ARE in the source DOM, prefer carousel).
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-airwave/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/airwave` (copy the section-rich landing app pattern —
      Sooth or Sapphire; rename package to `@free-react-templates/airwave`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Gate: `scripts/verify-app.sh airwave` (typecheck → lint → 100%
      coverage tests → build) + `npm run spec:validate`.
- [ ] Push `feat/template-airwave`, open PR (source template, preview URL,
      design tokens, what differs), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main), `npm run readme:status`.
