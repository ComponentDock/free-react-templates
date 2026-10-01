# Trailmark (ColorLib "Destino") — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation
> ships later on `feat/template-trailmark`. Recreation name:
> **Trailmark** (NEW name — the ColorLib source keeps its name "Destino";
> preview `<title>` "Destino | Free Bootstrap Template").
>
> Spec: `openspec/specs/template-trailmark/spec.md` (tokens, Gherkin
> requirements, verification checklist). Design research:
> `docs/templates/trailmark/design-notes.md` (DOM skeleton +
> section-by-section notes).

## Implementation outline (for the implementer)

1. **Scaffold** — copy the simplest existing app into `apps/trailmark`;
   rename package to `@free-react-templates/trailmark`; set
   `"homepage"` + public/CNAME to `trailmark.free.componentdock.com`;
   run `npm install` at repo root (lockfile registration); register
   `injectUiSource()` in `vite.config.ts` (never remove).
2. **Tokens + fonts** — Google Fonts `<link>` in `index.html`
   (Montserrat 100/300/400/500/900; Open Sans 300/400); `@theme` tokens in
   `src/index.css`: brand red `#fe435b`, hover `#eb334a`, newsletter red
   `#fe364a`, nav-circle red `#fe3c52`, tag red `rgba(254,60,82,1)`,
   offer-card overlay `rgba(254,64,91,0.79)`, center-slide overlay
   `rgba(254,67,91,0.83)`, input-hover border `rgba(254,67,91,0.5)`,
   watermark amber `#fdaa27`, navy `#131a2f`, footer `#080d1d`, body
   `#3a3a3a`, muted `#7d8293`, placeholder grey `#939393`; body default
   Montserrat 14px/400. Signature treatments: square buttons (radius 0,
   56px, white 16px/500, hover opacity 0.8); transparent inputs with 2px
   `rgba(255,255,255,0.5)` borders on dark bands; circles only for slider
   nav (90px `#fe3c52`) and play button.
3. **Sections top-down** (one component each, order 1:1):
   `Navbar` (fixed navy `#131a2f` bar, 121px → 90px on scroll, top offset
   47px → 15px; plane mark + "trailmark"/"travel agency" wordmark left;
   Home · About us · Offers · News · Contact white 15px, active = red
   `#fe435b` + 3px underline, hover red; red 121px search square flush
   right — hover `#eb334a`, click expands to 300px revealing an input;
   <992px: hamburger (lucide Menu/X, `aria-expanded`) opens stacked navy
   panel) →
   `Hero` (full-viewport picsum `trailmark-hero`; centered: giant
   uppercase "discover" Montserrat 900 ~215px `#fdaa27` opacity 0.34
   line-height 0.75 with "Discover new worlds" white ~72px/400
   text-shadow `0 11px 51px rgba(0,0,0,0.35)` centered over it; clamp
   sizes on mobile) →
   `FindBand` (dark picsum `trailmark-find` + dark overlay; centered
   "Find the Adventure of a lifetime" 30px/300 white; one-row form:
   Destination text input ("Keyword here", 31.4%) · Adventure type select
   ("Categories", 31.4%) · Min price select · Max price select (10.1%
   each) · red "Find" button (14% wide, 56px, translateY(14px) to align
   with inputs); inputs transparent + 2px `rgba(255,255,255,0.5)` border,
   white text; selects appearance-none + lucide chevron, italic `#939393`
   placeholder; hover/focus border `rgba(254,67,91,0.5)`; stack on
   mobile) →
   `TopDestinations` (white; section title "Top destinations in Europe"
   300-weight navy + uppercase subtitle "take a look at these offers" 16px
   `#7d8293`; 4 cards justify-between — Paris · French Riviera · Cinque
   Terre · Santorini — each photo (picsum `trailmark-top-1..4`) with
   overlay bottom-left: "From $890" 14px white + name 20px white; links
   "#") →
   `LastMinuteOffers` (picsum `trailmark-last` bg + decorative logo mark
   overlapping the top edge; two equal cards `rgba(254,64,91,0.79)`
   translucent red panels, white centered content: uppercase subtitle
   "maldive"/"bali" 16px/500, giant percent 160px weight 100 line-height
   0.75 ("50%"/"38%"), "Last Minute Offer" 40px/300, short copy, navy
   `#131a2f` "See Offer" button 161×56 white 16px/500 square; stack on
   mobile) →
   `VideoTeaser` (dark picsum `trailmark-video`; centered "A day on the
   island" 30px/300 white + "A trip organized by Trailmark's team"
   14px/300; circular play button — fill transparent → hover
   `rgba(255,255,255,0.15)` 400ms; click opens accessible modal with
   close control, placeholder content only) →
   `PopularDestinations` (white; title "Popular destinations in 2018" +
   subtitle; 8 cards 4-per-row wrap, width `calc((100% - 90px) / 4)`,
   margins 26px — Turkey · Hawai · Ireland · Thailand · Croatia · Bali ·
   France · Vietnam — photos picsum `trailmark-pop-1..8` with "From
   $890" + name overlaid bottom-left; 2/row tablet, 1–2/row mobile) →
   `SpecialOffers` (white; title "Special offers" + subtitle; React-state
   center-focus slider (no owl) of tall picsum `trailmark-special-1..5`
   slides; each slide centered white category 24px/300 ("Visiting",
   "Culture", ...) + title link 36px/300 (Indonesia · India · Thailand ·
   Bali · France); center slide carries `rgba(254,67,91,0.83)` overlay,
   side slides untinted, 500ms transition; prev/next 90px `#fe3c52`
   circles with white chevrons at vertical middle edges, hover opacity
   0.8) →
   `Newsletter` (dark picsum `trailmark-news` + overlay; "Subscribe to our
   Newsletter" 40px/300 white centered; email input (placeholder "Your
   E-mail Address", width calc(100% - 180px), transparent, 2px
   `rgba(255,255,255,0.5)`, white italic placeholder, 56px) + red
   `#fe364a` "Subscribe" 161×56 button hover opacity 0.8; stack on
   mobile) →
   `Footer` (bg `#080d1d`, 79px vertical padding; 3 columns: About =
   plane mark + "trailmark"/"travel agency" + paragraph 12px/300 `#7d8293`
   + copyright line with **Component Dock link**
   (`https://www.componentdock.com/`); Latest posts = 24px/300 white
   title + 2 items (78×78 thumb + title link 16px/300 `#7d8293` hover
   `#fe3c52` + date 12px/300 `#fe3c52` — "Brazil Summer", "A perfect
   vacation"); Tags = title + pill cloud bg `rgba(254,60,82,1)` 36px tall,
   white 12px/300 links padding 0 27px, hover opacity 0.8 — travel ·
   summer · cruise · beach · offer · vacation · trip · city break ·
   adventure; stack on mobile).
4. **Tests first (TDD)** — colocated `*.test.tsx` per component;
   100% lines/functions/branches/statements on changed code; cover: nav
   active state + search expand + hamburger toggle, hero render, form
   field presence, card counts (4 + 8), offer percents, slider prev/next
   center focus, modal open/close, newsletter submit handler.
5. **No inner pages** — offers.html etc. are NOT recreated; all links are
   in-page anchors or "#". No ColorLib assets/CSS/strings; provenance
   lives only in the spec, TEMPLATES.md, and the PR.
