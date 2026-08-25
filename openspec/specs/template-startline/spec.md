# Template: StartLine (Business & SaaS Landing)

## Purpose

Recreation of ColorLib **Startright** (`https://colorlib.com/wp/template/startright/`, live preview: `https://preview.colorlib.com/theme/startright/`).
A professional business and SaaS startup landing page featuring hero section with offset image card, logo cloud, two-column feature split, productivity features grid, stats counter bar, feature link cards, and newsletter footer.

## Design Tokens (Extracted from reference CSS)

- **Primary Color**: `#f2ad5f` (Warm Amber / Gold)
- **Secondary / Dark Color**: `#10495c` (Deep Teal / Slate Blue)
- **Neutral Light**: `#f8f9fa` (Light Gray background for sections)
- **Text Color**: `#212529` (Dark charcoal) / `#6c757d` (Muted gray)
- **Font Family**: `"Poppins", sans-serif`
- **Border Radius**: `4px` / `7px` for cards, rounded-pill / 50% for icons and badges.
- **Button Style**: Solid primary `#f2ad5f` or secondary `#10495c` with subtle padding, hover state transitions.

## Sections (1:1 Structure Order)

1. **Navbar**: Fixed top navigation with brand logo ("StartLine."), navigation links (Home, Solutions, Plans & Pricing, Why Us, Contact Us), and mobile hamburger menu.
2. **Hero Section**: Deep teal background (`#10495c`), large bold heading ("A big business starts small"), CTA button ("Get started"), and overlapping warm amber image wrapper (`#f2ad5f`).
3. **Logo Cloud / As Seen On**: "As seen on" banner with media logos (NYT, Forbes, Fox, BI, NBC).
4. **Section 1 (Business Value Split)**: Deep teal background block on the right, content on the left ("A better way to run your business"), bullet checklist, and amber image wrap.
5. **Section 2 / Productive Feature**: Light background (`bg-light`), heading ("Productive with StartLine"), descriptive paragraphs, testimonial blockquote, and image wrap.
6. **Stats Counter Bar**: Dark teal band with 3 key stats (244982 Reviews, 2488938 Downloads, 1335 Employees).
7. **Features Grid**: 6 feature cards with icons (Easy to use, Fast and Secure, Robust and Intuitive), hover borders and icon background transitions.
8. **Footer**: Multi-column footer (Help, About, Support, Subscribe newsletter form with email input and button, copyright notice linking Component Dock).

## Gherkin Requirements & Scenarios

### Feature: StartLine Startup Landing Page

As a user visiting the StartLine landing page, I want to explore the SaaS features, solutions, stats, and contact options so I can evaluate the product.

#### Scenario: View Navbar and Hero

- Given the page is loaded
- When I view the header
- Then I should see the brand "StartLine." and navigation items (Home, Solutions, Plans & Pricing, Why Us, Contact Us)
- And the hero section should display the headline "A big business starts small" with a "Get started" CTA button and amber image wrapper.

#### Scenario: View Logo Cloud and Section Splits

- Given I scroll down the page
- When I reach the "As seen on" section and Section 1
- Then I should see media partner logos and the business value proposition split with bullet items and image wrapper.

#### Scenario: View Stats and Features Grid

- Given I continue scrolling
- When I reach the stats counter and features grid
- Then I should see review, download, and employee statistics on a dark background followed by 6 interactive feature cards with hover states.

#### Scenario: Newsletter Subscription and Footer Links

- Given I reach the page footer
- When I check the footer content
- Then I should see help, about, and support links, a newsletter subscription form, and the required copyright footer linking `https://www.componentdock.com/`.

## Verification Checklist

- [ ] App builds successfully (`npm run build`)
- [ ] Typecheck passes (`npm run typecheck`)
- [ ] Lint passes (`npm run lint`)
- [ ] Vitest coverage is 100% lines/functions/branches/statements (`npm run test:coverage`)
- [ ] No reference to ColorLib in app source code
- [ ] Footer links `https://www.componentdock.com/` ("Component Dock")
- [ ] `public/CNAME` contains `startline.free.componentdock.com`
- [ ] Homepage set to `https://startline.free.componentdock.com` in `package.json`
