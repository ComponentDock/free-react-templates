import { Mail, MapPin, Phone } from 'lucide-react'
import { BrandIcon } from './BrandIcon'

const socials = [
  { label: 'Twitter', name: 'twitter' },
  { label: 'Facebook', name: 'facebook' },
  { label: 'Instagram', name: 'instagram' },
] as const

const services = [
  'Beauty Massage',
  'Facial Therapy',
  'Skin Care',
  'Parlor & Beauty',
  'Eye Shadow',
  'Relaxation Room',
  'MakeUp',
  'Aroma Therapy',
] as const

const recentPosts = [
  { title: 'Tips For Perfect Makeup', date: 'Mar. 31, 2021' },
  { title: 'Tips For Perfect Makeup', date: 'Mar. 31, 2021' },
] as const

const contact = [
  { icon: MapPin, lines: ['203 Fake St. Mountain View, San Francisco, California, USA'] },
  { icon: Phone, lines: ['+2 392 3929 210'] },
  { icon: Mail, lines: ['info@yourdomain.com'] },
] as const

export function Footer() {
  return (
    <footer className="bg-ink py-20 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-4">
        <div>
          <a href="#home" className="font-display text-2xl font-medium text-white">
            <span className="text-brand">T</span>erra
          </a>
          <p className="mt-5 text-sm leading-relaxed text-gray-400">
            A small river named Duden flows by their place and supplies it with the necessary
            regelialia. It is a paradisematic country.
          </p>
          <ul className="mt-6 flex gap-5">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href="#home"
                  aria-label={social.label}
                  className="text-gray-400 transition-colors hover:text-brand"
                >
                  <BrandIcon name={social.name} className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg text-white">Services</h2>
          <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2">
            {services.map((service) => (
              <li key={service}>
                <a
                  href="#services"
                  className="text-sm text-gray-400 transition-colors hover:text-brand"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg text-white">Recent Posts</h2>
          <ul className="mt-5 space-y-4">
            {recentPosts.map((post) => (
              <li key={post.title}>
                <p className="text-sm font-medium text-gray-300">{post.title}</p>
                <span className="text-xs text-brand">{post.date}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg text-white">Have a Questions?</h2>
          <ul className="mt-5 space-y-4">
            {contact.map(({ icon: Icon, lines }) => (
              <li key={lines[0]} className="flex gap-3 text-sm text-gray-400">
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span>
                  {lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-6xl border-t border-white/10 px-4 pt-8 sm:px-6">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Terra — Free React Template
        </p>
      </div>
    </footer>
  )
}
