import { Mail, MapPin, Phone } from 'lucide-react'
import { SocialLinks } from './SocialLinks'

const informationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Works', href: '#works' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Pricing', href: '#pricing' },
] as const

const recentPosts = [
  { title: 'Photoshoot Technique', date: '30 March 2018' },
  { title: 'Camera Lens Shoot', date: '30 March 2018' },
  { title: 'Imahe the biggest photography studio', date: '30 March 2018' },
] as const

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <a
            href="#home"
            className="font-display text-2xl font-bold tracking-wide text-primary-400"
          >
            Blueprint
          </a>
          <h2 className="mt-5 text-sm font-semibold uppercase tracking-wider text-white">
            About Blueprint
          </h2>
          <p className="mt-4 text-sm leading-relaxed">
            Far from the countries Vokalia and Consonantia, there live the blind texts. Separated
            they live in Bookmarksgrove right at the coast of the Semantics.
          </p>
          <div className="mt-6">
            <SocialLinks />
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Information</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {informationLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-primary-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Recent Blog</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {recentPosts.map((post) => (
              <li key={post.title}>
                <a href="#blog" className="transition-colors hover:text-primary-400">
                  {post.title}
                </a>
                <span className="mt-1 block text-xs text-gray-500">{post.date}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
            Contact Info
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              <span>Your address goes here, your demo address. Bangladesh.</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              <a href="tel:+888****8899" className="transition-colors hover:text-primary-400">
                +8880 44338899
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              <a
                href="mailto:info@blueprint.dev"
                className="transition-colors hover:text-primary-400"
              >
                info@blueprint.dev
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6 text-center text-sm">
        © {new Date().getFullYear()} Blueprint. All rights reserved.
      </div>
    </footer>
  )
}
