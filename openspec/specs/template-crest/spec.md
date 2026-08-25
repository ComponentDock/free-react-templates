# OpenSpec Specification: Template `crest` (Business / Consulting Agency)

## Purpose

Recreation of ColorLib **Victor** (`https://colorlib.com/wp/template/victor/`, preview: `https://preview.colorlib.com/theme/victor/`).
A business consulting and agency website template built with Vite, React 19, Tailwind CSS 4, and TypeScript.
Designed for business consultancies, digital agencies, financial services, and professional service firms.

## Design Tokens

- **Brand Colors**:
  - Primary / Accent Orange: `#FF6D21` (`bg-[#FF6D21]`, `text-[#FF6D21]`)
  - Dark Navy: `#232F55` (headings, footer gradient end, dark backgrounds)
  - Navy Gray: `#454E6D` (body text, footer gradient start)
  - Light Gray Background: `#F8FAFC` (`bg-[#F8FAFC]`, gray-bg sections)
  - White: `#ffffff`
- **Typography**:
  - Body & Headings: `DM Sans` (sans-serif, weights 300–700)
- **Buttons**:
  - Primary `.btn`: Solid orange `#FF6D21`, border-radius `5px`, padding `22px 32px`, white text, hover reveals dark navy `#232F55` slide-in.
  - White `.white-btn`: White background, orange text `#FF6D21`, border-radius `5px`, hover reveals orange slide-in.
  - Hero `.hero-btn`: Same as primary with larger padding `33px 58px`.
  - Browse link `.browse-btn`: Orange text with underline bar on hover.
- **Section Backgrounds**:
  - Hero: Full-width background image, no overlay.
  - Gray sections: `#F8FAFC`.
  - Emergency/parallax: Background image with dark overlay.
  - Footer: Gradient from `#454e6d` to `#232f55`.
  - Sticky header: Same gradient as footer.
- **Section Titles**:
  - h2: `44px`, weight `700`, color `#232F55`, line-height `1.4`.
- **Sections (in order)**:
  1. Header/Navbar (transparent over hero, sticky on scroll, logo, nav links, phone number + CTA)
  2. Hero slider area (background image, headline, subtitle, CTA button, hero shape image)
  3. Client highlights (3 cards: Happier customers, Faster growth, Connected workflow)
  4. About / Project section (accordion FAQ + image, section title)
  5. Services area (gray bg, service cards with icons + Learn More links)
  6. Emergency / Testimonial (parallax bg image, quote with attribution)
  7. Featured projects carousel (image + text cards)
  8. Support company / About (image + text, CTA button)
  9. Footer (dark gradient, logo, social links, services, navigation, contact, Component Dock link)

---

## Requirements & Scenarios

### Requirement 1: Navigation & Header

- Transparent header over the hero with logo, navigation links (Home, About, Services, Portfolio, Blog with submenu, Contact), phone number display, and "Get Free Consultant" CTA button. Becomes sticky with dark gradient background on scroll.
- Scenarios:
  - Scenario: User views header with all nav links visible.
  - Scenario: User clicks "Get Free Consultant" CTA.
  - Scenario: User scrolls and header becomes sticky with gradient background.

### Requirement 2: Hero Section

- Full-width hero with background image on the left, hero shape image on the right. Headline "Get the help you need, every step of the way", subtitle "Design better websites and spend less with Essentials.", and "Get Started" CTA button.
- Scenarios:
  - Scenario: User views hero with headline and CTA.
  - Scenario: User clicks "Get Started" button.

### Requirement 3: Client Highlights

- Three-column card grid with client images and descriptions: "Happier customers", "Faster growth", "Connected workflow". Each card has an image and short description text.
- Scenarios:
  - Scenario: User views the three client benefit cards.

### Requirement 4: About / Project Section (Accordion FAQ)

- Section title "Flexible support to suit your business needs" with description paragraph. Left side: image. Right side: accordion with 4 expandable items (FAQ-style). First item collapsed, second expanded by default.
- Scenarios:
  - Scenario: User reads the section title and description.
  - Scenario: User clicks accordion items to expand/collapse content.

### Requirement 5: Services Area

- Gray background section with title "Improved Digital Experience" and description. Two service cards with SVG icons, titles "Design & Development", bullet lists, and "Learn More" links. Right side: services banner image.
- Scenarios:
  - Scenario: User views the services section with cards.
  - Scenario: User clicks "Learn More" on a service card.

### Requirement 6: Emergency / Testimonial

- Full-width parallax background image section with a quote card: quote text from "Barb Dwyer, CEO of Victor". Dark overlay on background.
- Scenarios:
  - Scenario: User reads the testimonial quote.

### Requirement 7: Featured Projects

- Title "Handpicked by Victor" with description. Carousel/slider of project cards, each with a split layout: image on left, logo + heading + description + "View Project" link on right.
- Scenarios:
  - Scenario: User browses featured project cards.
  - Scenario: User clicks "View Project" link.

### Requirement 8: Support Company / About

- Title "Professional who works to help with your business." with description paragraph and "Get Started" CTA button. Right side: illustration/image.
- Scenarios:
  - Scenario: User reads the support section and clicks CTA.

### Requirement 9: Footer

- Dark gradient background (`#454e6d` → `#232f55`). Columns: logo + description + social links (Facebook, Instagram, LinkedIn, YouTube), Services links, Navigation links, Contact info (email, address, phone). Copyright bar at bottom with mandatory link to `https://www.componentdock.com/` ("Component Dock").
- Scenarios:
  - Scenario: User checks footer links and finds Component Dock attribution.

---

## Verification Checklist

- [ ] TypeScript strict check passes (`npm run typecheck` or per-app gate).
- [ ] Tailwind CSS 4 compiles without error (`@theme` tokens configured).
- [ ] All 1:1 sections rendered cleanly with responsive layouts.
- [ ] 100% test coverage maintained (`npm run test:coverage`).
- [ ] Footer links to `https://www.componentdock.com/`.
- [ ] CNAME configured as `crest.free.componentdock.com`.
