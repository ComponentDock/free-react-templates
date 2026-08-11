import { useState, type FormEvent } from 'react'
import { ArrowRight, Heart } from 'lucide-react'
import { z } from 'zod'
import {
  copyright,
  footerColumns,
  footerCredit,
  footerCreditBy,
  footerSocials,
  newsletterEmailLabel,
  newsletterPlaceholder,
  newsletterPrompt,
  newsletterSubmitLabel,
  newsletterSuccess,
  newsletterTitle,
} from '../data'
import { BrandIcons } from './BrandIcons'

const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
})

export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = newsletterSchema.safeParse({ email })
    if (!result.success) {
      setError(result.error.issues[0]!.message)
      return
    }
    setError(null)
    setSubscribed(true)
  }

  return (
    <footer className="bg-footer text-white">
      <div className="mx-auto max-w-7xl px-4 py-[120px] sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-6">
          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title} className="lg:col-span-1">
              <h2 className="mb-5 text-sm font-medium uppercase tracking-wide text-white">
                {column.title}
              </h2>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted transition-colors hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="sm:col-span-2 lg:col-span-2">
            <h2 className="mb-5 text-sm font-medium uppercase tracking-wide text-white">
              {newsletterTitle}
            </h2>
            <p className="mb-[15px] text-sm leading-6 text-muted">{newsletterPrompt}</p>
            {subscribed ? (
              <p role="status" className="text-sm text-white">
                {newsletterSuccess}
              </p>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex w-full max-w-md">
                <label htmlFor="newsletter-email" className="sr-only">
                  {newsletterEmailLabel}
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder={newsletterPlaceholder}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  aria-invalid={error ? true : undefined}
                  aria-describedby={error ? 'newsletter-error' : undefined}
                  className="h-10 w-4/5 border-none bg-white px-[15px] text-sm text-muted placeholder:text-muted focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label={newsletterSubmitLabel}
                  className="flex h-10 w-[38px] items-center justify-center bg-[linear-gradient(to_right,#2c28b1_0%,#9b5cf6_51%,#2c28b1_100%)] bg-[length:200%_auto] text-white transition-[background-position] duration-300 hover:bg-[position:100%_0]"
                >
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </button>
              </form>
            )}
            {error && !subscribed && (
              <p id="newsletter-error" role="alert" className="mt-3 text-xs text-white">
                {error}
              </p>
            )}
          </div>
        </div>

        <div className="mt-[80px] flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-[30px] sm:flex-row">
          <p className="text-sm text-muted">
            {copyright} {footerCredit}{' '}
            <Heart aria-hidden="true" className="inline h-3 w-3 text-brand" /> {footerCreditBy}
          </p>
          <div className="flex items-center gap-[15px] text-muted">
            <BrandIcons names={footerSocials} className="hover:text-brand" />
          </div>
        </div>
      </div>
    </footer>
  )
}
