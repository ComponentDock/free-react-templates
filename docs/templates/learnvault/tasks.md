# LearnVault (ColorLib Unicat) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-learnvault`. Recreation name: **LearnVault** (NEW
> name — the ColorLib source keeps its name "Unicat").

## Source mapping

- **ColorLib item:** "Unicat" (TEMPLATES.md line 1659; first `- [ ]` item
  at time of prep).
- **Source URL:** https://colorlib.com/wp/template/unicat/
- **Preview URL — REACHABLE (verified during prep):**
  `https://preview.colorlib.com/theme/unicat/` (HTTP 200).
- **Preview CSS:** `styles/main_styles.css` (2,023 lines, hand-written +
  Bootstrap 4). Scripts: jQuery 3.2.1, Bootstrap 4, Owl Carousel 2.2.1,
  GreenSock, ScrollMagic, parallax.js. Fonts: Google Fonts "Roboto"
  (sans-serif body) + "Roboto Slab" (serif headings).

## Reference research (done — do not redo)

### Screenshot analysis

The ColorLib screenshot shows a dark-themed education platform with a full-
width hero slider (3 slides with background images), a search bar overlaid
on the hero, and sections below: features grid, course cards on a parallax
background, event cards with date badges, team members, newsletter, and a
dark footer. Color palette: sky-blue primary (#14bdee), salmon accent
(#ffa07f), dark navy footer (#1e2434), white section backgrounds, light
gray (#f3f3f3) alternation. Typography: serif headings (Roboto Slab) for
authority, sans-serif body (Roboto) for readability.

### Design tokens (live stylesheet, verified during prep)

| Token             | Value                                           | Notes                                                                 |
| ----------------- | ----------------------------------------------- | --------------------------------------------------------------------- |
| Font body         | 'Roboto', sans-serif                            | All body text, inputs, nav, meta                                      |
| Font heading      | 'Roboto Slab', serif                            | Logo, section titles, feature titles, course titles, team names       |
| Brand primary     | #14bdee (sky blue)                              | Buttons, links, active states, search icon hover, date badges         |
| Accent warm       | #ffa07f (salmon)                                | Active nav underline, decorative borders                              |
| Text dark         | #384158 (navy)                                  | Primary text color, headings                                          |
| Text muted        | #76777a, #a5a5a5                                | Subtitles, meta text, secondary                                       |
| Bg light          | #f3f3f3                                         | Top bar, features section                                             |
| Bg white          | #FFFFFF                                         | Header, courses, events, news                                         |
| Bg dark           | #1e2434, #232323                                | Footer, counter form                                                  |
| Brown             | #937c6f                                         | Counter section accent                                                |
| Error             | #db5246, #FF6347                                | Validation, alerts                                                    |
| Gold              | #ffc80a                                         | Star ratings                                                          |
| Border            | #e5e5e5                                         | Cards, dividers                                                       |
| Border radius     | 3px, 5px, 6px                                   | Small (inputs/buttons), medium (cards)                                |
| Button radius     | 3px                                             | All action buttons (search, subscribe, submit)                        |
| Parallax          | data-parallax="scroll"                          | Courses, counter, team, newsletter, footer                            |
| Section padding   | ~90px vertical                                  | Consistent section rhythm                                             |

### Section-by-section fidelity notes

1. **TopBar** — `#f3f3f3` background, flex row, left-aligned contact list
   (phone icon + number, email icon + email), right-aligned "Register or
   Login" button. Simple strip, ~40px height.

2. **Header** — White background, sticky on scroll. Logo is text "Learn"
   + span "Vault" (the span uses the primary blue). Nav links left-aligned,
   search + cart + hamburger right-aligned. Active link gets a salmon
   (#ffa07f) bottom border.

3. **HeroSlider** — Owl Carousel with 3 identical slides. Each slide:
   full-width background image with dark overlay, centered text (title
   "The Premium System Education" in white serif, subtitle in white),
   search form bar (keyword input + category select + price select +
   blue search button). Navigation arrows on left/right edges.

4. **Features** — `#f3f3f3` bg, centered title "Welcome To LearnVault
   E-Learning", subtitle paragraph, 4-column grid. Each feature: icon
   (replace with lucide), title (Roboto Slab), short description text.

5. **Courses** — Parallax background image, centered title "Popular Online
   Courses", 3 course cards. Each card: image top, body with title (link),
   teacher name, price badge (blue pill), meta (clock icon + duration,
   star icon + rating). "view all courses" button centered below.

6. **Counter** — Parallax bg. Left 50%: "Register Now" heading, paragraph,
   4 milestone counters (15 years, 120k, 670+, 320) in a flex row with
   large numbers and small labels. Right 50%: registration form (title
   "courses now", name/phone/subject/message fields, "submit now" button)
   on `#232323` background.

7. **Events** — White bg, centered title "Upcoming events", 3-column grid.
   Each event: image top, body with date badge (day number + month in a
   blue box), title link, time icon + time, location icon + location,
   short description. Date badges: `#14bdee` background, white text.

8. **Team** — Parallax background, centered title "The Best Tutors in
   Town", 4-column grid. Each member: circular or rounded photo, name
   (serif font), specialty subtitle, 3 social icons (Facebook, Twitter,
   Google+ — replace with lucide equivalents).

9. **News** — White bg, centered title "Latest News". Left 7/12: large
   featured post (image, title link, meta with author + date, excerpt,
   "read more" link). Right 5/12: 4 small posts stacked (title link +
   meta each).

10. **Newsletter** — Parallax background, flex row: left = title "sign up
    for news and offers" + subtitle; right = email input + "subscribe"
    button. Blue primary button style.

11. **Footer** — Dark bg (#1e2434), 4 columns: About (logo + text +
    social icons), Contact (email, phone, address), Links (nav list),
    Mobile (app store images — use placeholder). Copyright bar below:
    "All rights reserved" + Component Dock link + terms/privacy links.

### Icon mapping (lucide-react)

| Source (Font Awesome)      | Recreation           |
| -------------------------- | -------------------- |
| fa-phone                   | Phone                |
| fa-envelope-o              | Mail                 |
| fa-search                  | Search               |
| fa-shopping-cart           | ShoppingCart         |
| fa-bars                    | Menu                 |
| fa-angle-left / right      | ChevronLeft / Right  |
| fa-clock-o                 | Clock                |
| fa-map-marker              | MapPin               |
| fa-graduation-cap          | GraduationCap        |
| fa-star                    | Star                 |
| fa-facebook                | Facebook (or Globe)  |
| fa-twitter                 | Twitter (or X)       |
| fa-google-plus             | Plus (or Globe)      |
| fa-instagram               | Instagram            |
| fa-heart-o                 | Heart                |
| fa-close                   | X                    |

### Picsum placeholder plan

| Section   | Placeholder                                    | Dimensions     |
| --------- | ---------------------------------------------- | -------------- |
| Hero      | `https://picsum.photos/seed/learnvault-hero/1920/900` | Full-width bg  |
| Courses   | `https://picsum.photos/seed/learnvault-course-{1-3}/600/400` | Card images    |
| Counter   | `https://picsum.photos/seed/learnvault-counter/1920/900` | Parallax bg    |
| Events    | `https://picsum.photos/seed/learnvault-event-{1-3}/600/400` | Card images    |
| Team      | `https://picsum.photos/seed/learnvault-team-{1-4}/400/500` | Member photos  |
| News      | `https://picsum.photos/seed/learnvault-news/800/500` | Featured post  |
| Newsletter| `https://picsum.photos/seed/learnvault-newsletter/1920/400` | Parallax bg    |
| Footer    | `https://picsum.photos/seed/learnvault-footer/1920/600` | Dark bg image  |

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/learnvault` from the simplest existing app
       (`cp -r apps/<simplest> apps/learnvault`), rename package to
       `@free-react-templates/learnvault`, add Roboto + Roboto Slab
       Google Fonts `<link>` in index.html, set `public/CNAME` =
       `learnvault.free.componentdock.com` + `"homepage"`. Register
       the workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): TopBar (contact info, login link),
       Header (logo text, nav links, search/cart icons), HeroSlider
       (heading, subtitle, search form with 3 fields + button),
       Features (4 cards with titles), Courses (3 cards with title,
       teacher, price), Counter (milestones + registration form),
       Events (3 cards with date badges), Team (4 members with names),
       News (1 large + 4 small posts), Newsletter (email input +
       subscribe), Footer (4 columns, Component Dock link), App
       (landmarks, document title).
3. [ ] Layout shell: App component composing all sections in order,
       Tailwind theme tokens in index.css (`@theme` block with brand
       colors), responsive container/grid setup.
4. [ ] TopBar component: flex row, phone/email icons (lucide), "Register
       or Login" link, `#f3f3f3` background.
5. [ ] Header component: sticky, logo text "Learn" + span "Vault" (blue),
       nav links, search/cart hamburger icons, mobile hamburger menu.
6. [ ] HeroSlider component: 3 slides with background images (picsum),
       heading, subtitle, search form (input + 2 selects + button).
       Use a simple CSS-based slider or state-based slide rotation.
7. [ ] Features component: 4-column grid, lucide icons, titles, descriptions.
8. [ ] Courses component: parallax bg, 3 course cards with image, title,
       teacher, price badge, "view all courses" link.
9. [ ] Counter component: parallax bg, left side milestones (animated
       counters), right side registration form with 4 fields + submit.
10. [ ] Events component: 3 event cards with image, date badge (blue box),
        title, time/location icons, description.
11. [ ] Team component: parallax bg, 4 team members with photo, name,
        specialty, social icons.
12. [ ] News component: featured post (large, left) + 4 small posts
        (sidebar, right).
13. [ ] Newsletter component: parallax bg, title + subtitle, email input +
        subscribe button.
14. [ ] Footer component: dark bg, 4 columns (About, Contact, Links,
        Mobile), copyright bar with Component Dock link.
15. [ ] Run `npm run verify:app -- learnvault` (typecheck → lint → vitest
        100% → build) and fix until green.
16. [ ] Open PR `feat/template-learnvault` → merge immediately
        (`gh pr merge --squash --delete-branch`); PR description must
        include: source URL, preview URL, token list (sky-blue #14bdee,
        salmon #ffa07f, Roboto + Roboto Slab, 3px radius, parallax
        backgrounds), and what differs (renamed "LearnVault", lucide
        icons — no Font Awesome, picsum placeholders, simple slider
        instead of Owl Carousel, Component Dock footer).
17. [ ] Bookkeeping after merge: mark TEMPLATES.md line 1659 `[x]` +
        surge URL (`https://learnvault.free.componentdock.com`),
        `npm run readme:status`, push.
