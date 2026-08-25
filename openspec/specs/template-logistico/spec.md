# Template: Logistico (Logistics & Cargo Transport)

## Purpose

Recreation of ColorLib "Thelogistico" (`https://colorlib.com/wp/template/thelogistico/`, preview: `https://preview.colorlib.com/theme/thelogistico/`), built as a modern, responsive React application with Vite, Tailwind CSS v4, and Lucide React icons.

## Design Tokens

- **Brand Primary**: `#f60` (Vibrant orange for buttons, badges, and primary accents)
- **Brand Dark**: `#071112` / `#000000` (Dark backgrounds, header text)
- **Secondary / Accent**: `#2845BA` (Blue accents)
- **Backgrounds**: `#fff` (cards/sections), `#fbf9ff` / `#f9f9ff` (gray/light sections)
- **Typography**: Font family `Roboto`, sans-serif
- **Button / Shape**: Sharp rectangular corners (`border-radius: 0px`), large padded CTA buttons (`padding: 32px 58px` or similar prominent padding)

## Requirements & Gherkin Scenarios

### Feature 1: Navigation & Header

- **Scenario**: User views sticky header with logo, navigation links (Home, About, Service, Blog, Contact), social icons, and phone contact number (`10 (87) 237 3784`).

### Feature 2: Hero Section & Quick Offer Calculator

- **Scenario**: User sees banner with background image, title "A TRULY GLOBAL SERVICE PROVIDER", subtitle "We make your cargo transport simple", and a "Explore Us" button.
- **Scenario**: User interacts with the "Get a quick offer" calculator form (truckload dropdown, commodity dropdown, distance input, and estimated cost display `$10,400.00`).

### Feature 3: Services Grid

- **Scenario**: User views 4-column commercial cleaning / logistics service cards with icon, title, description, and arrow link buttons.

### Feature 4: About / Transport Solution Sections (Visit One, Two, Three)

- **Scenario**: User views professional transportation business details, interactive accordion for Road Transport / Sea Cargo, mission quote callout, and 3-step shipment control gallery cards.

### Feature 5: Want To Work / CTA & Client Testimonial

- **Scenario**: User views "Need Help? Get Free quote!" CTA banner and client testimonial carousel with video modal trigger.

### Feature 6: Latest News & Brand Logos

- **Scenario**: User views latest blog posts / freight articles and partner brand logo carousel.

### Feature 7: Footer

- **Scenario**: User views footer with quick links, solution links, support links, newsletter subscription form, social icons, and the mandatory Component Dock footer link.

## Verification Checklist

- [ ] `npm run test:coverage` achieves 100% lines/functions/branches/statements
- [ ] All sections match 1:1 with ColorLib Thelogistico preview
- [ ] Footer links Component Dock (`https://www.componentdock.com/`)
- [ ] No reference to ColorLib in app code
