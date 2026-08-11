# Template: Scholium (Education / Online Learning Website)

## Purpose

Scholium is a single-page online-learning website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Onlineedu" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Onlineedu" — online courses / e-learning academy
  site (source: https://colorlib.com/wp/template/onlineedu/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/onlineedu/
  (HTTP 200, full rendered DOM + `assets/css/style.css` (67KB) extracted
  2026-08-12 during prep). The TEMPLATES.md screenshot
  (`onlineedu-free-template.jpeg`) was also viewed (browser) and confirms
  the design below: light-blue hero with student photo, indigo #2d3092
  accents (top bar, buttons, dates), dark navy headings, lavender-tinted
  section bands.
- **Section order (1:1):** Preloader → Header (top utility bar: indigo
  `#2d3092` social block + email needhelp@gmail.com + phone 666 7475 25252;
  main bar: logo "Onlineedu" + nav Home, About, Courses, Instructors, Blog,
  Blog Details, Element, Contact + "Search Courses" input with circular
  indigo search button + Login / Register links) → Hero slider
  (`slider-area slider-active`, 2 slides, bg image `h1_hero.png` (light
  blue-tinted photo), min-height 840px; left col: eyebrow span "Popular
  Online Courses" in #2d3092 + h1 "The New Way To Learn Properly in With
  Us!" + indigo "Get Started" btn; right col: `heroman.png` student photo
  (young man with curly hair + glasses + laptop, cropped at right edge);
  carousel dots) → Categories (`categories-area` white; span "Popular
  Online Courses" + h2 "Lets Brows All Catagori" (typo in original; fix to
  "Lets Browse All Categories") + 6 bordered cards 1px #ddd, padding
  52px 50px, each with line icon, Sen 24px bold title in #250051, blurb
  "Sorem hpsum folor sixdsft amhtget, consectetur adipiscing el", "Read
  More >" link: Web Design, App Development, Video Editing, Digital
  Marketing, Seo Marketing, Content Writing + indigo "Find More Courses"
  button) → Countdown band (`count-down-area pt-90 pb-60 section-bg`
  with `section_bg01.png` pattern bg; 4 counters with inline SVG icons and
  colored numerals — color-green #1e9d78, color-blue #2d3092, color-green,
  color-red #f05510 — Sen 24px uppercase 600; visible example "1050 + Topics";
  numerals animate on scroll via counter-up JS) → Popular Course
  (`popular-course section-padding30`; span "Most Popular Course Of This
  Week" + h2 "Our Popular Course"; 3 course cards (col-xl-4): `course-img`
  photo, `course-cap-top` h4 title #250051 30px, `course-cap-mid` 5-star
  rating row (stars #FBBA42) + "52 Review", `course-cap-bottom` bordered
  top 1px #f9f9f9 with user count + heart count (ti-user / ti-heart, e.g. 562) + price "Free": Graphic Design, Web Development, Digital Marketing)
  → Team (`team-area pt-160 pb-160 section-bg` with `section_bg02.png`;
  span "More About Our Faculty" + h2 "Our Best Teachers"; 4 cards
  `single-team mb-30`: photo, `team-social` icons (bottom overlay), white
  `team-caption` with name + role "Faculty": Alexa Janathon, Janathon
  Smith, Alexa MacCalum, Alexa j Watson + "View All Faculty" button) →
  About (`about-area section-padding2` white; span "More About Our
  Company" + h2 "Want to know more" + paragraph + indigo "More About Us"
  button; right side layered images `about-img` / `about-font-img` /
  `about-back-img`) → Testimonial (`testimonial-area fix pt-180 pb-180
section-bg` with `section_bg03.png`; carousel of 2+ slides: dashed-circle
  round avatar (`testimonial-icon img`, 3px dashed transparent border,
  radius 50%), quote "You can't succeed if you just do what others do and
  follow the well-worn path. You need to create a new and original path for
  yourself.", name "Clifford Frazier", attribution "- Colorlib Themes",
  star rating row) → Blog (`home-blog-area section-padding30`; span "Our
  Latest News From Our Blog" + h2 "Latest News From Blog"; 3 cards
  `home-blog-single mb-30`: photo, absolute `blog-date` box bg #2d3092
  (padding 15px 34px, bottom-left) with day/month, title "Footprints in
  Time is perfect House in Kurashiki", "Read more »" link) → Footer
  (`footer-area footer-bg` bg #0b0b1d; `footer-top footer-padding`:
  brand + blurb + social icons ("Let's Get Social"); 4 link columns —
  About Us: Online Learning, Careers, Press Center, Become an Instructor;
  Campus: Our Plans, Free Trial, Academic Solutions, Business Solutions,
  Government Solutions; Study: Admissions Policy, Getting Started, Online
  Application, Visa Information, Tuition Calculator; Spport (typo in
  original; fix to "Support"): Support, Contact Us, System Requirements,
  Register Activation Key, Site feedback; "Stay Updated" newsletter form:
  email input (border-color #f0e9ff, radius 0, height 50px) + indigo
  subscribe button; `footer-bottom`: border-top 1px #2f344f, copyright
  text #9fa8c3 + "Colorlib" credit).
- **Design tokens extracted from `style.css` + preview HTML:**
  - Primary **#2d3092** (indigo blue) — `.btn` background, `.header-social`
    block, `.slider-area .hero__caption span` eyebrow color, `.blog-date`,
    `.color-blue` counter, active nav links.
  - Dark navy headings **#030431** (`.section-tittle h2`, 49px weight 600
    line-height 1.3) and **#250051** (category titles `.cat-cap h5>a`, 24px
    Sen bold; course titles 30px).
  - Counter accents: `.color-green` **#1e9d78**, `.color-blue` #2d3092,
    `.color-red` **#f05510**; rating stars `.course-ratting i` **#FBBA42**.
  - Buttons `.btn`: background #2d3092, color #fff, padding 27px 44px,
    font-size 16px, letter-spacing 1px, **border-radius 0 (square)**,
    border 0; hover sweeps a white overlay via `::before` scaleX.
  - Fonts (Google): body **Roboto** (400/500/700); headings/section titles
    **Josefin Sans** (400–700); category/counter numerals **Sen** (400/700/800).
  - Section bands: `section-bg` pattern images (`section_bg01/02/03.png`);
    countdown area padding 90px top / 60px bottom; team + testimonial
    padding 150px; light tints #f9f9ff, #f0e9ff (newsletter input border),
    #fbf9ff, #f1f1f1; logo block bg #f4f4f4.
  - Category card: border 1px #ddd, padding 52px 50px, white, hover
    transition .4s. Course card bottom: border-top 1px #f9f9f9, meta
    color #b2b2b2.
  - Header top bar: `border-bottom 1px #eeeeee`; info text #86878a, Josefin
    Sans 16px; social block bg #2d3092 padding 13px 70px.
  - Footer: bg **#0b0b1d**, bottom border-top 1px **#2f344f**, body text
    **#9fa8c3** weight 300 16px; newsletter input border #f0e9ff.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/scholium-<n>/<w>/<h>`); icons → lucide-react
  (BookOpen, Users, Award, GraduationCap, Star, User, Heart, Search, Mail,
  Phone, MapPin, ArrowRight, Quote, Instagram, Facebook, Twitter/X,
  Linkedin, Send, ChevronLeft, ChevronRight); the section-bg pattern images
  → subtle CSS gradient/tint bands in the same spirit; counters animate on
  scroll into view (IntersectionObserver); original typos fixed ("Lets
  Brows All Catagori" → "Lets Browse All Categories", "Spport" → "Support");
  footer nav uses repo-standard link set; no assets copied.

Scholium lives in `apps/scholium` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top utility bar and a main navigation bar with the
site name "Scholium", section anchor links, a course search input, and
Login/Register links.

#### Scenario: Utility bar content

- **GIVEN** the Scholium page is rendered
- **WHEN** the page loads
- **THEN** the utility bar SHALL show the email "needhelp@gmail.com" and a phone number
- **AND** the utility bar SHALL show social media icon links

#### Scenario: Main nav content

- **GIVEN** the page is rendered
- **WHEN** the main navigation bar is displayed
- **THEN** it SHALL show the site name "Scholium" and links to Home, About, Courses, Instructors, Blog, and Contact
- **AND** it SHALL show a "Search Courses" input with a search button
- **AND** it SHALL show "Login" and "Register" links

### Requirement: Hero slider

The system SHALL render a full-height hero slider with two slides, each with
an eyebrow label, a headline, a call-to-action button, a student photo, and
navigation dots.

#### Scenario: Hero slide content

- **GIVEN** the Scholium page is rendered
- **WHEN** the hero slider is displayed
- **THEN** it SHALL show the eyebrow label "Popular Online Courses" in the primary color
- **AND** it SHALL show the headline "The New Way To Learn Properly in With Us!"
- **AND** each slide SHALL show a "Get Started" button and a student photo
- **AND** the slider SHALL be navigable via dots or arrows

### Requirement: Categories section

The system SHALL render a categories section with a heading and six bordered
category cards, each with an icon, a title, a blurb, and a read-more link,
plus a "Find More Courses" button.

#### Scenario: Categories content

- **GIVEN** the page is rendered
- **WHEN** the categories section is displayed
- **THEN** it SHALL contain a heading "Lets Browse All Categories"
- **AND** it SHALL show cards titled "Web Design", "App Development", "Video Editing", "Digital Marketing", "Seo Marketing", and "Content Writing", each with an icon, a blurb, and a "Read More" link
- **AND** it SHALL show a "Find More Courses" button

### Requirement: Counters band

The system SHALL render a counters band over a patterned background with four
animated counters with colored numerals and labels.

#### Scenario: Counter content

- **GIVEN** the page is rendered
- **WHEN** the counters band is displayed
- **THEN** it SHALL show four counters, each with an icon, a colored numeral (green #1e9d78, blue #2d3092, green, red #f05510), and a label such as "+ Topics"
- **AND** the numerals SHALL count up when scrolled into view

### Requirement: Popular course section

The system SHALL render a popular courses section with a heading and three
course cards, each with a photo, a title, a star rating with review count,
student/heart meta, and a price.

#### Scenario: Course card content

- **GIVEN** the page is rendered
- **WHEN** the popular course section is displayed
- **THEN** it SHALL contain a heading "Our Popular Course"
- **AND** it SHALL show cards titled "Graphic Design", "Web Development", and "Digital Marketing"
- **AND** each card SHALL show a photo, a five-star rating with a review count (e.g. "52 Review"), student and heart counts, and a price (e.g. "Free")

### Requirement: Team section

The system SHALL render a team section on a patterned background with a
heading and four instructor cards, each with a photo, social icons, a name,
and a role, plus a "View All Faculty" button.

#### Scenario: Team content

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL contain a heading "Our Best Teachers"
- **AND** it SHALL show instructor cards for "Alexa Janathon", "Janathon Smith", "Alexa MacCalum", and "Alexa j Watson", each with a photo, a role of "Faculty", and social icons
- **AND** it SHALL show a "View All Faculty" button

### Requirement: About section

The system SHALL render an about section with a heading, a paragraph, a
call-to-action button, and layered imagery.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain a heading "Want to know more" with the label "More About Our Company" above it
- **AND** it SHALL show a descriptive paragraph and a "More About Us" button
- **AND** it SHALL show layered images on the right side

### Requirement: Testimonials section

The system SHALL render a testimonials section on a patterned background with
a carousel of quotes, each with a round dashed-bordered avatar, a quote, a
reviewer name, an attribution, and a star rating.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show at least two customer quotes with round avatars and star ratings
- **AND** each quote SHALL show the reviewer name and an attribution (e.g. "- Scholium Themes")
- **AND** the quotes SHALL be navigable as a carousel

### Requirement: Blog section

The system SHALL render a blog section with a heading and three blog cards,
each with a photo, an absolute date badge, a title, and a read-more link.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL contain a heading "Latest News From Blog"
- **AND** it SHALL show three blog cards, each with a photo, a date badge (e.g. day/month) in the primary color, a title, and a "Read more" link

### Requirement: Footer

The system SHALL render a dark footer with a brand blurb, social links, four
link columns, a newsletter form, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the brand "Scholium" with a blurb and social icons
- **AND** it SHALL show link columns for "About Us" (Online Learning, Careers, Press Center, Become an Instructor), "Campus" (Our Plans, Free Trial, Academic Solutions, Business Solutions, Government Solutions), "Study" (Admissions Policy, Getting Started, Online Application, Visa Information, Tuition Calculator), and "Support" (Support, Contact Us, System Requirements, Register Activation Key, Site feedback)
- **AND** it SHALL show a "Stay Updated" newsletter form with an email input and a subscribe button
- **AND** it SHALL show a copyright line

#### Scenario: Newsletter validation

- **GIVEN** the newsletter form is displayed
- **WHEN** the user submits an invalid or empty email
- **THEN** the form SHALL show a validation message and SHALL NOT submit

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Scholium app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Scholium — Education Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App typechecks (`npm run typecheck -w @free-react-templates/scholium`)
- [ ] Tests at 100% coverage (lines/functions/branches/statements) for the app
- [ ] Build succeeds (`npm run build -w @free-react-templates/scholium`)
- [ ] Section order matches the reference 1:1 (navbar → hero slider → categories → counters band → popular course → team → about → testimonials → blog → footer)
- [ ] Design tokens from the reference used in `@theme` (primary #2d3092, headings #030431/#250051, counter accents #1e9d78/#f05510, stars #FBBA42, footer #0b0b1d/#2f344f/#9fa8c3; Roboto + Josefin Sans + Sen Google Fonts)
- [ ] Hero: light photo background, indigo eyebrow "Popular Online Courses", dark navy headline, square indigo "Get Started" button, student photo on the right, 2 slides with dots
- [ ] Categories: white section, 6 bordered cards (1px #ddd, ~50px padding) with icons + Sen bold #250051 titles + blurbs + "Read More >", "Find More Courses" button
- [ ] Counters: patterned band, 4 counters with SVG-style icons and colored numerals (green/blue/green/red), count-up on scroll
- [ ] Popular course: 3 cards with photo, #250051 30px title, 5 gold stars + review count, student/heart meta, price "Free"
- [ ] Team: patterned band, 4 cards with photo, social icons, white caption (name + "Faculty"), "View All Faculty" button
- [ ] About: white section, "Want to know more" heading + paragraph + "More About Us" button + layered images
- [ ] Testimonials: patterned band, carousel with dashed-circle avatars + quotes + names + attribution + star ratings
- [ ] Blog: 3 cards with photo, indigo date badge (absolute bottom-left), title, "Read more »"
- [ ] Footer: #0b0b1d bg, brand + social, 4 link columns, "Stay Updated" newsletter with validation, copyright line
