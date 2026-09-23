# Template: Craftwork (Design category)

## Purpose

Recreation of ColorLib **Design** template
(preview: https://preview.colorlib.com/theme/design/).

A clean, professional business/portfolio template with a two-column hero
(headline + image + quote overlay), achievement stats, three-step
"how it works" process, services section, testimonial carousel, blog
entries grid, and a full footer with social links and navigation columns.

**Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript.

## Design tokens (extracted from preview CSS)

| Token             | Value                    | Notes                                |
| ----------------- | ------------------------ | ------------------------------------ |
| Font family       | `"Montserrat", sans-serif` | Weights 300, 400, 700              |
| Primary brand     | `#1264fa`                | Blue — buttons, active links, icons  |
| Primary hover     | `#2671fa`                | Slightly lighter blue                |
| Text color        | `#000839`                | Dark navy — headings, body           |
| Body background   | `#ffffff`                | White                                |
| Section bg (alt)  | `#f8f9fa`                | Light gray — services + blog areas   |
| Hero quote bg     | `#000839`                | Dark navy block over hero image      |
| Button radius     | `30px`                   | Pill shape                           |
| Button padding    | `12px 30px`              |                                       |
| Link color        | `#1264fa`                | Same as brand                        |
| Card shadow hover | `0 15px 30px rgba(0,0,0,0.05)` | Blog post cards               |
| Post card radius  | `20px` (bottom-left 0)   | Asymmetric rounded corners           |
| Icon accent       | `#1264fa` circle behind  | 40×40px blue circle behind icons     |
| Divider line SVG  | Dashed `#979797` curved  | Between how-it-works steps           |

## Requirements (Gherkin)

### Navbar

Scenario: Logo links to home
  Given the page loads
  When I look at the top-left
  Then I see a "Craftwork" logo text link

Scenario: Navigation links are present
  Given the page loads
  When I inspect the navigation
  Then I see links for Home, a Dropdown menu, Inner Page, and Contact us

Scenario: CTA button in navbar
  Given the page loads
  When I look at the right side of the nav
  Then I see a "Free Templates" pill button linking to Component Dock

Scenario: Mobile hamburger menu
  Given the viewport is mobile (< 992px)
  When I tap the burger icon
  Then a mobile slide-in menu opens with all nav links

### Hero

Scenario: Hero headline and copy
  Given the page loads
  When I look at the hero section
  Then I see a large headline "Create, Code, and Published."
  And a paragraph of descriptive text
  And a "Get Started" primary button

Scenario: Feature highlights under hero
  Given the page loads
  When I look below the hero headline
  Then I see two feature cards with icon, title, and description
  And the icons are styled with a blue circle accent

Scenario: Hero image with quote overlay
  Given the page loads
  When I look at the right side of the hero
  Then I see a hero image
  And an overlaid dark navy quote block with a testimonial and author name

### Achievements (Stats)

Scenario: Four stat cards displayed
  Given the page loads
  When I scroll to the achievements section
  Then I see 4 stat cards in a row
  And each has a large number, heading, and short description

Scenario: Stat content
  Given the page loads
  When I check the stats
  Then I see values like "99.55%", "98,000+", "99.99%", and "1M+"

### How It Works

Scenario: Section heading
  Given the page loads
  When I scroll to the how-it-works section
  Then I see a subtitle "How it works" and a heading paragraph

Scenario: Three-step process
  Given the page loads
  When I inspect the steps
  Then I see 3 steps each with an icon, title, and description
  And step titles are "1. Create an account", "2. Create new orders", "3. Ship and track"
  And curved dashed arrows connect steps 1→2 and 2→3 on desktop

### Services

Scenario: Two-column layout
  Given the page loads
  When I scroll to the services section
  Then I see a left column with title, text, checklist, and button
  And a right column with an image

Scenario: Services content
  Given the page loads
  When I check the services section
  Then I see a "Services" subtitle and heading
  And a paragraph of text
  And a checklist with 3 items
  And a "Get Started" primary button
  And a dotted background decoration behind the image

### Testimonials

Scenario: Carousel of testimonials
  Given the page loads
  When I scroll to the testimonials section
  Then I see a testimonial carousel/slider

Scenario: Testimonial content
  Given the page loads
  When I check a testimonial
  Then I see an author avatar image
  And a blockquote with testimonial text
  And the author name and role below

### Blog Entries

Scenario: Blog section heading
  Given the page loads
  When I scroll to the blog section
  Then I see a "Blog" subtitle and "Latest Blog Posts" heading

Scenario: Five blog post cards
  Given the page loads
  When I check the blog grid
  Then I see 5 blog post cards
  And each has a date, title link, and short description
  And the cards have rounded corners (20px, bottom-left 0)

Scenario: Blog card hover effect
  Given the page loads
  When I hover over a blog card
  Then it lifts up slightly (-5px) with a subtle box shadow

### Footer

Scenario: Footer layout
  Given the page loads
  When I scroll to the footer
  Then I see an "About" section with text
  And a "Connect with us" section with social icon links
  And a "Navigations" section with 3 columns of link lists

Scenario: Footer attribution
  Given the page loads
  When I check the footer copyright area
  Then I see "Made with ❤️ by Component Dock" linking to componentdock.com

Scenario: Social links in footer
  Given the page loads
  When I check the footer social section
  Then I see icons for Facebook, Twitter, Instagram, Dribbble, and LinkedIn

## Verification checklist

- [ ] Font: Montserrat loaded via Google Fonts
- [ ] Brand color #1264fa applied to buttons, links, active states
- [ ] Button style: pill shape (border-radius 30px)
- [ ] Hero: two-column with image + quote overlay
- [ ] Achievements: 4 stat cards in responsive grid
- [ ] How It Works: 3 steps with SVG arrows between them
- [ ] Services: two-column on gray background
- [ ] Testimonials: carousel with avatar + quote + author
- [ ] Blog: 5 cards in responsive grid on gray background
- [ ] Footer: about, social, 3-column nav links
- [ ] Footer links to Component Dock
- [ ] No references to ColorLib in app code
- [ ] Placeholder images via picsum.photos
- [ ] Responsive: mobile hamburger, stacked columns
- [ ] CNAME: craftwork.free.componentdock.com
