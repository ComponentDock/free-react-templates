# Netrise (ColorLib Webhost) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-netrise`.

## Design notes (replication findings)

- **Original:** ColorLib "Webhost" — hosting-provider landing page (source:
  https://colorlib.com/wp/template/webhost/). TEMPLATES.md has THREE rows:
  line 530 (category Bootstrap), line 2099 (category Landing Page), and
  line 3066 (category Web Hosting) — mark ALL THREE `[x]` when done. No
  other spec on main maps to this slug (grep-checked before prepping).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/webhost/
  (HTTP 200, 43,339 bytes; title "WebHost - Free Bootstrap 4 Template by
  Colorlib"). Master stylesheet `css/style.css` (93,325 bytes) fully
  extracted; libs: Bootstrap 4 grid, Owl Carousel (hero + testimonials),
  AOS, animate.css, magnific-popup, icomoon + flaticon icon fonts. Font
  **Work Sans** (Google Font — load via `<link>` in index.html).
- **Screenshot:** `webhost-free-template-1.jpg` (viewed in browser) —
  pink→purple gradient hero (lavender→magenta) with bold white headline,
  white subtext, teal "Get started" + blue "Read more" buttons, dashboard
  device mockup (monitor + tablet + phone) on the right, carousel dots;
  dark navy domain bar below; light guarantee grid; photo counter band;
  pricing cards; icon grid; gradient testimonials; dark navy client strip
  and footer. Cross-checks the live DOM + CSS analysis. Demo brands itself
  "WebHost"; recreation uses the NEW name **Netrise**.
- **Visual design (from DOM + CSS tokens + live browser render):** three
  diagonal (45deg) gradients drive the whole page over a dark navy
  (#233142) base:
  - **Gradient A** `#12e6ca → #8be55d` (teal→green): hero "Get started",
    pricing "Choose Plan", 80×80 service icon squares (both guarantee and
    Why-Choose-Us grids).
  - **Gradient B** `#56c8fb → #627bed` (sky→indigo): hero "Read more",
    domain search submit, `.testimony-section` background.
  - **Gradient C** `#fb83b5 → #9a51ff` (pink→purple): `.home-slider`
    background, nav "Get started" pill.
  - Dark navy **#233142**: `.ftco-domain`, `.ftco-partner`, `.ftco-footer`.
  - Light sections: Bootstrap `bg-light` **#f8f9fa** (guarantee, pricing,
    blog).
  - Buttons: hero CTAs large-padded (`p-3 px-xl-5 py-xl-3`) white text,
    subtle radius; domain submit SQUARE (radius 0, 4px on right side only)
    Gradient B; pricing button block full-width mb-4; nav CTA pill
    **radius 30px** Gradient C on a white wrapper.
  - Cards (`.services`): white, padding 30px, radius 4px, shadow
    `0 2px 5px rgba(0,0,0,.03)`; icon 80×80 Gradient A square.
  - Rhythm: `.ftco-section` 6em 0; domain + partner 5em 0; footer 7em 0
    3em; hero slider-item height **750px**.
  - Nav: dark bg, white links (Home active), burger on mobile.
- **Section order (1:1, from live demo DOM):**
  1. Navbar (`navbar-dark bg-dark`): brand "WebHost" left; Home/About/
     Domain/Hosting/Blog/Contact right; pill CTA "Get started".
  2. Hero slider (`home-slider owl-carousel`): 2 slides (bg images bg_1,
     bg_2 over the pink→purple gradient, height 750px) — h1 bold white
     ("Everything you get what you need to Host your website" /
     "The Web Hosting Platform Made for You"), subheading "Up to 90%
     Discount with Free Domain Name Registration", blurb, CTAs "Get
     started" (A) + "Read more" (B), device mockup right, dots bottom.
  3. Domain search (`ftco-domain`, #233142): h2 "Search You Domain Name";
     form = input "Enter your domain name..." + select (.com .net .biz .co
     .me) + square "Search Domain" submit (B); TLD price row ".com $9.75
     .net $9.50 .biz $8.95 .co $7.80 .me $7.95".
  4. Guarantee (`services-section bg-light`): h2 "The WebHost Guarantee";
     6 white cards — 100% Uptime Guarantee, Safe and Secured, Our Dedicated
     Support, Domain Transfer, DNS Control, Fast Loaded — 80×80 Gradient A
     icon squares (flaticon: guarantee, shield, support, cloud-computing,
     settings, loading).
  5. Counter band (`ftco-counter img`, parallax bg image): subheading
     "More than 100,000 websites hosted"; 4 counters — 2000 CMS
     Installation, 100 Awards Won, 32000 Registered Domains, 31998
     Satisfied Customers (count-up on scroll).
  6. Pricing (`bg-light`): h2 "Our Best Pricing"; 4 × block-7 cards —
     Free $0 ("100% free. Forever"), Startup $19, Premium $49, Pro $99 —
     each "Enjoy All The Features", features (Bandwidth / Storage /
     Overages / All features: Free 150 GB/100 GB/$1.00, Startup 450/400/
     $2.00, Premium 250/200/$5.00, Pro 450/400/$20.00), block "Choose
     Plan" button (A).
  7. Why Choose Us (`ftco-services`, white): h2 "Why Choose Us?"; 6 cards
     — Free Domain Transfer, Unlimited BandWidth, Security, 99% Uptime,
     Free Website Optimization, 24/7 Tech Support — same 80×80 Gradient A
     icon squares.
  8. Testimonials (`testimony-section`, Gradient B): white h2 "Our
     satisfied customer says"; carousel of 5 — quote + "Mark Web" + role
     (Marketing Manager, Interface Designer, UI Designer, Web Developer,
     System Analyst); dots.
  9. How it works (`ftco-section`, white): h2 "How it works"; tabs "Next
     gen VPS" (active) / "Performance" / "Effectiveness"; 3 panels — h3
     ("Next gen VPS hosting" / "Performance VPS hosting" / "Effective VPS
     hosting") + 2 paragraphs + dashboard screenshot
     (dashboard_full_1/2/1.jpg).
  10. Clients (`ftco-partner`, #233142): white h2 "Our Clients"; 5 partner
      logos (partner-1..5.png).
  11. Blog (`bg-light`): h2 "Recent Blog"; 3 entries — bg image
      (image_1..3.jpg), meta (Sep. 20, 2018 · Admin · 3 comments), h3 title
      "Even the all-powerful Pointing has no control about the blind
      texts", blurb, "Continue Reading".
  12. Footer (`ftco-footer`, #233142, 7em 0 3em): 4 columns — brand
      "WebHost" + blurb + 3 socials (twitter/facebook/instagram); Useful
      Links (Servers, Windos Hosting [sic], Cloud Hosting, OS Servers,
      Linux Servers, Policy); Navigational (Home, Domain, Hosting, About,
      Blog, Contact); Office (address "203 Fake St. Mountain View, San
      Francisco, California, USA", phone "+2 392 3929 210", email
      "info@yourdomain.com"). Copyright bar: "Copyright © {year} All
      rights reserved | This template is made with ♥" (drop Colorlib
      credit; fix the "Unseful Links"/"Windos Hosting" typos — allowed,
      note in PR).
- **Seeds for picsum placeholders (approx 20):** netrise-1..2 hero device
  mockups (or build the dashboard mock-up in JSX with divs — closer to the
  source look), netrise-3 counter band, netrise-4..6 dashboard panels,
  netrise-7..9 blog, netrise-10..14 partner logos (or simple grayscale SVG
  wordmarks).
- **lucide-react icon map:** guarantee/uptime → `shield-check` or `badge-check`,
  secured → `shield`, support → `headset`, cloud/domain transfer →
  `cloud`, DNS/settings → `settings`, fast → `zap` (or `rocket`), bandwidth
  → `gauge` (or `activity`), server → `server`, globe → `globe`, map →
  `map-pin`, phone → `phone`, mail → `mail`, comments → `message-circle`,
  socials → `twitter` / `facebook` / `instagram`, nav → `menu`, arrows →
  `chevron-right`, search → `search`.

## Implementation order (suggested)

1. Scaffold `apps/netrise` from the simplest existing app; rename package to
   `@free-react-templates/netrise`; register in the root lockfile via the
   repo's usual add-workspace flow (implementer's job, NOT prep).
2. `@theme` tokens: gradient stops — teal `#12e6ca`, green `#8be55d`, sky
   `#56c8fb`, indigo `#627bed`, pink `#fb83b5`, purple `#9a51ff`; dark navy
   `#233142`; light `#f8f9fa`; font `Work Sans`. Gradients can be Tailwind
   arbitrary values (`bg-[linear-gradient(45deg,#12e6ca,#8be55d)]`) or
   theme utilities.
3. Components (one per section, in `apps/netrise/src/components/`):
   `Navbar` (dark + burger + pill CTA), `Hero` (2-slide carousel + dots +
   mockup), `DomainSearch` (zod-validated input+select, result message),
   `Guarantee` (6 cards), `Counters` (IntersectionObserver count-up),
   `Pricing` (4 plans), `WhyChooseUs` (6 cards), `Testimonials` (carousel
   of 5), `VpsTabs` (3 tabs + panels), `Clients` (5 logos), `Blog` (3
   entries), `Footer` (4 cols + copyright bar).
4. TDD per component: tests first, 100% coverage via
   `scripts/verify-app.sh netrise` (typecheck + lint + vitest + build).
5. PR description: source template + preview URL + tokens + what differs
   (rename, picsum seeds, lucide icons, React state instead of
   jQuery/Owl/stellar, dashboard mock-up instead of copied screenshots,
   neutral copyright credit, fixed footer typos).
6. After deploy: mark TEMPLATES.md lines **530, 2099, AND 3066** `[x]` +
   surge URL, `npm run readme:status`, conventional commit.

## Verification

- [ ] `scripts/verify-app.sh netrise` (typecheck + lint + 100% coverage tests + build)
- [ ] Spec scenarios all implemented (`openspec/specs/template-netrise/spec.md`)
- [ ] Visual pass vs live demo `https://preview.colorlib.com/theme/webhost/`
- [ ] TEMPLATES.md lines 530 + 2099 + 3066 all `[x]`
