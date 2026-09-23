import { Mail, ArrowRight } from 'lucide-react'

const socialLinks = [
  { label: 'Facebook', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'GitHub', href: '#' },
]

export function Footer() {
  return (
    <footer className="bg-navy pt-20 pb-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 md:grid-cols-[2fr_2fr_1fr]">
          {/* About */}
          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">About Us</h4>
            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              Nimbus is a powerful SaaS platform designed to streamline your workflow and boost team
              productivity. Built with modern tools for modern teams.
            </p>
            <p className="text-sm text-gray-500">
              Made with ❤ by{' '}
              <a
                href="https://www.componentdock.com/"
                className="text-primary-400 underline transition-colors hover:text-primary-300"
              >
                Component Dock
              </a>
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">Newsletter</h4>
            <p className="mb-4 text-sm text-gray-400">Stay updated with our latest</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter Email"
                className="flex-1 px-4 py-2 text-sm text-gray-900 outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="bg-primary-400 px-4 text-white transition-colors hover:bg-primary-500"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">Follow Us</h4>
            <p className="mb-4 text-sm text-gray-400">Let us be social</p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="text-gray-400 transition-colors hover:text-primary-400"
                >
                  <Mail className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
