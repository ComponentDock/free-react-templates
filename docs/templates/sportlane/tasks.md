# Sportlane (ColorLib Sportify) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-sportlane`. Recreation name: **Sportlane** (NEW name —
> the ColorLib source keeps its name "Sportify").

## Source mapping

- **ColorLib item:** "Sportify" (TEMPLATES.md line 1879; section "## Gym (20)" near line 1875).
- **Source URL:** https://colorlib.com/wp/template/sportify/
- **Preview URL:** https://preview.colorlib.com/theme/sportify/ (REACHABLE, 22KB HTML, 7 CSS files)
- **Preview CSS:** `styles/main_styles.css` (22KB, 300+ lines) + `styles/responsive.css` + Bootstrap 4.1.2 + Font Awesome 4.7 + OwlCarousel2 + animate.css
- **Fonts:** 'Open Sans' (Google Fonts) — system/Google Fonts link in index.html
- **Stack:** Bootstrap 4 grid + custom CSS + OwlCarousel2 for sliders

## Reference research (done — do not redo)

### Screenshot analysis

The preview is a dark-themed fitness/gym landing page. The hero section features a full-width background image with a dark overlay, large white typography ("Never underestimate yourself"), and a bright red CTA button. Below, 3 intro feature boxes sit on a white background. The about section has a split layout (text left, image right) with a dark quote section beneath. The CTA section has a purple gradient with a split image/text layout. The classes section uses a carousel on white. The pricing section has a parallax dark background with card layouts. Footer is deep dark purple with 3 columns.

### Section order (from DOM)

1. Header (fixed) — logo, nav links, social icons, hamburger
2. Hero slider — owl-carousel, 3 slides with background images + overlay
3. Intro boxes — 3 feature cards (icon, title, description)
4. About — split: text/CTA left, image right
5. Quote — dark background, centered quote + author
6. CTA — split: image left, bulleted list + buttons right
7. Classes — owl-carousel, 3 class cards (image, title, description)
8. Pricing — parallax bg, 3 pricing cards with feature lists
9. Footer — logo, 3 columns (contact, links, address), copyright bar

### Design tokens (from main_styles.css, verified via curl)

| Token | Value | Use |
|-------|-------|-----|
| Font | 'Open Sans', sans-serif | Body text, all headings |
| Primary brand | #ff0e3b | CTA buttons, links, highlights, active states |
| Secondary brand | #190a49 | Header bg, menu bg, pricing boxes, footer bg, quote bg |
| Purple accent | #7800ff | Secondary buttons, gradient overlays |
| Gradient | linear-gradient(to right, rgba(120,0,255,0.34), rgba(255,14,59,0.34)) | CTA section overlay |
| Body text | #2c2c2c | Headings, body copy |
| Muted text | #909090, #a5a5a5 | Subtitles, secondary text |
| Background | #ffffff | Page, sections |
| Alt section bg | #eef3f6 | Intro boxes background |
| Pricing alt | #ffc016 | Alternate pricing card accent |
| Footer bg | #0f0432 | Deep dark purple footer |
| Footer text | rgba(255,255,255,0.38) | Muted footer text |
| CTA purple | #443586 | Quote/CTA author area |
| Button radius | 22px | All CTA buttons (pill shape) |
| Icon circles | 50% radius | Social icons, feature icons |
| Parallax | Used on pricing section | Background image with parallax scroll |

### Icon mapping (lucide-react)

| Source icon | Recreation |
|-------------|-----------|
| Font Awesome social icons | lucide-react: Facebook, Twitter, Instagram, etc. |
| Feature box icons | lucide-react equivalents (dumbbell, heart, fitness) |
| Menu hamburger | lucide-react: Menu |
| Menu close | lucide-react: X |
| Arrow/navigation | lucide-react: ChevronRight, ChevronLeft |

### Picsum placeholder plan

- Hero slides: `https://picsum.photos/seed/sportlane-hero-1/1920/1080` etc. (3 slides)
- About image: `https://picsum.photos/seed/sportlane-about/600/400`
- CTA image: `https://picsum.photos/seed/sportlane-cta/600/500`
- Class images: `https://picsum.photos/seed/sportlane-class-1/400/300` etc. (3 classes)

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/sportlane` from the simplest existing app, rename package to `@free-react-templates/sportlane`, add Open Sans Google Fonts `<link>` in index.html, set `public/CNAME` = `sportlane.free.componentdock.com` + `"homepage"`. Register workspace in package-lock.json.
2. [ ] Write spec-traceable test suite FIRST (Vitest + Testing Library, 100% coverage): Navbar (logo, nav links, social icons, hamburger toggle), Hero (slider with slides, CTA button), IntroBoxes (3 feature cards with icons), About (heading, text, CTA), Quote (text, author), CTA (heading, list items, buttons), Classes (heading, 3 class cards, program link), Pricing (heading, 3 pricing cards, order buttons), Footer (logo, columns, copyright, componentdock link), App (composition, document title).
3. [ ] Layout shell: install Open Sans via Google Fonts, set up Tailwind theme tokens (#ff0e3b primary, #190a49 secondary, #7800ff accent), base styles.
4. [ ] Navbar: fixed header with logo, nav links, social icons, hamburger mobile menu with slide-in overlay (#190a49 bg).
5. [ ] Hero section: full-width carousel with background images, dark overlay, large white typography, red CTA button (pill radius 22px).
6. [ ] Intro boxes: 3-column row on #eef3f6 bg, each with icon circle (50% radius), title, description.
7. [ ] About section: split layout (8-col text + 4-col image), section title, description, "Read More" pill button.
8. [ ] Quote section: dark #190a49 background, centered quote text + author attribution.
9. [ ] CTA section: split layout with gradient overlay, image left, bulleted feature list + two CTA buttons right.
10. [ ] Classes carousel: section title, owl-carousel style slider with 3 class cards (image, title, description), "Our Programs" link.
11. [ ] Pricing section: parallax background, 3 pricing cards with plan name, price, feature list, "Order Plan" pill button.
12. [ ] Footer: deep #0f0432 bg, logo, 3 columns (contact, links, address), social icons, copyright bar with Component Dock link.
13. [ ] Run `npm run verify:app -- sportlane` (typecheck → lint → vitest 100% → build) and fix until green.
14. [ ] Open PR `feat/template-sportlane` → merge immediately. PR description: source URL, preview URL, token list, what differs.
15. [ ] Bookkeeping: mark TEMPLATES.md line 1879 `[x]` + surge URL, `npm run readme:status`, push.
