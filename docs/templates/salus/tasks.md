# Salus (ColorLib Docmed) — Tasks & Design Notes

> Recreation of ColorLib "Docmed"
> (https://colorlib.com/wp/template/docmed/) under the NEW name **Salus**
> (Latin for "health/well-being"), per the monorepo naming mandate (never
> reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Docmed" — medical & hospital template (categories:
  Bootstrap / Health Fitness / Medical; TEMPLATES.md line 376 + dup rows
  1837, 2224). Live preview: https://preview.colorlib.com/theme/docmed/
  (HTTP 200, ~47 KB HTML; tokens parsed from `css/style.min.css` ~71 KB;
  sliders use the Swiper library, lightbox glightbox, scroll anims aos).
- **Visual design (screenshot `docmed-free-template.jpg`, 1200×946):**
  clean, modern, trustworthy — white + medium blues. Thin top bar
  (contact right, socials left) → white navbar (blue medical cross in a
  circle + "Docmed" wordmark, centered menu, blue "Make an Appointment"
  button) → hero with smiling doctor photo + dark sans headline + blue CTA
  → light-blue services band (3 white-text columns) → rounded-rectangle
  buttons (4–5px radius), Poppins throughout.
- **Structure (1:1, section order):**
  1. Top bar (`#F5FBFF`): social icons left (`#C7C7C7` → hover `#5DB2FF`)
     - contact right (envelope `info@docmed.com`, phone `160160`).
  2. Header (white): logo (image → text wordmark "Salus" + cross icon),
     centered nav Home/Department/blog▾(blog, single-blog)/Pages▾
     (elements, about)/Doctors/Contact — 15px/500 `#727272`, hover/active
     `#1F1F1F` + scaleX underline; right socials + `book_btn` "Make an
     Appointment" (`#009DFF`, 12px 26px, radius 4px); mobile hamburger +
     collapsible menu with submenu toggles.
  3. Hero slider (swiper, 700px): 3 slides, light photo bg (banner.png /
     banner2.png): H3 "Health Care For Whole Family" (70px/300,
     letter-spacing 2px, `#1F1F1F`), P 18px `#727272`, gradient CTA
     "Check Our Services" (`#0181f5→#5db2ff`, 18px 44px, radius 4px,
     hover: white + `#009DFF` text); prev/next arrows + dots.
  4. Services (`#83C4FF`, 3 cols): Hospitality (HeartPulse icon, "Apply
     For a Bed"), Emergency Care (`#5DB2FF` bg, Ambulance icon, phone
     "+10 672 356 3567"), Chamber Service (first-aid icon, "Make an
     Appointment"). Icons 50px white, H3 26px/500 white, P 16px white,
     outline-white buttons (9px 24px, radius 5px).
  5. Welcome (padding 120/220px): H2 "Welcome to Salus" (18px + 50px
     `#5DB2FF` left underline) + H3 "Best Care For Your Good Health"
     (36px/500) + P `#727272` + 3 arrow-checklist items + "Learn More"
     outline-blue button (`#5DB2FF` text/border); left = overlapping
     thumbs (60% + absolute bottom-right).
  6. Departments: centered title "Our Departments" (36px/500 + centered
     50px×2px `#5DB2FF` underline) + sub P; 6 cards (3×2): Eye Care,
     Physical Therapy, Dental Care, Diagnostic Test, Skin Surgery,
     Surgery Service — white, shadow 0 6px 10px rgba(0,0,0,0.04), img top
     radius 5px (hover scale 1.2), "Learn More" `#5DB2FF`.
  7. Testimonials (swiper, bg image + black overlay 0.3, 180px 0): quote
     icon white 40px + P white 20px/32px + author "Asana Korim".
  8. Business tabs (`#F5FBFF` bg, 1px `#E8E8E8` bottom border, 60px
     padding): 3 tabs 33.33% each (20px `#1F1F1F`, active = white bg):
     Comprehensive Medical Services / Expert Physicians You Can Trust /
     24/7 Emergency Medical Care; pane = 75px circle `#5DB2FF` icon + H3
     20px/500 + P + thumb image.
  9. Expert doctors (120px padding): "Expert Doctors" title + 6 cards:
     photo (hover scale 1.03) + name 20px/500 + specialty 13px `#919191`
     on `#F5FBFF`; hover: bg `#5DB2FF` + white text. Vary the source's
     repeated "Mirazul Alom / Neurologist" ×6 → fictional names +
     specialties.
  10. Emergency band (2 bg-image panels, 91px 0): "For Any Emergency
      Contact" + P + phone "+10 378 4673 467" (pill button radius 30px) |
      "Make an Online Appointment" + P + "Make an Appointment" button.
  11. Footer (`#1F1F1F` top, padding 145/129px): logo + blurb + socials |
      Departments (Eye Care, Skin Care, Pathology, Medicine, Dental) |
      Useful Links (About, Blog, About, Contact, Appointment) | Address
      (200, D-block, Green lane USA / +10 367 467 8934 /
      docmed@contact.com). Titles 22px/400 white, links 16px `#BABABA`
      line-height 42px, hover `#5DB2FF`. Bottom bar (`#000`): copyright +
      "made with ♥ by Colorlib" → fictionalized credit.
  12. Appointment modal (opens from every "Make an Appointment" CTA):
      title + form — Select Department (Eye Care, Physical Therapy,
      Dental Care), Select Doctor (Mirazul Alom, Monzul Alom, Azizul
      Islam), Pick date, Suitable time, Name, Phone no., Email,
      "Confirm" gradient button. Fields: 1px `#e5e6e9` border, radius 0,
      height 48px, 13px text.
- **Design tokens:** brand `#009DFF`; gradient `#0181f5→#5db2ff`; light
  blues `#5DB2FF`, `#83C4FF`; tint `#F5FBFF`; headings `#1F1F1F`; body
  `#727272`; muted `#919191`/`#999999`; footer links `#BABABA`; borders
  `#E8E8E8`, `#e5e6e9`; footer `#1F1F1F` + `#000`; font **Poppins**
  (200–700) via Google Fonts.
- **Recreation decisions:** picsum seeded placeholders
  (`picsum.photos/seed/salus-<n>/<w>/<h>`), lucide icons (HeartPulse,
  Ambulance, Stethoscope, Phone, Mail, MapPin, Quote, Check, ArrowRight,
  ChevronDown; socials as inline SVG brand icons), Poppins via `<link>`,
  `packages/ui` shared components (Button, ButtonLink, cn). Fix source
  typo "Hole Family" → "Whole Family". Fictionalize "Colorlib" credit.

## Tasks (implementation order)

- [ ] Scaffold app: copy simplest existing app → `apps/salus`, package
      `@free-react-templates/salus`, register workspace (run root
      `npm install` so package-lock.json registers it), index.html
      (title "Salus — Medical & Hospital Template", Poppins Google Fonts
      links, favicon)
- [ ] `src/index.css`: `@theme` tokens — brand blue scale (`#009DFF`,
      `#0181f5`, `#5DB2FF`, `#83C4FF`, `#38a4ff`), tint `#F5FBFF`,
      headings `#1F1F1F`, body `#727272`, muted `#919191`, Poppins family,
      button radii (4px/5px/30px pill), card shadow
      `0 6px 10px rgba(0,0,0,0.04)`
- [ ] Components (TDD, tests first): 1. `TopBar` — light tint bar, socials left, email + phone right 2. `SiteHeader` — logo wordmark "Salus" (+ cross icon), centered
      nav with Blog/Pages dropdowns, "Make an Appointment" book_btn,
      mobile hamburger (desktop + mobile nav both in DOM — use
      getAllByRole and index the mobile one last in tests) 3. `HeroSlider` — 3 slides, headline/excerpt/gradient CTA,
      prev/next arrows + dot pagination 4. `Services` — 3 white-text cards on `#83C4FF` (middle `#5DB2FF`),
      icons, outline-white CTAs 5. `Welcome` — overlapping thumbs + H2/H3/checklist/"Learn More" 6. `Departments` — centered title + 6 cards (img, title, desc,
      Learn More) 7. `Testimonials` — bg image + overlay, quote/text/author slides 8. `BusinessTabs` — 3 switchable tabs with icon circle + text +
      image (aria-selected / role=tab semantics) 9. `ExpertDoctors` — title + 6 doctor cards (photo, name,
      specialty), hover state, prev/next 10. `EmergencyBand` — 2 bg-image panels with pill buttons 11. `Footer` — 4 columns + copyright bar 12. `AppointmentModal` — dialog (role="dialog", aria-modal,
      close button + backdrop close), department/doctor selects,
      date/time/name/phone/email fields, "Confirm" submit
- [ ] `App.tsx` composition: TopBar → SiteHeader → HeroSlider → Services →
      Welcome → Departments → Testimonials → BusinessTabs → ExpertDoctors →
      EmergencyBand → Footer (+ AppointmentModal, state lifted or context
      so every "Make an Appointment" CTA opens it)
- [ ] Verify: `scripts/verify-app.sh salus` (typecheck + lint + 100%
      coverage + build), `npm run spec:validate`
- [ ] Commit conventional `feat: Salus — Medical & Hospital template
    (ColorLib Docmed)` on `feat/template-salus`, open PR, merge
      immediately, update TEMPLATES.md status + README status, surge
      deploy
