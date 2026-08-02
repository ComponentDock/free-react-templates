# Biscuit (Colorlib Pawpal) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Vista PR (#4) awaits review.
> Implementation ships later on `feat/template-biscuit`.

## Design notes (replication findings)

- **Original:** ColorLib "PawPal" — pet grooming, daycare & boarding
  (source: https://colorlib.com/wp/template/pawpal/). The live preview's
  site title is "Paws & Play".
- **Demo DOM analyzed:** the standard preview URL
  (`https://preview.colorlib.com/theme/pawpal/`) returns 404 — the theme is
  served from the ColorLib preview gallery instead:
  **https://pawpal-colorlib.pages.dev/** (HTTP 200, full rendered DOM +
  `/_astro/Base.*.css` (36.5KB, Tailwind-based) extracted; screenshot at
  `pawpal-colorlib.pages.dev/preview.jpg`). Note: pages.dev previews are
  Astro+Tailwind sites — same token extraction applies.
- **Visual design (from DOM + CSS tokens):** modern premium pet-care landing
  in **pink** (`#db2777` primary, hover `#be185d`, pink-50 `#fce7f3`
  sections), **Lora** serif display headings over **Poppins** body text,
  soft gradient hero, stat chips, 6 service pricing cards, photo gallery,
  testimonial cards with pet photos, and a gradient CTA band.
- **Structure (1:1, section order):**
  1. Navbar: brand "Biscuit — Premium Pet Care" + links Services, About,
     Gallery, Team, Contact + **Book Now** button.
  2. Hero (gradient bg): h1 "Where Every Pet Gets the Royal Treatment" +
     blurb + **Book an Appointment** / **View Services** buttons + stats —
     **10K+ Happy Pets, 8+ Years Experience, 4.9 Average Rating, 50+
     Services**.
  3. Services: "Our Services" / "Everything your pet needs for a happy,
     healthy life" + 6 cards — **Full Grooming From $65** (Popular badge),
     **Bath & Brush $35**, **Daycare $35/day**, **Overnight Boarding
     $55/night**, **Nail Trim $15**, **Puppy Package $45** — each with 3
     feature bullets + duration + **View All Services** button.
  4. About (`section-padding bg-primary-50`): kicker "Our Story", h2 "A
     Place Where Pets Come First" (founded 2015 by Sarah Mitchell in
     Austin) + 4 features — **Certified Staff, Fear-Free Certified, Premium
     Products, Climate Controlled** — icon + title + blurb.
  5. Gallery (white): "Happy Pets Gallery" / "See our furry friends looking
     their best" + 8 photos with labels (Grooming, Daycare, Boarding) +
     "Follow us on Instagram…" + @biscuit handle.
  6. Testimonials (pink-50): "What Pet Parents Say" + 4 quote cards —
     Jessica Thompson (Max, Golden Retriever), Michael Park (Luna,
     Labradoodle), … — quote + name + pet.
  7. CTA (gradient pink): "Ready to Pamper Your Pet?" + blurb (first-time
     customers get 15% off) + **Book Appointment** + phone
     `(555) 728-7529`.
  8. Footer: brand + **Services/Company/Support** link columns + **Hours**
     (Mon-Fri 7:00 AM - 7:00 PM, Saturday 8:00 AM - 6:00 PM, Sunday 9:00 AM
     - 5:00 PM), **Contact** (hello@pawsandplay.com, (555) 728-7529),
       **Location** (456 Pet Paradise Lane, Austin, TX 78701), social icons +
       copyright + Privacy Policy / Terms of Service.
- **Design tokens extracted from CSS:**
  - Primary **pink `#db2777`** (buttons, headings, gradient stops); hover
    **`#be185d`**; light pink-50 `#fce7f3` section bg.
  - Fonts: **"Lora"** (display serif) + **"Poppins"** (body) (Google Fonts
    via `<link>`).
  - Dark text `#111827`; cards white with soft shadow.
  - Buttons: rounded-full, pink bg, white text.
- **Recreation name:** Biscuit (pet-care themed, distinct from "Pawpal" /
  "Paws & Play" and all existing names). App folder `apps/biscuit`, package
  `@free-react-templates/biscuit`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/biscuit-<n>/<w>/<h>`); lucide-react icons; Lora +
  Poppins via Google Fonts; forms prevent default (no backend); pink primary
  in `@theme`; repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-biscuit/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/biscuit` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/biscuit`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-biscuit`, open PR (source template, preview URL,
      design tokens, what differs — note the pages.dev preview URL).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
