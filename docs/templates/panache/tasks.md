# Panache (ColorLib "Fancy") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-panache` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Fancy" — creative agency website template
  (source: https://colorlib.com/wp/template/fancy/). Listed in
  TEMPLATES.md line 392 (Bootstrap section); dup rows at lines 1006
  (Business), 2047 (Landing Page) and 2320 (One Page) — same source, ONE
  implementation (line 392 is the claim row; mark ALL FOUR `[x]` after
  merge).
- **Naming:** the source name "fancy" must NOT be reused. New name =
  **Panache** (verified free in `apps/`, `openspec/specs/`,
  `docs/templates/`). Fits the stylish creative-agency feel.
- **Preview URL:** https://preview.colorlib.com/theme/fancy/ (HTTP 200,
  28.9 KB, title "Fancy - Creative Agency Template"). Fetched:
  `/tmp/fancy/preview.html`, `/tmp/fancy/style.css` (22.6 KB),
  `/tmp/fancy/responsive.css` (4.4 KB), screenshot `/tmp/fancy/shot.jpg`
  (1200×933, viewed in browser: team-in-office hero photo with dark
  overlay, centered headline + solid purple "ABOUT US" + outline
  purple-border "GET A QUOTE" buttons, white brand wordmark + nav +
  search/bag icons top, white 3-column features box overlapping the hero
  bottom; screenshot cropped after the features box — preview DOM
  authoritative for the rest).
- **Visual design:** bold creative-agency landing driven by a
  purple→green gradient brand: `#7450fe` → `#21d397`. Signature
  elements: gradient-frame buttons (2px purple left, 2px green right,
  gradient top/bottom lines) that FILL with the gradient on hover/active;
  a 900px animated photo hero (dark `rgba(4,8,29,0.7)` overlay, "Watch
  The Overview" play link with white circle + teal play icon, 48px white
  headline); the white features box straddling the hero bottom edge;
  8px gradient progress bars; photo-background services + CTA bands;
  170px circular testimonial avatar with a 120px Playfair " quote in
  gradient text; dark navy `#131627` footer with teal socials.
- **Font:** `"Poppins"` for EVERYTHING (body 14px/2 `#51545f`, headings
  500 `#232d37`); `"Playfair Display"` serif ONLY for the testimonial
  quote marks (`.playfair-font.quote`, gradient text via
  `background-clip: text`). Google Fonts `<link>` in `index.html`.
- **Brand colors:** `#7450fe` purple + `#21d397` green (gradient —
  buttons, bars, quote, underlines), `#2bc0a4` teal (icons, socials,
  video play, close btn), `#232d37` heading navy, `#51545f` body gray,
  `#b5aec4` footer widget text, `#f7f7f7` bg-gray, `#131627` footer bg,
  `#2b2e3d` footer input bg, `#e5e5e5` dividers/track, overlay
  `rgba(4,8,29,0.7)` (sticky nav `0.85`).
- **Structure (1:1 from the preview DOM):**
  1. `div#preloader` (loader spinner) — optional; skip or brief spinner.
  2. `div.fancy-search-form` (fixed white 100px bar, slides from
     `top:-130px` on `.search-form-on`, 36px transparent input + teal
     close) — toggle via navbar search icon.
  3. `header.header_area#header` (fixed, 100px, transparent → sticky
     `rgba(4,8,29,0.85)`) — brand "Panache" (Poppins 700 30px white,
     lowercase), links Home (active) · Pages (dropdown) · Work · Blog ·
     Shop · Contact, right search + bag icons. Mobile: hamburger panel.
  4. Hero `div.fancy-hero-area.bg-img.bg-overlay.animated-img` (900px /
     600px mobile, inline bg image + `rgba(4,8,29,0.7)` overlay) — play
     link "Watch The Overview", h2 "Website Design, Brand Strategy,
     Digital Marketing with Stunning Results" (48px white 700), buttons
     "About Us" (fancy-active SOLID) + "Get a quote" (outline).
  5. Top features `div.fancy-top-features-area.bg-gray` — absolutely
     positioned white box (bottom:50% translateY(50%); static
     `bottom:-100px` mobile) with THREE white cards (padding 45px/15px):
     teal icon + "Reliability" / "Expertise" / "Quality" + lorem; 1px
     `#e5e5e5` divider between (none after last). Shadow
     `2px 3px 10px rgba(0,0,0,0.15)`, radius 2px.
  6. About `section.fancy-about-us-area.bg-gray` (padding 200px 0 100px)
     — left `about-us-text`: h2 "We Are A Creative Digital Agency Focused
     on Growing Brands Online" (38px) + 2 paragraphs + "Read More"
     (fancy-dark); right `about-us-thumb`: photo (fadeInUp).
  7. Skills `section.fancy-skills-area.section-padding-200` (white) —
     absolute left thumb (50% width, static on mobile); right: heading
     "We Serve All Industries" + sub + FOUR progress bars (h6 label +
     8px track `#e5e5e5`, gradient fill): Website Design · Brand
     Strategy · Digital Marketing · Website Development; "Work with us"
     (fancy-dark).
  8. Services `section.fancy-services-area.bg-img.bg-overlay.section-
padding-100-70` (photo hero-2 + overlay, white heading) — "Our
     Services" + tagline sub; THREE centered icon cards: Website Design ·
     Website Development · Digital Marketing + lorem (paraphrase the
     source's "The Fancy that recognize..." lorem — drop the source
     name).
  9. Testimonials `section.fancy-testimonials-area.section-padding-100`
     (white) — owl carousel of 3 IDENTICAL slides; one static slide is
     acceptable: 170px circular photo + Playfair gradient " mark + long
     praise quote + "Aigars Silkalns - CEO DeerCreative".
  10. CTA `section.fancy-cta-area.bg-img.bg-overlay.section-padding-100`
      (photo hero-3 + overlay) — "Ready To Discuss Your Project?" + p +
      "Work with us" (outline).
  11. Blog `section.fancy-blog-area.section-padding-100-70` (white) —
      "Latest News" + tagline sub; THREE cards: photo + h5 title link
      ("We Create Experiences" / "Simple, Fast And Fun" / "Device
      Friendly") + lorem + "Learn More".
  12. Footer `footer.fancy-footer-area.fancy-bg-dark` (`#131627`,
      padding 80px 0 50px) — FOUR widgets: Our Newsletter (p + 40px
      `#2b2e3d` input + Subscribe btn + FIVE teal socials: facebook,
      twitter, google-plus, instagram, pinterest — hover purple) ·
      Twitter Feed (tweet + "About 20 hours ago") · Link Categories
      (2-col: Agency Home, Studio About, Studio Services, Blogs, Work,
      Shop, Privacy) · Contact Us (phone "1 (800) 686-6688", email
      "info.deercreative@gmail.com", address "40 Baria Sreet 133/2
      NewYork City, US", "Open hours: 8.00-18.00 Mon-Fri"). Bottom bar:
      copyright + MANDATORY Component Dock link
      (https://www.componentdock.com/), NO ColorLib credit; footer nav:
      Disclaimer · Privacy · Advertisement · Contact us.
- **Source quirks:** footer copyright credits ColorLib (replace with
  Component Dock); testimonial owl carousel has 3 identical slides (one
  static slide OK); blog/service links point to subpages
  (static-page.html / contact.html — drop, keep plain links); hero swaps
  3 background images (use one + optional slow pan animation);
  preloader (optional).

## Implementation tasks (for the implementer stream)

- [ ] Branch `feat/template-panache` off main; copy the simplest existing
      app; rename package to `@free-react-templates/panache`; `npm
    install` at root so package-lock.json registers the workspace.
- [ ] Write `apps/panache` tests FIRST (red): one `describe` per
      component, scenario-style `it` blocks mirroring the spec's Gherkin
      scenarios; 100% lines/functions/branches/statements. NOTE: desktop + mobile navs render duplicate links — use `getAllByRole` and index
      the mobile one last.
- [ ] `src/index.css` `@theme` tokens: `--color-brand: #7450fe`,
      `--color-brand-2: #21d397`, `--color-accent: #2bc0a4`,
      `--color-heading: #232d37`, `--color-ink: #51545f`,
      `--color-gray: #f7f7f7`, `--color-footer: #131627`, `--color-widget:
    #b5aec4`, `--color-input: #2b2e3d`; fonts Poppins + Playfair
      Display via `<link>` in `index.html`; gradient via
      `bg-linear-to-r from-[#7450fe] to-[#21d397]` utilities.
- [ ] Components: `Navbar` (sticky bg + mobile panel + search overlay),
      `Hero` (play link + headline + 2 CTAs), `TopFeatures` (3-card
      straddling box), `About`, `Skills` (4 progress bars),
      `Services` (photo bg), `Testimonials` (1–3 static slides),
      `Cta`, `Blog` (3 cards), `Footer` (4 widgets + socials +
      Component Dock credit).
- [ ] Placeholder images `picsum.photos/seed/panache-<n>/<w>/<h>`; icons
      from lucide-react (lucide has NO brand icons — facebook/twitter/
      google+/instagram/pinterest as inline SVGs); no ColorLib
      assets/strings anywhere in `apps/`.
- [ ] `public/CNAME` = `panache.free.componentdock.com`; package.json
      `homepage` = `https://panache.free.componentdock.com`.
- [ ] Gate: `scripts/verify-app.sh panache` (typecheck + lint + 100%
      coverage + build) — FAST_MODE; full `npm run gate` runs in CI.
- [ ] PR description: source template, preview URL, design tokens, what
      differs (name, placeholders, paraphrased copy, no subpages).
- [ ] After merge: mark TEMPLATES.md lines 392, 1006, 2047, 2320 `[x]` +
      surge URL + `npm run readme:status`.
