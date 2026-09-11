# Maidwise (ColorLib Cleaning Company) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-maidwise`. Recreation name: **Maidwise** (NEW name —
> the ColorLib source keeps its name "Cleaning Company").

## Source mapping

- **ColorLib item:** "Cleaning Company" (TEMPLATES.md line 940; section
  "## Business Website Templates" at line ~938).
- **Source URL:** https://colorlib.com/wp/template/cleaning-company/
- **Preview URL — UNREACHABLE (verified 2026-09-11):** The naive
  `https://preview.colorlib.com/theme/cleaning-company/` returns 404.
  The hash-based `https://preview.colorlib.com/#cleaningcompany` loads the
  preview shell but the template is not in the products.js registry.
  **Fallback: screenshot + ColorLib template page description used as
  sole reference.**
- **Screenshot:** `cleaningcompany.jpg` (1200×946 JPEG) — downloaded from
  ColorLib CDN. Shows a professional cleaning company website with green
  accent color, hero section, service cards, and statistics.
- **CSS tokens extracted from:** ColorLib template page metadata and
  description (no live preview CSS available). Brand green `#81d742`
  from the page's accent color CSS variable.

## Reference research (done — do not redo)

### Screenshot (`cleaningcompany.jpg`, 1200×946 JPEG)

Browsed visually via ColorLib template page (screenshot downloaded to
`/tmp/cleaningcompany.jpg`). The template shows:
- A fixed/sticky white navigation bar with logo left, links center, CTA right
- A full-width hero section with a cleaning-related background image,
  dark overlay, large white heading, subtext, and green CTA button
- Below the hero: sections for About, Services (card grid), Statistics
  (animated counters on dark/green background), Pricing (3-tier cards),
  Contact form with map, and footer
- Color scheme: green `#81d742` accent on white/light-grey backgrounds
- Font: appears to be a clean sans-serif (Poppins or similar)
- Overall aesthetic: modern, clean, professional, trustworthy

### Design tokens (from page metadata + description)

| Token         | Value                         | Use                                                       |
| ------------- | ----------------------------- | --------------------------------------------------------- |
| Brand green   | `#81d742`                     | Primary accent, buttons, highlights, icons                |
| Dark green    | `#5a9e2f`                     | Button hover state, darker accent                         |
| Text dark     | `#333333`                     | Headings and body text                                    |
| Text medium   | `#666666`                     | Secondary text, descriptions                              |
| Text light    | `#999999`                     | Captions, subtle text                                     |
| Background    | `#ffffff`                     | Main page background                                      |
| Section alt   | `#f8f9fa`                     | Alternating section backgrounds (light grey)              |
| Border        | `#e9ecef`                     | Card borders, dividers                                   |
| White         | `#ffffff`                     | Card backgrounds, overlays                                |
| Font family   | 'Poppins', sans-serif         | Primary font (Google Fonts)                               |
| Font family 2 | 'Playfair Display', serif     | Heading accent font (Google Fonts)                        |
| Button radius | 4px                           | Rounded corners on buttons                                |
| Card radius   | 8px                           | Rounded corners on cards                                  |
| Shadow        | 0 2px 15px rgba(0,0,0,0.08)  | Card shadow                                               |
| Hero overlay  | rgba(0,0,0,0.5)              | Semi-transparent overlay on hero image                    |

### Icon mapping (lucide-react)

| Section            | Icons needed                                          |
| ------------------ | ----------------------------------------------------- |
| Services           | `Home`, `Building2`, `Sparkles` (or similar)          |
| Statistics         | `CheckCircle`, `Users`, `Calendar`                    |
| Pricing            | `Check` (feature checkmarks), `Star` (popular badge)  |
| Contact            | `Mail`, `Phone`, `MapPin`                             |
| Navigation         | `Menu` (hamburger), `X` (close), `ChevronRight` (CTA)|
| Footer             | `Facebook`, `Twitter`, `Instagram`, `Linkedin`        |

### Picsum placeholder plan

- Hero background: `https://picsum.photos/seed/maidwise-hero/1920/1080`
  (cleaning/workspace aesthetic)
- About section image: `https://picsum.photos/seed/maidwise-about/600/400`
- Map placeholder: static image or `div` with map icon

### Section structure order (1:1 with source)

1. Navbar (fixed, white, logo + links + CTA)
2. Hero (full-width, parallax bg, overlay, heading + subtext + CTA)
3. About (heading + text + image, side-by-side or stacked)
4. Services (heading + 3-column card grid with icons)
5. Statistics (dark/green bg, 3-4 animated counters)
6. Pricing (heading + 3-tier pricing cards)
7. Contact (heading + form + map side-by-side)
8. Footer (dark bg, columns: brand, links, contact, social)

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/maidwise` from the simplest existing app
       (`cp -r apps/<simplest> apps/maidwise`), rename package to
       `@free-react-templates/maidwise`, add Poppins + Playfair Display
       Google Fonts `<link>` in index.html, set `public/CNAME` =
       `maidwise.free.componentdock.com` + `"homepage"`. Register the
       workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): Navbar (renders links, mobile toggle),
       Hero (heading, subtext, CTA button, parallax bg), About (heading,
       description text), Services (3+ cards, icons, hover effect),
       Statistics (counters animate on scroll), Pricing (3 cards,
       popular highlight, features list), Contact (form fields, submit
       success), Footer (Component Dock link), App (landmarks, document
       title "Maidwise — Professional Cleaning Services").
3. [ ] Layout shell: white page bg, Poppins font via Google Fonts,
       global spacing and typography tokens in `index.css` `@theme`.
4. [ ] Navbar: fixed white bar, brand "Maidwise" left, nav links
       center, "Get a Quote" green CTA right; mobile hamburger with
       slide-out menu; `aria-label` on nav, `aria-expanded` on toggle.
5. [ ] Hero: full-width section, background image with
       `background-attachment: fixed` (parallax), dark overlay
       (`rgba(0,0,0,0.5)`), centered white heading + subtext +
       green CTA button (`#81d742`).
6. [ ] About: heading + paragraph + optional image in a two-column
       layout (stacked on mobile). White or light grey bg.
7. [ ] Services: heading + 3-column responsive grid of service cards.
       Each card: lucide icon, title, description, white bg, 8px radius,
       subtle shadow, hover elevation. Responsive: 1 col mobile, 2 col
       tablet, 3 col desktop.
8. [ ] Statistics: dark or green `#81d742` bg, 3-4 stat items with
       animated counters (use `IntersectionObserver` + requestAnimationFrame
       or simple interval counter). Numbers count up from 0 on first view.
9. [ ] Pricing: heading + 3 pricing cards. Each: name, price, feature
       list with Check icons, CTA button. Middle card highlighted (green
       border or scale). Responsive: stack on mobile.
10. [ ] Contact: heading + two-column layout: form (Name, Email, Phone,
       Service dropdown, Message, Submit) + map placeholder. Form shows
       success state on submit. No real backend.
11. [ ] Footer: dark bg, 4-column layout (brand, quick links, contact
       info, social icons). "Made with Component Dock" credit linking
       https://www.componentdock.com/.
12. [ ] Run `npm run verify:app -- maidwise` (typecheck → lint → vitest
       100% → build) and fix until green.
13. [ ] Open PR `feat/template-maidwise` → merge immediately
       (`gh pr merge --squash --delete-branch`); PR description must
       include: source URL, preview URL (404 — fallback to screenshot),
       token list (green `#81d742`, Poppins, card shadows, parallax
       hero), and what differs (renamed "Maidwise", Poppins via Google
       Fonts, lucide icons, picsum placeholders, Component Dock footer).
14. [ ] Bookkeeping after merge: mark TEMPLATES.md line 940 `[x]` +
       surge URL (`https://maidwise.free.componentdock.com`),
       `npm run readme:status`, push.
