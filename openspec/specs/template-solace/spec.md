# Template: Solace (Hospitality & Hotel Booking)

## Purpose

- Recreation of ColorLib **Unwind** (`https://colorlib.com/wp/template/unwind/`).
- Preview URL: `https://preview.colorlib.com/theme/unwind/`
- Tech Stack: Vite, React 19, Tailwind CSS 4, TypeScript (strict).

## Design Tokens

- **Colors**:
  - Primary / Brand: Deep Warm Taupe / Amber Bronze (`#c29b38` or `#b49133` / warm gold / bronze accents)
  - Dark / Ink: `#1a1a1a` or `#222222` (Navbar, Footers, Headings)
  - Background: `#f8f8f8` (Light warm grey/off-white)
  - Accent / Highlights: Warm Gold (`#c29b38`), White (`#ffffff`), Muted Gray (`#999999`)
- **Typography**:
  - Headings: `"Old Standard TT"`, serif
  - Body: `Nunito`, Arial, sans-serif
- **Shapes & Radii**:
  - Buttons / Cards: subtle or sharp rounding (`rounded` / `rounded-md` / `rounded-none` for specific accent blocks)
- **Sections**:
  - Top Bar / Navbar: Transparent/Dark sticky header with logo and navigation items (Home, About, Rooms, Resto & Bar, Blog, Contact).
  - Hero Section: Large luxury hero banner with background image, subtitle ("ENJOY YOUR WONDERFUL HOLIDAYS..."), main title ("Most Relaxing Place"), and CTA links ("Take A Tour", "Learn More").
  - Booking Bar / Widget: Check-in date, Check-out date, Room type selector, Guests selector, and "Check Availability" button.
  - About / Agency Section: "Unwind A Hotel Booking Agency" with introduction and book room CTA.
  - Services Grid: Free Wifi, Easy Booking, Restaurant, Swimming Pool, Beauty & Health, Help & Support.
  - Promo / Banner Section: "Find the Best Hotel in Your Next Vacation" with background image and CTA.
  - Featured Rooms: Suite Room, Family Room, Deluxe Room with pricing/details and "Book Now" actions.
  - Video / Tour Section: "Take A Tour" interactive video modal or banner.
  - Restaurant & Bar Section: Menu items (Grilled Beef with potatoes, Ultimate Overload, Ham & Pineapple).
  - Testimonials / Happy Guests: Carousel of guest reviews.
  - Recent Blog: Hotel & travel blog posts with comments count.
  - Footer: Multi-column layout with about info, quick links, services list, contact details, and Component Dock attribution footer link (`https://www.componentdock.com/`).

## Gherkin Requirements & Scenarios

### Feature: Solace Hotel Booking Landing Page

As a visitor looking for a luxury hotel stay,
I want to explore rooms, book dates, and view services,
So that I can plan and reserve my ideal vacation.

#### Scenario: Navigation and Hero Display

- Given I load the Solace home page
- Then I should see the sticky navigation bar with brand logo and links (Home, About, Rooms, Resto & Bar, Blog, Contact)
- And I should see the luxury hero banner with title "Most Relaxing Place" and CTA buttons

#### Scenario: Interactive Booking Widget

- Given I am on the home page
- When I interact with the booking form (Check-in, Check-out, Room type, Guests)
- And I click "Check Availability"
- Then the booking widget should handle selection successfully without errors

#### Scenario: Explore Rooms and Services

- Given I scroll down to Featured Rooms and Hotel Services
- Then I should see room cards (Suite Room, Family Room, Deluxe Room) with "Book Now" buttons
- And I should see service icons for WiFi, Swimming Pool, Restaurant, and Spa

#### Scenario: Footer Attribution

- Given I scroll to the bottom of the page
- Then the footer must display the copyright and link to `https://www.componentdock.com/` ("Component Dock")
- And no mention of ColorLib should appear in the app code or footer
