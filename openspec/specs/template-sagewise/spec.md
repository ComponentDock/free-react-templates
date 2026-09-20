# Template: Sagewise (Education / University Landing)

## Purpose

Sagewise is a single-page education/university landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Wiser" website template design, built under a DIFFERENT
name (**Sagewise**) with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

**Source:** ColorLib "Wiser"
https://colorlib.com/wp/template/wiser/
**Preview analyzed:** https://preview.colorlib.com/theme/wiser/
(HTTP 200, ~41 KB HTML, title "Education | Template")

## Design reference (replication findings)

- **Demo DOM analyzed:** https://preview.colorlib.com/theme/wiser/
  Stylesheets: `css/style.css` (153 KB, compiled from SCSS) + Bootstrap 4
  + plugin libs (owl.carousel, slicknav, animate, magnific-popup,
  font-awesome, themify-icons, nice-select, flaticon, gijgo).
  Bootstrap 4 grid + utility classes throughout. No section IDs; sections
  identified by class names.

- **Screenshot:** `wiser-free-template.jpg` (TEMPLATES.md line 1663) —
  education template with: orange/yellow banner slider with two slides,
  service cards on yellow background, popular programs carousel, latest
  courses cards, recent events, admission form section, recent news
  articles, newsletter + dark footer.

- **Visual design (from DOM + CSS tokens):** Education/university landing
  with warm yellow accent (`#ebb830`) and teal accent (`#1fc2d9`), dark
  navy footer (`#232637`). Light blue-gray body bg (`#f9f9ff`). Font:
  **Poppins** (Google Fonts, primary body), **Abril Fatface** (Google
  Fonts, decorative section headings). Primary yellow `#ebb830` (service
  cards, newsletter button). Teal `#1fc2d9` (carousels, buttons, links).
  Dark navy `#234262` (headings, header top bar). Muted blue-gray text
  `#7d84ab`. Footer dark `#232637`. White `#fff`. Light purple bg
  `#f0e9ff` (some sections). Rounded service cards (10px radius).
  Carousel slider with background images + text overlay.

## Design tokens (from css/style.css)

| Token                | Value              | Where                                                                                     |
| -------------------- | ------------------ | ----------------------------------------------------------------------------------------- |
| Primary yellow       | `#ebb830`          | `.service_area` card bg, `.newsletter_form button`, `.course_all_btn` hover accent         |
| Teal accent          | `#1fc2d9`          | `.boxed-btn3` bg, `.owl-nav div:hover`, carousel accents, links                           |
| Dark navy (headings) | `#234262`          | `.section_title` color, `.header-top_area` bg, `.book_btn a` color                       |
| Muted blue-gray      | `#7d84ab`          | Body text, `.section_title` subtext, description text                                     |
| Secondary blue       | `#415094`          | Accent elements                                                                           |
| Light purple bg      | `#f0e9ff`          | Section backgrounds                                                                       |
| Body bg              | `#f9f9ff`          | Main body background                                                                      |
| Gray bg              | `#f8fafe`          | `.gray_bg`                                                                                |
| Footer bg            | `#232637`          | `.footer`                                                                                 |
| White                | `#fff`             | Header bg, card backgrounds, text on dark                                                 |
| Light gray           | `#f1f1f1`          | Borders, subtle backgrounds                                                               |
| Font: body           | Poppins sans-serif | `body`, all text                                                                          |
| Font: headings       | Abril Fatface      | `.section_title` font-family (decorative serif)                                           |
| Section title h3     | `.section_title`   | font-size 55px, weight 400, font-family Abril Fatface, color `#234262`                   |
| Section title desc   | `.section_title p` | font-size 18px, line-height 2, color `#7d84ab`                                           |
| Service card         | `.service_area`    | bg `#ebb830`, border-radius 10px, padding 27.5px 30px, margin-bottom 30px                |
| Button (boxed-btn3)  | `.boxed-btn3`      | bg `#1fc2d9`, color `#fff`, border-radius 4px, padding 10px 30px, font-size 14px         |
| Button hover         | `.boxed-btn3:hover`| bg `#fff`, color `#1fc2d9`, border `1px solid #1fc2d9`                                   |
| Footer text          | `.footer_widget`   | color `#7d84ab`                                                                           |
| Newsletter input     | `.newsletter_form` | bg `#fff`, border-radius 4px                                                              |
| Newsletter btn       | `.newsletter_form button` | bg `#ebb830`, color `#fff`                                                        |

## Structure (1:1 section order)

1. **Header Top Bar** `.header-top_area` — dark navy bg (`#232637`),
   two text wraps with contact info (phone, email) left/right aligned.

2. **Sticky Navigation** `.main-header-area` — white bg, logo left,
   main menu center (Home | About | Program | Events | Blog | Pages |
   Contact), right side: "Appointment" text link + "book now" button
   (navy bg). Mobile hamburger menu.

3. **Hero Slider** `.slider_area` — full-width carousel (owl-carousel),
   two slides with background images + dark overlay. Text:
   "Boost up your skills with a new way of learning" + "Scholarship"
   callout card (yellow `#ebb830` bg with icon + text).

4. **Service Area** `.service_area` — 3 service cards on light bg,
   each card has yellow `#ebb830` bg, icon + title + description.
   Cards: skill training, scholarship info, career guidance type content.

5. **Popular Programs** `.popular_program_area` — section with
   "Popular Program" heading (Abril Fatface), carousel of program
   cards (Chemical Engineering, Mechanical Engineering, Bio Engineering)
   with images + titles, owl-carousel navigation.

6. **Latest Courses** `.latest_coures_area` — section with "Latest
   Courses" heading, carousel of course cards with images + "Bachelor
   of Graphic Design" type titles + metadata.

7. **Recent Events** `.recent_event_area` — "Recent Event" heading,
   carousel of event cards with date badge + title + description.
   Example: "How to speak like a native speaker?"

8. **Apply for Admission** `.admission_area` — split layout:
   left side image, right side form with input fields (name, email,
   select program, etc.) + submit button.

9. **Recent News** `.recent_news_area` — "Recent News" heading,
   3-column card grid with article images + title + excerpt +
   read more link. Example: "Those Other College Expenses You
   Aren't Thinking About".

10. **Newsletter + Footer** `.footer` — dark bg (`#232637`):
    - Newsletter section (`.newsLetter_wrap`): "Stay Updated" heading
      + email input + subscribe button (yellow `#ebb830`).
    - Footer widget columns: About Us | Campus | Study | Support
      with link lists.
    - Footer border/copyright bar at bottom.

## Gherkin requirements

```gherkin
Feature: Sagewise Education Template

  Background:
    Given the Sagewise template is loaded at its root URL
    And the page has fully rendered

  Scenario: Header displays contact information
    Then the top bar shows phone and email contact info
    And the navigation bar shows logo, menu items, and book now button

  Scenario: Navigation is responsive
    When the viewport is mobile width
    Then a hamburger menu icon is visible
    And the desktop menu is hidden
    When the hamburger is clicked
    Then the mobile menu expands with all navigation links

  Scenario: Hero slider displays and auto-plays
    Then the hero section shows a full-width slider
    And the slider displays heading text "Boost up your skills"
    And the slider shows a scholarship callout card
    When idle for several seconds
    Then the slider transitions to the next slide

  Scenario: Service area shows service cards
    Then the service section displays 3 service cards
    And each card has a yellow background
    And each card has an icon, title, and description

  Scenario: Popular programs carousel works
    Then the popular programs section shows a carousel of programs
    When the next arrow is clicked
    Then the carousel scrolls to show more programs
    When the previous arrow is clicked
    Then the carousel scrolls back

  Scenario: Latest courses carousel works
    Then the latest courses section shows course cards
    And each card has an image and course title
    When carousel navigation is used
    Then courses scroll horizontally

  Scenario: Recent events carousel works
    Then the recent events section shows event cards
    And each card has a date badge and event title

  Scenario: Admission form is interactive
    Then the admission section shows a form with input fields
    And the form has name, email, and program selection fields
    When valid data is entered and submitted
    Then the form processes without error

  Scenario: Recent news shows article cards
    Then the news section shows 3 article cards
    And each card has an image, title, and excerpt
    And each card has a read more link

  Scenario: Newsletter subscription form works
    Then the footer newsletter section shows an email input
    And a subscribe button with yellow background
    When a valid email is entered and submitted
    Then the form processes without error

  Scenario: Footer displays column links
    Then the footer shows columns for About Us, Campus, Study, Support
    And each column has a list of links
    And the footer links to Component Dock

  Scenario: All sections render without console errors
    Given the browser console is monitoring
    When the page loads completely
    Then no JavaScript errors are logged
```

## Verification checklist

- [ ] Header top bar shows contact info with dark navy background
- [ ] Sticky nav has logo, menu items, and book now button
- [ ] Hero slider auto-plays with two slides and scholarship callout
- [ ] Service area shows 3 yellow cards with icons
- [ ] Popular programs carousel navigates correctly
- [ ] Latest courses carousel shows course cards
- [ ] Recent events carousel shows event cards with dates
- [ ] Admission form has all fields and submits correctly
- [ ] Recent news shows 3 article cards in grid
- [ ] Newsletter form has email input + yellow subscribe button
- [ ] Footer has 4 link columns on dark background
- [ ] Footer links to componentdock.com
- [ ] Responsive: hamburger menu works on mobile
- [ ] No console errors on page load
- [ ] Design tokens match: Poppins font, Abril Fatface headings, yellow `#ebb830`, teal `#1fc2d9`, navy `#234262`
