# Template: Finova (Business / Corporate)

## Purpose

Recreation of ColorLib "Occupy" — a corporate business/finance website template.

- **Source:** https://colorlib.com/wp/template/occupy/
- **Preview:** https://preview.colorlib.com/theme/occupy/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/occupy-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **App folder:** `apps/finova`
- **Package:** `@free-react-templates/finova`
- **Deploy URL:** `https://finova.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`css/style.css`):

| Token | Value | Notes |
|---|---|---|
| **Primary brand** | `#a7cb00` | Lime green — buttons, accents, overlays |
| **Secondary amber** | `#f8b600` | Warm yellow accent |
| **Secondary cyan** | `#4cd3e3` | Teal/cyan accent |
| **Secondary blue** | `#38a4ff` | Bright blue accent |
| **Secondary red** | `#f44a40` | Alert/accent red |
| **Text dark** | `#222222` | Headings, body |
| **Text gray** | `#777777` | Subtext |
| **Text light** | `#999999` | Muted captions |
| **Background white** | `#ffffff` | Primary section bg |
| **Background lavender** | `#f9f9ff` / `#fafaff` | Alternate section bg |
| **Background gray** | `#eeeeee` | Footer area bg |
| **Font body** | `"Raleway", sans-serif` | Body text, paragraphs |
| **Font headings** | `"Oswald", sans-serif` | Headings, titles |
| **Button style** | Sharp corners (no radius), `padding: 0 40px`, bg `#a7cb00`, white text | `.main_btn` |
| **Button hover** | Inverts to text color `#a7cb00`, no shadow | `.main_btn:hover` |
| **White button** | `#f9f9ff` bg, dark text | `.white_btn` — CTA sections |
| **Overlay green** | `rgba(167, 203, 0, 0.8)` | Semi-transparent green overlay |
| **Overlay dark** | `rgba(34, 34, 34, 0.8)` | Dark overlay on images |

## Sections (in DOM order)

1. **Navbar** — Fixed top, logo left, centered nav links (Home, About, Services, Pages dropdown, Blog dropdown, Contact), social icons + search right
2. **Hero Banner** — Full-width Swiper slider, 3 slides, each with background image, heading "We Combine Business with Finance", subtext, two CTA buttons (Explore Us / Get Free Quote)
3. **Mission Area** — Two-column split: left = image, right = Owl carousel with mission text blocks ("Road to Success" / "About Our Mission")
4. **Success Area** — Two alternating rows: each row has text left + image right (row 1), then image left + text right (row 2)
5. **Project Area** — 6-card grid (3 cols), each card: image with hover overlay showing title + category tags + "View More" button
6. **Team Area** — Owl carousel of 4 team members, each with photo, name, role, social icons (hover overlay)
7. **Project Estimate CTA** — Centered section with background, heading "Get to Know Project Estimate?", description text, white CTA button
8. **Home Blog Area** — 4-column grid alternating: image column + text column (2 blog posts, each with image + text side by side)
9. **Footer** — 4 columns: About text, Navigation links, Newsletter (email input + submit), InstaFeed (8 thumbnail grid); bottom bar with copyright + social icons

## Gherkin Scenarios

### Navbar
- **Scenario:** Navbar renders with all navigation links
  - Given the page loads
  - Then the navbar displays links: Home, About, Services, Pages, Blog, Contact
  - And social icons (Facebook, Twitter, Dribbble, Behance) are visible on the right
  - And a search icon is present

### Hero Banner
- **Scenario:** Hero banner displays slider with CTA buttons
  - Given the page loads
  - Then a full-width slider is visible
  - And the heading reads "We Combine Business with Finance"
  - And two buttons are present: "Explore Us" and "Get Free Quote"

### Mission Area
- **Scenario:** Mission section shows image and text carousel
  - Given the user scrolls to the mission area
  - Then an image is displayed on the left half
  - And a text carousel is on the right with mission statements
  - And the carousel navigates between "Road to Success" and "About Our Mission"

### Success Area
- **Scenario:** Success section displays alternating layout rows
  - Given the user scrolls to the success area
  - Then row 1 shows text on the left and image on the right
  - And row 2 shows image on the left and text on the right

### Project Area
- **Scenario:** Project grid shows 6 project cards with hover effects
  - Given the user scrolls to the project area
  - Then 6 project cards are displayed in a 3-column grid
  - And each card has a hover overlay with title, category tags, and "View More" button

### Team Area
- **Scenario:** Team section displays member carousel
  - Given the user scrolls to the team area
  - Then a carousel of 4 team members is visible
  - And each member shows a photo, name, role, and social media icons on hover

### Project Estimate CTA
- **Scenario:** CTA section encourages project estimate
  - Given the user scrolls to the estimate section
  - Then the heading reads "Get to Know Project Estimate?"
  - And a description paragraph is present
  - And a "Get Free Estimate" button is displayed

### Home Blog Area
- **Scenario:** Blog section shows 2 blog posts in 4-column layout
  - Given the user scrolls to the blog area
  - Then 2 blog post entries are displayed
  - And each entry has an image and text side by side
  - And each text entry shows a date, author, title, and excerpt

### Footer
- **Scenario:** Footer displays 4-column layout with newsletter
  - Given the user scrolls to the footer
  - Then 4 columns are visible: About, Navigation Links, Newsletter, InstaFeed
  - And the newsletter has an email input and submit button
  - And the InstaFeed shows 8 thumbnail images
  - And the bottom bar shows copyright text and social icons
  - And the footer links to https://www.componentdock.com/

## Verification Checklist

- [ ] All 9 sections render in correct DOM order
- [ ] Navbar has correct links and social icons
- [ ] Hero slider works (auto-play or manual navigation)
- [ ] Mission carousel cycles through text blocks
- [ ] Success area has alternating layout
- [ ] Project grid has 6 cards with hover overlay effect
- [ ] Team carousel displays 4 members with hover social icons
- [ ] CTA section has heading, text, and button
- [ ] Blog area shows 2 posts in the alternating layout
- [ ] Footer has 4 columns, newsletter form, InstaFeed grid
- [ ] Footer links to Component Dock (https://www.componentdock.com/)
- [ ] No references to ColorLib in any app source file
- [ ] All placeholder images use `picsum.photos/seed/finova-*`
- [ ] Fonts loaded via Google Fonts: Raleway + Oswald
- [ ] Brand color `#a7cb00` used consistently for buttons and accents
- [ ] Tests pass with 100% coverage
