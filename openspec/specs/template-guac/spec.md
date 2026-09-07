# Template: Guac (Creative Agency Portfolio)

## Purpose

Guac is a single-page creative agency portfolio template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Avo" free template (source:
https://colorlib.com/wp/template/avo/), built under a DIFFERENT name
(**Guac**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

Preview: https://preview.colorlib.com/theme/avo/

The original is a Bootstrap 4 creative agency / personal portfolio
template with a full-width image slider hero (with diagonal angular cuts),
about/services section, portfolio grid with alternating image-text layout,
testimonials carousel, call-to-action banner, blog grid, and a dark footer
with multi-column links. The design uses Nunito Sans as the primary font,
a Bootstrap blue (#007bff) as the primary action color, and a red accent
(#d1002c) for subheadings and numbered service items. The hero has a dark
overlay on background images with a counter stat display and diagonal
angular cuts (.degree-right / .degree-left). The footer is solid black
with white/semi-transparent text.

## Source mapping

- **ColorLib source:** Avo
- **Preview URL:** https://preview.colorlib.com/theme/avo/
- **Screenshot URL:** https://colorlib.com/wp/wp-content/uploads/sites/2/avo-free-templatel.jpg (note: URL has a trailing 'l' typo in the original; image returned 404 at time of spec creation)
- **New name:** guac
- **App folder:** apps/guac
- **Package:** @free-react-templates/guac
- **Homepage:** https://guac.free.componentdock.com

## Design tokens

Extracted from the live preview CSS (css/style.css):

### Colors

| Token                    | Value                       | Usage                                                               |
| ------------------------ | --------------------------- | ------------------------------------------------------------------- |
| Primary (Bootstrap blue) | #007bff                     | `.btn-primary` background, link hover                               |
| Primary hover            | #0069d9                     | Button hover state                                                  |
| Primary dark             | #0062cc                     | Button border hover                                                 |
| Accent red               | #d1002c                     | `.heading-section .subheading`, `.services-2 span` (numbered items) |
| Body text                | #000 / #1a1a1a / #212529    | Main text color                                                     |
| Muted text               | #6c757d / #a0a0b4           | Secondary text, meta info                                           |
| Section bg (light)       | #f7f7f7 / #f8f9fa / #f2f2f2 | `.bg-light` sections (portfolio, blog)                              |
| Hero overlay             | rgba(0,0,0,0.5) approx      | Dark overlay on hero images                                         |
| Footer bg                | #000000 (black)             | `.ftco-footer` background                                           |
| Footer text              | rgba(255,255,255,0.5)       | Footer link/text color                                              |
| Footer heading           | #fff                        | Footer widget headings                                              |
| White                    | #fff                        | Main content background, service icon containers                    |

### Typography

| Token              | Value                            |
| ------------------ | -------------------------------- |
| Font family        | "Nunito Sans", Arial, sans-serif |
| Heading weight     | 900 (extrabold)                  |
| Body weight        | 400 (regular)                    |
| Services-2 number  | 50px, weight 300, color #d1002c  |
| Heading section h2 | 36px, weight 900                 |
| Subheading         | 12px, color #d1002c, uppercase   |

### Buttons & Interactive

| Token                     | Value                                                       |
| ------------------------- | ----------------------------------------------------------- |
| `.btn-primary` bg         | #007bff                                                     |
| `.btn-primary` color      | #fff                                                        |
| `.btn-primary` radius     | 0.3rem (Bootstrap default)                                  |
| `.btn-primary` padding    | py-md-3 py-2 px-2 px-md-4                                   |
| `.custom-btn` (portfolio) | uppercase, 11px, letter-spacing 3px, color #000, weight 700 |
| Hover transition          | 0.3s ease                                                   |

### Layout

| Token                    | Value                                                                   |
| ------------------------ | ----------------------------------------------------------------------- |
| `.ftco-section` padding  | 12em 0 (6em on mobile)                                                  |
| `.hero-wrap` height      | 850px                                                                   |
| `.portfolio-wrap` height | 500px (550px for images)                                                |
| `.ftco-footer` padding   | 7em 0                                                                   |
| Hero diagonal cut        | `.degree-right:after` / `:before` — 50px white triangle pseudo-elements |
| Footer diagonal cut      | `.degree-left-footer` — same technique                                  |
| Grid                     | Bootstrap 12-col, `no-gutters` on portfolio                             |

### Section backgrounds

| Section               | Background                                                     |
| --------------------- | -------------------------------------------------------------- |
| Hero                  | Background image + dark overlay + diagonal white cut at bottom |
| About/Services        | White                                                          |
| Portfolio (Our Works) | White (alternating rows: image left/text right, then reversed) |
| Testimonials          | White (carousel)                                               |
| CTA banner            | White (with diagonal cuts)                                     |
| Blog                  | #f7f7f7 light gray                                             |
| Footer                | Black                                                          |

## Gherkin requirements

### Feature: Guac Template — Creative Agency Portfolio

#### Section order (top to bottom)

1. Navbar (sticky, dark bg, brand logo "guac" with styled 'v', nav links)
2. Hero (full-width slider with background images, dark overlay, counter stats, CTA buttons, video play button)
3. About / Services (section heading, 5-column service cards with icons, about text with image, numbered SEO services)
4. Portfolio / Our Works (heading, 4 portfolio items in alternating image-text rows, each with category tag, title, description, author, "View Portfolio" link)
5. Testimonials (heading, carousel of testimonial cards with quote icon, text, user avatar, name, position)
6. CTA Banner (call-to-action with "Get Started" heading, description, primary button)
7. Blog (heading, 4 blog cards in a row with image, title, date, author, comment count, excerpt)
8. Footer (black bg, multi-column: brand + social, Community links, About Us links, Company links, Contact info, copyright line)

#### Scenario: Navbar renders correctly

```
Given the page loads
Then the navbar displays the brand text "guac" with the "v" styled differently
And the navbar contains links: Home, About, Work, Blog, Contact
And the navbar has a dark background
And the navbar is sticky on scroll
And the mobile hamburger menu toggles navigation
```

#### Scenario: Hero slider displays

```
Given the page loads
Then the hero section shows a full-width background image with dark overlay
And the hero displays a counter stat (e.g. "400" projects) with label text
And the hero shows a heading "We Create Modern & Minimal Website"
And the hero shows a subtitle paragraph
And the hero shows a primary CTA button ("Start Project" / "Explore Projects")
And the hero has a diagonal white angular cut at the bottom
And the hero contains a video play button linking to a video URL
```

#### Scenario: About / Services section renders

```
Given the user scrolls to the About section
Then the section displays heading "About us"
And 5 service cards are shown in a row with icons: UI/UX Design, Web Development, Product Design, Mobile Apps, SEO
And each service card has an icon, title, and description
And below the services, an about block shows "Welcome to [Brand] A Personal Portfolio Web Agency" with an image and text
And a "View all projects" primary button is displayed
And 3 numbered services appear (01, 02, 03) with red number accent and "Search Engine Optimization" titles
```

#### Scenario: Portfolio section renders

```
Given the user scrolls to the Our Works section
Then the section displays heading "Our Works"
And 4 portfolio items are shown in alternating layout rows
And each portfolio item has a background image, category tag, title, description, author avatar, author name, and "View Portfolio" link
And the first item shows category "Web Design" with title "Cassette tape"
And the second item shows category "Application" with title "Miniwall Clock"
And the layout alternates between image-left/text-right and image-right/text-left
```

#### Scenario: Testimonials section renders

```
Given the user scrolls to the Testimonials section
Then the section displays heading "Clients Says About Us?"
And a carousel of testimonial cards is shown
And each card has a quote icon, testimonial text, user avatar, name, and position
And the carousel auto-plays or has navigation dots/arrows
```

#### Scenario: CTA banner renders

```
Given the user scrolls to the CTA section
Then the section displays "Get Started" as a subheading
And the heading reads "Fill in the brief and get the project estimate"
And a description paragraph is shown
And a primary "Get started" button is displayed
```

#### Scenario: Blog section renders

```
Given the user scrolls to the Recent Blog section
Then the section displays heading "Recent Blog"
And 4 blog cards are shown in a row
And each card has an image, title, date, author, comment count, and excerpt
And the section has a light gray background (#f7f7f7)
```

#### Scenario: Footer renders

```
Given the user scrolls to the footer
Then the footer has a black background
And the footer contains the brand name "guac"
And the footer shows social media icons (Twitter, Facebook, Instagram)
And the footer has columns: Community (Projects, Team, Reviews, FAQs), About Us (Our Story, Meet the team, Careers), Company (About Us, Press, Contact, Careers)
And the footer has a "Have a Questions?" column with address, phone, and email
And the footer shows a copyright line
And the footer links to https://www.componentdock.com/
```

#### Scenario: Responsive layout

```
Given the page is viewed on a mobile device
Then the navbar collapses to a hamburger menu
And the hero section adjusts to full-width
And service cards stack vertically
And portfolio items stack vertically (image above text)
And blog cards stack vertically
And footer columns stack vertically
```

## Verification checklist

- [ ] Spec created with correct source mapping (Avo → guac)
- [ ] All design tokens extracted from live preview CSS documented
- [ ] Section order matches original exactly
- [ ] Gherkin scenarios cover all sections
- [ ] New name "guac" does not collide with existing apps/ or specs/
- [ ] Screenshot analyzed (URL 404 — noted in spec; live preview DOM used as primary reference)
- [ ] Preview URL verified: https://preview.colorlib.com/theme/avo/
