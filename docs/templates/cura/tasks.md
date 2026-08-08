# Cura (ColorLib Vitality) — Tasks & Design Notes

> Prep artifacts committed on `main` (prep stream). Implementation ships
> later on `feat/template-cura` (implementer stream).

## Design notes (replication findings)

- **Original:** ColorLib "Vitality" — medical / healthcare clinic landing
  template (source: https://colorlib.com/wp/template/vitality/; categories
  Astro, Health & Fitness, Tailwind CSS; released March 2026; License
  CC BY 3.0; images from Unsplash).
- **Preview UNREACHABLE:** `https://preview.colorlib.com/theme/vitality/`
  returns 404; the hub link is `https://preview.colorlib.com/#vitality`;
  `https://vitality-colorlib.pages.dev/` → NXDOMAIN (no pages.dev demo for
  this slug; `preview.colorlib.com/assets/js/products.js` no longer lists
  it); no Wayback snapshot. **Sole references: TEMPLATES.md screenshot**
  (`vitality-template-1770211473540.jpg`, 2400×1892, analyzed in 3 bands)
  **+ the ColorLib product page feature list** (authoritative section
  inventory).
- **Visual design (screenshot):** white + blues healthcare landing. Dark
  blue top info bar (phone + hours left, emergency right); white sticky
  navbar (medical-cross logo "MediCare / HEALTHCARE CENTER" → brand **Cura**,
  links Home/Services/Doctors/About/Contact, moon dark-mode toggle, blue
  "Book Appointment" button); light hero with faint blue dot pattern —
  pill badge "Trusted by 100,000+ Patients" (clock icon), H1 "Your Health
  Is Our Top Priority" (2nd line blue), blurb, solid blue "Book Appointment"
  - outlined pink/red "Emergency Line" (phone icon) CTAs, trust row (3
    avatars, "50+ Doctors Board Certified", 5 amber stars, "4.9/5 Rating",
    "2,500+ Reviews"); right photo column with floating cards "24/7
    Emergency Care" (top-right, clock in light-blue circle) and "25+ Years
    Experience" (bottom-left, green checkmark circle). Below hero: pale-mint
    band with 8 carousel dots (slider content not visible in screenshot);
    then white Services header — pale-blue pill badge "Our Services", H2
    "Our Medical Services", description "Comprehensive healthcare services
    delivered by expert physicians using the latest…". Screenshot ends there.
- **Structure (section order; confirmed through Services, then inferred):**
  1. Top info bar (dark blue): "(555) 123-4567" · "Mon-Fri: 8:00 AM - 6:00
     PM" (left); "Emergency: (555) 911-0000" (right, warning icon).
  2. Sticky navbar (white): "Cura" + "HEALTHCARE CENTER" tagline · Home
     (active) / Services / Doctors / About / Contact · dark toggle · "Book
     Appointment" · mobile menu (aria-expanded).
  3. Hero (light, dot pattern): badge "Trusted by 100,000+ Patients", H1
     "Your Health Is Our Top Priority", blurb, "Book Appointment" (blue) +
     "Emergency Line" (pink/red outline), trust row, photo + 2 floating
     cards.
  4. Slider strip (pale mint, 8 dots): dot-navigated carousel — content
     inferred (patient stories / insurance), see FIDELITY note.
  5. Services (`#services`, white): "Our Services" badge · "Our Medical
     Services" H2 · description · 6 icon cards (appointment booking w/
     department selection, doctor profiles w/ credentials, medical services,
     emergency hotline, testimonials, insurance/payment).
  6. Doctors (`#doctors`): doctor cards (photo, name, specialty,
     credentials).
  7. Appointment booking: form (name, email, phone, department select,
     date, message) + validation + success.
  8. Emergency contact: dark blue band, hotline "(555) 911-0000", "24/7
     Emergency Care", call CTA.
  9. Testimonials: patient quote cards (quote, name, star rating).
  10. Insurance & payments: accepted-insurance / payment strip or cards.
  11. About (`#about`): clinic story + stats (25+ Years, 50+ Doctors, 100k+
      Patients, 4.9/5).
  12. Contact (`#contact`): form (name, email, phone, message) + phone /
      hours / address.
  13. Footer: brand blurb · quick links · hours + phone columns · © 2026 +
      Privacy / Terms.
  - Extras: skip-to-content, cookie banner (Decline/Accept All), back-to-top,
    scroll-reveal (`data-animate="fade-in-up"`), dark-mode toggle
    (localStorage-persisted), mobile menu.
- **Design tokens (screenshot approximations; re-verify if the live demo
  becomes reachable):**
  - Brand primary = **blue scale**: 50 `#eff6ff`, 100 `#dbeafe`, 200
    `#bfdbfe`, 300 `#93c5fd`, 400 `#60a5fa`, 500 `#3b82f6` (headline accent),
    600 `#2563eb` (buttons/logo/active link), 700 `#1d4ed8`, 800 `#1e40af`
    (top bar/dark bands), 900 `#1e3a8a`.
  - Emergency accent = **pink/red (rose)**: 500 `#f43f5e` (outline button
    border+text), 600 `#e11d48`.
  - Success accent = **green**: 500 `#10b981` (25+ checkmark circle).
  - Rating = **amber**: 400 `#fbbf24` / 500 `#f59e0b` (stars).
  - Neutrals: white; headings `#111827` (gray-900); body `#6b7280`
    (gray-500); muted `#9ca3af` (gray-400); hero bg `#f9fafb` (gray-50) +
    faint blue dot pattern; slider band `#f0fdf4` (green-50); badge bg
    `#dbeafe` (blue-100).
  - Font: **"Inter"** (400/500/600/700, Google Fonts); fallback "Plus
    Jakarta Sans" if the demo later shows a different family.
  - Buttons: `rounded-lg`–`rounded-xl`; primary `bg-primary-600 text-white
px-6 py-3 font-medium` (hover darken); outline = white bg +
    `border border-accent-500 text-accent-500` + icon; badges pill
    `rounded-full`.
  - Cards: `rounded-2xl` subtle shadow; floating hero cards white
    `rounded-2xl shadow-lg` with `rounded-full` icon circles; rhythm
    `py-16 lg:py-24`; content `max-w-7xl mx-auto px-4 sm:px-6`.
- **Recreation name:** Cura (single lowercase word; Latin for "care" — fits
  a healthcare clinic brand; NO collision with `apps/` or existing spec
  folders). App folder `apps/cura`, package `@free-react-templates/cura`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/cura-<n>/<w>/<h>`); lucide-react icons (Phone, Clock,
  Stethoscope, HeartPulse, Calendar, CalendarCheck, User, Star, ShieldCheck,
  Ambulance, Users, Check, ChevronDown, ChevronLeft, ChevronRight, Menu, X,
  Sun, Moon, ArrowRight, MapPin, Mail, Send, BadgeCheck — VERIFY exports);
  Inter via Google Fonts; repo-standard Navbar (dark-mode toggle) + Footer
  chrome; booking + contact forms client-side validated with inline success
  states; slider carousel with dot navigation.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-cura/spec.md` (Gherkin requirements +
      scenarios reflecting the sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/cura` (copy a section-rich medical-ish landing app — e.g.
      Sooth or Sapphire; rename package to `@free-react-templates/cura`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Gate: `scripts/verify-app.sh cura` (typecheck → lint → 100% coverage
      tests → build) + `npm run spec:validate`.
- [ ] Push `feat/template-cura`, open PR (source template, preview URL,
      design tokens, what differs, unreachable-preview note), merge
      immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main), `npm run readme:status`.
