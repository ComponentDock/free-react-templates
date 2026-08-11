# Taply (ColorLib Mobapp) — Tasks & Design Notes

> Recreation of ColorLib "MobApp" — free one-page mobile app landing
> template (https://colorlib.com/wp/template/mobapp/) under the NEW name
> **Taply** ("tap" — the core mobile-app interaction — plus the friendly
> "-ly" family suffix: Wingly, Drivly, Nestly, Bookly, Coastly, Restly,
> Sleeply, Dozely, Soarly, Lodgely, Sneakly; single lowercase word, no
> collision with `apps/`, `openspec/specs/` or `docs/templates/` —
> verified 2026-08-11), per the monorepo naming mandate (never reuse the
> ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "MobApp" — page title "MobApp - App Landing Page
  Template". TEMPLATES.md category: **Mobile App (27)**, first occurrence
  at line 456 (`- [ ]`, source NOT shipped anywhere). DUP-ROW TRAP: the
  `mobapp` slug also appears at line 1477 (One Page 101) and line 2063
  (Landing Page 91) — all `- [ ]` rows of the same template; ONE
  implementation covers all three rows (mark all `[x]` with the same
  surge URL at bookkeeping).
- **Live preview DOM analyzed (verified 2026-08-11):**
  `https://preview.colorlib.com/theme/mobapp/` — HTTP 200, ~33 KB HTML
  (REACHABLE, not a 404). Custom CSS in `css/style.css` (~12.5 KB) +
  Bootstrap 4 `css/bootstrap.min.css` + themify-icons + owl.carousel.
  Screenshot `MobApp-free-one-mobile-app-landing-page.jpg` (1200×991,
  viewed in browser) matches the live DOM for the visible top half
  (gradient hero → client logos → features).
- **Visual design:** sleek tech-forward one-pager. Deep VIOLET → HOT-PINK
  diagonal gradient hero (dark purple `#3c0876` → pink `#fa0076`) with a
  large thin white headline "Mobile App Landing Page Template", short
  white subtext, centered iPhone-X style phone mockup (lock screen);
  white nav above (HOME FEATURES GALLERY PRICING CONTACT + outlined
  DOWNLOAD button); grey client-logo strip below the hero; pale-lavender
  `#faf6fb` "Features you love" row (3 icon cards: Simple / Customize /
  Secure, purple gradient icons); dark-purple headings on light
  backgrounds. Rubik sans throughout.
- **Section order (1:1, verified from live DOM):**
  1. Navbar `nav.navbar.navbar-dark.navbar-expand-lg` — transparent over
     the gradient hero; brand logo image left; white uppercase links
     right: HOME (active) · FEATURES · GALLERY · PRICING · CONTACT
     (anchors `#home #features #gallery #pricing #contact`); trailing
     "Download" outline button.
  2. Hero `header#home.bg-gradient` — `padding: 100px 0 0; text-align:
center; color: #FFF`; h1 "Mobile App Landing Page Template" (large,
     light 300 white) + p "The one and only solution for any kind of
     mobila app landing needs. Just change the screenshots and texts and
     you are good to go." + centered `img` `images/iphonex.png` phone
     mockup.
  3. Client logos `div.client-logos.my-5` (white bg) — single greyed
     logo-strip image (`images/client-logos.png`; recreation: 4–6 grey
     text placeholders).
  4. Features `div.section.light-bg#features` (bg `#faf6fb`) —
     `.section-title` small "HIGHLIGHTS" (`#998a9b`) + h3 "Features you
     love"; row of 3 `col-12.col-lg-4` `div.card.features` →
     `.card-body > .media`: themify icon `.gradient-fill` (ti-face-smile
     Simple · ti-settings Customize · ti-shield Secure) + h4.card-title +
     p.card-text lorem.
  5. Discover our App `div.section` (white) — LEFT col: h3 "Discover our
     App" + lorem + "Read more" link; RIGHT col: small "FEATURES" +
     h3 "Do more with our app" + 4 checklist items (Communication ·
     Scheduling · Messages · Live Chat — icon + title + one-liner).
  6. Communicate with ease `div.section.light-bg#communication` — image +
     text block (h3 + lorem).
  7. Scheduling when you want `div.section#schedule` — same pattern.
  8. Realtime Messaging service `div.section.light-bg#messages`.
  9. Live chat when you needed `div.section#livechat`. (6–9 alternate
     light/white and flip image side.)
  10. App Screenshots `div.section.light-bg#gallery` — h3 "App Screenshots"
      - phone-screenshot carousel (owl in source; recreation: 3–4 phone
        screens with dots).
  11. Testimonials `div.section` (white) — h3 "What our Customers Says";
      quote cards: quote p + `img.client-img` avatar + "Crystal Gordon" +
      "United States".
  12. Pricing `div.section#pricing` — small "PRICING" + h3 "Upgrade to
      Pro"; 3 `div.card.pricing`: PERSONAL $14/m (10 Projects · 5 GB
      Storage · Basic Support · del Collaboration · del Reports and
      analytics) · FOR TEAMS $29/m `.popular` (3px top border `#ce75b4` +
      shadow; Unlimited Projects · 100 GB Storage · Priority Support ·
      Collaboration · Reports and analytics) · ENTERPRISE $249/m
      (Unlimited Projects · Unlimited Storage · Collaboration · Reports
      and analytics · Web hooks); `span.price` 45px w300 `#633991`; btn
      "Choose this Plan" (btn-primary btn-lg btn-block gradient).
  13. FAQ `div.section.pt-0` — h3 "Frequently Asked Questions"; accordion
      of 4: "Can I try before I buy?" · "What payment methods do you
      accept?" · "Can I change my plan later?" · "Do you have a contract?"
      (lorem answers).
  14. CTA `div.section.bg-gradient` — h3 "Download Anywhere" + p
      "Available for all major mobile and desktop platforms..." + App
      Store / Google Play buttons + footnote " *Works on iOS 10.0.5+,
      Android Kitkat and above." (`p.text-primary`).
  15. Contact `div#contact` (inside the gradient CTA) — 3 icon+text
      blocks: 1485 Pacific St, Brooklyn, NY 11216 USA · support@mobileapp.com
      · 518-3636-2800.
  16. Footer `footer.my-5.text-center` (white) — centered copyright +
      PRESS · TERMS · PRIVACY links.
- **Design tokens (from `css/style.css`, verified 2026-08-11):**
  - Brand gradient: `linear-gradient(122deg, #e54595 0%, #fd378e 100%)`
    — `.btn-primary` bg (hover reverses), `.gradient-fill` feature icons.
  - `.bg-gradient` (hero + CTA): `linear-gradient(135deg, rgba(60,8,118,
0.8) 0%, rgba(250,0,118,0.8) 100%)` → `#3c0876` → `#fa0076`.
  - Text: `#633991` brand purple (prices/headings), `#9477b4` secondary
    purple, `#959094` muted (list items), `#998a9b` eyebrow small.
  - Sections: `#faf6fb` light (`.light-bg`), white otherwise.
  - Pricing: border `#f1eef1`, popular top `#ce75b4`, del `#d9d3d8`,
    shadow `0 12px 59px rgba(36,7,31,0.11)`.
  - Font: **'Rubik', sans-serif** (Google Fonts `<link>` in index.html —
    the preview HTML does NOT load the font itself, the CSS just names it;
    add weights 300/400/500/700).
  - Buttons: `.btn` 12px uppercase w400, padding `.375rem 1.35rem`,
    radius **3px**, transition all 0.3s; `.btn-primary` gradient + shadow
    `0 9px 32px rgba(0,0,0,0.3)`; hover reversed gradient;
    `.btn-outline-light:hover` color `#d6619c`.
  - Price `span.price` 45px w300 `#633991`; section h3 with `small`
    uppercase eyebrow above; card titles h4.

## Implementation tasks (for the implementer)

- [ ] `npm run spec:validate` for `template-taply` before starting
- [ ] Scaffold `apps/taply` (copy simplest existing app, rename package
      to `@free-react-templates/taply`); register workspace
      (`npm install --package-lock-only` if needed)
- [ ] `@theme` tokens: `--color-brand: #e54595`, `--color-brand-2:
    #fd378e` (button gradient), `--color-hero-1: #3c0876`,
      `--color-hero-2: #fa0076` (bg gradient), `--color-brand-purple:
    #633991`, `--color-lavender: #faf6fb`, `--color-eyebrow: #998a9b`;
      Rubik Google Fonts `<link>` in index.html; document title "Taply —
      Mobile App Landing Page"
- [ ] Navbar component (transparent over hero, 5 anchor links, Download
      button, mobile toggler)
- [ ] Hero (gradient bg, h1 light white, subtext, centered phone mockup —
      picsum phone/UI seed)
- [ ] Client logos strip (4–6 grey text placeholders)
- [ ] Features (HIGHLIGHTS eyebrow + 3 icon cards: smile/settings/shield
      with gradient fill)
- [ ] Discover our App (2 columns; checklist: Communication, Scheduling,
      Messages, Live Chat)
- [ ] 4 alternating feature blocks (Communicate with ease / Scheduling
      when you want / Realtime Messaging service / Live chat when you
      needed; flip image side each time; alternate `#faf6fb`/white)
- [ ] App Screenshots (3–4 phone screens, dots or static row)
- [ ] Testimonials (quote + avatar + name + country, dots)
- [ ] Pricing (3 cards; FOR TEAMS popular highlight; strike-through
      features; "Choose this Plan" gradient buttons)
- [ ] FAQ (4-item accordion)
- [ ] Download CTA (gradient, App Store + Google Play buttons, footnote) + contact block (address · email mailto: · phone tel: computed at
      runtime from spaced string — NEVER a literal tel: URI)
- [ ] Footer (centered copyright + PRESS/TERMS/PRIVACY)
- [ ] TDD: tests first per requirement, 100% coverage via
      `scripts/verify-app.sh taply` (typecheck + lint + vitest + build)
- [ ] Visual QA against `https://preview.colorlib.com/theme/mobapp/`
      (section order, purple→pink gradients, `#633991` prices, `#faf6fb`
      alternation, hero phone mockup)
- [ ] PR description: source = ColorLib Mobapp, preview URL, tokens
      (#e54595/#fd378e, #3c0876/#fa0076, #633991, Rubik, radius-3px
      buttons), what differs (Taply brand, picsum placeholders, neutral
      footer credit, dead links)
- [ ] Bookkeeping on merge: mark lines ~456 (Mobile App), ~1477 (One
      Page), ~2063 (Landing Page) `[x]` + surge URL +
      `npm run readme:status`

## Pitfalls (from the skill + this prep)

- **Dup rows:** 3 TEMPLATES.md rows for mobapp — ONE implementation, all
  three rows to `[x]`.
- **Two gradients:** the button gradient (#e54595 → #fd378e, 122deg) and
  the hero/CTA background gradient (#3c0876 → #fa0076, 135deg) are
  DIFFERENT — keep both in `@theme`, don't reuse one for the other.
- **Brand icons:** lucide-react removed brand icons — Apple/Google Play
  buttons should be text + generic icon or inline SVG, never lucide brand
  icons.
- **tel: literals:** contact phone "518-3636-2800" — never write a literal
  `tel:` URI in source; compute at runtime from the spaced display string
  (toolchain redaction pitfall, Vellum/Readit); add an href assertion test.
- **Carousels:** keep any index/dot logic in pure exported functions so
  vitest covers them without fake timers (RTL fake-timer needs `act()`).
- **Test queries:** desktop + mobile nav duplicate links in the DOM — use
  `getAllByRole` and index the mobile one last.
- **Decorative images:** `<img alt="">` has no `img` role in Testing
  Library — query decorative strips with `container.querySelectorAll`.
- **Family palette check (2026-08-11):** purple→pink gradients
  (#e54595/#fd378e + #3c0876/#fa0076) are unique among mobile-app/one-page
  preps so far — keep them exact; do NOT reuse another prep's brand color.
