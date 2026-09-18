# Molten — Implementation Notes

**Source:** ColorLib Inds (https://colorlib.com/wp/template/inds/)
**Preview:** https://preview.colorlib.com/theme/inds/
**Category:** Construction / Industrial

## Section Order & Fidelity Notes

### 1. Navbar
- Top info bar: phone (+880166 253 232), email (info@domain.com), hours (Mon-Fri 9:00-19:00)
  - Hidden on mobile (`d-none d-lg-block`)
- Sticky nav: logo left, 5 links center (Home, About, Industries, Works, Blog with dropdown, Pages with dropdown), "Get A Quote" button right
- Nav sticks on scroll with dark background

### 2. Hero Slider
- Carousel (2 slides visible in DOM, both identical content)
- Dark navy overlay on background image
- Heading: "Industrial Solutions!" (h1, fadeInUp animation)
- Subtitle: lorem ipsum text
- CTA: "Our Services" button — navy bg, white text, `box-shadow: -8px 8px 0 #ca611b` (flips to positive on hover)
- Arrow button for slide navigation (orange circle)

### 3. Services
- 3 cards on #fafafa background, flexbox row
- Each card: icon image, h4 title, description paragraph, arrow-btn (orange circle with arrow icon)
- Cards: Automotive Manufacturing, Heavy Industry Market, Industry Analysis
- Hover: background transitions to white

### 4. About / Safe Industrial Solutions
- Two-column layout
- Left: h2 heading, three paragraphs of different lengths, "Our Services" button
- Right: image + overlapping stat badges (01-04) with titles
- Section padding: `section-padd-top30`

### 5. Gallery
- 4-column grid of project images
- Each item: full-width image, overlay with h4 title + short description + "Read more" link
- Numbered items (01-04), all titled "Floride Chemicals Factory"
- Hover: orange overlay (#f27420) fades in at 85% opacity

### 6. Team
- Heading: "Our Team Best Mambers" + subtitle paragraph
- 4 member cards: photo, name (link), role ("Team Officer")
- "Contact Us" button below heading
- All members named "Bruce Roberts" (placeholder)

### 7. Testimonial
- Dark navy background (`t-bg` class)
- Slider with avatar, quote text, attribution name
- Decorative quote icon

### 8. Blog / Featured Post
- "David Droga" area with heading, two post cards
- Each card: category tag ("Manufacturing"), date, h2 title, "Read more" button
- Both posts have same title placeholder

### 9. CTA Banner
- Full-width orange (#f27420) background
- Heading: "Want To Work With Us? Hit The Button."
- "Let's Work Together" white button

### 10. Footer
- Dark background, 4-column layout
- Col 1: "About Us" + blurb + logo
- Col 2: "Contact Info" — address, phone, gallery link
- Col 3: "Important Links" — View Project, Contact Us, Testimonial, Properties, Support
- Col 4: "Newsletter" — description + email input + submit button

### 11. Footer Bottom
- Copyright text + social media icons (Behance, Facebook, Twitter, Globe)

## Key Design Details
- Fonts: Barlow (headings), Roboto (body) — load from Google Fonts
- Buttons: sharp corners (border-radius: 0), navy bg (#021a47), white text
- Hero button special: box-shadow offset, flips on hover
- Color accent: #f27420 orange used in gallery hover, CTA banner, arrow buttons
- Dark sections: testimonial and footer use navy/near-black backgrounds
