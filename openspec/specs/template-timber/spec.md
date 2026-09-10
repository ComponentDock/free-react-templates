# Timber — Interior Design / Construction Studio Template

> Recreation of ColorLib "Balay"
> (https://colorlib.com/wp/template/balay/)
> Preview: https://preview.colorlib.com/theme/balay/

## Design Tokens

- **Primary**: #FFC300 (golden yellow)
- **Dark**: #2C2C2C
- **Text**: #333333 (body), #999999 (muted)
- **Light gray**: #f0f0f0, #fafafa (section alternation)
- **Font**: Quicksand (Google Fonts)
- **Button style**: golden yellow (#FFC300) bg, rounded, dark text

## Sections (in order)

1. **Navbar** — Logo + nav links (Home, Projects, About, Services, Blog, Contact), transparent on hero
2. **Hero** — Full-width slider with overlay text: "An Inspiring Built Space", subtitle, CTA button
3. **About / Welcome** — Heading "Welcome", subtext, feature badges (Passionate, Honest, Dependable, Always Improving)
4. **Services** — Heading "What I do?", 4 service cards with icon, title, description
5. **Projects Counter** — Dark strip with 4 stat counters (Projects, Employees, Constructor, Partners)
6. **Portfolio Gallery** — Heading "My Work", grid of 6 portfolio items with overlay on hover
7. **Blog** — Heading "Read Recent Blog", 3 blog cards with image, meta, excerpt
8. **Contact** — "Get in Touch!" heading, contact form, map placeholder
9. **Footer** — Dark bg, 3 columns (about, links, contact), Component Dock link

## Scenarios

### Navbar

- Renders nav links: Home, Projects, About, Services, Blog, Contact
- Clicking a nav link scrolls to the corresponding section
- Navbar is fixed/sticky at the top

### Hero

- Renders heading "An Inspiring Built Space"
- Renders CTA button
- Background uses a placeholder image

### About

- Renders "Welcome" heading
- Renders 4 feature badges
- Renders descriptive paragraph

### Services

- Renders "What I do?" heading
- Renders 4 service cards with titles and descriptions
- Each card has an icon

### Projects Counter

- Renders 4 counters with labels and numbers
- Dark background strip

### Portfolio

- Renders "My Work" heading
- Renders 6 portfolio grid items
- Each item shows an image

### Blog

- Renders "Read Recent Blog" heading
- Renders 3 blog cards
- Each card has image, date, category, comment count, title, excerpt

### Contact

- Renders "Get in Touch!" heading
- Renders contact form with name, email, message fields
- Form prevents default submission

### Footer

- Links to https://www.componentdock.com/
- Branded as "Component Dock"
- Renders copyright text
- Dark background
