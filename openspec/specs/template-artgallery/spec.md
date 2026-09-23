# Template: ArtGallery (Museum / Art Gallery)

## Purpose

Recreation of ColorLib **Art Museum** template.

- Source slug: `art-museum`
- Preview URL: https://preview.colorlib.com/theme/art-museum/ (unreachable — fell back to screenshot analysis)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/artmuseum-free-template-1.jpg
- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from screenshot analysis (preview unreachable):

| Token              | Value                          | Notes                                                      |
| ------------------ | ------------------------------ | ---------------------------------------------------------- |
| Font family (heading) | `"Playfair Display", serif` | Elegant serif for hero heading, section headings           |
| Font family (body) | `"Poppins", sans-serif`        | Clean sans-serif for body text and navigation              |
| Brand accent       | `#7ec843`                      | Lime green — icons, headings, CTA buttons                  |
| Dark navy          | `#1a2b3c`                      | Top bar background, dark sections                          |
| White              | `#ffffff`                      | Content section backgrounds                                |
| Light gray bg      | `#f5f5f5`                      | Info card backgrounds                                      |
| Body text          | `#333333`                      | Default paragraph color                                    |
| Muted text         | `#777777`                      | Secondary/meta text                                        |
| Button radius      | `0` (rectangular)              | Sharp corners on CTA buttons                               |
| Overlay            | `rgba(0,0,0,0.5)`              | Semi-transparent over hero image                           |
| Top bar bg         | `#1a2b3c`                      | Dark navy thin bar at top                                  |

## Visual design (from screenshot reference)

The template is a **museum / art gallery website** with an elegant, clean aesthetic. A thin dark navy top bar with utility links ("Visit Us", "Buy Ticket") and social icons. Transparent navbar overlaid on the hero with a green circle logo icon and "Art Museum" wordmark. Full-viewport hero with an impressionist oil painting background (cityscape with blue, yellow, orange tones), dark overlay, centered content with an announcement subheading, large serif heading "Exhibition on Modern Era", description text, and a lime green "GET STARTED" button. Three info cards on white background (Opening Hours, Ongoing Exhibitions, Opening Events) with green icons and headings. A large decorative quote section. The template continues with a gallery section (lightbox), events section, ticket section, blog section, contact form with Google Maps, and a dark footer.

## Requirements (Gherkin)

### Feature: Top bar

- **Scenario:** Utility bar with links and social icons
  - Given the user loads the page
  - Then a thin dark navy top bar is displayed
  - And "Visit Us" and "Buy Ticket" links are on the left
  - And social icons (Facebook, Twitter, Instagram, Google+) are on the right

### Feature: Navbar

- **Scenario:** Logo and navigation links are visible
  - Given the user loads the page
  - Then the navbar is transparent and overlaid on the hero
  - And the logo shows a green circle icon with "ArtGallery" text on the left
  - And navigation links: Home, About, Gallery, Events, Ticket, Blog, Contact, Pages
  - And the Pages link has a dropdown indicator

- **Scenario:** Mobile menu toggle works
  - Given the viewport is below lg breakpoint
  - Then the hamburger menu icon is visible
  - And clicking it opens the mobile navigation drawer

- **Scenario:** Navbar becomes solid on scroll
  - Given the user scrolls past the hero section
  - Then the navbar background becomes solid (dark or white)

### Feature: Hero section

- **Scenario:** Hero displays exhibition announcement and CTA
  - Given the user is on the homepage
  - Then a full-viewport hero section shows with a painting/art background image and dark overlay
  - And the subheading "OPENING ON 21ST FEBRUARY, 2018" is centered
  - And the heading "Exhibition on Modern Era" is displayed in large serif font
  - And a description paragraph is shown below the heading
  - And a "GET STARTED" button (lime green, rectangular) is centered

- **Scenario:** Hero is responsive
  - Given the viewport changes to mobile
  - Then the hero section adjusts height and text remains centered

### Feature: Info cards

- **Scenario:** Three info cards with icons
  - Given the info section is visible
  - Then three cards are displayed in a row on white background
  - And card 1 shows: clock icon (green), "Opening Hours" heading, hours text
  - And card 2 shows: rocket icon (green), "Ongoing Exhibitions" heading, hours text
  - And card 3 shows: calendar icon (green), "Opening Events" heading, hours text

### Feature: About / Quote section

- **Scenario:** Decorative quote with description
  - Given the quote section is visible
  - Then a large decorative quote text is displayed (e.g., "Music gives soul to the universe...")
  - And a description paragraph is shown to the right of the quote

### Feature: Gallery

- **Scenario:** Lightbox gallery grid
  - Given the gallery section is visible
  - Then a heading "Our Gallery" is shown
  - And a grid of artwork images is displayed
  - And clicking an image opens a lightbox overlay

### Feature: Events

- **Scenario:** Upcoming events list
  - Given the events section is visible
  - Then a heading "Upcoming Events" is shown
  - And event cards display: date, title, description, location

### Feature: Ticket

- **Scenario:** Ticket pricing or purchase section
  - Given the ticket section is visible
  - Then ticket information or pricing cards are displayed

### Feature: Blog

- **Scenario:** Blog post previews
  - Given the blog section is visible
  - Then a heading "Latest News" or "Blog" is shown
  - And blog post cards display: image, title, excerpt, date

### Feature: Contact

- **Scenario:** Contact form and Google Maps
  - Given the contact section is visible
  - Then a contact form with fields (name, email, subject, message) is displayed
  - And a Google Maps embed or placeholder is shown

### Feature: Footer

- **Scenario:** Dark footer with multiple columns
  - Given the user scrolls to the footer
  - Then a dark footer is displayed with multiple columns of links
  - And social media icons are included
  - And a copyright line with "Component Dock" link is at the bottom

- **Scenario:** Footer links are accessible
  - Given the footer is visible
  - Then all footer links have visible text and are keyboard navigable

## Verification checklist

- [ ] Top bar renders with utility links and social icons
- [ ] Navbar shows with transparent overlay, becomes solid on scroll
- [ ] Hero shows painting background, announcement, heading, and green CTA
- [ ] Info cards display with green icons and headings
- [ ] Quote section shows decorative text
- [ ] Gallery grid displays with lightbox functionality
- [ ] Events section shows upcoming event cards
- [ ] Ticket section displays pricing or info
- [ ] Blog section shows post previews
- [ ] Contact form and map placeholder render
- [ ] Footer has multiple columns and Component Dock link
- [ ] All sections match the original ColorLib layout and token colors
- [ ] 100% test coverage on all components
- [ ] Template builds without errors
- [ ] No ColorLib references in app code
