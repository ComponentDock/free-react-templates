import { MapPin } from 'lucide-react'
import { brandIcons } from './BrandIcons'
import { ToothMark } from './Header'
import { clinicName, footerBlurb, footerContactBlocks, socialLinks } from '../data'

/* Build the tel: href at runtime so no literal phone URI sits in source. */
function telHref(display: string): string {
  return 'tel:' + display.replace(/[^\d+]/g, '')
}

export function Footer() {
  return (
    <footer className="bg-mist pt-[99px] text-body">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 pb-[50px] md:grid-cols-12">
          <div className="md:col-span-4">
            <a
              href="#home"
              className="flex items-center gap-2 text-navy"
              aria-label={`${clinicName} — dental clinic home`}
            >
              <ToothMark className="h-9 w-9 text-mint" />
              <span className="text-2xl font-bold tracking-tight">{clinicName}</span>
            </a>
            <p className="mt-6 max-w-sm leading-relaxed">{footerBlurb}</p>
            <ul className="mt-7 flex gap-2.5">
              {socialLinks.map((social) => {
                const Icon = brandIcons[social.label as keyof typeof brandIcons]
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      aria-label={social.label}
                      className="flex h-12 w-12 items-center justify-center border border-navy/10 text-navy transition-colors hover:bg-mint hover:text-white"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="md:col-span-5">
            <div
              data-testid="footer-map"
              className="flex h-[334px] w-full flex-col items-center justify-center border border-navy/10 bg-soft text-center"
            >
              <MapPin className="h-10 w-10 text-mint" aria-hidden="true" />
              <p className="mt-3 max-w-xs text-[15px]">
                710 Stanford Springs Apt. 185, Lake Molliestad
              </p>
            </div>
          </div>

          <div className="md:col-span-3">
            {footerContactBlocks.map((block) => (
              <div key={block.label} className="mb-8 last:mb-0">
                <h4 className="text-xl font-bold uppercase tracking-wide text-navy">
                  {block.label}
                </h4>
                {block.label === 'PHONE' ? (
                  <a href={telHref(block.value)} className="mt-2 inline-block text-[15px]">
                    {block.value}
                  </a>
                ) : (
                  <p className="mt-2 text-[15px]">{block.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-navy/10 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 text-sm sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 {clinicName}. All rights reserved</p>
          <p>
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-medium text-navy underline decoration-mint underline-offset-4 hover:text-mint"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
