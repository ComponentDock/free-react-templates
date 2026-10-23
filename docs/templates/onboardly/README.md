# Onboardly — Design Notes

Recreation of ColorLib Wizard 20 (account setup wizard).

## Source

- ColorLib: https://colorlib.com/wp/template/colorlib-wizard-20/
- Preview: https://colorlib.com/etc/bwiz/colorlib-wizard-20/index.html

## Design Tokens

- Font: Poppins 300–900
- Background gradient: #884d80 → #9795f0 → #2b5876 → #4e4376
- Card: white, border-radius 10px, max-width 373px, shadow
- Step indicators: 44px circles, gradient fill when active, #ebebeb when inactive
- Inputs: border #ebebeb, border-radius 5px, height 40px
- Buttons: gradient background, border-radius 5px, 120×40px

## Steps

1. Account Setup — Email, Password, Confirm Password
2. Social Profiles — Twitter, Facebook, Google Plus
3. Personal Details — Name, Phone, Address

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/onboardly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/onboardly/public/CNAME` = `onboardly.free.componentdock.com`
  and the package `homepage` = `https://onboardly.free.componentdock.com`.
