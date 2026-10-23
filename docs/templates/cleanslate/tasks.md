# Cleanslate — Implementation Tasks

Source design: **Cleaning Company** (`https://colorlib.com/wp/template/cleaning-company/`) → recreation name **cleanslate**. Shipped at https://cleanslate.free.componentdock.com.

Scope: A professional cleaning services website with a top contact bar, dark navbar with yellow accent, full-width hero. It also includes appointment booking form, welcome/about section, animated stats counter, service cards, team member grid, testimonials carousel, blog cards, parallax CTA, pricing table, and a 4-column footer.

## Component breakdown

Render order as composed in `apps/cleanslate/src/App.tsx`:

### 1. TopBar
- The system SHALL render a top contact bar with a blue background containing a phone number, email address, and social media icon links (Facebook, Twitter, Instagram, Dribbble).
- Scenario — Top bar content:
  - **GIVEN** the CleanSlate page is rendered
  - **WHEN** the page loads
  - **THEN** the top bar SHALL display a phone number and email address
  - **AND** it SHALL show social media icon links

### 2. Navbar
- The system SHALL render a dark sticky navigation bar with the site logo "CleanSlate" on the left, navigation links (Home, About, Services, Portfolio, Pricing, Blog, Contact) on the right, and a hamburger toggle on mobile.
- Scenario — Navbar content:
  - **GIVEN** the CleanSlate page is rendered
  - **WHEN** the page loads
  - **THEN** the navbar SHALL display the site name with yellow accent on "Slate"
  - **AND** it SHALL show all navigation links
  - **AND** it SHALL be sticky at the top of the viewport
- Scenario — Mobile hamburger toggle:
  - **GIVEN** the CleanSlate page is rendered on a mobile viewport
  - **WHEN** the user taps the hamburger toggle button
  - **THEN** the mobile nav menu SHALL expand with all navigation links
  - **AND** tapping a link SHALL collapse the menu

### 3. Hero
- The system SHALL render a full-width hero section with a background image, a subheading, a main headline, and a CTA button.
- Scenario — Hero content:
  - **GIVEN** the CleanSlate page is rendered
  - **WHEN** the hero section is displayed
  - **THEN** it SHALL show a subheading "Leave the house cleaning chores to us"
  - **AND** it SHALL show a headline containing "dirty work"
  - **AND** it SHALL show a "Learn more" button with blue styling

### 4. AppointmentForm
- The system SHALL render an appointment booking form overlapping the hero section bottom with input fields for name, phone, service selection, and cleaner selection, plus a submit button.
- Scenario — Appointment form fields:
  - **GIVEN** the CleanSlate page is rendered
  - **WHEN** the appointment form is displayed
  - **THEN** it SHALL show a "Your Name" text input
  - **AND** it SHALL show a "Phone number" text input
  - **AND** it SHALL show a "Select Services" dropdown
  - **AND** it SHALL show a "Select Cleaners" dropdown
  - **AND** it SHALL show a "MAKE AN APPOINTMENT" button

### 5. Welcome
- The system SHALL render a two-column welcome section with a business hours card and cleaner illustration on the left, and welcome text on the right.
- Scenario — Welcome content:
  - **GIVEN** the CleanSlate page is rendered
  - **WHEN** the welcome section is displayed
  - **THEN** it SHALL show a "Business Hours" card with opening days and vacation info
  - **AND** it SHALL show a headline "Let's make you fresher than ever"
  - **AND** it SHALL show a description paragraph

### 6. StatsCounter
- The system SHALL render an animated statistics counter section with three stats.
- Scenario — Counter content:
  - **GIVEN** the CleanSlate page is rendered
  - **WHEN** the stats section scrolls into view
  - **THEN** it SHALL animate three counters: Years Experienced, Happy Customers, Buildings Cleaned
  - **AND** the numbers SHALL count up from zero to their target values

### 7. Services
- The system SHALL render a services section with a heading and six service cards in a grid.
- Scenario — Services content:
  - **GIVEN** the CleanSlate page is rendered
  - **WHEN** the services section is displayed
  - **THEN** it SHALL show a heading "How We Works"
  - **AND** it SHALL display six service cards: Office Cleaning, Pool Cleaning, Carpet Cleaning, Kitchen Cleaning, Garden Cleaning, Window Cleaning
  - **AND** each card SHALL have an icon, title, description, and "Read more" link

### 8. Team
- The system SHALL render a team section with member cards showing photos, names, positions, and social links.
- Scenario — Team content:
  - **GIVEN** the CleanSlate page is rendered
  - **WHEN** the team section is displayed
  - **THEN** it SHALL show a heading "Our Team"
  - **AND** it SHALL display team member cards with photos, names, and positions
  - **AND** each card SHALL have social media icon links

### 9. Testimonials
- The system SHALL render a dark-background testimonials section with a carousel of customer reviews.
- Scenario — Testimonials content:
  - **GIVEN** the CleanSlate page is rendered
  - **WHEN** the testimonials section is displayed
  - **THEN** it SHALL show a heading "Happy Customer"
  - **AND** it SHALL display a carousel with quote icons, avatar images, reviewer names, positions, and testimonial text

### 10. Blog
- The system SHALL render a blog section with three post cards.
- Scenario — Blog content:
  - **GIVEN** the CleanSlate page is rendered
  - **WHEN** the blog section is displayed
  - **THEN** it SHALL show three blog post cards with background images, titles, and metadata

### 11. ParallaxCTA
- The system SHALL render a parallax background image section with a call-to-action.
- Scenario — Parallax CTA:
  - **GIVEN** the CleanSlate page is rendered
  - **WHEN** the parallax section is displayed
  - **THEN** it SHALL show a background image with parallax scrolling effect
  - **AND** it SHALL contain call-to-action text

### 12. Pricing
- The system SHALL render a pricing section with four plan cards on a light background.
- Scenario — Pricing content:
  - **GIVEN** the CleanSlate page is rendered
  - **WHEN** the pricing section is displayed
  - **THEN** it SHALL show four pricing plans: Starter ($49), Standard ($79), Premium ($109), Platinum ($159)
  - **AND** each plan SHALL have an icon, name, price, feature list, and "Get Started" button
  - **AND** the Standard plan SHALL be highlighted as active/recommended

### 13. Footer
- The system SHALL render a dark footer with four columns and a copyright bar.
- Scenario — Footer content:
  - **GIVEN** the CleanSlate page is rendered
  - **WHEN** the footer is displayed
  - **THEN** it SHALL show four columns: company info + social links, latest news, quick links, and contact info
  - **AND** it SHALL show a copyright bar at the bottom
  - **AND** the copyright SHALL link to Component Dock

### Cross-cutting requirements

- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/cleanslate/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/cleanslate/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Top bar: blue background, phone + email + social icons; [ ] Navbar: dark background, "CleanSlate" logo with yellow accent, 7 nav links, sticky, mobile hamburger; [ ] Hero: background image, subheading, headline, blue CTA; [ ] Appointment form: 4 fields + submit button, overlapping hero; [ ] Welcome/About: business hours card + cleaner image + welcome text; [ ] Stats counter: 3 animated counters (45, 2342, 30); [ ] Services: heading + 6 service cards with icons; [ ] Team: heading + member cards with photos + social links; [ ] Testimonials: dark bg, carousel with quotes, avatars, names; [ ] Blog: 3 post cards with background images; [ ] Parallax CTA: background image with parallax effect; [ ] Pricing: 4 plan cards, Standard highlighted; [ ] Footer: 4 columns + copyright with Component Dock link; [ ] Responsive: all sections adapt to mobile viewports; [ ] Accessibility: semantic HTML, aria labels, keyboard navigation; [ ] No ColorLib references in app code; [ ] Footer links to componentdock.com; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/

## Verification

- [x] `apps/cleanslate` ships on https://cleanslate.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/cleanslate/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/cleanslate/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/cleanslate/public/CNAME` = `cleanslate.free.componentdock.com`
  and the package `homepage` = `https://cleanslate.free.componentdock.com`.
