# Template: Unioncorp (Financial & Business Consulting)

## Purpose

Recreation of ColorLib **Unioncorp** (`https://colorlib.com/wp/template/unioncorp/`, preview: `https://preview.colorlib.com/theme/unioncorp/`) as a modern React 19 + TypeScript + Tailwind CSS 4 application (`@free-react-templates/unioncorp`).

## Design Tokens & Aesthetic

- **Primary Brand Color**: `#4f86f9` (Bright Financial Blue)
- **Secondary / Dark Color**: `#052c43` (Deep Navy)
- **Accent Color**: `#3bd381` (Success / Green Accent)
- **Background Colors**: Pure white (`#ffffff`), Light neutral (`#f9faff` / `#f8f9fa`), Dark overlay (`rgba(5, 44, 67, 0.8)`)
- **Typography**: Poppins, sans-serif (clean modern sans with strong weights for headings)
- **Button Shapes**: Rounded corners (`rounded-lg` / `rounded-md`), solid blue fill with white text, smooth hover states.
- **Aesthetic**: Professional corporate finance & consultation platform, featuring hero carousel/banner, comprehensive services grid, stats counter, client testimonials, leadership team, and blog showcase.

## Section Structure & Requirements

1. **Navbar**: Top bar with contact info (phone, email, social links) and main navigation menu (Home, About, Services, Work, Pricing, Blog, Contact, Get Started CTA).
2. **Hero Section**: Full-screen banner with background image, dark navy overlay, headline ("Build Your Financial Plan With Our Specialists"), subtext, and action buttons ("Get Started", "Learn More").
3. **Trust / About Overview Section**: "More than 40M+ Trusted Our Financial & Consultation Institution", company intro, professional consultants highlight, and core values.
4. **Services Section**: "Our Exclusive Services We Offer For You" featuring cards for Financial Planning, Investments Management, Business Loan, Taxes Consulting, Insurance Consulting, Risk Management, etc.
5. **Case Studies / Work Gallery**: "We Take Every Case Studies Very Seriously" with image cards and overlay details.
6. **Statistics Counter Section**: "Technical Statistics" banner with animated/styled metrics (e.g., 60+ Countries, 9200+ Satisfied Clients, 5800+ Projects Completed, 100% Commitment).
7. **Team Section**: "Our Leadership Team" showcasing senior financial experts and consultants with social links.
8. **Testimonials Section**: "Happy Customers" client feedback carousel / cards with ratings and quotes.
9. **Blog Section**: "Recent From Blog" latest financial insights and corporate milestones articles.
10. **CTA Banner**: "Looking for business opportunity?" call-to-action banner with primary blue background and contact button.
11. **Footer**: Comprehensive footer with company summary, quick links, newsletter signup, and mandatory "Made with [Component Dock](https://www.componentdock.com/)" attribution link.

## Gherkin Requirements & Scenarios

### Feature: Navigation

- **Scenario**: User views navigation bar and clicks items
  - Given the user is on the Unioncorp home page
  - When the user views the navbar
  - Then the brand logo, nav links (About, Services, Work, Pricing, Blog, Contact), and CTA button are visible
  - And clicking a nav link scrolls or navigates to the respective section

### Feature: Hero Banner

- **Scenario**: User views the hero section
  - Given the user loads the page
  - When the hero section is rendered
  - Then it displays the headline "Build Your Financial Plan With Our Specialists"
  - And action buttons "Get Started" and "Learn More" are interactive

### Feature: Services Grid

- **Scenario**: User explores financial services
  - Given the user scrolls to the services section
  - When the services cards are displayed
  - Then each card shows an icon, title, description, and "Learn More" link

### Feature: Statistics & Counters

- **Scenario**: User views technical statistics
  - Given the user scrolls to the statistics counter section
  - When the section renders
  - Then statistical milestones (clients, projects, success rate) are clearly displayed

### Feature: Footer Attribution

- **Scenario**: User scrolls to footer
  - Given the user reaches the bottom of the page
  - When the footer renders
  - Then it includes the mandatory link to `https://www.componentdock.com/` as "Component Dock"

## Verification Checklist

- [ ] App builds successfully (`npm run build`)
- [ ] Typecheck passes (`npm run typecheck`)
- [ ] Vitest tests pass with 100% coverage (`npm run test:coverage`)
- [ ] Footer links Component Dock correctly
- [ ] No mention of ColorLib in source code
