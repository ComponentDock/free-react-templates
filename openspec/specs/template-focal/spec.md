# Spec: Focal — Photography Portfolio Template

> Recreation of ColorLib "Bato" (https://colorlib.com/wp/template/bato/)
> Preview: https://preview.colorlib.com/theme/bato/

## Design tokens (extracted from preview CSS)

| Token          | Value                                             |
| -------------- | ------------------------------------------------- |
| Brand accent   | `#F9CE00` (golden yellow)                         |
| Body bg        | `#ffffff`                                         |
| Body text      | `gray`                                            |
| Heading color  | `rgba(0,0,0,0.8)` (near-black)                    |
| Span text      | `rgba(114,114,114,0.8)`                           |
| Selection bg   | `#b7c2c2` (teal-gray)                             |
| Footer bg      | `#ffffff`                                         |
| Footer text    | `#000000`                                         |
| Body font      | `"Karla", sans-serif`                             |
| Heading font   | `"Playfair Display", Georgia, serif`              |
| CTA button     | uppercase, letter-spacing 7px, color black, no bg |
| Primary button | bg `#F9CE00`, text white, border 2px `#F9CE00`    |
| Submit button  | bg `#000000`, text white                          |
| Slide number   | 220px font, watermark style, bottom-positioned    |
| Tag badge      | uppercase, small, yellow bg or text               |

## Sections (in order)

1. **Navbar** — Brand name "Focal" left-aligned, hamburger menu right-aligned (mobile: slides in side nav from right with links: Home, Work, Blog, About, Contact)
2. **Hero** — Full-height section: 60% background image (left) + 40% text panel (right). Each slide has:
   - Slide number (large watermark style, e.g. "01/03")
   - Tag label (uppercase, small)
   - Heading (Playfair Display, 58px, bold)
   - Description paragraph
   - CTA button ("View Galleries →")
3. **Work Gallery** — Grid of portfolio images with hover overlay (search icon)
4. **About** — Split layout: image left, text right with heading + description
5. **Contact** — Contact info + form (name, email, message, submit button)
6. **Footer** — Social icons row, copyright text, "More templates at Component Dock" link

## Scenarios (Gherkin)

### Navbar

- **Scenario: Brand name renders**
  - Given the page loads
  - Then the navbar displays "Focal"
- **Scenario: Mobile nav toggle**
  - Given the viewport is narrow
  - When the user clicks the hamburger icon
  - Then the side navigation slides in from the right

### Hero

- **Scenario: Hero content renders**
  - Given the page loads
  - Then the hero section displays a slide number "01/03"
  - And the hero section displays heading text
  - And the hero section displays a "View Galleries" CTA button
- **Scenario: Slide navigation**
  - Given the hero has multiple slides
  - When the user clicks next/prev controls
  - Then the visible slide changes

### Work Gallery

- **Scenario: Gallery images render**
  - Given the page loads
  - Then the gallery section displays portfolio images

### About

- **Scenario: About section renders**
  - Given the page loads
  - Then the about section displays heading and description text

### Contact

- **Scenario: Contact form renders**
  - Given the page loads
  - Then the contact section displays name, email, and message fields
  - And a submit button

### Footer

- **Scenario: Footer component link**
  - Given the page loads
  - Then the footer contains a link to "https://www.componentdock.com/"
  - And the link text mentions "Component Dock"
