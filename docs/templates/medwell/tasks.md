# Medwell (ColorLib Medcare) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-medwell`. Recreation name: **Medwell** (NEW name —
> the ColorLib source keeps its name "Medcare").

## Source mapping

- **ColorLib item:** "Medcare" (TEMPLATES.md line 1863; section
  "## Medical (Health) Templates" at line 1857).
- **Source URL:** https://colorlib.com/wp/template/medcare/
- **Preview URL — REACHABLE (verified 2026-09-22 by direct fetch):**
  **`https://preview.colorlib.com/theme/medcare/`**
  (HTTP 200, `<title>Medcare Medical</title>`).
- **Preview CSS:** `css/style.css` (all styles, hand-written, Bootstrap 4
  grid + custom classes). Also loads: `css/bootstrap.css`,
  `css/themify-icons.css`, `css/flaticon.css`, `vendors/fontawesome/css/all.min.css`,
  `vendors/owl-carousel/owl.carousel.min.css`, `vendors/animate-css/animate.css`.
  Fonts: Google Fonts Open Sans (300,400,600,700,800) + Playfair Display (400,700).

## Reference research (done — do not redo)

### Screenshot (`medcare-free-template.jpg`, AVIF image)

Browsed visually. Medical/healthcare landing page with a full-bleed hero
banner (dark background image, likely a hospital/medical scene), white
heading text "Making Health Care Better Together" left-aligned, two CTA
buttons (solid blue + outline). Top bar has email + location info with
social icons. Below the hero: three white feature cards with blue icons,
a services section with icon+text cards, a team section with doctor
photos in cards, appointment section with FAQ accordion and form,
testimonial slider, emergency hotline with dark background, blog cards,
brand logos carousel, and a multi-column footer. Color scheme: strong
blue (#0051d2) primary, white backgrounds, light grey (#f7f7f7) section
alternation. Typography: Playfair Display serif headings, Open Sans body.
Sharp corners throughout (no border-radius on buttons/cards). Clean,
professional medical aesthetic.

### Design tokens (from CSS)

- **Primary blue:** `#0051d2` (buttons, links, active states, icon accents)
- **Body text:** `#797979`
- **Heading text:** `#020a21`
- **Font families:** `"Playfair Display", serif` (headings/buttons),
  `"Open Sans", sans-serif` (body/nav/meta)
- **Buttons:** Sharp corners (border-radius: 0), solid blue primary,
  outline blue secondary
- **Cards:** Sharp corners, white bg, subtle borders/shadows
- **Section alternation:** White ↔ `#f7f7f7` light grey
- **Hero:** 800px min-height, full-bleed background image
- **Testimonial:** Overlapping hero (negative margin-top -335px, padding-top 460px)
- **Hotline:** Dark bg image with white text overlay
- **Sticky nav:** White bg + box-shadow `0px 3px 16px rgba(0,0,0,0.1)`

## Implementation task list

### Phase 1: Scaffold

- [ ] Create `apps/medwell/` (copy simplest existing app, rename package
  to `@free-react-templates/medwell`)
- [ ] Run `npm install` at repo root to register workspace
- [ ] Set up `public/CNAME` → `medwell.free.componentdock.com`
- [ ] Set `homepage` in `package.json` → `https://medwell.free.componentdock.com`
- [ ] Configure `vite.config.ts` with `injectUiSource()`
- [ ] Set up `src/index.css` with Tailwind entry + `@theme` tokens

### Phase 2: Theme tokens

- [ ] Add Google Fonts link in `index.html` for Open Sans + Playfair Display
- [ ] Define Tailwind theme extension:
  - `brand`: `#0051d2`
  - `text-body`: `#797979`
  - `text-heading`: `#020a21`
  - `bg-section-alt`: `#f7f7f7`
  - `border-light`: `#e8edf1`
  - Font families: `heading: 'Playfair Display', serif`
  - Font families: `body: 'Open Sans', sans-serif`

### Phase 3: Components (section order from original)

1. **TopBar** — Email + location left, social icons right, thin border bottom
2. **Navbar** — Logo left, nav links right (Home, About, Department, Doctors,
   Blog dropdown, Contact), sticky on scroll with white bg + shadow
3. **Hero** — Full-bleed background image, heading, paragraph, two CTA buttons
4. **Features** — 3-column cards with icons (Primary Care, Emergency Cases,
   Online Appointment) on patterned background
5. **Services** — Heading "Awesome Health Service" + 3 service cards (Neurology,
   Dental, Plastic Surgery) with icon, title, description, "Learn More" link
6. **About** — Light grey bg with decorative image, heading + text + "learn more" link
7. **Team** — 3 doctor cards with photo, name, specialty, phone, social icons
8. **Appointment** — 2-column: FAQ accordion (5 items) left, contact form right
9. **Testimonial** — Slider with circular avatar, quote, author name
10. **Hotline** — Dark bg image, white text, "Emergency hotline" heading + phone
11. **Blog** — 3 blog cards with thumbnail, tags, title, comment/like meta
12. **Brands** — Logo carousel on light grey background
13. **Footer** — 4 link columns + newsletter signup + copyright + Component Dock link

### Phase 4: Testing

- [ ] Write component tests (Vitest + Testing Library)
- [ ] Ensure 100% line/function/branch/statement coverage
- [ ] Test interactive elements: sticky nav, accordion, form validation
- [ ] Test responsive breakpoints (mobile hamburger menu)

### Phase 5: Verification

- [ ] Run `scripts/verify-app.sh medwell` (typecheck + lint + knip + fallow + tests + build)
- [ ] Visual check against screenshot
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock
- [ ] `public/CNAME` and `homepage` correct

### Phase 6: Ship

- [ ] Commit as `feat: add Medwell template (ColorLib Medcare)`
- [ ] Open PR, merge immediately
- [ ] Surge deploy verification
- [ ] Update TEMPLATES.md: mark `[x]` with surge URL

## Fidelity notes

- **Section order:** Must match 1:1: TopBar → Navbar → Hero → Features →
  Services → About → Team → Appointment → Testimonial → Hotline → Blog →
  Brands → Footer
- **Button styles:** Sharp corners everywhere (no border-radius). Primary
  is solid blue, secondary is outline blue. Both use Playfair Display font.
- **Typography:** Playfair Display for ALL headings and buttons. Open Sans
  for body/nav/meta text. This two-font combo is distinctive.
- **Card styles:** Sharp corners (border-radius: 0), white backgrounds,
  subtle borders (#e8edf1) or shadows on hover.
- **About section:** Has a floating/decorative image on the left side
  (positioned absolutely, z-index layering). Content is right-aligned.
- **Testimonial overlaps hero:** Uses negative margin-top (-335px) to
  overlap the hero banner, creating a layered visual effect.
- **Hotline:** Full-bleed dark background image with white text overlay,
  centered content, acts as a CTA break between testimonials and blog.
- **Sticky nav:** Transitions from transparent (over hero) to white bg
  with shadow. Smooth transition animation.
