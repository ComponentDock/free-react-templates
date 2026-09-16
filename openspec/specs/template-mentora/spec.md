# Template: Mentora (Life Coaching Landing Page)

## Purpose

Mentora is a life-coaching landing-page template in the free-react-templates
monorepo. It is a React recreation of the ColorLib "Coach" free template
(source: https://colorlib.com/wp/template/coach/,
preview: https://preview.colorlib.com/theme/coach/).

Stack: React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript (strict).

## Design Tokens (extracted from preview)

| Token | Value | Source |
|---|---|---|
| Brand primary | `#037ef3` (vivid blue) | `.btn.btn-primary { background: #037ef3 }` |
| Brand accent | `#ffdd40` (warm yellow) | Hero section background `background-color: #ffdd40` |
| Button hover | `#000000` (black) | `.btn.btn-primary:hover { background: #000 }` |
| Body text | `#000000` / `#212529` / `#343a40` | `color: #000` on headings, bootstrap body |
| Muted text | `#737373` / `#999999` / `#a8b1b8` | `.text-muted` and utility classes |
| Section backgrounds | `#ffffff` (default), `#f8f9fa` / `#eff1f3` (`.bg-light`) | `.site-section` default vs `bg-light` variant |
| Page background | `#ffffff` | Body default |
| Font — body | `"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif` | CSS body font-family |
| Font — display/headings | `"Playfair Display"` | CSS h1 `.site-blocks-cover h1` |
| Font — serif accent | `"Vollkorn", serif` | Used in select elements |
| Button shape | Default Bootstrap radius (`0.25rem`), no custom radius overrides in `style.css` | Bootstrap 4 defaults |
| Button size | `py-2 px-5` for CTA buttons; inline for smaller | `btn-block btn-primary text-white py-2 px-5` |

## Section Order (1:1 from source)

| # | ID / class | Description | Fidelity notes |
|---|---|---|---|
| 1 | `nav` (sticky top) | Navbar: brand "Coach" left, links right (Home, About, Our Training, Testimonials, Gallery, Blog, More Links dropdown). Mobile hamburger. | Recreate with responsive Tailwind nav. Replace "More Links" dropdown with appropriate links. |
| 2 | `.site-blocks-cover` | Hero: yellow background (`#ffdd40`), typed-words animation ("We are [Coach/Trainer/Mentor]"), subtext + Contact us CTA link. | Implement typed-text effect with a small hook or library. Match yellow overlay. |
| 3 | Owl carousel (hero images) | 3 hero images in an auto-rotating carousel, overlapping hero section with negative margin (`margin-top: -7%`). | Use a React carousel (e.g. Embla or Swiper). Images from `picsum.photos`. |
| 4 | `#about-section` | About: 2-column. Left: heading "Hey there, I'm John The Founder" + bio paragraphs + signature image. Right: "Upcoming Speaking Gigs" list (event name + location/date). Below: 4 team member cards (circular photo + name + blurb). | 4-column grid for team. Circular photos via `rounded-full`. Signature as decorative image. |
| 5 | `#training-section` `.bg-light` | Training: centered heading + description, carousel of training cards (image + title + text). | Background `#f8f9fa`. Carousel for training items. 3+ cards. |
| 6 | `#services-section` | Services: centered heading + description, carousel of service cards (icon + title + text). Flaticon icons → use `lucide-react`. | Match icon + title + text card layout. |
| 7 | `#gallery-section` | Gallery: centered heading + description, grid of 12 images (4 cols on xl, 2 cols on sm, lightbox on click). | Use `picsum.photos` for images. Implement lightbox or simple overlay. |
| 8 | `#testimonials-section` | Testimonials: centered heading, carousel of testimonial cards (blockquote + circular photo + name). | Match quote styling. 2+ testimonials. |
| 9 | `#blog-section` | Blog: centered heading + description, 3 blog entries (horizontal: image left + title + date + excerpt + "Read More" link). | `picsum.photos` for blog images. Responsive: stacked on mobile. |
| 10 | `footer.site-footer` | Footer: 3 columns — About Us (text), Quick Links (nav list), Follow Us (social icons) + Newsletter subscription (email input + Send button). Copyright bar. | Social icons via `lucide-react`. Newsletter form. Component Dock link in copyright. |

## Gherkin Requirements

### Feature: Mentora Template

#### Scenario: Page renders all sections in correct order
- Given the user visits the Mentora homepage
- Then the page displays a sticky navbar at the top
- And a hero section with a yellow background follows
- And a hero image carousel follows the hero text
- And an About section follows the carousel
- And a Training section follows the About section
- And a Services section follows the Training section
- And a Gallery section follows the Services section
- And a Testimonials section follows the Gallery section
- And a Blog section follows the Testimonials section
- And a Footer section is at the bottom

#### Scenario: Navbar is sticky and responsive
- Given the user scrolls down the page
- Then the navbar remains fixed at the top of the viewport
- And on mobile viewport the nav links collapse into a hamburger menu
- And clicking the hamburger toggles the mobile nav open/closed

#### Scenario: Hero section displays typed text animation
- Given the user views the hero section
- Then the heading shows "We are " followed by a cycling word
- And the cycling words include variations like "Coach", "Trainer", "Mentor"
- And a subtitle paragraph appears below the heading
- And a "Contact us" link is visible

#### Scenario: Hero image carousel auto-rotates
- Given the user views the hero section
- Then 3 hero images are displayed in a carousel
- And the carousel auto-advances to the next image
- And carousel navigation dots or arrows are available

#### Scenario: About section shows founder info and team
- Given the user scrolls to the About section
- Then a heading "Hey there, I'm John The Founder" is displayed
- And 2-3 bio paragraphs appear in the left column
- And a signature image appears below the bio
- And an "Upcoming Speaking Gigs" list appears in the right column
- And 4 team member cards appear below with circular photos and names

#### Scenario: Training section displays cards in carousel
- Given the user scrolls to the Training section
- Then the section has a light gray background
- And a centered heading "Our Training" is displayed
- And 3+ training cards are shown in a carousel
- And each card has an image, title, and description text

#### Scenario: Services section displays service cards
- Given the user scrolls to the Services section
- Then a centered heading "Our Services" is displayed
- And 3+ service cards are shown in a carousel
- And each card has an icon, title, and description text
- And icons use lucide-react components

#### Scenario: Gallery section displays image grid with lightbox
- Given the user scrolls to the Gallery section
- Then a centered heading "Gallery" is displayed
- And 12 images are shown in a responsive grid
- And the grid shows 4 columns on extra-large screens
- And clicking an image opens a lightbox/overlay

#### Scenario: Testimonials section displays quote cards
- Given the user scrolls to the Testimonials section
- Then a centered heading "Happy Customers" is displayed
- And 2+ testimonial cards appear in a carousel
- And each card shows a blockquote, circular photo, and person name

#### Scenario: Blog section displays entries
- Given the user scrolls to the Blog section
- Then a centered heading "Our Blog" is displayed
- And 3 blog entries are shown in a 2-column grid
- And each entry has an image, title, date, excerpt, and "Read More" link
- And entries are horizontally laid out on desktop (image left, text right)

#### Scenario: Footer has three columns and newsletter
- Given the user scrolls to the footer
- Then the footer displays an "About Us" column with descriptive text
- And a "Quick Links" column with navigation links
- And a "Follow Us" column with social media icons
- And a newsletter subscription form with email input and Send button
- And the footer contains a copyright notice
- And the footer links to Component Dock

#### Scenario: Page is responsive on mobile
- Given the user views the page on a 375px wide viewport
- Then all sections stack vertically
- And the navbar shows a hamburger menu
- And carousels show one item at a time
- And the gallery grid shows 2 columns
- And blog entries stack vertically

## Verification Checklist

- [ ] All 10 sections render in correct order
- [ ] Navbar is sticky, responsive, has hamburger on mobile
- [ ] Hero has yellow (`#ffdd40`) background with typed text animation
- [ ] Hero carousel shows 3 images and auto-rotates
- [ ] About section has 2-column layout with team cards
- [ ] Training section has `bg-light` background with card carousel
- [ ] Services section has icon cards in carousel
- [ ] Gallery has 12 images in responsive grid with lightbox
- [ ] Testimonials show quote cards in carousel
- [ ] Blog entries show 3 items with horizontal layout on desktop
- [ ] Footer has 3 columns, social icons, newsletter form, Component Dock link
- [ ] All images use `picsum.photos` placeholders
- [ ] No references to ColorLib in app code
- [ ] Tailwind theme tokens match extracted design tokens
- [ ] Responsive on mobile (375px) and desktop (1440px)
- [ ] `npm run test:coverage` passes at 100%
- [ ] `npm run build` succeeds
- [ ] Footer links to `https://www.componentdock.com/`
