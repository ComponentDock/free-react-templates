# Bistro (ColorLib Allfood) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Bistro** (NEW name —
> the ColorLib source keeps its name "Allfood"). Implementation ships on
> `feat/template-bistro` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Allfood" — free restaurant website template
  (source: https://colorlib.com/wp/template/allfood/). TEMPLATES.md row:
  line 330, **Bootstrap (216)** category.
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-09):**
  `https://preview.colorlib.com/theme/allfood/` (HTTP 200, 49KB) +
  stylesheet `assets/css/style.css` (58KB). Screenshot
  (`allfood-free-template.jpg`, 1200×946) browser-verified 2026-08-09.
- **Structure observed (1:1):** sticky header (logo left; nav Home / About /
  Menu / Blog ▾ [Blog Details, Element] / Contact; outlined "Order Online"
  right) → hero slider (photo backdrop h1_hero.png, min-height 1080px;
  orange kicker "Discover Your Teste" [sic] + H1 "We belive good food offer
  great smile" [sic] ~87px + "Resurvation" [sic] orange CTA; 2 slides,
  arrows + dots) → about-low (kicker "About Our Restaurant", H2 "We Provide
  Good Food For Your Family!", caption paragraphs, icon+caption list, chef
  photo) → gallery (header band on section_bg01.png: "Our Offerd Menu" [sic]
  / "Some Trendy And Popular Courses Offerd" [sic]; 10-tile mosaic big
  (730px) + small (365px) alternating; hover overlay rgba(11,14,13,0.702)
  with orange "Delicious Food" span + white H4) → about-area2 (same H2 +
  pera-top 500 / pera-bottom 300) → booking-area (section_bg04.png; "Book A
  Table"; name/email/date/time/person select/Book Now) → our-services
  ("Servicees We Offer" [sic] / "Our Best Services"; 3 cards: Best Chef,
  Quality Food, Perfect Cook) → about-area3 subscribe (section_bg03.png;
  pill search-box radius 50px, 60px input + orange Subscribe btn) →
  blogs-area ("Our New Blog News" / "Our Recnet News" [sic]; 3 cards, blog-cap
  #f7f9f8 radius 5px absolute bottom -63px width 94%, hover → #ff5600) →
  footer-area (section_bg02.png; Navigation / Useful Links / Instagram grid /
  social / copyright).
- **Design tokens:** brand orange **#ff5600** (buttons, kickers, nav hover,
  gallery/blog hovers, date badge), hover **#e74d00**; headings **#212025**;
  body **#10285d** w/ section overrides to #212025; fonts **Josefin Sans**
  (headings) + **Poppins** (body) via Google Fonts; `.btn` solid orange
  radius 6px padding ~27px 44px; `.border-btn` outline orange radius 5px;
  section-padding30 = 195px/140px desktop; section-tittle H2 49px weight 600.
- **Design approach:** light theme, orange accents, photo backdrops on
  gallery-top/booking/subscribe/footer + hero. Paraphrase the original's
  typos ("belive"/"believe", "Resurvation"→"Reservation", "Recnet"→"Recent",
  "Teste"→"Taste", "Offerd"→"Offered", "Servicees"→"Services").
- **Placeholders:** seeded picsum — `bistro-hero`, `bistro-chef`,
  `bistro-dish-<n>` (n 1..10, 600/730 big + 600/365 small), `bistro-kitchen`,
  `bistro-blog-<n>` (n 1..3), backdrop seeds (`bistro-bg-booking`,
  `bistro-bg-subscribe`, `bistro-bg-footer`) or light tints.
- **Icons:** lucide-react — `UtensilsCrossed`, `ChefHat`, `Flame`,
  `Calendar`, `Clock`, `Users`, `ArrowRight`, `Instagram`, social icons.

## Implementation tasks

1. **Scaffold** — `apps/bistro` from the simplest existing app; rename
   package to `@free-react-templates/bistro`; register in root
   `package.json` workspaces + lockfile (implementer handles lockfile, prep
   never touches it).
2. **Theme tokens** — add `#ff5600` / `#e74d00` / `#212025` / `#f7f9f8` to
   `@theme`; Josefin Sans + Poppins `<link>` in `index.html`.
3. **Components** (per section, TDD — tests first):
   - `Header` — sticky, logo, nav w/ Blog dropdown, Order Online outline
     button, mobile toggle (`aria-expanded`).
   - `HeroSlider` — 2 slides, seeded backdrop, kicker/H1/CTA, auto-rotate +
     arrows + dots, `aria-live`.
   - `About` — kicker, H2, paragraphs, icon+caption list, photo.
   - `Gallery` — header band + 10-tile mosaic (big/small alternating), hover
     overlay captions, `focus-within`.
   - `AboutSecond` — H2 + pera-top/pera-bottom + photo.
   - `BookingForm` — name/email/date/time/person select/Book Now, inline
     validation, presentational.
   - `Services` — 3 cards (Best Chef / Quality Food / Perfect Cook).
   - `Subscribe` — pill form + validation.
   - `BlogSection` — 3 cards w/ overlapping caption, orange hover fill.
   - `Footer` — Navigation / Useful Links / Instagram grid / social /
     copyright.
4. **Compose** `App`/page in reference order; wire sticky header.
5. **Verify** — `scripts/verify-app.sh bistro` (typecheck + lint + vitest
   100% coverage + build), then PR → immediate squash merge per pipeline.
6. **Ship bookkeeping** — mark Allfood `[~]`→`[x]` (line 330) + surge URL +
   `npm run readme:status`; PR description must list source template,
   preview URL, tokens, typo paraphrases, placeholder images.
