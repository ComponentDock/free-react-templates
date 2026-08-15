import { Mail, MapPin, Phone } from 'lucide-react'
import { contactInfo, quickLinks, recentPosts } from '../data'

export function Footer() {
  return (
    <footer id="contact" className="bg-footer text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-4">
        <div>
          <p className="mb-4 text-2xl font-bold">
            Prime<span className="text-brand">.</span>
          </p>
          <p className="text-sm leading-relaxed text-white/70">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-base font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/70">
            {quickLinks.map((link) => (
              <li key={link}>
                <a href="#home" className="transition-colors hover:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-base font-semibold">Recent Blog</h3>
          <ul className="space-y-4 text-sm">
            {recentPosts.map((post) => (
              <li key={post.title}>
                <a href="#blog" className="block text-white/70 transition-colors hover:text-white">
                  {post.title}
                </a>
                <span className="text-xs text-white/50">{post.meta}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-base font-semibold">Contact Info</h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              {contactInfo.address}
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <a
                href={'tel:' + contactInfo.phone.replace(/[^\d+]/g, '')}
                className="hover:text-white"
              >
                {contactInfo.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-white">
                {contactInfo.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-copyright">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-sm text-white/60 sm:flex-row">
          <p>© 2026 Prime. All rights reserved.</p>
          <p>
            Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-white transition-colors hover:text-brand"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
