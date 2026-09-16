# Template: Evergreen (Business One-Page)

## Purpose

Recreation of ColorLib **Classic** — a one-page business/agency website template.

- **Source**: https://colorlib.com/wp/template/classic/
- **Preview URL**: https://preview.colorlib.com/theme/classic/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/classic-free-template.jpg
- **Stack**: Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Package**: `@free-react-templates/evergreen`
- **Deploy target**: `evergreen.free.componentdock.com`

## Design tokens

Extracted from `https://preview.colorlib.com/theme/classic/style.css`:

| Token | Value | Usage |
|-------|-------|-------|
| **Brand gradient** | `linear-gradient(to right, #a1c4fd 0%, #c2e9fb 100%)` | Primary buttons, tab underlines, skill chart gradient, pricing highlighted card |
| **Heading color** | `#4f4f4f` | h1–h6, section titles |
| **Body text** | `#898989` | Paragraph text, links |
| **Gray background** | `#f9f9f9` | `.gray-bg` alternating sections |
| **Yellow accent** | `#f7c336` | Language selector arrow, decorative dot |
| **White** | `#ffffff` | Button text, overlays, card backgrounds |
| **Border gray** | `#bdbdbd` | Tab inactive border-bottom, bar-title underline, disabled button bg |
| **Primary font** | `Montserrat` (300–700) | Headings — uppercase, 600 weight, 36px h2 |
| **Body font** | `Roboto` (300–900) | Body text — 400 weight, 15px, line-height 1.8em |
| **Accent font** | `Satisfy` | Script/cursive accent text |
| **Button radius** | `100px` (pill) | All `.bttn` elements |
| **Button shadow** | `0 2px 0 0 rgba(135,181,255,0.5), 0 4px 0 0 rgba(135,181,255,0.5)` | Primary button double-shadow |
| **Section padding** | `100px 0` | `.section-padding` |
| **Card radius** | `5px` | Pricing cards |
| **Video play button** | `border: 5px solid #ffffff; border-radius: 50%` | Circle play overlay |
| **Overlay on hero** | `rgba(0, 0, 0, 0.4)` | Header area dark overlay |

## Section order (from live DOM)

1. **Navbar** — sticky, logo left, utility icons (user, search, language dropdown) top-right, primary menu right: Home, Services, Portfolio, Team, Price, Blog, Contact. Scroll-spy active state.
2. **Header/Hero** — full-width background image (`header-bg.jpg`), `rgba(0,0,0,0.4)` overlay, vertically centered. Headline "We Are Provide Creative Business" with yellow dot, blockquote, "Contact Now" pill button (primary gradient).
3. **About** — two columns: left = page title + paragraph + "Learn More" button; right = image. White background.
4. **Video + Why Choose Us** — gray-bg (`#f9f9f9`). Left: video thumbnail with circle play button (links to YouTube). Right: tabs (Our Mission / Our Vision / Our Support) with pill tab bar, each tab has heading, subtext, "View More" button.
5. **Services** — white bg. 6 feature boxes in 3×2 grid, each with circular icon, title, paragraph, "Read More" link. Features: Unique Design, Clean Layout, Well Responsive, Pro Developing, Well Documented, Quick Marketing.
6. **Skills** — gray-bg. Left column: title + paragraph + 6 circular progress charts (95% WebDesign, 85% Coding, 90% Developing, 95% JavaScript, etc.). Uses easy-pie-chart style.
7. **Portfolio** — white bg, full-width. Centered title + subtitle. Filter tabs (All, Graphics, UI/UX, Web Design, Coding, Developing, Photography). 8 filter boxes in 4-column grid — image + hover overlay with title + lightbox link.
8. **Team** — white bg. Centered title + subtitle. 4 team member cards (3-col + 1): photo + hover overlay showing name, role, skill bars (Photoshop/Indesign/Illustrator percentages), social icons (Facebook, Twitter, LinkedIn, Pinterest).
9. **Pricing** — gray-bg. Centered title + subtitle. Monthly/Yearly tab toggle. 4 price cards: Basic ($10), Premium ($50, highlighted/active), Business ($80), Ultimate ($100). Each card: name, price with period, feature list, "Purchase Now" button.
10. **Blog** — white bg. Centered title + subtitle. Two columns: left = large featured post (image + heading + paragraph); right = 3 list posts (thumbnail + heading + date meta + paragraph).
11. **Counter/Stats** — gray-bg. 4 columns: Project Complete (1172), Happy Clients (1000), Total Clients (1200), Winning Award (1172). Each with icon + count number.
12. **Contact** — white bg, inner div with its own bg. Section title with bar underline. Two columns: left = form (Full Name, Phone, Email, Subject, Message, "Send Now" button); right = contact info (address, phone, email) + social icons.
13. **Footer** — dark bg. Top section: 4 columns (Brand + social icons, News links, Company links, Resources links, Solutions links). Bottom: copyright with Colorlib attribution (replaced with Component Dock).

## Gherkin requirements

### Feature: Evergreen — one-page business website

```gherkin
Feature: Evergreen business one-page template
  As a visitor, I want to explore a business website's services, portfolio, team, pricing, blog, and contact info in a single page.

  Background:
    Given the Evergreen template is loaded at the root URL

  # --- Navbar ---
  Scenario: Sticky navbar with scroll-spy
    Then the navbar is visible and sticks to the top on scroll
    And it shows the logo on the left
    And it shows primary nav links: Home, Services, Portfolio, Team, Price, Blog, Contact
    And the active nav link highlights based on the visible section
    And a search toggle icon is present
    And a user icon is present

  Scenario: Search toggle
    When the visitor clicks the search icon
    Then a search input overlay appears
    And the input has placeholder text "What do you want to know?"
    When the visitor clicks elsewhere
    Then the search overlay closes

  # --- Header / Hero ---
  Scenario: Hero section renders with overlay and CTA
    Then the hero section has a dark overlay background image
    And the headline text is visible
    And a blockquote is visible below the headline
    And a "Contact Now" pill button is visible
    When the visitor clicks "Contact Now"
    Then the page scrolls to the contact section

  # --- About ---
  Scenario: About section two-column layout
    Then the About section shows a heading and paragraph on the left
    And an image is displayed on the right
    And a "Learn More" pill button is visible

  # --- Video + Why Choose Us ---
  Scenario: Video thumbnail with play button
    Then a video thumbnail image is shown on the left
    And a circular play button overlays the thumbnail

  Scenario: Tabbed Why Choose Us content
    Then three tabs are visible: "Our Mission", "Our Vision", "Our Support"
    When the visitor clicks "Our Mission"
    Then the mission content panel is displayed
    When the visitor clicks "Our Vision"
    Then the vision content panel is displayed
    And the mission panel is hidden
    When the visitor clicks "Our Support"
    Then the support content panel is displayed
    And each tab panel has a heading, paragraph, and "View More" button

  # --- Services ---
  Scenario: Six service feature boxes
    Then 6 feature boxes are displayed in a grid
    And each feature box has an icon, title, paragraph, and "Read More" link
    And the service titles are: Unique Design, Clean Layout, Well Responsive, Pro Developing, Well Documented, Quick Marketing

  # --- Skills ---
  Scenario: Skills section with progress indicators
    Then the Skills section shows a heading and paragraph
    And 6 circular progress chart indicators are displayed
    And each chart shows a percentage label (e.g. 95, 85, 90)

  # --- Portfolio ---
  Scenario: Portfolio filter tabs
    Then filter tabs are displayed: All, Graphics, UI/UX, Web Design, Coding, Developing, Photography
    When the visitor clicks "Web Design"
    Then only portfolio items tagged "web_design" are visible
    When the visitor clicks "All"
    Then all portfolio items are visible

  Scenario: Portfolio items with hover overlay
    Then 8 portfolio items are displayed in a grid
    And each item shows an image
    And hovering over an item reveals a title and a lightbox link

  # --- Team ---
  Scenario: Team member cards
    Then 4 team member cards are displayed
    And each card shows a photo
    And hovering over a card reveals the member's name, role, skill bars, and social icons
    And skill bars show percentage values (e.g. 90%, 70%, 50%)

  # --- Pricing ---
  Scenario: Pricing toggle between Monthly and Yearly
    Then "Monthly" and "Yearly" tabs are visible
    When the visitor clicks "Yearly"
    Then all price amounts show "/ Year" period
    When the visitor clicks "Monthly"
    Then all price amounts show "/ Month" period

  Scenario: Four pricing cards
    Then 4 pricing cards are displayed: Basic, Premium, Business, Ultimate
    And prices are $10, $50, $80, $100 respectively (monthly)
    And each card has a feature list and "Purchase Now" button
    And the "Premium" card is visually highlighted

  # --- Blog ---
  Scenario: Blog section with featured and list posts
    Then a large featured blog post is displayed on the left with image, heading, and paragraph
    And 3 smaller blog list posts are displayed on the right
    And each list post has a thumbnail, heading, date meta, and paragraph

  # --- Counter / Stats ---
  Scenario: Stats counter section
    Then 4 stat counters are displayed: Project Complete (1172), Happy Clients (1000), Total Clients (1200), Winning Award (1172)
    And each stat has an icon, label, and count number

  # --- Contact ---
  Scenario: Contact form
    Then the contact section shows a section title with bar underline
    And a form with fields: Full Name, Phone Number, Email, Subject, Message
    And a "Send Now" button
    And submitting the form without required fields shows validation errors

  Scenario: Contact info sidebar
    Then contact info is displayed on the right: address, phone number, email
    And social icons (Twitter, Skype, Instagram) are shown

  # --- Footer ---
  Scenario: Footer layout
    Then the footer has a top section with 4 columns: brand + social, News, Company, Resources, Solutions
    And a bottom copyright bar
    And the footer links to https://www.componentdock.com/ as "Component Dock"
```

## Verification checklist

- [ ] All 13 sections present in correct order
- [ ] Navbar sticky behavior works with scroll-spy
- [ ] Search toggle opens/closes overlay
- [ ] Hero has dark overlay, headline, quote, CTA button
- [ ] About has two-column layout with image
- [ ] Video + tabbed Why Choose Us works (3 tabs)
- [ ] Services shows 6 feature boxes
- [ ] Skills shows 6 circular progress indicators
- [ ] Portfolio filter tabs work (7 categories, 8 items)
- [ ] Team shows 4 cards with hover overlay (name, role, skill bars, social)
- [ ] Pricing toggle Monthly/Yearly works (4 cards each)
- [ ] Blog shows featured + 3 list items
- [ ] Counter section shows 4 stats
- [ ] Contact form has 5 fields + validation
- [ ] Contact info sidebar with social icons
- [ ] Footer has 4-column top + copyright bottom
- [ ] Footer links to Component Dock
- [ ] Brand gradient `#a1c4fd → #c2e9fb` used consistently
- [ ] Montserrat headings, Roboto body text
- [ ] Pill-shaped buttons (border-radius: 100px)
- [ ] Gray alternating sections (#f9f9f9)
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] All images use picsum.photos placeholders
- [ ] Icons from lucide-react
