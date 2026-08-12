import type { ComponentType } from 'react'
import { Cloud } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  BRAND,
  COPYRIGHT_HOLDER,
  FOOTER_ABOUT,
  FOOTER_COLUMNS,
  FOOTER_NAV,
  FOOTER_SOCIALS,
} from '../data'
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon, type IconProps } from './icons'

/* Footer recreated from the ColorLib "Cloud83" footer: a two-tone dark
   footer — #1f2430 top with brand + about + social circles + four link
   columns, and a #171b26 bottom bar with the footer nav, the copyright
   line, and the repo-standard credit. Brand social icons are inline SVGs
   (lucide removed brand icons). */

const socialIcons: Record<(typeof FOOTER_SOCIALS)[number], ComponentType<IconProps>> = {
  Twitter: TwitterIcon,
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  LinkedIn: LinkedInIcon,
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <section id="contact-section" className="bg-darktop pb-14 pt-[127px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr]">
            {/* Brand + about + socials */}
            <div>
              <a
                href="#home-section"
                className="flex items-center gap-2 text-2xl font-bold text-white"
              >
                <Cloud className="h-7 w-7 text-brand" aria-hidden="true" />
                {BRAND}
              </a>
              <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/60">
                {FOOTER_ABOUT}
              </p>
              <div className="mt-6 flex gap-3">
                {FOOTER_SOCIALS.map((label) => {
                  const Icon = socialIcons[label]
                  return (
                    <a
                      key={label}
                      href="#home-section"
                      aria-label={label}
                      className={cn(
                        'flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white',
                        'transition-colors hover:bg-brand',
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Link columns */}
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title}>
                <h5 className="text-[18px] font-semibold text-white">{column.title}</h5>
                <ul className="mt-6 space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#home-section"
                        className="text-[14px] text-white/60 transition-colors hover:text-brand"
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
      </section>

      {/* Bottom bar */}
      <div className="bg-darkbar py-[19px]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-[14px] text-white/60">
            Copyright © {year} All rights reserved | This template is made with{' '}
            <span aria-hidden="true">❤</span> by {COPYRIGHT_HOLDER}
          </p>
          <ul className="flex gap-5">
            {FOOTER_NAV.map((label) => (
              <li key={label}>
                <a
                  href="#home-section"
                  className="text-[14px] text-white/60 transition-colors hover:text-brand"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
