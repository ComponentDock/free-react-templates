# Template: Solvox (Digital Innovation Agency)

## Purpose

Recreation of ColorLib **Eroo** — a dark-themed digital innovation / creative
agency website template.

- **Source:** https://colorlib.com/wp/template/eroo/
- **Preview:** https://preview.colorlib.com/theme/eroo/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name:** `solvox` (apps/solvox, @free-react-templates/solvox)

## Design tokens (extracted from preview CSS)

| Token               | Value                                    | Notes                                              |
| ------------------- | ---------------------------------------- | -------------------------------------------------- |
| Brand accent        | `#cdb30c` (gold)                         | Active service cards, counter icon highlights       |
| Dark surface        | `#1a1a1a`                                | Service card backgrounds                            |
| Darker surface      | `#232429`                                | Portfolio section bg                                |
| Darkest surface     | `#141b25`                                | Navbar / general dark areas                         |
| Hero overlay        | `rgba(0,0,0,0.5)`                       | Semi-transparent over hero images                   |
| Button primary      | `#007bff` (blue)                         | CTA buttons                                         |
| Light section bg    | `#f4f5f9` / `#f7f7f7`                   | FAQ, team, testimonials sections                    |
| Text on dark         | `#fff` / `rgba(255,255,255,0.8)`        | Headings and body on dark backgrounds               |
| Text on light        | `#212529`                                | Body text on light backgrounds                      |
| Muted text           | `#999` / `#b3b3b3`                      | Secondary / caption text                            |
| Heading font         | `"Roboto Condensed", Arial, sans-serif`  | h1-h3 headings                                      |
| Body font            | `"Roboto", Arial, sans-serif`            | Paragraphs, nav, buttons                            |
| Border radius (card) | `5px`                                    | Service cards, general card shapes                  |
| Border radius (btn)  | `0.25rem`                                | Buttons                                             |
| Shadow (card)        | `0 2px 25px -16px rgba(0,0,0,0.26)`     | Subtle card lift                                    |
| Section spacing      | ~`80px` vertical padding                 | Standard ftco-section padding                       |

## Gherkin requirements

### Navbar

```gherkin
Scenario: Sticky navbar with logo and navigation links
  Given the user loads the page
  Then a sticky navbar is visible at the top
  And it contains the logo text "Solvox"
  And navigation links: Home, About, Pricing, Portfolio, Blog, Contact
  And the navbar has a dark background (#141b25)
  And the navbar becomes fixed on scroll
```

### Hero

```gherkin
Scenario: Full-height hero slider with background images
  Given the user loads the page
  Then a full-height hero section is displayed
  And it contains the heading "Digital Innovation Company that Creates Solution"
  And it contains a subheading "Professional & Creative Design Solution"
  And there is a paragraph of descriptive text
  And there are two CTA buttons: "Get Started" and "View Portfolio"
  And the hero has a dark overlay over the background image
  And the slider auto-rotates between slides

Scenario: Hero CTA buttons navigate correctly
  Given the hero section is visible
  When the user clicks "Get Started"
  Then the page scrolls to the services or contact section
  When the user clicks "View Portfolio"
  Then the page scrolls to the portfolio section
```

### Services

```gherkin
Scenario: Services section with 6 service cards
  Given the user scrolls to the services section
  Then the heading reads "We Shape The Perfect Solutions"
  And there is a description paragraph below the heading
  And 6 service cards are displayed in a grid
  And the service cards are: Digital Products, Online Marketing, Graphic Design,
      Application Development, Web Development, UX/UI Design
  And each card has an icon, title, and short description
  And the section has a dark textured background
  And non-active cards have background #1a1a1a
  And the active/hovered card has background #cdb30c (gold)

Scenario: Service card hover interaction
  Given the services section is visible
  When the user hovers over a service card
  Then the card background transitions to the gold accent color #cdb30c
  And the card text color changes to dark for contrast
```

### About

```gherkin
Scenario: About section with background image and text overlay
  Given the user scrolls to the about section
  Then the heading reads "Highest Creative Standards"
  And there is a "Welcome to Solvox" label above the heading
  And there are two columns: image on the left, text on the right
  And the section has a background image with overlay
  And the text describes the company's creative approach
  And there is a CTA button ("Learn More" or similar)
```

### Counter

```gherkin
Scenario: Animated counter statistics
  Given the user scrolls to the counter section
  Then 4 statistics are displayed in a row
  And the statistics are: Project Completed, Our Staff, Services Provided, Happy Customers
  And each stat has an icon and a number
  And the numbers animate (count up) when scrolled into view
  And the section has a background image with overlay
```

### Experience / FAQ

```gherkin
Scenario: Experience section with skill bars and FAQ accordion
  Given the user scrolls to the experience section
  Then the left side shows "We Are Very Experienced & Professionals"
  And 4 skill bars are displayed: Creative Design (95%), Product Engineering (85%),
      Marketing Strategy (95%), Support Tips (90%)
  And the right side shows a FAQ accordion
  And the FAQ has 4 questions: "How to fix a problem?", "How to manage your Website?",
      "How to grow your investments funds?", "What are those requirements for businesses?"
  And the section has a light background (#f4f5f9)

Scenario: FAQ accordion interaction
  Given the FAQ accordion is visible
  When the user clicks a question
  Then the answer expands below the question
  And only one answer is open at a time
  When the user clicks the same question again
  Then the answer collapses
```

### Team

```gherkin
Scenario: Team members grid
  Given the user scrolls to the team section
  Then the heading reads "Professional Creative Team Members"
  And 4 team member cards are displayed in a row
  And each card has a photo, name, and role
  And the team members are: Lloyd Wilson, Liam Neil, Alen Broke, John Hayes
  And there is a "View All Members" link

Scenario: Team member card hover
  Given the team section is visible
  When the user hovers over a team card
  Then social media icons overlay appears on the photo
```

### Portfolio

```gherkin
Scenario: Portfolio grid with filter tabs
  Given the user scrolls to the portfolio section
  Then the heading reads "We Have Done Many Latest Projects"
  And a grid of portfolio items is displayed
  And each item has an image and a category label ("Interior Design")
  And there are filter tabs to filter by category
  And there is a "View All Projects" link
  And the section has a dark background (#232429)
```

### Testimonials

```gherkin
Scenario: Testimonial carousel
  Given the user scrolls to the testimonials section
  Then the heading reads "People Say About Our Works"
  And testimonial cards are displayed in a carousel
  And each testimonial has a quote, author name, and photo
  And carousel navigation dots/arrows allow switching testimonials
  And the section has a light background
```

### Blog

```gherkin
Scenario: Recent blog posts
  Given the user scrolls to the blog section
  Then the heading reads "Recent Post"
  And 3 blog post cards are displayed in a row
  And each card has a featured image, category tag, title, date, and excerpt
  And the blog posts share the title "Marketing Strategies for Digital Ecosystem"

Scenario: Blog post card hover
  Given the blog section is visible
  When the user hovers over a blog card
  Then the card lifts with a shadow effect
```

### Newsletter

```gherkin
Scenario: Newsletter signup section
  Given the user scrolls to the newsletter section
  Then the heading reads "Join Us Newsletter"
  And there is a description: "Sign Up to our Newsletter and get our latest news update"
  And an email input field is displayed
  And a "Subscribe" button is next to the input
  And the section has a dark background with overlay
```

### Footer

```gherkin
Scenario: Footer with columns and contact info
  Given the user scrolls to the footer
  Then the footer has 4 columns: About, Explore, Info, Company
  And the About column has the logo "Solvox" and a description
  And the Explore column has links: About, Contact, Portfolio, Blog
  And the Info column has links: Join us, Blog, Privacy & Policy, Terms & Conditions
  And the Company column has links: About Us, Blog, Contact, Careers
  And there is a "Have a Questions?" column with address and phone
  And there is a copyright line with "Made with Component Dock"
  And the footer has a dark background
```

## Verification checklist

- [ ] Navbar: sticky, dark bg, logo + 6 nav links
- [ ] Hero: full-height slider, heading, subheading, 2 CTAs, dark overlay
- [ ] Services: dark textured bg, 6 cards in grid, gold hover/active state
- [ ] About: bg image, overlay, 2-column layout, heading + description
- [ ] Counter: 4 animated stats with icons, bg image with overlay
- [ ] Experience/FAQ: skill bars left, accordion right, light bg
- [ ] Team: 4 member cards with photos, hover social icons
- [ ] Portfolio: dark bg, grid with filter tabs, category labels
- [ ] Testimonials: carousel, quotes, author info, light bg
- [ ] Blog: 3 post cards, images, titles, dates, excerpts
- [ ] Newsletter: email input + subscribe button, dark bg
- [ ] Footer: 4 columns, links, contact info, copyright with Component Dock link
- [ ] Design tokens: gold accent #cdb30c, dark surfaces, Roboto fonts, 5px radius
- [ ] Fonts loaded: Roboto + Roboto Condensed via Google Fonts
- [ ] Responsive: works on mobile (hamburger nav, stacked sections)
- [ ] Footer links to https://www.componentdock.com/
