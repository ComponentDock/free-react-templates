# Forgefit (ColorLib Ironforge) — Tasks & Design Notes

> Recreation of ColorLib "Ironforge"
> (https://colorlib.com/wp/template/ironforge/) under the NEW name
> **Forgefit** (forge/iron + fitness), per the monorepo naming mandate
> (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Ironforge" — fitness center / gym Astro template.
- **Demo DOM analyzed:** https://ironforge-colorlib.pages.dev/ (HTTP 200,
  ~110 KB HTML + `/_astro/Base.DjIvZVUl.css` ~64.6 KB parsed for tokens;
  the official `https://preview.colorlib.com/theme/ironforge/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal).
- **Visual design (screenshot `ironforge-template-1771943626586.jpg`):**
  dark-mode fitness landing — dark gym-interior photo hero with heavy
  gradient overlay, burnt-orange (#ea580c) accents on white/orange two-tone
  headline, pill buttons, light gray sections below, Space Grotesk display
  - DM Sans body.
- **Structure (1:1, section order):**
  1. Navbar: IronForge logo, About, Programs, Schedule, Trainers, Pricing,
     Blog, Contact, dark toggle, "Join Now" pill CTA.
  2. Hero (dark photo): badge "Now Open 24/7", H1 "Push Beyond Your
     Expectations" (white + orange two-tone), blurb, buttons "Start Free
     Trial" / "View Programs" / "Watch Demo", stats row (5,000+ Members,
     50+ Classes/Week, 15+ Expert Trainers, 24/7 Access).
  3. Counters band (animated 0→N): Active Members, Weekly Classes, Expert
     Trainers, Years Open.
  4. Programs: "Training Programs for Every Goal" — 6 cards (image + title
     - blurb): Strength Training, HIIT, Yoga & Flexibility, Boxing & MMA,
       CrossFit, Personal Training.
  5. Schedule: "This Week's Classes" — Monday–Friday, 5 classes/day (time,
     class, coach, level). Copy the real schedule from the demo DOM.
  6. Trainers: "Expert Trainers" — 4 cards (photo, name, specialty, years,
     bio, Instagram/Twitter icon links): Marcus Johnson (Strength &
     Conditioning, 12 yrs), Sarah Chen (Yoga & Flexibility, 8 yrs), Diego
     Reyes (Boxing & MMA, 10 yrs), Emily Park (CrossFit & HIIT, 7 yrs).
  7. Pricing: "Choose Your Plan" — monthly/yearly toggle ("Save 20%"), 3
     tiers Basic / Pro / Elite with "Start Free Trial".
  8. Testimonials: "Real Results, Real People" — carousel, 4 slides,
     prev/next + dots.
  9. FAQ: "Frequently Asked Questions" — 5 accordions (freeze membership,
     personal training, group classes, locker rooms, guests).
  10. CTA: "Your Transformation Starts Today" + "Claim Free Week" + "Talk
      to a Trainer".
  11. Footer: brand + blurb + socials (Twitter/Instagram/YouTube), columns
      PROGRAMS / COMPANY / SUPPORT, STAY UPDATED newsletter (email +
      Subscribe), legal links (Privacy Policy, Terms of Service, Style
      Guide).
  12. Extras: cookie-consent dialog (Decline / Accept All), back-to-top
      button.

## Design tokens (from Base CSS)

- Brand: `#ea580c` (orange-600), scale `#f97316` `#fb923c` `#fdba74`
  `#ffedd5` `#c2410c`
- Neutrals: `#030712` `#111827` `#1f2937` `#374151` `#4b5563` `#6b7280`
  `#9ca3af` `#d1d5db` `#e5e7eb` `#f3f4f6` `#f9fafb` `#fff`
- Fonts: Space Grotesk (300–700) + DM Sans (400–700), Google Fonts
- Buttons: pill (fully rounded), orange primary / white on dark
- Sections: dark photo hero w/ gradient overlay, light gray-50 sections,
  dark near-black footer

## Tasks (implementer order)

- [ ] Copy simplest existing app (e.g. apps/stratos) → `apps/forgefit`,
      rename package to `@free-react-templates/forgefit` (register in
      workspace + lockfile)
- [ ] `@theme` tokens: forgefit orange scale + gray neutrals + fonts
- [ ] `index.html`: title "Forgefit — Fitness Template", Google Fonts links
      (Space Grotesk + DM Sans)
- [ ] Navbar (site name, anchor links, Join Now, dark-mode toggle)
- [ ] Hero (badge, two-tone H1, 3 CTAs, stats row, dark photo bg)
- [ ] Counters band (animated count-up)
- [ ] Programs (6 cards)
- [ ] Schedule (Mon–Fri timetable from demo DOM)
- [ ] Trainers (4 cards + social icon links)
- [ ] Pricing (toggle + 3 tiers)
- [ ] Testimonials (carousel)
- [ ] FAQ (5 accordions)
- [ ] CTA + Footer (columns + newsletter) + cookie dialog + back-to-top
- [ ] Tests first (red) per spec scenarios → implement (green) → 100%
      coverage
- [ ] `scripts/verify-app.sh forgefit` green; open PR, squash-merge
      immediately
- [ ] TEMPLATES.md: mark Ironforge line(s) `[x]` + surge URL; README status
      regen (`npm run readme:status`)

## Fidelity notes

- Match section order 1:1; paraphrase copy but keep content kinds (badge +
  headline + blurb + CTAs + stats, card title + blurb, timetable cells,
  tier name + price + features).
- Never copy assets: seeded picsum `forgefit-<n>` placeholders, lucide-react
  icons, Google Fonts only.
- The demo schedule/trainer/pricing copy is real (paraphrase OK); keep the
  5-classes-per-day Monday–Friday shape.
- Stale prep `openspec/specs/template-ironforge/` + `docs/templates/ironforge/`
  were deleted 2026-08-08 (forbidden source name) — do NOT recreate them.
