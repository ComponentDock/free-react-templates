# Blockpulse — Implementation Tasks

Source: ColorLib "Cryptian" (https://colorlib.com/wp/template/cryptian/)
Preview: https://preview.colorlib.com/theme/cryptian/
New name: Blockpulse

## Task List

### 1. Project Setup
- [ ] Create `apps/blockpulse/` by copying simplest existing app
- [ ] Rename package to `@free-react-templates/blockpulse`
- [ ] Create `public/CNAME` with `blockpulse.free.componentdock.com`
- [ ] Set `"homepage"` in package.json to `https://blockpulse.free.componentdock.com`
- [ ] Add Google Fonts link for Montserrat (300–800) in `index.html`
- [ ] Configure `vite.config.ts` with `injectUiSource()`

### 2. Design Tokens (index.css)
- [ ] Set `--color-body-bg: #062489` in `@theme`
- [ ] Set `--color-text-light: #cbe5ff`
- [ ] Set `--color-accent-pink: #FB9A8C`
- [ ] Set gradient colors: `#fe998b`, `#fa768d`, `#f78ca0`
- [ ] Set font family to Montserrat via Tailwind theme

### 3. Section Components (build order)
- [ ] `Navbar.tsx` — absolute navbar, logo left, centered nav links, login button right, mobile hamburger, scroll-aware background
- [ ] `Hero.tsx` — particles.js animated bg, headline + subtitle, 2 CTA buttons, illustration right
- [ ] `FeaturedIn.tsx` — logo carousel of partner logos
- [ ] `About.tsx` — 2-column: illustration left, heading + description + CTA button right
- [ ] `FeatureHighlights.tsx` — 3-column feature cards (icon + title + description)
- [ ] `IcoStats.tsx` — dark bg, "ICO Live Now" headline, stats grid, countdown timer, progress bar, "Buy Tokens" button
- [ ] `Whitepaper.tsx` — "Download Documentation" heading, 5 language flag buttons
- [ ] `TokenDistribution.tsx` — dark bg with image, pie chart + legend (4 allocations)
- [ ] `TokenSales.tsx` — "Token Sales Contribution" heading, legend + pie chart
- [ ] `Roadmap.tsx` — timeline carousel with dates, milestones, icons
- [ ] `Team.tsx` — dark bg, "Core Team" (4 members) + "Advisory Board" (4 members), each with photo/name/role/social icons
- [ ] `MobileApp.tsx` — 2-column: text + app store buttons left, phone mockup right
- [ ] `Faq.tsx` — tabbed accordion (4 categories), carousel of FAQ items per tab
- [ ] `Community.tsx` — social icon grid (6 platforms)
- [ ] `Footer.tsx` — dark bg, logo + about + links columns + newsletter form + Component Dock link

### 4. App Composition
- [ ] `App.tsx` — compose all sections in order
- [ ] `main.tsx` — entry point (excluded from coverage)

### 5. Testing (TDD)
- [ ] Write tests for each component (100% coverage)
- [ ] Navbar: logo, nav links, login button, mobile toggle, scroll behavior
- [ ] Hero: headline, subtitle, CTA buttons rendered
- [ ] FeaturedIn: logos rendered in carousel
- [ ] About: illustration, heading, text, CTA rendered
- [ ] FeatureHighlights: 3 cards rendered
- [ ] IcoStats: headline, stats, countdown, progress bar, button rendered
- [ ] Whitepaper: 5 language buttons rendered
- [ ] TokenDistribution: chart image + legend items rendered
- [ ] TokenSales: legend items rendered
- [ ] Roadmap: timeline items rendered in carousel
- [ ] Team: 8 member cards rendered (4 core + 4 advisory)
- [ ] MobileApp: heading, text, buttons, image rendered
- [ ] Faq: tabs switch, FAQ items rendered per tab
- [ ] Community: social icons rendered
- [ ] Footer: links, form, Component Dock link present

### 6. Verification
- [ ] `npm run verify:app blockpulse` passes
- [ ] No ColorLib references in app code
- [ ] All placeholder images use picsum.photos
- [ ] Responsive: mobile hamburger, stacked layouts
- [ ] Deploy URL: https://blockpulse.free.componentdock.com

## Design Notes

### Structure Order
1. Navbar (absolute, logo left, nav center, login right)
2. Hero (particles.js bg + headline + CTAs + illustration)
3. Featured In (logo carousel)
4. About (illustration + text + CTA)
5. Feature Highlights (3 icon cards)
6. ICO Live Stats (stats, countdown, progress bar)
7. Whitepaper / Documentation (5 language buttons)
8. Token Distribution (pie chart + legend)
9. Token Sales Contribution (legend + pie chart)
10. Development Roadmap (timeline carousel)
11. Team (Core Team + Advisory Board, 8 members total)
12. Mobile App (text + buttons + phone mockup)
13. FAQ (tabbed, carousel per tab)
14. Community (social icon grid)
15. Footer (logo, about, links, newsletter, Component Dock)

### Fidelity Notes

- **Navbar**: Absolute/transparent over the hero. Logo on the left, nav links centered, "login" button on the right with gradient. On scroll, the navbar gets a solid `#000D47` background. Mobile: hamburger opens a slide-in menu.

- **Hero**: Uses particles.js for an animated dot/network background on the deep navy (`#062489`) page. Left side: headline + subtitle + two gradient CTA buttons. Right side: welcome illustration image.

- **Featured In**: Simple horizontal carousel of partner/featured-in logos. Use grayscale or low-opacity logos on dark background.

- **About**: 2-column layout. Left: illustration/image. Right: small heading ("We are featured in" — likely a label), main heading, description paragraph, and a gradient "Join us on Telegraph" button with send icon.

- **Feature Highlights**: 3 equal-width cards. Each has an icon image at top, title, and description text. Cards have a subtle hover effect.

- **ICO Live Stats**: Dark navy background section. "ICO Live Now" headline (with "ICO" in primary/accent color). Grid with: token sold count, ETH/BTC/LTH collected, countdown timer (days/hours/minutes/seconds). Progress bar showing Soft Cap → Max Cap with current amount. "Buy Tokens" gradient button.

- **Whitepaper**: "Download Documentation" heading with 5 language buttons (English, Spanish, Russian, Arabic, Portuguese). Each button has a flag icon and language name.

- **Token Distribution**: Dark background with decorative background image. Pie chart image on left, legend list on right (15% Build Up Team, 50% ICO Investors, 25% Branding & Marketing, 10% Bounty).

- **Token Sales**: Similar layout but reversed — legend on left, pie chart on right (40% HR & Development, 30% Branding, 20% Possible Buyout, 10% Legal Advisory).

- **Roadmap**: Carousel/timeline with alternating left/right items. Each has a circular icon image, date, title, and description.

- **Team**: Dark background. "Core Team" section with 4 member cards (photo, name, role, LinkedIn/Dribbble/Twitter social icons). "Advisory Board" section below with 4 more members.

- **Mobile App**: 2-column. Left: heading "Track from Anywhere", description, Google Play and Apple App Store buttons. Right: phone mockup image.

- **FAQ**: Tabbed navigation (General Questions, ICO, Token, Cryptocurrency). Each tab shows a carousel of FAQ cards with title, description, and "readmore" link.

- **Community**: Grid of social media icon circles (Google+, LinkedIn, Dribbble, GitHub, Behance, YouTube, Twitter, Flickr). Various sizes.

- **Footer**: Dark background. 4-column layout: logo + about text + copyright, nav links column 1, nav links column 2, newsletter subscribe form. Bottom bar with Component Dock link.
