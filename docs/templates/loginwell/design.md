# Loginwell — Design Notes

## Source

- ColorLib: Login Form V10 (https://colorlib.com/wp/template/login-form-v10/)
- Preview: unreachable (404) — design based on screenshot only
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v10.jpg

## Visual Design (from screenshot)

### Layout

- Full-page centered form, no card wrapper
- White (#ffffff) page background
- Form width: ~380px max, horizontally and vertically centered

### Typography

- Font: Open Sans (Google Fonts) — 400, 600, 700 weights
- "LOGIN" heading: dark navy #3b3b6d, uppercase, bold, ~28px

### Form Elements

- Username input: gray #d9d9d9 background, rectangular with subtle border-radius (~4px), ~48px height, placeholder "Username" in #888888
- Password input: same styling as username, placeholder "Password"
- Both inputs: no visible border, gray fill only

### Interactive Elements

- Remember me row: checkbox (blue #5b6abf when checked) on left, "Remember me" label in #666
- "Forgot?" link: blue/purple #5b6abf, right-aligned on same row as checkbox
- LOGIN button: full-width, purple/periwinkle #7c7cf7, white uppercase text, ~6px border-radius, ~50px height

### Color Palette

| Element              | Color   |
| -------------------- | ------- |
| Background           | #ffffff |
| Heading              | #3b3b6d |
| Input fill           | #d9d9d9 |
| Placeholder text     | #888888 |
| Body text            | #666666 |
| Checkbox/link accent | #5b6abf |
| Button background    | #7c7cf7 |
| Button text          | #ffffff |

## Task Outline

1. Create apps/loginwell/ workspace (copy loginspark pattern)
2. Implement LoginForm component (username, password, checkbox, forgot link, submit button)
3. Implement Footer component (Component Dock link)
4. Implement App (centered layout, heading, LoginForm, Footer)
5. Write tests (TDD): LoginForm, Footer, App
6. Run verify-app.sh, fix any issues
7. PR + merge
