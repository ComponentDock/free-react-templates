# Oathsworn (ColorLib Notary) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-oathsworn`. Recreation name: **Oathsworn** (NEW name
> — the ColorLib source keeps its name "Notary").

## Source mapping

- **ColorLib item:** "Notary" (TEMPLATES.md line 2133; section
  "## Lawyer (23)"). Source URL: https://colorlib.com/wp/template/notary/
- **Preview URL — REACHABLE (verified by direct fetch):**
  https://preview.colorlib.com/theme/notary/ (HTTP 200, 442 lines, `<title>
  Notary — Free Website Template by Colorlib</title>`).
- **Preview CSS:** `css/style.css` (585 lines) + Bootstrap + AOS + Fancybox +
  Owl Carousel + datepicker. Fonts: Playfair Display 400/700 (headings) +
  Roboto (body, Bootstrap defaults).

## Reference research (done — do not redo)

### Screenshot (`notary-free-template.jpg` — AVIF format)

Visual description from DOM analysis: professional notary/law firm aesthetic
with a warm sandy accent color (`#fee2b3`), Playfair Display serif headings,
clean white cards with shadows, parallax hero with floating booking form card.
Full-viewport hero with dark overlay, split layout (text left, form right).
Below: 6 practice area cards on light bg, about section with dual images,
testimonials with avatar cards, legal solutions with accordion FAQ, dark
footer with parallax bg.

### Design tokens (live stylesheet + rendered page)

| Token             | Value                               | Use                                                              |
| ----------------- | ----------------------------------- | ---------------------------------------------------------------- |
| Brand             | `#364d59`                           | Dark teal/slate — primary text, nav, headings                    |
| Accent            | `#fee2b3`                           | Warm sandy/peach — button bg, highlights                         |
| Green             | `#71bc42`                           | Check icons in ul-check list                                     |
| Body text         | `#999`                              | Card descriptions, secondary text                                |
| Heading           | `#000`                              | Card h3 headings                                                 |
| White             | `#fff`                              | Card bg, hero text, footer text                                  |
| Bg light          | `#f8f9fa`                           | `.bg-light` sections, accordion active                           |
| Border            | `#efefef`                           | Accordion button borders                                         |
| Muted             | `#ccc`                              | Testimonial role text                                            |
| Font heading      | 'Playfair Display' 400/700          | Serif headings (Google Fonts)                                    |
| Font body         | 'Roboto' (sans-serif)               | Body text (Bootstrap default)                                    |
| Button            | `#fee2b3` bg, 12px 25px padding     | Warm sandy btn-primary                                           |
| Card radius       | `7px`                               | Form card, testimonial cards, accordion items                    |
| Card shadow       | `0 3px 6px rgba(0,0,0,0.1)`        | Practice area cards                                              |
| Card shadow lg    | `0 15px 30px rgba(0,0,0,0.1)`      | Testimonial cards                                                |
| Icon size         | `50px`                              | Practice area icons                                              |

### Section order (from live DOM, top to bottom)

1. Header/navbar (sticky, logo "Notary" left, nav links right with dropdown)
2. Hero (100vh, bg image + overlay, intro text left + booking form card right)
3. Practice Areas (bg-light, 6 cards in 3×2 grid)
4. About/why-us (2 images left, heading + text + CTA right)
5. Happy Customers testimonials (bg-light, 3 cards)
6. Legal Solutions (image left, text + checklist middle, accordion right)
7. Footer (dark bg image, 5 columns + social + copyright)

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/oathsworn` from the simplest existing app, rename
       package to `@free-react-templates/oathsworn`, add Playfair Display
       400/700 Google Fonts `<link>` in index.html, set `public/CNAME` =
       `oathsworn.free.componentdock.com` + `"homepage"`. Register the
       workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing Library,
       100% coverage): Navbar (logo, nav links with dropdown, mobile
       hamburger), Hero (heading, description, booking form card with 3
       fields + submit), PracticeAreas (6 cards with icons + titles),
       AboutSection (heading with bold, text, CTA, images), Testimonials
       (3 cards with avatars + names + quotes), LegalSolutions (heading,
       checklist, accordion with 3 items), Footer (5-column, social icons,
       Component Dock link), App (landmarks, document title).
3. [ ] Layout shell: Tailwind theme with brand `#364d59`, accent `#fee2b3`,
       Playfair Display + Roboto fonts, global styles.
4. [ ] Navbar: sticky top, logo "Oathsworn" left, nav links right with
       Practice Areas dropdown, mobile hamburger toggle.
5. [ ] Hero: full-viewport with picsum bg + dark overlay, two-column — left
       intro (h1 + paragraph), right booking form card (white, 7px radius,
       40px padding, Name/Email/Date inputs + submit button).
6. [ ] Practice Areas: bg-light section, centered heading, 3×2 grid of
       white cards with lucide icons (Landmark, Shield, Scale, Gavel,
       Plane, Users) + h3 + description.
7. [ ] About section: 2-column layout, two picsum images left (sub-grid),
       heading "We Provide Highly Reliable & Effective Legal Solutions" +
       text + CTA right.
8. [ ] Testimonials: bg-light section, centered heading "Happy Customers",
       3 cards with circular avatar (picsum), name + role, blockquote.
9. [ ] Legal Solutions: 3-column — image left, heading + text + ul-check
       (green checks) middle, accordion FAQ right (3 items, first open).
10. [ ] Footer: dark bg (picsum or solid dark), 5-column layout (About +
        social, Quick Links, Resources, Support, Company), copyright line,
        Component Dock link.
11. [ ] Run `npm run verify:app -- oathsworn` (typecheck → lint → vitest
        100% → build) and fix until green.
12. [ ] Open PR `feat/template-oathsworn` → merge immediately
        (`gh pr merge --squash --delete-branch`); PR description must
        include: source URL, preview URL, token list (brand `#364d59`,
        accent `#fee2b3`, Playfair Display, 7px radius cards, parallax
        hero with booking form), and what differs (renamed "Oathsworn",
        Playfair Display + Roboto via Google Fonts, lucide icons, picsum
        placeholders, mock form submit).
13. [ ] Bookkeeping after merge: mark TEMPLATES.md line 2133 `[x]` + surge
        URL (`https://oathsworn.free.componentdock.com`), `npm run
        readme:status`, push.
