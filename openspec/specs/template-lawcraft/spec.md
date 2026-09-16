# Template: Lawcraft (Law Firm Landing Page)

## Purpose

Lawcraft is a single-page LAW FIRM LANDING PAGE in the free-react-templates
monorepo. It is a React recreation of the ColorLib "Lawride" free template
(source: https://colorlib.com/wp/template/lawride/), built under a DIFFERENT
name (**Lawcraft**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4
+ TypeScript.

The original is a Bootstrap 4 law firm website with: a dark top bar (phone,
email, social), a white navbar, a hero banner with dark overlay and centered
CTA, overlapping stat cards, a split about section with video player, a practice
areas card grid, a testimonial carousel, an attorney/team card grid, a dark CTA
band, a blog card grid, and a dark footer with newsletter + InstaFeed.

**WHAT MAKES LAWRAFT DISTINCT (signature characteristics):**

1. **Orange brand palette.** Primary brand color `#de6320` (burnt orange) used
   pervasively: buttons, hover states, icon accents, CTA backgrounds, navbar
   active state, video play triangle, testimonial quote marks, footer link
   hovers. Fixed header background is a darker orange `#c2581e`. Footer and
   top bar are near-black (`#04091e` / `#0f0f16`).

2. **Lora serif + Roboto sans-serif pairing.** Headings use `"Lora", serif`
   (Google Fonts); body uses `"Roboto", sans-serif`. This serif/sans
   combination gives the law firm aesthetic a formal yet modern feel.

3. **Square/rectangular buttons with zero border-radius.** All CTA buttons
   use `border-radius: 0` — no rounding. Brand-colored fill with white text.
   Hover goes to green (original behavior, though arguably a design quirk).

4. **Overlapping stat cards.** Four white stat cards (`static__single`) sit
   below the hero but overlap it on desktop (positioned at `bottom: -40px`
   with `z-index: 50`). Each card has a large number (36px) with an orange
   underline, a label, and a soft box shadow.

5. **Dark hero with orange CTA.** Hero is a full-width background image with
   `rgba(2,4,23,0.702)` dark overlay. White centered heading and orange
   button. Height scales: 400px mobile, 600px tablet, 800px desktop.

6. **About section with video player.** Left side has a background image with
   dark overlay and a pulsing circular play button (white circle with orange
   triangle). Right side has heading, two paragraphs, and a "Learn More"
   button.

7. **Practice area cards with orange overlay on hover.** Four cards with
   images, an orange semi-transparent overlay that slides up on hover
   (`rgba(222,99,32,0.51)`), and a light gray body. Title link + description.

8. **Testimonial carousel.** Client testimonials in a carousel with avatar,
   name, role, italic quote, and a large decorative quote icon. Section
   background is light gray `#f7f7f7`.

9. **Team/attorney cards.** Four member cards with photo, name, role, and
   social links (Facebook, Twitter, Instagram, Skype). Orange border appears
   on hover.

10. **Dark CTA band with background image.** Full-width section with dark
    overlay, white heading "Free Case Evaluation", and an orange "Contact us
    Now" button.

11. **Blog cards.** Three post cards with image, title, date/comment meta,
    description, and a "Read More" footer link that turns orange on hover.

12. **Dark footer.** Near-black `#04091e` background, four columns: About
    Agency (text), Navigation Links (two-column list), Newsletter (email
    input + orange submit button), InstaFeed (4-column image grid). Footer
    social icons. Orange link hovers. "Made with Component Dock" attribution.

## Design Tokens

Extracted from `https://preview.colorlib.com/theme/lawride/css/style.css`:

| Token | Value | Usage |
|-------|-------|-------|
| `--color-brand` | `#de6320` | Buttons, links, hover states, video play, accents |
| `--color-brand-dark` | `#c2581e` | Fixed navbar background |
| `--color-heading` | `#222` | All heading text (h1–h6) |
| `--color-body` | `#777` | Body text, paragraphs |
| `--color-light-gray` | `#f7f7f7` | Section backgrounds (testimonial, team cards) |
| `--color-albaster` | `#f7f7f7` | `.bg-albaster` class |
| `--color-border` | `#eeeeee` | Card borders, separators |
| `--color-dark-bg` | `#04091e` | Footer background |
| `--color-topbar-bg` | `#0f0f16` | Top header bar |
| `--color-overlay-dark` | `rgba(2,4,23,0.702)` | Hero banner overlay |
| `--color-overlay-cta` | `rgba(1,0,9,0.6)` | CTA section overlay |
| `--color-overlay-about` | `rgba(1,0,9,0.6)` | About video overlay |
| `--color-overlay-practice` | `rgba(222,99,32,0.51)` | Practice area hover overlay |
| `--font-heading` | `"Lora", serif` | All headings |
| `--font-body` | `"Roboto", sans-serif` | Body text, nav links |
| `--radius-button` | `0` | All CTA buttons (square/rectangular) |
| `--radius-card` | `0` | Stat cards (4px), practice area cards (0) |
| `--shadow-card` | `0px 15px 20px 0px rgba(153,153,153,0.1)` | Stat cards |
| `--shadow-card-hover` | `0px 10px 30px 0px rgba(153,153,153,0.2)` | Practice area hover |

## Gherkin Requirements

### Scenario: Header Top Bar
- GIVEN a visitor loads the page
- THEN a dark top bar displays phone "+014 321 523 23" and email "Info@example.com"
- AND social links (Facebook, Twitter, Instagram, Skype) are shown with orange separators

### Scenario: Navbar
- GIVEN the page is loaded
- THEN a white navbar shows the logo and navigation: Home, About, Services, Pages (dropdown with Blog, Blog Details), Contact
- AND the active nav item is highlighted in brand orange `#de6320`
- WHEN the user scrolls down on desktop
- THEN the navbar becomes fixed with a dark orange `#c2581e` background

### Scenario: Hero Banner
- GIVEN the page is loaded
- THEN a full-width hero section displays with a dark background image
- AND a centered heading "We Well Understand Your Intention" in white
- AND an orange "Make an Appoinment" CTA button

### Scenario: Statistics Cards
- GIVEN the hero banner is displayed
- THEN four white stat cards overlap the bottom of the hero on desktop
- AND each card shows a large number (35 Dedicated Lawyer, 1526 Successful Cases, 720 Satisfied Client, 680 Personal Cases)
- AND each number has an orange underline accent

### Scenario: About Section
- GIVEN the page is loaded
- THEN a split layout shows a video thumbnail on the left and content on the right
- AND the video thumbnail has a dark overlay with a pulsing play button
- AND the content side shows heading "We Properly Understand Your Purpose" with two paragraphs and a "Learn More" button

### Scenario: Practice Areas
- GIVEN the user scrolls to the practice areas section
- THEN four practice area cards are displayed in a grid (Employment Law, Personal Injury, Family Law, Bank & Financial)
- AND each card has an image with an orange overlay on hover
- AND a "View All Practices" button is centered below the grid

### Scenario: Testimonials
- GIVEN the user scrolls to the testimonial section
- THEN a carousel shows client testimonials with avatar, name, role, and italic quote
- AND the section has a light gray `#f7f7f7` background

### Scenario: Team / Attorneys
- GIVEN the user scrolls to the team section
- THEN four attorney cards are displayed with photo, name, role, and social links
- AND hovering a card shows an orange border on the card body

### Scenario: CTA Band
- GIVEN the user scrolls to the CTA section
- THEN a full-width dark section with background image displays
- AND white heading "Free Case Evaluation" with an orange "Contact us Now" button

### Scenario: Blog Section
- GIVEN the user scrolls to the blog section
- THEN three blog post cards are displayed with image, title, date, comment count, and description
- AND each card has a "Read More" footer link that turns orange on hover

### Scenario: Footer
- GIVEN the user scrolls to the footer
- THEN a dark `#04091e` footer shows four columns: About Agency, Navigation Links, Newsletter, InstaFeed
- AND newsletter has an email input with an orange submit button
- AND all footer links hover to orange
- AND the footer includes a "Made with Component Dock" attribution link to `https://www.componentdock.com/`

## Verification Checklist

- [ ] Header Top Bar: dark background, phone + email info, social icons with orange separators
- [ ] Navbar: white bg, Lora/Roboto fonts, orange active state, fixed on scroll with orange bg
- [ ] Hero: full-width image, dark overlay, white heading, orange CTA button
- [ ] Stat Cards: 4 cards overlapping hero on desktop, numbers with orange underline, soft shadow
- [ ] About: split layout, video thumbnail with pulsing play button, content with heading + paragraphs + button
- [ ] Practice Areas: 4 cards in grid, image hover overlay (orange), "View All Practices" button
- [ ] Testimonials: carousel, avatar + name + role + italic quote, light gray background
- [ ] Team: 4 attorney cards, photo + name + role + social links, orange border on hover
- [ ] CTA Band: dark overlay bg, white heading, orange button
- [ ] Blog: 3 cards, image + title + meta + description + "Read More" link
- [ ] Footer: dark bg, 4 columns, newsletter input, InstaFeed grid, Component Dock link
- [ ] Design tokens: brand `#de6320`, Lora headings, Roboto body, zero-radius buttons
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links to `https://www.componentdock.com/`
