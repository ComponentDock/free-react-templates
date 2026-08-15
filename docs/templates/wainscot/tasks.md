# Wainscot — tasks outline

Recreation of ColorLib **Tangre** (https://colorlib.com/wp/template/tangre/)
as **Wainscot** — furniture & interior design landing page.

## Replication reference

- Live preview: https://preview.colorlib.com/theme/tangre/ (HTTP 200)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/tangre-free-template.jpg
- Stylesheet: https://preview.colorlib.com/theme/tangre/css/main.css
  (fetched to /tmp/tangre-main.css)
- Preview HTML: /tmp/tangre-preview.html (30,383 bytes)

## Design notes

- Clean airy interior-design aesthetic. Brand blue `#3face4` on buttons;
  dark `#222` offer + footer sections; white hero text over an interior
  photo; Poppins everywhere.
- Page `<title>` in source: "Tangre Furniture".

## Section order (1:1 with source)

1. **Top utility bar** — phone left (012-6532-568-9746), 4 social icons
   center, "GET FREE QUOTE" blue button right.
2. **Navbar** — blue diamond logo mark (white cross), uppercase links HOME /
   PORTFOLIO / ABOUT / BLOG / PAGES / CONTACT; mobile hamburger.
3. **Hero** — full-bleed light-blue-paneled interior photo, thin white
   "Creativity Beyond Life" (48px/54px Poppins 300), white "Hire Us Now!"
   button (inverted primary-btn: white bg, `#222` text).
4. **Latest news** — "Latest News from all categories" + 3 image cards
   (paraphrased interior titles).
5. **Offer area** — `#222` bg; stats row 1.5K Happy Clients / 10 Years /
   250 Professionals / 369 On Going Job; "We can be your digital Problems
   Solution Partner"; "What we Offer" (outlined) + "Get a free Quote"
   (solid white).
6. **Projects** — "Our Recent Completed Projects"; tabs All Categories /
   Branding / Image Manipulation / Creative Work / Web Design / Print
   Material; 6 cards (3×2 grid).
7. **Testimonials** — photo bg; carousel of quote cards (quote + name +
   role); ≥2 entries with next/prev.
8. **Blog** — "Latest From Our Blog"; 4 cards (date / title / excerpt /
   likes + comments).
9. **Footer** — `#222`; Top Products links | Newsletter form (success
   state) | Instagram Feed 8-thumb grid; copyright bar with Component Dock
   link.

## Design tokens

| Token       | Value                                   | Used for                              |
| ----------- | --------------------------------------- | ------------------------------------- |
| brand       | `#3face4`                               | buttons, subscribe, accents           |
| ink         | `#222222`                               | dark sections, hero button text       |
| body        | `#777777`                               | paragraphs                            |
| surface     | `#f9f9ff`                               | alternate light section bg            |
| font        | Poppins                                 | body + headings (300/400/500/600/700) |
| section gap | 120px                                   | consistent vertical rhythm            |
| button      | 42px lh, 0 30px, radius 5px, 500 weight | primary CTA                           |

## Fidelity notes

- Paraphrase all copy (lorem + odd source text) to furniture/interior
  flavor; keep content kinds.
- Placeholder images: `https://picsum.photos/seed/wainscot-<n>/<w>/<h>` —
  hero seed must be an interior/room photo (subject-verify).
- Brand icons (Facebook/Twitter/etc.) via inline SVG; UI icons via
  lucide-react.
- Phone `tel:` href computed at runtime from a spaced display string.
- Newsletter: client-side email validation + success state (no backend).
- Projects filter tabs: presentational active-state toggle.

## Tasks

- [x] Replication research (preview DOM + CSS + screenshot) → spec
- [ ] Scaffold `apps/wainscot` (copy knot, rename package)
- [ ] npm install at root; lockfile registers workspace
- [ ] index.css `@theme` tokens + Poppins link in index.html
- [ ] Tests + components: TopBar, Navbar, Hero, News, Offer, Projects,
      Testimonials, Blog, Footer, App
- [ ] `bash scripts/verify-app.sh wainscot` (typecheck + lint + 100% tests + build)
- [ ] `npm run spec:validate`
- [ ] PR + immediate squash merge
- [ ] Bookkeeping: TEMPLATES.md rows 508 + 1194 `[x]` + surge URL, homepage + public/CNAME, readme:status
