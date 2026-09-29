# SearchLight — Prep Notes & Task Outline

**Source:** ColorLib "Seo" — https://colorlib.com/wp/template/seo/
**Preview:** https://preview.colorlib.com/theme/seo/
**New name:** searchlight

## Structure order

1. Banner (hero)
2. Service cards
3. About (split layout)
4. Related services carousel
5. Pricing tiers
6. Team members
7. Testimonials
8. Blog posts
9. Brand logos
10. Contact form
11. Footer

## Section-by-section fidelity notes

### Banner
- Full-width, gradient background: `linear-gradient(90deg, #f45622, #f53e54)`
- Centered uppercase headline
- "Get a Quote" pill button (white text, transparent border, pill shape)

### Service
- White background, `section-gap` padding
- Heading: "Device Related Services"
- 3 cards in a row: each has a circular icon (linearicons, 40px round border)
- Titles: Diagnosis Devices, Software Installation, Virus & Malware Removal
- Icon border turns cyan (#4cd3e3) on hover

### About
- Background: #f9f9ff (lavender)
- Two-column layout: left = chart widget (use a placeholder/donut chart
  recreation or a decorative SVG), right = text
- Headline + paragraph + "See Details" button

### Related
- White background, `section-gap`
- Heading: "Device Related Services" (reused — same heading as Service section)
- Carousel of 2 slides: each slide is 2-col (text left, image right)
- Each slide: headline + description + "Research Details" button + image
- Use picsum.photos for images

### Pricing
- Background: #f9f9ff
- Heading: "Choose the Perfect Plan for you"
- 3 cards: Standard (£199), Business (£399), Ultimate (£499)
- Each card: white bg, name, price, description, "Purchase Plan" button
- Button has gradient on hover

### Team
- White background
- Heading: "About Creative Agency Team"
- 4 member cards: photo + name + role
- Members: Ethel Davis, Rodney Cooper, Dora Walker, Lena Keller

### Testimonial
- Background image with dark overlay (opacity 0.6)
- Testimonial carousel: user photo + quote + name + role
- Two testimonials (Mark Alviro Wiens placeholder x2)

### Blog
- White background
- Heading: "Latest From Our Blog"
- 4 blog cards: thumbnail, title, excerpt
- Title gets gradient background on hover (text-clip)

### Brand
- No section gap (flush)
- Row of brand logos (opacity reduced)

### Contact
- White background
- Heading: "Contact Us"
- 2-column form: name + email (left), subject + message (right)
- "Send Message" button with arrow icon

### Footer
- Dark background
- 3 columns: Top Products links, Newsletter signup, Instagram feed
- Replace ColorLib attribution with Component Dock link

## Implementation tasks

1. Copy simplest existing app as scaffold
2. Set up index.css with Tailwind @theme tokens (brand gradient, Poppins font)
3. Build Banner component with gradient bg + CTA
4. Build ServiceSection with 3 icon cards
5. Build AboutSection with split layout
6. Build RelatedSection with carousel items
7. Build PricingSection with 3 tier cards
8. Build TeamSection with 4 member cards
9. Build TestimonialSection with dark overlay + quotes
10. Build BlogSection with 4 blog cards
11. Build BrandSection with logo row
12. Build ContactSection with form
13. Build Footer with 3 columns + Component Dock link
14. Compose in App.tsx
15. Write tests (100% coverage)
16. Update TEMPLATES.md, README, deploy
