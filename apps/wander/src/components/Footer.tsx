import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { z } from 'zod'
import { footer } from '../data'
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from './social-icons'

const emailSchema = z.string().trim().email('Enter a valid email address')

const socialLinks = [
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'Twitter', Icon: TwitterIcon },
  { label: 'Instagram', Icon: InstagramIcon },
  { label: 'Linkedin', Icon: LinkedinIcon },
  { label: 'Youtube', Icon: YoutubeIcon },
] as const

/* Reference: footer.footer-section — #1A1A1A band with FOUR columns:
   Quick Link / Support / Contact Info (italic white labels) / Subscribe
   (underline-only email input with a paper-plane submit button and a
   newsletter form), plus a top-bordered bottom bar with the copyright
   line (branded to Component Dock) and five social icon links. */
export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = emailSchema.safeParse(email)
    if (!result.success) {
      setError(result.error.issues[0]!.message)
      setSubscribed(false)
      return
    }
    setError('')
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="bg-footer py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-5 text-[18px] text-white">{footer.quickTitle}</h3>
            <ul className="space-y-2.5">
              {footer.quickLinks.map((label) => (
                <li key={label}>
                  <a href="#home" className="text-white/70 transition-colors hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-5 text-[18px] text-white">{footer.supportTitle}</h3>
            <ul className="space-y-2.5">
              {footer.supportLinks.map((label) => (
                <li key={label}>
                  <a href="#home" className="text-white/70 transition-colors hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-5 text-[18px] text-white">{footer.contactTitle}</h3>
            <ul className="space-y-2.5">
              <li>
                <p className="text-white/50">
                  <em className="text-white">Address:</em> {footer.contact.address}
                </p>
              </li>
              <li>
                <p className="text-white/50">
                  <em className="text-white">Phone:</em> {footer.contact.phone}
                </p>
              </li>
              <li>
                <p className="text-white/50">
                  <em className="text-white">Email:</em> {footer.contact.email}
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-5 text-[18px] text-white">{footer.subscribeTitle}</h3>
            <p className="text-white/50">{footer.subscribeText}</p>
            {subscribed && (
              <p role="status" className="mt-4 text-brand">
                {footer.successMessage}
              </p>
            )}
            <form onSubmit={handleSubscribe} noValidate className="relative mt-6">
              <label htmlFor="subscribe-email" className="sr-only">
                Email address
              </label>
              <input
                id="subscribe-email"
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                  if (error) setError('')
                }}
                placeholder={footer.placeholder}
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? 'subscribe-error' : undefined}
                className="w-full rounded-none border-0 border-b border-white/20 bg-transparent pb-3 pr-12 text-white italic placeholder:italic placeholder:text-white/20 focus:border-white focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute top-0 right-0 p-1 text-white/70 transition-colors hover:text-white"
              >
                <Send size={18} aria-hidden="true" />
              </button>
            </form>
            {error && (
              <p id="subscribe-error" role="alert" className="mt-3 text-sm text-red-400">
                {error}
              </p>
            )}
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/50">
            Copyright © {new Date().getFullYear()} All rights reserved | Made with ♥ at{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-semibold text-white/70 transition-colors hover:text-white"
            >
              Component Dock
            </a>
          </p>
          <ul className="flex items-center">
            {socialLinks.map(({ label, Icon }) => (
              <li key={label}>
                <a
                  href="#home"
                  aria-label={label}
                  className="inline-block p-2.5 text-white/70 transition-colors hover:text-white"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
