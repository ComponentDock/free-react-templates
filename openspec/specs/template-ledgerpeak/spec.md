# Template: LedgerPeak (Bookkeeping / Financial Consulting)

## Purpose

Recreation of ColorLib **Book Keeping** template.
- Source slug: `book-keeping` (ColorLib slug resolves to `bookkeeping`)
- Preview URL: `https://preview.colorlib.com/theme/bookkeeping/`
- Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/bookkeeping-free-template.jpg`
- Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript
- Design category: Professional / Financial Services

## Design Tokens

Extracted from live preview CSS (`css/style.css`) at `preview.colorlib.com/theme/bookkeeping/`.

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| Brand Primary | `#5577B4` | Captions, social icons bg, arrow markers, underline accent, numbers icon |
| Dark Navy | `#183661` | Footer background, subscribe section overlay |
| Black | `#000000` | Headings (`.title-with-line`), body text headings |
| Body Text | `#999999` | Body copy (`body` color) |
| Light Background | `#f8f9fa` / `#edf0f5` | Utility top bar (`.bg-light`) |
| White | `#ffffff` | Navbar bg, section backgrounds, feature cards |
| Border | `#f3f3f4` | Navbar border, subtle dividers |

### Typography
| Property | Value |
|----------|-------|
| Font Family | `"Muli", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` |
| Note | Muli has been renamed to **Mulish** on Google Fonts — use Mulish |
| Body Size | 15px, weight 300, line-height 1.7 |
| Headings | Bold, dark (#000) |
| Caption | Uppercase, 11px, letter-spacing 0.2rem, weight 700, color #5577B4 |
| Title-with-line | 30px, color #000, with 30px × 2px #5577B4 underline |

### Buttons
| Property | Value |
|----------|-------|
| Base `.btn` | padding 14px 20px, border-radius 4px, font-size 12px, uppercase |
| `.btn-primary` | Bootstrap 4 default (`#007bff`) — overridden by custom: `#5577B4` (brand blue) |
| Hover | Transition 0.3s ease |

### Layout
| Element | Style |
|---------|-------|
| Hero | Full-viewport background image with dark overlay (`rgba(0,0,0,0.2)`), centered text, min-height 900px |
| Hero Carousel | Owl carousel with two slides |
| About Section | Two-column (60/40), image left, text right, with two-column arrow lists |
| Numbers Section | 4-column stats row (Clients, Experience, Employees, Coffees) |
| Services Section | Light bg (`#f8f9fa`), 6 service cards in 3×2 grid, each with icon-wrapper + heading + description + CTA |
| CTA Banner | Full-width background image with centered headline + button |
| Testimonials | Background image with dark navy overlay, owl carousel of testimonial cards |
| News/Blog | 3-column blog cards with image thumbnail + date badge overlay + title + author + excerpt |
| Newsletter/Subscribe | Background image with navy overlay (`#183661` at 0.7 opacity), email input + send button |
| Footer | Dark navy bg (`#183661`), 4-column: logo+desc, Solutions, Services, Contact |

## Gherkin Requirements

### Feature: LedgerPeak — Bookkeeping / Financial Consulting Website Template

#### Scenario: Top utility bar displays contact information
- **Given** the user loads the LedgerPeak homepage
- **Then** a utility bar at the top shows "Have a question?", a phone number, and an email address
- **And** the bar has a light gray background (`bg-light`)

#### Scenario: Navbar displays brand, navigation, and social links
- **Given** the user loads the LedgerPeak homepage
- **Then** the navbar shows the LedgerPeak logo on the left
- **And** navigation links include: Home, About, Services (with dropdown), Blog, Contact
- **And** three circular social icons (Facebook, Twitter, LinkedIn) appear on the right in brand blue

#### Scenario: Hero section displays headline and CTA
- **Given** the user views the hero section
- **Then** a background image fills the viewport with a dark overlay
- **And** a headline "Book Keeping Consulting Agency" appears centered in white
- **And** a subtitle paragraph appears below the headline
- **And** a "Get Started" button appears below the subtitle in brand blue

#### Scenario: About Us section shows image and feature lists
- **Given** the user scrolls past the hero
- **Then** an "About Us" caption appears in uppercase blue
- **And** a heading "Mindful Planning of Monetary Spending and Saving" appears with a blue underline
- **And** a body paragraph describes the service
- **And** two columns of bullet lists with blue arrow markers appear

#### Scenario: Numbers section displays key statistics
- **Given** the user views the statistics row
- **Then** four statistics appear in a row: Number of Clients (32,594), Years of Experience (25), Employees (1,029), Cup of Coffees (10,200)
- **And** each stat shows a large bold number with a label below

#### Scenario: Services section displays six service cards
- **Given** the user scrolls to the services section
- **Then** a "Our Services" caption and "What We Do" heading appear centered
- **And** six service cards appear in a 3×2 grid
- **And** each card has a circular icon wrapper with a blue background and white SVG icon
- **And** each card has a title, description paragraph, and "Learn More" button

#### Scenario: CTA banner with background image
- **Given** the user scrolls past the services section
- **Then** a full-width banner with a background image appears
- **And** a headline "We Are Here To Help Grow Your Business" appears centered
- **And** a "Get Started" button appears below

#### Scenario: Testimonials carousel
- **Given** the user views the testimonials section
- **Then** a "Testimonials" caption and "Happy Clients" heading appear centered in white
- **And** testimonial cards display in a carousel with person image, name, role, and quote
- **And** the section has a dark overlay on the background image

#### Scenario: News / Latest Updates section
- **Given** the user scrolls to the news section
- **Then** a "News" caption and "Latest News & Updates" heading appear
- **And** three blog post cards appear in a row
- **And** each card has an image thumbnail with a date badge overlay, title, author byline, and excerpt text

#### Scenario: Newsletter subscription section
- **Given** the user scrolls to the subscription section
- **Then** a "Subscribe to us!" heading and description appear on the left
- **And** an email input field and "Send" button appear on the right
- **And** the section has a background image with a dark navy overlay

#### Scenario: Footer displays brand and navigation
- **Given** the user scrolls to the footer
- **Then** the footer has a dark navy background (`#183661`)
- **And** four columns appear: logo + description, Solutions links, Services links, Contact links
- **And** a copyright line appears at the bottom center
- **And** the footer links to Component Dock (replacing Colorlib attribution)

## Verification Checklist

- [ ] Top utility bar with contact info renders
- [ ] Sticky navbar with logo, nav links, and social icons
- [ ] Hero section with background image, overlay, headline, subtitle, CTA button
- [ ] About Us section: two-column layout with image, caption, heading with underline, body, arrow lists
- [ ] Statistics row: 4 numbered stats
- [ ] Services section: light bg, 6 cards in 3×2 grid with icons
- [ ] CTA banner: background image, centered text, button
- [ ] Testimonials: carousel with overlay background
- [ ] News section: 3 blog cards with date badges
- [ ] Newsletter: email input + send button on background image
- [ ] Footer: dark navy, 4-column layout, copyright, Component Dock link
- [ ] Responsive layout (mobile hamburger menu, stacked columns)
- [ ] Mulish (Google Font) loaded via `<link>` in `index.html`
- [ ] Brand tokens applied via Tailwind `@theme` (`--color-brand: #5577B4`, `--color-navy: #183661`)
- [ ] All placeholder images from `https://picsum.photos/seed/ledgerpeak-<n>/...`
- [ ] No ColorLib references in `apps/ledgerpeak/` source code
