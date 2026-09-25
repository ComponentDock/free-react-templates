# ForgeCraft — Implementation Tasks

Source: ColorLib Create (https://preview.colorlib.com/theme/create/)
New name: forgecraft
Stack: React 19 · Vite · Tailwind 4 · TypeScript

## Section-by-Section Fidelity Notes

### 1. TopBar
- Dark bg (#000), phone + email left, social icons right
- Text white, links white
- Use lucide-react icons for social (Facebook, Twitter, Instagram, Linkedin)

### 2. Navbar
- White bg, sticky position
- Logo: "ForgeCraft" with teal dot (use span text-primary for the dot)
- Nav items: Home, Work, Services, About (with dropdown: Specialties, Our Team), Blog, Contact
- Mobile: hamburger menu with off-canvas drawer

### 3. Hero
- Full-width bg image with dark overlay (use picsum.photos/seed/forgecraft-hero/1920/1080)
- Typed text animation: cycle "Web Apps", "WordPress", "Mobile Apps"
- "Watch Video" pill button (btn-primary, rounded-full)

### 4. Features (Numbered)
- 3 cards in a grid, each with:
  - Large faded number behind (01, 02, 03)
  - Title in primary color
  - Description paragraph
  - Checkmark list (3 items each) with teal checkmarks

### 5. Our Works
- Heading "Our Works" centered
- 6 items in 3-col grid
- Each: image + hover overlay with title and category
- Use picsum.photos/seed/forgecraft-n/600/400

### 6. About Dark Panel
- Full-width black bg section
- Image on left (picsum.photos/seed/forgecraft-about/600/400)
- 4 feature blocks on right in 2-col layout:
  - Strategy, Web Development, Art Direction, Copywriting
  - Each with icon, title, description, "Read More" link
- Use lucide-react icons (BeachAccess→Umbrella, Build→Wrench, FormatPaint→Palette, QuestionAnswer→MessageSquare)

### 7. Testimonials
- Centered heading "Testimonials"
- Carousel of 4 testimonials
- Each: blockquote text, circular photo, name
- Use picsum.photos/seed/forgecraft-person-n/200/200

### 8. Our Services
- Heading "Our Services" centered
- 6 cards in 3-col grid
- Each: teal icon, title, description, "Learn More" link
- Services: Web Design, eCommerce, Web Applications, Branding, Copy Writing, Mobile Applications

### 9. About Us
- Heading "About Us" with description
- Image on right (rounded)
- 2 specialty blocks on left with secondary-colored icons
- Web & Mobile Specialties, Intuitive Thinkers

### 10. Our Team
- Heading "Our Team" centered
- 3 members in 3-col grid
- Each: circular photo (50% width), name, position (muted), description
- Social icon circles at bottom (teal bg, white icons)

### 11. Blog
- Heading "Blog" centered
- 3 cards in 3-col grid
- Each: image, title, meta (author • date • category), excerpt, "Continue Reading" link

### 12. Contact
- Light bg section
- Left: form in white card (first name, last name, email, subject, message textarea, "Send Message" button)
- Right: address/phone/email in white cards
- Inputs: rounded (border-radius 30px), height 43px

### 13. CTA Banner
- Full-width primary bg (#32dbc6)
- "Let's Get Started" white heading, centered
- Entire banner is a link to contact section

### 14. Footer
- Dark bg (#333333), generous padding
- Left: about text, features links, social icons
- Right: newsletter form (email input + send button)
- Bottom: copyright with Component Dock link

## Implementation Order
1. Scaffold app (copy simplest existing app, rename)
2. TopBar component
3. Navbar component
4. Hero component (typed animation)
5. Features (Numbered) component
6. OurWorks component
7. AboutDarkPanel component
8. Testimonials component
9. OurServices component
10. AboutUs component
11. OurTeam component
12. Blog component
13. Contact component
14. CtaBanner component
15. Footer component
16. App.tsx assembly
17. Tests (TDD, 100% coverage)
