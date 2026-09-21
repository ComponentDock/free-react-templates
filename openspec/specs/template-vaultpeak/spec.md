# Template: VaultPeak (Finance & Banking)

## Purpose

Recreation of ColorLib **Banker** template as a modern React 19 + Vite + Tailwind 4 + TypeScript single-page template.

- **Source:** https://colorlib.com/wp/template/banker/
- **Preview:** https://preview.colorlib.com/theme/banker/
- **New name:** `vaultpeak` (apps/vaultpeak, @free-react-templates/vaultpeak)
- **Stack:** Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Description:** A professional banking/finance website template with a full-screen hero, feature highlights, about section, team grid, services list, pricing cards, FAQ, testimonials carousel, image gallery with filters, blog posts, contact form, and a dark footer with newsletter signup.

## Design Tokens

Extracted from https://preview.colorlib.com/theme/banker/css/style.css and preview HTML:

| Token | Value | Usage |
|---|---|---|
| **Brand primary** | `#fd7e14` (orange) | Buttons, links, active states, navbar highlight, form focus |
| **Text body** | `gray` (#808080) | Body text color |
| **Text black** | `#000000` | Headings, card titles |
| **Success green** | `#71bc42` | Check icons in feature lists |
| **Footer bg** | `#343a40` (dark gray) | Footer background |
| **Section bg-light** | `#f8f9fa` (very light gray) | Services, pricing, contact sections |
| **Overlay** | `rgba(184, 178, 166, 0.7)` | Hero image overlay (warm beige) |
| **Font family** | `"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` | All text |
| **Font weights** | 300 (light desc), 400 (body), 700 (bold headings), 900 (hero h1) | Various |
| **Button radius** | `30px` (pill shape) | All .btn elements |
| **Button padding** | `10px 30px` | All .btn |
| **Form input radius** | `30px` (pill) | .form-control |
| **Form input height** | `43px` | .form-control |
| **Hero height** | `100vh` (min 600px) | .site-blocks-cover |
| **Hero h1 size** | `4rem` (2rem mobile) | .site-blocks-cover h1 |
| **Hero desc size** | `1.4rem` | .site-blocks-cover .desc |
| **Dropdown border-top** | `2px solid #fd7e14` | .dropdown active indicator |
| **Circle bg decoration** | `#f8f9fa`, 300px circle, offset bottom-right | .circle-bg:after |
| **Footer social icons** | facebook, twitter, instagram, linkedin | .icon-* classes |

### Icon approach

The original uses icomoon + flaticon icon fonts. In the React recreation, use `lucide-react` icons instead (Wallet, ShoppingCart, CreditCard, Users, Briefcase, HelpCircle, MessageCircle, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Search, Menu, X, ChevronRight, Heart).

## Gherkin Requirements

### Scenario: Navbar
```
Given the user visits the page
Then a sticky navbar displays "VaultPeak" logo with an orange dot
And navigation links: Home, About Us (with dropdown), Blog, Contact
And social icons (Facebook, Twitter, LinkedIn) in the nav
And on scroll the navbar becomes white with shadow and orange logo
```

### Scenario: Hero
```
Given the user sees the hero section
Then a full-screen background image is shown with a warm beige overlay
And a rotating carousel displays three headlines:
  - "Banking Solutions"
  - "Financing Solutions"
  - "Savings Accounts"
And each slide shows a descriptive paragraph
And a scroll-down mouse icon animates at the bottom
```

### Scenario: Features (3-column)
```
Given the user scrolls past the hero
Then three feature cards appear side by side:
  - "Money Savings" with wallet icon
  - "Online Shoppings" with cart icon
  - "Credit / Debit Cards" with credit card icon
And each card has an icon, title, and short description
```

### Scenario: About / Amortization
```
Given the user sees the amortization section
Then a circular-background image appears on the left
And "Amortization Computation" heading with a checklist on the right
And an email input with "Submit Email" pill button
```

### Scenario: About Us
```
Given the user sees the About Us section
Then a centered "About Us" heading with lead text
And a circular-background image on the left
And "We Solve Your Financial Problem" heading with two paragraphs on the right
```

### Scenario: Team
```
Given the user sees the Team section
Then "Meet Team" heading with lead text
And a 4-column grid of team member cards
And each card shows a photo with social icon overlay (FB, Twitter, LinkedIn, Instagram)
And name and position below the photo
```

### Scenario: Services
```
Given the user sees the Services section
Then "Our Services" heading on a light background
And a 3-column grid of service cards with:
  - icon, heading, description, "Learn More" link
And items: Business Consulting, Credit Card, Income Monitoring, Tax Management, Insurance Policy, Financial Planning
```

### Scenario: Pricing
```
Given the user sees the Pricing section
Then "Pricing" heading on a light background
And 3 pricing cards side by side:
  - Basic ($47/year), Premium ($200/year, highlighted), Professional ($750/year)
And each card has a plan name, price, feature checklist (some struck-through), and "Buy Now" button
And the Premium card uses the primary orange "Buy Now" button
```

### Scenario: FAQ
```
Given the user sees the FAQ section
Then "Frequently Ask Questions" heading
And a 2-column layout with 8 FAQ items total
And each item has an h4 question and a paragraph answer
```

### Scenario: Testimonials
```
Given the user sees the Testimonials section
Then "Happy Customers" heading
And a carousel of testimonial slides
And each slide shows a blockquote, author photo, and author name
```

### Scenario: Gallery
```
Given the user sees the Gallery section
Then "Gallery" heading
And filter buttons: All, Events, Party, Holidays
And a 4-column grid of images
And clicking an image opens a lightbox overlay
```

### Scenario: Blog
```
Given the user sees the Blog section
Then "Our Blog" heading
And 3 blog post cards in a row
And each card has a featured image, title, meta (author · date · category), excerpt, and "Continue Reading..." link
```

### Scenario: Contact
```
Given the user sees the Contact section
Then "Contact Us" heading on a light background
And 3 contact info columns: address, phone, email with icons
And a white contact form with fields: First Name, Last Name, Email, Subject, Message
And a "Send Message" pill button
```

### Scenario: Footer
```
Given the user sees the footer
Then a dark background (#343a40) footer
And left columns: "About Us" paragraph, "Quick Links" list, "Follow Us" social icons
And right column: "Subscribe Newsletter" with email input and "Send" button
And a copyright line at the bottom
And a link to https://www.componentdock.com/ ("Component Dock")
```

### Scenario: Mobile responsiveness
```
Given the user views on mobile
Then the navbar collapses to a hamburger menu
And team/services/blog cards stack vertically
And pricing cards stack vertically
And the gallery grid reduces columns
And the contact form fields stack
```

## Verification Checklist

- [ ] All 11 sections implemented in correct order (hero → features → about/amortization → about-us → team → services → pricing → faq → testimonials → gallery → blog → contact → footer)
- [ ] Navbar sticky with scroll behavior (white bg + shadow when scrolled)
- [ ] Hero carousel rotates through 3 slides
- [ ] Team grid shows 4 members with social overlay
- [ ] Services grid shows 6 items in 3 columns
- [ ] Pricing cards: 3 tiers with correct prices, Premium highlighted
- [ ] FAQ in 2-column layout, 8 items
- [ ] Testimonials carousel with 3 slides
- [ ] Gallery filter buttons work (All/Events/Party/Holidays)
- [ ] Blog: 3 post cards with images and meta
- [ ] Contact form with all fields
- [ ] Footer dark bg, newsletter signup, ComponentDock link
- [ ] Design tokens match: #fd7e14 orange, Open Sans font, pill buttons (30px radius), #343a40 footer
- [ ] Responsive on mobile (hamburger menu, stacked layouts)
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] No ColorLib references in app code
- [ ] public/CNAME = vaultpeak.free.componentdock.com
- [ ] homepage = https://vaultpeak.free.componentdock.com
