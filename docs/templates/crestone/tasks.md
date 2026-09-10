# Crestone (ColorLib Bobsled) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-crestone`. Recreation name: **Crestone** (NEW name —
> the ColorLib source keeps its name "Bobsled").

## Source mapping

- **ColorLib item:** "Bobsled" (TEMPLATES.md line 914; section "## Creative" at
  line 913). The `wp/template/bobsled/` slug appears exactly 4 times in
  TEMPLATES.md (lines 914, 1450, 2020, 2296 — same item listed in multiple
  category sections).
- **Source URL:** https://colorlib.com/wp/template/bobsled/
- **Preview URL — REACHABLE (verified 2026-09-10 by direct fetch):**
  **`https://preview.colorlib.com/theme/bobsled/`**
  (HTTP 200, 17,947 bytes, `<title>Bobsled</title>`).
- **Preview CSS:** `css/main.css` (33,377 bytes) + Bootstrap, Linearicons,
  Font Awesome, Owl Carousel, Nice Select, Magnific Popup.
  Fonts: Poppins (Google Fonts — use `<link>` tag). Icons: REPLACE Linearicons
  + Font Awesome with lucide-react. No custom JS required for the static layout.

## Reference research (done — do not redo)

### Preview DOM structure (fetched 2026-09-10)

Section order (top → bottom):
1. **Header/Navbar** — transparent overlay on hero, logo "Bobsled", nav links
   (Home, Generic, Elements), hamburger toggle for mobile
2. **Hero Banner** — `.banner-area` with blue-to-cyan gradient background,
   headline "Don't look anywhere, This is the best place on web", description,
   pill "Get Started" button. Height: 540px desktop.
3. **Working Process** — `.working-process-area` white bg, section title
   "Our Working Process", description, 4 numbered steps in horizontal row
   (Researching → Wireframing → Prototyping → Final Design) with colored
   circular icon boxes and arrow connectors.
4. **Featured/Exclusive Features** — `.featured-area` gradient bg, section title
   "Our Exclusive Features", description, 3 feature cards (Creative Design,
   Appropriate UX, Super Clean Code) with icon + title + blurb + "Read More".
5. **Remarkable Works** — white bg, section title "Remarkable Works", description,
   3 project cards with placeholder image + "Vector Illustration" title +
   description + "View Project" link.
6. **Story/CTA** — `.story-area` gradient bg, headline "From the part of
   beginning", description, pill "Get Started" button.
7. **Newsletter/Subscription** — `.subscription-area` gradient bg, heading
   "Subscribe for our Newsletter", description, pill "Get Started" button.
8. **Contact Form** — `.contact-form-area` white bg, heading "Keep in Touch",
   description, form (name, email, subject, message + "Send Message" button),
   contact info (address, email, phone).
9. **Footer** — `.footer-widget-area` dark bg, social icon links with gradient
   circular backgrounds, copyright line.

### Design tokens (extracted from main.css)

| Token | Value | Usage |
|-------|-------|-------|
| Brand gradient start | `#3e69fe` (blue) | Hero banner, featured, story, newsletter backgrounds |
| Brand gradient end | `#4cd4e3` (cyan) | Hero banner, featured, story, newsletter backgrounds |
| Text dark | `#222222` | Headings, body text |
| Text muted | `#777777` | Secondary text, descriptions |
| Light background | `#f9f9ff` | Subtle section backgrounds |
| Step icon 1 | `#3e69fe` | Working process step 1 |
| Step icon 2 | `#73fbaf` (green) | Working process step 2 |
| Step icon 3 | `#4cd4e3` (cyan) | Working process step 3 |
| Step icon 4 | `#e66686` (pink) | Working process step 4 |
| Additional accents | `#38a4ff`, `#6382e6`, `#a367e7`, `#f44a40`, `#f09359`, `#f4e700` | Feature icons, highlights |
| Font family | Poppins | All text (Google Fonts, weights 400-600) |
| Button border-radius | 20px | Pill buttons |
| Button style | Transparent bg, 1px border, dark text; gradient text on hover | Primary CTA buttons |
| Circular elements | border-radius: 50% | Step icons, social media buttons |
| Card border-radius | 8.5px | Feature cards, project cards |

### Screenshot analysis (from TEMPLATES.md image)

The Bobsled screenshot shows: a blue-to-cyan gradient hero with large bold
headline and CTA; below that, a clean white "Working Process" section with 4
numbered circular icons connected by arrows; then a gradient "Features" section
with 3 cards; a white gallery section with 3 project thumbnails; a gradient
CTA section; a newsletter subscription; a contact form with fields and contact
details; and a dark footer. Overall aesthetic: modern creative agency,
clean lines, gradient-heavy, pill buttons, circular icons.

## Tasks for implementer

### Setup
- [ ] Create `apps/crestone/` (copy simplest existing app, rename package to
      `@free-react-templates/crestone`)
- [ ] Set up `public/CNAME` with `crestone.free.componentdock.com`
- [ ] Set `"homepage": "https://crestone.free.componentdock.com"` in package.json
- [ ] Add Poppins font via Google Fonts `<link>` in `index.html`
- [ ] Register Tailwind theme tokens for brand gradient colors

### Components (section order)
- [ ] `Navbar.tsx` — transparent navbar with logo, nav links, hamburger toggle
- [ ] `Hero.tsx` — full-width gradient banner with headline, paragraph, pill CTA
- [ ] `WorkingProcess.tsx` — section title + 4-step horizontal layout with
      circular colored icons and arrows
- [ ] `FeaturedFeatures.tsx` — gradient bg section title + 3 feature cards
      (icon, title, blurb, "Read More" link)
- [ ] `RemarkableWorks.tsx` — section title + 3 project cards (picsum image,
      title, description, "View Project" link)
- [ ] `StoryCTA.tsx` — gradient bg headline + paragraph + pill CTA
- [ ] `Newsletter.tsx` — gradient bg subscription heading + pill CTA
- [ ] `ContactForm.tsx` — section title + form + contact info sidebar
- [ ] `Footer.tsx` — dark bg, social icons with gradient circles, copyright
      linking Component Dock

### Composition
- [ ] `App.tsx` — compose all sections in order
- [ ] `src/index.css` — Tailwind entry + `@theme` tokens for brand gradient

### Tests (TDD)
- [ ] One `*.test.tsx` per component
- [ ] Cover all Gherkin scenarios from spec
- [ ] 100% lines/functions/branches/statements coverage

### Verification
- [ ] `scripts/verify-app.sh crestone` passes (typecheck + lint + test:coverage
      + build)
- [ ] Visual fidelity matches preview: gradient backgrounds, pill buttons,
      circular step icons, card layouts, section ordering
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock
