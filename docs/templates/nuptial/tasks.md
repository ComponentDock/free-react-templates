# Nuptial (ColorLib Hookup) — Tasks & Design Notes

> Recreation of ColorLib "Hookup" (https://colorlib.com/wp/template/hookup/)
> under the NEW original name **Nuptial**. Spec lives at
> `openspec/specs/template-nuptial/spec.md`; app folder `apps/nuptial`,
> package `@free-react-templates/nuptial`, homepage
> `https://nuptial.free.componentdock.com` (CNAME `nuptial.free.componentdock.com`).

## Design notes

- **Original:** ColorLib "Hookup" — free wedding website Bootstrap 4
  template.
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/hookup/`
  (HTTP 200, 43.5KB) + stylesheet `css/style.css` (62.5KB). Full rendered DOM
  extracted; structure below is from the DOM + CSS tokens. The TEMPLATES.md
  screenshot (`hookup-free-template.jpg`, 1200×959) confirms the visual
  design: dark couple photo hero with white script names + countdown,
  coral-pink `#f67e7d` accents, light-gray sections, white footer.
- **Structure observed (1:1):**
  - Navbar: transparent over hero; brand "Hookup"; links Home / Groom &
    Bride / Love Story / Greetings / People / When & Where / RSVP / Gallery;
    "Menu" toggler; on scroll → white bg + shadow, black links, pink active.
  - Hero `#home` (video-hero, ~700px, `bg_1.jpg` + black overlay .3 +
    YouTube bg video — recreation uses photo only): rose crest icon → kicker
    "The Wedding of" (uppercase 12px, letter-spacing 7px, flanked by white
    lines) → H1 "Francisco & Laura" (Great Vibes 9vw white) → countdown
    `#timer` (days/hours/minutes/seconds + labels).
  - Invite `#groom-bride-section` (ftco-about, no pt/pb): photo left
    (`about.jpg`); right centered: "Join us to celebrate the wedding day of"
    → H2 "Francisco & Laura" (Great Vibes 64px #f67e7d) → rose icon →
    "Which is celebration on" → date "Dec | 28 | 2019" (Libre Caslon Text
    48px rgba(0,0,0,.4)) → "Starting at 2:00 in the afternoon" → "Saint John
    Paul Church in YorkNew.in".
  - Bride & Groom (bg-section: 300px top/bottom photo strips): clone ghost
    "Bride & Groom" + H2 (Great Vibes 90px); two portrait cards — groom
    `groom.jpg` / "Francisco Fredricksen" + copy; bride `bride.jpg` /
    "Laura Moorey" + copy.
  - Love Story `#lovestory-section`: pink vertical center timeline; 4
    alternating items — round 100px photo badges (5px #f67e7d border,
    `couple-1..4.jpg`), pink uppercase dates (June 10, 2017 / June 10, 2017 /
    June 14, 2017 / May. 10, 2019), titles First We Meet → First Date → In A
    Relationship → We're Engaged, body copy.
  - Sweet Messages `#greeting-section` (bg-light): clone "Testimony" + H2
    "Sweet Messages"; carousel of 5 quotes — photo `person_1..5.jpg`, "Roger
    Scott", "Marketing Manager".
  - Family & Friends `#people-section`: clone "People" + H2 "Family &
    Friends"; carousel of 8 — circular photos + name + role: Groomsmen Mark
    Tomy / John Henceworth / Rey Cooper / Robert Chan; Bridesmaid Rose Jones /
    Mary Dell / Alicia Brean / Angel Worth.
  - Place & Time `#when-where-section` (bg-light): clone "Place" + H2 "Place
    & Time"; 3 photo cards `place-1..3.jpg` — icon (bell / wedding kiss /
    cake) + The Reception / The Ceremony / The Party; "Saturday, 28, 2019 ·
    02:00 pm-10:00 pm"; "203 Fake St. Mountain View, San Francisco,
    California, USA"; phone +0 (123) 456 78 910; "See Map" btn-custom.
  - RSVP `#rsvp-section` (bg-secondary #6c757d): clone "RSVP" + H2 "Are Your
    Attending?"; form: Name, Your email, Guest select (1–5), Message
    textarea, submit "I am attending" (btn-primary pink).
  - Gallery `#gallery-section`: clone "Photos" + H2 "Gallery"; 4-col grid of
    8 square photo tiles `gallery-1..8.jpg` with hover expand icon
    (image-popup lightbox → hover icon overlay).
  - Footer (white bg): col 1 brand "Hookup" + blurb + circular pink socials
    (twitter/facebook/instagram); col 2 Quick Links (Wellness, Vintge
    stores, Trekking, Tour, Sightseeing, Many more..); col 3 Links (Home,
    Groom & Bride, Story, Greetings, People, Where & When, RSVP, Gallery);
    col 4 Services (Organizer, Venue, Wedding Ceremony, Accomodation); col 5
    "Have a Questions?" (address 203 Fake St. Mountain View, San Francisco,
    California, USA · +2 392 3929 210 · info@yourdomain.com); copyright bar
    (ColorLib → Component Dock link).
- **Design tokens:**
  - Coral-pink **#f67e7d** (links, `.btn-primary`, active nav + underline,
    section h2s + kickers, timeline line/badges, `.date` labels, footer
    links/social circles, scrolled brand span).
  - Light pink border **#fddddc** (`.btn-custom` "See Map").
  - Section backgrounds: **#f8f9fa** (bg-light: Sweet Messages, Place &
    Time), **#6c757d** (bg-secondary RSVP band), white footer/cards, black
    hero overlay rgba(0,0,0,.3).
  - Body: #212529 / rgba(0,0,0,.7), Poppins 16px.
  - Fonts (Google Fonts): **Poppins** (body/nav, 400/600) + **Great Vibes**
    (script h1 9vw, section h2 90px → 50px mobile, invite h2 64px) +
    **Libre Caslon Text** (kickers/date accents).
  - Kickers: 12px uppercase 600, letter-spacing 2px (7px hero), pink
    (white + flanking lines in hero).
  - Buttons: `.btn-primary` pink fill/white text/1px pink border; `.btn-custom`
    transparent, 1px #fddddc border, uppercase 12px 600, ls 1px, p 8px 10px.
  - Forms: 52px inputs, white bg, radius 0, 1px rgba(0,0,0,.1) border,
    black focus border.
  - Rhythm: ftco-section padding 7em 0 (6em mobile); bg-section 14em with
    300px photo strips; round photos (radius 50%); social circles 50px.
  - Ghost clone text behind headings: 100px bold rgba(0,0,0,.05).
- **Recreation approach:** light theme with pink `#f67e7d` accents; hero =
  full-width seeded picsum photo band + dark overlay + script H1 + live
  countdown (fixed future target date, e.g. `useEffect` interval updating
  days/hours/minutes/seconds); invite block with big Libre-Caslon-style date;
  Bride & Groom portrait cards; Love Story alternating timeline with round
  seeded-photo badges + dates; Sweet Messages testimonial cards; Family &
  Friends people grid/carousel with circular photos + roles; Place & Time
  cards with lucide icons (Bell, Heart, Cake) + "See Map" outline buttons;
  RSVP form (Name/Email/Guest select 1–5/Message, "I am attending" submit —
  client-validated, non-functional); Gallery 4-col grid with hover icon
  overlay; white footer with 4 link columns + contact + circular social
  icons; all images picsum-seeded (`picsum.photos/seed/nuptial-N/w/h`);
  Google Fonts via `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, cn) — do NOT duplicate components.
- Base implementation: `apps/wedlock` is a recent wedding-themed app — check
  it first; `apps/lodge` / `apps/wander` (photo-heavy landing) are also good
  structural references for hero + image cards + footer. Copy the simplest
  fit, then extend with the countdown timer, timeline, and RSVP form.
- NOTE on `npm run spec:validate`: keep the spec's Gherkin blocks in the
  exact format above (## Requirement / #### Scenario / - **GIVEN** etc.) so
  the OpenSpec validator parses them.

## Tasks

- [x] Write `openspec/specs/template-nuptial/spec.md` (Gherkin requirements + scenarios + replication findings + verification checklist) — DONE on main (prep).
- [ ] Create `apps/nuptial` (copy the closest existing app; rename package to
      `@free-react-templates/nuptial`; run `npm install` at repo root so
      package-lock.json registers the workspace).
- [ ] TDD: tests first for Navbar, Hero (incl. countdown), Invite, BrideGroom,
      LoveStory, SweetMessages, FamilyFriends, PlaceTime, RsvpForm, Gallery,
      Footer, App composition.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `scripts/verify-app.sh nuptial` + `npm run spec:validate`.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main; add the nuptial.free.componentdock.com URL + homepage).
- [ ] Update README structure + `docs/ai-context.md` app list (via
      `npm run readme:status`).
