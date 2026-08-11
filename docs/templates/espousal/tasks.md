# Espousal (ColorLib Hookup) — Tasks & Design Notes

> Prep artifacts prepared on `main`; implementation ships on
> `feat/template-espousal`.

## Design notes (replication findings)

- **Original:** ColorLib "Hookup" — wedding/ceremony website template
  (source: https://colorlib.com/wp/template/hookup/).
- **Preview analyzed:** https://preview.colorlib.com/theme/hookup/ (HTTP 200,
  "Hookup - Free Bootstrap 4 Template by Colorlib"). Live DOM + unminified
  `css/style.css` parsed for structure + tokens; rendered page screenshotted
  in a browser; `js/main.js` confirms countdown labels Days/Hours/Minutes/
  Seconds. Screenshot `hookup-free-template.jpg` (AVIF) reviewed visually.
- **Visual design:** romantic wedding site. Full-height photo hero (bride &
  groom, bokeh) with dark overlay + optional YouTube background video; big
  white **Great Vibes** script names; coral `#f67e7d` accents (script section
  headings 90px, pill buttons, timeline line); mint `#dcf4e6` RSVP band;
  light-gray `#f8f9fa` bands for Sweet Messages and Place & Time; white
  cards/panels; serif (Libre Caslon Text) uppercase invitation subheadings;
  100px faint black watermark words behind every section heading.
- **Structure (1:1, section order):**
  1. Navbar (fixed) — script brand + right links: Home, Groom & Bride, Love
     Story, Greetings, People, When & Where, RSVP, Gallery; hamburger mobile.
  2. Hero `#home` — photo bg + overlay + optional video, floral icon, "The
     Wedding of" subheading (12px uppercase ls 7px), h1 script names (9vw),
     countdown #timer (Days/Hours/Minutes/Seconds, 40px white).
  3. Invitation `#groom-bride-section` — tall image left; right serif text:
     "Join us to celebrate the wedding day of" / script names / "Which is
     celebration on" / "Dec | 28 | 2019" / "Starting at 2:00 in the
     afternoon" / "Saint John Paul Church in YorkNew.in".
  4. Bride & Groom — clone "Bride & Groom" + script h2; two profile cards:
     Francisco Fredricksen (groom), Laura Moorey (bride): photo + name + bio.
  5. Love Story — center timeline (1px `#f67e7d` at 50%): circular badge +
     white panels (43% width, 30px padding, 1px `rgba(0,0,0,0.15)` border)
     alternating left/right. Events: June 10, 2017 First We Meet; June 10,
     2017 First Date; June 14, 2017 In A Relationship; We're Engaged.
  6. Sweet Messages (`bg-light`) — clone "Testimony" + "Sweet Messages";
     rotating quote cards (quote + avatar + name + role, e.g. Roger Scott,
     Marketing Manager).
  7. Family & Friends — clone "People" + "Family & Friends"; 8 member cards:
     4 Groomsmen (Mark Tomy, John Henceworth, Rey Cooper, Robert Chan) +
     4 Bridesmaid (Rose Jones, Mary Dell, Alicia Brean, Angel Worth).
  8. Place & Time (`bg-light`) — clone "Place" + "Place & Time"; 3 cards:
     The Reception / The Ceremony / The Party; each: icon, date "Saturday,
     28, 2019", "02:00 pm-10:00 pm", fake address + phone, "See Map"
     (`.btn-custom`: uppercase 12px w600 ls1px, 1px `#fddddc` border).
  9. RSVP (`bg-secondary` mint `#dcf4e6`) — clone "RSVP" + "Are Your
     Attending?"; form: Name, Your email, Guest select (1–5), Message,
     submit "I am attending" (pill primary).
  10. Gallery — clone "Photos" + "Gallery"; `container-fluid px-md-4`,
      4-col grid (`col-md-3`) of 8 square tiles; hover circle icon; lightbox
      on click.
  11. Footer (dark, overlay) — brand + blurb + social circles; Quick Links;
      Links; Services (Organizer, Venue, Wedding Ceremony, Accomodation);
      "Have a Questions?" (address/phone/email); copyright bar (replace
      ColorLib credit with "© <year> Espousal. All rights reserved.").

## Design tokens (see spec for full list)

- Coral `#f67e7d` (primary: buttons, script h2s, timeline line, hovers)
- Light coral `#fddddc` (See Map border), mint `#dcf4e6` (RSVP bg),
  `#f8f9fa` (light bands), white `#fff`, watermark `rgba(0,0,0,0.05)`
- Fonts: Great Vibes (script — logo, hero h1 9vw, h2s 90px), Poppins (body/
  UI), Libre Caslon Text (serif invitation subheadings)
- Buttons: pill `border-radius: 30px`; form controls 52px, radius 0,
  border `1px solid rgba(0,0,0,0.1)`
- Countdown: 40px white numbers, 12px uppercase labels, hairline dividers

## Implementation tasks

- [ ] Scaffold `apps/espousal` (copy simplest existing app, rename package
      to `@free-react-templates/espousal`, `npm install` at root so the
      lockfile registers the workspace).
- [ ] `src/index.css`: `@theme` tokens — brand coral `#f67e7d`, mint
      `#dcf4e6`, light bands; Great Vibes + Poppins + Libre Caslon Text via
      Google Fonts `<link>` in `index.html`.
- [ ] Navbar — fixed, script brand, anchor links, mobile hamburger
      (aria-expanded), smooth-scroll anchors to sections.
- [ ] Hero — full-height photo bg (seeded picsum) + dark overlay, floral
      icon (lucide Flower), "The Wedding of" subheading (uppercase,
      tracking-[7px]), script h1 couple names, countdown component
      (Days/Hours/Minutes/Seconds ticking to a fixed future date).
- [ ] Invitation — image left + serif text block right with date/time/venue.
- [ ] Bride & Groom — clone watermark + script h2 + two profile cards.
- [ ] Love Story — alternating center timeline with badges + date/title/body.
- [ ] Sweet Messages — carousel of quote cards (auto-advance + controls).
- [ ] Family & Friends — responsive 4-col grid, 8 member cards (name + role).
- [ ] Place & Time — 3 event cards (icon, date, time, address, phone,
      "See Map" link).
- [ ] RSVP — form with Name, email, Guest select (1–5), Message; zod
      validation; success confirmation.
- [ ] Gallery — 4-col tile grid, hover icon, lightbox (dialog/overlay).
- [ ] Footer — 4 link columns + contact block + socials + copyright bar.
- [ ] Tests colocated per component (scenario-style), 100% coverage.
- [ ] Gate: `bash scripts/verify-app.sh espousal` (typecheck + lint +
      coverage tests + build). PR: source ColorLib Hookup, preview URL,
      tokens, what differs (placeholder images, Google Fonts, optional
      video omitted by default).
