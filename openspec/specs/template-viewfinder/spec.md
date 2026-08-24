# Template: Viewfinder (Photography Portfolio)

## Purpose

Recreation of ColorLib **Photosen** (`https://colorlib.com/wp/template/photosen/`), previewed at `https://preview.colorlib.com/theme/photosen/`. Built with Vite, React 19, Tailwind CSS 4, and TypeScript.

## Design Tokens & Styling

- **Fonts**: `Josefin Sans` (headings/nav), `Roboto Mono` (monospace accents), system sans-serif body.
- **Colors**: Dark photography theme (`#212529` background, white text `#ffffff`, subtle gray borders/cards).
- **Buttons**: Outline white buttons (`border border-white text-white hover:bg-white hover:text-black transition-all py-2 px-4`).
- **Layout**: Fluid container (`container-fluid`), multi-column grid of photo cards with hover overlay effects and centered category titles with action buttons.

## Requirements & Gherkin Scenarios

### Feature: Photography Portfolio Layout & Navigation

As a visitor, I want to explore photography categories and browse portfolio works.

#### Scenario: Header and Navigation Links

- Given the user loads the Viewfinder homepage
- Then the header displays the brand "Viewfinder"
- And navigation links include Home, Gallery (with dropdown), Services, About, and Contact
- And social media icons (Facebook, Twitter, Instagram, YouTube) are visible in the navbar

#### Scenario: Photo Grid Showcase

- Given the user views the main portfolio grid
- Then 9 photography category cards are displayed (Nature, Portrait, People, Architecture, Animals, Sports, Travel, etc.)
- And each card features a category title, an "More Photos" outline button, and a responsive image
- And hovering or viewing the card presents clean contrast against the dark background

#### Scenario: Footer Attribution

- Given the user scrolls to the bottom of the page
- Then the footer displays copyright information
- And a branded link to `https://www.componentdock.com/` ("Component Dock")
