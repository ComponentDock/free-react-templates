# Swatch (ColorLib Knuford) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-swatch`.

## Design notes (replication findings)

- **Original:** ColorLib "Knuford" — personal portfolio / resume one-pager
  for a web designer (source: https://colorlib.com/wp/template/knuford/).
  TEMPLATES.md has FOUR copies of this item (lines 597 Bootstrap 5, 2331 One
  Page, 2402 Personal, 2716 Resume — mark ALL when done).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/knuford/
  (HTTP 200, ~44 KB HTML, `<title>KnuFord - Web Designer & Developer
Portfolio</title>`). Main stylesheet `css/style.css` (~307 KB) parsed for
  tokens. Stack is jQuery + Bootstrap 5 + Swiper + GLightbox + AOS +
  typewrite effect — recreate all interactivity client-side in React.
- **Screenshot:** `knuford-free-template.jpg` (1200×946, viewed in browser) —
  light-blue hero with lighter-blue blob shapes, white headline "I am Keannu
  Ford / A Web Designer", man's photo right pointing at text, white navbar
  with dark links, about = photo left + "My Story" with underlined active tab
  right. Live preview ALSO browser-verified: hero renders light sky-blue,
  "Hi There!" pale pill above white h1, HIRE ME navy-solid + VIEW PORTFOLIO
  white buttons, navbar turns solid `#0779e4` on scroll.
- **New name:** Swatch (designer's color swatch — fits the web-designer
  portfolio; matches the -ly/-ly naming pattern vibe of Shutterly/Hiredly).
  NOT "knuford" — never reuse the source name.
- **Visual design (DOM + CSS tokens + screenshot):** white/light-gray canvas
  with `#0779e4` blue brand. ONE font: Roboto (300/400/700). Body text
  `#999999` 16px/1.8. Cards white radius 4px (services) / 8px (pricing);
  buttons Bootstrap default (~6px). Hero is LIGHT (overlay opacity 0 — do NOT
  darken it). Counter band = image + `#0779e4` overlay .9. Footer bg
  `#eeeeee`. Active testimonial slide highlighted blue. Scrolled navbar solid
  blue with `#3e9ff9` active-link bg.

## Structure (1:1, section order — from the live DOM)

1. **Navbar** — brand "Swatch", links Home/About/Services/Portfolio/Pricing/
   Blog/Contact (anchors), transparent/light at top → solid `#0779e4` on
   scroll (active link bg `#3e9ff9`), mobile hamburger (aria-expanded).
2. **Hero** (`#home`, 100vh) — light sky-blue bg (flat or image; portrait
   optional right), "Hi There!" pill, h1 "I am Keannu Ford" + typewrite
   ("A Web Designer" / "A Developer" / "I Love Design." / "I Love to
   Develop."), paragraph, "Hire Me" (solid blue) + "View Portfolio" (white)
   buttons with arrows, Facebook/Twitter/Linkedin links.
3. **About** (`#about`, white) — photo left; tabs right: About Me (default:
   "My Story" + "I Do Web Design & Development since I was 18 Years Old") /
   Skills (4 progress bars 8px: Photoshop 80, HTML/CSS 95, Javascript 88,
   WordPress 89) / Experience (3 resume timeline entries — vary company
   names; demo repeats "Google Inc.").
4. **Services** (`#services`) — overline "Services" + h2 "This is My
   Expertise, The Services I'll Provide My Clients"; 3 white cards (70×60
   blue icon box + UI & UX Design / Web Development / Graphic Design +
   blurb + "Read more"); bottom centered CTA line "Have any works you want
   to done by me? [Contact Me]".
5. **Counter band** — bg image + `#0779e4` overlay .9; 3000 Happy Customer /
   320 Project Completed / 1000 Cups of Coffee (icon + number + uppercase
   label).
6. **Portfolio** (`#portfolio`) — overline "Portfolio" + "My Latest Work";
   6 image tiles (3-col): white title + "WEB DESIGN" uppercase category —
   vary titles (demo repeats one).
7. **Testimonial** (bg-light) — overline "Testimonial" + "Our Successful
   Students"; carousel of 5 (quote + round avatar + name + role); ACTIVE
   slide bg `#0779e4` white text — vary names/roles.
8. **Blog** (bg-light) — overline "Our Blog" + "Recent From Blog"; 6 white
   cards: image + meta (date + "3 Comments") + title + blurb — vary
   titles/dates.
9. **Pricing** (`#pricing`) — overline "My Pricing" + "Flexible Packages" +
   intro p; 3 cards (radius 8px): Starter $ 499 / Professional $ 999 (Most
   Popular) / Enterprise $ 2,499; 6 features each; "Get Started" button
   (uppercase, width 60%).
10. **Contact** (`#contactme`) — "Contact us" + dbox rows (My Address / My
    Email / My Phone — display strings, spaced literals), form (Name, Email,
    Subject, Message, Send Message → success state), "Follow me here"
    (Facebook/Twitter/Instagram/Dribbble), map iframe → placeholder/omit.
11. **CTA strip** (`ftco-intro`, solid `#0779e4`) — "Have any works you want
    to done by me?" + "Contact Me" white outline button (border-left).
12. **Footer** (`#eeeeee`) — brand (blue span) + pera + social; "Services"
    (Web Design, Web Development, Graphic Design, UI/UX Design); "Have a
    Questions?" (address · phone · email); copyright bar + Component Dock
    link (https://www.componentdock.com/).

## Todo (implementation order)

- [ ] `npm run spec:validate` passes (spec: `openspec/specs/template-swatch/`)
- [ ] Scaffold `apps/swatch` (copy simplest existing app; package
      `@free-react-templates/swatch`; `public/CNAME` =
      `swatch.free.componentdock.com`; homepage
      `https://swatch.free.componentdock.com`); run `npm install` at root
      and verify lockfile registration
- [ ] `src/index.css`: `@theme` tokens — brand `#0779e4`, brand-soft
      `#3e9ff9`, ink `#111111`, body-text `#999999`, muted `#666666`, paper
      `#FFFFFF`, light `#f8f8f8`, footer-bg `#eeeeee`; Roboto 300/400/700
      `<link>` in index.html
- [ ] `Navbar` — brand, 7 links, scrolled solid-blue state (active link
      `#3e9ff9`), mobile hamburger (aria-expanded)
- [ ] `Hero` — light sky-blue bg + "Hi There!" pill + h1 + typewrite
      rotation + Hire Me / View Portfolio + social links
- [ ] `About` — photo + tabs (About Me / Skills / Experience) with
      client-side switching
- [ ] `Services` — 3 cards + "Read more" + bottom CTA line
- [ ] `Counters` — blue-overlay band + 3 animated counters
- [ ] `Portfolio` — 6 image tiles with title + category
- [ ] `Testimonials` — carousel, active slide blue highlight
- [ ] `Blog` — 6 post cards
- [ ] `Pricing` — 3 cards, middle "Most Popular", Get Started
- [ ] `Contact` — dbox rows + form (success state) + Follow me here + map
      placeholder
- [ ] `CtaStrip` — solid blue + white outline Contact Me
- [ ] `Footer` — 3 widgets + copyright + Component Dock link + social icons
- [ ] Tests per section (100% coverage) → `scripts/verify-app.sh swatch`
- [ ] PR `feat/template-swatch` → merge immediately; TEMPLATES.md rows 597 +
      2331 + 2402 + 2716 → `[x]` + surge URL + readme:status
