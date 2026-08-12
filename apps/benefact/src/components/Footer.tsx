import { useState } from 'react'
import { z } from 'zod'
import { Button, cn } from '@free-react-templates/ui'
import { aboutText, featureLinks, socials } from '../data'
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from './social-icons'

const emailSchema = z.string().email('Enter a valid email address')

const socialIcons: Record<string, React.ReactNode> = {
  Facebook: <FacebookIcon />,
  Twitter: <TwitterIcon />,
  Instagram: <InstagramIcon />,
  Linkedin: <LinkedinIcon />,
}

export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | undefined>(undefined)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const result = emailSchema.safeParse(email)
    if (!result.success) {
      setError(result.error.issues[0]?.message)
      setSubscribed(false)
      return
    }
    setError(undefined)
    setSubscribed(true)
    setEmail('')
  }

  const year = new Date().getFullYear()

  return (
    <footer className="site-footer bg-footer">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 md:grid-cols-12">
        <div className="md:col-span-7">
          <h2 className="text-lg font-bold text-ink">About Us</h2>
          <p className="mt-4 max-w-md font-light text-ink/80">{aboutText}</p>
        </div>
        <div className="md:col-span-4 md:ml-auto">
          <h2 className="text-lg font-bold text-ink">Features</h2>
          <ul className="mt-4 space-y-2">
            {featureLinks.map((label) => (
              <li key={label}>
                <a
                  href={`#${label.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sm font-light text-ink/60 transition-colors hover:text-primary"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-14">
        <h2 className="text-lg font-bold text-ink">Subscribe to Newsletter</h2>
        <form onSubmit={handleSubmit} noValidate className="mt-4 flex max-w-md">
          <label htmlFor="subscribe-email" className="sr-only">
            Email address
          </label>
          <input
            id="subscribe-email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setError(undefined)
            }}
            placeholder="Email address"
            className={cn(
              'w-full rounded-none border border-secondary px-3 py-2 font-light text-ink focus:border-primary focus:outline-none',
              error && 'border-danger',
            )}
          />
          <Button type="submit" className="rounded-none bg-primary text-white hover:bg-primary-700">
            Subscribe
          </Button>
        </form>
        {error && <p className="mt-2 text-sm text-danger">{error}</p>}
        {subscribed && <p className="mt-2 text-sm text-ink">Subscribed successfully!</p>}
        <h2 className="mt-8 text-lg font-bold text-ink">Follow Us</h2>
        <div className="mt-4 flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              aria-label={social.name}
              className="text-ink/70 transition-colors hover:text-primary"
            >
              {socialIcons[social.name]}
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 py-4">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 text-sm font-light text-ink/70">
          <p>Copyright © {year} All rights reserved</p>
          <p>
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-medium text-ink transition-colors hover:text-primary"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
