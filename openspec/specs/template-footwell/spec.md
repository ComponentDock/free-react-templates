# Template: Footwell (Footer Component)

## Purpose

Recreation of ColorLib's "Bootstrap Footer 01" — a dark-themed website footer
with a CTA banner, multi-column link sections, and social media icons. This is
a focused footer component template, not a full-page website template.

- **Source:** [ColorLib Bootstrap Footer 01](https://colorlib.com/wp/template/bootstrap-footer-01/)
- **Preview URL:** https://preview.colorlib.com/theme/bft/bootstrap-footer-01/
- **New name:** `footwell` (footer + well, a deep section)
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens

Extracted from the live preview CSS (`css/style.css`):

| Token | Value | Notes |
|-------|-------|-------|
| **Font family** | `"Roboto", sans-serif` | System font stack |
| **Footer background** | `#141d2a` | Dark navy |
| **Footer text color** | `#fff` | White |
| **Footer padding** | `7rem 0` | Generous vertical spacing |
| **Heading (h3) size** | `16px` | Small section headings |
| **Heading margin-bottom** | `10px` | Tight under headings |
| **Link color** | `#666873` | Muted gray-purple |
| **Link hover color** | `#fff` | White on hover |
| **CTA background** | `#8186d5` | Purple/indigo accent |
| **CTA shadow** | `-20px -20px 0 0 rgba(52,58,64,0.2)` | Offset box shadow |
| **CTA button** | `btn btn-dark rounded-0 py-3 px-5` | Dark, square, padded |
| **CTA position** | `relative, top: -150px` | Overlaps above footer |
| **Social icon bg** | `#8186d5` | Same purple as CTA |
| **Social icon shape** | `border-radius: 50%` | Circular, 40x40px |
| **Social icon color** | `#fff` | White |
| **Footer logo** | `#fff, 20px, uppercase, letter-spacing .1rem` | Branded logo text |
| **Copyright** | `color: #666873` | Muted gray |
| **Link transition** | `.3s all ease` | Smooth hover transitions |
| **Content area height** | `70vh` | Demo hero area above footer |

### Visual Design Notes

- Dark navy (#141d2a) footer with generous 7rem vertical padding
- CTA banner: purple (#8186d5) bar with "Ready for a next project?" heading
  and dark square "Contact us" button; positioned with negative top offset
  and offset box-shadow creating a layered card effect
- Footer columns: logo column (uppercase "Colorlib"), Customers, Company,
  Further Information, and Follow Us (social icons)
- Social icons: 40px purple circles with white icon glyphs (facebook, twitter,
  linkedin, medium, paper-plane)
- Links are muted gray (#666873) turning white on hover
- Clean, modern, Bootstrap-based footer design

## Requirements (Gherkin)

### Scenario: Renders the footer component
```gherkin
Given the Footwell component is rendered
When I look at the page
Then I see a dark navy (#141d2a) footer section
And the footer has 7rem vertical padding
```

### Scenario: CTA banner is displayed
```gherkin
Given the Footwell component is rendered
Then I see a CTA section with purple (#8186d5) background
And it shows "Ready for a next project?"
And it shows "Let's get started!"
And it has a dark "Contact us" button
```

### Scenario: CTA button styling
```gherkin
Given the CTA banner is visible
Then the "Contact us" button has a dark background
And the button has square corners (rounded-0)
And the button has py-3 px-5 padding
```

### Scenario: Footer logo column
```gherkin
Given the Footwell component is rendered
Then the first column shows the brand name "Footwell"
And the brand name is white, uppercase, with letter-spacing
And there is a copyright notice below it
```

### Scenario: Customers column
```gherkin
Given the Footwell component is rendered
Then the "Customers" column has heading "Customers"
And it contains links: "Buyer", "Supplier"
```

### Scenario: Company column
```gherkin
Given the Footwell component is rendered
Then the "Company" column has heading "Company"
And it contains links: "About us", "Careers", "Contact us"
```

### Scenario: Further Information column
```gherkin
Given the Footwell component is rendered
Then the "Further Information" column has heading "Further Information"
And it contains links: "Terms & Conditions", "Privacy Policy"
```

### Scenario: Social media icons
```gherkin
Given the Footwell component is rendered
Then the "Follow us" column has social media icons
And each icon is a 40px purple (#8186d5) circle
And the icons link to facebook, twitter, linkedin, and other platforms
```

### Scenario: Link hover behavior
```gherkin
Given the Footwell component is rendered
When I hover over a footer link
Then the link color transitions from #666873 to #fff
And the transition is smooth (0.3s ease)
```

### Scenario: Responsive layout
```gherkin
Given the Footwell component is rendered on a mobile device
Then the CTA section stacks vertically
And the footer columns stack or wrap appropriately
And all text remains readable
```

### Scenario: Accessibility
```gherkin
Given the Footwell component is rendered
Then all links are focusable
And the footer uses semantic HTML (footer, nav, ul, li)
And social links have accessible labels
```

## Verification Checklist

- [ ] Footer renders with dark navy (#141d2a) background
- [ ] CTA banner has purple (#8186d5) background
- [ ] CTA shows "Ready for a next project?" and "Let's get started!"
- [ ] "Contact us" button is dark with square corners
- [ ] CTA has offset box-shadow effect
- [ ] Logo column shows brand name in uppercase white
- [ ] Copyright notice is present in muted gray
- [ ] "Customers" column with Buyer, Supplier links
- [ ] "Company" column with About us, Careers, Contact us links
- [ ] "Further Information" column with Terms, Privacy links
- [ ] "Follow us" column with 5 circular social icons
- [ ] Social icons are 40px purple circles
- [ ] Links are #666873, hover to #fff
- [ ] Smooth 0.3s transitions on links
- [ ] Footer uses semantic HTML
- [ ] Component is responsive on mobile
