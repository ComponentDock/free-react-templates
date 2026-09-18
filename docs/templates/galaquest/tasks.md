# Galaquest (ColorLib Evento) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-galaquest`. Recreation name: **Galaquest** (NEW name —
> the ColorLib source is "Evento").

## Source mapping

- **ColorLib item:** "Evento" (TEMPLATES.md line 1005)
- **Source URL:** https://colorlib.com/wp/template/evento/
- **Preview URL:** https://preview.colorlib.com/theme/evento/ (HTTP 200, 833 lines)
- **Preview CSS:** `assets/css/main.css` (1,731 lines)
- **Recreation name:** Galaquest (NEW — never reuse "Evento")

## Reference research (done — do not redo)

### Screenshot (`evento-free-template.jpg`)

Visual design from ColorLib listing: dark-themed event/conference landing
page with red (`#f50136`) as the primary accent color, dark backgrounds with
parallax image sections, Montserrat font, rounded pill buttons, and a clean
corporate event aesthetic. The hero uses a full-viewport background image
with centered text. The speaker grid uses hover-overlay cards. Pricing
cards have a highlighted "recommended" tier.

### Live preview DOM analysis (fetched 2026-09-12)

HTTP 200 from `https://preview.colorlib.com/theme/evento/`. Full HTML
fetched and analyzed (833 lines). Structure:

1. **Navbar** — fixed-top, logo image, links: Home, Speakers, Events, News, Contact + search icon
2. **Hero cover** — owl-carousel with 3 slides, each: background image, dark overlay, "Prepare yourself for the" + large "conference" + date/location + "Buy Tickets Now" pill button, dot navigation
3. **Event info strip** — 4-column row: Date, Location, Speakers, Tickets — each with an icon + label + detail text
4. **Countdown** — full-width parallax bg-image + dark overlay, "Counter until the big event", 4 countdown boxes (red bg `#F44336`, white text)
5. **About the event** — title "About the event", 2 columns of lorem ipsum, then 4 feature cards: 9 Speakers, 8 hrs Marathon, Live Broadcast, Early Bird (each with icon + title + description + "read more" link)
6. **Speakers** — title "Our Speakers", 4×2 grid of 8 speaker cards, each with image + name + position overlay
7. **Pricing table** — title "Pricing Table", 3 cards: Early Bird ($65, "recommended" highlighted), Start Up ($85), Corporate ($95) — each with features list + "Purchase" pill button
8. **Events calendar** — responsive table, 3 rows: thumbnail image, date (day+month), event name/time/speaker, "Read More" pill button, "buy now" text link
9. **Partners** — bg-gray section, "Our Partners", owl-carousel of 5 brand logos (opacity 0.3 → 1 on hover)
10. **Get Tickets CTA** — bg-image parallax + dark overlay, "Get Your Tickets", description, "buy now" pill button
11. **Footer** — dark bg `#18181c`, 3 columns: logo+about+social icons, Instagram photo grid (6 images), newsletter form (email input + "Subscribe" button)
12. **Copyright bar** — copyright text + nav links

### Design tokens from CSS (`assets/css/main.css`, 1,731 lines)

- **Font:** `"Montserrat", sans-serif` — Google Fonts import (400,500,700,900)
- **Brand/primary:** `#f50136` (red) — used on: btn-primary bg, section title top-border (`::before`), icon backgrounds, countdown box bg (`#F44336`)
- **Body text:** `#838383` (medium grey), 14px
- **Headings:** `#18181c` (near-black), 700 weight
- **Default button:** bg `#18181c`, white text; hover inverts
- **btn-primary:** bg `#f50136`, white text; hover: bg `#18181c`
- **btn-rounded:** `border-radius: 50px` (pill shape)
- **bg-img sections:** `background-size: cover` + `rgba(0,0,0,0.4)` dark overlay
- **bg-gray:** `#f7f7f7` light grey
- **Countdown boxes:** bg `#F44336`, white text, 48px, `border-radius: 50px` cards
- **Footer:** bg `#18181c`, white text
- **Section title:** uppercase, 36px, 3px solid `#f50136` top-border via `::before`

## Implementation task outline

### Phase 1: Scaffold
- [ ] Create `apps/galaquest/` (copy simplest existing app, rename package to `@free-react-templates/galaquest`)
- [ ] Set up `public/CNAME` → `galaquest.free.componentdock.com`
- [ ] Set `homepage` in `package.json` to `https://galaquest.free.componentdock.com`
- [ ] Run `npm install` at repo root for lockfile registration

### Phase 2: Components (TDD)
- [ ] `Navbar.tsx` — fixed-top, logo, links, hamburger toggle (mobile)
- [ ] `Hero.tsx` — full-viewport bg image, dark overlay, headline, date, CTA button
- [ ] `EventInfo.tsx` — 4-column info strip with icons
- [ ] `Countdown.tsx` — parallax bg, countdown boxes, real-time update
- [ ] `About.tsx` — section title, 2-column text, 4 feature cards
- [ ] `Speakers.tsx` — section title, 8-card grid with image + info overlay
- [ ] `Pricing.tsx` — section title, 3 pricing cards with highlighted tier
- [ ] `EventCalendar.tsx` — responsive table with 3 event rows
- [ ] `Partners.tsx` — bg-gray, logo carousel/grid with opacity hover
- [ ] `TicketsCta.tsx` — bg-image parallax, heading, description, CTA button
- [ ] `Footer.tsx` — dark 3-column footer + copyright bar + Component Dock link
- [ ] `App.tsx` — compose all sections in order

### Phase 3: Styling
- [ ] `index.css` — Tailwind entry + `@theme` tokens: brand `#f50136`, dark `#18181c`, text grey `#838383`, bg-grey `#f7f7f7`
- [ ] Google Fonts `<link>` for Montserrat in `index.html`
- [ ] Placeholder images via `picsum.photos` seeded URLs
- [ ] Icons from `lucide-react` (replace Ionicons)

### Phase 4: Verification
- [ ] `npm run test:coverage` — 100% lines/functions/branches/statements
- [ ] `scripts/verify-app.sh galaquest` — typecheck + lint + tests + build
- [ ] Push, PR, merge, surge deploy

## Section order (1:1 with ColorLib original)

1. Navbar (fixed-top)
2. Hero cover slider (full viewport, bg image + overlay)
3. Event info strip (4-column icons)
4. Countdown timer (parallax bg + overlay)
5. About the event (text + 4 feature cards)
6. Speakers grid (8 cards, 4×2)
7. Pricing table (3 cards, 1 highlighted)
8. Events calendar (responsive table, 3 rows)
9. Partners / brand logos (bg-gray, opacity hover)
10. Get Tickets CTA (bg image + overlay + button)
11. Footer (dark, 3 columns)
12. Copyright bar (text + nav links + Component Dock)
