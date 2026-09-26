# Template: Portlane (Creative Portfolio Showcase)

## Purpose

Portlane is a single-page creative portfolio showcase template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Portfolio 2" free template (source:
https://colorlib.com/wp/template/portfolio-2/, preview:
https://preview.colorlib.com/theme/portfolio2/), built under a DIFFERENT
name (**Portlane**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 portfolio page with a dark navy theme
(`#040E27`), Alata/Roboto/Poppins fonts, a hero section with large
watermark text, a masonry image gallery with hover overlays, a services
section with icon cards, a blog section with article cards, a
testimonial slider, a "Let's Talk" CTA, and a dark footer. It targets
creative agencies and freelancers showcasing their work.

**WHAT MAKES PORTLANE DISTINCT (signature behaviors):**

1. **Dark navy full-page theme.** The dominant background is deep navy
   `#040E27` used consistently across the header, hero, portfolio area,
   "More Works" bar, and footer — creating a cohesive dark-mode-first
   aesthetic. The only white section is the testimonial area.
2. **Large watermark text in the hero.** The hero section features a
   giant transparent "PORTFOLIO" text overlay (`outline_text` class,
   `d-none d-lg-block` — desktop only) behind the main heading, creating
   a typographic layering effect common in agency portfolios.
3. **Masonry portfolio gallery with hover overlays.** The portfolio grid
   uses a mix of full-width and half-width items (`.small_width` class)
   in a responsive column layout. Each image has a hover overlay
   (`.gallery_hover`) with centered action icon, creating an interactive
   showcase feel.
4. **Three service cards with icon circles.** A centered row of three
   service cards (3D Modeling, UI/UX Design, Architectural Design) with
   circular icon backgrounds and descriptive text.
5. **Blog section with article cards.** "Our Creative Articles" section
   with image cards, category tags, titles, and a "More Blogs" link.
6. **Testimonial slider with client quotes.** A slider section with
   client photos, names, and testimonial text on a white background —
   the only light section on the page.
7. **"Let's Talk" CTA section.** A call-to-action area prompting visitors
   to start a conversation.
8. **Dark footer with multi-column links.** Services links, useful links,
   social media icons (Dribbble, Behance, Instagram, Facebook), and
   copyright notice.

## Design Tokens

- **Brand Colors**:
  - Primary dark navy: `#040E27` (header, hero, portfolio bg, footer)
  - Accent blue: `#0181F5` (CTAs, links, "Hello Everyone" text)
  - Accent purple: `#615CFD` (secondary accent)
  - Accent orange: `#ff5e13` (highlight buttons)
  - Text primary: `#fff` (white, on dark backgrounds)
  - Text muted: `#7A838B`, `#818692`, `#8f9195` (grey text on dark)
  - Light background: `#fff` (testimonial section only)
  - Card background: `#1F1F1F` (dark cards)
- **Font Family**: "Alata", sans-serif (primary headings); "Roboto",
  sans-serif (body); "Poppins", sans-serif (secondary/UI text)
- **Button Shapes**: Rounded corners `3px`–`8px`, no border-radius on
  most elements (sharp edges default), `20px` for specific cards
- **Section Backgrounds**: Solid `#040E27` dark navy (hero, portfolio,
  footer); solid `#fff` white (testimonial); `#1F1F1F` dark cards

## Requirements & Gherkin Scenarios

### Feature: Dark-Themed Creative Portfolio Page

As a site visitor, I want to browse a creative agency's portfolio,
services, blog, and testimonials so that I can evaluate their work and
get in touch.

#### Scenario: Page loads with dark navy hero and watermark text

- Given the user visits the Portlane home page
- Then the page background is dark navy (`#040E27`)
- And a large transparent "PORTFOLIO" watermark text is visible behind
  the main heading (desktop only)
- And the heading reads "World class consumer and trends research
  capabilities we design for tomorrow customers in tomorrow's markets."
- And a "Hello Everyone" greeting in blue (`#0181F5`) appears above
  the heading

#### Scenario: Navigation bar displays correctly

- Given the user views the page
- Then a sticky/absolute navbar is displayed at the top
- And the logo "PORTFOLIO" appears in white bold text on the left
- And navigation links "Home", "About", "Blog", "Pages", "Contact"
  appear on the right
- And the navbar has a transparent background overlaying the hero

#### Scenario: Portfolio gallery shows masonry grid with hover effects

- Given the user scrolls to the portfolio section
- Then a masonry-style grid of portfolio images is displayed
- And images use a mix of full-width and half-width layouts
- And hovering over an image reveals a dark overlay with an action icon
- And clicking a portfolio item could show more details or a lightbox

#### Scenario: Services section displays three service cards

- Given the user scrolls to the services section
- Then three service cards are displayed in a row (3D Modeling, UI/UX
  Design, Architectural Design)
- And each card has a circular icon and descriptive text
- And cards are responsive (stacking on mobile)

#### Scenario: Blog section shows article cards

- Given the user scrolls to the blog section
- Then the heading "Our Creative Articles" is displayed
- And blog article cards with images, titles, and category tags are shown
- And a "More Blogs" link is available

#### Scenario: Testimonial slider works correctly

- Given the user scrolls to the testimonial section
- Then client testimonials with photos, names, and quotes are displayed
- And the section has a white background (the only light section)
- And the slider can be navigated between testimonials

#### Scenario: CTA section prompts contact

- Given the user scrolls past the testimonials
- Then a "Let's Talk" or "Start Talking" call-to-action is displayed
- And clicking the CTA button initiates contact or scrolls to a form

#### Scenario: Footer displays with dark theme and links

- Given the user reaches the page footer
- Then the footer has a dark navy background (`#040E27`)
- And it contains service links, useful links, and social media icons
- And social icons include Dribbble, Behance, Instagram, Facebook
- And a copyright notice is displayed
- And the footer links to Component Dock
  (`https://www.componentdock.com/`)

#### Scenario: Responsive layout adapts to mobile

- Given the user views the page on a mobile device
- Then the navbar collapses to a hamburger menu
- And the portfolio grid stacks to a single column
- And service cards stack vertically
- And the watermark text is hidden on mobile (`d-none d-lg-block`)
- And all text remains readable at smaller viewport widths

## Verification Checklist

- [ ] Dark navy (`#040E27`) used as primary background across hero,
      portfolio, and footer sections
- [ ] Alata font loaded for headings, Roboto for body, Poppins for UI
- [ ] "PORTFOLIO" watermark text visible on desktop hero (hidden mobile)
- [ ] "Hello Everyone" greeting in blue accent (`#0181F5`)
- [ ] Masonry portfolio grid with hover overlay effects
- [ ] Three service cards with icons in responsive row
- [ ] Blog section with "Our Creative Articles" heading and cards
- [ ] Testimonial slider on white background
- [ ] "Let's Talk" CTA section present
- [ ] Dark footer with multi-column links and social icons
- [ ] Footer links to Component Dock (`https://www.componentdock.com/`)
- [ ] Responsive layout (mobile hamburger, stacking columns)
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Placeholder images via `picsum.photos` with deterministic seeds
- [ ] All tests passing at 100% coverage
