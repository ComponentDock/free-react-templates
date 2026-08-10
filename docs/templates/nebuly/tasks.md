# Nebuly (ColorLib Cloudtemplate) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-nebuly`.

## Source mapping

- **ColorLib item:** "Cloudtemplate" (TEMPLATES.md — TWO copies, lines 361,
  3051; mark ALL `[x]` when done).
- **Source URL:** https://colorlib.com/wp/template/cloudtemplate/
- **Preview URL:** https://preview.colorlib.com/theme/cloudtemplate/
  (HTTP 200, 42 KB DOM — live, analyzed 2026-08-10).
- **Category:** Bootstrap (216) — cloud-hosting / domain-services SaaS
  landing page.

## Reference research (done — do not redo)

### Screenshot (`cloudtemplate-free-template.jpg`, 1200×946; verified via vision)

Modern SaaS landing page. Royal-blue hero: transparent header over it (logo
"Cloud Template" with cloud icon + centered white links Home, Company,
Pricing, Leadership, Blog, Contact + green pill "Get started" right). Hero
left: flat vector illustration (two people at a desk facing each other, red
hair + green shirts, monitors, potted plant); hero right: small uppercase
white "CLOUD TEMPLATE" label, big bold white headline "Cloud, Management,
Template", lorem subtext, rectangular green "Get in touch" button. Below:
white strip of 5 grayscale logos (Microsoft/Android/Java/Google/Adobe feel),
then light-gray services section showing 3 cards (Cloud databases, Website
Hosting, File Storage) with green icons. High-contrast royal blue + lime
green + white; bold modern sans headlines.

### Live DOM (primary reference — matches the screenshot)

Section order (all confirmed in `preview.colorlib.com/theme/cloudtemplate/`):

1. `nav#ftco-navbar.ftco-navbar-light` — wordmark "Cloud Template" (use
   "Nebuly"), centered nav (Home, Company, Pricing, Leadership, Blog,
   Contact), right green CTA `nav-item.cta > a` (1px `#21bf73` border,
   padding .5rem 20px). `.scrolled` → white bg, dark links, cta filled
   `#3f52e3`.
2. `div.hero-wrap.js-fullheight` — `.overlay` bg `#3f52e3`; `.slider-text`
   750px tall; subheading uppercase letter-spacing 2px `rgba(255,255,255,.8)`;
   `h1` 60px/700 white "Cloud, Management, Template"; paragraph white .8 with
   green `#21bf73` number; "Get in touch" `a.btn.btn-secondary.px-4.py-3`
   (bg `#21bf73`, hover `#1da966`).
3. `section.ftco-section.ftco-partner` — 5 grayscale logos
   (`images/partner-1..5.png`), opacity .2 → 1 hover. Recreate as text
   wordmarks (Microsoft, Android, Java, Google, Adobe) — no asset copying.
4. `section.ftco-domain` — "Search Your Domain Name" + lorem subtext; TLD
   pills .com/.net/.biz/.co/.me; price rows .com $9.75, .net $9.50, .biz
   $8.95, .co $7.80, .me $7.95.
5. `section.ftco-section.services-section.bg-light` — "Cloud Services" + 6
   cards: Cloud databases, Website Hosting, File Storage, Forex Trading,
   File Backups, Remote Desktop (flaticon classes icon-cloud, icon-server,
   icon-customer-service, icon-life-insurance, icon-cloud-computing,
   icon-settings → lucide: Cloud, Server, Headset, Shield, Database, Settings).
6. `section.ftco-section` — "What Our Software Can Do For You" + 5 border
   cards (`media.block-6.services.border.p-3.mb-3`): Resposive Design,
   Andriod Apps Development, iOs Apps Development, UX/UI Design, Print Ready
   Design.
7. `section.ftco-section.ftco-counter.img` — bg `#3f52e3`; "We Always Try To
   Understand Users Expectation"; counters: Download, Awards Won,
   Contributors, Satisfied Customers (number 40px/700 white, label
   rgba(255,255,255,.7)).
8. `section.ftco-section.ftco-no-pt.ftco-no-pb.bg-light` — "Have any
   question about us?" + lorem + "Get in Touch" button.
9. `section.ftco-section.ftco-no-pb.bg-light.ftco-faqs` — `h2` "Frequently
   Asks Questions"; 4 accordion items (How to Make an Account? / How to
   manage your Dashboard? / How to grow your investments funds? / What are
   those requirements for businesses?); active toggle bg `#3f52e3` white
   text (pill radius 40px, weight 600); `.img-faqs` image panel 700px,
   radius 4px, shadow `17px 25px 56px -22px rgba(0,0,0,.38)`.
10. `section.ftco-section.bg-light` — "Our Best Pricing" + 4 `block-7`
    plans: Basic Plan $0/mo ("100% free. Forever"), Advance $19, Expert $49,
    Pro $99; each: 3 rows (Bandwidth, Storage, Overages) + "Choose Plan".
11. `section.ftco-section.testimony-section` — "What Users Saying" +
    carousel; `.testimony-wrap` with `user-img` + green quote icon; author
    "Mark Web" + roles (Marketing Manager / Interface Designer).
12. `section.ftco-section.bg-light` — "Recent Blog" + 3 `.blog-entry` cards:
    meta (May 17, 2020 · Admin · 3), title link "Everthing You Need to Know
    About Cloud Template", image.
13. `footer.ftco-footer.ftco-bg-dark.ftco-section` — bg `#421b9b`; brand +
    blurb + social icons (green `#21bf73` hover); Useful Links (Company,
    Pricing, Leadership, Blog, Contact); Navigational (Join Us, Blog,
    Privacy & Policy, Terms & Condition); Office (203 Fake St. Mountain
    View, San Francisco, California, USA / +2 392 3929 210 /
    info@yourdomain.com); copyright bar (paraphrase Colorlib credit).

## Design tokens (from preview css/style.css)

- Brand indigo `#3f52e3` (hero overlay, counter band, links, primary btn,
  FAQ active, hover `#293ee0`).
- Accent green `#21bf73` (secondary btn, nav CTA, icons, quote, footer
  social hover; hover `#1da966`).
- Pink `#ff8ba7` (tertiary btn, owl-dot active).
- Footer `#421b9b`; section bg light `#f8f9fa`; grays `#6c757d` / `#495057`
  / `#72789a`; text dark `rgba(0,0,0,.8)`, white `rgba(255,255,255,.7/.8)`.
- Font: Work Sans (body 16px/1.8; headings h2 40px/700, h1 60px/700).
- Buttons: radius 5px, shadow `0 15px 30px -12px rgba(0,0,0,.2)`;
  primary indigo, secondary green; hero CTA padding 1rem 1.5rem; FAQ toggles
  pill radius 40px.
- Sections: padding 5em 0; hero 750px; container ~1140px.

## Implementation outline (section order 1:1)

1. **Navbar** — transparent over hero, white wordmark "Nebuly" + centered
   links (Home, Company, Pricing, Leadership, Blog, Contact), green pill
   "Get started" CTA; scrolled → light bg + indigo-filled CTA; mobile
   hamburger with aria-expanded.
2. **Hero** — `#3f52e3` overlay; left illustration (picsum photo in rounded
   panel, `picsum.photos/seed/nebuly-hero/700/600`), right: uppercase
   eyebrow, `h1` "Cloud, Management, Template", lorem + green number, green
   "Get in touch" `Button` (packages/ui).
3. **Partner strip** — 5 grayscale text wordmarks (opacity .2 → 1 hover).
4. **Domain search** — heading, subtext, input + TLD pills, price table
   (static rows); submit → validation + success message.
5. **Cloud services** — light-gray section, 6 icon cards (lucide icons,
   green).
6. **Feature row** — white section, 5 border cards with icons.
7. **Counter band** — `#3f52e3` bg, heading + 4 counters (static values OK;
   optional count-up on scroll).
8. **CTA strip** — light bg, "Have any question about us?" + green button.
9. **FAQ** — image panel (hidden on mobile) + 4-item accordion, one open at
   a time, first open by default, chevron rotation, brand indigo active.
10. **Pricing** — 4 `Card` plans with feature rows + "Choose Plan" buttons.
11. **Testimonials** — 3 quotes, prev/next controls, avatar + green quote.
12. **Blog** — 3 cards (image, meta row, title link).
13. **Footer** — `#421b9b`; 4 columns + copyright bar; newsletter NOT in the
    original (do not invent one); social icons inline SVG.

## Fidelity notes

- Match the live DOM exactly: section order 1:1, `#3f52e3` + `#21bf73`
  palette, Work Sans, pill nav CTA, green hero button.
- Never use "Cloudtemplate" as the brand; brand is "Nebuly".
- Placeholders: `picsum.photos/seed/nebuly-<n>/<w>/<h>` (hero 700×600,
  services icons via lucide, blog 800×500, FAQ panel 600×700).
- Icons: lucide-react (Cloud, Server, Headset, Shield, Database, Settings,
  Menu, X, ChevronDown, Quote, ThumbsUp, ArrowRight, social fallbacks).
- Domain form + everything client-side; links decorative.
- Footer contact data is placeholder text; paraphrase the "made with ♥"
  credit, drop Colorlib attribution.

## Commit + PR conventions

- Prep commit (this): `docs: prep Nebuly (ColorLib Cloudtemplate) spec +
research`.
- Implementation branch: `feat/template-nebuly`; PR title: `feat: Nebuly —
cloud services template (ColorLib Cloudtemplate)`.
- PR body: source URL, preview URL (200), tokens, differences (rename,
  placeholders, single-page anchors), TEMPLATES.md two-copy note (lines 361
  / 3051).
- After merge: surge URL `https://free-react-templates-nebuly.surge.sh`,
  TEMPLATES.md `[x]` on BOTH copies, `npm run readme:status`.
