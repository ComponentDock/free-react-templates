import { Phone, Mail, MapPin } from 'lucide-react'

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function TwitterIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  )
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

function YoutubeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

const quickLinks = ['Home', 'About', 'Services', 'Products', 'Contact', 'News']

export function Footer() {
  return (
    <footer id="contact">
      {/* CTA bar */}
      <div className="bg-[#142336] py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <h3 className="font-['Saira_Condensed'] text-xl font-bold text-white">
            Contact us now to get a quote
          </h3>
          <div className="flex items-center gap-2 text-[#FAD110]">
            <Phone size={18} />
            <span className="font-['Saira_Condensed'] font-bold text-lg">1-688-688-94</span>
          </div>
        </div>
      </div>
      {/* Main footer */}
      <div className="bg-[#0a1525] py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact */}
          <div>
            <h4 className="font-['Saira_Condensed'] text-lg font-bold text-white mb-4">
              Contact us
            </h4>
            <div className="space-y-3 text-sm text-gray-400 font-['Mulish']">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-[#4586D5] mt-0.5 flex-shrink-0" />
                <span>123 HVAC Street, Cooltown, CT 06001</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-[#4586D5] flex-shrink-0" />
                <a
                  href="mailto:info@frostguard.com"
                  className="hover:text-[#4586D5] transition-colors"
                >
                  info@frostguard.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-[#4586D5] flex-shrink-0" />
                <span>1-688-688-94</span>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-[#4586D5] hover:text-white transition-colors"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-[#4586D5] hover:text-white transition-colors"
              >
                <TwitterIcon size={18} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-[#4586D5] hover:text-white transition-colors"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="text-[#4586D5] hover:text-white transition-colors"
              >
                <YoutubeIcon size={18} />
              </a>
            </div>
          </div>
          {/* Quick links */}
          <div>
            <h4 className="font-['Saira_Condensed'] text-lg font-bold text-white mb-4">
              Quick links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-gray-400 hover:text-[#4586D5] transition-colors font-['Mulish']"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Recent posts */}
          <div>
            <h4 className="font-['Saira_Condensed'] text-lg font-bold text-white mb-4">
              What&apos;s news
            </h4>
            <div className="space-y-4">
              {['frostguard-news-1', 'frostguard-news-2'].map((img, i) => (
                <div key={img} className="flex gap-3">
                  <img
                    src={`https://picsum.photos/seed/${img}/100/100`}
                    alt="Recent post"
                    className="w-16 h-16 rounded object-cover flex-shrink-0"
                  />
                  <div>
                    <p className="text-sm text-gray-300 font-['Mulish'] leading-snug">
                      {i === 0
                        ? 'Top AC maintenance tips for summer'
                        : 'When to call a professional'}
                    </p>
                    <span className="text-xs text-gray-500 font-['Mulish']">
                      Sep {10 - i}, 2026
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Subscribe */}
          <div>
            <h4 className="font-['Saira_Condensed'] text-lg font-bold text-white mb-4">
              Subscribe
            </h4>
            <p className="text-sm text-gray-400 font-['Mulish'] mb-4">
              Get the latest HVAC tips and offers delivered to your inbox.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent border border-gray-600 rounded-lg px-4 py-2 text-sm text-white font-['Mulish'] focus:outline-none focus:border-[#4586D5]"
              />
              <button
                type="submit"
                className="bg-[#142336] text-white font-['Saira_Condensed'] font-bold px-4 py-2 rounded-[60px] hover:bg-[#1c3050] transition-colors"
              >
                →
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="bg-[#070e1a] py-4">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-gray-500 font-['Mulish']">
          <p>
            &copy; {new Date().getFullYear()} FrostGuard. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-[#4586D5] hover:underline"
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
