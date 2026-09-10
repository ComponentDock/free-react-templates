# Template: Timeless (Business Corporate)

## Purpose

Timeless is a one-page corporate business template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Classic" free template (source:
https://colorlib.com/wp/template/classic/, preview:
https://preview.colorlib.com/theme/classic/), built under a
**DIFFERENT name** (**Timeless**), with the monorepo stack: Vite + React 19
+ Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 + jQuery one-page corporate/business landing
page with a fixed navigation bar, full-width hero with overlay, about section
with device mockups, video + "Why Choose Us" section, 6-column services grid,
skill bars with circular percentage charts, an 8-card filterable portfolio
grid, 4-member team cards with skill bars and social links, a 4-column
pricing table with monthly/yearly tabs, a 3-column blog section, a 4-item
counter/stats row, a contact form with info sidebar, and a 5-column footer.
The page uses Roboto + Montserrat + Satisfy fonts, a soft blue-to-cyan
gradient (#a1c4fd to #c2e9fb) brand accent, and fully-rounded pill buttons.

## Design reference (replication findings)

- **Original:** ColorLib "Classic" — free one-page business website template
  (source: https://colorlib.com/wp/template/classic/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/classic/`
  (HTTP 200, 52KB) + stylesheet `style.css` (1,481 lines). The rendered
  DOM is the reference below; the TEMPLATES.md screenshot
  (`classic-free-template.jpg`) confirms the visual design (dark blurred hero
  with blue gradient CTA, clean white content sections, gray alternating
  backgrounds).
- **Section order (1:1):**
  1. Navbar (`mainmenu-area`): fixed position, transparent bg (dark
     semi-transparent on affix), white text, logo image, primary menu
     (Home, Services, Portfolio, Team, Price, Blog, Contact), help menu
     (user icon, search toggle, language select). Active/hover: white
     bottom border.
  2. Hero (`header-area overlay`): full-viewport background image
     (blurred office scene) with dark overlay (rgba(0,0,0,0.4)). Left-
     aligned content: headline "We Are Provide Creative Business" (white,
     Roboto, bold), quote tagline "We Mak Sure Best Business Solution For
     Our Client" (white italic), "Contact Now" pill button (blue gradient).
     A small animated dot accent (blue gradient, border-radius 50%).
  3. About (`about-area`): two-column layout — left: title "We Offer Quick
     & Powerful Business Solution", paragraph, "Learn More" pill button;
     right: device mockup image (tablet + phone).
  4. Video + Why Choose Us: gray-bg section — left: video thumbnail image
     with play button overlay; right: "Why Choose Us?" heading with 3
     experience stat rows (each: "SINCE WE HAVE 25 YEARS" / "EXPERIENCE
     IN THIS PASSION").
  5. Services (`service-area`): 3×2 grid of 6 feature boxes, each with an
     icofont icon, heading (Unique Design, Clean Layout, Well Responsive,
     Pro Developing, Well Documented, Quick Marketing), description text,
     and "Read More" link.
  6. Skills (`skill-area`, gray-bg): two-column — left: title "Our
     Professional Skill", paragraph, 6 circular skill charts (WebDesign
     95%, Coding 85%, Developing 90%, Java Script 95%, Apps Design 85%,
     Graphics Script 90%); right: skill illustration image.
  7. Portfolio (`portfolio-area`): filterable 4×2 grid with filter tabs
     (All, Graphics, UI/UX, Web Design, Coding, Developing, Photography).
     8 cards: image thumbnail + hover overlay with title + lightbox link.
  8. Team (`team-area`): 4-member grid, each card: team photo, hover
     overlay with name, role, 3 skill progress bars (Photoshop, Indesign,
     Illustrator), and 4 social icons (Facebook, Twitter, LinkedIn,
     Pinterest).
  9. Pricing (`price-area`, gray-bg): "Pricing Plan" heading, monthly/yearly
     tab switcher, 4-column pricing cards (Basic $10, Premium $50, Business
     $80, Ultimate $100), each with price, feature list, and "Purchase Now"
     pill button. Premium card has `.active` highlight.
  10. Blog (`blog-area`): "Latest Blog" heading, 3 blog cards — first is
      larger with featured image + date bar + title + excerpt; other two
      are smaller side-by-side with title + excerpt.
  11. Counters (gray-bg): 4 stat boxes with icofont icons (bag, smile,
      businessman, money), title, and animated count number (1172, 1000,
      1200, 1172). Each has a circular white bg behind the icon.
  12. Contact (`contact-area`): "Contact Now" heading, two-column — left:
      contact form (name, phone, email, subject, textarea, "Send Now"
      button); right: contact info (address, phone, email) + social icons.
  13. Footer (`footer-area`): 5-column layout — brand "Classic" + social
      links, News links, Company links, Resources links, Solutions links.
      Bottom bar: copyright line.

- **Design tokens extracted from `style.css`:**
  - Font family: **"Roboto"** (body, 16px, line-height 1.6),
    **"Montserrat"** (headings, buttons, uppercase text),
    **"Satisfy"** (cursive script accents).
  - Brand gradient: **#a1c4fd → #c2e9fb** (linear-gradient left-to-right,
    soft blue to light cyan) — used on primary buttons, hero dot accent,
    preloader bg, skill chart accent.
  - Body text: **#898989** (gray).
  - Headings: **#4f4f4f** (dark gray), white on hero/dark sections.
  - Accent gold: **#f7c336** (used on active nav items in language select).
  - Hero overlay: **rgba(0, 0, 0, 0.4)** on `::after` pseudo-element.
  - Navbar affix bg: **rgba(0, 0, 0, 0.4)**.
  - Button style: border-radius **100px** (fully rounded pill), no border,
    padding 10px 30px (default) / 18px 40px (lg), box-shadow "3D" effect
    (0 2px 0 0 rgba + 0 4px 0 0 rgba), hover: translateY(-4px) with
    deeper shadow.
  - Gray section bg: **#f9f9f9**.
  - Default button bg: **#bdbdbd**.
  - Footer: dark bg (via `footer-area` class), white text, copyright bar
    with `#f2f2f2` top border.
  - Preloader: brand gradient bg + white spinner.
  - Skill charts: circular (border-radius 50%), white bg, centered
    percentage counter.
  - Pricing card: white bg, border-radius 5px, shadow on hover.

## Design Tokens

| Token              | Value / Notes                                                  |
| ------------------ | -------------------------------------------------------------- |
| Brand gradient     | `#a1c4fd → #c2e9fb` (linear-gradient to right, blue → cyan)  |
| Body text          | `#898989`                                                      |
| Heading text       | `#4f4f4f`                                                      |
| Heading white      | `#ffffff` (hero, dark sections)                                |
| Accent gold        | `#f7c336` (nav active in language select)                      |
| Button pill radius | `100px` (fully rounded)                                        |
| Button padding     | `10px 30px` (default), `18px 40px` (lg)                       |
| Button shadow      | 3D layered: `0 2px 0 0 rgba(…, 0.5), 0 4px 0 0 rgba(…, 0.5)` |
| Button hover       | `translateY(-4px)` + deeper shadow                              |
| Default btn bg     | `#bdbdbd`                                                      |
| Primary btn shadow | `0 2px 0 0 rgba(135,181,255,0.5), 0 4px 0 0 rgba(135,181,255,0.5)` |
| Hero overlay       | `rgba(0, 0, 0, 0.4)`                                           |
| Navbar affix bg    | `rgba(0, 0, 0, 0.4)`                                           |
| Gray section bg    | `#f9f9f9`                                                      |
| Footer bg          | dark (via class `footer-area`)                                 |
| Footer border      | `#f2f2f2` (copyright separator)                                |
| Body font          | `"Roboto", sans-serif` (16px, weight 400)                      |
| Heading font       | `"Montserrat", sans-serif`                                     |
| Script font        | `"Satisfy", cursive`                                           |
| Skill chart        | Circle: white bg, centered % counter, brand gradient accent    |
| Pricing card bg    | `#ffffff`, border-radius `5px`                                 |
| Pricing active     | `.price-box.active` highlight class                            |

## Gherkin Requirements

### Feature: Timeless — Corporate Business Landing Page

  Scenario: Navbar renders with correct links
    Given the user visits the Timeless page
    Then a fixed navigation bar is visible
    And the nav contains links: Home, Services, Portfolio, Team, Price, Blog, Contact
    And the nav has a search toggle and language selector

  Scenario: Hero section displays with overlay and CTA
    Given the user visits the Timeless page
    Then a full-viewport hero section is displayed
    And the hero has a dark overlay background
    And a headline "We Are Provide Creative Business" is visible
    And a "Contact Now" pill button is displayed with blue gradient

  Scenario: About section shows text and device mockups
    Given the user scrolls to the About section
    Then the heading "We Offer Quick & Powerful Business Solution" is visible
    And a "Learn More" pill button is displayed
    And a device mockup image is shown on the right

  Scenario: Video and Why Choose Us section
    Given the user scrolls to the Why Choose Us section
    Then a video thumbnail with play button is visible on the left
    And "Why Choose Us?" heading is displayed
    And 3 experience stat rows are shown

  Scenario: Services grid shows 6 feature boxes
    Given the user scrolls to the Services section
    Then 6 feature boxes are displayed in a 3×2 grid
    And each box has an icon, heading, description, and "Read More" link
    And the headings are: Unique Design, Clean Layout, Well Responsive, Pro Developing, Well Documented, Quick Marketing

  Scenario: Skills section shows circular charts
    Given the user scrolls to the Skills section
    Then 6 circular percentage charts are visible
    And the skill labels are: WebDesign (95%), Coding (85%), Developing (90%), Java Script (95%), Apps Design (85%), Graphics Script (90%)

  Scenario: Portfolio filter works
    Given the user scrolls to the Portfolio section
    Then filter tabs are visible: All, Graphics, UI/UX, Web Design, Coding, Developing, Photography
    And 8 portfolio cards are displayed in a 4×2 grid
    And clicking a filter tab shows only matching cards

  Scenario: Team section shows 4 members
    Given the user scrolls to the Team section
    Then 4 team member cards are displayed
    And each card has a photo, name, role, skill bars, and social links

  Scenario: Pricing table toggles monthly/yearly
    Given the user scrolls to the Pricing section
    Then Monthly and Yearly tabs are displayed
    And 4 pricing cards are shown: Basic ($10), Premium ($50), Business ($80), Ultimate ($100)
    And the Premium card is highlighted as active
    And switching tabs updates the prices

  Scenario: Blog section shows 3 entries
    Given the user scrolls to the Blog section
    Then 1 featured blog card and 2 smaller blog cards are displayed
    And each card has a title and excerpt

  Scenario: Counter/stats section
    Given the user scrolls to the Counter section
    Then 4 stat boxes are displayed
    And each has an icon, title, and animated count number
    And the stats are: Project Complete (1172), Happy Clients (1000), Total Clients (1200), Wining Award (1172)

  Scenario: Contact form renders correctly
    Given the user scrolls to the Contact section
    Then a contact form is visible with fields: Full Name, Phone Number, Email, Subject, Message
    And a "Send Now" button is displayed
    And contact info (address, phone, email) is shown on the right

  Scenario: Footer has 5 columns
    Given the user scrolls to the Footer
    Then 5 footer columns are displayed: brand, News, Company, Resources, Solutions
    And a copyright bar is at the bottom
    And the footer links to Component Dock

  Scenario: All buttons are pill-shaped with 3D shadow
    Given any button is rendered on the page
    Then the button has border-radius 100px (pill shape)
    And a 3D layered box-shadow effect is applied
    And on hover the button lifts up (translateY -4px)

## Verification checklist

- [ ] Navbar: fixed, transparent → dark on scroll, all 7 links present
- [ ] Hero: full-viewport, dark overlay, headline, quote, "Contact Now" pill
- [ ] About: split layout, heading, text, "Learn More" pill, device image
- [ ] Video + Why Choose Us: video thumb, 3 stat rows
- [ ] Services: 6 feature boxes in 3×2 grid with icons
- [ ] Skills: 6 circular charts with correct percentages
- [ ] Portfolio: 8 cards, 7 filter tabs, filter functionality
- [ ] Team: 4 cards with photos, skill bars, social links
- [ ] Pricing: monthly/yearly tabs, 4 cards, active Premium highlight
- [ ] Blog: 1 featured + 2 smaller cards
- [ ] Counters: 4 stat boxes with animated numbers
- [ ] Contact: form + info sidebar
- [ ] Footer: 5 columns, copyright, Component Dock link
- [ ] Buttons: pill shape, 3D shadow, hover lift
- [ ] Fonts: Roboto (body), Montserrat (headings), Satisfy (script)
- [ ] Colors: brand gradient #a1c4fd → #c2e9fb, text #898989, headings #4f4f4f
- [ ] All images use picsum.photos placeholders (no ColorLib assets)
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Footer links to Component Dock
