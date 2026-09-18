# Template: Virtuoso (Virtual Assistant / Digital Services)

## Purpose

Recreation of ColorLib's **Virtualassistant** template as a modern React 19 + Vite + Tailwind 4 + TypeScript single-page app.

- **Source**: https://colorlib.com/wp/template/virtualassistant/
- **Preview**: https://preview.colorlib.com/theme/virtualassistant/
- **Stack**: React 19, Vite (latest), Tailwind CSS 4, TypeScript (strict)
- **App folder**: `apps/virtuoso`
- **Package**: `@free-react-templates/virtuoso`
- **Deploy target**: `virtuoso.free.componentdock.com`
- **Design category**: Virtual Assistant / Digital Services landing page

## Design tokens

Extracted from the ColorLib preview stylesheet (`css/style.css`):

| Token | Value | Usage |
|-------|-------|-------|
| Brand accent | `#21bf73` (green) | Subheading labels, decorative lines, pricing numbers |
| Primary/CTA | `#007bff` (blue) | `.btn-primary` buttons |
| Font family | Roboto (300, 400, 500, 700) | Body and headings |
| Button radius | `0.25rem` | Small rounded buttons |
| Footer background | `#1a1a1a` (dark) | Footer section |
| Testimonial background | Dark overlay | `.testimony-section .overlay` |
| Light section BG | `#f8f9fa` | How It Works + Pricing sections (`bg-light`) |
| Heading text | `#212529` | Primary heading color |
| Body text | `#495057` | Paragraph and body text |
| Card shadow | `0px 24px 48px -13px rgba(0,0,0,0.05)` | `.services-2` cards |
| Pricing card radius | `4px` | `.block-7` pricing cards |

**Visual notes from screenshot**: Clean, professional layout with a hero area featuring a large background image and dark overlay. Green accent lines flank the section subheading labels. Dark footer and testimonial sections contrast with light card-based content sections. The "How It Works" section uses a stepped numbered layout with hover-reveal descriptions.

## Gherkin requirements

### Feature: Navbar

Scenario: Navbar renders with brand and navigation links
  Given the app is loaded
  Then a navbar is visible at the top
  And the brand text reads "Virtuoso"
  And navigation links include "Home", "About", "Services", "How It Works", "Pricing", and "Contact"

Scenario: Navbar is responsive with hamburger menu
  Given the viewport width is less than 768px
  Then the hamburger toggle button is visible
  And clicking it reveals the navigation links

### Feature: Hero section

Scenario: Hero displays headline and CTA
  Given the app is loaded
  Then the hero section is visible with a background image
  And a dark overlay covers the background
  And a headline reads "Save Your Precious Time & Outsource Daily Tasks"
  And a CTA button reads "Request Our Assistant"

Scenario: Hero CTA button is clickable
  Given the hero section is displayed
  When the user clicks the CTA button
  Then the page scrolls or navigates appropriately

### Feature: Why Choose Us section

Scenario: Why Choose Us section displays with image and feature list
  Given the app is loaded
  Then the "Why Choose Us" section is visible
  And a subheading label "Why Choose Us" is shown in green accent
  And a heading reads "Top Reason Why We Need to Get Virtual Assistant"
  And an image is displayed on the left side
  And four feature items are listed on the right side

Scenario: Feature items have icon, title, and description
  Given the Why Choose Us section is displayed
  Then each feature item shows an icon, a title, and a short description
  And the four features are: "Get decided business results", "Save time with qualified assistants", "Work & Life Balance", "Quick formulate your all plans"

### Feature: Services section

Scenario: Services grid displays 8 service cards
  Given the app is loaded
  Then the "Our Services & Offers" section is visible
  And a subheading reads "Virtual Assistant Services"
  And 8 service cards are displayed in a 4-column grid

Scenario: Each service card has icon, title, and description
  Given the services section is displayed
  Then each card shows a centered icon, a title, and a description
  And the services are: "Family Task", "Online Research", "Management Task", "Project Management", "Writing Editing", "Multilingual Services", "Customer Service", "Executive Admin"

### Feature: About / Comparison section

Scenario: About section displays with image and progress circles
  Given the app is loaded
  Then a section displays "Get Your Own Highly Skilled Virtual Assistant"
  And an image is shown on the left
  And descriptive text is shown on the right
  And two circular progress indicators are displayed below the text

Scenario: Progress circles show comparison data
  Given the about/comparison section is displayed
  Then one circle shows "30%" labeled "Regular Office Employee"
  And another circle shows "75%" labeled "Virtual Assistant Employee"

### Feature: Testimonials section

Scenario: Testimonials carousel displays client reviews
  Given the app is loaded
  Then the testimonial section is visible with a dark background
  And a subheading reads "Testimonial"
  And a heading reads "Happy Clients"
  And a carousel shows at least 3 testimonial cards

Scenario: Each testimonial card has quote, avatar, name, and role
  Given the testimonial carousel is displayed
  Then each card shows a quote icon, a testimonial paragraph, a user avatar image, a name, and a role/title

### Feature: How It Works section

Scenario: How It Works shows 3-step process
  Given the app is loaded
  Then the "How It Works" section is visible
  And a subheading reads "Proceduce" [sic — keep as-is for fidelity]
  And 3 step cards are displayed in a row
  And each card has a number (01, 02, 03), a title, and a description

Scenario: Step cards reveal description on hover/active
  Given the How It Works section is displayed
  Then step 1 is "Handling The Task"
  And step 2 is "Creating To-Do List" (active/highlighted)
  And step 3 is "Schedule A Meeting"

### Feature: Pricing section

Scenario: Pricing displays 4 plan cards
  Given the app is loaded
  Then the "Affordable Packages" section is visible
  And a subheading reads "Price & Plans"
  And 4 pricing cards are displayed in a row

Scenario: Each pricing card shows price, plan name, features, and CTA
  Given the pricing section is displayed
  Then card 1 shows "$49/mo" with label "Small Plan"
  And card 2 shows "$79/mo" with label "Startup Plan"
  And card 3 shows "$109/mo" with label "Medium Plan"
  And card 4 shows "$149/mo" with label "Commercial Plan"
  And each card lists 2 features with checkmarks
  And each card has a "Get Started" button

### Feature: Blog section

Scenario: Blog section displays recent posts
  Given the app is loaded
  Then the "Recent Blog" section is visible
  And a subheading reads "Blog"
  And 3 blog post cards are displayed

Scenario: Each blog card has image, date, author, comments, and title
  Given the blog section is displayed
  Then each card shows a background image, a date, an author, a comment count, and a post title

### Feature: Footer

Scenario: Footer displays with multiple columns
  Given the app is loaded
  Then the footer is visible with a dark background (#1a1a1a)
  And it contains the brand "Virtuoso" with social media icons (Twitter, Facebook, Instagram)
  And it has columns: "Explore", "Legal", "Company", and "Have a Questions?"

Scenario: Footer includes contact information
  Given the footer is displayed
  Then it shows an address, phone number, and email

Scenario: Footer links to Component Dock
  Given the footer is displayed
  Then a link to "https://www.componentdock.com/" is present
  And it reads "Component Dock" (replacing the original Colorlib attribution)

## Verification checklist

- [ ] All sections render in correct order: Navbar → Hero → Why Choose Us → Services → About/Comparison → Testimonials → How It Works → Pricing → Blog → Footer
- [ ] Green accent (#21bf73) used on all subheading labels and decorative lines
- [ ] Blue CTA buttons (#007bff) with 0.25rem border radius
- [ ] Roboto font loaded via Google Fonts (weights 300, 400, 500, 700)
- [ ] Footer background is dark (#1a1a1a)
- [ ] Testimonial section has dark overlay background
- [ ] How It Works and Pricing sections use light background (#f8f9fa)
- [ ] 8 service cards in the services grid
- [ ] 4 pricing cards with correct prices ($49, $79, $109, $149)
- [ ] 3 blog post cards
- [ ] Progress circles show 30% and 75%
- [ ] No references to "Colorlib" in any app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Placeholder images use picsum.photos with deterministic seeds
- [ ] Responsive layout works at mobile breakpoints
- [ ] 100% test coverage (lines, functions, branches, statements)
