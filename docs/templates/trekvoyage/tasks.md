# Trekvoyage — implementation tasks

Recreation of ColorLib "Travel2" (travel agency landing). Spec:
`openspec/specs/template-trekvoyage/spec.md`. New name: **trekvoyage**
(source slug `travel2` — never reuse it in app files; screenshot demo
brand "Travel." is also never reused).

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/trekvoyage`
- [ ] Rename package to `@free-react-templates/trekvoyage`; set
      `"homepage": "https://trekvoyage.free.componentdock.com"`
- [ ] `public/CNAME` = `trekvoyage.free.componentdock.com`
- [ ] Run `npm install` at repo root; verify lockfile registers
      `@free-react-templates/trekvoyage`
      (`grep -c "free-react-templates/trekvoyage" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy pattern)
- [ ] Google Fonts `<link>` for Lato 300–700 + Playfair Display 400–700
      in `index.html`
- [ ] `@theme` tokens in `src/index.css`: turquoise `#08d9d6`, hover
      `#09ede9`, alt `#09f2ee`, hero overlay `rgba(0,0,0,0.2)`, card
      wash `rgba(8,217,214,0.8)`, light grey `#f8f9fa`, input border
      `#e9ecef`, footer text `#888` / links `#999`, offer loc
      `rgba(170,170,170,0.8)`

## Sections (component order in `App.tsx`)

- [ ] `Navbar.tsx` — absolute (not fixed) transparent header over the
      hero; "trekvoyage" Playfair 24px white wordmark; 14px
      `rgba(255,255,255,0.7)` links Home / Dropdown ▾ (Elements group,
      Menu One, Menu Two ▸ Sub Menu One, Sub Menu Two, Sub Menu Three,
      Menu Three) / Services / About / Contact Us; white 180px dropdown
      panel, black links → `#08d9d6` hover; mobile white 300px
      off-canvas panel (burger aria-expanded), teal hovers, circular
      collapse arrows
- [ ] `Hero.tsx` — 100vh (min 670px) crossfading slider (picsum seeds
      `trekvoyage-hero-1..5`) + `rgba(0,0,0,0.2)` overlay; centered
      max-w-800px intro: white Playfair h1 "Travel to the most
      beautiful places in the world, like " + React typewriter cycling
      "Sahara Desert" + 3–4 same-kind words with blinking cursor; teal
      pill "Contact us" (hover `#09ede9`)
- [ ] `SearchCard.tsx` — white card overlapping hero (`-mt-12`,
      shadow `0 0 30px rgba(0,0,0,0.1)`, p-8, centered ~83% width);
      4 fields: Destination select (Peru, Japan, Thailand, Brazil,
      United States, Israel, China, Russia), date-range text input,
      "Enter # of People" input, full-width teal pill "Search" submit;
      inputs 2px `#e9ecef` border, 45px height, 16px, teal focus;
      submit prevented
- [ ] `PopularDestinations.tsx` — centered Playfair h2 "Popular
      Destination" + 80×4px teal underline; 3-up React-state carousel
      (1-up mobile) of photo cards (picsum `trekvoyage-dest-<n>`) with
      white text overlaid top-left (h3 1rem/900 + .8rem 70%-white loc):
      The White City/Santorini, Greece; Byodo-In Temple Ahuimanu/United
      States; Kaafu Atoll/Maldives; hover zoom 1.07 + teal wash
      `rgba(8,217,214,0.8)`; prev/next arrows hover `#08d9d6`
- [ ] `SpecialOffers.tsx` — centered h2 "Special offers & Discounts" +
      grey blurb; 4-up grid (2-up tablet, 1-up mobile) of offer cards
      (picsum `trekvoyage-offer-<n>`): 4px-radius photo, h3 20px black
      left + teal 18px/700 price right with superscript `$`, MapPin
      location line `rgba(170,170,170,0.8)`; content Kaafu Atoll $520
      Maldives, The White City $520 Greece, Byodo-In Temple $750 United
      States, Arabische Emiraten $520 Dubai
- [ ] `EscapeLife.tsx` — split block: left lg:5 right-aligned Playfair
      50px white headline "We Travel Not To Escape Life But for Life not
      to Escape Us." in a span with solid `#08d9d6` background bleeding
      ±0.5em via box-shadow, overlapping the image (`-right-6 top-5`);
      right-aligned blurbs (Vokalia/Consonantia + Duden river patterns,
      paraphrased) + teal pill "Get started"; right lg:6 photo (picsum
      `trekvoyage-about`) with centered teal circular play button (hover
      `#09f2ee`), no-op click; stacks on mobile
- [ ] `Counters.tsx` — full-width `#08d9d6` band (70px padding); 4
      counters (2×2 mobile): white Playfair 3rem (2.5rem mobile) numbers
      counting up with comma separators on IntersectionObserver:
      9,313 # of Travels; 8,492 # of Clients; 100 # of Employees; 120 #
      of Countries; captions `rgba(255,255,255,0.8)`
- [ ] `Services.tsx` — centered h2 "Our Services" + grey blurb; row:
      left lg:4 tall photo (picsum `trekvoyage-services`, ~300px) + right
      2×2 `#f8f9fa` cards (30px padding, h3 Playfair 1.2rem/700 +
      grey blurb): Easy & Free Transport, Delicious Food, Swimming Pool,
      Playground
- [ ] `CtaBand.tsx` — full-width `#08d9d6` band (py-5): centered white
      Playfair h2 "Plan your travel now and get in touch with us.",
      white lead paragraph at 70% opacity (paraphrased), white 2px
      outline bold pill "Get in touch" (hover white bg + `#08d9d6`
      text), no-op link
- [ ] `Footer.tsx` — LIGHT `#f8f9fa` footer (top 80px / bottom 70px),
      14px `#888` text, Lato 14/700 black widget headings; widgets
      About (blurb + 30px teal social circles with white lucide icons +
      shadow `0 5px 10px -2px rgba(0,0,0,0.2)`) / Pages (Blog, About,
      Contact) / Resources (Blog, About, Contact) / Contact (email,
      phone, address — paraphrased); links `#999` → black hover; bottom
      bar: copyright with Component Dock link
      (`https://www.componentdock.com/`, "Component Dock") + Terms /
      Privacy right

## Tests (TDD — red first, 100% coverage)

- [ ] Per-component tests mirroring the spec's Gherkin scenarios
      (query by role/text; `user-event` for dropdowns, burger, carousel
      arrows, typewriter)
- [ ] Navbar: dropdown open/close on hover/focus, mobile toggle
      (`aria-expanded`), off-canvas links
- [ ] Hero: typewriter cycles words; slider crossfades (fake timers);
      CTA renders
- [ ] SearchCard: select options present; submit prevented
- [ ] PopularDestinations: hover wash/zoom classes; arrows advance the
      carousel
- [ ] Counters: count-up reaches the final comma-formatted values on
      intersection (mock IO)
- [ ] Footer contains the Component Dock link; no `colorlib` string
      anywhere in the app (grep gate)
