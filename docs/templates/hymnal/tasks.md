# Hymnal (ColorLib Wisdom) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-hymnal`. Recreation name: **Hymnal** (NEW name —
> the ColorLib source keeps its name "Wisdom").

## Source mapping

- **ColorLib item:** "Wisdom" (TEMPLATES.md line 1310; section
  "## Nonprofit / Church (8)" at line 1296). The
  `wp/template/wisdom/` slug appears exactly ONCE in TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/wisdom/
- **Preview URL — REACHABLE (verified by direct fetch):**
  `https://preview.colorlib.com/theme/wisdom/`
  (HTTP 200, 35,638 bytes, `<title>Wisdom - Free Bootstrap 4 Template
  by Colorlib</title>`).
- **Preview CSS:** `css/style.css` (combined Bootstrap 4 + custom Wisdom
  styles). External: Google Fonts "Work Sans". Scripts: Bootstrap 4
  jQuery, YouTube background player, GLightbox, AOS, custom `js/main.js`.

## Reference research (done — do not redo)

### Screenshot (from TEMPLATES.md)

Church template with a full-height hero showing a dark teal-overlaid
background, centered white text "Needing Jesus Christ Together", a white-
outlined CTA button. Below: a dark navy horizontal bar with service cards,
an about section with ministry cards and photos, a parallax newsletter
section, sermon entries, testimony carousel, counters, events, blog, and
a dark footer. Aesthetic: warm, modern church feel, teal/navy color scheme,
Work Sans typography, clean Bootstrap grid.

### Section order (from fetched HTML, verified live)

1. Navbar (dark, brand "Wisdom" → "Hymnal", nav links, mobile toggle)
2. Video hero (700px, bg image, teal overlay #08c299, YouTube video
   embed, centered text, "Save your spirit" outline CTA)
3. Bible study bar (dark navy #272e4f, overlapping hero by -150px,
   4-col: Bible Study title/desc + 3 feature columns)
4. About / Ministry section (heading "Giving light to someone", 3
   ministry cards with images)
5. Newsletter parallax (parallax bg image, dark overlay, heading
   "Subscribe to our Newsletter", email input + submit)
6. Sermons section (heading "Watch our sermons", sermon entries with
   image + text)
7. Testimony section (bg-light, heading "Testimonies", carousel with
   circular avatars, coral quote icons, names)
8. Counter section (heading "Church Achievements", 3 animated counters)
9. Events section (bg-light, heading "Our latest events", event entries
   with date badges)
10. Blog section (heading "Recent Blog", blog cards)
11. Footer (dark navy #272e4f, 4-column layout + copyright)

### Design tokens (live stylesheet + rendered page)

| Token               | Value                          | Use                                                                           |
| ------------------- | ------------------------------ | ----------------------------------------------------------------------------- |
| Brand               | `#78d5ef`                      | Primary button bg (light blue), accent                                        |
| Brand hover         | `#56caeb`                      | Button hover                                                                  |
| Brand active        | `#4ac7ea`                      | Button active                                                                 |
| Navy                | `#272e4f`                      | Bible study bar bg, footer bg (dark navy)                                     |
| Hero overlay        | `#08c299`                      | Teal green gradient overlay on hero                                           |
| Accent              | `#ff5656`                      | Coral red — testimony quote icons, some CTA buttons                           |
| Accent light        | `#ffd6d6`                      | Light pink — testimony quote icon bg                                          |
| Bg light            | `#f8faff`                      | Very light blue-gray — testimony section, events section                      |
| Ink                 | `#212529`                      | Body text, dark text                                                          |
| White               | `#fff`                         | Hero text, button text, footer text                                           |
| Font                | 'Work Sans', sans-serif        | Google Fonts; body base ~16px                                                 |
| Btn radius          | `30px`                         | Pill-shaped buttons (border-radius 30px)                                      |
| Navbar bg           | Bootstrap dark (`#343a40`)     | Dark navbar background                                                        |

### Icon mapping (lucide — probe ALL with `typeof` before use)

| Source glyph                 | Recreation                          |
| ---------------------------- | ----------------------------------- |
| `fas fa-bars`                | lucide `Menu`                       |
| `fas fa-play`                | lucide `Play`                       |
| `fas fa-calendar`            | lucide `Calendar`                   |
| `fas fa-map-marker-alt`      | lucide `MapPin`                     |
| `fas fa-phone`               | lucide `Phone`                      |
| `fas fa-paper-plane`         | lucide `Send`                       |
| `fas fa-heart`               | lucide `Heart`                      |
| `fas fa-quote-left`          | lucide `Quote`                      |
| `fab fa-facebook-f`          | lucide `Facebook` (or `Globe` alt)  |
| `fab fa-twitter`             | lucide `Twitter` (or `Globe` alt)   |
| `fab fa-instagram`           | lucide `Instagram` (or `Globe` alt) |
| YouTube icon                 | lucide `Youtube`                    |

Note: Source uses Font Awesome CDN. Recreation SHALL NOT ship Font
Awesome — use lucide-react icons instead.

### Picsum placeholder plan

| Section              | Placeholder seed pattern                           | Dimensions     |
| -------------------- | -------------------------------------------------- | -------------- |
| Hero bg              | `picsum.photos/seed/hymnal-hero/1920/700`         | 1920×700       |
| Bible study column   | (no images — text only)                            | —              |
| Ministry cards       | `picsum.photos/seed/hymnal-ministry-N/800/500`    | 800×500 (×3)   |
| Parallax newsletter  | `picsum.photos/seed/hymnal-parallax/1920/800`     | 1920×800       |
| Sermon images        | `picsum.photos/seed/hymnal-sermon-N/800/600`      | 800×600 (×2)   |
| Testimony avatars    | `picsum.photos/seed/hymnal-person-N/150/150`      | 150×150 (×4)   |
| Event images         | `picsum.photos/seed/hymnal-event-N/800/400`       | 800×400 (×2)   |
| Blog images          | `picsum.photos/seed/hymnal-blog-N/800/500`        | 800×500 (×3)   |

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/hymnal` from the simplest existing app
       (`cp -r apps/<simplest> apps/hymnal`), rename package to
       `@free-react-templates/hymnal`, add Work Sans 400/500/600/700
       Google Fonts `<link>` in index.html, set `public/CNAME` =
       `hymnal.free.componentdock.com` + `"homepage"`. Register the
       workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): Navbar (brand, links, mobile toggle,
       sticky), HeroSection (bg image, teal overlay, centered text h1,
       outline CTA button, hover effect), BibleStudyBar (dark navy,
       4-col layout, negative margin overlap, white text, 3 feature
       columns), AboutSection (heading, 3 ministry cards with images),
       NewsletterParallax (parallax bg, email input, submit), Sermons
       (entries with image + text), TestimonyCarousel (avatars, coral
       quote icons, auto-advance), CounterSection (3 animated counters),
       EventsSection (date badges, entries), BlogSection (cards),
       Footer (dark navy, 4 columns, Component Dock link), App
       (landmarks, document title "Hymnal — Church").
3. [ ] Layout shell: Navbar (dark bg, brand, links, mobile toggle),
       main content area, footer. Set up smooth scroll behavior.
4. [ ] Hero section: full-height (700px), background image (picsum),
       teal gradient overlay (`#08c299` opacity 0.5), centered white
       h1 "Needing **Jesus Christ** Together", "Save your spirit"
       outline CTA button (30px radius, white border, transparent bg;
       hover: white bg + coral text `#ff5656`).
5. [ ] Bible study bar: dark navy (`#272e4f`) full-width, negative
       margin top `-150px` on desktop (removed on mobile), 4-column
       layout (35% left: h3 "Bible Study" + desc, bordered right;
       65% right: 3 columns with h3 + p + "Events Details" button).
       All white text.
6. [ ] About / Ministry section: heading "Giving light to someone",
       3 ministry cards with picsum images, headings, and descriptions.
7. [ ] Newsletter parallax: full-width parallax background image,
       dark overlay, centered white text "Subscribe to our Newsletter",
       email input + submit button centered.
8. [ ] Sermons section: heading "Watch our sermons", sermon entries
       with image + text layout, "Watch all sermons" button.
9. [ ] Testimony section: light bg (`#f8faff`), heading "Testimonies",
       carousel of testimonial cards (circular avatar, coral `#ff5656`
       quote icon on `#ffd6d6` bg, quote text, name). Auto-advance.
10. [ ] Counter section: heading "Church Achievements", 3 counters
       (Churches 20,254 / Members 4,200,000 / Donations 8,600,000),
       animate from 0 on scroll into view.
11. [ ] Events section: light bg, heading "Our latest events", event
       entries with date badges, time, location, "View Events" button.
12. [ ] Blog section: heading "Recent Blog", blog cards with image,
       date, title, excerpt.
13. [ ] Footer: dark navy (`#272e4f`), 4 columns (brand, Quick Links,
       Contact, social icons), copyright with Component Dock link.
14. [ ] Run `npm run verify:app -- hymnal` (typecheck → lint → vitest
       100% → build) and fix until green.
15. [ ] Open PR `feat/template-hymnal` → merge immediately
       (`gh pr merge --squash --delete-branch`); PR description must
       include: source URL, preview URL, token list (navy `#272e4f`,
       teal `#08c299`, light blue `#78d5ef`, coral `#ff5656`, Work
       Sans, 30px pill buttons), and what differs (renamed "Hymnal",
       Work Sans via Google Fonts, lucide icons — no Font Awesome,
       picsum placeholders, simplified YouTube bg to static image,
       accessible semantics, Component Dock footer).
16. [ ] Bookkeeping after merge: mark TEMPLATES.md line 1310 `[x]` +
       surge URL (`https://hymnal.free.componentdock.com`),
       `npm run readme:status`, push.
