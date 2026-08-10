# Benevol (ColorLib Foundation) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-benevol`.

## Design notes (replication findings)

- **Original:** ColorLib "Foundation" — charity / donation website
  template (source: https://colorlib.com/wp/template/foundation/).
  TEMPLATES.md has THREE copies of this item (lines 402, 1266, 2322 —
  mark ALL THREE `[x]` when done). `foundation2` is a DIFFERENT template;
  `hopefoundation` shipped as **congregate**.
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/foundation/
  (HTTP 200, ~31.7 KB, title "Foundation — ColorLib Website Template").
  Stylesheets: `css/style.css` (21.2 KB) + a CUSTOMIZED
  `css/bootstrap.min.css` (`.btn-primary` computes to `#fd5f00` — NOT
  Bootstrap blue) + owl.carousel / owl.theme.default / magnific-popup /
  jquery-ui / bootstrap-datepicker / aos. Icon fonts: `fonts/icomoon`
  (icon-facebook, icon-twitter, icon-instagram, icon-linkedin, icon-play,
  icon-heart) + `fonts/flaticon` (piggy-bank, blood, food, donation,
  dollar, unity). Fonts via Cloudflare cf-fonts @font-face in the head:
  **Anton** (headings) + **Nunito** (body; it's the customized Bootstrap
  body stack) — use Google Fonts `<link>`s in the recreation.
- **Screenshot:** `foundation-free-template.jpg` — verified live in a
  browser (vision, 1200×946): white navbar with orange "FOUNDATION"
  wordmark left, nav links right (Home, About, Discover, Donate, Blog,
  Contact); full-width hero photo of a smiling boy in a classroom with a
  headline baked into the image ("Education" orange italic serif +
  "for Brighter Future" white script) + carousel arrow; below the hero,
  three solid panels (dark grey / orange / deep red).
- **Visual design:** warm charity aesthetic — white page, near-black
  text, brand orange `#fd5f00` (logo when sticky, nav active/hover,
  links, `.btn-primary` fills, counters, intro panel 2, blog links,
  newsletter button), gold overlay `rgba(205,165,88,.95)` on bg-image
  sections (About / Donate / Testimonials), dark greys `#4e4e4e` /
  `#333333` / `#25262a`, deep red `#a23131` (intro panel 3), light grey
  `#f8f9fa` sections (blog/contact), Anton uppercase headings with
  letter-spacing, Nunito 16px body, 4px-radius orange buttons, 4rem
  orange Anton counters with 50×3px underline, `.bg-image` sections use
  `background-attachment: fixed`.

## Design tokens (from css/style.css + live computed styles)

| Token          | Value                                                                                                                                                                                                                                                                                        | Where                                                                                                                                                                                                 |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Brand orange   | `#fd5f00`                                                                                                                                                                                                                                                                                    | `.btn-primary` bg (Donate Now / Send Message / Subscribe), `.site-menu` active+hover, sticky logo, `.text-primary` (cause H3s, blog links), `.block-counter-1 .number`, intro panel 2, social buttons |
| Gold overlay   | `rgba(205, 165, 88, .95)` (`#cda558`)                                                                                                                                                                                                                                                        | `.overlay:after` over `.bg-image` sections (About, Donate, Testimonials)                                                                                                                              |
| Panel greys    | `#4e4e4e` / `#333333` / `#25262a` / `#343a40`                                                                                                                                                                                                                                                | intro panel 1 / footer bg / dropdown hover bg / dropdown links                                                                                                                                        |
| Deep red       | `#a23131`                                                                                                                                                                                                                                                                                    | intro panel 3                                                                                                                                                                                         |
| Light greys    | `#e9ecef`, `#f8f9fa`, `#f4f5f9`, `#edf0f5`, `#b8b8b8`, `#999999`, `#6c757d`                                                                                                                                                                                                                  | team card border / light section bgs / role text / footer links / flaticon icons (`text-secondary`)                                                                                                   |
| Fonts          | **'Anton', sans-serif** (headings) + **'Nunito', sans-serif** (body 16px)                                                                                                                                                                                                                    | logo 2rem ls .2rem; `.section-title` 4rem (2rem mobile); counters 4rem; `.footer-heading` 16px ls .2rem uppercase                                                                                     |
| Buttons        | `.btn-primary`: bg `#fd5f00`, white text, radius 4px, padding 16px 24px, 16px                                                                                                                                                                                                                | Donate Now (block), Send Message (block), Subscribe                                                                                                                                                   |
| Social buttons | `.primary-primary-outline--hover`: 30×30, bg `#fd5f00`, white icon, 2px transparent border, radius 4px; hover: border `#fd5f00`, bg transparent                                                                                                                                              | team cards (3 each)                                                                                                                                                                                   |
| Counters       | `.block-counter-1 .number`: 4rem Anton, `#fd5f00`, pb 20px mb 20px, 50×3px `rgba(0,0,0,.3)` underline (centered; `-sm` variant text-left + left underline)                                                                                                                                   | About stats + Discover mini counters                                                                                                                                                                  |
| Team cards     | padding 30px, 1px solid `#e9ecef`, avatar 130px rounded-circle                                                                                                                                                                                                                               | `.block-team-member-1`                                                                                                                                                                                |
| Testimonials   | `blockquote` white, padding 30px, italic 18px Georgia serif; padding 20px card                                                                                                                                                                                                               | `.block-testimony-1`                                                                                                                                                                                  |
| Spacing        | `.site-section` padding 5em 0 (2.5em mobile); intro panels padding 50px; footer 4em 0 / 8em 0                                                                                                                                                                                                | vertical rhythm                                                                                                                                                                                       |
| Icons          | icomoon (source) → lucide/inline SVG: play (vimeo popup), heart; brand socials (facebook, twitter, instagram, linkedin) as inline SVG; cause icons (piggy-bank → PiggyBank, blood → Droplets, food → Utensils, donation → HeartHandshake, dollar → DollarSign, unity → Handshake) via lucide | hero popup, team, footer, causes grid                                                                                                                                                                 |

## Tasks (implementation order)

1. Scaffold `apps/benevol` (copy simplest existing app; package
   `@free-react-templates/benevol`; `vite.config.ts` with
   `injectUiSource()`).
2. `npm install` at repo root (registers workspace in package-lock.json;
   verify `grep -c "free-react-templates/benevol" package-lock.json`).
3. `index.css` `@theme` tokens: `--color-primary: #fd5f00`,
   `--color-gold: #cda558` (overlay), `--color-panel: #4e4e4e`,
   `--color-maroon: #a23131`, `--color-footer: #333333`,
   `--font-display: 'Anton', sans-serif`, `--font-body: 'Nunito',
sans-serif`. Add Anton + Nunito Google Fonts `<link>`s to `index.html`.
4. `Navbar.tsx` — white sticky bar (shadow), wordmark "Benevol" (Anton,
   uppercase, ls-wide; orange when scrolled), six anchor links
   (Home/About/Discover/Donate/Blog/Contact, uppercase, black, active +
   hover `text-primary`); mobile: hamburger (lucide `Menu`) + right
   slide-in panel (300px, white) with close button (lucide `X`),
   aria-expanded.
5. `HeroSlider.tsx` — full-width 2-slide carousel (lucide ChevronLeft/
   ChevronRight controls, slide index state; picsum ~1600×900 seeds
   benevol-1/benevol-2) + HTML headline overlay on slide 1 to replace the
   source's baked-in JPG text (split: "Education" in orange italic serif
   - "for Brighter Future" in white script-style heading).
6. `IntroPanels.tsx` — 3 equal panels (bg `#4e4e4e` / `#fd5f00` /
   `#a23131`), padding 50px, inset 2px `border-white/50` frame (p-5
   inner), white uppercase Anton H2s (Rescue An Orphan / Feed The Hungry
   / Free Education) + white/50 paragraphs; stack on mobile.
7. `Mission.tsx` — `.bg-image` fixed-attachment section + gold overlay
   (`bg-gold/95` — use `rgba(205,165,88,.95)`): left figure with 80px
   white circular play button (lucide `Play`) over image (link may be a
   plain anchor or modal); right: "Our Mission" white uppercase Anton H2
   - 2 paragraphs; below: 4 counters (Anton 4rem orange numbers +
     underline bar + white captions: Orphanage 3293, Donations 3298,
     Volunteers 1212, Orphans 392). Simple count-up effect or static
     numbers — tests must not depend on animation timing.
8. `Discover.tsx` — centered black uppercase "Discover" heading block +
   2 alternating rows (image left/text right, then reversed via
   `order-*`): H3 "Build Schools in Africa" + mini counters Schools 15 /
   Students 1039; "Feeding Children in Africa" + Children 15 / Orphanage 38. Mini counters: left-aligned orange Anton numbers + left underline.
9. `DonateCta.tsx` — gold-overlay bg-image section, centered white H2
   "Make A Donation Now! You May Change Lives Forever" + block orange
   "Donate Now" button (packages/ui Button or ButtonLink + cn).
10. `Causes.tsx` — 6 cards 3-col grid (1-col mobile), centered: lucide
    icon in grey (`text-secondary`), orange H3 (`text-primary`, h4 size),
    paragraph: Make Donation (PiggyBank), Medical Health (Droplets),
    Food for the Poor (Utensils), Help & Love (HeartHandshake), Give To
    The Needy (DollarSign), Volunteer (Handshake).
11. `Team.tsx` — centered "Our Leadership" H2 + 3 cards (border
    `#e9ecef`, p-8): 130px circular avatar (picsum benevol-person-1..3),
    name (DARK text — see gotcha), uppercase grey role, blurb, 3 circular
    orange social buttons (inline SVG Facebook/Twitter/Instagram).
12. `Testimonials.tsx` — gold-overlay bg-image section, white "Testimonial"
    H2 + carousel of 4 quotes (white Georgia-italic blockquote, circular
    avatar, white name: Ken Davis / Mellisa Griffin / Robert Steward /
    Ricky Fisher) with prev/next controls.
13. `Blog.tsx` — bg-light section, centered "Our Blog" H2 + 2 large cards
    (col-lg-6): rounded image, orange H2 link title ("How to Invest In
    Investing Company"), uppercase small muted meta ("January 18, 2019
    By James Cooper"), excerpt, orange "Get Started" / "Read More" links.
14. `Contact.tsx` — bg-light section, centered "Contact Us" H2 + centered
    form (col-lg-6): First name / Last name row, Email address, message
    textarea (rows 10), block orange "Send Message" submit; client-side
    handling (no navigation).
15. `Footer.tsx` — bg `#333333`: left col — "About Us" blurb + "Features"
    links (About Us / Testimonials / Terms of Service / Privacy / Contact
    Us, `#999` hover white); right col — "Some Paragraph" blurb +
    "Subscribe to Newsletter" (transparent-bordered input + orange
    Subscribe button, zod validation, success message) + "Follow Us" (4
    inline-SVG social icons); bottom: copyright line with year + ColorLib
    credit ("made with ♥ by Colorlib").
16. `App.tsx` — compose Navbar + HeroSlider + IntroPanels + main (Mission,
    Discover, DonateCta, Causes, Team, Testimonials, Blog, Contact) +
    Footer; document title "Benevol — Charity Template".
17. Tests: one describe per component, Gherkin-mirroring scenarios from
    spec.md; 100% coverage lines/functions/branches/statements.
18. Run `scripts/verify-app.sh benevol` (typecheck + lint + coverage
    tests + build) until green.
19. Update TEMPLATES.md lines 402, 1266 AND 2322 `[ ]` → `[x]` (ALL THREE
    copies) with surge URL + homepage after deploy; `npm run readme:status`;
    commit `feat: Benevol — charity template (ColorLib Foundation)`;
    PR → main → merge immediately.

## Fidelity gotchas

- **`.btn-primary` is orange `#fd5f00`**, not Bootstrap blue — the
  preview's bootstrap.min.css is customized. Verify computed styles
  against the live preview if unsure.
- **Gold overlay** `rgba(205,165,88,.95)` covers About / Donate /
  Testimonials background images — white text sits on gold, not on the
  raw photo.
- **Hero headline is baked into the JPG** in the source ("Education" /
  "for Brighter Future"). Recreate as an HTML overlay on the placeholder
  slide so the composition reads the same; do NOT copy the image.
- **Team name bug (source):** `h3.text-white` on a white card → member
  names are INVISIBLE in the original demo. Render names in a legible
  dark color (e.g. `#25262a`) and note the deviation in the PR. Roles
  are grey `#b8b8b8` uppercase small.
- **Social-button hover bug (source):** `primary-primary-outline--hover`
  hover switches to transparent bg + orange border but the white icon
  color is unchanged (white-on-white). Keep the CSS hover or darken the
  icon on hover for legibility — cosmetic choice, note it.
- **Contact form placeholder bug (source):** both name inputs say "First
  name" — use "First name" / "Last name".
- Counters use `data-number` count-up in the source (3293 / 3298 / 1212 /
  392; 15 / 1039; 15 / 38). Animate or render static — tests must not
  depend on animation timing.
- Intro panels: heading is uppercase Anton with letter-spacing; the inner
  2px white/50 frame inset 20px is a distinctive detail — don't drop it.
- `.section-title` headings are huge (4rem desktop / 2rem mobile) Anton
  uppercase; `.footer-heading` is 16px white uppercase with `.2rem`
  letter-spacing.
- `.bg-image` sections use `background-attachment: fixed` — with Tailwind
  use `bg-fixed` (note: iOS ignores fixed attachment; acceptable).
- Nav links are uppercase with 15px horizontal margins and a 2px bottom
  border on hover; scrollspy marks the active section link `#fd5f00`.
- Blog/contact sections are `bg-light` (`#f8f9fa`); the page's other
  sections are white.
- THREE TEMPLATES.md copies (402, 1266, 2322): ALL must be marked `[x]`.
