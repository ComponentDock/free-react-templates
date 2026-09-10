# Brisk (ColorLib Bato) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-brisk`.

## Design notes (replication findings)

- **Original:** ColorLib "Bato" — a free photography portfolio template
  (source: https://colorlib.com/wp/template/bato/). Multi-page template
  with sidebar navigation system, hero carousel, about, work, blog, and
  contact pages. Recreated as a single-page scrolling layout combining all
  sections.
- **Preview URL:** https://preview.colorlib.com/theme/bato/ (LIVE, HTTP 200,
  10,454 bytes HTML). Full template with sidebar nav, hero carousel, and
  multi-page content.
- **Preview DOM analyzed (LIVE, fetched via curl):** HTML contains:
  - Sidebar nav (`#colorlib-main-nav`): full-height right panel with search,
    5 nav links (Home, Work, Blog, About, Contact), 4 gallery thumbnails
  - Header: logo "Bato" + hamburger toggle
  - Hero carousel (`#colorlib-hero`): Owl Carousel with 3 slides, each a
    split layout (75% image / 25% text panel with number, tag, headline,
    description, CTA button)
  - Pages: about.html, work.html, blog.html, contact.html (separate pages
    in original; combined into single page for recreation)
- **CSS analyzed:** `css/style.css` (1,058 lines) + `css/bootstrap.css`,
  `css/animate.css`, `css/owl.carousel.min.css`, `css/magnific-popup.css`.
  Key tokens extracted from style.css.
- **Screenshot:** `bato-free-template.jpg` (AVIF format, 38,678 bytes) —
  shows the hero carousel with a large landscape photo on the left and
  text panel on the right, sidebar nav with gallery thumbnails visible.
  Golden yellow accent color visible on active nav and buttons.
- **Fonts:** Karla (body, 400/700) + Playfair Display (headings, 400/700/italic)
  loaded via cf-fonts inline @font-face. Recreation uses Google Fonts links.
- **Brand color:** `#F9CE00` (golden yellow) — used on active nav links,
  search button background, and links. All other text is black/gray on white.
- **Hero structure:** Each slide = `hero-flex` with `col-three-forth` (image)
  + `col-one-forth` (text panel). The `number` element is 220px decorative
  slide counter. The `tag` is 13px uppercase with 7px letter-spacing.
  The `btn-view` CTA has 1px solid black border, 13px uppercase, 7px
  letter-spacing, zero border-radius (sharp rectangle).
- **Nav panel:** 360px width (300px on mobile), white background, absolute
  positioned right side. Contains: search form with golden yellow submit
  button, nav links list, and gallery thumbnails (50% width, 150px height
  each in a 2-column grid).
- **About section:** `about-flex` layout — 50/50 split with scrollable image
  left and stacked content blocks right. Each block has: `span.title` tag,
  `h2.about-head` heading, description paragraphs. Sections: "About Us",
  "My Story", "Career" + contact info (Office address, email, social).
- **Work section:** `work-entry-flex` entries — flex layout with image
  (`col-three-forth`, 55%) and text panel (`col-one-forth`, 45%).
  Each entry has headline link and description.
- **Blog section:** Blog entries with background images, tag labels, dates,
  and headline links.
- **Subscribe:** `#colorlib-subscribe` — heading "Subscribe Newsletter",
  email input + "Subscribe Now" button (golden yellow `.btn-primary`).
- **Footer:** `#footer` — three columns: Office, Get in Touch, Social.
  Footer heading color black, social icons black, clean typography.
- **Design rhythm:** Photography portfolio aesthetic — full-bleed images,
  elegant serif headings, minimal color palette (black/white/gray + golden
  yellow accent), generous whitespace (10em section padding), sharp
  unrounded buttons with uppercase text and wide letter-spacing.

## Structure order (1:1 single-page adaptation)

1. **Navbar** — Fixed top: "Brisk" logo (24px uppercase Playfair Display
   black) left + hamburger toggle right. Sidebar panel: 360px white bg,
   search + golden yellow button, 5 nav links (Home/Work/Blog/About/Contact),
   4 gallery thumbnails (2x2 grid, 150px height each).

2. **Hero Carousel** — Full-viewport, 3 slides. Each slide: 75% background
   image (picsum placeholder) + 25% text panel with: 220px slide number
   ("01/03"), tag (13px uppercase ls-7px), headline (Playfair Display),
   description, "View Galleries" bordered CTA (1px solid black, uppercase,
   ls-7px). Prev/next arrows at bottom-left.

3. **About** — 50/50 flex: left = scrollable image, right = three stacked
   content blocks (tag + Playfair heading + paragraphs): "About Us",
   "My Story", "Career" + Office address, email, social links.

4. **Works** — Flex entries (55% image / 45% text): headline link
   (Playfair Display) + description. Scroll animations.

5. **Blog** — Grid entries: background images, tag labels, dates,
   headline links. Two-column on desktop.

6. **Subscribe** — Centered: "Subscribe Newsletter" heading, email input,
   golden yellow "Subscribe Now" button.

7. **Footer** — Three columns: Office (address), Get in Touch (email +
   social icons), Social (social media icons). Component Dock link.

## Implementation tasks

- [ ] Scaffold `apps/brisk` (copy simplest existing app; package
      `@free-react-templates/brisk`; `public/CNAME` =
      `brisk.free.componentdock.com`; homepage =
      `https://brisk.free.componentdock.com`); register workspace in
      `package-lock.json`
- [ ] `index.html`: title "Brisk — Photography Portfolio", Google Fonts
      `<link>`s for Karla (400, 700) + Playfair Display (400, 700, italic)
- [ ] `src/index.css` tokens: `#F9CE00` (brand golden yellow), `#000000`
      (black for headings/links/buttons), `gray` (body text), `#FFFFFF`
      (backgrounds), `rgba(0,0,0,0.8)` (heading color), `#CCCCCC`
      (input borders); `a` transition 0.5s
- [ ] Components: `Navbar` (logo + hamburger + sidebar panel with search,
      nav links, gallery grid), `HeroCarousel` (3 slides, split layout,
      slide numbers, tags, headlines, CTAs, prev/next arrows),
      `AboutSection` (50/50 flex, 3 content blocks + contact info),
      `WorksSection` (flex entries with images + text), `BlogSection`
      (grid entries with images + text), `Subscribe` (heading + email
      form), `Footer` (3 columns + Component Dock link)
- [ ] Hero carousel: full-viewport height, 75/25 split per slide,
      picsum `seed/brisk-{1,2,3}/1200/800` placeholders, slide numbers
      (220px decorative), tags (13px uppercase ls-7px), "View Galleries"
      bordered CTA (1px solid black, 13px uppercase, ls-7px, zero radius)
- [ ] Sidebar nav: 360px (300px mobile), white bg, right-side slide-in,
      search form + `#F9CE00` submit button, 5 nav links (uppercase 14px),
      4 gallery thumbnails (50% width, 150px height, 2x2 grid)
- [ ] About section: 50/50 flex, left = scrollable image (`picsum
      `seed/brisk-about/600/800`), right = "About Us" / "My Story" /
      "Career" blocks with tag + Playfair heading + paragraphs + contact info
- [ ] Works section: flex entries (55% image / 45% text), 6 entries,
      picsum placeholders, Playfair headline links + descriptions,
      scroll animations
- [ ] Blog section: grid entries with background images, tag labels,
      dates, headline links, 2-column desktop layout
- [ ] Subscribe: centered section, "Subscribe Newsletter" heading,
      email input + golden yellow "Subscribe Now" button
- [ ] Footer: Office / Get in Touch / Social columns, Component Dock
      link (`https://www.componentdock.com/`), no ColorLib references
- [ ] Responsive: hamburger visible below 768px, hero text stacks,
      about columns stack, work entries stack, footer columns stack
- [ ] Tests: 100% coverage (navbar toggle, sidebar open/close, hero
      carousel slides + navigation, about blocks, work entries, blog
      entries, subscribe form, footer columns + Component Dock link,
      responsive classes)
- [ ] `npm run verify:app brisk` passes; commit `feat: add brisk …`;
      PR + immediate squash merge; then TEMPLATES.md bookkeeping —
      line 907 (Bato) → `[x]` + surge URL + `npm run readme:status`

## Verification checklist (from spec)

- [ ] Navbar: "Brisk" logo (24px uppercase Playfair Display black) + hamburger
- [ ] Sidebar: 360px white panel, search + #F9CE00 button, 5 nav links, 4 thumbnails
- [ ] Hero: 3 slides, 75/25 split, slide numbers (01/03–03/03), tags, headlines, CTAs
- [ ] Hero arrows: prev/next navigation, counter updates
- [ ] About: 50/50 flex, 3 content blocks (About Us, My Story, Career), contact info
- [ ] Works: flex entries (55%/45%), headline links, descriptions, scroll animations
- [ ] Blog: background images, tags, dates, headline links, 2-column desktop
- [ ] Subscribe: heading, email input, golden yellow "Subscribe Now" button
- [ ] Footer: 3 columns (Office, Get in Touch, Social), Component Dock link
- [ ] Typography: Karla body + Playfair Display headings (Google Fonts)
- [ ] Brand: #F9CE00 golden yellow on active nav, search btn, subscribe btn
- [ ] Responsive: stacked below 768px, hamburger visible, all sections adapt
- [ ] No ColorLib references in apps/brisk
- [ ] `npm run verify:app brisk` green; TEMPLATES.md line 907 bookkept `[x]`
