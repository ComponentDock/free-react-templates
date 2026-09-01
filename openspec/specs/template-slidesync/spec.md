# Template: SlideSync (Carousel / Testimonials Component)

- **Design Category**: Carousel / Testimonials Slider
- **Source**: ColorLib `carousel-12` (`https://colorlib.com/wp/template/carousel-12/`)
- **Preview URL**: `https://preview.colorlib.com/theme/carousel-12/`
- **Stack**: React 19, Tailwind CSS 4, Lucide Icons, TypeScript

## Purpose

SlideSync is a fully responsive, modern React 19 component template recreating the ColorLib `carousel-12` template. It features an interactive testimonial/content carousel slider with smooth transitions, navigation controls (arrows and pagination dots), author avatars, rating stars, and a clean card-based layout ideal for client testimonials, product highlights, or feature showcases.

## Design Tokens (Extracted from Reference & Visual Inspection)

- **Primary Brand Color**: `#ff5722` (Deep Orange / Coral Accent)
- **Secondary Accent**: `#333333` (Dark Neutral Text / Backgrounds)
- **Neutral Backgrounds**: `#f8f9fa` (Section Light Background), `#ffffff` (Card Background)
- **Text Colors**: `#212529` (Headings), `#6c757d` (Muted / Subtext)
- **Font Family**: `"Poppins", sans-serif`
- **Border Radius**: `0.5rem` (rounded-lg) for cards, `9999px` (rounded-full) for avatar images and pill buttons
- **Shadows**: Soft elevation shadows (`shadow-md`, `shadow-xl`)

## Sections

1. **Header / Navigation Bar**: Clean sticky header with brand logo, nav links (Home, Features, Testimonials, Pricing, Contact), and a "Get Started" CTA button.
2. **Hero Section**: Engaging hero banner with bold headline, subtitle, primary action button, and a feature highlight badge.
3. **Interactive Carousel Section**: The core component featuring card slides with quotation marks, star ratings, testimonial copy, author name, title/company, and round avatar thumbnails. Includes previous/next navigation arrows and active indicator pagination dots.
4. **Features Grid Section**: 3-column grid highlighting key benefits or features with icons, titles, and descriptions.
5. **Call to Action (CTA) Banner**: High-conversion banner inviting users to get started with an email input and submit button.
6. **Footer**: Clean multi-column footer with brand links, social media icons, copyright, and mandatory Component Dock attribution (`https://www.componentdock.com/`).

## Requirements & Gherkin Scenarios

### Feature: Carousel Slider Navigation

As a user visiting the SlideSync template, I want to browse testimonials/slides using navigation arrows and pagination dots so that I can read all featured items.

#### Scenario: User clicks next and previous navigation arrows

- **Given** the carousel is displayed on the page showing slide 1
- **When** the user clicks the "Next" navigation button
- **Then** the carousel transitions to show slide 2
- **And** the active pagination dot updates to reflect slide 2

#### Scenario: User clicks a pagination dot

- **Given** the carousel is displayed on the page showing slide 1
- **When** the user clicks the pagination dot for slide 3
- **Then** the carousel instantly displays slide 3
- **And** the corresponding pagination dot becomes active

### Feature: Component Dock Footer Attribution

As a visitor, I want to see a clear link to Component Dock in the footer.

#### Scenario: Footer displays Component Dock link

- **Given** the user scrolls to the bottom of the page
- **When** the footer is rendered
- **Then** a visible link pointing to `https://www.componentdock.com/` with text containing "Component Dock" is present
