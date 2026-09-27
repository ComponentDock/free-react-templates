# Template: Terravault (Real Estate)

## Purpose

Recreation of ColorLib **Azenta** — a real estate website template with a
hero property showcase, search form, featured listings, agents, and blog.

- **Source:** https://colorlib.com/wp/template/azenta/
- **Preview:** https://preview.colorlib.com/theme/azenta/
- **New name:** `terravault` (apps/terravault, @free-react-templates/terravault)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **Replication note:** Preview was reachable. DOM, CSS tokens, and screenshot
  analyzed from the live preview and ColorLib template page.

---

## Design Tokens

### Colors
| Token         | Hex       | Usage                                   |
|---------------|-----------|------------------------------------------|
| brand-teal    | #2cbdb8   | Primary accent, buttons, active states   |
| dark-bg       | #19191a   | Navbar, hero overlay, section headings   |
| gray-text     | #707079   | Body text, secondary text                |
| light-gray    | #aaaab3   | Subtle text, borders                     |
| white         | #ffffff   | Page background, card backgrounds        |
| off-white     | #F2F4F5   | Alternate section backgrounds            |
| red-accent    | #E1481F   | Price highlight (sparingly used)         |

### Typography
| Property     | Value                                |
|--------------|--------------------------------------|
| Font (all)   | Poppins, sans-serif                  |
| Icon font    | FontAwesome                          |
| Heading weight | 600-700 (bold)                     |
| Body weight  | 400 (normal)                         |

### Buttons / Interactive
| Element      | Style                                                 |
|--------------|-------------------------------------------------------|
| CTA button   | Teal (#2cbdb8) bg, white text, rounded (50px radius) |
| Submit btn   | Teal bg, white text, rounded pill shape               |
| Search btn   | Teal bg, white text, rounded (50px radius)            |
| Tab active   | Teal bg on "Find Your Home" tab                       |

### Layout
| Section     | Layout                                                |
|-------------|-------------------------------------------------------|
| Navbar      | Dark bg, white links, language dropdown, teal "Submit Property" button |
| Info bar    | White bar below nav: logo left, phone/address/email right with teal icons |
| Hero        | Full-width property photo with centered overlay card (address, name, price, stats) + thumbnail gallery below |
| Search      | Teal tab bar ("Find Your Home" / "House For Sell") + form with dropdowns, price/size sliders, teal Search button |
| How It Work | 3-step process with icons: Search & Find, Find Your Room, Talk To Agent |
| Featured    | 4-column property cards (image, name, price)          |
| Top Properties | 3-column property cards with larger images and price |
| Agents      | 4-column agent cards (photo, name, role)              |
| Blog        | 3-column blog cards (image, title, date)              |
| Newsletter  | Subscribe section with email input                    |
| Footer      | Dark bg, city links, social icons, Colorlib attribution → replace with ComponentDock |

---

## Gherkin Requirements

### Feature: Terravault template renders all sections in correct order

#### Scenario: Navbar renders with navigation and language selector
- Given the page loads
- Then a dark navbar is visible
- And it contains links: Home, Property, Agents, News, Pages, Contact
- And a language dropdown (English) is visible
- And a teal "Submit Property" button is present

#### Scenario: Info bar shows contact details
- Given the page loads
- Then an info bar is visible below the navbar
- And it shows the logo on the left
- And phone, address, and email are displayed on the right with teal icons

#### Scenario: Hero section with property showcase
- Given the page loads
- Then the hero section is visible with a full-width property photo
- And a centered overlay card shows the address and property name
- And the price "$3,000,000" is displayed
- And property stats are shown: sqft, bedrooms, bathrooms, garage

#### Scenario: Search form with tabs
- Given the page loads
- Then a search form is visible
- And it has two tabs: "Find Your Home" (teal active) and "House For Sell"
- And form fields include: property type, title, city, bedrooms
- And price and size sliders are present
- And a teal "Search" button is present

#### Scenario: How It Work section
- Given the page loads
- Then the "How It Work" section is visible
- And 3 steps are shown with icons: Search & Find Apartment, Find Your Room, Talk To Agent
- And a teal underline accent is below the heading

#### Scenario: Featured Properties grid
- Given the page loads
- Then a "Featured Properties" section is visible
- And 4 property cards are shown in a row
- And each card shows an image, property name, and price

#### Scenario: Top Properties section
- Given the page loads
- Then a "Top Properties" section is visible
- And 3 larger property cards are displayed with images and prices

#### Scenario: Our Agents section
- Given the page loads
- Then an "Our Agents" section is visible
- And 4 agent cards are shown
- And each card has a photo, name, and role

#### Scenario: Blog/News section
- Given the page loads
- Then a "News Latest" blog section is visible
- And 3 blog cards are shown with images and titles

#### Scenario: Newsletter subscribe
- Given the page loads
- Then a newsletter subscribe section is visible
- And an email input and subscribe button are present

#### Scenario: Footer
- Given the page loads
- Then a dark footer is visible
- And it shows city links (Florida, New York, Washington, etc.)
- And social media icons are present
- And it links to https://www.componentdock.com/

---

## Verification Checklist

- [ ] All sections render in the correct order
- [ ] Dark navbar with links, language dropdown, teal CTA
- [ ] Info bar with logo and contact details
- [ ] Hero with property photo, overlay card, price, stats
- [ ] Search form with tabs, dropdowns, sliders, teal Search button
- [ ] How It Work 3-step process with icons
- [ ] Featured Properties 4-column grid
- [ ] Top Properties 3-column grid
- [ ] Our Agents 4-column grid
- [ ] Blog/News 3-column grid
- [ ] Newsletter subscribe section
- [ ] Footer with city links and componentdock.com link
- [ ] 100% test coverage
- [ ] No ColorLib references in app code
