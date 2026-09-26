import { BrandIcon } from './BrandIcon'

const socialLinks = [
  { name: 'twitter' as const, label: 'Twitter', href: '#' },
  { name: 'facebook' as const, label: 'Facebook', href: '#' },
  { name: 'instagram' as const, label: 'Instagram', href: '#' },
  { name: 'globe' as const, label: 'Website', href: '#' },
]

const footerNav = ['Home', 'Work', 'Service', 'Blog', 'Contact']

export function Footer() {
  return (
    <footer id="contact">
      {/* CTA Section */}
      <section className="bg-ink py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-md">
              <span className="mb-4 block font-display text-2xl font-bold text-white">
                Pixelate
              </span>
              <p className="text-sm leading-relaxed text-gray-400">
                Crafting digital experiences that make a difference. Let&apos;s build something
                amazing together.
              </p>
              <div className="mt-6 flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 text-gray-400 transition-colors hover:border-brand hover:text-brand"
                  >
                    <BrandIcon name={link.name} className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Let&apos;s Talk
              </a>
              <a
                href="#"
                className="rounded-full border-2 border-gray-500 px-8 py-3 text-sm font-semibold text-white transition-colors hover:border-white"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Bar */}
      <section className="border-t border-gray-700 bg-ink py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row lg:px-8">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand transition-colors hover:text-brand-dark"
            >
              Component Dock
            </a>
          </p>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-6">
              {footerNav.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-xs text-gray-500 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </footer>
  )
}
