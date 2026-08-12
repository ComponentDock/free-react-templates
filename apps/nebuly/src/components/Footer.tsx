import type { ComponentType } from 'react'
import { Cloud } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BRAND, FOOTER } from '../data'
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon, type IconProps } from './icons'

/* Footer — purple-dark (#421b9b) multi-column footer: brand + blurb +
   green social icons, three link/text columns (Useful Links, Navigational,
   Office), and a copyright bar with the repo-standard Component Dock link.
   Brand social icons are inline SVGs (lucide removed brand icons). */

const socialIcons: Record<(typeof FOOTER.socials)[number], ComponentType<IconProps>> = {
  Twitter: TwitterIcon,
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  LinkedIn: LinkedInIcon,
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact-section" className="bg-footer">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1.4fr]">
          {/* Brand + about + socials */}
          <div>
            <a
              href="#home-section"
              className="flex items-center gap-2 text-2xl font-bold text-white"
            >
              <Cloud className="h-7 w-7 text-accent" aria-hidden="true" />
              {BRAND}
            </a>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/60">
              {FOOTER.about}
            </p>
            <div className="mt-6 flex gap-3">
              {FOOTER.socials.map((label) => {
                const Icon = socialIcons[label]
                return (
                  <a
                    key={label}
                    href="#home-section"
                    aria-label={label}
                    className={cn(
                      'flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white',
                      'transition-colors hover:bg-accent',
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER.columns.map((column) => (
            <div key={column.title}>
              <h5 className="text-[18px] font-semibold text-white">{column.title}</h5>
              <ul className="mt-6 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#home-section"
                      className="text-[14px] text-white/60 transition-colors hover:text-accent"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-[19px]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-[14px] text-white/60">
            Copyright © {year} All rights reserved | {FOOTER.credit}{' '}
            <span aria-hidden="true">❤</span> {BRAND}
          </p>
          <a
            href={FOOTER.componentDockHref}
            className="text-[14px] text-white/60 transition-colors hover:text-accent"
          >
            {FOOTER.componentDock}
          </a>
        </div>
      </div>
    </footer>
  )
}
