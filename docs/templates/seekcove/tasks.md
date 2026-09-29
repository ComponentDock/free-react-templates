# SeekCove — Implementation Tasks & Design Notes

Source: ColorLib "Search Form Bar 12" (slug: `search-form-bar-12`)
New name: `seekcove`

## Structure (implementation order)

1. **App shell** (`src/App.tsx`)
   - Full viewport layout: min-h-screen, bg-white
   - Compose the Navbar component
   - Include footer component with Component Dock link

2. **Navbar component** (`src/components/Navbar.tsx`)
   - Container: max-w-7xl mx-auto px-4, flex items-center justify-between
   - Left: Brand heading — h3, text-[#007bff], font-medium, text-xl, link to "#"
   - Right: Inline flex list of nav links + search form
   - Nav links: Home, About, Contact — uppercase, text-[#007bff], hover:text-[#0056b3], transition 0.3s, py-6 px-0 ml-5
   - Search wrapper: ml-12 (50px from nav links), relative
   - Search form: relative container for input + icon
   - Search input: w-[120px] focus:w-[200px], rounded-full (30px), border border-[#ced4da], pl-9 (35px), pr-3, py-1.5, placeholder text-[#ccc], focus:border-black focus:outline-none focus:shadow-none, transition 0.3s
   - SVG magnifying glass icon: absolute left-3.5 top-1/2 -translate-y-1/2, text-[#777], w-3 h-3
   - Navbar border: border-b border-[#dae0e5], shadow-[0_1px_5px_0_rgba(0,0,0,0.1)]

3. **Footer component** (`src/components/Footer.tsx`)
   - Simple centered footer with Component Dock link
   - Link to https://www.componentdock.com/

4. **Styling** (`src/index.css`)
   - Tailwind @theme for brand color (#007bff blue)
   - Font: Roboto via Google Fonts link in `index.html`

5. **Tests** (`src/components/*.test.tsx`)
   - Navbar: renders brand heading with correct color/weight
   - Navbar: renders three nav links (Home, About, Contact)
   - Navbar: renders search input with pill shape and placeholder
   - Navbar: search input expands on focus (width change)
   - Navbar: search input focus turns border black
   - Navbar: nav links have correct hover transition
   - Navbar: responsive — brand centers on mobile
   - Footer: renders Component Dock link
   - App: composes Navbar and Footer
   - Accessibility: keyboard navigation, aria-labels on search input

## Fidelity notes

- **Layout**: Minimal navbar-only component. White background, no content below navbar. The original template is a standalone snippet, not a full page.
- **Brand heading**: Blue (#007bff), font-weight 500, font-size 1.5rem (24px). Links to index.
- **Nav links**: Uppercase text, inline-flex list. Each link has 25px vertical padding, 20px left margin. Blue color matching brand.
- **Search input**: Pill-shaped (border-radius 30px). Default width 120px, expands to 200px on focus with CSS transition (0.3s). Left padding 35px for icon. Light gray placeholder (#ccc).
- **Magnifying glass icon**: SVG inline, 12px font-size (1em height), color #777. Absolutely positioned at left:15px, vertically centered.
- **Focus state**: Border turns black (#000), outline none, box-shadow none. The base .cl-form-control has a blue focus ring but the search context overrides it.
- **Navbar shadow**: Subtle `box-shadow: 0 1px 5px 0 rgba(0,0,0,0.1)` with bottom border `1px solid #dae0e5`.
- **Responsive**: Below 768px, brand centers (text-center), nav links right-align. Container max-width 1140px at 1200px+.
- **Font**: Roboto (not Montserrat or Poppins). Weight 400 body, 500 headings.

## Potential implementation pitfalls

- The search input width transition (120px → 200px) requires Tailwind `w-[120px] focus-within:w-[200px]` or a controlled state — CSS-only transition needs `transition: width 0.3s` which Tailwind handles via `transition-all` or `transition-[width]`.
- The magnifying glass icon is an **inline SVG** (not a lucide-react icon) in the original — use a similar SVG or substitute lucide-react `Search` icon for consistency with the monorepo.
- The search input has `padding-left: 35px` to make room for the absolutely-positioned icon — use `pl-9` (36px) in Tailwind.
- The navbar uses a custom CSS reset (`all: revert`) in the original — in the React recreation, Tailwind's preflight handles this.
- The brand heading inherits link color (`#007bff`) from the `<a>` tag — ensure the `<a>` inside the heading has the blue color.
- No ColorLib references should appear in any app file — provenance lives only in the spec and TEMPLATES.md.
