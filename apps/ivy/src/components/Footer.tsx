import { useState, type FormEvent } from 'react'
import { z } from 'zod'
import { ChevronRight, Mail, MapPin, Phone } from 'lucide-react'
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from './social-icons'
import {
  BRAND,
  COMPONENT_DOCK_URL,
  FOOTER_ADDRESS,
  FOOTER_EMAIL,
  FOOTER_PHONE,
  MINI_POSTS,
  QUICK_LINKS,
  SOCIAL_LINKS,
} from '../data'

const subscribeSchema = z.object({
  email: z.string().min(1, 'Please enter your email').email('Please enter a valid email'),
})

const SOCIAL_ICONS = [FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon]

/**
 * Footer — dark (#1a1a1a) footer with five widgets: Have a Questions?
 * (contact info with orange icons), Recent Blog (mini posts), Quick
 * Links (orange arrow icons), Subscribe Us! (zod-validated email input
 * with a purple button), and Connect With Us (social icons), plus a
 * copyright bar crediting Component Dock.
 */
export function Footer() {
  const year = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | undefined>(undefined)
  const [subscribed, setSubscribed] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = subscribeSchema.safeParse({ email })
    if (!result.success) {
      setError(result.error.flatten().fieldErrors.email?.[0])
      return
    }
    setError(undefined)
    setSubscribed(true)
  }

  const widgetHeading = 'border-b-2 border-primary pb-3 text-lg font-semibold text-white'

  return (
    <footer id="contact-section" className="bg-footer pt-20 text-white/70">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className={widgetHeading}>Have a Questions?</h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                {FOOTER_ADDRESS}
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                {FOOTER_PHONE}
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                {FOOTER_EMAIL}
              </li>
            </ul>
          </div>

          <div>
            <h2 className={widgetHeading}>Recent Blog</h2>
            <ul className="mt-5 space-y-4">
              {MINI_POSTS.map((post) => (
                <li key={post.title} className="flex gap-3">
                  <img
                    src={post.image}
                    alt=""
                    aria-hidden="true"
                    className="h-14 w-14 shrink-0 rounded object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-sm font-medium leading-snug text-white transition-colors hover:text-primary">
                      {post.title}
                    </p>
                    <span className="text-xs text-white/50">{post.date}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={widgetHeading}>Quick Links</h2>
            <ul className="mt-5 space-y-2 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#home-section"
                    className="inline-flex items-center gap-1.5 text-white/70 transition-colors hover:text-primary"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={widgetHeading}>Subscribe Us!</h2>
            {subscribed ? (
              <p role="status" className="mt-5 text-sm font-semibold text-white">
                Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={onSubmit} noValidate className="mt-5">
                <label htmlFor="subscribe-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="subscribe-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter Email"
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-purple"
                />
                <button
                  type="submit"
                  className="mt-3 w-full rounded-lg bg-purple px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple/80"
                >
                  Subscribe
                </button>
              </form>
            )}
            {error && !subscribed && (
              <p role="alert" className="mt-2 text-sm font-semibold text-white">
                {error}
              </p>
            )}

            <h2 className="mb-4 mt-6 border-b-2 border-primary pb-3 text-lg font-semibold text-white">
              Connect With Us
            </h2>
            <div className="flex gap-2">
              {SOCIAL_LINKS.map((social, index) => {
                const Icon = SOCIAL_ICONS[index]!
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-primary hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-white/10 py-6 text-sm text-white/60 md:flex-row">
          <p>
            Copyright © {year} All rights reserved | This template is made with ♥ by {BRAND}
          </p>
          <p>
            More templates at{' '}
            <a
              href={COMPONENT_DOCK_URL}
              className="font-semibold text-white transition-colors hover:text-primary"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
