import { useState, type FormEvent } from 'react'
import { SocialLinks } from './SocialLinks'

const columns = [
  {
    title: 'About',
    links: ['Manage Team', 'Digital Agency', 'Creative Agency'],
  },
  {
    title: 'Solutions',
    links: ['Marketing', 'Analytics', 'Commerce'],
  },
  {
    title: 'Company',
    links: ['Careers', 'Press', 'Contact'],
  },
] as const

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <footer id="contact" className="bg-night py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="font-display text-lg font-bold text-white">{column.title}</h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#home"
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-display text-lg font-bold text-white">
              Subscribe for More Features
            </h3>
            <form onSubmit={handleSubscribe} className="mt-5">
              <label htmlFor="subscribe-email" className="sr-only">
                Subscribe email
              </label>
              <div className="flex gap-3">
                <input
                  id="subscribe-email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email address"
                  className="h-11 flex-1 rounded-full border border-white/20 bg-white/10 px-5 text-sm text-white placeholder:text-gray-400 focus:border-primary-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="h-11 rounded-full bg-primary-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>
        </div>

        <p className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          Copyright © {new Date().getFullYear()} Appy. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
