# Template: VitalBlend (Health & Wellness)

## Purpose

VitalBlend is a single-page health & wellness landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Healthcouch" free template (source:
https://colorlib.com/wp/template/healthcouch/, preview:
https://preview.colorlib.com/theme/healthcouch/), built under a DIFFERENT name
(**VitalBlend**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4 health/wellness template using Poppins Google
Font and Font Awesome icons. It has a clean, nature-inspired aesthetic with a
green (`#5AAC4E`) primary accent, dark green (`#234821`) secondary accent, and
dark headings (`#0D210B`) on a white/light background. The page features a
sticky navbar with logo and "Make an Appointment" CTA button, a full-width hero
slider with large headline and video play icon, an about section with image and
text, a green CTA banner, a three-column services grid with icons, a
testimonial slider, a video background section, a blog cards section, a
satisfaction/about section with green background and "Make an Appointment"
button, and a footer with newsletter form and social icons.

## Design Tokens

| Token            | Value                                     | Source                                   |
| ---------------- | ----------------------------------------- | ---------------------------------------- |
| Brand primary    | `#5AAC4E` (green)                         | Buttons, video icon, preloader, footer   |
| Brand secondary  | `#234821` (dark green)                    | `.btn` background, text accents          |
| Text primary     | `#0D210B` (near-black green)              | All headings (h1–h6)                     |
| Text body        | `#635c5c` (warm gray)                     | Links, body text defaults                |
| Text hero sub    | `#234821` (dark green)                    | Hero subtitle, about paragraph text      |
| Accent red       | `#f04e3c` (coral red)                     | Section title `<span>` labels            |
| Background light | `#ffffff`                                 | Main body, services section              |
| Background dark  | `#0D210B`                                 | Not used on homepage; heading fallback   |
| Font heading     | `"Poppins", sans-serif` weight 300–500    | All headings, hero h1 (300 weight)       |
| Font body        | `"Poppins", sans-serif` weight 300–400    | Paragraphs, nav links, buttons           |
| Icon set         | Font Awesome 5 (solid) + Flaticon         | Nav, video play, plus buttons, social    |
| Button primary   | bg `#234821`, hover `#5AAC4E`             | `.btn` — radius `0 0 0 17px` (L-shaped)  |
| Button border    | `2px solid #fff`, transparent bg          | `.border-btn` — radius 0, hover green    |
| Button header    | bg `#5AAC4E`, hover `#234821`             | `.header-btn` — CTA in navbar            |
| Card radius      | `50px` (blog images)                      | `.home-blog-single .blog-img`            |
| Video icon       | `60px circle`, bg `#5AAC4E`               | `.video-icon a.btn-icon`                 |
| Hero height      | `920px` desktop, `600px` mobile           | `.slider-height`                         |
| Section padding  | `120px` top/bottom (`.section-padding`)   | `.section-padding`, `.section-padding40` |
| Footer bg        | Image (`footer-bg.png`) via `section-bg3` | Footer wrapper                           |

## Visual Description (from TEMPLATES.md screenshot + live preview)

A clean, green-themed health/wellness landing page. The dominant color is
medium green (`#5AAC4E`) used on buttons, the video play icon, the preloader
spinner, and the CTA banner. A darker green (`#234821`) appears on the hero
button background and body text accents. Headings are near-black green
(`#0D210B`). Section titles have a small red/coral (`#f04e3c`) label element
above them.

**Header:** White sticky bar with a logo on the left, horizontal navigation
(Home, About, Services, Blog with submenu, Contact), and a green "Make an
Appointment" button on the right.

**Hero slider:** Full-width background image (person in wellness context), 920px
tall on desktop. Large light-weight Poppins heading "Health is wealth keep it
healthy" on the left side, a dark green subtitle below, a dark green "Take a
Service" CTA button, and a green circular video play icon with a pulsing border
animation above the text.

**About section:** Two-column layout — large image on the left, text on the
right with a section heading "Create a healthy life you love!", a subtitle
paragraph, body paragraph, and two icon images (likely trust/feature icons).

**CTA banner:** Full-width green background section with large heading
"Happy mind healthy life", subtitle text, and a white-border "Take a Service"
button on the right.

**Services section:** Three-column centered grid on white background. Each card
has a large SVG icon (green accent), a heading (e.g. "Physical Activity"), a
short description paragraph, and a green plus-icon link below.

**Testimonial section:** Centered slider with large quote text, quote icon
image, founder/user circular image, name, and role. Dot navigation below.

**Video section:** Full-width dark background image with a centered green
circular play button.

**Blog section:** Three-column cards — each with a rounded-corner
(`border-radius: 50px`) image on top, a heading link, and a short paragraph.

**Satisfaction section:** Overlaps the blog section (negative margin). Left
column has a large green background shape (`.about-cap-wrapper::before` with
`border-radius: 0 0 0 156px`) containing white heading "100% satisfaction
guaranteed." and a white-border "Make an Appointment" button. Right column has
an image.

**Footer:** Dark background image. Left side: white logo, horizontal nav
links, social icons (Twitter, Facebook, Pinterest). Right side: "Subscribe
newsletter" heading, email input + green Subscribe button, short paragraph.
Bottom bar: copyright line.

## Requirements (Gherkin)

### Navbar

```gherkin
Scenario: Sticky navbar with logo, nav links, and CTA button
  Given the user loads the VitalBlend page
  Then a sticky navbar is visible at the top with a logo on the left
  And navigation links "Home", "About", "Services", "Blog", "Contact" are displayed horizontally
  And a green "Make an Appointment" CTA button appears on the right
  And on mobile, a hamburger menu icon replaces the horizontal nav
```

### Hero Slider

```gherkin
Scenario: Hero section displays a large headline, subtitle, CTA, and video icon
  Given the user loads the VitalBlend page
  Then a full-width hero area is visible with a background image
  And a large heading "Health is wealth keep it healthy" is displayed
  And a subtitle paragraph appears below the heading
  And a dark green "Take a Service" CTA button is present
  And a green circular video play icon with pulsing animation is shown above the heading
```

### About Section

```gherkin
Scenario: About section with image and text
  Given the user scrolls to the about section
  Then a two-column layout is displayed: image on the left, text on the right
  And a heading "Create a healthy life you love!" is shown
  And a subtitle paragraph and a longer description paragraph are visible
  And two trust/feature icon images appear below the text
```

### CTA Banner

```gherkin
Scenario: Green CTA banner between sections
  Given the user scrolls past the about section
  Then a full-width green background banner is visible
  And it displays the heading "Happy mind healthy life"
  And a subtitle paragraph is shown
  And a white-bordered "Take a Service" button is positioned on the right
```

### Services Grid

```gherkin
Scenario: Three-column services section with icons
  Given the user scrolls to the services section
  Then three service cards are displayed in a centered row
  And each card has a large icon, a heading, and a short description
  And each card has a green plus-icon link below the description
```

### Testimonial Slider

```gherkin
Scenario: Testimonial carousel with quote, avatar, and name
  Given the user scrolls to the testimonial section
  Then a carousel of testimonials is displayed
  And each testimonial shows a quote icon, paragraph text, a circular avatar, a name, and a role
  And dot navigation indicators are visible below the testimonial
```

### Video Section

```gherkin
Scenario: Video background section with play button
  Given the user scrolls to the video section
  Then a full-width dark background area is displayed
  And a green circular play button is centered in the section
```

### Blog Section

```gherkin
Scenario: Three-column blog cards with rounded images
  Given the user scrolls to the blog section
  Then a heading "Latest Blog" is displayed centered above three cards
  And each blog card shows a large image with rounded corners (50px radius)
  And each card has a heading link and a short paragraph description
```

### Satisfaction / About-Low Section

```gherkin
Scenario: Satisfaction section overlapping the blog area
  Given the user scrolls to the satisfaction section
  Then a green background shape appears on the left side
  And the heading "100% satisfaction guaranteed." is displayed in white
  And a white-bordered "Make an Appointment" button is shown
  And an image is displayed on the right side
```

### Footer

```gherkin
Scenario: Footer with navigation, newsletter, and social links
  Given the user scrolls to the footer
  Then a dark background footer is visible
  And a white logo is displayed on the left
  And horizontal navigation links (Home, About, Services, Blog, Contact) are shown
  And social media icon links (Twitter, Facebook, Pinterest) appear below
  And a "Subscribe newsletter" heading with email input and green Subscribe button is on the right
  And a copyright line appears at the very bottom
  And the footer contains a link to "Component Dock" (https://www.componentdock.com/)
```

## Verification Checklist

- [ ] Navbar: sticky, logo, 5 nav links, green CTA button, mobile hamburger
- [ ] Hero: background image, h1 heading, subtitle, CTA button, video play icon
- [ ] About: two-column (image left, text right), heading, paragraphs, trust icons
- [ ] CTA Banner: full-width green, heading, subtitle, border button right-aligned
- [ ] Services: 3-column grid, icons, headings, descriptions, plus-icon links
- [ ] Testimonial: carousel/slider, quote, avatar, name, role, dot navigation
- [ ] Video: full-width dark background, centered green play button
- [ ] Blog: "Latest Blog" heading, 3 cards with rounded images, headings, paragraphs
- [ ] Satisfaction: overlapping green shape, white heading, border button, image right
- [ ] Footer: dark bg image, white logo, nav links, social icons, newsletter form, copyright, ComponentDock link
- [ ] Design tokens: `#5AAC4E` primary, `#234821` dark, `#0D210B` headings, Poppins font, L-shaped button radius
- [ ] No ColorLib references in app code
- [ ] `public/CNAME` contains `vitalblend.free.componentdock.com`
- [ ] `homepage` in package.json is `https://vitalblend.free.componentdock.com`
