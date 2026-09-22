import { Dumbbell } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Classes & Services', href: '#courses' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#footer' },
]

export function Footer() {
  const [email, setEmail] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setEmail('')
  }

  return (
    <footer id="footer" className="bg-heading py-16 text-white">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <a href="#home" className="mb-6 inline-flex items-center gap-2 text-2xl font-bold">
          <Dumbbell className="h-6 w-6 text-brand-400" aria-hidden="true" />
          <span>
            Sport<span className="text-brand-400">ium</span>
          </span>
        </a>

        <nav aria-label="Footer navigation">
          <ul className="mb-8 flex flex-wrap justify-center gap-4 text-sm text-white/70">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-brand-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <form onSubmit={handleSubmit} className="mb-8 flex max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email here"
            required
            className="flex-1 rounded-l-full border border-white/20 bg-transparent px-4 py-2 text-sm text-white placeholder-white/40 focus:border-brand-400 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-r-full bg-brand-400 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-500"
          >
            go
          </button>
        </form>

        <p className="text-xs text-white/40">
          &copy; {new Date().getFullYear()} All rights reserved. Made with{' '}
          <a
            href="https://www.componentdock.com/"
            className="underline hover:text-brand-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
