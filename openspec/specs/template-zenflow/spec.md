# Template: Zenflow (Business / Tech Agency)

## Purpose

Recreation of ColorLib "Onepro" — a business/tech agency website template with hero slider, services, portfolio, pricing, and contact sections.

- **Source:** https://colorlib.com/wp/template/onepro/
- **Preview:** https://preview.colorlib.com/theme/onepro/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/onepro-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **App folder:** `apps/zenflow`
- **Package:** `@free-react-templates/zenflow`
- **Deploy URL:** `https://zenflow.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`style.css`):

| Token | Value | Notes |
|---|---|---|
| **Primary brand** | `#26b7e7` | Sky blue — buttons, accents, icons, overlays |
| **Accent red** | `#eb484d` | Alert/accent, pricing highlight |
| **Text dark** | `#292929` | Headings, body text |
| **Text gray** | `#6f6f6f` / `#9d9f9f` | Subtext, muted |
| **Background white** | `#ffffff` | Primary section bg |
| **Background light** | `#fbfbfb` / `#f7f8f4` | Alternate section bg |
| **Background gray** | `#eeeeee` | Gray-bg sections (about, portfolio, pricing, contact) |
| **Font body** | `"Raleway", sans-serif` | All text — single font family |
| **Button primary** | `#26b7e7` bg, white text, `border-radius: 5px`, `padding: 15px 20px` | `.home-button a` |
| **Button primary hover** | White bg, `#26b7e7` text | Inverted on hover |
| **Button download** | Outlined, white border, transparent bg | `.download-button` |
| **Button download hover** | White bg, dark text | `.download-button:hover` |
| **Dark overlay** | `rgba(0, 0, 0, 0.85)` / `rgba(0, 0, 0, 0.9)` | Hero slides, promo bg |
| **Footer dark** | `#292929` area | Footer top section |
| **Footer deep dark** | darker bg | Footer bottom copyright bar |

## Sections (in DOM order)

1. **Navbar** — Sticky top, logo left, 9 nav links (Home, Features, Service, Portfolio, Team, Clients, Pricing, News, Contact), stellarnav responsive menu
2. **Hero Slider** — Owl carousel, 2 slides with full-width bg images + dark overlay, heading "Business Theme Creator", subtext, CTA button "see our project"
3. **Features** — 4-column grid of service cards, each with icon (fa-rocket etc.), title, description, "Learn More" link
4. **About** — Two-column split: left = text content (heading "We are Theme Creator", description, "Learn More"), right = animated skill progress bars
5. **Services** — 3-column grid, each item with icon + title + description (right-aligned icon style)
6. **Portfolio** — Filterable image gallery with category tabs (All, Web Design, Development, WordPress, Graphic Design), grid of project images with hover overlay
7. **Promo CTA** — Full-width parallax background section, centered text "Our Latest Design & Creative Templates", outlined "Download Now" button
8. **Team** — 4 team member cards in a slider, each with photo, name, role, social icon overlay on hover
9. **Info** — Two-column split: left = image, right = highlighted text block with "Learn More" link
10. **Testimonials** — "Our Happy Clients", carousel of client testimonials with photos and quotes
11. **Pricing** — 3 pricing cards (Basic $9.99/mo, Standard, Premium), each with feature list, highlighted middle card
12. **Blog & News** — "Our Latest News", 3-column: Twitter feed widget + 2 blog post cards (image + date + title + excerpt)
13. **Contact** — Two-column: left = contact details (address, phone, email with icons), right = contact form (name, email, subject, message, submit button)
14. **Footer** — Dark bg, brand name "Business One", row of 8 social icons, copyright bar at bottom

## Gherkin Scenarios

### Navbar
- **Scenario:** Navbar renders with all navigation links
  - Given the page loads
  - Then the navbar displays links: Home, Features, Service, Portfolio, Team, Clients, Pricing, News, Contact
  - And a logo is visible on the left

### Hero Slider
- **Scenario:** Hero slider displays with CTA
  - Given the page loads
  - Then a full-width image slider is visible
  - And the heading reads "Business Theme Creator"
  - And a "see our project" button is present
  - And the slider auto-plays between 2 slides

### Features
- **Scenario:** Features section shows 4 service cards
  - Given the user scrolls to the features area
  - Then 4 service cards are displayed in a row
  - And each card has an icon, title, description, and "Learn More" link

### About
- **Scenario:** About section shows company info and skills
  - Given the user scrolls to the about area
  - Then the heading reads "We are Theme Creator"
  - And a description paragraph is present
  - And animated skill progress bars are displayed on the right

### Services
- **Scenario:** Services section shows 3 service items
  - Given the user scrolls to the services area
  - Then 3 service items are displayed in a grid
  - And each has an icon, title, and short description

### Portfolio
- **Scenario:** Portfolio shows filterable gallery
  - Given the user scrolls to the portfolio area
  - Then category filter tabs are visible (All, Web Design, Development, WordPress, Graphic Design)
  - And a grid of project images is displayed
  - And clicking a filter tab updates the visible images

### Promo CTA
- **Scenario:** Promo section encourages download
  - Given the user scrolls to the promo area
  - Then the heading reads "Our Latest Design & Creative Templates"
  - And a "Download Now" button is present with outlined style

### Team
- **Scenario:** Team section shows member cards
  - Given the user scrolls to the team area
  - Then 4 team member cards are displayed
  - And each card shows a photo, name, and role
  - And social icons appear on hover

### Info
- **Scenario:** Info section shows image and text
  - Given the user scrolls to the info area
  - Then an image is displayed on the left
  - And highlighted text with a "Learn More" link is on the right

### Testimonials
- **Scenario:** Testimonials carousel shows client quotes
  - Given the user scrolls to the testimonials area
  - Then the heading reads "Our Happy Clients"
  - And a carousel of client testimonials with photos and quotes is visible

### Pricing
- **Scenario:** Pricing section shows 3 plan cards
  - Given the user scrolls to the pricing area
  - Then 3 pricing cards are displayed (Basic, Standard, Premium)
  - And each card shows a price, feature list, and sign-up button
  - And the middle card is visually highlighted

### Blog & News
- **Scenario:** Blog section shows latest news
  - Given the user scrolls to the blog area
  - Then the heading reads "Our Latest News"
  - And 2 blog post cards are displayed with images, dates, titles, and excerpts
  - And a Twitter feed widget is shown (or replaced with a placeholder)

### Contact
- **Scenario:** Contact section has form and details
  - Given the user scrolls to the contact area
  - Then contact details (address, phone, email) are shown on the left
  - And a contact form with name, email, subject, message fields and submit button is on the right

### Footer
- **Scenario:** Footer displays brand and social links
  - Given the user scrolls to the footer
  - Then the brand name "Business One" (replaced with "Zenflow") is displayed
  - And 8 social media icon links are present
  - And a copyright bar is at the bottom
  - And the footer links to https://www.componentdock.com/

## Verification Checklist

- [ ] All 14 sections render in correct DOM order
- [ ] Navbar has correct links and responsive menu
- [ ] Hero slider works (auto-play or manual navigation) with 2 slides
- [ ] Features section shows 4 service cards with icons
- [ ] About section shows text and animated skill bars
- [ ] Services section shows 3 items in grid
- [ ] Portfolio has working filter tabs and image grid
- [ ] Promo CTA has parallax bg and download button
- [ ] Team section shows 4 members with hover social icons
- [ ] Info section has image and text split
- [ ] Testimonials carousel displays client quotes
- [ ] Pricing shows 3 cards with highlighted middle
- [ ] Blog section shows 2 posts + feed widget
- [ ] Contact has form and details in split layout
- [ ] Footer has brand, social icons, copyright, and Component Dock link
- [ ] No references to ColorLib in any app source file
- [ ] All placeholder images use `picsum.photos/seed/zenflow-*`
- [ ] Font loaded via Google Fonts: Raleway
- [ ] Brand color `#26b7e7` used consistently for buttons and accents
- [ ] Tests pass with 100% coverage
