import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { z } from 'zod'
import {
  componentDockLabel,
  componentDockUrl,
  copyright,
  footerColumns,
  newsletter,
  payments,
  socials,
} from '../data'
import { FacebookIcon, GoogleIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from './social-icons'

const emailSchema = z.string().min(1, newsletter.emptyMessage).email(newsletter.invalidMessage)

const socialIcons = {
  Facebook: FacebookIcon,
  Twitter: TwitterIcon,
  Google: GoogleIcon,
  Instagram: InstagramIcon,
  YouTube: YoutubeIcon,
} as const

/* White footer: Products / Programs / Company link columns, a Subscribe
   Newsletter widget (pill input + blue button, validation + success
   state), brand-colored social circles, and a bottom bar with the
   Component Dock credit and payment methods. */
export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = emailSchema.safeParse(email)
    if (!result.success) {
      setError(result.error.issues[0]!.message)
      setSubscribed(false)
      return
    }
    setError(null)
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="bg-white pt-20 pb-8">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 lg:grid-cols-6">
        {footerColumns.map((column) => (
          <div key={column.title} className="lg:col-span-1">
            <h3 className="mb-6 text-xl font-bold text-ink">{column.title}</h3>
            <ul className="space-y-3">
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#home" className="text-muted transition-colors hover:text-primary">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="lg:col-span-3">
          <h3 className="mb-6 text-xl font-bold text-ink">{newsletter.title}</h3>
          <p className="mb-5 max-w-sm text-muted">{newsletter.text}</p>
          <form onSubmit={handleSubmit} noValidate className="flex max-w-md items-center gap-2">
            <label htmlFor="newsletter-email" className="sr-only">
              {newsletter.inputLabel}
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
                if (error) setError(null)
              }}
              placeholder={newsletter.placeholder}
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? 'newsletter-error' : undefined}
              className="h-[50px] w-full rounded-[30px] bg-mist px-6 text-ink outline-none placeholder:text-faint focus:ring-2 focus:ring-primary/40"
            />
            <button
              type="submit"
              aria-label={newsletter.buttonLabel}
              className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-ink"
            >
              <Send aria-hidden="true" className="h-5 w-5" />
            </button>
          </form>
          {error ? (
            <p id="newsletter-error" role="alert" className="mt-3 text-sm text-red-600">
              {error}
            </p>
          ) : null}
          {subscribed ? (
            <p role="status" className="mt-3 text-sm font-medium text-primary">
              {newsletter.successMessage}
            </p>
          ) : null}
          <div className="mt-8 flex items-center gap-3">
            {socials.map((social) => {
              const Icon = socialIcons[social.name as keyof typeof socialIcons]
              const brandColor: Record<string, string> = {
                Facebook: 'bg-[#4b62b3]',
                Twitter: 'bg-[#03baeb]',
                Google: 'bg-[#cb242e]',
                Instagram: 'bg-[#057ad7]',
                YouTube: 'bg-[#e20000]',
              }
              return (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-primary ${brandColor[social.name]}`}
                >
                  <Icon />
                </a>
              )
            })}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-borderline px-4 pt-8 md:flex-row">
        <p className="text-sm text-muted">
          {copyright} |{' '}
          <a href={componentDockUrl} className="text-muted hover:text-primary">
            {componentDockLabel}
          </a>
        </p>
        <p className="text-sm text-muted">
          <span className="mr-3">Payments We Accept</span>
          {payments.map((payment) => (
            <span key={payment} className="mx-1 font-semibold text-faint">
              {payment}
            </span>
          ))}
        </p>
      </div>
    </footer>
  )
}
