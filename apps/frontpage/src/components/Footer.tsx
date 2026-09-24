import { useState } from 'react'
import { Send } from 'lucide-react'
import { FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon } from './social-icons'

const socials = [
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'Twitter', Icon: TwitterIcon },
  { label: 'Instagram', Icon: InstagramIcon },
  { label: 'YouTube', Icon: YoutubeIcon },
]

const instagramImages = [
  'https://picsum.photos/seed/frontpage-insta1/150/150',
  'https://picsum.photos/seed/frontpage-insta2/150/150',
  'https://picsum.photos/seed/frontpage-insta3/150/150',
  'https://picsum.photos/seed/frontpage-insta4/150/150',
  'https://picsum.photos/seed/frontpage-insta5/150/150',
  'https://picsum.photos/seed/frontpage-insta6/150/150',
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <footer className="bg-footer text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Column 1: Logo + description + social */}
          <div>
            <a href="#home" className="text-2xl font-bold tracking-tight">
              Front<span className="text-brand">Page</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              FrontPage brings you the latest news, trending stories, and in-depth coverage from
              around the world. Stay informed, stay ahead.
            </p>
            <ul className="mt-6 flex items-center gap-3">
              {socials.map(({ label, Icon }) => (
                <li key={label}>
                  <a
                    href={`https://${label.toLowerCase()}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded bg-white/10 text-white transition-colors hover:bg-brand"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Newsletter */}
          <div>
            <h3 className="text-lg font-bold">Newsletter</h3>
            <p className="mt-2 text-sm text-gray-400">
              Subscribe to get the latest news delivered to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                aria-label="Email address for newsletter"
                className="flex-1 rounded border border-gray-600 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-brand focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex items-center justify-center rounded bg-brand px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-brand-light"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
            {submitted && (
              <p className="mt-2 text-sm text-green-400" role="status">
                Thanks for subscribing!
              </p>
            )}
          </div>

          {/* Column 3: Instagram grid */}
          <div>
            <h3 className="text-lg font-bold">Instagram</h3>
            <div className="mt-4 grid grid-cols-3 gap-1">
              {instagramImages.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Instagram post ${i + 1}`}
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} FrontPage. All rights reserved.
          </p>
          <p className="text-xs text-gray-400">
            Powered by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
