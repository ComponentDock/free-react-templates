import { FacebookIcon, TwitterIcon, InstagramIcon } from './social-icons'

const socials = [
  { label: 'Facebook', href: '#', Icon: FacebookIcon },
  { label: 'Instagram', href: '#', Icon: InstagramIcon },
  { label: 'Twitter', href: '#', Icon: TwitterIcon },
]

export function Footer() {
  return (
    <footer>
      {/* Top footer */}
      <div className="bg-footer-top py-10 text-center">
        <div className="mx-auto max-w-6xl px-4">
          <a href="#home" className="mb-3 inline-block text-2xl font-bold text-white">
            Learnwise
          </a>
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} All rights reserved. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white/50"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="flex flex-wrap items-center justify-between bg-footer-bottom px-4 py-2">
        <div className="flex gap-4">
          <a href="tel:+443003030266" className="text-xs text-white/20 hover:text-white">
            <span className="font-semibold">Phone:</span> +44 300 303 0266
          </a>
          <a href="mailto:info@learnwise.com" className="text-xs text-white/20 hover:text-white">
            <span className="font-semibold">Email:</span> info@learnwise.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-white/20">Follow us</span>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-white/20 hover:text-white"
            >
              <s.Icon className="h-3 w-3" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
