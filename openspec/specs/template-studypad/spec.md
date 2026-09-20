# Template: StudyPad (Education / Online Learning Platform)

## Purpose

StudyPad is a single-page online-learning PLATFORM in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "StudyLab" free
template (source: https://colorlib.com/wp/template/studylab/, preview:
https://preview.colorlib.com/theme/studylab/), built under a DIFFERENT name
(**StudyPad**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4 single-page site with jQuery carousel (Owl
Carousel), animations (Animate.css), and datepicker. It targets an education
/ online course platform audience. The homepage is a long-scroll single page
with navbar, hero banner with registration form, course category circles,
course cards grid, statistics counter, about section with background image,
testimonials carousel, intro CTA block, services with icons, recent blog
posts, and a multi-column footer.

**WHAT MAKES STUDYPAD DISTINCT (signature behaviors):**

1. **Hero with OVERLAID registration form.** A full-width hero banner
   (background image, dark overlay at 50% opacity) on the left side with
   headline "We Are Online Platform For Make Learn" and two CTA buttons
   (primary blue "Our Course" + white-outlined "Learn More"). A white
   registration form card (Register Now: Full Name, Email, Password,
   Confirm Password + submit arrow button) sits on the RIGHT side
   overlapping the hero, positioned with negative margin or absolute
   positioning so it floats over both hero and the section below.
2. **Circular course category thumbnails.** Six round image thumbnails
   (110px diameter with border-radius: 50%) in a horizontal row, each
   with a category name ("IT & Software", "Music", "Photography",
   "Marketing", "Health", "Audio Video") and "100 Course" count
   overlaid in white text. A centered "See All Courses" button (pink
   `#e449ad`) sits below.
3. **Course cards on light background.** "Pick Your Course" section
   with light grey background (`#f8f9fa`), six course cards each with
   an image thumbnail, price badge, instructor name, course title,
   star rating, student count, and duration. Cards have a subtle box
   shadow.
4. **Parallax statistics counter.** Dark overlay section with a full-
   background parallax image (`images/bg_4.jpg`), four animated
   counters (number + label): students, courses, staff, awards. Numbers
   animate from 0 to target on scroll.
5. **About section with background image.** Full-width section with a
   background image (dark overlay), heading "Learn Anything You Want
   Today", and descriptive text about the platform.
6. **Testimonials carousel.** Light grey background, horizontal slider
   with student avatar, name, and testimonial quote. Owl Carousel with
   autoplay and dot navigation.
7. **Intro CTA block.** A two-part section: left side has the heading
   "We Are StudyLab An Online Learning Center" with descriptive text
   and a "Enroll Now" button on a dark blue gradient background
   (`#4986fc` to `#ce4be8`); right side is the continuation of the
   gradient. This is a visually prominent call-to-action band.
8. **Services section with icon cards.** Four service items in a 2x2
   grid, each with an icon (Flaticon), heading, and description: "Top
   Quality Content", "Highly Skilled Instructor", "World Class Quiz",
   "Get Certified".
9. **Recent blog posts.** Light grey background, three blog post cards
   with image, date, author, title, and read-more link.
10. **Multi-column footer.** Dark footer with logo, description,
    navigation links (Customer Care, Legal Help, Services), and
    recent posts. Bottom bar with copyright and social media icons.

## Design tokens

Extracted from the live preview (https://preview.colorlib.com/theme/studylab/)
and its stylesheet `css/style.css`:

### Colors

| Token               | Value        | Usage                                   |
| ------------------- | ------------ | --------------------------------------- |
| `--brand-primary`   | `#4986fc`    | Primary buttons, links, accents, navbar |
| `--brand-secondary` | `#e449ad`    | "See All Courses" button (pink)         |
| `--brand-accent`    | `#fc9927`    | Counter number color (orange)           |
| `--brand-teal`      | `#24d2c8`    | Secondary accent (teal)                 |
| `--brand-purple`    | `#ce4be8`    | Intro CTA gradient end                  |
| `--text-dark`       | `#1a1a1a`    | Headings                                |
| `--text-body`       | `#4e555b`    | Body text                               |
| `--text-muted`      | `#999999`    | Secondary text, labels                  |
| `--bg-white`        | `#ffffff`    | Card backgrounds, form                  |
| `--bg-light`        | `#f8f9fa`    | Section alternating backgrounds         |
| `--bg-dark`         | `#1a1a1a`    | Footer, navbar                          |
| `--overlay-dark`    | `rgba(0,0,0,0.5)` | Hero and parallax overlays         |

### Typography

| Token              | Value                                      |
| ------------------ | ------------------------------------------ |
| Font family        | `"Poppins", sans-serif` (weights 300–900)  |
| Heading weight     | 700 (bold)                                 |
| Body weight        | 400 (regular)                              |
| Subheading weight  | 500                                        |

### Shapes & spacing

| Token               | Value                | Usage                              |
| ------------------- | -------------------- | ---------------------------------- |
| Button radius       | `4px` (Bootstrap)    | Rounded rectangle buttons          |
| Card radius         | `0` (square corners) | Course cards, form                 |
| Section padding     | `5rem 0`             | Standard `ftco-section`            |
| Container max-width | `1140px`             | Bootstrap container                |

### Section backgrounds

| Section             | Background                                     |
| ------------------- | ---------------------------------------------- |
| Hero                | Full-width image + dark overlay                 |
| Registration form   | White card (`#fff`) overlapping hero            |
| Course categories   | White (`#fff`)                                  |
| Pick Your Course    | Light grey (`#f8f9fa`)                          |
| Statistics counter  | Parallax image + dark overlay                   |
| About               | Full-width image + dark overlay                 |
| Testimonials        | Light grey (`#f8f9fa`)                          |
| Intro CTA           | Dark blue-purple gradient (`#4986fc`→`#ce4be8`)||
| Services            | White (`#fff`)                                  |
| Recent posts        | Light grey (`#f8f9fa`)                          |
| Footer              | Dark (`#1a1a1a`)                                |

## Gherkin requirements

### Feature: StudyPad — Online Learning Platform

  Scenario: Navbar displays with correct links
    Given the user is on the StudyPad homepage
    Then the navbar should show "StudyPad" logo
    And the navbar should contain links: Home, About, Course, Instructor, Blog, Contact
    And the navbar should have a dark background

  Scenario: Hero section renders with headline and CTAs
    Given the user is on the StudyPad homepage
    Then the hero section should display "Welcome to StudyLab" subheading
    And the hero should display "We Are Online Platform For Make Learn" heading
    And the hero should have a background image with dark overlay
    And there should be an "Our Course" primary blue button
    And there should be a "Learn More" white outlined button

  Scenario: Registration form is present in hero area
    Given the user is on the StudyPad homepage
    Then a "Register Now" form should be visible
    And the form should have fields: Full Name, Email Address, Password, Confirm Password
    And the form should have a submit button with a paper-plane icon
    And the form should show "Already have an account? Sign In" link

  Scenario: Registration form validates required fields
    Given the user is on the StudyPad homepage
    When the user clicks the submit button without filling fields
    Then the form should indicate validation errors for required fields

  Scenario: Course categories display with circular thumbnails
    Given the user is on the StudyPad homepage
    Then there should be 6 circular category thumbnails
    And categories should include: IT & Software, Music, Photography, Marketing, Health, Audio Video
    And each category should show "100 Course" text
    And a "See All Courses" pink button should be centered below

  Scenario: Pick Your Course section shows course cards
    Given the user is on the StudyPad homepage
    Then the "Pick Your Course" section should be visible
    And there should be course cards with image, price, instructor name
    And each card should show star rating and student count
    And the section should have a light grey background

  Scenario: Statistics counter section animates on scroll
    Given the user is on the StudyPad homepage
    When the user scrolls to the statistics section
    Then 4 counter items should be visible with animated numbers
    And each counter should have a number and label
    And the section should have a parallax background image

  Scenario: About section displays with background image
    Given the user is on the StudyPad homepage
    Then the about section should display "Learn Anything You Want Today"
    And the section should have a background image with overlay
    And there should be descriptive text about the platform

  Scenario: Testimonials carousel works
    Given the user is on the StudyPad homepage
    Then the testimonials section should display "What Are Students Says"
    And there should be student testimonials with avatar, name, and quote
    And the testimonials should be in a carousel/slider format

  Scenario: Intro CTA block renders with gradient
    Given the user is on the StudyPad homepage
    Then an intro CTA section should be visible
    And it should have "We Are StudyLab An Online Learning Center" heading
    And it should have descriptive text
    And it should have an "Enroll Now" button
    And the background should be a blue-purple gradient

  Scenario: Services section shows four service cards
    Given the user is on the StudyPad homepage
    Then 4 service cards should be displayed in a grid
    And services should include: Top Quality Content, Highly Skilled Instructor, World Class Quiz, Get Certified
    And each card should have an icon and description text

  Scenario: Recent blog posts section renders
    Given the user is on the StudyPad homepage
    Then the "Recent Post" section should be visible
    And there should be blog post cards with image, date, author, title
    And the section should have a light grey background

  Scenario: Footer displays with correct content
    Given the user is on the StudyPad homepage
    Then the footer should be visible with a dark background
    And it should show the StudyPad logo and description
    And it should have navigation link columns
    And it should have a copyright line and social media icons
    And the footer should link to Component Dock

## Verification checklist

- [ ] All sections render in the correct order matching the original
- [ ] Hero has background image with dark overlay, headline, and two CTAs
- [ ] Registration form card overlaps the hero (white card on right side)
- [ ] Form has 4 fields + submit button + "Sign In" link
- [ ] Course categories show 6 circular thumbnails with text overlay
- [ ] "See All Courses" button is pink (#e449ad)
- [ ] Course cards grid has 6 cards with all details
- [ ] Statistics section has parallax background and 4 animated counters
- [ ] About section has background image and descriptive text
- [ ] Testimonials carousel slides between student quotes
- [ ] Intro CTA has blue-purple gradient background
- [ ] Services section shows 4 icon cards
- [ ] Recent posts section shows 3 blog post cards
- [ ] Footer has dark background, links, and Component Dock link
- [ ] Font family is Poppins throughout
- [ ] Primary color #4986fc used for buttons, links, accents
- [ ] No references to ColorLib in app code (only in spec + TEMPLATES.md)
- [ ] Images use picsum.photos placeholders
- [ ] Lucide React icons used (no Flaticon/FontAwesome assets)
- [ ] All interactive elements are accessible (keyboard, ARIA labels)
