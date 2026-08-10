import { useState, type FormEvent } from 'react'
import { Heart, Send } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const navLinks = ['Home', 'Fashion', 'Travel', 'About', 'Contact'] as const

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Sidebar() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSubscribed(true)
    setEmail('')
  }

  return (
    <aside
      aria-label="Sidebar"
      className="flex h-full w-full flex-col border-r border-line-300 bg-white px-8 pt-20 pb-10"
    >
      <nav aria-label="Main">
        <ul className="space-y-2.5">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className={cn(
                  'relative inline-block text-lg font-medium transition-colors',
                  link === 'Home'
                    ? 'text-sky-500 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-sky-500 after:content-[""]'
                    : 'text-ink-900 hover:text-sky-500',
                )}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-14">
        <div className="rounded-sm bg-gradient-to-br from-sky-200 via-sky-100 to-white p-6">
          <h1 className="font-display text-6xl leading-[0.85] text-ink-900">Memoir</h1>
          <p className="mt-2 font-display text-4xl leading-none text-ink-900">by A. Moore</p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-lg font-semibold text-ink-900">Subscribe for newsletter</h2>
        {subscribed ? (
          <p role="status" className="mt-4 text-sm text-sky-600">
            Thank you for subscribing — welcome to the Memoir letters!
          </p>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="mt-3">
            <label htmlFor="sidebar-email" className="sr-only">
              Email address
            </label>
            <div className="relative flex items-center">
              <input
                id="sidebar-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter Email Address"
                className="w-full border-b border-line-200 bg-transparent py-2 pr-9 text-sm text-body-900 placeholder:text-meta-500 focus:border-sky-500 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-0 text-sky-500 transition-colors hover:text-sky-700"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
            {error && (
              <p role="alert" className="mt-2 text-sm text-red-500">
                {error}
              </p>
            )}
          </form>
        )}
      </div>

      <p className="mt-auto flex items-center gap-1.5 pt-10 text-sm text-ink-900/60">
        Copyright © {new Date().getFullYear()} All rights reserved | made with
        <Heart className="h-3.5 w-3.5 text-sky-500" aria-hidden="true" />
        by Free React Templates
      </p>
    </aside>
  )
}
