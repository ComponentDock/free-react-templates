import { FacebookIcon, TwitterIcon, InstagramIcon } from './SocialIcons'

const socialLinks = [
  { Icon: FacebookIcon, href: '#', label: 'Facebook' },
  { Icon: TwitterIcon, href: '#', label: 'Twitter' },
  { Icon: InstagramIcon, href: '#', label: 'Instagram' },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Social links on the left */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 md:left-8">
        <ul className="flex flex-col gap-4">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                aria-label={link.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white/70 transition-all hover:border-brand hover:bg-brand hover:text-white"
              >
                <link.Icon size={16} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Center text */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold text-white md:text-6xl lg:text-7xl">
          Hello This is Vizion
        </h1>
        <span className="mt-4 inline-block text-lg tracking-widest text-white/70 uppercase">
          Creative Designer
        </span>
      </div>
    </section>
  )
}
