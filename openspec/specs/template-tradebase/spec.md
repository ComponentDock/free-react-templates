# Template: Tradebase (Business / Corporate)

## Purpose

Recreation of ColorLib **Bizcon** (`bizcon`), a business/corporate website template with a warm orange gradient accent, hero banner, about section, services grid, testimonials, portfolio cards, blog section, and footer.

- **Source slug:** `bizcon`
- **Source URL:** https://colorlib.com/wp/template/bizcon/
- **Preview URL:** https://preview.colorlib.com/theme/bizcon/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/bizcon-free-template.jpg
- **Category:** Business (365)
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from `css/style.css` of the ColorLib preview (fetched 2026-09-07):

| Token | Value | Source |
|-------|-------|--------|
| Brand gradient | `linear-gradient(131deg, #feb47b, #ff7e5f)` (warm orange) | style.css `.btn_1`, `.btn_2` |
| Banner background | `#f0eed4` (light yellow/cream) | style.css `.banner_part` responsive |
| Body font | `"Roboto", sans-serif` (weights 300, 400) | style.css |
| Heading font | `"Poppins", sans-serif` (weights 300, 400, 500) | style.css |
| Accent serif font | `"Martel", serif` | style.css |
| Primary text | `#2f373d` (dark charcoal) | style.css |
| Body text | `#666666` (medium gray) | style.css |
| Light text | `#777777` | style.css |
| Accent color | `#ff7e5f` (coral orange) | style.css |
| Secondary accent | `#feb47b` (warm peach) | style.css |
| Button border-radius | `50px` (pill shape) | style.css `.btn_1` |
| Button padding | `14px 40px` (.btn_1), `13px 47px` (.btn_2) | style.css |
| Button shadow | `0px 12px 20px rgba(255,126,95,0.15)` | style.css `.btn_2` |
| Section padding | `140px 0` desktop, `80px 0` mobile | style.css `.section_padding` |
| Gray section bg | `gray_bg` class (light gray) | style.css |
| Footer bg | `#2f373d` (dark) with `#ff7e5f` accents | style.css |
| Card border-radius | `5px` | style.css `.card` |
| Navbar brand | Logo image | HTML |

## Section structure (from preview DOM)

1. **Header/Navbar** — Logo, nav links: Home, About, Blog (dropdown: Blog, Single blog), Page (dropdown: Project, Project Details, Services, Elements), Contact. Transparent/white navbar over banner.
2. **Banner/Hero** — `section.banner_part`. Heading "Lead from the front", subtitle text, CTA button (`.btn_1`). Animated hero images (`hero-app-1` through `hero-app-8`). Background: `#f0eed4` cream.
3. **About** — `section.about_part`. Two-column: image (left) + text (right) with heading and description.
4. **Services** — `section.service_part.gray_bg`. Heading "We Provide Best Services". Grid of 3 service cards with icons, titles (Business Opportunity, Commercial Approach, + third), and descriptions.
5. **Testimonials** — `section.review_part`. Heading "Customer Are Saying". Carousel of testimonial cards with name (Daniel E Gilcritst), role (Manager, Vision), and quote.
6. **Portfolio** — `section.portfolio_part`. Card grid (`.card-columns`) of project cards with images, titles ("Startup Project"), and descriptions.
7. **Our Service** — `section.about_part.our_service_part`. Another two-column about section.
8. **Blog** — `section.blog_part`. Heading "Update From Blog". Blog post cards with images, titles, excerpts.
9. **Footer** — `section.footer-area`. Multi-column footer with widgets, social links, and copyright bar.

## Gherkin requirements

### Feature: Tradebase — business/corporate website

#### Scenario: Page renders header with navigation
- **Given** the user loads the page
- **When** the header is visible
- **Then** a logo is displayed
- **And** navigation links are visible: Home, About, Blog, Contact
- **And** the navbar is positioned at the top of the page

#### Scenario: Hero banner displays correctly
- **Given** the user loads the page
- **When** the banner section is visible
- **Then** the heading "Lead from the front" (or equivalent) is displayed
- **And** a subtitle/description text is shown below the heading
- **And** a call-to-action button is visible
- **And** the banner background is approximately `#f0eed4` (cream)
- **And** the CTA button has a gradient background (orange tones)

#### Scenario: CTA button has pill shape
- **Given** the banner is visible
- **When** the CTA button is inspected
- **Then** it has a border-radius of approximately 50px (pill shape)
- **And** it has white text on an orange gradient background

#### Scenario: About section renders
- **Given** the user scrolls to the about section
- **When** the about section is visible
- **Then** a two-column layout is displayed (image + text)
- **And** a heading and descriptive text are present

#### Scenario: Services section displays service cards
- **Given** the user scrolls to the services section
- **When** the services section is visible
- **Then** the heading "We Provide Best Services" is displayed
- **And** at least 3 service cards are shown in a grid
- **And** each card has an icon, title, and description
- **And** the section has a gray background

#### Scenario: Testimonials section displays reviews
- **Given** the user scrolls to the testimonials section
- **When** the testimonials section is visible
- **Then** the heading "Customer Are Saying" is displayed
- **And** testimonial cards show a name, role, and quote
- **And** the testimonials are in a carousel/slider format

#### Scenario: Portfolio section shows project cards
- **Given** the user scrolls to the portfolio section
- **When** the portfolio section is visible
- **Then** project cards are displayed in a grid
- **And** each card has an image, title, and description

#### Scenario: Blog section displays posts
- **Given** the user scrolls to the blog section
- **When** the blog section is visible
- **Then** the heading "Update From Blog" is displayed
- **And** blog post cards with images and titles are shown

#### Scenario: Footer renders with Component Dock link
- **Given** the user scrolls to the footer
- **When** the footer is visible
- **Then** it contains multiple columns with content
- **And** a link to https://www.componentdock.com/ is present (branded as "Component Dock")
- **And** a copyright notice is displayed

#### Scenario: Page is responsive
- **Given** the user views the page on a mobile viewport (375px width)
- **When** the page renders
- **Then** the navbar collapses into a hamburger menu
- **And** sections stack vertically
- **And** buttons and text remain readable

#### Scenario: Orange gradient accent is consistent
- **Given** the user views any section with accent styling
- **When** accent elements are inspected
- **Then** the gradient `linear-gradient(131deg, #feb47b, #ff7e5f)` is used on buttons and highlights

## Verification checklist

- [ ] Header with logo and navigation renders
- [ ] Hero banner with heading, subtitle, and CTA button
- [ ] CTA button has pill shape (border-radius 50px) and orange gradient
- [ ] About section with two-column layout
- [ ] Services section with 3+ service cards on gray background
- [ ] Testimonials section with carousel of reviews
- [ ] Portfolio section with project card grid
- [ ] Blog section with post cards
- [ ] Footer with Component Dock link
- [ ] Page responsive on mobile viewports
- [ ] Brand colors: `#ff7e5f` (coral), `#feb47b` (peach), `#f0eed4` (cream bg)
- [ ] Fonts: Poppins (headings), Roboto (body)
- [ ] No ColorLib references in app code
