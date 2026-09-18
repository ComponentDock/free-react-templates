# Template: Mechatron (Robotics / Technology)

## Purpose

Recreation of ColorLib's "Robotics" template
(https://colorlib.com/wp/template/robotics/) as a React 19 + Vite + Tailwind 4
+ TypeScript single-page template.

**Preview URL:** https://preview.colorlib.com/theme/robotics/
**Source slug:** `robotics`
**New name:** `mechatron` (never reuse source name)
**Stack:** React 19, Vite (latest), Tailwind CSS 4, TypeScript (strict)

## Design Tokens

Extracted from the live preview CSS (`css/main.css`) at
https://preview.colorlib.com/theme/robotics/css/main.css:

### Colors

| Token               | Hex/Value                       | Usage                                |
|----------------------|---------------------------------|--------------------------------------|
| brand-primary        | `#8a90ff`                       | Headings hover, button hover, links  |
| brand-gradient-start | `#828fff`                       | Primary button gradient start        |
| brand-gradient-end   | `#d496ff`                       | Primary button gradient end          |
| accent-teal          | `#4cd3e3`                       | Alternate button color option        |
| accent-blue          | `#38a4ff`                       | Alternate button color option        |
| accent-yellow        | `#f4e700`                       | Alternate button color option        |
| accent-red           | `#f44a40`                       | Alternate button color option        |
| text-body            | `#777777`                       | Body paragraph text                  |
| text-heading         | `#222222`                       | Headings h1–h6                       |
| text-white           | `#ffffff`                       | Hero text, footer text               |
| bg-white             | `#ffffff`                       | Product cards, feature cards, base   |
| bg-lavender          | `#f9f9ff`                       | Product details, alternating sections|
| card-shadow          | `rgba(212,150,255, 0.2)`        | Product card box-shadow              |

### Typography

| Property      | Value                        |
|---------------|------------------------------|
| font-family   | "Poppins", sans-serif        |
| body weight   | 300                          |
| body size     | 14px                         |
| body line-h   | 1.625em                      |
| heading weight| 600                          |
| heading color | #222222                      |
| h1 size       | 36px                         |
| h2 size       | 30px                         |
| h3 size       | 24px                         |
| h4 size       | 18px                         |
| h5 size       | 16px                         |
| h6 size       | 14px                         |

### Buttons / Interactive

| Element          | Style                                                        |
|------------------|--------------------------------------------------------------|
| primary-btn      | Gradient `#828fff→#d496ff`, border-radius 25px (pill), white text, 30px padding |
| primary-btn:hover| Transparent bg, `#8a90ff` text/border                       |
| product-btn      | White bg, `#222` text, no radius on card details             |
| footer newsletter btn | Same gradient primary-btn, 25px radius                  |

### Section Backgrounds

| Section         | Background                                                |
|-----------------|-----------------------------------------------------------|
| Banner/Hero     | Parallax image (`banner-bg.jpg`), cover, center           |
| Products        | White (`#fff`)                                            |
| Home About      | White (`#fff`), split image/text                          |
| About Video     | White bg, right side parallax video poster (`video-bg.jpg`)|
| Features        | Parallax image (`feature-bg.jpg`), cover, center          |
| Brand Logos     | White (`#fff`), grayscale filtered logos                   |
| Blog            | White (`#fff`)                                            |
| Footer          | Parallax image (`footer-bg.jpg`), cover, center           |

### Border Radii

| Element              | Radius    |
|----------------------|-----------|
| Buttons              | 25px (pill)|
| Product cards        | 10px      |
| Feature cards        | 10px      |
| Blog post thumbnails | 10px      |
| Inputs               | 3px       |
| Product detail btn   | 0px (square)|

## Section Structure (HTML order from preview)

1. **Header / Navbar** — Logo left, nav links right (Home, About, Services, Products, Blog dropdown, Contact, Dropdown). Sticky on scroll.
2. **Banner / Hero** — Fullscreen parallax background image. Left: 3-line headline ("Improved Production level with Robotics"), subtitle, "View Details" CTA button. Right: robot illustration image.
3. **Featured Products** — Section heading centered ("Featured Robotics Products to Show"). 4-column grid of product cards: product image on white, detail area in `#f9f9ff` with name, blurb, "View Details" button. Box shadow with purple tint.
4. **Home About** — Split layout: left = full-width illustration image, right = heading + subtext + paragraph + "Get Details" button. Full-bleed white background.
5. **About Video** — Split layout: left = small heading + large heading + subtitle + paragraph + "Get Started Now" button. Right = video poster image with gradient overlay (`.overlay-bg`) and centered play button.
6. **Features** — Parallax background image. Centered heading. 6 feature cards in 3×2 grid on white with 10px radius: icon + title + description. Hover highlights icon+title in brand color.
7. **Brand Logos** — Row of 5 partner/client logos, grayscale filtered.
8. **Blog** — Section heading centered. 2-column layout: blog thumbnail image (10px radius), tags, post title, excerpt, date. Tags have gradient background on hover.
9. **Footer** — Parallax background. 3 columns: links list, newsletter form (email input + subscribe button), Instagram feed (8 images). Bottom bar: copyright text + social icons (Facebook, Twitter, Dribbble, Behance).

## Gherkin Requirements

### Feature: Mechatron Template Rendering

#### Scenario: Navbar displays with all navigation links
  Given the page loads
  When I view the header
  Then I should see a logo image on the left
  And I should see navigation links: Home, About, Services, Products, Blog, Contact
  And the "Blog" link should have a dropdown submenu
  And the navbar should be visible at the top of the page

#### Scenario: Hero banner displays with headline and CTA
  Given the page loads
  When I view the banner section
  Then I should see a full-width hero area with a background image
  And I should see a multi-line headline text on the left side
  And I should see a subtitle below the headline
  And I should see a "View Details" call-to-action button
  And I should see an illustration image on the right side

#### Scenario: Products section shows 4 product cards
  Given the page loads
  When I scroll to the products section
  Then I should see a centered section heading
  And I should see 4 product cards in a row
  And each card should have a product image on a white background
  And each card should have a product name, description text, and a button
  And each card should have a subtle purple-tinted box shadow

#### Scenario: Product card hover interaction
  Given the products section is visible
  When I hover over a product card
  Then the card should show a hover effect (cursor pointer)

#### Scenario: Home About section displays split layout
  Given the page loads
  When I scroll to the about section
  Then I should see a large image on the left half
  And I should see a heading, subtext, paragraph, and button on the right half
  And the button should read "Get Details"

#### Scenario: About Video section shows video poster and play button
  Given the page loads
  When I scroll to the about-video section
  Then I should see text content on the left (heading, subtitle, paragraph, button)
  And I should see a video poster image on the right with a gradient overlay
  And there should be a centered play button over the video poster
  And the play button should link to a video URL

#### Scenario: Features section displays 6 feature cards on parallax background
  Given the page loads
  When I scroll to the features section
  Then I should see a parallax background image
  And I should see a centered section heading in white text
  And I should see 6 feature cards in a 3-column grid
  And each card should have an icon, a title, and a description
  And each card should be white with rounded corners (10px)

#### Scenario: Feature card hover highlights icon and title
  Given the features section is visible
  When I hover over a feature card
  Then the icon and title should change to the brand color `#8a90ff`

#### Scenario: Brand logos row displays with grayscale filter
  Given the page loads
  When I scroll to the brand logos section
  Then I should see 5 logo images in a horizontal row
  And each logo should have a grayscale filter applied

#### Scenario: Blog section shows 2 blog posts
  Given the page loads
  When I scroll to the blog section
  Then I should see a centered section heading
  And I should see 2 blog post cards side by side
  And each card should have a thumbnail image with 10px radius
  And each card should have tag badges, a title, an excerpt, and a date
  And tag badges should have a gradient background on hover

#### Scenario: Footer displays with newsletter, links, and social icons
  Given the page loads
  When I scroll to the footer
  Then I should see a parallax background image
  And I should see 3 columns: links list, newsletter form, Instagram feed
  And the newsletter form should have an email input and a "Subscribe" button
  And there should be a copyright line at the bottom
  And there should be social media icons (Facebook, Twitter, Dribbble, Behance)
  And the footer should link to Component Dock

#### Scenario: Newsletter subscribe button styled as primary
  Given the footer newsletter form is visible
  When I view the subscribe button
  Then it should have a gradient background matching the primary button style
  And it should have a pill shape (border-radius 25px)

#### Scenario: Mobile responsive layout
  Given the page loads on a mobile viewport (≤768px)
  When I view the page
  Then the navbar should collapse or adapt to mobile
  And product cards should stack vertically
  And feature cards should stack vertically
  And the hero section should stack text above image
  And the about/video sections should stack vertically

## Verification Checklist

- [ ] All 9 sections render in correct order (header → hero → products → about → about-video → features → brands → blog → footer)
- [ ] Design tokens (colors, fonts, radii) match the extracted values from the original
- [ ] Primary button uses gradient `#828fff → #d496ff`, pill shape, hover outline
- [ ] Product cards have purple-tinted box shadow and `#f9f9ff` detail area
- [ ] Feature section uses parallax background image
- [ ] Footer has parallax background, newsletter, social icons
- [ ] Footer links to Component Dock
- [ ] No references to ColorLib in any app code or comments
- [ ] Template uses picsum.photos placeholder images (not original assets)
- [ ] Uses Poppins font via Google Fonts
- [ ] Uses lucide-react icons (not original icon fonts)
- [ ] Tailwind classes use `cn()` from packages/ui
- [ ] All interactive elements have accessible roles/labels
- [ ] Responsive: stacks on mobile (≤768px)
- [ ] No new npm dependencies added unless strictly necessary
