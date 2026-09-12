import { Mail } from 'lucide-react'
import { useState } from 'react'

export function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Subscribe Newsletter</h3>
            <p className="mb-4 text-sm">
              Get the latest updates on our dishes and events delivered to your inbox.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setEmail('')
              }}
              className="flex"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full bg-gray-800 px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-flame-600"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="bg-flame-600 px-4 text-white transition hover:bg-flame-700"
                aria-label="Subscribe"
              >
                <Mail className="h-5 w-5" />
              </button>
            </form>
          </div>

          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">About Us</h3>
            <p className="text-sm">
              We serve authentic cuisine with fresh ingredients and passion. Every dish is crafted
              to bring you a memorable dining experience.
            </p>
          </div>

          {/* Hours */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Opening Hours</h3>
            <p className="text-sm">Sunday &ndash; Thursday: 5 AM &ndash; 10 PM</p>
            <p className="text-sm">Friday &ndash; Saturday: 5 AM &ndash; 12 AM</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Contact Info</h3>
            <p className="text-sm">123 Restaurant Avenue, Food City</p>
            <p className="text-sm">+1 (234) 567-890</p>
            <p className="text-sm">info@tavern.com</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-gray-500 sm:flex-row">
          <p>Copyright &copy; {new Date().getFullYear()} All rights reserved.</p>
          <p>
            Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-flame-500 underline transition hover:text-flame-400"
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
