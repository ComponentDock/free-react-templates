# Template: Lensflow (Photographer Portfolio)

## Purpose

Recreation of ColorLib **Pemodule** — a free photographer website template.

- **Source**: https://colorlib.com/wp/template/pemodule/
- **Preview**: https://preview.colorlib.com/theme/pemodule/
- **Stack**: Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens (from live preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| Brand green | `#6cbb23` | Primary CTA buttons, accents |
| Deep purple | `#3224b0` | Gradient start (hero/button bg) |
| Magenta | `#be5ede` | Gradient end (hero/button bg) |
| Cyan | `#4cd3e3` | Service section accent |
| Light purple bg | `#f9f9ff` | Section backgrounds |
| Dark text | `#222222` | Headings |
| Gray text | `#777777` | Body copy |
| White | `#ffffff` | Card backgrounds, text on dark |
| Font family | Poppins | All text |
| Button shape | border-radius: 0px (sharp rectangular) | Primary buttons |
| Hero gradient | linear-gradient(0deg, #3224b0, #be5ede) | Banner/hero background |

## Section Structure (from preview DOM)

1. **Navbar** — hidden on mobile, logo "Pemodule" (will be "Lensflow"), nav links, CTA
2. **Hero / Banner** — full-width gradient background (purple-to-magenta), subtext "your best partner", headline "Lensflow", "Get Started" CTA button
3. **Featured Area** — "Reasons To Choose" headline, feature cards with descriptions
4. **Parallax Area** — parallax background image, overlay headline + CTA, "Reasons To Choose" repeated
5. **Service Area** — 4-column grid of service cards with icon + title + description, hover overlay effect (cyan accent `#4cd3e3`)
6. **Contact Area** — dark/gradient background, "Send Us Message" heading, contact form
7. **Newsletter Area** — "Subscribe for our Newsletter" with email input + button
8. **Footer** — multi-column footer with links, copyright, Component Dock attribution

## Gherkin Requirements

### Scenario: Hero section renders with brand gradient background
```
Given I visit the Lensflow homepage
Then the hero section has a purple-to-magenta gradient background
And I see the subheading "your best partner"
And I see the heading "Lensflow"
And I see a "Get Started" call-to-action button
```

### Scenario: Featured section displays reason cards
```
Given I visit the Lensflow homepage
When I scroll to the featured area
Then I see a "Reasons To Choose" heading
And I see feature description cards with text content
```

### Scenario: Parallax section shows background image with overlay
```
Given I visit the Lensflow homepage
When I scroll to the parallax section
Then I see a parallax background image
And I see an overlay heading and a call-to-action button
```

### Scenario: Service section shows four service cards
```
Given I visit the Lensflow homepage
When I scroll to the service area
Then I see exactly four service cards
And each card has a title and description
And hovering a card reveals an overlay effect with cyan accent
```

### Scenario: Contact section has a form
```
Given I visit the Lensflow homepage
When I scroll to the contact area
Then I see a "Send Us Message" heading on a dark/gradient background
And I see a contact form with input fields and a submit button
```

### Scenario: Newsletter section allows email subscription
```
Given I visit the Lensflow homepage
When I scroll to the newsletter area
Then I see "Subscribe for our Newsletter" heading
And I see an email input field and a subscribe button
```

### Scenario: Footer contains Component Dock link
```
Given I visit the Lensflow homepage
When I scroll to the footer
Then I see a link to "https://www.componentdock.com/" labeled "Component Dock"
```

## Verification Checklist

- [ ] Hero gradient matches `linear-gradient(0deg, #3224b0, #be5ede)`
- [ ] Brand green `#6cbb23` used for CTA buttons
- [ ] Font is Poppins (loaded via Google Fonts)
- [ ] Service cards: 4-column grid with hover overlay
- [ ] Parallax section uses `background-attachment: fixed`
- [ ] Contact section has dark/gradient background with form
- [ ] Newsletter section has email input + subscribe button
- [ ] Footer links to Component Dock
- [ ] All sections match preview order: hero → featured → parallax → services → contact → newsletter → footer
