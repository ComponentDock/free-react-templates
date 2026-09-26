# Kensei — Task Outline & Design Notes

Recreation of ColorLib **Ronin** → new name **Kensei**
Source: https://preview.colorlib.com/theme/ronin/

## Design Reference Notes

- **Aesthetic:** Clean personal portfolio for a freelancer/creative professional. Light background with lavender-tinted alternating sections. Dark navy footer and testimonials.
- **Color palette:** Primary indigo #8490ff, secondary gradient to #62bdfc, dark text #222222, body text #777777, light bg #f9f9ff, dark bg #04091e.
- **Typography:** Heebo (headings, bold), Roboto (body, nav, buttons). Both Google Fonts.
- **Button style:** Gradient CTA (banner_btn) with 5px radius, 50px height, 13px uppercase text.
- **Section rhythm:** 120px top/bottom padding throughout. Centered main_title headings with max-width 570px subtitle.
- **Banner:** Full background image with split layout (illustration left, text right).

## Component-by-Component Notes

### 1. Navbar
- Transparent overlay, becomes white+shadow on scroll (navbar_fixed class)
- Logo left, nav links right
- Dropdowns for "Pages" (Portfolio, Project Details, Elements) and "Blog" (Blog, Blog Details)
- Use sticky positioning or scroll listener for fixed state
- lucide-react: Menu icon for mobile toggle, ChevronDown for dropdowns

### 2. Hero Banner
- Full-width bg image (use picsum.photos placeholder)
- Left column: portrait illustration (use picsum.photos portrait)
- Right column: small label "This is me", name heading, paragraph, CTA button
- CTA: gradient bg (#8490ff → #62bdfc), 5px radius, uppercase text
- lucide-react: ArrowRight for CTA

### 3. Welcome / About
- Left column: heading "About Myself", paragraph, 3 stat cards
  - Stats: icon + value + label (e.g. DollarSign + "$2.5M" + "Total Donation")
  - lucide-react: DollarSign, FolderOpen, Users icons
- Right column: "Tools Expertness" with 5 animated skill bars
  - After Effects 85%, Photoshop 90%, Illustrator 70%, Sublime 95%, Sketch 75%
  - Animate fill on intersection observer
  - Bar color: #8490ff

### 4. Features / Services
- Centered section heading + subtitle
- 3-column grid: Architecture, Interior Design, Concept Design
- Each: icon + title + description paragraph
- lucide-react: Building2, Paintbrush, Lightbulb icons
- Background: #f9f9ff (light lavender)

### 5. Projects / Portfolio
- Filter tabs: All, Residential, Commercial, Industrial
- Grid of portfolio images with hover overlay (title + link)
- Click filter to show/hide items
- lucide-react: ExternalLink for overlay
- Use picsum.photos with seeds for consistent images

### 6. Testimonials
- Dark background (#04091e)
- Carousel of testimonial cards
- Each card: avatar, quote text, name, designation
- Navigation dots/arrows
- lucide-react: Quote, ChevronLeft, ChevronRight

### 7. Latest Blog
- 3-column card grid
- Each: image, date badge (positioned absolute top-left), title, excerpt, "Read More" link
- Border: 1px solid #eeeeee
- lucide-react: Calendar for date, ArrowRight for read more

### 8. Footer
- Dark background (#04091e)
- 3-4 column layout: About, Quick Links, Newsletter, Social
- Newsletter: email input + subscribe button
- Social: icon links (lucide-react)
- "Made with Component Dock" attribution at bottom

## Implementation Order

1. Scaffold app from simplest existing template
2. Create all components (Navbar, Hero, About, Services, Projects, Testimonials, Blog, Footer)
3. Wire up in App.tsx
4. Write tests for each component
5. Style with Tailwind + design tokens in index.css
6. Verify coverage 100%
7. Commit and push

## Placeholder Assets

- Hero bg: `https://picsum.photos/seed/kensei-hero/1920/900`
- Portrait: `https://picsum.photos/seed/kensei-portrait/500/600`
- Project images: `https://picsum.photos/seed/kensei-proj-1/400/300` (through proj-6)
- Blog images: `https://picsum.photos/seed/kensei-blog-1/400/250` (through blog-3)
- Testimonial avatars: `https://picsum.photos/seed/kensei-avatar-1/80/80` (through avatar-4)
