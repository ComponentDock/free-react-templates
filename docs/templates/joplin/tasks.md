# Joplin (ColorLib Jonson) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-joplin`. Recreation name: **Joplin** (NEW name —
> the ColorLib source keeps its name "Jonson").

## Source mapping

- **ColorLib item:** "Jonson" (TEMPLATES.md line 2400; first unchecked
  item after Jackson in the Personal Resume section). The
  `wp/template/jonson/` slug appears ONCE in TEMPLATES.md (no dup rows).
- **Source URL:** https://colorlib.com/wp/template/jonson/
- **Preview URL — REACHABLE (verified 2026-09-26 by direct fetch):**
  **`https://preview.colorlib.com/theme/jonson/`**
  (HTTP 200, HTML page with Bootstrap 4 layout, Poppins font, warm
  cream/maroon color scheme).
- **Preview CSS:** `assets/css/style.css` (Bootstrap 4 + custom SCSS
  compiled; imports Poppins from Google Fonts). Additional stylesheets:
  `assets/css/bootstrap.min.css`, `assets/css/owl.carousel.min.css`,
  `assets/css/animate.min.css`, `assets/css/magnific-popup.css`, etc.
  The custom `style.css` contains all unique design tokens.

## Reference research (done — do not redo)

### Screenshot (`jonson-free-template.jpg`, 1200×946 AVIF→PNG)

Browsed visually 2026-09-26. The screenshot shows:
- Full-width transparent header: "Jonson." logo left, centered nav (Home,
  About, Portfolio, Blog, Contact), "Let's Talk →" dark red button right.
- Hero: warm cream/yellow (#FFEFAE) solid background, giant bold "JONSON."
  in dark red (#670000), "Digital Product Designer" subtitle, "Head of
  design at Directory." with animated word rotation.
- About section beginning: white background, "About" heading, bio text left,
  portrait photo right (man in hat, dark clothing).
- Clean, minimal, professional aesthetic. Warm color palette distinctive
  from typical blue/grey templates.

### Design tokens (live stylesheet + rendered page, verified 2026-09-26)

| Token              | Value                                      | Use                                                              |
| ------------------ | ------------------------------------------ | ---------------------------------------------------------------- |
| Font               | `'Poppins', sans-serif` (200-800)          | Google Fonts `<link>`; base weight 400; headings 600-700         |
| Primary            | `#670000` (dark red/maroon)                | All headings, nav text, links, button backgrounds                |
| Primary hover      | `#880707` (darker red)                     | Button hover gradient end color                                  |
| Section bg         | `#FFEFAE` (warm cream/yellow)              | Hero section, expertise/services section                         |
| Body text          | `#000000`                                  | Headings, primary text                                           |
| Secondary text     | `#635c5c`                                  | Paragraphs, descriptions                                        |
| White              | `#fff`                                     | Button text, card backgrounds, content section backgrounds       |
| Button gradient    | `linear-gradient(to left, #670000, #880707, #670000)` | `.btn` background                                     |
| Button style       | `border-radius: 0px`, uppercase, `letter-spacing: 3px`, 14px | All buttons (`.boxed-btn`, `.btn`, `.submit-btn2`)    |
| Header             | transparent, sticky                        | `.header-area.header-transparent`, `.main-header.header-sticky`  |
| Gallery overlay    | dark semi-transparent + plus icon          | Hover effect on portfolio images                                 |
| Contact form       | 3-column inputs + full-width textarea      | Name, Email, Subject in row; Message full-width                  |
| Footer             | social icons (Font Awesome) + copyright    | Twitter, Facebook, Pinterest, Globe, Instagram icons             |

### Dark mode

The original has NO dark mode implementation. No `[data-bs-theme="dark"]`
or `.dark` class selectors in the stylesheet. The recreation should NOT
implement dark mode (keep scope minimal for throughput).

### Section structure (from live preview HTML)

1. **Header** — transparent sticky nav with logo, nav links, CTA button
2. **Hero** — full-width cream bg, giant name, subtitle, animated text
3. **About** — 2-col (text + photo), 3 stat cards below
4. **Experience** — job entries list (title, date, company link)
5. **Education** — education entries list (same format)
6. **My Expertise** — cream bg, 3 service cards
7. **Gallery** — portfolio image grid with hover overlay
8. **Want To Work** — CTA banner with "Download CV" button
9. **Contact** — form (name, email, subject, message, send button)
10. **Footer** — social icons + copyright

### Icon mapping (lucide-react)

| Source icon (Font Awesome)       | Recreation                          |
| -------------------------------- | ----------------------------------- |
| `fa-twitter`                     | lucide `Twitter`                    |
| `fa-facebook-f`                  | lucide `Facebook`                   |
| `fa-pinterest-p`                 | lucide `Pin` (or custom)            |
| `fas fa-globe`                   | lucide `Globe`                      |
| `fa-instagram`                   | lucide `Instagram`                  |
| `ti-plus` (gallery overlay)      | lucide `Plus`                       |
| `ti-arrow-right` (CTA button)    | lucide `ArrowRight`                 |
| `fa-external-link-alt` (company) | lucide `ExternalLink`               |
| `fa-heart` (footer)              | lucide `Heart`                      |
| `fa-level-up-alt` (scroll top)   | lucide `ArrowUp`                    |

### Picsum placeholder plan

| Section      | Image type          | Placeholder URL                                       |
| ------------ | ------------------- | ----------------------------------------------------- |
| About photo  | Portrait/headshot   | `https://picsum.photos/seed/joplin-about/600/700`     |
| Gallery 1    | Portfolio item      | `https://picsum.photos/seed/joplin-port1/600/400`     |
| Gallery 2    | Portfolio item      | `https://picsum.photos/seed/joplin-port2/600/400`     |
| Gallery 3    | Portfolio item      | `https://picsum.photos/seed/joplin-port3/600/400`     |
| Gallery 4    | Portfolio item      | `https://picsum.photos/seed/joplin-port4/600/400`     |
| Gallery 5    | Portfolio item      | `https://picsum.photos/seed/joplin-port5/600/400`     |
| Gallery 6    | Portfolio item      | `https://picsum.photos/seed/joplin-port6/600/400`     |

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/joplin` from the simplest existing app
       (`cp -r apps/<simplest> apps/joplin`), rename package to
       `@free-react-templates/joplin`, add Poppins 400/500/600/700
       Google Fonts `<link>` in index.html, set `public/CNAME` =
       `joplin.free.componentdock.com` + `"homepage"`. Register the
       workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): Header (sticky, transparent bg, logo
       "Joplin.", nav links, CTA button), Hero (cream bg, name heading,
       subtitle, animated rotating text), About (heading, bio, photo, 3
       stat cards), Experience (heading, entry list with title/date/company),
       Education (heading, entry list), Expertise (heading, 3 service cards,
       cream bg), Gallery (heading, image grid, hover overlay with plus),
       CTA ("Do you want to know more?", Download CV button), Contact
       (heading, form with 4 fields, send button), Footer (social icons,
       copyright, Component Dock link), App (document title, section order).
3. [ ] Layout shell + Tailwind theme tokens in index.css: set
       `@theme` with brand colors (#670000, #880707, #FFEFAE),
       Poppins font family, button styles (square corners, gradient).
4. [ ] Header component: sticky nav with transparent→solid bg on scroll,
       logo text, nav links (smooth scroll), "Let's Talk" CTA button.
       Mobile: hamburger toggle with offcanvas/dropdown menu.
5. [ ] Hero component: full-width cream (#FFEFAE) background, large bold
       "Joplin." heading, "Digital Product Designer" subtitle, animated
       rotating text (typewriter/word swap effect for company names).
       No background image — solid color only.
6. [ ] About component: 2-column layout (text left, portrait right),
       "About" heading, bio paragraphs, 3 stat cards in a row below
       (years, investment, awards — large number + description).
7. [ ] Experience component: "Experience" heading, list of entries
       (job title, date range, company name with external link icon).
8. [ ] Education component: "Education" heading, same entry format
       as Experience.
9. [ ] Expertise component: cream (#FFEFAE) background section,
       "My Expertise" heading, 3-column grid of service cards
       (Experience Design, Interaction Design, Front-end Design),
       each with title + description.
10. [ ] Gallery component: "Selected Portfolios" heading, 2-column
        masonry-ish grid, hover overlay with dark background + Plus icon.
        Use picsum placeholders.
11. [ ] CTA banner: full-width "Do you want to know more about me?"
        heading + "Download CV" outlined button (white bg, maroon
        border/text, square corners).
12. [ ] Contact form: "Contact Me" heading, 3-column input row
        (name, email, subject), full-width textarea, "Send Message"
        submit button (maroon gradient). Form is decorative only.
13. [ ] Footer: social icons (Twitter, Facebook, Pinterest, Globe,
        Instagram via lucide), copyright with Component Dock link.
        Scroll-to-top button.
14. [ ] Run `npm run verify:app -- joplin` (typecheck → lint → vitest
        100% → build) and fix until green.
15. [ ] Open PR `feat/template-joplin` → merge immediately
        (`gh pr merge --squash --delete-branch`); PR description must
        include: source URL, preview URL, token list (#670000 maroon,
        #FFEFAE cream, Poppins, square buttons, warm palette), and what
        differs (renamed "Joplin", Poppins via Google Fonts, lucide
        icons, picsum placeholders, no dark mode, Component Dock footer).
16. [ ] Bookkeeping after merge: mark TEMPLATES.md line 2400 `[x]` +
        surge URL (`https://joplin.free.componentdock.com`),
        `npm run readme:status`, push.
