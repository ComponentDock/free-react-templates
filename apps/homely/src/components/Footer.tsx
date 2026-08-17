import { BRAND, FOOTER_BLURB, FOOTER_LINKS, SOCIALS } from '../data'
import { FacebookIcon, InstagramIcon, PinterestIcon, TwitterIcon } from './BrandIcons'
import { Newsletter } from './Newsletter'

const SOCIAL_ICONS = [FacebookIcon, TwitterIcon, PinterestIcon, InstagramIcon]

/* Four-widget mint footer: brand blurb + social row, Quick Links, Solution,
   newsletter — and a copyright bar linking to Component Dock. */
export function Footer() {
  return (
    <footer id="contact" aria-label="Footer" className="bg-soft pt-[97px] pb-[37px]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <a href="#home" className="font-display text-[26px] font-bold text-brand">
            {BRAND}
          </a>
          <p className="mt-4 text-sm leading-[1.8] text-body">{FOOTER_BLURB}</p>
          <div className="mt-6 flex gap-4">
            {SOCIALS.map((social, index) => {
              const Icon = SOCIAL_ICONS[index]!
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="rounded text-body transition-colors hover:text-brand"
                >
                  <Icon />
                </a>
              )
            })}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h4 className="mb-[30px] text-xl font-semibold text-ink">Quick Links</h4>
          <ul className="flex flex-col gap-3">
            {FOOTER_LINKS.quick.map((label) => (
              <li key={label}>
                <a href="#home" className="text-body transition-colors hover:text-brand">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="mb-[30px] text-xl font-semibold text-ink">Solution</h4>
          <ul className="flex flex-col gap-3">
            {FOOTER_LINKS.solution.map((label) => (
              <li key={label}>
                <a href="#home" className="text-body transition-colors hover:text-brand">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4 lg:col-start-9">
          <h4 className="mb-[30px] text-xl font-semibold text-ink">Newsletter</h4>
          <Newsletter />
          <p className="mt-4 text-sm text-body">
            Need help? Write to{' '}
            <a href="mailto:hello@homely.demo" className="font-semibold text-brand">
              hello@homely.demo
            </a>
          </p>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-6xl border-t border-body/15 px-6 pt-6">
        <p className="text-center text-base leading-8 text-body">
          © 2026 All rights reserved. More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="font-semibold text-brand underline underline-offset-4"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
