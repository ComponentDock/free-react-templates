# Template: GymNest (Fitness / Gym)

## Purpose

Recreation of the ColorLib "Sportsfit" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page gym/fitness site.

- **Source template:** [Sportsfit](https://colorlib.com/wp/template/sportsfit/)
- **Live preview:** https://preview.colorlib.com/theme/sportsfit/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/sportsfit-free-template.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript
- **Naming:** "GymNest" — no overlap with ColorLib source name; `apps/gymnest`

## Design Tokens

Extracted from `styles/main_styles.css` on the live preview:

| Token | Value | Notes |
|-------|-------|-------|
| **Primary / Brand** | `#f98c00` / `#ff9711` / `#ff880f` | Vibrant orange — buttons, borders, accents, hover fills |
| **Dark BG** | `#262626` | Dark section backgrounds (header, footer, overlays) |
| **Light BG** | `#F7F7F7` | Alternate section backgrounds |
| **White** | `#FFFFFF` | Page background, white-on-dark elements |
| **Salmon / Coral** | `#ffa07f` | Link underline border (same pattern as Sportify) |
| **Tomato** | `#db5246` / `#FF6347` | Form-control color, link active state |
| **Charcoal** | `#262626` | Headings base color |
| **Body Gray** | `#a5a5a5` / `#a8a8a8` | Body text |
| **Mid Gray** | `#686868` / `#535353` | Secondary text |
| **Soft Pink** | `#e0cccd` | Subtle accent |
| **Gold Accent** | `#fba40e` | Star ratings, highlights |
| **Font (headings)** | `Montserrat` (300, 400, 500, 600, 700) | Via Google Fonts — uppercase headings |
| **Font (body)** | Inherited from Montserrat | Body paragraphs |
| **Button shape** | 190×43px, `border-radius: 22px`, `background: #f98c00` | Pill-shaped, rounded corners |
| **Home Button** | `border: solid 1px #FFFFFF`, transparent bg | Outlined white on hero |
| **Alt Button** | `box-shadow: 0 0 1px 0 #f98c00 inset` | Subtle orange glow variant (testimonials) |
| **Newsletter Input** | `height: 61px`, `border-radius: 31px`, `border: solid 1px #ff880f`, `background: rgba(0,0,0,0.58)` | Pill-shaped input, dark translucent bg |
| **Newsletter Button** | `width: 61px`, absolute right inside input | "go" button inside the input field |
| **Card border-radius** | `50%` (testimonial images), `22px` (buttons) | Rounded instructor images |
| **Parallax BG** | Dark image with parallax scroll | Used on testimonials and blog sections |
| **Heading style** | Uppercase, `line-height: 1.2`, `font-weight: 600–700` | All h1-h6 |
| **Hero** | Full-width background image, dark overlay, centered text | "Get fit with us" headline, video play button |
| **Hamburger** | Custom 3-line with text "menu" | Slides in from left, dark overlay menu |

## Section Structure (from live preview DOM)

1. **Header** — Dark top bar with logo (dot icon + "Sportfit" text with colored "fit" span), main nav (Home, About us, Classes & Services, Blog, Contact), phone number on right. Custom hamburger bar below with "menu" text and 3-line icon.
2. **Hero / Home** — Full-width background image with dark overlay, centered content: video play button ("See Workout Video"), headline "Get fit with us", subtitle "Pilates, Yoga, Fitness, Spinning & many more", outlined "Join Now" button.
3. **Boxes** — Three feature boxes in a flex row: each with icon image, title, description, and "+" link. Boxes: "Pilates with trainer", "Swimming Pool", "Healthy diet plan".
4. **About** — Two-column layout: left 6-col content (subtitle "welcome to sportfit", title "About Sportfit" with "Sportfit" in colored span, highlighted text, paragraph, "Join Now" button), right 6-col image on a separate background row.
5. **Testimonials** — Parallax background image, two-column testimonial cards. Each card: circular avatar image, client name (linked), "client" label, paragraph, 4-star rating. Four testimonials total (2 per column). Centered "Join Now" button at bottom.
6. **Gallery** — Owl-carousel slider with full-width gym images (5 slides).
7. **Services / Our Courses** — Subtitle "welcome to sportfit", title "Our Courses", 6 service cards in 3×2 grid. Each: icon, title, description paragraph. Courses: "Weight Loss Class", "Yoga Classes", "Spinning Class", "Private Fit Class", "Nutrition Classes", "Pillates Class".
8. **Blog** — Parallax background with dark overlay, subtitle "welcome to sportfit", title "The Blog", "View all blog posts" link. 3 blog post cards: image, title (linked), date (linked), paragraph, "Read More" link.
9. **Footer** — Dark background, centered logo, nav links (same as header), newsletter form (pill-shaped input + "go" button), copyright bar (replace with Component Dock link), decorative footer image.

## Gherkin Requirements

### Feature: GymNest — Gym/Fitness Landing Page

#### Scenario: Header renders with logo, nav, and phone
- **Given** the user visits the GymNest page
- **When** the page loads
- **Then** a dark header displays with the logo icon and "Gym" + "Nest" text
- **And** navigation links for "Home", "About us", "Classes & Services", "Blog", "Contact" are visible
- **And** a phone number is displayed on the right
- **And** a custom hamburger bar with "menu" text is visible

#### Scenario: Hero section displays with video link and CTA
- **Given** the user is on the home page
- **When** the hero section renders
- **Then** a full-width background image is shown with a dark overlay
- **And** a video play button with "See Workout Video" text is visible
- **And** the headline "Get fit with us" is displayed
- **And** the subtitle "Pilates, Yoga, Fitness, Spinning & many more" is shown
- **And** an outlined "Join Now" button is visible

#### Scenario: Feature boxes show three highlights
- **Given** the user scrolls to the boxes section
- **When** the boxes section renders
- **Then** three feature boxes are displayed in a row
- **And** each box shows an icon, title, description, and "+" link
- **And** the titles are "Pilates with trainer", "Swimming Pool", and "Healthy diet plan"

#### Scenario: About section displays gym info
- **Given** the user scrolls to the about section
- **When** the about section renders
- **Then** a subtitle "welcome to sportfit" and title "About Sportfit" are shown
- **And** a highlighted quote text is displayed
- **And** a description paragraph is visible
- **And** a "Join Now" button is present
- **And** an image is shown on the right side

#### Scenario: Testimonials section shows client reviews
- **Given** the user scrolls to the testimonials section
- **When** the testimonials section renders
- **Then** a parallax background image is displayed
- **And** subtitle "welcome to sportfit" and title "Testimonials" are shown
- **And** four testimonial cards are displayed (two per column)
- **And** each card shows a circular avatar, client name, "client" label, paragraph, and star rating
- **And** a centered "Join Now" button is visible at the bottom

#### Scenario: Gallery slider shows gym images
- **Given** the user scrolls to the gallery section
- **When** the gallery section renders
- **Then** a carousel of gym images is displayed
- **And** navigation dots or arrows are available to browse images

#### Scenario: Services section lists course offerings
- **Given** the user scrolls to the services section
- **When** the services section renders
- **Then** subtitle "welcome to sportfit" and title "Our Courses" are shown
- **And** six course cards are displayed in a 3×2 grid
- **And** each card shows an icon, title, and description
- **And** the courses are: "Weight Loss Class", "Yoga Classes", "Spinning Class", "Private Fit Class", "Nutrition Classes", "Pilates Class"

#### Scenario: Blog section shows recent posts
- **Given** the user scrolls to the blog section
- **When** the blog section renders
- **Then** a parallax background with dark overlay is displayed
- **And** subtitle "welcome to sportfit" and title "The Blog" are shown
- **And** a "View all blog posts" link is visible
- **And** three blog post cards are displayed
- **And** each card shows an image, title, date, description, and "Read More" link

#### Scenario: Footer renders with newsletter and nav
- **Given** the user scrolls to the footer
- **When** the footer renders
- **Then** a dark background footer displays with the centered logo
- **And** navigation links are present (Home, About us, Classes & Services, Blog, Contact)
- **And** a newsletter form with pill-shaped input and "go" button is visible
- **And** a copyright line is shown (replaced with Component Dock link)
- **And** a decorative footer image is displayed

#### Scenario: Hamburger menu opens on mobile
- **Given** the user is on a mobile viewport
- **When** the hamburger menu button is clicked
- **Then** a full-screen dark overlay menu slides in
- **And** all navigation links are displayed vertically centered
- **And** the phone number is shown at the bottom of the menu

## Verification Checklist

- [ ] All sections render in correct order (header → hero → boxes → about → testimonials → gallery → services → blog → footer)
- [ ] Brand orange `#f98c00` is used for buttons and accents
- [ ] Montserrat font is loaded from Google Fonts
- [ ] Buttons have `border-radius: 22px` (pill shape)
- [ ] Hero has full-width background image with dark overlay
- [ ] Testimonials and blog use parallax background images
- [ ] Newsletter input has pill shape (`border-radius: 31px`) with orange border
- [ ] Footer links to Component Dock (not ColorLib)
- [ ] No ColorLib references in app code
- [ ] Images use `https://picsum.photos/seed/gymnest-<n>/<w>/<h>` placeholders
- [ ] Placeholder images are deterministic per template
- [ ] All sections have proper semantic HTML and accessibility attributes
