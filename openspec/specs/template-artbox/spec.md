# Template: ArtBox (Creative Agency)

## Purpose

Recreation of ColorLib **Boxus** — a creative digital agency one-page template.
- **Source:** https://colorlib.com/wp/template/boxus/
- **Preview:** https://preview.colorlib.com/theme/boxus/
- **New name:** `artbox` (apps/artbox, @free-react-templates/artbox)
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript

## Design tokens (extracted from live preview CSS)

| Token | Value | Usage |
|---|---|---|
| Brand primary | `#e54b76` / `#e64b77` | Accent color, section year markers, hover states |
| Brand secondary | `#727190` | Muted text, timeline descriptions |
| Dark background | `#221C5A` / `#23214c` | Hero/intro section background, dark panels |
| Accent green | `#55B286` / `#32DB8A` | Skills progress bar (HTML) |
| Accent gold | `#E3A536` / `#FFBB42` / `#FFBA42` | Skills progress bar (CSS), Video section year markers |
| Accent pink (darker) | `#B24564` / `#E74C78` | Skills progress bar (PSD) |
| Accent blue | `#468ac7` / `#4C9EE7` | Skills progress bar (Design) |
| Text dark | `#191919` | Body text |
| Text light | `#9a9a9a` | Contact description, secondary text |
| White | `#fff` | Headings, hero text |
| Fonts | `'Montserrat', sans-serif` (headings/nav), `'PT Serif', serif` (body/content) |
| Border radius | None observed — square/sharp edges throughout |
| Hero background | Dark purple `#221C5A` with diagonal image overlay |
| Section layout | Alternating left/right aligned section titles with numbered indicators (01–07) |

## Section structure (from live DOM)

1. **Navbar** — Fixed top, white text on transparent/dark bg, links: Home, Services, Portfolio, About, News, Video, Skills, Contact
2. **Hero/Intro** — Full-viewport dark purple bg with diagonal image, centered logo (white box frame "B°"), headline + subtext, no CTA button
3. **Services (01)** — Left section title, right content: carousel of 4 service cards per slide (icon + title + description), 2 slides (8 services total: Branding, Mobile Apps, Web, Graphic, Services, PSD, HTML, PHP)
4. **Portfolio (02)** — Right section title, masonry grid (2-col: p_one + p_one_half items), overlay text on hover (type icon + category + title), "LOAD MORE" button
5. **CRAFTERS/About (03)** — Left section title, 2-column layout: left = about text, right = timeline with pink year markers + purple descriptions; below: full-width image carousel + team member carousel (3 members: Robert Williams/Lead Designer, John Doe/SEO Master, John Doe/PSD Guru)
6. **STORIES/Blog (04)** — Right section title, numbered blog list (4 entries with num, author, category tag, title), "GO TO BLOG" link; below: testimonial carousel (3 quotes by Scott Hanselman, Tom Bissel, Steven Heller)
7. **OFFER/Video (05)** — Left section title, 2-column: text + timeline with gold year markers; below: video thumbnail with play button popup (Vimeo embed), feature icon carousel (7 items: Video Editing, Premium Cleer, For All Displays, Right On Time, Innovative Ideas, Perfect Sound, 3D Solution)
8. **EXPERTISE/Skills (06)** — Right section title, description text + 4 animated progress bars (HTML 81% green, CSS 93% gold, PSD 72% pink, Design 99% blue)
9. **Contact (07)** — Left section title, 2-column: left = description text, right = contact form (Name, Email, Subject, Message, SEND button); below: full-width Google Maps iframe
10. **Footer** — Copyright line + social icons (Twitter, Behance, Dribbble, Facebook, RSS)

## Gherkin scenarios

### Navbar
```gherkin
Scenario: Navbar displays all section links
  Given the page loads
  When I view the navigation bar
  Then I see links for Home, Services, Portfolio, About, News, Video, Skills, and Contact

Scenario: Navbar scrolls to section on click
  Given the page is loaded
  When I click "Services" in the navbar
  Then the page scrolls to the Services section
```

### Hero
```gherkin
Scenario: Hero displays headline and subtext
  Given the page loads
  When I view the hero section
  Then I see a headline about web and graphic design solutions
  And I see supporting subtext

Scenario: Hero has dark purple background with image overlay
  Given the page loads
  When I view the hero section
  Then the background is dark purple (#221C5A) with a diagonal image overlay
```

### Services
```gherkin
Scenario: Services section shows numbered title
  Given the page loads
  When I scroll to the Services section
  Then I see section number "01" and title "Services"

Scenario: Services displays cards in a carousel
  Given the Services section is visible
  When I view the service cards
  Then I see 4 cards per slide with icon, title, and description
  And I can navigate to a second slide with 4 more services
```

### Portfolio
```gherkin
Scenario: Portfolio shows masonry grid
  Given the page loads
  When I scroll to the Portfolio section
  Then I see a masonry grid of portfolio items with overlay text

Scenario: Portfolio has load more button
  Given the Portfolio section is visible
  When I view the bottom of the grid
  Then I see a "LOAD MORE" button
```

### About/Crafters
```gherkin
Scenario: About section shows team info
  Given the page loads
  When I scroll to the CRAFTERS section
  Then I see section number "03" and title "CRAFTERS"
  And I see about text and a timeline with year markers

Scenario: About section has team carousel
  Given the CRAFTERS section is visible
  When I view the team area
  Then I see team member cards with name, position, and bio in a carousel
```

### Blog/Stories
```gherkin
Scenario: Blog shows numbered entries
  Given the page loads
  When I scroll to the STORIES section
  Then I see 4 blog entries each with number, author, category, and title

Scenario: Blog has testimonial carousel
  Given the STORIES section is visible
  When I view the testimonials area
  Then I see rotating quotes with author attribution
```

### Video/Offer
```gherkin
Scenario: Video section has embed thumbnail
  Given the page loads
  When I scroll to the OFFER section
  Then I see a video thumbnail with a play button overlay

Scenario: Video section has feature carousel
  Given the OFFER section is visible
  When I view the feature icons
  Then I see a horizontal carousel of 7 feature items with icon and label
```

### Skills/Expertise
```gherkin
Scenario: Skills shows progress bars
  Given the page loads
  When I scroll to the EXPERTISE section
  Then I see 4 progress bars for HTML, CSS, PSD, and Design with percentage labels

Scenario: Progress bars use distinct colors
  Given the EXPERTISE section is visible
  When I view the progress bars
  Then HTML is green, CSS is gold, PSD is pink, and Design is blue
```

### Contact
```gherkin
Scenario: Contact section has form
  Given the page loads
  When I scroll to the Contact section
  Then I see a form with Name, Email, Subject, Message fields and a SEND button

Scenario: Contact section has map
  Given the Contact section is visible
  When I view below the form
  Then I see a Google Maps embed
```

### Footer
```gherkin
Scenario: Footer has copyright and social links
  Given the page loads
  When I scroll to the footer
  Then I see a copyright notice and social media icons (Twitter, Behance, Dribbble, Facebook)
  And the footer links to Component Dock
```

## Verification checklist

- [ ] All 10 sections present in correct order (Navbar → Hero → Services → Portfolio → About → Blog → Video → Skills → Contact → Footer)
- [ ] Design tokens match: brand pink #e54b76, dark bg #221C5A, fonts Montserrat + PT Serif
- [ ] Section numbering 01–07 with alternating left/right alignment
- [ ] Services carousel with 8 service cards across 2 slides
- [ ] Portfolio masonry grid with hover overlays
- [ ] Team member carousel with 3 members
- [ ] Blog list with 4 numbered entries
- [ ] Testimonial carousel with 3 quotes
- [ ] Video thumbnail with play button
- [ ] Feature icon carousel with 7 items
- [ ] 4 animated progress bars with correct colors and percentages
- [ ] Contact form with 4 fields + submit
- [ ] Footer with Component Dock link
- [ ] No ColorLib references in app code
- [ ] Tests pass with 100% coverage
