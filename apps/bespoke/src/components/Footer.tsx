import { FacebookIcon, TwitterIcon, InstagramIcon, DribbbleIcon, LinkedinIcon } from './SocialIcons'

const navColumns = [
  { links: ['Home', 'Services', 'Work', 'Process', 'About Us'] },
  { links: ['Press', 'Blog', 'Contact', 'Support', 'Privacy'] },
  { links: ['Privacy', 'FAQ', 'Careers', 'Process', 'About Us'] },
]

const socials = [
  { icon: FacebookIcon, label: 'Facebook' },
  { icon: TwitterIcon, label: 'Twitter' },
  { icon: InstagramIcon, label: 'Instagram' },
  { icon: DribbbleIcon, label: 'Dribbble' },
  { icon: LinkedinIcon, label: 'LinkedIn' },
]

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* About + Social */}
          <div>
            <h3 className="mb-4 font-display text-lg font-bold">About</h3>
            <p className="mb-8 text-sm leading-relaxed text-gray-400">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live.
            </p>

            <h3 className="mb-4 font-display text-lg font-bold">Connect with us</h3>
            <ul className="flex gap-4">
              {socials.map(({ icon: Icon, label }) => (
                <li key={label}>
                  <a
                    href="#"
                    aria-label={label}
                    className="text-gray-400 transition-colors hover:text-brand"
                  >
                    <Icon size={18} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation columns */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 font-display text-lg font-bold">Navigations</h3>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              {navColumns.map((col, ci) => (
                <ul key={ci} className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-gray-400 transition-colors hover:text-brand"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} All rights reserved. More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-semibold text-brand transition-colors hover:text-brand-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
