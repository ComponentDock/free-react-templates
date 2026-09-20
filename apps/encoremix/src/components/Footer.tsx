import { FacebookIcon, TwitterIcon, LinkedinIcon } from './social-icons'

const socialLinks = [
  { name: 'Facebook', icon: FacebookIcon, href: '#' },
  { name: 'Twitter', icon: TwitterIcon, href: '#' },
  { name: 'LinkedIn', icon: LinkedinIcon, href: '#' },
]

export function Footer() {
  return (
    <footer
      className="relative bg-cover bg-center py-16"
      style={{
        backgroundImage:
          'linear-gradient(rgba(5,5,5,0.9), rgba(5,5,5,0.9)), url(https://picsum.photos/seed/encoremix-footer/1920/600)',
      }}
    >
      <div className="mx-auto max-w-4xl px-4 text-center">
        <p className="mb-4 font-accent text-5xl gradient-text">EncoreMix</p>

        <a
          href="mailto:info@encoremix.com"
          className="mb-6 inline-block text-sm text-white/70 transition-colors hover:text-white"
        >
          info@encoremix.com
        </a>

        <div className="mb-8 flex items-center justify-center gap-5">
          {socialLinks.map(({ name, icon: Icon, href }) => (
            <a
              key={name}
              href={href}
              aria-label={name}
              className="text-white/60 transition-colors hover:text-white"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} EncoreMix. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="underline transition-colors hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
