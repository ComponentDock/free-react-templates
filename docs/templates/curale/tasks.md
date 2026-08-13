# Curale (ColorLib Medino) — Tasks & Design Notes

> Recreation of ColorLib "Medino" (https://colorlib.com/wp/template/medino/,
> Bootstrap category) under the NEW name **Curale** ("cura" = Latin for
> care/treatment + medical-clinic feel; single lowercase word, no collision
> with `apps/`, `openspec/specs/` or `docs/templates/` — verified 2026-08-11),
> per the monorepo naming mandate (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Medino" — free medical / clinic website template,
  Bootstrap 4 based (Bootstrap category, 216 templates). The recreation
  brands itself **Curale**. TEMPLATES.md line 449 (`- [x]`), with a dup row
  at line 2252 (both unprepped, unshipped — prep stream leaves both alone).
- **Live preview DOM analyzed (verified 2026-08-11):**
  `https://preview.colorlib.com/theme/medino/` (HTTP 200, ~30.8 KB HTML +
  `assets/css/style.css` ~43 KB — reachable, NO fallback needed). The
  TEMPLATES.md screenshot (`medino-free-template.jpg`, 1200×946, viewed in
  browser) confirms the top bar / nav / hero 1:1; lower sections verified
  from the live DOM + CSS.
- **Visual design (screenshot + live render):** clean, clinical,
  trustworthy. White / very-light-grey backgrounds, dark-grey headings, a
  vibrant professional blue accent (logo cross, CTAs, interactive elements).
  Hero split: left text ("Caring for better life" tagline, "Leading the way
  in medical excellence" headline, blue "TAKE APPOINTMENT" button), right =
  doctor-with-stethoscope photo. Modern airy sans-serif typography.
- **KEY DIFFERENCES vs other medical preps — do NOT copy:** Medico
  (shipped, `apps/medico`) and Medicalcenter → Clinica (`template-clinica`)
  are different designs. Curale is the **blue-cyan-gradient clinic**:
  Ubuntu+Roboto fonts, `#244cfd → #15e4fd` gradient CTAs, `#f9f9fd` card
  sections, dark `#12151f` footer with newsletter + Instagram feed,
  emergency-hotline band, gradient-overlay appointment form.
- **Design tokens (from `assets/css/style.css`, verified 2026-08-11):**
  - Brand gradient: **`linear-gradient(to right, #244cfd, #15e4fd)`** —
    template-btn bg, hovers, hotline/appointment overlays, doctor-name
    hover, footer social hover.
  - Brand blue **`#244cfd`** (news-date badge, link hovers, logo left
    border, footer copyright accent, mobile-nav active) · cyan **`#15e4fd`**
    (gradient end) · accent yellow `#f8b600`/`#f4e700` (generic buttons,
    list bullets).
  - Headings `#222` (Ubuntu 700: h1 45px, h2 36px, h3 18px uppercase, h4
    16px w400) · body `#777` (Roboto 15px).
  - Section bgs: white · `#f9f9ff` (feature card, generic inputs) ·
    **`#f9f9fd`** (department/specialist/patient cards, doctor-name,
    header-scrolled) · footer **`#12151f`**.
  - Fonts: **'Ubuntu', sans-serif** (400/500/700) + **'Roboto', sans-serif**
    (300/400/500/700/900); Google Fonts import `family=Roboto:300,400,500,700,900`
    - `family=Ubuntu:400,500,700`.
  - Buttons `.template-btn`: gradient bg, `#fff` 12px uppercase, padding
    12px 30px, hover opacity .8. `.news-btn`: `#222` 12px uppercase w500,
    arrow slides right on hover.
  - Cards: radius 5px; hover shadow `0 5px 20px rgba(0,0,0,0.1)`.
  - Section padding 130px 0 (department 130px 0 200px; section-top mb 80px).
  - `.welcome-text`: padding 100px, 10px solid `#f9f9f9` border.
  - Patient avatar 100×100 circle, margin-top -90px.
  - `.news-date`: `#244cfd` bg, white, padding 12px 30px, top -25px left 30px.
  - Hotline phone: Roboto 900 56px white (45px mobile).
  - Appointment form: bg image + `linear-gradient(to top right,
rgba(21,228,253,0.9), rgba(36,76,253,0.9))`; inputs w100% p12-20 no
    border; decorative `::before` frame 10px `#f9f9f9`.
  - Footer input 250px radius 3px p10-20; footer btn 170px; feed imgs 55×55.
- **Recreation decisions:** Tailwind grid replaces Bootstrap-4 (no
  Bootstrap dep). Owl-carousel department slider → static 4-col grid (the
  source repeats images; slider only animated on desktop — documented
  simplification). jquery datetimepicker → native `<input type="date">`.
  Sticky header keeps scrolled state (`#f9f9fd` bg). Placeholder images via
  `picsum.photos/seed/curale-<n>/<w>/<h>` (banner, welcome, 4 dept, 2
  patient, 4 doctor, 3 news, 8 feed). Ubuntu + Roboto via Google Fonts
  `<link>`. lucide-react icons; brand social icons as inline SVGs (lucide
  removed brand icons). Appointment form validates (name/email/date
  required) + success message; newsletter validates email + confirmation
  (original is static — documented additions). "Our specialish" (source
  typo) → "Our Specialists". Brand Medino → Curale; title "Curale — Medical
  Clinic Template".

## Task list (implementation order)

1. [ ] Scaffold app: copy the simplest existing app (e.g. `apps/medico`),
       rename package to `@free-react-templates/curale`, add workspace
       entry (root `npm install` so `package-lock.json` registers it).
2. [ ] `index.html`: title "Curale — Medical Clinic Template", Google Fonts
       `<link>`s for Ubuntu 400/500/700 + Roboto 300/400/500/700/900.
3. [ ] `src/index.css`: `@theme` tokens — gradient `#244cfd → #15e4fd`,
       brand blue `#244cfd`, `#f9f9fd`/`#f9f9ff` section bgs, footer
       `#12151f`, Ubuntu + Roboto font families.
4. [ ] `src/App.tsx`: compose sections in order — Navbar (top bar + sticky
       nav) → Hero (banner) → Features → Welcome → Departments → Patients +
       AppointmentForm → Specialists → Hotline → News → Footer.
5. [ ] `src/components/Navbar.tsx`: top info bar (contact + social icons,
       hidden <768px), fixed nav with logo + links + dropdowns (Pages:
       about us/elements; Blog: blog home/blog details), scrolled state
       (`#f9f9fd`), hamburger + slide-in mobile panel <992px.
6. [ ] `src/components/Hero.tsx`: cover bg image, h4 tagline, h1 headline,
       p, "take appointment" gradient button.
7. [ ] `src/components/Features.tsx`: 4 cards (advance technology /
       comfortable place / quality equipment / friendly staff), icon +
       h3 + p, `#f9f9fd` radius 5px, hover white + shadow.
8. [ ] `src/components/Welcome.tsx`: image side + framed panel (padding
       100px, 10px `#f9f9f9` border), h2 "Welcome to our clinic", 2
       paragraphs, "learn more".
9. [ ] `src/components/Departments.tsx`: `#f9f9fd` bg, 4 cards (cardiac
       clinic / plastic surgery / dental clinic / cardiac clinic), image
       hover overlay `rgba(1,2,14,0.4)` + white icon, white text panel.
10. [ ] `src/components/Patients.tsx`: 2 testimonial cards (100px round
        avatar overlapping top, name + role + quote, `#f9f9fd` → white on
        hover) + `src/components/AppointmentForm.tsx` (gradient overlay
        panel, Name/Email/Date/Message, full-width submit, validation +
        success message; pure exported validate function for tests).
11. [ ] `src/components/Specialists.tsx`: 4 doctor cards, name bar
        `#f9f9fd` → gradient on hover, social links, "Our Specialists".
12. [ ] `src/components/Hotline.tsx`: bg image + gradient overlay, h2, phone
        (Roboto 900 56px), support copy.
13. [ ] `src/components/News.tsx`: 3 cards, `#244cfd` date badge (top -25px
        left 30px), title link, p, "read more" sliding arrow.
14. [ ] `src/components/Footer.tsx`: `#12151f`, top products links,
        newsletter (validated email + confirmation), Instagram feed 8×55px,
        copyright bar + 40px white social circles → gradient hover.
15. [ ] Mobile: top bar hidden <768px, hamburger slide-in nav <992px, grids
        stack, hero padding reduced.
16. [ ] Tests: colocated `*.test.tsx` per component, scenario-style `it`
        blocks mirroring the spec Gherkin (desktop + mobile nav duplicate
        links — use `getAllByRole` and index mobile last; decorative imgs
        have no `img` role — use `querySelectorAll('img')`).
17. [ ] Gate: `scripts/verify-app.sh curale` (typecheck + lint + vitest
        100% coverage + build); `npm run spec:validate` for
        `template-curale`.
18. [ ] Ship: mark `[~]`→`[x]` in TEMPLATES.md (line 449) + surge URL +
        `npm run readme:status`; PR description with source template,
        preview URL, tokens, differences (slider→grid, native date,
        validation additions, heading typo fix).
