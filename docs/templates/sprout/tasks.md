# Sprout (ColorLib Spring) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-sprout`. Recreation name: **Sprout** (NEW name —
> the ColorLib source keeps its name "Spring").

## Source mapping

- **ColorLib item:** "Spring" (TEMPLATES.md line 1282; section
  "## Charity (37)"). Slug: `spring`.
- **Source URL:** https://colorlib.com/wp/template/spring/
- **Preview URL — REACHABLE:** `https://preview.colorlib.com/theme/spring/`
  (HTTP 200, 54,867 bytes, church/charity template).
- **Preview CSS:** `css/style.css` (72,543 bytes) — Bootstrap 4 base + custom
  ftco styles. Fonts: Poppins (primary), Raleway (secondary), Crimson Text
  (verse accents). Scripts: Bootstrap 4, jQuery, Owl Carousel, Magnific Popup,
  AOS (animate on scroll), Firebase (counters).
- **Screenshot:** `spring-free-template.jpg` (church template with warm brown
  tones, hero with background image, service grid, sermon card).

## Reference research (done — do not redo)

### Design tokens (live stylesheet + rendered page)

| Token           | Value                                 | Use                                                             |
| --------------- | ------------------------------------- | --------------------------------------------------------------- |
| Brand warm      | `#c7b198`                             | CTA buttons, accent text, highlights                            |
| Brand darker    | `#b59877`                             | Secondary warm tone, hover states                               |
| Deep brown      | `#3c312e`                             | Dark section backgrounds                                        |
| Dark bg         | `#171717`                             | Footer background                                               |
| Counter bg      | `#6c757d`                             | Counter/stats section background                                |
| Light bg        | `#f8f9fa`                             | Alternate section backgrounds (daily verse, sermon, blog)       |
| Warm off        | `#ebe3da`                             | Some light section backgrounds                                  |
| Text primary    | `#1a1a1a`                             | Body text                                                       |
| Text muted      | `#666666` / `#999999`                 | Secondary text, labels                                          |
| White           | `#fff`                                | Card backgrounds, hero overlay text                             |
| Navbar bg       | `#000` (solid black)                  | Fixed dark navbar                                               |
| Font primary    | Poppins (300, 400, 600, 700)          | Body, headings, UI elements                                     |
| Font secondary  | Raleway                               | Some accent headings                                            |
| Font verse      | Crimson Text (serif)                  | Scripture quotes, verse attribution                             |
| Border radius   | `0` (buttons), `3px` (cards)          | Buttons sharp/zero-radius, cards minimal radius                 |
| CTA buttons     | `#c7b198` bg, white text, zero radius | "New here!", "Live Stream", "Watch Sermons", "Download Sermons" |
| Section spacing | `5em` padding (`.ftco-section`)       | Consistent vertical rhythm                                      |

### Section structure (in order)

1. **Navbar** — Fixed dark, brand "Sprout Church", 7 links:
   Home, About, Ministries, Sermons, Events, Blog, Contact
2. **Hero** — Full-width background image, heading "Helping Grow Your Faith",
   subtitle, 2 CTA buttons
3. **Intro/Events Banner** — "Upcoming Events" with countdown timer (days,
   hours, minutes, seconds) and event details
4. **Daily Verse** — Light bg `#f8f9fa`, quoted scripture (John 3:16 KJV),
   decorative typography
5. **Church Services** — 6-card grid (Daily Prayers, Church Community,
   Teaching, Helpers, Wedding, Events), each with icon + title + description
6. **Sermon for Today** — Light bg, featured sermon card with speaker name,
   category tags, date, description, 2 CTA buttons
7. **Counter/About** — Grey `#6c757d` bg, church description + 4 animated
   counters (Members, Pastors, Donation, Churches)
8. **Testimony** — Dark background, carousel with member testimonials
   (avatar + name + role + quote)
9. **Upcoming Events** — Event listing cards with title + link
10. **Recent Sermons** — Sermon cards with title, speaker, 2 CTA buttons
11. **Recent Blog** — Light bg, 3-column grid with date overlay (day/month/year),
    title, excerpt, "Read more" link
12. **Gallery** — Image grid with popup/lightbox capability
13. **Newsletter** — Parallax background, "Newsletter" heading, email input
    - subscribe button
14. **Footer** — Dark `#171717`, 3-column: About, Connect links, Service Hours;
    Component Dock attribution

### Visual design notes

- Warm brown/tan aesthetic throughout — earthy church feel
- CTA buttons are sharp-cornered (zero border-radius), warm brown `#c7b198`
- Hero uses full-width background image with dark overlay for text contrast
- Counter section has a distinct grey background separating it from other sections
- Testimony section uses a dark background with white text
- Blog cards have a date overlay element (day large, month/year smaller)
- Newsletter has a parallax scrolling background effect
- Gallery section has masonry-like image arrangement
- Overall feel: traditional church/community with warm, welcoming color palette
