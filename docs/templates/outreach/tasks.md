# Outreach — Implementation Notes

## Source mapping

- **ColorLib source:** Contact Form 05
- **Source slug:** `contact-form-05`
- **Source URL:** https://colorlib.com/wp/template/contact-form-05/
- **Bootstrap preview (reachable):** https://preview.colorlib.com/theme/bootstrap/contact-form-05/
- **Main preview (404):** https://preview.colorlib.com/theme/contact-form-05/
- **Screenshot analyzed:** https://colorlib.com/wp/wp-content/uploads/sites/2/contact-form-05.jpg

## Section order (top to bottom)

1. **Page title** — centered heading above the card (optional; can be the template name or omitted)
2. **Card wrapper** — rounded (10px), large drop shadow, two-column layout
   1. **Left column (form panel)** — white background, padded
      - Heading: "Contact us"
      - Subtitle: "We're open for any suggestion or just to have a chat"
      - Contact info row: Address | Email | Phone (3-column grid on desktop, stacked on mobile)
      - Form: Name input, Email input, Subject input, Message textarea
      - Submit button: "Send Message" (golden amber)
      - Social links: "Follow us here" heading + Facebook, Twitter, Instagram, Dribbble
   2. **Right column (image panel)** — full-height background cover image
3. **No navbar or separate footer** — self-contained contact section

## Fidelity notes

### Typography
- Load **Poppins** (400, 500, 600, 700) via Google Fonts `<link>` in index.html
- Body: 14px, line-height 1.8, color #666666
- Headings: weight 400, color #000000
- Form inputs: 16px

### Colors & backgrounds
- Page: #f4f4f4
- Card: #ffffff
- Accent (button, links, submitting text): #e3b04b
- Button hover: #d99c22
- Contact labels: rgba(0,0,0,0.2), uppercase, 13px, font-weight 600
- Contact values: rgba(0,0,0,0.7)
- Social links: rgba(0,0,0,0.2), uppercase, 13px, font-weight 500
- Social links hover: #000000

### Button
- padding: 12px 16px
- border-radius: 5px
- box-shadow: 0px 10px 20px -6px rgba(0,0,0,0.12)
- Hover shadow: 0px 10px 20px -6px rgba(0,0,0,0.22)
- Background + border: #e3b04b, text: white

### Inputs
- Underline-only: `border: none; border-bottom: 1px solid rgba(0,0,0,0.1); padding: 0;`
- Height: 40px
- Placeholder color: rgba(0,0,0,0.5)
- Focus: border-color rgba(0,0,0,0.3)
- textarea: height auto, resize vertical

### Card wrapper
- border-radius: 10px
- box-shadow: 0px 21px 41px -13px rgba(0,0,0,0.18)
- overflow: hidden

### Right column image
- background-size: cover; background-position: center center
- Use picsum.photos/seed/outreach-hero/800/600 as placeholder

### Responsive
- Bootstrap-style grid: two columns at ≥992px (lg), stacked below
- Contact info: 3-col on md+, stacked on mobile
- Card padding adjusts (p-md-5 p-4)

## Implementation tasks

- [ ] Create `apps/outreach/` from simplest existing app template
- [ ] Set package name to `@free-react-templates/outreach`
- [ ] Set public/CNAME to `outreach.free.componentdock.com`
- [ ] Set homepage in package.json
- [ ] Add Poppins font link to index.html
- [ ] Implement Card component (two-column wrapper with shadow/radius)
- [ ] Implement ContactInfo component (3-column address/email/phone)
- [ ] Implement ContactForm component (4 underline inputs + golden submit button)
- [ ] Implement SocialLinks component ("Follow us here" + 4 links)
- [ ] Implement ImagePanel component (full-height cover image placeholder)
- [ ] Compose all in App.tsx matching section order
- [ ] Add responsive breakpoints (stack columns on mobile)
- [ ] Write tests for all components (100% coverage)
- [ ] Add Component Dock footer link
- [ ] Run verify-app.sh outreach
- [ ] Commit, push, open PR
