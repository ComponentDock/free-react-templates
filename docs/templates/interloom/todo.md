# Interloom (ColorLib Interior 2) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-interloom`.

## Source mapping

- **ColorLib item:** "Interior 2" (TEMPLATES.md line 1975).
- **Source URL:** https://colorlib.com/wp/template/interior-2/
- **Preview URL:** https://preview.colorlib.com/theme/interior-2/ — **404
  (unreachable as of 2026-09-23)**. Screenshot is the sole visual reference.
- **Preview CSS:** Not available (preview returns 404). Design tokens estimated
  from the TEMPLATES.md screenshot only.

## Reference research (done — do not redo)

### Screenshot (`interior2-free-template.jpg`)

The TEMPLATES.md screenshot was analyzed (browser vision). The image shows a
modern interior design studio website with:

1. **Navbar** (top): Logo "Interior." on the left. Navigation links centered:
   Home, Projects, Pages, Blog (dropdown), Contact. "Say Hello" CTA button
   on the right. Semi-transparent dark background overlaying the hero image.

2. **Hero** (full-width): A large interior photograph showing a modern space
   with glass partition walls, a hanging pendant light with warm glow,
   furniture (sofa, chairs) visible through the glass. Dark overlay for text
   contrast. White bold headline: "Interior Design Solution For Your Business".
   White "View Works" pill button below the headline. Left/right carousel
   arrow indicators on the edges. The hero appears to be a slider.

3. **Services/Features** (white background, three columns):
   - "— Planing" (note: this is the original ColorLib spelling)
   - "— Architecture"
   - "— 3D Design"
   Each has a gold/yellow dash prefix. Below each heading is a large
   light-gray number: "01", "02", "03".

4. **Below the fold** (not visible in screenshot crop): Standard ColorLib
   interior template pattern — project gallery, about section, testimonials,
   CTA band, footer. These sections are inferred from the template category
   and will need to be confirmed if/when a live preview becomes available.

### Design tokens (estimated from screenshot)

| Token               | Estimated value         | Notes                                           |
| ------------------- | ----------------------- | ----------------------------------------------- |
| Primary (gold)      | `#F0C53D`              | Dash prefix marks, potential button accents     |
| Dark overlay        | `rgba(0,0,0,0.5)`      | Hero image overlay                              |
| White               | `#FFFFFF`              | Body bg, hero button bg, hero text              |
| Heading (hero)      | `#FFFFFF`              | Large bold headline                             |
| Heading (body)      | `#222222`              | Service headings, nav links                     |
| Light gray          | `#D5D5D5`              | Large "01/02/03" numbers                        |
| Body text           | `#555555`              | Paragraph text (estimated)                      |
| Button radius       | ~4px (rounded rect)    | "View Works" — slightly rounded, not pill       |
| Font                | Poppins (estimated)    | Bold geometric sans-serif, common in ColorLib   |

## Implementation tasks

### Phase 1: Scaffold

- [ ] Create `apps/interloom/` (copy simplest existing app, rename package to
      `@free-react-templates/interloom`)
- [ ] Update `vite.config.ts` with `injectUiSource()`
- [ ] Add Google Fonts link for Poppins in `index.html`
- [ ] Set up `src/index.css` with Tailwind `@theme` tokens (gold `#F0C53D`,
      dark overlay, body text color)
- [ ] Create `src/App.tsx` composing all section components
- [ ] Create `public/CNAME` with `interloom.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile

### Phase 2: Sections (top to bottom)

- [ ] **Navbar.tsx** — sticky navbar: logo "Interloom", nav links (Home,
      Projects, Pages, Blog dropdown, Contact), "Say Hello" CTA. Transparent
      on top, white+shadow on scroll.
- [ ] **Hero.tsx** — full-width hero slider with dark overlay, white headline
      "Interior Design Solution For Your Business", white "View Works" CTA
      button, left/right carousel arrows. Use `picsum.photos/seed/interloom-hero`
      for background image.
- [ ] **Services.tsx** — three-column grid on white bg: "Planning", "Architecture",
      "3D Design" with gold dash prefix and large light-gray numbers (01, 02, 03).
- [ ] **ProjectGallery.tsx** — filterable project grid with hover overlays.
      Use `picsum.photos/seed/interloom-project-N` for images.
- [ ] **About.tsx** — company intro with heading, descriptive text, and image.
- [ ] **Testimonials.tsx** — client quotes carousel with names and roles.
- [ ] **CtaBand.tsx** — dark background CTA section with headline and button.
- [ ] **Footer.tsx** — links, Component Dock attribution, social icons.

### Phase 3: Tests (TDD — write before or alongside implementation)

- [ ] `Navbar.test.tsx` — renders logo, nav links, CTA; sticky behavior
- [ ] `Hero.test.tsx` — renders headline, CTA button, carousel arrows
- [ ] `Services.test.tsx` — renders three columns with numbers and headings
- [ ] `ProjectGallery.test.tsx` — renders grid, filter interaction
- [ ] `About.test.tsx` — renders heading and content
- [ ] `Testimonials.test.tsx` — renders quotes, navigation
- [ ] `CtaBand.test.tsx` — renders CTA content
- [ ] `Footer.test.tsx` — renders links, Component Dock link
- [ ] `App.test.tsx` — integration: all sections render

### Phase 4: Verification

- [ ] `npm run test:coverage` — 100% lines/functions/branches/statements
- [ ] `npm run build` — builds successfully
- [ ] `scripts/verify-app.sh interloom` — full per-app gate passes
- [ ] Visual review: screenshot matches original design intent
- [ ] No ColorLib references in `apps/interloom/` code
- [ ] Footer links to `https://www.componentdock.com/` as "Component Dock"

## Design notes for implementer

### Color palette
- **Gold accent:** `#F0C53D` — use for dash prefixes on service headings,
  hover states, and accent elements. Put in `@theme` as `--color-gold`.
- **Dark:** `#222222` — headings, nav text, dark sections.
- **Body text:** `#555555` — paragraph text.
- **Light gray:** `#D5D5D5` — large decorative numbers in services section.
- **White:** `#FFFFFF` — body background, hero button background.
- **Hero overlay:** `rgba(0,0,0,0.5)` — dark overlay over hero photograph.

### Typography
- **Font:** Poppins (Google Fonts, weights 300-700).
- **Hero headline:** 60px bold white, line-height 1.2.
- **Service headings:** 20-24px semi-bold, dark text, gold dash prefix.
- **Large numbers:** 80-100px light weight, `#D5D5D5`, decorative (not functional).
- **Body:** 16px regular, `#555555`, line-height 1.6.

### Layout patterns
- **Hero:** Full viewport width, ~80vh height, centered content, carousel.
- **Services:** 3-column CSS grid or flex, centered text, generous padding.
- **Project gallery:** 3-4 column masonry or uniform grid with hover overlay.
- **Footer:** Multi-column with links, branding, and social icons.

### Placeholder images
- Hero: `https://picsum.photos/seed/interloom-hero/1920/1080`
- Projects: `https://picsum.photos/seed/interloom-project-1/600/400` through
  `interloom-project-6`
- About: `https://picsum.photos/seed/interloom-about/800/600`

### Caveats
- The preview URL (preview.colorlib.com/theme/interior-2/) returns 404.
  All design decisions are based on the screenshot alone. If the preview
  becomes available, re-verify section order and tokens.
- The services section in the screenshot shows "Planing" (single 'n') — this
  appears to be the original ColorLib spelling. The React recreation should
  use the correct spelling "Planning" as a copy improvement.
- Below-the-fold sections (project gallery, about, testimonials, CTA, footer)
  are inferred from standard ColorLib interior template patterns. Adjust as
  needed during implementation.
