# TimeCraft — Implementation Outline

Source: ColorLib Watch (https://preview.colorlib.com/theme/watch/)
New name: timecraft
Category: Smartwatch / Tech Product

## Component structure order

1. `Navbar.tsx` — Sticky header with logo, desktop nav links
2. `Hero.tsx` — Fullscreen background image, headline, subtitle, CTA button
3. `VideoSection.tsx` — Two-column: text content + play button overlay
4. `TopFeatures.tsx` — Centered product image with 4 flanking feature items
5. `About.tsx` — Two-column: image left, text + CTA right
6. `Features.tsx` — 6 feature cards in 3-col grid
7. `Products.tsx` — Dark bg section with 4 product cards
8. `Reviews.tsx` — 6 review cards in 3-col grid with star ratings
9. `Faq.tsx` — Accordion with 4 expandable items
10. `Footer.tsx` — 3-col: About Us, Newsletter, Follow Us

## Shared sub-components

- `FeatureCard.tsx` — Icon + title + description (used in Features and TopFeatures)
- `StarRating.tsx` — 5-star rating display (reusable from ShoFlow or standalone)
- `ReviewCard.tsx` — Reviewer name + text + star rating
- `ProductCard.tsx` — Product image + name + price + CTA button
- `FaqItem.tsx` — Accordion item with question + expandable answer

## Design token notes (from CSS extraction)

- Brand palette: #235ee7 (blue) primary, #4ae7fa (cyan) gradient end
- Gradient: linear-gradient(0deg, #235ee7 0%, #4ae7fa 100%)
- Font: "Poppins" (Google Fonts)
- Button: gradient bg, 25px border-radius (pill), uppercase, white text
- Card radius: 10px
- Dark section bg: #04091e
- Light card desc bg: #f9f9ff
- Section vertical padding: 120px
- Icon fonts: Linearicons (lnr-*), Font Awesome (fa-*)
- Star rating: Font Awesome filled/outline stars

## Section-by-section fidelity notes

### Navbar
- Logo: image-based (img/logo.png), replace with text logo
- Nav links: Home, About, Service, Unique Feature, Review, Faq
- Bootstrap-based sticky behavior, replicate with Tailwind sticky

### Hero/Banner
- Fullscreen bg image with centered content
- Subtitle: "Now you can feel the Heat" (uppercase, letter-spacing)
- Headline: "Smart New Future" (72px, white, bold)
- CTA: gradient pill button "Buy Now"
- Replace bg image with picsum.photos

### VideoSection
- Two-col Bootstrap row
- Left: h6 subtitle, h1 headline, 2 paragraphs, CTA "Get Started now"
- Right: dark overlay with play button (magnific popup trigger)
- Replace with simple image + play icon overlay

### TopFeatures
- Title: "Top Courses That are open for Students" (centered)
- Center: smartwatch product image
- Left side: 2 feature items (lnr-rocket + "High Performance", lnr-cog + "High Performance")
- Right side: 2 feature items (lnr-apartment + "High Performance", lnr-phone + "High Performance")
- Use lucide-react icons instead of Linearicons

### About
- Full-width container-fluid
- Left col: image (img/about-img.jpg)
- Right col: headline "Globally Connected by Large Network", subtitle, 2 paragraphs, CTA "get details"

### Features
- Section header: "Some Features that Made us Unique"
- 6 cards in lg:4col md:6col grid
- Each: icon (lnr-user, lnr-license, lnr-phone, lnr-rocket, lnr-diamond, lnr-bubble) + title + description
- Replace icons with lucide-react equivalents

### Products
- Dark bg (#04091e), white section title
- 4 product cards in lg:3col md:6col grid
- Each: image with padding, name, price in blue (#235ee7), "Pre Order" dark button
- Cards have rounded corners (10px), white bg, hover effects

### Reviews
- Section header: "Some Features that Made us Unique" (same heading in original)
- 6 review cards in lg:4col md:6col grid
- Each: reviewer name (h4), review text, 5-star rating (filled/outline)
- Reviewers: Cody Hines (3 stars), Chad Herrera (2 stars), Andre Gonzalez (2 stars), Jon Banks (3 stars), Landon Houston (4 stars), Nelle Wade (4 stars)

### Faq
- Section header: "Frequently Asked Questions"
- Accordion with 4 items using Bootstrap collapse (replicate with state)
- Questions: "Are your Templates responsive?", "Does it have all the plugin as mentioned?", "Can i use the these theme for my client?", "Are your Templates responsive?"
- First item expanded by default

### Footer
- 3-col layout (Bootstrap grid)
- Col 1: "About Us" - description text
- Col 2: "Newsletter" - email input + submit button
- Col 3: "Follow Us" - social icons (Facebook, Twitter, Dribbble, Behance)
- Attribution: "Component Dock" (replaces Colorlib credit)
