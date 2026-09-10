# Template: Peakpoint (Corporate Business Landing Page)

## Purpose

Recreation of ColorLib "Bizpro" — a classic corporate business website template
with a full-screen hero slider, about/services grid, portfolio gallery with
filter, team member cards, skill progress bars, client testimonials, pricing
tables, blog cards, partner logos, and a contact section with form + map.

- **Source template:** [Bizpro](https://colorlib.com/wp/template/bizpro/)
- **Preview URL:** https://preview.colorlib.com/theme/bizpro/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) and screenshot analysis:

### Colors

| Token              | Value     | Usage                                              |
| ------------------ | --------- | -------------------------------------------------- |
| `--color-brand`    | `#d8545d` | Primary red accent (buttons, dividers, icons, active nav) |
| `--color-dark`     | `#232a34` | Dark section backgrounds (footer, parallax banner) |
| `--color-text`     | `#292929` | Body text headings                                |
| `--color-muted`    | `#6f6f6f` | Body copy, secondary text                         |
| `--color-light-bg` | `#f9f9f9` | Alternate section backgrounds                     |
| `--color-white`    | `#ffffff` | Primary background                                |
| `--color-navy`     | `#1e1e1e` | Darkest text / near-black                         |

### Typography

- **Primary font:** `'Raleway', sans-serif` (Google Fonts)
- **Headings:** uppercase, bold weight (700)
- **Body:** regular weight (400), line-height ~1.7

### Button / CTA

- Outlined style: transparent background, red border (`2px solid #d8545d`), red text
- Hover: solid red background, white text
- border-radius: `0` (square/rectangular buttons)
- "p-color-bg" class: solid red background for form submit and pricing CTA

### Section Backgrounds

- Hero: full-width dark background image with dark overlay
- About / Services: white
- Portfolio: white with filter bar
- Parallax banner: dark image with overlay text + red ampersand accent
- Team: light gray (`#f9f9f9`)
- Skills: white (image left, progress bars right)
- Clients: white (testimonial slider)
- Pricing: white, 3-column cards
- Blog: white, 3-column image cards
- Partners: white, logo carousel
- Contact: white (info left, map right) + form below
- Footer: dark (`#232a34`), centered logo + social icons + copyright

### Other

- Icon style: `font-awesome` icons inside circular borders (`border-radius: 50%`)
- Section titles: centered, uppercase, bold, with short paragraph below
- Layout: Bootstrap-like 12-column grid (3-col about, 3-col services, 3-col portfolio, 3-col pricing, 3-col blog)

## Gherkin Requirements

### Navbar

```gherkin
Scenario: Sticky header with logo and one-page navigation
  Given I visit the Peakpoint page
  Then I see a sticky header with the logo "Peakpoint" on the left
  And the nav links are: HOME, ABOUT, SERVICES, PORTFOLIO, TEAM, SKILLS, CLIENTS, PRICING, BLOG, CONTACT
  And each nav link scrolls to its corresponding section
```

### Hero Section

```gherkin
Scenario: Full-screen hero slider with CTA
  Given I visit the Peakpoint page
  Then I see a full-width hero section with a background image
  And the heading says "HELLO WE'RE PEAKPOINT"
  And the subtitle reads "SUB HEAD, MOTTO OR MISSION SUBTITLE"
  And there is a CTA button "SEE OUR PROJECTS" with outlined style
  And navigation arrows are visible for carousel control
```

### About Section

```gherkin
Scenario: About section with 4 service cards
  Given I scroll to the About section
  Then I see the heading "ABOUT OUR PEAKPOINT"
  And there is a centered paragraph description
  And there are 4 circular-bordered icon cards in a row
  And the cards are: Web Development, Photography, Digital Media, Online Marketing
  And each card has a description and "More Details" link
```

### Services Section

```gherkin
Scenario: Services section with 6 items in a 3-column grid
  Given I scroll to the Services section
  Then I see the heading "SERVICES WE PROVIDE"
  And there are 6 service items in a 3-column layout
  And each item has an icon, heading, and description
  And the items are: Web Design, Photography, Web Development, Online Marketing, Digital Media, Support
```

### Portfolio Section

```gherkin
Scenario: Portfolio with filter bar and gallery grid
  Given I scroll to the Portfolio section
  Then I see the heading "OUR AWESOME PROJECTS"
  And there is a filter bar with categories: All, Web Design, Photography, Web Development, Online Marketing, Digital Media, Support
  And there are 9 portfolio items in a grid
  And each item shows an image with hover overlay containing title and category tags
```

### Parallax Banner

```gherkin
Scenario: Mid-page parallax call-to-action
  Given I scroll past the Portfolio section
  Then I see a dark parallax background banner
  And the text says "We Create Creative & Best Unique Design" with red ampersand
  And there is a "Let's Work Together" button
```

### Team Section

```gherkin
Scenario: Team members with image hover overlay
  Given I scroll to the Team section
  Then I see the heading "Meet our Team"
  And there are 3 team member cards
  And each card has a photo, name, role, and social icons (Facebook, Twitter, Pinterest, LinkedIn)
  And hovering reveals a description overlay
```

### Skills Section

```gherkin
Scenario: Skills progress bars beside image
  Given I scroll to the Skills section
  Then I see a 2-column layout: image on left, progress bars on right
  And there are 5 skill bars: Web Development (89%), Online Marketing (58%), Digital Media (49%), Photography (76%), Creative Design (64%)
```

### Clients Section

```gherkin
Scenario: Client testimonials slider
  Given I scroll to the Clients section
  Then I see the heading "OUR HAPPY CLIENTS"
  And there are 3 testimonial items in a slider
  And each item has an avatar, quote text, and client name
```

### Pricing Section

```gherkin
Scenario: Pricing tables in 3 columns
  Given I scroll to the Pricing section
  Then I see 3 pricing cards: Basic ($9.99), Advanced ($39.99), PREMIUM ($59.99)
  And each card lists features: Keywords, Social Accounts, Analytics Campaigns, Email Accounts, 24/7 Support
  And each card has a "BUY IT NOW" button with red background
```

### Blog Section

```gherkin
Scenario: Blog cards in 3 columns
  Given I scroll to the Blog section
  Then I see the heading "OUR LATEST Blog"
  And there are 3 blog post cards
  And each card has an image, title, author, date, excerpt, and "Read More" link
```

### Partners Section

```gherkin
Scenario: Partner logo carousel
  Given I scroll to the Partners section
  Then I see a horizontal carousel of partner logos
  And there are at least 5 partner logos
```

### Contact Section

```gherkin
Scenario: Contact info + map + form
  Given I scroll to the Contact section
  Then I see "Contact Info" on the left with address, phone, and email in circular red icons
  And I see "Our Location" on the right with a map placeholder
  And below is a "Send Message" form with fields: First Name, Last Name, Email, Subject, Message
  And the form has a "Send Message" submit button with red background
```

### Footer

```gherkin
Scenario: Footer with social icons
  Given I scroll to the footer
  Then I see the logo centered
  And social icon links: Facebook, Twitter, Pinterest, LinkedIn, Skype, Flickr, Dribbble, RSS
  And the copyright text includes a "Made with ❤" line
  And the footer links to https://www.componentdock.com/ ("Component Dock")
```

## Verification Checklist

- [ ] All 13 sections rendered in correct order (Hero → About → Services → Portfolio → Parallax Banner → Team → Skills → Clients → Pricing → Blog → Partners → Contact → Footer)
- [ ] Raleway font loaded from Google Fonts
- [ ] Brand red `#d8545d` used consistently for accents
- [ ] Circular icon borders (`border-radius: 50%`) on About and Contact icons
- [ ] Portfolio filter bar works (category filtering)
- [ ] Pricing table: 3 columns, correct prices, "BUY IT NOW" buttons
- [ ] Contact form has all 5 fields + submit button
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app source code
- [ ] All images use picsum.photos placeholder URLs
- [ ] Responsive layout (mobile nav hamburger, stacked columns on small screens)
