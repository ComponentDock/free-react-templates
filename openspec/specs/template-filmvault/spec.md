# Template: FilmVault (Photography Portfolio)

## Purpose

Recreation of ColorLib "Rettro" photography template.

- **Source:** https://colorlib.com/wp/template/rettro/
- **Preview:** https://preview.colorlib.com/theme/rettro/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **New name:** `filmvault` (does not reuse ColorLib source name)
- **Package:** `@free-react-templates/filmvault`
- **Deploy target:** `https://filmvault.free.componentdock.com`

## Design Tokens (from live preview CSS)

| Token | Value |
|---|---|
| Body font | `"Montserrat", sans-serif` |
| Heading font | `"Playfair Display", serif` |
| Heading color | `#071112` (near-black) |
| Body text color | `#10285d` (dark navy) |
| Link color | `#635c5c` |
| Body font size | `16px` |
| Button style | `.boxed-btn`: white bg, `#071112` text/border, 1px solid, letter-spacing 3px, uppercase, Playfair Display |
| Button hover | bg `#071112`, text `#fff` |
| Section padding | `40px` (section-padding40, section-padding2) |
| Testimonial bg | Dark image overlay (`section_bg03.png`) |

### Visual Description (from live preview)

Elegant, editorial photography portfolio with a dark, sophisticated aesthetic. Playfair Display serif headings give a luxurious feel. Montserrat body text is clean and modern. Hero is a full-width slider with large "Photography" headline and handwritten signature overlay. Gallery uses asymmetric 2-column layout with captions and hover overlay (+ icon). A full-width "About Me" section with background image and dark overlay. Services are 4 minimal icon cards. Testimonials sit on a dark textured background with quote marks. Pricing has 3 clean cards (Silver/Gold/Platinum) with camera icons. Instagram carousel at the bottom. Footer is centered with logo, nav, and social links.

## Sections (order from live preview)

1. **Header/Navbar** — Logo left, nav links (Home, About, Portfolio, Pricing, Blog dropdown, Contact), sticky, hamburger menu on mobile
2. **Hero Slider** — Full-width image slider with 3 slides, each showing "Photography" headline + handwritten signature + bottom caption (number + "Travel pro" + description), dot navigation with thumbnail images
3. **Gallery** — 2-column asymmetric grid (5/7, 6/6 split), 4 gallery items with background images, figcaptions (Travelshots, Experimental, Father's Day, Curious Cats), hover overlay with + icon, "More Portfolio" button
4. **About Me** — Full-width section with dark background image overlay, heading "I'm Ready to Exceed Expectations", description paragraph, "About Me" border button
5. **Services/Categories** — Centered heading "Life is about Creating Experiences", 4 icon cards in a row (col-lg-3), each with SVG icon + title
6. **Testimonials** — Dark textured background, centered, carousel of 2 testimonials, each with quote mark icon, quote text, founder image + name + role
7. **Pricing** — Centered heading "Choose a plan", 3 pricing cards (Silver $50, Gold $100 — "Most Popular" badge, Platinum $50), each with camera icon, plan name, price, feature list, "Get Started" border button
8. **Instagram Feed** — Full-width carousel of 5-6 Instagram photos with hover overlay showing Instagram icon
9. **Footer** — Centered: logo, nav links (same as header), social icons (Twitter, Facebook, Pinterest), copyright with Component Dock link

## Gherkin Requirements

### Scenario: Hero slider displays with navigation
```
Given I visit the FilmVault homepage
Then I see a full-width hero slider
And the headline "Photography" is displayed
And a handwritten signature image appears below the headline
And a bottom caption shows a slide number, title, and description
And dot navigation with thumbnail images is visible
And the slider transitions between 3 slides
```

### Scenario: Gallery shows asymmetric image grid
```
Given I scroll to the Gallery section
Then I see a heading "With my camera, I capture daily life"
And 4 gallery items are displayed in a 2-column asymmetric layout
And each item has a background image with a caption below
And hovering over an item shows a dark overlay with a + icon
And a "More Portfolio" button is centered below
```

### Scenario: About Me section displays with dark overlay
```
Given I scroll to the About Me section
Then I see a full-width section with a dark background image
And the heading reads "I'm Ready to Exceed Expectations"
And a description paragraph is displayed
And an "About Me" border button is present
```

### Scenario: Services section shows 4 categories
```
Given I scroll to the Services section
Then I see the heading "Life is about Creating Experiences"
And 4 service cards are displayed in a single row
And each card has an icon and a title
```

### Scenario: Testimonials carousel works
```
Given I scroll to the Testimonials section
Then I see a dark textured background
And 2 testimonial slides are available
And each slide has a quote mark icon, quote text, founder image, name, and role
And dot navigation allows switching between testimonials
```

### Scenario: Pricing section shows 3 plans
```
Given I scroll to the Pricing section
Then I see the heading "Choose a plan"
And 3 pricing cards are displayed: Silver ($50), Gold ($100), Platinum ($50)
And the Gold card has a "Most Popular" badge
And each card has a camera icon, plan name, price, feature list, and "Get Started" button
```

### Scenario: Instagram feed shows photo carousel
```
Given I scroll to the Instagram section
Then I see a horizontal carousel of 5-6 photos
And hovering over a photo shows an Instagram icon overlay
```

### Scenario: Footer contains navigation and social links
```
Given I scroll to the Footer
Then I see a centered logo
And navigation links (Home, About, Portfolio, Pricing, Blog, Contact) are displayed
And social icons (Twitter, Facebook, Pinterest) are present
And a copyright line with "Made with ❤️ by Component Dock" is shown
```

### Scenario: Navbar is sticky on scroll
```
Given I scroll down the page
Then the navbar remains fixed at the top of the viewport
And navigation links remain clickable
```

## Verification Checklist

- [ ] All 9 sections present in correct order
- [ ] Hero: slider with 3 slides, headline, signature, captions, dot nav
- [ ] Gallery: asymmetric grid, 4 items with captions, hover overlay, "More Portfolio" button
- [ ] About Me: full-width dark bg, heading, description, border button
- [ ] Services: 4 icon cards in a row
- [ ] Testimonials: dark bg, 2 slides with quotes, founder info, dot nav
- [ ] Pricing: 3 cards, correct prices, "Most Popular" badge on Gold, feature lists
- [ ] Instagram: horizontal carousel with hover overlay
- [ ] Footer: centered logo, nav, social icons, copyright with Component Dock link
- [ ] Fonts: Playfair Display for headings, Montserrat for body
- [ ] Button style: border buttons with letter-spacing, uppercase
- [ ] Navbar sticky on scroll
- [ ] Responsive layout (mobile, tablet, desktop)
- [ ] No ColorLib references in app code
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] Placeholder images use `picsum.photos/seed/filmvault-*`
- [ ] 100% test coverage

## Replication Notes

- **Preview source:** https://preview.colorlib.com/theme/rettro/ (fetched successfully)
- **CSS source:** https://preview.colorlib.com/theme/rettro/assets/css/style.css
- **Fonts:** Playfair Display (headings, serif) + Montserrat (body, sans-serif) — loaded via Google Fonts
- **Icons:** Original uses Themify Icons + Font Awesome; recreate with lucide-react
- **Slider:** Original uses Owl Carousel; replace with CSS-based slider or framer-motion
- **Gallery hover:** Original uses hover-direction-snake JS; replace with CSS hover transitions
- **Testimonial carousel:** Original uses Owl Carousel with dot navigation
- **Instagram carousel:** Original uses Owl Carousel
- **Animations:** WOW.js fade-in; use CSS animations
- **No assets copied:** all images replaced with picsum.photos placeholders
