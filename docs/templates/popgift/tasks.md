# PopGift — Implementation Tasks & Design Notes

## Template identity
- **New name:** popgift
- **Source:** ColorLib Modal V14
- **Source slug:** modal-14
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/modal-14/
- **ColorLib page:** https://colorlib.com/wp/template/modal-14/
- **Category:** Bootstrap Modal / Coupon Popup

## Design notes (from preview DOM + CSS)

### Visual overview
A single-page layout with one centered "Launch modal" button. Clicking it opens
a centered Bootstrap modal popup. The popup is a coupon form:
- Left side: promotional lifestyle image (200px wide, flex-basis)
- Right side: heading, description, dashed-border coupon code, primary CTA, cancel link

### Color palette
- Modal body background: #fff4e4 (warm cream)
- Headings: #000 (black)
- Paragraphs: #777 (medium gray)
- Cancel link: gray
- Coupon code box: white (#fff) background, 2px dashed #6c757d border
- Primary button: Bootstrap .btn-primary (#0d6efd default)
- Secondary button: Bootstrap .btn-secondary (#6c757d)

### Typography
- Primary font: Roboto (Google Fonts) — body + headings
- Loaded: Poppins, Source Serif Pro (minimal use, can be omitted)

### Spacing & layout
- Modal: centered vertically and horizontally (flexbox, 100vh page)
- Modal wrapper: border-radius 7px, heavy box-shadow
- Modal content: border-radius 0 (sharp inner corners)
- Promo image: flex 0 0 200px
- Main content: padding 20px left/right
- Button: padding py-3 px-4 (Bootstrap btn-secondary), btn-block (full width)

### Interaction
- Bootstrap modal fade-in/out
- Close via: X button, backdrop click, Escape key, cancel link
- Cancel link: gray text, 14px font size

## Section-by-section fidelity notes

### 1. Page background + trigger button
- Full viewport height (100vh), centered content
- Single "Launch modal" button, secondary Bootstrap style
- Button text: "Launch modal"

### 2. Modal dialog (overlay)
- Bootstrap modal centered (modal-dialog-centered)
- Dark semi-transparent backdrop
- Modal wrapper: 7px border-radius, heavy shadow
- Modal body: warm cream (#fff4e4), sharp inner corners, no padding on sides

### 3. Modal body content
- Flexbox row: promo image (left, 200px) + content (right)
- Promo image: background-image, cover, centered

### 4. Modal content area
- Heading: "60% off coupon", black, 22px
- Paragraph: description text, #777, 14px, font-weight 300
- Coupon code: "SUMMER60", centered, white bg, dashed border
- CTA button: "Use a coupon", primary Bootstrap, full width, 4px radius
- Cancel link: "Sorry, I don't want this.", gray, 14px

## Implementation order

1. Create app scaffold (copy from simplest existing modal app)
2. Write Modal.tsx component
3. Write CouponModal.tsx (the popup content)
4. Wire up state (open/close, Escape key, backdrop click)
5. Style with Tailwind using extracted tokens
6. Write tests (coverage)
7. Run verify-app.sh
