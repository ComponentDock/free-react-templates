# Upnode (ColorLib Hami) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-upnode`.

## Source mapping

- **ColorLib item:** "Hami" (TEMPLATES.md — TWO copies, lines 408, 3056;
  mark ALL `[x]` when done).
- **Source URL:** https://colorlib.com/wp/template/hami/
- **Preview URL:** https://preview.colorlib.com/theme/hami/
  (HTTP 200, 33 KB DOM — live, analyzed 2026-08-11).

## Reference research (done — do not redo)

### Screenshot (`hami-free-template.jpg`, 1200×946; verified via vision)

Thin blue utility top bar (phone + email left, Login/Register + language
right), blue nav with white wordmark left, centered menu (Home active
underlined, Hosting, Pages ▾, About, Blog, Contact) and a white-outline
Live Chat button right. Below: large solid-blue hero with isometric
server-rack illustration on the right and a white cloud-shape wave at the
bottom transitioning into white. Only the top of the white "Find Your
Perfect…" section is visible below the fold; pricing/footer not in shot.

### Live DOM (primary reference — matches the screenshot)

Section order: `.header-area` (top bar 50px + nav 100px, both blue
`#1c66de`) → `.welcome-area` (`.welcome-slides` × `.single-welcome-slide`
800px, blue bg, white cloud-wave `welcome-pattern` at bottom) →
`.find-domain-area` (pill search form + domain price list) →
`.hami-features-area.bg-gray` (6 feature cards + `feature-pattern` wave)
→ `.hami-price-plan-area` (3 `.single-price-plan` cards) →
`.hami-call-to-action.bg-gray` (6 FREE mini-features) →
`.hami-support-area.bg-gray` (`.support-pattern` bg image + support text)
→ `.hami-cta-area` (stat headline, border-bottom 1px `#ebebeb`) →
`.footer-area` (4 widgets: Products / Programs / Company / Subscribe
Newsletter + `.social-info` circles + `.bottom-footer-area` with
payments).

- Top bar: "Call Us: 001-1234-88888" + "Email: info.cololib@gmail.com"
  (left, white 14px, separated by `border-left: 1px solid
rgba(255,255,255,.1)`), "Login / Register" + "English" flag dropdown
  (right).
- Nav: brand "Upnode" left; links Home (active), Hosting ▾ (Home,
  Hosting, About, Blog, Blog Details, 404, Coming Soon), Pages ▾
  (Dropdown → Dropdown Item ×3), About, Blog, Contact; right "Live
  Chat" (1px white border outline) + "Get Start Now!" (solid white
  `.btn-2`). Sticky scroll state: white container, links turn
  `#303030`.
- Hero slide 1: h2 "The Best Web Hosting" (82px white), price line
  "Starting at ~~$7.99~~ **$2.95/month***" (36px, `span` has
  line-through), p "Everything you will EVER need to Host and Manage
  your Website!" (20px), buttons "Get Start Now!" + "Live Chat";
  `.welcome-thumbnail` isometric illustration right (width 38%,
  translateY(-50%), top 50%). Slide 2 = identical copy (slider
  decorative).
- Domain: h2 "Find Your Perfect Domain Name" + "Only $7 for the first
  year"; form pill (radius 35px, shadow), input 60px (radius 35px 0 0
  35px) + select `.com` + blue Search button; prices below: .COM $5.75,
  .NET $9.45, .ORG $7.50, .US $5.99, .BIZ $9.99, .CO $6.00.
- Features ("Overall Features", `bg-gray` `#e8f1f8`): Auto Updates,
  Optimized Software, Daily Backups, Wide Networking, Protected, Free
  Support (icon + title + text cards).
- Plans ("Choose Your Web Hosting Plan", white): Standard $1.99 / Save
  50%, Advanced $3.99 / Save 70% ("Best Plan" tag), Unlimited $7.99 /
  Save 85%. Each: 4 check items (Unlimited Number of Websites,
  Unlimited Email Accounts, Unlimited Bandwidth, 2X Processing Power &
  Memory), "Get Started" button + underlined "Click here to see all
  features" (grey `#b7b7b7`, hover blue). Card: radius 3px, border
  `#ebebeb`, shadow `0 8px 8px -1px rgba(0,0,0,.15)`, padding 40px,
  hover/active bg `#e8f1f8`, price h2 60px `#1c66de` + italic `$` span.
- Discount CTA (`bg-gray`): "Up to 70% Discount with FREE Domain Name
  Registration Included!" + FREE Domain Name, FREE Email Address, Plenty
  of Disk Space, FREE Website Builder, FREE Marketing Tools, 1-Click
  WordPress Install + "Get Started".
- Support (`bg-gray` + `.support-pattern` cover bg image): white 32px
  "Need help? Call our award-winning support team 24/7: +65 1234-6868" +
  Live Chat.
- Stats CTA (white): "Proudly Hosting Over 800,000 Websites Since 2000"
  (number `span` blue `#1c66de`) + Get Started.
- Footer: Products (Shared hosting, WordPress hosting, VPS hosting,
  Dedicated hosting, Reseller hosting, Hosting features), Programs
  (WordPress, Affiliates, Marketing services, WordPress guide,
  Testimonials, Awards & Reviews), Company (About, Careers, Contact,
  Terms of service, Privacy policy, Blog) — links `#707070`, hover blue;
  widget titles 22px `#303030`. Subscribe Newsletter: blurb + pill input
  (50px, radius 30px, bg `#e8f1f8`) + blue subscribe button (hover
  `#303030`). Social circles 40px round: fb `#4b62b3`, twitter
  `#03baeb`, google `#cb242e`, instagram `#057ad7`, youtube `#e20000`,
  hover `#1c66de`. Bottom bar: "Copyright © <year> All rights reserved |
  This template is made with by Colorlib" + "Payments We Accept" +
  payment icons `#707070`.

## Design tokens (from preview style.css)

- Brand blue `#1c66de` — header/nav/hero bg, `.hami-btn` bg, price h2,
  links, hover states; `#303030` dark text; `#707070` / `#b7b7b7` muted;
  `#ebebeb` borders; `#e8f1f8` grey-blue sections + newsletter input;
  white `#fff`.
- Social circle brand colors: `#4b62b3` / `#03baeb` / `#cb242e` /
  `#057ad7` / `#e20000` (hover `#1c66de`).
- Font: `"Archivo", sans-serif` (Google Fonts) — headings + body.
- Buttons `.hami-btn`: radius 100px (pill), min-width 150px, height
  50px, line-height 50px, 16px, weight 600, padding 0 40px, capitalize;
  solid = blue bg / white text; hover = white bg + blue text + shadow
  `0 2px 40px 8px rgba(15,15,15,.15)`; `.btn-2` = white bg / blue text,
  hover inverse; `.live--chat--btn` = 1px white border, transparent,
  white text, line-height 48px.
- Domain form: radius 35px pill; input 60px; shadow
  `0 5px 15px -2px rgba(0,0,0,.15)`; button hover `#303030` bg.
- Price cards: radius 3px, border `#ebebeb`, shadow
  `0 8px 8px -1px rgba(0,0,0,.15)`, padding 40px, hover/active `#e8f1f8`.
- Hero: solid `#1c66de`, 800px, h2 82px white, h3 36px (old price
  strikethrough), p 20px; white cloud-wave svg bottom.
- Section headings: h2 48px, capitalize, line-height 1.2; p 18px.
- Sticky nav: transparent over blue hero → white bg with `#303030`
  links on scroll.

## Implementation outline (section order 1:1)

1. **Top utility bar** — blue `#1c66de`, 50px: left phone + email with
   icons, right Login/Register + language dropdown (decorative).
2. **Nav** — blue, 100px: wordmark "Upnode" left (white, bold), centered
   links Home (active underline)/Hosting ▾/Pages ▾/About/Blog/Contact,
   right Live Chat (outline pill) + Get Start Now! (white pill). Sticky:
   white bg + dark links on scroll. Mobile hamburger.
3. **Hero slider** — solid blue 800px; h2 82px, strikethrough price
   line, paragraph, two pill CTAs; right-side illustration (picsum or
   lucide server-stack composition); bottom white cloud-wave SVG curve.
   Two crossfading slides (or one static slide).
4. **Domain search** — white; h2 + sub-line; pill form (input + .com
   select + Search) with client-side validation; extension price list.
5. **Features grid** — `#e8f1f8`; h2 "Overall Features"; 6 icon cards;
   bottom wave pattern (optional decorative SVG).
6. **Pricing** — white; h2 "Choose Your Web Hosting Plan"; 3 cards
   (Standard/Advanced/Unlimited) with Save-% tags, "Best Plan" ribbon on
   Advanced, blue check lists, Get Started + underlined view-all link.
7. **Discount CTA** — `#e8f1f8`; headline + 6 FREE mini-items + Get
   Started.
8. **Support band** — blue pattern bg (CSS gradient + repeating pattern
   OK); white 32px headline with phone number + Live Chat outline.
9. **Stats CTA** — white; "Proudly Hosting Over 800,000 Websites Since
   2000" with blue number + Get Started.
10. **Footer** — white; Products / Programs / Company link columns +
    Subscribe Newsletter widget (pill input `#e8f1f8` + blue button,
    validation + success state) + brand-colored social circles; bottom
    bar: copyright + paraphrased ColorLib credit + Payments We Accept
    icons.
11. **Composition** — skip link, `<main>`, banner/contentinfo landmarks,
    document title "Upnode — Web Hosting Template".

## Fidelity notes

- Match the live DOM: blue utility bar + nav + hero, white cloud-wave
  transition, white domain section, `#e8f1f8` features/discount sections,
  white pricing, support band, white footer. Section order 1:1.
- `#1c66de` brand blue, `#e8f1f8` grey-blue, `#303030` dark text,
  `#707070` muted; Archivo font; pill buttons (radius 100px).
- Never use "Hami" as the brand; brand is "Upnode".
- Placeholders: `picsum.photos/seed/upnode-<n>/<w>/<h>` (deterministic).
- Icons: lucide-react (Phone, Mail, Globe, MessageCircle, Search, Check,
  Server, Shield, Lock, Headphones, Cloud, RefreshCw, Database, CreditCard,
  Languages); brand socials via inline SVG BrandIcon in packages/ui.
- Forms (domain search + newsletter): client-side only; language
  dropdown + login/register decorative; hero slider decorative (anchors).
- Sticky nav scroll behavior (white bg, dark links) is part of fidelity.

## Commit + PR conventions

- Prep commit (this): `docs: prep Upnode (ColorLib Hami) spec + research`.
- Implementation branch: `feat/template-upnode`; PR title: `feat: Upnode —
web hosting website template (ColorLib Hami)`.
- PR body: source URL, preview URL (200), tokens, differences (rename,
  placeholders, decorative slider/language, single-page anchors, font
  via Google Fonts), TEMPLATES.md two-copy note (lines 408 / 3056).
- After merge: surge URL `https://free-react-templates-upnode.surge.sh`,
  TEMPLATES.md `[x]` on ALL TWO copies, `npm run readme:status`.
