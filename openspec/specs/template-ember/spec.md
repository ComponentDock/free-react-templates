# Spec: Ember — Restaurant Landing Template

## Provenance

- **Source:** ColorLib "Dingo" — https://colorlib.com/wp/template/dingo/
- **Preview:** https://preview.colorlib.com/theme/dingo/
- **Screenshot:** ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/dingo-free-template.jpg)

## Design Tokens (extracted from css/style.css)

| Token            | Value          | Notes                          |
| ---------------- | -------------- | ------------------------------ |
| Brand orange     | `#ff6426`      | Buttons, accents, hover states |
| Brand dark       | `#e04000`      | Button hover                   |
| Background white | `#fff`         | Main body                      |
| Light bg         | `#f9f9ff`      | Alternating sections           |
| Light bg 2       | `#f0e9ff`      | Alternate sections             |
| Light bg 3       | `#f6f5f1`      | Menu section background        |
| Text dark        | `#2c3033`      | Headings, body                 |
| Muted text       | `#999999`      | Secondary text                 |
| Muted text 2     | `#828bb2`      | Muted elements                 |
| Footer bg        | `#2c3033`      | Dark footer                    |
| Accent cyan      | `#4cd3e3`      | Minor accents                  |
| Font heading     | `Lora`, serif  | Display font                   |
| Font body        | `Cardo`, serif | Body text                      |

## Section Structure (in order)

1. **Navbar** — sticky, logo "Ember", links (Home, About, Menu, Chefs, Blog, Contact), "Book a Table" CTA button
2. **Hero** — full-width background image, tagline "Expensive but the best", headline "Deliciousness jumping into the mouth", body text, two CTAs: "Reservation" + "Watch our story"
3. **Popular Dishes** — "Popular Dishes" subtitle, "Our Exclusive Items" headline, 4 food cards with image + title + description + "Read More" link
4. **History** — "Our History" subtitle, headline "Where The Food's As Good As The Root Beer.", body text, "Read More" CTA
5. **Expect The Best** — "Expect The Best" headline, video play button (YouTube popup)
6. **Popular Menu** — "Popular Menu" subtitle, "Delicious Food Menu" headline, tabbed interface (Special, Breakfast, Lunch, Dinner, Snacks), each tab shows 6 menu items with image + name + description + price
7. **Team** — "Team Member" subtitle, "Our Experience Chefs" headline, 4 chef cards with image + name + role
8. **Reservation** — "Reservation" subtitle, "Book A Table" headline, form (email, persons dropdown, time dropdown, notes textarea), submit button
9. **Testimonials** — "Testimonials" subtitle, "Customers Feedback" headline, 3 testimonial cards with quote + author + role
10. **Blog** — "Recent News" subtitle, "Latest From Blog" headline, 4 blog cards with image + date + category + title + "Read More"
11. **Footer** — dark bg, 4 columns (About Us, Important Links, Contact, Newsletter with email input), copyright bar with "Made with Component Dock" link

## Requirements

- [ ] Gherkin scenarios cover all 11 sections
- [ ] Tabbed menu with interactive switching
- [ ] Reservation form with email validation
- [ ] Newsletter subscription in footer
- [ ] Mobile responsive (hamburger menu, stacked layout)
- [ ] Dark mode toggle
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] No ColorLib references in app source
- [ ] Footer links https://www.componentdock.com/
- [ ] public/CNAME = ember.free.componentdock.com
- [ ] package.json homepage = https://ember.free.componentdock.com
