# Medora (ColorLib Medical Wordpress Themes) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-medora`.

## Source mapping

- **ColorLib item:** "Medical Wordpress Themes" (TEMPLATES.md lines 223,
  1863, 2245 — THREE copies; mark ALL of them `[x]` when done).
- **Source URL:** https://colorlib.com/wp/template/medical-wordpress-themes/
  → 301 → https://colorlib.com/wp/health-medical-wordpress-themes/
  → 301 → https://colorlib.com/wp/free-medical-wordpress-theme/
  (roundup article "10 Best Free Medical WordPress Themes 2026" by Aigars
  Silkalns, June 4, 2024, category "Free Themes").
- **Preview URL:** https://preview.colorlib.com/theme/medical-wordpress-themes/
  → **HTTP 404 Not Found**; slug missing from
  `preview.colorlib.com/assets/js/products.js`. This is a CATEGORY item, not
  a demo-hosting template. Per the fallback rule the screenshot is the
  primary visual reference.

## Reference research (done — do not redo)

### Screenshot (`medical-website-templates.jpg`, 1200×885, AVIF → PNG via ffmpeg; verified via vision)

Shows the "HealthFlex" medical clinic WordPress theme demo:

- thin light-grey top utility bar: "FEES & INSURANCE" + "REQUEST AN
  APPOINTMENT" left, search input center, "Emergency Line (+1) 555-0199-005"
  right
- white header: bold blue logo "HEALTHFLEX" left; caps nav right: HOME, OUR
  CLINIC, DEPARTMENTS, SERVICES, INFO, BLOG, CONTACT, SHOP, MORE (active
  "HOME" underlined blue)
- hero slider: full-width photo of grey-haired male doctor with stethoscope
  (blurred female colleague in blue scrubs behind); dark semi-transparent
  overlay box right: "QUALITY CARE" + "Your Health is our priority." +
  paragraph + blue "LEARN MORE" button; left/right carousel arrows
- quick-access bar: horizontal blue GRADIENT band (left `#0c65ae` → right
  `#6cb4f2`, pixel-verified) with 4 tiles — white icons + caps labels +
  subtexts: DEPARTMENTS (building), MEDICAL SERVICES (open book), FIND A
  DOCTOR (stethoscope), REQUEST AN APPOINTMENT (calendar)
- Welcome section (white): "WELCOME TO MEDICUS CLINIC" + paragraph left,
  multi-story clinic building photo right
- "Modern Medical Facilities" section: text left, building photo right
- dark-blue chat tab bottom-right: "Have a question? Ask... Theme"

### Live roundup page (HTTP 200, 157 KB DOM)

Structure: header (logo + menu) → page header/breadcrumb → h1 (31px/600) +
meta (Aigars Silkalns / "Free Themes" / 0 comments) → intro → h2 "Best Free
Medical WordPress Themes" → **numbered entries 1–10** (Astra, Medical Way,
Medical, VW Hospital Lite, Eightmedi Lite, Medplus, Doctor Clinic, Gutener
Medical, Medical Care, VW Medical Care) each with h3 number + name +
description + accent "Download this template" button → h3 "Over To You" →
"Leave a Reply" comment form → footer. Comment form is blog furniture — NOT
recreated; the entry list informs the Departments/Services cards.

### Tokens (live page CSS)

- accent `#1a73e8` (`--wpex-accent`), accent-alt `#1464cc`
  (`--wpex-accent-alt`), body 16px system sans-serif, no Google Font import
- grays `#111827` (ink), `#374151` (body), `#4b5563` (meta)
- light-blue feature tiles ≈ `#e8f1fb`–`#dbe9fa` (CORRECTED by implementer:
  the screenshot band is a solid blue gradient `#0c65ae` → `#6cb4f2`);
  utility bar ≈ `#f5f6f7`
- primary button: solid `#1a73e8`, white text, radius ~4px, bold caps;
  hover → `#1464cc`
- hero caption: dark overlay (rgba ~0,0,0,.55) over photo, white text

## Implementation outline (section order 1:1 with the screenshot)

1. **UtilityBar** — thin light-grey strip: phone line + "Request an
   Appointment" link (anchor → appointment); decorative search optional.
2. **Header** — sticky white; "Medora" bold blue left; caps nav right
   (Home / About / Departments / Services / Doctors / Contact),
   anchor-scroll, active underline; mobile menu with all links.
3. **Hero** — full-width doctor photo (picsum `medora-1`), dark overlay
   caption box right: "Quality Care" + "Your Health Is Our Priority." +
   paragraph + blue "Learn More" (→ departments); hover `#1464cc`. Carousel
   arrows optional — single slide is fine.
4. **FeatureBar** — blue gradient band (`#0c65ae` → `#6cb4f2`) with 4 tiles
   (Departments / Medical Services / Find a Doctor / Request an Appointment),
   white lucide icons + subtexts, anchor-scroll, hover → black overlay.
5. **Welcome** — "Welcome to Medora Clinic" + 2 paragraphs left, building
   photo right (picsum `medora-2`).
6. **Departments** — "Our Departments" 3-col grid, 6 cards (Cardiology,
   Pediatrics, Orthopedics, Neurology, Dental Care, Emergency) with icons.
7. **Doctors** — "Meet Our Doctors": 3–4 cards, photos (`medora-3..6`),
   name + specialty.
8. **Facilities** — "Modern Medical Facilities": text + photo (`medora-7`).
9. **Appointment** — "Request an Appointment": validated form (name, email,
   phone, department select, message; zod schema; success state) + clinic
   info (address, phone, email, hours).
10. **Footer** — dark blue-grey; "Medora" wordmark, quick links, contact
    columns, copyright + paraphrased Colorlib credit.

## Implementation tips

- Use `packages/ui` Button/ButtonLink + `cn()`; icon-only controls need
  aria-labels; brand/social icons via inline SVG BrandIcon (lucide dropped
  brand icons).
- All images picsum-seeded `medora-<n>`; hero needs a dark overlay for the
  white caption text (rgba black ~0.55).
- lucide icons to verify before use: Hospital, BookOpen, Calendar, User,
  Phone, Mail, MapPin, Search, HeartPulse, Baby, Brain, Ambulance, Syringe,
  Stethoscope (some may not exist — fall back to Menu/X/ArrowRight/Phone/
  Mail/MapPin which are safe).
- TDD per section; 100% coverage; run `bash scripts/verify-app.sh medora`
  before pushing.
- After merge: `npm run readme:status` regenerates the README status table;
  deploy picks up the app from PR changed files.
