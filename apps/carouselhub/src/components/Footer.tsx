import { useState } from 'react'

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <footer className="bg-slate-dark text-white" id="contact">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand column */}
          <div>
            <a href="#home" className="text-2xl font-bold uppercase tracking-widest">
              CarouselHub<span className="text-brand">.</span>
            </a>
            <p className="mt-4 text-sm text-gray-400">
              A modern carousel gallery template for showcasing creative work with stunning visual
              presentations and smooth transitions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#home" className="transition-colors hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#gallery" className="transition-colors hover:text-white">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#slides" className="transition-colors hover:text-white">
                  Slides
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">
              Newsletter
            </h4>
            <p className="mb-4 text-sm text-gray-400">
              Subscribe to get updates on our latest work and projects.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 rounded-lg bg-white/10 px-4 py-2 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:bg-white/20"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="rounded-lg bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
        <div className="mx-auto max-w-6xl px-6">
          <p>© {new Date().getFullYear()} CarouselHub. All rights reserved.</p>
          <p className="mt-2">
            Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand underline transition-colors hover:text-brand-dark"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
