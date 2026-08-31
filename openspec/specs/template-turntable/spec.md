# Template: Turntable (Testimonials Carousel)

## Purpose

Turntable is a single-section testimonials carousel page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Carousel 08"
website template design (see TEMPLATES.md), built under a different name with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Carousel 08" — testimonials carousel component, Carousel
  category (source: https://colorlib.com/wp/template/carousel-08/).
- **Preview URL:** `https://preview.colorlib.com/theme/bootstrap/carousel-08/` —
  HTTP 200, full rendered DOM (15 KB) fetched with curl. Page title: "Carousel 08".
  Stylesheets: `css/owl.carousel.min.css`, `css/owl.theme.default.min.css`,
  `css/animate.css`, `css/style.css` (main, 224 KB — includes bundled Bootstrap
  4.3.1). Fonts are **"Poppins"** (sans-serif, body — 14px/1.8 weight 400) and
  **"Playfair Display"** (serif, testimonial quotes — 39px weight 700) via
  Cloudflare Fonts. Carousel powered by Owl Carousel JS.
- **Screenshot:** `carousel-08.jpg` (from TEMPLATES.md) — shows a centered heading
  "Carousel #08" with a testimonial card below: left half is a person photo, right
  half is a white card with a large serif quote and gold author name. Dots below
  the carousel.
- **Visual design (from DOM + CSS tokens + screenshot):** Clean, minimal
  testimonials section on a very light gray `rgba(0, 0, 0, 0.05)` background.
  Single centered section with generous `7em` vertical padding. Heading is 28px
  regular-weight Poppins, centered. Carousel cards are full-width within a
  `col-md-11` column, split 50/50 (image left, text right) with a soft box shadow
  (`0px 10px 40px -30px rgba(0, 0, 0, 0.42)`). Image side uses a background-image
  covering 600px height (450px on mobile). Text side is white with centered content:
  the quote uses Playfair Display 39px bold, author name in brand gold `#dbcc8f`
  20px medium, and position label in muted gray. Navigation dots are 10px circles
  with 1px black border; active dot fills with `#dbcc8f`. Arrow navigation is
  subtle (black 20% opacity, transitions to gold on hover). The original has NO
  navbar, NO footer — purely a carousel component demo.

## Design tokens

| Token             | Value                                  | Usage                               |
| ----------------- | -------------------------------------- | ----------------------------------- |
| Brand color       | `#dbcc8f` (warm gold/tan)              | Links, active dots, author name     |
| Font — body       | "Poppins", sans-serif                  | Body text, headings, all UI         |
| Font — accent     | "Playfair Display", serif              | Testimonial quote text (h3)         |
| Body text color   | `gray` (#808080)                       | Body copy, position labels          |
| Heading color     | `#000` (black)                         | Section heading, quote text         |
| Page background   | `rgba(0, 0, 0, 0.05)`                  | Very light gray                     |
| Card background   | `#fff` (white)                         | Testimonial text panel              |
| Card shadow       | `0px 10px 40px -30px rgba(0,0,0,0.42)` | Soft elevated shadow                |
| Card image height | 600px (desktop), 450px (mobile)        | Person photo background-image       |
| Quote font size   | 39px, weight 700                       | Playfair Display testimonial text   |
| Author name       | 20px, weight 500, color #dbcc8f        | Attribution name                    |
| Dot size          | 10px circle, 1px border #000           | Carousel pagination                 |
| Active dot        | background + border = #dbcc8f          | Current slide indicator             |
| Arrow color       | rgba(0, 0, 0, 0.2) → #dbcc8f           | Navigation arrows, hover transition |
| Border radius     | 0 (no rounded corners)                 | Cards, buttons                      |
| Section padding   | 7em 0                                  | ftco-section vertical rhythm        |

## Gherkin requirements

### Scenario: Section renders with heading

```gherkin
Given the page loads
When the testimonials section is displayed
Then a centered heading "Carousel #08" (or equivalent) is visible
And the section has generous vertical padding (~7em)
And the background is a very light gray
```

### Scenario: Carousel displays testimonial cards

```gherkin
Given the testimonials section is rendered
When the carousel is visible
Then there are at least 3 testimonial slides
And each slide contains a 50/50 split layout (image left, text right)
And each image uses a background-image covering its container
And each text panel has a white background with centered content
```

### Scenario: Testimonial card content structure

```gherkin
Given a testimonial card is displayed
Then the quote text is rendered in a serif font (Playfair Display)
And the quote text is large (~39px) and bold
And the author name is displayed below the quote
And the author name uses the brand gold color (#dbcc8f)
And the author position/title is shown in muted gray text below the name
```

### Scenario: Carousel navigation dots

```gherkin
Given the carousel has multiple slides
When the pagination dots are displayed
Then there is one dot per slide
And dots are small circles (~10px) with a dark border
And the active slide's dot is filled with the brand gold color
And clicking a dot navigates to the corresponding slide
```

### Scenario: Carousel auto-advances

```gherkin
Given the carousel is displayed
When the user waits
Then the carousel auto-advances to the next slide after a timeout
And the transition is smooth (animated)
```

### Scenario: Carousel arrow navigation

```gherkin
Given the carousel is displayed
When the user hovers over the left/right arrow areas
Then previous/next navigation arrows appear
And the arrows transition to the brand gold color on hover
And clicking an arrow navigates to the previous/next slide
```

### Scenario: Responsive layout

```gherkin
Given the page is viewed on a mobile device (< 768px)
Then the testimonial card stacks vertically (image on top, text below)
And the image height reduces to ~450px
And carousel controls remain accessible
And the heading and text remain centered and readable
```

### Scenario: No navbar or footer present

```gherkin
Given the page loads
Then there is NO navigation bar
And there is NO footer section
And the page consists solely of the testimonials carousel section
```

## Verification checklist

- [ ] Heading is centered, 28px, Poppins, regular weight
- [ ] Background is very light gray rgba(0, 0, 0, 0.05)
- [ ] Section padding matches ~7em vertical
- [ ] Carousel displays 3 testimonial slides
- [ ] Each slide: 50/50 split (image left, text right) inside col-md-11
- [ ] Image panel: background-image, cover, 600px height (450px mobile)
- [ ] Text panel: white background, centered, soft box shadow
- [ ] Quote text: Playfair Display, 39px, weight 700, black
- [ ] Author name: 20px, weight 500, brand gold #dbcc8f
- [ ] Position label: muted gray, smaller text
- [ ] Dots: 10px circles, black border, active = gold fill
- [ ] Arrow navigation: subtle black → gold on hover
- [ ] Responsive: mobile stacks vertically, image 450px
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
