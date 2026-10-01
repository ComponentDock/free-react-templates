# Skybound (ColorLib "Beyond") — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation
> ships later on `feat/template-skybound`. Recreation name:
> **Skybound** (NEW name — the ColorLib source keeps its name "Beyond";
> preview `<title>` "Beyond | Free Bootstrap Template").
>
> Spec: `openspec/specs/template-skybound/spec.md` (tokens, Gherkin
> requirements, verification checklist). Design research:
> `docs/templates/skybound/design-notes.md` (DOM skeleton +
> section-by-section notes).

## Implementation outline (for the implementer)

1. **Scaffold** — copy the simplest existing app into `apps/skybound`;
   rename package to `@free-react-templates/skybound`; set
   `"homepage"` + public/CNAME to `skybound.free.componentdock.com`;
   run `npm install` at repo root (lockfile registration); register
   `injectUiSource()` in `vite.config.ts` (never remove).
2. **Tokens + fonts** — Google Fonts `<link>` in `index.html`
   (Playfair Display 700; Roboto 400/500); `@theme` tokens in
   `src/index.css`: gold `#f8b600`, blue `#4681ff`, star `#f9af11`,
   headings `#222222`, body `#777777`, lavender `#f9f9ff`, footer
   `#1e1c27`, footer divider `#333333`, footer links `#777777`, social
   idle `#cccccc`, input text `#cccccc`; body default Roboto 14px/27px.
   Signature button utility (`.main_btn`): transparent bg, 1px solid
   `#f8b600`, border-radius 0, uppercase 12px/500, letter-spacing 2px,
   line-height 48px, padding 0 25px, arrow icon absolutely positioned
   `right: -30px` → `-38px` on hover (0.3s), hover fills `#f8b600` with
   `#222222` text.
3. **Sections top-down** (one component each, order 1:1):
   `OffCanvasMenu` (hamburger toggle: three 2px #222 bars, 30px, fixed
   top-left; open → X at left 50px; panel `fixed left -500px→0, max-width
   500px, white, padding 130px 115px, shadow 0 20px 50px rgba(70,129,255,0.1)`;
   brand + Home · Packages · Pages (dropdown: About-us/Amenities/Elements)
   · Blog (dropdown: Blog/Blog Details) · Contact; links hover `#4681ff`,
   dropdown panel bg `#4681ff` white items; `aria-expanded` on toggle;
   inner pages → `#`/scroll anchors) →
   `TopBar` (right-aligned gold ghost "book a table" with hanging arrow;
   `padding: 25px 0`) →
   `Hero` (split: left h1 "Santorini Island in Greece" (Playfair, line
   break after "Island") + lorem + gold "Get Started" ghost button; right
   photo (picsum `skybound-1`) + blue `#4681ff` circular play button
   (white triangle, shadow `0 10px 30px rgba(39,0,110,0.3)`, pulsing white
   ring) + white caption "Watch Intro Video" / "YOU WILL LOVE OUR
   EXECUTION"; play → local popover/modal with accessible close; <768px:
   photo column hidden, text column takes photo bg + dark overlay, white
   text, white-text button) →
   `PopularPlaces` (left: 3 overlapping photos picsum `skybound-2..4`
   (~80%/50%/50% offset collage); right: h1 "Popular Places Around The
   World" + lorem; 4 counter cards London 135 Places · Turkey 75 Places ·
   Paris 150 Places · Thailand 85 Places — 165×180px, border
   `1px solid #eeeeee`, padding 30px, staggered top-two/bottom-two, Playfair
   24px/700 names; hover → `#4681ff` bg + white text + inverted icon) →
   `BestPlans` (left title block: h1 "Best Tour Plans Recently" + 2 lorem
   + gold "Browse all Packages" ghost; right: React-state carousel of 3
   package cards — picsum `skybound-5..7`, hover black overlay 0.65 +
   sliding content (white h4 "Proper Guided Tour", gold "$56" + "/day",
   blurb "Santorini Island Dream Holiday and Fun package", star row
   `#f9af11`, white 50×50 pushpin lightbox button; pushpin → local image
   popover; dots/arrows via React state; stack on mobile) →
   `Amenities` (left h1 "Benifits Get Our Customers" [typo ok to fix] +
   lorem; 3 cards: thumb picsum `skybound-8..10` with white sheen sweep
   hover (rgba(255,255,255,0.4) 110%→-130%, 0.5s), meta "Within a Shor
   Time" uppercase, Playfair 18px titles — Luxerious Car Rental Service
   Available / Cruise Private Party Booking Available / Tremendous Options
   for Food Lovers — lorem blurb; border `1px solid #eeeeee`, padding
   25px; hover → shadow `0 10px 30px rgba(0,0,0,0.1)` + transparent
   border; absolute bottom band ≈40% `#f9f9ff`) →
   `PackageSearch` (left h1 "Search Suitable & Desired Package for You"
   + 2 lorem; right panel: photo bg picsum `skybound-11` + black overlay
   0.5, padding 70px 50px, h4 "Package Search" white 24px; form:
   Destination / Check in Date / Check Out Date inputs + Adults/Childs
   selects — transparent, white bottom-border rgba(255,255,255,0.2),
   padding 25px 20px, 13px white placeholders; controlled React form,
   numeric select options 1–5, block submit until valid, local success;
   submit = `.main_btn` variant "Browse all Packages" uppercase,
   border/text `#4681ff`-bordered white text, hover bg `#4681ff`) →
   `Testimonials` (React-state carousel, 2 quotes: quote icon, 24px italic
   lorem, author "Marvel Maison" / "Chief Executive, Amazon"; NO left
   image column — reference hides it `display:none`) →
   `Newsletter` (title block padding-left ~50% desktop: h1 "Subscribe to
   Get Updated for Our Newsletter" + 2 lorem; form: email input white bg
   square 65% width `#cccccc` placeholder, group border-bottom `#eeeeee`,
   gold `.main_btn` "Subscribe" (arrow hidden), info note below; NO right
   image column — hidden in reference; local validation + success) →
   `Blog` (left h1 "Benifits Get Our Customers" + lorem; 3 cards same
   titles/meta as amenities — calendar "13th Dec" + heart "15" +
   comment "04" (lucide, #777), picsum `skybound-12..14`, sheen hover;
   absolute top band ≈60% `#f9f9ff`) →
   `Footer` (bg `#1e1c27`; top padding 120px 0; 4 columns: About Crafted
   ("world has become so fast paced..." lorem), Navigation Links (Home ·
   Services · Project | Team Members · Blog · Contact; #777777 → white
   hover), Newsletter (input + square gold `#f8b600` click-btn with white
   arrow + info), Instafeed (8 picsum `skybound-15..22`, 4 per row,
   25% width, 5px margin); bottom bar padding 26px 0, border-top
   `1px solid #333333`: copyright with gold `#f8b600` line linking
   https://www.componentdock.com/ ("Component Dock") — NO ColorLib
   attribution; social icons `#cccccc` → `#f8b600` hover).
4. **Tests (TDD)** — one describe per component mirroring the spec's
   Gherkin scenarios; 100% lines/functions/branches/statations on changed
   code; `user-event` for menu toggle, carousel arrows, lightbox/popover
   open/close, form validation/success states.
5. **Gate** — `scripts/verify-app.sh skybound` (typecheck + lint + 100%
   coverage + build). Never bypass; fix root causes.
6. **Docs/bookkeeping** — PR description: source (ColorLib "Beyond"),
   preview URL, tokens, deltas (new name, picsum seeds, paraphrased copy,
   inner pages not recreated, hidden image columns unrendered). After
   merge: `[x]` in TEMPLATES.md + `npm run readme:status` (implementer's
   job, not prep's).

## Fidelity gotchas (from the live reference)

- Everything is **square** — no rounded buttons/cards except the circular
  play button and lightbox button. Do NOT add Tailwind rounded-* by habit.
- The template's whole identity is the **gold outline button + Playfair
  serif** combo; body copy is small (14px) and gray. Keep headings large
  (48px desktop section h1s, capitalize) and letter-spaced button labels.
- Two lavender `#f9f9ff` bands are **partial-height decorative overlays**
  (amenities bottom ≈40%, blog top ≈60%), not full-section backgrounds.
- The testimonial left image and newsletter right image are `display:none`
  in the reference — do NOT render them (matches live output).
- The package-search panel and hero photo need dark overlays for text
  legibility (black 0.5 on the search panel; dark overlay on mobile hero).
- Carousel/slider libs (owl, swiper) and icon fonts (FontAwesome,
  LinearIcon) are never copied — lucide-react icons + React state.
- Reference typos ("Benifits", "Luxerious", "Shor Time", "Childs") may be
  corrected; keep the same kind of content and phrasing.
