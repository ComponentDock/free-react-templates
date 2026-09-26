import { useState } from 'react'
import { Send } from 'lucide-react'
import { FacebookIcon, TwitterIcon, YoutubeIcon, InstagramIcon } from './social-icons'

const quickLinks = ['Home', 'About', 'Contact', 'Gallery', 'Portfolio', 'Services']

const socialLinks = [
  { Icon: FacebookIcon, label: 'Facebook', href: '#' },
  { Icon: TwitterIcon, label: 'Twitter', href: '#' },
  { Icon: YoutubeIcon, label: 'Youtube', href: '#' },
  { Icon: InstagramIcon, label: 'Instagram', href: '#' },
]

const instagramImages = [
  'https://picsum.photos/seed/reflexly-ig-1/150/150',
  'https://picsum.photos/seed/reflexly-ig-2/150/150',
  'https://picsum.photos/seed/reflexly-ig-3/150/150',
  'https://picsum.photos/seed/reflexly-ig-4/150/150',
  'https://picsum.photos/seed/reflexly-ig-5/150/150',
  'https://picsum.photos/seed/reflexly-ig-6/150/150',
]

export function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer id="contact" className="bg-bg-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Logo + description + social */}
          <div>
            <a
              href="/"
              className="mb-4 inline-block font-heading text-2xl font-bold tracking-wide text-brand"
            >
              Reflexly
            </a>
            <p className="mb-6 text-sm leading-relaxed text-white/60">
              We are a creative photography studio passionate about capturing the beauty of every
              moment. Our skilled team delivers exceptional visual storytelling across all genres.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-white/50 transition-colors hover:text-brand"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Instagram grid */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-bold uppercase tracking-wider">
              Instagram
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {instagramImages.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Instagram post ${i + 1}`}
                  className="h-20 w-20 object-cover"
                />
              ))}
            </div>
          </div>

          {/* Col 3: Quick links */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-bold uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-white/60 transition-colors hover:text-brand"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Subscribe */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-bold uppercase tracking-wider">
              Subscribe
            </h3>
            <p className="mb-4 text-sm text-white/60">
              Stay updated with our latest work and news.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-brand"
                aria-label="Email for subscription"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="bg-brand px-4 py-3 text-white transition-colors hover:bg-brand-hover"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-6">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-white/40 lg:px-8">
          Made with ❤️ by{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand underline transition-colors hover:text-brand-hover"
          >
            Component Dock
          </a>
        </div>
      </div>
    </footer>
  )
}
