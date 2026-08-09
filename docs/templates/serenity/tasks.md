# Serenity (ColorLib Energen) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Implementation ships later on
> `feat/template-serenity` (or as claimed by an implementer stream).

## Design notes

- **Original:** ColorLib "Energen" — free spa & beauty website template
  (source: https://colorlib.com/wp/template/energen/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/energen/`
  (HTTP 200, 55.6KB) + stylesheet `css/style.css` (74.3KB). Full rendered
  DOM extracted; structure below is from the DOM + CSS tokens (re-verified
  2026-08-09).
- **Structure observed (1:1):** navbar (Home/About/Treatments/Specialists/
  Pricing/Blog/Contact) → hero ("Spa & Beauty Center") → intro ("Benefits
  of Doing Spa & Massage" + Book Your Treatment / Great Gift Packages /
  Special Offer & Deal) → services (bg-light: Aromatherapy, Skin Care,
  Herbal Spa, Body Massage) → treatments (Salt & Aroma, Hydro, Hot Stone,
  Aroma) → therapies (bg-light: Spa/Massage Therapies — Relaxation,
  Athlete, Thai, Rose) → pricing (Year/Monthly/Weekly Cards — "Enjoy All
  The Features") → testimony ("Successful Stories") → counter band →
  blog ("Recent Posts": "Is wellness the new luxury") → gallery ("See the
  latest photos") → footer (Popular Links / Quick Links / "Have a
  Questions?").
- **Design tokens:** brand gold **#d9bf77** (buttons, accents, headings) +
  dark **#212529** text; muted body **#a6a6a6**; light **#f8f9fa**/`bg-light`
  bands; body font **Open Sans** (18px/300/1.8) via Google Fonts; hero h1
  **Prata** serif (40px, uppercase, letter-spacing 15px); Ionicons icons
  (replace with lucide-react).
- **Recreation name:** Serenity. App folder `apps/serenity`, package
  `@free-react-templates/serenity`.
- **Design approach:** light theme with gold accents; hero = seeded picsum
  photo + headline; intro cards; services with lucide icons; treatments
  grid; therapies cards; pricing cards; testimony band; counter band; blog
  cards with seeded photos; gallery grid; footer with link columns; all
  images picsum-seeded (`picsum.photos/seed/serenity-N/w/h`); Google Fonts
  via `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/aurora` (multi-section landing with
  Navbar/Hero/Sections/Footer structure) — the closest existing multi-section
  app; adapt patterns from the 404 apps' Navbar/SocialLinks.

## Tasks (implementation todo)

- [ ] `apps/serenity` scaffold (copy simplest multi-section app, rename
      package to `@free-react-templates/serenity`, `npm install` at root so
      lockfile registers the workspace).
- [ ] `src/index.css` — `@theme` tokens: brand gold #d9bf77, ink #212529,
      muted #a6a6a6, light #f8f9fa; Google Fonts link (Open Sans + Prata)
      in `index.html`.
- [ ] Navbar: site name "Serenity", Home link, dark-mode toggle (repo
      standard).
- [ ] Hero: full-height, seeded picsum bg photo, h1 "Spa & Beauty Center"
      (Prata, uppercase, wide letter-spacing).
- [ ] Intro: heading "Benefits of Doing Spa & Massage" + 3 cards (Book Your
      Treatment / Great Gift Packages / Special Offer & Deal).
- [ ] Services (bg-light): "Services" + 4 lucide icon cards (Aromatherapy,
      Skin Care, Herbal Spa, Body Massage).
- [ ] Treatments: "Treatments" + 4 tiles (Salt & Aroma, Hydro, Hot Stone,
      Aroma) with photos.
- [ ] Therapies (bg-light): "Spa Therapies"/"Massage Therapies" + 4 cards
      (Relaxation, Athlete, Thai, Rose).
- [ ] Pricing: "Pricing Treatments" + 3 cards (Year/Monthly/Weekly, "Enjoy
      All The Features").
- [ ] Testimony: "Successful Stories" band.
- [ ] Counter: stats band.
- [ ] Blog (bg-light): "Recent Posts" + 3 post cards.
- [ ] Gallery: "See the latest photos" + 6+ photo tiles.
- [ ] Footer: brand + Popular Links / Quick Links / "Have a Questions?".
- [ ] Tests for every section (Gherkin scenarios from spec), 100% coverage.
- [ ] `npm run verify:app -- serenity` green; PR to main with source
      mapping, preview URL, tokens, renames.
