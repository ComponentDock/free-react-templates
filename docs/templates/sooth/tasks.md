# Sooth (ColorLib Serenite) — Tasks & Design Notes

> Recreation of ColorLib "Serenite"
> (https://colorlib.com/wp/template/serenite/) under the NEW name
> **Sooth** (the calm a great spa leaves you with), per the monorepo
> naming mandate (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Serenite" — luxury spa / beauty salon /
  wellness center landing template (Astro category).
- **Demo DOM analyzed:** `https://serenite-colorlib.pages.dev/` (HTTP
  200, ~86 KB HTML + `/_astro/Base.C_LwpZaO.css` ~63 KB parsed for
  tokens; the official `https://preview.colorlib.com/theme/serenite/`
  returns 404 — demo hosted on Cloudflare Pages, same pattern as
  Logitrans→Freightly / Neuralflow→Sentient / Saasify→Zenith). The
  TEMPLATES.md screenshot (`serenite-template-1771943746919.jpg`,
  HTTP 200) was checked and matches the live demo.
- **Visual design (screenshot + live render):** minimalist, airy,
  feminine luxury — soft blush/pink gradient hero, rose-pink brand
  color (#e11d48) with a gold hairline divider above the H1, elegant
  serif headings (Playfair Display) with a rose italic accent phrase,
  charcoal text on white, deep rose gradient CTA band and dark gray
  footer; pill buttons everywhere; generous whitespace.
- **Structure (1:1, section order):**
  1. Header (sticky, white/80 blur, border-b): "Serenite Spa" logo,
     links About, Services, Specialists, Gallery, Packages, Blog,
     Contact; dark toggle; "Book Now" rose pill; mobile hamburger.
  2. Hero (centered, `from-primary-50 via-white to-white` gradient):
     floating blur orbs (rose + gold), gold hairline divider
     (`h-px w-16 bg-accent-400`), H1 "Indulge in Pure <rotating rose
     italic phrase>", subtext, CTAs "Book Your Treatment" (rose pill) +
     "View Services" (outline pill) + "Watch Demo" (play icon → YouTube
     modal); stats row: 15+ Years of Excellence / 50+ Luxury Treatments
     / 5-Star Client Rated.
  3. Stats band (gray-50, border-y): animated count-up counters — 20K+
     Treatments Given, 15+ Specialists, 10+ Years Experience, 4.9
     Client Rating.
  4. Services (gray-50, id=services): "OUR SERVICES" eyebrow, H2
     "Treatments & Services"; 6 cards (icon + title + blurb + "from
     $X" + Learn More): Facial $85, Massage $95, Body $120, Hair $65,
     Nails $45, Wellness $150.
  5. Specialists (white, id=specialists): "OUR TEAM" eyebrow, H2 "Our
     Expert Team"; 4 cards: Isabella Laurent (Senior Aesthetician),
     Marcus Chen (Lead Massage Therapist), Sofia Ramirez (Hair Stylist
     & Colorist), Amara Johnson (Wellness Director) — portrait, name,
     role, specialties, "N Years Experience".
  6. Gallery (gray-50, id=gallery): "GALLERY" eyebrow, H2 "A Glimpse
     of Serenite" → reword for Sooth; 6 photos, mixed aspect ratios,
     hover zoom, clickable (lightbox): Spa Treatment Room, Relaxation
     Lounge, Luxury Skincare Products, Massage Therapy Suite, Spa
     Interior Ambiance, Facial Treatment Session.
  7. Results (white, id=results): "Transformations" eyebrow, H2
     "Visible Results"; 2 before/after comparison sliders (Facial
     Treatment, Skin Rejuvenation).
  8. Packages (white, id=packages): H2 "Signature Packages"; 3 cards
     (rounded-2xl p-8 shadow-soft bg-gray-50): Refresher $149 /
     Indulgence $249 ("Most Popular" badge) / Ultimate Retreat $449;
     feature lists with rose check icons, "Book Package" CTA.
  9. Testimonials (gray-50, id=testimonials): "TESTIMONIALS" eyebrow,
     H2 "What Our Clients Say"; carousel (arrows + dots) with 6
     slides: 5 gold stars, quote, name, role (Victoria Ellis — Regular
     Client, Jonathan P. — Anniversary Package, Camille, Michael &
     Sarah — Anniversary Package, ...).
  10. FAQ (white, id=faq): H2 "Frequently Asked Questions"; 5
      accordion items (booking lead time, pre-appointment prep, health
      conditions, gift cards, group bookings).
  11. Contact CTA (id=contact, `from-primary-600 to-primary-800`
      gradient): H2 "Give the Gift of Relaxation" + subtext; buttons
      "Purchase Gift Card" (white pill) + "Book a Visit" (white/30
      outline).
  12. Footer (gray-900): brand + blurb + socials (Instagram, Facebook,
      Pinterest); SERVICES (Facials, Massage, Body Treatments, Hair
      Salon); VISIT US (Mon-Fri 9am-8pm, Sat-Sun 10am-6pm, Beverly
      Hills CA 90210, Free Parking Available); CONNECT (Instagram,
      Facebook, Pinterest, Newsletter); STAY UPDATED newsletter (email
      pill + Subscribe); bottom bar: Privacy Policy, Terms of Service,
      Style Guide.
  - Extras: skip-to-content, cookie-consent dialog (Decline / Accept
    All), fixed back-to-top round button, scroll-reveal fade-in-up,
    parallax orbs, dark-mode toggle persisted to localStorage.

## Design tokens (from `Base.C_LwpZaO.css`)

| Token        | Value(s)                                                                                                                                  |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Primary      | #e11d48 (rose-600); scale #fff1f2, #ffe4e6, #fecdd3, #fb7185, #f43f5e, #be123c, ~#9f1239                                                  |
| Accent       | #fbbf24 (gold-400); #fde68a (200), #d97706 (600) — hairline divider, star ratings                                                         |
| Neutrals     | #fff, #f9fafb, #f3f4f6, #e5e7eb, #d1d5db, #9ca3af, #6b7280, #4b5563, #374151, #1f2937, #111827                                            |
| Dark bg/text | bg gray-950 (#030712-ish), bands gray-900, text white/gray-300 (`.dark` class on root, localStorage "theme")                              |
| Light bg     | #fff, text #111827; hero blush gradient `from-primary-50 via-white to-white`                                                              |
| Fonts        | Playfair Display (headings 400–800) + Lora (body 400–700) via Google Fonts; `.font-heading` = Playfair Display                            |
| Radii        | full (all buttons, pills), 2xl 1rem (cards), lg 0.5rem (small controls)                                                                   |
| Buttons      | primary bg #e11d48 + white text + hover:bg-primary-700; secondary outline (border-gray-300); ghost on gradient = border-2 border-white/30 |
| Cards        | `rounded-2xl p-8 shadow-soft` (0 4px 16px -4px rgb(0 0 0 / 0.1)), hover `shadow-soft-lg`; package cards `bg-gray-50`                      |
| Eyebrow      | uppercase text-sm tracking-wider text-primary-600 (OUR SERVICES / OUR TEAM / GALLERY / TESTIMONIALS)                                      |
| Headings     | `font-heading text-3xl sm:text-4xl font-bold tracking-tight text-gray-900` (dark: text-white)                                             |
| Icons        | lucide-react: check marks `text-primary-600` (feature lists), stars `text-accent-400`, arrows, play, socials                              |
| Sections     | py-20 lg:py-28; alternating white / gray-50; stats band border-y gray-200; CTA band rose gradient                                         |

## Implementation notes (for the implementer)

- Tailwind `@theme`: `--color-primary-*` = rose scale (brand #e11d48),
  `--color-accent-*` = gold scale (#fbbf24); use `bg-primary-600`,
  `text-primary-600`, `bg-accent-400` via Tailwind classes per
  conventions.
- Google Fonts `<link>` in `index.html`: Playfair Display (400–800) +
  Lora (400–700).
- Interactive pieces (each a small hook, no deps):
  - Count-up stats: animate from 0 to target (20K+ → 20000 formatted,
    4.9 with one decimal) on scroll into view.
  - Hero accent word rotation: cycle rose italic phrases ("Calm &
    Balance", "Peace & Harmony", "Luxury & Serenity") with a fade.
  - Testimonial carousel: prev/next arrows + dot indicators,
    `aria-label` on controls.
  - FAQ accordion: `aria-expanded` + chevron rotation, one-open-at-a-
    time optional.
  - Video modal: Watch Demo → dialog with YouTube iframe embed (close
    button, Escape).
  - Before/after slider: pointer-driven comparison (drag handle) or a
    static two-image pair with labels if too heavy — keep it
    dependency-free.
  - Cookie consent dialog: Decline / Accept All, dismisses on choice.
  - Back-to-top: appears after scroll, smooth-scrolls to top.
  - Mobile menu: hamburger with `aria-expanded`, toggles the mobile
    link panel.
  - Dark-mode toggle: `.dark` on `document.documentElement`, persist
    to localStorage ("theme"), same pattern as other apps.
- Demo has separate pages (About/Services/Pricing/Blog/Contact): in the
  single-page recreation keep them as section anchors or presentational
  links — do NOT build extra routes.
- Placeholders: `picsum.photos/seed/sooth-<n>/<w>/<h>` for team
  portraits, gallery photos, before/after images, hero visuals.
- Icons: lucide-react (logo mark, service icons, check marks, stars,
  arrows, play, socials, menu, close, sun/moon).
- Copy: paraphrase the demo's text, keep the same _kind_ of content
  (H1 + subtext + 3 CTAs, card title + blurb + price, tier name +
  price + feature list + CTA, FAQ Q/A pairs).

## TODO (prep stream does NOT implement)

- [ ] Implementer: copy simplest existing app → `apps/sooth`
- [ ] Implementer: write tests (red) per spec scenarios, then
      implementation (green) — 100% coverage
- [ ] Implementer: `scripts/verify-app.sh sooth` until green
- [ ] Implementer: mark `[~]` → `[x]` in TEMPLATES.md + surge URL,
      `npm run readme:status`, PR + immediate squash merge
