import { footer } from '../data'
import { BrandIcon } from './BrandIcon'

/**
 * Dark footer: centered menu links above a translucent divider, an about
 * blurb with social icons, Location and Contact widgets, and a copyright
 * bar that credits Component Dock (mandatory link).
 */
export function Footer() {
  return (
    <footer id="contact" className="bg-ink">
      <div className="mx-auto max-w-[1320px] px-4 pt-[99px] sm:px-6">
        <nav aria-label="Footer navigation">
          <ul className="mb-[80px] flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-b border-line pb-8">
            {footer.menuLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[15px] text-white transition-colors hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col justify-between gap-10 pb-[80px] md:flex-row md:gap-6">
          <div className="max-w-[320px]">
            <p className="text-[16px] leading-[1.6] text-heading">{footer.blurb}</p>
            <ul className="mt-6 flex items-center gap-4">
              {footer.socials.map((social) => (
                <li key={social.name}>
                  <a
                    href="#contact"
                    aria-label={social.label}
                    className="block text-white transition-colors hover:text-brand"
                  >
                    <BrandIcon
                      name={social.name.toLowerCase() as 'facebook' | 'instagram' | 'twitter'}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-[24px] text-brand">{footer.location.title}</h4>
            <p className="mt-[10px] max-w-[280px] text-[16px] leading-[1.6] text-heading">
              {footer.location.address}
            </p>
          </div>

          <div>
            <h4 className="font-display text-[24px] text-brand">{footer.contact.title}</h4>
            <ul className="mt-[10px] space-y-2 text-[16px] text-heading">
              <li>{footer.contact.phone}</li>
              <li>{footer.contact.email}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-2 px-4 py-[40px] text-[14px] text-white sm:flex-row sm:px-6">
          <p>
            © {new Date().getFullYear()} Patisserie. {footer.copyright}
          </p>
          <p>
            {footer.madeWith.split('Component Dock')[0]}
            <a
              href={footer.componentDockUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand transition-colors hover:text-heading"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
