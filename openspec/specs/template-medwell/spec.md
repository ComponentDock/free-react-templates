# Template: Medwell (Medical / Healthcare)

## Purpose

Medwell is a single-page medical/healthcare landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Medcare" free template (source:
https://colorlib.com/wp/template/medcare/), built under a DIFFERENT name
(**Medwell**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4 medical site with a full-bleed hero banner
(800px min-height, background image), two-tone navigation bar (top info bar
+ main nav), feature cards on a patterned background, service cards in a
3-column grid, about section with floating image, team doctor cards, an
appointment section with accordion FAQ + contact form, a testimonial
slider, emergency hotline CTA, blog cards, brand logo carousel, and a
multi-column footer with newsletter signup.

**Preview URL:** https://preview.colorlib.com/theme/medcare/

## Design Tokens

Extracted from `css/style.css` on the live preview (verified 2026-09-22).

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| Brand primary | `#0051d2` | Buttons, links, active states, icon accents, blog date badges |
| Body text | `#797979` | Paragraph text, meta text, social icons |
| Heading text | `#020a21` | Card titles, nav links, dark headings |
| Secondary text | `#33363e` | Button light text, link_one text |
| Light background | `#f7f7f7` | `.background_one` sections, testimonial section bg |
| Border | `#e8edf1` | Top menu border, card-service borders, form borders |
| White | `#fff` | Card backgrounds, button text, hotline text |

### Typography
| Token | Value | Usage |
|-------|-------|-------|
| Body font | `"Open Sans", sans-serif` | Body text, nav links, meta text |
| Heading font | `"Playfair Display", serif` | h1-h6, logo, button text, link_one, top_menu dn_btn |
| Body size | `14px`, line-height `27px` | Default body text |
| H1 size | `45px` (26px mobile) | Banner heading |
| Nav link size | `14px`, weight 500, uppercase | Navigation links |

### Buttons
| Class | Style |
|-------|-------|
| `.main_btn` | Solid `#0051d2` bg, white text, Playfair Display font, no border-radius (sharp corners), `padding: 0px 18px` |
| `.main_btn_light` | 1px solid `#0051d2` border, transparent bg, `#33363e` text, same font/padding; hover fills `#0051d2` with white text |
| `.link_one` | Text link with animated underline (2px bar grows from left on hover, colored `#0051d2`), 15px Playfair Display, letter-spacing 1.5px |

### Section Backgrounds
| Section | Background |
|---------|-----------|
| Banner | Full-bleed background image (`home-banner.jpg`), 800px min-height |
| Feature section | Pattern image (`pattern_bg.jpg`), 60px padding |
| Service section | White (no special bg) |
| About section | `#f7f7f7` + background image (`bg_1.png`), with floating doctor image on left |
| Team section | White |
| Appointment section | White (inner card with shadow) |
| Testimonial | `#f7f7f7` + background image (`bg_2.png`), 460px top padding (overlapping hero) |
| Hotline | Full-bleed background image (`bg1.jpg`) with dark overlay, white text |
| Blog section | White |
| Brands | `#f7f7f7` |
| Footer | White bg, no special treatment |

### Cards
| Type | Style |
|------|-------|
| Feature cards | 40px/35px padding, 0 border-radius, white bg, hover shadow `0px 10px 20px rgba(33,20,106,0.1)`, icon left-aligned |
| Service cards | 40px/35px padding, 0 border-radius, white bg, 1px border `#e8edf1`, centered icon above title, "Learn More" link |
| Team cards | Image (full-width, no radius) + white body with centered name + specialty + phone + social icons row |
| Blog cards | Thumbnail image + details (tags, title, comment/like count), hover scale on image |

### Navigation
- **Top bar:** Info (email, location) left; social icons right; border-bottom `#e8edf1`
- **Main nav:** Transparent background (over hero), logo left, nav links right, 45px spacing between items
- **Sticky state:** White background, shadow `0px 3px 16px rgba(0,0,0,0.1)`, reduced height (70px)
- **Dropdowns:** White bg, shadow, no border-radius, blue hover fill `#0051d2`

### Layout
- Container max-width: 1170px (Bootstrap grid)
- Feature section: 3-column equal
- Service section: 3-column equal
- About section: image left (floating), content right
- Team section: 3-column equal
- Appointment: 2-column (FAQ accordion left, form right)
- Blog: 3-column equal
- Footer: 4-column (Top Products, Quick Links, Features, Resources) + newsletter (wide)

## Gherkin Requirements

### Feature: Page Structure and Navigation

  Scenario: Header displays top info bar and main navigation
    Given the page loads
    Then a top info bar shows email and location with social icons
    And a main navigation bar shows logo, Home, About, Department, Doctors, Blog (with dropdown), Contact
    And the navigation becomes sticky with white background on scroll

  Scenario: Navigation dropdown works on hover
    Given the navigation is visible
    When the user hovers over "Blog"
    Then a dropdown appears with Blog, Blog Details, and Element links
    And the dropdown has white background with blue hover highlights

### Feature: Hero Banner

  Scenario: Hero banner displays with full-bleed background
    Given the page loads
    Then a hero banner section spans the full width with a background image
    And it shows heading "Making Health Care Better Together"
    And it shows a paragraph of descriptive text
    And it shows two buttons: "Make an Appointment" (solid blue) and "View Department" (outline)

### Feature: Feature Cards

  Scenario: Three feature cards display below the hero
    Given the page loads
    Then three feature cards appear in a row
    And each card has an icon, title, and subtitle
    And the cards have white background with hover shadow effect

### Feature: Services Section

  Scenario: Services section shows three service cards
    Given the page loads
    Then a services heading "Awesome Health Service" appears
    And three service cards display in a row
    And each card has an icon, title, description, and "Learn More" link

### Feature: About Section

  Scenario: About section displays with floating image
    Given the page loads
    Then an about section shows a heading, subheading, and paragraph
    And a "learn more" link with animated underline appears
    And the section has a light grey background with decorative image

### Feature: Team Section

  Scenario: Team section shows doctor cards
    Given the page loads
    Then a team heading appears
    And three doctor cards display in a row
    And each card shows a photo, doctor name, specialty, phone number, and social icons

### Feature: Appointment Section

  Scenario: Appointment section has FAQ and form
    Given the page loads
    Then an appointment section shows "Have Some Questions?" heading
    And a 5-item accordion FAQ appears on the left
    And a contact form with Full Name, Email, Message fields and "Make an Appointment" button appears on the right

### Feature: Testimonials

  Scenario: Testimonial slider displays
    Given the page loads
    Then a testimonial section shows a quote, author name, and circular avatar
    And the section has a light grey background with decorative pattern

### Feature: Emergency Hotline

  Scenario: Hotline section shows emergency contact
    Given the page loads
    Then a hotline section displays "Emergency hotline" heading
    And it shows a phone number "(+01) – 256 567 550"
    And the section has a dark background image with white text

### Feature: Blog Section

  Scenario: Blog section shows three post cards
    Given the page loads
    Then a blog heading "Get Every Single Update Here" appears
    And three blog cards display with thumbnail, tags, title, comment count, and like count

### Feature: Brand Logos

  Scenario: Brand logo carousel displays
    Given the page loads
    Then a brands section shows a carousel of partner logos
    And the section has a light grey background

### Feature: Footer

  Scenario: Footer displays four link columns and newsletter
    Given the page loads
    Then a footer shows columns for Top Products, Quick Links, Features, Resources
    And a newsletter section with email input and submit button appears
    And a bottom bar shows copyright text and social media icons
    And the footer links to Component Dock (https://www.componentdock.com/)

### Feature: Responsive Design

  Scenario: Page adapts to mobile viewport
    Given the viewport width is less than 768px
    Then the navigation collapses into a hamburger menu
    And sections stack vertically
    And card grids become single-column

## Verification Checklist

- [ ] Hero banner renders with background image, heading, two CTA buttons
- [ ] Navigation is sticky on scroll with white bg + shadow
- [ ] Feature cards (3) render with icons, titles, subtitles, hover shadow
- [ ] Service cards (3) render with icons, titles, descriptions, links
- [ ] About section renders with heading, text, link, decorative bg
- [ ] Team cards (3) render with photos, names, specialties, phone, social icons
- [ ] Appointment section: FAQ accordion opens/closes, form has required fields
- [ ] Testimonial slider renders quote + avatar
- [ ] Hotline section renders with dark bg overlay, white text
- [ ] Blog cards (3) render with thumbnails, tags, titles, meta
- [ ] Brand logo carousel renders
- [ ] Footer: 4 link columns + newsletter + copyright + Component Dock link
- [ ] Responsive: hamburger nav on mobile, stacked layouts
- [ ] All interactive elements keyboard-accessible
- [ ] All components have 100% test coverage
- [ ] No ColorLib references in app code (provenance only in spec/PR)
