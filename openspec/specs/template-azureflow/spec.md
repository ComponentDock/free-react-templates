# Template: Azureflow (Fullscreen Business Landing Page)

## Purpose

Recreation of the ColorLib **Blueline** template as a React single-page
application.

- **Source slug:** `blueline`
- **Preview URL:** https://preview.colorlib.com/theme/blueline/
- **Source page:** https://colorlib.com/wp/template/blueline/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/blueline-free-fullscreen-business-website-template.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Category:** Fullscreen Business / Agency Landing Page

### What this template is

A fullscreen business/agency landing page with a blue-gradient visual identity.
The template features a full-viewport hero with a large background image, a
numbered features section, a video showcase area, a split-panel services section
(black left / white right), a portfolio slider, newsletter subscription, contact
form, and a dark footer. The design uses a blue-to-cyan gradient
(`#3c50ca` → `#77d5f7`) as its signature visual element.

### Design overview (from preview DOM + CSS)

1. **Header/Navbar** — Transparent header with logo and nav links (Home, Generic,
   Elements), absolute-positioned over the hero
2. **Hero/Banner** — Fullscreen background image, centered text:
   - "Introducing" (small, uppercase, white, letter-spacing)
   - "blueline" (124px, white, light weight, text-shadow, letter-spacing 25px)
3. **Features** — 3-column numbered features on white background:
   - Large gradient numbers (01, 02, 03) with text-shadow
   - Uppercase titles: "Responsive View", "Multiple Layouts", "Flexible Design"
   - Description paragraphs below each
4. **Video Area** — Overlapping section (-10% margin-top):
   - Video thumbnail with dark overlay and play button
   - Text content: "Great Modern Design / Build with usability in mind"
   - Gradient-highlighted span words
5. **Services** — Split-panel (full-width, no container):
   - Left: black background, "Services We Offered" heading + description
   - Right: white background, 4 service cards (Graphics Design) with icons
6. **Latest Works** — Portfolio slider section:
   - "Some Of our Latest Works" heading
   - Image carousel (owl-carousel style)
7. **Newsletter** — Subscription section:
   - "Subscribe for our Newsletter" heading
   - Email input with rounded shape + "Get Started" gradient button
8. **Contact** — Split layout:
   - Left: contact image
   - Right: contact form (name, email, message, "Send Message" button)
9. **Footer** — Black background:
   - Copyright text with Component Dock link (replaces Colorlib)
   - Social media icons (Facebook, Twitter, Dribbble, Behance)

## Design tokens

Extracted from the live preview CSS (`css/main.css`).

### Colors

| Token              | Value     | Usage                                |
| ------------------ | --------- | ------------------------------------ |
| `brand-primary`    | `#2954c9` | Links, buttons, switches, primary UI |
| `brand-accent`     | `#77d5f7` | Hover states, highlights, text sel.  |
| `gradient-start`   | `#3c50ca` | Gradient start (blue)                |
| `gradient-end`     | `#77d5f7` | Gradient end (cyan)                  |
| `text-heading`     | `#222`    | All heading text                     |
| `text-body`        | `#777`    | Body paragraphs                      |
| `bg-page`          | `#f9f9ff` | Page background (light blue-gray)    |
| `bg-white`         | `#fff`    | Feature area, service right, etc.    |
| `bg-black`         | `#000`    | Service left, footer, service area   |
| `bg-input`         | `#f9f9ff` | Form input backgrounds               |
| `border-light`     | `#eee`    | Card borders, dividers               |
| `footer-social-bg` | `#1e1e1e` | Social icon button background        |

### Typography

| Token                   | Value                           | Usage                       |
| ----------------------- | ------------------------------- | --------------------------- |
| `font-primary`          | `"Poppins", sans-serif`         | All text (body + headings)  |
| `font-weight-light`     | `200`                           | Light heading variants      |
| `font-weight-regular`   | `300`                           | Body text                   |
| `font-weight-medium`    | `500`                           | Nav links, buttons          |
| `font-weight-semibold`  | `600`                           | Headings, bold spans        |
| `font-weight-bold`      | `700`                           | Bold emphasis               |
| `font-size-h1`          | `36px` (base), `124px` (banner) | Banner title is 124px       |
| `font-size-h2`          | `30px`                          | Section headings            |
| `font-size-h3`          | `24px`                          | Sub-headings                |
| `font-size-h4`          | `18px`                          | Small headings              |
| `font-size-body`        | `14px`                          | Body text                   |
| `letter-spacing-banner` | `25px`                          | Banner title letter-spacing |
| `text-transform`        | `uppercase`                     | Banner text, feature titles |

### Buttons

| Token          | Value                                     | Usage                |
| -------------- | ----------------------------------------- | -------------------- |
| `btn-gradient` | `linear-gradient(0deg, #3c50ca, #77d5f7)` | Primary CTA buttons  |
| `btn-radius`   | `20px` (circle class)                     | Rounded pill buttons |
| `btn-padding`  | `0 30px`, line-height `40px`              | Standard button size |
| `btn-text`     | `uppercase`, weight `500`                 | Button label style   |
| `btn-hover`    | Background stays gradient, text changes   | Hover state          |

### Layout

| Token                 | Value                                  | Usage                             |
| --------------------- | -------------------------------------- | --------------------------------- |
| `banner-height`       | `735px` (inline style)                 | Hero section height               |
| `banner-overlay`      | background image cover                 | Fullscreen hero background        |
| `section-padding`     | `120px 0`                              | Standard section vertical spacing |
| `feature-padding`     | `padding-bottom: 200px`                | Feature area bottom spacing       |
| `video-border`        | `20px solid #f3f3f3`                   | Video thumbnail frame             |
| `video-shadow`        | `0.872px 9.962px 30px rgba(0,0,0,0.3)` | Video box shadow                  |
| `subscription-radius` | `25px`                                 | Newsletter input pill shape       |
| `contact-padding`     | `0px 70px`                             | Contact form internal padding     |

### Section backgrounds

| Section       | Background                                         |
| ------------- | -------------------------------------------------- |
| Banner        | `url(../img/header-bg.jpg) no-repeat center/cover` |
| Feature area  | `#fff` (white)                                     |
| Video area    | Image with dark overlay (50% black)                |
| Service left  | `#000` (black)                                     |
| Service right | `#fff` (white)                                     |
| Latest works  | inherits page bg                                   |
| Newsletter    | `#fff` (white)                                     |
| Contact       | inherits page bg                                   |
| Footer        | `#000` (black)                                     |

## Gherkin requirements

### Scenario: Page renders with transparent navbar over fullscreen hero

```gherkin
Given the user navigates to the Azureflow page
Then a transparent header is visible at the top
And the header contains a logo and navigation links (Home, Generic, Elements)
And a fullscreen hero banner is displayed below the header
And the hero has a background image with a dark overlay
```

### Scenario: Hero displays brand heading with gradient style

```gherkin
Given the user is on the Azureflow page
Then the hero contains "Introducing" in small uppercase white text
And the hero contains "azureflow" in large white text with letter-spacing
And the heading has a text-shadow effect
```

### Scenario: Features section displays three numbered items

```gherkin
Given the user scrolls to the features section
Then three feature cards are displayed in a row
And each card has a large gradient-colored number (01, 02, 03)
And each card has an uppercase title and description paragraph
And the numbers have a gradient text effect (#3c50ca to #77d5f7)
```

### Scenario: Video section shows embedded video with play button

```gherkin
Given the user scrolls to the video section
Then a video thumbnail is displayed with a dark overlay
And a play button icon is centered on the thumbnail
And the video frame has a light border (20px solid #f3f3f3)
And text content reads "Great Modern Design / Build with usability in mind"
```

### Scenario: Services section has split black/white layout

```gherkin
Given the user scrolls to the services section
Then the left half has a black background with "Services We Offered" heading
And the left half has a description paragraph in white text
And the right half has a white background with 4 service cards
And each service card has an icon, title, and description
And service cards have light borders
```

### Scenario: Latest works section displays portfolio slider

```gherkin
Given the user scrolls to the latest works section
Then a heading "Some Of our Latest Works" is displayed
And an image carousel/slider shows portfolio images
And the active image has a white border
```

### Scenario: Newsletter section has subscription form

```gherkin
Given the user scrolls to the newsletter section
Then a heading "Subscribe for our Newsletter" is displayed
And an email input field with rounded shape is shown
And a "Get Started" gradient button is positioned to the right
```

### Scenario: Contact section has form with image

```gherkin
Given the user scrolls to the contact section
Then a contact image is displayed on the left
And a contact form is displayed on the right
And the form has name, email, and message fields
And a "Send Message" gradient button is below the form
```

### Scenario: Footer displays copyright and social links

```gherkin
Given the user scrolls to the footer
Then the footer has a black background
And copyright text is displayed
And social media icons (Facebook, Twitter, Dribbble, Behance) are shown
And the footer links to Component Dock
```

### Scenario: Page uses Poppins font throughout

```gherkin
Given the user is on the Azureflow page
Then all text uses the Poppins font family
And headings use weight 600 (semibold)
And body text uses weight 300 (light)
```

### Scenario: Primary buttons use blue-to-cyan gradient

```gherkin
Given the user hovers over a primary CTA button
Then the button has a gradient background from #3c50ca to #77d5f7
And the button text is white and uppercase
And the button has rounded corners (20px radius)
```

### Scenario: Accessibility

```gherkin
Given the user is on the Azureflow page
Then all images have alt text
And the navigation is keyboard-accessible
And the contact form has proper labels
And semantic HTML elements are used (header, nav, main, section, footer)
```

## Verification checklist

- [ ] Transparent navbar with logo and nav links over hero
- [ ] Fullscreen hero with background image and "azureflow" heading
- [ ] Hero text has letter-spacing and text-shadow
- [ ] 3-column features with gradient numbers (01, 02, 03)
- [ ] Feature numbers use gradient text effect
- [ ] Video section with thumbnail, overlay, and play button
- [ ] Video frame has light border and shadow
- [ ] Split-panel services: black left / white right
- [ ] 4 service cards with icons and descriptions
- [ ] Portfolio slider with image carousel
- [ ] Newsletter subscription with rounded input + gradient button
- [ ] Contact form with image + name/email/message fields
- [ ] "Send Message" gradient button
- [ ] Black footer with copyright and social icons
- [ ] Footer links to Component Dock
- [ ] Poppins font family throughout
- [ ] Gradient buttons (#3c50ca → #77d5f7)
- [ ] Page background #f9f9ff
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] Builds and deploys successfully

## Replication notes

- **Preview reachable:** Yes, at `https://preview.colorlib.com/theme/blueline/`
- **CSS fetched:** Yes, `css/main.css` from the preview
- **Screenshot analyzed:** Yes, ColorLib template page
- **Key fidelity points:**
  - The 124px banner title with 25px letter-spacing and text-shadow is
    the signature visual — must replicate precisely
  - The blue-to-cyan gradient (`#3c50ca` → `#77d5f7`) is used on buttons,
    feature numbers, service icons, and text selection highlight
  - The video section overlaps the features section by -10% margin
  - The services section is full-width (container-fluid) with a stark
    black/white split
  - The subscription input is pill-shaped (25px radius)
- **Assets to replace:**
  - `header-bg.jpg` → `https://picsum.photos/seed/azureflow-hero/1920/1080`
  - `video-bg.jpg` → `https://picsum.photos/seed/azureflow-video/800/450`
  - `contact-img.jpg` → `https://picsum.photos/seed/azureflow-contact/400/500`
  - `slider.jpg` → `https://picsum.photos/seed/azureflow-work-n/800/500`
  - `play-btn.png` → lucide-react Play icon
  - `logo.png` → text-based logo or lucide icon
- **Icons:** Replace Linearicons (`lnr-*`) and Font Awesome with lucide-react
- **Carousel:** Replace owl-carousel with a React carousel (e.g., embla-carousel
  or a simple CSS snap scroll)
- **Nice select:** Not used in this template's main sections
