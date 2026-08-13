import { useState, type FormEvent } from 'react'
import { z } from 'zod'
import { Button } from '@free-react-templates/ui'
import { featureLinks, socialLinks } from '../data'
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from './social-icons'

const emailSchema = z.string().email('Please enter a valid email address.')

const socialIconByLabel = {
  Facebook: FacebookIcon,
  Twitter: TwitterIcon,
  Instagram: InstagramIcon,
  LinkedIn: LinkedInIcon,
} as const

/* Light-gray footer with about text, feature links, a validated subscribe
   form, social icons, and a bottom bar linking to Component Dock
   (reference: .site-footer). */
export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = emailSchema.safeParse(email)
    if (!result.success) {
      setError(result.error.issues[0]!.message)
      return
    }
    setError(null)
    setSubscribed(true)
  }

  return (
    <footer className="bg-fog pt-16 text-gray-700 sm:pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 pb-12 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="mb-4 text-base font-bold text-black">About Us</h2>
            <p className="max-w-sm text-sm leading-relaxed">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-base font-bold text-black">Features</h2>
            <ul className="space-y-2.5 text-sm">
              {featureLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-brand">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-base font-bold text-black">Subscribe to Newsletter</h2>
            {subscribed ? (
              <p role="status" className="text-sm font-medium text-gray-800">
                Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mb-8">
                <div className="flex max-w-sm">
                  <input
                    type="email"
                    aria-label="Enter Email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value)
                      if (error) setError(null)
                    }}
                    className="w-full rounded-l border border-gray-400 bg-transparent px-3 py-2 text-sm text-gray-800 placeholder:text-gray-500 focus:border-brand focus:outline-none"
                  />
                  <Button type="submit" className="rounded-l-none">
                    Subscribe
                  </Button>
                </div>
                {error && <p className="mt-2 text-xs font-medium text-red-700">{error}</p>}
              </form>
            )}

            <h2 className="mb-4 text-base font-bold text-black">Follow Us</h2>
            <ul className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = socialIconByLabel[link.label as keyof typeof socialIconByLabel]
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      aria-label={link.label}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/70 text-gray-800 transition-colors hover:bg-brand hover:text-white"
                    >
                      <Icon />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-gray-400/40 py-6 text-xs sm:flex-row">
          <p className="text-gray-600">
            Copyright &copy; 2026 All rights reserved | This template is made with{' '}
            <span aria-hidden="true">&hearts;</span> by{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-medium text-gray-800 transition-colors hover:text-brand"
            >
              Component Dock
            </a>
          </p>
          <nav aria-label="Footer" className="flex gap-4 text-gray-600">
            <a href="#home" className="transition-colors hover:text-brand">
              Home
            </a>
            <a href="#work" className="transition-colors hover:text-brand">
              Work
            </a>
            <a href="#services" className="transition-colors hover:text-brand">
              What We Do
            </a>
            <a href="#contact" className="transition-colors hover:text-brand">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
