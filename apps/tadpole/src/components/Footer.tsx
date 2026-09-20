import { useState, type FormEvent } from 'react'
import { Heart, Send } from 'lucide-react'
import { FacebookIcon, TwitterIcon, InstagramIcon } from './social-icons'

const navLinks = ['Home', 'About', 'Programs', 'Teachers', 'Events', 'Blog', 'Contact']

export function Footer() {
  const [email, setEmail] = useState('')

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <footer id="contact" className="bg-brand-dark text-white" role="contentinfo">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#home" className="font-display text-2xl text-brand-pink">
            Tadpole<span className="text-brand-yellow">.</span>
          </a>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            Nurturing young minds in a fun, safe, and colorful environment since 2010. Every child
            deserves the best start to their learning journey.
          </p>
          <div className="mt-4 flex gap-3">
            {[
              { label: 'Facebook', Icon: FacebookIcon },
              { label: 'Twitter', Icon: TwitterIcon },
              { label: 'Instagram', Icon: InstagramIcon },
            ].map(({ label, Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-brand-pink transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold">Programs</h3>
          <ul className="mt-4 space-y-3">
            {[
              'Tiny Tots (2-3 yrs)',
              'Little Explorers (3-5 yrs)',
              'Big Beginnings (5-6 yrs)',
              'Summer Camp',
              'After School Care',
            ].map((program) => (
              <li key={program}>
                <a
                  href="#programs"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {program}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold">Newsletter</h3>
          <p className="mt-4 text-sm text-gray-400">Get updates on events and new programs.</p>
          <form onSubmit={onSubmit} className="mt-4 flex gap-2">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="flex-1 rounded-full border border-gray-600 bg-transparent px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-brand-pink focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-pink text-white transition-colors hover:bg-pink-600"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-6">
        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Tadpole. Crafted with{' '}
          <Heart className="inline h-4 w-4 text-brand-pink" aria-hidden="true" /> by{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-pink transition-colors hover:underline"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
