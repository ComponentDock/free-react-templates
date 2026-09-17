# AgencyHub — Implementation Tasks & Design Notes

Source: ColorLib "Creative Agency" — https://colorlib.com/wp/template/creative-agency/
Preview: https://preview.colorlib.com/theme/creative-agency/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/free-creative-agency-website-template.jpg
New name: AgencyHub
App folder: `apps/agencyhub`

## Section Order (matches original 1:1)

1. **Navbar** — Transparent over hero; logo text "AgencyHub"; nav links: Home, About, Portfolio, Services, Pricing, Team, Blog, Contact; hamburger menu on mobile; becomes solid white on scroll (sticky)
2. **Hero** — Full-width background image (`picsum.photos/seed/agencyhub-hero/1920/1080`), dark overlay 80% (`#1C1D21`), white headline "We Are Creative Agency" (54px Montserrat 700), white subtext paragraph, two CTA buttons: white "Get Started!" + primary blue "Learn more"
3. **About** — White bg, heading "Welcome to Website" with 4px blue (`#6195FF`) underline, 3-column grid: icon (lucide: Settings, Wand2, Smartphone) + title + description + "Read more" link. Cards: Fully Customizable, Awesome Features, Fully Responsive
4. **Portfolio** — Grey bg (`#FAFAFA`, borders `#EEE`), heading "Featured Works", 3-column grid of 6 work items. Each: image (`picsum.photos/seed/agencyhub-work-<n>/600/400`), dark overlay, category label, title, external link icon + search icon. Hover reveals overlay content
5. **Services** — White bg, heading "What we offer", 3x2 grid: icon (lucide: Diamond, Rocket, Settings, Diamond, Pencil, Flask) + title + description. Six services: App Development, Graphic Design, Creative Idea, Marketing, Awesome Support, Brand Design
6. **Why Choose Us** — Grey bg (`#FAFAFA`), 2-column: left = heading "Why Choose Us" + paragraph + 4 checkmark items (lucide: CheckCircle2); right = image carousel (use simple fade/slider, no owl-carousel dependency)
7. **Numbers/Stats** — Parallax bg image (`picsum.photos/seed/agencyhub-stats/1920/600`), dark overlay 80%, 4-column: icon (lucide: Users, Trophy, Coffee, FileText) + count + label. Stats: 451 Happy clients, 12 Awards won, 154K Cups of Coffee, 45 Projects completed. Use animated counter on scroll-into-view
8. **Pricing** — White bg, heading "Pricing Table", 3 cards: Basic ($9/mo), Silver ($19/mo), Gold ($39/mo). Each: plan name, price with "/ month" duration, 3 feature list items, "Purchase now" outline button (blue border, transparent bg)
9. **Testimonials** — Parallax bg image (`picsum.photos/seed/agencyhub-testimonial/1920/600`), dark overlay 80%, carousel of 2 testimonials: avatar image (`picsum.photos/seed/agencyhub-person-<n>/100/100`), name, role, quote. White text
10. **Team** — White bg, heading "Our Team", 3-column: team member image (`picsum.photos/seed/agencyhub-team-<n>/400/400`), dark overlay on hover showing social icons (Facebook, Twitter, Instagram), name + role below image. Social icons use lucide
11. **Blog** — Grey bg (`#FAFAFA`), heading "Recents news", 3-column blog cards: image (`picsum.photos/seed/agencyhub-blog-<n>/600/400`), meta bar (author, date, comments count with icons), title, excerpt, "Read more" link
12. **Contact** — White bg, heading "Get in touch", 3 info cards (Phone 512-421-3940, Email email@support.com, Address 1739 Bubby Drive) with icons; contact form below (centered, 2-column offset): Name, Email, Subject inputs + Message textarea + "Send message" primary button
13. **Footer** — Dark bg (`#1C1D21`), centered: logo, social follow links (Facebook, Twitter, Instagram, LinkedIn, YouTube — lucide icons), copyright text, **Component Dock link**

## Design Fidelity Notes

- **Hero background**: Use a `picsum.photos` placeholder. The original uses a dark cityscape/agency photo. Apply `bg-cover bg-center bg-fixed` for parallax, plus `#1C1D21` overlay at 80% opacity via an absolute-positioned div
- **Brand color `#6195FF`**: This blue is used everywhere — links, primary buttons, title underlines, selection highlight, input focus border. Set it as `--color-primary` in Tailwind `@theme`
- **Title underlines**: Every section heading has a `::after` pseudo-element: 4px height, 40px width, `#6195FF` background, 20px margin-top. Centered for text-center sections
- **Button styles**: Three variants. Main: `#6195FF` bg, white text, 3px radius. White: white bg, dark text. Outline: transparent bg, `#6195FF` border (2px) + text. All have `transition: opacity 0.2s`
- **Grey sections**: `#FAFAFA` background with `1px solid #EEE` top and bottom borders. Used on Portfolio, Why Choose Us, Blog
- **Parallax sections**: Hero, Numbers, Testimonials all use `background-attachment: fixed` with dark overlay. In React, use `bg-fixed` Tailwind class
- **Portfolio hover overlay**: Each work item has an image + dark overlay div that reveals category + title + link icons on hover (CSS transition)
- **Team hover overlay**: Similar to portfolio — social icons appear over the team member image on hover
- **Font stack**: Load Montserrat (400, 700) and Varela Round (400) from Google Fonts via `<link>` in `index.html`
- **No carousel library**: Replace owl-carousel with a simple CSS/JS carousel or just show the first testimonial/image in a static layout. Simplicity > fidelity for interactive widgets
- **Spacing**: Sections use 120px top/bottom padding (`.md-padding`), numbers section uses 60px (`.sm-padding`)
- **Responsive**: 3 columns → 2 columns → 1 column on mobile. Stats: 4 columns → 2 columns → 1 column

## Implementation Steps

1. Copy simplest existing app as template scaffold
2. Rename package to `@free-react-templates/agencyhub`
3. Set up `public/CNAME` → `agencyhub.free.componentdock.com`
4. Add Montserrat + Varela Round font links to `index.html`
5. Configure Tailwind theme tokens (primary `#6195FF`, body `#868F9B`, headings `#10161A`, dark `#1C1D21`, grey `#FAFAFA`) in `index.css`
6. Build Navbar component (transparent → solid on scroll, hamburger on mobile)
7. Build Hero component (bg image, overlay, headline, subtext, 2 CTA buttons)
8. Build About component (3 feature cards with icons)
9. Build Portfolio component (6-item grid with hover overlay)
10. Build Services component (6 services, 3x2 grid)
11. Build WhyChooseUs component (2-column: checklist + image)
12. Build Numbers component (4 stat counters with icons)
13. Build Pricing component (3 pricing cards)
14. Build Testimonials component (testimonial card(s))
15. Build Team component (3 members with social hover overlay)
16. Build Blog component (3 blog cards with meta)
17. Build Contact component (3 info cards + form)
18. Build Footer component (logo, social icons, Component Dock link, copyright)
19. Compose all sections in App.tsx
20. Write tests (100% coverage)
21. Run verify-app.sh
22. Commit + PR + merge + deploy
