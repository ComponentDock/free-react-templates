# Template: Valet (Virtual Assistant / Business Services)

## Purpose

Recreation of ColorLib's **Virtualassistant** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page app.

- **Source slug:** `virtualassistant`
- **Preview URL:** https://preview.colorlib.com/theme/virtualassistant/
- **Source page:** https://colorlib.com/wp/template/virtualassistant/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/virtualassistant-free-template.jpg
- **Stack:** Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **App folder:** `apps/valet`
- **Package:** `@free-react-templates/valet`

## Design tokens

Extracted from live preview CSS (`css/style.css`) and Cloudflare-subsetted `@font-face` declarations:

| Token | Value | Notes |
|-------|-------|-------|
| **Font family** | `"Roboto", sans-serif` | Weights 300, 400, 500, 700 |
| **Brand accent** | `#21bf73` | Green — price numbers, testimony overlay, footer animated dot |
| **Primary button** | `#007bff` | Bootstrap blue — all CTA buttons |
| **Primary button hover** | `#0069d9` | Darker blue on hover |
| **Footer background** | `#1a1a1a` | Near-black, 7em padding |
| **Footer text** | `rgba(255,255,255,0.9)` | Off-white |
| **Body text** | `#212529` | Dark gray |
| **Section backgrounds** | `#f8f9fa` (light sections), white (default) | bg-light class |
| **Card shadow** | `0 24px 48px -13px rgba(0,0,0,0.05)` | Pricing cards (.block-7) |
| **Card border-radius** | `4px` | Pricing cards |
| **Heading style** | Bold, centered with `.subheading` span + `<h2>` | Subheading is small caps / uppercase |
| **Button radius** | No explicit radius (Bootstrap default 0) | `.btn` has no border-radius |
| **Overlay** | `position: absolute` dark overlay on hero and fullwidth sections | Semi-transparent dark |
| **Testimony overlay** | `#21bf73` solid green, 400px height | Top portion of testimonial section |

## Section order (from preview DOM)

1. **Navbar** — dark (`bg-dark`), logo "Virtual Assistant", 7 nav items (Home, About, Services, How It Works, Pricing Plans, Blog, Contact), responsive toggle
2. **Hero** — full-width background image, dark overlay + second overlay, centered text: H1 "Save Your Precious Time & Outsource Daily Tasks", paragraph, CTA button "Request Our Assistant", animated mouse scroll indicator
3. **Why Choose Us** — full-width section with overlay, split layout (image left, text right), heading "Top Reason Why We Need to Get Virtual Assistant", 4 feature items with icon + title: "Get decided business results", "Save time with qualified assistants", "Work & Life Balance", "Quick formulate your all plans"
4. **Services** — "Virtual Assistant Services" / "Our Services & Offers", 8 service cards in 4-col grid: Family Task, Online Research, Management Task, Project Management, Writing Editing, Multilingual Services, Customer Service, Executive Admin — each with icon + title
5. **Comparison** — no padding, split layout: "Get Your Own Highly Skilled Virtual Assistant" heading, side-by-side "Regular Office Employee" vs "Virtual Assistant Employee" comparison
6. **Testimonials** — green (#21bf73) overlay header, "Testimonial" / "Happy Clients", owl-carousel with 5 testimony cards (avatar, quote, name)
7. **How It Works** — bg-light, "Proceduce" / "How It Works", process steps with icon
8. **Pricing** — bg-light, "Price & Plans" / "Price & Plans", 4 pricing cards: Small ($49/mo), Startup ($79/mo), Medium ($109/mo), Commercial ($149/mo) — each with price, plan name, feature list, "Get Started" CTA
9. **Blog** — "Blog" / "Recent Blog", 3 blog cards with image + title + date + description
10. **Appointment / Contact** — background image, form with Name + Email + Message + "Send message" button
11. **Footer** — dark (#1a1a1a), 5 columns: brand + social icons, Explore links, Legal links, Company links, "Have a Questions?" with address/phone/email; copyright bar with "Made with ❤"

## Gherkin requirements

```gherkin
Feature: Valet — Virtual Assistant Landing Page

  Background:
    Given the app is loaded at the root URL
    Then the page renders without console errors

  # ── Navbar ──

  Scenario: Navbar renders all navigation links
    Then I see a navigation bar with brand text "Virtual Assistant"
    And I see links: "Home", "About", "Services", "How It Works", "Pricing Plans", "Blog", "Contact"
    And the navbar is sticky at the top on scroll

  Scenario: Navbar toggles on mobile
    Given the viewport width is 375px
    When I click the hamburger toggle button
    Then the navigation links become visible

  # ── Hero ──

  Scenario: Hero section displays headline and CTA
    Then I see a hero section with heading "Save Your Precious Time & Outsource Daily Tasks"
    And I see a primary CTA button labeled "Request Our Assistant"
    And I see a decorative mouse scroll indicator below the hero

  # ── Why Choose Us ──

  Scenario: Why Choose Us shows four features
    Then I see a section with heading containing "Why Choose Us"
    And I see 4 feature items with titles:
      | title |
      | Get decided business results |
      | Save time with qualified assistants |
      | Work & Life Balance |
      | Quick formulate your all plans |

  # ── Services ──

  Scenario: Services section shows eight service cards
    Then I see a section with heading "Our Services & Offers"
    And I see 8 service cards with titles:
      | title |
      | Family Task |
      | Online Research |
      | Management Task |
      | Project Management |
      | Writing Editing |
      | Multilingual Services |
      | Customer Service |
      | Executive Admin |

  # ── Comparison ──

  Scenario: Comparison shows two columns
    Then I see a heading "Get Your Own Highly Skilled Virtual Assistant"
    And I see two comparison columns:
      | label |
      | Regular Office Employee |
      | Virtual Assistant Employee |

  # ── Testimonials ──

  Scenario: Testimonials carousel displays client quotes
    Then I see a section with heading "Happy Clients"
    And I see at least 3 testimonial cards with avatar, quote, and name

  # ── How It Works ──

  Scenario: How It Works section shows process steps
    Then I see a section with heading "How It Works"
    And I see at least 3 process step items with icons

  # ── Pricing ──

  Scenario: Pricing shows four plans
    Then I see a section with heading "Price & Plans"
    And I see 4 pricing cards:
      | plan | price |
      | Small Plan | $49 |
      | Startup Plan | $79 |
      | Medium Plan | $109 |
      | Commercial Plan | $149 |
    And each pricing card has a "Get Started" CTA button
    And price numbers are displayed in the brand accent color (#21bf73)

  # ── Blog ──

  Scenario: Blog section shows recent posts
    Then I see a section with heading "Recent Blog"
    And I see 3 blog cards with image, title, date, and description

  # ── Appointment / Contact ──

  Scenario: Contact form accepts name and email
    Then I see a contact/appointment section with a background image
    And I see a form with fields "Your Name" and "Email"
    And I see a "Send message" submit button

  # ── Footer ──

  Scenario: Footer has four link columns and contact info
    Then I see a footer with columns: "Explore", "Legal", "Company", "Have a Questions?"
    And I see social media icons (Twitter, Facebook, Instagram)
    And I see contact info: address, phone number, and email
    And the footer links to "https://www.componentdock.com/"

  Scenario: Footer copyright bar
    Then I see a copyright line in the footer
```

## Verification checklist

- [ ] App compiles and loads without errors (`npm run build`)
- [ ] All 11 sections render in correct order
- [ ] Navbar is sticky, dark-themed, with all 7 links
- [ ] Hero has background image, overlay, H1, paragraph, CTA button
- [ ] Why Choose Us has split layout with image + 4 features
- [ ] Services grid shows 8 cards (4 columns on desktop)
- [ ] Comparison section shows two columns side by side
- [ ] Testimonials use carousel/slider with at least 3 cards
- [ ] How It Works shows step-by-step process
- [ ] Pricing shows 4 cards with correct prices in #21bf73 green
- [ ] Blog shows 3 cards with images
- [ ] Contact form has name, email, message fields
- [ ] Footer has 5 columns, social icons, contact info, ComponentDock link
- [ ] Brand accent color #21bf73 used for prices and testimony overlay
- [ ] Font is Roboto (weights 300/400/500/700)
- [ ] All images use picsum.photos placeholders
- [ ] No references to ColorLib in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] 100% test coverage
- [ ] Responsive: mobile hamburger menu, single-column on small screens
