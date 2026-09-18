# Stratagem (ColorLib Conbusi) — Tasks & Design Notes

> Recreation of ColorLib "Conbusi"
> (https://colorlib.com/wp/template/conbusi/) under the NEW name
> **Stratagem** (a scheme or plan of action — consulting fitting), per the
> monorepo naming mandate (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Conbusi" — business consulting landing template.
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/conbusi/
  (HTTP 200, ~12 KB HTML + css/style.css ~25 KB).
- **Visual design (screenshot `conbusi-free-template.jpg` + preview DOM):**
  White body with dark navy blue (#001D38) overlays on parallax sections.
  Blue accent (#5DB2FF) for buttons and links. Full-height hero slider with
  dark overlay and centered white headline. Pill/rounded buttons (30px
  border-radius). Poppins typography (300–700). Clean professional consulting
  aesthetic with illustration images.

## Structure (1:1, section order)

1. **Header/Navbar** — Two-tier. Top bar (desktop only, hidden mobile):
     left: "Welcome to Stratagem consulting service"; right: email
     (info@docmed.com → placeholder), phone (1601-609 6780 → placeholder),
     social icons (LinkedIn/Facebook/Google+). Main nav: logo image
     (replaced with text "Stratagem"), links: Home (active), Pages
     (dropdown: Case Details/About/Elements), Services, Case Study, Blog
     (dropdown: Blog/Single-Blog), Contact. "Get a Quote" outlined pill
     button (col-3). Sticky header: transparent → white bg on scroll.
     Mobile: hamburger menu.

2. **Hero Slider** — Owl Carousel, 4 slides alternating 2 background
     images. Dark navy overlay (#001D38, 0.4 opacity). Height 750px
     (100vh mobile). Centered: H3 "Big Opportunity for your Business"
     (white, 60px, 300 weight, letter-spacing 2px, line-height 1.2)
     + "Our Services" pill button (gradient blue #0181f5→#5DB2FF,
     30px border-radius).

3. **Services** — White bg. Section title "What we Do?" (46px, 300 wt,
     #001D38). 6 service cards (col-xl-4 col-md-6 col-lg-4):
     Marketing & SEO Agency, Startup Agency, Corporate Business,
     Finance Solution, Food & Restaurant, Travel Agency. Each: SVG
     icon (service_icon div) + title (h3) + blurb (p) + "Learn More"
     link (blue, .learn_more class).

4. **About** — White bg. Split (col-6 each): left: "Why our Consulting?"
     (h3) + description paragraph + "About Us" pill button (boxed-btn3).
     Right: illustration image (img/service/about.png).

5. **Counters** — Parallax background (counter_bg_1) with dark overlay
     (0.6, bg #001D38 via .overlay_03). 4 counters (col-xl-3 each):
     Team Members (200+), Business Success (97%), Happy Client (5628),
     Business Done (5637). Each: SVG icon (counter_icon div) + number
     (46px, 300 weight, white) + suffix (+, %) + label (p, white 80%).
     Animated via jquery.counterup.

6. **Case Study** — White bg, 100px top padding. Section title "Case Study"
     (46px, 300 weight). Owl Carousel of 4 cards: thumbnail image
     (case_thumb div) + category tag (span "Finance Solution") + title
     (h3 link "Consumer Products Consulting"). "More Cases" outline pill
     button (boxed-btn3-line).

7. **FAQ Accordion** — White bg. Split (col-6 each): left: illustration
     image (img/banner/accordion.png). Right: "Frequently ask" heading
     (h3) + Bootstrap accordion (3 card items): "Adieus who direct esteem
     It esteems luckily?", "Who direct esteem It esteems?",
     "Duis consectetur feugiat auctor?" — each with card-body answer.

8. **Testimonials** — Dark overlay section (bg #001D38, 0.7 opacity via
     .overlay class). Owl Carousel of 3 slides: quote SVG icon (quote.svg)
     + quote paragraph (centered) + circular avatar (testmonial_author
     thumb img) + name (h3) + role (span). All slides: Robert Thomson,
     Business Owner — differentiate with unique names in React version.

9. **Team** — White bg, border-bottom separator. Section title "Expert
     Team" (46px, 300 weight). 3 cards (col-xl-4): team_thumb (10px
     border-radius, overflow hidden, scale on hover) + team_info
     (text-center): name (h3, 24px, 300 wt, #2C2C2C) + role (p, 13px)
     + social links (Facebook/Twitter/Instagram). Members: Milani Mou
     (Photographer), Jasmine Pinky (Photographer), Piya Zosoldos
     (Photographer).

10. **Contact Form** — White bg. Split: left (col-xl-5): "Get Free Quote"
     heading (h3) + form: name input + email input + message textarea
     + "Send" pill button (boxed-btn3). Right (col-xl-6 offset-xl-1):
     contact illustration image.

11. **Info CTA** — Dark overlay section (bg #001D38, 0.7 opacity).
     Centered: "For Any Information Call Us" (h3, white) + blurb
     (p, white) + phone number pill button (boxed-btn3, "+10 673 763 6786").

12. **Footer** — White bg. 4-column layout (col-xl-3/2/2/4):
     - Col 1: logo image + contact info (email/phone/address) + social
       icons (Facebook/Twitter/Instagram).
     - Col 2: "Services" links: Marketing & SEO, Startup, Finance
       solution, Food, Travel.
     - Col 3: "Useful Links": About, Blog, Contact, Appointment.
     - Col 4: "Subscribe" heading + newsletter form (email input +
       Subscribe button) + blurb.
     Copyright bar: "Made with Component Dock" link.

## Implementation tasks (implementer stream)

- [ ] Scaffold `apps/stratagem` (copy simplest existing app; rename package
      to `@free-react-templates/stratagem`; `injectUiSource()` in vite.config.ts)
- [ ] `npm install` at root; verify `grep -c "free-react-templates/stratagem"`
      package-lock.json before committing
- [ ] `src/index.css`: `@theme` with `--color-brand: #5DB2FF` blue scale,
      `--color-navy: #001D38`, Poppins font link in index.html
- [ ] Header (two-tier: top bar with contact info + main nav with logo,
      6 links, 2 dropdowns, "Get a Quote" CTA, sticky on scroll)
- [ ] Hero Slider (Owl-style carousel, 4 slides, dark overlay, centered
      headline + pill CTA)
- [ ] Services (6 icon cards in 3×2 grid with "Learn More" links)
- [ ] About (split: text + illustration + pill button)
- [ ] Counters (4 stats on parallax background, animated on scroll)
- [ ] Case Study (carousel of 4 cards with "More Cases" button)
- [ ] FAQ Accordion (split: illustration + 3 accordion items)
- [ ] Testimonials (carousel with quote, avatar, name, role — 3 unique)
- [ ] Team (3 member cards with social links, 10px rounded images)
- [ ] Contact Form (name/email/message + illustration)
- [ ] Info CTA (dark overlay with phone number button)
- [ ] Footer (4-column layout + copyright bar with Component Dock link)
- [ ] Tests per section; 100% coverage via `npm run verify:app stratagem`
- [ ] Commit `feat: Stratagem — consulting template (ColorLib Conbusi)`,
      PR → merge immediately, deploy to Surge, update TEMPLATES.md + README
