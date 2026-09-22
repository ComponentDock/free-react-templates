import {
  copyright,
  footerAboutBlurb,
  footerCredit,
  footerQuickLinks,
  footerQuickLinksTitle,
  footerServices,
  footerServicesTitle,
  siteName,
} from '../data'

export function Footer() {
  return (
    <footer id="contact" className="bg-footer-bg">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* About */}
          <div>
            <a href="#" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white text-lg font-bold">
                K
              </span>
              <span className="text-xl font-bold text-white">{siteName}</span>
            </a>
            <p className="mt-5 text-sm leading-6 text-footer-text">{footerAboutBlurb}</p>
          </div>

          {/* Quick Links */}
          <nav aria-label={footerQuickLinksTitle}>
            <h4 className="mb-5 text-lg font-semibold text-white">{footerQuickLinksTitle}</h4>
            <ul className="space-y-2">
              {footerQuickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-footer-text transition-colors hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label={footerServicesTitle}>
            <h4 className="mb-5 text-lg font-semibold text-white">{footerServicesTitle}</h4>
            <ul className="space-y-2">
              {footerServices.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-footer-text transition-colors hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6 text-center">
        <p className="text-sm text-footer-text">
          {copyright} |{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-brand transition-colors hover:text-brand-hover"
          >
            {footerCredit}
          </a>
        </p>
      </div>
    </footer>
  )
}
