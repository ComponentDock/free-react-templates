import { footerColumns } from '../data'
import { BrandIcon } from './BrandIcon'

const socials = ['facebook', 'instagram', 'twitter', 'linkedin']

export function Footer() {
  return (
    <footer className="site-footer py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-3">
            <h2 className="mb-4 text-base font-bold text-black">About Us</h2>
            <p className="mb-4 leading-relaxed text-footer-link">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
            <ul className="flex gap-2">
              {socials.map((name) => (
                <li key={name}>
                  <a
                    href="#"
                    aria-label={`${name} page`}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white transition-opacity hover:opacity-90"
                  >
                    <BrandIcon name={name} className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-8 md:ml-auto">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {footerColumns.map((column) => (
                <div key={column.heading}>
                  <h2 className="mb-4 text-base font-bold text-black">{column.heading}</h2>
                  <ul>
                    {column.links.map((link) => (
                      <li key={link} className="mb-[10px]">
                        <a href="#" className="text-footer-link transition-colors hover:text-black">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-5 border-t border-[#e9ecef] pt-5 text-center">
          <p className="text-sm text-footer-link">
            © 2026 Mentory. All rights reserved. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand transition-colors hover:text-brand-dark"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
