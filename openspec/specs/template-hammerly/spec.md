# Template: Hammerly (Construction Company)

## Purpose

Recreation of ColorLib **Webuilder** — a construction company website template.
- **Source:** https://colorlib.com/wp/template/webuilder/
- **Preview:** https://preview.colorlib.com/theme/webuilder/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name:** `hammerly` (never reuse the ColorLib source name)

## Design Tokens

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| brand-primary | `#ffcd00` | Buttons, highlights, CTA, address bar bg, nav active |
| dark-bg | `#1e2126` | Very dark sections: top bar, quote area, services |
| dark-gray | `#31353d` | Counter/stats section bg |
| body-text | `#444444` | Primary text color |
| section-light | `#f5f5f5` | Testimonials, clients bg |
| section-gray | `#e8e8e8` | Divider/light sections |
| white | `#ffffff` | Nav bar bg, text on dark sections |

### Typography
- **Primary font:** `"Montserrat", sans-serif` (headings, nav)
- **Secondary font:** `"Open Sans", sans-serif` (body, quotes)
- **Tertiary font:** `"PT Sans", sans-serif` (accents)
- **Nav links:** Montserrat, uppercase, bold
- **Hero headline:** Montserrat, large, bold, `#ffcd00` yellow
- **Body text:** Open Sans, 14-16px, `#444444`

### Buttons
- Yellow CTA buttons: `#ffcd00` bg, dark text, bold Montserrat
- Quote area button: yellow bg with dark text

## Visual Reference (Screenshot Analysis)

Modern construction aesthetic:
- **Top bar:** Dark `#1e2126` with phone/address/hours in white, social icons right
- **Navigation:** White bar, "WEBUILDER" logo (hard hat icon + dark text), nav links, cart icon with yellow badge
- **Hero:** Full-width bg image (construction worker with yellow hard hat + tool belt), large yellow "WE INNOVATE" headline, "We are weBuilder" subtext, decorative yellow lines
- **Overall:** Clean professional construction; yellow `#ffcd00` + dark charcoal; Montserrat font; modern and polished

## Section Structure (page order)

| # | Section | CSS class | Background |
|---|---------|-----------|------------|
| 1 | Top Bar | (header top) | `#1e2126` dark |
| 2 | Navigation | `main_menu_area` | White |
| 3 | Hero Slider | `main_slider_area` | Bg image + overlay |
| 4 | Get Quote CTA | `get_quote_area` | `#1e2126` dark |
| 5 | Who We Are | `who_we_are_area` | White |
| 6 | Our Services | `our_service_area` | `#1e2126` dark |
| 7 | Our Projects | `our_project_area` | White |
| 8 | Work With Us CTA | `work_area` | Bg image + overlay |
| 9 | Our Team | `our_team_area` | White |
| 10 | Counter/Stats | `counter_area` | `#31353d` dark gray |
| 11 | Testimonials | `testimonials_area` | `#f5f5f5` light |
| 12 | Latest News | `latest_news_area` | White |
| 13 | Clients/Partners | `clients_area` | `#f5f5f5` light |
| 14 | Address/Contact | `address_area` | `#ffcd00` yellow |

## Gherkin Requirements

### Top Bar
```gherkin
Scenario: Top bar displays contact info
  Given the user views the page
  Then the top bar shows phone number, address, and business hours
  And social media icon links are on the right
  And the top bar background is dark (#1e2126)
```

### Navigation
```gherkin
Scenario: Navigation displays all menu items
  Given the user views the page
  Then the nav shows links: Home, Projects, Services, About Us, Blog, Contact
  And the logo "Hammerly" with a hard hat icon is on the left
  And a cart icon with a badge count is on the right
  And the active nav link is highlighted in yellow
```

### Hero Slider
```gherkin
Scenario: Hero section shows innovation message
  Given the user views the page
  Then a full-width hero with a construction bg image is shown
  And a dark overlay covers the image
  And a large yellow headline reads "WE INNOVATE"
  And a subtext reads "We are Hammerly"
  And decorative yellow lines are on the left side
```

### Get Quote CTA
```gherkin
Scenario: Quote bar prompts contact
  Given the user scrolls past the hero
  Then a dark bar with a quote question is shown
  And a yellow CTA button prompts the user to get a quote
```

### Who We Are
```gherkin
Scenario: About section shows company info
  Given the user scrolls to about section
  Then a "Who We Are" heading is displayed
  And a two-column layout shows image + text
  And an "All About Us" sub-heading is present
```

### Our Services
```gherkin
Scenario: Services section on dark background
  Given the user scrolls to services
  Then the section has a dark (#1e2126) background
  And service categories are shown: Pre-Construction, New-Construction, Remodel & Remodel
  And each has a description and icon
```

### Our Projects
```gherkin
Scenario: Projects gallery
  Given the user scrolls to projects
  Then an "Our Projects" heading is displayed
  And project cards show images and titles (e.g. "Jahanara Vila")
  And a "Great & Awesome Works" sub-heading is present
```

### Work With Us CTA
```gherkin
Scenario: CTA section with bg image
  Given the user scrolls to the work section
  Then a background image with dark overlay is shown
  And "Work With Us" heading is displayed
  And a yellow "Get Offer" CTA button is present
```

### Our Team
```gherkin
Scenario: Team section displays members
  Given the user scrolls to team
  Then an "Our Team" heading is shown
  And team member cards show photo, name, and role
```

### Counter/Stats
```gherkin
Scenario: Stats section shows project counts
  Given the user scrolls to counter section
  Then a dark gray (#31353d) background is shown
  And counter stats display (e.g. "245 Total Projects", "535" another stat)
```

### Testimonials
```gherkin
Scenario: Testimonials on light background
  Given the user scrolls to testimonials
  Then a light (#f5f5f5) background is shown
  And client quotes with photos and names are displayed
  And a "Golden Word" sub-heading is present
```

### Latest News
```gherkin
Scenario: Blog posts displayed
  Given the user scrolls to news
  Then a "Latest News" heading is shown
  And blog post cards with thumbnails, titles, and dates are in a grid
```

### Clients/Partners
```gherkin
Scenario: Client logos carousel
  Given the user scrolls to clients
  Then a light (#f5f5f5) background is shown
  And partner/client logos are displayed in a carousel
```

### Address/Contact
```gherkin
Scenario: Contact bar on yellow background
  Given the user scrolls to the address section
  Then the section has a yellow (#ffcd00) background
  And office address, phone, and email are displayed
```

## Verification Checklist

- [ ] All 14 sections render in correct order
- [ ] Brand color #ffcd00 used for CTAs, highlights, address bar
- [ ] Top bar + services + quote area use #1e2126 dark
- [ ] Counter section uses #31353d dark gray
- [ ] Montserrat font loaded for headings/nav
- [ ] Open Sans loaded for body text
- [ ] Hero full-width bg image + dark overlay
- [ ] Work area uses bg image + overlay
- [ ] All section headings match original hierarchy
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code
