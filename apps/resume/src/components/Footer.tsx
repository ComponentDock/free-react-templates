import { footer } from '../data'
import { BrandIcon, type SocialName } from './BrandIcon'

/** Dark navy footer: centered top block (logo, email, address) and a bottom
 *  row with the copyright line linking Component Dock and "Stay Connected"
 *  circular social icons. */
export function Footer() {
  return (
    <footer className="bg-night">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-8">
        <div className="flex flex-col items-center gap-2">
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded bg-brand"
          >
            <span className="h-3 w-3 rounded-[2px] bg-white" />
          </span>
          <span className="text-2xl font-bold uppercase tracking-widest text-white">Resume</span>
        </div>
        <a
          href={`mailto:${footer.email}`}
          className="mt-8 inline-block font-serif text-3xl font-bold text-white transition-colors hover:text-brand lg:text-[50px]"
        >
          {footer.email}
        </a>
        <p className="mt-4 text-sm leading-relaxed text-[#848493]">
          {footer.address1}
          <br />
          {footer.address2}
        </p>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-8 lg:flex-row lg:px-8">
          <p className="text-sm text-[#393a50]">
            Copyright © {new Date().getFullYear()} All rights reserved | More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-medium text-[#848493] transition-colors hover:text-white"
            >
              Component Dock
            </a>
          </p>
          <div className="flex items-center gap-5">
            <span className="text-sm text-[#393a50]">Stay Connected</span>
            <ul className="flex gap-3">
              {footer.socials.map((social) => (
                <li key={social.name}>
                  <a
                    href="#home"
                    aria-label={social.label}
                    onClick={(event) => event.preventDefault()}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#848493] transition-colors hover:bg-brand hover:text-white"
                  >
                    <BrandIcon name={social.name as SocialName} className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
