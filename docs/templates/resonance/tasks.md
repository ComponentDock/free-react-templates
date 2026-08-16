# Resonance (ColorLib Echo) — Tasks & Design Notes

> Recreation of ColorLib "Echo" (https://colorlib.com/wp/template/echo/),
> a free Bootstrap 5 digital-marketing & SEO agency website template.
> Implemented on `feat/template-resonance` and shipped as `apps/resonance`
> (package `@free-react-templates/resonance`).

## Design notes

- **Original:** ColorLib "Echo" — Free Bootstrap 5 Website Template by
  Colorlib. Preview: https://preview.colorlib.com/theme/echo/
  (title tag: "Echo — Free Bootstrap 5 Website Template by Colorlib").
- **NOTE:** the earlier prep spec for `template-echo` described the "Colorlib
  Error 404 V3" design — that was a prep-stream research error (that design
  is already shipped as `apps/slice`). This spec supersedes it with the real
  Echo site structure, and the app is named **Resonance** because "echo" is
  the ColorLib source slug (new-original-name rule).

## Replication tokens (from preview HTML + css/style.css)

- **Fonts:** Montserrat for headings/body; Open Sans for the subheading pill
  and footer widget headings. Load Montserrat via Google Fonts `<link>`.
- **Brand navy:** `#081158` — headings, primary buttons, navbar CTA pill,
  testimonial card hover border. Hover shade `#070e4b` / `#060e46`.
- **Accent amber:** `#FBB244` — subheading pill text, icon-blob decoration,
  CTA pill text on navy. Subheading pill: `color:#FBB244;
background:rgba(251,178,68,.2); border-radius:30px; font-size:10px;
text-transform:uppercase; font-weight:700; padding:5px 20px`.
- **Headings:** 40px bold `#081158` (h1), 30px (h2).
- **Hero:** split layout (text left ~5 cols, illustration right ~6 cols);
  `padding:12rem 0 10rem; min-height:600px`; soft rounded blob decoration
  top-right behind the illustration (the original uses blob-1.svg; we use a
  large amber-tinted rounded blob div). Buttons: "How we work" (primary
  navy, white text) + "Contact us" (outline navy).
- **Feature cards:** centered 3-col; icon 50px with a 40px
  `rgba(251,178,68,.5)` circle behind the top-left corner.
- **Service cards:** 2-col grid; `.service` = `padding:30px; border:1px solid
#efefef; margin-bottom:30px`; icon (80px flex) + text side by side.
- **Testimonials band:** `bg #f8f9fa` (bg-light); cards white, radius 7px,
  `border:1px solid rgba(0,0,0,.1)`, hover border `#081158`; blockquote 18px
  light gray; author: 40px round avatar + 16px black name + role span.
- **Footer:** `bg #f8f9fa`, `padding:7rem 0` (~70px), text `#888`; widget
  headings 14px bold black; columns About (blurb + social), Pages, Resources,
  Contact (email / phone / address); copyright bar centered.
- **Navbar CTA pill:** `background:#081158; border:2px solid #081158;
color:#FBB244; border-radius:30px; padding:6px 20px`.

## Content map (original → recreation)

| Section      | Original (ColorLib Echo)                                                                                                             | Resonance                                                                                                           |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| Navbar       | logo + Home/Dropdown/About/Services/FAQ/Contact Us + "Download now" pill                                                             | "Resonance" wordmark + Home/About/Services/Testimonials/Contact anchors + "Download now" pill                       |
| Hero         | pill "Welcome to our site" · h1 "Expert SEO, SEM Services in London" · copy · "How we work" + "Contact us" · hero_1.png illustration | same structure; picsum seed `resonance-hero`                                                                        |
| Features     | "Features" / "Our Features" · Marketing Analysis, Digital Marketing, SEO and Backlinks                                               | same titles; lucide icons (ChartColumn/LineChart, Target, Link)                                                     |
| About        | about_1.png left · pill "About us" · h2 "Why our agency?" · 2 paragraphs · 3-item check-list · "About us" button                     | same; picsum seed `resonance-about`; lucide Check icons                                                             |
| Services     | "Services" / "Our Services" · 6 cards (Design, Internet, Social, SEO, BackLinks, Design Marketing)                                   | same 6 titles; lucide icons (Shield, Megaphone, FileText, ChartColumn, Link, Trophy)                                |
| Testimonials | "Testimonials" / "Testimonials" · 3 quote cards (Carl Anderson, Drew Wood, Michelle Alisson — Director at Google)                    | same 3 names/roles; picsum avatar seeds                                                                             |
| Footer       | About Cololib / Pages / Resources / Contact · Colorlib attribution                                                                   | About Resonance / Pages / Resources / Contact · "More templates at Component Dock" → https://www.componentdock.com/ |

## Tasks

- [x] Research original (preview HTML + css/style.css + screenshot) — tokens documented above.
- [x] Write `openspec/specs/template-resonance/spec.md` (Gherkin requirements + scenarios).
- [ ] Scaffold `apps/resonance` (copy amplify structure; rename package; `injectUiSource()` + `tailwindcss()` plugins; public/CNAME).
- [ ] Tests first (red) for Navbar, Hero, Features, About, Services, Testimonials, Footer, App.
- [ ] Implement (green); `@theme` brand tokens in index.css.
- [ ] `npm install` at root; lockfile registers workspace.
- [ ] `bash scripts/verify-app.sh resonance` — typecheck + lint + 100% coverage + build.
- [ ] `npm run spec:validate`.
- [ ] PR + immediate squash merge; bookkeeping (TEMPLATES.md `[x]` + URL, homepage, `npm run readme:status`).
