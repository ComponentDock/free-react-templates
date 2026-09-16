# Template: Sagepoint (Business Consulting Template)

## Purpose

Sagepoint is a single-page business consulting template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Buson" website template design, built under a DIFFERENT name
(Sagepoint — sage + point, suggesting wise direction) per the monorepo naming
mandate, with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Buson" — business consulting company landing template
  (Bootstrap 4 + jQuery, source: https://colorlib.com/wp/template/buson/).
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/buson/`
  (HTTP 200, ~28 KB HTML fetched; `assets/css/style.css` ~65 KB parsed for
  tokens; sections fully catalogued from DOM).
- **Screenshot analyzed:** `buson-free-template.jpg` — light overall theme,
  dark navy header top bar, white sticky header with coral/salmon brand
  accents, large hero with background image + dark overlay, three team
  profile cards on a light blue-gray background, services section with
  icons, completed cases carousel, testimonial with 5-star rating, recent
  news blog cards, callback contact form, dark footer with 4 columns.
- **Design tokens (from `assets/css/style.css`):**
  - **Font family:** `"Poppins", sans-serif` (Google Fonts, weights 100-900)
  - **Primary brand color:** `#ff656a` (coral/salmon) — buttons, links,
    hover states, borders, accent underlines, scroll-to-top, star ratings
  - **Secondary dark:** `#002d5b` (navy blue) — header top bar background,
    hero heading color, slider arrow hover
  - **Heading color:** `#0b1c39` (dark navy)
  - **Body text:** `#506172` (muted blue-gray)
  - **Team profile bg:** `#f6f9fe` (very light blue)
  - **Button radius:** `5px` border-radius on `.btn`, `.border-btn`,
    `.send-btn`
  - **Button style:** solid `#ff656a`, uppercase, 14px, font-weight 500,
    letter-spacing 1px, 27px 44px padding; hover animates via scaleX pseudo
  - **Border button:** 2px solid `#ff656a`, transparent background,
    5px radius, hover fills coral
  - **Team profile accent:** 7px solid bottom border on image hover
  - **Submenu top border:** 5px solid `#ff656a`
  - **Logo color:** `#dca73a` (gold) mentioned in preloader `.pere-text`
- **Section order (1:1, from the DOM of the home page):**
  1. **Header** — top bar (`header-top top-bg`): navy `#002d5b` background,
     left: address + email with icons, right: social icons (LinkedIn, Twitter,
     Facebook, Google+); bottom bar (`header-bottom header-sticky`): logo
     image (left, 2-col), centered nav (Home, About, Services, Cases, Blog
     dropdown, Pages dropdown), right "Contact Now" coral `.btn` CTA button.
     Sticky with `box-shadow: 0 10px 15px rgba(25,25,25,0.1)`.
  2. **Hero slider** (`slider-area > slider-active`): full-width background
     image (`h1_hero.jpg`) with `min-height: 830px`, `background-size: cover`;
     left-aligned `.hero-caption` (6-col): small p "Welcome to Buson" in
     coral `#ff656a` uppercase 18px font-weight 300; h1 "We help you to
     grow your business" in navy `#002d5b` uppercase 70px font-weight 900
     line-height 1.2; `.hero-btn` "Learn More" solid coral `#ff656a` button
     with 30px 56px padding. Slider has dot navigation. At least 2 slides
     (identical content in the source).
  3. **Team Profile** (`.team-profile.team-padding`, bg `#f6f9fe`): 3-column
     row; first two cards are `.single-profile-front` with a team photo
     (`team_1.jpg`, `team_2.jpg`, `overflow:hidden`, 7px border-bottom on
     hover → coral, scale 1.1) + `.profile-caption` (h4 "Business Planning" /
     "Financial Projections" in `#191d34` 25px weight 600, lorem ipsum p).
     Third card is `.single-profile-back-last`: 4px solid coral border, white
     bg, h2 "What we do for you", description text, "View profile »" link.
  4. **We Trusted** (`.we-trusted-area.trusted-padding`, top padding 200px):
     7/5 split — left: large trusted image (`wetrusted.jpg`); right:
     `.trusted-caption`: h2 "We are more trusted then 5000 clients", lorem p,
     `.trusted-btn` "Learn More" coral button.
  5. **Our Services** (`.services-area.section-padding2`, top 200px): centered
     section title h2 "Our Services"; 3-column cards (`.single-services
     text-center mb-30`) each with icon span (`.flaticon-checklist`,
     `.flaticon-audit`, `.flaticon-checklist-1`), h4 title ("Strategic
     Planning", "Trades & stocks", "Audit & Assurance"), lorem p. Below: row
     with `.border-btn` "More Services" outline button.
  6. **Completed Cases** (`.completed-cases.section-padding3`, bg `#f6f9fe`):
     4/8 split; left: `.single-cases-info` h3 "Completed Cases", lorem p,
     `.border-btn.border-btn2` "See more" outline button; right: Owl Carousel
     (`.completed-active.owl-carousel`) of case cards (`.single-cases-img`)
     each with case image + overlay caption (h4 "Marketing Strategy", p
     description, span tag "Advisory"). Carousel with prev/next arrows.
  7. **Testimonials** (`.testimonial-area.fix`, white bg): centered layout
     (9-col); testimonial icon image (animated with `.ani-btn`), quote text
     in italic centered, 5-star rating (`.fas.fa-star` × 5 in coral),
     author "Clifford Frazier" with "- Colorlib Themes" suffix. Carousel with
     at least 2 identical slides.
  8. **Our Recent News** (`.recent-area.section-paddingt`): centered section
     title h2 "Our Recent News"; 3-column blog cards (`.single-recent-cap`):
     each with image (`rcent_1/2/3.png`), category tag (`<span>` e.g.
     "Business planing", "Audit"), h4 post title ("Amazing Places To Visit In
     Summer"), date p ("Nov 30, 2020").
  9. **Request for Call Back** (`.request-back-area.section-padding30`): 4/7
     split; left: `.request-content` h3 "Request for Call Back" + lorem p;
     right: `.form-wrapper` contact form with 2-col first row (Name input,
     Phone input), 8-col select dropdown "Services" with 3 options, 4-col
     "Send" button (`.send-btn`, coral, 5px radius, full-width).
  10. **Footer** (`.footer-area.footer-padding`): 4-column layout — left:
      footer logo image + short description paragraph + 4 social icons
      (Facebook, Twitter, LinkedIn, Pinterest); col 2: "Company" links
      (Home, About Us, Services, Cases, Contact Us); col 3: "Services" links
      (Commercial Cleaning, Office Cleaning, etc.); col 4: "Get in Touch"
      info (phone, email, address). Footer bottom bar
      (`.footer-bottom-area.footer-bg`): copyright text centered. Replace
      Colorlib attribution with "Made with Component Dock" and link to
      `https://www.componentdock.com/`.

## Verification checklist

- [ ] Header: sticky nav with coral "Contact Now" CTA, dropdown menus with
  coral top border
- [ ] Hero: full-bleed background image, navy uppercase heading, coral
  eyebrow text, solid coral CTA
- [ ] Team Profile: 3-column grid on light blue bg, image hover → coral
  bottom border + scale, third card is a bordered CTA card
- [ ] We Trusted: split layout image/text, coral button
- [ ] Services: 3 icon cards centered, section title, outline button below
- [ ] Completed Cases: left text column + right carousel with hover overlay
  captions
- [ ] Testimonials: centered quote, 5-star rating, author attribution
- [ ] Recent News: 3 blog cards with category tag, title, date
- [ ] Callback Form: name + phone inputs, service dropdown, coral send
  button
- [ ] Footer: 4-column with logo/description/social, company links, service
  links, contact info; bottom copyright bar replaced with Component Dock
- [ ] No ColorLib references in app code (only in spec + TEMPLATES.md)
- [ ] Every footer link goes to `https://www.componentdock.com/`
- [ ] `public/CNAME` contains `sagepoint.free.componentdock.com`
- [ ] `homepage` in `package.json` is `https://sagepoint.free.componentdock.com`
