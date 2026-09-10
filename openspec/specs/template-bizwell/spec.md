# Template: Bizwell (Business / Corporate)

## Purpose

Recreation of ColorLib **BizPro** template.
- Source: https://colorlib.com/wp/template/bizpro/
- Preview: https://preview.colorlib.com/theme/bizpro/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bizpro-free-classic-website-template.jpg
- Stack: React 19, Vite, Tailwind CSS 4, TypeScript

A classic one-page business/corporate template with a full-width hero slider,
service icons, filterable project gallery, team profiles, skill bars,
client testimonials, pricing cards, blog grid, partner logos, and contact form.

## Design tokens

Extracted from live preview CSS (`css/style.css`):

| Token              | Value                | Usage                                      |
| ------------------ | -------------------- | ------------------------------------------ |
| Brand / Accent     | `#d73e4d`            | Primary CTA buttons, skill bars, icons hover, nav active |
| Dark surface       | `#232a34`            | Service section background                 |
| Footer background  | `#1e1e1e`            | Footer + dropdown menus                    |
| Body text          | `#6f6f6f`            | Default paragraph color                    |
| Headings           | `#292929`            | All headings (uppercase, bold)             |
| Pricing – Gold     | `#d6973d`            | Basic plan price badge                     |
| Pricing – Blue     | `#375099`            | Advanced plan price badge                  |
| Pricing – Teal     | `#179680`            | Premium plan price badge                   |
| Pricing bg         | `#f3f3f3`            | Pricing section background                 |
| Partners bg        | `#f9f9f9`            | Partner logo carousel background           |
| Team member bar    | `#e6e6e6`            | Team member name/info bar below image      |
| Parallax overlay   | `rgba(0,0,0,0.8)`   | Middle-banner dark overlay                 |
| Font family        | `Raleway, sans-serif`| Google Font, weights 400/500/700           |
| Button radius      | `0`                  | Square buttons, uppercase, bold            |
| Icon shape         | Circle (`border-radius: 50%`) | About + contact icons           |
| Border accent      | `2px`               | Icon circles, buttons                      |

## Section structure (order preserved 1:1)

1. **Header** — fixed-position transparent navbar over hero; logo left, one-page nav right (HOME, ABOUT, SERVICES, PORTFOLIO, TEAM, SKILL, CLIENTS, PRICING, BLOG, CONTACT)
2. **Hero / Banner** — full-width background image slider (3 slides); each slide has heading + subtext + "See Our Projects" CTA button
3. **About Us** — centered title "ABOUT OUR BIZPRO" + 4-column grid of service icons (circular border): Web Development, Photography, Digital Media, Online Marketing; each has icon + title + description + "More Details" link
4. **Services** — dark bg (#232a34); title "SERVICES WE PROVIDE"; 3×2 grid of 6 service cards (icon + heading + description): Web Design, Photography, Web Development, Online Marketing, Digital Media, Support
5. **Projects** — title "OUR AWESOME PROJECTS"; filter tab bar (All, Web Design, Photography, Web Development, Online Marketing, Digital Media, Support); 2×3 image gallery with hover overlay showing title + tags
6. **Page Middle Banner** — parallax background image with dark overlay; heading text + "View Projects" CTA button
7. **Team** — title area; 3 team members in a row; each has: image, hover-reveal overlay (name + role + social links), name/role bar below image
8. **Skills** — 2-column layout: left = image, right = 5 animated progress bars: Web Development 89%, Online Marketing 58%, Digital Media 49%, Photography 76%, Creative Design 64%
9. **Clients / Testimonials** — title "OUR HAPPY CLIENTS"; slider with client avatar + quote + name
10. **Pricing** — title area; 3-column pricing cards: Basic ($9.99), Advanced ($39.99), Premium ($59.99); each has price badge, feature list, "BUY IT NOW" CTA
11. **Blog** — title "OUR LATEST BLOG"; 3-column blog cards: image + title + author/date + excerpt + "Read More"
12. **Partners** — light bg (#f9f9f9); auto-scrolling logo carousel
13. **Contact** — 2-column top: left = "Contact Info" with address/phone/email icons (circular); right = map placeholder; below = "Send Message" form (first name, last name, email, subject, textarea, submit button)
14. **Footer** — dark bg (#1e1e1e); centered logo + social icons (Facebook, Twitter, Pinterest, Google+, LinkedIn) + copyright line

## Gherkin requirements

### Feature: Bizwell business template

```gherkin
Scenario: Header displays logo and navigation
  Given the user visits the Bizwell page
  Then the header shows the logo on the left
  And the navigation menu shows links for Home, About, Services, Portfolio, Team, Skill, Clients, Pricing, Blog, Contact
  And clicking a nav link scrolls to the corresponding section

Scenario: Hero banner shows slides with CTAs
  Given the user visits the Bizwell page
  Then the hero banner is visible with a heading, subtext, and "See Our Projects" button
  And the banner background is a full-width image

Scenario: About section shows 4 service icons
  Given the user scrolls to the About section
  Then 4 service items are displayed in a row
  And each item has a circular icon, title, description, and "More Details" link
  And the items are Web Development, Photography, Digital Media, Online Marketing

Scenario: Services section shows 6 items on dark background
  Given the user scrolls to the Services section
  Then the section has a dark background
  And 6 service cards are displayed in a 3x2 grid
  And each card has an icon, heading, and description

Scenario: Projects section has filterable gallery
  Given the user scrolls to the Projects section
  Then a filter tab bar is shown with categories: All, Web Design, Photography, Web Development, Online Marketing, Digital Media, Support
  And 6 project images are displayed in a grid
  And hovering a project image shows an overlay with title and category tags

Scenario: Page middle banner has parallax effect
  Given the user scrolls past the Projects section
  Then a full-width banner with a dark overlay is displayed
  And it contains a heading and a CTA button

Scenario: Team section shows 3 members
  Given the user scrolls to the Team section
  Then 3 team member cards are displayed in a row
  And each card has a photo, name, and role
  And hovering reveals social links

Scenario: Skills section shows progress bars
  Given the user scrolls to the Skills section
  Then a 2-column layout is displayed: image on left, progress bars on right
  And 5 skill bars are shown: Web Development, Online Marketing, Digital Media, Photography, Creative Design
  And each bar shows a percentage label

Scenario: Clients section shows testimonials
  Given the user scrolls to the Clients section
  Then a testimonial slider displays client photos, quotes, and names

Scenario: Pricing section shows 3 plans
  Given the user scrolls to the Pricing section
  Then 3 pricing cards are displayed: Basic, Advanced, Premium
  And each card shows a price, feature list, and "BUY IT NOW" button
  And each price badge uses a distinct color (gold, blue, teal)

Scenario: Blog section shows 3 posts
  Given the user scrolls to the Blog section
  Then 3 blog cards are displayed in a row
  And each card has an image, title, author/date, excerpt, and "Read More" link

Scenario: Partners section shows logo carousel
  Given the user scrolls to the Partners section
  Then a light background section with scrolling partner logos is displayed

Scenario: Contact section has info and form
  Given the user scrolls to the Contact section
  Then a 2-column layout shows contact info (address, phone, email with circular icons) on the left
  And a map placeholder on the right
  And a "Send Message" form below with first name, last name, email, subject, message textarea, and submit button

Scenario: Footer shows logo and social links
  Given the user scrolls to the footer
  Then the footer has a dark background
  And it shows the logo, social icon links, and copyright text
  And it links to https://www.componentdock.com/

Scenario: Navigation is responsive
  Given the user views the page on a mobile viewport
  Then the navigation collapses into a hamburger menu
  And tapping the menu expands the nav links

Scenario: Sections use consistent design tokens
  Given any section of the page
  Then headings use Raleway font, uppercase, bold
  And accent elements use the brand color #d73e4d
  And buttons are square (no border-radius) with uppercase text
  And circular icon elements have 50% border-radius with a 2px border
```

## Verification checklist

- [ ] Header: transparent over hero, fixed on scroll, logo + nav links
- [ ] Hero: full-width image, heading + subtext + CTA
- [ ] About: 4-column icon grid, circular icons, "More Details" links
- [ ] Services: dark bg, 6 cards in 3x2 grid
- [ ] Projects: filter tabs, 6 images in grid, hover overlay
- [ ] Middle banner: parallax bg, dark overlay, heading + CTA
- [ ] Team: 3 members, hover overlay with social links
- [ ] Skills: 2-col layout, 5 animated progress bars
- [ ] Clients: testimonial slider with avatars
- [ ] Pricing: 3 cards with colored price badges
- [ ] Blog: 3 cards with image + excerpt
- [ ] Partners: logo carousel on light bg
- [ ] Contact: info + icons on left, map right, form below
- [ ] Footer: dark bg, logo, social icons, copyright
- [ ] Responsive: hamburger nav on mobile
- [ ] Tokens: Raleway font, #d73e4d accent, square buttons, circular icons
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code
