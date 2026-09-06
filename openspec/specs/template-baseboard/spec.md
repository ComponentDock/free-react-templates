# Template: Baseboard (Footer)

## Purpose

Baseboard is a single-page FOOTER SECTION component in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Bootstrap Footer 01"
free template (source: https://colorlib.com/wp/template/bootstrap-footer-01/),
built under a DIFFERENT name (**Baseboard**), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

**Preview URL:** https://preview.colorlib.com/theme/bft/bootstrap-footer-01/

The original is a Bootstrap 4 footer with: a full-width CTA banner (purple
background with shadow, "Ready for a next project?" headline + "Contact us"
button), a 5-column footer grid (logo/copyright, Customers, Company, Further
Information, Follow us with social icons), all on a dark navy background.
Font: Roboto. The CTA banner floats above the footer with a negative offset
and a diagonal box-shadow.

**WHAT MAKES BASEBOARD DISTINCT (signature behaviors):**

1. **Floating CTA banner above the footer.** The CTA section has a purple
   (#8186d5) background, sits above the footer with `position: relative;
   top: -150px`, and casts a diagonal box-shadow
   (`-20px -20px 0 0 rgba(52, 58, 64, 0.2)`). It is a flex row with
   the headline on the left and a dark rounded-0 "Contact us" button on
   the right.

2. **5-column footer grid.** The footer body is a Bootstrap row with 5
   columns: Col 1 = logo (white, uppercase, 20px, letter-spacing 0.1rem)
   + copyright (muted #666873); Col 2 = "Customers" links; Col 3 =
   "Company" links; Col 4 = "Further Information" links; Col 5
   (col-md-3) = "Follow us" with inline-block social icons.

3. **Dark navy background (#141d2a) + white text.** The footer uses a
   deep dark navy with white (#fff) text. Link color is muted grey
   (#666873), turning white on hover. Headings are 16px with line-height 1.5.

4. **Circular social icon buttons.** Social links are 40x40px circles
   (border-radius 50%) with purple (#8186d5) background and white icons.
   Icons are absolutely centered inside the circle via transform.

5. **CTA heading + subheading layout.** The CTA has two stacked headings:
   h2 "Ready for a next project?" (white) and h3 "Let's get started!"
   (dark, #343a40 via Bootstrap's text-dark). The button is
   `btn-dark rounded-0 py-3 px-5`.

## Design Tokens

| Token             | Value                            | Source                               |
| ----------------- | -------------------------------- | ------------------------------------ |
| font-family       | Roboto, sans-serif               | CSS body + h1-h6 rules              |
| footer-bg         | #141d2a (dark navy)             | .footer-20192 background-color       |
| cta-bg            | #8186d5 (purple/indigo)         | .cta background-color                |
| social-btn-bg     | #8186d5 (purple/indigo)         | .social li a background-color        |
| text-color        | #fff (white)                    | .footer-20192 color                  |
| link-color        | #666873 (muted grey)            | .links li a color                    |
| link-hover        | #fff (white)                    | .links li a:hover color              |
| copyright-color   | #666873 (muted grey)            | .copyright color                     |
| cta-shadow        | -20px -20px 0 0 rgba(52,58,64,0.2) | .cta box-shadow                 |
| social-btn-size   | 40px x 40px                     | .social li a width/height            |
| social-btn-radius | 50% (circle)                    | .social li a border-radius           |
| cta-btn-radius    | 0 (square corners)              | .btn.rounded-0                       |
| heading-size      | 16px (h3 in footer columns)     | .footer-20192 h3 font-size           |
| logo-size         | 20px, uppercase, letter-spacing 0.1rem | .footer-logo rules          |
| content-height    | 70vh (demo placeholder above footer) | .content height                  |

## Gherkin Requirements

### Scenario: Footer renders with dark navy background

```gherkin
Given the Baseboard component is mounted
Then the footer section has a dark navy background (#141d2a)
And the footer text is white (#fff)
```

### Scenario: CTA banner displays above footer

```gherkin
Given the Baseboard component is mounted
Then a CTA banner is visible above the footer grid
And the CTA has a purple background (#8186d5)
And the CTA contains the heading "Ready for a next project?"
And the CTA contains the subheading "Let's get started!"
And the CTA contains a "Contact us" button with square corners
```

### Scenario: CTA banner has diagonal shadow

```gherkin
Given the Baseboard component is mounted
Then the CTA banner casts a diagonal box-shadow
```

### Scenario: Footer grid has 5 columns

```gherkin
Given the Baseboard component is mounted
Then the footer grid contains 5 columns:
  | Column | Content                            |
  | 1      | Logo + copyright                   |
  | 2      | Customers links (Buyer, Supplier)  |
  | 3      | Company links (About, Careers, Contact) |
  | 4      | Further Info links (Terms, Privacy)|
  | 5      | Social media icons                 |
```

### Scenario: Footer logo is uppercase with letter spacing

```gherkin
Given the Baseboard component is mounted
Then the footer logo text is uppercase
And the footer logo has letter-spacing of 0.1rem
And the footer logo is white and 20px
```

### Scenario: Column links have muted grey color and white hover

```gherkin
Given the Baseboard component is mounted
Then the column links are muted grey (#666873)
When a column link is hovered
Then the link color changes to white (#fff)
```

### Scenario: Social icons are circular purple buttons

```gherkin
Given the Baseboard component is mounted
Then the social icons section displays 5 icons
And each social icon is a 40x40px circle
And each social icon has a purple background (#8186d5)
And each social icon is white
```

### Scenario: Copyright text displays in muted grey

```gherkin
Given the Baseboard component is mounted
Then the copyright text is visible in muted grey (#666873)
```

### Scenario: Responsive layout adapts to mobile

```gherkin
Given the Baseboard component is mounted on a mobile viewport
Then the 5-column footer grid stacks vertically
And the CTA banner stacks vertically (heading + button stacked)
```

### Scenario: Footer links are accessible

```gherkin
Given the Baseboard component is mounted
Then all footer links have href attributes
And all social icon links have accessible labels or aria-labels
And the footer uses semantic HTML (footer, nav, ul, li)
```

## Verification Checklist

- [ ] Footer background is #141d2a (dark navy)
- [ ] CTA banner is purple (#8186d5) with diagonal box-shadow
- [ ] CTA has "Ready for a next project?" h2 and "Let's get started!" h3
- [ ] CTA "Contact us" button is dark, square corners, py-3 px-5
- [ ] 5-column grid: Logo/Customers/Company/Info/Social
- [ ] Logo is white, uppercase, 20px, letter-spacing 0.1rem
- [ ] Copyright text is #666873
- [ ] Column heading (h3) is 16px
- [ ] Links are #666873, hover to #fff
- [ ] Social icons are 40x40px circles with #8186d5 background
- [ ] Social icons use lucide-react or similar (not icomoon font)
- [ ] Font is Roboto (loaded via Google Fonts or CDN)
- [ ] Responsive: columns stack on mobile, CTA stacks
- [ ] Footer links to https://www.componentdock.com/ (Component Dock)
- [ ] No references to ColorLib in app code
- [ ] Tests pass with 100% coverage
- [ ] Build succeeds
