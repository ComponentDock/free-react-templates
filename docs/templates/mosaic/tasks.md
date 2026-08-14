# Mosaic (ColorLib Snipp) — Tasks & Design Notes

> Prep artifacts committed on `main` (prep stream). Implementation ships
> later on `feat/template-mosaic` (implementer stream).

## Design notes (replication findings)

- **Original:** ColorLib "Snipp" — bright, modern digital agency / creative
  studio one-page template (source:
  https://colorlib.com/wp/template/snipp/; Bootstrap 4, jQuery,
  particles.js, Owl Carousel, AOS). License CC BY 3.0.
- **Preview REACHABLE:** `https://preview.colorlib.com/theme/snipp/` — DOM
  fetched (36KB HTML, 69KB `css/style.css`) + visually inspected via
  browser. Screenshot in TEMPLATES.md matches.
- **Visual design:** white page; full-viewport hero with brand gradient
  `linear-gradient(45deg, #ee76ad 0%, #efac78 100%)` (pink → peach) and a
  particles.js dot/network overlay; centered white H1 with one bold word;
  white pill CTAs; asymmetric masonry portfolio grid on white; 4 service
  cards with hexagon icon chips in tinted pastels; newsletter parallax band
  on the same gradient; blue counter band `#29bae4`; dark brown footer
  `#3c312e`. Font: Work Sans (light weights for big headings). Signature
  features: gradient hero + dot overlay, hexagon service chips, masonry
  portfolio grid, animated counters.

### Branding decisions

- New name: **Mosaic** (a mosaic of creative works — agency portfolio
  vibe). Source brand "Snipp." → "Mosaic.".
- Copy: keep the same _kind_ of content, paraphrase text (lorem-style
  blurbs, testimonial names can change, portfolio tile titles can be
  reworded but keep 6 tiles).
- Placeholders: `https://picsum.photos/seed/mosaic-<n>/<w>/<h>`; icons from
  lucide-react (strategy/lightbulb, pen-tool, code, life-buoy, mail,
  paper-plane, quote, twitter, facebook, instagram, map-pin, phone, clock,
  message-circle, arrow-right).

## Implementation task outline (for the implementer)

Order follows the visual stack (top of page → footer). Build one app
`apps/mosaic` (copy simplest existing app; rename package to
`@free-react-templates/mosaic`).

1. **Scaffold + shell**
   - [ ] Copy base app → `apps/mosaic`; rename package, set homepage
         `https://mosaic.free.componentdock.com` + `public/CNAME`
   - [ ] index.html: title "Mosaic — Digital Agency", Google Fonts links
         (Work Sans 100/200/300/400/500/700)
   - [ ] Tailwind `@theme`: `--color-brand: #ee76ad`,
         `--color-brand-peach: #efac78`, `--color-accent: #78d5ef`,
         `--color-counter: #29bae4`, `--color-ink: #404044`,
         `--color-footer: #3c312e`; body font Work Sans
2. **Sticky navbar**
   - [ ] Dark translucent bar over hero, brand "Mosaic.", links (Home,
         About, Services, Portfolio, Case Studies, Contact), smooth scroll
         to sections; right-side white filled pill "Get in touch" (pink
         text)
   - [ ] Mobile hamburger (aria-expanded, lucide menu/x), collapsible menu
3. **Hero** (`#home`)
   - [ ] `h-screen` section; brand gradient bg + subtle dot-network pattern
         (CSS radial-gradient dots or tiny inline SVG — NO particle lib)
   - [ ] Centered H1 "We love to create Beautiful websites" — "Beautiful"
         in heavier weight; ghost CTA "Get in touch" (transparent, white
         border, `rounded-full`)
4. **Featured works + About** (`#portfolio`, `#about`)
   - [ ] Masonry grid of 6 tiles (asymmetric rows; desktop 3/6/3 → 12 →
         8/4 → 8/4 → 3; mobile stacks 1-col); each tile: image + "Website"
         tag + designer credit; titles The Verge, Racks, Zendesk, Curator,
         Tasty, Voyage (or paraphrased)
   - [ ] Below grid: centered H2 "UI/UX, visual, Web designer with more
         than 12 years of experience in designing websites and mobile
         apps." + "Get in touch" pill
5. **Services** (`#services`)
   - [ ] Centered heading "Our Services" + blurb; 4 cards: Strategy,
         Design, Development, Help & Supports
   - [ ] Hexagon icon chips: 4 tinted variants (bg `#fce7f1`/icon
         `#ee76ad`, bg `#fdf2ea`/icon `#efac78`, bg `#def4fb`/icon
         `#29bae4`, bg `#ebfdf4`/icon `#79efb4`) — clip-path hexagon or
         rotated square
6. **Newsletter** (`#subscribe`)
   - [ ] Parallax band on brand gradient (bg-fixed), centered "Subscribe
         to our Newsletter" + blurb + email input with paper-plane icon
         button; success state on submit
7. **Works** (`#work`)
   - [ ] Centered heading "Works" + blurb; 3 horizontal cards: Illustration,
         Application, Web Design (image left / text right, stack mobile);
         "View Portfolio" `#78d5ef` pill buttons
8. **Testimonials** (`#testimonial`)
   - [ ] `bg-[#f8faff]` section, heading "Customer Says" + "Our satisfied
         customer says"; 5 cards (avatar, quote, name/role)
9. **Counter** (`#counter`)
   - [ ] `bg-[#29bae4]` band, heading "Our achievements"; 3 counters
         (400/1000/8000) animating 0 → target on scroll into view
         (IntersectionObserver)
10. **Blog** (`#blog`)
    - [ ] `bg-[#f8faff]` section, heading "Blog" / "Recent Blog"; 3
          entries (date, Admin, comment count, title, excerpt)
11. **Footer**
    - [ ] `bg-[#3c312e]`: 3 widgets (About, Quick Links, Contact
          Information) + social circles + copyright
    - [ ] "Component Dock" link → https://www.componentdock.com/ (REQUIRED)

## Verification

- [ ] `scripts/verify-app.sh mosaic` green (typecheck, lint, knip, fallow,
      vitest 100% coverage, build)
- [ ] `npm run spec:validate` passes for template-mosaic
- [ ] No colorlib strings anywhere in `apps/mosaic` (provenance only in
      spec/docs/TEMPLATES.md)
- [ ] Deploy target `mosaic.free.componentdock.com` (CNAME + homepage)
