# Template: Plano (Interior Design Landing)

## Purpose

Plano is a single-page interior design landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Interior 2" design (see TEMPLATES.md), built under the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a dark navy and cream interior design page with a hero
slider ("Interior Design Solution For Your Business"), a three-column
services strip (Planing, Architecture, 3D Design with large numbers
01/02/03), a "Our Works" portfolio gallery with alternating image-text
rows, a "Professional and creative mind" skills/progress section, a
testimonial carousel with dark overlay, an @Instagram image grid, and a
dark footer with query CTA, four-column links, and copyright bar. Plano
recreates that structure section-for-section with matching layout, colors,
typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Interior 2" — free interior design website template
  (source: https://colorlib.com/wp/template/interior-2/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/interior2/`
  (HTTP 200, 29.9KB — the `interior-2` preview slug returns "Not Found",
  so the `interior2` preview target hosts the rendered page) + stylesheet
  `css/style.css` (188.4KB). The rendered DOM is the reference below; the
  TEMPLATES.md screenshot (`interior2-free-template.jpg`) confirms the
  visual design (dark navy hero with cream CTA, white service columns with
  large numbers, white works gallery, light-blue skills section, dark
  testimonial overlay, white Instagram grid, dark footer).
- **Section order (1:1):**
  1. Header (`header-area`): logo + nav (home, Projects, Pages [dropdown:
     about, project details, elements], Blog [dropdown: blog, single-blog],
     Contact) + "Say Hello" CTA button.
  2. Hero slider (`slider_area`): owl-carousel with 2 slides, full-width
     background images with dark navy overlay (opacity 0.6), heading
     "Interior Design Solution For Your Business" + "View Works" button.
  3. Services strip (`prise_area`): 3 equal columns (Planing, Architecture,
     3D Design) each with title, description text, and large faded number
     (01, 02, 03). White background, full-width fluid container.
  4. Portfolio gallery (`works_area`): "Our Works" heading + 4 alternating
     rows — image left / text right, then text left / image right. Each row
     has project title, description, "Details" outline button.
  5. Skills / About (`creative_mind_area`): split layout — full image left,
     right side with heading "Professional and creative mind", description
     paragraph, 3 progress bars (Architecture 60%, 3D Design 65%, Interior
     80%), "About Us" outline button. Light blue-gray background (#F5FBFF).
  6. Testimonials (`testimonial_area`): dark overlay on background image,
     owl-carousel with quote icon, testimonial text, author photo, name
     (Robert Thomson), role (Business Owner).
  7. Instagram grid (`instagram_area`): centered "@Instagram" heading +
     3-column image grid.
  8. Footer: query CTA bar (dark navy, "Have any project or query? Just
     say hello Mail Us" + phone number), four-column footer_top (Address,
     Services, Company, Subscribe with newsletter form), copyright bar.

## Design tokens

| Token              | Value                         | Notes                                      |
|--------------------|-------------------------------|--------------------------------------------|
| primary            | `#001D38`                     | Dark navy — header, footer, overlay, text  |
| accent / cream     | `#FFE8C3`                     | Warm cream — button bg, hover states       |
| body-bg            | `#FFFFFF`                     | White default                              |
| skills-bg          | `#F5FBFF`                     | Very light blue-gray for creative_mind     |
| text-primary       | `#001D38`                     | Dark navy for headings/body                |
| text-secondary     | `#999999` / `#888888`         | Gray for descriptions                      |
| heading-color      | `#001D38`                     | All section headings                       |
| font-family        | `"Poppins", sans-serif`       | Google Fonts, loaded via `<link>`          |
| button-primary-bg  | `#FFE8C3`                     | Cream filled button (boxed-btn3)           |
| button-primary-text| `#001D38`                     | Navy text on cream button                  |
| button-primary-hover| bg `#001D38`, color `#fff`   | Inverts on hover                           |
| button-outline     | border `#001D38`, color `#fff`| Outline button (boxed-btn3-line), 0px radius|
| overlay-color      | `#001D38` opacity 0.6         | Dark navy semi-transparent overlay         |
| footer-bg          | `#001D38`                     | Dark navy footer                           |
| footer-border      | `#334A60`                     | Subtle divider in footer query area        |
| border-radius      | `0px`                         | Sharp corners — no border-radius on buttons|
| section-padding    | ~80-100px top/bottom          | Generous vertical spacing                  |

## Gherkin requirements

### Feature: Plano — Interior Design Landing Page

#### Scenario: Header renders with navigation and CTA
- Given the user loads the Plano page
- Then the header displays a logo on the left
- And the navigation shows links: Home, Projects, Pages, Blog, Contact
- And a "Say Hello" CTA button appears on the right
- And the nav is sticky on scroll

#### Scenario: Hero slider displays with overlay and CTA
- Given the user loads the Plano page
- Then a full-width hero slider is visible
- And the heading reads "Interior Design Solution For Your Business"
- And a "View Works" cream button is displayed
- And the hero has a dark navy semi-transparent overlay
- And the slider transitions between slides automatically

#### Scenario: Services strip shows three service columns
- Given the user loads the Plano page
- Then three service columns are visible: Planing, Architecture, 3D Design
- And each column has a title, description text, and large number (01, 02, 03)
- And the section has a white background
- And the columns are equal width (3-column grid)

#### Scenario: Portfolio gallery shows alternating image-text rows
- Given the user loads the Plano page
- Then "Our Works" heading is displayed
- And four project rows are shown in alternating layout (image-left/text-right, then text-left/image-right)
- And each row has a project title, description, and "Details" outline button
- And project titles are: White Blocks House, Art Gallery Design (x2), Office Space

#### Scenario: Skills section shows progress bars
- Given the user loads the Plano page
- Then the "Professional and creative mind" section is visible
- And a full-width image appears on the left
- And three progress bars are displayed: Architecture (60%), 3D Design (65%), Interior (80%)
- And an "About Us" outline button is shown
- And the section has a light blue-gray background (#F5FBFF)

#### Scenario: Testimonials carousel displays quotes
- Given the user loads the Plano page
- Then a testimonial carousel is visible with a dark overlay background
- And each slide shows a quote icon, testimonial text, author photo, name, and role
- And the carousel auto-plays between slides

#### Scenario: Instagram grid shows three images
- Given the user loads the Plano page
- Then the "@Instagram" heading is centered
- And three images are displayed in a 3-column grid
- And each image is a clickable link

#### Scenario: Footer contains CTA, links, and newsletter
- Given the user loads the Plano page
- Then the footer has a query CTA section with "Have any project or query?" and a phone number
- And four footer columns are shown: Address, Services, Company, Subscribe
- And the Subscribe column has an email input and "Subscribe" button
- And the footer has a dark navy background
- And the copyright bar shows "Made with Component Dock" linking to https://www.componentdock.com/

#### Scenario: Responsive layout adapts to mobile
- Given the user loads the Plano page on a mobile viewport
- Then the navigation collapses to a hamburger menu
- And service columns stack vertically
- And portfolio rows stack vertically
- And footer columns stack vertically
- And the hero text remains readable

#### Scenario: No ColorLib references in app code
- Given the Plano app is built
- Then no source file in `apps/plano/` contains "colorlib" or "ColorLib"
- And no source file contains "preview.colorlib.com"
- And provenance is only in the spec and TEMPLATES.md

## Verification checklist

- [ ] Header renders with logo, 5 nav items, dropdown for Pages and Blog, "Say Hello" CTA
- [ ] Hero slider has 2+ slides with background images and dark overlay
- [ ] "View Works" button uses cream (#FFE8C3) background
- [ ] Services strip shows 3 equal columns with titles, text, and large numbers
- [ ] Portfolio gallery has 4 alternating rows with images and "Details" buttons
- [ ] Skills section shows 3 progress bars with correct percentages
- [ ] Testimonial carousel shows quote, author photo, name, role with dark overlay
- [ ] Instagram grid shows 3 images in a row
- [ ] Footer has query CTA, 4-column layout, newsletter form, copyright
- [ ] Footer copyright links to https://www.componentdock.com/
- [ ] All buttons use sharp corners (0px radius)
- [ ] Font is Poppins via Google Fonts
- [ ] Primary color #001D38 used consistently for text, headers, footer, overlay
- [ ] Accent color #FFE8C3 used for primary buttons
- [ ] No ColorLib references in apps/plano/ source files
- [ ] Responsive: mobile hamburger, stacked columns, stacked footer
