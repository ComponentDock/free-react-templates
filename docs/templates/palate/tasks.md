# Palate — implementation tasks + design notes

Recreates ColorLib **Appetizer** (restaurant) as **Palate**.
Full spec: `openspec/specs/template-palate/spec.md` (tokens, Gherkin, checklist).
Preview: https://preview.colorlib.com/theme/appetizer/ · Source page:
https://colorlib.com/wp/template/appetizer/
TEMPLATES.md rows to mark at ship: lines **334, 885, 1768, 2665** (FOUR
`Appetizer` duplicates — mark ALL of them).

## Task outline (TDD, 100% coverage, one commit per section or logical group)

- [ ] 1. Scaffold app `apps/palate` (copy simplest existing app; rename package
      `@free-react-templates/palate`; register `injectUiSource()` in
      `vite.config.ts`; `npm install` at root so the lockfile registers the
      workspace; `index.html` title "Palate — Restaurant Template" + Google
      Fonts `<link>`: Poppins 300–900 + Monoton + Miss Fajardose)
- [ ] 2. `@theme` tokens in `index.css`: brand orange `#ffa323`, black
      `#000000`, body `#666666`, footer `#141313`, bg-light `#fafafa`, white;
      font families poppins/monoton/miss-fajardose; radii (2px/5px/50%)
- [ ] 3. Top info bar (black strip: Phone icon + number, Send icon + email,
      "Open hours: Monday - Sunday 8:00AM - 9:00PM")
- [ ] 4. Navbar (transparent absolute top 50px, white links 14px, active
      orange, "Book a table" orange pill radius 5px; scroll listener →
      fixed white + shadow, links black; mobile dark bar + "Menu" toggle)
- [ ] 5. Hero slider (750px, 3 slides with black overlay .5, Monoton h1 5vw
      uppercase, "Order Now" orange + "View Menu" white-outline buttons,
      white dots bottom 40px; auto-advance + dot click, wraps)
- [ ] 6. About (centered: script "About" Miss Fajardose 100px orange +
      "Appetizer Restaurant" 50px/900 + lorem; 90px orange Play circle,
      margin-bottom -45px overlapping the counter section)
- [ ] 7. Counter band (photo bg, 4 count-up stats on IntersectionObserver:
      18 / 15000 / 100 / 20, black 40px/500 numbers)
- [ ] 8. Catering Services (bg `#fafafa`: script "Services" + h2; 3 cards,
      centered 130px BLACK circle + orange icon: Cake / Users /
      UtensilsCrossed)
- [ ] 9. Menu grid (script "Specialties" + "Our Menu"; 6 columns Breakfast /
      Lunch / Dinner / Desserts / Wine Card / Drinks, category 30px/900;
      3 items each: 100px circular photo, dish 24px/500, $29 20px/600,
      ingredient tags; 18 DISTINCT dish names)
- [ ] 10. Make Reservation (script "Book a table" + h2; 2-col form: Name,
      Email, Phone, Date, Time, Person select 1–4+; orange submit; right
      half map placeholder; success state on submit)
- [ ] 11. Our Master Chef (script "Chef" + h2; 4 cards 320px photos radius
      5px: John Smooth/Restaurant Owner, Rebeca Welson/Head Chef, Kharl
      Branyt/Chef, Luke Simon/Chef; 18px/600 names, 14px roles, 4 social
      circles per card)
- [ ] 12. Testimony (photo bg + white overlay .8; script "Testimony" +
      "Happy Customer"; 5-slide carousel, 130px round avatars + quote
      badge, names Jason McClean / Mark Stevenson / Art Leonard / Rose
      Henderson / Ian Boner, dots + prev/next, wraps)
- [ ] 13. Footer (bg `#141313` 6em: "Palate" + blurb + 3 social circles;
      Open Hours Mon–Thu 9:00-24:00, Fri–Sun 9:00-02:00; Newsletter input +
      orange Subscribe; Instagram 2×3 thumbs; copyright "© Palate. All
      rights reserved.")
- [ ] 14. `npm run verify:app palate` (typecheck + lint + 100% coverage + build)
- [ ] 15. PR: claim (`[~]` on all 4 Appetizer rows), implement, merge, mark
      `[x]` + surge URL + `npm run readme:status`

## Design notes (fidelity per section)

- **Look & feel:** dark, upscale restaurant — near-black hero photography
  under a 50% black overlay, ONE warm accent (orange `#ffa323`) on white and
  `#fafafa` surfaces, near-black `#141313` footer. Signature typography:
  Poppins body (17px, line-height 2), Monoton display caps for the hero h1,
  and a big Miss Fajardose script word (100px, orange, floating above every
  section h2 — About / Services / Specialties / Book a table / Chef /
  Testimony). The script subheadings are the template's most distinctive
  element — implement as an absolutely-positioned span behind the heading.
- **Section backgrounds:** photo (hero, counter, testimony + white overlay
  .8) · white (about, menu, chef, reservation) · `#fafafa` (services) ·
  `#141313` (footer). Order: top bar → navbar → hero slider → about →
  counter → services → menu → reservation → chef → testimony → footer —
  1:1, no reordering.
- **Navbar:** desktop = transparent, WHITE links; active link + CTA pill
  orange; scrolled = fixed white bar (shadow `0 0 10px 0 rgba(0,0,0,.1)`),
  links black, active stays orange. ≤991px: solid dark bar, "Menu" toggle.
- **Hero:** 750px fixed height (NOT 100vh — the `.js-fullheight` class is
  overridden by `.home-slider { height: 750px }`). h1 is static text in
  Monoton (no typewriter), 5vw uppercase white; two buttons per slide.
- **About → counter:** the orange video circle hangs `margin-bottom:-45px`
  over the counter section's top — keep that overlap.
- **Menu:** the source repeats "Grilled Beef with potatoes" / "Grilled Crab
  with Onion" ×2 at $29 across every category — give each of the 18 items a
  distinct dish name, keep the $29 price, and keep 4 ingredient tags per
  item. Circular 100px photos, category names 30px weight 900.
- **Services icons:** the 130px circles render BLACK (style.css ends with
  `background: #000000` after whitesmoke/#ffa323 overrides) with ORANGE
  glyphs — keep that contrast; do NOT render them orange.
- **Hero/counter imagery:** picsum SEEDS are arbitrary (palate-hero1 = Moscow night cityscape, palate-counter = forest) — pinned photo IDs instead (2026-08-12, browser-verified): hero 292 (mise en place), 1080 (strawberries), 431 (latte-art coffee); counter 425 (roasted beans on light wood, black numbers readable without overlay).
- **Map:** right half of reservation is a Google Maps embed (`#map`) —
  replace with a static muted map placeholder (CSS grid pattern + pin)
  so no third-party map dependency is needed.
- **Counter labels** are terse in the source ("Menus", "Staffs") — keep the
  same phrasing.
- **Testimony:** white overlay at .8 over the photo makes the section read
  light — black text on near-white. Quote badge overlaps the avatar's
  bottom edge; keep the centered layout.
