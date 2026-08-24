# Template: Props (Real Estate)

## Purpose

Recreation of ColorLib "Props" (`https://colorlib.com/wp/template/props/`, live preview: `https://preview.colorlib.com/theme/props/`). Stack: Vite, React 19, Tailwind CSS 4, TypeScript.
New app name: `props`. Domain category: Real Estate / Property listings.

## Design tokens

- **Brand primary**: Deep Ocean Blue (`#1f6f8b` / Tailwind `bg-[#1f6f8b]`, `#1a5e76`, `#19596f`)
- **Neutral light**: White (`#ffffff`), Gray (`#f8f9fa`, `#f9f9f9`, `#e9ecef`)
- **Neutral dark**: Charcoal / Dark Text (`#212529`, `#000000`, `#6c757d` for muted text)
- **Font family**: Inter / system sans-serif (`var(--bs-font-sans-serif)`, `"Noto Sans JP"`, sans-serif)
- **Button & Box styling**: Rounded pill buttons (`border-radius: 30px`), box cards with soft rounded corners (`border-radius: 4px`), subtle borders (`#efefef`, `#dde0e3`)

## Sections & Structure (1:1 with ColorLib Props)

1. **Navbar**: Brand title "Props", links (Home, Properties, Services, About, Contact Us).
2. **Hero Section**: Deep ocean blue background with overlay, large heading "FIND A PERFECT DREAM HOUSE", location/ZIP search bar with Search button, introductory lead text, and "View Properties" link.
3. **Features Bar / Box Features**: Overlapping 3-column feature cards (Quality Properties, Top Rated Agents, Easy and Safe) with icons and text.
4. **Popular Properties Carousel**: Heading "POPULAR PROPERTIES", "View all properties" link, and interactive property cards slider with pagination & navigation.
5. **Stats Counter**: 4-column counter stats (# of Buy Properties, # of Sell Properties, # of All Properties, # of Agents).
6. **About / Value Proposition**: "WE BRING DREAM HOMES TO REALITY" with description and imagery.
7. **Testimonials Slider**: Carousel with quotes and client names (Carol Houston, Synthia Cameron, Davin Smith).
8. **Our Agents Section**: "OUR AGENTS" heading, introductory text, agent cards (James Doe, Jean Smith, Alicia Huston) with photo, title, bio, and social links.
9. **Agent Recruitment CTA Banner**: "Be a part of our growing real state agents" with apply button.
10. **Footer**: 4-column footer containing Contact info, Sources links, Links, social icons, and branded footer link to Component Dock (`https://www.componentdock.com/`).

## Gherkin Requirements & Scenarios

### Feature: Navbar

- Scenario: Displays brand and navigation links
  - Given the user visits the home page
  - Then they should see the brand title "Props"
  - And navigation items for Home, Properties, Services, About, and Contact Us

### Feature: Hero Search

- Scenario: Allows searching properties by ZIP code or city
  - Given the user is on the hero banner
  - When they enter a ZIP code or city into the search input
  - And click the Search button
  - Then a search notification or filtered state should appear

### Feature: Popular Properties

- Scenario: Displays popular properties carousel/grid with details
  - Given the user scrolls to the Popular Properties section
  - Then they should see property cards with images, pricing, bedrooms, bathrooms, and details
  - And pagination controls to browse through properties

### Feature: Stats Counter

- Scenario: Displays key real estate agency statistics
  - Given the user scrolls to the stats section
  - Then they should see statistics for Buy Properties, Sell Properties, All Properties, and Agents

### Feature: Our Agents

- Scenario: Displays real estate agent profiles with social links
  - Given the user scrolls to the Our Agents section
  - Then they should see agent cards for James Doe, Jean Smith, and Alicia Huston with their bios and social icons

### Feature: Footer Attribution

- Scenario: Displays branded footer link to Component Dock
  - Given the user scrolls to the footer
  - Then they should see copyright information and a link to Component Dock (`https://www.componentdock.com/`)

## Verification Checklist

- [ ] App folder `apps/props` created and registered in root `package.json` workspaces
- [ ] TypeScript strict compilation passes without errors
- [ ] ESLint and code checks pass cleanly
- [ ] Vitest tests cover all sections with 100% test coverage
- [ ] Production build passes successfully via `npm run build`
- [ ] Footer links to `https://www.componentdock.com/` ("Component Dock")
- [ ] `public/CNAME` contains `props.free.componentdock.com`
