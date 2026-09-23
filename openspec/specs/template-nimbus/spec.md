# Template: Nimbus (SaaS Landing)

## Purpose

Nimbus is a single-page SaaS landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Saas"
design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a SaaS-themed landing page with a blue (#3bacf0) primary
brand color, green (#88d200) CTA buttons, a full-height hero banner with
blue overlay, feature cards, a split about section, numbered services grid,
blue CTA band, video section, support section, 3-column pricing, testimonials,
blog posts, and a dark navy footer. Nimbus recreates that structure
section-for-section with matching layout, colors, typography, and content
types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Saas" — free SaaS website template
  (source: https://colorlib.com/wp/template/saas/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/saas/`
  (HTTP 200, HTML extracted) + stylesheet `css/main.css`.
- **Section order (1:1):**
  1. Header: logo + nav (Home, Services, Features, Price, Testimonial, Pages, Get Started CTA)
  2. Hero/Banner: fullscreen with blue overlay, "Organize all with SaaS", subtitle
  3. Features: laptop mockup, "Our Most Unique Features", 3 feature cards (Stunning Visuals, Clean Code, Punctuality)
  4. About: split layout, "Powerful User Interface Design", left text + right carousel image
  5. Services: "Features That make us Unique", 2-column numbered grid (01-06)
  6. CTA: blue overlay, "Got Impressed to our features", Request Free Demo button
  7. Video: split layout, tutorial text left, video area right
  8. Support: split layout, image left, support text right
  9. Pricing: 3 cards (Basic $39, Standard $69, Ultimate $99)
  10. Testimonials: carousel with avatar, quote, name, star rating
  11. Blog: 2 blog cards with image, tags, title, description, date
  12. Footer: dark navy, About Us + Newsletter + Follow Us columns
- **Design tokens extracted:**
  - Brand: **#3bacf0** (blue) — primary, links, icons, tags
  - Accent: **#88d200** (green) — CTA buttons, ticker
  - Light bg: **#f9f9ff** — feature cards, sections
  - Body text: **#777**, headings: **#222**
  - Footer: **#04091e** (dark navy)
  - Font: **Poppins** (300-700) via Google Fonts
  - Buttons: pill-radius (50px) or square (0) depending on context

## Requirements

### Requirement: Navbar with navigation and CTA

Nimbus SHALL display a fixed top navbar with the brand name "Nimbus" and
navigation links (Home, Services, Features, Price, Testimonials) plus a
"Get Started" CTA button. The navbar SHALL become opaque on scroll.

#### Scenario: Desktop navbar renders all navigation links

- **WHEN** the page loads
- **THEN** the navbar displays links for Home, Services, Features, Price, Testimonials, and a Get Started CTA

#### Scenario: Navbar becomes opaque on scroll

- **WHEN** the user scrolls past 50px
- **THEN** the navbar background changes from transparent to a dark blurred background

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the hamburger menu button on mobile
- **THEN** a mobile navigation menu opens with all nav links as buttons
- **WHEN** the user clicks a mobile nav button
- **THEN** the mobile menu closes

### Requirement: Hero section with overlay

Nimbus SHALL display a full-height hero section with a blue overlay,
the headline "Organize all with Nimbus", and a descriptive subtitle.

#### Scenario: Hero renders headline and subtitle

- **WHEN** the page loads
- **THEN** the hero section displays "Organize all with Nimbus" as the main heading

### Requirement: Features section with cards

Nimbus SHALL display a features section with a centered heading, a
platform mockup image, and three feature cards (Stunning Visuals, Clean Code,
Punctuality) with icons.

#### Scenario: Feature cards render with titles

- **WHEN** the page loads
- **THEN** three feature cards are displayed with titles "Stunning Visuals", "Clean Code", and "Punctuality"

### Requirement: About section with split layout

Nimbus SHALL display an about section with a subtitle, heading, description
text, a CTA button, and a placeholder image in a two-column layout.

#### Scenario: About section renders all content

- **WHEN** the page loads
- **THEN** the about section displays "Powerful User Interface Design" heading and a "Get Started now" CTA

### Requirement: Services section with numbered items

Nimbus SHALL display a services section with a centered heading and a
2-column grid of 6 numbered service items.

#### Scenario: All 6 service items render

- **WHEN** the page loads
- **THEN** 6 service items are displayed with numbers 01-06 and titles including "User Research", "User Interface", "Sketch & Wireframes", and "User Experience"

### Requirement: CTA section with blue background

Nimbus SHALL display a call-to-action section with a blue background,
a heading, description, and a "Request Free Demo" button.

#### Scenario: CTA section renders

- **WHEN** the page loads
- **THEN** the CTA section displays "Got Impressed by our features" and a "Request Free Demo" link

### Requirement: Video section with play button

Nimbus SHALL display a video section with tutorial text on the left and
a video placeholder with a play button on the right.

#### Scenario: Play button is accessible

- **WHEN** the page loads
- **THEN** a play button with aria-label "Play video" is displayed

### Requirement: Support section with image and text

Nimbus SHALL display a support section with an image on the left and
support text on the right including "24/7 Support system" label.

#### Scenario: Support section renders

- **WHEN** the page loads
- **THEN** the support section displays "24/7 Support system" and "A Handy support system for the Software"

### Requirement: Pricing section with 3 plans

Nimbus SHALL display a pricing section with three plan cards (Basic $39,
Standard $69, Ultimate $99), each with a feature list and a "Get Started"
button.

#### Scenario: All pricing plans render

- **WHEN** the page loads
- **THEN** three pricing cards display "Real Basic" at $39, "Real Standard" at $69, and "Real Ultimate" at $99

### Requirement: Testimonials section

Nimbus SHALL display a testimonials section with cards containing an
avatar image, quote, name, and star rating.

#### Scenario: Testimonials render

- **WHEN** the page loads
- **THEN** three testimonial cards display with names "Sarah Mitchell", "James Cooper", and "Emily Chen"

### Requirement: Blog section

Nimbus SHALL display a blog section with two post cards containing an
image, tags, title, description, and date.

#### Scenario: Blog posts render

- **WHEN** the page loads
- **THEN** two blog posts display with titles "How to Scale Your SaaS Product Effectively" and "The Future of Cloud-Based Platforms"

### Requirement: Footer with Component Dock link

Nimbus SHALL display a dark footer with three columns (About Us, Newsletter,
Follow Us) and a copyright line linking to https://www.componentdock.com/
branded as "Component Dock".

#### Scenario: Footer contains Component Dock attribution

- **WHEN** the page loads
- **THEN** the footer contains a link to "https://www.componentdock.com/" with text "Component Dock"

#### Scenario: Newsletter form accepts email input

- **WHEN** the user types an email address in the newsletter input
- **THEN** the input displays the entered email
- **WHEN** the user clicks the submit button
- **THEN** the form submission is prevented (no page reload)

### Requirement: Document title

Nimbus SHALL set the document title to "Nimbus — SaaS Landing Template" on mount.

#### Scenario: Title is set correctly

- **WHEN** the page loads
- **THEN** document.title equals "Nimbus — SaaS Landing Template"
