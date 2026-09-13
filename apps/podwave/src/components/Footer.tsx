import { BrandIcon } from './BrandIcon'

const quickLinks = [
  [
    { label: 'Home', href: '#' },
    { label: 'Episodes', href: '#episodes' },
    { label: 'News', href: '#' },
    { label: 'Team', href: '#team' },
  ],
  [
    { label: 'About Us', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Contact Us', href: '#subscribe' },
    { label: 'Membership', href: '#' },
  ],
]

const recentPodcasts = [
  { title: 'Latest episode highlights and behind-the-scenes moments', imageSeed: 'podwave-fp1' },
  { title: 'Interview with industry leaders in audio production', imageSeed: 'podwave-fp2' },
  { title: 'Tips for growing your podcast from zero to hero', imageSeed: 'podwave-fp3' },
]

const socialLinks: {
  name: 'facebook' | 'twitter' | 'instagram' | 'linkedin'
  label: string
  href: string
}[] = [
  { name: 'facebook', label: 'Facebook', href: '#' },
  { name: 'twitter', label: 'Twitter', href: '#' },
  { name: 'instagram', label: 'Instagram', href: '#' },
  { name: 'linkedin', label: 'LinkedIn', href: '#' },
]

export function Footer() {
  return (
    <footer className="bg-footer-bg py-16 text-footer-text">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Column 1: About + Recent Podcasts */}
          <div>
            <div className="mb-8">
              <h3 className="mb-4 text-lg font-medium text-white">About Podwave</h3>
              <p className="text-sm leading-relaxed">
                We bring you the best podcast content, from interview highlights to production tips.
                Join our community of audio enthusiasts and never miss an episode.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium text-white">Recent Podcast</h3>
              <ul className="space-y-4">
                {recentPodcasts.map((podcast) => (
                  <li key={podcast.title}>
                    <a href="#" className="flex gap-3 transition-colors hover:text-white">
                      <img
                        src={`https://picsum.photos/seed/${podcast.imageSeed}/80/80`}
                        alt=""
                        className="h-12 w-12 flex-shrink-0 rounded object-cover"
                        loading="lazy"
                      />
                      <span className="text-sm font-light leading-snug">{podcast.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 2: Quick Menu + Follow Us */}
          <div>
            <div className="mb-8">
              <h3 className="mb-4 text-lg font-medium text-white">Quick Menu</h3>
              <div className="grid grid-cols-2 gap-4">
                {quickLinks.map((col, i) => (
                  <ul key={i} className="space-y-2">
                    {col.map((link) => (
                      <li key={link.label}>
                        <a href={link.href} className="text-sm transition-colors hover:text-white">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium text-white">Follow Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-footer-link transition-colors hover:text-white"
                  >
                    <BrandIcon name={social.name} size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Watch Video + Newsletter */}
          <div>
            <div className="mb-8">
              <h3 className="mb-4 text-lg font-medium text-white">Watch Video</h3>
              <div className="relative overflow-hidden rounded">
                <img
                  src="https://picsum.photos/seed/podwave-video/600/340"
                  alt="Video thumbnail"
                  className="w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-white">
                    &#9654;
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-medium text-white">Subscribe Newsletter</h3>
              <p className="mb-4 text-sm">Get updates on new episodes and exclusive content.</p>
              <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
                <label htmlFor="footer-email" className="sr-only">
                  Enter Email
                </label>
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Enter Email"
                  required
                  className="flex-1 border border-white/30 bg-transparent px-3 py-2 text-sm text-white placeholder-white/50 focus:border-brand-red focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-brand-red px-4 py-2 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Podwave. More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-footer-link transition-colors hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
