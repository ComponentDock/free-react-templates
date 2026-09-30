# Drayage (ColorLib "Freightbroker") — Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation
> ships later on `feat/template-drayage`. Recreation name:
> **Drayage** (NEW name — the ColorLib source keeps its own name
> "Freightbroker"). Full replication research lives here; OpenSpec
> requirements are in `openspec/specs/template-drayage/spec.md`.

## Source mapping

| Item | Value |
| --- | --- |
| ColorLib name | "Freightbroker" (ColorLib side only) |
| Recreation name | **Drayage** (NEW — "drayage" = short-haul freight trucking, usually port-to-warehouse; single lowercase word; zero collisions) |
| Slug | `freightbroker` |
| Source page | https://colorlib.com/wp/template/freightbroker/ |
| Live preview | ✅ **REACHABLE at the STANDARD path (verified 2026-10-01):** https://preview.colorlib.com/theme/freightbroker/ — HTTP 200, 49,140 B, `<title>Freight-Broker | Template</title>`. No `bootstrap/` sibling needed (unlike the table-* family). |
| Preview CSS | https://preview.colorlib.com/theme/freightbroker/css/style.css — HTTP 200, 46,390 B, self-contained; canonical token source. Other sheets in the DOM (bootstrap.min, elegant-icons, font-awesome, nice-select, owl.carousel, slicknav) are replaceable — never copy them. |
| Screenshot | https://colorlib.com/wp/wp-content/uploads/sites/2/freightbroker-free-template.jpg — analyzed 2026-10-01 with vision |
| TEMPLATES.md | "## Transportation (22)" at line 2947; item at line 2961 (`- [ ]`, first unprepped at prep time); slug appears exactly ONCE |
| Category | Transportation — freight-broker / courier-services marketing one-pager |
| Name collision check | "drayage": 0 hits in `ls apps/`, `openspec/specs/` (3,149 folders on origin/main), `docs/templates/`, TEMPLATES.md bold names (case-insensitive), 2026-10-01. Distinct from shipped logistics names: haulage, haulio, convey, cargoly, cargomate, consignly, packwell, drively, drivego, highway, depot. |

## Design tokens (captured from preview css/style.css, 2026-10-01)

- **Brand orange:** `#ff5f2a` — buttons, eyebrows, logo block, active
  nav, counter numbers, project chips, news labels (31 uses; top
  non-neutral hex).
- **Navy:** `#03123b` — topbar bg, section-title h2, chooseus band bg,
  project text panels. **Footer navy:** `#09122b` (footer bg, slightly
  darker).
- **Grays:** body `#7d8184` (26 uses), secondary `#5e6164`
  (18px/28px services intro), muted `#9caaaf`, dark text
  `#353535`/`#111111`/`#404040`, form border `#515768`, divider
  `#ebebeb`.
- **Fonts:** headings/buttons/nav = `"Oswald", sans-serif` (700
  headings, uppercase, letter-spacing 2–4px); body = `"Quicksand",
  sans-serif`. Load via Google Fonts `<link>` (400/500/600/700).
- **Buttons:** `.primary-btn`/`.site-btn` — parallelogram
  `transform: skew(-30deg)`; inner label span counter-skewed
  `skew(30deg)`; padding `14px 30px` (site-btn `14px 32px`); bg
  `#ff5f2a`; label Oswald 700 uppercase `letter-spacing: 2px` white.
- **Chips:** project titles + news labels = outer `skew(-32deg)`,
  inner span `skew(30deg)`; orange bg, white uppercase Oswald.
- **Hero:** bg photo + dark overlay; label Oswald 700 20px ls 4px
  white; h2 52px / line-height 70px Oswald 700 uppercase white;
  section padding 215px top/bottom.
- **Section title pattern (every section):** orange span 14px/700/
  uppercase/ls 4px (margin-bottom 10px) + navy `#03123b` h2 Oswald
  700 `line-height: 48px` uppercase. `spad` = `padding-top: 100px`.
- **Counters:** number Oswald 600 uppercase `#ff5f2a`, inline;
  suffix `<strong>` 36px 700 same color ("km").
- **ChooseUs band:** bg `#03123b`; right image absolute `width: 50%`,
  `height: 565px`, `margin-top: -50px` (bleeds over the top edge).
- **Request-form inputs:** 50px height, `border: 1px solid #515768`,
  bg `rgba(0,0,0,0.3)`, placeholder `#7d8184`, padding-left 20px —
  dark because the form shares the testimonial image background.
- **Header:** navy topbar (`#03123b`, 10px padding); white navbar with
  shadow `0 15px 60px rgba(3,18,59,0.07)`; orange skewed logo block.
- **Radii:** effectively square everywhere — shape comes from skew,
  not rounding.

## Screenshot analysis (2026-10-01, vision)

Desktop crop of the live page top: (1) navy topbar — phone
"+44 20 7930 8205", address "450 Strand, Charing Cross, London",
right: "Register or Sign In" + facebook/twitter/linkedin/pinterest
icons; (2) white navbar with an orange skewed parallelogram logo block
on the left holding the two-tone wordmark "FREIGHT"(bold)+"BROKER",
nav HOME (orange active) · SERVICES · ABOUT · PAGES · BLOG ·
CONTACTS + search icon; (3) full-bleed photo hero (warehouse worker
with clipboard among cardboard boxes, dark overlay) with left-aligned
white eyebrow "FREIGHT BROKER", huge white condensed uppercase
headline "AWESOME TEMPLATE FOR COURIER & BDELIVERY SERVICES" (source
typo "BDELIVERY"), skewed orange "VIEW SERVICES" button; (4) white
"What we do?" section — orange eyebrow + navy heading "WELCOME TO THE
FREIGHT BROKER WE ARE THE BEST." left, gray paragraph right, then a
2×2 grid of service cards (photo left + white panel right: AIR
FREIGHT ✈, SHIP FREIGHT ⛴ with orange titles and gray blurbs; RAIL
FREIGHT and WAREHOUSING continue below the fold). Aesthetic:
utilitarian logistics corporate — condensed uppercase display type,
hard orange/navy blocks, skewed angular accents, photo-driven heroes.

## Section-by-section fidelity notes (DOM order, preview HTML)

1. **Topbar** (`.header__top`, bg `#03123b`): left widgets — phone
   "+44 20 7930 8205", "450 Strand, Charing Cross, London"; right —
   "Register or Sign In" + 4 social icons.
2. **Header** (`.header`): orange skewed logo block + two-tone
   uppercase wordmark; nav Home, Services ▾ (About, Services Details,
   Blog Details — dropdown rendered under one item; visible order in
   screenshot: HOME SERVICES ABOUT PAGES BLOG CONTACTS — put the
   dropdown under PAGES), search icon button. Active link orange.
3. **Hero** (`.hero spad set-bg` `img/hero.jpg`, 215px padding): label
   "Freight broker" → h2 "Awesome template for courier & bdelivery
   services" → primary-btn "View services".
4. **Services** (`.services spad`): section-title "What We do?" /
   "Welcome to the freight Broker we are the best." + right intro
   paragraph (decades-of-freight-forwarding copy); 4 cards — Air
   Freight, Ship Freight, Railway Logistics (source h5), Ware
   Housing — each photo + icon + orange h5 + gray blurb
   (`.services__item__text`: white bg, 40px padding, 353px height).
5. **Counters** (`.about spad`, id-flavored "ABOUT US" / "OUR CLIENTS
   & COUNTERS"): 4 `.counter__item` — icon PNG + `h2.c_num` +
   optional `<strong>km</strong>` + h5 + blurb:
   9123 Employees in Team · 70102 km Kilometer Travel Weekly · 1254
   Worldwide Clients · 20254 Projects Done. Below: partner logo
   owl-carousel (`.partner__logo`, 6 grayscale PNGs).
6. **ChooseUs** (`.chooseus spad`, bg `#03123b`): left
   "Our Benefit" / "Why People Choose Us?" + 2×2 items — Warehouse
   Storage ("Order tendering is an initial stage…"), Security Cargo
   ("While your freight is in transit, a 3PL tracks…"), Easy Payment
   ("After tendering the load, freight brokers will place your…"),
   Fast Delivery ("Carrier agrees to spot or drop trailers…");
   right absolutely-positioned image (50% width, 565px, -50px top).
7. **Projects** (`.projects spad`): "Our Projects" / "What We Have
   Done!" + right-aligned skewed primary-btn "View All Projects";
   owl-carousel of cards — photo + navy panel + skewed orange title
   chip + blurb; items: Freight Carrier, Freight Forwarder,
   Import-Export, Agricultural Truck.
8. **Testimonial + Request** (`.testimonial spad set-bg`
   `img/testimonial/testimonial-bg.jpg` — ONE section): left
   "Testimonials" / "Our Custormer Reviews" (source typo) + quote
   slider (quote glyph, blockquote, author pic + name + role):
   Eric Carson · Steve Smith, both "CEO Of Colorlib" → rename role in
   the recreation (never ship ColorLib in app copy); slider nav
   arrows bottom-right. Right/below: `request__form` — "Contacts Us" /
   "Request A Call Back" + form: Your Name · Your Email · Your Phone ·
   Services select (Services, Services 1) · Message textarea · skewed
   "Submit Now" (`.site-btn`); dark translucent inputs on the image
   background.
9. **Latest news** (`.latest spad`): centered "Insight and Trends" /
   "Latest news company"; 3 cards — photo with overlaid inner block:
   skewed orange "Guides" chip + white uppercase Oswald h5
   "Expert Tips for Managing Hypoglycemia Lorem ipsum dolor" (lorem
   placeholder; freight-tip titles of the same kind are fine); below:
   meta (by Ryan Casey · May 2, 2020 · 20 Comment) + excerpt +
   "Read More".
10. **Footer** (`.footer`, bg `#09122b`, padding-top 70px): about
    blurb + columns — Quick links (History, Our Staff, Our Partners,
    Blog) · Services (Air Shipping, Expert Staff, Ground Shipping,
    Logistic Services) · Contacts (450 Strand, Charing Cross, US ·
    +44 20 7930 8205 · info.cololib@gmail.com → neutral placeholder
    email in the recreation); bottom bar: current-year copyright +
    attribution line (source: "made with … by Colorlib" → **replace
    with "Made with Component Dock" → https://www.componentdock.com/**
    per repo rule) + "Client Login" / "Join Team" links.

## Fidelity decisions for implementers

- **Copy:** paraphrase freely but keep the same *kind* per slot
  (headline+subtext+CTA, card title+blurb, quote+author, blog
  meta+excerpt). Source typos ("BDELIVERY", "Custormer", "Consortium"
  footer email "info.cololib@gmail.com") may be fixed — they are
  source artifacts, not design.
- **Assets:** never copy. Photos → `https://picsum.photos/seed/
  drayage-<n>/<w>/<h>` (hero, 4 service photos, 4 project photos,
  testimonial bg, 3 news photos, chooseus side image, avatars);
  icons → `lucide-react` (Plane, Ship, Train, Warehouse, ShieldCheck,
  Wallet, Truck, MapPin, Phone, Mail, Search, ChevronLeft/Right,
  Facebook, Twitter, Linkedin, …); fonts → Google Fonts.
- **Brand:** the recreation's wordmark is "DRAYAGE" (two-tone skew
  treatment kept: bold "DRAY" + lighter "AGE", or bold "DRAYAGE" +
  thin tagline — implementer's call, keep the orange skewed block).
  Never reference ColorLib in app files.
- **Carousel/slider:** source uses owl-carousel; implement with
  simple state (index + prev/next) or CSS scroll-snap — no new deps.
  Partners strip can be a static flex row of placeholder logos.
- **Counter animation:** count-up on in-view with final values as
  static fallback (tests assert final text).
- **Dark sections:** chooseus band is solid navy; testimonial+form
  shares one dark image background with overlay — don't split them
  onto white.
- **Footer bottom bar:** current year via `new Date().getFullYear()`;
  Component Dock link is mandatory.
