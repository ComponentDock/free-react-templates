# Medix (ColorLib "Docmed") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-medix` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Docmed" — free Medical & Hospital HTML template
  (source: https://colorlib.com/wp/template/docmed/). Listed in TEMPLATES.md
  under the Bootstrap category (line 376).
- **Preview REACHABLE (HTTP 200):** `https://preview.colorlib.com/theme/docmed/`.
  DOM fetched (`/tmp/docmed-prep/docmed.html`, 47,212 bytes) + stylesheet
  `css/style.min.css` (`/tmp/docmed-prep/style.min.css`, 71,092 bytes) +
  flaticon css + TEMPLATES.md screenshot (`docmed-free-template.jpg`,
  1200×946) + live-preview visual inspection (browser screenshot).
- **Aesthetic:** clean, modern, trustworthy healthcare — white surfaces,
  bright trust-blue `#009DFF` brand, lighter sky-blue `#5DB2FF` bands/icons/
  underlines, blue gradient `#0181f5 → #5db2ff` primary CTAs, `#F5FBFF`
  light tints, `#1F1F1F` headings + `#727272` body, Poppins everywhere,
  rounded-rect buttons (4–5px) with pill (30px) buttons in the emergency
  band.
- **Sliders/tabs/modal are JS plugins in the source** (swiper.js carousels
  ×3, Bootstrap nav-pills tabs, Bootstrap modal) — implement with React
  state: a 3-slide hero slider with arrows, a 3-slide testimonial slider, a
  6-card expert carousel with arrows, a 3-tab switch, and a modal dialog
  (zod + react-hook-form).
- **Font:** source CSS `@import`s **Poppins** 200–700 from Google Fonts —
  DO NOT copy the import; load Poppins 300/400/500/600/700 via `<link>` in
  `index.html`.
- **Buttons:** `.boxed-btn3` = gradient blue, white text, 15px/500,
  uppercase, radius 4px, padding 18px 44px (hero CTA + modal Confirm).
  `.boxed-btn` = white bg, 1px `#009DFF` border, blue text, uppercase,
  letter-spacing 3px, padding 18px 44px. `.boxed-btn3-white` = transparent +
  white border/text, radius 5px, padding 9px 24px (service band).
  `.boxed-btn3-white-2` = 1px `#5DB2FF` border, blue text, radius 5px,
  padding 9px 24px (welcome "Learn More"). `.book_btn a` = `#009DFF` bg,
  radius 4px, padding 12px 26px (header). Emergency `.info_button a` =
  radius 30px pill.
- **Copy is placeholder** — paraphrase freely, keep the same kinds: top bar
  `info@docmed.com` + `160160`, nav (Home / Department / Blog: Blog, Single
  Blog / Pages: Elements, About / Doctors / Contact), hero "Health care For
  Hole Family" + "Check Our Services", services (Hospitality / Emergency
  Care / Chamber Service), welcome "Welcome to Docmed" + "Best Care For Your
  Good Health", departments (Eye Care / Physical Therapy / Dental Care /
  Diagnostic Test / Skin Surgery / Surgery Service), tabs (Excellent
  Services / Qualified Doctors / Emergency Departments — live-preview
  headlines "Comprehensive Medical Services" / "Expert Physicians You Can
  Trust" / "24/7 Emergency Medical Care"), emergency ("For Any Emergency
  Contact" / "Make an Online Appointment" + `+10 378 4673 467`), footer
  (Departments: Eye Care / Skin Care / Pathology / Medicine / Dental;
  Useful Links: About / Blog / Contact / Appointment; Address: `200, D-block,
Green lane USA` / `+10 367 467 8934` / `docmed@contact.com`).
- **Source repeats placeholders** (testimonial author "ASANA KORIM" ×3,
  doctor "Mirazul Alom / Neurologist" ×6, "About" twice in Useful Links) —
  vary names/specialties for realism.
- **Phone numbers are PLAIN TEXT everywhere** — never `tel:` literals.
- **Social icons = 4 brand icons** (LinkedIn, Facebook, Twitter, Instagram)
  in BOTH the header top bar and the footer — lucide-react has NO brand
  icons — inline SVG (simple-icons paths) per the replication skill.

## Structure (top → bottom, single page)

1. **Header** (`.header-area`) — top bar `.header-top_area` (`#F5FBFF`,
   padding 12px 0): left 4 social SVGs (`.social_media_links`), right email
   - phone (`.short_contact_list`, 13px `#919191`, margin-left 50px).
     Main bar `.main-header-area` (white, padding 18px 0): logo left, centered
     `.main-menu` (Home / Department / Blog▾ / Pages▾ / Doctors / Contact,
     15px/500 `#727272`, hover underline), `.book_btn` right ("Make an
     Appointment" → modal). Mobile: hamburger → white dropdown with all links.
2. **Hero slider** (`.slider_area`, swiper, 3 slides, 700px tall, bg
   `banner.png`/`banner2.png` — doctor photo right of text): `.slider_text`:
   h3 70px/300 `#1F1F1F` capitalize letter-spacing 2px + 700-weight span
   ("Health care" light / "For Hole Family" bold), p 18px `#727272`, `.boxed-
btn3` "Check Our Services", prev/next arrows.
3. **Service band** (`.service_area`, container p-0, 3 × col-xl-4):
   `.single_service` bg `#5DB2FF`, padding 40px 30px: 50px white icon
   (lucide HeartPulse / Phone / FirstAid), h3 26px white (Hospitality /
   Emergency Care / Chamber Service), p white, `.boxed-btn3-white` link
   (Apply For a Bed / +10 672 356 3567 plain text / Make an Appointment).
4. **Welcome** (`.welcome_docmed_area`, padding 120px 0 220px) — 6/6:
   left `.welcome_thumb` (`.thumb_1` + `.thumb_2` absolute bottom -94px right
   -37px overlapping photo); right `.welcome_docmed_info` (padding-left
   90px): h2 18px "Welcome to Medix" + `::before` 2px × 50px `#5DB2FF`
   underline, h3 36px/500 "Best Care For Your Good Health", p 16px `#727272`,
   ul 3 li with `#5DB2FF` chevron icons (lucide ChevronRight, margin-right
   10px), `.boxed-btn3-white-2` "Learn More".
5. **Departments** (`.our_department_area`) — `.section_title text-center`
   (h3 36px/500 + centered `::before` 2px × 50px `#5DB2FF` underline at
   bottom + p 16px `#727272`); 2×3 grid (col-xl-4 col-md-6) of
   `.single_department` (white, shadow `0 6px 10px rgba(0,0,0,0.04)`):
   `.department_thumb` (5px top radius, img scale 1.2 on hover) +
   `.department_content` (padding 22px 30px 24px): h3 a 22px/500 `#1F1F1F`
   (Eye Care / Physical Therapy / Dental Care / Diagnostic Test / Skin
   Surgery / Surgery Service), p, `.learn_more` 16px `#5DB2FF`.
6. **Testimonials** (`.testmonial_area`) — swiper, 3 slides
   `.single-testmonial` (bg images, padding 180px 0, `.overlay2` black
   0.3): centered `.testmonial_info`: 40px quote icon (lucide Quote), p
   20px/32px white, uppercase author h4 (vary names).
7. **Business tabs** (`.business_expert_area` + `.business_tabs_area`, bg
   `#F5FBFF`) — 3 equal tabs (`.nav .nav-item` width 33.33%): Excellent
   Services (active, blue underline) / Qualified Doctors / Emergency
   Departments. Each `.tab-pane` 6/6: `.business_info` — 75px circle
   `#5DB2FF` white icon (lucide Activity / Stethoscope / Phone), h3 20px/500
   `#1F1F1F`, p `#727272`; `.business_thumb` photo.
8. **Expert Doctors** (`.expert_doctors_area`, padding 120px 0) —
   `.doctors_title` h3 36px/500 "Expert Doctors" left (mb-55); swiper, 6
   slides `.single_expert`: `.expert_thumb` (5px top radius) +
   `.experts_name` (bg `#F5FBFF`, padding 16px 0 18px, centered; hover bg
   `#5DB2FF`): h3 20px name + span 13px `#919191` specialty (6 varied
   pairs). Prev/next arrows.
9. **Emergency band** (`.Emergency_contact`, container-fluid p-0, 2 ×
   col-xl-6) — `.single_emergency` (padding 91px 0, bg images +
   `.overlay_skyblue` = `#5DB2FF` opacity 0.8): `.info` h3 26px/500 white +
   p 13px white + `.info_button a` pill (radius 30px): left phone white
   outline pill (plain text), right `.boxed-btn3` gradient pill "Make an
   Appointment".
10. **Footer** (`.footer`) — `.footer_top` bg `#1F1F1F`, padding 145px 0
    129px, 4 widgets: (1) `.footer_logo` 22px white + p `#C7C7C7` +
    `.socail_links` 4 brand SVGs `#A8A7A0`; (2) "Departments": Eye Care /
    Skin Care / Pathology / Medicine / Dental; (3) "Useful Links": About /
    Blog / Contact / Appointment; (4) "Address": address / phone / email
    (plain text). `.footer_title` 22px/400 white mb-40. Copyright bar
    `.copy-right_text` bg `#000`, padding-bottom 30px: `.footer_border` +
    `.copy_right` 16px `#919191` centered "Copyright © <year> All rights
    reserved | This template is made with ♥ by **Component Dock**" →
    https://www.componentdock.com/ (replaces Colorlib credit).
11. **Appointment modal** (`#appointmentModal`) — opens from header button
    (+ service-band "Make an Appointment"): date, time, "Select Department"
    select (Eye Care / Physical Therapy / Dental Care), "Select Doctor"
    select (3 doctors), Name, Phone no., Email, `.boxed-btn3` "Confirm".
    React modal + zod validation + success state on submit.

## Implementation tasks (for the implementer stream)

- [ ] `cp -r` scaffold from the simplest existing app; rename package to
      `@free-react-templates/medix`; `npm install` at repo root; CNAME +
      homepage `medix.free.componentdock.com`
- [ ] `src/index.css` `@theme` tokens: brand `#009DFF`, brand-sky `#5DB2FF`,
      brand-deep `#0181F5`, tint `#F5FBFF`, ink `#1F1F1F`, muted `#727272`,
      faint `#919191`, footer-text `#C7C7C7`, footer `#1F1F1F`; Google Fonts
      `<link>` (Poppins 300/400/500/600/700)
- [ ] `src/data.ts` — nav links (incl. Blog + Pages dropdowns), slides (3),
      services (3), welcome bullets (3), departments (6), testimonials (3),
      tabs (3), doctors (6), emergency items (2), footer links/contact data
- [ ] Components: `Header` (top bar + nav + appointment button + hamburger),
      `HeroSlider`, `Services`, `Welcome`, `Departments`, `Testimonials`,
      `BusinessTabs`, `ExpertDoctors`, `Emergency`, `Footer`,
      `AppointmentModal` (zod + react-hook-form)
- [ ] `BrandIcon` inline-SVG set (LinkedIn, Facebook, Twitter, Instagram)
      — lucide has no brand icons
- [ ] Tests per section mirroring the spec Gherkin scenarios, 100% coverage
      (modal open/validation/success; slider/tab state)
- [ ] Subject-screen picsum seeds (hero ×2, welcome thumbs ×2, department
      thumbs ×6, testimonial bg ×2, tab thumbs ×3, expert photos ×6,
      emergency bg ×2) — pixel metric + browser verify, pin seeds in PR
- [ ] `bash scripts/verify-app.sh medix` green; PR with source, preview URL,
      tokens, deviations (React sliders/tabs/modal, nav underline color,
      varied names, Component Dock credit); squash-merge immediately

## Verification notes / pitfalls

- Phone numbers (top bar `160160`, service band, emergency band, footer):
  plain text only — no `tel:` literals (the toolchain's secret-scan rewrites
  them).
- `aria-current` on the active nav link: `aria-current={cond ? 'true' :
undefined}`.
- Swiper/tabs in the source are JS plugins — do NOT port them; React state +
  lucide icons only.
- The source's nav hover underline is white-on-white (invisible) — use
  `#009DFF`/`#5DB2FF` for the visible underline; document the deviation.
- Active tab underline: Bootstrap `.nav-link.active` — implement with a
  2px × 50px `#5DB2FF` underline matching the section-title style.
- Section-title `::before` underlines are decorative — use the h3/h2 as the
  accessible heading.
- Modal form: use zod schema + react-hook-form per docs/conventions.md
  (per-field errors, block submit until valid, success state on submit).
