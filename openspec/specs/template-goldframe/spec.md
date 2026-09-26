# Template: GoldFrame (Photography / Portfolio)

## Purpose

GoldFrame is a single-page photography portfolio template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Mostudio" free template (source:
https://colorlib.com/wp/template/mostudio/), built under a DIFFERENT name
(**GoldFrame**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4 photography portfolio with a LEFT sidebar
navigation and a scrollable main content area containing alternating
image-text portfolio rows. The sidebar is solid BLACK (#000000) with a
background image, white text, Poppins font, and a newsletter subscribe form.
The main content shows 9 portfolio items in a alternating layout (image
left / text right, then image right / text left) — each with a category
subheading, title, description paragraph, and a gold "View Portfolio" CTA
button. A "Load more" link sits at the bottom. The overall aesthetic is
clean, editorial photography with a luxurious gold accent.

**WHAT MAKES GOLDFRAME DISTINCT (signature behaviors):**

1. **Black sidebar with logo, nav, and newsletter.** The sidebar
   (`#colorlib-aside`) is a fixed-position left panel (270px wide on
   desktop, collapsible on mobile) with background `#000000` (with an
   overlay image). The logo "GoldFrame" sits at the top with a background
   image placeholder. Navigation links: Home, Gallery, About, Pricing,
   Contact — white text, uppercase, Poppins. Active link gets a gold
   (#f3c623) left border + gold color. Below nav: a "Subscribe for
   newsletter" section with a paper-plane icon input.
2. **Alternating portfolio rows with full-height images.** The main content
   area (`#colorlib-main`) contains 9 `portfolio-wrap` sections. Each is a
   50/50 split: one side is a full-height background image (with a
   magnify-icon overlay on hover), the other side is text content. The
   layout alternates: odd items = image LEFT + text RIGHT, even items =
   image RIGHT + text LEFT (via `order-md-last`). Images use
   `background-image` CSS (not `<img>` tags) and are full-height
   (`js-fullheight` class).
3. **Gold accent throughout.** The brand color `#f3c623` (golden yellow)
   appears on: custom buttons (uppercase, 12px, letter-spacing 3px,
   weight 700), active nav link, hover states, and the loader spinner
   stroke. This gold-on-black palette creates a luxury photography
   aesthetic.
4. **Typography: Poppins + Abril Fatface.** Body text uses Poppins
   (300-700) from Google Fonts. Display headings (logo area) use Abril
   Fatface. Category subheadings are uppercase, letter-spaced, small
   size. Portfolio titles are bold h2.
5. **No hero section — straight into portfolio.** Unlike most templates,
   there is NO hero/intro banner. The page opens directly with the first
   portfolio row. The sidebar IS the persistent header/navigation.
6. **"Load more" at the bottom.** A full-width link with refresh icon
   sits below the last portfolio item (purely decorative in the demo —
   no actual pagination logic).
7. **Full-page loader.** A circular SVG spinner (stroke `#F96D00` on
   `#eeeeee` ring) shows fullscreen on load, then hides.

## Design Tokens

| Token | Value | Source |
|-------|-------|--------|
| Brand/accent color | `#f3c623` (golden yellow) | CSS `.custom-btn`, `.colorlib-active` |
| Sidebar background | `#000000` (black) | CSS `#colorlib-aside` |
| Body/page background | `#ffffff` (white) | CSS `body` |
| Primary text | `#000000` | CSS `colorlib-main` headings |
| Secondary text | `#666666` / `#999999` | Paragraphs, subheadings |
| Button text | `#f3c623` | `.custom-btn` color |
| Button style | uppercase, 12px, letter-spacing 3px, weight 700, no background/border | `.portfolio-wrap .text .desc .custom-btn` |
| Font family (body) | Poppins (300, 400, 500, 600, 700) | Google Fonts `@font-face` |
| Font family (display) | Abril Fatface (400) | Google Fonts `@font-face` |
| Nav active indicator | Gold left border + gold text | `.colorlib-active a` |
| Image overlay icon | Font Awesome expand icon, white, circular bg | `.portfolio-wrap .img .icon` |
| Section layout | 50/50 split, no gutters, alternating order | `.portfolio-wrap .row.no-gutters` |
| Sidebar width | ~270px desktop, full-width overlay mobile | Media queries |

## Gherkin Requirements

### Feature: GoldFrame Photography Portfolio Template

#### Scenario: Sidebar navigation renders correctly
  Given the user loads the GoldFrame page
  Then a fixed left sidebar should be visible with a dark (#000000) background
  And the sidebar should display the "GoldFrame" logo text at the top
  And the sidebar should contain navigation links: Home, Gallery, About, Pricing, Contact
  And the "Home" link should be visually active (gold accent)
  And the sidebar should include a newsletter subscribe section with an email input

#### Scenario: Portfolio items display in alternating layout
  Given the user scrolls the main content area
  Then 9 portfolio items should be rendered
  And odd-numbered items should show the image on the left and text on the right
  And even-numbered items should show the image on the right and text on the left
  And each portfolio item should have a category subheading, title, description, and CTA button

#### Scenario: Portfolio images have hover overlay
  Given a portfolio image is displayed
  When the user hovers over the image area
  Then a magnify/expand icon overlay should appear centered on the image

#### Scenario: Custom buttons use gold accent styling
  Given a portfolio item's CTA button is rendered
  Then the button text should be uppercase
  And the button color should be gold (#f3c623)
  And the button should have letter-spacing and bold weight

#### Scenario: Mobile responsive sidebar collapses
  Given the user views the page on a mobile viewport (< 768px)
  Then the sidebar should be hidden by default
  And a hamburger toggle should be visible
  And clicking the toggle should slide the sidebar in as an overlay

#### Scenario: Load more link renders at bottom
  Given the user scrolls to the bottom of the portfolio list
  Then a "Load more" link with a refresh icon should be visible
  And it should span the full width of the content area

#### Scenario: Footer in sidebar shows copyright
  Given the user scrolls to the bottom of the sidebar
  Then a copyright line should be visible
  And it should link to Component Dock (https://www.componentdock.com/)

## Verification Checklist

- [ ] Sidebar renders with black background, logo, nav links, newsletter form
- [ ] Navigation has 5 links with active state on Home
- [ ] 9 portfolio items render in alternating left/right layout
- [ ] Each item has subheading, title, description, gold CTA button
- [ ] Image hover shows magnify overlay icon
- [ ] Custom button styling: uppercase, 12px, letter-spacing 3px, #f3c623
- [ ] Poppins font loads from Google Fonts (body)
- [ ] Abril Fatface font loads from Google Fonts (display)
- [ ] Mobile: sidebar collapses, hamburger toggle works
- [ ] Load more link renders at portfolio bottom
- [ ] Footer links to Component Dock
- [ ] Placeholder images use picsum.photos with deterministic seeds
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Tests pass with 100% coverage
- [ ] Build succeeds, no type errors
