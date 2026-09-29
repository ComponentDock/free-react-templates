# Template: RankPulse (SEO Agency Landing Page)

## Purpose

Recreation of ColorLib **Seogo** — a single-page SEO agency/landing template.

- **ColorLib source:** <https://colorlib.com/wp/template/seogo/>
- **Preview URL:** <https://preview.colorlib.com/theme/seogo/>
- **New name:** `rankpulse`
- **App folder:** `apps/rankpulse`
- **Package:** `@free-react-templates/rankpulse`
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens

Extracted from `https://preview.colorlib.com/theme/seogo/css/style.css`.

| Token | Value | Usage |
|-------|-------|-------|
| Brand primary | `#FF008C` | CTA buttons, gradient start, hover accents |
| Brand secondary | `#FF6357` | Gradient end on primary buttons |
| Button gradient | `linear-gradient(to right, #ff008c 0%, #ff6357 100%)` | `.boxed-btn3` solid CTA buttons |
| Heading color | `#001D38` | Dark navy for headings |
| Body text | `#1F1F1F` | Near-black body text |
| Muted text | `#727272` / `#7e7e7e` | Secondary/description text |
| Footer background | Dark with background image | Dark footer section |
| Light tint | `#fbf9ff` | Features area subtle background |
| Font family | `"Poppins", sans-serif` | Global body + headings |
| Button radius | Rounded (no hard radius; slight rounded corners) | CTA buttons |
| Avatar radius | `50%` | Testimonial author avatars, circular crops |
| Decorative shapes | Polygon/abstract shapes overlaid on hero | `img/ilstrator/` assets |

### Color palette from accent chips (CSS)

- `#6382e6` (blue), `#e66686` (pink), `#f09359` (orange), `#73fbaf` (green), `#a367e7` (purple)

## Section Structure (from live preview DOM)

Sections in exact order as rendered:

1. **Navbar** — Sticky header, logo (left), nav links (Home, Pages dropdown, Services, Case Study, Blog dropdown, Contact), phone CTA button (right)
2. **Hero / Slider** — Full-width banner image background, decorative polygon shapes, headline: "BoostUp your Business & Get top of Search Engine", "Get Started" CTA (gradient button), illustration below headline
3. **Services** — 3-column grid: SEO/SEM, Digital Marketing, Social Media. Each: SVG icon, title, description paragraph, "Learn More" text link
4. **Company Info** — Split layout: illustration (left), heading "We are an SEO company that specializes in developing." (right), paragraph, "About Us" CTA button
5. **Case Study** — Dark background image, heading "Our Selected Case Study", carousel of 6 items: Product Design, Custom Website, Digital Marketing (repeated). Each: thumbnail image, category title, tags
6. **Accordion / FAQ** — Illustration (right), accordion list of questions (left). FAQ-style expand/collapse
7. **Features** — 3x2 grid of feature cards: Custom design, Paid Search result, Global Search option, Email Marketing, Custom Software, Setup business goal. Each: icon, title, short description
8. **Testimonials** — Carousel: quote icon, testimonial paragraph, author avatar (circular), author name, role/title
9. **Footer** — Dark background:
   - CTA bar: "Let's Start your project, Mail Us" + phone number + email
   - Widget columns: Logo + description + social links | Services links | Useful Links | Newsletter form + subscribe button
   - Copyright bar: "Made with ❤ by Colorlib" → replace with Component Dock

## Gherkin Requirements

### Feature: RankPulse — SEO Agency Landing Template

```gherkin
Feature: RankPulse — SEO Agency Landing Page
  As a visitor to an SEO agency website
  I want to see a professional, conversion-focused landing page
  So that I can understand the services and get in touch

  Background:
    Given the page is loaded at the root URL

  Scenario: Navbar renders with all navigation links
    Then the navbar contains links for "Home", "Services", "Case Study", and "Contact"
    And the navbar contains a phone number CTA element
    And the navbar is sticky on scroll

  Scenario: Hero section displays headline and CTA
    Then the hero section contains a heading about boosting business / search engine
    And the hero section has a "Get Started" call-to-action button
    And the hero section has a decorative illustration

  Scenario: Services section shows three service cards
    Then there are exactly 3 service cards visible
    And each service card has an icon, title, description, and "Learn More" link
    And the services are "SEO/SEM", "Digital Marketing", and "Social Media"

  Scenario: Company Info section has split layout
    Then there is a company info section with heading about SEO specialization
    And there is an "About Us" button
    And there is an illustration on the left side

  Scenario: Case Study carousel is interactive
    Then there is a "Our Selected Case Study" section heading
    And there are case study cards in a carousel
    And each card has a thumbnail, title, and tags

  Scenario: Accordion FAQ section is functional
    Then there is an accordion section with expandable questions
    And clicking a question toggles its answer visibility

  Scenario: Features section displays six feature cards
    Then there are exactly 6 feature cards in a grid
    And each feature card has an icon, title, and description
    And the features include "Custom design" and "Email Marketing"

  Scenario: Testimonials carousel is interactive
    Then there is a testimonials section with a carousel
    And each testimonial has a quote, author name, role, and circular avatar

  Scenario: Footer contains all required elements
    Then the footer has a "Let's Start your project" CTA bar
    And the footer has a newsletter subscription form
    And the footer has social media links
    And the footer has a "Component Dock" attribution link
    And the footer contains service links and useful links columns

  Scenario: Page is responsive
    Then the navbar collapses into a mobile menu on small viewports
    And service cards stack vertically on mobile
    And feature cards stack vertically on mobile
```

## Verification Checklist

- [ ] All 9 sections present in correct order
- [ ] Navbar: sticky, logo, nav links, phone CTA, mobile hamburger
- [ ] Hero: banner background, headline, gradient CTA, illustration
- [ ] Services: 3 cards with icons, titles, descriptions, "Learn More"
- [ ] Company Info: split layout, heading, paragraph, "About Us" button
- [ ] Case Study: carousel with cards (thumbnail, title, tags)
- [ ] Accordion: expandable FAQ items
- [ ] Features: 6 cards in 3x2 grid, each with icon/title/description
- [ ] Testimonials: carousel, quote icon, author info, circular avatar
- [ ] Footer: CTA bar, 4 widget columns, newsletter form, social links, Component Dock link
- [ ] Design tokens applied: brand gradient #FF008C → #FF6357, Poppins font, #001D38 headings
- [ ] Responsive: mobile menu, stacking grids
- [ ] No ColorLib references in app code
- [ ] `public/CNAME` set to `rankpulse.free.componentdock.com`
- [ ] Footer links to `https://www.componentdock.com/`
