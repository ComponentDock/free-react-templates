# Bizcraft — Implementation Todo

Source: ColorLib Bizcon (https://colorlib.com/wp/template/bizcon/)
Preview: https://preview.colorlib.com/theme/bizcon/
Name: bizcraft (NEW — never reuse "bizcon")

## Design Notes

- **Layout**: Clean business consulting template. White sections alternating
  with gray (#f7f7f7) backgrounds. Generous vertical padding (140px desktop).
- **Color scheme**: Coral primary (#ff7e5f), orange gradient buttons
  (#feb47b → #ff7e5f at 131°). Dark charcoal headings (#2f373d).
- **Typography**: Poppins bold for headings (600-800 weight), Roboto regular
  for body text (14px base, line-height ~1.93).
- **Buttons**: Pill-shaped (large border-radius ~20px), gradient background
  fill, white text, subtle shadow on hover.
- **Section rhythm**: alternating white/gray backgrounds, consistent vertical
  padding, centered section titles with coral accent underline.

## Section-by-Section Fidelity Notes

### 1. Navbar
- White background, thin bottom border on scroll
- Logo left, horizontal nav links right
- Links: Home, About, Blog (dropdown), Page (dropdown), Contact
- Mobile: hamburger toggle, collapsible menu
- The "dropdown" items (Blog → Blog/Single Blog; Page → Project/Project Details/Services/Elements)
  can be simplified to direct links since this is a single-page recreation

### 2. Hero / Banner
- Full-width section with background image (use picsum for placeholder)
- Left-aligned content: large heading + paragraph + CTA button + video link
- Heading: "Lead from Front in Business Innovation."
- CTA: coral gradient pill button "Learn More"
- Video link: play icon + "Intro Video" text
- Below hero: 2-3 stat counters (e.g. "24 Year Experience in consulting")
  with light gray background boxes

### 3. About
- Two-column layout: left = image, right = text content
- Small coral accent line above heading
- Heading about consulting experience
- Paragraph text + "Read More" link in coral
- Images: use `picsum.photos/seed/bizcraft-about/600/400`

### 4. Services
- Gray (#f7f7f7) background
- Centered heading: "We Provide Best Services"
- Subtitle paragraph below heading
- 2×3 grid of service cards
- Each card: circular or square icon (use lucide-react icons), title, short text
- Icons could be: Briefcase, TrendingUp, Users, Target, BarChart3, Globe
- "Load More" button at bottom (can be non-functional, visual only)
- Cards have white background, subtle shadow

### 5. Testimonials
- White background
- Centered heading: "Customer Are Saying"
- Carousel/slider with testimonial cards
- Each card: circular avatar (use picsum), name, role/title, quote text
- 2-3 testimonials, auto-scroll or with dots/arrows
- Can use simple CSS scroll-snap or manual state for carousel

### 6. Portfolio
- White background
- Centered heading: "Explore Our Best Practice Area"
- 2-column grid of project cards
- Each card: full-width image with dark overlay, "Startup Project" label centered
- Hover: overlay lightens, label remains
- Images: `picsum.photos/seed/bizcraft-proj1/600/400`

### 7. Adviser CTA
- Two-column layout (reversed from About): left = text, right = image
- Heading about "high quality adviser service"
- Paragraph + "Read More" link
- Images: `picsum.photos/seed/bizcraft-adviser/600/400`

### 8. Blog
- White or light background
- Centered heading: "Update From Blog"
- 3-column grid of blog post cards
- Each card: top image, title, excerpt text, "Read More" link
- Images: `picsum.photos/seed/bizcraft-blog1/400/250`

### 9. Footer
- Dark background (#2f373d or #303030)
- 4 columns: About description | Top Products links | Quick Links | Features links
- Social media icons row (use lucide-react: Facebook, Twitter, Instagram, LinkedIn)
- Bottom bar: copyright text + "Component Dock" branding link
