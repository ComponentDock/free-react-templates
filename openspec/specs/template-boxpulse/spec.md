# Template: BoxPulse (Creative Digital Agency — One Page)

## Purpose

Recreation of ColorLib **Boxus** as a React 19 + Vite + Tailwind CSS 4 + TypeScript
single-page application. Original preview:
https://preview.colorlib.com/theme/boxus/
Source: https://colorlib.com/wp/template/boxus/

## Design tokens

| Token              | Value                           | Notes                                      |
|--------------------|---------------------------------|--------------------------------------------|
| Brand dark         | `#221C5A`                       | Deep navy-purple, hero + section backgrounds |
| Accent pink        | `#E74C78`                       | Primary CTA, hover states, borders          |
| Accent green       | `#32DB8A`                       | Highlight accent on hero span               |
| Yellow             | `#FFBA42` (rgb 255,186,66)      | Skill bar fills, accent                     |
| Text primary       | `#191919`                       | Headings, body text                         |
| Text muted         | `#5B5881`, `#8E8DA9`, `#9A9A9A` | Secondary text, captions                    |
| White              | `#FFFFFF`                       | Section backgrounds, light cards            |
| Font heading       | `Montserrat`, sans-serif        | Navigation, headings, buttons               |
| Font body          | `Roboto`, sans-serif            | Paragraph text, descriptions                |
| Font accent        | `PT Serif`, serif               | Quotes, testimonials                        |
| Button radius      | 0 (sharp/square)                | No border-radius on buttons/CTAs            |
| Button border      | 2px solid `#E74C76`             | Outlined CTA buttons                        |
| Section backgrounds| Alternating `#221C5A` dark and `#FFFFFF` white | Hero dark, services white, portfolio dark, about white, stories dark, video white, skills dark, contact white |

## Section structure (in order)

1. **Navbar** — Fixed top nav with logo, 8 links: Home, Services, Portfolio, About, News, Video, Skills, Contact. Mobile hamburger menu.
2. **Hero** — Full-width dark `#221C5A` background. Centered logo image, large headline "We Craft Awesome Web And Graphic Design Solutions" (span accent green), subtitle.
3. **Services (01)** — White background. Left: section number "01" + title "Services". Right: carousel/slider of 4 services (Branding, Mobile Apps, Web, Graphic), each with icon + title + description. Second row: 4 more services (Services, PSD, HTML, PHP).
4. **Portfolio (02)** — Dark `#221C5A` background. Left: section number "02" + title "Portfolio". Right: grid of 4 project cards (PSD Mockup / Smart Watch), each with category label, title, and image. "LOAD MORE" button.
5. **About / Crafters (03)** — White background. Left: section number "03" + title "CRAFTERS". Right: About text + timeline (2001-2016, 5 entries). Below: 3 team member cards (Robert Williams / Lead Designer, John Doe / SEO Master, John Doe / PSD Guru), each with photo, name, role, description.
6. **News / Stories (04)** — Dark `#221C5A` background. Left: section number "04" + title "STORIES". Right: 4 blog post cards (numbered 01-04), each with author, category, excerpt. "GO TO BLOG" button. Below: 3 testimonial quotes with attribution.
7. **Video / Offer (05)** — White background. Left: section number "05" + title "OFFER". Right: Video embed area (placeholder). Below: 6 feature items in a row (Video Editing, Premium Cleer, For All Displays, Right On Time, Innovative Ideas, Perfect Sound, 3D Solution).
8. **Skills / Expertise (06)** — Dark `#221C5A` background. Left: section number "06" + title "EXPERTISE". Right: Description text + 4 horizontal progress bars (HTML 81%, CSS 93%, PSD 72%, Design 99%) with yellow `#FFBA42` fill.
9. **Contact (07)** — White background. Left: section number "07" + title "Contact". Right: Description text + 2 contact info items. Contact form with Name, Email, Subject, Message fields + Submit button.
10. **Footer** — Dark `#221C5A` background. Copyright text + "Made with Component Dock" link.

## Gherkin requirements

### Navbar
- Scenario: Navbar displays all 8 navigation links
  - Given the user is on the page
  - When the navbar is visible
  - Then it shows links: Home, Services, Portfolio, About, News, Video, Skills, Contact
  - And clicking each link scrolls to the corresponding section
- Scenario: Mobile hamburger menu toggles navigation
  - Given the viewport is mobile
  - When the user taps the hamburger menu
  - Then the nav links are displayed in a mobile overlay

### Hero
- Scenario: Hero displays headline and subtitle
  - Given the user is on the page
  - When the hero section is visible
  - Then the headline reads "We Craft Awesome Web And Graphic Design Solutions"
  - And "Graphic Design Solutions" appears in the accent green color
  - And a subtitle is displayed below

### Services
- Scenario: Services section shows 8 service items
  - Given the user scrolls to the Services section
  - Then section number "01" and title "Services" are displayed
  - And 8 service items are visible (Branding, Mobile Apps, Web, Graphic, Services, PSD, HTML, PHP)
  - And each service has an icon, title, and description

### Portfolio
- Scenario: Portfolio section shows project grid
  - Given the user scrolls to the Portfolio section
  - Then section number "02" and title "Portfolio" are displayed
  - And at least 4 project cards are visible
  - And each card shows a category label, title, and image
  - And a "LOAD MORE" button is present

### About
- Scenario: About section displays timeline and team
  - Given the user scrolls to the About section
  - Then section number "03" and title "CRAFTERS" are displayed
  - And a timeline with at least 5 entries is visible
  - And 3 team member cards are displayed (Robert Williams, John Doe, John Doe)
  - And each card shows name, role, and description

### News
- Scenario: News section displays blog posts and testimonials
  - Given the user scrolls to the News section
  - Then section number "04" and title "STORIES" are displayed
  - And 4 blog post cards are visible with author, category, and excerpt
  - And a "GO TO BLOG" button is present
  - And 3 testimonial quotes are displayed below

### Video
- Scenario: Video section shows feature items
  - Given the user scrolls to the Video section
  - Then section number "05" and title "OFFER" are displayed
  - And a video placeholder is visible
  - And 6 feature items are displayed in a row

### Skills
- Scenario: Skills section shows progress bars
  - Given the user scrolls to the Skills section
  - Then section number "06" and title "EXPERTISE" are displayed
  - And 4 progress bars are visible (HTML 81%, CSS 93%, PSD 72%, Design 99%)
  - And progress bar fills use the yellow accent color

### Contact
- Scenario: Contact section has a working form
  - Given the user scrolls to the Contact section
  - Then section number "07" and title "Contact" are displayed
  - And a form with Name, Email, Subject, and Message fields is visible
  - And a submit button is present
  - And 2 contact info items are displayed

### Footer
- Scenario: Footer shows copyright and branding
  - Given the user scrolls to the footer
  - Then a copyright notice is displayed
  - And a "Made with Component Dock" link to componentdock.com is present

## Verification checklist

- [ ] All 10 sections render in correct order
- [ ] Navigation scrolls to correct sections
- [ ] Mobile hamburger menu works
- [ ] Services carousel/slider works (prev/next)
- [ ] Portfolio grid displays with images
- [ ] Timeline entries render correctly
- [ ] Team member cards display properly
- [ ] Blog post cards render
- [ ] Testimonial quotes display
- [ ] Feature items row renders
- [ ] Progress bars animate to correct percentages
- [ ] Contact form has all 4 fields
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code
- [ ] All tests pass with 100% coverage
- [ ] Typecheck passes
- [ ] Build succeeds
