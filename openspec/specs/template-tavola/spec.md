# Template: Tavola (Gastronomy / Restaurant)

## Purpose

- **Source Template**: ColorLib Pato (`https://colorlib.com/wp/template/pato/`)
- **Preview URL**: `https://preview.colorlib.com/theme/pato/`
- **New Name**: `tavola` (App path: `apps/tavola`)
- **Stack**: Vite, React 19, Tailwind CSS 4, TypeScript, Lucide React

## Design tokens

- **Brand Colors**:
  - Primary / Accent: `#d11a21` (Red) and `#ec1d25` (Bright Red)
  - Dark Neutral: `#111111` (Deep Charcoal / Black background for dark sections / headers)
  - Light Neutral: `#f0f0f0` (Light gray background), `#ffffff` (White)
  - Text: `#333333` (Body text), `#666666` (Muted text)
- **Font Family**:
  - Headings: `Courgette`, serif / cursive accents; `Montserrat`, sans-serif bold
  - Body: `Poppins`, sans-serif
- **Button Shapes & UI**:
  - Buttons: Rounded (`border-radius: 10px` / `bo-rad-10`, pill, or sharp overlays on image cards with hover zoom effects)
  - Section spacing: generous vertical padding (`p-t-115 p-b-120`)

## Gherkin requirements and scenarios

### Feature: Tavola Restaurant Landing Page

Scenario: User views the hero slider
Given the user opens the Tavola homepage
When the hero section renders with its background slider images
Then the user sees welcome headings ("Welcome to Tavola Place") and a "Look Menu" CTA button

Scenario: User reads about the Italian restaurant story
Given the user scrolls to the Welcome / Our Story section
When the section renders with a side-by-side layout (story text on left, image on right)
Then the user reads about Italian restaurant heritage and clicks "Our Story" link

Scenario: User explores the menu categories
Given the user scrolls to the Our Menu section
When the grid of menu items (Lunch, Dinner, Happy Hour, etc.) appears with image backgrounds and hover zoom
Then the user can click category buttons to filter or view items

Scenario: User checks upcoming events
Given the user scrolls to the Upcoming Events slider section
When event slides display date badges and event descriptions
Then the user can browse scheduled wine and tasting nights

Scenario: User books a table
Given the user scrolls to the Reservation section
When the booking form appears with date, time, name, phone, and person count fields
Then the user can fill out the form and submit a table reservation

Scenario: User views customer reviews
Given the user scrolls to the Customer Review carousel
When the review slider shows customer testimonials, avatars, and star ratings
Then the user can read feedback from patrons

Scenario: User watches promotional video
Given the user scrolls to the Video parallax section
When the play button modal trigger is clicked
Then a video modal opens showcasing restaurant highlights

Scenario: User reads the latest blog posts
Given the user scrolls to the The Blog section
When recent blog cards render with publication dates and titles
Then the user can read articles about wine and culinary tips

Scenario: User views footer contact and hours
Given the user scrolls to the footer
When the footer displays contact address, opening times, gallery preview, and Component Dock attribution link
Then the user sees complete business hours and contact info

## Verification checklist

- [ ] App folder created at `apps/tavola`
- [ ] Package name `@free-react-templates/tavola`
- [ ] `public/CNAME` set to `tavola.free.componentdock.com`
- [ ] Footer links `https://www.componentdock.com/` ("Component Dock")
- [ ] All 9 main sections rendered accurately matching the Pato reference structure
- [ ] Tests passing with 100% coverage
