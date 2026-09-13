import { Phone, Mail } from 'lucide-react'

const footerLinks = ['FAQ', 'About Us', 'Our Services', 'Landscaping Tips', 'Pricing', 'Contact']

const instagramImages = Array.from(
  { length: 6 },
  (_, i) => `https://picsum.photos/seed/landcraft-insta${i + 1}/100/100`,
)

export default function Footer() {
  return (
    <footer className="bg-heading text-white" data-testid="footer">
      <div className="container mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo + Contact */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Landcraft</h2>
            <p className="text-white/70 text-sm mb-4">
              Professional landscaping services transforming outdoor spaces into beautiful,
              functional living areas.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={14} /> (+1) 1144-1254
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} /> info@landcraft.com
              </li>
            </ul>
          </div>

          {/* Footer Menu */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Instagram Grid */}
          <div>
            <h3 className="text-lg font-bold mb-4">Instagram</h3>
            <div className="grid grid-cols-3 gap-1">
              {instagramImages.map((src, i) => (
                <a key={i} href="#">
                  <img
                    src={src}
                    alt={`Instagram post ${i + 1}`}
                    className="w-full h-16 object-cover rounded hover:opacity-80 transition-opacity"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Contact Form */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Contact</h3>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-3 py-2 text-sm rounded bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-brand"
                aria-label="Full name"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 text-sm rounded bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-brand"
                aria-label="Email"
              />
              <textarea
                placeholder="Message"
                rows={3}
                className="w-full px-3 py-2 text-sm rounded bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-brand resize-none"
                aria-label="Message"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-brand text-white text-sm font-semibold rounded hover:bg-brand-dark transition-colors"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10 py-4 text-center text-sm text-white/60">
        <div className="container mx-auto px-4">
          <p>
            &copy; {new Date().getFullYear()} Landcraft. Made with{' '}
            <span aria-hidden="true">&hearts;</span> by{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-white hover:underline"
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
