# Template: Presscast (Magazine / News)

## Purpose

Recreation of ColorLib template **Megasis** — a magazine/news website template
with multiple article sections, video content, and newsletter subscription.

- **Source**: https://colorlib.com/wp/template/megasis/
- **Preview**: https://preview.colorlib.com/theme/megasis/
- **Stack**: Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Source slug**: `megasis`
- **Template name**: `presscast` (NEW — never reuse ColorLib source name)

## Design tokens

Extracted from the live preview at https://preview.colorlib.com/theme/megasis/assets/css/style.css

| Token                          | Value                             | Usage                                              |
| ------------------------------ | --------------------------------- | -------------------------------------------------- |
| Brand color (primary)          | `#C70D0D` (deep red)              | Buttons, accent highlights, section-tittle accents |
| Heading color                  | `#131313` (near-black)            | All h1–h6 elements                                 |
| Body text color                | `#646464` (medium gray)           | Paragraph text                                     |
| Secondary text                 | `#635c5c` (warm gray)             | Metadata, bylines                                  |
| Footer bg                      | `#f7f7f7` (light gray)            | Footer-area background                             |
| Footer top border              | `4px solid #131313`               | Footer-area top border accent                      |
| Button bg (boxed-btn)          | `#fff` bg + `1px solid #C70D0D`   | Border-style buttons, hover inverts                |
| Button hover bg                | `#C70D0D`                         | Filled red on hover                                |
| Section background (subscribe) | `#f7f7f7` / light gray            | Subscribe section bg                               |
| Font — headings                | `"Chivo", sans-serif`             | All headings, navigation                           |
| Font — body                    | `"Shippori Mincho", serif`        | Body paragraphs, metadata                          |
| Button shape                   | Square (no border-radius visible) | `.boxed-btn` — flat, no radius                     |
| Heading font weight            | 500 (normal)                      | h1–h6                                              |
| Body font size                 | 16px                              | Default paragraph                                  |
| Body line height               | 30px                              | Paragraphs                                         |

## Requirements

### Header

#### Scenario: Top bar with logo, social links, and sign-in

- **GIVEN** a visitor loads the homepage
- **THEN** they see a header top bar with a logo centered
- **AND** social media icon links (Facebook, Instagram, Twitter, YouTube, Vimeo, LinkedIn) on the right
- **AND** a "Sign in" button/link on the far right

#### Scenario: Sticky navigation with category links

- **GIVEN** the header-bottom sticky nav bar
- **THEN** it shows the logo on the left
- **AND** category navigation links: Home, Science, Technology, Beauty, Health, Arts & Culture, Opinion, Videos, Gallery
- **AND** a search input field on the right

### What's New Section

#### Scenario: Featured article with sidebar

- **GIVEN** the "What's News" section
- **THEN** a large featured article is displayed on the left (7 columns) with image, category tag, headline, and author byline
- **AND** three smaller article cards on the right (5 columns) each with image, category tag, headline, and author

### Technology / Article Grid Section

#### Scenario: Category article grid (Arts & Culture)

- **GIVEN** the "Arts & Culture" technology section
- **THEN** it displays a section title with a "See All" link on the right
- **AND** a 3-column grid of article cards each with image, category tag, headline, author byline

#### Scenario: Second technology section (4 articles)

- **GIVEN** the second technology section
- **THEN** it displays a section title with "See All" link
- **AND** a 4-column grid of article cards with image, category tag, headline, author
One article card may have a video play icon overlay

### What's New Section 2 (Video Focus)

#### Scenario: Video article with sidebar

- **GIVEN** the second "What's News" section (video-focused)
- **THEN** a large video article is displayed on the left with a play icon overlay
- **AND** three smaller article cards on the right

### Newsletter / Subscribe Section

#### Scenario: Newsletter subscription form

- **GIVEN** the newsletter section at the bottom of main content
- **THEN** it displays "Subscribe to the newsletter" heading
- **AND** descriptive text about the digest
- **AND** an email input field with "Enter your mail" placeholder
- **AND** a "Send Now" button
- **AND** a disclaimer/privacy text below the form
- **AND** the section has a light gray background (#f7f7f7)

### Footer

#### Scenario: Footer with navigation columns

- **GIVEN** the footer area
- **THEN** it displays four columns: About, Categories, Categories, Newsletter
Each column has a heading and list of links
The footer has a light gray background (#f7f7f7)
- **AND** a 4px solid top border in near-black

#### Scenario: Footer copyright

- **GIVEN** the footer-bottom area
- **THEN** it shows copyright text centered
- **AND** the template attribution is replaced with "Made with ❤️ by Component Dock"
- **AND** links to https://www.componentdock.com/

## Verification checklist

- [ ] Header top bar: logo, social icons, sign-in link
- [ ] Sticky nav: logo, category links, search input
- [ ] What's News section: featured article left, 3 sidebar articles right
- [ ] Technology grid: "Arts & Culture" with 3 article cards + "See All"
- [ ] Second technology grid: 4 article cards (one with video icon)
- [ ] What's News 2: video article left with play icon, 3 sidebar articles right
- [ ] Newsletter: heading, email input, "Send Now" button, disclaimer
- [ ] Footer: 4 columns, light gray bg, top border
- [ ] Footer copyright: links to componentdock.com
- [ ] Brand color #C70D0D used for buttons and accents
- [ ] Font: Chivo for headings/nav, Shippori Mincho for body text
- [ ] No references to ColorLib in app code (provenance in spec only)
- [ ] Placeholder images use picsum.photos
- [ ] Footer links to https://www.componentdock.com/
