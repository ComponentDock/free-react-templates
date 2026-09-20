import { Send } from 'lucide-react'
import { FacebookIcon, TwitterIcon, InstagramIcon } from './BrandIcons'

export default function Footer() {
  return (
    <footer className="bg-dark-alt text-white">
      {/* Newsletter + columns */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-montserrat">Lingo</h3>
            <p className="text-sm text-white/60 mb-4">
              Subscribe to get updates on new courses and language tips.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex">
              <input
                type="email"
                placeholder="Your email"
                aria-label="Newsletter email"
                className="flex-1 bg-white/10 text-white px-4 py-2 text-sm rounded-l focus:outline-none focus:bg-white/20 placeholder:text-white/40"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="bg-brand-primary px-4 py-2 rounded-r hover:bg-brand-primary/90 transition-colors"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </form>
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* About Us */}
          <div>
            <h4 className="font-bold mb-4 uppercase text-sm tracking-wide">About Us</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a href="#" className="hover:text-brand-accent transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-accent transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-accent transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-accent transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h4 className="font-bold mb-4 uppercase text-sm tracking-wide">Help &amp; Support</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a href="#" className="hover:text-brand-accent transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-accent transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-accent transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-accent transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Privacy & Terms */}
          <div>
            <h4 className="font-bold mb-4 uppercase text-sm tracking-wide">Privacy &amp; Terms</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a href="#" className="hover:text-brand-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-accent transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-accent transition-colors">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-accent transition-colors">
                  GDPR
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} Lingo. All rights reserved.</p>
          <p>
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand-accent hover:underline"
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
