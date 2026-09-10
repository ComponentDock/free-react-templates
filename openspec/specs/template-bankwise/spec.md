# Template: Bankwise (Finance / Banking)

## Purpose

Recreation of ColorLib's **Banker** template (https://colorlib.com/wp/template/banker/)
as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

**Source slug:** `banker`
**Preview URL:** https://preview.colorlib.com/theme/banker/
**New name:** `bankwise` (apps/bankwise)
**Package:** `@free-react-templates/bankwise`
**Deploy target:** https://bankwise.free.componentdock.com

## Design tokens

Extracted from `https://preview.colorlib.com/theme/banker/css/style.css`.

| Token | Value | Usage |
|---|---|---|
| Brand / primary | `#fd7e14` (orange) | Buttons, hero overlays, gallery overlay, testimonial arrows, section accents |
| Green accent | `#71bc42` | Highlighted text / accents |
| Footer bg | `#343a40` (dark gray) | Site footer |
| Nav bg | `#eff1f3` (light gray) | Sticky navbar |
| Light section bg | `#f8f9fa` / `#f7f7f7` | Alternating section backgrounds |
| Body text | `#343a40` | Primary text |
| Muted text | `#b3b3b3` | Secondary / subtitle text |
| Font family | `"Open Sans", sans-serif` | Body and headings |
| Border radii | `4px` (inputs), `7px` (cards), `15px` (buttons), `30px` (pills), `50%` (circles) |
| Button style | Orange bg, white text, rounded (15px radius), hover darkens |

## Section order (from live DOM)

1. **Navbar** — sticky top, logo "Bankwise" left, nav links right (Home, About, Services, Pricing, Blog, Contact), hamburger mobile
2. **Hero** — full-width dark overlay bg, centered carousel of headlines: "Banking Solutions", "Financing Solutions", "Savings Accounts" with subtitle + CTA button
3. **Feature icons** — 3-column row, circular icon bg + h3 title + lorem text (Money Savings, Online Shopping, Credit/Debit Cards)
4. **About / CTA big image** — split layout: left = accordion or text, right = form or image; heading "We Solve Your Financial Problem" + lorem text
5. **Team** — "Meet Team" heading, 4-column grid of team member cards (photo, name, role, social icons); appears to be 8 members shown in owl-carousel
6. **Gallery** — filterable image grid (All / Branding / Design / Web buttons), 12 items in 4-column masonry layout
7. **How It Works** — centered heading + 3-step process (01. Online Applications, 02. Get an approval, 03. Card delivery), each with icon, title, description; carousel on left + text on right
8. **Services** — "Our Services" heading, light bg, 6 service cards in 3-col grid (Business Consulting, Credit Card, Income Monitoring, Insurance Consulting, Financial Investment, Financial Management) each with icon
9. **Testimonials** — "Happy Customers" heading, carousel of testimonials (quote + author name + role), orange arrow buttons
10. **Pricing** — 3-column pricing cards (Basic, Premium [popular/highlighted], Professional) with price, features list, CTA button
11. **FAQ** — "Frequently Ask Questions" heading, accordion of FAQ items
12. **Blog** — "Our Blog" heading, 3-column blog card grid (image, date, title, excerpt)
13. **Contact** — "Contact Us" heading, split: left = contact info (address, phone, email, opening hours) + right = contact form (name, email, subject, message, submit)
14. **Footer** — dark bg (#343a40), 4-column: logo/about, Quick Links, Follow Us (social icons), Subscribe Newsletter (email input)

## Gherkin requirements

### Scenario: Navbar displays on page load
```
Given I visit the Bankwise homepage
Then I see a sticky navbar with the logo "Bankwise" on the left
And I see navigation links: Home, About, Services, Pricing, Blog, Contact
And on mobile I see a hamburger menu button
```

### Scenario: Hero section shows rotating headlines
```
Given I visit the Bankwise homepage
Then I see a full-width hero section with a dark overlay background
And I see a headline "Banking Solutions" centered
And there is a call-to-action button below the headline
```

### Scenario: Feature icons section displays three items
```
Given I scroll past the hero section
Then I see three feature columns side by side
And each column has a circular icon, a title, and a description
And the titles are "Money Savings", "Online Shopping", and "Credit / Debit Cards"
```

### Scenario: About section shows split layout
```
Given I scroll to the About section
Then I see a heading "We Solve Your Financial Problem"
And there is descriptive text below the heading
And the section uses a split layout (text + form/image)
```

### Scenario: Team section shows member cards
```
Given I scroll to the Meet Team section
Then I see a heading "Meet Team"
And I see team member cards with photo, name, role, and social icons
And the cards are displayed in a responsive grid
```

### Scenario: Gallery section is filterable
```
Given I scroll to the Gallery section
Then I see filter buttons: All, Branding, Design, Web
And I see a grid of gallery items
When I click a filter button
Then only items matching that category are shown
```

### Scenario: How It Works section shows three steps
```
Given I scroll to the How It Works section
Then I see three numbered steps
And step 01 is "Online Applications"
And step 02 is "Get an approval"
And step 03 is "Card delivery"
```

### Scenario: Services section shows six service cards
```
Given I scroll to the Our Services section
Then I see six service cards in a 3-column grid
And each card has an icon, a title, and a description
And the services are: Business Consulting, Credit Card, Income Monitoring,
    Insurance Consulting, Financial Investment, Financial Management
```

### Scenario: Testimonials section shows customer quotes
```
Given I scroll to the Happy Customers section
Then I see a carousel of testimonials
And each testimonial has a quote, author name, and role
And there are navigation arrows to browse testimonials
```

### Scenario: Pricing section shows three tiers
```
Given I scroll to the Pricing section
Then I see three pricing cards: Basic, Premium, and Professional
And the Premium card is visually highlighted as popular
And each card shows a price, feature list, and a CTA button
```

### Scenario: FAQ section shows accordion
```
Given I scroll to the FAQ section
Then I see a heading "Frequently Ask Questions"
And I see expandable FAQ items
When I click an FAQ question
Then the answer toggles open/closed
```

### Scenario: Blog section shows three posts
```
Given I scroll to the Blog section
Then I see three blog post cards in a row
And each card has an image, date, title, and excerpt
```

### Scenario: Contact section shows form and info
```
Given I scroll to the Contact Us section
Then I see a contact form with fields: name, email, subject, message
And I see contact information: address, phone, email, opening hours
And the form has a submit button
```

### Scenario: Footer displays correctly
```
Given I scroll to the bottom of the page
Then I see a dark footer with four columns
And the columns are: About, Quick Links, Follow Us, Subscribe Newsletter
And the footer contains a "Made with Component Dock" link to https://www.componentdock.com/
```

## Verification checklist

- [ ] Navbar is sticky and responsive (hamburger on mobile)
- [ ] Hero has dark overlay + carousel or static headline with CTA button
- [ ] Feature icons section: 3 columns, circular icon bg, correct titles
- [ ] About section: split layout, correct heading, text content
- [ ] Team section: member cards with photo/name/role/social
- [ ] Gallery: filter buttons work, grid layout, items filter correctly
- [ ] How It Works: 3 numbered steps with correct text
- [ ] Services: 6 cards in 3-col grid with icons
- [   ] Testimonials: carousel with quotes and navigation arrows
- [ ] Pricing: 3 tiers, Premium highlighted, feature lists
- [ ] FAQ: accordion toggle works
- [ ] Blog: 3 post cards with image/date/title/excerpt
- [ ] Contact: form fields present, contact info displayed
- [ ] Footer: dark bg, 4 columns, Component Dock link
- [ ] Brand color #fd7e14 used for buttons and accents
- [ ] Font family is Open Sans
- [ ] All sections match original section order
- [ ] No ColorLib references in app code
- [ ] Placeholder images use picsum.photos
- [ ] Mobile responsive at all breakpoints
