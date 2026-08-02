import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './social-icons'

const socials = [
  { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
  { label: 'Twitter', href: 'https://twitter.com', Icon: TwitterIcon },
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedinIcon },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <a href="#home" className="text-xl font-bold uppercase tracking-widest text-blush-300">
            Aurora
          </a>
          <p className="max-w-sm text-sm text-gray-400">
            Style &amp; fashion, recreated in React. Fresh looks, fast pages.
          </p>
          <ul className="flex items-center gap-4">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-blush-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
