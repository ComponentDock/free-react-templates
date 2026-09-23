# Template: Artful (Creative Services / Art & Crafting)

## Purpose

Recreation of ColorLib "Five Star" — an art and crafting website template with
a bold red brand color, full-screen hero, image gallery, carousel, services
grid, video section, contact form, and dark footer with newsletter signup.

- **Source:** https://colorlib.com/wp/template/five-star/
- **Preview:** https://preview.colorlib.com/theme/five-star/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/five-star-art-crafting-website-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design Tokens

Extracted from the live preview stylesheet (`css/main.css`):

### Colors

| Token              | Value      | Usage                                  |
| ------------------ | ---------- | -------------------------------------- |
| `brand`            | `#f5204b`  | Primary red — buttons, selection, hover |
| `cyan-accent`      | `#4cd3e3`  | Secondary accent (service icon hover)  |
| `blue-accent`      | `#38a4ff`  | Tertiary accent                        |
| `yellow-accent`    | `#f4e700`  | Quaternary accent                      |
| `body-text`        | `#777777`  | Body paragraphs                        |
| `heading`          | `#222222`  | Headings, h1–h6                        |
| `section-bg`       | `#f9faff`  | Light lavender-gray section background |
| `footer-bg`        | `#222222`  | Dark footer background                 |
| `white`            | `#ffffff`  | Text on dark backgrounds               |
| `overlay-dark`     | `rgba(0,0,0,0.75)` | Banner/video/carousel overlays |

### Typography

- **Font family:** `"Poppins", sans-serif` (Google Fonts)
- **Heading weight:** 600
- **Body weight:** 300
- **Body font size:** 14px
- **h1:** 36px
- **h2:** 30px
- **h3:** 24px
- **h4:** 18px

### Buttons

- **Primary button:** pill shape (`border-radius: 20px`), transparent background,
  `border: 1px solid #eee`, line-height 40px, padding 0 30px
- **Hover state:** background `#f5204b`, border `#f5204b`, color white
- **White variant (on dark):** white background, used in footer/contact sections

### Section Backgrounds

| Section              | Background                                  |
| -------------------- | ------------------------------------------- |
| Banner/Hero          | Image (`banner-bg.jpg`) + dark overlay      |
| Experience           | White (default)                             |
| Service Carousel     | Dark overlay (`rgba(0,0,0,0.75)`)           |
| Services Grid        | `#f9faff` (light lavender-gray)             |
| Video                | Image (`c-bg.jpg`) + dark overlay           |
| Service Features Row | White (default)                             |
| Contact              | `#f9faff`                                   |
| Footer               | `#222222` (dark)                            |

## Gherkin Requirements

### Feature: Artful Template

#### Scenario: Navbar renders with logo and navigation links
  - **Given** the user loads the page
  - **Then** a fixed header should be visible at the top
  - **And** the header should contain a logo image on the left
  - **And** the header should contain navigation links (Home, Generic, Elements)
  - **And** a mobile hamburger menu icon should be visible on small viewports

#### Scenario: Hero banner displays heading and subtitle
  - **Given** the user loads the page
  - **Then** a full-screen banner section should be visible
  - **And** the banner should display heading text "Crafting Best Experience"
  - **And** the banner should display a subtitle below the heading
  - **And** the banner should have a background image with a dark overlay

#### Scenario: Experience section shows image grid and content
  - **Given** the user scrolls past the hero
  - **Then** the experience section should show two side-by-side image thumbnails
  - **And** adjacent text content should include a heading, subheading, paragraph
  - **And** a "View Details" primary button should be visible

#### Scenario: Service carousel section displays rotating content
  - **Given** the user scrolls to the carousel area
  - **Then** a dark-overlaid section should appear
  - **And** a text carousel should be visible on the right side
  - **And** previous/next navigation arrows should be present
  - **And** clicking next/prev should advance/retreat the carousel content

#### Scenario: Services grid shows four icon cards
  - **Given** the user scrolls to the services section
  - **Then** four service cards should be displayed in a 4-column grid
  - **And** each card should have an icon, title ("Vector Illustration"), and description
  - **And** the section background should be light lavender-gray (#f9faff)

#### Scenario: Video section shows embed and descriptive text
  - **Given** the user scrolls to the video area
  - **Then** a left column should show a video thumbnail with a play button
  - **And** a right column should show a white heading and paragraph text
  - **And** the section should have a dark background image with overlay

#### Scenario: Service features row shows three horizontal cards
  - **Given** the user scrolls past the video section
  - **Then** three service feature cards should be displayed in a row
  - **And** each card should have an icon, title, and description in horizontal layout

#### Scenario: Contact section has address info and form
  - **Given** the user scrolls to the contact area
  - **Then** the left column should show address, email, and phone info with icons
  - **And** the right column should show a contact form with name, email, message fields
  - **And** a "Send Message" button should be visible
  - **And** the section background should be light lavender-gray

#### Scenario: Footer shows newsletter, about links, and instafeed
  - **Given** the user scrolls to the footer
  - **Then** the footer should have a dark background (#222222)
  - **And** an "About Agency" column with four navigation links
  - **And** a "Newsletter" column with email input and "Get Started" button
  - **And** an "Instafeed" column with a 2×4 grid of placeholder images
  - **And** a footer bottom bar with copyright text and social icons

#### Scenario: Footer links to Component Dock
  - **Given** the user views the footer
  - **Then** the footer should contain a link to https://www.componentdock.com/
  - **And** the link should be labeled "Component Dock"

#### Scenario: Responsive layout adapts to mobile
  - **Given** the user views the page on a 375px viewport
  - **Then** the navbar should collapse to a hamburger menu
  - **And** the hero heading should remain readable
  - **And** the services grid should stack vertically (1 column)
  - **And** the contact section should stack vertically
  - **And** the footer columns should stack vertically

## Verification Checklist

- [ ] All sections rendered in correct order (header → hero → experience → carousel → services grid → video → features row → contact → footer)
- [ ] Design tokens match: brand red #f5204b, Poppins font, pill buttons (#20px radius)
- [ ] Section backgrounds match: #f9faff on services/contact, #222 on footer, image+overlay on hero/video/carousel
- [ ] Responsive layout works at 375px, 768px, 1280px
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Placeholder images use picsum.photos with deterministic seeds
- [ ] Google Fonts (Poppins) loaded via `<link>` in index.html
- [ ] Icons from lucide-react (no font-awesome/linearicons)
- [ ] Test coverage at 100% lines/functions/branches/statements
- [ ] `npm run verify:app artful` passes
