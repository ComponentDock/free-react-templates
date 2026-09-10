# Template: Bizcraft (Business / Consulting)

## Purpose

Recreation of [ColorLib Bizcon](https://colorlib.com/wp/template/bizcon/).
Preview: https://preview.colorlib.com/theme/bizcon/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bizcon-free-template.jpg

Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript. Placeholder images via
`https://picsum.photos/seed/bizcraft-<n>/<w>/<h>`. Google Fonts: Poppins
(headings) + Roboto (body). Icons from lucide-react. Footer links to
Component Dock.

## Design tokens

| Token | Value | Notes |
|-------|-------|-------|
| Primary / brand | `#ff7e5f` | Coral — used for links, hover, active states |
| Primary gradient | `#feb47b → #ff7e5f` | 131° angle — used on all CTA buttons |
| Heading color | `#2f373d` | Dark charcoal |
| Body text | `#646464` | Medium gray |
| Gray background | `#f7f7f7` | Services section background |
| White background | `#ffffff` | Most sections |
| Link hover | `#ff7e5f` | Coral |
| Heading font | `"Poppins", sans-serif` | All h1–h6 |
| Body font | `"Roboto", sans-serif` | Paragraphs, nav, body |
| Button radius | ~20px (pill) | `btn_1` / `btn_2` classes — rounded-full equivalent |
| Button padding | ~12px 24px | Generous horizontal padding |
| Section padding | 140px vertical (desktop) | Via `.section_padding` |

## Structure (8 sections, order as rendered)

1. **Navbar** — sticky header, logo left, nav links (Home, About, Blog, Page,
   Contact). Mobile hamburger. White background, subtle bottom border.
2. **Banner / Hero** — full-width background image section, heading "Lead from
   Front in Business Innovation.", subtitle paragraph, coral gradient CTA
   "Learn More" button, plus "Intro Video" play icon link on the right. Two
   stats widgets below: "24 Year Experience in consulting" with counter-style
   display.
3. **About** — split layout: left image, right text with heading, paragraph,
   "Read More" link. Coral accent line above heading.
4. **Services** — gray background (`#f7f7f7`), heading "We Provide Best
   Services", subtitle text, grid of service cards (icon + title + text),
   "Load More" button. Service cards include: Business Opportunity, Commercial
   Approach, and others (6 total in grid).
5. **Testimonials** — "Customer Are Saying" heading, carousel/slider with
   testimonial cards (avatar, name, role, quote text). Gray or white background.
6. **Portfolio** — "Explore Our Best Practice Area" heading, grid of project
   cards with hover overlay (image + "Startup Project" label).
7. **Adviser CTA** — split layout: left text "We Providing high quality adviser
   service" + "Read More" link, right image. Same style as About section
   but reversed layout.
8. **Blog** — gray or white background, "Update From Blog" heading, 3-column
   grid of blog cards (image, title, short excerpt, "Read More" link).
9. **Footer** — dark background (`#2f373d` or `#303030`), 4-column layout:
   column 1 = About/description, columns 2-4 = link lists (Top Products,
   Quick Links, Features). Social icons. Copyright bar at bottom. "Component
   Dock" branding.

## Gherkin requirements

```gherkin
Feature: Bizcraft template rendering

  Background:
    Given the Bizcraft template is mounted at the root path

  Scenario: Navbar renders all navigation links
    Then the navbar contains links for "Home", "About", "Blog", and "Contact"
    And the navbar displays a logo image
    And the navbar is sticky on scroll

  Scenario: Hero section displays headline and CTAs
    Then the hero heading reads "Lead from Front in Business Innovation"
    And a "Learn More" button is visible
    And an "Intro Video" link is visible
    And the section has a background image

  Scenario: About section shows company info
    Then the about section displays a heading with "Experience" or "consulting"
    And a paragraph of descriptive text is present
    And a "Read More" link is visible

  Scenario: Services section lists service cards
    Then the services section heading reads "We Provide Best Services"
    And at least 4 service cards are displayed in a grid
    And each service card has an icon, title, and description
    And a "Load More" button is visible

  Scenario: Testimonials section shows customer reviews
    Then the testimonials heading reads "Customer Are Saying"
    And at least 1 testimonial card is displayed
    And each testimonial shows a name, role, and quote

  Scenario: Portfolio section shows project cards
    Then the portfolio heading contains "Practice Area"
    And at least 2 project cards are displayed

  Scenario: Adviser CTA section shows service pitch
    Then the adviser section contains a heading about "adviser service"
    And a "Read More" link is visible

  Scenario: Blog section shows recent posts
    Then the blog section heading reads "Update From Blog"
    And at least 2 blog post cards are displayed
    And each card has a title and short excerpt

  Scenario: Footer contains links and branding
    Then the footer displays "Top Products", "Quick Links", and "Features" columns
    And the footer links to Component Dock
    And social media icons are present

  Scenario: Page is responsive
    Given the viewport is 375px wide
    Then the navbar collapses to a hamburger menu
    And sections stack vertically
    And text remains readable
```

## Verification checklist

- [ ] All 9 sections rendered in correct order (Navbar through Footer)
- [ ] Coral gradient buttons (`#feb47b → #ff7e5f`) used for CTAs
- [ ] Poppins headings + Roboto body text applied
- [ ] Services section uses gray `#f7f7f7` background
- [ ] Testimonials slider/carousel functional
- [ ] Portfolio cards have hover overlay effect
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No ColorLib references in app code (comments, strings, URLs)
- [ ] Placeholder images use `picsum.photos/seed/bizcraft-*`
- [ ] Responsive: hamburger nav at mobile, stacked sections
- [ ] `apps/bizcraft/public/CNAME` contains `bizcraft.free.componentdock.com`
- [ ] `homepage` in `package.json` set to `https://bizcraft.free.componentdock.com`
