# Loginspark — Design Notes

Recreation of ColorLib "Login Form V1" (https://colorlib.com/wp/template/login-form-v1/).

## Reference

- Preview: https://colorlib.com/etc/lf/Login_v1/index.html (original CDN)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v1.jpg

## Design Tokens

- Background gradient: #c850c0 → #4158d0 (-135deg)
- Card: white, border-radius 10px, max-width 960px
- Font: Poppins (Regular, Medium, Bold) + Montserrat Bold
- Input: #e6e6e6 bg, 50px height, 25px border-radius (pill)
- Button: #57b846 green, 50px height, 25px border-radius, uppercase
- Button hover: #333333
- Links: #666666, Poppins Regular 13px

## What Differs

- Using Google Fonts link instead of local font files
- Placeholder image via picsum.photos instead of original img-01.png
- No tilt.js animation (would require extra dependency)
- Footer replaced with Component Dock branding
