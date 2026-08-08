# Moxie (ColorLib Creativex 3) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-moxie`.

## Source mapping

- **ColorLib item:** "Creativex 3" (TEMPLATES.md line 138 under the creative
  section; mark `[x]` when done — whole-line replace).
- **Source URL:** https://colorlib.com/wp/template/creativex-3/
- **Preview URL:** https://creativex-colorlib.pages.dev/ (HTTP 200, 58.1 KB
  DOM — live, analyzed 2026-08-08). The classic preview
  `https://preview.colorlib.com/theme/creativex-3/` is **404** — the template
  migrated to a Cloudflare Pages mirror (products.js maps `creativex` →
  `creativex-colorlib.pages.dev`). The pages.dev site is the canonical live
  reference.
- **Preview CSS:** `https://creativex-colorlib.pages.dev/_astro/Base.BjbRLE8f.css`
  (41 KB, Tailwind v4; custom `.btn-primary`, `.card`, `.text-gradient`).

## Reference research (done — do not redo)

### Screenshot (`creativex-template-1770211073725.jpg`; verified via browser vision)

Modern minimal creative-agency one-pager branded "Pixel Studio.": fixed
translucent navbar (logo left, Work/Services/About/Contact center-right,
phone icon + magenta "Start a Project" pill); off-white hero with soft
magenta (top-left) + orange (bottom-right) blurred glow blobs; pill badge
"Award-Winning Creative Agency" with a pulsing dot; centered giant headline
"We Create **Bold Digital** Experiences" (gradient magenta→orange span);
two pill CTAs ("View Our Work" solid magenta, "Start a Project" outlined);
4-stat row (150+ / 50+ / 12 / 8) with a scroll-mouse indicator; bordered
awards strip (Awwwards, CSS Design Awards, FWA, Webby); 3 white service
cards; 3 work cards with gradient hover overlays; 3 testimonial quotes;
contact section with 4 info blocks + a large form; light-gray 4-column
footer. Font: Inter.

### Live DOM (primary reference — matches the screenshot)

Section order: fixed header (`bg-white/95 backdrop-blur-sm shadow-sm z-50`,
logo + Work/Services/About/Contact + phone icon + btn-primary) → hero
(`bg-gray-50`, `py-24 lg:py-32`, glow blobs `blur-[128px]`, badge with
animate-ping dot, h1 text-4xl→6xl with `.text-gradient` span, subtitle
max-w-2xl, CTAs `rounded-full px-8 py-4` — solid `bg-primary-500` + outline
`border-2 border-gray-300`, stats grid, absolute scroll indicator) → awards
strip (`border-y border-gray-200 bg-white py-8`, 4 items) → services
(`bg-white py-20 lg:py-28`, 3 `.card`s with 4 bullets + Learn More) →
selected work (`bg-gray-50`, 3 image cards, hover overlay
`bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent`) →
testimonials (`bg-gray-50`, 3 quote cards) → contact (`bg-white`, 4 info
blocks + form: Name, Email, Company(opt), Service select, Budget select,
Project Details textarea, Send Message) → footer (`border-t bg-gray-50`,
4 columns + copyright bar).

## Design tokens (summary — full table in the spec)

- Brand `#d946ef` (fuchsia-500): primary buttons, links, hover, gradient
  start; tints 50 `#fdf4ff`, 100 `#fae8ff`, 200 `#f5d0fe`, 400 `#e879f9`,
  600 `#c026d3`, 700 `#a21caf`.
- Accent `#f97316` (orange-500): gradient end + hero glow blob.
- Text: `gray-900` headings, `gray-700` secondary, `gray-600` body,
  `gray-400` muted.
- Backgrounds: white (services/contact/cards), `gray-50` (hero/work/
  testimonials/footer), `gray-200` borders.
- Font: Inter 400–800 (Google Fonts link in index.html).
- Buttons: pill radius (`rounded-full`), primary `bg-primary-500` white
  semibold text + `shadow-lg shadow-primary-500/25`, hover `bg-primary-600`;
  outline `border-2 border-gray-300 bg-white text-gray-700`.
- Cards: radius 1rem, `0 4px 16px -4px #0000001a`, hover
  `0 12px 32px -8px #00000024`.
- Text gradient: `linear-gradient(to right, #d946ef, #f97316)`.
- Inputs: rounded, border gray, focus `border-primary-500` +
  `ring-primary-500/20`.
- Icons: lucide-react (Phone, ArrowRight, Check, Menu, X, Mail, MapPin,
  social SVGs inline for the follow-us row).

## Implementation tasks (ordered, TDD — tests before code)

1. [ ] Scaffold `apps/moxie` (copy simplest existing app; package
       `@free-react-templates/moxie`; `npm install` at root; register
       `injectUiSource()` in `vite.config.ts`; `homepage` surge URL).
2. [ ] `Navbar.tsx` — fixed translucent bar, wordmark "Moxie.", 4 links,
       phone icon + Start a Project pill, mobile toggle
       (aria-expanded; desktop + mobile duplicate links in DOM).
3. [ ] `Hero.tsx` — gray-50 bg + two blurred glow blobs, badge with ping
       dot, gradient-span headline, subtitle, 2 pill CTAs, stats row,
       scroll indicator.
4. [ ] `AwardsStrip.tsx` — bordered strip, 4 awards (name + year).
5. [ ] `Services.tsx` — "What We Do" header + 3 cards (title, blurb,
       4 bullets, Learn More link), hover shadow.
6. [ ] `WorkShowcase.tsx` — "Selected Work" header + View All Projects
       link + 3 image cards with hover overlay (category, title, desc).
7. [ ] `Testimonials.tsx` — heading + 3 quote cards (quote, avatar, name,
       role).
8. [ ] `Contact.tsx` — 4 info blocks + form (Name, Email, Company(opt),
       Service select, Budget select, Project Details, Send Message) with
       zod validation + per-field errors + success state.
9. [ ] `Footer.tsx` — 4 columns (brand blurb + socials, Navigation,
       Services, Contact) + copyright bar.
10. [ ] `App.tsx` composition + skip link + document title "Moxie —
        Creative Agency Template".
11. [ ] `@theme` tokens in `index.css`: `--color-brand: #d946ef`,
        `--color-ember: #f97316` + tints; Inter Google Fonts `<link>` in
        `index.html`.
12. [ ] Gate: `bash scripts/verify-app.sh moxie` (typecheck + lint + 100%
        coverage + build) + `npm run spec:validate`.
13. [ ] TEMPLATES.md: mark the Creativex 3 item `[x]` with surge URL
        `https://free-react-templates-moxie.surge.sh`; run
        `npm run readme:status`.
14. [ ] PR: `feat: Moxie — creative agency template (ColorLib Creativex 3)`;
        merge immediately (`gh pr merge --squash --delete-branch`).

## Fidelity notes (section-by-section)

- **Header:** fixed + translucent (`bg-white/95` + backdrop blur + shadow).
  Wordmark "Moxie." with a magenta accent dot replaces the "Pixel Studio."
  image logo — keep the two-tone look (dark wordmark, magenta dot/period).
- **Hero:** the two blurred glow blobs are the signature background — keep
  them (magenta top-left, orange bottom-right, `opacity-30` wrapper). The
  gradient span is ONLY on "Bold Digital" — do not gradient the whole h1.
- **CTAs:** both pills `px-8 py-4` — primary solid magenta with
  primary-tinted shadow; secondary white with `border-2 border-gray-300`.
- **Stats:** 150+ / 50+ / 12 / 8 with labels below; scroll mouse indicator
  absolutely positioned at hero bottom-center.
- **Awards strip:** flat bordered strip (border-y), 4 items, NOT cards.
- **Service cards:** white, radius 1rem, subtle shadow; 4 check bullets
  each; "Learn More" in brand magenta. Hover = deeper shadow (not lift).
- **Work cards:** image + gradient hover overlay that fades in (opacity-0 →
  100). The overlay content (category, title, desc) is hidden until hover.
- **Testimonials:** same gray-50 background as work — separate sections but
  visually continuous; each card = quote + avatar + name + role.
- **Contact form:** two selects with the exact documented options; zod
  validation; success message replaces the form on valid submit (assert
  `queryByLabelText` absent in tests).
- **Footer:** `bg-gray-50` with top border (NOT black). Copyright uses
  "Moxie" not "Pixel Studio".
- **Dark mode:** reference includes dark: variants — implement class-based
  dark mode if the app scaffold supports it; at minimum keep the tokens in
  `@theme` so `dark:` utilities work.
- **Copy:** paraphrase freely but keep the same kind of content (badge +
  headline + sub + CTAs, stat number + label, service card + bullets,
  quote + author, form fields).
- **Images:** `https://picsum.photos/seed/moxie-<n>/<w>/<h>` for work cards,
  avatars, hero imagery; never copy ColorLib/Unsplash assets.
- **Brand icons:** lucide-react removed brand icons — use inline SVG
  (simple-icons paths) for the Follow Us row.
