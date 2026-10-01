# Cargolane (ColorLib "Logis") — Design Notes

## Source mapping

| Item | Value |
| --- | --- |
| ColorLib name | "Logis" (kept on ColorLib's side only; preview `<title>`: "Logistics — Colorlib Website Template") |
| Recreation name | **Cargolane** (NEW — freight "lane"/route; single lowercase word; never "Logis") |
| Slug | `logis` |
| Source page | https://colorlib.com/wp/template/logis/ |
| Live preview | ✅ **REACHABLE** — https://preview.colorlib.com/theme/logis/ HTTP 200, **31,165 bytes** (verified 2026-10-01). Full template page: navbar + slider hero + 10 content sections + 4-column footer |
| Stylesheets | `css/style.css` HTTP 200 **25,007 B** (custom theme — canonical tokens) · `css/bootstrap.min.css` HTTP 200 **27,894 B** (Bootstrap 4 with `$primary` overridden to `#f16821`) · Google Fonts link `Poppins:200,300,400,700,900\|Display+Playfair:200,300,400,700` (style.css references ONLY Poppins — Playfair unused) |
| Other source assets | jQuery + owl.carousel ×2 + magnific-popup + AOS + bootstrap-datepicker + icomoon/flaticon icon fonts (NEVER copied — recreation: React state, lucide-react, no jQuery) |
| Screenshot | https://colorlib.com/wp/wp-content/uploads/sites/2/logis-free-template.jpg — ⚠️ **REAL AVIF 1200×946** despite `.jpg` (54,325 B; converted to PNG for vision analysis, 2026-10-01). Shows hero + top of About. ⚠️ screenshot navbar shows 6 links (Home, About Us, Services, Industries, Blog, Contact); **live preview is canonical with 8** (adds How It Works, Our Team) |
| TEMPLATES.md | `## Transportation (22)` at line 2947; item at line 2963; slug `logis` appears exactly once |
| Name collision check | "cargolane" = 0 hits in `ls apps/`, `openspec/specs/`, `docs/templates/`, TEMPLATES.md, and spec/docs content (case-insensitive), 2026-10-01. Distinct from logistics-family names on main: cargo, cargoly, cargomate, freight, freightflow, freightly, haulage, haulio, logistico, logistix, shiply, shipment, shipwise, drayage |
| Stack | Vite + React 19 + Tailwind CSS 4 + TypeScript (monorepo) |

## DOM skeleton (live preview, structure order)

```html
<body>
  <div class="site-wrap">
    <header class="site-navbar" id="site-navbar">        <!-- absolute over hero; .scrolled → fixed white -->
      <div class="site-logo">…</div>                     <!-- "Logis" → recreation: "Cargolane" -->
      <nav class="site-navigation">                      <!-- 8 links (uppercase, 14px, .1em tracking) -->
        Home(#section-home) · About Us · How It Works · Our Team ·
        Services · Industries · Blog · Contact
      </nav>
    </header>

    <div id="section-home">                              <!-- HERO slider (owl in source) -->
      <div class="slider-item">                          <!-- 100vh bg photo + overlay -->
        <h1 class="text-white text-uppercase font-weight-bold">We Make Shipping</h1>
        <p>A Logistics Company</p>
        <a class="btn btn-primary">Get Started!</a>      <!-- square, uppercase, .2em tracking -->
      </div>
    </div>

    <div class="site-section" id="section-about">        <!-- 2-col: text left, image right (order-md-2) -->
      <h2 class="text-primary">About Us</h2>             <!-- + .border-primary 80×3px #f16821 underline -->
      <p>…</p><p>…</p>
      <ul class="ul-check success">                     <!-- GREEN #8bc34a check glyphs -->
        <li>Error minus sint nobis dolor</li>            <!-- 3 checklist items -->
        <li>Voluptatum porro expedita labore esse</li>
        <li>Voluptas unde sit pariatur earum</li>
      </ul>
      <figure>…image + caption…</figure>
    </div>

    <div class="site-section bg-image overlay" id="section-how-it-works">
      <!-- dark photo cover (hero_bg_4-style) + rgba(0,0,0,.4) overlay -->
      <h2 class="font-weight-light text-primary">How It Works</h2>
      <div class="how-it-work-item">…</div> ×3           <!-- Make An Order · Make A Payment · Track Your Order -->
    </div>

    <div class="site-section border-bottom" id="section-our-team">
      <h2 class="text-primary">Our Team</h2>
      <div class="person">…</div> ×3                     <!-- Christine Rooster/Co-Founder President · Brandon Sharp/Co-Founder COO · Connor Hodson/Marketing -->
    </div>

    <div class="site-section bg-light" id="section-services">
      <h2 class="mb-0 text-primary">Our Services</h2>    <!-- + blurb "Lorem ipsum dolor sit amet." -->
      <div class="unit-4 d-flex">…</div> ×6              <!-- Air Freight · Ocean Freight · Land Transportation · Warehousing · Storage · Worldwide Delivery; icon 3rem + h3 20px + Learn More -->
    </div>

    <div class="site-section block-13" id="section-industries">
      <h2 class="text-primary">Industries</h2>
      <div class="owl-carousel nonloop-block-13">        <!-- image tiles, white title over bottom of photo -->
        Storage · Air Transports · Cargo Transports · Cargo Ship · Ware Housing (+…)
      </div>
    </div>

    <div class="site-blocks-cover overlay inner-page-cover"> <!-- hero_bg_2-style, background-attachment: fixed -->
      <h2 class="text-white font-weight-light mb-5 h1">Watch The Video</h2>  <!-- + play affordance -->
    </div>

    <div class="site-section border-bottom">             <!-- TESTIMONIALS (owl slide-one-item) -->
      <h2 class="font-weight-light text-primary">Testimonials</h2>
      <div class="testimonial"><blockquote>…</blockquote></div> ×4  <!-- 1.5rem italic quote + 1rem author + 100px round avatar -->
    </div>

    <div class="site-section" id="section-blog">
      <h2 class="font-weight-light text-primary">Our Blog</h2>   <!-- blurb: See Our Daily News & Updates -->
      <div class="h-entry">…</div> ×3                     <!-- img + meta(14px #b3b3b3: date + "News") + h2 20px title + excerpt -->
      <!-- titles: "How Logistics Company Improve Spendings" by Jed Wilson, Jan 18 2019 -->
      <a class="btn">View All Blog Posts</a>
    </div>

    <div class="site-section bg-light" id="section-contact">
      <h2 class="text-primary">Contact Us</h2>
      <form>                                             <!-- LEFT: First Name · Last Name · Email · Subject · Message -->
        <input type="submit" value="Send Message" class="btn btn-primary">  <!-- square, #f16821 -->
      </form>
      <div class="p-4 mb-3 bg-white">…</div> ×3          <!-- RIGHT: Address · Phone · Email Address info cards -->
      <!-- + "More Info" blurb + Learn More -->
    </div>

    <footer class="site-footer">                         <!-- bg #333333, padding 8em 0 desktop -->
      <div>About Us blurb</div>                          <!-- 4 columns -->
      <div>Quick Links: About Us · Services · Testimonials · Contact Us</div>
      <div>Follow Us (social icons)</div>
      <div>Subscribe Newsletter (input + Send)</div>
      <div class="border-top">Copyright © <year> … attribution</div>  <!-- recreation: Component Dock link -->
    </footer>
  </div>
</body>
```

## Design tokens (from style.css + bootstrap.min.css, 2026-10-01)

### Colors

| Token | Value | Where |
| --- | --- | --- |
| Brand primary | **`#f16821`** | `.text-primary` `!important`; `.btn-primary` bg+border (bootstrap override); nav `.active` link; `.border-primary:after` underline; `.form-control` focus border; `ul-check.primary` glyphs (15 uses in style.css) |
| Body text | **`#4d4d4d`** | `body` (weight 300, 1rem, line-height 1.7) |
| Footer bg | **`#333333`** | `.site-footer` |
| Footer text | **`#737373`** | `.site-footer p`; headings `#fff`; divider `rgba(255,255,255,0.1)` |
| Light section bg | **`#edf0f5`** (×4) / **`#f4f5f9`** (×2) | `bg-light` sections (Services, Contact) |
| Check bullets | **`#8bc34a`** green | `.ul-check.success li:before` (About — matches screenshot) |
| Blog/testimonial meta | **`#b3b3b3`** | `.h-entry .meta` 14px; `.player .position` |
| Cover overlay | **`rgba(0,0,0,0.4)`** | `.site-blocks-cover.overlay:before` |
| Dark neutrals | `#25262a`, `#212529`, `#343a40` | misc Bootstrap darks |
| Borders/lines | `#f3f3f4`, `#ccc`, `#dee2e6` | nav border-bottom, misc |

### Typography

| Token | Value |
| --- | --- |
| Font family | **Poppins** (`"Poppins", -apple-system, …` on body AND h1/h2/h3/h5) |
| Weights loaded | 200, 300, 400, 700, 900 (Google Fonts link; "Display Playfair" also requested but unused by style.css — skip it) |
| Body | 300 / 1rem / line-height 1.7 / `#4d4d4d` |
| Cover h1 | **4rem / 900 / `#fff`** (mobile 2rem); classes `text-white font-weight-light text-uppercase font-weight-bold` |
| Section h2 | Poppins, `text-primary` (`#f16821`); `.border-primary h2` → uppercase + 700 `!important` |
| Heading underline | `.border-primary:after` → **80px × 3px `#f16821`**, centered under heading |
| Nav links | 14px, uppercase, `letter-spacing: .1em`; active `#f16821` |
| Service title | 20px (`.unit-4 h3`); team name 18px (`.person h3`); blog title 20px (`.h-entry h2`) |
| Testimonial quote | 1.5rem italic; author 1rem non-italic |
| Blog meta | 14px `#b3b3b3` |

### Shape & components

| Token | Value |
| --- | --- |
| Buttons `.btn` | **border-radius 0**, uppercase, `letter-spacing: .2em`; hover: no shadow |
| `.btn-primary` | bg `#f16821`, white text, border `#f16821` |
| Cover buttons | `border: 2px solid transparent`; hover → white text + 2px `#fff` border |
| Inputs `.form-control` | height **43px**, radius **0**, focus border `#f16821`, no box-shadow |
| Navbar `.scrolled` | fixed `#fff`, black links, `box-shadow: 0 4px 15px -5px rgba(0,0,0,0.1)` |
| Section padding | `.site-section` **5em 0** desktop / 2.5em mobile |
| Covers | min-height **600px / 100vh** (`.site-blocks-cover`), bg cover, 40% black overlay |
| Industry tile `.unit-1` | img `object-fit: cover`; `.unit-1-text` absolute bottom, white, full width |
| Service unit `.unit-4` | flex row; icon span **3rem**; title 20px |
| Testimonial | max-w **800px** centered; avatar **100px**, radius **50%** |
| Carousel nav | prev/next arrows, 30px glyphs, black, disabled opacity .2 (recreation: lucide chevrons + aria-labels) |

## Screenshot analysis (AVIF→PNG, vision, 2026-10-01)

1200×946 mock-browser shot of the top of the page:

- **Hero:** full-bleed dark photo — warehouse worker scanning a parcel
  with a handheld barcode scanner, cardboard boxes in the foreground;
  ~40% dark overlay; white logo "Logis" top-left; top-right nav (HOME
  active orange; ABOUT US, SERVICES, INDUSTRIES, BLOG, CONTACT in white
  uppercase); centered white **bold uppercase "WE MAKE SHIPPING"**
  (~900 weight, large), light sub "A Logistics Company", then a solid
  **orange square "GET STARTED!" button** (uppercase, tracked).
- **About Us (below hero, white bg):** orange uppercase "ABOUT US" with
  the short orange underline; two gray paragraphs; **green checkmark**
  list items; photo on the right (worker packing boxes in a
  fulfillment room).
- **Aesthetic:** clean corporate logistics — white/light canvas, single
  orange accent, lots of whitespace, photographic imagery, square
  buttons, light-weight body text. No rounded cards anywhere.
- The screenshot only captures the first two sections; the remaining
  section content/design comes from the live DOM + CSS above (canonical).

## Fidelity decisions (divergences from source — all documented)

1. **Name/assets:** new name Cargolane; all imagery →
   `picsum.photos/seed/cargolane-*`; icons → `lucide-react` (source
   icomoon/flaticon never copied).
2. **Carousel libraries:** source uses owl.carousel (industries +
   testimonials) + a hero slider; recreation = lightweight React state
   components (index + prev/next + optional auto-advance). No owl/jQuery
   dependency.
3. **Video:** source opens a magnific-popup YouTube embed; recreation =
   static photo cover + labeled circular play button (optional modal) —
   documented simplification, no external embed required.
4. **AOS scroll animations:** source uses AOS fade-ups; recreation MAY
   add subtle CSS/IntersectionObserver reveals — optional, never
   blocking content (a11y).
5. **Navbar count:** live preview canonical 8 links (screenshot shows 6
   — older build). Recreation ships the 8-link set.
6. **Footer attribution:** source bottom bar credits Colorlib;
   recreation links https://www.componentdock.com/ ("Component Dock") —
   monorepo rule. Zero "colorlib" strings in `apps/cargolane`.
7. **Forms:** contact + newsletter are client-side only (validate +
   success state; no backend).
8. **Bootstrap:** source is Bootstrap 4 + jQuery; recreation is
   Tailwind 4 only — Bootstrap classes above are SOURCE references for
   extracting values, not dependencies.
