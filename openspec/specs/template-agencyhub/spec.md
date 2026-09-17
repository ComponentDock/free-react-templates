# Template: AgencyHub (Creative Agency Website)

## Purpose

Recreation of ColorLib Creative Agency — a full-featured creative agency website template with hero banner, about section, portfolio gallery, services grid, stats counters, pricing table, testimonials carousel, team showcase, blog cards, contact form, and dark footer.

- **Source:** https://colorlib.com/wp/template/creative-agency/
- **Preview:** https://preview.colorlib.com/theme/creative-agency/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/free-creative-agency-website-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Source mapping

| Field         | Value                                                                       |
| ------------- | --------------------------------------------------------------------------- |
| ColorLib slug | `creative-agency`                                                           |
| Preview URL   | `https://preview.colorlib.com/theme/creative-agency/`                       |
| Screenshot    | `https://colorlib.com/wp/wp-content/uploads/sites/2/free-creative-agency-website-template.jpg` |

## Design tokens (extracted from preview CSS)

### Fonts

- **Body:** `"Varela Round", sans-serif` — font-size 16px, line-height 1.6
- **Headings (h1-h5):** `"Montserrat", sans-serif` — font-weight 700
  - h1: 54px, h2: 36px, h3: 21px, h4: 18px, h5: 16px

### Colors

| Token                | Value     | Usage                                                          |
| -------------------- | --------- | -------------------------------------------------------------- |
| Body text            | `#868F9B` | Default paragraph and body text color                          |
| Headings             | `#10161A` | All heading colors (h1-h5)                                     |
| Primary / accent     | `#6195FF` | Links, buttons, section title underlines, selection highlight  |
| Dark background      | `#1C1D21` | Footer bg, hero/numbers/testimonial overlays (80% opacity)     |
| Grey background      | `#FAFAFA` | Portfolio, Why Choose Us, Blog section backgrounds             |
| Grey border          | `#EEE`    | Section dividers on grey bg, input underlines                  |
| Input background     | `#F4F4F4` | Contact form input fields                                      |
| White                | `#FFF`    | Hero text, button text, overlay text                           |
| Button hover         | `#FFF`    | White button hover text (dark text on white bg)                |

### Layout

- Container: Bootstrap container (1170px max-width)
- Sections use `.md-padding` (120px top/bottom) or `.sm-padding` (60px top/bottom)
- Grey sections: `#FAFAFA` bg with `1px solid #EEE` top/bottom borders
- Background image sections: absolute positioned `.bg-img` with `background-attachment: fixed` (parallax) and dark overlay

### Button styling

- `.main-btn`: bg `#6195FF`, white text, `border: 2px solid transparent`, `border-radius: 3px`, `padding: 10px 35px`
- `.white-btn`: bg `#FFF`, dark text `#10161A`
- `.outline-btn`: transparent bg, `#6195FF` text + border
- All buttons: `transition: opacity 0.2s`, hover opacity 0.8

### Section title styling

- `.title:after` pseudo-element: `height: 4px`, `width: 40px`, `background-color: #6195FF`, `margin-top: 20px`
- Centered titles: `margin: 20px auto 0px`

## Structure (section order — matches original 1:1)

1. **Navbar** — Logo + nav links (Home, About, Portfolio, Services, Pricing, Team, Blog, Contact); transparent over hero, becomes solid white on scroll
2. **Hero / Header** — Full-width background image with dark overlay (80% opacity, `#1C1D21`), white headline "We Are Creative Agency" (54px Montserrat), white subtext, two CTAs: white button "Get Started!" + primary button "Learn more"
3. **About** — Section heading "Welcome to Website" with blue underline, 3-column grid: icon + title + description + "Read more" link (Fully Customizable, Awesome Features, Fully Responsive)
4. **Portfolio** — Grey bg (`#FAFAFA`), section heading "Featured Works", 6 work items (3x2 grid): image + dark overlay + category label + title + external link + lightbox icons
5. **Services** — Section heading "What we offer", 6 services (3x2): icon + title + description (App Development, Graphic Design, Creative Idea, Marketing, Awesome Support, Brand Design)
6. **Why Choose Us** — Grey bg, 2-column layout: left = heading "Why Choose Us" + paragraph + 4 checkmark items; right = image carousel (owl-carousel)
7. **Numbers / Stats** — Parallax bg image with dark overlay, 4 stat counters (Happy clients 451, Awards won 12, Cups of Coffee 154K, Projects completed 45) — white text, icon + count + label
8. **Pricing** — Section heading "Pricing Table", 3 pricing cards: Basic ($9/mo), Silver ($19/mo), Gold ($39/mo) — each with plan name, price, 3 features list, "Purchase now" outline button
9. **Testimonial** — Parallax bg image with dark overlay, owl-carousel of testimonials: avatar + name + role + quote text (white)
10. **Team** — Section heading "Our Team", 3 team members (3-column): image with dark overlay showing social icons (Facebook, Google+, Twitter) + name + role below
11. **Blog** — Grey bg, section heading "Recents news", 3 blog cards: image + meta (author, date, comments) + title + excerpt + "Read more" link
12. **Contact** — Section heading "Get in touch", 3 info cards (Phone, Email, Address) with icons, contact form (Name, Email, Subject, Message + "Send message" primary button)
13. **Footer** — Dark bg (`#1C1D21`), centered logo, social follow links (Facebook, Twitter, Google+, Instagram, LinkedIn, YouTube), copyright text, **MUST link Component Dock**

## Gherkin scenarios

### Scenario: Page renders with correct heading

```
Given the user navigates to the AgencyHub homepage
Then the hero heading "We Are Creative Agency" is visible
And the hero subtext paragraph is visible below the heading
And two CTA buttons "Get Started!" and "Learn more" are visible
```

### Scenario: Navigation links are present

```
Given the user views the navbar
Then links for Home, About, Portfolio, Services, Pricing, Team, Blog, and Contact are present
And clicking each link scrolls to the corresponding section
```

### Scenario: About section displays three features

```
Given the user scrolls to the About section
Then the heading "Welcome to Website" is visible
And three feature cards are displayed: Fully Customizable, Awesome Features, Fully Responsive
And each card shows an icon, title, description, and "Read more" link
```

### Scenario: Portfolio gallery shows six items

```
Given the user scrolls to the Portfolio section
Then six portfolio items are displayed in a 3-column grid
And each item shows an image with an overlay containing category, title, and link icons
```

### Scenario: Services section shows six services

```
Given the user scrolls to the Services section
Then the heading "What we offer" is visible
And six service items are displayed: App Development, Graphic Design, Creative Idea, Marketing, Awesome Support, Brand Design
And each service shows an icon, title, and description
```

### Scenario: Why Choose Us section displays checklist and carousel

```
Given the user scrolls to the Why Choose Us section
Then the heading "Why Choose Us" is visible on the left
And four checklist items with checkmark icons are shown
And an image carousel is displayed on the right side
```

### Scenario: Numbers section shows stat counters

```
Given the user scrolls to the Numbers section
Then four stat counters are visible: Happy clients (451), Awards won (12), Cups of Coffee (154K), Projects completed (45)
And each stat shows an icon, the number, and a label
```

### Scenario: Pricing table shows three plans

```
Given the user scrolls to the Pricing section
Then three pricing cards are displayed: Basic plan ($9/mo), Silver plan ($19/mo), Gold plan ($39/mo)
And each card shows the plan name, price, three features, and a "Purchase now" button
```

### Scenario: Testimonials carousel functions

```
Given the user scrolls to the Testimonials section
Then testimonial cards are displayed with avatar, name, role, and quote
And the carousel allows navigation between testimonials
```

### Scenario: Team section shows three members

```
Given the user scrolls to the Team section
Then the heading "Our Team" is visible
And three team members are displayed with image, name, and role
And hovering over a team image reveals social media icon links
```

### Scenario: Blog section shows three posts

```
Given the user scrolls to the Blog section
Then the heading "Recents news" is visible
And three blog cards are displayed with image, meta info (author, date, comments count), title, excerpt, and "Read more" link
```

### Scenario: Contact section has form and info cards

```
Given the user scrolls to the Contact section
Then three info cards are shown: Phone (512-421-3940), Email (email@support.com), Address (1739 Bubby Drive)
And a contact form is visible with Name, Email, Subject, Message fields and "Send message" button
```

### Scenario: Footer contains Component Dock link

```
Given the user scrolls to the footer
Then the footer has a dark background
And social media follow links are visible (Facebook, Twitter, Instagram, LinkedIn, YouTube)
And a link to https://www.componentdock.com/ is present
And copyright text is displayed
```

## Verification checklist

- [ ] Hero section renders with parallax background image and dark overlay
- [ ] Navbar becomes solid on scroll (sticky behavior)
- [ ] All 13 sections render in correct order
- [ ] Brand color `#6195FF` is used consistently for links, buttons, and title underlines
- [ ] Montserrat font is used for all headings, Varela Round for body
- [ ] Button styling matches: 3px border-radius, 10px 35px padding, 2px border
- [ ] Grey bg sections (`#FAFAFA`) have top/bottom `#EEE` borders
- [ ] Parallax effect on bg-image sections (hero, numbers, testimonials)
- [ ] Portfolio overlay shows on hover with category + title + link icons
- [ ] Team social overlay appears on hover
- [ ] Contact form has 4 fields + submit button
- [ ] Footer links to Component Dock (`https://www.componentdock.com/`)
- [ ] No references to ColorLib in any app source file
- [ ] Placeholder images use `https://picsum.photos/seed/agencyhub-<n>/<w>/<h>` pattern
- [ ] Icons use lucide-react (replacing Font Awesome icons)
- [ ] All sections have proper semantic HTML (nav, header, main, section, footer)
