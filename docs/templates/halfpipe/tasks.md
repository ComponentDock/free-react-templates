# Halfpipe (ColorLib Skater) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-halfpipe`. Recreation name: **Halfpipe** (NEW name —
> the ColorLib source keeps its name "Skater").

## Source mapping

- **ColorLib item:** "Skater" (TEMPLATES.md line 2428; first unchecked `- [ ]`
  item).
- **Source URL:** https://colorlib.com/wp/template/skater/
- **Preview URL — REACHABLE (verified 2026-09-26 by direct curl fetch):**
  `https://preview.colorlib.com/theme/skater/` (HTTP 200, 754 lines HTML,
  `<title>Skater — Website Template by Colorlib</title>`).
- **Preview CSS:** `css/style.css` (fetched 2026-09-26 — all custom styles,
  Bootstrap 4 base, icomoon + flaticon icon fonts). Scripts: jQuery 3.3.1,
  Bootstrap, Owl Carousel, AOS, Fancybox, sticky, waypoints, animateNumber.
- **Fonts:** Google Fonts Rubik (300, 400, 700) + Oswald (400, 700) via
  `<style>` inlined by Cloudflare; icomoon + flaticon icon fonts (REPLACE
  with lucide-react).

## Reference research (done — do not redo)

### Screenshot (`skater-free-template.jpg`)

The screenshot shows a dark-themed skateboarding personal brand site. The hero
area has a large background image of a skateboarder with a dark overlay, white
Oswald uppercase heading "Hi I'm John and I Skate a lot", and an outline-white
CTA button. Below: services section with skateboard-themed icons, an about
section with alternating image+text blocks, pricing cards, team members,
testimonials carousel, blog posts, and a contact form — all on a dark charcoal
background with orange accent throughout.

### Live preview DOM structure (fetched 2026-09-26)

Full HTML structure extracted from `https://preview.colorlib.com/theme/skater/`:

```
header.site-navbar (sticky, overlay on hero)
  .site-logo "Skater" (primary accent)
  nav → ul.site-menu: Home, Services, About (dropdown: Team, Pricing, FAQ, More Links), Testimonials, Blog, Contact

div.owl-carousel.slide-one-item (hero carousel)
  slide 1: hero_3.jpg bg, overlay, h1 "Hi I'm John and I Skate a lot", p, btn-outline-white "Get in touch"
  slide 2: hero_2.jpg bg, overlay, h1 "New Generation of Skating", p, btn-outline-white "Get in touch"

div#services-section (services)
  h2 "Services" + subtitle
  6× .block__35630 cards (3-col grid): icon (flaticon), h3 (white), description

div.block__73694 (about - 2 alternating blocks)
  block 1: img_1.jpg left | text right: h2 "My Best Performance" (primary), paragraphs, ul-check list
  block 2: img_2.jpg right | text left: h2 "My Best Mentor" (primary), paragraphs, ul-check list

div#about-section (video + stats)
  figure.block-img-video-1: hero_2.jpg with play button → Vimeo embed
  4× .block-counter-1: 30+ Years, 4+ Expert Trainer, 4+ Number of Trainer, 1500+ Members

div#team-section (team)
  h2 "Our Team" + subtitle
  3× .block-team-member-1: circular photo, name (primary), role, 3 social buttons

section#pricing-section (pricing)
  h2 "Session Pricing" + subtitle
  3× .pricing cards: Basic $47, Premium $200, Professional $750
  Feature lists with .ul-check.success (green checks) + .remove for excluded

div#faq-section (FAQ)
  h2.section-title "Frequently Ask Questions" (primary)
  8 FAQ items in 2-col layout (4 per column)

div#testimonials-section (testimonials)
  h2 "Testimonial"
  owl-carousel: 4 testimonial cards (blockquote + photo + name)

div#blog-section (blog)
  h2 "Our Blog" + subtitle "Latest Blog Posts"
  2 blog posts: image + title + date/author + excerpt + "Read More"

div#contact-section (contact)
  h2 "Contact Me" + subtitle "Get In Touch"
  Form: 2 name fields (row), email, textarea, submit (primary)
  CTA column: h2 "Need to know more..." (primary) + p + "Get Started" button

footer.site-footer
  About Us column + Features links column
  Newsletter subscribe (input + primary button)
  Social links (Facebook, Twitter, Instagram, LinkedIn)
  Copyright line (replace Colorlib attribution with Component Dock)
```

### Design tokens extracted from `css/style.css`

- **Brand color:** `#ff8b00` (orange) — used for: `.text-primary`, active nav,
  team member names, pricing numbers, FAQ headings, testimonial dots, social
  button hover, icon colors, CTA buttons, dropdown border-top, checkmark icons
- **Body bg:** `#222` (dark charcoal)
- **Card bg:** `#333` (team, pricing, testimonials, form inputs, footer)
- **Body text:** `#939393` (grey)
- **Heading font:** Oswald 400/700, uppercase, sans-serif
- **Body font:** Rubik 300/400/700, system fallbacks
- **Buttons:** Bootstrap `.btn` with `.btn-md` (8px 20px), `.btn-outline-white`
  (2px white border), `.btn-primary` (#ff8b00), `.btn-secondary` (default)
- **Team photos:** `border-radius: 50%` (circular)
- **Pricing:** `.pricing` cards with dark bg, `.price > span > span` in large
  orange, `.ul-check.success` green `#71bc42` checkmarks
- **Hero:** `.site-section-cover.overlay` — full-viewport bg images with
  `::before` overlay, h1 at 4.5rem (2rem mobile) Oswald uppercase white
- **Counters:** `.block-counter-1 .number` — 4rem Oswald white with primary
  underline, `.caption` 14px white

## Task outline

### Phase 1: Scaffold
1. Copy simplest existing app as starter (e.g., `apps/aurora` or similar)
2. Rename package to `@free-react-templates/halfpipe`
3. Update `public/CNAME` → `halfpipe.free.componentdock.com`
4. Update `package.json` homepage → `https://halfpipe.free.componentdock.com`
5. Run `npm install` at repo root to register workspace in lockfile
6. Set up `vite.config.ts` with `injectUiSource()` pattern
7. Add Google Fonts (Oswald 400/700 + Rubik 300/400/700) to `index.html`

### Phase 2: Design tokens in `src/index.css`
1. Register brand color `#ff8b00` as `--color-primary` in `@theme`
2. Register dark backgrounds: `--color-surface: #333`, `--color-bg: #222`
3. Set body background to `#222`
4. Configure font families: Oswald for headings, Rubik for body

### Phase 3: Components (section by section)
Build each component in `src/components/`, test with Vitest + RTL:

1. **Navbar.tsx** — sticky, logo with primary accent, dropdown (About → Team/Pricing/FAQ), mobile hamburger
2. **HeroCarousel.tsx** — Owl Carousel equivalent (use a React carousel or CSS), 2 slides with bg images + overlay + CTA
3. **Services.tsx** — 6 service cards in 3×2 grid, lucide-react icons (replace flaticon), white headings
4. **AboutPerformance.tsx** — 2 alternating image+text blocks with checkmark lists
5. **VideoStats.tsx** — Video area + 4 animated counter stat cards
6. **Team.tsx** — 3 team member cards, circular photos, social buttons, hover lift
7. **Pricing.tsx** — 3 pricing tiers, feature lists with green checks
8. **FAQ.tsx** — 2-column FAQ with orange question headings
9. **Testimonials.tsx** — Carousel with dark blockquotes, circular photos, dots
10. **Blog.tsx** — 2 blog post cards side by side
11. **Contact.tsx** — Form (2 name fields, email, textarea, submit) + CTA text
12. **Footer.tsx** — Dark bg, About Us + Features + Newsletter + Social + Component Dock link

### Phase 4: App.tsx composition
Compose all sections in order: Navbar → Hero → Services → About → VideoStats → Team → Pricing → FAQ → Testimonials → Blog → Contact → Footer

### Phase 5: AOS animations
Add AOS (Animate On Scroll) fade-up animations with staggered delays. Use the `aos` npm package or a lightweight alternative.

### Phase 6: Tests (100% coverage)
Write tests for every component: renders, accessibility, interactions, responsive behavior. Target 100% lines/functions/branches/statements.

### Phase 7: Verification
Run `npm run verify:app halfpipe` — must pass typecheck + lint + tests + build.

## Fidelity notes

- **ColorLib icon fonts (icomoon, flaticon) must be REPLACED** with lucide-react. Map the skateboard icons to relevant lucide icons (e.g., `Skateboard` if available, or `Gamepad2`, `Dumbbell`, `Users`, `Award`).
- **Owl Carousel must be REPLACED** with a React carousel (e.g., pure CSS/JS implementation or a lightweight React carousel component). Do not add owl-carousel as a dependency.
- **AOS (Animate On Scroll)** — the original uses AOS.js. Can use the `aos` npm package or implement with Intersection Observer + CSS transitions.
- **Fancybox (video lightbox)** — replace with a simple modal or inline video embed. Do not add fancybox as a dependency.
- **jQuery must NOT be used** — all interactivity via React state + hooks.
- **Placeholder images** use `https://picsum.photos/seed/halfpipe-<n>/<w>/<h>` with deterministic seeds.
- **Footer attribution** must link to Component Dock, not ColorLib.
- **No ColorLib references** in any app source file, comment, or data.
