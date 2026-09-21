# FitNova — Design Notes & Task Outline

**Source:** ColorLib "Ahana" — https://colorlib.com/wp/template/ahana/
**Preview:** https://preview.colorlib.com/theme/ahana/
**Category:** Health Fitness / Yoga Studio
**New name:** fitnova (apps/fitnova, @free-react-templates/fitnova)

## Section Order (top → bottom)

1. Header (top bar + nav)
2. Hero (gradient carousel)
3. About (2-col: image + features)
4. Classes (carousel cards)
5. Trainers (carousel cards)
6. Reviews (bg image + testimonial carousel)
7. Events (video + event list)
8. Pricing (4 cards on warm bg)
9. Sign Up (map + form)
10. Gallery (Instagram carousel)
11. Footer (4-col + social + copyright)

## Design Token Summary

- Brand coral: #f65d5d
- Brand peach: #fdb07d
- Gradient: linear-gradient(145deg, #f65d5d, #fdb07d)
- Headings font: Playfair Display (serif)
- Body font: Open Sans (sans-serif)
- Buttons: pill (radius 50px), gradient bg, white text, uppercase
- Pricing bg: #f9f2f0 (warm pink-beige)
- Text: #333 primary, #666 secondary, #999 muted

## Fidelity Notes per Section

### Header
- Two-part: white top bar (info row) + transparent nav over hero
- Top bar: address, phone, hours, language selector (Material Icons)
- Nav: logo left, links center, search + hamburger right
- On mobile: top bar hidden, nav collapses to hamburger

### Hero
- Full-width, coral→peach diagonal gradient
- Owl Carousel slider with yoga images
- Large semi-transparent "YOGA" watermark text
- Social links column on left edge (vertical)
- Dot navigation on right edge
- Scroll-down arrow at bottom center

### About
- Section title: logo icon + "Welcome to FitNova" (Playfair Display)
- 2-column: image left, 3 feature items right
- Each feature: circular icon + h4 heading + paragraph
- "Explore More" pill button below features

### Classes
- Section title: "Popular Classes"
- Owl Carousel of class cards
- Each card: image top, title + schedule meta (days/time) + description
- Bottom: circular trainer avatar + name/role + "Book Now" button

### Trainers
- Section title: "Our Trainer Yoga"
- Owl Carousel of trainer cards
- Each: circular portrait + name + "Yoga Trainer" + cert description
- Social icon row (FB, IG, TW, LI)

### Reviews
- Full-width background image (yoga scene)
- Coral overlay (#f65d5d partial opacity)
- Carousel: circular avatar + quote + name + title (all white text)

### Events
- Section title: "Upcoming Events"
- 2-column: video thumbnail + play button left, event list right
- Each event: thumbnail + title + metadata (person, date, location)
- Material Icons for metadata glyphs

### Pricing
- Background: #f9f2f0 (warm pink-beige)
- Section title: "Pricing Plans"
- 4 cards: Beginner ($59), Intermediate ($99), Advanced ($159), Professional ($199)
- Each: plan name + price + "Per month" + 4 feature items + "Get Started"
- "Get Started" uses line-gradient variant (gradient border, white interior)

### Sign Up
- 2-column: Google Map iframe left, form right
- Form: First Name, Last Name, Email, Phone, Message textarea
- "Get Started" gradient pill button
- Heading: "Sign Up for Our Classes"

### Gallery
- Owl Carousel of Instagram-style images
- Hover overlay: Instagram icon + "fitnova" handle
- At least 6 images

### Footer
- 4-column layout on white bg
- Col 1: Logo + description + contact (phone, email, address)
- Col 2: "Company" link list
- Col 3: "About Us" link list
- Col 4: "Open time" hours + email subscribe form
- Bottom row: social icons left, copyright right
- Must include Component Dock attribution link

## Implementation Tasks

- [ ] Scaffold apps/fitnova from an existing simple app template
- [ ] Set up index.html with Google Fonts (Playfair Display + Open Sans)
- [ ] Create index.css with Tailwind @theme tokens matching design tokens
- [ ] Implement Header component (top bar + nav, responsive)
- [ ] Implement Hero component (gradient bg, carousel, social links, dots)
- [ ] Implement About component (2-col, features, CTA button)
- [ ] Implement Classes component (carousel cards)
- [ ] Implement Trainers component (carousel cards)
- [ ] Implement Reviews component (bg image, testimonial carousel)
- [ ] Implement Events component (video + event list)
- [ ] Implement Pricing component (4 cards, warm bg)
- [ ] Implement SignUp component (map + form)
- [ ] Implement Gallery component (image carousel with hover)
- [ ] Implement Footer component (4-col + social + copyright + CD link)
- [ ] Compose all sections in App.tsx
- [ ] Write tests for each component (100% coverage)
- [ ] Run verify-app gate
- [ ] Visual diff against preview
