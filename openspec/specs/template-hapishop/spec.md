# Template: HapiShop (E-Commerce / Fashion Store)

## Purpose

Recreation of the ColorLib "Coloshop" template as a modern React 19 + Vite + Tailwind 4 + TypeScript template. An e-commerce storefront featuring a hero slider, category banners, product grids with filter tabs, a deal-of-the-week countdown, best-seller carousel, benefits bar, blog cards, newsletter signup, and footer.

- **Source template:** [Coloshop](https://colorlib.com/wp/template/coloshop/)
- **Live preview:** https://preview.colorlib.com/theme/coloshop/
- **Screenshot:** ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/coloshop-free-bootstrap-ecommerce-website-template.jpg)

## Design Tokens (extracted from preview CSS)

| Token                | Value                     | Notes                                              |
|----------------------|---------------------------|----------------------------------------------------|
| Font family          | Poppins (400–900)         | Google Fonts import                                 |
| Brand red (CTA)      | `#fe4c50`                 | `.red_button` background, newsletter submit, footer hover |
| Brand red hover      | `#FE7C7F`                 | `.red_button:hover`                                 |
| Dark navy            | `#1e1e27`                 | Top nav, headings color, deal button               |
| Dark navy alt        | `#2b2b34`                 | Hover on dark elements                              |
| Section gray         | `#f2f2f2`                 | Deal of the week background, newsletter background |
| Section light blue   | `#eceff6`                 | Some section alt background                         |
| Body text            | `#989898`                 | Paragraph text                                     |
| Heading text         | `#282828`                 | h1–h6 color                                        |
| Footer text          | `#51545f`                 | Footer nav links and copyright                     |
| Button radius        | `3px`                     | `.red_button` border-radius                        |
| Button height        | `40px`                    | `.red_button` height                               |
| Top nav height       | `50px`                    | `.top_nav`                                         |
| Selection bg         | `#fde0db`                 | Text selection highlight                           |
| Selection text       | `#FF6347`                 | Selected text color                                |
| Green accent         | `#51a042`                 | "New" product badge                                |
| Red badge            | `#FE7C7F` (bubble bg)     | Discount product bubble                            |

## Section Structure (from preview DOM)

1. **Header** — Fixed top bar. Top nav strip (dark navy bg, free shipping text, currency/language/account dropdowns). Main nav: logo, menu links (home, shop, categories, pages), user icons, hamburger menu.
2. **Hero Slider** — Full-width background image with overlay text: "Spring / Summer Collection 2017", "Get up to 30% Off New Arrivals", red "shop now" CTA button.
3. **Banner** — 3-column category cards with background images and hover label: "women's", "accessories", "men's".
4. **New Arrivals** — Section title "New Arrivals", filter tabs (all / women's / accessories / men's), 4-column product grid. Each product: image, favorite icon, discount/new bubble, product name, price (with strikethrough original for discounts), "add to cart" red button.
5. **Deal of the Week** — Gray background section. 2-column layout: large product image left, countdown timer (days / hours / mins / secs) right with "Deal Of The Week" title and "shop now" dark button.
6. **Best Sellers** — Section title "Best Sellers", horizontal product carousel (owl-carousel in original). Same product card pattern.
7. **Benefits** — 4-column row with icon + title + description: free shipping (truck icon), cash on delivery (money icon), 45 days return (undo icon), opening all week (clock icon).
8. **Blogs** — Section title "Latest Blogs", 3-column grid. Each card: background image, centered overlay content with title, meta (author + date), "Read more" link. Hover reveals blog content.
9. **Newsletter** — Gray background. 2-column: left has "Newsletter" heading + description, right has email input + "subscribe" red button.
10. **Footer** — 2-column top row: nav links (Blog, FAQs, Contact us) left, social icons (Facebook, Twitter, Instagram, Skype, Pinterest) right. Bottom row: copyright "©2018 All Rights Reserved" with heart icon and Colorlib link → replaced with Component Dock link.

## Gherkin Requirements

### Header
```gherkin
Feature: Header
  Scenario: Top navigation bar displays
    Given the page loads
    Then a top nav bar should be visible with dark navy (#1e1e27) background
    And "free shipping on all u.s orders over $50" text should be shown
    And currency, language, and account dropdowns should be present

  Scenario: Main navigation shows logo and menu
    Given the page loads
    Then a logo should be visible in the main nav
    And menu links (Home, Shop, Categories, Pages) should be present
    And user action icons should be visible
    And a hamburger menu icon should be present on mobile
```

### Hero Slider
```gherkin
Feature: Hero Slider
  Scenario: Hero section displays promotional content
    Given the page loads
    Then a full-width hero area should be visible with a background image
    And a subtitle "Spring / Summer Collection 2017" should appear
    And a headline "Get up to 30% Off New Arrivals" should appear
    And a red "shop now" CTA button should be visible

  Scenario: Hero CTA button styling
    Given the hero section is visible
    Then the "shop now" button should have brand red (#fe4c50) background
    And it should have 3px border-radius
    And on hover it should lighten to #FE7C7F
```

### Banner
```gherkin
Feature: Category Banners
  Scenario: Three category cards display
    Given the page loads
    Then 3 category banner cards should appear in a row
    And they should show "women's", "accessories", and "men's" labels
    And each card should have a background image

  Scenario: Banner cards are interactive
    Given the banner section is visible
    When a user hovers over a banner card
    Then the category label should be prominently visible
```

### New Arrivals
```gherkin
Feature: New Arrivals
  Scenario: Product grid displays with filter tabs
    Given the page loads
    Then a "New Arrivals" section title should appear
    And filter tabs should show: All, Women's, Accessories, Men's
    And "All" tab should be active by default
    And a product grid should display multiple product cards

  Scenario: Product card shows all details
    Given the new arrivals section is visible
    Then each product card should show: image, product name, price
    And discounted products should show both current and original price
    And some products should have a "new" badge or discount bubble
    And an "add to cart" red button should be below each product

  Scenario: Filter tabs filter products
    Given the new arrivals section is visible
    When a user clicks "women's" filter
    Then only women's category products should be visible
    When a user clicks "All" filter
    Then all products should be visible again
```

### Deal of the Week
```gherkin
Feature: Deal of the Week
  Scenario: Deal section displays with countdown
    Given the page loads
    Then a "Deal Of The Week" section should appear on gray (#f2f2f2) background
    And a large product image should be shown on the left
    And a countdown timer should show days, hours, minutes, seconds
    And a dark "shop now" button should be visible

  Scenario: Countdown timer counts down
    Given the deal section is visible
    Then the timer values should be numeric
    And seconds should decrement over time
```

### Best Sellers
```gherkin
Feature: Best Sellers
  Scenario: Carousel displays best-selling products
    Given the page loads
    Then a "Best Sellers" section title should appear
    And a horizontal carousel/slider of products should be visible
    And each slide should show a product card with image, name, and price
```

### Benefits
```gherkin
Feature: Benefits Bar
  Scenario: Four benefit items display
    Given the page loads
    Then 4 benefit items should appear in a row
    And they should show: free shipping, cash on delivery, 45 days return, opening all week
    And each item should have an icon, title, and description
```

### Blogs
```gherkin
Feature: Latest Blogs
  Scenario: Blog cards display
    Given the page loads
    Then a "Latest Blogs" section title should appear
    And 3 blog cards should display in a row
    And each card should have a background image, title, meta info, and "Read more" link

  Scenario: Blog card hover reveals content
    Given the blog section is visible
    When a user hovers over a blog card
    Then the blog content should be prominently visible
```

### Newsletter
```gherkin
Feature: Newsletter Signup
  Scenario: Newsletter form displays
    Given the page loads
    Then a "Newsletter" section should appear on gray background
    And heading text "Subscribe to our newsletter and get 20% off your first purchase" should be shown
    And an email input field and "subscribe" button should be present

  Scenario: Newsletter form validation
    Given the newsletter section is visible
    When the user submits without an email
    Then the browser should show a validation message
```

### Footer
```gherkin
Feature: Footer
  Scenario: Footer displays navigation and social links
    Given the page loads
    Then a footer should be visible
    And nav links (Blog, FAQs, Contact us) should be present
    And social media icons (Facebook, Twitter, Instagram, Skype, Pinterest) should be shown
    And a copyright line should be present

  Scenario: Footer links to Component Dock
    Given the footer is visible
    Then a link to https://www.componentdock.com/ should be present
    And it should display as "Component Dock"
```

## Verification Checklist

- [ ] All 10 sections rendered in correct order matching preview DOM
- [ ] Brand colors match: red #fe4c50, dark #1e1e27, gray #f2f2f2
- [ ] Font is Poppins with correct weights
- [ ] Buttons have 3px radius, correct height, hover transition
- [ ] Product cards show image, name, price, bubble badge
- [ ] New arrivals filter tabs toggle product visibility
- [ ] Deal countdown timer is functional and counts down
- [ ] Benefits section has 4 items with icons (lucide-react)
- [ ] Blog cards have hover reveal effect
- [ ] Newsletter form validates email input
- [ ] Footer links to Component Dock
- [ ] All placeholder images use picsum.photos
- [ ] No ColorLib references in app code
- [ ] 100% test coverage for all components
- [ ] TypeCheck, lint, and build all pass
