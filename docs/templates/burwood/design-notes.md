# Burwood — Design Notes

Source: ColorLib Buri (https://preview.colorlib.com/theme/buri/)

## Implementation tasks

1. Scaffold app folder `apps/burwood` (copy simplest existing app, rename package)
2. Register workspace, run `npm install` at root
3. Implement Navbar component
4. Implement Banner/Hero section
5. Implement About section
6. Implement Food Menu section (6 items grid)
7. Implement Intro Video section (dark bg, animated play button)
8. Implement Testimonials section (carousel)
9. Implement Contact section (info card)
10. Implement Footer (4 columns, social icons, Component Dock link)
11. Write tests (TDD, 100% coverage)
12. Verify: typecheck + lint + test:coverage + build
13. Update TEMPLATES.md

## Section-by-section fidelity notes

### Navbar

- Logo left, 4 nav links right (Home, About, Menu, Contact)
- Bootstrap-style responsive collapse with hamburger
- Sticky on scroll (original uses `main_menu home_menu` classes)

### Banner / Hero

- Full-width section, 1080px height (650px on mobile)
- Background image with dark overlay
- Centered text: small tagline (letter-spaced uppercase), large heading (Playfair Display serif)
- CTA button: black bg, white text, padding 23px 60px

### About

- Two-column: left image, right text card
- Card: white bg, padding 70px, box-shadow `0px 20px 40px 0px rgba(221,221,211,0.3)`
- Text: small subtitle "about us", large heading (Playfair Display), paragraph, CTA button

### Food Menu

- Section subtitle "Popular Menu", heading "Delicious Food Menu" (Playfair Display)
- 2x3 grid of menu items
- Each item: image (rounded corners), dish name (Playfair), description, price badge

### Intro Video

- Full-width dark background section
- Centered white text
- Circular play icon: 80x80px, tan (#d6ad86) bg, 50% border-radius, pulsing animation
- Border: 1px solid #f3e6da

### Testimonials

- Subtitle "Testimonials", heading "What they said"
- Owl-carousel style slider with review cards
- Each card: circular avatar, name, 5-star rating, quote text

### Contact

- Left-side card with contact info
- Sections: address, hours ("WE ARE OPEN"), reservation (phone + email)
- Heading: "Contact Us" (Playfair Display)

### Footer

- Dark bg: #1c1a18
- 4-column layout: logo+contact, Quick links, Newsletter, About text
- Social icons: Facebook, Instagram
- Copyright bar with Component Dock link
