# Template: CoachPath (Coaching / Personal Branding)

## Purpose

Recreation of the ColorLib **Coaching** template as a modern React 19 + Vite +
Tailwind CSS 4 + TypeScript single-page coaching / personal-branding website.

- **Source**: ColorLib Coaching — https://colorlib.com/wp/template/coaching/
- **Preview**: https://preview.colorlib.com/theme/coaching/
- **Stack**: React 19, Vite (latest), Tailwind CSS 4, TypeScript (strict)
- **New name**: `coachpath` (apps/coachpath, @free-react-templates/coachpath)

---

## Design Tokens (extracted from preview)

| Token | Value | Notes |
|---|---|---|
| **Primary / brand color** | `#373a6d` | Navy indigo — hero bg, services section bg, footer bg, text-primary |
| **Warning / CTA color** | `#ffc107` (Bootstrap warning) | Hero "Contact Me" button, warm amber |
| **Primary button color** | `#007bff` (Bootstrap primary) | Contact form "Send Message", footer newsletter "Send" |
| **Body background** | `#ffffff` | White |
| **Section alt bg** | `#f8f9fa` / `#eff1f3` | Light gray — training section, contact section |
| **Text headings** | `#000000` | Black, all section headings |
| **Text body** | Default (dark gray) | Paragraph text |
| **Font family** | `Quicksand`, sans-serif | Google Font — weights 400, 500, 700 |
| **Hero heading** | White on navy, large serif-like display | "I'm Professional" + typed-words |
| **Button radius** | Default Bootstrap (0.25rem / 4px) | Small rounded corners |
| **Card bg** | `#ffffff` | White service cards on navy background |
| **Card icon color** | `text-primary` → `#373a6d` | Navy icons in About and Services |

### Visual Design (from screenshot)

Professional coaching site with warm navy-and-amber palette. Hero has a dark
indigo background with typed-text animation and amber CTA button. Below, a
full-width image slider overlaps the hero (negative top margin). Clean
two-column about section with icon cards. Light-gray training carousel section.
Testimonials carousel with circular avatar photos. Navy services section with
white card carousel. Two-column blog grid with image thumbnails. Light-gray
contact section with a form. Navy footer with three columns (about, links,
newsletter/social).

---

## Section Order (1:1 from source)

1. **Navbar** — sticky top, logo "CoachPath." (navy primary + amber dot), nav
   links: Home, About, Our Training, Testimonials, Services, Blog, Contact.
   Mobile hamburger menu.
2. **Hero** — dark navy (`#373a6d`) background, large heading "I'm Professional
   [typed-text]" (typewriter effect), subtitle, amber "Contact Me" CTA button
   (smooth-scroll to contact).
3. **Hero Image Slider** — owl-carousel of hero images, overlapping hero via
   negative margin (`margin-top: -20%`). Two images alternating.
4. **About** — two-column layout. Left: heading "Welcome To My Website" +
   three paragraphs. Right: 2-column grid of 2 service icons with titles
   ("Means of Living", "Transform Lives") and blurbs.
5. **Training** — light-gray bg, centered heading "Life Coach Training" + intro
   paragraph, carousel of 3 training cards (image + title + blurb). Cards:
   "Life Coach Training", "Release Your Potential", "Transforming Lives".
6. **Testimonials** — white bg, heading "Happy Customers", carousel of
   testimonial blocks: blockquote + circular avatar + name. 2-3 testimonials.
7. **Services** — navy primary bg, heading "Our Services" (white), carousel of
   white service cards: icon + title + blurb. Cards: "Online Coaching",
   "Release Your Potential", etc.
8. **Blog** — white bg, heading "Our Blog" + intro, 2-column grid of blog
   entries. Each entry: image thumbnail (left) + title + date + excerpt +
   "Read More.." link. 4 entries total.
9. **Contact** — light-gray bg, heading "Contact Me", 3-column contact info
   row (Address, Phone, Email), form: first-name, email, message textarea,
   "Send Message" button (primary).
10. **Footer** — navy primary bg, 3-column layout: "About CoachPath" blurb,
    "Quick Links" list, "Follow Us" social icons + "Subscribe Newsletter"
    form. Copyright line at bottom. Footer links to ComponentDock.

---

## Gherkin Scenarios

### Navbar
- **Scenario: Sticky navbar visible on scroll**
  - Given the page is loaded
  - When the user scrolls down past the hero
  - Then the navbar remains fixed at the top with a visible border/shadow

- **Scenario: Navigation links scroll to sections**
  - Given the page is loaded
  - When the user clicks "About" in the navbar
  - Then the page smooth-scrolls to the About section

- **Scenario: Mobile hamburger toggle**
  - Given the viewport is 768px wide
  - When the user taps the hamburger icon
  - Then a mobile menu slides in with all nav links

### Hero
- **Scenario: Hero displays typed text animation**
  - Given the page is loaded
  - Then the hero heading shows "I'm Professional" followed by a typed-word animation cycling through roles

- **Scenario: Contact Me button scrolls to contact**
  - Given the page is loaded
  - When the user clicks the "Contact Me" button
  - Then the page smooth-scrolls to the Contact section

### About
- **Scenario: About section shows two-column layout**
  - Given the About section is in view
  - Then there are two columns: left has heading + paragraphs, right has 2 icon cards

- **Scenario: Icon cards display titles and descriptions**
  - Given the About section is rendered
  - Then there are exactly 2 icon cards with distinct icons, titles, and descriptions

### Training
- **Scenario: Training carousel shows 3 cards**
  - Given the Training section is rendered
  - Then there are exactly 3 training cards visible in the carousel
  - And each card has an image, title, and description

- **Scenario: Training section has light background**
  - Given the Training section is rendered
  - Then its background color is light gray

### Testimonials
- **Scenario: Testimonials carousel displays quotes**
  - Given the Testimonials section is rendered
  - Then there are at least 2 testimonial blocks
  - And each block has a blockquote, a circular avatar, and a name

### Services
- **Scenario: Services section has navy background**
  - Given the Services section is rendered
  - Then its background color is the brand navy (#373a6d)
  - And all service card text and headings are visible against the navy

- **Scenario: Service cards are white with icons**
  - Given the Services section is rendered
  - Then there are at least 3 service cards
  - And each card has a white background, an icon, a title, and a description

### Blog
- **Scenario: Blog grid shows 4 entries**
  - Given the Blog section is rendered
  - Then there are exactly 4 blog entries in a 2-column grid

- **Scenario: Blog entry has image and metadata**
  - Given a blog entry is rendered
  - Then it has an image thumbnail, a title, a date, an excerpt, and a "Read More.." link

### Contact
- **Scenario: Contact info row shows 3 columns**
  - Given the Contact section is rendered
  - Then there are 3 contact info blocks: Address, Phone, Email

- **Scenario: Contact form has required fields**
  - Given the Contact section is rendered
  - Then there is a form with: first-name input, email input, message textarea, and "Send Message" button

- **Scenario: Contact form validation**
  - Given the Contact form is empty
  - When the user clicks "Send Message"
  - Then the browser shows validation errors on required fields

### Footer
- **Scenario: Footer has three columns**
  - Given the Footer is rendered
  - Then there are 3 columns: About blurb, Quick Links list, Follow Us + Newsletter

- **Scenario: Footer links to ComponentDock**
  - Given the Footer is rendered
  - Then there is a link to https://www.componentdock.com/

- **Scenario: Newsletter form in footer**
  - Given the Footer is rendered
  - Then there is a newsletter email input with a "Send" button

---

## Verification Checklist

- [ ] Navbar is sticky, all 7 nav links scroll to correct sections
- [ ] Hero has typed-text animation, amber CTA button smooth-scrolls
- [ ] Hero image slider overlaps hero with negative margin
- [ ] About section: two-column, heading + paragraphs left, 2 icon cards right
- [ ] Training section: light bg, 3-card carousel with images
- [ ] Testimonials: carousel with quotes, circular avatars, names
- [ ] Services: navy bg, white card carousel with icons
- [ ] Blog: 2-column grid, 4 entries, image + title + date + excerpt + CTA
- [ ] Contact: 3-column info + form with validation
- [ ] Footer: navy bg, 3 columns, ComponentDock link, newsletter form
- [ ] All fonts use Quicksand (Google Fonts)
- [ ] Brand color #373a6d used consistently
- [ ] Mobile responsive (hamburger menu, stacked columns)
- [ ] No references to ColorLib in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links to https://www.componentdock.com/
- [ ] 100% test coverage (lines, functions, branches, statements)
