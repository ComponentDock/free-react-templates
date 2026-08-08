# Hush (ColorLib Serenity) — Tasks & Design Notes

> Prep artifact (prep-stream, 2026-08-08). Implementation ships later on
> `feat/template-hush` by an implementer stream. This replaces the stale
> FORBIDDEN-name prep at `openspec/specs/template-serenity/` +
> `docs/templates/serenity/` (both deleted — source name reuse is against
> the monorepo naming mandate).

## Source

- ColorLib "Serenity" — spiritual retreat center landing template
  - Template page: https://colorlib.com/wp/template/serenity/
  - Live demo: https://serenity-colorlib.pages.dev/ (HTTP 200; the
    `preview.colorlib.com/theme/serenity/` portal URL returns 404 — the
    preview portal now serves demos from `<slug>-colorlib.pages.dev`,
    confirmed via `preview.colorlib.com/assets/js/products.js`).
  - Screenshot in TEMPLATES.md:
    https://colorlib.com/wp/wp-content/uploads/sites/2/serenity-template-1770211390595.jpg
    (2400×1892 AVIF, fetched HTTP 200, matches live demo hero).
- New name: **Hush** (single lowercase word, no collision with `apps/` or
  `openspec/specs/`).

## Design tokens (from /_astro/Base.DWVOSce0.css + demo DOM)

- Brand sage/forest green: #4d5b4a (primary-600); scale: primary-100
  #e3e7e2, primary-200 #c6cfc4, primary-300 #a2b09f, primary-400 #7d8f79,
  primary-700 #3f4a3d, primary-900 #2d332c.
- Warm stone neutrals: stone-50 #faf9f7, stone-100 #f3f1ec, stone-200
  #e6e1d8, stone-900 #594d44 (footer/dark bands); earthy browns #6c5d51,
  #847160 for small details.
- Fonts: Cormorant Garamond (headings, 300–700) + Inter (body, 300–700)
  via Google Fonts.
- Buttons: rounded-full pills; primary = bg #4d5b4a, white text,
  px-6 py-3, soft shadow (#4d5b4a33), hover #3f4a3d; secondary = 2px
  border #4d5b4a, transparent bg; ghost on dark = border-white/30.
- Sections: py-20 lg:py-28; alternating white / stone-100; dark bands
  bg-primary-900; footer bg-stone-900; eyebrows uppercase text-xs
  tracking-widest (text-primary-300 on dark, text-primary-600 on light).
- Dark mode: `.dark` class on root; bands invert (stone-100 → stone-900),
  text inverts; toggle in header (id theme-toggle / theme-toggle-mobile).

## Implementation tasks (for the implementer stream)

1. Scaffold `apps/hush` (copy simplest existing app; package
   `@free-react-templates/hush`; register in workspaces + lockfile).
2. `@theme` tokens: sage primary scale + stone neutrals (Tailwind 4).
3. Navbar: fixed, transparent-over-hero → solid on scroll; logo mark
   (round primary-600 icon + "Hush" serif wordmark + tagline), anchor
   links (Retreats, Spiritual Direction, Sacred Spaces, Resources,
   Connect), "Book a Retreat" pill, dark-mode toggle, mobile menu
   (aria-expanded).
4. Hero: full-bleed seeded image (picsum seed hush-1), quote "Be still,
   and know that I am God." Psalm 46:10, H1 "Find Rest for Your Soul",
   subtext, "Explore Retreats" + "Begin Spiritual Direction" CTAs,
   "Enter the Stillness" scroll cue.
5. Daily Office: bg-primary-900 band, "A Rhythm of Prayer", 4 cards
   (Lauds 6:30 AM / Midday Prayer 12:00 PM / Vespers 5:30 PM / Compline
   8:30 PM).
6. About: stats row (35+ Years, 12,000+ Guests, 80 Acres, 4 Offices),
   "Our Story" / "A Place Set Apart" narrative + image.
7. Practices: stone-100 band, 6 cards (Centering Prayer, Lectio Divina,
   Walking Meditation, Labyrinth Walk, Examen, Silent Sitting).
8. Retreats: 3 cards; featured Spring Silence Retreat (badge + "4 spots
   left", Apr 14–19 · 5 nights, with Sr. Margaret Anne, $795),
   Introduction to Contemplative Prayer (Mar 7–9 · 2 nights, $495),
   Day of Rest ($95).
9. Sacred Spaces: 4 cards (The Chapel, The Labyrinth, Prayer Garden,
   Forest Trails).
10. Spiritual Direction: stone-100 band, 4 director cards (Sr. Margaret
    Anne OSB, Fr. David Brennan, Dr. Sarah Chen, Brother Thomas) with
    portrait/name/role/specialties/availability.
11. Testimonials: 3 quote cards (Michael Torres, Jennifer Walsh, + one
    more) with context lines.
12. Closing CTA: "Begin Your Journey Inward" + Book a Retreat / Contact
    Us buttons.
13. Footer: prayer-times strip, brand blurb + contact, EXPERIENCE /
    EXPLORE / CONNECT columns, bottom bar with scripture quote.
14. TDD 100% coverage: Navbar, Hero, DailyOffice, About, Practices,
    Retreats, Spaces, Directors, Testimonials, CTA, Footer, dark-mode,
    mobile menu.
15. Verify: `scripts/verify-app.sh hush`; then PR feat/template-hush →
    merge → TEMPLATES.md `[x]` + surge URL + `npm run readme:status`.

## Fidelity notes

- Section order and copy kinds match the demo 1:1; all copy paraphrased.
- Photos → `https://picsum.photos/seed/hush-<n>/<w>/<h>`; icons →
  lucide-react; fonts via Google Fonts `<link>` in index.html.
- Multi-page demo links collapse to section anchors/presentational links.
- Brand wordmark "Stillwater Retreat" → "Hush" (+ tagline "A Sanctuary
  for the Soul").
