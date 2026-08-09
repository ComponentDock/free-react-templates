# Settle — implementation tasks + design notes

Recreates ColorLib **Aranoz** (furniture e-commerce shop) as **Settle**.
Full spec: `openspec/specs/template-settle/spec.md` (tokens, Gherkin, checklist).
Preview: https://preview.colorlib.com/theme/aranoz/ · Source page:
https://colorlib.com/wp/template/aranoz/
TEMPLATES.md rows to mark at ship: lines **339, 888, 1562** (THREE `Aranoz`
duplicates — Bootstrap, Business and E-commerce categories; mark ALL of them).

## Task outline (TDD, 100% coverage, one commit per section or logical group)

- [ ] 1. Scaffold app `apps/settle` (copy simplest existing app; rename package
      `@free-react-templates/settle`; register `injectUiSource()` in
      `vite.config.ts`; `npm install` at root so the lockfile registers the
      workspace; `index.html` title "Settle — Furniture Shop Template" +
      Google Fonts `<link>`: Poppins 300/400/500/600/700)
- [ ] 2. `@theme` tokens in `index.css`: brand pink `#ff3368`, hero bg
      `#ecfdff`, feature-card bg `#f8fbff`, bg-light `#f9f9ff`, dark
      `#2a2a2a`, body gray `#797979`, white; font family poppins; radii
      (5px cards/buttons, 50px pill for btn_1 style)
- [ ] 3. Navbar (site name "Settle" + Home link + dark-mode toggle; right
      icon buttons Search / Heart / ShoppingCart from lucide-react with
      aria-labels)
- [ ] 4. Hero slider (pale cyan `#ecfdff` split: left headline "Wood & Cloth
      Sofa" + lorem + pink "Buy Now" ButtonLink; right seeded picsum sofa
      image; prev/next controls cycling 4 headlines: "Wood & Cloth Sofa" /
      "Cloth & Wood Sofa" / "Wood & Cloth Sofa" / "Cloth & Wood Sofa")
- [ ] 5. Featured Category (white section, h2 "Featured Category" + 4 cards
      on `#f8fbff`/`#f9f9ff`: "Premium Quality" / "Latest foam Sofa" /
      "Explore Now" link; seeded picsum images)
- [ ] 6. Product grid "awesome shop" (h2 + "shop" link; 8–12 product cards:
      seeded picsum product image, h4 name "Quartz Belt Watch", "$150.00",
      "+ Add to cart" with Heart icon; card radius 5px, hover lift)
- [ ] 7. Offer band (split: offer image left, right "Weekly Sale on 60% Off
      All Products" + "Book Now" button)
- [ ] 8. Best Sellers (h2 "Best Sellers" + "shop" link; 4 product cards,
      same card component as step 6)
- [ ] 9. Subscribe band (background image/pattern, h5 "Join Our Newsletter" +
      h2 "Subscribe to get Updated with new offers" + email input +
      "Subscribe Now" button)
- [ ] 10. Client logos (`#f9f9ff`-style strip of 5 grayscale text wordmarks
      or seeded images)
- [ ] 11. Footer (5 columns: Top Products / Quick Links / Features (same
      links as Quick Links — keep duplication) / Resources / Newsletter
      blurb + input + subscribe; copyright bar)
- [ ] 12. `npm run verify:app settle` (typecheck + lint + 100% coverage + build)
- [ ] 13. PR: claim (`[~]` on all 3 Aranoz rows), implement, merge, mark
      `[x]` + surge URL + `npm run readme:status`

## Design notes (fidelity per section)

- **Look & feel:** clean, bright, minimalist e-commerce. Pale cyan hero
  (`#ecfdff`), white content sections, ONE vivid coral-pink accent
  (`#ff3368`) used for primary CTAs and hovers; Poppins everywhere.
- **Hero:** split layout — text left (~40%), floating product image right
  with soft shadow; "buy now" is the solid pink pill (`btn_2` style, radius
  5px). The slider is content-based: same layout, swapped headline + image.
- **Buttons:** primary = `#ff3368` bg, white text, radius 5px, uppercase;
  secondary/ghost (`btn_1` style) = `#ecfdff` bg with 50px radius, hover →
  `#ff3368`. The original's 3-stop gradient
  (`#ff005a → #ff5d2d → #ffba00`) appears on a small icon square inside the
  ghost button — replicate with a `bg-gradient-to-r` utility if used.
- **Product cards:** image top, name (h4), price (h3, darker), "+ add to
  cart" with heart icon; radius 5px; hover lift + shadow. Same card
  component reused in "awesome shop" (12 items) and "Best Sellers" (4).
- **Subscribe band:** background image with overlay; centered h5 eyebrow
  ("Join Our Newsletter") + h2 headline + inline email input + button.
- **Footer:** 5 link columns + newsletter; copyright bar "© Settle. All
  rights reserved."; social icons via lucide (GitHub, X, LinkedIn).
- **Images:** all picsum-seeded (`picsum.photos/seed/settle-N/w/h`) —
  sofa for hero, furniture/category shots, product thumbnails, client
  wordmarks as styled text.
- **Accessibility:** icon-only header buttons get aria-labels; slider
  prev/next are real buttons with aria-labels; forms have labels.
