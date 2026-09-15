# GiveMore — Design Notes

## Source

- ColorLib Bcharity: https://colorlib.com/wp/template/bcharity/
- Preview: https://preview.colorlib.com/theme/bcharity/

## Design Tokens

- Brand green: #00c424 (CTAs, accents)
- Purple tint: #f0e9ff (feature icon backgrounds)
- Blue: #415094 (secondary)
- Dark navy: #14182d (navbar)
- Light bg: #f9f9ff (alternating sections)
- Body: #7f7f7f, Muted: #999999
- Fonts: Playfair Display (headings), Roboto (body)

## Section Structure

1. Navbar (sticky, dark bg, logo + nav + CTA)
2. Hero/Banner (image bg, headline, description, CTA)
3. Features (4 cards: Give Donation, Volunteer, Education, Fundraise)
4. Be Part (text + image split)
5. Counter (4 stats in a row)
6. Featured Causes (3 cards with progress bars)
7. CTA Banner (dark bg, motivational quote, volunteer button)
8. Volunteers (4 team cards with social icons)
9. Blog (featured + 3 small posts)
10. Partners (logo row)
11. Footer (about, newsletter, contact, copyright)

## Notes

- Original uses Bootstrap grid; we use Tailwind CSS grid/flex
- Progress bars on cause cards: goal vs raised amounts
- Counter numbers use static display (no animation needed)
- Social icons use lucide-react (no brand icons from lucide-react — use inline SVGs)
