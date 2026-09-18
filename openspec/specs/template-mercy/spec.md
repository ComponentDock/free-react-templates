# Template: Mercy — Charity & Nonprofit Landing

Recreation of ColorLib "Unicare"
(https://colorlib.com/wp/template/unicare/)
Preview: https://preview.colorlib.com/theme/unicare/

## Design Tokens

| Token       | Value                | Usage                          |
| ----------- | -------------------- | ------------------------------ |
| brand       | #fd645b              | CTA buttons, donate, banner bg |
| tertiary    | #4c7bcb              | service card background        |
| primary     | #82ae46              | service card background        |
| quarternary | #20c997              | service card background        |
| active-nav  | #eec857              | active nav link color          |
| footer-bg   | #3b3b3b              | footer dark background         |
| paper       | #ffffff              | body / section background      |
| ink         | #333333              | headings                       |
| mist        | #999999              | body text                      |
| font        | Montserrat (300-800) | Google Fonts via link          |

## Sections (in order)

1. **TopBar** — phone/email left, social icons right, dark background
2. **Navbar** — brand "Mercy", links: Home, About, Volunteer, Causes, Blog, Contact, Donate (CTA pill)
3. **Hero** — full-height bg image, dark gradient overlay, heading + subheading, CTA button + video play
4. **About/Donation** — split: LEFT donation form (name, email, causes, amount, payment, donate); RIGHT welcome text + stats counters (50 Volunteers, 24400 Trusted Funds)
5. **Services** — 4-column: Become a Volunteer (coral), Quick Fundraising (blue), Start Donating (green), Get Involved (teal)
6. **Causes** — 4 cards: image, title, description, progress bar, donate button
7. **Testimonials** — dark overlay bg, carousel: avatar, stars, quote, name, role
8. **Blog** — 4 cards: image, meta (date, author), title, excerpt, read more
9. **Volunteers** — 4 team members: image, name, role, social icons
10. **CTA Banner** — coral full-width, heading, CTA button
11. **Footer** — 4 columns: brand+social+donate, Latest News, Quick Links, Contact. Copyright links Component Dock

## Scenarios

### TopBar

- GIVEN the page loads WHEN I look at the top bar THEN I see phone number and email
- GIVEN the page loads WHEN I look at the top bar THEN I see social media icons

### Navbar

- GIVEN the page loads WHEN I look at the navbar THEN I see the brand "Mercy"
- GIVEN the page loads WHEN I look at the navbar THEN I see navigation links for Home, About, Volunteer, Causes, Blog, Contact
- GIVEN the page loads WHEN I look at the navbar THEN I see a Donate CTA button

### Hero

- GIVEN the page loads WHEN I look at the hero THEN I see heading "Help the poor in need"
- GIVEN the page loads WHEN I look at the hero THEN I see a "Become A Volunteer" button
- GIVEN the page loads WHEN I look at the hero THEN I see a "Watch our video" link

### About/Donation

- GIVEN the page loads WHEN I look at the about section THEN I see a donation form with fields
- GIVEN the page loads WHEN I look at the about section THEN I see stats (Volunteers, Trusted Funds)

### Services

- GIVEN the page loads WHEN I look at the services section THEN I see 4 service cards

### Causes

- GIVEN the page loads WHEN I look at the causes section THEN I see 4 cause cards with progress bars

### Testimonials

- GIVEN the page loads WHEN I look at the testimonials section THEN I see testimonial cards with star ratings

### Blog

- GIVEN the page loads WHEN I look at the blog section THEN I see 4 blog post cards

### Volunteers

- GIVEN the page loads WHEN I look at the volunteers section THEN I see 4 team member cards

### CTA Banner

- GIVEN the page loads WHEN I look at the CTA banner THEN I see heading and CTA button

### Footer

- GIVEN the page loads WHEN I look at the footer THEN I see brand info, quick links, and contact info
- GIVEN the page loads WHEN I look at the footer THEN I see a link to componentdock.com
