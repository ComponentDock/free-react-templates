import { useState } from 'react'
import { Heart } from 'lucide-react'
import { z } from 'zod'
import { cn } from '@free-react-templates/ui'
import { contactInfo, newsItems, usefulLinks } from '../data'
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from './social-icons'

const subscribeSchema = z.object({
  email: z.string().min(1, 'Enter a valid email address').email('Enter a valid email address'),
})

type SubscribeErrors = Partial<Record<'email', string>>

const socials = [
  { name: 'Facebook', Icon: FacebookIcon },
  { name: 'Twitter', Icon: TwitterIcon },
  { name: 'Instagram', Icon: InstagramIcon },
  { name: 'LinkedIn', Icon: LinkedinIcon },
]

const widgetTitle = 'mb-10 text-[18px] font-semibold text-white'

function SubscribeForm() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<SubscribeErrors>({})
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const result = subscribeSchema.safeParse({ email })
    if (!result.success) {
      setError(result.error.flatten().fieldErrors as SubscribeErrors)
      return
    }
    setError({})
    setSubscribed(true)
  }

  if (subscribed) {
    return (
      <p role="status" className="mt-12 text-[14px] text-white">
        Thank you — you are now subscribed to our newsletter.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-12">
      <div className="flex">
        <label htmlFor="amity-subscribe-email" className="sr-only">
          Email address
        </label>
        <input
          id="amity-subscribe-email"
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            setError({})
          }}
          aria-invalid={error.email ? true : undefined}
          aria-describedby={error.email ? 'amity-subscribe-error' : undefined}
          className={cn(
            'w-full border border-white bg-white px-4 py-3 text-[12px] text-ink italic placeholder:text-body focus:outline-none',
            error.email && 'border-brand',
          )}
        />
        <button
          type="submit"
          className="w-[68px] shrink-0 bg-brand text-[12px] font-semibold text-white uppercase hover:bg-brand-dark"
        >
          Subscribe
        </button>
      </div>
      {error.email && (
        <p id="amity-subscribe-error" role="alert" className="mt-2 text-[12px] text-brand">
          {error.email}
        </p>
      )}
    </form>
  )
}

export function Footer() {
  return (
    <footer id="contact">
      <div
        className="relative bg-cover bg-center py-24 pb-[90px]"
        style={{ backgroundImage: "url('https://picsum.photos/seed/amity-footer/1920/700')" }}
      >
        <div className="absolute inset-0 bg-[rgba(22,22,22,0.92)]" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div aria-label="About">
            <p className="flex items-center gap-2 text-xl font-bold text-white">
              <Heart className="h-6 w-6 fill-brand text-brand" aria-hidden="true" />
              Amity
            </p>
            <p className="mt-6 text-[14px] leading-[2] text-body">
              A non-profit community bringing education, clean water, and hope to children around
              the world.
            </p>
            <div className="mt-8 flex gap-7">
              {socials.map(({ name, Icon }) => (
                <a
                  key={name}
                  href="#contact"
                  aria-label={name}
                  className="text-white transition-colors hover:text-brand"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Useful Links">
            <h2 className={widgetTitle}>Useful Links</h2>
            <ul className="space-y-3">
              {usefulLinks.map((label) => (
                <li key={label}>
                  <a href="#contact" className="text-[14px] text-body hover:text-brand">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div aria-label="Latest News">
            <h2 className={widgetTitle}>Latest News</h2>
            <ul>
              {newsItems.map((item) => (
                <li key={item.title} className="mb-9">
                  <p className="text-[14px] text-white">{item.title}</p>
                  <p className="mt-1 text-[12px] text-brand">{item.date}</p>
                </li>
              ))}
            </ul>
          </div>

          <div aria-label="Contact">
            <h2 className={widgetTitle}>Contact</h2>
            <p className="text-[14px] text-body">{contactInfo.phone}</p>
            <p className="mt-2 text-[14px] text-body">{contactInfo.email}</p>
            <p className="mt-2 text-[14px] text-body">{contactInfo.address}</p>
            <SubscribeForm />
          </div>
        </div>
      </div>

      <div className="bg-dark py-[30px] text-center text-[12px] text-body">
        <p>
          Copyright © {new Date().getFullYear()} All rights reserved | This template is made with ♥
          by{' '}
          <a
            href="https://www.componentdock.com/"
            className="font-semibold text-white hover:text-brand"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
