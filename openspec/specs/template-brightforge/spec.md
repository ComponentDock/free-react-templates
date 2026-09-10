# Template: Brightforge (One-Page Business / Corporate)

## Purpose

Recreation of ColorLib "Classic" — a one-page business/corporate template with a hero banner, tabbed about section, features grid, skill charts, portfolio with filters, team showcase, pricing plans, blog, counters, and contact form.

- **Source slug:** `classic`
- **Preview URL:** https://preview.colorlib.com/theme/classic/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/classic-one-page-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)
- **Category:** One-Page Business / Corporate

## Design Tokens

Extracted from the live preview CSS (`style.css`) and DOM analysis.

### Colors

| Token            | Value                               | Usage                                                                  |
| ---------------- | ----------------------------------- | ---------------------------------------------------------------------- |
| brand-blue       | `#a1c4fd`                           | Primary brand color, button gradients, icon backgrounds, counter icons |
| brand-cyan       | `#c2e9fb`                           | Secondary gradient color (paired with brand-blue)                      |
| gradient-primary | `linear-gradient(#a1c4fd, #c2e9fb)` | Primary button background, feature icon bg, skill chart bg             |
| overlay-dark     | `rgba(0, 0, 0, 0.4)`                | Hero header overlay                                                    |
| text-dark        | `#4f4f4f`                           | Body text, headings                                                    |
| text-muted       | `#898989`                           | Secondary/muted text                                                   |
| text-light       | `#bdbdbd`                           | Read more links, light text                                            |
| bg-gray          | `#f9f9f9`                           | Alternate section backgrounds (`.gray-bg`)                             |
| bg-white         | `#ffffff`                           | Primary section backgrounds                                            |
| border-light     | `#e8e8e8`                           | Light borders and dividers                                             |
| white            | `#ffffff`                           | Button text, hero text                                                 |

### Typography

- **Primary font:** `"Montserrat", sans-serif` (headings, body)
- **Script accent font:** `"Satisfy", cursive` (used sparingly for decorative quotes)
- **Fallback body font:** `"Roboto", sans-serif`
- **Icons:** `icofont` icon font
- **Body:** 16px base, `line-height: 1.7`, `font-weight: 400`, color `#4f4f4f`
- **Headings:** Montserrat bold (700), color `#4f4f4f`
- **Hero heading:** Large white text on dark overlay
- **Section titles (`.title`):** Montserrat bold, centered
- **Uppercase labels (`.upper`, `.thing`):** Small caps, muted color
- **Bar title (`.bar-title`):** Has underline accent pseudo-element

### Buttons & Shapes

- **Primary CTA (`.bttn-primary`):** Gradient `#a1c4fd → #c2e9fb`, white text, rounded corners, hover lifts with `translateY(-4px)` and blue shadow
- **Large CTA (`.bttn-lg`):** 18px 40px padding, 20px font size (hero only)
- **Small CTA (`.bttn-sm`):** Smaller padding for inline use
- **Read more links:** `#bdbdbd` text, no background, inline-block

### Section Backgrounds

1. **Hero/Header:** Background image (`images/header-bg.jpg`) + dark overlay (rgba(0,0,0,0.4))
2. **About ("We Offer Quick"):** White bg
3. **Why Choose Us:** Gray bg (`#f9f9f9`) — video left, tabbed content right
4. **Features:** White bg — 5 feature cards in 3+2 grid
5. **Skills ("Our Professional Skill"):** Gray bg (`#f9f9f9`) — skill charts left, description right
6. **Portfolio ("Portfolio Project"):** White bg — filterable grid with category tabs
7. **Team ("Our expert team"):** White bg — 4 team member cards with hover overlay
8. **Pricing ("Pricing Plan"):** Gray bg (`#f9f9f9`) — 4 pricing cards (Basic, Premium, Business, Ultimate)
9. **Blog ("Latest Blog"):** White bg — featured post + list
10. **Counters:** Gray bg (`#f9f9f9`) — 4 stat boxes (1172, 1000, 1200, 320)
11. **Contact ("Contact Now"):** White bg — form left, info right
12. **Footer:** Dark bg — 4 columns + copyright

## Section Structure (page order)

1. **Navbar** — fixed/sticky top:
   - Brand: "Brightforge" (white text)
   - Nav links: Home, Services, Portfolio, Team, Price, Blog, Contact
   - Mobile: hamburger toggle

2. **Hero** — full-width background image + dark overlay:
   - Heading: "We Are Provide Creative Business" (white, with dot accent)
   - Quote: "We Make Sure Best Business Solution For Our Client" (italic/script)
   - "Contact Now" large blue gradient CTA button

3. **About ("We Offer Quick & Powerful Business Solution")** — 2-column:
   - Left: heading, description paragraph, "Learn More" CTA
   - Right: about image (placeholder)

4. **Why Choose Us** — gray bg, 2-column:
   - Left: video thumbnail with play button overlay (YouTube popup)
   - Right: tabbed content (Our Mission, Our Vission, Our Support)
     - Each tab: "SINCE WE HAVE 25 YEARS" subtitle, "EXPERIENCE IN THIS PASSION" heading, description, "View More" CTA

5. **Features** — white bg, 3+2 grid of feature cards:
   - Unique Design (idea icon), Clean Layout (code icon), Well Responsive (monitor icon)
   - Pro Developing (code-alt icon), Well Documented (document icon)
   - Each card: icon (gradient bg), heading, description, "Read More" link

6. **Skills ("Our Professional Skill")** — gray bg, 2-column:
   - Left: heading, description, 4 circular skill charts (WebDesign 95%, Coding 85%, Photoshop 90%, Marketing 75%)
   - Right: service image

7. **Portfolio ("Portfolio Project")** — white bg:
   - Filter tabs: All, Graphics, UI/UX, Web Design, Coding, Developing, Photography
   - Grid of portfolio items with image + overlay on hover
   - 8 items in 4-column grid

8. **Team ("Our expert team")** — white bg, 4-column grid:
   - 4 team member cards: photo, name, position, skill bars (on hover)
   - Members: Roberto Peo (SEO Expert), Hallo Deco (Web Developer), Jone Doe (UI/UX Expert), Aliza France (App Developer)

9. **Pricing ("Pricing Plan")** — gray bg, 4-column grid:
   - 4 plans: Basic ($10/Month), Premium ($50/Month), Business ($80/Month), Ultimate ($100/Month)
   - Each plan: price, feature list, "Get Started" CTA
   - Monthly/Yearly toggle

10. **Blog ("Latest Blog")** — white bg:
    - Featured post: large image + title + description
    - 3 smaller blog list items: thumbnail + title + date

11. **Counters** — gray bg, 4-column:
    - Project Complete: 1172 (bag icon)
    - Happy Clients: 1000 (smile icon)
    - Total Clients: 1200 (businessman icon)
    - Awards: 320 (trophy icon)
    - Each: circular icon (blue gradient bg), count number, label

12. **Contact ("Contact Now")** — white bg, 2-column:
    - Left: contact form (Full Name, Phone, Email, Subject, Message, "Send Now" button)
    - Right: contact info (address, phone, email) + social icons

13. **Footer** — dark bg, 4-column:
    - About: "Brightforge" heading, description, social icons (Facebook, Twitter, Google+, LinkedIn)
    - News: links (Subscription, New Apps, Download now)
    - Company: links (Screenshot, Features, Price)
    - Resources: links (Support, Contact, Privacy & Term)
    - Solutions: links (Bug Fixing, Upgrade, Malware Protect)
    - Copyright line + "Made with Component Dock" link

## Gherkin Scenarios

### Navbar

```gherkin
Scenario: Navbar displays brand and navigation
  Given the user is on the Brightforge homepage
  Then the navbar shows the brand "Brightforge"
  And the nav contains links: Home, Services, Portfolio, Team, Price, Blog, Contact
```

### Hero Section

```gherkin
Scenario: Hero displays heading and CTA
  Given the user is on the Brightforge homepage
  Then the hero section shows "We Are Provide Creative Business"
  And a quote about business solutions is displayed
  And a "Contact Now" blue gradient CTA button is visible

Scenario: Hero has dark overlay
  Given the user views the hero section
  Then a dark semi-transparent overlay covers the background image
  And the text is white and readable
```

### About Section

```gherkin
Scenario: About section shows business description
  Given the user scrolls to the "We Offer Quick" section
  Then a heading about business solutions is shown
  And a description paragraph is present
  And a "Learn More" CTA button is available
```

### Why Choose Us

```gherkin
Scenario: Why Choose Us has tabbed content
  Given the user scrolls to the "Why Choose Us" section
  Then 3 tabs are shown: Our Mission, Our Vission, Our Support
  And a video thumbnail with play button is on the left
  And clicking a tab shows different content
```

### Features

```gherkin
Scenario: Features section shows 5 feature cards
  Given the user scrolls to the features section
  Then 5 feature cards are displayed
  And each card has an icon, heading, description, and "Read More" link
  And the features are: Unique Design, Clean Layout, Well Responsive, Pro Developing, Well Documented
```

### Skills

```gherkin
Scenario: Skills section shows circular charts
  Given the user scrolls to the "Our Professional Skill" section
  Then 4 skill charts are displayed
  And each chart shows a percentage and skill name
  And the skills are: WebDesign (95%), Coding (85%), Photoshop (90%), Marketing (75%)
```

### Portfolio

```gherkin
Scenario: Portfolio has filterable grid
  Given the user scrolls to the "Portfolio Project" section
  Then filter tabs are shown: All, Graphics, UI/UX, Web Design, Coding, Developing, Photography
  And 8 portfolio items are displayed in a grid
  And clicking a filter shows only matching items
```

### Team

```gherkin
Scenario: Team section shows member cards
  Given the user scrolls to the "Our expert team" section
  Then 4 team member cards are displayed
  And each card shows a photo, name, and position
  And hovering reveals skill bars
```

### Pricing

```gherkin
Scenario: Pricing section shows 4 plans
  Given the user scrolls to the "Pricing Plan" section
  Then 4 pricing cards are shown: Basic ($10), Premium ($50), Business ($80), Ultimate ($100)
  And each card has a feature list and "Get Started" CTA
  And a Monthly/Yearly toggle is available
```

### Blog

```gherkin
Scenario: Blog section shows recent posts
  Given the user scrolls to the "Latest Blog" section
  Then 1 featured blog post is displayed with large image
  And 3 smaller blog list items are shown
```

### Counters

```gherkin
Scenario: Counters display statistics
  Given the user scrolls to the counters section
  Then 4 counter boxes are shown
  And the stats are: Project Complete (1172), Happy Clients (1000), Total Clients (1200), Awards (320)
```

### Contact

```gherkin
Scenario: Contact section has form and info
  Given the user scrolls to the "Contact Now" section
  Then a contact form with fields: Full Name, Phone, Email, Subject, Message is shown
  And a "Send Now" button is present
  And contact info (address, phone, email) is on the right
```

### Footer

```gherkin
Scenario: Footer displays columns and copyright
  Given the user scrolls to the footer
  Then 5 columns are shown: About, News, Company, Resources, Solutions
  And social media icons are in the About column
  And a copyright line is present
  And a "Made with Component Dock" link is present
```

## Verification Checklist

- [ ] Navbar: sticky, brand + 7 nav links, mobile hamburger
- [ ] Hero: bg image + dark overlay, heading, quote, "Contact Now" large CTA
- [ ] About: 2-column (text + image), "Learn More" CTA
- [ ] Why Choose Us: video thumbnail + 3 tabs (Mission, Vission, Support)
- [ ] Features: 5 cards with icons, headings, descriptions, "Read More"
- [ ] Skills: 4 circular percentage charts (WebDesign, Coding, Photoshop, Marketing)
- [ ] Portfolio: filter tabs + 8-item grid with hover overlays
- [ ] Team: 4 member cards with hover skill bars
- [ ] Pricing: 4 plan cards with monthly/yearly toggle
- [ ] Blog: featured post + 3 list items
- [ ] Counters: 4 stat boxes with icons and animated numbers
- [ ] Contact: form (5 fields + button) + contact info + social icons
- [ ] Footer: 5 columns, social icons, copyright, Component Dock link
- [ ] Design tokens: brand-blue #a1c4fd, gradient, Montserrat font, gray-bg #f9f9f9
- [ ] Responsive: mobile hamburger, stacked columns
- [ ] Accessibility: semantic HTML, aria labels, keyboard nav
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
