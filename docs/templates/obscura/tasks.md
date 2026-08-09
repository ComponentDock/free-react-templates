# Obscura (ColorLib Erase) — Tasks & Design Notes

> Recreation of ColorLib "Erase" (free photography magazine template,
> https://colorlib.com/wp/template/erase/) under the NEW name **Obscura**
> (camera obscura — a photography reference), per the monorepo naming mandate
> (never reuse the ColorLib source name).
> Prep artifact lives on `main`; implementation ships later on
> `feat/template-obscura`.

## Design notes (replication findings, refreshed this run)

- **Original:** ColorLib "Erase" — photography portfolio/magazine page.
  Live preview: https://preview.colorlib.com/theme/erase/ (HTTP 200, 30.5KB
  HTML; tokens parsed from `css/style.css` 60.9KB).
- **Visual design (screenshot `erase-free-template.jpg`, 1200×946):** dark
  olive/charcoal hero with "ERASE" in huge uppercase serif letters filled
  with a colorful photo (background-clip: text), tiny letter-spaced
  "M A G A Z I N E" above / "U K E D I T I O N" below; minimalist navbar
  (brand left, hamburger right); below the fold: alternating photo + white
  editorial rows with circular avatar + serif name + uppercase gray domain;
  dark `#212121` footer. Slate-blue `#69779b` accent.
- **Structure (1:1, section order — VERIFIED against the live DOM this run;**
  note the old prep wrongly described a "blog section": there is NO page-level
  blog section, "Recent Blog" is a FOOTER widget, and the "Read more" buttons
  live in the feature rows):
  1. `Navbar` — brand "Obscura" + links Home / About / Blog / Contact +
     dark-mode toggle; hamburger on mobile.
  2. `Hero` (`hero-wrap js-fullheight`, 100vh) — span "Magazine" (12px,
     uppercase, letter-spacing 20px) → h1 "Obscura" (Abril Fatface 900,
     uppercase, 340px → 100px responsive; photo clipped inside letters via
     background-clip: text) → span "UK Edition".
  3. `FeatureRows` (`ftco-section ftco-no-pb ftco-no-pt`) — 11 full-width
     `.blog-wrap` rows, alternating image-left/text-right and
     image-right/text-left (`order-md-last`), some rows dark (`bg-darken`
     #212121 → white text). Each row: half photo (js-fullheight) + text
     block: 60px round avatar + h4 author "Jamie Jonson" + domain
     "fashion.com" (12px uppercase letter-spacing 4px) + h2 quote link
     (50px/38px, weight 900) + paragraph + "Read more" button (arrow icon).
  4. `Footer` (bg #212121, 7em padding) — col 1: brand 24px white + blurb +
     3 round social circles (twitter/facebook/instagram, 60px,
     rgba(255,255,255,.05)); col 2: "Recent Blog" widget — 2 entries
     (thumb + title link + meta: July 12, 2018 · Admin · 19); col 3: "Site
     Links" (Home, About, Model, Services, Blog); col 4: "Have a
     Questions?" (203 Fake St. Mountain View, San Francisco, California,
     USA / +2 392 3929 210 / info@yourdomain.com); copyright bar.
- **Design tokens (from `css/style.css`):**
  - Brand slate blue `#69779b` (btn-primary bg/border, link hovers).
  - Dark `#212121` (footer bg + dark rows), white `#fff`, black `#000`
    headings, footer text rgba(255,255,255,.7) / links .8, hover #69779b.
  - Fonts: "Abril Fatface" (display, weight 900, uppercase) + "Poppins"
    (body) via Google Fonts `<link>`.
  - Buttons: slate-blue filled, white text, radius 0.25rem.
  - Hero h1 340px → 200px → 150px → 100px; subheading 12px / ls 20px;
    feature h2 50px / 38px mobile, weight 900, lh 1.2; avatar 60px circle;
    domain label 12px uppercase ls 4px.
- **Recreation decisions:** picsum-seeded placeholders
  (`picsum.photos/seed/obscura-<n>/<w>/<h>` — hero 1600×900 photo-clip,
  rows 800×1000, avatars 120×120, footer thumbs 80×80); lucide icons
  (ArrowRight, Calendar, User, MessageCircle, MapPin, Phone, Mail, Menu,
  Twitter/Facebook/Instagram as lucide brand icons); Google Fonts Abril
  Fatface + Poppins. Hero photo-clip via inline `backgroundImage` +
  `WebkitBackgroundClip: 'text'` / Tailwind arbitrary
  `[-webkit-background-clip:text]` + transparent text fill. Quote text may be
  paraphrased but keep the kind (author + domain + quote + body + Read more).
  Site name "Erase" → "Obscura" everywhere (nav, hero h1, footer brand).

## Tasks (implementation order)

- [ ] Create branch `feat/template-obscura` from latest origin/main.
- [ ] Mark Erase `[~]` in TEMPLATES.md on the branch (line 217).
- [ ] Scaffold `apps/obscura` (copy the simplest multi-section app, rename
      package to `@free-react-templates/obscura`, register workspace, run
      `npm install` at root so package-lock registers it).
- [ ] `src/index.css`: `@theme` tokens — slate blue `#69779b`, dark
      `#212121`, white/#000 text, Abril Fatface + Poppins fonts, 0.25rem
      button radius.
- [ ] Tests first (TDD, red): Navbar (brand, links, dark-mode toggle,
      mobile hamburger), Hero (Magazine / photo-clipped h1 / UK Edition),
      FeatureRows (avatar + name + domain + quote + body + Read more,
      alternating side, dark rows), Footer (blurb, socials, Recent Blog
      widget, Site Links, contact column, copyright).
- [ ] Implement components using `packages/ui` (Button, ButtonLink, Card,
      Badge, cn) + picsum-seeded images + lucide icons; hero photo-clip.
- [ ] Verify: `scripts/verify-app.sh obscura` (typecheck + lint + 100%
      coverage + build), `npm run spec:validate`.
- [ ] Self-review (docs/self-review.md); commit conventionally
      `feat: Obscura — photography template (ColorLib Erase)`; push branch;
      open PR to main; merge immediately; update TEMPLATES.md `[x]` + surge
      URL; `npm run readme:status`; deploy.
