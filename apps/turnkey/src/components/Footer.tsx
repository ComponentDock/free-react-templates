import { Send } from 'lucide-react'

const instagramImages = [
  'https://picsum.photos/seed/turnkey-i1/100/100',
  'https://picsum.photos/seed/turnkey-i2/100/100',
  'https://picsum.photos/seed/turnkey-i3/100/100',
  'https://picsum.photos/seed/turnkey-i4/100/100',
  'https://picsum.photos/seed/turnkey-i5/100/100',
  'https://picsum.photos/seed/turnkey-i6/100/100',
  'https://picsum.photos/seed/turnkey-i7/100/100',
  'https://picsum.photos/seed/turnkey-i8/100/100',
]

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    </svg>
  )
}

function DribbbleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path
        d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"
        stroke="white"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-heading text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h6 className="text-white font-semibold mb-4">About Us</h6>
            <p className="text-sm text-white/70 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore dolore magna aliqua.
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h6 className="text-white font-semibold mb-4">Newsletter</h6>
            <p className="text-sm text-white/70 mb-3">Stay update with our latest</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter Email"
                className="flex-1 px-4 py-2 text-sm text-heading rounded-l bg-white border-0 focus:ring-2 focus:ring-brand"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="bg-brand hover:bg-brand-dark px-4 py-2 rounded-r text-white transition-colors"
                aria-label="Subscribe"
              >
                <Send size={16} />
              </button>
            </form>
          </div>

          {/* Instagram Feed */}
          <div>
            <h6 className="text-white font-semibold mb-4">Instagram Feed</h6>
            <div className="grid grid-cols-4 gap-2">
              {instagramImages.map((img, i) => (
                <img
                  key={`insta-${i}`}
                  src={img}
                  alt={`Instagram post ${i + 1}`}
                  className="w-full h-14 object-cover rounded"
                  loading="lazy"
                />
              ))}
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h6 className="text-white font-semibold mb-4">Follow Us</h6>
            <p className="text-sm text-white/70 mb-3">Let us be social</p>
            <div className="flex gap-3">
              <a
                href="https://www.componentdock.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.componentdock.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon />
              </a>
              <a
                href="https://www.componentdock.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand transition-colors"
                aria-label="Dribbble"
              >
                <DribbbleIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
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
