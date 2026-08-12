import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

const links = ['Home', 'About', 'Services', 'Departments', 'Contact'] as const
const services = ['Neurology', 'Dentist', 'Ophthalmology', 'Cardiology', 'Surgery'] as const

const recentPosts: ReadonlyArray<{ title: string; date: string; meta: string }> = [
  {
    title: 'Even the all-powerful Pointing has no control about',
    date: 'Sept. 20, 2019',
    meta: 'Admin 19',
  },
  {
    title: 'Scary Thing That You Don\u2019t Get Enough Sleep',
    date: 'Sept. 18, 2019',
    meta: 'Admin 5',
  },
]

function WidgetHeading({ children }: { children: string }) {
  return <h2 className="mb-6 text-xl font-normal text-white">{children}</h2>
}

/** Blue footer with four widgets (About + Questions, Links + Services,
    Recent Blog, Opening Hours + Subscribe) and a copyright bar. */
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
    <footer id="contact" className="bg-primary text-white/70">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 text-sm sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <h2 className="text-2xl font-medium text-white">Enamel</h2>
          <p className="mt-4 leading-relaxed">
            Enamel Dental Clinic — gentle, modern dentistry for the whole family, in the heart of
            the city since 1998.
          </p>
          <h3 className="mt-8 text-xl font-normal text-white">Have a Questions?</h3>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white" aria-hidden="true" />
              <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-white" aria-hidden="true" />
              <span>+2 392 3929 210</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white" aria-hidden="true" />
              <a href="mailto:info@yourdomain.com" className="transition-colors hover:text-white">
                info@yourdomain.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <WidgetHeading>Links</WidgetHeading>
          <ul className="space-y-2">
            {links.map((item) => (
              <li key={item}>
                <a href="#home" className="transition-colors hover:text-white">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <WidgetHeading>Services</WidgetHeading>
          <ul className="space-y-2">
            {services.map((item) => (
              <li key={item}>
                <a href="#services" className="transition-colors hover:text-white">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <WidgetHeading>Recent Blog</WidgetHeading>
          <ul className="space-y-6">
            {recentPosts.map((post) => (
              <li key={post.title} className="flex items-start gap-3">
                <img
                  src="https://picsum.photos/seed/enamel-thumb/80/80"
                  alt=""
                  className="h-16 w-16 shrink-0 rounded object-cover"
                />
                <div>
                  <a
                    href="#blog"
                    className="font-medium leading-snug text-white transition-colors hover:text-white/80"
                  >
                    {post.title}
                  </a>
                  <p className="mt-1 text-xs text-white/70">{post.date}</p>
                  <p className="text-xs text-white/70">{post.meta}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <WidgetHeading>Opening Hours</WidgetHeading>
          <p className="text-base font-medium text-white">We are open 24/7</p>
          <WidgetHeading>Subscribe Us!</WidgetHeading>
          {subscribed ? (
            <p role="status" className="mt-4 rounded bg-white/10 px-4 py-3 text-white">
              Thanks for subscribing — see you at your next visit!
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
                placeholder="Enter email address"
                aria-invalid={Boolean(error)}
                className="h-12 w-full min-w-0 flex-1 rounded-l-[2px] bg-white/10 px-4 text-white placeholder:text-white/70 focus:bg-white/15 focus:outline-none"
              />
              <Button
                type="submit"
                className="h-12 rounded-r-[2px] bg-lime px-5 text-white hover:bg-lime-hover"
              >
                Subscribe
              </Button>
            </form>
          )}
          {error ? (
            <p role="alert" className="mt-3 text-sm text-white">
              {error}
            </p>
          ) : null}
        </div>
      </div>

      <div className="border-t border-white/20">
        <p className="mx-auto max-w-7xl px-4 py-6 text-center text-xs sm:px-6 lg:px-8">
          Copyright © {new Date().getFullYear()} All rights reserved | This template is made with{' '}
          <span aria-hidden="true">&hearts;</span> by Enamel — More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-white underline underline-offset-2 transition-opacity hover:opacity-80"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
