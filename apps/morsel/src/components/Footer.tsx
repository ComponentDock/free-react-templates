import { useState, type FormEvent } from 'react'
import { Mail } from 'lucide-react'
import { z } from 'zod'
import { BrandIcon } from './BrandIcon'
import { footerCategories, socialLabels, socialLinks, subscribePlaceholder } from '../data'

const subscribeSchema = z.object({
  email: z.string().min(1, 'Please enter your email').email('Please enter a valid email'),
})

export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleChange = (value: string) => {
    setEmail(value)
    if (error) {
      setError('')
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = subscribeSchema.safeParse({ email })
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors
      setError(fieldErrors.email![0]!)
      setSuccess('')
      return
    }
    setSuccess('Thanks! You are subscribed to the Morsel newsletter.')
    setEmail('')
    setError('')
  }

  return (
    <footer className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-3">
        <div>
          <a href="#home" className="font-display text-2xl font-semibold text-ink">
            Morsel
          </a>
          <p className="mt-4 text-sm text-gray-500">Morsel @ 2026. All rights reserved.</p>
          <p className="mt-1 text-sm text-gray-500">
            Designed by{' '}
            <a
              href="https://colorlib.com"
              target="_blank"
              rel="noreferrer"
              className="text-brand transition-colors hover:underline"
            >
              Colorlib
            </a>
          </p>
          <ul className="mt-6 flex items-center gap-3" aria-label="Footer social links">
            {socialLinks.map((name) => (
              <li key={name}>
                <a
                  href="#home"
                  aria-label={socialLabels[name]}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white transition-all hover:-translate-y-0.5 hover:shadow-[5px_10px_20px_rgba(0,0,0,0.3)]"
                >
                  <BrandIcon name={name} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer categories">
          <h2 className="font-display text-base font-semibold uppercase tracking-wide text-ink">
            Categories
          </h2>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
            {footerCategories.map((category) => (
              <li key={category}>
                <a
                  href="#blog"
                  className="text-sm uppercase text-gray-600 transition-colors hover:text-brand"
                >
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-base font-semibold uppercase tracking-wide text-ink">
            Subscribe
          </h2>
          <form onSubmit={handleSubmit} noValidate className="mt-5">
            <div className="relative">
              <label htmlFor="subscribe-email" className="sr-only">
                Email address
              </label>
              <input
                id="subscribe-email"
                type="email"
                value={email}
                onChange={(event) => handleChange(event.target.value)}
                placeholder={subscribePlaceholder}
                className="h-[50px] w-full rounded-none bg-input-bg px-4 pr-14 text-sm text-ink shadow-[0_0_1px_#bbb] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand/40"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-1.5 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand/90"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
            {error && (
              <p role="alert" className="mt-3 text-sm text-red-500">
                {error}
              </p>
            )}
            {success && (
              <p role="status" className="mt-3 text-sm text-green-600">
                {success}
              </p>
            )}
          </form>
        </div>
      </div>
    </footer>
  )
}
