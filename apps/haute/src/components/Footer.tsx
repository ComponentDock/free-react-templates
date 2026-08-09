import { Mail, MapPin, Phone } from 'lucide-react'
import { BrandIcon } from './BrandIcon'

const socials = [
  { label: 'Pinterest', name: 'pinterest' },
  { label: 'Facebook', name: 'facebook' },
  { label: 'Twitter', name: 'twitter' },
  { label: 'Dribbble', name: 'dribbble' },
  { label: 'Behance', name: 'behance' },
] as const

const recentPosts = [
  { title: 'Paris Fashion Week', date: '20 January 2019' },
  { title: 'About Our Fashion App', date: '20 January 2019' },
  { title: 'Simple Blog Post', date: '20 January 2019' },
] as const

const usefulLinks = [
  'Testimonials',
  'About Us',
  'Jobs',
  'Reviews',
  'Marketing',
  'Subscribe',
] as const

const contact = [
  { icon: MapPin, lines: ['1180 Fashion Avenue', 'New York, NY 10018'] },
  { icon: Phone, lines: ['+34 5667 77833'] },
  { icon: Mail, lines: ['hello@haute.templates'] },
] as const

export function Footer() {
  return (
    <footer className="bg-white pt-20 transition-colors dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-4">
        <div>
          <p className="font-display text-3xl font-medium uppercase text-ink dark:text-white">
            <span className="text-brand">H</span>aute
          </p>
          <p className="mt-2 text-[9px] uppercase tracking-[0.29em] text-mist">Fashion Forward</p>
          <p className="mt-6 text-sm leading-loose text-mist">
            Velit pulvinar, pellentesque neque vel, laoreet orci. Suspendisse potenti. Donec congue
            vel justo eget malesuada.
          </p>
          <ul className="mt-8 flex gap-5">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href="#home"
                  aria-label={social.label}
                  className="text-ink transition-colors hover:text-brand dark:text-white"
                >
                  <BrandIcon name={social.name} className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-ink dark:text-white">Recent Posts</h2>
          <ul className="mt-6 space-y-5">
            {recentPosts.map((post) => (
              <li key={post.title}>
                <p className="text-base font-medium text-ink dark:text-white">{post.title}</p>
                <span className="text-xs text-brand">{post.date}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-ink dark:text-white">Useful Links</h2>
          <ul className="mt-6 space-y-2">
            {usefulLinks.map((label) => (
              <li key={label}>
                <a href="#home" className="text-sm text-mist transition-colors hover:text-brand">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-ink dark:text-white">Contact</h2>
          <ul className="mt-6 space-y-4">
            {contact.map(({ icon: Icon, lines }) => (
              <li key={lines[0]} className="flex gap-3 text-sm text-mist">
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

      <div className="mx-auto mt-16 max-w-6xl border-t border-rule px-4 py-8 sm:px-6">
        <p className="text-xs text-copyright">
          © {new Date().getFullYear()} Haute — Free React Template
        </p>
      </div>
    </footer>
  )
}
