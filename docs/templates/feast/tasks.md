# Feast (Colorlib Foodblog) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream (stream 3). The spec
> folder `openspec/specs/template-feast/` is the claim marker — implementers
> pick this template when it is the first `- [ ]` item with a spec.

## Design notes (replication findings)

- **Original:** ColorLib "Foodblog" — food / recipes blog template
  (source: https://colorlib.com/wp/template/foodblog/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/foodblog/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
- **Visual design (from DOM + CSS tokens + screenshot):** bright food-blog
  landing with a **hot-pink** brand (`#ff2a6b`) top bar and recipe bars,
  Poppins font, a full-photo hero with **sticker-style** headline boxes
  (pink `#ff2a6b` / yellow `#fdc856` / lime `#bdde64`), a yellow reviews
  section (`#fdc856`), and a photo-backed footer.
- **Structure (1:1, section order):**
  1. Header: pink top bar (social icons left, Register/Login right); white
     bottom bar (logo "Feast" + tagline "RECIPES & MORE", nav Home/Features/
     Recipes/Reviews/Contact, pink search button).
  2. Hero: 694px-tall photo slider (2 slides), centered sticker headline
     "Healthy Recipes" / "from the best chefs" / "for all the foodies",
     circular pink-outline prev/next arrows.
  3. Ad banner: 3-photo carousel with right-side overlay "Amazing deserts" +
     list (Easy to make / Step by Step Video Tutorial / Gluten Free / Healthy
     Ingredients) with check icons.
  4. Latest recipes: heading + 6 recipe cards in a 3-col grid; each card =
     photo + pink info bar (name in 15px white + 5-star rating, last star
     faded) with the signature rotated pink sliver on the right.
  5. Bottom widgets (3 cols): "Top rated recipes" (5 entries), "Most liked
     recipes" (5 entries) — each entry 77px thumb + pink date + name + rating;
     third col = blog card (photo + pink date badge, "Italian restaurant
     Review", "By Maria Williams", excerpt, "2 Comments", pink readmore
     arrow; white card, soft shadow).
  6. Reviews: yellow section, 2 cards side by side (166×160px thumb + pink
     date badge, pink date, recipe name, rating, avatar + "By Janice Smith").
  7. Gallery: horizontal photo strip (6 images, 320px tall).
  8. Footer: background photo; logo + 6 grey social icons (Pinterest,
     Facebook, Twitter, Dribbble, Behance, LinkedIn); nav menu; copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **pink `#ff2a6b`**; secondary **yellow `#fdc856`**; accent
    **lime `#bdde64`**; star **`#fbb710`**; faded star **`#e0e3e4`**.
  - Text `#474747` (h2–h6 weight 500; nav 15px weight 500, padding 25px 20px);
    footer social `#b8b8b8` 14px.
  - Font: **"Poppins"** (Google Fonts `<link>`, `font-family: 'Poppins',
sans-serif`).
  - Stickers: radius 5px, shadow `-1px -5px 20px rgba(0,0,0,.3)`; title-1
    rotate(4deg) padding 0 28px; title-2 padding 5px 28px; title-3 padding
    10px 28px.
  - Buttons: search 34×37px radius 4px pink; readmore 41×41px pink; hero
    arrows 40px circle 2px pink border; date badges pink bg white text
    (review 12px, blog 14px).
  - Cards: blog white + `box-shadow: 0 17px 29px rgba(0,0,0,.15)`; recipe
    info bar padding 17px 25px 15px + rotated pink `:after` sliver (53px,
    rotate 27deg); review-thumb 166×160px; rl-thumb 77×77px; gs-item 320px.
- **Recreation name:** Feast (NEW — differs from ColorLib "Foodblog"). App
  folder `apps/feast`, package `@free-react-templates/feast`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/feast-<n>/<w>/<h>`); lucide-react icons (brand/social
  icons as inline SVG — lucide-react removed brand icons); Poppins via Google
  Fonts; pink primary in `@theme`; repo-standard Navbar (dark-mode toggle,
  added — the original has none) + Footer chrome; reuse `packages/ui`
  (Button, ButtonLink, Card, cn).
- **Copy notes:** original nav spells "Receipies" — recreate as "Recipes" or
  keep the original spelling; either is fine but pick one and use it in nav +
  footer. Recipe names, dates, authors, ratings are placeholder-ish content —
  paraphrase freely but keep the same kinds.

## Tasks

- [x] Write `openspec/specs/template-feast/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/feast` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/feast`; run `npm
    install` at repo root so the lockfile registers the workspace).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage: Header (top bar + nav +
      search + dark toggle), HeroSlider, AdBanner, RecipeGrid, Widgets
      (lists + blog card), Reviews, Gallery, Footer.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-feast`, open PR (source template, preview URL,
      design tokens, what differs), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL
      (`free-react-templates-feast.surge.sh`) + homepage + `npm run
    readme:status` (bookkeeping on main).
