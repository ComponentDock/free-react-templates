# PhotoDeck (ColorLib Pemodule) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-photodeck`. Recreation name: **PhotoDeck** (NEW name —
> the ColorLib source keeps its name "Pemodule").

## Source mapping

- **ColorLib item:** "Pemodule" (TEMPLATES.md line 2461; section
  "## Photographers (16)" in Photography templates).
- **Source URL:** https://colorlib.com/wp/template/pemodule/
- **Preview URL:** https://preview.colorlib.com/theme/pemodule/ (REACHABLE — verified 2026-09-26)
- **Preview CSS:** `css/main.css` (2,548 lines) + `css/bootstrap.css` + `css/linearicons.css`
  + `css/owl.carousel.css` + `css/font-awesome.min.css` + `css/nice-select.css`
  + `css/magnific-popup.css`. Fonts: Poppins 100/300/400/500/600 via Google Fonts.

## Reference research (done — do not redo)

### Screenshot (`pemodule-free-photographer-website-template.jpg`, AVIF)

Browsed visually 2026-09-26. Browser frame shows:
- **Hero:** Full-width banner with purple-to-magenta gradient overlay on a nature
  photo (trees/forest). White "YOUR BEST PARTNER" uppercase subtitle, large
  "Pemodule" heading, and a white-bordered "Get Started →" pill button centered.
  Transparent navbar with "PEMODULE" logo left, hamburger menu right.
- **Featured section:** White background, two columns. Left: "Reasons To Choose
  Notebook" heading with "Choose" in bold. Paragraph text below. Green-gradient
  "Get Started →" button. Right: landscape mountain image carousel with purple
  dot indicator.
- **Parallax/CTA:** Dark overlay on background image. White text on right column
  with "Reasons To Choose Notebook" heading and paragraph.
- **Service cards:** (not visible in screenshot but present in HTML) Four cards
  with background images and gradient overlays.
- **Contact:** Background image with "Send Us Message" heading, form fields.
- **Newsletter:** Light lavender background, "Subscribe for our Newsletter".
- **Footer:** Dark (#222), nav links, social icons, copyright.

### Design tokens extracted from CSS

| Token | Value | Usage |
|-------|-------|-------|
| Primary gradient | `#3224b0` → `#be5ede` | Hero overlay, button hover, service card overlays, owl dots |
| Body text | `#777777` | Paragraph text |
| Heading text | `#222222` | h1-h4, body text |
| Accent green | `#6cbb23` | "Choose" highlight in featured section |
| Button radius | `20px` | All primary buttons (pill shape) |
| Section bg (newsletter) | `#f9f9ff` | Light lavender |
| Section bg (footer) | `#222222` | Dark footer |
| Parallax overlay | `#222` opacity 0.3 | Dark overlay on parallax image |
| Font | Poppins 100-600 | Global |

### Structure order (section-by-section)

1. **Navbar** — transparent, fixed/absolute over hero, logo left, nav links right, hamburger for mobile
2. **Hero Banner** — full-width, background image, gradient overlay (purple→magenta), centered content: subtitle h4, title h1, CTA button
3. **Featured Section** — white bg, two columns (6+6 Bootstrap grid), left: heading + paragraph + button, right: image carousel (owl carousel style) with dot indicators
4. **Parallax CTA** — full-width, background image with dark overlay, content right-aligned (col-lg-5), heading + paragraph + button
5. **Service Cards** — white bg, 4-column grid of cards, each with background image + gradient overlay, heading + paragraph, hover reveals content
6. **Contact Section** — background image with overlay, centered heading, form (name + email + message textarea + send button)
7. **Newsletter** — light lavender bg, centered heading with "Newsletter" highlighted, email input + subscribe button, disclaimer text
8. **Footer** — dark bg, centered nav links, social icons (FB, Twitter, Dribbble, Behance), copyright text

### Key implementation notes

- Replace all ColorLib references with "PhotoDeck" branding
- Use picsum.photos for all placeholder images (hero bg, parallax bg, service card backgrounds, contact bg, featured carousel images)
- Replace Font Awesome icons with lucide-react equivalents
- Replace Linearicons with lucide-react
- All primary buttons use the purple-to-magenta gradient on hover (20px radius)
- The featured section carousel can be simplified to a static image or a simple React carousel (no need for owl.carousel)
- Service cards should have gradient overlay that reveals on hover
- Contact form needs validation (name required, email required, message required)
- Newsletter email input with subscribe button
- Footer MUST link to Component Dock (replacing Colorlib attribution)
