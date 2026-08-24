# Template: Voyage (Travel & Tourism Landing Page)

## Purpose

Recreation of ColorLib Passport (`https://colorlib.com/wp/template/passport/`, preview: `https://preview.colorlib.com/theme/passport/`) as a modern React 19 + Tailwind CSS 4 travel and tourism landing template (`@free-react-templates/voyage`).

## Design Tokens

- **Primary Brand Color**: Warm Orange `#fc8621` (Tailwind `orange-500` / custom primary)
- **Text Color**: Dark Charcoal `#212529` (Tailwind `gray-900`)
- **Background Light**: Off-white `#f8f9fa` (Tailwind `gray-50`)
- **Typography**:
  - Headings: `"Playfair Display"`, serif (`font-weight: 700`)
  - Body: `"Open Sans"`, sans-serif
- **Button Radius**: Fully rounded pill shape (`rounded-full`, `border-radius: 30px`)
- **Hero Treatment**: Full-width immersive travel background with dark overlay, bold serif typography, and floating destination badge.

## Sections & Gherkin Requirements

### 1. Navigation Bar (`Navbar`)

- **Requirement**: The navbar must display the brand logo ("Voyage"), navigation links (Home, About Us, Services, Blog, Contact Us), and a CTA button ("Contact Us"), with responsive mobile menu toggle.
- **Scenario**: User views navigation on desktop
  - Given the user loads the Voyage template
  - When the viewport width is desktop size
  - Then all top navigation links and the contact CTA are visible and functional.

### 2. Hero Section (`Hero`)

- **Requirement**: Immersive travel hero banner with a headline ("It is Better to Travel Well Than to Arrive"), a "Watch Video" trigger button, and a floating destination price tag card.
- **Scenario**: User views the hero banner
  - Given the user is at the top of the page
  - When the hero section renders
  - Then the bold headline, watch video button, and floating destination card are clearly displayed over the travel imagery.

### 3. About Section (`About`)

- **Requirement**: "About Us" section introducing travel experiences ("Explore All Corners of The World With Us"), paired with split image collages and descriptive copy.
- **Scenario**: User scrolls to About Us
  - Given the user scrolls past the hero
  - When the About section appears
  - Then the heading, editorial paragraphs, and split feature images render correctly with a "Read more" action link.

### 4. Destinations / Services Carousel (`Destinations`)

- **Requirement**: "We Provide Top Destinations" section showcasing featured travel packages with thumbnail images, destination names, locations, and pricing badges.
- **Scenario**: User inspects top destinations
  - Given the user reaches the destinations section
  - When destination cards load
  - Then destination cards display clear pricing tags and location details with navigation controls.

### 5. Testimonials Section (`Testimonials`)

- **Requirement**: "Happy Customer" testimonials slider presenting feedback from travelers.
- **Scenario**: User views customer reviews
  - Given the user views the testimonial section
  - When customer feedback cards render
  - Then traveler quotes and author details are displayed.

### 6. FAQ Accordion (`Faq`)

- **Requirement**: Frequently Asked Questions accordion allowing users to expand and collapse collapsible items (e.g. registration, account setup, billing).
- **Scenario**: User interacts with FAQ accordion
  - Given the user is viewing the FAQ section
  - When the user clicks an FAQ question header
  - Then the accordion item expands to show the answer and collapses previously opened items or toggles state.

### 7. Blog / Recent Posts (`Blog`)

- **Requirement**: Recent travel blog articles grid showing post dates, thumbnail images, titles ("Far far away, behind the word mountains"), snippets, and "Read More" links.
- **Scenario**: User browses recent blog posts
  - Given the user scrolls to the blog section
  - When the recent posts grid renders
  - Then four blog cards display properly with dates, titles, and read more links.

### 8. Call to Action Banner (`Cta`)

- **Requirement**: Adventurous journey banner ("Begin your adventurous journey here") with a prominent "Get started" button.
- **Scenario**: User views the final CTA banner
  - Given the user reaches the bottom CTA
  - When the banner renders
  - Then the engaging prompt and get started button invite conversion.

### 9. Footer (`Footer`)

- **Requirement**: Comprehensive 4-column footer containing About summary, Connect social links, Quick links, Company info, Contact details, and official copyright with mandatory Component Dock attribution ("Made with Component Dock").
- **Scenario**: User scrolls to the footer
  - Given the user reaches the bottom of the page
  - When the footer renders
  - Then all 4 columns and the "Made with Component Dock" credit are displayed.

## Verification Checklist

- [ ] TypeScript strict typecheck passes (`npm run typecheck`)
- [ ] ESLint clean (`npm run lint`)
- [ ] Vitest unit tests pass with 100% coverage (`npm run test:coverage`)
- [ ] Production build succeeds (`npm run build`)
- [ ] Component Dock attribution link present in footer
- [ ] CNAME and homepage configured correctly for `<name>.free.componentdock.com`
