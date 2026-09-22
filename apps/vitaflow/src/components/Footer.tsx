import { useState } from 'react'
import { Heart } from 'lucide-react'

const footerLinks = {
  Services: ['Balance Body', 'Physical Activity', 'Fitness Program', 'Healthy Food'],
  About: ['Staff', 'Team', 'Careers', 'Blog'],
  Resources: ['Security', 'Global', 'Charts', 'Privacy'],
  Social: ['Facebook', 'Twitter', 'Instagram', 'Google'],
}

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <footer className="bg-footer text-white/40" id="footer">
      <div className="container mx-auto px-4 py-16">
        {/* Subscribe */}
        <div className="mx-auto mb-12 max-w-lg">
          <form onSubmit={handleSubscribe}>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-l bg-white px-4 py-3 text-sm text-ink placeholder-ink/30 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-r bg-subscribe px-6 py-3 text-sm font-medium text-white hover:bg-accent-500"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        {/* Links */}
        <div className="grid gap-8 md:grid-cols-5">
          {/* Brand */}
          <div className="md:col-span-1">
            <h2 className="mb-4 text-lg font-bold text-white">
              Vita<span className="text-accent-400">flow</span>
            </h2>
            <p className="mb-4 text-sm">
              Your trusted partner in health and wellness coaching. Transform your lifestyle with
              expert guidance.
            </p>
            <a href="#" className="text-sm text-primary-400 no-underline hover:text-primary-300">
              read more →
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="border-l border-white/5 pl-6">
              <h3 className="mb-4 text-sm font-semibold text-white/90">{category}</h3>
              <ul className="m-0 list-none space-y-2 p-0">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/40 no-underline hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="m-0 text-sm">
            Copyright &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
            <Heart size={12} className="inline text-red-500" aria-hidden="true" /> by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 no-underline hover:text-primary-300"
            >
              Component Dock
            </a>
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-white/40 no-underline hover:text-white">
              Terms
            </a>
            <a href="#" className="text-sm text-white/40 no-underline hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-sm text-white/40 no-underline hover:text-white">
              Compliances
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
