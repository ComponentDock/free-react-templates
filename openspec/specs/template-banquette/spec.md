# Template: Banquette (Restaurant Menu Accordion)

## Purpose

Banquette is a single-page RESTAURANT MENU ACCORDION component in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Accordion 02" free template (source:
https://colorlib.com/wp/template/accordion-02/), built under a DIFFERENT
name (**Banquette**), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

**Source mapping:**

- ColorLib item: "Accordion 02" (TEMPLATES.md line 640; section
  "## Bootstrap Accordions (20)").
- Source URL: https://colorlib.com/wp/template/accordion-02/
- Preview URL: https://preview.colorlib.com/theme/bac/accordion-02/
  (REACHABLE, verified 2026-08-25 by direct fetch, 21,444 bytes HTML).
  NOTE: the naive `https://preview.colorlib.com/theme/accordion-02/`
  returns 404 — the actual path is `bac/accordion-02/`.

**WHAT THE ORIGINAL LOOKS LIKE (from live preview DOM + CSS analysis):**

A standalone restaurant menu accordion component centered on a light gray
(`#fafafa`) page. A white card with subtle shadow (`0px 10px 29px -16px
rgba(0,0,0,0.12)`) contains: a purple (`#866ec7`) header bar labeled "Our
Specialties", followed by 4 collapsible accordion items (Breakfast, Lunch,
Dinner, Drink) each with a flaticon icon. The first item (Breakfast) is
expanded by default, showing 3 menu items in a vertical list. Each menu item
has: a circular food image (100px, 50% radius), a dish name (22px, weight
500), a price with yellow (`#feba2c`) underline, and ingredient tags.
Only one accordion panel is open at a time (Bootstrap 4 `data-parent`
behavior). The accordion uses Poppins font, yellow accent color for links
and price borders, and Ionicons chevron toggle.

## Design tokens (extracted from live preview CSS)

| Token            | Value                                  | Notes                                           |
| ---------------- | -------------------------------------- | ----------------------------------------------- |
| Brand accent     | `#feba2c`                              | Yellow — links, price underline, icon bg circle |
| Header purple    | `#866ec7`                              | "Our Specialties" header bar background         |
| Page background  | `#fafafa`                              | Light gray body                                 |
| Card background  | `#fff`                                 | White accordion card                            |
| Card body bg     | `rgba(0,0,0,0.02)`                     | Very slight gray tint                           |
| Text primary     | `#000`                                 | Headings, accordion button text                 |
| Text body        | `gray`                                 | Body text color                                 |
| Text muted       | `rgba(0,0,0,0.4)`                      | Ingredient tags                                 |
| Icon chevron     | `rgba(0,0,0,0.3)`                      | Expand/collapse chevron                         |
| Font family      | `"Poppins", Arial, sans-serif`         | Global body + headings                          |
| Heading section  | 28px, black, normal weight             | "Accordion #02" title                           |
| Accordion shadow | `0px 10px 29px -16px rgba(0,0,0,0.12)` | Card container                                  |
| Button shadow    | `0px 8px 18px -16px rgba(0,0,0,0.19)`  | Accordion headers                               |
| Card radius      | `5px`                                  | Accordion container                             |
| Image radius     | `50%`                                  | Circular food images                            |
| Button radius    | `0` (override)                         | `.btn` radius forced to 0                       |
| Price border     | `2px solid #feba2c`                    | Bottom border on price                          |
| Section padding  | `7em 0`                                | `.ftco-section`                                 |

## Section structure (from live preview DOM, order 1:1)

1. **Page title** — centered h2 "Accordion #02" (28px, black)
2. **Accordion container** — centered, `col-md-8 col-lg-6`, white card
   with shadow, 5px radius, overflow hidden
3. **Header bar** — purple `#866ec7` background, centered h3 "Our
   Specialties" in white
4. **Accordion item: Breakfast** — icon (flaticon-breakfast), label
   "Breakfast", chevron toggle. Expanded by default. Contains 3 menu
   items: circular image + dish name "Grilled Beef with potatoes" (22px)
   - price "$29" (with yellow underline) + ingredient tags "Meat,
     Potatoes, Rice, Tomatoe"
5. **Accordion item: Lunch** — icon (flaticon-serving-dish), label
   "Lunch", collapsed. Same 3 menu item structure.
6. **Accordion item: Dinner** — icon (flaticon-turkey), label "Dinner",
   collapsed. Same 3 menu item structure.
7. **Accordion item: Drink** — icon (flaticon-cocktail), label "Drink",
   collapsed. Same structure.

## Gherkin requirements

### Scenario: Page layout

Given the user loads the page
Then a centered heading "Accordion #02" is displayed at the top
And a white card with shadow is centered below

### Scenario: Accordion header

Given the accordion card is visible
Then a purple header bar shows "Our Specialties" in white text
And the header spans the full width of the card

### Scenario: Accordion items visible

Given the accordion is displayed
Then 4 accordion items are shown: Breakfast, Lunch, Dinner, Drink
And each item has an icon, label text, and expand/collapse chevron

### Scenario: Default expanded state

Given the page loads
Then the Breakfast item is expanded by default
And the Lunch, Dinner, and Drink items are collapsed

### Scenario: Menu items in expanded panel

Given the Breakfast item is expanded
Then 3 menu items are displayed vertically
And each menu item has a circular food image, dish name, price, and
ingredient tags

### Scenario: Accordion toggle behavior

Given the Breakfast item is expanded
When the user clicks the Lunch header
Then the Breakfast panel collapses
And the Lunch panel expands
And only one panel is expanded at a time

### Scenario: Menu item layout

Given a menu item is displayed
Then the food image is a 100px circle on the left
And the dish name is 22px bold to the right of the image
And the price is right-aligned with a yellow bottom border
And ingredient tags appear below the dish name

### Scenario: Responsive behavior

Given the user views on mobile
Then the accordion card stacks full-width
And menu item images appear above the text content
And the layout adapts to single-column

## Verification checklist

- [ ] Centered page title "Accordion #02" (28px, black)
- [ ] White accordion card with shadow, centered, 5px radius
- [ ] Purple header bar "Our Specialties" in white
- [ ] 4 accordion items: Breakfast, Lunch, Dinner, Drink
- [ ] Each item has icon + label + chevron toggle
- [ ] Breakfast expanded by default, others collapsed
- [ ] 3 menu items per panel with circular images
- [ ] Menu item: image + name + price + ingredients layout
- [ ] Price has yellow `#feba2c` underline
- [ ] Only one panel open at a time
- [ ] Yellow accent color `#feba2c` on links and price borders
- [ ] Poppins font throughout
- [ ] Responsive: single-column on mobile
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] public/CNAME = banquette.free.componentdock.com
- [ ] homepage = https://banquette.free.componentdock.com
