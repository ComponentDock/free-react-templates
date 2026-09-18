# Highland — Implementation Notes

Source: ColorLib Montana → https://preview.colorlib.com/theme/montana/
New name: highland

## Implementation order

1. Scaffold app (copy simplest existing app, rename to @free-react-templates/highland)
2. index.css: add Tailwind theme tokens (brand-blue: #009DFF, heading: #1F1F1F, body: #4D4D4D, footer-bg: #000, muted: #919191)
3. Navbar component (transparent → sticky black, logo center, nav links left, social icons + Book A Room right)
4. HeroSlider component (4 slides, background images, centered white text, owl-carousel equivalent)
5. AboutSection component (2-column: text left with label/heading/paragraph/line-button, images right)
6. OffersSection component (3-column cards, each with image, heading, bullets, outlined book-now button)
7. VideoSection component (bg image + dark overlay, centered text, circular play button)
8. DiningSection component (reversed 2-column: images left, text right)
9. FeaturedRooms component (4 room cards with gradient overlays, price, room name, line-button)
10. ReservationBar component (bordered box, left text, right phone pill button)
11. InstagramFeed component (5-column image grid with hover overlay + icon)
12. Footer component (black bg, 4 columns, newsletter form, copyright bar with social icons)
13. App.tsx: compose all sections in order
14. Tests for each component (TDD)
15. Verify with scripts/verify-app.sh highland

## Design fidelity notes

### Navbar
- Initially transparent (absolute positioning, no background)
- Becomes sticky with solid black #000 background on scroll, reduced padding
- Logo centered (col-xl-2), nav links left (col-xl-5), book room right (col-xl-5)
- Nav links: Home (active), Rooms, About, Blog (dropdown with submenu), Pages (dropdown), Contact
- Right side: social icons in gray #A8A7A0, "Book A Room" blue button (#009DFF bg, white text, 12px 26px padding, transparent border → white border on hover)
- Hamburger menu on mobile (< 992px)

### Hero Slider
- Full viewport height (100vh)
- 4 slides (2 unique backgrounds cycling: banner.png, banner2.png)
- Centered white text: heading "Montana Resort" or "Life is Beautiful"
- Subtitle: "Unlock to enjoy the view of Martine"
- Background images: use picsum.photos/seed/highland-hero-1/1920/1080 and seed highland-hero-2
- Carousel auto-rotation

### About section
- White background
- 2-column layout: col-xl-5 text left, col-xl-7 images right
- Label "About Us" in blue #009DFF, 14px
- Heading "A Luxuries Hotel with Nature" in #1F1F1F, 46px
- Paragraph in #4D4D4D
- "Learn More" line-button (gray underline, turns blue on hover)
- Right side: two overlapping images (use picsum.photos/seed/highland-about-1/500/600 and highland-about-2/400/500)

### Offers section
- White background
- Centered label "Our Offers", heading "Ongoing Offers"
- 3-column grid (col-xl-4 each)
- Each card: image (picsum.photos/seed/highland-offer-N/400/300), heading "Up to 35% savings on Club rooms and Suites", bullet list (dots are gray circles, 8px, positioned absolute), "book now" outlined button (blue border, blue text, no radius)

### Video section
- Background image with dark overlay (rgba(31,31,31,0.5))
- Centered content: label "Montana Sea View" (white), heading "Relax and Enjoy your Vacation" (white)
- Circular play button: 60×60 white circle, blue #009DFF play icon inside, border-radius 50%
- Links to YouTube video (popup-video class)

### Dining section
- White background
- Reversed layout: images left (col-xl-7), text right (col-xl-5)
- Label "Delicious Food", heading "We Serve Fresh and Delicious Food"
- Paragraph + "Learn More" line-button
- Two overlapping images (use picsum.photos/seed/highland-dining-1/500/600 and highland-dining-2/400/500)

### Featured Rooms
- White background
- Centered label "Featured Rooms", heading "Choose a Better Room"
- 4 room cards in a row (full-width each, stacked vertically)
- Each card: full-width image with gradient overlay (white→black, 55% opacity), price "From $250/night" in white, room name in white (h3), "book now" line-button (white underline)
- Room names: Superior Room, Deluxe Room, Signature Room, Couple Room
- Images: picsum.photos/seed/highland-room-1/1200/600 through highland-room-4

### Reservation bar
- White background
- Centered bordered box (col-xl-10 offset, 1px solid #BABABA)
- Left (col-xl-6): "For Reservation 0r Query?" text, #1F1F1F, 30px
- Right (col-xl-6): phone number "+10 576 377 4789" in blue pill button (#009DFF bg, white text, border-radius 30px, padding 12px 53px)
- Pill button: hover → white bg, blue text, blue border

### Instagram feed
- 5 equal-width columns (20% each), float layout
- Each: full-width image (picsum.photos/seed/highland-insta-N/400/400)
- Dark overlay (rgba(0,0,0,0.2)) appears on hover, slides in from left
- Instagram icon centered in overlay (white, 34px)
- Image scales 1.1x on hover

### Footer
- Solid black #000 background
- Top area: padding-top 145px, padding-bottom 129px
- 4 columns:
  - Col 1: "address" heading, address text in #BABABA, "Get Direction" line-button
  - Col 2: "Reservation" heading, phone + email in #BABABA
  - Col 3: "Navigation" heading, links list (Home, Rooms, About, News) in #BABABA
  - Col 4: "Newsletter" heading, email input (white bg, 45px height), "Sign Up" button (#009DFF bg, white text, absolute positioned), "Subscribe newsletter to get updates" in #BABABA
- Bottom copyright bar:
  - Divider line (1px solid rgba(255,255,255,0.2))
  - Left: copyright text in #919191
  - Right: social icons (Facebook, Twitter, Instagram) in #A8A7A0
  - Replace ColorLib attribution with "Made with Component Dock" linking to https://www.componentdock.com/

## Placeholder images

Use picsum.photos with deterministic seeds:
- Hero slide 1: https://picsum.photos/seed/highland-hero-1/1920/1080
- Hero slide 2: https://picsum.photos/seed/highland-hero-2/1920/1080
- About 1: https://picsum.photos/seed/highland-about-1/500/600
- About 2: https://picsum.photos/seed/highland-about-2/400/500
- Offer 1: https://picsum.photos/seed/highland-offer-1/400/300
- Offer 2: https://picsum.photos/seed/highland-offer-2/400/300
- Offer 3: https://picsum.photos/seed/highland-offer-3/400/300
- Dining 1: https://picsum.photos/seed/highland-dining-1/500/600
- Dining 2: https://picsum.photos/seed/highland-dining-2/400/500
- Room 1: https://picsum.photos/seed/highland-room-1/1200/600
- Room 2: https://picsum.photos/seed/highland-room-2/1200/600
- Room 3: https://picsum.photos/seed/highland-room-3/1200/600
- Room 4: https://picsum.photos/seed/highland-room-4/1200/600
- Instagram 1–5: https://picsum.photos/seed/highland-insta-1/400/400 through highland-insta-5

## Icons

Use lucide-react:
- Facebook, Twitter, Instagram (social links)
- Phone, Mail, MapPin (footer contact)
- Play (video play button)
- ChevronLeft, ChevronRight (carousel nav)
- Menu (hamburger)
- Search (optional)
