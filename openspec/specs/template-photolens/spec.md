# Template: Photolens (Portfolio / Photography)

## Purpose

Recreation of ColorLib [Photosen](https://colorlib.com/wp/template/photosen/) (preview: https://preview.colorlib.com/theme/photosen/), implemented as `@free-react-templates/photolens` using Vite, React 19, Tailwind CSS 4, and TypeScript.

## Design tokens

- **Background**: `#000000` (deep black)
- **Text**: `#ffffff` (headings/white text), `#777777` (body text / muted)
- **Primary / Brand accent**: `#0d6efd` (blue accent for active states & hover links)
- **Fonts**: `Josefin Sans` (headings, nav), `Roboto Mono` (mono accents), sans-serif
- **Buttons**: Square (`border-radius: 0`), uppercase, letter-spacing, outline-white hover effects
- **Grid items**: `.image-wrap-2` with grayscale filter by default, hover color restore + scale + dark overlay + centered category label and "More Photos" button.

## Requirements & Gherkin scenarios

### 1. Navigation bar

- **Requirement**: The app must display a top navigation bar with the brand title, links (Home, Gallery, Services, About, Contact), social icons, and mobile menu toggle.
- **Scenario**: User views the navbar
  - Given the user loads the Photolens homepage
  - Then the navbar displays the brand name "Photolens"
  - And displays navigation links: Home, Gallery, Services, About, Contact
  - And displays social media icons (Facebook, Twitter, Instagram, YouTube)
  - And displays a hamburger menu toggle for mobile viewports.

### 2. Photography Portfolio Grid

- **Requirement**: The app must display a responsive 3-column grid of photography cards with grayscale filter and hover overlay effects.
- **Scenario**: User interacts with gallery cards
  - Given the user views the gallery section
  - Then cards are displayed in a responsive grid layout
  - And each card shows a photography image with grayscale styling by default
  - And hovering over a card removes the grayscale filter, scales the image, displays a dark overlay, and reveals the category title and "More Photos" button.

### 3. Footer

- **Requirement**: The app must display a dark footer with copyright information and a required link to Component Dock (`https://www.componentdock.com/`).
- **Scenario**: User scrolls to footer
  - Given the user scrolls to the bottom of the page
  - Then the footer displays copyright and links to Component Dock (`https://www.componentdock.com/`).

## Verification checklist

- [ ] Typecheck passes (`npm run typecheck`)
- [ ] Lint passes (`npm run lint`)
- [ ] Tests pass with 100% coverage (`npm run test:coverage`)
- [ ] Build succeeds (`npm run build`)
- [ ] Footer links Component Dock
- [ ] Public CNAME is `photolens.free.componentdock.com`
