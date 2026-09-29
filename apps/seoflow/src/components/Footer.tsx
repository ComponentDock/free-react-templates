import { Mail, Phone, Send } from 'lucide-react'
import { useState } from 'react'

const serviceLinks = ['Marketing & SEO', 'Startup', 'Finance solution', 'Food', 'Travel']
const usefulLinks = ['About', 'Blog', 'Contact', 'Appointment']

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <footer className="bg-brand-navy text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <h3 className="text-2xl font-bold">
              Let's Start your project,{' '}
              <a href="mailto:hello@seoflow.com" className="text-brand-pink hover:text-pink-400">
                Mail Us
              </a>
            </h3>
            <div className="flex items-center gap-6">
              <a href="tel:+10673563629" className="flex items-center gap-2 text-lg font-semibold">
                <Phone size={18} />
                +10 673 563 629
              </a>
              <a
                href="mailto:support@seoflow.com"
                className="flex items-center gap-2 text-gray-300 hover:text-white"
              >
                <Mail size={18} />
                support@seoflow.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo + description */}
          <div>
            <a href="#home" className="text-2xl font-bold mb-4 block">
              Seo<span className="text-brand-pink">Flow</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Esteem spirit temper too say adieus who direct esteem. It esteems luckily or picture
              placing drawing.
            </p>
            <div className="flex gap-3">
              {['Facebook', 'Twitter', 'Instagram'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-sm hover:bg-brand-pink transition-colors"
                  aria-label={platform}
                >
                  {platform[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 text-sm hover:text-brand-pink transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 text-sm hover:text-brand-pink transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
            <form onSubmit={handleSubmit} className="flex mb-3">
              <input
                type="email"
                placeholder="Enter your mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2.5 bg-white/10 text-white placeholder-gray-400 text-sm rounded-l-lg focus:outline-none focus:ring-2 focus:ring-brand-pink"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="bg-brand-pink px-4 py-2.5 rounded-r-lg hover:bg-pink-600 transition-colors"
                aria-label="Subscribe"
              >
                <Send size={16} />
              </button>
            </form>
            <p className="text-gray-400 text-xs">
              Esteem spirit temper too say adieus who direct esteem esteems luckily.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} All rights reserved. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-pink hover:text-pink-400"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
