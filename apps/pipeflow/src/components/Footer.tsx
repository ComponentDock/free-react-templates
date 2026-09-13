import { useState } from 'react'

const socialLinks = [
  {
    name: 'Facebook',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    name: 'Twitter',
    path: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z',
  },
  {
    name: 'Dribbble',
    path: 'M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.81zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-2.2 1.94-5.065 3.13-8.295 3.13-.37 0-.735-.02-1.095-.055zM19.78 5.1c-.22.3-1.89 2.478-5.688 4.026.22.45.43.9.62 1.36.066.153.13.306.195.46 1.68-.18 3.36-.135 4.95.135-.06-.36-.12-.72-.18-1.08z',
  },
  {
    name: 'Behance',
    path: 'M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.62.16-1.26.25-1.92.25H0V4.51h6.938v-.007zM6.545 10.16c.6 0 1.096-.166 1.486-.497.39-.33.58-.79.58-1.39 0-.35-.06-.64-.18-.86a1.44 1.44 0 00-.5-.52 1.94 1.94 0 00-.74-.27 4.25 4.25 0 00-.93-.1H3.25v3.64h3.296zm.18 5.55c.36 0 .7-.04 1.02-.13.32-.08.6-.22.84-.39.24-.17.43-.4.58-.67.15-.27.22-.6.22-1.01 0-.79-.23-1.37-.69-1.74-.46-.37-1.06-.55-1.81-.55H3.25v4.49h3.475zm8.876-8.27h5.18v1.27h-5.18V7.44zm2.62 10.86c.45 0 .86-.05 1.23-.16.37-.11.69-.28.96-.5.27-.22.49-.51.65-.86.16-.35.24-.79.24-1.33V11.16h2.34v4.35c0 1.03-.19 1.87-.58 2.52-.39.65-.93 1.13-1.63 1.46-.7.32-1.49.48-2.38.48-1.06 0-1.96-.2-2.71-.6-.75-.4-1.34-.97-1.77-1.7-.43-.74-.64-1.58-.64-2.54v-3.9h2.34v3.73c0 .6.13 1.07.39 1.42.26.35.62.53 1.1.53z',
  },
]

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('')

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setNewsletterEmail('')
  }

  return (
    <footer className="bg-navy-900 pt-16 pb-8 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* About Us */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-white">About Us</h4>
            <p className="mb-6 text-sm leading-relaxed">
              Pipeflow is a professional plumbing services company dedicated to providing
              top-quality residential and commercial plumbing solutions. With years of experience,
              we deliver reliable, efficient, and affordable services.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  aria-label={social.name}
                  className="transition-colors hover:text-white"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'Features', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-white">Newsletter</h4>
            <p className="mb-4 text-sm">
              Subscribe to our newsletter to get the latest updates and offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 rounded-l-lg bg-white/10 px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-400"
              />
              <button
                type="submit"
                className="rounded-r-lg bg-brand-400 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-gray-500">
          <p>
            Copyright &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
            <span className="text-brand-400">&#9829;</span> by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-400 hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
