# Seedling — Task Outline & Design Notes

## Source mapping
- **ColorLib slug:** kindergarten
- **Preview URL:** https://preview.colorlib.com/theme/kindergarten/
- **New name:** seedling
- **App path:** apps/seedling/

## Section implementation order

### 1. Navbar component
- Top info bar: pink `#ED078B` background, white text, address + phone left, social icons right
- Bottom bar: logo left, nav links center (Home, Class, About, Blog with dropdown, Contact), "Enroll Now" teal button right
- Sticky on scroll with white background + box shadow
- Mobile hamburger menu

### 2. Hero component
- Full-width background image (use `picsum.photos/seed/seedling-hero/1920/720`)
- White rounded card overlay: `border-radius: 90px` desktop, `19px` mobile
- "Quality Learning" h1 (80px desktop, Fredoka One, indigo `#423F8D`)
- "For Every Child" subtitle (44px, Fredoka One, yellow `#FBCE0F`)
- "Explore Classes" pill button (pink `#ED078B`, Concert One)

### 3. About component
- "Welcome to our Seedling" centered section title
- Left column: 3 feature items (icon SVG + title + description)
  - Inter School Sports (blue `#1F97D4` title)
  - Friendly Environment (yellow `#FBCE0F` title)
  - Multimedia Class (teal `#12D9DF` title)
- Right column: about image (`picsum.photos/seed/seedling-about/600/500`)

### 4. ClassOffer component
- Background image section (use a subtle pattern or solid color `#f7f7f7`)
- "Classes We Offer" heading
- 4 class cards (carousel or grid on mobile):
  - Each: image, "Admission Closed" badge on some, title, description
  - Footer row: Age Group (pink), Classes count (yellow), Class Price (blue)
- "More Classes" border button (pink border, Fredoka One)

### 5. DateEvents component
- Background image section
- Countdown timer: 4 blocks (Days, Hours, Minutes, Seconds)
- "Drawing Event" heading, date span, description
- "View Event" pink button

### 6. Team component
- "Expert Teachers" centered heading
- 4 team member cards:
  - Circular or rounded image
  - Hover overlay: social icons (Facebook, Twitter, LinkedIn, Instagram)
  - Name + role below
- Carousel on desktop, stack on mobile

### 7. Testimonials component
- Slider/carousel with testimonial quotes
- Quote icon, testimonial text
- Founder image + name + role below each quote

### 8. InstagramFeed component
- Horizontal row of 6 image thumbnails
- Instagram icon overlay on hover
- Full-width, no container padding

### 9. Footer component
- Dark indigo background `#4255A4`
- Left column: logo + description + social icons (Twitter, Facebook, Pinterest, LinkedIn)
- Quick Links column: Classes, Join with us, About, Blog, Events
- About Us column: Our Team, Privacy Policy, Testimonial, Programming, User Stories
- Copyright bar: "Made with ❤ by Component Dock" (replacing Colorlib attribution)

## Fidelity notes
- All rounded shapes: hero card 90px radius, buttons 30px, team images 50px
- Color palette is playful/fun: pink + yellow + teal + blue accents on indigo headings
- 3 Google Fonts: Fredoka One (headings), Concert One (nav/buttons), DM Sans (body)
- Class cards have a colored footer row with distinct accent colors per stat
- Team overlay uses pink `rgba(237,7,139,0.2)` tint on hover
- Background images on class offer and events sections — use placeholder gradients or solid colors
