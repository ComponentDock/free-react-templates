# Vitesse (ColorLib "Logisticexpress") — Design Notes

## Source mapping

| Item | Value |
| --- | --- |
| ColorLib name | "Logisticexpress" (kept on ColorLib's side only; preview `<title>`: "Transportation HTML-5 Template") |
| Recreation name | **Vitesse** (NEW — French for "speed/velocity"; single lowercase word; never "Logisticexpress") |
| Slug | `logisticexpress` |
| Source page | https://colorlib.com/wp/template/logisticexpress/ |
| Live preview | ✅ **REACHABLE** — https://preview.colorlib.com/theme/logisticexpress/ HTTP 200, **39,236 bytes** (verified 2026-10-01). Full template page: dark utility+nav header, slider hero with tracking form, 8 content sections, dark footer |
| Stylesheets | `assets/css/style.css` HTTP 200 **63,411 B** (custom theme — canonical tokens) · `assets/css/bootstrap.min.css` HTTP 200 **26,625 B** (stock Bootstrap 4 — colors NOT overridden; style.css is the theme) · Google Fonts: **Teko** (headings) + **Barlow** (body/buttons) |
| Other source assets | jQuery + slick slider + slicknav + nice-select + magnific-popup + animate.min.css + flaticon/themify/fontawesome icon fonts (NEVER copied — recreation: React state, lucide-react, no jQuery) |
| Screenshot | https://colorlib.com/wp/wp-content/uploads/sites/2/logisticexpress-free-template.jpg — real **JPEG 1200×946** (124,991 B, verified 2026-10-01). Shows dark header + hero + info bar. Screenshot nav shows 5 flat links; **live preview is canonical** and adds a Blog dropdown (Blog, Blog Details, Element) |
| TEMPLATES.md | `## Transportation (22)` at line 2947; item at line 2965; slug `logisticexpress` appears exactly once |
| Name collision check | "vitesse" = 0 hits (case-insensitive) in `ls apps/`, `openspec/specs/`, `docs/`, TEMPLATES.md, and all spec/docs content on origin/main (`git grep`), 2026-10-01. Distinct from logistics-family names on main: swiftly, shiply, logistix, logistico, haulage, haulio, drayage, cargoly, cargomate, cargolane, freightly, freightflow, shipment, shipwise, convey, depot, fleetly, drively, drivego, packwell, consignly, highway |
| Stack | Vite + React 19 + Tailwind CSS 4 + TypeScript (monorepo) |

## Design token summary (full table in the spec)

- **Fonts:** Teko (headings — hero h1 95px/600, scales 50→35px) +
  Barlow (body, buttons, nav) — Google Fonts `<link>` only.
- **Oranges:** accent `#f15f22` (eyebrow spans, 44px info icons,
  team hover, arrow hover) · buttons `#ff5f13` with `#e0581e`
  slide-in hover.
- **Indigo:** `#1f2b7b` secondary (generic button palette + emphasis;
  sparse on home page).
- **Darks:** header `#000c20` (solid) · footer `#121212` · divider
  `#1a2537` · text-dark `#2c234d`.
- **Grays:** body `#677294` · muted `#717b9b` · quote `#a4acc3` ·
  footer `#c4c4c4` · arrows `#616373` · links `#635c5c` · team
  social `#8ba4b1`.
- **Light bgs:** info bar `#f9f9f9` · lavender `#f9f9ff` · soft
  `#f5f5f5` (form card + blog date badge) · card border `#e1ebf7`.
- **Radii:** buttons 5px · cards 6px · form wrapper 8px · CTA card
  10px.
- **Buttons:** uppercase, letter-spacing 1px, Barlow 14px; `.btn`
  padding 27px 44px; `.submit-btn` 19px 44px width 100%; nav CTA
  25px 35px.
- **Rhythm:** section-padding30 195px/170px desktop → 65px/30px
  mobile; testimonial 190px/170px; footer 105px/50px.
- **Generic palette (genric-btn, secondary):** primary `#1f2b7b`,
  success `#4cd3e3`, info `#38a4ff`, warning `#f4e700`, danger
  `#f44a40`.

## DOM skeleton (live preview, structure order)

```html
<body>
  <header class="header-area">              <!-- solid #000c20; scrolled shadow -->
    <div class="top-header">                <!-- Phone +99 (0) 101 0000 888 · Email noreply@yourdomain.com · social icons -->
    <div class="header-bottom">             <!-- padding 15px 0 -->
      logo: [orange truck glyph] LOGISTIC EXPRESS   <!-- recreation: "Vitesse" -->
      nav: Home · About · Services · Blog(dropdown: Blog/Blog Details/Element) · Contact
      <a class="btn header-btn">Get A Qoue</a>      <!-- source typo; recreation: "Get A Quote" -->
  </header>

  <div class="slider-area">                 <!-- .slider-height: photo bg, min-height 1080px desktop -->
    <h1>Safe & Reliable <span>Logistic</span> Solutions!</h1>   <!-- span = #f15f22 -->
    <form>                                  <!-- tracking form -->
      <input placeholder="Your Tracking ID">
      <button class="submit-btn">Track & Trace</button>
      <p><em>For order status inquiry</em></p>
    </form>
    <button class="slick-arrow">‹›</button> <!-- 50×50, radius 6px, #616373, hover #f15f22, right:90px bottom:0 -->
  </div>

  <div class="our-info-area">               <!-- #f9f9f9, pt-70 pb-40 -->
    ×3 single-info: [44px orange icon] <span>label</span> <p>value</p>
    <!-- Call Us Anytime / + (123) 1800-567-8990 · Sunday CLOSED / Mon - Sat 8.00 - 18.00 · Columbia, SC 29201 / USA, New York - 10620 -->
  </div>

  <div class="categories-area">             <!-- section-padding30; white -->
    <div class="section-tittle text-center">
      <span>Our Services</span>             <!-- #f15f22 18px/600 -->
      <h2>What We Can Do For You</h2>       <!-- Teko 50px/600 -->
    </div>
    ×3 single-cat: border 1px #e1ebf7, radius 6px, padding 85px 22px
    <!-- Land Transport · Ship Transport · Air Transport (icon + h5 + blurb + link) -->
  </div>

  <div class="about-low-area">              <!-- white; two columns -->
    left:  <span>About Our Company</span>
           <h2>Safe Logistic & Transport Solutions That Saves our Valuable Time!</h2>
           <p>×2 (Brook demo copy — paraphrase)</p>
           <a class="btn">More About Us</a>
    right: .about-img (main photo)
           + .about-back-img  (absolute top:-45px right:0 — decorative back)
           + .about-font-img  (absolute right:47px top:0 — front accent)
  </div>

  <section class="contact-form-area section-bg pt-115 pb-120 fix">
    <!-- photo bg (hero2.jpg-style), background-attachment: fixed on desktop -->
    <div class="contact-form-wrapper">      <!-- #f5f5f5, padding 80px, radius 8px -->
      <h2>Request a Free Quote</h2>
      <form>
        Name · Email · Contact Number ·
        <select>Freight Type → Catagories One..Four (source demo options)</select> ·
        City of Departure · Incoterms · Weight · Height · Width · Length ·
        ×4 radios (transport-mode kind) ·
        <button class="submit-btn">Request a Quote</button>
      </form>
    </div>
  </section>

  <div class="team-area">                   <!-- white; section-padding30 -->
    <div class="section-tittle text-center">
      <span>Our Team Mambers</span>         <!-- source typo → paraphrase "Our Team Members" -->
      <h2>What We Can Do For You</h2>       <!-- source reuses this heading -->
    </div>
    ×3 single-team text-center:
      .team-img (photo, overflow hidden)
      .team-caption: absolute bottom:-36px, bg rgba(255,255,255,0.6)
                     hover → bg #f15f22, bottom:0, name white
        h3 name "Mancherwan Kolin" (#2c234d 20px/700) + role "Health agent"
      .team-social: 4 icons (#8ba4b1 14px, rise translateY staggered 0/0.1/0.2/0.3s)
  </div>

  <div class="testimonial-area testimonial-padding section-bg">
    <!-- photo bg; white heading treatment -->
    <div class="section-tittle section-tittle2">
      <h2>What Our Clients Say!</h2>        <!-- white -->
    </div>
    <div class="h1-testimonial-active">     <!-- state-based slider, ≥3 slides -->
      .single-testimonial:
        .testimonial-top-cap: [quote glyph] <p>#a4acc3 16px/500</p>
        .testimonial-founder: [round avatar] name + role/tagline
        <!-- tagline kind: "Always listening, always understanding." -->
    </div>
    <div class="testimonial-form text-center">  <!-- white card, radius 10px, padding 50px -->
      <h3>tagline</h3>
      <a class="btn">Request a Quote</a>     <!-- scrolls to quote form -->
    </div>
  </div>

  <div class="home-blog-area">              <!-- white; section-padding30 -->
    <div class="section-tittle text-center">
      <span>Our Recent news</span>
      <h2>Tourist Blog</h2>
    </div>
    ×3 home-blog-single:
      .blog-img-cap: .blog-img (radius 6px, mb 30px)
                     + .blog-date badge (#f5f5f5 radius 6px: day "27" + month "SEP")
      .blog-cap: author line "Jessica Temphers · 12" + h3 "Here's what you should know before."
                 + excerpt + read more
  </div>

  <footer class="footer-area footer-bg">    <!-- #121212 -->
    <div class="footer-top footer-padding"> <!-- 105px/50px desktop -->
      <div class="footer-heading">          <!-- border-bottom #1a2537, pb 51px mb 82px -->
        <h2>We Understand The Importance Approaching Each Work!</h2>
        <p>+1 212-683-9756</p>
      </div>
      ×4 single-footer-caption:
        COMPANY: About Us · Company · Press & Blog · Privacy Policy
        Open hour: Mon 11am-7pm · Tue-Fri 11am-8pm · Sat 10am-6pm · Sun 11am-6pm
        RESOURCES: Home/Travel/Car/Business/Health Insurance
        brand block: logo + blurb (#c4c4c4 14px) + social icons
      <!-- h4 titles: white Barlow 18px/500 uppercase -->
    </div>
    <div class="footer-bottom">
      copyright + https://www.componentdock.com/ ("Component Dock")  <!-- monorepo rule -->
    </div>
  </footer>
</body>
```

## Section-by-section fidelity notes

1. **Header** — solid `#000c20` (NOT transparent; screenshot
   confirms dark bar). Utility strip (phone/email/social) above the
   nav row. Wordmark: orange truck glyph + brand text → recreation
   name "Vitesse". Nav: 5 links; Blog carries a 3-item dropdown on
   the live preview (screenshot shows flat links — live preview is
   canonical). CTA "Get A Quote" (source typo "Get A Qoue").
2. **Hero** — photographic cover (truck at depot in screenshot; use
   picsum seed), dark overlay, min-height 1080px desktop. H1 white
   Teko 95px/600 capitalize with ONE orange word (`#f15f22` span).
   Signature element: **tracking form** (white input + orange Track &
   Trace + italic "For order status inquiry") — keep it; it's the
   template's identity. Slick arrows bottom-right (50×50 radius 6px,
   `#616373`, hover `#f15f22`) — React state, no slick.
3. **Info bar** — `#f9f9f9`; 3 flex items (icon + 2-line text):
   44px orange icons, label `#2c234d` 20px/600, value `#677294`
   16px. Kinds: phone / hours / address (paraphrase values).
4. **Services** — white; centered tittle (orange eyebrow + Teko
   h2); 3 bordered cards (`#e1ebf7`, radius 6px, tall padding
   85px 22px) — Land/Ship/Air Transport with icon + h5 + blurb +
   link. Cards have a .4s hover transition in source.
5. **About** — white; text left / layered images right. The image
   composition is distinctive: main photo + decorative back image
   offset (top -45px right 0) + front accent (right 47px). Implement
   with absolutely positioned picsum images; stack on mobile.
6. **Quote form** — photo background section (`background-attachment:
   fixed` on desktop via source `fix` class) wrapping a light
   `#f5f5f5` rounded-8px card (padding 80px). Form is long (10
   inputs + select + 4 radios) — the heavy-quote-form pattern.
   Source select options are demo typos ("Catagories One..Four") —
   paraphrase to freight-kind options. Validate client-side; local
   success state.
7. **Team** — white; the caption-overlay hover is the signature:
   translucent white caption (`rgba(255,255,255,0.6)`, bottom -36px)
   → solid `#f15f22` on hover with white text and staggered rising
   social icons. Source heading reuses "What We Can Do For You" —
   may paraphrase to a team heading (documented divergence).
8. **Testimonials** — photo-background section with WHITE heading
   (`.section-tittle2`); quote text light `#a4acc3`; founder row
   (avatar + name + tagline). Below: white rounded CTA card (radius
   10px) with tagline h3 + Request a Quote button — keep the card,
   it's part of the section's look.
9. **Blog** — white; eyebrow "Our Recent news" + "Tourist Blog";
   3 cards with the date-badge pattern (day big + month small in a
   `#f5f5f5` rounded badge beside/below the image), author + count
   line, title, excerpt, read-more.
10. **Footer** — `#121212`; the statement strip (big h2 + phone,
    `#1a2537` divider) above 4 columns is the distinctive part —
    don't flatten it into a plain link footer. Column contents are
    insurance-flavored demo links (RESOURCES) — paraphrase keeping
    the kinds. Bottom bar: copyright + Component Dock link
    (monorepo rule; replaces source attribution).

## Known divergences (document in the PR)

- Brand name "Vitesse" + all copy paraphrased (demo typos fixed:
  "Get A Qoue" → "Get A Quote", "Mambers" → "Members",
  "Catagories" → freight-kind options).
- All imagery = `picsum.photos/seed/vitesse-*`; icons =
  `lucide-react`; no jQuery/slick/flaticon; slider + dropdown =
  React state.
- Footer attribution → https://www.componentdock.com/ ("Component
  Dock").
- Source generic-button palette (`genric-btn.*`) registered as
  tokens; sparse use on the home page.
