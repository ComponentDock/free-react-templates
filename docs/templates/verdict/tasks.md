# Verdict (ColorLib Legaledge 2) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-verdict`.

## Source mapping

- **ColorLib item:** "Legaledge 2" (TEMPLATES.md line 153, `- [ ]` unchecked).
- **Source URL:** https://colorlib.com/wp/template/legaledge-2/
- **Preview URL:** https://preview.colorlib.com/theme/legaledge-2/ — **404**
  (confirmed 2026-08-08). The ColorLib preview portal serves this template
  from `<slug>-colorlib.pages.dev` (verified in
  `preview.colorlib.com/assets/js/products.js`: `legaledge-2` →
  `legaledge-colorlib.pages.dev/`). Live demo used as the DOM reference:
  https://legaledge-colorlib.pages.dev/ (HTTP 200, ~64 KB, Astro build with
  Tailwind utility markup + compiled `/_astro/Base.C-O-Xrhm.css`).
- **TEMPLATES.md screenshot:** `legaledge-template-1770211287987.jpg`
  (2400×1892) — reviewed via browser vision.
- **NEW name:** Verdict → `apps/verdict`, package
  `@free-react-templates/verdict`. Do NOT use "legaledge" anywhere as the app
  name (forbidden — source name). This prep REPLACES the stale prep folders
  `openspec/specs/template-legaledge/` and `docs/templates/legaledge/`
  (deleted with this commit — they used the forbidden source name).

## Reference research (done — do not redo)

### Screenshot (verified via browser vision, 2026-08-08)

Premium, trustworthy law-firm landing. Deep navy hero (`#102a43`) over a dark
blurred courtroom/library background image; classic gold (`#c9a227`) accents:
the italic serif word "Excellence", the "Schedule Consultation" arrow button,
the navbar "Free Consultation" button, and the form submit button. Thin dark
contact strip on top (phone, email, hours); stark white navbar below it
(shield logo + "Morrison Law", centered links Home/About/Practice
Areas/Attorneys/Contact, gold CTA right). Split hero: left = pill outline
badge "Serving clients since 1985", big serif headline "Trusted Legal"

- gold-italic "Excellence", subtext, gold "Schedule Consultation →" + white
  outline "Our Practice Areas", trust icons (AV Rated shield, 24/7 Available
  clock); right = light semi-transparent (glassmorphism) "Free Case Evaluation"
  card with Name / Email Address / Phone Number / Select Practice Area /
  message textarea + large gold "Request Free Consultation" button + privacy
  disclaimer. "SCROLL" indicator bottom-center.

### Structure (1:1, from live demo DOM — section order)

1. Top bar — `(555) 234-5678` · `contact@morrisonlaw.com` · `Mon - Fri:
8:00 AM - 6:00 PM`.
2. Navbar — white, firm name + Home/About/Practice Areas/Attorneys/Contact +
   gold "Free Consultation"; mobile hamburger (`#mobile-menu-button` toggles
   `#mobile-menu` `.hidden`).
3. Hero — `bg-primary-900 min-h-screen pt-32 lg:pt-40`, badge "Serving
   clients since 1985", H1 "Trusted Legal Excellence", subtext, buttons
   "Schedule Consultation" (solid gold) / "Our Practice Areas" (white
   outline), trust indicators, right-side "Free Case Evaluation" form card
   (glassmorphism) + "Request Free Consultation".
4. `id="services"` (`bg-gray-50 py-20 lg:py-28`) — "What We Do" eyebrow +
   "Practice Areas" heading + 6 cards: Corporate Law (Mergers &
   Acquisitions, …), Litigation, Real Estate, Family Law, Estate Planning,
   Criminal Defense — sub-services + "Learn More".
5. (`bg-white`) — stat "1985 Year Founded" + "About Our Firm" eyebrow +
   "A Legacy of Legal Excellence" + 4 value cards (Proven Track Record,
   Client-Focused Approach, Industry Recognition, Transparent
   Communication) + stats (Years of Excellence, Client Satisfaction, Expert
   Attorneys).
6. (`bg-gray-50`) — "Our Legal Team" eyebrow + "Meet Our Attorneys" + 4
   cards: James Morrison (Founding Partner), Sarah Chen (Managing Partner),
   Michael Thompson (Senior Partner), Elena Rodriguez (Partner).
7. (`bg-primary-900`) — "Client Testimonials" eyebrow + "What Our Clients
   Say" + 4 quotes (Robert Williams — CEO TechVenture Inc., Jennifer
   Martinez — Owner Martinez Properties, …) + same-section "Recognized By
   Leading Legal Publications" strip: Super Lawyers Top 100, Best Lawyers
   2024, Martindale-Hubbell AV Preeminent.
8. (`bg-white`) — "Ready to Discuss Your Legal Matter?" + "Schedule a free,
   confidential consultation…" + gold "Request Free Consultation" + bullets
   (Free initial consultation / No obligation / completely confidential /
   in-person or virtual).
9. Footer — firm blurb + Practice Areas / Quick Links / Contact Us columns +
   legal disclaimer + `© 2026` copyright.

### Design tokens (extracted from compiled stylesheet 2026-08-08)

- Navy primary: `#102a43` (bg-primary-900 — hero/testimonials/CTA bands),
  `#243b53` (primary-800), `#334e68`, `#0a1929` (darkest).
- Gold accent: `#c9a227` (buttons/CTAs), `#a78419`, `#8a6914` (gold text on
  light), `#facc15` (light gold).
- Neutrals: white; `#f0f4f8` (gray-50 bands); `#d9e2ec`, `#bcccdc`; black.
- Fonts: Playfair Display 400–700 (serif display) + Inter 400–700 (body)
  via Google Fonts.
- Buttons: rounded-full pills; solid gold primary; white outline secondary.
- Radii: rounded-lg / rounded-xl cards; rounded glassmorphism form card.
- Section backgrounds: white ↔ gray-50 alternation, navy bands (hero,
  testimonials), dark footer.

## Implementation checklist (for the implementer stream)

- [ ] Scaffold `apps/verdict` from the simplest existing app; package
      `@free-react-templates/verdict`; `npm install` at root; grep
      `package-lock.json` for `free-react-templates/verdict`; keep
      `injectUiSource()` in vite.config.ts
- [ ] `@theme` tokens in index.css: navy scale (#102a43 core) + gold scale
      (#c9a227 core); Playfair Display + Inter font links in index.html
- [ ] Components: TopBar, Navbar, Hero (with EvaluationForm), PracticeAreas,
      Legacy, Attorneys, Testimonials (with Recognition), Cta, Footer
      (repo-standard Navbar dark toggle + Footer chrome)
- [ ] EvaluationForm: zod schema + react-hook-form, per-field errors, submit
      blocked until valid; "Request Free Consultation" submit
- [ ] Placeholders: `picsum.photos/seed/verdict-<n>/<w>/<h>` (attorney
      photos, hero background if needed); lucide-react icons (Shield, Clock,
      Phone, Mail, Scale, Gavel, Award, Users, Quote, ArrowRight)
- [ ] Dark mode: `dark:` variants on gray bands per demo
- [ ] Tests first (TDD, 100% coverage): one describe per component,
      scenario-style its mirroring spec Gherkin
- [ ] `scripts/verify-app.sh verdict` green; PR description must state:
      source template Legaledge 2, preview URL + pages.dev fallback, design
      tokens, renames, placeholders
- [ ] After merge: TEMPLATES.md line 153 `[ ]`→`[x]` + surge URL + `npm
  run readme:status`; conventional commit `feat: Verdict — law firm
  template (ColorLib Legaledge 2)`
