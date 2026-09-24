# Authgate — Task Outline

## Template

- Name: Authgate
- Recreation of: ColorLib Login Form V16
- Source: https://colorlib.com/wp/template/login-form-v16/
- Preview: https://preview.colorlib.com/theme/login-form-v16/ (404 — design from screenshot)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v16.jpg

## Design Notes

- Full-viewport centered card layout on light gray (#f5f5f5) background
- Card split vertically: left panel (white) + right panel (dusty mauve #9b6b8a)
- Left panel: "Sign In" heading, username input, password input (underline borders)
- Password input has eye icon toggle for visibility
- Right panel: "Sign me in now" button (dark navy #2d3436, full width, rounded)
- "Remember Me" checkbox (checked by default) + "Forgot Password" link (white)
- "— Or Sign In With —" divider (white)
- Facebook + Twitter circular social buttons (white circles, mauve icons)
- Font: Poppins (Google Fonts)
- Component Dock footer

## Design Tokens

| Token                | Value        | Usage                                   |
| -------------------- | ------------ | --------------------------------------- |
| --color-page-bg      | #f5f5f5      | Page background — light gray            |
| --color-card-left    | #ffffff      | Left panel background — white           |
| --color-card-right   | #9b6b8a      | Right panel background — dusty mauve    |
| --color-btn          | #2d3436      | Submit button background — dark navy    |
| --color-btn-text     | #ffffff      | Submit button text — white              |
| --color-heading      | #333333      | "Sign In" heading — dark                |
| --color-label        | #666666      | Input labels — medium gray              |
| --color-input-text   | #333333      | Input text — dark                       |
| --color-placeholder  | #aaaaaa      | Placeholder text — light gray           |
| --color-divider      | #ffffff      | "Or Sign In With" text — white          |
| --color-social-icon  | #ffffff      | Social icon circle fill — white         |
| --color-social-text  | #9b6b8a      | Social icon letter color — mauve        |
| --color-checkbox     | #2196F3      | Remember Me checkbox — blue             |
| --color-link         | #ffffff      | Forgot Password link — white            |
| --font-body          | Poppins      | Body text via Google Fonts              |

## Files

- apps/authgate/src/App.tsx
- apps/authgate/src/components/LoginCard.tsx
- apps/authgate/src/components/SocialButtons.tsx
- apps/authgate/src/components/Footer.tsx
- apps/authgate/src/App.test.tsx
- apps/authgate/src/index.css

## Section-by-Section Fidelity Notes

1. **Page wrapper** — full viewport, light gray bg (#f5f5f5), flex center
2. **Card container** — centered, max-width ~700px, rounded corners, shadow, flex row (stacks on mobile)
3. **Left panel (form)** — white bg, padding, "Sign In" heading (Poppins bold), username input (label + underline border), password input (label + underline border + eye toggle)
4. **Right panel (actions)** — dusty mauve bg (#9b6b8a), padding, "Sign me in now" button (dark navy, full width, rounded), Remember Me checkbox row, Forgot Password link, divider, social buttons row
5. **Social buttons** — circular white buttons with Facebook "f" and Twitter bird icons
6. **Footer** — Component Dock link
