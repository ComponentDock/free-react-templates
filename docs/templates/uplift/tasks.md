# Uplift (ColorLib Hopehand) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-uplift`.

## Source mapping

- **ColorLib item:** "Hopehand" (TEMPLATES.md line 148, `- [ ]` unchecked).
- **Source URL:** https://colorlib.com/wp/template/hopehand/
- **Preview URL:** https://preview.colorlib.com/theme/hopehand/ — **404**
  (confirmed 2026-08-08). The ColorLib preview portal serves this template
  from `<slug>-colorlib.pages.dev` (verified in
  `preview.colorlib.com/assets/js/products.js`: `hopehand` →
  `hopehand-colorlib.pages.dev/`). Live demo used as the DOM reference:
  https://hopehand-colorlib.pages.dev/ (HTTP 200, ~66 KB, Astro build with
  Tailwind utility markup + compiled `/_astro/Base.DxjIFQs1.css`).
- **TEMPLATES.md screenshot:** `hopehand-template-1771943776003.jpg`
  (2400×1892) — reviewed via browser vision.
- **NEW name:** Uplift → `apps/uplift`, package
  `@free-react-templates/uplift`. Do NOT use "hopehand" anywhere as the app
  name (forbidden — source name). This prep REPLACES the stale prep folders
  `openspec/specs/template-hopehand/` and `docs/templates/hopehand/`
  (deleted with this commit — they used the forbidden source name).

## Reference research (done — do not redo)

### Screenshot (verified via browser vision, 2026-08-08)

Soft, hopeful nonprofit landing: sticky header (green hand/leaf logo +
"HopeHand", centered links About/Mission/Programs/Impact/Stories/Get
Involved/Donate/Blog/Contact, accessibility icon + green pill "Donate Now").
Hero on a soft white→mint gradient: pill outline badge "Together, We Make a
Difference", headline "Change Lives, One Family at a Time" (dark gray with
brand-green + warm orange accent word), light-gray mission paragraph, solid
green pill "Donate Now" + white shadowed pill "See Our Impact", then a
centered stats row (50,000+ Lives Changed / 120+ Communities / 15 Countries
/ $10M+ Raised, numbers in green) and a large rounded photo of smiling
children. Overall: rounded corners everywhere, generous whitespace, clean
sans-serif (Manrope).

### Structure (1:1, from live demo DOM — section order)

1. Navbar — About, Mission, Programs, Impact, Stories, Get Involved,
   Donate, Blog, Contact + pill "Donate Now" (btn-primary: px-6 py-3
   text-sm, rounded-full, colored shadow).
2. Hero — badge "Together, We Make a Difference" · H1 "Change Lives, One
   Community at a Time" · subtext (education, healthcare, opportunity) ·
   Donate Now (accent-500 px-10 py-4 text-lg font-bold rounded-full) / See
   Our Impact (white + shadow) · stats: 50,000+ Lives Changed, 120+
   Communities, 15 Countries, $10M+ Raised · large rounded photo.
3. `id="mission"` (white) — "Building a Better World Together": Education,
   Healthcare, Sustainability.
4. `id="programs"` (bg-gray-50 dark:bg-gray-900) — "How We Help":
   Education for All, Health & Wellness, Economic Empowerment,
   Environmental Action.
5. `id="impact"` — "Numbers That Matter" stats strip (Funds Raised, Lives
   Impacted, …).
6. `id="stories"` (bg-gray-50 dark:bg-gray-900) — "Lives Transformed":
   testimonial quotes.
7. `id="get-involved"` — "Join Our Mission": Volunteer, Fundraise, Partner.
8. `id="faq"` (bg-white dark:bg-gray-950) — "Frequently Asked Questions":
   accordion, 5 questions (tax-deductible, fund allocation, volunteering,
   recurring donations, international work).
9. `id="donate"` (bg-gray-900) — "Every Dollar Makes a Difference": chips
   $25/$50/$100/$250/Custom + "100% Tax Deductible" / "Charity Navigator
   4-Star" badges.
10. Footer — blurb ("Empowering communities through education, healthcare,
    and sustainable development worldwide.") · Programs column (Education,
    Healthcare, Economic Empowerment, Environment) · Organization (About
    Us, Our Team, Annual Report, Press) · Support · "Stay Updated"
    newsletter + copyright + cookie notice.

### Design tokens (extracted from compiled stylesheet 2026-08-08)

- Primary emerald: `#059669` (bg-primary-600 / btn-primary), hover
  `#047857`, `#ecfdf5` (primary-50), `#d1fae5` (primary-100), shadow
  `#0596694d`.
- Accent orange: `#f97316` (accent-500).
- Neutrals: body `background-color:#fff; color:#111827`; `bg-gray-50`
  bands; `bg-gray-900` donate band + footer; dark variants
  `dark:bg-gray-900` / `dark:bg-gray-950`.
- Font: Manrope 300–800 (Google Fonts).
- Buttons: `rounded-full` pills, `border-radius:3.40282e38px`; navbar CTA
  `px-6 py-3 text-sm`; hero CTA `px-10 py-4 text-lg font-bold`; white
  secondary with shadow; colored (green/orange) shadows on primary.
- Radii: rounded-full pills, rounded-xl / rounded-lg cards + hero image.

## Implementation checklist (for the implementer stream)

- [ ] Scaffold `apps/uplift` from the simplest existing app; package
      `@free-react-templates/uplift`; `npm install` at root; grep
      `package-lock.json` for `free-react-templates/uplift`; keep
      `injectUiSource()` in vite.config.ts
- [ ] `@theme` tokens in index.css: emerald scale (#059669 core), orange
      #f97316, Manrope font link in index.html
- [ ] Components: Navbar, Hero, Mission, Programs, Impact, Stories,
      GetInvolved, Faq, Donate, Footer (repo-standard Navbar dark toggle +
      Footer chrome)
- [ ] Placeholders: `picsum.photos/seed/uplift-<n>/<w>/<h>`; lucide-react
      icons (brand/social icons as inline SVG — lucide dropped brand icons)
- [ ] Dark mode: `dark:` variants on gray bands per demo
- [ ] Tests first (TDD, 100% coverage): one describe per component,
      scenario-style its mirroring spec Gherkin
- [ ] `scripts/verify-app.sh uplift` green; PR description must state:
      source template Hopehand, preview URL + pages.dev fallback, design
      tokens, renames, placeholders
- [ ] After merge: TEMPLATES.md line 148 `[ ]`→`[x]` + surge URL + `npm
    run readme:status`; conventional commit `feat: Uplift — nonprofit
    template (ColorLib Hopehand)`
