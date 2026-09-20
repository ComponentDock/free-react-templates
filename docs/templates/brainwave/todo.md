# Brainwave — Task Outline & Design Notes

## Source mapping
- **ColorLib slug:** studylab
- **Preview URL:** https://preview.colorlib.com/theme/studylab/
- **New name:** brainwave
- **App path:** apps/brainwave/

## Section implementation order

### 1. Navbar component
- Dark background navbar, brand "Brainwave" left
- Nav links: Home, About, Course, Instructor, Blog, Contact
- Hamburger toggler on mobile
- Sticky on scroll with shadow

### 2. Hero component
- Full-screen bg image (`picsum.photos/seed/brainwave-hero/1920/1080`)
- Dark overlay `rgba(0,0,0,0.4)`
- "Welcome to Brainwave" subheading (uppercase, letter-spacing)
- "We Are Online Platform For Make Learn" h1
- Two buttons: "Our Course" (primary blue) + "Learn More" (white)

### 3. RegisterForm component
- Right-aligned card overlapping hero bottom
- Fields: Full Name, Email, Password, Confirm Password
- Submit button with paper-plane icon
- "Already have an account? Sign In" link

### 4. CourseCategories component
- "Browse Online Course Category" heading with subheading
- 6 category cards with bg images, overlay on hover
- Categories: IT & Software, Music, Photography, Marketing, Health, Audio Video
- Each shows course count ("100 course")
- "See All Courses" secondary button

### 5. PickYourCourse component
- Light gray bg, "Pick Your Course" heading
- 6 course cards (3x2 grid): bg image, category tag (blue pill), title, advisor name, student count icon, price
- All cards show "Software" category, "$199" price in original

### 6. CounterStats component
- Bg image + dark overlay
- 4 animated counters: 400 Online Courses, 4500 Students, 1200 Instructors, 300 Hours
- Each with flaticon icon

### 7. About component
- Two overlapping images left, text right
- "Enhanced Your Skills" subheading
- "Learn Anything You Want Today" heading
- Description paragraph
- "Get in touch with us" primary button

### 8. Testimonials component
- Light bg with overlay image
- "Testimonial" subheading, "What Are Students Says" heading
- Owl-carousel of testimonial cards: 5-star rating, quote, user image, name, position

### 9. Services component
- 4 service items with colored circle icons:
  - Additional Courses (flaticon-online)
  - Certified Teachers (flaticon-graduated)
  - Highly Skilled Instructor (flaticon-instructor)
  - World Class Quiz (flaticon-quiz)
- Plus "Get Certified" (flaticon-browser)

### 10. Blog component
- Light gray bg, "Our Blog" subheading, "Recent Post" heading
- 3 blog cards: image, date/admin/comments meta, title, description, "Read more" button

### 11. Footer component
- Dark background
- 4 columns: About + social, Help Desk links, Recent Courses links, Contact info
- Copyright with Component Dock link

## Fidelity notes
- Poppins font throughout (all weights 300-900)
- Purple-to-blue gradient `linear-gradient(135deg, #ce4be8, #207ce5)` for highlights
- Primary blue `#007bff` for buttons
- Dark overlays on hero, counters, testimonials
- Registration form overlaps hero section
- Course category cards use bg images with hover effects
- Counter section uses animated number counting
- Flaticon icon set (use lucide-react equivalents)
