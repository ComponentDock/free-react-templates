# Template: Stratum (Mining / Industrial Company)

## Purpose

Recreation of ColorLib "Unearth" (https://colorlib.com/wp/template/unearth/) as a
modern mining/industrial company landing page. Built with Vite, React 19, Tailwind CSS 4,
and TypeScript under the new name **Stratum**.

- **Source slug:** `unearth`
- **Preview URL:** https://preview.colorlib.com/theme/unearth/
- **Design category:** Mining / Industrial Company Landing Page
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript · Lucide React

## Design Tokens (extracted from live preview CSS)

### Colors

| Token           | Value     | Usage                                                                             |
| --------------- | --------- | --------------------------------------------------------------------------------- |
| primary-orange  | `#ff8b00` | Headings, icons, checkmarks, buttons, social hover, active states, section titles |
| gradient-purple | `#7a5e86` | Footer/top-bar gradient start, newsletter subscribe btn bg                        |
| gradient-rose   | `#a75e67` | Footer/top-bar gradient midpoint                                                  |
| gradient-orange | `#f77b2e` | Footer/top-bar gradient end                                                       |
| body-text       | `#939393` | Body copy                                                                         |
| heading-color   | `#000000` | h1–h6 headings (Oswald, uppercase)                                                |
| gray-light      | `#f8f9fa` | bg-light sections, dropdown hover                                                 |
| white           | `#ffffff` | Card backgrounds, hero text, button text                                          |
| border-light    | `#e9ecef` | Card borders, top-bar border                                                      |

### Typography

| Element    | Font Family           | Weight  | Notes                               |
| ---------- | --------------------- | ------- | ----------------------------------- |
| Body       | Rubik, sans-serif     | 400     | Line-height 1.7, 1rem               |
| Headings   | Oswald, sans-serif    | 400–700 | UPPERCASE, text-transform uppercase |
| Blockquote | Georgia, Times, serif | —       | Italic, 18px (testimonials)         |

### Buttons

- Primary: bg `#ff8b00`, color `#fff`, no border-radius (Bootstrap default), padding `8px 20px`
- Outline white: border `#fff`, transparent bg, color `#fff`, hover = white bg + dark text
- Social icons: `30x30px` rounded bordered buttons, orange hover fill

### Section Spacing

- `site-section`: `padding: 7rem 0` / mobile `3rem 0`
- `site-footer`: `padding: 4em 0` / md `8em 0`
- `site-section-cover`: `height: calc(100vh - 196px)`, min-height `577px`

## Requirements

### Requirement: Top Bar

The top bar SHALL display contact info and social links with a gradient background.

#### Scenario: Top bar renders with contact info

- **WHEN** the user loads Stratum
- **THEN** the top bar shows email, phone number, and social links (Twitter, Instagram)
- **AND** it uses the gradient background (purple → rose → orange)

### Requirement: Sticky Navbar

The navbar SHALL display a logo and navigation links with a dropdown for About Us.

#### Scenario: Navbar renders with logo and nav links

- **WHEN** the user loads the page
- **THEN** the navbar shows a logo "Stratum" and nav links (Home, Services, About Us, Press, Testimonials, Blog, Contact)
- **AND** "About Us" has a dropdown with sub-items (Team, Pricing, FAQ)

#### Scenario: Sticky navbar on scroll

- **WHEN** the user scrolls down
- **THEN** the navbar becomes sticky with white background, box-shadow, and orange logo

### Requirement: Hero Slider

The hero section SHALL display rotating slides with background images, headings, and CTAs.

#### Scenario: Hero carousel displays slides

- **WHEN** the user loads the page
- **THEN** 2 slides are displayed with background images, headings, subtext, and "Get in touch" outline-white button

### Requirement: Services

The services section SHALL display alternating image-text feature blocks.

#### Scenario: Two service blocks render

- **WHEN** the user scrolls to the services section
- **THEN** 2 alternating blocks are shown: one with image left + text right, the other reversed
- **AND** each has a heading, description paragraphs, and an orange checkmark list

### Requirement: Features Grid

The features section SHALL display a grid of service offerings.

#### Scenario: Six feature cards display

- **WHEN** the user scrolls to the features grid
- **THEN** 6 feature cards are shown in a 3-column grid on light background
- **AND** each has an orange icon, title, and description

### Requirement: About / Video Section

The about section SHALL display company stats and a video thumbnail.

#### Scenario: Video and counters render

- **WHEN** the user scrolls to the about section
- **THEN** a video thumbnail with play button is displayed
- **AND** 4 stat counters are shown (years, engineers, employees, golds) with orange underlines

### Requirement: Team Section

The team section SHALL display team member cards with photos, names, roles, and social links.

#### Scenario: Team member cards display

- **WHEN** the user scrolls to the team section
- **THEN** 6 team member cards are shown in a 3-column grid
- **AND** each has a circular photo, name, role, and social icon buttons (Facebook, Twitter, Instagram)

### Requirement: Pricing Section

The pricing section SHALL display three pricing tiers with feature lists.

#### Scenario: Three pricing tiers display

- **WHEN** the user scrolls to the pricing section
- **THEN** 3 pricing cards (Basic $47, Premium $200, Professional $750) appear
- **AND** each shows a tier name, price, feature list with checkmarks or strikethrough, and a "Buy Now" button
- **AND** Premium is highlighted with orange primary button

### Requirement: FAQ Section

The FAQ section SHALL display frequently asked questions in a two-column layout.

#### Scenario: FAQ renders in two columns

- **WHEN** the user scrolls to the FAQ section
- **THEN** 8 Q&A items are displayed in a 2-column layout
- **AND** the section title "Frequently Ask Questions" is orange

### Requirement: Press Section

The press section SHALL display press articles with dates and descriptions.

#### Scenario: Press articles render

- **WHEN** the user scrolls to the press section
- **THEN** 3 press articles are listed with date, title, and description
- **AND** the heading "Press" is on the left, articles on the right

### Requirement: Testimonials

The testimonials section SHALL display client testimonials with quotes and photos.

#### Scenario: Testimonial cards display

- **WHEN** the user scrolls to the testimonials section
- **THEN** testimonial cards are displayed with a blockquote, circular photo, and name

### Requirement: Blog Section

The blog section SHALL display recent blog posts with images and metadata.

#### Scenario: Blog cards render

- **WHEN** the user scrolls to the blog section
- **THEN** 2 blog cards are shown in a 2-column layout
- **AND** each has an image, title, date/author, description, and "Read More" link

### Requirement: Contact Section

The contact section SHALL display a contact form and sidebar CTA.

#### Scenario: Contact form renders

- **WHEN** the user scrolls to the contact section
- **THEN** a contact form appears with first name, last name, email, message textarea, and "Send Message" button
- **AND** a sidebar text with "Get Started" button is shown

### Requirement: Footer

The footer SHALL display company info, newsletter form, social links, and link to Component Dock.

#### Scenario: Footer renders with gradient and required link

- **WHEN** the user scrolls to the bottom
- **THEN** the footer uses the gradient background (purple → rose → orange)
- **AND** it contains About Us text, Features links, Newsletter form, and social icons
- **AND** it links to https://www.componentdock.com/ ("Component Dock")
