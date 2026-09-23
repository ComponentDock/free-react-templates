# PassGuard (ColorLib Login Form 05) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-passguard`. Recreation name: **PassGuard** (NEW name —
> the ColorLib source keeps its name "Login Form 05").

## Source mapping

- **ColorLib item:** "Login Form 05" (TEMPLATES.md line 2151; section
  "## Login Forms" at line 2149).
- **Source URL:** https://colorlib.com/wp/template/login-form-05/
- **Preview URL — UNREACHABLE (404):** https://preview.colorlib.com/theme/login-form-05/
  Returns HTTP 404. Design tokens extracted from screenshot analysis.

## Reference research (done — do not redo)

### Screenshot (`login-form-05.jpg`, 1200×972 AVIF→PNG)

Browsed visually (image converted to PNG for analysis). Layout:

1. **Split screen** — Left half: full-height kitchen lifestyle photo (white
   subway tile wall, wooden shelf with copper pot, vintage kitchen scale,
   wire basket, small potted plant). Right half: light gray (#f5f5f5)
   background with a centered white login card.
2. **Card** — White background, subtle box shadow, ~420px max width,
   vertically centered in the right half.
3. **Heading** — "LOGIN TO COLORLIB" → will become "LOGIN TO PASSGUARD".
   Uppercase, dark gray (#333), sans-serif, semi-bold, centered.
4. **Username field** — Label "Username" in medium gray (#555), light gray
   input background (#eee), placeholder "your-email@gmail.com", small
   border radius (~4px), full width.
5. **Password field** — Label "Password", same input style, placeholder
   "Your Password".
6. **Remember me** — Orange checked checkbox (#f26522), "Remember me" label
   to the right. Aligned left.
7. **Forgot Password** — Orange (#f26522) link, right-aligned on same row
   as Remember me.
8. **Log In button** — Full-width, orange (#f26522) background, white text,
   pill-shaped (border-radius ~22px), ~48px height.
9. **Divider** — "or" text in gray (#999), centered, between Log In and
   social buttons.
10. **Facebook button** — Full-width, dark navy blue (#3b5998), white text,
    Facebook "f" icon on left, "Login with Facebook". Pill-shaped.
11. **Google button** — Full-width, red (#dd4b39), white text, Google "G"
    icon on left, "Login with Google". Pill-shaped.

**Aesthetic**: Clean, modern, light. Split-screen with lifestyle imagery left,
focused form right. No footer visible in screenshot — minimal card-only
design. Social login integration is a key differentiator.

### Design tokens (screenshot analysis — preview was 404)

| Token        | Value               | Use                                                        |
| ------------ | ------------------- | ---------------------------------------------------------- |
| Page bg      | `#f5f5f5`           | Light gray right half + body                               |
| Card bg      | `#ffffff`           | White login card                                           |
| Brand orange | `#f26522`           | "Log In" button, checkbox, "Forgot Password" link          |
| Facebook blue| `#3b5998`           | "Login with Facebook" button bg                            |
| Google red   | `#dd4b39`           | "Login with Google" button bg                              |
| Title text   | `#333333`           | Heading text                                               |
| Label text   | `#555555`           | Field labels                                               |
| Input bg     | `#eeeeee`           | Input field background                                     |
| Placeholder  | `#999999`           | Placeholder text                                           |
| Button text  | `#ffffff`           | All button labels                                          |
| Divider text | `#999999`           | "or" separator                                             |
| Link hover   | `#d4500a`           | Orange darker on hover                                     |
| Font         | 'Poppins' 400/500/600 | Clean sans-serif via Google Fonts                        |
| Inputs       | ~4px border-radius  | Full width, ~48px height                                   |
| Buttons      | ~22px border-radius | Pill-shaped, full width, ~48px height                      |
| Card shadow  | `0 8px 32px rgba(0,0,0,0.08)` | Subtle elevation                        |

### Icon mapping (lucide)

| Source glyph     | Recreation          |
| ---------------- | ------------------- |
| Facebook "f"     | lucide `Facebook`   |
| Google "G"       | lucide `Chrome`     |

### Picsum placeholder plan

- Left background: `https://picsum.photos/seed/passguard-kitchen/800/1200`
  (kitchen/lifestyle feel, full-height cover).

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/passguard` from the simplest existing app
       (`cp -r apps/<simplest> apps/passguard`), rename package to
       `@free-react-templates/passguard`, add Poppins 400/500/600
       Google Fonts `<link>` in index.html, set `public/CNAME` =
       `passguard.free.componentdock.com` + `"homepage"`. Register the
       workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): App (split layout, heading, card),
       LoginForm (username + password fields, Remember me checkbox,
       Forgot Password link, Log In button, form submission),
       SocialButtons (Facebook + Google, prevent navigation),
       Divider (visible "or" text), Footer (Component Dock link).
3. [ ] Layout shell: Split-screen — left half with picsum background
       image (object-cover, full height), right half with light gray
       (#f5f5f5) bg, centered white card with shadow.
4. [ ] Card: White bg, max-width ~420px, centered vertically, padding
       ~40px, subtle box shadow.
5. [ ] Heading: "LOGIN TO PASSGUARD" uppercase, dark gray, Poppins
       600, centered, margin-bottom ~30px.
6. [ ] Username field: Label "Username" above, input with #eee bg,
       rounded corners, placeholder "your-email@gmail.com".
7. [ ] Password field: Same style, placeholder "Your Password".
8. [ ] Remember me + Forgot Password row: Flex row, checkbox left with
       "Remember me" label, "Forgot Password" link right-aligned.
       Orange accent on both.
9. [ ] Log In button: Full-width, orange bg, white text, pill-shaped
       (border-radius ~22px), ~48px height.
10. [ ] Divider: "or" text centered in gray, vertical spacing above
        and below.
11. [ ] Social buttons: Facebook (navy blue, lucide Facebook icon) and
        Google (red, lucide Chrome icon). Full-width, pill-shaped,
        white text, prevent form submission.
12. [ ] Responsive: Below 768px, hide background image, card fills
        viewport width with horizontal padding.
13. [ ] Footer: Minimal Component Dock credit linking
        https://www.componentdock.com/.
14. [ ] Run `npm run verify:app -- passguard` (typecheck → lint → vitest
        100% → build) and fix until green.
15. [ ] Open PR `feat/template-passguard` → merge immediately
        (`gh pr merge --squash --delete-branch`); PR description must
        include: source URL, preview URL (404), token list (orange
        `#f26522`, Facebook blue `#3b5998`, Google red `#dd4b39`,
        Poppins, pill-shaped buttons, split-screen), and what differs
        (renamed "PassGuard", picsum kitchen bg, lucide social icons).
16. [ ] Bookkeeping after merge: mark TEMPLATES.md line 2151 `[x]` + surge
        URL (`https://passguard.free.componentdock.com`), `npm run
        readme:status`, push.
