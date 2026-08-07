# Keystone — tasks outline

Recreation of ColorLib "Archi" (https://colorlib.com/wp/template/archi/)
as `apps/keystone` (package `@free-react-templates/keystone`).

## Tasks

- [x] Claim: TEMPLATES.md Archi lines → `[~]` (2 copies), branch `feat/template-keystone`
- [x] Replication: preview DOM + `assets/css/style.css` tokens + screenshot
- [x] Spec: `openspec/specs/template-keystone/spec.md` (replaces invalid `template-archi`)
- [ ] Scaffold `apps/keystone` (copy archon, rename, `npm install`, lockfile check)
- [ ] Tests (red): App, Navbar, Hero, About, Services, Work, Experience, Team, Blog, Footer
- [ ] Implementation (green): same components per spec scenarios
- [ ] Per-app gate: `bash scripts/verify-app.sh keystone` + `npm run spec:validate`
- [ ] PR `feat: Keystone — architecture studio template (ColorLib Archi)` → merge immediately
- [ ] Bookkeeping: TEMPLATES.md `[x]` + surge URL (2 copies), homepage, `npm run readme:status`

## Design notes (replication)

Reference: https://preview.colorlib.com/theme/archi/ + `archi-free-template.jpg`.

### Structure (1:1 with the preview)

1. Navbar — logo "Keystone", links Home / About / Services / Work / Team /
   Blog / Contact, dark toggle, mobile menu.
2. Hero — dark building photo bg + overlay; kicker "#1 Architecture Studio
   in United State" with red underline; H1 "Focus on Design Quality"
   (uppercase, bold, condensed); sub "We create lasting impressions through
   architecture design."; red sharp "Contact Us" button; "01" slide
   indicator.
3. About — light bg; kicker "About Us"; H2 "52 Years of Experience in This
   Area"; blurb; "About Us" button; two photos (tall building + detail),
   red accent line.
4. Services — light `#f0e9ff`-ish band; H2 "We Provide the Best Interior
   Solution for You"; 3 cards: Architecture (DraftingCompass), Interior
   Design (Sofa), Urban Design (Map) + blurbs.
5. Popular work — H2 "Our Best Recent Popular Work"; photo grid (4 images);
   project cards: Downside Low House, Top Commercial Building, Big Building
   Concept — "Melbourne, Australia" (typo corrected).
6. Experience band — navy/dark band; blurb; "About Us" button.
7. Team — light bg; H2 "The Best Team We Have Ever Had"; members Jhon Sunsa
   (Designer), Smith J White (Architect), Jayson Brouni (Engineer) + photos.
8. Blog — H2 "All Recent Articles From Us"; 2 cards: "Footprints in Time Is
   a Perfect House in Kurashiki" (+ "Design | Insights" meta, blurb,
   "Read More" links).
9. Footer — navy; link columns Quick Links / New Products / Support;
   socials (Facebook, Twitter, LinkedIn, YouTube); "© 2026 Keystone. All
   rights reserved."

### Tokens

- `--color-brand: #ff1f1f` (accents) · button red `#ff1313`
- `--color-navy: #1f2b7b` (headlines) · ink `#1d2434`
- `--color-paper: #f9f9ff` · `--color-lilac: #f0e9ff` · mist `#888888`
- Fonts: Rajdhani (display, uppercase) + Poppins (body) via Google Fonts
- Buttons: sharp corners (radius 0), uppercase, letter-spacing 1px
