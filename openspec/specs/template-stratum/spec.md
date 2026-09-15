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

| Token               | Value                | Usage                                          |
|---------------------|----------------------|------------------------------------------------|
| primary-orange      | `#ff8b00`            | Headings, icons, checkmarks, buttons, social hover, active states, section titles |
| gradient-purple     | `#7a5e86`            | Footer/top-bar gradient start, newsletter subscribe btn bg |
| gradient-rose       | `#a75e67`            | Footer/top-bar gradient midpoint               |
| gradient-orange     | `#f77b2e`            | Footer/top-bar gradient end                    |
| body-text           | `#939393`            | Body copy                                      |
| heading-color       | `#000000`            | h1–h6 headings (Oswald, uppercase)            |
| gray-light          | `#f8f9fa`            | bg-light sections, dropdown hover              |
| white               | `#ffffff`            | Card backgrounds, hero text, button text       |
| border-light        | `#e9ecef`            | Card borders, top-bar border                   |

### Typography

| Element    | Font Family                         | Weight | Notes                              |
|------------|-------------------------------------|--------|------------------------------------|
| Body       | Rubik, sans-serif                   | 400    | Line-height 1.7, 1rem              |
| Headings   | Oswald, sans-serif                  | 400–700| UPPERCASE, text-transform uppercase|
| Blockquote | Georgia, Times, serif               | —      | Italic, 18px (testimonials)        |

### Buttons

- Primary: bg `#ff8b00`, color `#fff`, no border-radius (Bootstrap default), padding `8px 20px`
- Outline white: border `#fff`, transparent bg, color `#fff`, hover = white bg + dark text
- Social icons: `30x30px` rounded bordered buttons, orange hover fill

### Section Spacing

- `site-section`: `padding: 7rem 0` / mobile `3rem 0`
- `site-footer`: `padding: 4em 0` / md `8em 0`
- `site-section-cover`: `height: calc(100vh - 196px)`, min-height `577px`

## Gherkin Requirements & Scenarios

### Feature: Top Bar

As a visitor, I want to see contact info and social links at the top.

#### Scenario: Top bar renders with contact info

- Given the user loads Stratum
- When the top bar renders
- Then it shows email, phone number, and social links (Twitter, Instagram)
- And it uses the gradient background (purple → rose → orange)

### Feature: Sticky Navbar

As a visitor, I want a sticky navigation bar.

#### Scenario: Navbar renders with logo and nav links

- Given the user loads the page
- When the navbar renders
- Then it shows a logo "Stratum" and nav links (Home, Services, About Us, Press, Testimonials, Blog, Contact)
- And "About Us" has a dropdown with sub-items (Team, Pricing, FAQ)

#### Scenario: Sticky navbar on scroll

- Given the page is loaded
- When the user scrolls down
- Then the navbar becomes sticky with white background, box-shadow, and orange logo

### Feature: Hero Slider

As a visitor, I want to see a rotating hero banner.

#### Scenario: Hero carousel displays slides

- Given the user loads the page
- When the hero slider renders
- Then 2 slides are displayed with background images, headings, subtext, and "Get in touch" outline-white button
- And slides auto-rotate (or have nav arrows)

### Feature: Services / Feature Blocks

As a visitor, I want to see alternating image-text feature sections.

#### Scenario: Two service blocks render

- Given the user scrolls to the services section
- When the blocks load
- Then 2 alternating blocks are shown: one with image left + text right, the other reversed
- And each has a heading, description paragraphs, and an orange checkmark list

### Feature: Features Grid

As a visitor, I want to see a grid of service offerings.

#### Scenario: Six feature cards display

- Given the user scrolls to the features grid
- When the grid loads
- Then 6 feature cards are shown in a 3-column grid on light background
- And each has an orange icon, title, and description

### Feature: About / Video Section

As a visitor, I want to see company stats and a video.

#### Scenario: Video and counters render

- Given the user scrolls to the about section
- When the section loads on dark background
- Then a video thumbnail with play button is displayed
- And 4 stat counters are shown (years, engineers, employees, golds) with orange underlines

### Feature: Team Section

As a visitor, I want to see the team.

#### Scenario: Team member cards display

- Given the user scrolls to the team section
- When the section loads
- Then 6 team member cards are shown in a 3-column grid
- And each has a circular photo, name, role, and social icon buttons (Facebook, Twitter, Instagram)
- And hovering lifts the card with shadow

### Feature: Pricing Section

As a visitor, I want to see pricing tiers.

#### Scenario: Three pricing tiers display

- Given the user scrolls to the pricing section
- When the section loads on light background
- Then 3 pricing cards (Basic $47, Premium $200, Professional $750) appear
- And each shows a tier name, price, feature list with checkmarks (orange) or strikethrough, and a "Buy Now" button
- And Premium is highlighted with orange primary button

### Feature: FAQ Section

As a visitor, I want to see frequently asked questions.

#### Scenario: FAQ renders in two columns

- Given the user scrolls to the FAQ section
- When the section loads
- Then 8 Q&A items are displayed in a 2-column layout
- And the section title "Frequently Ask Questions" is orange

### Feature: Press Section

As a visitor, I want to see press articles.

#### Scenario: Press articles render

- Given the user scrolls to the press section
- When the section loads
- Then 3 press articles are listed with date, title, and description
- And the heading "Press" is on the left, articles on the right

### Feature: Testimonials

As a visitor, I want to see client testimonials.

#### Scenario: Testimonial carousel displays

- Given the user scrolls to the testimonials section
- When the carousel loads on light background
- Then testimonial cards are displayed with a blockquote, circular photo, and name
- And navigation dots are shown at the bottom

### Feature: Blog Section

As a visitor, I want to see recent blog posts.

#### Scenario: Blog cards render

- Given the user scrolls to the blog section
- When the section loads
- Then 2 blog cards are shown in a 2-column layout
- And each has an image, title, date/author, description, and "Read More" link

### Feature: Contact Section

As a visitor, I want to contact the company.

#### Scenario: Contact form renders

- Given the user scrolls to the contact section
- When the section loads on light background
- Then a contact form appears with first name, last name, email, message textarea, and "Send Message" button
- And a sidebar text with "Get Started" button is shown

### Feature: Footer

As a visitor, I want footer info and social links.

#### Scenario: Footer renders with gradient and required link

- Given the user scrolls to the bottom
- When the footer renders
- Then it uses the gradient background (purple → rose → orange)
- And it contains About Us text, Features links, Newsletter form, and social icons
- And it links to https://www.componentdock.com/ ("Component Dock")

## Verification Checklist

- [ ] Typecheck passes (`npm run typecheck`)
- [ ] Lint passes (`npm run lint`)
- [ ] 100% test coverage on new components (`npm run test:coverage`)
- [ ] Build succeeds (`npm run build`)
- [ ] Footer links to Component Dock (`https://www.componentdock.com/`)
- [ ] Section order matches original (Top bar → Navbar → Hero slider → Services → Features grid → About/Video → Team → Pricing → FAQ → Press → Testimonials → Blog → Contact → Footer)
- [ ] Design tokens match: primary orange `#ff8b00`, gradient `#7a5e86`→`#a75e67`→`#f77b2e`, Rubik body, Oswald headings
- [ ] Responsive layout adapts correctly on mobile/tablet
