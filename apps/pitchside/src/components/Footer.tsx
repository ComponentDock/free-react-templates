import { CalendarDays, FileText, Heart } from 'lucide-react'
import { footer, footerSocials } from '../data'
import { BrandIcon } from './BrandIcon'

/** Footer (reference `.footer-section`): dark photo band with the wordmark
 *  and description, circular social icons, Top Club + Recent News widgets,
 *  and the copyright bar linking Component Dock. */
export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden pt-20">
      <img src={footer.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/85" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a
              href="#home"
              className="flex items-center gap-2 text-2xl font-bold uppercase tracking-widest text-white"
            >
              <span
                className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white text-[10px] font-black"
                aria-hidden="true"
              >
                P
              </span>
              Pitchside
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/60">{footer.description}</p>
            <ul className="mt-6 flex items-center gap-3">
              {footerSocials.map(({ label, name }) => (
                <li key={label}>
                  <a
                    href="#contact"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand"
                  >
                    <BrandIcon name={name} className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-medium uppercase tracking-wide text-white">Top Club</h2>
            <ul className="mt-5 space-y-3">
              {footer.topClub.map((link) => (
                <li key={link}>
                  <a
                    href="#home"
                    className="text-sm text-white/60 transition-colors hover:text-brand"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-lg font-medium uppercase tracking-wide text-white">Recent News</h2>
            <ul className="mt-5 space-y-4">
              {footer.recentNews.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  <div>
                    <a
                      href="#latest"
                      className="text-sm text-white/80 transition-colors hover:text-brand"
                    >
                      {item.title}
                    </a>
                    <p className="mt-1 flex items-center gap-1.5 text-xs text-white/50">
                      <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                      {item.date}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-[#2d2e30] py-6 text-sm text-white/50 md:flex-row">
          <p className="flex items-center gap-1">
            Copyright &copy; 2026 All rights reserved | More templates at{' '}
            <Heart className="h-4 w-4 text-brand" aria-hidden="true" />{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-white underline transition-colors hover:text-brand"
            >
              Component Dock
            </a>
          </p>
          <p className="flex items-center gap-4">
            <a href="#contact" className="transition-colors hover:text-brand">
              Privacy Policy
            </a>
            <a href="#contact" className="transition-colors hover:text-brand">
              Terms of Use
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
