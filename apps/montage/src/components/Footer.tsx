import { footerColumns, footerCopyright, footerLabel, socialLabel, socialLinks } from '../data'
import { SocialIcon } from './SocialIcon'

/* Dark footer (reference `footer.footer-area`): widget columns (Useful
   Links / About Us / Video Categories), social links and a copyright bar. */
export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer aria-label={footerLabel} className="bg-footer">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h2 className="mb-5 font-display text-lg font-bold text-white">{column.title}</h2>
              {column.links && (
                <ul className="flex flex-col gap-2">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-body transition-colors hover:text-brand">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              {column.text && <p className="text-sm leading-relaxed text-body">{column.text}</p>}
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <ul aria-label={socialLabel} className="flex gap-4">
            {socialLinks.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center border border-white/20 text-white transition-colors hover:border-brand hover:bg-brand"
                >
                  <SocialIcon name={social.name} />
                </a>
              </li>
            ))}
          </ul>
          <p className="text-xs text-body">
            Copyright © {year} {footerCopyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
