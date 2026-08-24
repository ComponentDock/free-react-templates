# Template: Havenridge (Real Estate Agency Landing Page)

## Purpose

Havenridge is a single-page real estate agency landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Oakberry" free template (source:
https://colorlib.com/wp/template/oakberry/), built under a DIFFERENT name
(**Havenridge**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap-based real estate agency page with a hero image
slider, property search form (buy/rent tabs), category grid, featured
property cards, about section with stats counters, video section, and a
testimonials carousel. It uses the "Nunito Sans" font, a green brand color
(#5ea51d), and Bootstrap-style buttons with 0.25rem border radius.

## Reference Research (done — do not redo)

### Source mapping

- **ColorLib item:** "Oakberry" (TEMPLATES.md line 609).
- **Source URL:** https://colorlib.com/wp/template/oakberry/
- **Preview URL — REACHABLE (verified by direct fetch):**
  `https://preview.colorlib.com/theme/oakberry/` (HTTP 200, 54,017 bytes).
- **Preview CSS:** `css/style.css` (82,250 bytes — Bootstrap 4 based).
- **Fonts:** "Nunito Sans" via Google Fonts, Font Awesome 4.7, Ionicons 4.5.6,
  Flaticon icons.

### Screenshot analysis

The template shows a dark hero slider with property images, a search form
with buy/rent tabs, category icons (Land, Residential, Commercial,
Industrial), featured property cards with agent info and prices, an about
section with stats (50 years, 210K+ properties, 450 realtors, 100 branches),
a video section, and testimonials on a light background. The overall aesthetic
is professional/corporate with green accents.

### Design tokens (extracted from live CSS)

| Token           | Value                              | Use                                      |
| --------------- | ---------------------------------- | ---------------------------------------- |
| Font            | "Nunito Sans", Arial, sans-serif   | All text                                 |
| Brand green     | #5ea51d                            | Primary buttons, accent text, subheading |
| Dark bg         | #081637 / #06112a                  | Hero overlay, footer bg                  |
| Section bg      | #f8f9fa / #f7f7f7                  | `.bg-light` sections                     |
| Body text       | #212529                            | Paragraphs, headings                     |
| Muted text      | #6c757d                            | Secondary text                           |
| White           | #fff                               | Button text, footer text                 |
| Button radius   | 0.25rem (4px)                      | Bootstrap default `.btn`                 |
| Button padding  | px-5 py-3                          | CTA buttons                              |
| Section padding | Bootstrap `.ftco-section` defaults | ~80px top/bottom                         |

### Section structure (from DOM, in order)

1. **Navbar** — Bootstrap navbar, logo "Oakberry", nav links (Home, About,
   Services, Agent, Blog, Contact), CTA button "Get Started"
2. **Hero Slider** — 3 slides with background images, each has centered
   text (h2 heading + description + "Learn More" CTA button)
3. **Property Search** — Buy/Rent tab pills, search form with keyword,
   property type dropdown, location input, price limit, search button
4. **Categories** — "Explore Our Categories & Places" heading, 4 category
   cards (Land, Residential, Commercial, Industrial) with flaticon icons
5. **Featured Properties** — 4 property cards with image, price badge,
   agent name/avatar, property name, location, sale/rent badge, amenities
   (bed, bath, sqft)
6. **Video Section** — Split layout: image left, "Modern House Video"
   heading + play button right
7. **About** — Image left, heading + description + 4 stats counters
   (50 Years, 210K+ Properties, 450 Realtors, 100 Branches) + second image
8. **Testimonials** — Carousel with quote icon, text, avatar, name, role
9. **Footer** — Logo + description, social icons, Offers column, Company
   column, Contact column, copyright bar

### Icon mapping (lucide — replace all original icons)

| Source glyph                | Recreation            |
| --------------------------- | --------------------- |
| fa fa-search                | lucide `Search`       |
| fa fa-chevron-down          | lucide `ChevronDown`  |
| fa fa-chevron-right         | lucide `ChevronRight` |
| fa fa-twitter               | lucide `Twitter`      |
| fa fa-facebook              | lucide `Facebook`     |
| fa fa-instagram             | lucide `Instagram`    |
| ion-ios-arrow-round-forward | lucide `ArrowRight`   |
| ion-ios-pin                 | lucide `MapPin`       |
| ion-ios-play                | lucide `Play`         |
| fa fa-quote-left            | lucide `Quote`        |
| flaticon-bed                | lucide `Bed`          |
| flaticon-bathtub            | lucide `Bath`         |
| flaticon-blueprint          | lucide `Maximize`     |
| flaticon-architect          | lucide `TreePine`     |
| flaticon-house              | lucide `Home`         |
| flaticon-apartment          | lucide `Building2`    |
| flaticon-factory            | lucide `Factory`      |

### Picsum placeholder plan

| Slot                    | Seeds                                  | Size     |
| ----------------------- | -------------------------------------- | -------- |
| Hero slides (3)         | havenridge-hero-1..3                   | 1200×600 |
| About images (2)        | havenridge-about-1, havenridge-about-2 | 600×400  |
| Property cards (4)      | havenridge-property-1..4               | 400×300  |
| Agent avatars (4)       | havenridge-agent-1..4                  | 80×80    |
| Testimonial avatars (3) | havenridge-testimonial-1..3            | 80×80    |

## Gherkin Requirements

### Feature: Navbar

Scenario: Sticky navbar with logo and links
Given the page is loaded
Then the navbar is visible with logo "Havenridge"
And nav links are visible (Home, About, Services, Agent, Blog, Contact)
And a "Get Started" CTA button is visible

Scenario: Mobile hamburger toggle
Given the viewport is mobile (≤768px)
When the hamburger button is clicked
Then the mobile menu expands

### Feature: Hero Slider

Scenario: Hero slider renders with slides
Given the page is loaded
Then a hero slider is visible
And at least one slide has a heading, description, and CTA button
And slides auto-advance

Scenario: Hero CTA button is interactive
Given the hero slider is visible
When the "Learn More" button is clicked
Then no navigation occurs (placeholder)

### Feature: Property Search

Scenario: Buy/Rent tab switching
Given the search form is visible
When "Buy Properties" tab is active
Then the search form shows keyword, property type, location, price fields
When "Rent Properties" tab is clicked
Then the tab switches to rent view

Scenario: Search form fields are interactive
Given the search form is visible
When the keyword field is focused
Then the cursor appears in the field
When the property type dropdown is clicked
Then options (Residential, Commercial, Land, Industrial) are visible

### Feature: Categories

Scenario: Category cards render
Given the page scrolls to categories
Then 4 category cards are displayed (Land, Residential, Commercial, Industrial)
And each card has an icon and heading

### Feature: Featured Properties

Scenario: Property cards render
Given the page scrolls to featured properties
Then 4 property cards are displayed
And each card has an image, price, agent info, property name, location
And amenity icons (bed, bath, sqft) are visible

### Feature: About Section

Scenario: About section with stats renders
Given the page scrolls to about
Then a heading "Havenridge A Real Estate Company" is visible
And 4 stat counters are displayed (Years, Properties, Realtors, Branches)
And images are shown alongside

### Feature: Testimonials

Scenario: Testimonial carousel renders
Given the page scrolls to testimonials
Then a heading "Clients We Help" is visible
And testimonial slides with quotes, avatars, names, and roles are displayed

### Feature: Footer

Scenario: Footer renders with content
Given the page scrolls to the footer
Then the footer has a dark background
And social media icon links are visible (Twitter, Facebook, Instagram)
And Offers and Company link columns are visible
And a Component Dock credit link is present

## Verification Checklist

- [ ] `openspec/specs/template-havenridge/spec.md` exists and is valid
- [ ] `npm run spec:validate` passes
- [ ] `apps/havenridge` exists with correct package name
- [ ] Nunito Sans font loaded via Google Fonts `<link>` in index.html
- [ ] `public/CNAME` = `havenridge.free.componentdock.com`
- [ ] `"homepage"` = `https://havenridge.free.componentdock.com`
- [ ] All sections match the source order (navbar → hero → search → categories → properties → video → about → testimonials → footer)
- [ ] Brand color #5ea51d used for accent elements
- [ ] Dark hero with background images
- [ ] Section backgrounds match: white for hero/search/properties, #f8f9fa for categories/about/testimonials
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] Picsum images use deterministic seeds (havenridge-*)
- [ ] `npm run verify:app -- havenridge` passes (typecheck + lint + 100% coverage + build)
- [ ] PR includes: source URL, preview URL, token list, and differences
