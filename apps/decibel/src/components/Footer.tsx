import { useState, type FormEvent } from 'react'
import { Play } from 'lucide-react'
import { Button } from '@free-react-templates/ui'
import { BrandIcon, type BrandName } from './BrandIcon'

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

const navigationLists = [
  ['Home', 'DJs', 'News', 'Top 20 of the week'],
  ['About Us', 'Privacy Policy', 'Contact Us', 'Membership'],
] as const

const followSocials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'Twitter', name: 'twitter' },
  { label: 'Instagram', name: 'instagram' },
  { label: 'LinkedIn', name: 'linkedin' },
]

function FooterHeading({ children }: { children: string }) {
  return (
    <h3 className="font-display text-[1.3rem] uppercase tracking-[0.1em] text-white">
      <span aria-hidden="true" className="mb-2 block h-[2px] w-10 bg-primary" />
      {children}
    </h3>
  )
}

export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!EMAIL_PATTERN.test(email.trim())) {
      setError('A valid email address is required.')
      return
    }
    setError('')
    setSubscribed(true)
  }

  return (
    <footer id="about" className="bg-night">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
        <div>
          <FooterHeading>About Decibel</FooterHeading>
          <p className="mt-4 leading-relaxed text-ash">
            Decibel is an independent online radio station playing the best in electronic music —
            from classic hits to brand new mixes, live sessions and artist interviews, twenty-four
            hours a day.
          </p>
          <FooterHeading>Subscribe</FooterHeading>
          {subscribed ? (
            <p
              role="status"
              className="mt-4 rounded border border-primary/40 px-4 py-3 text-white/80"
            >
              Thanks for subscribing — see you on air!
            </p>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="mt-4 flex">
              <label htmlFor="subscribe-email" className="sr-only">
                Email address
              </label>
              <input
                id="subscribe-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                aria-invalid={Boolean(error)}
                className="h-[60px] w-full min-w-0 flex-1 border border-white/30 bg-transparent px-4 font-light text-white placeholder:text-white/40 focus:border-primary focus:outline-none"
              />
              <Button type="submit" className="h-[60px] rounded-none px-5">
                Subscribe
              </Button>
            </form>
          )}
          {error ? (
            <p role="alert" className="mt-3 text-sm text-primary">
              {error}
            </p>
          ) : null}
        </div>

        <div>
          <FooterHeading>Navigations</FooterHeading>
          <div className="mt-4 grid grid-cols-2 gap-6">
            {navigationLists.map((list) => (
              <ul key={list[0]} className="space-y-2">
                {list.map((item) => (
                  <li key={item}>
                    <a href="#about" className="text-ash transition-colors hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <FooterHeading>Follow Us</FooterHeading>
          <ul aria-label="Follow Decibel" className="mt-4 flex gap-4">
            {followSocials.map((social) => (
              <li key={social.label}>
                <a
                  href="#about"
                  aria-label={social.label}
                  className="text-white/60 transition-colors hover:text-primary"
                >
                  <BrandIcon name={social.name} className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FooterHeading>Watch Live Streaming</FooterHeading>
          <div className="relative mt-4 max-w-sm">
            <img
              src="https://picsum.photos/seed/decibel-live/600/400"
              alt="Live streaming studio"
              className="w-full rounded-lg object-cover"
            />
            <a
              href="https://vimeo.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Watch live streaming"
              className="absolute inset-0 m-auto flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white text-night transition-opacity hover:opacity-80"
            >
              <Play className="h-5 w-5" fill="currentColor" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-8 text-center text-sm text-ash sm:px-6 lg:px-8">
          Copyright © {new Date().getFullYear()} All rights reserved | This template is made with{' '}
          <span aria-hidden="true">&hearts;</span> by Decibel — More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-white transition-colors hover:text-primary"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
