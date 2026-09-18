import { Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer id="contact" className="bg-dark-900 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">About Imprint</h3>
            <p className="text-sm leading-relaxed text-white/60">
              A personal portfolio template showcasing creative design and writing services. Built
              with modern web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Work', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-white/60 transition-colors hover:text-gold-400"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Get in Touch</h3>
            <p className="text-sm text-white/60">
              203 Fake St. Mountain View
              <br />
              San Francisco, California
              <br />
              USA
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-white/40">
            Made with <Heart className="inline h-3 w-3 text-gold-400" fill="currentColor" /> by{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-gold-400 underline transition-colors hover:text-gold-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
