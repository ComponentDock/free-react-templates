# Signum — Design Notes

## Source
- ColorLib: Signup Form 19 ("Sign Up 09")
- URL: https://colorlib.com/wp/template/signup-form-19/
- Preview (LIVE): https://preview.colorlib.com/theme/bootstrap/signup-form-19/
  (naive `/theme/signup-form-19/` 404s — family lives under `/theme/bootstrap/`)
- Preview CSS: `css/style.css` — tokens extracted; screenshot analyzed

## Structure order (top to bottom)
1. Page wrapper (full-viewport photo background + 40% blue→pink gradient overlay, centered column, 7em vertical padding)
2. Page heading: "Sign Up #09" (28px, white, centered)
3. Glass card container (transparent fill, 1px translucent-white border, 4px radius, 40px padding, centered)
4. Card heading: "Create Your Account" (light 22px white)
5. Form: Name → Email → Password (eye toggle) → Confirm Password (independent eye toggle) → "Sign Up" blue pill button
6. Sign-in line: "I'm already a member! Sign In"

## Fidelity notes

### Page background
- Dark starry-night photo + `linear-gradient(45deg, #0360ed 0%, #ff5db1 100%)` overlay at opacity 0.4 → the signature blue→violet/pink tint
- Photo below the overlay, content above both (source: `body:after` at z-index -1)
- Placeholder: `https://picsum.photos/seed/signum-1/<w>/<h>` (never the source photo)

### Page heading
- White 28px regular (Lato 400), centered, ~3rem margin below
- Demo text "Sign Up #09" (paraphrase OK — keep a short centered title)

### Glass card
- Transparent fill — photo shows through; the ONLY container cue is `1px solid rgba(255,255,255,0.2)`; radius just 4px; NO shadow
- Card text `rgba(255,255,255,0.7)`; headings/labels pure white
- Width ≈ col-md-7 / col-lg-5 (Tailwind `md:w-7/12 lg:w-5/12 mx-auto`)

### Card heading
- "Create Your Account", Lato 300, 22px, white, centered

### Form fields
- VISIBLE uppercase labels: bold 12px, 1px letter-spacing, white
- Pills: height 52px, radius 40px, transparent fill, `1px solid rgba(255,255,255,0.3)`, padding-left 40px / right 20px
- Left icons (white, absolute left 15px): lucide `User` / `Send` / `Lock` / `Lock`
- Placeholder `rgba(255,255,255,0.5)`
- Focus: border `rgba(255,255,255,0.2)` + bg `rgba(255,255,255,0.04)`; source kills rings — keep aesthetic focus-visible styles per a11y checklist
- Placeholders: "John Doe" / "johndoe@gmail.com" / "Password" / "Password"

### Password fields
- Eye toggle absolute right 15px, `rgba(255,255,255,0.5)`; lucide `Eye`/`EyeOff` swap; toggles input type; `aria-label`
- TWO independent toggles (password + confirm)
- Source quirk: confirm field's label also reads "Password" — keep for fidelity or paraphrase to "Confirm Password"; note in PR

### Sign Up button
- Pill 40px radius, full width, 52px, bg `#1089ff`, border `1px solid #1089ff`, white 15px text, NO shadow
- Hover: transparent background, text `#1089ff` (outline-style hover — unique to this family; keep it)
- `type="submit"`; validation per conventions

### Sign-in line
- `rgba(255,255,255,0.7)` text + `#1089ff` link "Sign In" (0.3s transition), centered below the button

### Typography
- Lato via Google Fonts `<link>` (300 + 400)
- Body 16px/1.8 gray; page heading 28px/400 white; card h3 22px/300 white; labels 12px/700 uppercase white; button 15px/400 white

### Responsive behavior
- Card full-width-minus-margins on mobile; inputs/button stay full width; photo keeps `cover`; heading column collapses to full width

## Design tokens (`@theme` candidates)
- `--color-accent: #1089ff`
- `--color-gradient-from: #0360ed`
- `--color-gradient-to: #ff5db1`
- translucent border `rgba(255,255,255,0.2)` / input border `rgba(255,255,255,0.3)` / placeholder+toggle `rgba(255,255,255,0.5)` / card text `rgba(255,255,255,0.7)`
- gradient overlay utility: `bg-[linear-gradient(45deg,#0360ed_0%,#ff5db1_100%)]` + `opacity-40`
