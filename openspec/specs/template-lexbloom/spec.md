# Template: LexBloom (Professional Services / Law Firm)

## Purpose

- Recreation of ColorLib **TheLawyer** (`https://colorlib.com/wp/template/thelawyer/`, preview: `https://preview.colorlib.com/theme/thelawyer/`).
- Stack: Vite, React 19, Tailwind CSS 4, TypeScript, Lucide React.
- New original name: `lexbloom` (replaces ColorLib "TheLawyer").

## Design Tokens & Aesthetic

- **Colors**:
  - Primary / Accent: Blue (`#3957ff` — buttons, section titles, icons, hover states, links)
  - Dark Navy: `#112957` (hero-btn background, post-btn, submit-btn)
  - Dark Teal: `#092c3f` (heading color h1–h6)
  - Dark Purple: `#250051` (category card headings)
  - Body Text: `#10285d` (paragraph color)
  - Muted Text: `#57667e` (category card descriptions)
  - Light Background: `#fbf9ff` (section backgrounds, blog sidebar, testimonial)
  - Purple Border: `#f0e9ff` (borders, dividers)
  - White: `#ffffff` (card backgrounds, main content areas)
- **Typography**:
  - Headings: `Josefin Sans`, sans-serif (font-weight: 500–600, uppercase for section labels)
  - Hero Headline: `Rubik`, sans-serif (font-weight: 500, 68px desktop, line-height 1.2)
  - Body Text: `Roboto`, sans-serif (font-weight: normal, 16px, line-height 30px)
  - Section Labels: `Josefin Sans`, uppercase, blue `#3957ff`, with left line accent
- **UI Elements**:
  - Primary Button: `#3957ff` background, `Josefin Sans` font, 16px, uppercase, letter-spacing 1px, `border-radius: 0` (sharp corners), hover slides blue overlay via scaleX animation
  - Hero Button: `#112957` dark navy background, wider padding, `::before` hover slides `#3957ff`
  - Submit Button: `#112957` background, uppercase `Roboto`, border-radius 5px
  - Header Button (phone): `#3957ff` background, uppercase `Roboto`, 14px
  - Cards: white background, 1px `#ddd` border on practice area cards, no rounded corners
  - Practice area icons: blue `#3957ff`, 55px size
  - Section Title pattern: `<span>` with left line accent (54px wide `#3957ff` line), then `<h2>` in `#092c3f`
- **Layout & Aesthetic**:
  - Modern, clean, professional law firm one-pager
  - Full-width hero slider with parallax background images, dark overlay
  - Sticky white header with shadow on scroll
  - Practice area cards (3-column grid, bordered)
  - About section with split image/text layout
  - Tabbed case studies/services section (4-column grid of image cards)
  - Full-width CTA banner with dark section background
  - Team section (3-column grid, photo + name + role)
  - Testimonial carousel with large quote marks, centered text
  - Blog section (2-column image + caption cards)
  - Dark footer with 4-column layout, newsletter form, social icons
  - Scroll-to-top button (circular, blue)

## Section Order (1:1 from preview DOM)

1. **Navbar** — Sticky header: logo image (left), nav links (Home, About, Services, Case Studies, Blog dropdown, Contact), phone button "01654.066.456" (right). White background, sticky on scroll with shadow.
2. **Hero Slider** — Full-width slider (2 slides), parallax background images, each slide has: section label "COMMITTED TO SUCCESS" with blue left-line, headline "Dont Feel Helpless We Fight for Justice", body text, "Learn About Us" dark button. Slider arrows (prev/next).
3. **Practice Areas (3 cards)** — Section label "OUR PRACTICING AREA", heading "Area Of Practice That Can Help You To Win", 3-column bordered cards with flaticon icons (Health Law, Insurance Law, Vehicle Accident), description text, "Read More >" link.
4. **About Section** — Split layout: left = full-height background image, right = section label "ABOUT OUR LAW AGENCY", heading "We are commited for better service", two paragraphs, "Learn About Us" button.
5. **Contact Form** — Dark pattern background, centered form with: section label "FILL UP TO GET A QOTE", heading "World's Leading Law Consultency Agency!", fields: Name, Phone, Service select dropdown, Email, Message textarea, "Submit Now" button.
6. **Case Studies / Services (tabbed)** — Section label "OUR RECENT WORK", heading "Reliable, Effective & Wining Law For Customers", tabbed navigation (Accident Law, Health Law, Insurance Law), each tab shows 4 image cards with caption spans.
7. **CTA Banner** — Full-width dark section background, heading "Are you Searching For a First-Class Consultant?", "Contact Naw" black button.
8. **Team Section** — Section label "OUR LAWYERS", heading "Meet Our Dedicated Team Members.", 3-column team cards: photo, name, role. Members: Ethan Welch (Chir Lawyer), Trevor Stanley (Junior Lawyer), Allen Guzman (Senior Lawyer).
9. **Testimonials** — Full-width dark background, carousel of testimonial slides, each with: large white quotation mark SVG, quote text, founder image, name "Oliva jems", role "Chif Lawyer".
10. **Blog Section** — Section label "INSIGHT AND TRENDS ARTICLES", heading "Lawyers news from around the world selected by us.", 2 blog cards with image, date, title, excerpt, "Read More" link.
11. **Footer** — Dark background, 4-column: logo + description + phone/email, "Our Support" links, "Quick Link" links, "Newslatter" email subscribe form. Bottom bar: copyright + social icons.

## Gherkin Requirements & Scenarios

### Feature: Navbar & Navigation

- Scenario: User views the top navigation bar
  - Given the user loads LexBloom
  - Then they see the LexBloom logo on the left
  - And navigation links for Home, About, Services, Case Studies, Blog, Contact
  - And a phone number button "01654.066.456" on the right
  - And the navbar is sticky on scroll with a subtle shadow

- Scenario: User clicks a navigation link
  - Given the user is on the homepage
  - When they click a nav link
  - Then the page scrolls to the corresponding section

- Scenario: User hovers over Blog nav link
  - Given the user is on the homepage
  - When they hover over the Blog link
  - Then a dropdown submenu appears with Blog, Blog Details, Element, Case Details

### Feature: Hero Slider

- Scenario: User views the hero slider
  - Given the user loads LexBloom
  - Then they see a full-width hero slider with parallax background images
  - And the text "COMMITTED TO SUCCESS" with a blue left-line accent
  - And the headline "Dont Feel Helpless We Fight for Justice"
  - And body text describing the legal service
  - And a "Learn About Us" button in dark navy

- Scenario: User interacts with slider navigation
  - Given the hero slider is visible
  - When the user clicks the next/prev arrow
  - Then the slider transitions to the next/previous slide with the same layout

### Feature: Practice Areas (3 Cards)

- Scenario: User views the practice areas section
  - Given the user scrolls to the practice areas
  - Then they see the section label "OUR PRACTICING AREA"
  - And the heading "Area Of Practice That Can Help You To Win"
  - And 3 bordered cards in a row with icons (Health Law, Insurance Law, Vehicle Accident)
  - And each card has a title, description, and "Read More >" link

- Scenario: User clicks a practice area card
  - Given the practice areas section is visible
  - When the user clicks a card title or "Read More" link
  - Then they navigate to the services page (or placeholder)

### Feature: About Section

- Scenario: User views the about section
  - Given the user scrolls to the about section
  - Then they see a split layout with an image on the left
  - And section label "ABOUT OUR LAW AGENCY" on the right
  - And heading "We are commited for better service"
  - And two paragraphs of description
  - And a "Learn About Us" button

### Feature: Contact Form

- Scenario: User views the contact form
  - Given the user scrolls to the contact form section
  - Then they see a dark pattern background
  - And section label "FILL UP TO GET A QOTE"
  - And heading "World's Leading Law Consultency Agency!"
  - And form fields for Name, Phone, Service (dropdown), Email, Message
  - And a "Submit Now" submit button

- Scenario: User submits the contact form
  - Given the user fills in all required fields
  - When they click "Submit Now"
  - Then the form validates and shows a success or error message

- Scenario: User submits the contact form with empty required fields
  - Given the user leaves required fields empty
  - When they click "Submit Now"
  - Then the form shows validation errors for missing fields

### Feature: Case Studies / Services (Tabbed)

- Scenario: User views the case studies section
  - Given the user scrolls to the case studies section
  - Then they see section label "OUR RECENT WORK"
  - And heading "Reliable, Effective & Wining Law For Customers"
  - And tabbed navigation with tabs: Accident Law, Health Law, Insurance Law
  - And a 2x2 grid of image cards with captions under the active tab

- Scenario: User switches between tabs
  - Given the case studies section is visible
  - When the user clicks a different tab
  - Then the content grid updates to show cards for that tab

### Feature: CTA Banner

- Scenario: User views the CTA banner
  - Given the user scrolls to the CTA banner
  - Then they see a full-width dark section
  - And heading "Are you Searching For a First-Class Consultant?"
  - And a "Contact Now" button (black/dark style)

### Feature: Team Section

- Scenario: User views the team section
  - Given the user scrolls to the team section
  - Then they see section label "OUR LAWYERS"
  - And heading "Meet Our Dedicated Team Members."
  - And 3 team member cards with photo, name, and role
  - And members are: Ethan Welch (Chief Lawyer), Trevor Stanley (Junior Lawyer), Allen Guzman (Senior Lawyer)

### Feature: Testimonials

- Scenario: User views the testimonials section
  - Given the user scrolls to the testimonials
  - Then they see a dark background section
  - And a carousel with testimonial slides
  - And each slide shows a quotation mark icon, quote text, founder photo, name, and role

- Scenario: User interacts with testimonial carousel
  - Given the testimonials carousel is visible
  - When the carousel auto-plays or user navigates
  - Then the slides transition smoothly

### Feature: Blog Section

- Scenario: User views the blog section
  - Given the user scrolls to the blog section
  - Then they see section label "INSIGHT AND TRENDS ARTICLES"
  - And heading "Lawyers news from around the world selected by us."
  - And 2 blog cards with image, date, title, excerpt, and "Read More" link

### Feature: Footer

- Scenario: User views the footer
  - Given the user scrolls to the footer
  - Then they see a dark background with 4 columns
  - And logo + description + phone/email in the first column
  - And "Our Support" links in the second column
  - And "Quick Link" links in the third column
  - And "Newslatter" email subscribe form in the fourth column
  - And a bottom bar with copyright text and social icons

- Scenario: User subscribes to the newsletter
  - Given the footer is visible
  - When the user enters an email and clicks Send
  - Then the newsletter form submits

### Feature: Scroll-to-Top

- Scenario: User clicks scroll-to-top button
  - Given the user has scrolled down the page
  - When they click the circular blue scroll-to-top button
  - Then the page scrolls back to the top

## Verification Checklist

- [ ] Navbar is sticky on scroll with shadow effect
- [ ] Hero slider has parallax background images with overlay
- [ ] Hero text has blue left-line accent on the section label
- [ ] Hero button uses dark navy (#112957) style
- [ ] Practice area cards have 1px #ddd border, no rounded corners
- [ ] Practice area icons are blue (#3957ff), ~55px
- [ ] About section uses split layout with background image on left
- [ ] Contact form has dark pattern background
- [ ] Case studies use tabbed navigation (Bootstrap-style tabs or custom)
- [ ] CTA banner is full-width dark background
- [ ] Team cards show photo, name, role
- [ ] Testimonials use carousel with large quotation mark SVG
- [ ] Blog cards show image, date, title, excerpt, "Read More" link
- [ ] Footer has dark background, 4 columns, newsletter form, social icons
- [ ] Footer links to Component Dock (https://www.componentdock.com/)
- [ ] No ColorLib references in app code (only in spec and TEMPLATES.md)
- [ ] All fonts loaded via Google Fonts (Josefin Sans, Rubik, Roboto)
- [ ] Placeholder images use https://picsum.photos/seed/lexbloom-<n>/<w>/<h>
- [ ] Icons from lucide-react (replacing flaticon icons)
- [ ] 100% test coverage maintained
