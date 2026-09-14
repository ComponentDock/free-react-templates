# Template: Commune (Co-Working Space)

## Purpose

Commune is a single-page CO-WORKING SPACE LANDING PAGE in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Sharespace" free template (source:
https://colorlib.com/wp/template/sharespace/), built under a DIFFERENT
name (**Commune**), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a Bootstrap 4 + jQuery landing page for a premium
co-working / shared-space business. It features a sticky navbar, a
full-width hero slider with background color #FFF8F5, a features/rating
strip, a two-column "About Us" section with rotating image decoration,
an image carousel gallery of spaces, a testimonial section on warm
off-white background, a features grid, a video showcase section, a
brand logos strip, a blog grid, a newsletter subscription area, and a
dark footer with social links.

**WHAT MAKES COMMUNE DISTINCT (signature behaviors):**

1. **Warm off-white (#FFF8F5) hero + slider.** The entire hero and
   slider area has a soft warm off-white `#FFF8F5` background (not
   pure white, not a gradient). The hero caption sits on the LEFT with
   a gold accent line, while a large workspace image fills the RIGHT.
   A small rating badge (4.8 stars, 500+ reviews) floats in the hero
   image area.

2. **Gold (#c6a16e) brand color throughout.** The primary brand color
   is a warm gold/tan `#c6a16e` — used for buttons (solid fill with
   red `#e6373d` hover via slide-in animation), preloader spinner,
   nav hover background, footer links, blog date badges, and the
   rotating decorative shape in the About section. This gold is
   consistent across all interactive elements.

3. **Rotating decorative shape in About section.** The About section
   has a CSS-animated rotating element (`.about-shape.rotateme`,
   30s infinite linear rotation) positioned decoratively next to the
   workspace image. This is a unique visual signature.

4. **Image carousel with overlay content.** The "Spaces that you'd
   love" section uses an Owl Carousel of full-width location images,
   each with an overlay containing the space name and starting price
   ("Starting from $500"). Navigation is via owl-carousel prev/next
   arrows.

5. **Dark footer (#000000) with gold accents.** The footer area uses
   a solid black background with footer social links, a gold-colored
   copyright line, and a newsletter subscription form above it.

## Design tokens (live stylesheet, verified 2026-09-14)

| Token           | Value                                         | Use                                                                                      |
| --------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Page bg         | `#FFF8F5` (warm off-white)                    | hero/slider area, testimonial area, overall page tone                                    |
| Brand gold      | `#c6a16e`                                     | buttons (solid), nav hover bg, preloader, footer links, date badges, social icon hover    |
| Heading ink     | `#0b1c39` (dark navy)                         | h1–h6 color                                                                              |
| Body text       | `#506172` (grey-blue)                         | paragraph text                                                                           |
| Muted text      | `#888888` / `#999999`                         | footer copyright, secondary labels, form placeholders                                    |
| Footer bg       | `#000000` (black)                             | footer-wrapper background                                                                |
| Card white      | `#fff`                                        | single-offers cards (shadow: `0px 12px 20px rgba(0,0,0,0.06)`)                          |
| Heading font    | `Josefin Sans` 300/400/600/700                | all headings, nav links, button labels (Google Fonts)                                    |
| Body/decor font | `Great Vibes` cursive                         | body text (p elements) — decorative serif, Google Fonts                                   |
| Accent font     | `Montserrat` 200–800                          | available via Google Fonts import, used in some utility elements                          |
| Button radius   | `5px`                                         | `.btn` and `.border-btn`                                                                  |
| Button hover    | `#e6373d` (red)                               | `.btn::before` slide-in scaleX animation                                                  |
| Border-btn      | 2px solid `#c6a16e`, transparent bg → gold fill | outline-style CTA buttons                                                                |
| Section padding | `120px` top/bottom (`.section-padding`)       | standard section spacing                                                                  |
| Carousel        | Owl Carousel, full-width images               | spaces gallery with overlay text                                                         |
| Blog cards      | white bg, shadow on `.blog_details`           | `box-shadow: 0px 10px 20px 0px rgba(221,221,221,0.3)`                                   |
| Date badge      | `#c6a16e` bg, `#fff` text, radius `5px`      | blog post date overlay on image                                                           |
| Preloader       | `#f7f7f7` bg, `#c6a16e` spinner border       | loading screen with rotating circle                                                       |

## Gherkin requirements

### Feature: Navbar

  Scenario: Sticky navigation bar
    Given the user loads the page
    Then a sticky navbar is visible at the top
    And the navbar contains a logo on the left
    And the navbar contains navigation links: Home, Spaces, About, Blog, Contact
    And the navbar becomes sticky on scroll with a white background and shadow

  Scenario: Mobile hamburger menu
    Given the user is on a viewport width <= 991px
    Then a hamburger menu icon is visible
    And clicking it toggles the mobile navigation overlay

### Feature: Hero Slider

  Scenario: Hero section displays workspace headline
    Given the user loads the page
    Then a hero section is visible with warm off-white background
    And the headline reads "Amazing workspace you will love"
    And a subheadline describes discovering spaces that define luxury
    And a CTA button is visible

  Scenario: Hero rating badge
    Given the hero section is visible
    Then a rating badge shows "4.8" with stars
    And a label reads "Rating based on 500+ reviews"

### Feature: About Section

  Scenario: Two-column about layout
    Given the user scrolls to the About section
    Then a workspace image appears on the left with a rotating decorative shape
    And a heading reads "Premium quality spaces for agency and personal"
    And descriptive body text appears on the right

### Feature: Spaces Gallery

  Scenario: Image carousel of spaces
    Given the user scrolls to the Spaces section
    Then a heading reads "Spaces that you'd love"
    And a carousel displays full-width workspace images
    And each image has an overlay with the space name and starting price
    And carousel navigation arrows are visible

### Feature: Testimonials

  Scenario: Testimonial section
    Given the user scrolls to the Testimonials section
    Then a section with warm off-white background is displayed
    And testimonial quotes are shown in a carousel
    And navigation arrows allow cycling through testimonials

### Feature: Features Grid

  Scenario: Feature cards
    Given the user scrolls to the Features section
    Then a heading reads "Make the customer the hero of your story"
    And four feature cards are displayed: Money Saver, Locker and Key, Active Listening, Space for Events
    And each card has an icon, title, and description

### Feature: Video Section

  Scenario: Video showcase
    Given the user scrolls to the Video section
    Then a full-width section with a background image is displayed
    And a play button overlay is centered in the section

### Feature: Brand Logos

  Scenario: Brand partner logos
    Given the user scrolls to the Brands section
    Then a strip of partner logos is displayed on a warm off-white background
    And the logos are arranged in a horizontal row

### Feature: Blog Grid

  Scenario: Blog posts
    Given the user scrolls to the Blog section
    Then a heading reads "Our Insights"
    And three blog cards are displayed in a grid
    And each card has an image, date badge, title, and excerpt

### Feature: Newsletter

  Scenario: Newsletter subscription
    Given the user scrolls to the Newsletter section
    Then a heading invites users to subscribe
    And an email input field is displayed
    And a submit button is visible

### Feature: Footer

  Scenario: Dark footer
    Given the user scrolls to the footer
    Then a black (#000000) footer is displayed
    And it contains navigation links
    And it contains social media icon links
    And it contains a copyright notice with a Component Dock credit link

## Verification checklist

- [ ] Navbar is sticky and responsive (hamburger on mobile)
- [ ] Hero section uses #FFF8F5 warm off-white background
- [ ] Hero headline + rating badge render correctly
- [ ] About section has rotating decorative shape animation
- [ ] Spaces carousel navigates between images
- [ ] Testimonial carousel works with prev/next arrows
- [ ] Feature cards display all four features with icons
- [ ] Video section has a play button overlay
- [ ] Brand logos strip renders in a horizontal row
- [ ] Blog cards show date badge with gold background
- [ ] Newsletter form has email input + submit button
- [ ] Footer is black with gold-accented links
- [ ] Footer links to Component Dock (https://www.componentdock.com/)
- [ ] Google Fonts (Josefin Sans, Great Vibes, Montserrat) load correctly
- [ ] All buttons use #c6a16e gold with 5px radius
- [ ] No ColorLib references in app code
- [ ] public/CNAME = commune.free.componentdock.com
- [ ] package.json homepage = https://commune.free.componentdock.com
