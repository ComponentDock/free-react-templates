import {
  copyrightPrefix,
  copyrightSuffix,
  footerMenu,
  siteName,
  socialLabels,
  socials,
} from '../data'
import { BrandIcon } from './BrandIcon'

/** Darkest-gradient footer: centered logo, menu, social icons and copyright. */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer-section bg-[linear-gradient(90deg,#330d38_0%,#190d36_100%)] px-4 pt-[100px] pb-10 text-center">
      <a href="#" className="text-[34px] font-bold tracking-wide text-white uppercase">
        {siteName}
      </a>
      <ul className="footer-menu mx-auto mt-[62px] flex max-w-[1200px] flex-wrap items-center justify-center gap-6">
        {footerMenu.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="text-[14px] font-bold tracking-wide text-white uppercase transition-colors hover:text-magenta-bright"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <ul className="footer-social mt-5 flex items-center justify-center gap-4">
        {socials.map((name) => (
          <li key={name}>
            <a
              href="#"
              aria-label={socialLabels[name]}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-magenta"
            >
              <BrandIcon name={name} className="h-4 w-4" />
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-10 text-[13px] text-white/50">
        {copyrightPrefix} {year} {copyrightSuffix}
      </p>
    </footer>
  )
}
