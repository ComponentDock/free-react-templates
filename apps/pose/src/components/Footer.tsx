import { MapPin, Phone, Mail } from 'lucide-react'
import { BrandIcon } from './BrandIcon'

const socials = ['facebook', 'twitter', 'instagram'] as const

const recentPosts = ["Asia's Next Top Model", 'Backstage Moments', 'Runway Trends 2019'] as const

const siteLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Models', href: '#models' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export function Footer() {
  return (
    <footer className="bg-ink py-16 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-white">Pose</h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social}
                  href="#home"
                  aria-label={`Pose on ${social}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-300 transition-colors hover:bg-brand hover:text-white"
                >
                  <BrandIcon name={social} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Recent blog posts">
            <h3 className="font-display text-base font-bold uppercase tracking-wide text-white">
              Recent Blog
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {recentPosts.map((post) => (
                <li key={post}>
                  <a href="#blog" className="text-gray-400 transition-colors hover:text-brand">
                    {post}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Site links">
            <h3 className="font-display text-base font-bold uppercase tracking-wide text-white">
              Site Links
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {siteLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 transition-colors hover:text-brand">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-base font-bold uppercase tracking-wide text-white">
              Have a Questions?
            </h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                198 West 21th Street, Suite 721, New York NY 10016
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />+ 1235 2355 98
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                info@yoursite.com
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
          Pose — a free model agency template, recreated from ColorLib's Stylistic design.
        </div>
      </div>
    </footer>
  )
}
