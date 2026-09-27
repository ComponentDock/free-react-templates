# Template: GreenView (Real Estate)

## Purpose

Recreation of ColorLib **Ecoverde** — a real estate agent/property template.

- **Source slug:** `ecoverde`
- **ColorLib page:** https://colorlib.com/wp/template/ecoverde/
- **Live preview:** https://preview.colorlib.com/theme/ecoverde/
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript
- **Package:** `@free-react-templates/greenview`
- **Deploy:** `greenview.free.componentdock.com`

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--brand` | `#24A148` | Primary green — links, buttons, active nav, subheading accents, search bar bg, services section bg, counter numbers, testimony dots, pagination, blog meta, footer links, agent hover |
| `--text` | `#1a1a1a` | Body text |
| `--white` | `#ffffff` | Card backgrounds, hero text, service text |
| `--light` | `#f8f9fa` | Testimonial section background |
| `--dark` | `#343a40` | Navbar background, workflow section background |
| `--font` | `Nunito Sans` | All headings and body (weights 400, 600, 700, 800) |
| `--radius` | `0` (square buttons) | Buttons have no border-radius; cards use 4px on badges |
| `--btn-hover` | transparent + green border | Button hover: transparent bg, green border, green text |

### Color mapping to Tailwind

- `brand`: `#24A148` → `@theme { --color-brand: #24A148; }`
- Use `bg-brand`, `text-brand`, `border-brand` classes
- Dark sections: `bg-dark` (#343a40)
- Light sections: `bg-gray-50` (#f8f9fa)

## Section Structure (1:1 fidelity)

Order from the live preview DOM:

1. **Navbar** — dark bg (`bg-dark`), brand text "GreenView", right-aligned nav links: Home, About, Agents, Services, Properties, Blog, Contact. Active link highlighted in brand green. Sticky on scroll with shadow + white bg transition.
2. **Hero** — full-width background image (real estate scene), dark overlay (`bg-black/50`), white heading "Find Perfect House From Your Area", subtitle paragraph, green CTA button "View all properties".
3. **SearchBar** — overlapping hero bottom edge, white card with shadow, 4 fields in a row: Keyword (text input), Property Type (select: Residence/Offices/Commercial), Location (text input), Price Limit (select: $5K–$2M). Green "Search" submit button.
4. **ServicesStrip** — green bg (`bg-brand`), 4-column layout, each with icon (line art), heading, description. Items: "Trusted by Thousands", "Wide Range of Properties", "Financing Made Easy", "Locked in Pricing". White text.
5. **FeaturedProperties** — white section, centered heading with green subheading "What we offer", title "Featured Properties". Carousel of property cards, each with: image (with "Sale"/"Rent" badge), price, bed/bath/sqft icons, property name, location, link button (green square), agent photo + name + timestamp.
6. **HowItWorks** — dark bg (`bg-dark`), white text, centered heading "How it works" with green subheading "Work flow". 4 columns: numbered steps (01–04) with SVG blob icon, title, description. Steps: Evaluate Property, Meet Your Agent, Close the Deal, Have Your Property.
7. **About** — white section, two-column layout: right side has 2 stacked images, left side has heading "GreenView Real Estate" + two paragraphs of descriptive text.
8. **StatsCounter** — background image section, 4 stat counters in a row: "1000 Area Population", "2500 Total Properties", "500 Average House", "67 Total Branches". Numbers in green, bold, animated count-up.
9. **Testimonials** — light bg (`bg-gray-50`), centered heading "Happy Clients" with green subheading "Testimonial". Carousel of testimony cards: quote icon (green), quote text, person avatar (circle), name, position.
10. **OurAgents** — white section, centered heading "Our Agents" with green subheading "Agents". 4 agent cards: photo (full-width), name below, listing info ("Listing · 10 Properties"). Hover: name background turns green.
11. **RecentBlog** — white section, centered heading "Recent Blog" with green subheading "Blog". 4 blog cards: image with dark overlay, meta (date, author, comment count with green icon), heading text.
12. **Footer** — dark bg, 5-column layout: Brand + social icons (Twitter, Facebook, Instagram), Community links, About Us links, Company links, Contact info (address, phone, email). Bottom copyright bar.

## Gherkin Requirements

### Feature: GreenView Real Estate Template

```gherkin
Feature: GreenView Real Estate Template
  As a visitor to GreenView
  I want a professional real estate website
  So that I can browse properties and contact agents

  Scenario: Navbar displays correctly
    Given I visit the GreenView homepage
    Then I see a dark navbar with brand "GreenView"
    And I see navigation links: Home, About, Agents, Services, Properties, Blog, Contact
    And the Home link is highlighted in green
    And the navbar becomes sticky with white background on scroll

  Scenario: Hero section renders
    Given I visit the GreenView homepage
    Then I see a full-width hero with a real estate background image
    And there is a dark overlay on the image
    And I see heading "Find Perfect House From Your Area"
    And I see a green "View all properties" button

  Scenario: Search bar is functional
    Given I visit the GreenView homepage
    Then I see a search form with 4 fields
    And the fields are Keyword, Property Type, Location, Price Limit
    And there is a green "Search" submit button
    And the search form overlaps the hero section

  Scenario: Services strip shows 4 features
    Given I visit the GreenView homepage
    Then I see a green section with 4 service cards
    And the cards are "Trusted by Thousands", "Wide Range of Properties", "Financing Made Easy", "Locked in Pricing"
    And each card has an icon, heading, and description

  Scenario: Featured properties carousel
    Given I visit the GreenView homepage
    Then I see a "Featured Properties" section
    And I see property cards in a carousel
    And each card shows an image, price, bed/bath/sqft, name, location, and agent info
    And cards have Sale/Rent badges

  Scenario: How it works workflow
    Given I visit the GreenView homepage
    Then I see a dark "How it works" section
    And I see 4 numbered steps: Evaluate Property, Meet Your Agent, Close the Deal, Have Your Property
    And each step has an icon and description

  Scenario: About section
    Given I visit the GreenView homepage
    Then I see an about section with 2 images and descriptive text
    And the heading is "GreenView Real Estate"

  Scenario: Stats counter section
    Given I visit the GreenView homepage
    Then I see 4 animated counters
    And the counters show: 1000 Area Population, 2500 Total Properties, 500 Average House, 67 Total Branches
    And counter numbers are displayed in green

  Scenario: Testimonials carousel
    Given I visit the GreenView homepage
    Then I see a "Happy Clients" section with light background
    And I see testimony cards with quotes, avatars, names, and positions
    And the quote icon is green

  Scenario: Agents section
    Given I visit the GreenView homepage
    Then I see an "Our Agents" section
    And I see 4 agent cards with photos, names, and listing counts
    And hovering an agent card highlights the name in green

  Scenario: Blog section
    Given I visit the GreenView homepage
    Then I see a "Recent Blog" section
    And I see 4 blog cards with images, meta info, and headings
    And the comment icon is green

  Scenario: Footer
    Given I visit the GreenView homepage
    Then I see a dark footer with 5 columns
    And the columns are: brand+social, Community, About Us, Company, Contact
    And the footer links are green
    And the footer includes a Component Dock link
```

## Verification Checklist

- [ ] All 12 sections present in correct order
- [ ] Brand color `#24A148` used consistently (buttons, links, accents, subheadings)
- [ ] Font: Nunito Sans loaded from Google Fonts
- [ ] Navbar: dark, sticky, white on scroll, green active link
- [ ] Hero: full-width bg image, dark overlay, white text, green CTA
- [ ] Search bar: 4 fields, white card, green submit, overlaps hero
- [ ] Services strip: green bg, 4 columns, white text, icons
- [ ] Featured Properties: carousel, property cards with badges, prices, agent info
- [ ] How It Works: dark bg, 4 numbered steps
- [ ] About: 2 images + text, "GreenView Real Estate" heading
- [ ] Stats: 4 animated counters with green numbers
- [ ] Testimonials: light bg, carousel, green quote icon
- [ ] Agents: 4 cards, green hover effect
- [ ] Blog: 4 cards, green meta accents
- [ ] Footer: dark, 5 columns, green links, Component Dock link
- [ ] No ColorLib references in app code
- [ ] All images use `picsum.photos` placeholders
- [ ] Icons from `lucide-react`
- [ ] No `any` types
- [ ] 100% test coverage
