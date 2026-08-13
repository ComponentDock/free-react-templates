# Vesper (ColorLib Christian) — Tasks & Design Notes

> Recreation of ColorLib "Christian" (https://colorlib.com/wp/template/christian/)
> under the NEW original name **Vesper**. Spec lives at
> `openspec/specs/template-vesper/spec.md`; app folder `apps/vesper`,
> package `@free-react-templates/vesper`, homepage
> `https://vesper.free.componentdock.com` (CNAME `vesper.free.componentdock.com`).

## Design notes

- **Original:** ColorLib "Christian" — free church / ministry Bootstrap 5
  template (listed in TEMPLATES.md "Bootstrap 5 (89)"; duplicate rows in
  "Church (22)" and "One Page (91)" — ONE implementation covers all three
  rows).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/christian/`
  (HTTP 200, ~47.8KB) + stylesheet `css/style.css` (~325KB minified). Full
  rendered DOM extracted; structure below is from the DOM + CSS tokens. The
  TEMPLATES.md screenshot (`christian-free-template.jpg`, 1200×946) confirms
  the top of the page: transparent script-logo nav over a white-church photo
  hero (subtle dark overlay, spaced-caps "CHRISTIAN CHURCH" kicker, Lora H1
  "Following Jesus wherever we are" with "JESUS" gold, solid gold "Be part
  of us" + white-outline "Read more", carousel dots), about split below.
  Everything below the fold is from the DOM + CSS.
- **Structure observed (1:1):**
  - Navbar `ftco_navbar ftco-navbar-light` (id ftco-navbar): transparent +
    white text at top; on scroll → white bg + shadow + dark text. Cross icon
    - "Christian" brand in Great Vibes script. Links: Home, About, Sermons,
      Events, Causes, Blog, Pastor, Contact (uppercase Open Sans) + a ministry
      dropdown (Staff, Beliefs, History, Mission, Wedding & Funerals, Jobs &
      Internship, Fellowships, Home Groups, Recovery Groups, Memberships,
      Children & Students, Volunteer, Counseling, Assistance).
  - Hero `hero-wrap hero-wrap-2 js-fullheight` (id home-section, bg_1.jpg):
    height 600px, cover church photo, `::before` black overlay opacity 0.25,
    centered: spaced-caps kicker "Christian Church" + H1 "Following
    <span>Jesus</span> wherever we are" (Lora; "Jesus" gold #ffd615) + lorem
    paragraph + gold "Be part of us" (btn-primary #ffd615, white text) +
    "Read more" (transparent, 1px white border). STATIC single slide in the
    preview DOM (screenshot dots are decorative) — no slider needed.
  - About `ftco-about-section` (id about-section): split — church-interior
    photo left (about.jpg), H3 "Welcome to Christian Church" ("Christian"
    gold) + 2 paragraphs right. NO button (verified).
  - Counter `ftco-counter` (id section-counter): plain white band, 4 count-up
    counters: Members / Pastors / Donation / Churches. Static numbers OK.
  - Services `ftco-services-2` (id services-section): H2 "Christian Church
    Services" + gold 60px icon cards — Daily Prayers, Continous Teaching,
    Set of Sermons, Wedding, Community Helpers (5 in DOM; add a 6th
    church-appropriate item, e.g. Baptism, for a clean 3×2 grid).
  - Sermons `bg-light` (id sermons-section): H2 "Christian Church Sermons";
    3-slide carousel (DOM duplicates slides): photo (sermon-N.jpg), H2 title
    ("Let the Sunset Inspire You" / "Developing Spiritual Mentality" / "Let
    the Bible Motivate You"), speaker "by pastor: Jerry Simon", meta date
    "March 15, 2030", "Watch" (gold) + "Download" (outline) buttons. Use a
    simple index-based slider with prev/next.
  - Events heading band `ftco-intro img` (id events-section, bg_3.jpg):
    height 500px, black overlay 0.3, content top-center (padding-top 80px):
    kicker "Events" + white H2 "Upcoming Events".
  - Events list `bg-light ftco-event`: 6 cards — "8:30am - 11:30am",
    "Sharing Our Faith & Gospel", "by pastor: Jerry Simon", "203 Fake St.
    Mountain View, San Francisco, California, USA", "Join Us" button
    (event-1..6.jpg).
  - Causes `ftco-causes ftco-no-pb` (id causes-section): H2 "Causes Needs
    Our Help" + 4 cards (cause-1..4.jpg): "Health care, Food" (progress
    40%), "Restored the Old City Church", "Save Childern For Hunger" —
    progress bars + "Donate Now!" buttons. (Source grammar "Childern" →
    fix to "Children" in copy, content-kind latitude.)
  - Daily verse `ftco-daily-verse img` (bg_4.jpg): overlay 0.6; H2 "Donation
    so far $ 0" + 100px gold quote mark + John 3:16 verse + "Bible: John
    3:16 KJV" + "Donate now!" button.
  - Blog `bg-light` (id blog-section): H2 "Read the Latest Blog" + 3 cards
    (image_1..3.jpg): title + paragraph + "Read More". TITLES ARE
    BASE-TEMPLATE LEFTOVERS ("Why Lead Generation is Key for Business
    Growth") → paraphrase to church-relevant items (keep 3-card layout;
    note deviation in PR).
  - Pastor (id pastor-section): H2 "Church Pastor" + 4 cards (staff-1..4.jpg):
    Lloyd Wilson, Rachel Parker, Ian Smith, Alicia Henderson.
  - Contact `contact-section` (id contact-section): H2 "Contact Me" + 4 info
    columns (Address: 198 West 21th Street, Suite 721 New York NY 10016;
    Contact Number: + 1235 2355 98; Email: info@yoursite.com; Website:
    yoursite.com) + bg-light form card (Your Name / Your Email / Subject /
    Message / "Send Message" gold py-3 px-5) — client-validated,
    non-functional.
  - Map (next section, `ftco-no-pt ftco-no-pb`): Leaflet `id="map"` —
    recreation uses a STATIC map placeholder panel (pin + address), no
    leaflet dep (deviation noted in PR).
  - Gallery `ftco-gallery mb-4`: H2 "Christian Church Photo Gallery" + 6
    images (gallery-1..4.jpg + 2) with lightbox hover (glightbox in source;
    simple hover overlay + zoom icon is fine).
  - Footer `ftco-footer ftco-bg-dark` bg #1b1919, padding 7em 0: brand
    "Christian Church" (script) + blurb + socials; "About" (Staff, Beliefs,
    History, Mission, Wedding & Funerals, Jobs & Internship); "Connect"
    (Fellowships, Home Groups, Recovery Groups, Memberships, Children &
    Students, Volunteer, Counseling, Assistance); "Service Hours"
    ("Saturday Prayer Meeting: 10:00 am to 11:30 am", "Sunday Service:
    8:30 am to 11:30 am"). Copyright bar → Component Dock link.
- **Design tokens:**
  - Gold **#ffd615** (theme-color, 66×): hero "Jesus" span, .btn-primary
    fill, service icons 60px, verse quote mark, footer heading accents.
  - Secondary blue **#033fff**: .btn-secondary, cta-colored, pagination.
  - Dark **#1b1919** footer; black overlays hero 0.25 / events 0.3 / verse
    0.6; text #212529/#000, muted #6c757d; light bgs **#f8f9fa/#f2f2f2**
    (bg-light sections + form card).
  - Fonts: **Open Sans** (300–700) body/nav, **Lora** (400/700+italics)
    headings, **Great Vibes** logo script — Google Fonts `<link>`.
  - Buttons: Bootstrap radius (`.btn` ~0.375rem); gold solid primary (white
    text), white-outline transparent, gold-outline transparent variants.
  - Rhythm: `.ftco-section` 7em 0 (112px); hero 600px; events band 500px
    (pt 80px); footer 7em 0; kickers uppercase spaced; section H2 Lora serif.
- **Recreation approach:** light theme with gold accents; hero = seeded
  picsum church/architecture photo + subtle overlay + kicker + Lora H1 with
  gold "Jesus" + 2 CTAs; counters; gold lucide icon services (Sun/Moon,
  BookOpen, Mic, Heart, Users, Droplets); 3-slide sermons slider
  (index-based) with Watch/Download; photo band + 6 event cards; 4 cause
  cards + progress bars; dark verse band; 3 blog cards; 4 pastor cards;
  contact + static map placeholder; 6-image gallery; dark 4-column footer;
  all images `picsum.photos/seed/vesper-N/w/h`; Google Fonts via `<link>`.
- **Picsum subject screening:** hero/events/verse backgrounds are
  architecture-heavy in the source (church building, interior). Picsum
  verified person photos do NOT apply — screen candidate seeds with the
  bright/blue pixel metric for sky/architecture and browser-verify the top
  1–2 before pinning; update spec + tests + docs together if a seed changes.
- Reuse `packages/ui` (Button, ButtonLink, cn) — do NOT duplicate components.
- Base implementation: shipped church/ministry apps `apps/sanctuary`
  (ColorLib Church) and `apps/parish` are the closest structural references
  (nav + hero + sermons/events + footer patterns); `apps/girder`
  (Constructed) is a good dark-footer multi-section reference. Copy the
  simplest fit, then extend with the sermons slider, causes progress bars,
  daily-verse band and gallery.
- NOTE on `npm run spec:validate`: keep the spec's Gherkin blocks in the
  exact format above (## Requirement / #### Scenario / - **GIVEN** etc.) so
  the OpenSpec validator parses them.

## Tasks

- [x] Write `openspec/specs/template-vesper/spec.md` (Gherkin requirements +
      scenarios + replication findings + verification checklist) — DONE on
      main (prep).
- [ ] Create `apps/vesper` (copy the closest existing app, e.g.
      `apps/sanctuary`; rename package to `@free-react-templates/vesper`;
      run `npm install` at repo root so package-lock.json registers the
      workspace).
- [ ] TDD: tests first for Header (transparent → scrolled white + shadow,
      links + dropdown), Hero (photo, overlay, gold CTA pair), About,
      CounterBand (4 stats), ServicesGrid (6 gold-icon cards), SermonsSlider
      (3 slides, Watch/Download, prev/next), Events (photo band heading + 6
      cards), Causes (4 cards + progress + Donate), DailyVerse (overlay,
      quote, John 3:16, Donate), Blog (3 cards), PastorGrid (4 cards),
      Contact (4 info columns + form + static map placeholder), Gallery (6
      images + hover), Footer (4 columns + Component Dock link), App
      composition.
- [ ] Implement components (green) at 100% coverage.
- [ ] Screen picsum seeds for hero/events/verse backgrounds
      (architecture subjects), pin and record them.
- [ ] Per-app gate: `scripts/verify-app.sh vesper` + `npm run spec:validate`.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` for ALL THREE Christian rows
      (line ~561 "Bootstrap 5", ~1290 "Church", ~2298 "One Page") after
      merge (bookkeeping on main; add the vesper.free.componentdock.com URL +
      homepage).
- [ ] Update README structure + `docs/ai-context.md` app list (via
      `npm run readme:status`).
