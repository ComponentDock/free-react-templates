# Boxstudio — Implementation Tasks

Source: ColorLib "Boxus" (https://colorlib.com/wp/template/boxus/)
Preview: https://preview.colorlib.com/theme/boxus/ (404 at prep; used screenshot + live HTML/CSS)
New name: boxstudio (apps/boxstudio, @free-react-templates/boxstudio)

## Design tokens (from live CSS)

- Headings: Montserrat 400/700
- Body: Roboto 300/400/700/900
- Accent: PT Serif 400
- Primary: #221c5a (deep indigo)
- Primary dark: #23214c
- Accent pink: #ee87a4 / #e54b76 / #e64b77
- Accent green: #32DB8A / #55B286
- Accent gold: #e3a436
- Muted purple: #5b5881 / #8e8da9
- Gray: #9a9a9a
- Body dark: #191919
- White: #fff
- Section padding: 100px 0
- Border radius: none (flat/sharp design)

## Section-by-section fidelity notes

### 1. Navbar

- Sticky, dark indigo (#221c5a) full-width bar
- Logo: "Boxstudio" text, white, Montserrat bold
- Nav links: Home, Services, Portfolio, About, News, Video, Skills, Contact
- White text, Roboto, no underline
- Hamburger on mobile (animate menu icon)

### 2. Hero

- Full-width, min-height ~100vh
- Background image with dark indigo overlay (~0.85 opacity)
- Centered: large white Montserrat headline, Roboto subtitle
- "Contact" CTA button: pink (#e54b76) bg, white text, no border-radius
- CTA links to #contact section

### 3. Services

- White bg, 100px vertical padding
- Left: section number badge (01) + "Services" heading (Montserrat)
- Right: horizontal slider or grid of 8 service cards
- Cards: icon (lucide-react), uppercase title (Montserrat), description (Roboto)
- Service titles: Branding, Mobile Apps, Web, Graphic, Services, PSD, HTML, PHP
- Navigation arrows for slider

### 4. Portfolio

- Light bg, numbered "02" + "Portfolio" heading
- Filterable grid (3 columns desktop, 1 mobile)
- Each item: thumbnail (picsum.photos), overlay label "PSD MOCKUP", title
- "LOAD MORE" button: outline style, centered
- Hover: image zoom + overlay darken

### 5. About (Crafters)

- White bg, numbered "CRAFTERS" / "03" + "About" heading
- Left: paragraph text (Roboto)
- Right: vertical timeline with line + dot markers
- Timeline entries: year range + company name + brief description
- Dates: 2001-2003, 2003-2006, 2006-2010, 2010-2013, 2013-2016
- PT Serif for quote/accent text

### 6. Team

- Light gray bg, numbered "04" + "Team" heading
- 3 member cards in a row (1 per column on mobile)
- Circular photo, name (Montserrat bold), role (Roboto muted)
- Members: Robert Williams, John Doe, John Doe

### 7. News/Stories

- White bg, numbered "05" + "STORIES" heading
- Blog post cards with thumbnail, date, title, excerpt
- 3-column grid on desktop, stacked on mobile

### 8. Video/Offer

- Full-width background image, dark overlay
- Numbered "05 OFFER" + "Video" heading
- Descriptive text paragraph centered
- CTA button to contact

### 9. Skills/Expertise

- White bg, numbered "06" + "Skills" heading
- Description paragraph
- 4 horizontal progress bars:
  - HTML: 81%
  - CSS: 93%
  - PSD: 72%
  - DESIGN: 99%
- Green (#32DB8A) fill, gray track
- Bars animate on scroll into view

### 10. Contact

- Background image, dark overlay
- Numbered "07" + "Contact" heading
- Description text
- Form: Name, Email, Subject, Message (textarea) + Submit
- Contact info: address, phone, email displayed alongside
- Form validation with error states

### 11. Footer

- Dark background (matches navbar #221c5a or darker)
- Copyright text centered
- Component Dock link ("Made with Component Dock")
- Social media icons (lucide-react)

## Implementation order

1. Scaffold app from simplest existing template (copy apps/aurora or similar)
2. Set up theme tokens in index.css (@theme block with brand colors, fonts)
3. Navbar component
4. Hero component (background image + overlay + text + CTA)
5. Services section (8 cards, slider or grid)
6. Portfolio section (grid + filter + load more)
7. About section (timeline component)
8. Team section (member cards)
9. News section (blog cards)
10. Video/Offer section (background image + overlay)
11. Skills section (progress bars with animation)
12. Contact section (form + validation)
13. Footer
14. App.tsx composition
15. Tests (TDD: write tests per component)
16. Mobile responsive adjustments
17. Vite config with injectUiSource()
18. Run verify-app.sh for typecheck + lint + coverage + build
