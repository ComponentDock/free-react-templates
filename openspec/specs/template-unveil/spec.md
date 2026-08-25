# Template: Unveil (Business & Productivity Agency)

## Purpose

Recreation of ColorLib **Unbrew** (`https://colorlib.com/wp/template/unbrew/`, preview: `https://preview.colorlib.com/theme/unbrew/`), implemented as a modern React 19 + Tailwind CSS 4 + Vite application (`apps/unveil`), packaged as `@free-react-templates/unveil`.

## Design tokens

- **Brand Colors**:
  - Primary / Hero Gradient: `#553be6` to `#a87ffa` (`bg-gradient-to-tr from-[#553be6] to-[#a87ffa]`)
  - Accent / Active: `#1fb6fc` (`text-[#1fb6fc]`, `bg-[#1fb6fc]`)
  - Text / Headings: `#2a3a60` (`text-[#2a3a60]`)
  - Section Backgrounds: `#eaedff` (`bg-[#eaedff]`), `#f9faff` (`bg-[#f9faff]`), `#fff` (`bg-white`)
- **Typography**: Font family: `"Roboto", Arial, sans-serif`.
- **Radii & Shadows**: Card border radius: `4px` (`rounded`), subtle box shadow (`shadow-[0px_24px_48px_-13px_rgba(0,0,0,0.05)]`).

## Requirements & Gherkin Scenarios

### 1. Navigation Bar

- **Requirement**: Display site brand "Unveil.", navigation links (HOME, ABOUT US, SERVICES, PRICING, WORK, BLOG, CONTACT US), and responsive mobile toggle.
- **Scenario**: User views header
  - Given the user loads the Unveil application
  - Then the navigation bar displays "Unveil." and all primary navigation links
  - And links smoothly scroll to corresponding sections

### 2. Hero Section

- **Requirement**: Hero banner with vibrant gradient background, title "Boost Personal Productivity", subtitle, primary CTA button ("Start A Project"), inquiry contact pill, and hero image / illustration.
- **Scenario**: User views hero banner
  - Given the user is at the top of the page
  - Then the hero section displays the gradient background, headline, subtitle, and CTA buttons

### 3. Services Section

- **Requirement**: Grid of services (Marketing, SEO, UI/UX Design, Creative, Optimization, Business Strategy) with icons, descriptions, and hover/active states.
- **Scenario**: User explores services
  - Given the user scrolls to the services section
  - Then six service cards are displayed with icons and hover styling

### 4. About & Team Section

- **Requirement**: About agency section and "Our Digital Experts Team" with team member portraits, names, and social links.
- **Scenario**: User views team members
  - Given the user scrolls to the team section
  - Then team member cards for Adrian, Arthur, Anna, and Brian are displayed with social icons

### 5. Counter & Testimonials Section

- **Requirement**: Statistics counter and happy customer testimonials carousel.
- **Scenario**: User reads testimonials
  - Given the user views the testimonials section
  - Then customer feedback and pagination controls are visible

### 6. Why Choose Us Section

- **Requirement**: "WHY CHOOSE US" subtitle, heading "Easy Management for Your Businesses", and feature list (Easy Management, Protect Your Profile, Private Community, 24/7 Help Support).
- **Scenario**: User reviews features
  - Given the user scrolls to the why choose us section
  - Then key business advantages are clearly laid out in a multi-column grid

### 7. Portfolio / Work Section

- **Requirement**: "Our Awesome Work" gallery showcasing high quality design concepts with preview links and "VIEW MORE PORTFOLIO" button.
- **Scenario**: User browses portfolio
  - Given the user views the work section
  - Then portfolio project cards are displayed with hover overlays

### 8. Pricing Section

- **Requirement**: Pricing plans ("Choose Your Pricing Plan") with feature lists and "GET STARTED" buttons.
- **Scenario**: User views pricing
  - Given the user scrolls to the pricing section
  - Then subscription tier cards with features and call-to-action buttons are shown

### 9. Blog Section

- **Requirement**: "Recent Blog" section displaying articles with publication metadata and author links.
- **Scenario**: User reads recent posts
  - Given the user scrolls to the blog section
  - Then recent articles are rendered in a responsive grid

### 10. Newsletter & Footer

- **Requirement**: Newsletter subscription form ("Stay tune and get the latest update"), multi-column footer with brand info, quick links, recent posts, contact details, and mandatory Component Dock footer link (`https://www.componentdock.com/`).
- **Scenario**: User reaches footer
  - Given the user scrolls to the bottom of the page
  - Then the newsletter form and footer are displayed, including the "Component Dock" link

## Verification Checklist

- [ ] Spec validation (`npm run spec:validate`) passes
- [ ] Vitest tests cover all sections with 100% line/branch/function coverage
- [ ] Per-app verification (`scripts/verify-app.sh unveil`) passes successfully
- [ ] Footer links `https://www.componentdock.com/`
