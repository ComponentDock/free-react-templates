import { Calendar, Mail, MapPin, MessageCircle, Phone, User } from 'lucide-react'
import { FacebookIcon, InstagramIcon, TwitterIcon } from './social-icons'

const socials = [
  { label: 'Twitter', Icon: TwitterIcon },
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'Instagram', Icon: InstagramIcon },
] as const

const recentPosts = [
  {
    title: 'The Quiet Power of a Well-Dressed Man',
    src: 'https://picsum.photos/seed/pulp-recent-1/200/200',
  },
  {
    title: 'Why Print Is Making a Bold Comeback',
    src: 'https://picsum.photos/seed/pulp-recent-2/200/200',
  },
] as const

const siteLinks = ['Home', 'About', 'Model', 'Services', 'Blog'] as const

const contactRows = [
  { Icon: MapPin, text: '203 Fake St. Mountain View, San Francisco, California, USA' },
  { Icon: Phone, text: '+2 392 3929 210' },
  { Icon: Mail, text: 'info@yourdomain.com' },
] as const

export function Footer() {
  return (
    <footer id="contact" className="bg-night text-white">
      <div className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
        <div className="grid gap-10 pb-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-2xl uppercase tracking-wide">Pulp</p>
            <p className="mt-5 text-sm font-light leading-relaxed text-white/70">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#contact"
                  aria-label={label}
                  className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-[26px] w-[26px]" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Recent Blog
            </h2>
            <div className="mt-5 space-y-4">
              {recentPosts.map((post) => (
                <div key={post.title} className="flex gap-4">
                  <img src={post.src} alt="" className="h-16 w-16 shrink-0 rounded object-cover" />
                  <div>
                    <h3 className="text-sm leading-snug">
                      <a
                        href="#editorial"
                        className="text-white/80 transition-colors hover:text-brand"
                      >
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-400">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                        July 12, 2018
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <User className="h-3.5 w-3.5" aria-hidden="true" />
                        Admin
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                        19
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <nav aria-label="Site links">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Site Links
            </h2>
            <ul className="mt-5">
              {siteLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#home"
                    className="block py-2 text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Have a Questions?
            </h2>
            <address className="mt-5 space-y-4 text-sm not-italic">
              {contactRows.map(({ Icon, text }) => (
                <p key={text} className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-white" aria-hidden="true" />
                  <span className="text-white/70">{text}</span>
                </p>
              ))}
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Pulp — Free React Template
        </div>
      </div>
    </footer>
  )
}
