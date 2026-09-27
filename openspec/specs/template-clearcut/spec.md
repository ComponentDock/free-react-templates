# Template: ClearCut (Business / Agency)

## Purpose

Recreation of the ColorLib **Whitespace** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page app.

- **Source slug:** `whitespace`
- **Preview URL:** https://preview.colorlib.com/theme/whitespace/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/whitespace-free-template.jpg
- **Category:** Business / Agency landing page
- **Stack:** React 19, Vite (latest), Tailwind CSS 4, TypeScript (strict)
- **Description:** Clean business/agency template with a split hero (text left, video/image right), service descriptions, stats counter, project gallery, testimonials carousel, pricing plans, partner logos, and dark footer.

## Design Tokens

Extracted from the live preview CSS (`css/style.css`):

| Token | Value | Notes |
|-------|-------|-------|
| Primary font | `"Work Sans", sans-serif` | Body / UI text |
| Secondary font | `"Poppins", sans-serif` | Headings (inline @font-face in preview) |
| Brand color | `#78d5ef` | Light cyan/blue — used on buttons, accents, links |
| Brand hover | `#56caeb` | Slightly darker cyan |
| Brand active | `#4ac7ea` | Pressed state |
| Body text | `#212529` | Dark near-black |
| Body background | `#ffffff` | White |
| Light section bg | `#f8f9fa` (bg-light) | Pricing section |
| Dark footer bg | `ftco-bg-dark` | Dark charcoal/near-black |
| Counter section bg | Parallax background image | Dark overlay with parallax |
| Border radius | `0.25rem` | Subtle rounded buttons |
| Button style | `.btn-custom` | Transparent bg with animated underline fill on hover |

## Section Structure (DOM order)

1. **Navbar** — dark background, brand "ClearCut", nav links: Home, About, Work, Pricing, Blog, Contact
2. **Hero** — split layout: left text panel (Welcome subheading, "We Help to Build You the Product" h1, "Business Solution" h2, "Get in touch" CTA button); right panel: video/image hero (750px tall, bg-image with optional video background)
3. **About / Services Detail** — two-column row: left image (5 cols), right content (7 cols) with subheading "Providing", heading "What We Can Do for You", and 4 service items (Market Research, Financial Services, Online Marketing, 24/7 Support) each with icon + title + description
4. **Services Cards** — 4-column grid: Business Strategy, Data Analysis, Graphic Design, Creative — each with centered icon + heading + description
5. **Stats Counter** — parallax background image, "Some Interesting Facts" heading (white text), 4 counters: 2000 Done Works, 300 Happy Customers, 100 Coffee, 1000 Work Hours
6. **Projects Gallery** — masonry-style grid with image cards: overlay on hover, arrow icon, title + category label ("Branding & Illustration Design" / "Web Design"); 2+2+2+1 layout across 3 columns
7. **Testimonials** — owl-carousel style: circular user avatar with quote icon overlay, testimonial text, name + position
8. **Blog** — 3-column cards: image thumbnail, title, meta date, excerpt
9. **Pricing** — 4-column pricing cards on light bg: Free ($0), Basic ($19.95/mo), Standard ($29.95/mo), Premium ($49.95/mo) — each with feature list and CTA button
10. **Partners** — 5 partner logos in a horizontal row
11. **Footer** — dark background, 4-column: brand + social links, Useful Links, Quick Links, Have a Questions? (address, phone, email)

## Gherkin Requirements

### Feature: ClearCut Template

#### Scenario: Navbar renders with correct brand and navigation links
- Given the page loads
- When the navbar is visible
- Then it shows the brand name "ClearCut"
- And it displays navigation links: Home, About, Work, Pricing, Blog, Contact
- And the navbar has a dark background

#### Scenario: Hero section displays split layout with text and visual
- Given the page loads
- When the hero section is visible
- Then the left side shows "Welcome" subheading
- And it shows "We Help to Build You the Product" as the main heading
- And it shows "Business Solution" as a secondary heading
- And it shows a "Get in touch" call-to-action button
- And the right side shows a background image or video area

#### Scenario: About section displays service details in two columns
- Given the page loads
- When the about section is visible
- Then it shows "What We Can Do for You" heading
- And it lists 4 service items: Market Research, Financial Services, Online Marketing, 24/7 Support
- Each service item has an icon, title, and description

#### Scenario: Services cards show 4 service offerings
- Given the page loads
- When the services cards section is visible
- Then it displays 4 cards in a grid
- And the cards show: Business Strategy, Data Analysis, Graphic Design, Creative
- Each card has an icon, heading, and description

#### Scenario: Stats counter section displays animated numbers
- Given the page loads
- When the counter section is visible
- Then it shows "Some Interesting Facts" heading
- And it displays 4 counters: Done Works (2000), Happy Customers (300), Coffee (100), Work Hours (1000)
- And the section has a parallax background image

#### Scenario: Projects gallery shows masonry grid of project cards
- Given the page loads
- When the projects section is visible
- Then it shows "Recents Projects" heading
- And it displays a masonry-style grid of project cards
- Each card has a background image, overlay, arrow icon, title, and category label

#### Scenario: Testimonials carousel displays user testimonials
- Given the page loads
- When the testimonials section is visible
- Then it shows a carousel of testimonial cards
- Each card has a circular user avatar, quote text, name, and position

#### Scenario: Blog section shows recent blog posts
- Given the page loads
- When the blog section is visible
- Then it displays 3 blog post cards in a row
- Each card has a thumbnail image, title, date, and excerpt

#### Scenario: Pricing section shows 4 pricing tiers
- Given the page loads
- When the pricing section is visible
- Then it shows "Our Best Pricing" heading
- And it displays 4 pricing cards: Free ($0), Basic ($19.95), Standard ($29.95), Premium ($49.95)
- Each card has a feature list and a "Get Started" button

#### Scenario: Partner logos are displayed
- Given the page loads
- When the partner section is visible
- Then it displays 5 partner logo images in a horizontal row

#### Scenario: Footer renders with dark background and contact info
- Given the page loads
- When the footer is visible
- Then it has a dark background
- And it shows the brand name "ClearCut"
- And it displays social media links
- And it shows "Useful Links" and "Quick Links" columns
- And it shows "Have a Questions?" with address, phone, and email
- And it links to https://www.componentdock.com/

#### Scenario: Footer links to Component Dock
- Given the page loads
- When the footer is visible
- Then it contains a link to https://www.componentdock.com/
- And the link text references "Component Dock"

## Verification Checklist

- [ ] Navbar: dark bg, brand name, all 6 nav links, mobile hamburger toggle
- [ ] Hero: split layout (text left, visual right), subheading, h1, h2, CTA button
- [ ] About: two-column (image right, text left), "Providing" subheading, 4 service items with icons
- [ ] Services Cards: 4-column grid, centered icons, headings, descriptions
- [ ] Counter: parallax bg, "Some Interesting Facts" heading, 4 animated counters
- [ ] Projects: masonry grid, image cards with overlay + arrow, title + category
- [ ] Testimonials: carousel with avatar, quote, name, position
- [ ] Blog: 3 cards with image, title, date, excerpt
- [ | ] Pricing: 4 tiers on light bg, prices, feature lists, CTA buttons
- [ ] Partners: 5 logo images in horizontal row
- [ ] Footer: dark bg, brand, social links, 2 link columns, contact info, Component Dock link
- [ ] Design tokens: #78d5ef brand, Work Sans / Poppins fonts, 0.25rem radius
- [ ] Responsive: mobile-first, stacked layout on small screens
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Images use picsum.photos placeholders (deterministic seeds)
- [ ] Icons from lucide-react (replacing flaticon/ionicons)
