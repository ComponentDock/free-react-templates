# HealthPulse — Implementation Todo & Design Notes

## Template Identity

- **New name:** HealthPulse
- **ColorLib source:** Health Coach (slug: `healthcoach`)
- **Preview URL:** https://preview.colorlib.com/theme/healthcoach/
- **Source URL:** https://colorlib.com/wp/template/healthcoach/
- **Category:** Health & Wellness

## Section Order (top to bottom)

1. Top Info Bar (phone + email left, social icons right)
2. Header (sticky nav — logo left, 8 links center, hamburger mobile)
3. Hero Section (full-width image slider, 3 slides, dark overlay, white text, two CTA buttons)
4. Services Section (3 cards overlapping hero — Exercise, Nutrition, Diet)
5. About / Founder Section (2-col: image left, text + founder profile right, light bg)
6. Consultation Band (3-col full-width: services CTA | appointment form | find expert)
7. Testimonials Section (carousel of user feedback cards, light bg)
8. How It Works (4 icon steps with green circles)
9. Success Stories (carousel of side-by-side image+text cards, light bg)
10. CTA Banner (full-width background image, headline, white button)
11. Pricing Section (4 tiers: Starter/Standard/Premium/Platinum, light bg)
12. Blog Section (3 blog entry cards with image, date, title)
13. Newsletter Subscribe Form (above footer)
14. Footer (dark bg, logo + 4 link columns, copyright)

## Design Token Reference

| Token            | Value                   |
| ---------------- | ----------------------- |
| Brand primary    | `#1089ff` (bright blue) |
| Brand secondary  | `#a3cb4c` (lime green)  |
| Consultation mid | `#006fdc` (darker blue) |
| Text primary     | `#000000`               |
| Text light       | `#fff`                  |
| Background light | `#f8f9fd`               |
| Background dark  | `#131719`               |
| Font             | Poppins (all weights)   |
| Icon set         | FA 4.7 + Flaticon       |
| Button radius    | 4px                     |
| Card radius      | 5px (services), 10px (testimonials) |
| Hero height      | 700px                   |
| Section padding  | 7em 0                   |

## Section-by-Section Fidelity Notes

### Top Info Bar
- Thin bar above the navbar
- Left: phone number + email in small text
- Right: 4 social icon circles (Facebook, Twitter, Instagram, Dribbble) using FA icons
- Use lucide-react equivalents for social icons

### Header / Navbar
- Dark background navbar with brand "HealthPulse" on the left (use placeholder leaf icon like original)
- 8 nav links: Home, About, Coach, Pricing, Services, Stories, Blog, Contact
- Active link has blue (#1089ff) color with underline animation
- Sticky on scroll, hamburger on mobile
- Use `ftco-navbar-light` pattern: dark bg, light text

### Hero Section
- Full-width carousel/slider, 700px height
- 3 slides, each with a background image (use picsum.photos/seed/healthpulse-hero-{1-3}/1920x700)
- Dark overlay (opacity ~0.4, black)
- Each slide: blue uppercase subheading (Poppins 700, 14px, letter-spacing 4px), large white h1 (Poppins 200, 40px)
- Two CTA buttons per slide: "Learn more" (blue primary) and "Contact us" (white with black text)
- Carousel dots at bottom, nav arrows on hover
- Use embla-carousel or similar React carousel

### Services Section
- 3 service cards in a row, overlapping the hero by -200px on desktop
- Each card: top image (200px height), title, description, "Read more" outline button
- White background, 5px border-radius, subtle box-shadow
- Service images: picsum.photos/seed/healthpulse-service-{1-3}/400x200
- Centered text, clean layout

### About / Founder Section
- Light (#f8f9fd) background, two-column no-gutters layout
- Left: large image (use picsum.photos/seed/healthpulse-about/600x700)
- Right: subheading "Welcome to Healthcare", heading, 2 paragraphs of body text
- Founder profile at bottom: circular image (70px), name "Cythia Hunter", title "Personal Dietitian"
- Poppins font throughout

### Consultation Band
- Full-width, three columns, no padding on section
- Left column: blue (#1089ff) bg, title "Healthcare Services", description, "See Services" link
- Center column: darker blue (#006fdc) bg, "Free Consultation" form with 6 fields + submit
- Right column: blue (#1089ff) bg, title "Find A Health Expert", description, "Meet our health coach" link
- Form fields: First Name, Last Name, Services (select), Date (with calendar icon), Time (with clock icon), Appointment (white button)
- Use react-hook-form or controlled inputs

### Testimonials Section
- Light (#f8f9fd) background
- Centered heading "Happy Clients & Feedbacks" with subheading "Testimonies"
- Carousel of testimonial cards
- Each card: white bg, 10px border-radius, box-shadow, circular user image (80px), blue quote icon, feedback text, name, position
- Use placeholder images for users

### How It Works Section
- White background, centered heading "How it works?" with subheading "Other Services"
- 4 items in a row: each with a green (#a3cb4c) circular icon (70px), title, description
- Green icon circles with box-shadow
- Use lucide-react icons (Dumbbell, Utensils, Heart, Smile or similar)

### Success Stories Section
- Light (#f8f9fd) background, centered heading "Successfull Stories" with subheading "Stories"
- Carousel of side-by-side cards
- Each card: image left (50% width, 550px height), text right (white bg, padding, name, position)
- Use picsum.photos/seed/healthpulse-story-{1-3}/600x550

### CTA Banner
- Full-width background image with dark overlay
- Heading "We Provide Free Health Care Consultation"
- Subtext "Your Health is Our Top Priority..."
- White "Free Consultation" button on the right
- Use picsum.photos/seed/healthpulse-cta/1920x400

### Pricing Section
- Light (#f8f9fd) background, centered heading "Choose Your Perfect Plans" with subheading "Price & Plans"
- 4 pricing cards in a row: Starter ($49), Standard ($79), Premium ($109), Platinum ($159)
- Each card: plan name, description "A Beautiful Healthcare", price, 5-item checklist, blue "Get Started" button
- Cards have white background with border/shadow

### Blog Section
- White background, centered heading "Latest news from our blog" with subheading "News & Blog"
- 3 blog entry cards in a row
- Each: background image (250px height, rounded), date, author, comment count, article title
- Blog images: picsum.photos/seed/healthpulse-blog-{1-3}/400x250
- Title links turn blue on hover

### Newsletter / Footer
- Subscribe form in a white card overlapping the footer (-130px margin-top)
- Email input + "Subscribe" button in a rounded white card
- Dark (#131719) footer below
- Footer: logo "HealthPulse" (with "Pulse" in green #a3cb4c), description, 4 link columns (Services, About, Resources, Social)
- Copyright line + Terms/Privacy/Compliances links at bottom
- Muted white text (rgba(255,255,255,0.4)) brightens on hover
- Footer link to https://www.componentdock.com/
