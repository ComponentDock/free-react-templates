# Amplify (ColorLib "Uza") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-amplify` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Uza" — digital marketing agency template
  (source: https://colorlib.com/wp/template/uza/). Listed in TEMPLATES.md
  line 525 (Bootstrap section); dup rows at lines 1216 (Business) and
  1396 (Consulting) — same source, ONE implementation (line 525 is the
  claim row).
- **Preview URL:** https://preview.colorlib.com/theme/uza/ (title "Uza -
  Free Bootstrap 4 Template by Colorlib"). Fetched: `/tmp/uza.html`
  (39 KB), `/tmp/uza-style.css` (63 KB), screenshot
  `/tmp/uza-shot.png` (from the AVIF `uza-free-template.jpg`, viewed in
  browser). Preview DOM and screenshot agree — white + tech-blue
  `#1583e9`, pale-blue `#e7f2fd` curve shapes, pill buttons, blob
  service icons, carousels everywhere.
- **Demo brand in the preview is "Uza"** → rename to **Amplify**
  (amplify your brand — digital-marketing fit; text logo "Amplify."
  styled dark blue + accent dot, never the copied `img/core-img/logo.png`).
- **Visual design:** flat, light, corporate-approachable agency landing
  page. Signature elements: pill buttons (50px radius; white/blue text
  variants, solid `#1583e9` `btn-2`), the 145×110px `#e7f2fd` blob icon
  plates (`border-radius: 80px 200px 200px 362px`) under the three
  service columns, pale-blue decorative curve SVGs behind the hero and
  at section edges (curve-1/2/3/4.png), the hero carousel with floating
  device mockups, white blog cards overlapping background photos, the
  newsletter band framed by 1px `#e7f2fd` border lines.
- **Font:** `"Aileron", sans-serif` (self-hosted in the original — NOT
  on Google Fonts). Substitute: **Poppins** (300/400/600) or Montserrat
  via Google Fonts `<link>` in `index.html`; document the deviation.
- **Brand colors:** accent `#1583e9` (logo, "greater" span, btn-2, links,
  call-now text, hover), deep `#3851bc` (sparing), tint `#e7f2fd`
  (icon plates, border lines), text `#303030` (headings/icons), `#707070`
  (body), `#a6a6a6` (muted). Hover shadow on blue buttons:
  `0 6px 50px 8px rgba(21,131,233,0.15)`.
- **Structure (1:1 from the preview DOM):**
  1. Header `header.header-area` → `nav.classy-nav-container` — text logo
     left; links Home (active) · Pages (dropdown) · Portfolio (dropdown)
     · About (dropdown) · Blog · Contact — RECREATE FLAT as Home · About
     · Services · Portfolio · Blog · Contact (scroll anchors; dropdowns
     simplified away); right: `Get A Quote` (`a.btn.uza-btn` white pill,
     blue text, `href="#"` — plain link, NO modal), `Login / Register`
     link, search icon (opens search modal) · hamburger on mobile.
  2. Welcome `section.welcome-area` — `.welcome-slides.owl-carousel`,
     3 `single-welcome-slide`: `background-curve` img; left `.welcome-
text`: `h2` "Uza makes your <br> biz <span>greater</span>" (span
     blue) → "Amplify makes your biz greater", `h5` "We love to create
     "cool" things on Digital Platforms", `a.btn.uza-btn.btn-2` "Start
     Exploring"; right `.welcome-thumbnail` device mockup (1.png laptop,
     2.png VR headset, 3.png phone — same text, different image per
     slide). Carousel prev/next or autoplay.
  3. About `section.uza-about-us-area` — left `.about-us-thumbnail`
     (bg-img/2.jpg + circular `.uza-video-area` play button → YouTube
     link); right `.about-us-content`: `h2` "We're a Agency Team &
     Digital Marketing", 2 paragraphs, `a.btn.uza-btn.btn-2.mt-4` "Start
     Exploring"; `.about-bg-pattern` curve behind.
  4. Services `section.uza-services-area.section-padding-80-0` —
     `.section-heading.text-center` `h2` "Our Services"; 3
     `col-12.col-lg-4 .single-service-area` (centered): `.service-icon`
     (145×110px, `#e7f2fd`, radius `80px 200px 200px 362px`, icon 42px
     `#303030`) + title + lorem: Business Strategy (`icon_cone_alt` →
     lucide `Pyramid`) · Market Analytics (`icon_piechart` →
     `PieChart`) · Marketing Social (`icon_easel` → `Presentation`).
  5. Portfolio `section.uza-portfolio-area.section-padding-80` (3%
     side padding) — heading "Our Portfolio" + `p` "We stay on top of
     our industry by being experts in yours."; `.portfolio-sildes.owl-
carousel` 6 `single-portfolio-slide`: img (bg-img/3..8.jpg) +
     `.overlay-effect` (h4 "Digital Marketing" + p) + `.view-more-btn`
     circular arrow; `.portfolio-bg-curve` bottom-right.
  6. Testimonials `section.clients-feedback-area.mt-80.section-padding-80`
     — `.testimonial-slides.owl-carousel`: `single-testimonial-slide`
     (flex): `.testimonial-thumbnail` (bg-img/7.jpg, 23.jpg) +
     `.testimonial-content`: `h4` quote (source says "Colorlib Ltd's
     ranking..." → PARAPHRASE, no ColorLib), `.ratings` 5 stars, `.author-
info` h5 "Darrell Goodman" + span "- CEO colorlib" → generic "CEO",
     `.quote-icon` img.
  7. CTA band `div.uza-cta-area.section-padding-0-80` (inside blog
     area, above heading) — left: `h2` "Interested in working with us?"
     - `h6` "Hit the button below or give us a call!"; right
       `.call-now-btn`: `<a href="#">Call us now: (+65) 1234 5678</a>`
       (30px `#1583e9`; keep TEXT-ONLY — no `tel:` literal in source).
  8. Blog `section.uza-blog-area` — heading "Our Latest Blogs" + `p`;
     3 `col-12.col-lg-4 .single-blog-post.bg-img` (bg-img/8,9,10.jpg):
     white `.post-content` (padding 40px): `.post-date` (`<span>23</span>`
     - "August, 2018"), `a.post-title` ("SEO: The Movie By Ignite
       Visibility" — paraphrase), lorem `p`, `a.read-more-btn` "Read More"
     - `arrow_carrot-2right`; `.blog-bg-curve` top-left.
  9. Newsletter `section.uza-newsletter-area` — `.border-line` (1px
     `#e7f2fd`) top; row: `.nl-content` `h2` "Subscribe to our
     Newsletter" + `p`; `.nl-form` `form` — email input (placeholder
     "Your Email") + `button` "Subscribe" (pill); `.border-line` bottom.
  10. Footer `footer.footer-area.section-padding-80-0` — 4
      `col-12.col-sm-6.col-lg-3 .single-footer-widget`: "Contact Us"
      (`h3` "(+65) 1234 5678" text, `p` "40 Baria Sreet 13/2 NY City, US"
      - "hello.colorlib@gmail.com" → GENERIC email, `p` "Mon - Fri: 9:00
      * 19:00" / "Closed on Weekends"); "Quick Link" (About Us · Blog ·
        Contact Us · Forum Registeration · Forum Sign In); "Resources"
        (Customer Support · Privacy · Media & Press · Our Team); brand
        column (blurb "Integer vehicula mauris libero, at molestie eros
        imperdiet sit amet." + `.footer-social-info`: fa-twitter ·
        fa-pinterest · fa-instagram · fa-youtube-play → inline SVG brand
        icons). Copyright: ColorLib credit → Component Dock link
        (mandatory).
- **Note:** inner pages exist in the original (about / services /
  portfolio / single-portfolio / blog / blog-details / contact) — NOT
  required; single index page only. Nav links become scroll anchors or
  dead anchors `#`. All carousels may render statically or with simple
  prev/next cycling (jsdom-safe). Logo is an image asset in the source —
  recreate as styled text. No `tel:` literals anywhere.

## Implementation tasks (for the implementer stream)

1. `git fetch origin`; confirm `openspec/specs/template-amplify/spec.md`
   exists on main; claim with a `[~]` mark on TEMPLATES.md line 525.
2. Scaffold `apps/amplify` from the simplest existing app (copy pattern,
   rename package to `@free-react-templates/amplify`); register the
   workspace (`npm install` at root so `package-lock.json` updates;
   verify with `grep -c "free-react-templates/amplify" package-lock.json`);
   keep `injectUiSource()` in `vite.config.ts`.
3. TDD: write tests first (Vitest + Testing Library, 100% coverage)
   mirroring the spec's Gherkin scenarios, then implement:
   - `src/components/Navbar.tsx` — text logo "Amplify." (accent dot),
     flat links (Home active · About · Services · Portfolio · Blog ·
     Contact, `#303030`, hover `#1583e9`), "Get A Quote" white pill
     (blue text, 50px radius), "Login / Register" link, search icon,
     hamburger + `aria-expanded` on mobile.
   - `src/components/Hero.tsx` — carousel of 3 slides: headline "Amplify
     makes your biz greater" (blue "greater"), sub-line, "Start
     Exploring" solid-blue pill, device-mockup image right; pale-blue
     curve SVG behind; prev/next or autoplay controls.
   - `src/components/About.tsx` — photo + circular play button, heading
     "We're a Agency Team & Digital Marketing", 2 paragraphs, "Start
     Exploring" pill.
   - `src/components/Services.tsx` — heading "Our Services" + 3 blob
     icon columns (lucide Pyramid / PieChart / Presentation).
   - `src/components/Portfolio.tsx` — heading + sub-line, image carousel
     with overlay (title + text) and circular arrow button.
   - `src/components/Testimonials.tsx` — photo + quote (no ColorLib) +
     5 stars + author name/role + quote icon.
   - `src/components/CtaBand.tsx` — "Interested in working with us?" +
     "Call us now: (+65) 1234 5678" (text only).
   - `src/components/Blog.tsx` — 3 cards (background photo + white
     content block: date, title, excerpt, Read More + arrow).
   - `src/components/Newsletter.tsx` — border lines top/bottom, heading,
     email input + Subscribe pill, success state on submit.
   - `src/components/Footer.tsx` — 4 columns + social icons (inline SVG
     brand marks) + copyright bar with Component Dock link.
   - `src/App.tsx` — compose in order; `src/index.css` — `@theme` tokens
     (brand `#1583e9`, deep `#3851bc`, tint `#e7f2fd`, text `#303030`,
     body `#707070`, muted `#a6a6a6`).
4. Images: `https://picsum.photos/seed/amplify-<n>/<w>/<h>` (3 hero
   device mockups, about photo, 6 portfolio photos, 2+ testimonial
   portraits, 3 blog photos); SCREEN hero seeds for laptop/VR/phone
   subjects before pinning (picsum seeds are arbitrary — use the
   seed-screening method from the replication skill); icons from
   `lucide-react` (search, arrow-right, arrow-up-right, play, star,
   menu, x); social brand icons as inline SVGs.
5. Verification: `npm run spec:validate`; `scripts/verify-app.sh amplify`
   (typecheck + lint + 100% coverage + build). Never touch shared files
   (package-lock only via `npm install`).
6. PR: branch `feat/template-amplify`, PR to main, description must state
   source (ColorLib "Uza"), preview URL, design tokens, what differs
   (rename, placeholder images, flat nav, font substitution); merge
   immediately (`gh pr merge --squash --delete-branch`).
7. After merge: pull --rebase; mark TEMPLATES.md line 525 `[x]`, add surge
   URL `https://amplify.free.componentdock.com` + homepage;
   `npm run readme:status`; push.
