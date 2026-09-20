import { Globe, Share2, MessageCircle, Send } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const navLinks = ['Home', 'Speakers', 'Events', 'News', 'Contact']

const socialIcons = [Globe, Share2, MessageCircle, Send]

const instaImages = Array.from(
  { length: 6 },
  (_, i) => `https://picsum.photos/seed/gathr-insta-${i + 1}/150/150`,
)

export function Footer() {
  return (
    <footer className="bg-[#18181c] text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 py-16 md:grid-cols-3">
        {/* Column 1 — Logo + Social */}
        <div>
          <h3 className="mb-4 text-2xl font-bold">Gathr</h3>
          <p className="mb-6 text-sm text-gray-400">
            Join us for the premier conference experience. Three days of inspiration, innovation,
            and connection in San Francisco.
          </p>
          <div className="flex gap-4">
            {socialIcons.map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label={`Social link ${i + 1}`}
                className="text-gray-400 transition hover:text-white"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2 — Instagram Grid */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
            Instagram
          </h4>
          <div className="grid grid-cols-3 gap-2">
            {instaImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Instagram post ${i + 1}`}
                className="h-[80px] w-[80px] rounded object-cover"
                loading="lazy"
              />
            ))}
          </div>
        </div>

        {/* Column 3 — Newsletter */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
            Newsletter
          </h4>
          <p className="mb-4 text-sm text-gray-400">
            Subscribe to get updates on speakers, schedule, and exclusive offers.
          </p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email"
              aria-label="Email address"
              className="flex-1 rounded-full bg-white/10 px-4 py-2 text-sm text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#f50136]"
            />
            <Button
              type="submit"
              className="rounded-full bg-[#f50136] px-6 py-2 text-sm font-semibold text-white hover:bg-[#d4002e]"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">
          <p className="text-sm text-gray-400">
            Made with ❤ by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f50136] transition hover:text-[#d4002e]"
            >
              Component Dock
            </a>
          </p>
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
