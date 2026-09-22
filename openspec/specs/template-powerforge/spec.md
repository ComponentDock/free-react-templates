# Template: PowerForge (Fitness / Gym)

## Purpose

Recreation of ColorLib's **Ironmuscle** template as a React 19 + Vite + Tailwind 4 + TypeScript app.

- **Source:** https://colorlib.com/wp/template/ironmuscle/
- **Preview:** https://preview.colorlib.com/theme/ironmuscle/
- **App name:** `powerforge`
- **Package:** `@free-react-templates/powerforge`
- **Deploy target:** `https://powerforge.free.componentdock.com`

A dark-accented, red-branded fitness/gym template with a hero slider, featured
classes, a class schedule, testimonials, trainer profiles, and a 4-column footer.

## Design tokens

| Token            | Value                          | Source                         |
|------------------|--------------------------------|--------------------------------|
| Brand color      | `#f23a2e` (red)               | `background` on `.btn-primary`, `color` on headings |
| Text primary     | `#000`                         | body text                      |
| Text secondary   | `#4d4d4d`, `#a6a6a6`, `#b3b3b3` | muted paragraphs             |
| White            | `#fff`                         | headings on dark overlays, nav |
| Light bg         | `#f8f9fa`                      | `.bg-light` sections           |
| Dark overlay     | `rgba(0,0,0,.5)`              | hero and schedule overlays     |
| Green accent     | `#28a745`                      | small accent (schedule link)   |
| Font – primary   | Nunito Sans, sans-serif        | body text                      |
| Font – mono      | Roboto Mono, monospace         | code / schedule time slots     |
| Font – icons     | Icomoon / Flaticon             | feature icons                  |
| Button shape     | Pill (`border-radius: 30px`)   | `.btn.pill`                    |
| Button color     | `#f23a2e`, white text          | `.btn-primary.pill`            |
| Section radius   | None (full-width sections)     |                                |
| Image treatment  | Overlay with dark gradient     | hero + schedule backgrounds    |

## Section order (from preview DOM)

1. **Navbar** — white background, sticky, logo left, nav links right (Home, About,
   Trainers, Classes, Schedule, Pricing, Blog, Contact), mobile hamburger.
2. **Hero Slider** — two slides with carousel (owl-carousel style), dark overlay,
   centered white text, CTA buttons.
   - Slide 1: "Get In Shape & Be Healthy" — Learn More + Get Started
   - Slide 2: "Build Your Body Shape" — Get Started
3. **About** — text section: "All About Us" heading, description paragraph,
   no images.
4. **Featured Classes** — light bg (`#f8f9fa`), heading "Featured Class",
   grid of 4 class cards (Yoga, Running, etc.) with images and descriptions.
5. **Class Detail Blocks** — 4 alternating blocks (`.block-media-1`):
   - Yoga, Weight Lifting, Boxing, Running
   - Each: icon + heading + description + image, alternating left/right layout.
6. **Schedule** — dark overlay bg, white heading "Schedule", weekly schedule
   grid (time slots × days), class names with colored accents.
7. **Testimonials** — light bg, heading "Testimonials", carousel/slider of
   testimonial cards (quote + name + role + avatar).
8. **Trainers** — heading "Experts Trainer", grid of trainer cards with
   overlay on hover showing name + specialty (`.block-trainer`).
9. **Footer** — dark bg, 4 columns: About (logo + text), Quick Menu (links),
   Contact Info (address, phone, email), Social Icons.

## Gherkin requirements

### Feature: PowerForge fitness template

#### Scenario: Navbar renders and is sticky
Given the page loads
When the user views the navigation bar
Then the navbar is visible at the top with logo and navigation links
And the navbar remains sticky on scroll

#### Scenario: Hero slider displays slides
Given the page loads
When the hero section is visible
Then at least 2 slides are rendered
And each slide has a dark overlay, heading text, and a CTA button
And the slides auto-rotate or support manual navigation

#### Scenario: About section renders
Given the page loads
When the user scrolls to the about section
Then a heading "All About Us" (or equivalent) is displayed
And a descriptive paragraph is shown

#### Scenario: Featured Classes section renders
Given the page loads
When the user scrolls to the featured classes section
Then a heading "Featured Class" is displayed
And 4 class cards are shown in a grid
And each card has an image and a short description

#### Scenario: Class Detail blocks render
Given the page loads
When the user scrolls through class detail blocks
Then 4 blocks are rendered (Yoga, Weight Lifting, Boxing, Running)
And each block has an icon, heading, description, and image
And blocks alternate image placement (left/right)

#### Scenario: Schedule section renders
Given the page loads
When the user scrolls to the schedule section
Then a heading "Schedule" is displayed
And a weekly schedule grid shows time slots and class names
And the section has a dark overlay background

#### Scenario: Testimonials section renders
Given the page loads
When the user scrolls to the testimonials section
Then a heading "Testimonials" is displayed
And at least 3 testimonial cards are shown
And each card has a quote, name, role, and avatar

#### Scenario: Trainers section renders
Given the page loads
When the user scrolls to the trainers section
Then a heading "Experts Trainer" is displayed
And at least 4 trainer cards are shown in a grid
And each card shows name and specialty on hover

#### Scenario: Footer renders
Given the page loads
When the user scrolls to the footer
Then 4 columns are displayed: About, Quick Menu, Contact Info, Social Icons
And the footer links to https://www.componentdock.com/

#### Scenario: Mobile responsiveness
Given the page loads on a mobile viewport (≤768px)
When the user views the page
Then the navbar collapses to a hamburger menu
And sections stack vertically
And the schedule grid scrolls horizontally if needed

## Verification checklist

- [ ] Spec section order matches preview DOM 1:1
- [ ] Brand color `#f23a2e` used consistently
- [ ] Nunito Sans loaded via Google Fonts
- [ ] Pill-shaped buttons (`border-radius: 30px`)
- [ ] Dark overlay on hero and schedule sections
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code
- [ ] Placeholder images use picsum.photos/seed
- [ ] All sections responsive (mobile-first)
- [ ] 100% test coverage after implementation
