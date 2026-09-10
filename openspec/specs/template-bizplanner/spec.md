# Template: BizPlanner (Business / Corporate)

## Purpose

Recreation of ColorLib **BizPro** template.

- **Source slug:** `bizpro`
- **Preview URL:** https://preview.colorlib.com/theme/bizpro/
- **ColorLib page:** https://colorlib.com/wp/template/bizpro/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/bizpro-free-classic-website-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript (strict)
- **New name:** `bizplanner` (apps/bizplanner, @free-react-templates/bizplanner)

## Design tokens (extracted from preview CSS)

| Token              | Value / Notes                                                                                                              |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| **Brand color**    | `#d73e4d` (red — used for accents, hover states, CTA buttons, skill bars)                                                  |
| **Text headings**  | `#292929` (dark charcoal)                                                                                                  |
| **Body text**      | `#6f6f6f` (medium gray)                                                                                                    |
| **Font family**    | `'Raleway', sans-serif` (Google Fonts, weights 400, 500, 700)                                                              |
| **Button style**   | 1px solid `#d73e4d` border, transparent bg → filled `#d73e4d` on hover; uppercase; `border-radius: 0` (square)             |
| **Icon circles**   | `border-radius: 50%`, bg `#d73e4d` on hover                                                                                |
| **Dark sections**  | `#232a34` (footer, team overlay), `rgba(0,0,0,0.8)` (parallax banner overlay)                                              |
| **Section bg**     | White (`#fff`) for most sections; team section has dark bg `#232a34`; parallax middle banner uses image with black overlay |
| **Heading sizes**  | h1: 48px, h2: 36px, h3: 28px, h4: 24px, h5: 22px, h6: 18px — all uppercase, bold 700                                       |
| **Body font size** | 14px, line-height 26px                                                                                                     |

## Section structure (in order, from live DOM)

1. **Header / Navbar** — Logo left, horizontal nav links right (HOME, ABOUT, SERVICES, PORTFOLIO, TEAM, SKILLS, CLIENTS, PRICING, BLOG, CONTACT). One-page scroll nav.
2. **Hero / Banner** — Full-width image slider (3 slides) with centered headline "HELLO WE'RE BizPro", subtitle "Sub Head, Motto or Mission subtitle", CTA button "See Our Projects". Background: hero images with dark overlay.
3. **About Us** — Centered section title "ABOUT OUR BIZPRO" + intro text. 4-column grid of feature cards: icon (pencil/camera/life-ring/chart), title (Web Development, Photography, Digital Media, Online Marketing), description, "More Details" link. Icon circles with brand color hover.
4. **Services** — Centered section title "SERVICES WE PROVIDE". 6-column grid (3×2) of service items: icon + heading + description. Items: Web Design, Photography, Web Development, Online Marketing, Digital Media, Support.
5. **Projects / Portfolio** — Centered section title "OUR AWESOME PROJECTS". Filterable portfolio gallery with category tabs (All, Web Design, Photography, Web Dev, Online Marketing, Digital Media, Support). Grid of project images with hover overlay showing title + category breadcrumbs.
6. **Parallax Banner** — Full-width parallax image with dark overlay (`rgba(0,0,0,0.8)`), heading "We Create Creative & Best Unique Design", CTA button "Let's Work Together".
7. **Team** — Centered section title. 4-member grid: photo with hover overlay (name, role, social icons), name + role + social links below. Dark section background.
8. **Skills** — Split layout: left image, right progress bars (Web Dev 89%, Online Marketing 58%, Digital Media 49%, Photography 76%, Creative Design 64%). Animated skill bars with brand color fill.
9. **Clients** — Centered section title "OUR HAPPY CLIENTS". Testimonial carousel (3 items): client photo, quote text, client name. Dark background.
10. **Pricing** — 3-column pricing cards (Basic $9.99, Advanced $39.99, Premium $59.99). Each: plan name, tagline, price/month, feature list, CTA button "BUY IT NOW". Brand color accent.
11. **Blog** — Centered section title "OUR LATEST Blog". 3-column blog cards: image with hover link overlay, title, author + date, excerpt + "Read More" link.
12. **Partners** — Logo carousel of partner/client logos.
13. **Contact** — Two-column layout: left = "Contact Info" with address/phone/email (icon circles), right = "Our Location" map placeholder. Below: "Send Message" contact form (First Name, Last Name, Email, Subject, Message, Submit button).
14. **Footer** — Dark background, logo, social media icon links (Facebook, Twitter, Pinterest, LinkedIn, Skype, Flickr, Dribbble, RSS), copyright text. Links to Component Dock (replacing ColorLib attribution).

## Gherkin requirements

### Scenario: Navbar renders and scrolls to sections

```gherkin
Given the page is loaded
When I view the header
Then I see a logo on the left
And I see navigation links for HOME, ABOUT, SERVICES, PORTFOLIO, TEAM, SKILLS, CLIENTS, PRICING, BLOG, CONTACT
And clicking a nav link scrolls to the corresponding section
```

### Scenario: Hero banner displays headline and CTA

```gherkin
Given the page is loaded
When I view the hero banner
Then I see a headline "HELLO WE'RE BizPlanner"
And I see a subtitle below the headline
And I see a CTA button labeled "See Our Projects"
And the banner has a background image with dark overlay
```

### Scenario: About section shows 4 feature cards

```gherkin
Given the page is loaded
When I scroll to the About section
Then I see a centered section title
And I see 4 feature cards in a row
And each card has an icon, title, description, and "More Details" link
And hovering an icon circle changes its background to the brand color
```

### Scenario: Services section shows 6 service items

```gherkin
Given the page is loaded
When I scroll to the Services section
Then I see a centered section title "SERVICES WE PROVIDE"
And I see 6 service items in a 3×2 grid
And each item has an icon, heading, and description paragraph
```

### Scenario: Projects gallery filters by category

```gherkin
Given the page is loaded
When I scroll to the Projects section
Then I see filter tabs: All, Web Design, Photography, Web Development, Online Marketing, Digital Media, Support
And clicking a tab filters the gallery to show only matching items
And project images show a hover overlay with title and category
```

### Scenario: Parallax banner shows CTA

```gherkin
Given the page is loaded
When I scroll to the parallax banner
Then I see a full-width image with a dark overlay
And I see the heading "We Create Creative & Best Unique Design"
And I see a CTA button "Let's Work Together"
```

### Scenario: Team section shows members

```gherkin
Given the page is loaded
When I scroll to the Team section
Then I see 4 team member cards
And each card shows a photo, name, role, and social media links
And hovering the photo reveals an overlay with name and role
```

### Scenario: Skills section shows progress bars

```gherkin
Given the page is loaded
When I scroll to the Skills section
Then I see a split layout with image on left and progress bars on right
And I see 5 skill bars: Web Development (89%), Online Marketing (58%), Digital Media (49%), Photography (76%), Creative Design (64%)
And each bar fills to its percentage with the brand color
```

### Scenario: Clients section shows testimonials

```gherkin
Given the page is loaded
When I scroll to the Clients section
Then I see a centered section title "OUR HAPPY CLIENTS"
And I see a carousel of testimonial items
And each item has a client photo, quote, and client name
```

### Scenario: Pricing section shows 3 plans

```gherkin
Given the page is loaded
When I scroll to the Pricing section
Then I see 3 pricing cards in a row
And each card has a plan name, price, feature list, and "BUY IT NOW" button
And the CTA button has brand color border and fill on hover
```

### Scenario: Blog section shows posts

```gherkin
Given the page is loaded
When I scroll to the Blog section
Then I see a centered section title "OUR LATEST Blog"
And I see 3 blog cards in a row
And each card has an image, title, author, date, excerpt, and "Read More" link
```

### Scenario: Contact section has form and info

```gherkin
Given the page is loaded
When I scroll to the Contact section
Then I see contact info on the left (address, phone, email with icon circles)
And I see a map placeholder on the right
And I see a "Send Message" form with First Name, Last Name, Email, Subject, Message fields
And the submit button has brand color styling
```

### Scenario: Footer renders correctly

```gherkin
Given the page is loaded
When I view the footer
Then I see the logo
And I see social media icon links
And I see a copyright line
And the footer links to Component Dock
```

### Scenario: Responsive design

```gherkin
Given the page is loaded on a mobile viewport
When I view the navbar
Then I see a hamburger menu toggle
And tapping it reveals the navigation links
```

## Verification checklist

- [ ] Navbar renders all 10 section links with smooth scroll
- [ ] Hero banner has background image, headline, subtitle, CTA button
- [ ] About section: 4 cards with icons, titles, descriptions, "More Details"
- [ ] Services section: 6 items in 3×2 grid with icons and descriptions
- [ ] Projects gallery: filter tabs work, images show hover overlay
- [ ] Parallax banner: dark overlay, heading, CTA button
- [ ] Team section: 4 members with photos, hover overlays, social links
- [ ] Skills section: 5 animated progress bars with correct percentages
- [ ] Clients section: testimonial carousel with photos, quotes, names
- [ ] Pricing section: 3 cards with plans, prices, features, CTA buttons
- [ ] Blog section: 3 post cards with images, titles, excerpts, "Read More"
- [ ] Partners section: logo carousel
- [ ] Contact section: info cards, map placeholder, contact form
- [ ] Footer: logo, social icons, copyright, Component Dock link
- [ ] Responsive: hamburger menu on mobile, stacking columns
- [ ] Brand color (#d73e4d) used consistently for accents
- [ ] Raleway font family loaded via Google Fonts
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] public/CNAME = bizplanner.free.componentdock.com
- [ ] homepage = https://bizplanner.free.componentdock.com
