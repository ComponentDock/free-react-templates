import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './SocialIcons'

const socialLinks = [
  { icon: FacebookIcon, label: 'Facebook', href: '#' },
  { icon: TwitterIcon, label: 'Twitter', href: '#' },
  { icon: InstagramIcon, label: 'Instagram', href: '#' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: '#' },
]

export function Footer() {
  return (
    <footer className="bg-text-primary py-8 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-4">
          {/* Social links */}
          <div className="flex gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand"
              >
                <link.icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} Ford Jock. All rights reserved.
          </p>

          {/* Component Dock attribution */}
          <p className="text-xs text-white/40">
            Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand underline-offset-2 hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
