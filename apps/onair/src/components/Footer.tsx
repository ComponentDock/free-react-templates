import { MapPin, Phone, Mail } from 'lucide-react'

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const instagramImages = Array.from(
  { length: 9 },
  (_, i) => `https://picsum.photos/seed/onair-ig${i + 1}/100/100`,
)

const twitterFeed = [
  {
    user: 'Kerem Suer',
    handle: '@kerem',
    text: 'American conducts its first ever drone strike on Qaeda',
  },
  {
    user: 'Axel Hervelle',
    handle: '@axel_hervelle',
    text: 'Tens of thousands attend rallies held in D.C.',
  },
  {
    user: 'Chris Pratt',
    handle: '@chris_pratt',
    text: 'Hundreds of protesters shut down meeting.',
  },
]

export function Footer() {
  return (
    <footer className="bg-heading text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + Contact */}
          <div>
            <a href="#home" className="text-2xl font-bold tracking-wide">
              <span className="text-brand">On</span>Air
            </a>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/60">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-white/60">
                <MapPin className="h-4 w-4 flex-shrink-0 text-brand" />
                <span>24 No. Amazing Valley, Awesome St. New York, USA</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <Phone className="h-4 w-4 flex-shrink-0 text-brand" />
                <span>+11 123 4567890</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <Mail className="h-4 w-4 flex-shrink-0 text-brand" />
                <span>info@onair.com</span>
              </div>
            </div>
          </div>

          {/* Twitter Feed */}
          <div>
            <h3 className="mb-6 text-base font-semibold uppercase">Twitter Feed</h3>
            <div className="space-y-4">
              {twitterFeed.map((tweet) => (
                <div key={tweet.handle} className="flex gap-3">
                  <XIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
                  <p className="text-sm text-white/60">
                    <a
                      href="#social"
                      className="font-medium text-white transition-colors hover:text-brand"
                    >
                      {tweet.user}
                    </a>{' '}
                    {tweet.handle} {tweet.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Instagram */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-base font-semibold uppercase">Instagram</h3>
            <div className="grid grid-cols-3 gap-2">
              {instagramImages.map((src, i) => (
                <a key={i} href="#instagram" className="block overflow-hidden rounded">
                  <img
                    src={src}
                    alt=""
                    className="h-full w-full object-cover transition-transform hover:scale-110"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/60">
        &copy; {new Date().getFullYear()} All rights reserved &middot; Made with{' '}
        <a
          href="https://www.componentdock.com/"
          className="font-medium text-brand transition-colors hover:text-brand-dark"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
