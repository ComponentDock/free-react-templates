# Template: CouponModal (Bootstrap Modal / Coupon Popup)

## Purpose

Recreation of ColorLib **Modal 04** (`https://colorlib.com/wp/template/modal-04/`).
Preview: `https://preview.colorlib.com/theme/bootstrap/modal-04/`.

Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

This is a centered coupon-discount modal popup with a two-column layout: left
side shows a decorative background image; right side shows a "50% Off" headline,
promo code input, and a "Start Shopping" CTA. The page behind the modal is a
simple white section with a "Launch Modal 04" button.

## Design Tokens

Extracted from `css/style.css` (lines 8220–8305) and preview HTML:

| Token                | Value                                      | Notes                                  |
|----------------------|--------------------------------------------|----------------------------------------|
| brand-primary        | `#12d3cf`                                  | Teal/cyan — btn-primary, close button  |
| brand-primary-hover  | `transparent` with `#12d3cf` text/border   | Outline-style hover                    |
| text-dark            | `#000000`                                  | Modal body text, CTA button text       |
| page-bg              | `#ffffff`                                  | Section behind modal                   |
| modal-shadow         | `0px 10px 34px -15px rgba(0,0,0,0.24)`    | Subtle drop shadow on modal            |
| modal-border         | `none`                                     | Borderless modal content               |
| modal-radius         | `0`                                        | Sharp corners                          |
| modal-max-width      | `700px`                                    | `modal-dialog max-width`               |
| close-btn-bg         | `#12d3cf`                                  | Same as brand-primary                  |
| close-btn-color      | `#ffffff`                                  | White "×" icon                         |
| close-btn-size       | `40px × 40px`                              | Absolute top-right                     |
| heading-font         | Josefin Sans (Google Fonts, wght 300–700)  | Loaded via `@font-face` in preview     |
| heading-size         | `58px`, font-weight 700, uppercase         | "50% Off" h2                           |
| subheading-size      | `16px`, uppercase                          | "On all Colorlib Brands" h4            |
| cta-text-transform   | uppercase, letter-spacing 1px              | "Start Shopping" button                |
| cta-font-size        | `14px`                                     | Button text size                       |
| cta-color            | `#000`                                     | Button text is black, not white        |
| accent-border-detail | `1px solid rgba(0,0,0,0.1)`               | Decorative border around text content  |
| decorative-offset    | `-30px` on all sides                       | The border pseudo-element extends out  |

### Font

- **Google Font:** Josefin Sans, weights 300, 400, 600, 700
- Fallback: system sans-serif stack
- Loaded in `index.html` via `<link>` to Google Fonts

## Section Structure (from preview HTML)

1. **Page Section** (`ftco-section`)
   - White background, centered container
   - Contains the `h2` title ("Modal 04") and a "Launch" button (`btn-primary`)

2. **Modal Overlay** (Bootstrap `.modal.fade`)
   - `.modal-dialog-centered` — vertically and horizontally centered
   - `.modal-content` — 700px max-width, no border, box-shadow

3. **Modal Header** (close button)
   - 40×40px square, `#12d3cf` background, white "×" (ionicons `ion-ios-close`)
   - Absolutely positioned top-right, z-index 1

4. **Modal Body — Two-Column Row**
   - **Left column (`.col-md-6`):** Background image (`images/bg-1.jpg`)
     via `background-image` style, flex-fill
   - **Right column (`.col-md-6`):** Centered text block
     - h2: "50" + "%" in a lighter weight span — bold uppercase 58px
     - h4: "On all Colorlib Brands" — uppercase 16px
     - Form with text input ("Enter code" placeholder)
     - "Start Shopping" CTA button — `btn-primary` (black text on white bg
       within the modal body, but uses brand-primary `#12d3cf` for border)

## Gherkin Scenarios

### Scenario: Page loads with launch button
- Given the user visits the template page
- When the page finishes loading
- Then a centered "Launch" button is visible on a white background
- And the heading text is displayed above the button

### Scenario: Modal opens on button click
- Given the page is loaded
- When the user clicks the "Launch" button
- Then a centered modal overlay appears
- And the modal contains a two-column layout

### Scenario: Modal left column shows image
- Given the modal is open
- Then the left column displays a background image
- And the image fills the full height of the column

### Scenario: Modal right column shows content
- Given the modal is open
- Then the right column displays a "50% Off" heading
- And an "On all Colorlib Brands" subheading is shown below
- And a text input with "Enter code" placeholder is visible
- And a "Start Shopping" button is visible

### Scenario: Modal closes on close button click
- Given the modal is open
- When the user clicks the close button (× icon)
- Then the modal overlay disappears
- And the page content is visible again

### Scenario: Modal closes on backdrop click
- Given the modal is open
- When the user clicks outside the modal (on the backdrop)
- Then the modal overlay disappears

### Scenario: Modal is responsive
- Given the user is on a mobile viewport (width < 768px)
- When the modal opens
- Then the left column image section collapses to 300px height
- And the two columns stack vertically

### Scenario: Close button styling
- Given the modal is open
- Then the close button is a 40×40px square
- And it has a #12d3cf background
- And the × icon is white
- And it is positioned in the top-right corner of the modal

## Verification Checklist

- [ ] Modal is centered on the page (both axes)
- [ ] Modal max-width is 700px
- [ ] Modal has no visible border, has box shadow
- [ ] Close button is 40×40px, teal background, white icon, top-right
- [ ] Left column shows a background image (placeholder via picsum)
- [ ] Right column has h2 "50% Off" in 58px bold uppercase
- [ ] Right column has h4 subtitle in 16px uppercase
- [ ] Promo code input has "Enter code" placeholder
- [ ] "Start Shopping" CTA is block-level, uppercase, black text
- [ ] Brand primary #12d3cf used consistently (btn, close button)
- [ ] Font is Josefin Sans (Google Fonts)
- [ ] Modal closes on × click and backdrop click
- [ ] Responsive: columns stack on mobile, image collapses to 300px
- [ ] Decorative border pseudo-element around text content
- [ ] Page background is white
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
