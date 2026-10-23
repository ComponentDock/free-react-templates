# Learnova — Task Outline & Design Notes

## Source mapping
- **ColorLib slug:** skwela
- **Preview URL:** https://preview.colorlib.com/theme/skwela/
- **New name:** learnova
- **App path:** apps/learnova/

## Section implementation order

### 1. Navbar component
- Transparent navbar positioned absolute over hero
- Brand "LEARNOVA" uppercase, letter-spacing 0.2em, white text
- Nav links: Home, Online Courses (dropdown), Categories (dropdown), Blog, About, Contact
- Right side: Login + Register links
- On mobile: dark semi-transparent background `rgba(0,0,0,0.4)`
- Dropdown: white bg, shadow, blue hover `#007bff`

### 2. Hero component
- Full-screen background image (`picsum.photos/seed/learnova-hero/1920/1080`)
- Dark overlay `rgba(0,0,0,0.4)` via pseudo-element
- Centered content: "Learn From Doing" h1 (60px, uppercase, 900 weight)
- Lead text (30px, white, 80% opacity)
- Primary blue `#007bff` CTA button: "Sign up and get a 7-day free trial"

### 3. FeaturesDark component
- Background image + dark overlay
- 4 feature items vertically stacked:
  - Online trainings from experts (flaticon-video-call)
  - Learn anywhere in the world (flaticon-student)
  - Creative learning video (flaticon-video-player)
  - Audio learning (flaticon-audiobook)
- White text on dark background

### 4. FeaturesLight component
- White/light background
- Same 4 features as FeaturesDark but with dark text
- Icons from flaticon set

### 5. FeaturesLast component
- Background image + dark overlay
- 4 features with different icons:
  - Online trainings (flaticon-student-1)
  - Learn anywhere (flaticon-interface)
  - Creative video (flaticon-book)
  - Audio learning (flaticon-geography)

### 6. CTACover component
- Background image + dark overlay
- Centered: "Sign Up And Get a 7-day Free Trial" h2
- Lead text paragraph
- Primary blue button

### 7. TopCourses component
- Light gray background `#f8f9fa`
- "Top Courses" heading + lead text
- 6 course cards in responsive grid (2-col on lg, 3 on md, 6 on sm):
  - Each: image + h2 title + "Enroll Now" text
  - Courses: Web Design, WordPress, JavaScript, Photoshop, ReactJS, AngularJS

### 8. Testimonial component
- Two-column layout (7 + 4 cols with spacer)
- Left: blockquote with quotation marks + attribution
- Right: person image (full width)

### 9. Footer component
- Background image + dark overlay
- Left column: "About" heading + description
- Right: 3 columns of link lists
- Copyright bar: "Made with heart by Component Dock"

## Fidelity notes
- Clean, minimal Bootstrap-based design
- Source Sans Pro throughout (300, 400, 900 weights)
- Primary blue `#007bff` (Bootstrap default)
- Dark overlays on hero and feature sections create depth
- Course grid uses 2-col layout at lg, stacks on smaller
- Flaticon icons for features (use lucide-react equivalents)
- Testimonial is asymmetric: large image right, quote left
- Footer uses background image (same as hero or features)
