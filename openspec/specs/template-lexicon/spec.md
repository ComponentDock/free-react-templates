# Template: Lexicon (Hotel)

## Purpose

Recreation of ColorLib's **Rolax** hotel template.

- **Source:** https://colorlib.com/wp/template/rolax/
- **Preview:** https://preview.colorlib.com/theme/rolax/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name:** `lexicon` (apps/lexicon, @free-react-templates/lexicon)
- **Deploy target:** https://lexicon.free.componentdock.com

## Design tokens

Extracted from the live preview stylesheet (`assets/css/style.css`):

| Token                 | Value                                        | Notes                                                          |
| --------------------- | -------------------------------------------- | -------------------------------------------------------------- |
| Font — headings       | `"Baskervville", serif`                      | Google Fonts import                                            |
| Font — body           | `"Jost", sans-serif`                         | Google Fonts import                                            |
| Brand / accent        | `#E29C89`                                    | Salmon/coral — buttons, submenu, scroll-to-top, btn_01 outline |
| Dark base             | `#191514`                                    | Near-black — heading color, sticky header bg                   |
| Header top bar        | `#2e0000`                                    | Very dark maroon — top info bar bg                             |
| Paragraph text        | `#94817E`                                    | Warm gray for p color                                          |
| Button primary bg     | `#E29C89`                                    | Pill-shaped: `border-radius: 35px`                             |
| Button primary hover  | `#ec583a`                                    | Darker coral on hover (scaleX pseudo-element)                  |
| Hero overlay gradient | `#b86e5a → rgba(88,55,48,0.43)`              | Warm brown gradient top-to-bottom                              |
| Section padding       | `120px 0` (desktop)                          | `.section-padding`                                             |
| Section heading size  | `42px` desktop, `31px` tablet, `24px` mobile | `.section-tittle h2`                                           |
| Card overlay gradient | `rgba(41,38,33,0) → #292621`                 | Room/guest card bottom gradient                                |

## Gherkin requirements

### Feature: Lexicon — Hotel Template

#### Scenario: Header — top info bar

- **Given** the user loads the page
- **Then** a dark maroon top bar (`#2e0000`) is visible
- **And** it shows contact phone and email text in white
- **And** social media icons (Facebook, Twitter, LinkedIn) appear on the right

#### Scenario: Header — sticky navigation

- **Given** the user scrolls past the hero
- **Then** the navigation bar becomes sticky with a dark background (`#191514`)
- **And** logo is on the left, nav links (Home, Rooms, About, Blog, Contact) in center
- **And** a "Book Now" CTA button (`#E29C89`, no border-radius) sits on the right

#### Scenario: Hero section

- **Given** the page loads
- **Then** a full-width hero image with a warm brown gradient overlay is displayed
- **And** a large heading "Rest Journey in Single step, in the breathtaking" is centered
- **And** a booking search form below has: Check In date, Check Out date, Adult select, Children select, Search button
- **And** the search form sits on a semi-transparent dark background at the bottom of the hero

#### Scenario: About section

- **Given** the user scrolls below the hero
- **Then** a two-column layout appears: left image, right text with heading "Luxury & Comfort Our services and wonders of Prague"
- **And** a descriptive paragraph follows
- **And** a "Learn More" outline button (`btn_01` style: `#E29C89` border + text, transparent bg, `border-radius: 0`) is shown
- **And** a secondary right-side image appears on desktop only

#### Scenario: Rooms carousel section

- **Given** the user scrolls to "Our Rooms"
- **Then** a section heading with title "Our Rooms" and subtitle text is shown
- **And** a horizontal carousel displays room cards (Luxurious Room, Family Room, Couple Room)
- **And** each card has an image with a bottom gradient overlay, room name, occupancy text, and price ("Started from $500")

#### Scenario: Services / Seasonal specials section

- **Given** the user scrolls to the services area
- **Then** a centered heading reads "Surrounded by galleries, boutiques, restaurants and cafés..."
- **And** a "Find a Room For You" dotted-underline link is below
- **And** a split image-text card shows: left image, right text with heading "Take advantage of our seasonal specials", paragraph, "View Project" outline button

#### Scenario: Video section

- **Given** the user scrolls to the video area
- **Then** a full-width background image with a play button icon is displayed
- **And** clicking the play icon opens a YouTube video popup

#### Scenario: Guest services section

- **Given** the user scrolls to "We Offer to Our Guest"
- **Then** a 3-column grid of image cards is shown (Free Drinks, Free Breakfast, Free Dinner)
- **And** each card has a hover overlay revealing descriptive text

#### Scenario: Testimonials section

- **Given** the user scrolls to the testimonials area
- **Then** a carousel of testimonial cards is shown
- **And** each card has a heading (e.g. "Nice Accommodation"), quoted text, and author name with dash prefix

#### Scenario: Footer

- **Given** the user scrolls to the footer
- **Then** a 4-column layout is displayed: logo + social links, Navigation links, Contact info, Newsletter signup
- **And** a bottom bar shows copyright text
- **And** a footer MUST link to https://www.componentdock.com/ (branded as "Component Dock")

## Verification checklist

- [ ] Header: top bar dark maroon, phone + email + social icons
- [ ] Navigation: sticky on scroll, dark bg, logo + 5 links + Book Now CTA
- [ ] Hero: full-width image, warm gradient overlay, centered heading, booking form (dates + guests + search)
- [ ] About: 2-col (image + text), heading, paragraph, Learn More outline button, side image (desktop)
- [ ] Rooms: carousel with 3 room cards, image + gradient overlay, name, occupancy, price
- [ ] Services: centered heading + dotted-underline link, split image-text card with outline button
- [ ] Video: bg image + play button popup
- [ ] Guest: 3-col image cards with hover overlay
- [ ] Testimonials: carousel with heading, quoted text, author
- [ ] Footer: 4-col (logo/social, nav, contact, newsletter), Component Dock link in copyright
- [ ] Fonts: Baskervville (headings), Jost (body) via Google Fonts
- [ ] Colors: brand #E29C89, dark #191514, header-top #2e0000
- [ ] Responsive: mobile menu, stacked columns, reduced section padding
