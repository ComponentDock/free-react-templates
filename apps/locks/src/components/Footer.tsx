import { Mail, MapPin, Phone } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'GitHub', name: 'github' },
  { label: 'X', name: 'x' },
  { label: 'LinkedIn', name: 'linkedin' },
]

const services = ['Haircut', 'Hairstyle', 'Trimming', 'Shaving', 'Skin Care'] as const

const recentPosts = [
  { title: 'Even the all-powerful Pointing has no control about', date: 'Sept 15, 2018' },
  { title: 'Even the all-powerful Pointing has no control about', date: 'Sept 15, 2018' },
] as const

export function Footer() {
  return (
    <footer id="contact" className="bg-ink text-white transition-colors dark:bg-ink-dark">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="font-display text-3xl leading-none hover:text-brand">
              Locks<span className="text-brand">.</span>
            </a>
            <h3 className="mt-6 font-display text-2xl text-brand">About Us</h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Walk in for a cut, a shave, or a full
              restyle.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#home"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 text-gray-400 transition-colors hover:border-brand hover:bg-brand hover:text-white"
                >
                  <BrandIcon name={social.name} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-2xl text-brand">Recent Blog</h3>
            <ul className="mt-5 space-y-4 text-sm text-gray-400">
              {recentPosts.map((post, index) => (
                <li key={`${post.date}-${index}`}>
                  <a href="#blog" className="leading-snug transition-colors hover:text-white">
                    {post.title}
                  </a>
                  <p className="mt-1 text-xs text-gray-500">{post.date} · Admin · 19</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-2xl text-brand">Services</h3>
            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              {services.map((service) => (
                <li key={service}>
                  <a href="#services" className="transition-colors hover:text-white">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-2xl text-brand">Have a Questions?</h3>
            <ul className="mt-5 space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                +2 392 3929 210
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                info@yourdomain.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Locks Hair Salon. All rights reserved.
      </div>
    </footer>
  )
}
