# Template: WorkCraft (Portfolio / Personal)

## Purpose

Recreation of the ColorLib **Work** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page app.

- **Source**: [ColorLib Work](https://colorlib.com/wp/template/work/)
- **Preview URL**: https://preview.colorlib.com/theme/work/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/work-free-template.jpg
- **Stack**: Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Category**: Portfolio (TEMPLATES.md line 2579)

## Design Tokens

Extracted from the live preview stylesheet (`css/style.css`):

| Token | Value | Usage |
|---|---|---|
| `--brand-accent` | `#F75940` | Primary CTA buttons, links, hover states |
| `--brand-accent-light` | `#f86e58` | Hover/accent variant |
| `--text-dark` | `#333333` | Headings, body text |
| `--text-medium` | `#666666` | Secondary text |
| `--text-light` | `#999999` | Tertiary text, captions |
| `--bg-white` | `#ffffff` | Page background |
| `--bg-light` | `#fafafa` | Alternate section backgrounds |
| `--bg-border` | `#e6e6e6` | Borders, dividers |
| `--font-primary` | `"Quicksand", sans-serif` | All text (headings + body) |
| `--radius-button` | `30px` | Pill-shaped CTA buttons |
| `--radius-card` | `4px` | Card border radius |

### Color palette summary

- Minimal palette: white/light gray backgrounds with red-orange (`#F75940`) accent
- Single font family: Quicksand (headings + body)
- Dark footer with semi-transparent overlay (`rgba(0,0,0,0.6)`)
- Clean, airy design with generous whitespace
- Pill-shaped buttons with red-orange fill

## Section Structure (top → bottom)

1. **Navbar** — Overlay/transparent nav with logo "Work" (split-styled), links: Home, Work, About, Services, Blog, Contact. Hamburger on mobile.
2. **Hero Slider** — Full-width image slider with 3 slides, each with: heading (e.g. "Strategic Design for Brands"), subtext "100% html5 bootstrap templates Made by colorlib.com", "Learn More" pill CTA. FlexSlider-based carousel.
3. **About / Welcome** — "Welcome & Introduce" heading, intro paragraph about the persona ("Hola! my name is Louie Jie!"), "Why choose me?" sub-section with descriptive text.
4. **What I Do** — "What I do?" section with brief intro text and 2-3 key points about services/approach.
5. **Specialties** — "My Specialties" heading with descriptive text, likely with visual elements or icons.
6. **Expertise Grid** — "Here are some of my expertise" heading, 6 items in 2×3 or 3×2 grid: Branding, Web Design, Search Engine Optimization, Web Development, User Interface, Help & Support. Each: icon, title, description paragraph.
7. **Portfolio / Work** — "My Work" / "Recent Work" heading, 6 project thumbnails in grid. Each: image (placeholder), category labels (e.g. "Branding, Illustration"), two numbers (likely dimensions or stats). Hover overlay with details.
8. **Blog** — "Recent Blog" heading, 3 blog post cards. Each: image, date, category tag, comment count, title, excerpt, "Read More" link.
9. **Contact** — "Get in Touch!" heading, brief text, "Contact me!" CTA button.
10. **Footer** — Dark footer with copyright notice, attribution text, social links.

## Gherkin Requirements

### Scenario: Navbar renders with overlay style
- Given the user is on the landing page
- Then a transparent/overlay navbar is visible with the logo "WorkCraft"
- And navigation links: Home, Work, About, Services, Blog, Contact
- When the viewport is below lg breakpoint
- Then a hamburger toggle appears
- And clicking it expands/collapses the nav menu

### Scenario: Hero slider displays and cycles
- Given the user views the top of the page
- Then a full-width hero slider is visible
- And slide 1 shows heading "Strategic Design for Brands"
- And a "Learn More" pill CTA button is displayed
- When 5 seconds pass (or user swipes)
- Then the slider transitions to the next slide
- And slide 2 shows "Creators of Brands Template"
- And slide 3 shows "Design & develop functional sites"

### Scenario: About section introduces the persona
- Given the user scrolls to the About section
- Then a "Welcome & Introduce" heading is displayed
- And an intro paragraph introduces the persona
- And a "Why choose me?" sub-section is present with explanatory text

### Scenario: What I Do section displays service overview
- Given the user scrolls to the "What I do?" section
- Then a heading and descriptive text are shown
- And 2-3 key service points are listed

### Scenario: Expertise grid shows 6 items
- Given the user scrolls to the expertise section
- Then 6 expertise items are displayed in a grid
- And each item shows: an icon, title (Branding, Web Design, SEO, Web Development, UI, Help & Support), and a description

### Scenario: Portfolio shows 6 work items
- Given the user scrolls to the "Recent Work" section
- Then 6 project thumbnails are displayed in a grid
- And each thumbnail shows an image with category labels
- When the user hovers over a thumbnail
- Then an overlay with project details appears

### Scenario: Blog section shows 3 posts
- Given the user scrolls to the "Recent Blog" section
- Then 3 blog post cards are displayed
- And each card shows: image, date, category, comment count, title, excerpt, "Read More" link

### Scenario: Contact section has CTA
- Given the user scrolls to the contact section
- Then a "Get in Touch!" heading is visible
- And a "Contact me!" CTA button is displayed

### Scenario: Footer contains required links
- Given the user scrolls to the footer
- Then a dark footer section is visible
- And copyright text is displayed
- And a "Made with Component Dock" link pointing to `https://www.componentdock.com/` is present

### Scenario: Responsive layout
- Given the user views the page on a mobile device (width < 768px)
- Then sections stack vertically
- And the navbar collapses to a hamburger menu
- And the portfolio grid becomes 1-2 columns
- And blog cards stack vertically

## Verification Checklist

- [ ] All 10 sections render in correct order
- [ ] Navbar is transparent/overlay with responsive hamburger
- [ ] Hero slider has 3 slides with auto-transition
- [ ] About section with persona intro and "Why choose me?"
- [ ] "What I Do" section with service overview
- [ ] Expertise grid with 6 items (icons, titles, descriptions)
- [ ] Portfolio grid with 6 project thumbnails + hover overlays
- [ ] Blog section with 3 post cards
- [ ] Contact section with CTA button
- [ ] Dark footer with Component Dock link
- [ ] Responsive at mobile/tablet/desktop
- [ ] Font: Quicksand (all text)
- [ ] Brand accent #F75940 used for CTAs and links
- [ ] Pill-shaped buttons (border-radius: 30px)
- [ ] No ColorLib references in app code
- [ ] `public/CNAME` contains `workcraft.free.componentdock.com`
- [ ] Footer links to `https://www.componentdock.com/`
