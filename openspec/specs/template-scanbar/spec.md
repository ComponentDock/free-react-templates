# Scanbar — Quick City Search Form

Recreation of ColorLib "Search Form 13" (https://colorlib.com/wp/template/colorlib-search-13/).

## Design tokens (from screenshot — preview unreachable)

- Brand color: coral #e84c60 (SEARCH button)
- Background: full-screen hero image (building/balcony against blue sky)
- Text: white headings on background, dark text (#333) in form
- Font heading: Poppins bold
- Font body: Lato
- Form bar: white horizontal strip, max-width ~860px, shadow

## Sections

1. **Hero section** — full-screen background image, centered content
   - Heading: "QUICK FIND YOUR CITY" (white, uppercase, bold, Poppins)
   - Search bar below heading
2. **Search bar** — horizontal white form
   - WHAT field: text input, placeholder "ex: food, service, bar, hotel"
   - WHERE field: select dropdown (1 adult, 2 adults, 3 adults, 4 adults)
   - SEARCH button: coral background, white text, uppercase, with search icon
3. **Footer** — dark navy (#1a1a2e) background
   - Copyright line
   - "More templates at Component Dock" link

## Scenarios

Given the page loads
When the hero section renders
Then the heading "Quick Find Your City" is visible

Given the search form renders
When I look at the WHAT field
Then a text input with placeholder "ex: food, service, bar, hotel" is present

Given the search form renders
When I look at the WHERE field
Then a select with guest count options is present

Given I type into the WHAT field
Then the input value updates

Given I select a WHERE option
Then the select value changes

Given I click the SEARCH button
Then the form submits without page navigation

Given the page loads
Then the document title is "Scanbar — Quick City Search Form"

Given the footer renders
Then a link to https://www.componentdock.com/ is present with text "Component Dock"
