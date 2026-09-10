# Consultflow — Implementation Task Outline

Source: ColorLib Conbusi (https://preview.colorlib.com/theme/conbusi/)
New name: consultflow
Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript

## Section-by-Section Build Order

### 1. Navbar (`Navbar.tsx`)

- Sticky top, white background with bottom border
- Logo image (placeholder via picsum) left-aligned
- Desktop: horizontal nav links (Home, Pages ▾, Services, Case Study, Blog ▾, Contact)
- Pages dropdown: Case Details, About, Elements
- Blog dropdown: Blog, Single Blog
- "Get a Quote" CTA button right-aligned (blue gradient, pill shape)
- Mobile: hamburger toggle with collapsible sidebar/nav
- Top bar (optional, can be part of Navbar or separate component): thin strip with welcome text, email, phone, social icons; hidden on mobile

### 2. Hero Slider (`Hero.tsx`)

- Owl Carousel replacement: use CSS-based slider or simple React state-based carousel
- 2 slides, each with full-width background image + dark overlay
- Centered content: h3 "Big Opportunity for your Business" (with line break)
- Blue gradient pill CTA button "Our Services" (`.boxed-btn3` equivalent)
- Auto-rotate between slides
- Use picsum.photos for banner images

### 3. Services Section (`Services.tsx`)

- White background
- Section title "What we Do?" centered
- 3-column grid, 2 rows = 6 service cards
- Each card: lucide-react icon, h3 title, paragraph, "Learn More" link
- Service items: Marketing & SEO Agency, Startup Agency, Corporate Business, Finance Solution, Food & Restaurant, Travel Agency

### 4. About Section (`About.tsx`)

- White background
- Split layout: text left (col-6), image right (col-6)
- h3 "Why our Consulting?", paragraph, blue gradient "About Us" pill button
- Placeholder image via picsum

### 5. Counter Section (`Counters.tsx`)

- Dark overlay background (#001D38 with semi-transparent overlay)
- 4-column grid with icon + number + suffix + label
- Stats: 200+ Team Members, 97% Business Success, 5628 Happy Client, 5637 Business Done
- Animated counter: use intersection observer + requestAnimationFrame to count up on scroll
- lucide-react icons for each counter

### 6. Case Studies (`CaseStudies.tsx`)

- White background
- Section title "Case Study" centered
- Carousel with 4 cards: image thumbnail, category span "Finance Solution", h3 link "Consumer Products Consulting"
- "More Cases" outline pill button below carousel
- Use picsum for thumbnails

### 7. FAQ Accordion (`Faq.tsx`)

- White background
- Split layout: image left, FAQ right
- h3 "Frequently ask"
- 3 accordion items with state toggle (useState)
- Each: clickable header toggles body visibility with animation
- Content: question text + answer paragraph

### 8. Testimonials (`Testimonials.tsx`)

- Dark overlay background (#001D38)
- Carousel of testimonial slides
- Each slide: quote icon (lucide-react), paragraph review, author thumbnail, h3 name, span role
- 3 slides: "Robert Thomson" / "Business Owner" (same name in original, but can vary)

### 9. Team Section (`Team.tsx`)

- White background
- Section title "Expert Team" centered
- 3-column grid of team cards
- Each: photo (picsum), h3 name, p role, social links (Facebook, Twitter, Instagram via lucide-react)
- Members: Milani Mou (Photographer), Jasmine Pinky (Photographer), Piya Zosoldos (Photographer)

### 10. Contact Form (`Contact.tsx`)

- White background
- Split layout: form left (col-5), image right (col-6 + offset)
- Form: h3 "Get Free Quote", inputs (Your Name, Email, Message textarea), blue gradient "Send" pill button
- Basic form validation (required fields)

### 11. Info Banner (`InfoBanner.tsx`)

- Dark overlay background (#001D38)
- Centered: h3 "For Any Information Call Us", paragraph, phone number "+10 673 763 6786" as blue gradient pill button

### 12. Footer (`Footer.tsx`)

- White background, 4 columns
- Column 1: logo (picsum), contact info (email, phone, address), social icons
- Column 2: Services links (Marketing & SEO, Startup, Finance solution, Food, Travel)
- Column 3: Useful Links (About, Blog, Contact, Appointment)
- Column 4: Newsletter form (email input + Subscribe button) + description text
- Copyright bar: "Copyright © [year] All rights reserved | Made with ♥ by Component Dock"

## Design Notes

- **Blue gradient is the signature visual**: #0181f5 → #5DB2FF, used on all CTA buttons and outline buttons
- **Pill buttons**: 30px border-radius on all CTA buttons
- **Dark overlay sections**: counters, testimonials, info banner all share #001D38 with semi-transparent overlay
- **Poppins font**: single font family for both headings and body
- **Section rhythm**: alternating white and dark overlay sections create visual pacing
- **No parallax**: clean flat sections with image backgrounds only in hero
- **Carousel alternatives**: replace Owl Carousel with simple React state carousel (CSS transitions) or Embla Carousel
- **Responsive breakpoints**: top bar hidden < lg, hamburger nav < lg, service grid 2-col on md, single-col on sm
