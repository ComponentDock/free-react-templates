import { BookOpen } from 'lucide-react'

const SOLUTION_LINKS = [
  'Design & creatives',
  'Telecommunication',
  'Restaurant',
  'Programing',
  'Architecture',
]
const SUPPORT_LINKS = ['Support Center', 'FAQ', 'Terms of Service', 'Privacy Policy']
const COMPANY_LINKS = ['About Us', 'Careers', 'Press', 'Contact']

function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      <a href="#facebook" aria-label="Facebook" className="transition-colors hover:text-white">
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
          <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.7V11H8v3h2.7v7h2.8Z" />
        </svg>
      </a>
      <a href="#twitter" aria-label="Twitter" className="transition-colors hover:text-white">
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
          <path d="M18.9 3h3.1l-6.8 7.8L23 21h-6.3l-4.9-6.4L6.2 21H3.1l7.3-8.3L2.5 3h6.4l4.4 5.9L18.9 3Zm-1.1 16.1h1.7L7.9 4.8H6.1l11.7 14.3Z" />
        </svg>
      </a>
      <a href="#linkedin" aria-label="LinkedIn" className="transition-colors hover:text-white">
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.24 8.31h4.52V23H.24V8.31ZM8.34 8.31h4.33v2h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.01 5.42 6.92V23h-4.51v-7.12c0-1.7-.03-3.88-2.37-3.88-2.37 0-2.73 1.85-2.73 3.76V23H8.34V8.31Z" />
        </svg>
      </a>
      <a href="#instagram" aria-label="Instagram" className="transition-colors hover:text-white">
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
          <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2a3.8 3.8 0 0 1-.9 1.4c-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4a3.8 3.8 0 0 1-1.4-.9 3.8 3.8 0 0 1-.9-1.4c-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.8.1-1.1.1-1.5.2-1.8.3-.5.2-.8.4-1.1.7-.3.3-.5.6-.7 1.1-.1.3-.3.7-.3 1.8-.1 1.3-.1 1.7-.1 4.8s0 3.5.1 4.8c.1 1.1.2 1.5.3 1.8.2.5.4.8.7 1.1.3.3.6.5 1.1.7.3.1.7.3 1.8.3 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1.1-.1 1.5-.2 1.8-.3.5-.2.8-.4 1.1-.7.3-.3.5-.6.7-1.1.1-.3.3-.7.3-1.8.1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c-.1-1.1-.2-1.5-.3-1.8a2.9 2.9 0 0 0-.7-1.1 2.9 2.9 0 0 0-1.1-.7c-.3-.1-.7-.3-1.8-.3-1.3-.1-1.7-.1-4.8-.1Zm0 3.1a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 8.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Zm6.4-8.4a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z" />
        </svg>
      </a>
    </div>
  )
}

/* Footer recreated from the source's footer-wrappper: indigo background
   with the wordmark + blurb + social icons, three link columns, and a
   bottom copyright bar with a Component Dock credit. */

export function Footer() {
  return (
    <footer className="bg-indigo text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#home" aria-label="Edify home" className="flex items-center gap-2 text-white">
            <BookOpen className="h-7 w-7" aria-hidden="true" />
            <span className="font-display text-2xl font-bold tracking-tight">Edify</span>
          </a>
          <p className="mt-4 text-sm leading-relaxed">
            The automated process starts as soon as your clothes go into the machine.
          </p>
          <div className="mt-6">
            <SocialLinks />
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-display text-lg font-semibold text-white">Our solutions</h3>
          <ul className="space-y-3 text-sm">
            {SOLUTION_LINKS.map((link) => (
              <li key={link}>
                <a href="#solutions" className="transition-colors hover:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-display text-lg font-semibold text-white">Support</h3>
          <ul className="space-y-3 text-sm">
            {SUPPORT_LINKS.map((link) => (
              <li key={link}>
                <a href="#support" className="transition-colors hover:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-display text-lg font-semibold text-white">Company</h3>
          <ul className="space-y-3 text-sm">
            {COMPANY_LINKS.map((link) => (
              <li key={link}>
                <a href="#company" className="transition-colors hover:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-6 text-xs sm:px-6">
          <p>
            © {new Date().getFullYear()} Edify. Made with <span aria-hidden="true">♥</span> by the
            Edify team.
          </p>
          <p>
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-semibold text-white underline-offset-2 transition-colors hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
