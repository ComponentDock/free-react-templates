# Template: Snaplens (Photography Portfolio)

## Purpose

Recreation of ColorLib **Fotograp** (https://colorlib.com/wp/template/fotograp/)
via live preview at https://preview.colorlib.com/theme/fotograp/

Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript (strict).

This is a single-page photography portfolio template featuring a hero cover
with parallax, profile section, specialty cards, testimonial carousel, photo
gallery grid, CTA bar, and a dark footer.

---

## Design Tokens (extracted from live preview CSS)

| Token                | Value / Notes                                                                 |
|----------------------|-------------------------------------------------------------------------------|
| Font family          | `"Josefin Sans", sans-serif` — weights 300, 400, 700; italic 300 available   |
| Body text color      | `#4d4d4d`                                                                    |
| Primary / accent     | `#7971ea` (indigo-purple) — used for active nav, hover states, form focus     |
| Heading color        | `#000000`                                                                    |
| Selection background | `#000000` / text `#ffffff`                                                   |
| Button radius        | `0` (square/sharp corners)                                                    |
| CTA button           | `btn-danger` → Bootstrap danger red, with `rounded` modifier on CTA           |
| Section padding      | 2.5em mobile → 5em desktop                                                    |
| Section heading      | 2.5rem mobile → 3rem desktop, 100px black underline line (1px)               |
| Border / divider     | `#edf0f5`                                                                     |
| Footer background    | `#333333`                                                                     |
| Footer text color    | `#737373`                                                                     |
| Footer heading color | `#ffffff`                                                                     |
| Footer link color    | `#999999` → white on hover                                                    |
| Sub-nav bg (active)  | `#f4f5f9`                                                                     |
| Parallax / overlay   | Dark semi-transparent overlay on hero + testimonials (`rgba(0,0,0,0.6)`)       |
| Animation library    | AOS (Animate On Scroll) with `fade-up` and `fade` variants                    |
| Carousel             | Owl Carousel (testimonials), Swiper referenced in CSS                         |

---

## Visual Design (from screenshot)

Photography portfolio with a dark moody hero (parallax background image of a
camera on a tripod, overlay), clean white content sections, a centered profile
avatar bridging hero and content, specialty cards with side-by-side image+text,
a full-width parallax testimonial band, a 3-column photo gallery grid with
hover gradient overlays, a minimal red CTA bar, and a dark gray footer with
3-column layout (about text, navigation links, social icons).

---

## Gherkin Requirements

### Feature: Navbar

```gherkin
Scenario: Logo displays correctly
  Given the page loads
  Then the logo text "snaplens." is visible
  And the dot after the logo is rendered in the primary accent color

Scenario: Navigation links are visible
  Given the viewport is >= 1200px wide (xl breakpoint)
  Then the nav shows links: Home, Photography, Services, About, Contact

Scenario: Social icons appear on desktop
  Given the viewport is >= 1200px wide
  Then social icons for Facebook, Twitter, Instagram, YouTube are visible in the navbar

Scenario: Mobile hamburger menu
  Given the viewport is < 1200px wide
  Then the nav links are hidden
  And a hamburger menu icon is visible

Scenario: Active nav link is accented
  Given the page is loaded
  Then the active nav link uses the primary accent color (#7971ea)
```

### Feature: Hero Cover

```gherkin
Scenario: Hero section displays with parallax background
  Given the page loads
  Then a full-width hero section with a dark overlay background image is visible
  And the headline "I'm a Professional Photographer" is centered

Scenario: Hero has parallax scrolling
  Given the user scrolls the page
  Then the hero background scrolls at a different rate than the content
```

### Feature: Profile Picture

```gherkin
Scenario: Profile avatar appears below the hero
  Given the hero section is visible
  Then a centered profile picture is displayed below the hero
  And clicking it links to the About page
```

### Feature: Specialties

```gherkin
Scenario: Section heading displays
  Given the page loads
  Then a "My Specialties" heading is visible with a centered underline decoration

Scenario: Four specialty cards render
  Given the specialties section is in view
  Then 4 specialty cards are shown in a 2-column grid
  And each card has an image on one side and text on the other
  And the specialties are: Nature Photography, Portrait Photography, Wedding Photography, Food & Drink Photography

Scenario: Specialty cards are responsive
  Given the viewport is < 768px wide
  Then the specialty cards stack vertically (1-column)
```

### Feature: Testimonials

```gherkin
Scenario: Testimonials section has parallax background
  Given the page loads
  Then the testimonials section displays over a parallax background image
  And the background has a dark overlay

Scenario: Testimonials carousel shows quotes
  Given the testimonials section is visible
  Then testimonial cards display with an avatar image, quote text, and author name
  And navigation dots/arrows allow cycling through testimonials

Scenario: Testimonials are accessible
  Given the testimonials section loads
  Then each testimonial has an avatar with alt text and a visible author attribution
```

### Feature: Photo Gallery

```gherkin
Scenario: Gallery heading displays
  Given the page loads
  Then a "My Photography" heading is visible with a centered underline decoration

Scenario: Gallery grid shows 6 items
  Given the gallery section is in view
  Then 6 photo items are shown in a 3-column grid
  And each item has an image, a title, and a "5 photos / Category" caption

Scenario: Gallery items have gradient overlay
  Given the gallery section loads
  Then each gallery item shows a gradient overlay on hover with the title visible

Scenario: Gallery is responsive
  Given the viewport is < 768px wide
  Then the gallery items stack in a 1-column layout
  Given the viewport is 768px–991px wide
  Then the gallery items show in a 2-column layout
```

### Feature: CTA Bar

```gherkin
Scenario: CTA section displays
  Given the page loads
  Then a "Need a photographer?" text is visible on the left
  And a "Contact Me" button in red (danger) style is visible on the right
  And the button has square corners with the rounded modifier

Scenario: CTA button links to contact
  Given the CTA section is visible
  Then clicking the "Contact Me" button navigates to the contact page
```

### Feature: Footer

```gherkin
Scenario: Footer has three columns
  Given the page loads
  Then the footer displays in 3 columns: About, Navigations, Follow Me

Scenario: Footer about section
  Given the footer is visible
  Then the "About" heading is visible with a brief description paragraph

Scenario: Footer navigation links
  Given the footer is visible
  Then navigation links include: Home, Photography, Gallery, Services, About Me, Privacy Policy, Contact Me, Terms

Scenario: Footer social links
  Given the footer is visible
  Then social links for Facebook, Twitter, Instagram, and LinkedIn are displayed

Scenario: Footer copyright
  Given the footer is visible
  Then a copyright notice with "Component Dock" link is shown

Scenario: Footer dark theme
  Given the footer renders
  Then the background is #333333
  And headings are white (#ffffff)
  And body text is #737373
  And links are #999999 turning white on hover
```

### Feature: Responsive Behavior

```gherkin
Scenario: Mobile layout
  Given the viewport is < 768px wide
  Then all section padding is reduced
  And the hero headline wraps appropriately
  And the gallery and specialties stack vertically

Scenario: Tablet layout
  Given the viewport is 768px–991px wide
  Then the gallery shows 2 columns
  And specialties remain in 2-column layout

Scenario: Desktop layout
  Given the viewport is >= 992px wide
  Then the gallery shows 3 columns
  And the footer shows 3 columns side by side
```

---

## Verification Checklist

- [ ] Logo "snaplens." displays with accent-colored dot
- [ ] Nav links visible on xl, hamburger on smaller
- [ ] Social icons in navbar (desktop only)
- [ ] Hero with parallax background + overlay + centered headline
- [ ] Profile picture centered below hero, links to About
- [ ] Specialties section: heading with underline, 4 cards in 2-col grid
- [ ] Testimonials: parallax bg, carousel with avatar + quote + author
- [ ] Photo Gallery: heading with underline, 6 items in 3-col grid, gradient hover
- [ ] CTA bar: "Need a photographer?" + Contact Me button (red, rounded)
- [ ] Footer: dark bg, 3 columns, social links, copyright with Component Dock link
- [ ] All design tokens match reference (#7971ea accent, #333 footer, Josefin Sans)
- [ ] Responsive: 1-col mobile, 2-col tablet, 3-col desktop
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] No ColorLib references in app code
- [ ] CNAME and homepage set for snaplens.free.componentdock.com
- [ ] `npm install` run to register workspace in package-lock.json
