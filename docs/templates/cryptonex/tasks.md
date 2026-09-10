# Cryptonex — Design Notes & Implementation Tasks

Source: ColorLib Coinbuzz
Preview: https://preview.colorlib.com/theme/coinbuzz/coinbuzz/index.html

## Section-by-section fidelity notes

### 1. Header Top Bar
- White background, border-bottom: 1px solid #eaeaea
- Left: contact-info with phone, fax, email, website (font-awesome icons)
- Right: circular social icons (Facebook, Twitter, Google+, LinkedIn, YouTube)
- Social icons have gray border, colored hover backgrounds (FB #4267b2, TW #1da1f2, etc.)
- Use `lucide-react` icons or simple SVGs for contact icons

### 2. Navigation Bar
- Dark background #242424
- Logo: left-aligned, styled with orange (#ff7700) arrow-shaped background
- Nav links: uppercase, Roboto font, light gray, white on hover
- Dropdown menus under Home and Pages
- Orange CTA button "GET A QUOTE?" — right-aligned, rounded, bold white text
- Mobile: hamburger icon, slide-down metisMenu-style accordion

### 3. Hero Slider
- Full-width owl-carousel style slider
- Background images with dark overlay
- Content: "We Are Everyone's Coinbuzz Agency" — "Everyone's" in lighter weight
- Description paragraph below
- "Read more" link/button
- Slider navigation: dots at bottom center
- Use placeholder images from picsum.photos with crypto-themed seeds

### 4. Featured Cards
- 3-column grid (col-lg-4)
- Each card: image (full-width within card), title as link, description paragraph
- Titles: "Personalized", "Behind The Screen", "Time Saver"
- Clean white background, subtle spacing

### 5. About / Bitcoin
- Split layout: text right (offset-lg-6), decorative image left
- Heading: "WHAT IS BITCOIN" (small caps/span) + "Buy And Sell Bitcoin" (large)
- Description paragraph
- "JOIN US NOW" CTA button — orange bg, uppercase
- Light gray background (#f4f4f4, `.bg-1` class)
- Decorative image uses coins/tech illustration (use placeholder)

### 6. Services
- Section title: "Why Choose Bitcoin" + decorative line image below
- Left column: "What We Offer" heading + 2 paragraphs + "Free Consultation" button
- Right columns: 4 service items in 2x2 grid
  - Safe And Secure (flaticon icon)
  - Instant Exchange (flaticon icon)
  - Secure Wallet (flaticon icon)
  - Experts Support (flaticon icon)
- Use `lucide-react` icons instead of flaticon

### 7. About Stats
- Title: "About Bitcoin" + decorative line
- Left: about image (lg+ only)
- Right: heading about token purchase + description
- 4 stat counters in a row:
  - 1454 Support Countries (with icon)
  - 759 Bank Support (with icon)
  - 1250 Bitcoin ATMs (with icon)
  - 2391 Producers Ready (with icon)
- Counter numbers are prominent, stats labels below

### 8. Testimonials
- Owl-carousel style slider
- Each slide: avatar image (left, col-lg-3) + content (right, col-lg-9)
- Content: name, star rating (4/5 stars), quote text, quote-right icon
- Use placeholder avatars from picsum.photos

### 9. Special CTA
- Dark background #242424
- Large heading text (inspirational quote about motivation)
- 2-column checklist with fa-check icons (4 items)
- Generous padding (120px top/bottom)

### 10. Market Resources
- Light gray bg (#f4f4f4)
- Title: "Our Market Resource" + decorative line
- Left: 2-column grid of crypto trading pairs (btc/usd, btc/eur, etc.) with prices
- Right: chart area (JS chart — use a placeholder or static SVG chart)
- Trading pair data is hardcoded in the original

### 11. Expert Team CTA
- Dark background with decorative team image (right side, lg+ only)
- Right-aligned text (col-lg-7 offset-lg-5)
- Heading: "We're a dynamic team of creatives..."
- Description paragraph
- "More About" link with angle-right icon

### 12. Contact
- Background image (tech/cityscape)
- Form card on right (offset-lg-7)
- Heading: "Request A Call Back"
- Fields: Name, Email, Phone, Subject (2x2 grid) + textarea + "Submit Now" button
- Button: white bg, orange text, uppercase, transparent hover
- Background image visible on left (lg+ only)

### 13. Team
- Title: "Our Experts Team" + decorative line
- 4 team member cards (col-lg-3 each)
- Each: photo, name, role, social icons (Facebook, Twitter, Google+, LinkedIn)
- Use placeholder photos from picsum.photos

### 14. Investments CTA
- Dark background with decorative image (right side, lg+)
- Heading: "Need to take care of your Currency Investments" (highlighted span)
- Description paragraph
- 2 buttons: "View Services" + "CONTACT US"
- "View Services" styled as outlined/link, "CONTACT US" as primary

### 15. Blog
- Title: "Latest Our News" + decorative line
- 3 blog cards (col-lg-4)
- Each: image, title link, meta (author, date, category), excerpt, "Read More" link
- "Read More" has angle-double-right icon

### 16. Footer
- Dark background
- 4 columns:
  1. Logo + description + newsletter form (email input + subscribe button)
  2. "Our Services" list with angle-double-right icons
  3. "Twitter Feeds" with tweet links
  4. "Newsletter" signup form
- Bottom bar: copyright + social icons

## Implementation tasks

1. [ ] Scaffold app: copy starter app, rename to `cryptonex`, update package name
2. [ ] Set up theme tokens in `index.css` (colors, fonts via @theme)
3. [ ] Build HeaderTopBar component (contact info, social icons)
4. [ ] Build Navbar component (logo, nav links, dropdowns, CTA button, mobile menu)
5. [ ] Build HeroSlider component (image slider, content overlay, dots)
6. [ ] Build FeaturedCards component (3-column grid)
7. [ ] Build AboutBitcoin component (split layout, heading, CTA)
8. [ ] Build Services component (title, "What We Offer" + 4 service items)
9. [ ] Build AboutStats component (heading, description, 4 counters)
10. [ ] Build Testimonials component (carousel with avatar + quote)
11. [ ] Build SpecialCTA component (dark bg, heading, checklist)
12. [ ] Build MarketResources component (trading pairs + chart)
13. [ ] Build ExpertTeamCTA component (dark bg, text, link)
14. [ ] Build Contact component (form + background image)
15. [ ] Build Team component (4 member cards)
16. [ ] Build InvestmentsCTA component (dark bg, heading, buttons)
17. [ ] Build Blog component (3 blog cards)
18. [ ] Build Footer component (4 columns, newsletter, copyright)
19. [ ] Compose App.tsx with all sections in order
20. [ ] Write tests (Vitest + RTL) for each component, ensure 100% coverage
21. [ ] Verify: typecheck + lint + test:coverage + build
